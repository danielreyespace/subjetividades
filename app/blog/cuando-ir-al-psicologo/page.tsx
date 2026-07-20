import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: '¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo profesional',
  description:
    'Muchas personas esperan llegar a una crisis para buscar ayuda. Conoce las 7 señales concretas que indican que es momento de consultar con un psicólogo clínico en Santiago.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/cuando-ir-al-psicologo',
  },
  openGraph: {
    title: '¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo profesional',
    description:
      'Conoce las señales concretas que indican que es momento de buscar ayuda psicológica. Guía del equipo clínico de SUBJETIVIDADES, Ñuñoa, Santiago.',
    url: 'https://subjetividades.cl/blog/cuando-ir-al-psicologo',
    type: 'article',
    locale: 'es_CL',
    authors: ['Daniel Reyes Pace'],
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/photos/consultation-session.png',
        width: 1200,
        height: 630,
        alt: 'Sesión de consulta psicológica en SUBJETIVIDADES, Ñuñoa, Santiago',
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
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://subjetividades.cl/blog/cuando-ir-al-psicologo',
      headline: '¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo profesional',
      description:
        'Muchas personas esperan llegar a una crisis para buscar ayuda. Conoce las 7 señales concretas que indican que es momento de consultar con un psicólogo clínico.',
      datePublished: '2025-04-02',
      dateModified: '2025-04-02',
      inLanguage: 'es-CL',
      author: {
        '@type': 'Physician',
        name: 'Daniel Reyes Pace',
        jobTitle: 'Psicólogo clínico, Director SUBJETIVIDADES',
      },
      publisher: {
        '@type': 'MedicalBusiness',
        name: 'Subjetividades. Psicología Clínica',
        url: 'https://subjetividades.cl',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Necesito estar en crisis para ir al psicólogo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. La terapia es más efectiva — y más corta — cuando se inicia antes de llegar a una crisis. Muchas personas consultan para crecer personalmente, mejorar relaciones o manejar mejor el estrés cotidiano.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuándo buscar ayuda de urgencia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Si tienes pensamientos de hacerte daño o de suicidio, busca ayuda inmediatamente. En Chile puedes llamar al Fono Salud Responde: 600 360 7777 (gratuito, disponible 24/7) o acudir al SAPU más cercano.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es normal sentir miedo de ir al psicólogo por primera vez?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Completamente normal. El miedo a ser juzgado, no saber qué decir o sentir que "no es suficientemente grave" son barreras muy comunes. La primera sesión está diseñada precisamente para hacer que ese primer paso sea lo más cómodo posible.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuántas sesiones necesito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende de cada caso. Hay procesos focalizados de 8 a 12 sesiones y otros más extensos. Desde la primera sesión te damos una estimación honesta. Lo importante es que no empieces comprometido a nada — la primera sesión es sin compromiso.',
          },
        },
      ],
    },
  ],
};

export default function CuandoIrAlPsicologoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="max-w-[760px] mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="text-[13px] text-slate-400 mb-8">
          <a href="/" className="hover:text-teal-600 no-underline transition-colors">
            Inicio
          </a>
          {' / '}
          <a href="/blog" className="hover:text-teal-600 no-underline transition-colors">
            Blog
          </a>
          {' / '}
          <span className="text-slate-600">¿Cuándo ir al psicólogo?</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">
              Guías
            </span>
            <span className="text-[12px] text-slate-400">2 de abril, 2025 · 6 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            ¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo profesional
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Muchas personas esperan llegar a un punto de crisis antes de buscar ayuda. Sin embargo, la terapia es más efectiva — y más rápida — cuando se inicia antes de ese punto. Aquí te contamos las señales que no debes ignorar.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-3">
            <div>
              <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
              <div className="text-[13px] text-slate-400">Psicólogo clínico · Director SUBJETIVIDADES</div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-slate max-w-none">
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Una de las preguntas más frecuentes que recibimos en SUBJETIVIDADES es simple pero poderosa: <strong>¿cómo sé si realmente necesito ir al psicólogo?</strong> La respuesta corta es que no existe un umbral de sufrimiento que debes alcanzar para "merecer" ayuda. La terapia psicológica es un recurso de salud, no un último recurso.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Dicho eso, hay señales concretas que indican que hablar con un profesional puede marcar una diferencia real en tu vida.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">
            1. El estrés o la ansiedad interfieren con tu vida diaria
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Cierto nivel de estrés es normal. El problema aparece cuando la ansiedad empieza a limitar lo que puedes hacer: evitas situaciones, no puedes dormir, tu rendimiento laboral baja, o tu cuerpo reacciona con síntomas físicos (tensión, dolores de cabeza, problemas digestivos). Cuando el estrés pasa de ser un estado temporal a una forma de vida, es momento de buscar apoyo.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">
            2. Tu estado de ánimo persiste más de dos semanas
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Todos tenemos días malos. Pero si llevas más de dos semanas sintiéndote triste, vacío, irritable o sin motivación para cosas que antes disfrutabas, eso ya no es "un mal momento" — es una señal clínica que merece atención. La depresión, a diferencia de la tristeza normal, no desaparece sola con el tiempo.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">
            3. Estás usando el alcohol, la comida u otras conductas para "aliviar"
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Comer de más, beber con frecuencia, el uso compulsivo de redes sociales, los atracones de series o el trabajo excesivo pueden ser maneras de evitar un malestar emocional que no sabemos cómo manejar. Si reconoces este patrón en ti — usar algo externo para no sentir algo interno — la terapia puede ayudarte a trabajar la raíz del problema.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">
            4. Tus relaciones están siendo afectadas
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Si te encuentras en conflictos frecuentes con tu pareja, familia o amigos, si te cuesta conectar emocionalmente con las personas que quieres, o si sientes que nadie te entiende — estas son señales de que algo interno necesita atención. Las dificultades en las relaciones casi siempre tienen una dimensión psicológica que la terapia puede abordar.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">
            5. Has vivido una pérdida o cambio significativo
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Duelo por un ser querido, separación, pérdida de trabajo, diagnóstico de enfermedad, un cambio de vida importante — cualquiera de estos puede desestabilizar emocionalmente incluso a personas muy resilientes. No hay que esperar a "no poder más". Acompañarte durante estos momentos es exactamente el tipo de trabajo que hacemos en terapia.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">
            6. Tienes pensamientos recurrentes que te generan malestar
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Pensamientos intrusivos, rumiación constante, culpa excesiva, pensamientos catastróficos o una crítica interna que no te da tregua — estos patrones mentales pueden agotarte profundamente aunque nadie más los vea. Son tratables. La terapia cognitivo-conductual y otras modalidades tienen herramientas específicas para esto.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">
            7. Simplemente sientes que algo no está bien
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            No siempre hay una señal evidente. A veces solo hay una sensación difusa de que algo no cuadra — que no eres completamente tú, que podrías estar mejor, que algo te frena pero no sabes qué. Ese malestar impreciso también es válido. No necesitas una diagnosis para comenzar terapia.
          </p>

          <div className="bg-teal-50 border border-teal-100 rounded-[12px] p-6 my-10">
            <h3 className="text-base font-bold text-teal-900 mb-2">Nota de crisis</h3>
            <p className="text-[15px] text-teal-800 leading-relaxed">
              Si tienes pensamientos de hacerte daño o de suicidio, busca ayuda de inmediato. En Chile puedes llamar al <strong>Fono Salud Responde: 600 360 7777</strong> (gratuito, disponible 24/7) o acudir al SAPU más cercano. No estás solo/a.
            </p>
          </div>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">
            ¿Qué pasa en la primera sesión?
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            En SUBJETIVIDADES, la primera sesión es una evaluación. Conversamos sobre lo que te trae a consulta, tu historia relevante y definimos juntos los objetivos del proceso. No hay compromiso de continuar si no te sientes cómodo o cómoda. Dura entre 50 y 60 minutos, y puede realizarse de forma presencial en Ñuñoa (Santiago) o por videollamada desde cualquier lugar de Chile.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-slate-800 mb-2">
                ¿Necesito estar en crisis para ir al psicólogo?
              </h3>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                No. La terapia es más efectiva — y más corta — cuando se inicia antes de llegar a una crisis. Muchas personas consultan para crecer personalmente, mejorar sus relaciones o manejar mejor el estrés cotidiano.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-800 mb-2">
                ¿Es normal sentir miedo de ir al psicólogo por primera vez?
              </h3>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                Completamente normal. El miedo a ser juzgado, no saber qué decir o sentir que "no es suficientemente grave" son barreras muy comunes. La primera sesión está diseñada precisamente para hacer ese primer paso lo más cómodo posible.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-800 mb-2">
                ¿Cuántas sesiones voy a necesitar?
              </h3>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                Depende de cada caso. Hay procesos focalizados de 8 a 12 sesiones y otros más extensos. Desde la primera sesión te damos una estimación honesta. No empieces comprometido a nada — la primera sesión es sin compromiso.
              </p>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-12 border-t border-slate-100 pt-10">
          <h2 className="text-base font-bold text-slate-900 mb-5">Artículos relacionados</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/blog/diferencia-psicologo-psiquiatra"
              className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group"
            >
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">
                ¿Psicólogo o psiquiatra? Guía práctica para saber cuál necesitas
              </div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a
              href="/blog/costo-sesion-psicologia-santiago"
              className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group"
            >
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">
                ¿Cuánto cuesta una sesión de psicología en Santiago 2026?
              </div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 bg-slate-900 rounded-[14px] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">¿Reconoces alguna de estas señales?</h2>
          <p className="text-slate-400 text-sm mb-5">
            El primer paso es el más difícil. Agenda una primera consulta — sin compromiso, presencial en Ñuñoa u online.
          </p>
          <SchedulingLink className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-teal-700 transition-colors">
            Agendar primera consulta
          </SchedulingLink>
        </div>
      </main>
    </>
  );
}
