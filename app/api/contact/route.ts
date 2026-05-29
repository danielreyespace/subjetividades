import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const FIDELIDAPP_API_URL = process.env.FIDELIDAPP_API_URL || 'https://fidelidapp.cl';
const FIDELIDAPP_MCP_API_KEY = process.env.FIDELIDAPP_MCP_API_KEY || '';
const FIDELIDAPP_SLUG = process.env.FIDELIDAPP_SLUG || 'daniel-reyes';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const CONTACT_NOTIFY_TO = (
  process.env.CONTACT_NOTIFY_TO || 'danielreyespace@gmail.com,alvaro.villena@gmail.com'
)
  .split(',')
  .map((email) => email.trim())
  .filter(Boolean);
const CONTACT_NOTIFY_FROM =
  process.env.CONTACT_NOTIFY_FROM || 'SUBJETIVIDADES <onboarding@resend.dev>';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  consultationType?: string;
  message?: string;
};

const consultationLabels: Record<string, string> = {
  individual: 'Terapia individual',
  pareja: 'Terapia de pareja',
  sexual: 'Terapia sexual',
  'no-seguro': 'No estoy seguro/a',
};

function getConsultationLabel(value?: string) {
  return value ? consultationLabels[value] || value : 'No especificado';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildNotificationEmail({ name, email, phone, consultationType, message }: ContactPayload) {
  const rows = [
    ['Nombre', name],
    ['Email', email],
    ['Telefono', phone || 'No informado'],
    ['Tipo de consulta', getConsultationLabel(consultationType)],
    ['Mensaje', message || 'Sin mensaje'],
  ];

  const text = [
    'Nuevo contacto desde subjetividades.cl',
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join('\n');

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#334155;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a;">
      <h1 style="font-size:20px;margin:0 0 12px;">Nuevo contacto desde subjetividades.cl</h1>
      <table style="border-collapse:collapse;width:100%;max-width:640px;border-top:1px solid #e2e8f0;">
        ${htmlRows}
      </table>
    </div>`;

  return { text, html };
}

async function sendContactNotification(payload: ContactPayload) {
  if (!RESEND_API_KEY || CONTACT_NOTIFY_TO.length === 0) {
    return { skipped: true };
  }

  const { text, html } = buildNotificationEmail(payload);
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: CONTACT_NOTIFY_FROM,
      to: CONTACT_NOTIFY_TO,
      subject: `Nuevo contacto: ${payload.name}`,
      text,
      html,
      reply_to: payload.email,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.message || `Resend error ${response.status}`);
  }

  return data;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, consultationType, message } = (await req.json()) as ContactPayload;

    if (!name || !email) {
      return NextResponse.json({ error: 'Nombre y email son requeridos' }, { status: 400 });
    }

    const notification = sendContactNotification({ name, email, phone, consultationType, message })
      .then((data) => ({ ok: true, data }))
      .catch((error) => {
        console.error('[contact] Resend error:', error);
        return { ok: false };
      });

    const response = await fetch(`${FIDELIDAPP_API_URL}/api/mcp/clients/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MCP-API-Key': FIDELIDAPP_MCP_API_KEY,
      },
      body: JSON.stringify({
        slug: FIDELIDAPP_SLUG,
        clientData: {
          name,
          email,
          ...(phone && { phoneNumber: phone }),
          ...(consultationType && { notes: `Tipo consulta: ${consultationType}${message ? ` | ${message}` : ''}` }),
        },
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error('[contact] Fidelidapp error:', response.status, data);
      // Don't block the user — WhatsApp redirect still happens client-side
      return NextResponse.json({ ok: false, fidelidapp: data, notification: await notification }, { status: 200 });
    }

    return NextResponse.json({ ok: true, fidelidapp: data, notification: await notification }, { status: 200 });
  } catch (err) {
    console.error('[contact] Error:', err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
