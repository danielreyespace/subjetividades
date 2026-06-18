import type { Metadata } from 'next';
import { ArrowRight, Calendar, MapPin, Monitor } from 'lucide-react';
import { DanielReyes_Footer, DanielReyes_WhatsAppFloat } from '@/components/sections';

const BASE_URL = 'https://subjetividades.cl';

export const metadata: Metadata = {
  title: 'Terapia de Pareja en Santiago y online | SUBJETIVIDADES',
  description:
    'Terapia de pareja con psicólogos clínicos en Ñuñoa, Santiago, y por videollamada en todo Chile. Comunicación, crisis, infidelidad y reconexión de la relación.',
  alternates: { canonical: `${BASE_URL}/terapia-de-pareja` },
  openGraph: {
    title: 'Terapia de Pareja en Santiago y online | SUBJETIVIDADES',
    description:
      'Terapia de pareja con psicólogos clínicos en Ñuñoa, Santiago, y online para todo Chile.',
    url: `${BASE_URL}/terapia-de-pareja`,
    siteName: 'SUBJETIVIDADES',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/daniel-reyes/assets/service-couples.png`,
        width: 1200,
        height: 630,
        alt: 'Terapia de pareja en SUBJETIVIDADES, Ñuñoa, Santiago',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const faqs = [
  {
    q: '¿Es necesario que asistan ambos integrantes?',
    a: 'Sí. La terapia de pareja requiere la participación de ambos integrantes; un proceso con una sola persona corresponde a terapia individual, que también ofrecemos.',
  },
  {
    q: '¿Cuántas sesiones dura?',
    a: 'Depende de los objetivos. Un proceso focalizado puede resolverse en algunos meses; otros, más complejos, requieren más tiempo. La estimación se define en la evaluación inicial.',
  },
  {
    q: '¿La modalidad online es efectiva?',
    a: 'Sí. La evidencia muestra resultados comparables a la atención presencial, y permite atender a parejas que están en distintas ciudades.',
  },
  {
    q: '¿Tiene cobertura de Isapre?',
    a: 'Se emite boleta de honorarios para solicitar reembolso en Isapre y en seguros complementarios de salud.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Terapia de pareja', item: `${BASE_URL}/terapia-de-pareja` },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Terapia de pareja',
      name: 'Terapia de pareja en Santiago',
      url: `${BASE_URL}/terapia-de-pareja`,
      inLanguage: 'es-CL',
      areaServed: [
        { '@type': 'City', name: 'Santiago' },
        { '@type': 'Country', name: 'Chile' },
      ],
      provider: {
        '@type': 'MedicalBusiness',
        name: 'SUBJETIVIDADES — Centro de Psicología Clínica',
        url: BASE_URL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Alonso de Ercilla 2959',
          addressLocality: 'Ñuñoa',
          addressRegion: 'Región Metropolitana',
          addressCountry: 'CL',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

function PageNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-sm">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between h-[72px] px-6">
        <a href="/" className="flex flex-col leading-tight no-underline">
          <span className="text-[15px] font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Courier Prime', Courier, monospace" }}>
            SUBJETIVIDADES
          </span>
          <span className="text-[10px] font-medium text-teal-600 tracking-wider uppercase">Psicología Clínica</span>
        </a>
        <div className="flex items-center gap-5">
          <a className="hidden text-sm font-medium text-slate-500 no-underline hover:text-slate-900 transition-colors sm:inline" href="/blog">
            Blog
          </a>
          <a className="text-sm font-semibold text-white bg-teal-600 px-4 py-2 rounded-lg no-underline hover:bg-teal-700 transition-colors" href="/#equipo">
            Agendar
          </a>
        </div>
      </div>
    </nav>
  );
}

const motivos = [
  'Conflictos de comunicación que se repiten sin encontrar resolución.',
  'Crisis, distanciamiento afectivo o pérdida de intimidad.',
  'Reconstrucción de la confianza tras una infidelidad.',
  'Transiciones vitales: convivencia, matrimonio, llegada de hijos.',
  'La decisión, consciente y respetuosa, de continuar o no en la relación.',
];

export default function TerapiaDeParejaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen bg-white text-slate-700" style={{ fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <PageNav />
        <main className="pt-[72px]">
          {/* Hero */}
          <header className="bg-slate-900 px-6 py-20 text-white">
            <div className="mx-auto max-w-[820px]">
              <nav className="mb-5 text-[13px] text-slate-400">
                <a href="/" className="no-underline text-slate-400 hover:text-teal-400 transition-colors">Inicio</a>
                {' / '}
                <span className="text-slate-300">Terapia de pareja</span>
              </nav>
              <div className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-teal-400">Servicio</div>
              <h1 className="text-[clamp(30px,5vw,48px)] font-bold leading-tight tracking-tight">
                Terapia de pareja en Santiago
              </h1>
              <p className="mt-5 max-w-[620px] text-base leading-relaxed text-slate-300">
                Un proceso clínico orientado a comprender y modificar los patrones de interacción que sostienen el malestar en la relación. Presencial en Ñuñoa y por videollamada en todo Chile.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a href="/#equipo" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700">
                  <Calendar className="h-[18px] w-[18px]" />
                  Agendar primera consulta
                </a>
                <div className="flex items-center gap-4 text-[13px] text-slate-400">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-teal-400" /> Presencial en Ñuñoa</span>
                  <span className="inline-flex items-center gap-1.5"><Monitor className="h-4 w-4 text-teal-400" /> Online en todo Chile</span>
                </div>
              </div>
            </div>
          </header>

          {/* Cuándo consultar */}
          <section className="px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-6">Cuándo consultar</h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                La terapia de pareja aborda dificultades frecuentes de la vida en común. Entre los motivos de consulta más habituales:
              </p>
              <ul className="space-y-3">
                {motivos.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-[16px] leading-relaxed text-slate-700">
                    <span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* En qué consiste */}
          <section className="bg-[#f7f8fa] px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-6">En qué consiste</h2>
              <p className="text-[16px] leading-relaxed text-slate-600 mb-5">
                La terapia de pareja ofrece un espacio de comunicación, observación y toma de conciencia conjunta. A través del diálogo guiado por el terapeuta, la pareja identifica los problemas —propios y de sus entornos familiares—, negocia límites y desactiva los patrones de conducta que dañan el vínculo e impiden la complicidad y la intimidad. Sobre esa base, es posible adoptar acuerdos que ayuden a superar los desencuentros, fortalecer la convivencia y proyectar el futuro en común.
              </p>
              <p className="text-[16px] leading-relaxed text-slate-600 mb-5">
                Es psicoterapia conducida por un psicólogo clínico, en la que participan ambos integrantes. Comienza con una evaluación de la historia y los patrones de la relación, define objetivos compartidos y combina el trabajo en sesión con ejercicios entre sesiones.
              </p>
              <a href="/blog/terapia-de-pareja-como-funciona" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 no-underline hover:text-teal-800">
                Cómo funciona y qué esperar: la guía completa
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* Modalidad y valor */}
          <section className="px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-6">Modalidad y valor</h2>
              <ul className="space-y-3 text-[16px] leading-relaxed text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500" /><span><strong>Presencial</strong> en Ñuñoa, Santiago, o <strong>por videollamada</strong> para todo Chile, con resultados comparables.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500" /><span><strong>Valor:</strong> $60.000–$70.000 por sesión.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500" /><span>Se emite <strong>boleta de honorarios</strong> para solicitar reembolso en Isapre y seguro complementario. <a href="/blog/reembolso-psicologo-isapre-fonasa" className="text-teal-700 underline hover:text-teal-800">Cómo funciona el reembolso</a>.</span></li>
              </ul>
            </div>
          </section>

          {/* Quién atiende */}
          <section className="bg-[#f7f8fa] px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-4">Quién atiende</h2>
              <p className="text-[16px] leading-relaxed text-slate-600 mb-6">
                El equipo clínico de SUBJETIVIDADES atiende terapia de pareja: Daniel Reyes Pace, Fernando Bravo Matheu y Allison Rowe Carrasco.
              </p>
              <a href="/#equipo" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700">
                Agendar con un profesional
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-8">Preguntas frecuentes</h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">{f.q}</h3>
                    <p className="text-[15px] leading-relaxed text-slate-500">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA cierre */}
          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[820px]">
              <div className="rounded-[14px] bg-slate-900 p-8 text-center">
                <h2 className="text-xl font-bold text-white mb-2">Atención profesional para tu relación</h2>
                <p className="text-slate-400 text-sm mb-5">Primera consulta presencial en Ñuñoa, Santiago, u online para todo Chile.</p>
                <a href="/#equipo" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700">
                  <Calendar className="h-[18px] w-[18px]" />
                  Agendar primera consulta
                </a>
              </div>
            </div>
          </section>
        </main>
        <DanielReyes_Footer />
        <DanielReyes_WhatsAppFloat />
      </div>
    </>
  );
}
