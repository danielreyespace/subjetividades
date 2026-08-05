import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: 'Ser adolescente hoy: cambios sociales, redes y cuándo pedir ayuda',
  description:
    'La adolescencia transcurre en una sociedad que cambia rápido. Por qué las redes son un desafío compartido —no solo de los jóvenes— y cuándo conviene consultar con especialistas. SUBJETIVIDADES, Ñuñoa, Santiago.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/adolescencia-cambios-sociales-redes',
  },
  openGraph: {
    title: 'Ser adolescente hoy: cambios sociales, redes y cuándo pedir ayuda',
    description:
      'Los cambios acelerados de la sociedad son un desafío para todos, también para los adolescentes. Qué rol juegan las redes y cuándo buscar apoyo profesional.',
    url: 'https://subjetividades.cl/blog/adolescencia-cambios-sociales-redes',
    type: 'article',
    locale: 'es_CL',
    authors: ['Subjetividades. Psicología Clínica'],
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/photos/adolescente-consulta.jpg',
        width: 1600,
        height: 900,
        alt: 'Adolescente en sesión de psicoterapia en SUBJETIVIDADES, Ñuñoa, Santiago',
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
      headline: 'Ser adolescente hoy: cambios sociales, redes y cuándo pedir ayuda',
      datePublished: '2026-08-04',
      dateModified: '2026-08-04',
      inLanguage: 'es-CL',
      author: {
        '@type': 'Organization',
        name: 'Subjetividades. Psicología Clínica',
        url: 'https://subjetividades.cl',
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
          name: '¿Las redes sociales son malas para los adolescentes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No en sí mismas: son un desafío que hay que aprender a manejar, no una amenaza que baste con prohibir. Además, el uso intensivo de pantallas no es exclusivo de los jóvenes; los adultos pasan tanto tiempo conectados como ellos. La tarea no es demonizar a los adolescentes, sino acompañarlos en desarrollar criterios de uso.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo sé si mi hijo o hija necesita terapia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La adolescencia incluye altos y bajos normales. Conviene consultar cuando el malestar se sostiene en el tiempo, cuando la ansiedad o el ánimo bajo limitan la vida diaria, cuando hay aislamiento, cambios marcados en sueño o alimentación, caída en el rendimiento escolar o señales de daño. No hace falta un diagnóstico previo ni esperar a una crisis para pedir orientación.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El adolescente asiste solo o con su familia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Habitualmente el proceso es individual, con espacios de conversación con la familia cuando aportan al tratamiento. Se resguarda la confianza del adolescente y se comparte con los adultos lo necesario para acompañar su bienestar. La modalidad se define en la evaluación inicial, según la edad y el motivo de consulta.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué acudir a un especialista y no a consejos generales?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La terapia con adolescentes requiere formación específica: generar confianza con un joven, resguardar la confidencialidad, trabajar con la familia sin romper ese vínculo, distinguir la turbulencia propia de la etapa de las señales clínicas y coordinar con el colegio o la medicina cuando corresponde. Los consejos bienintencionados o los contenidos genéricos de internet no reemplazan un proceso conducido por profesionales.',
          },
        },
      ],
    },
  ],
};

export default function AdolescenciaCambiosSocialesRedesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="max-w-[760px] mx-auto px-6 py-16">
        <nav className="text-[13px] text-slate-400 mb-8">
          <a href="/" className="hover:text-teal-600 no-underline transition-colors">Inicio</a>
          {' / '}
          <a href="/blog" className="hover:text-teal-600 no-underline transition-colors">Blog</a>
          {' / '}
          <span className="text-slate-600">Ser adolescente hoy</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Salud mental</span>
            <span className="text-[12px] text-slate-400">4 de agosto, 2026 · 6 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Ser adolescente hoy: cambios sociales, redes y cuándo pedir ayuda
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            La adolescencia siempre ha sido una etapa de cambios. Hoy, además, transcurre dentro de una sociedad que cambia a gran velocidad: eso es exigente para todos —también para los adultos— y los adolescentes lo transitan con menos años de experiencia a cuestas. No se trata de una “generación en crisis”, sino de una etapa a acompañar en un contexto nuevo.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Equipo de SUBJETIVIDADES</div>
            <div className="text-[13px] text-slate-400">Centro de Psicología Clínica · Ñuñoa, Santiago</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <div className="bg-teal-50 border border-teal-100 rounded-[12px] p-5 mb-8">
            <p className="text-[15px] text-slate-600 leading-relaxed m-0">
              Este artículo retoma, para nuestros lectores, una idea que Daniel Reyes Pace planteó en su columna{' '}
              <a
                href="https://www.elmostrador.cl/noticias/opinion/columnas/2026/07/04/envejecer-sin-sindicato-sin-partido-y-sin-parroquia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 font-semibold"
              >
                “Envejecer sin sindicato, sin partido y sin parroquia”
              </a>
              , publicada en El Mostrador: el uso intensivo de pantallas no es un rasgo exclusivo de los jóvenes.
            </p>
          </div>

          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">Crecer en una época de cambios acelerados</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La tarea de la adolescencia es, en buena parte, construir una identidad propia: decidir en quién confiar, a qué grupo pertenecer, qué se quiere y qué no. Ese trabajo se hace mirando el mundo adulto y las referencias disponibles. El problema no es que los adolescentes de hoy sean distintos, sino que el mundo que observan cambia más rápido que antes: el trabajo, la tecnología, las formas de familia y el modo en que circula la información se transforman en pocos años.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Ese ritmo es exigente para cualquiera. Muchos adultos también sienten que van un paso atrás de los cambios. Conviene tenerlo presente, porque cuando algo le cuesta a un adolescente es fácil leerlo como un defecto de su generación, cuando muchas veces es la versión joven de una dificultad que compartimos todos.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Las redes sociales: un desafío que no es solo de ellos</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Las redes sociales plantean desafíos reales: la comparación permanente, la sensación de estar siempre disponible, el efecto sobre el sueño o la exposición pública. Son cosas que vale la pena conversar y acompañar. Pero el relato que presenta las pantallas como un vicio propio de los jóvenes es engañoso.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            En Chile, el uso intensivo de internet entre los adultos es tan alto como el que solemos atribuir a los adolescentes: según datos de Subtel, un 52% de los adultos pasa más de cuatro horas diarias conectado. Si el objetivo fuera “usar menos pantalla”, el problema no sería exclusivamente adolescente. Por eso la tarea no es demonizar a los jóvenes ni prohibir sin más, sino ayudarlos a desarrollar criterios de uso —algo que, en el fondo, los adultos también estamos aprendiendo.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Cuándo conviene consultar</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            No todo malestar adolescente requiere terapia: los altos y bajos, el mal humor o el querer más independencia son parte esperable de la etapa. Consultar tampoco es exagerar. Es razonable buscar orientación cuando el malestar se sostiene en el tiempo o cuando aparecen señales como:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-8">
            <li>Ánimo bajo, desmotivación o tristeza que se prolongan</li>
            <li>Ansiedad o angustia que empiezan a limitar la vida diaria</li>
            <li>Aislamiento, retraimiento o pérdida de interés en lo que antes disfrutaba</li>
            <li>Cambios marcados en el sueño, la alimentación o el rendimiento escolar</li>
            <li>Conflictos familiares o con pares que escalan y no encuentran salida</li>
          </ul>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Consultar a tiempo no es sobrerreaccionar: suele hacer el proceso más breve y evita que las dificultades se instalen. No se necesita un diagnóstico previo ni esperar a una crisis para pedir una primera conversación.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Por qué con especialistas</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Acompañar a un adolescente no es dar buenos consejos. Es un trabajo clínico que requiere formación específica: generar confianza con un joven que muchas veces llega a la fuerza, resguardar su confidencialidad, involucrar a la familia sin romper ese vínculo, y distinguir la turbulencia propia de la etapa de las señales que sí requieren atención. Cuando corresponde, también implica coordinar con el colegio o con un médico.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Nada de eso lo reemplazan los contenidos genéricos de internet ni la buena voluntad de los adultos cercanos. Por eso importa que el proceso lo conduzcan psicólogos con experiencia en esta etapa.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Cómo acompañamos en SUBJETIVIDADES</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La <a href="/terapia-adolescentes" className="text-teal-700 font-semibold no-underline hover:text-teal-800">terapia para adolescentes</a> en SUBJETIVIDADES la atienden Allison Rowe Carrasco y Fernando Bravo Matheu, psicólogos clínicos con experiencia en la atención de adolescentes. El trabajo ofrece un espacio propio y de confianza para el joven, con espacios de conversación con la familia cuando aportan al proceso, y se realiza de forma presencial en Ñuñoa o por videollamada para todo Chile.
          </p>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes sobre adolescencia y terapia</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Las redes sociales son malas para los adolescentes?',
                a: 'No en sí mismas: son un desafío que hay que aprender a manejar, no una amenaza que baste con prohibir. Además, el uso intensivo de pantallas no es exclusivo de los jóvenes; los adultos pasan tanto tiempo conectados como ellos. La tarea no es demonizar a los adolescentes, sino acompañarlos en desarrollar criterios de uso.',
              },
              {
                q: '¿Cómo sé si mi hijo o hija necesita terapia?',
                a: 'La adolescencia incluye altos y bajos normales. Conviene consultar cuando el malestar se sostiene en el tiempo, cuando la ansiedad o el ánimo bajo limitan la vida diaria, cuando hay aislamiento, cambios marcados en sueño o alimentación, caída en el rendimiento escolar o señales de daño. No hace falta un diagnóstico previo ni esperar a una crisis para pedir orientación.',
              },
              {
                q: '¿El adolescente asiste solo o con su familia?',
                a: 'Habitualmente el proceso es individual, con espacios de conversación con la familia cuando aportan al tratamiento. Se resguarda la confianza del adolescente y se comparte con los adultos lo necesario para acompañar su bienestar. La modalidad se define en la evaluación inicial, según la edad y el motivo de consulta.',
              },
              {
                q: '¿Por qué acudir a un especialista y no a consejos generales?',
                a: 'La terapia con adolescentes requiere formación específica: generar confianza con un joven, resguardar la confidencialidad, trabajar con la familia sin romper ese vínculo, distinguir la turbulencia propia de la etapa de las señales clínicas y coordinar con el colegio o la medicina cuando corresponde. Los consejos bienintencionados o los contenidos genéricos de internet no reemplazan un proceso conducido por profesionales.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-base font-semibold text-slate-800 mb-2">{q}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-12 border-t border-slate-100 pt-10">
          <h2 className="text-base font-bold text-slate-900 mb-5">Artículos relacionados</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/blog/cuando-ir-al-psicologo" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a href="/blog/soledad-masculina-adulta" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">Hombres sin amigos: la soledad masculina en la adultez</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
          </div>
        </section>

        <div className="mt-12 bg-slate-900 rounded-[14px] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Terapia para adolescentes en SUBJETIVIDADES</h2>
          <p className="text-slate-400 text-sm mb-5">
            Un espacio de confianza para esta etapa. Presencial en Ñuñoa, Santiago, u online para todo Chile.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/terapia-adolescentes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-teal-700 transition-colors"
            >
              Conoce el servicio
            </a>
            <SchedulingLink className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-teal-400 text-teal-300 bg-transparent no-underline hover:bg-teal-400/10 transition-colors">
              Agendar primera consulta
            </SchedulingLink>
          </div>
        </div>
      </main>
    </>
  );
}
