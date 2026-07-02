import type { ReactNode } from 'react';

export const SCHEDULING_URL = 'https://www.fidelidapp.cl/agendas/6a3c1f36400042462f435276';

/**
 * Link to the shared Fidelidapp scheduling page. Every "Agendar" CTA on the
 * site should use this component so the URL lives in a single place.
 */
export default function SchedulingLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
