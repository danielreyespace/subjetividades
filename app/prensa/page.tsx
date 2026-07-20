import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';
import { ArrowRight, Play } from 'lucide-react';
import {
  featuredPublication,
  pressIntro,
  pressSections,
  publications,
  type PressItem,
} from '@/lib/press';
import {
  DanielReyes_Footer,
  DanielReyes_StickyMobileCTA,
} from '@/components/sections';

const BASE_URL = 'https://subjetividades.cl';

export const metadata: Metadata = {
  title: 'Daniel Reyes Pace en los medios | SUBJETIVIDADES',
  description:
    'Publicaciones académicas, columnas de opinión y apariciones mediáticas de Daniel Reyes Pace, Director de SUBJETIVIDADES.',
  alternates: { canonical: `${BASE_URL}/prensa` },
  openGraph: {
    title: 'Daniel Reyes Pace en los medios | SUBJETIVIDADES',
    description:
      'Columnas de opinión, apariciones en prensa, participación institucional y publicaciones académicas sobre psicología, sexualidad y salud mental.',
    url: `${BASE_URL}/prensa`,
    siteName: 'Subjetividades. PsicologÃ­a ClÃ­nica',
    locale: 'es_CL',
    type: 'profile',
    images: [
      {
        url: `${BASE_URL}/daniel-reyes/photos/headshot-professional.png`,
        width: 1200,
        height: 630,
        alt: 'Daniel Reyes Pace — Psicólogo clínico, Director SUBJETIVIDADES',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Reyes Pace',
  honorificPrefix: 'Dr.',
  jobTitle: 'Director Clínico',
  worksFor: {
    '@type': 'MedicalBusiness',
    name: 'Subjetividades. Psicología Clínica',
    url: BASE_URL,
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad de Chile',
  },
  url: `${BASE_URL}/prensa`,
  sameAs: [
    'https://www.elmostrador.cl/autor/danielreyes/',
    'https://facso.uchile.cl/noticias/93053/daniel-reyes-el-caso-de-belen-y-la-educacion-sexual',
    'https://ediciones.uahurtado.cl/producto/politica-y-debates-en-educacion-sexual/',
    'https://unesdoc.unesco.org/ark:/48223/pf0000369032',
  ],
};

function PageNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-sm">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between h-[72px] px-6">
        <a href="/" className="flex flex-col leading-tight no-underline">
          <span
            className="text-[15px] font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Courier Prime', Courier, monospace" }}
          >
            SUBJETIVIDADES
          </span>
          <span className="text-[10px] font-medium text-teal-600 tracking-wider uppercase">
            Psicología Clínica
          </span>
        </a>
        <div className="flex items-center gap-5">
          <a className="hidden text-sm font-medium text-slate-500 no-underline hover:text-slate-900 transition-colors sm:inline" href="/blog">
            Blog
          </a>
          <SchedulingLink
            className="text-sm font-semibold text-white bg-teal-600 px-4 py-2 rounded-lg no-underline hover:bg-teal-700 transition-colors"
           
          >
            Agendar consulta
          </SchedulingLink>
        </div>
      </div>
    </nav>
  );
}

function ExternalCard({ item }: { item: PressItem }) {
  return (
    <article className="flex h-full flex-col rounded-[14px] border border-slate-100 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-[0_4px_16px_rgba(13,148,136,0.08)]">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-teal-50 px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-teal-700">
          {item.source}
        </span>
        {item.date && <span className="text-[12px] text-slate-400">{item.date}</span>}
      </div>
      <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900">{item.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-slate-500">{item.description}</p>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal-600 no-underline hover:text-teal-700"
      >
        {item.action}
        <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export default function PressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div
        className="min-h-screen bg-white text-slate-700"
        style={{
          fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <PageNav />
        <main className="pt-[72px]">
          <header className="bg-slate-900 px-6 py-20 text-center text-white">
            <div className="mx-auto max-w-[760px]">
              <div className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-teal-400">
                Trayectoria
              </div>
              <h1 className="text-[clamp(30px,5vw,52px)] font-bold leading-tight tracking-tight">
                Nuestro aporte en el debate público
              </h1>
              <p className="mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-slate-300">
                Columnas de opinión, apariciones en prensa, participación institucional y publicaciones académicas sobre psicología, sexualidad y salud mental.
              </p>
            </div>
          </header>

          <section className="px-6 py-16">
            <div className="mx-auto max-w-[760px] space-y-5">
              {pressIntro.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-slate-600 first:text-slate-800">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {pressSections.map((section, index) => (
            <section key={section.title} className={`px-6 py-16 ${index % 2 === 0 ? 'bg-[#f7f8fa]' : 'bg-white'}`}>
              <div className="mx-auto max-w-[1140px]">
                <div className="mb-8 max-w-[700px]">
                  <h2 className="mb-2 text-[clamp(24px,3vw,34px)] font-bold leading-tight text-slate-900">
                    {section.title}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-500">{section.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <ExternalCard key={`${item.source}-${item.title}`} item={item} />
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="bg-white px-6 py-16">
            <div className="mx-auto max-w-[1140px]">
              <div className="overflow-hidden rounded-[14px] border border-slate-100 bg-slate-900 shadow-[0_10px_30px_rgba(26,35,50,0.12)]">
                <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]">
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/KWNL4NTPetA?start=288&rel=0&modestbranding=1"
                      title="Daniel Reyes Pace - Presentación ante la Cámara de Diputados de Chile"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7 lg:p-9">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-teal-500/15 text-teal-300">
                      <Play className="h-5 w-5" />
                    </div>
                    <h2 className="mb-3 text-2xl font-bold leading-tight text-white">
                      Presentación ante la Cámara de Diputados
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-300">
                      Registro completo de la exposición del Daniel Reyes Pace como experto invitado ante una comisión legislativa de la Cámara de Diputados de Chile, abril 2020.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f8fa] px-6 py-16">
            <div className="mx-auto max-w-[1140px]">
              <div className="mb-8 max-w-[700px]">
                <h2 className="mb-2 text-[clamp(24px,3vw,34px)] font-bold leading-tight text-slate-900">
                  Publicaciones
                </h2>
                <p className="text-base leading-relaxed text-slate-500">
                  Capítulos de libros e investigaciones académicas sobre políticas de educación sexual, salud y subjetividades.
                </p>
              </div>

              <article className="mb-5 rounded-[14px] border-2 border-teal-600 bg-teal-50 p-7">
                <div className="mb-3 inline-flex rounded-md bg-teal-600 px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-white">
                  {featuredPublication.source} · {featuredPublication.date}
                </div>
                <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900">{featuredPublication.title}</h3>
                <p className="mb-5 max-w-[760px] text-sm leading-relaxed text-slate-600">
                  {featuredPublication.description}
                </p>
                <a
                  href={featuredPublication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 no-underline hover:text-teal-800"
                >
                  {featuredPublication.action}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                {publications.map((item) => (
                  <ExternalCard key={`${item.source}-${item.title}`} item={item} />
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-16 text-center">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">¿Quieres conocer al equipo de SUBJETIVIDADES?</h2>
            <p className="mx-auto mb-6 max-w-[560px] text-sm leading-relaxed text-slate-500">
              Conoce la formación clínica, el enfoque de trabajo y el equipo completo del centro.
            </p>
            <a
              href="/#equipo"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-teal-700"
            >
              Ver equipo clínico
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>
        </main>
        <DanielReyes_Footer />
        <DanielReyes_StickyMobileCTA />
      </div>
    </>
  );
}
