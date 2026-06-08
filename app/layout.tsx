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
        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-THRLHPKL');
          `}
        </Script>
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
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-THRLHPKL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
