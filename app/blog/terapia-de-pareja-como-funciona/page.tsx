import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terapia de pareja en Santiago: cómo funciona y qué esperar',
  description:
    'Todo lo que necesitas saber sobre la terapia de pareja en Santiago: cómo funciona, cuándo buscarla, qué pasa en la primera sesión y cuántas sesiones necesitas. Guía del equipo de SUBJETIVIDADES.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/terapia-de-pareja-como-funciona',
  },
  openGraph: {
    title: 'Terapia de pareja en Santiago: cómo funciona y qué esperar',
    description:
      'Guía completa sobre terapia de pareja en Santiago: proceso, primera sesión, duración y efectividad. Escrito por el equipo de SUBJETIVIDADES.',
    url: 'https://subjetividades.cl/blog/terapia-de-pareja-como-funciona',
    type: 'article',
    locale: 'es_CL',
    authors: ['Dr. Daniel Reyes Pace'],
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/assets/service-couples.png',
        width: 1200,
        height: 630,
        alt: 'Terapia de pareja en SUBJETIVIDADES, centro de psicología en Ñuñoa, Santiago',
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
      headline: 'Terapia de pareja en Santiago: cómo funciona y qué esperar',
      datePublished: '2025-04-02',
      dateModified: '2025-04-02',
      inLanguage: 'es-CL',
      author: {
        '@type': 'Physician',
        name: 'Dr. Daniel Reyes Pace',
        jobTitle: 'Psicólogo clínico, Director SUBJETIVIDADES',
      },
      publisher: {
        '@type': 'MedicalBusiness',
        name: 'SUBJETIVIDADES — Centro de Psicología Clínica',
        url: 'https://subjetividades.cl',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Para qué sirve la terapia de pareja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La terapia de pareja sirve para mejorar la comunicación, resolver conflictos recurrentes, reconstruir la confianza, trabajar problemas de intimidad o sexualidad, y fortalecer el vínculo afectivo. También puede ser un espacio para decidir, de manera consciente y saludable, si continuar o no en la relación.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuántas sesiones de terapia de pareja se necesitan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un proceso de terapia de pareja típico tiene entre 12 y 20 sesiones, dependiendo de la complejidad de los conflictos y los objetivos de la pareja. Procesos focalizados en un problema específico pueden resolverse en menos tiempo. La frecuencia habitual es semanal al inicio, luego quincenal.',
          },
        },
        {
          '@type': 'Question',
          name: '¿La terapia de pareja funciona?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. La investigación clínica muestra que la terapia de pareja basada en evidencia (como la Terapia Focalizada en las Emociones y la Terapia Cognitivo-Conductual para parejas) tiene tasas de efectividad del 70-80% para parejas que completan el proceso. El factor más relevante en el resultado es la motivación de ambos integrantes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Podemos ir a terapia de pareja aunque no estemos en crisis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutamente. La terapia preventiva es mucho más efectiva que la de crisis. Muchas parejas consultan para mejorar su comunicación, profundizar la intimidad, o prepararse para una transición importante (convivencia, matrimonio, hijos) antes de que aparezcan problemas graves.',
          },
        },
      ],
    },
  ],
};

export default function TerapiaDeParejaPage() {
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
          <span className="text-slate-600">Terapia de pareja</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Servicios</span>
            <span className="text-[12px] text-slate-400">2 de abril, 2025 · 7 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Terapia de pareja en Santiago: cómo funciona y qué esperar
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            La terapia de pareja no es solo para relaciones en crisis. Es una herramienta preventiva que fortalece la comunicación y la intimidad antes de que los problemas escalen — y también un espacio donde, si llega a ser necesario, se puede decidir el futuro de la relación con claridad y respeto.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Dr. Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Especialista en terapia de pareja y sexual</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            En SUBJETIVIDADES, la terapia de pareja es una de las áreas de mayor demanda. Cada año atendemos a cientos de parejas en distintas etapas: algunas en plena crisis, otras buscando reforzar lo que ya funciona bien. Lo que hemos aprendido en más de 20 años de práctica clínica es que <strong>el momento ideal para iniciar la terapia de pareja es antes de que la situación sea urgente</strong>.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">¿Para qué sirve la terapia de pareja?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            La terapia de pareja puede abordar una amplia variedad de situaciones:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-8">
            <li>Conflictos recurrentes que no encuentran resolución</li>
            <li>Dificultades en la comunicación (sentir que no se entienden)</li>
            <li>Problemas de intimidad emocional o distanciamiento afectivo</li>
            <li>Disfunciones sexuales o desacuerdos en el área sexual</li>
            <li>Reconstrucción de confianza tras infidelidad</li>
            <li>Preparación para transiciones importantes (convivencia, matrimonio, hijos)</li>
            <li>Crianza en desacuerdo o conflictos parentales</li>
            <li>Decidir si continuar o no en la relación</li>
          </ul>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Cómo es la primera sesión de terapia de pareja?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La primera sesión dura entre 60 y 75 minutos. El objetivo es triple: que el terapeuta entienda la historia y el contexto de la pareja, que ambas personas sientan que fueron escuchadas, y establecer en conjunto los objetivos del proceso.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            En esta sesión no se resuelve nada — pero se establece el mapa. El terapeuta escucha la visión de cada persona, identifica los patrones de interacción que generan el malestar, y propone un encuadre de trabajo. Es importante que ambas personas asistan desde el principio; la terapia de pareja con un solo integrante tiene limitaciones importantes.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Cómo funciona el proceso?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            En SUBJETIVIDADES trabajamos con un enfoque integrativo basado en evidencia. Dependiendo de cada caso, podemos incorporar elementos de:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-6">
            <li><strong>Terapia Focalizada en las Emociones (EFT):</strong> Trabaja los vínculos de apego y las emociones subyacentes al conflicto.</li>
            <li><strong>Terapia Cognitivo-Conductual para parejas:</strong> Identifica y modifica patrones de pensamiento y conducta que sostienen los problemas.</li>
            <li><strong>Terapia sistémica:</strong> Entiende los problemas como parte de un sistema relacional más amplio.</li>
          </ul>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Las sesiones habitualmente incluyen momentos de diálogo entre los miembros de la pareja mediados por el terapeuta, ejercicios específicos de comunicación, y tareas para practicar en casa entre sesiones.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Cuántas sesiones necesito?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Depende de la complejidad del caso. Un proceso focalizado en un problema específico (por ejemplo, mejorar la comunicación antes del matrimonio) puede resolverse en 8-12 sesiones. Procesos más complejos, como la reconstrucción tras una infidelidad, pueden requerir 16-24 sesiones o más.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La frecuencia habitual es semanal al inicio — para generar momentum — y luego puede pasar a quincenal cuando el proceso está más avanzado. Desde la primera sesión te damos una estimación honesta de lo que probablemente necesitarás.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿La terapia de pareja realmente funciona?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Sí. La investigación clínica es sólida en este punto. Las terapias de pareja basadas en evidencia tienen tasas de efectividad del 70-80% para las parejas que completan el proceso. Los factores que más influyen en el resultado son:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-6">
            <li>La motivación de ambos integrantes</li>
            <li>La calidad de la alianza terapéutica (la relación con el terapeuta)</li>
            <li>La disposición a practicar lo trabajado en sesión en la vida cotidiana</li>
            <li>Iniciar antes de que el deterioro sea muy avanzado</li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-6 my-10">
            <h3 className="text-base font-bold text-slate-800 mb-2">¿La terapia de pareja puede terminar en separación?</h3>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Sí. Y eso también puede ser un resultado positivo. El objetivo de la terapia de pareja no es "salvar la relación a cualquier costo" — es ayudar a la pareja a tomar la mejor decisión para ambos. En algunos casos, el proceso terapéutico lleva a una separación más consciente, respetuosa y con menos daño emocional. En nuestra práctica, lo consideramos un resultado igualmente válido.
            </p>
          </div>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Terapia de pareja presencial vs. online en Santiago</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            En SUBJETIVIDADES ofrecemos ambas modalidades. La terapia de pareja presencial se realiza en nuestro centro en Ñuñoa, Santiago. La modalidad online funciona por videollamada y es igualmente efectiva para la mayoría de los casos — especialmente cuando uno de los miembros de la pareja está en otra ciudad o país.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Algunos profesionales prefieren la modalidad presencial para la terapia de pareja porque permite observar la comunicación no verbal de ambos integrantes. Sin embargo, la evidencia muestra que la terapia de pareja online ofrece resultados comparables a la presencial.
          </p>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes sobre terapia de pareja</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Los dos debemos estar de acuerdo para ir a terapia de pareja?',
                a: 'No es imprescindible que ambos estén igual de convencidos desde el principio. Es normal que uno de los dos lo proponga y el otro acceda con dudas. Lo importante es que ambos estén dispuestos a asistir y a participar. La motivación puede construirse en el proceso.',
              },
              {
                q: '¿Podemos ir a terapia de pareja aunque no estemos en crisis?',
                a: 'Absolutamente. La terapia preventiva es más efectiva y más corta que la de crisis. Muchas parejas consultan para mejorar su comunicación, profundizar la intimidad, o prepararse para una transición importante antes de que aparezcan problemas graves.',
              },
              {
                q: '¿Cuánto cuesta la terapia de pareja en SUBJETIVIDADES?',
                a: 'La terapia de pareja tiene un precio diferenciado de la individual, dado que las sesiones son más largas (60-75 minutos). Contáctanos directamente para conocer nuestras tarifas actualizadas. Emitimos boleta de honorarios para reembolso de Isapre.',
              },
              {
                q: '¿Puedo hacer terapia de pareja online desde fuera de Santiago?',
                a: 'Sí. Atendemos parejas online desde cualquier ciudad de Chile. Incluso si los dos integrantes están en ciudades distintas, la videollamada puede incluir a ambos desde sus respectivas ubicaciones.',
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
            <a href="/blog/costo-sesion-psicologia-santiago" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">¿Cuánto cuesta una sesión de psicología en Santiago 2025?</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
          </div>
        </section>

        <div className="mt-12 bg-slate-900 rounded-[14px] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">¿Quieres saber más sobre nuestra terapia de pareja?</h2>
          <p className="text-slate-400 text-sm mb-5">
            Primera consulta presencial en Ñuñoa, Santiago u online para toda Chile. Sin compromiso.
          </p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-teal-700 transition-colors"
          >
            Agendar consulta de pareja
          </a>
        </div>
      </main>
    </>
  );
}
