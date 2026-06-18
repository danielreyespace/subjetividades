import type { Metadata } from 'next';
import { ArrowRight, Calendar, MapPin, Monitor } from 'lucide-react';
import { DanielReyes_Footer, DanielReyes_WhatsAppFloat } from '@/components/sections';

const BASE_URL = 'https://subjetividades.cl';

export const metadata: Metadata = {
  title: 'Terapia Individual en Santiago y online | SUBJETIVIDADES',
  description:
    'Terapia psicológica individual para adultos en Ñuñoa, Santiago, y por videollamada en todo Chile. Ansiedad, depresión, duelos, autoestima y desarrollo personal.',
  alternates: { canonical: `${BASE_URL}/terapia-individual` },
  openGraph: {
    title: 'Terapia Individual en Santiago y online | SUBJETIVIDADES',
    description:
      'Terapia psicológica individual para adultos en Ñuñoa, Santiago, y online para todo Chile.',
    url: `${BASE_URL}/terapia-individual`,
    siteName: 'SUBJETIVIDADES',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/daniel-reyes/photos/consultation-session.png`,
        width: 1200,
        height: 630,
        alt: 'Terapia individual en SUBJETIVIDADES, Ñuñoa, Santiago',
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
    q: '¿Para qué sirve la terapia individual?',
    a: 'Ayuda a comprender y abordar dificultades personales —ansiedad, estados depresivos, duelos, autoestima— y a desarrollar herramientas para los desafíos cotidianos. No requiere un umbral de gravedad: el malestar, por sí solo, es un motivo de consulta legítimo.',
  },
  {
    q: '¿Cuántas sesiones dura?',
    a: 'Depende del motivo y de los objetivos. Algunos procesos son focalizados y breves; otros, más extensos. La estimación se define en la evaluación inicial y se revisa durante el proceso.',
  },
  {
    q: '¿La modalidad online es efectiva?',
    a: 'Sí. La evidencia muestra resultados comparables a la atención presencial para la mayoría de los motivos de consulta.',
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
        { '@type': 'ListItem', position: 2, name: 'Terapia individual', item: `${BASE_URL}/terapia-individual` },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Terapia psicológica individual',
      name: 'Terapia individual en Santiago',
      url: `${BASE_URL}/terapia-individual`,
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
  'Ansiedad, crisis de pánico y estrés sostenido.',
  'Estados depresivos, desánimo y pérdida de motivación.',
  'Duelos y pérdidas.',
  'Autoestima y autoconocimiento.',
  'Manejo de emociones difíciles: agobio, frustración, ira o tristeza.',
  'Desarrollo personal y decisiones vitales.',
];

export default function TerapiaIndividualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen bg-white text-slate-700" style={{ fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <PageNav />
        <main className="pt-[72px]">
          <header className="bg-slate-900 px-6 py-20 text-white">
            <div className="mx-auto max-w-[820px]">
              <nav className="mb-5 text-[13px] text-slate-400">
                <a href="/" className="no-underline text-slate-400 hover:text-teal-400 transition-colors">Inicio</a>
                {' / '}
                <span className="text-slate-300">Terapia individual</span>
              </nav>
              <div className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-teal-400">Servicio</div>
              <h1 className="text-[clamp(30px,5vw,48px)] font-bold leading-tight tracking-tight">
                Terapia individual en Santiago
              </h1>
              <p className="mt-5 max-w-[620px] text-base leading-relaxed text-slate-300">
                Psicoterapia para adultos orientada a comprender y abordar el malestar, desarrollar herramientas y proyectar la vida con mayor bienestar. Presencial en Ñuñoa y por videollamada en todo Chile.
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

          <section className="px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-6">Cuándo consultar</h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                La terapia individual aborda una amplia variedad de motivos de consulta. Entre los más frecuentes:
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

          <section className="bg-[#f7f8fa] px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-6">En qué consiste</h2>
              <p className="text-[16px] leading-relaxed text-slate-600 mb-5">
                La terapia individual es un espacio de interacción dialógica en el que la persona explora sus procesos personales en un ambiente de comprensión, acogida y libertad. La psicoterapia permite un trabajo de introspección, guiado y contenido por un profesional con experiencia clínica, que ayuda a comprenderse y apreciarse mejor a sí mismo y a los demás.
              </p>
              <p className="text-[16px] leading-relaxed text-slate-600 mb-5">
                Los procesos psicoterapéuticos promueven habilidades para resolver los problemas y desafíos cotidianos, y entregan herramientas para el manejo de situaciones difíciles —agobio, frustración, ansiedad, ira o tristeza—. El trabajo respeta los ritmos de cada persona y se orienta a alcanzar un bienestar emocional significativo, que permita proyectar la vida en la dirección deseada.
              </p>
              <p className="text-[16px] leading-relaxed text-slate-600 mb-5">
                Es psicoterapia conducida por un psicólogo clínico. Comienza con una evaluación del motivo de consulta y la historia relevante, define objetivos y revisa periódicamente el avance.
              </p>
              <a href="/blog/cuando-ir-al-psicologo" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 no-underline hover:text-teal-800">
                ¿Cuándo conviene consultar? 7 señales
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          <section className="px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-6">Modalidad y valor</h2>
              <ul className="space-y-3 text-[16px] leading-relaxed text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500" /><span><strong>Presencial</strong> en Ñuñoa, Santiago, o <strong>por videollamada</strong> para todo Chile, con resultados comparables.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500" /><span><strong>Valor:</strong> $50.000–$60.000 por sesión.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500" /><span>Se emite <strong>boleta de honorarios</strong> para solicitar reembolso en Isapre y seguro complementario. <a href="/blog/reembolso-psicologo-isapre-fonasa" className="text-teal-700 underline hover:text-teal-800">Cómo funciona el reembolso</a>.</span></li>
              </ul>
            </div>
          </section>

          <section className="bg-[#f7f8fa] px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-4">Quién atiende</h2>
              <p className="text-[16px] leading-relaxed text-slate-600 mb-6">
                El equipo clínico de SUBJETIVIDADES atiende terapia individual de adultos: Daniel Reyes Pace, Fernando Bravo Matheu y Allison Rowe Carrasco.
              </p>
              <a href="/#equipo" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700">
                Agendar con un profesional
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

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

          <section className="px-6 pb-20">
            <div className="mx-auto max-w-[820px]">
              <div className="rounded-[14px] bg-slate-900 p-8 text-center">
                <h2 className="text-xl font-bold text-white mb-2">Da el primer paso</h2>
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
