import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Calendar, MapPin, Monitor, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import {
  DanielReyes_Footer,
  DanielReyes_WhatsAppFloat,
  DanielReyes_SubpageNav,
  DanielReyes_ServiceTeam,
} from '@/components/sections';
import SchedulingLink from '@/components/SchedulingLink';
import { teamByIds } from '@/lib/team';

const BASE_URL = 'https://subjetividades.cl';

export const metadata: Metadata = {
  title: 'Terapia Sexual en Santiago y online | SUBJETIVIDADES',
  description:
    'Terapia sexual y consejería sexual con un psicólogo especialista en Ñuñoa, Santiago, y por videollamada en todo Chile. Atención profesional, confidencial y sin prejuicios.',
  alternates: { canonical: `${BASE_URL}/terapia-sexual` },
  openGraph: {
    title: 'Terapia Sexual en Santiago y online | SUBJETIVIDADES',
    description:
      'Terapia sexual y consejería sexual con un especialista en Ñuñoa, Santiago, y online para todo Chile.',
    url: `${BASE_URL}/terapia-sexual`,
    siteName: 'Subjetividades. PsicologÃ­a ClÃ­nica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/daniel-reyes/assets/service-sexual.png`,
        width: 1200,
        height: 630,
        alt: 'Terapia sexual en SUBJETIVIDADES, Ñuñoa, Santiago',
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
    q: '¿La terapia sexual incluye algún tipo de contacto físico?',
    a: 'No. Es psicoterapia: trabajo conversacional y estructurado en consulta. Los ejercicios prácticos que en ocasiones se indican se realizan en privado, nunca en sesión.',
  },
  {
    q: '¿Es necesario asistir en pareja?',
    a: 'No. Existen procesos individuales y de pareja; la modalidad se define según el motivo de consulta y los objetivos.',
  },
  {
    q: '¿Cuándo corresponde una evaluación médica?',
    a: 'Las dificultades sexuales suelen tener componentes físicos y psicológicos a la vez. Ante señales de causa orgánica —dolor, cambios bruscos, enfermedades o efectos de medicamentos— la derivación médica forma parte del tratamiento.',
  },
  {
    q: '¿La modalidad online es efectiva?',
    a: 'Sí. Como el trabajo en sesión es conversacional y los ejercicios se realizan en privado, la videollamada permite desarrollar el proceso completo con resultados comparables a la atención presencial.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Terapia sexual', item: `${BASE_URL}/terapia-sexual` },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Terapia sexual',
      name: 'Terapia sexual en Santiago',
      url: `${BASE_URL}/terapia-sexual`,
      inLanguage: 'es-CL',
      areaServed: [
        { '@type': 'City', name: 'Santiago' },
        { '@type': 'Country', name: 'Chile' },
      ],
      provider: {
        '@type': 'MedicalBusiness',
        name: 'Subjetividades. Psicología Clínica',
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

const motivos = [
  'Bajo deseo o discrepancia de deseo en la pareja.',
  'Disfunción eréctil y dificultades de eyaculación.',
  'Dificultades para alcanzar el orgasmo.',
  'Dolor o dificultad en las relaciones sexuales.',
  'Conflictos con la identidad, la orientación o el género.',
  'Vínculos no monógamos y dudas sobre VIH u otras ITS.',
];

const trustItems = [
  { icon: Award, title: '+20 años', text: 'de experiencia clínica' },
  { icon: ShieldCheck, title: 'Psicólogo colegiado', text: 'especialista en sexualidad' },
  { icon: HeartHandshake, title: 'Reembolso Isapre', text: 'boleta de honorarios' },
  { icon: Monitor, title: 'Presencial y online', text: 'Ñuñoa y todo Chile' },
];

const equipo = teamByIds(['daniel-reyes']);

export default function TerapiaSexualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen bg-white text-slate-700" style={{ fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <DanielReyes_SubpageNav />
        <main className="pt-[72px]">
          <header className="bg-slate-900 px-6 py-16 text-white md:py-20">
            <div className="mx-auto grid max-w-[1140px] items-center gap-10 md:grid-cols-[1fr_minmax(0,440px)] lg:gap-16">
              <div>
                <nav className="mb-5 text-[13px] text-slate-400">
                  <a href="/" className="no-underline text-slate-400 hover:text-teal-400 transition-colors">Inicio</a>
                  {' / '}
                  <span className="text-slate-300">Terapia sexual</span>
                </nav>
                <div className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-teal-400">Servicio</div>
                <h1 className="text-[clamp(30px,5vw,48px)] font-bold leading-tight tracking-tight">
                  Terapia sexual en Santiago
                </h1>
                <p className="mt-5 max-w-[560px] text-base leading-relaxed text-slate-300">
                  Psicoterapia especializada en las dificultades sexuales y consejería sexual, con atención profesional, confidencial y sin prejuicios. Presencial en Ñuñoa y por videollamada en todo Chile.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <SchedulingLink className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700">
                    <Calendar className="h-[18px] w-[18px]" />
                    Agendar primera consulta
                  </SchedulingLink>
                  <div className="flex items-center gap-4 text-[13px] text-slate-400">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-teal-400" /> Presencial en Ñuñoa</span>
                    <span className="inline-flex items-center gap-1.5"><Monitor className="h-4 w-4 text-teal-400" /> Online en todo Chile</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src="/daniel-reyes/photos/daniel-reyes-consulta.jpg"
                  alt="Daniel Reyes en sesión en SUBJETIVIDADES, Ñuñoa, Santiago"
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

          <section className="px-6 py-16">
            <div className="mx-auto max-w-[820px]">
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-6">Qué aborda</h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                La consulta reúne tanto el tratamiento de disfunciones como el acompañamiento de otros aspectos de la sexualidad. Entre los motivos más frecuentes:
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
                La terapia sexual es psicoterapia focalizada en el tratamiento de las disfunciones sexuales: trastornos del deseo, disfunción eréctil, trastornos orgásmicos y de la excitación, eyaculación precoz o retardada y dolor en las relaciones sexuales.
              </p>
              <p className="text-[16px] leading-relaxed text-slate-600 mb-5">
                La consejería sexual, por su parte, es una conversación y guía sobre distintos aspectos de la sexualidad de las personas y las parejas. Además de ayudar a resolver dificultades, proporciona información y herramientas sobre sexualidad y género, acompaña procesos biográficos y conflictos con la identidad, aborda desafíos en vínculos no monógamos y resuelve dudas sobre VIH y otras ITS.
              </p>
              <p className="text-[16px] leading-relaxed text-slate-600 mb-5">
                En ambos casos es trabajo conversacional y estructurado, conducido por un psicólogo clínico: en sesión no existe ningún tipo de contacto físico ni examen corporal.
              </p>
              <a href="/blog/terapia-sexual" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 no-underline hover:text-teal-800">
                Qué es la terapia sexual: medio siglo de una disciplina clínica
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
            <DanielReyes_ServiceTeam
              members={equipo}
              intro="La terapia sexual en SUBJETIVIDADES la atiende Daniel Reyes Pace, psicólogo clínico especialista en terapia de pareja y sexual."
            />
            <div className="mx-auto mt-8 max-w-[820px]">
              <SchedulingLink className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700">
                Agendar primera consulta
                <ArrowRight className="h-4 w-4" />
              </SchedulingLink>
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
                <h2 className="text-xl font-bold text-white mb-2">Atención profesional, confidencial y sin prejuicios</h2>
                <p className="text-slate-400 text-sm mb-5">Primera consulta presencial en Ñuñoa, Santiago, u online para todo Chile.</p>
                <SchedulingLink className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700">
                  <Calendar className="h-[18px] w-[18px]" />
                  Agendar primera consulta
                </SchedulingLink>
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
