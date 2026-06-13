import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const FIDELIDAPP_API_URL = process.env.FIDELIDAPP_API_URL || 'https://fidelidapp.cl';
const FIDELIDAPP_MCP_API_KEY = process.env.FIDELIDAPP_MCP_API_KEY || '';
const FIDELIDAPP_SLUG = process.env.FIDELIDAPP_SLUG || 'daniel-reyes';
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || '';
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || '';
const CONTACT_NOTIFY_TO = (process.env.CONTACT_NOTIFY_TO || 'danielreyespace@gmail.com,alvaro.villena@gmail.com')
  .split(',')
  .map((email) => email.trim())
  .filter(Boolean);

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

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  const firstName = parts.shift() || fullName;
  const lastName = parts.join(' ');
  return { firstName, lastName };
}

async function sendContactNotification(payload: ContactPayload) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    return { skipped: true };
  }

  const { firstName, lastName } = splitName(payload.name);
  const consultationType = getConsultationLabel(payload.consultationType);
  const submittedAt = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });

  const results = await Promise.all(
    CONTACT_NOTIFY_TO.map(async (toEmail) => {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          ...(EMAILJS_PRIVATE_KEY && { accessToken: EMAILJS_PRIVATE_KEY }),
          template_params: {
            to_email: toEmail,
            subject: `Nuevo contacto desde subjetividades.cl: ${payload.name}`,
            firstName,
            lastName,
            email: payload.email,
            phone: payload.phone || 'No informado',
            company: 'SUBJETIVIDADES',
            role: consultationType,
            services: consultationType,
            from_name: payload.name,
            from_email: payload.email,
            reply_to: payload.email,
            consultation_type: consultationType,
            message: payload.message || 'Sin mensaje',
            submitted_at: submittedAt,
          },
        }),
      });

      const text = await response.text();

      if (!response.ok) {
        throw new Error(text || `EmailJS error ${response.status}`);
      }

      return { toEmail, status: response.status, text };
    })
  );

  return { sent: results.length, results };
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
        console.error('[contact] EmailJS error:', error);
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
      // Don't block the user — the email notification still goes out
      return NextResponse.json({ ok: false, fidelidapp: data, notification: await notification }, { status: 200 });
    }

    return NextResponse.json({ ok: true, fidelidapp: data, notification: await notification }, { status: 200 });
  } catch (err) {
    console.error('[contact] Error:', err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
