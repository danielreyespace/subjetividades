import type { Metadata } from 'next';
import ServiceRedesign from '@/components/ServiceRedesign';
import { waHref, WA_MESSAGES } from '@/lib/whatsapp';
import { teamByIds } from '@/lib/team';
import { googleReviewSets } from '@/components/sections/DanielReyes_GoogleReviews';

const BASE_URL = 'https://subjetividades.cl';

// URL de WhatsApp con mensaje pre-escrito propio de este servicio.
const WHATSAPP_URL = waHref(WA_MESSAGES.individual);

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
  'Ansiedad, crisis de pánico y estrés sostenido.',
  'Estados depresivos, desánimo y pérdida de motivación.',
  'Duelos y pérdidas.',
  'Autoestima y autoconocimiento.',
  'Manejo de emociones difíciles: agobio, frustración, ira o tristeza.',
  'Desarrollo personal y decisiones vitales.',
];

const equipo = teamByIds(['daniel-reyes', 'fernando-bravo', 'allison-rowe']);

export default function TerapiaIndividualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <ServiceRedesign
        c={{
          crumb: 'Terapia individual',
          h1: 'Terapia individual en Santiago',
          lead: 'Psicoterapia para adultos orientada a comprender y abordar el malestar, desarrollar herramientas y proyectar la vida con mayor bienestar. Presencial en Ñuñoa y por videollamada en todo Chile.',
          waUrl: WHATSAPP_URL,
          heroImg: '/daniel-reyes/photos/daniel-reyes-consulta.jpg',
          trust: [
            ['+20 años', 'de experiencia clínica'],
            ['Psicólogos colegiados', 'con especialización'],
            ['Reembolso Isapre', 'boleta de honorarios'],
            ['Presencial y online', 'Ñuñoa y todo Chile'],
          ],
          s1h: 'Cuándo consultar',
          s1intro: 'La terapia individual aborda una amplia variedad de motivos de consulta. Entre los más frecuentes:',
          motivos,
          consiste: [
            'La terapia individual es un espacio de interacción dialógica en el que la persona explora sus procesos personales en un ambiente de comprensión, acogida y libertad. La psicoterapia permite un trabajo de introspección, guiado y contenido por un profesional con experiencia clínica, que ayuda a comprenderse y apreciarse mejor a sí mismo y a los demás.',
            'Los procesos psicoterapéuticos promueven habilidades para resolver los problemas y desafíos cotidianos, y entregan herramientas para el manejo de situaciones difíciles —agobio, frustración, ansiedad, ira o tristeza—. El trabajo respeta los ritmos de cada persona y se orienta a alcanzar un bienestar emocional significativo, que permita proyectar la vida en la dirección deseada.',
            'Es psicoterapia conducida por un psicólogo clínico. Comienza con una evaluación del motivo de consulta y la historia relevante, define objetivos y revisa periódicamente el avance.',
          ],
          moreTxt: '¿Cuándo conviene consultar? 7 señales',
          moreHref: '/blog/cuando-ir-al-psicologo',
          valor: '$50.000',
          teamIntro: 'El equipo clínico de SUBJETIVIDADES atiende terapia individual de adultos. Todos son psicólogos clínicos con formación de excelencia y experiencia.',
          team: equipo,
          reviews: googleReviewSets.individual,
          faqs,
          ctaH: 'Da el primer paso',
        }}
      />
    </>
  );
}
