import type { Metadata } from 'next';
import ServiceRedesign from '@/components/ServiceRedesign';
import { waHref, WA_MESSAGES } from '@/lib/whatsapp';
import { teamByIds } from '@/lib/team';
import { googleReviewSets } from '@/components/sections/DanielReyes_GoogleReviews';

const BASE_URL = 'https://subjetividades.cl';

const WHATSAPP_URL = waHref(WA_MESSAGES.pareja);

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

const equipo = teamByIds(['daniel-reyes', 'fernando-bravo', 'allison-rowe']);

export default function TerapiaDeParejaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <ServiceRedesign
        c={{
          crumb: 'Terapia de pareja',
          h1: 'Terapia de pareja en Santiago',
          lead: 'Un proceso clínico orientado a comprender y modificar los patrones de interacción que sostienen el malestar en la relación. Presencial en Ñuñoa y por videollamada en todo Chile.',
          waUrl: WHATSAPP_URL,
          heroImg: '/daniel-reyes/photos/daniel-reyes-consulta.jpg',
          trust: [
            ['+20 años', 'de experiencia clínica'],
            ['Psicólogos colegiados', 'con especialización'],
            ['Reembolso Isapre', 'boleta de honorarios'],
            ['Presencial y online', 'Ñuñoa y todo Chile'],
          ],
          s1h: 'Cuándo consultar',
          s1intro: 'La terapia de pareja aborda dificultades frecuentes de la vida en común. Entre los motivos de consulta más habituales:',
          motivos,
          consiste: [
            'La terapia de pareja ofrece un espacio de comunicación, observación y toma de conciencia conjunta. A través del diálogo guiado por el terapeuta, la pareja identifica los problemas —propios y de sus entornos familiares—, negocia límites y desactiva los patrones de conducta que dañan el vínculo e impiden la complicidad y la intimidad. Sobre esa base, es posible adoptar acuerdos que ayuden a superar los desencuentros, fortalecer la convivencia y proyectar el futuro en común.',
            'Es psicoterapia conducida por un psicólogo clínico, en la que participan ambos integrantes. Comienza con una evaluación de la historia y los patrones de la relación, define objetivos compartidos y combina el trabajo en sesión con ejercicios entre sesiones.',
          ],
          moreTxt: 'Cómo funciona y qué esperar: la guía completa',
          moreHref: '/blog/terapia-de-pareja-como-funciona',
          valor: '$60.000',
          teamIntro: 'El equipo clínico de SUBJETIVIDADES atiende terapia de pareja. Todos son psicólogos clínicos con formación de excelencia y experiencia.',
          team: equipo,
          reviews: googleReviewSets.pareja,
          faqs,
          ctaH: 'Atención profesional para tu relación',
        }}
      />
    </>
  );
}
