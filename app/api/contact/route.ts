import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const FIDELIDAPP_API_URL = process.env.FIDELIDAPP_API_URL || 'https://fidelidapp.cl';
const FIDELIDAPP_MCP_API_KEY = process.env.FIDELIDAPP_MCP_API_KEY || '';
const FIDELIDAPP_SLUG = process.env.FIDELIDAPP_SLUG || 'daniel-reyes';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, consultationType, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Nombre y email son requeridos' }, { status: 400 });
    }

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
      return NextResponse.json({ ok: false, fidelidapp: data }, { status: 200 });
    }

    return NextResponse.json({ ok: true, fidelidapp: data }, { status: 200 });
  } catch (err) {
    console.error('[contact] Error:', err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
