'use client';

import type { ReactNode } from 'react';
import { trackSchedulingClick } from '@/lib/ga4';

export const SCHEDULING_URL = 'https://www.fidelidapp.cl/agendas/6a3c1f36400042462f435276';

/**
 * Link to the shared Fidelidapp scheduling page. Every "Agendar" CTA on the
 * site should use this component so the click is tracked as a conversion.
 */
export default function SchedulingLink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={SCHEDULING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackSchedulingClick(location)}
    >
      {children}
    </a>
  );
}
