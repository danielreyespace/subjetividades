# Daniel Reyes — Sitio Institucional

Sitio para Dr. Daniel Reyes Pace, Centro Psicología Clínica.

## Tech Stack
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS + Framer Motion (animaciones)
- Integración Fidelidapp (leads)
- Google Analytics 4 + GTM

## Setup

```bash
npm install
npm run dev
```

Dev server: http://localhost:3001

## Rutas Principales
- `/clients/daniel-reyes` — Página principal

## Entorno
Copy `.env.example` → `.env.local` y completa con valores reales.

**Requeridos:**
- `NEXT_PUBLIC_FIDELIDAPP_ACCOUNT_ID` (Daniel's account in Fidelidapp)
- `NEXT_PUBLIC_GA4_ID` (Google Analytics property)
- `NEXT_PUBLIC_CALENDLY_URL` (Daniel's Calendly link)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` (Contact number)

## Deploy
- **Staging:** Railway preview
- **Production:** Cloudflare Pages

```bash
npm run build
npm run start
```

## Docs
- `public/daniel-reyes/docs/design-system.md` — Paleta de colores, tipografía, spacing
- `public/daniel-reyes/docs/testimonios-psicologiaclinicachile.md` — Testimonios source
