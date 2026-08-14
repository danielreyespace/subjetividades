import type { ReactNode } from 'react';
import { waHref, WA_MESSAGES } from '@/lib/whatsapp';

// ⚠️ PRUEBA "solicitud de hora" (modelo tipo entrevinculos.cl):
// El calendario público de FidelidApp se retiró como CTA. Este componente ahora
// enruta a WhatsApp (solicitud de hora atendida por una persona). El calendario
// NO se elimina: el enlace sigue vivo abajo para revertir en una línea cuando
// termine la prueba (volver a usar SCHEDULING_URL como href del <a>).
export const SCHEDULING_URL = 'https://www.fidelidapp.cl/agendas/6a3c1f36400042462f435276';

/**
 * CTA histórico de "Agendar". Durante la prueba de solicitud de hora enruta a
 * WhatsApp con el mensaje genérico del home. Es un <a href="https://wa.me/...">
 * real (sin JS que intercepte el clic), por lo que la conversión de GA4 sigue
 * disparándose. Las páginas principales usan WhatsAppLink directamente con su
 * mensaje propio; este wrapper cubre blog y prensa.
 */
export default function SchedulingLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={waHref(WA_MESSAGES.home)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicita tu hora por WhatsApp"
      className={className}
    >
      {children}
    </a>
  );
}
