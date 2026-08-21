import type { Metadata } from 'next';
import ServiceRedesign from '@/components/ServiceRedesign';
import { waHref, WA_MESSAGES } from '@/lib/whatsapp';
import { teamByIds } from '@/lib/team';
import { googleReviewSets } from '@/components/sections/DanielReyes_GoogleReviews';

const BASE_URL = 'https://subjetividades.cl';

const WHATSAPP_URL = waHref(WA_MESSAGES.adolescentes);

export const metadata: Metadata = {
  title: 'Terapia para Adolescentes en Santiago y online | SUBJETIVIDADES',
  description:
    'Psicoterapia para adolescentes en Ñuñoa, Santiago, y por videollamada en todo Chile. Ansiedad, ánimo, autoestima, identidad y vínculos familiares, con psicólogos clínicos con experiencia en adolescentes.',
  alternates: { canonical: `${BASE_URL}/terapia-adolescentes` },
  openGraph: {
    title: 'Terapia para Adolescentes en Santiago y online | SUBJETIVIDADES',
    description:
      'Psicoterapia para adolescentes en Ñuñoa, Santiago, y online para todo Chile, con psicólogos clínicos con experiencia en adolescentes.',
    url: `${BASE_URL}/terapia-adolescentes`,
    siteName: 'Subjetividades. PsicologÃ­a ClÃ­nica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/daniel-reyes/photos/adolescente-consulta.jpg`,
        width: 1600,
        height: 900,
        alt: 'Terapia para adolescentes en SUBJETIVIDADES, Ñuñoa, Santiago',
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
    q: '¿El adolescente asiste solo o con su familia?',
    a: 'Habitualmente el proceso es individual, con espacios de conversación con la familia cuando aportan al tratamiento. La modalidad se define en la evaluación inicial, según la edad y el motivo de consulta.',
  },
  {
    q: '¿Qué se conversa con los padres o cuidadores?',
    a: 'El proceso resguarda la confianza del adolescente. Con la familia se comparte lo necesario para acompañar el tratamiento y su bienestar, cuidando siempre la confidencialidad del espacio terapéutico.',
  },
  {
    q: '¿A partir de qué edad?',
    a: 'El servicio está orientado a adolescentes. Si tienes dudas sobre si es el espacio adecuado para tu hijo o hija, escríbenos y te orientamos sin compromiso.',
  },
  {
    q: '¿La modalidad online es efectiva?',
    a: 'Sí. La atención por videollamada permite desarrollar el proceso con resultados comparables a la atención presencial, y suele ser cómoda para las y los adolescentes.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Terapia para adolescentes', item: `${BASE_URL}/terapia-adolescentes` },
      ],
    },
    {
      '@type': 'Service',
      serviceType: 'Terapia psicológica para adolescentes',
      name: 'Terapia para adolescentes en Santiago',
      url: `${BASE_URL}/terapia-adolescentes`,
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
  'Ansiedad, angustia o estrés escolar.',
  'Ánimo bajo, desmotivación o tristeza persistente.',
  'Autoestima, identidad y cambios propios de esta etapa.',
  'Conflictos familiares y dificultades de comunicación.',
  'Relaciones con pares, pertenencia y uso de redes sociales.',
  'Regulación emocional y manejo de la frustración.',
];

const equipo = teamByIds(['allison-rowe', 'fernando-bravo']);

export default function TerapiaAdolescentesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <ServiceRedesign
        c={{
          crumb: 'Terapia para adolescentes',
          h1: 'Terapia para adolescentes en Santiago',
          lead: 'Psicoterapia para adolescentes orientada a acompañar esta etapa de cambios, comprender el malestar y desarrollar recursos emocionales. Presencial en Ñuñoa y por videollamada en todo Chile.',
          waUrl: WHATSAPP_URL,
          heroImg: '/daniel-reyes/photos/adolescente-consulta.jpg',
          trust: [
            ['Experiencia clínica', 'con adolescentes'],
            ['Psicólogos colegiados', 'con especialización'],
            ['Reembolso Isapre', 'boleta de honorarios'],
            ['Presencial y online', 'Ñuñoa y todo Chile'],
          ],
          s1h: 'Cuándo consultar',
          s1intro: 'La adolescencia trae cambios intensos y desafíos nuevos. Consultar a tiempo ayuda a transitarlos mejor. Entre los motivos más frecuentes:',
          motivos,
          consiste: [
            'La terapia para adolescentes es un espacio propio, confidencial y de confianza, donde cada joven puede expresar lo que le ocurre a su ritmo. El trabajo respeta su autonomía y, al mismo tiempo, considera el contexto familiar y escolar en el que vive.',
            'La psicoterapia considera al adolescente en relación con sus vínculos importantes —familia, amistades, colegio— y ayuda a comprender el malestar y a desarrollar recursos emocionales para enfrentar los desafíos propios de esta etapa.',
            'Es psicoterapia conducida por un psicólogo o psicóloga clínica. Comienza con una evaluación del motivo de consulta, define objetivos junto al adolescente y su familia cuando corresponde, y revisa periódicamente el avance.',
          ],
          moreTxt: '¿Cuándo conviene consultar? 7 señales',
          moreHref: '/blog/cuando-ir-al-psicologo',
          valor: '$50.000',
          teamIntro: 'La terapia para adolescentes en SUBJETIVIDADES la atienden Allison Rowe Carrasco y Fernando Bravo Matheu, psicólogos clínicos con experiencia en la atención de adolescentes.',
          team: equipo,
          reviews: googleReviewSets.centro,
          faqs,
          ctaH: 'Acompañamiento para esta etapa',
        }}
      />
    </>
  );
}
