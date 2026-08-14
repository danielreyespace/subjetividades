import type { Metadata } from 'next';

// La página de gracias no debe indexarse (contenido transaccional post-reserva).
// page.tsx es un client component y no puede exportar metadata, por eso el
// noindex vive en este layout de servidor.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
