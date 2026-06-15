import type { Metadata } from 'next';
import {
  DanielReyes_Navigation,
  DanielReyes_HeroSection,
  DanielReyes_CentroSection,
  DanielReyes_ServicesSection,
  DanielReyes_TeamSection,
  DanielReyes_EnfoqueSection,
  DanielReyes_TestimonialsSection,
  DanielReyes_IsapreGallery,
  DanielReyes_FAQSection,
  DanielReyes_ContactSection,
  DanielReyes_Footer,
  DanielReyes_StickyMobileCTA,
  DanielReyes_MapSection,
  DanielReyes_PressSection,
  DanielReyes_WhatsAppFloat,
} from '@/components/sections';

const BASE_URL = 'https://subjetividades.cl';

export const metadata: Metadata = {
  title: 'Psicólogo clínico en Ñuñoa, Santiago | SUBJETIVIDADES',
  description:
    'Centro de psicología clínica en Ñuñoa, Santiago. Terapia individual, de pareja y sexual con más de 20 años de experiencia. Atención presencial y online en todo Chile.',
  keywords: [
    'psicólogo Ñuñoa',
    'psicólogo Santiago',
    'terapia de pareja Santiago',
    'psicología clínica Santiago',
    'terapia sexual Santiago',
    'psicoterapia online Chile',
    'psicólogo clínico',
    'salud mental Santiago',
    'SUBJETIVIDADES',
  ],
  openGraph: {
    title: 'Psicólogo clínico en Ñuñoa, Santiago | SUBJETIVIDADES',
    description:
      'Terapia individual, de pareja y sexual con más de 20 años de experiencia. Atención presencial y online en todo Chile.',
    url: BASE_URL,
    siteName: 'SUBJETIVIDADES',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/daniel-reyes/photos/waiting-room.png`,
        width: 1200,
        height: 630,
        alt: 'Sala de espera SUBJETIVIDADES — Centro de Psicología Clínica en Ñuñoa, Santiago',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicólogo clínico en Ñuñoa, Santiago | SUBJETIVIDADES',
    description:
      'Terapia individual, de pareja y sexual. Atención presencial en Ñuñoa y online en todo Chile.',
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
    {
      '@type': ['MedicalBusiness', 'LocalBusiness'],
      '@id': `${BASE_URL}/#clinic`,
      name: 'SUBJETIVIDADES — Centro de Psicología Clínica',
      description:
        'Centro de psicología clínica en Ñuñoa, Santiago. Psicoterapia individual, de pareja y sexual con enfoque basado en evidencia. Más de 20 años de experiencia.',
      url: BASE_URL,
      telephone: '+56937389719',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Alonso de Ercilla 2959',
        addressLocality: 'Ñuñoa',
        addressRegion: 'Santiago',
        addressCountry: 'CL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.4537,
        longitude: -70.6113,
      },
      medicalSpecialty: 'Clinical Psychology',
      availableService: [
        { '@type': 'MedicalTherapy', name: 'Terapia Individual' },
        { '@type': 'MedicalTherapy', name: 'Terapia de Pareja' },
        { '@type': 'MedicalTherapy', name: 'Terapia Sexual' },
      ],
      priceRange: '$$',
      currenciesAccepted: 'CLP',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '17',
        bestRating: '5',
        worstRating: '1',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      serviceArea: {
        '@type': 'AdministrativeArea',
        name: 'Santiago, Chile',
      },
      hasMap: 'https://maps.google.com/?q=Alonso+de+Ercilla+2959+Ñuñoa+Santiago+Chile',
    },
    {
      '@type': 'Physician',
      '@id': `${BASE_URL}/#dr-daniel-reyes`,
      name: 'Daniel Reyes Pace',
      jobTitle: 'Director Clínico y Fundador',
      description:
        'Psicólogo clínico con doctorado de la Universidad de Chile y más de 20 años de experiencia. Consultor internacional especializado en psicoterapia basada en evidencia.',
      worksFor: { '@id': `${BASE_URL}/#clinic` },
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
      '@type': 'Physician',
      '@id': `${BASE_URL}/#fernando-bravo`,
      name: 'Fernando Bravo Matheu',
      jobTitle: 'Psicólogo Clínico',
      description:
        'Psicólogo de la Universidad Diego Portales con formación en clínica psicoanalítica de Winnicott. Especializado en adolescentes, adultos y terapia de pareja.',
      worksFor: { '@id': `${BASE_URL}/#clinic` },
      knowsAbout: ['Terapia individual', 'Terapia de pareja', 'Psicología adolescente'],
    },
    {
      '@type': 'Physician',
      '@id': `${BASE_URL}/#allison-rowe`,
      name: 'Allison Rowe Carrasco',
      jobTitle: 'Psicóloga Clínica',
      description:
        'Psicóloga de la Universidad de Chile, diplomada en Terapia Sistémica y Familiar. 8 años de experiencia en atención individual y de parejas.',
      worksFor: { '@id': `${BASE_URL}/#clinic` },
      knowsAbout: ['Terapia individual', 'Terapia sistémica', 'Terapia de pareja'],
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
            text: 'Emitimos boleta de honorarios para que puedas solicitar reembolso parcial en tu Isapre (Banmédica, Colmena, Consalud, Cruz Blanca, Vida Tres) o Fonasa. El porcentaje de reembolso depende de tu plan.',
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
          name: '¿Puedo agendar sin llamar por teléfono?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Puedes agendar directamente con cada profesional desde la sección Equipo, o completando el formulario de contacto en esta página. Respondemos en menos de 2 horas en día hábil.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si necesito cancelar una sesión?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pedimos aviso con al menos 24 horas de anticipación. Las cancelaciones con menos de 24 horas se cobran como sesión tomada, salvo emergencias justificadas.',
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'SUBJETIVIDADES',
      inLanguage: 'es-CL',
      publisher: { '@id': `${BASE_URL}/#clinic` },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div
        className="bg-white text-slate-700"
        style={{
          fontFamily:
            "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <DanielReyes_Navigation />
        <main>
          <DanielReyes_HeroSection />
          <DanielReyes_CentroSection />
          <DanielReyes_IsapreGallery />
          <DanielReyes_ServicesSection />
          <DanielReyes_TeamSection />
          <DanielReyes_EnfoqueSection />
          <DanielReyes_PressSection />
          <DanielReyes_TestimonialsSection />
          <DanielReyes_FAQSection />
          <DanielReyes_ContactSection />
          <DanielReyes_MapSection />
        </main>
        <DanielReyes_Footer />
        <DanielReyes_StickyMobileCTA />
        <DanielReyes_WhatsAppFloat />
      </div>
    </>
  );
}
