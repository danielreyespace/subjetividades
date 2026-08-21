import type { Metadata } from 'next';
import {
  featuredPublication,
  pressIntro,
  pressSections,
  publications,
  type PressItem,
} from '@/lib/press';

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

const navLinks: [string, string][] = [
  ['/#centro', 'El Centro'],
  ['/#servicios', 'Servicios'],
  ['/#equipo', 'Equipo'],
  ['/#resenas', 'Reseñas'],
  ['/prensa', 'Prensa'],
  ['/blog', 'Blog'],
];

function PCard({ item }: { item: PressItem }) {
  return (
    <article className="pcard">
      <div className="top">
        <span className="src">{item.source}</span>
        {item.date && <span className="dt">{item.date}</span>}
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <a className="act" href={item.href} target="_blank" rel="noopener noreferrer">{item.action} →</a>
    </article>
  );
}

export default function PressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="sj" style={{ minHeight: '100vh' }}>
        {/* NAV */}
        <div className="nav">
          <a href="/" className="brand">Subjetividades<span>Psicología Clínica</span></a>
          <div className="nl">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a href="/#contacto" className="navcta">Contacto</a>
          </div>
        </div>

        {/* HERO */}
        <section className="phero">
          <div className="inner">
            <div className="lab">Trayectoria</div>
            <h1>Nuestro aporte en el debate público</h1>
            <p>Columnas de opinión, apariciones en prensa, participación institucional y publicaciones académicas sobre psicología, sexualidad y salud mental.</p>
          </div>
        </section>

        {/* INTRO */}
        <section className="band">
          <div className="wrap760">
            {pressIntro.map((p, i) => (
              <p key={i} className={i === 0 ? 'lead-p first' : 'lead-p'}>{p}</p>
            ))}
          </div>
        </section>

        {/* SECCIONES */}
        {pressSections.map((section, index) => (
          <section key={section.title} className={index % 2 === 0 ? 'band tint' : 'band'}>
            <div className="wrap1140">
              <h2 className="sec">{section.title}</h2>
              <p className="secdesc">{section.description}</p>
              <div className="pgrid">
                {section.items.map((item) => (
                  <PCard key={`${item.source}-${item.title}`} item={item} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* VIDEO CÁMARA */}
        <section className="band">
          <div className="wrap1140">
            <div className="ytwrap">
              <div className="vid">
                <iframe
                  src="https://www.youtube.com/embed/KWNL4NTPetA?start=288&rel=0&modestbranding=1"
                  title="Daniel Reyes Pace - Presentación ante la Cámara de Diputados de Chile"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="txt">
                <h2>Presentación ante la Cámara de Diputados</h2>
                <p>Registro completo de la exposición del Daniel Reyes Pace como experto invitado ante una comisión legislativa de la Cámara de Diputados de Chile, abril 2020.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PUBLICACIONES */}
        <section className="band tint">
          <div className="wrap1140">
            <h2 className="sec">Publicaciones</h2>
            <p className="secdesc">Capítulos de libros e investigaciones académicas sobre políticas de educación sexual, salud y subjetividades.</p>
            <article className="feat" style={{ marginTop: 26 }}>
              <span className="src">{featuredPublication.source} · {featuredPublication.date}</span>
              <h3>{featuredPublication.title}</h3>
              <p>{featuredPublication.description}</p>
              <a className="act" href={featuredPublication.href} target="_blank" rel="noopener noreferrer">{featuredPublication.action} →</a>
            </article>
            <div className="pgrid">
              {publications.map((item) => (
                <PCard key={`${item.source}-${item.title}`} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="band">
          <div className="wrap1140 center">
            <div className="ctabox">
              <h2>¿Quieres conocer al equipo de SUBJETIVIDADES?</h2>
              <p>Conoce la formación clínica, el enfoque de trabajo y el equipo completo del centro.</p>
              <a className="hcta" href="/#equipo">Ver equipo clínico</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ftr2">
          <div>
            <div className="fbrand">Subjetividades</div>
            <div className="fbrandsub">Psicología Clínica</div>
            <div className="faddr">Alonso de Ercilla 2959, Ñuñoa, Región Metropolitana, Chile · Atención online para todo Chile</div>
          </div>
          <div className="flinks">
            <a href="/prensa">Prensa</a>
            <a href="/blog">Blog</a>
            <a href="/blog/cuando-ir-al-psicologo">¿Cuándo ir al psicólogo?</a>
            <a href="/blog/terapia-de-pareja-como-funciona">Terapia de pareja</a>
            <a href="https://www.instagram.com/subjetividades.cl/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </footer>
      </div>
    </>
  );
}
