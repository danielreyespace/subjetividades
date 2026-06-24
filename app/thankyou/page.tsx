'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

// ⚠️ CONFIG GOOGLE ADS: pegar acá el "send_to" de la conversión de reserva.
// Google Ads → Objetivos → Conversiones → (acción de reserva) → "Configurar
// etiqueta" → formato 'AW-17550627973/XXXXXXXXXXXXXX'. Mientras esté el
// placeholder, NO se dispara la conversión (sólo se loguea).
const CONVERSION_SEND_TO = 'AW-17550627973/REEMPLAZAR_LABEL';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function ThankYouInner() {
  const params = useSearchParams();
  const value = params.get('value');

  useEffect(() => {
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
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16">
      {/* Fondo: misma imagen del hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/daniel-reyes/photos/waiting-room.webp"
          alt="Sala de espera del centro de psicología clínica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,35,50,0.78)] via-[rgba(26,35,50,0.72)] to-[rgba(26,35,50,0.85)]" />
      </div>

      {/* Tarjeta */}
      <div className="relative z-10 max-w-md w-full bg-white/[0.97] backdrop-blur-lg rounded-[20px] border border-white/20 shadow-[0_12px_48px_rgba(15,23,42,0.35)] p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-9 h-9 text-teal-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">¡Reserva agendada!</h1>
        <p className="text-slate-600 leading-relaxed">
          Te contactaremos a la brevedad para confirmar tu reserva.
        </p>
        <p className="text-slate-500 leading-relaxed mt-4">
          Gracias por confiar en <span className="font-semibold text-slate-700">Subjetividades</span>.
          Dar este paso es importante, y nos alegra acompañarte en el camino.
        </p>
        <p className="text-sm text-slate-400 mt-5">
          Revisa tu correo en los próximos minutos (incluida la carpeta de spam). Si tienes dudas, puedes escribirnos desde el sitio.
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
