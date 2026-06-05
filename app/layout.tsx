import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'SUBJETIVIDADES — Psicoterapia basada en evidencia | Santiago, Chile',
  description: 'Centro de psicología clínica en Ñuñoa, Santiago. Terapia individual, de pareja y sexual con más de 20 años de experiencia. Atención presencial y online.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17550627973" />
        <Script id="google-ads-tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17550627973');

            window.gtag_report_conversion = function(send_to, url) {
              var callback = function() {
                if (typeof(url) !== 'undefined') window.location = url;
              };
              gtag('event', 'conversion', {
                'send_to': send_to,
                'value': 1.0,
                'currency': 'CLP',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
