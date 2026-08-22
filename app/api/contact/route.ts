import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// Envío del formulario de contacto por email vía Resend.
// Solo requiere UNA variable de entorno: RESEND_API_KEY.
// Sin dominio verificado, Resend envía desde onboarding@resend.dev al correo
// de la cuenta (danielreyespace@gmail.com). Cuando se verifique el dominio,
// se puede cambiar CONTACT_FROM a algo como "Subjetividades <contacto@subjetividades.cl>".
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const CONTACT_FROM = process.env.CONTACT_FROM || 'Subjetividades <onboarding@resend.dev>';
const CONTACT_NOTIFY_TO = (process.env.CONTACT_NOTIFY_TO || 'danielreyespace@gmail.com')
  .split(',')
  .map((e) => e.trim())
  .filter(Boolean);

type ContactPayload = {
  name: string;
  email?: string;
  phone?: string;
  consultationType?: string;
  message?: string;
};

const consultationLabels: Record<string, string> = {
  individual: 'Terapia individual',
  pareja: 'Terapia de pareja',
  sexual: 'Terapia sexual',
  adolescentes: 'Terapia para adolescentes',
  'no-seguro': 'No estoy seguro/a',
};

function label(value?: string) {
  return value ? consultationLabels[value] || value : 'No especificado';
}

function esc(s: string) {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, consultationType, message } = (await req.json()) as ContactPayload;

    if (!name || (!email && !phone)) {
      return NextResponse.json({ error: 'Falta nombre y una vía de contacto' }, { status: 400 });
    }
    if (!RESEND_API_KEY) {
      console.error('[contact] RESEND_API_KEY no configurada');
      return NextResponse.json({ ok: false }, { status: 200 });
    }

    const tipo = label(consultationType);
    const submittedAt = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });

    const rows = [
      ['Nombre', name],
      ['Email', email || '—'],
      ['Teléfono', phone || '—'],
      ['Tipo de consulta', tipo],
      ['Mensaje', message || '—'],
      ['Fecha', submittedAt],
    ]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;font-weight:600;color:#111;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 12px;color:#333">${esc(String(v))}</td></tr>`
      )
      .join('');

    const html = `<div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:560px">
      <h2 style="color:#0E6B60;margin:0 0 4px">Nuevo contacto desde subjetividades.cl</h2>
      <p style="color:#666;margin:0 0 16px;font-size:14px">Formulario de contacto</p>
      <table style="border-collapse:collapse;border:1px solid #e5e5e5;border-radius:6px">${rows}</table>
    </div>`;

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: CONTACT_NOTIFY_TO,
        ...(email && { reply_to: email }),
        subject: `Nuevo contacto: ${name}${consultationType ? ` (${tipo})` : ''}`,
        html,
      }),
    });

    if (!r.ok) {
      const t = await r.text().catch(() => '');
      console.error('[contact] Resend error', r.status, t);
      return NextResponse.json({ ok: false }, { status: 200 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('[contact] Error:', err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
