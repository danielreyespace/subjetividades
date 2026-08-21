import type { Metadata } from 'next';
import Script from 'next/script';
import { Bricolage_Grotesque, Instrument_Serif } from 'next/font/google';
import './globals.css';

// Tipografías del rediseño. Bricolage para títulos/marca; Instrument Serif
// (itálica) para citas editoriales. Se exponen como variables CSS y se usan
// desde globals.css (scope .sj) y componentes.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-iserif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SUBJETIVIDADES — Psicoterapia basada en evidencia | Santiago, Chile',
  description: 'Centro de psicología clínica en Ñuñoa, Santiago. Terapia individual, de pareja y sexual con más de 20 años de experiencia. Atención presencial y online.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${instrumentSerif.variable}`}>
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
