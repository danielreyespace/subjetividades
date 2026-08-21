import type { Metadata } from 'next';
import ServiceRedesign from '@/components/ServiceRedesign';
import { waHref, WA_MESSAGES } from '@/lib/whatsapp';
import { teamByIds } from '@/lib/team';
import { googleReviewSets } from '@/components/sections/DanielReyes_GoogleReviews';

const BASE_URL = 'https://subjetividades.cl';

const WHATSAPP_URL = waHref(WA_MESSAGES.sexual);

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
  'Bajo deseo o discrepancia de deseo en la pareja.',
  'Disfunción eréctil y dificultades de eyaculación.',
  'Dificultades para alcanzar el orgasmo.',
  'Dolor o dificultad en las relaciones sexuales.',
  'Conflictos con la identidad, la orientación o el género.',
  'Vínculos no monógamos y dudas sobre VIH u otras ITS.',
];

const equipo = teamByIds(['daniel-reyes']);

export default function TerapiaSexualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <ServiceRedesign
        c={{
          crumb: 'Terapia sexual',
          h1: 'Terapia sexual en Santiago',
          lead: 'Psicoterapia especializada en las dificultades sexuales y consejería sexual, con atención profesional, confidencial y sin prejuicios. Presencial en Ñuñoa y por videollamada en todo Chile.',
          waUrl: WHATSAPP_URL,
          heroImg: '/daniel-reyes/photos/daniel-reyes-consulta.jpg',
          trust: [
            ['+20 años', 'de experiencia clínica'],
            ['Psicólogo colegiado', 'especialista en sexualidad'],
            ['Reembolso Isapre', 'boleta de honorarios'],
            ['Presencial y online', 'Ñuñoa y todo Chile'],
          ],
          s1h: 'Qué aborda',
          s1intro: 'La consulta reúne tanto el tratamiento de disfunciones como el acompañamiento de otros aspectos de la sexualidad. Entre los motivos más frecuentes:',
          motivos,
          consiste: [
            'La terapia sexual es psicoterapia focalizada en el tratamiento de las disfunciones sexuales: trastornos del deseo, disfunción eréctil, trastornos orgásmicos y de la excitación, eyaculación precoz o retardada y dolor en las relaciones sexuales.',
            'La consejería sexual, por su parte, es una conversación y guía sobre distintos aspectos de la sexualidad de las personas y las parejas. Además de ayudar a resolver dificultades, proporciona información y herramientas sobre sexualidad y género, acompaña procesos biográficos y conflictos con la identidad, aborda desafíos en vínculos no monógamos y resuelve dudas sobre VIH y otras ITS.',
            'En ambos casos es trabajo conversacional y estructurado, conducido por un psicólogo clínico: en sesión no existe ningún tipo de contacto físico ni examen corporal.',
          ],
          moreTxt: 'Qué es la terapia sexual: medio siglo de una disciplina clínica',
          moreHref: '/blog/terapia-sexual',
          valor: '$60.000',
          teamIntro: 'La terapia sexual en SUBJETIVIDADES la atiende Daniel Reyes Pace, psicólogo clínico especialista en terapia de pareja y sexual.',
          team: equipo,
          reviews: googleReviewSets.sexual,
          faqs,
          ctaH: 'Atención profesional, confidencial y sin prejuicios',
        }}
      />
    </>
  );
}
