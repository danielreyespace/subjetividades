'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

// ⚠️ CONFIG GOOGLE ADS: pegar acá el "send_to" de la conversión de reserva.
// Lo sacás en Google Ads → Objetivos → Conversiones → (tu acción de reserva) →
// "Configurar etiqueta" → es del tipo 'AW-17550627973/XXXXXXXXXXXXXX'.
// Mientras esté el placeholder, NO se dispara la conversión (sólo se loguea).
const CONVERSION_SEND_TO = 'AW-17550627973/REEMPLAZAR_LABEL';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function ThankYouInner() {
  const params = useSearchParams();
  const service = params.get('service');
  const value = params.get('value');

  useEffect(() => {
    // Disparar conversión de Google Ads al cargar la página (reserva confirmada).
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    if (CONVERSION_SEND_TO.includes('REEMPLAZAR_LABEL')) {
      console.warn('[thankyou] Conversión NO disparada: falta configurar CONVERSION_SEND_TO');
      return;
    }
    window.gtag('event', 'conversion', {
      send_to: CONVERSION_SEND_TO,
      value: value ? Number(value) : 1.0,
      currency: 'CLP',
      transaction_id: params.get('appointmentId') || undefined,
    });
  }, [params, value]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-[18px] border border-slate-100 shadow-[0_4px_24px_rgba(26,35,50,0.08)] p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-9 h-9 text-teal-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">¡Reserva confirmada!</h1>
        <p className="text-slate-500 leading-relaxed">
          Recibimos tu solicitud{service ? <> de <span className="font-semibold text-slate-700">{service}</span></> : null}.
          Te enviamos un correo con los detalles y el enlace de la videollamada.
        </p>
        <p className="text-sm text-slate-400 mt-4">
          Revisá tu bandeja de entrada (y la carpeta de spam). Si no lo ves, escribinos desde el sitio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center bg-teal-600 text-white text-sm font-semibold px-6 py-2.5 rounded-[9px] hover:bg-teal-700 transition-colors no-underline"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYouInner />
    </Suspense>
  );
}
