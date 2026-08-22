import type { Metadata } from 'next';
import SjNav from '@/components/SjNav';
import WhatsAppLink from '@/components/WhatsAppLink';
import { waHref, WA_MESSAGES, CTA_LABEL } from '@/lib/whatsapp';
import { team } from '@/lib/team';
import { homePressHighlights } from '@/lib/press';
import DanielReyes_ContactSection from '@/components/sections/DanielReyes_ContactSection';
import DanielReyes_WhatsAppFloat from '@/components/sections/DanielReyes_WhatsAppFloat';
import {
  googleReviewSets,
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from '@/components/sections/DanielReyes_GoogleReviews';

const BASE_URL = 'https://subjetividades.cl';

export const metadata: Metadata = {
  title: 'Psicólogo clínico en Ñuñoa, Santiago | Subjetividades. Psicología Clínica',
  description:
    'Centro de psicología clínica en Ñuñoa, Santiago. Terapia individual, de pareja, sexual y para adolescentes con más de 20 años de experiencia. Atención presencial y online en todo Chile.',
  openGraph: {
    title: 'Psicólogo clínico en Ñuñoa, Santiago | Subjetividades. Psicología Clínica',
    description:
      'Terapia individual, de pareja, sexual y para adolescentes con más de 20 años de experiencia. Atención presencial y online en todo Chile.',
    url: BASE_URL,
    siteName: 'Subjetividades. Psicología Clínica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/daniel-reyes/photos/waiting-room.png`,
        width: 1200,
        height: 630,
        alt: 'Sala de espera de Subjetividades. Psicología Clínica en Ñuñoa, Santiago',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicólogo clínico en Ñuñoa, Santiago | Subjetividades. Psicología Clínica',
    description:
      'Terapia individual, de pareja, sexual y para adolescentes. Atención presencial en Ñuñoa y online en todo Chile.',
    images: [`${BASE_URL}/daniel-reyes/photos/waiting-room.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    // Sin "telephone" a propósito: el número del centro es solo WhatsApp y no recibe llamadas.
    // El Rich Results Test lo reporta como campo opcional faltante; es esperado, no corregir.
    {
      '@type': 'MedicalClinic',
      '@id': `${BASE_URL}/#clinic`,
      name: 'Subjetividades. Psicología Clínica',
      alternateName: ['Subjetividades', 'Centro Subjetividades', 'Subjetividades Ñuñoa'],
      description:
        'Centro de psicología clínica en Ñuñoa, Santiago. Psicoterapia individual, de pareja y sexual con enfoque basado en evidencia. Más de 20 años de experiencia.',
      url: BASE_URL,
      image: `${BASE_URL}/daniel-reyes/photos/waiting-room.png`,
      logo: `${BASE_URL}/daniel-reyes/assets/logos/brand/subjetividades-logo-cuadrado.png`,
      sameAs: [
        'https://www.instagram.com/subjetividades.cl/',
        'https://maps.google.com/?cid=12037037789320556678',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Alonso de Ercilla 2959',
        addressLocality: 'Ñuñoa',
        addressRegion: 'Región Metropolitana',
        postalCode: '7770465',
        addressCountry: 'CL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.4518691,
        longitude: -70.5990791,
      },
      availableService: [
        { '@type': 'MedicalTherapy', name: 'Terapia Individual' },
        { '@type': 'MedicalTherapy', name: 'Terapia de Pareja' },
        { '@type': 'MedicalTherapy', name: 'Terapia Sexual' },
        { '@type': 'MedicalTherapy', name: 'Terapia para Adolescentes' },
      ],
      priceRange: '$$',
      currenciesAccepted: 'CLP',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Santiago' },
        { '@type': 'Country', name: 'Chile' },
      ],
      hasMap: 'https://maps.google.com/?cid=12037037789320556678',
    },
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#dr-daniel-reyes`,
      name: 'Daniel Reyes Pace',
      url: `${BASE_URL}/#equipo`,
      image: `${BASE_URL}/daniel-reyes/photos/team-daniel-reyes.webp`,
      jobTitle: 'Director Clínico',
      description:
        'Psicólogo clínico con doctorado de la Universidad de Chile y más de 20 años de experiencia. Consultor internacional especializado en psicoterapia basada en evidencia.',
      worksFor: { '@id': `${BASE_URL}/#clinic` },
      sameAs: [
        'https://www.elmostrador.cl/autor/danielreyes/',
        'https://www.instagram.com/subjetividades.cl/',
        'https://psicologiaclinicachile.cl/',
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Doctorado en Psicología',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'Universidad de Chile',
        },
      },
      knowsAbout: [
        'Psicoterapia basada en evidencia',
        'Terapia de pareja',
        'Terapia sexual',
        'Psicología clínica',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#fernando-bravo`,
      name: 'Fernando Bravo Matheu',
      url: `${BASE_URL}/#equipo`,
      image: `${BASE_URL}/daniel-reyes/photos/team-fernando-bravo.webp`,
      jobTitle: 'Psicólogo Clínico',
      description:
        'Psicólogo de la Universidad Diego Portales con formación en clínica psicoanalítica de Winnicott. Especializado en adolescentes, adultos y terapia de pareja.',
      worksFor: { '@id': `${BASE_URL}/#clinic` },
      knowsAbout: ['Terapia individual', 'Terapia de pareja', 'Psicología adolescente'],
    },
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#allison-rowe`,
      name: 'Allison Rowe Carrasco',
      url: `${BASE_URL}/#equipo`,
      image: `${BASE_URL}/daniel-reyes/photos/team-allison-rowe.webp`,
      jobTitle: 'Psicóloga Clínica',
      description:
        'Psicóloga de la Universidad de Chile, diplomada en Terapia Sistémica y Familiar. 8 años de experiencia en atención individual y de parejas.',
      worksFor: { '@id': `${BASE_URL}/#clinic` },
      knowsAbout: ['Terapia individual', 'Terapia sistémica', 'Terapia de pareja', 'Terapia para adolescentes'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo es la primera sesión?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La primera sesión es una evaluación donde conversamos sobre lo que te trae a consulta, tu historia relevante y definimos juntos los objetivos del proceso. Dura entre 50 y 60 minutos. No hay compromiso de continuar si no te sientes cómodo o cómoda.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto dura un proceso terapéutico?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende de cada caso. Hay procesos focalizados de 8 a 12 sesiones y otros más extensos. Desde la primera sesión te damos una estimación honesta del tiempo que podríamos necesitar.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Atienden con Isapre?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Emitimos boleta para que puedas solicitar reembolso en tu Isapre y seguros complementarios. Para usuarios de Fonasa tenemos valores especiales dependiendo del tramo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿La terapia online funciona igual que presencial?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. La evidencia clínica muestra que la terapia por videollamada tiene la misma efectividad que la presencial para la mayoría de las condiciones. Atendemos pacientes online en todo Chile con excelentes resultados.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo puedo agendar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Escribiéndonos a través de WhatsApp o bien completando el formulario de contacto. Un humano te responderá a la brevedad.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si necesito cancelar una sesión?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pedimos aviso con al menos 24 horas de anticipación. Las cancelaciones con menos de 24 horas se cobran como sesión tomada.',
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Subjetividades. Psicología Clínica',
      alternateName: 'Subjetividades',
      inLanguage: 'es-CL',
      publisher: { '@id': `${BASE_URL}/#clinic` },
    },
  ],
};

const WHATSAPP_URL = waHref(WA_MESSAGES.home);

const navLinks: [string, string][] = [
  ['#inicio', 'Inicio'],
  ['#centro', 'El Centro'],
  ['#servicios', 'Servicios'],
  ['#equipo', 'Equipo'],
  ['#resenas', 'Reseñas'],
  ['/prensa', 'Prensa'],
  ['/blog', 'Blog'],
];

const services = [
  { title: 'Terapia Individual', desc: 'Un espacio seguro para trabajar en lo que necesitas cambiar, con objetivos claros desde la primera sesión y evaluación constante del proceso.', topics: ['Ansiedad y estrés', 'Depresión y duelos', 'Autoestima', 'Desarrollo personal'], href: '/terapia-individual' },
  { title: 'Terapia de Pareja', desc: 'Un proceso de comunicación, observación y toma de conciencia conjunta que permite a la pareja establecer nuevas bases para la relación.', topics: ['Conflictos de comunicación', 'Crisis de pareja', 'Infidelidad', 'Distancia emocional'], href: '/terapia-de-pareja' },
  { title: 'Terapia Sexual', desc: 'Un área que afecta a muchas personas, pero que tiene soluciones concretas y basadas en evidencia. Atención profesional y sin prejuicios.', topics: ['Disfunciones sexuales', 'Deseo e intimidad', 'Identidad sexual', 'Salud sexual integral'], href: '/terapia-sexual' },
  { title: 'Terapia para Adolescentes', desc: 'Un espacio de confianza para que las y los adolescentes trabajen lo que les preocupa, con acompañamiento cercano y respeto por sus tiempos.', topics: ['Ansiedad y ánimo', 'Autoestima e identidad', 'Vínculos y familia', 'Etapa escolar'], href: '/terapia-adolescentes' },
];

const centroVals = ['Confidencialidad absoluta', 'Trato humano y respetuoso', 'Enfoque basado en evidencia', 'Atención presencial y online'];

const enfoquePillars = [
  { n: '1', t: 'Evaluación inicial rigurosa', d: 'Primera sesión de diagnóstico donde exploramos tu motivo de consulta, historia relevante y definimos objetivos terapéuticos.' },
  { n: '2', t: 'Plan de tratamiento personalizado', d: 'Diseñamos un plan específico con herramientas y técnicas seleccionadas para tu caso particular.' },
  { n: '3', t: 'Seguimiento y resultados medibles', d: 'Revisamos periódicamente el progreso y ajustamos el tratamiento. Sin procesos interminables.' },
];

const isapres: [string, string][] = [
  ['banmedica.webp', 'Banmédica'],
  ['colmena.webp', 'Colmena'],
  ['consalud.webp', 'Consalud'],
  ['cruz-blanca.webp', 'Cruz Blanca'],
  ['nueva-masvida.webp', 'Nueva Masvida'],
  ['vida-tres.webp', 'Vida Tres'],
];

const homeFaqs = [
  { q: '¿Cómo es la primera sesión?', a: 'La primera sesión es una evaluación donde conversamos sobre lo que te trae a consulta, tu historia relevante y definimos juntos los objetivos del proceso. Dura entre 50 y 60 minutos. No hay compromiso de continuar si no te sientes cómodo o cómoda.' },
  { q: '¿Cuánto dura un proceso terapéutico?', a: 'Depende de cada caso. Hay procesos focalizados de 8 a 12 sesiones y otros más extensos. Desde la primera sesión te damos una estimación honesta del tiempo que podríamos necesitar.' },
  { q: '¿Atienden con Isapre?', a: 'Emitimos boleta para que puedas solicitar reembolso en tu Isapre y seguros complementarios. Para usuarios de Fonasa tenemos valores especiales dependiendo del tramo.' },
  { q: '¿La terapia online funciona igual que presencial?', a: 'Sí. La evidencia clínica muestra que la terapia por videollamada tiene la misma efectividad que la presencial para la mayoría de las condiciones. Atendemos pacientes online en todo Chile con excelentes resultados.' },
  { q: '¿Cómo puedo agendar?', a: 'Escribiéndonos a través de WhatsApp o bien completando el formulario de contacto. Un humano te responderá a la brevedad.' },
  { q: '¿Qué pasa si necesito cancelar una sesión?', a: 'Pedimos aviso con al menos 24 horas de anticipación. Las cancelaciones con menos de 24 horas se cobran como sesión tomada.' },
];

const IMG = '/daniel-reyes';

export default function HomePage() {
  const reviews = googleReviewSets.centro;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="sj" style={{ minHeight: '100vh' }}>
        {/* NAV */}
        <SjNav />

        <main>
          {/* HERO */}
          <section id="inicio" className="hero">
            <div className="heroimg" style={{ backgroundImage: `url('${IMG}/photos/waiting-room.webp')` }} />
            <div className="scrim" />
            <div className="herotx">
              <h1 className="hero-h1">SUBJETIVIDADES<span className="bajada">Psicología clínica · Ñuñoa, Santiago</span></h1>
              <h2 className="hsub">Terapia individual, de pareja, sexual y para adolescentes. Más de 20 años de experiencia en salud mental.</h2>
              <div className="hrow">
                <WhatsAppLink href={WHATSAPP_URL} className="btn">{CTA_LABEL}</WhatsAppLink>
                <span className="hmeta">Presencial en Ñuñoa · Online en todo Chile</span>
              </div>
              <div className="hmeta" style={{ marginTop: 14 }}>
                <span className="stars">★★★★★</span> {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} reseñas en Google
              </div>
            </div>
          </section>

          {/* EL CENTRO */}
          <section id="centro" className="section">
            <div className="two two-centro">
              <div className="centro-img" style={{ backgroundImage: `url('${IMG}/assets/atmosphere-office.webp')` }} />
              <div>
                <div className="lab">Nuestro Centro</div>
                <h2 style={{ marginTop: 10 }}>Un espacio pensado para tu bienestar</h2>
                <p className="body" style={{ marginTop: 16 }}>El cuidado de la salud mental necesita un entorno profesional y reservado, y un trabajo guiado por la mejor evidencia disponible.</p>
                <p className="body">En SUBJETIVIDADES reunimos experiencia clínica y una atención cercana a cada persona que consulta.</p>
                <div className="vals">
                  {centroVals.map((v, i) => (
                    <div key={v}><i>{String(i + 1).padStart(2, '0')}</i>{v}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ISAPRES */}
          <section id="isapres" className="isasec">
            <div className="inner">
              <div className="lab">Seguros de salud</div>
              <h2 className="isah" style={{ marginTop: 8 }}>Reembolso con tu Isapre</h2>
              <p className="isap">Emitimos boleta para que puedas solicitar reembolso en tu Isapre y seguro complementario.</p>
              <div className="logos">
                {isapres.map(([file, name]) => (
                  <span key={name} className="chip">
                    <img src={`${IMG}/assets/logos/isapres/${file}`} alt={`Isapre ${name} — aceptamos reembolso`} />
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICIOS */}
          <section id="servicios" className="section">
            <div className="shead">
              <div className="lab">Servicios</div>
              <h2>Nuestros servicios clínicos</h2>
              <div className="sub">Cuatro áreas de atención, con objetivos definidos desde la primera sesión.</div>
            </div>
            <div className="svc">
              {services.map((s) => (
                <div key={s.title} className="c">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="tp">{s.topics.map((t) => <li key={t}>{t}</li>)}</ul>
                  <a className="clink" href={s.href}>Conocer más →</a>
                </div>
              ))}
            </div>
          </section>

          {/* EQUIPO */}
          <section id="equipo" className="section">
            <div className="shead">
              <div className="lab">Equipo</div>
              <h2>Psicólogos clínicos con especialización</h2>
              <div className="sub">El equipo combina formación de excelencia, experiencia clínica y un trato dedicado con cada paciente.</div>
            </div>
            <div className="team">
              {team.map((m) => (
                <div key={m.id}>
                  <div className="av" style={{ backgroundImage: `url('${m.photo}')` }} />
                  <h3>{m.name}</h3>
                  <div className="rol">{m.role}</div>
                  <p>{m.bio}</p>
                  <div className="tags">{m.specialties.map((sp) => <span key={sp}>{sp}</span>)}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ENFOQUE */}
          <section id="enfoque" className="section">
            <div className="two two-enf">
              <div>
                <div className="lab">Nuestro Enfoque</div>
                <h2 style={{ marginTop: 10 }}>Metodología clínica basada en evidencia</h2>
                <p className="body" style={{ marginTop: 16 }}>Trabajamos con un enfoque integrativo que prioriza las intervenciones con mayor respaldo, adaptándolas a la realidad y necesidades de cada paciente.</p>
                <p className="body">Cada proceso es único y se supervisa en equipo, con evaluación permanente orientada a resultados.</p>
                <div className="pill3">
                  {enfoquePillars.map((p) => (
                    <div key={p.n} className="p"><i>{p.n}</i><div><h3>{p.t}</h3><p>{p.d}</p></div></div>
                  ))}
                </div>
              </div>
              <div className="enf-img" style={{ backgroundImage: `url('${IMG}/assets/atmosphere-calm.webp')` }} />
            </div>
          </section>

          {/* PRENSA */}
          <section id="prensa" className="section">
            <div className="prwrap">
              <div>
                <div className="lab">Trayectoria pública</div>
                <h2 style={{ marginTop: 10 }}>Presencia académica, institucional y en medios</h2>
                <p className="body" style={{ marginTop: 16 }}>Además de su trabajo clínico, los profesionales del equipo han participado en el debate público sobre psicología, educación, y salud sexual desde medios, universidades y organismos internacionales.</p>
                <a className="plink" href="/prensa">Ver trayectoria y apariciones →</a>
              </div>
              <div className="prcards">
                {homePressHighlights.map((item) => (
                  <a key={`${item.source}-${item.title}`} className="prc" href={item.href} target="_blank" rel="noopener noreferrer">
                    <span className="src">{item.source}{item.date ? ` · ${item.date}` : ''}</span>
                    <span className="ttl">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* RESEÑAS */}
          <section id="resenas" className="section">
            <div className="revhead">
              <div>
                <div className="lab">Reseñas</div>
                <h2 style={{ marginTop: 10 }}>Reseñas verificadas en Google</h2>
              </div>
              <a className="revrate" href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                <b>{GOOGLE_RATING}</b>
                <span className="rr-sub"><span className="stars">★★★★★</span> · {GOOGLE_REVIEW_COUNT} reseñas en Google</span>
              </a>
            </div>
            <div className="rev">
              {reviews.map((r) => (
                <div key={r.name}>
                  <blockquote>{`“${r.text}”`}</blockquote>
                  <div className="who"><span className="stars">★★★★★</span><span className="nm">{r.name} · vía Google</span></div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="section">
            <div className="shead">
              <div className="lab">Preguntas Frecuentes</div>
              <h2>Resolvemos tus dudas</h2>
            </div>
            <div className="faq">
              {homeFaqs.map((f) => (
                <div key={f.q} className="qa"><h3>{f.q}</h3><p>{f.a}</p></div>
              ))}
            </div>
          </section>

          {/* CONTACTO */}
          <DanielReyes_ContactSection />

          {/* UBICACIÓN */}
          <section id="ubicacion" className="mapsec">
            <div className="shead">
              <div className="lab">Ubicación</div>
              <h2>Encuéntranos en Ñuñoa</h2>
              <div className="sub">Alonso de Ercilla 2959, Ñuñoa, Región Metropolitana, Chile</div>
            </div>
            <div className="mapbox">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6657.803275170859!2d-70.5990791!3d-33.451869099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf4a2e22282b%3A0xa70c26182c67b086!2sSubjetividades.%20Psicolog%C3%ADa%20Cl%C3%ADnica!5e0!3m2!1ses-419!2scl!4v1781881555733!5m2!1ses-419!2scl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Subjetividades. Psicología Clínica — Alonso de Ercilla 2959, Ñuñoa"
              />
            </div>
          </section>
        </main>

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

        <DanielReyes_WhatsAppFloat />
      </div>
    </>
  );
}
