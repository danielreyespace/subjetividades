import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: 'Hombres sin amigos: la soledad masculina en la adultez',
  description:
    'Por qué tantos hombres llegan a los 40, 50 o 60 años sin amigos, qué explica la soledad masculina adulta en Chile y qué puede hacer la psicoterapia. SUBJETIVIDADES, Ñuñoa, Santiago.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/soledad-masculina-adulta',
  },
  openGraph: {
    title: 'Hombres sin amigos: la soledad masculina en la adultez',
    description:
      'Por qué tantos hombres llegan a la segunda mitad de la vida sin amigos, y qué puede hacer la psicoterapia. Escrito por Daniel Reyes Pace, Director de SUBJETIVIDADES.',
    url: 'https://subjetividades.cl/blog/soledad-masculina-adulta',
    type: 'article',
    locale: 'es_CL',
    authors: ['Daniel Reyes Pace'],
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/photos/headshot-professional.png',
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
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Hombres sin amigos: la soledad masculina en la adultez',
      datePublished: '2026-07-04',
      dateModified: '2026-07-04',
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
          name: '¿Es normal llegar a los 40 o 50 años sin amigos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es frecuente, sobre todo en hombres, y tiene explicaciones sociales y biográficas: durante la primera mitad de la vida las instituciones proveen los encuentros, y cuando esas rutinas desaparecen muchas amistades se apagan por falta de mantención. Que sea frecuente no significa que sea inocuo: la soledad sostenida afecta la salud mental y física.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué a los hombres les cuesta más mantener amistades que a las mujeres?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La crianza tradicional ha orientado a los niños hacia la contención y la autosuficiencia, y a las niñas hacia la expresión afectiva. Mantener una amistad durante décadas exige expresar afecto y necesidad del otro, un repertorio que a muchos hombres no se les pidió desarrollar. El psicólogo Ronald Levant llamó a esta dificultad alexitimia masculina normativa.',
          },
        },
        {
          '@type': 'Question',
          name: '¿La psicoterapia puede ayudar con la soledad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. La terapia permite reconocer la necesidad de vínculo sin vergüenza, revisar los mandatos de autosuficiencia que la bloquean, desarrollar el repertorio afectivo para iniciar y sostener relaciones, y construir una agenda social propia. No reemplaza los vínculos, pero remueve los obstáculos internos para formarlos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuándo consultar por soledad o aislamiento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cuando la falta de vínculos produce malestar sostenido, cuando el contacto social se redujo casi por completo al trabajo o la pareja, o cuando aparecen señales asociadas como ánimo bajo, irritabilidad o aumento del consumo de alcohol. No se requiere un diagnóstico previo para consultar.',
          },
        },
      ],
    },
  ],
};

export default function SoledadMasculinaPage() {
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
          <span className="text-slate-600">Soledad masculina adulta</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Salud mental</span>
            <span className="text-[12px] text-slate-400">4 de julio, 2026 · 6 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Hombres sin amigos: la soledad masculina en la adultez
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            En la consulta, hombres chilenos mayores de cuarenta años cuentan con regularidad que no tienen o no ven a sus amigos, que el trabajo concentra casi todo su contacto con otros y que las salidas se han reducido a algún compromiso excepcional. No es una crisis puntual: es un patrón que quienes trabajamos en clínica con población adulta venimos observando desde hace años.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Doctor en Psicología, U. de Chile · Director de SUBJETIVIDADES</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <div className="bg-teal-50 border border-teal-100 rounded-[12px] p-5 mb-8">
            <p className="text-[15px] text-slate-600 leading-relaxed m-0">
              Este artículo desarrolla, para nuestros lectores, las ideas de la columna{' '}
              <a
                href="https://www.elmostrador.cl/noticias/opinion/columnas/2026/07/04/envejecer-sin-sindicato-sin-partido-y-sin-parroquia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 font-semibold"
              >
                “Envejecer sin sindicato, sin partido y sin parroquia”
              </a>
              , publicada por Daniel Reyes Pace en El Mostrador el 4 de julio de 2026.
            </p>
          </div>

          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">Una abundancia que engaña</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Para entender la soledad masculina adulta conviene mirar la biografía completa. Durante las primeras décadas de la vida, la familia, el colegio, la universidad y el primer empleo proveen encuentros diarios, pares disponibles y rutinas compartidas: nadie necesita iniciativa relacional para tener con quién estar. Esa abundancia deja instalada una sensación engañosa — que los vínculos, una vez formados, se sostienen solos.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            La premisa se pone a prueba en la adultez. Hacia los treinta, la energía se concentra en el proyecto familiar y el trabajo, y las amistades pasan a segundo plano bajo el supuesto de que seguirán ahí cuando haya tiempo. Entre los cincuenta y los sesenta — cuando los hijos se van de la casa y muchas parejas se separan — la premisa muestra su fragilidad. Las mujeres suelen haber sostenido por sí mismas el contacto con la familia extendida y las amigas. A muchos hombres, en cambio, ese momento los encuentra sin agenda social propia: la pareja organizaba los encuentros, los hijos traían movimiento a la casa y el trabajo era la actividad principal de la semana.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Un entrenamiento que faltó</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La diferencia entre hombres y mujeres tiene un origen temprano. La crianza tradicional ha orientado a las niñas hacia la expresión afectiva y a los niños hacia la contención y la autosuficiencia. El psicólogo Ronald Levant llamó <em>alexitimia masculina normativa</em> a la consecuencia de ese entrenamiento: una dificultad de origen cultural — no una enfermedad — para identificar y poner en palabras los estados afectivos, en particular los que exponen vulnerabilidad o necesidad de otros.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Mantener una amistad durante décadas exige decir “te echo de menos” y proponer un encuentro sin pretexto. A muchos hombres nunca se les pidió desarrollar ese repertorio, porque durante la primera mitad de la vida no les hizo falta: las instituciones ponían la ocasión.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Las instituciones que ya no están</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Durante buena parte del siglo XX, el sindicato, el partido y la parroquia organizaban asambleas, campañas y liturgias donde la sociabilidad venía incluida. Cumplían para los adultos la función que la escuela cumple en la infancia: poner la ocasión de encuentro sin exigir iniciativa individual. En pocas décadas ese andamiaje se desmontó sin reemplazo. La identificación con partidos políticos cayó de un 80% en 1990 a un 22% hacia 2019; la sindicalización, de cerca de un 35% a inicios de los setenta a en torno a un 16% hoy; la identificación católica, de más de un 75% a un 54% en el Censo 2024. Y un 76% de los jóvenes no participa en ninguna organización de barrio.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            El resultado es exigente: un hombre de sesenta años que quiere compañía tiene que reconocer que la necesita y poner en palabras el deseo de ver y ser visto — sin que nadie lo haya entrenado para eso, y en un momento de la vida en que ninguna institución se lo propone.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Qué puede hacer la psicoterapia</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La soledad no es un diagnóstico, pero sí un factor de riesgo documentado para la depresión, la ansiedad y el deterioro de la salud física. Y tiene una particularidad: rara vez es el motivo de consulta declarado. Los hombres suelen llegar a terapia por irritabilidad, ánimo bajo, problemas de pareja o consumo de alcohol, y la falta de vínculos aparece más tarde, cuando hay confianza para nombrarla.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            Una psicoterapia atenta a esta realidad trabaja en varios planos:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-8">
            <li>Reconocer la necesidad de vínculo sin leerla como fracaso personal</li>
            <li>Revisar los mandatos de autosuficiencia que bloquean la expresión de afecto</li>
            <li>Desarrollar el repertorio concreto: retomar contactos, proponer encuentros, sostenerlos</li>
            <li>Construir una agenda social propia, no delegada en la pareja o los hijos</li>
            <li>Explorar modelos de masculinidad más abiertos a otra gestión de los afectos</li>
          </ul>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            En SUBJETIVIDADES atendemos estos procesos en terapia individual, presencial en Ñuñoa o por videollamada para todo Chile, con un equipo con experiencia clínica en población adulta y en las exigencias particulares que la socialización masculina impone sobre la vida afectiva.
          </p>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes sobre soledad masculina</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Es normal llegar a los 40 o 50 años sin amigos?',
                a: 'Es frecuente, sobre todo en hombres, y tiene explicaciones sociales y biográficas: durante la primera mitad de la vida las instituciones proveen los encuentros, y cuando esas rutinas desaparecen muchas amistades se apagan por falta de mantención. Que sea frecuente no significa que sea inocuo: la soledad sostenida afecta la salud mental y física.',
              },
              {
                q: '¿Por qué a los hombres les cuesta más mantener amistades que a las mujeres?',
                a: 'La crianza tradicional ha orientado a los niños hacia la contención y la autosuficiencia, y a las niñas hacia la expresión afectiva. Mantener una amistad durante décadas exige expresar afecto y necesidad del otro, un repertorio que a muchos hombres no se les pidió desarrollar. El psicólogo Ronald Levant llamó a esta dificultad alexitimia masculina normativa.',
              },
              {
                q: '¿La psicoterapia puede ayudar con la soledad?',
                a: 'Sí. La terapia permite reconocer la necesidad de vínculo sin vergüenza, revisar los mandatos de autosuficiencia que la bloquean, desarrollar el repertorio afectivo para iniciar y sostener relaciones, y construir una agenda social propia. No reemplaza los vínculos, pero remueve los obstáculos internos para formarlos.',
              },
              {
                q: '¿Cuándo consultar por soledad o aislamiento?',
                a: 'Cuando la falta de vínculos produce malestar sostenido, cuando el contacto social se redujo casi por completo al trabajo o la pareja, o cuando aparecen señales asociadas como ánimo bajo, irritabilidad o aumento del consumo de alcohol. No se requiere un diagnóstico previo para consultar.',
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
            <a href="/blog/diferencia-psicologo-psiquiatra" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">¿Psicólogo o psiquiatra? Guía práctica para saber cuál necesitas</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
          </div>
        </section>

        <div className="mt-12 bg-slate-900 rounded-[14px] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Atención profesional, confidencial y sin prejuicios</h2>
          <p className="text-slate-400 text-sm mb-5">
            Primera consulta presencial en Ñuñoa, Santiago u online para todo Chile.
          </p>
          <SchedulingLink className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-teal-700 transition-colors">
            Agendar primera consulta
          </SchedulingLink>
        </div>
      </main>
    </>
  );
}
