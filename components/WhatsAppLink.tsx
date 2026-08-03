import type { ReactNode } from 'react';

/**
 * Enlace a WhatsApp con mensaje pre-escrito. Cada página de servicio pasa su
 * propia URL de wa.me (el texto del mensaje distingue de qué servicio viene la
 * persona). Debe ser un <a href> real —no window.open ni handler de JS— para
 * que el evento de clic saliente a wa.me se dispare en GA4.
 */
export default function WhatsAppLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={className}
    >
      {children}
    </a>
  );
}
