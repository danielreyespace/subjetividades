import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Calendar, MapPin, Monitor, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import {
  DanielReyes_Footer,
  DanielReyes_WhatsAppFloat,
  DanielReyes_SubpageNav,
  DanielReyes_ServiceTeam,
  DanielReyes_GoogleReviews,
  GoogleRatingBadge,
} from '@/components/sections';
import SchedulingLink from '@/components/SchedulingLink';
import WhatsAppLink from '@/components/WhatsAppLink';
import { teamByIds } from '@/lib/team';

const BASE_URL = 'https://subjetividades.cl';

// URL de WhatsApp con mensaje pre-escrito propio de este servicio.
const WHATSAPP_URL =
  'https://wa.me/56937389719?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20de%20terapia%20individual.';

// Botón primario (Agendar) y secundario (WhatsApp) para el par de CTA de hero y
// cierre. Misma altura y ancho: primario relleno, secundario contorno. El
// borde transparente del primario iguala la altura del contorno del secundario.
const ctaPrimaryClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700 sm:w-auto';
const ctaWhatsAppClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-400 bg-transparent px-6 py-3 text-sm font-semibold text-teal-300 no-underline transition-colors hover:bg-teal-400/10 sm:w-auto';

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
    siteName: 'Subjetividades. PsicologÃ­a ClÃ­nica',
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
  'Ansiedad, crisis de pánico y estrés sostenido.',
  'Estados depresivos, desánimo y pérdida de motivación.',
  'Duelos y pérdidas.',
  'Autoestima y autoconocimiento.',
  'Manejo de emociones difíciles: agobio, frustración, ira o tristeza.',
  'Desarrollo personal y decisiones vitales.',
];

const trustItems = [
  { icon: Award, title: '+20 años', text: 'de experiencia clínica' },
  { icon: ShieldCheck, title: 'Psicólogos colegiados', text: 'con especialización' },
  { icon: HeartHandshake, title: 'Reembolso Isapre', text: 'boleta de honorarios' },
  { icon: Monitor, title: 'Presencial y online', text: 'Ñuñoa y todo Chile' },
];

const equipo = teamByIds(['daniel-reyes', 'fernando-bravo', 'allison-rowe']);

export default function TerapiaIndividualPage() {
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
                  <span className="text-slate-300">Terapia individual</span>
                </nav>
                <div className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-teal-400">Servicio</div>
                <h1 className="text-[clamp(30px,5vw,48px)] font-bold leading-tight tracking-tight">
                  Terapia individual en Santiago
                </h1>
                <p className="mt-5 max-w-[560px] text-base leading-relaxed text-slate-300">
                  Psicoterapia para adultos orientada a comprender y abordar el malestar, desarrollar herramientas y proyectar la vida con mayor bienestar. Presencial en Ñuñoa y por videollamada en todo Chile.
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
                  alt="Daniel Reyes en sesión de terapia individual en SUBJETIVIDADES, Ñuñoa"
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
            <DanielReyes_ServiceTeam
              members={equipo}
              intro="El equipo clínico de SUBJETIVIDADES atiende terapia individual de adultos. Todos son psicólogos clínicos con formación de excelencia y experiencia."
            />
            <div className="mx-auto mt-8 max-w-[820px]">
              <SchedulingLink className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700">
                Agendar con un profesional
                <ArrowRight className="h-4 w-4" />
              </SchedulingLink>
            </div>
          </section>

          <DanielReyes_GoogleReviews />

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
