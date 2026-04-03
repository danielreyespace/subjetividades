import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SUBJETIVIDADES — Psicoterapia basada en evidencia | Santiago, Chile',
  description: 'Centro de psicología clínica en Ñuñoa, Santiago. Terapia individual, de pareja y sexual con más de 20 años de experiencia. Atención presencial y online.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
