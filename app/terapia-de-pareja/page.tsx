import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Calendar, MapPin, Monitor, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import {
  DanielReyes_Footer,
  DanielReyes_WhatsAppFloat,
  DanielReyes_SubpageNav,
  DanielReyes_ServiceTeam,
} from '@/components/sections';
import DanielReyes_GoogleReviews, {
  GoogleRatingBadge,
  googleReviewSets,
} from '@/components/sections/DanielReyes_GoogleReviews';
import SchedulingLink from '@/components/SchedulingLink';
import WhatsAppLink from '@/components/WhatsAppLink';
import { teamByIds } from '@/lib/team';

const BASE_URL = 'https://subjetividades.cl';

// URL de WhatsApp con mensaje pre-escrito propio de este servicio.
const WHATSAPP_URL =
  'https://wa.me/56937389719?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20de%20terapia%20de%20pareja.';

// Botón primario (Agendar) y secundario (WhatsApp) para el par de CTA de hero y
// cierre. Misma altura y ancho: primario relleno, secundario contorno. El
// borde transparente del primario iguala la altura del contorno del secundario.
const ctaPrimaryClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700 sm:w-auto';
const ctaWhatsAppClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-400 bg-transparent px-6 py-3 text-sm font-semibold text-teal-300 no-underline transition-colors hover:bg-teal-400/10 sm:w-auto';

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
    siteName: 'Subjetividades. PsicologÃ­a ClÃ­nica',
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
        '@type': 'MedicalClinic',
        '@id': `${BASE_URL}/#clinic`,
        name: 'Subjetividades. Psicología Clínica',
        url: BASE_URL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Alonso de Ercilla 2959',
          addressLocality: 'Ñuñoa',
          addressRegion: 'Región Metropolitana',
          postalCode: '7770465',
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

const motivos = [
  'Conflictos de comunicación que se repiten sin encontrar resolución.',
  'Crisis, distanciamiento afectivo o pérdida de intimidad.',
  'Reconstrucción de la confianza tras una infidelidad.',
  'Transiciones vitales: convivencia, matrimonio, llegada de hijos.',
  'La decisión, consciente y respetuosa, de continuar o no en la relación.',
];

const trustItems = [
  { icon: Award, title: '+20 años', text: 'de experiencia clínica' },
  { icon: ShieldCheck, title: 'Psicólogos colegiados', text: 'con especialización' },
  { icon: HeartHandshake, title: 'Reembolso Isapre', text: 'boleta de honorarios' },
  { icon: Monitor, title: 'Presencial y online', text: 'Ñuñoa y todo Chile' },
];

const equipo = teamByIds(['daniel-reyes', 'fernando-bravo', 'allison-rowe']);

export default function TerapiaDeParejaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen bg-white text-slate-700" style={{ fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <DanielReyes_SubpageNav />
        <main className="pt-[72px]">
          {/* Hero */}
          <header className="bg-slate-900 px-6 py-16 text-white md:py-20">
            <div className="mx-auto grid max-w-[1140px] items-center gap-10 md:grid-cols-[1fr_minmax(0,440px)] lg:gap-16">
              <div>
                <nav className="mb-5 text-[13px] text-slate-400">
                  <a href="/" className="no-underline text-slate-400 hover:text-teal-400 transition-colors">Inicio</a>
                  {' / '}
                  <span className="text-slate-300">Terapia de pareja</span>
                </nav>
                <div className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-teal-400">Servicio</div>
                <h1 className="text-[clamp(30px,5vw,48px)] font-bold leading-tight tracking-tight">
                  Terapia de pareja en Santiago
                </h1>
                <p className="mt-5 max-w-[560px] text-base leading-relaxed text-slate-300">
                  Un proceso clínico orientado a comprender y modificar los patrones de interacción que sostienen el malestar en la relación. Presencial en Ñuñoa y por videollamada en todo Chile.
                </p>
                <div className="mt-7">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <SchedulingLink className={ctaPrimaryClass}>
                      <Calendar className="h-[18px] w-[18px]" />
                      Agendar primera consulta
                    </SchedulingLink>
                    <WhatsAppLink href={WHATSAPP_URL} className={ctaWhatsAppClass}>
                      Escríbenos por WhatsApp
                    </WhatsAppLink>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-[13px] text-slate-400">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-teal-400" /> Presencial en Ñuñoa</span>
                    <span className="inline-flex items-center gap-1.5"><Monitor className="h-4 w-4 text-teal-400" /> Online en todo Chile</span>
                  </div>
                </div>
                <div className="mt-5">
                  <GoogleRatingBadge variant="dark" />
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src="/daniel-reyes/photos/daniel-reyes-consulta.jpg"
                  alt="Sesión de terapia en SUBJETIVIDADES, Ñuñoa, Santiago"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>
            </div>
          </header>

          {/* Barra de confianza */}
          <section className="border-b border-slate-100 bg-white px-6 py-6">
            <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
              {trustItems.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-bold text-slate-900">{title}</div>
                    <div className="text-[12px] text-slate-500">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

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
                <li className="flex items-start gap-3"><span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500" /><span><strong>Valor:</strong> desde $60.000 por sesión.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-teal-500" /><span>Se emite <strong>boleta de honorarios</strong> para solicitar reembolso en Isapre y seguro complementario. <a href="/blog/reembolso-psicologo-isapre-fonasa" className="text-teal-700 underline hover:text-teal-800">Cómo funciona el reembolso</a>.</span></li>
              </ul>
            </div>
          </section>

          {/* Quién atiende */}
          <section className="bg-[#f7f8fa] px-6 py-16">
            <DanielReyes_ServiceTeam
              members={equipo}
              intro="El equipo clínico de SUBJETIVIDADES atiende terapia de pareja. Todos son psicólogos clínicos con formación de excelencia y experiencia."
            />
            <div className="mx-auto mt-8 max-w-[820px]">
              <SchedulingLink className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700">
                Agendar con un profesional
                <ArrowRight className="h-4 w-4" />
              </SchedulingLink>
            </div>
          </section>

          <DanielReyes_GoogleReviews reviews={googleReviewSets.pareja} />

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
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <SchedulingLink className={ctaPrimaryClass}>
                    <Calendar className="h-[18px] w-[18px]" />
                    Agendar primera consulta
                  </SchedulingLink>
                  <WhatsAppLink href={WHATSAPP_URL} className={ctaWhatsAppClass}>
                    Escríbenos por WhatsApp
                  </WhatsAppLink>
                </div>
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
