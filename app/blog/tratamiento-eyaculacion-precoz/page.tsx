import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: 'Tratamiento de la eyaculación precoz: qué funciona según la evidencia',
  description:
    'Guía sobre el tratamiento de la eyaculación precoz en Santiago: terapia sexual, ejercicios conductuales, suelo pélvico y opciones farmacológicas. Qué funciona según la evidencia, escrito por el equipo de SUBJETIVIDADES.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/tratamiento-eyaculacion-precoz',
  },
  openGraph: {
    title: 'Tratamiento de la eyaculación precoz: qué funciona según la evidencia',
    description:
      'Terapia sexual, ejercicios conductuales, suelo pélvico y opciones farmacológicas: qué funciona según la evidencia. Escrito por Daniel Reyes Pace, equipo de SUBJETIVIDADES.',
    url: 'https://subjetividades.cl/blog/tratamiento-eyaculacion-precoz',
    type: 'article',
    locale: 'es_CL',
    authors: ['Daniel Reyes Pace'],
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/assets/service-sexual.png',
        width: 1200,
        height: 630,
        alt: 'Tratamiento de la eyaculación precoz en SUBJETIVIDADES, centro de psicología en Ñuñoa, Santiago',
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
      headline: 'Tratamiento de la eyaculación precoz: qué funciona según la evidencia',
      datePublished: '2026-07-15',
      dateModified: '2026-07-15',
      inLanguage: 'es-CL',
      author: {
        '@type': 'Physician',
        name: 'Daniel Reyes Pace',
        jobTitle: 'Psicólogo clínico, Director SUBJETIVIDADES',
      },
      publisher: {
        '@type': 'MedicalBusiness',
        name: 'Subjetividades · Psicología Clínica',
        url: 'https://subjetividades.cl',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Es normal tener eyaculación precoz de vez en cuando?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Que ocurra ocasionalmente —por ejemplo, en un encuentro nuevo, tras un período sin actividad sexual o en un momento de estrés— es esperable y no constituye un problema. Se considera una dificultad que amerita consulta cuando es recurrente, hay poca sensación de control y genera malestar.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Se cura o solo se controla?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende del caso. En muchas personas, sobre todo en la forma adquirida, el tratamiento resuelve el problema. En otras, el objetivo es alcanzar un control satisfactorio y estable. En ambos escenarios, la mejora en calidad de vida sexual suele ser significativa.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Necesito ir al médico o al psicólogo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende de cada situación, y muchas veces la respuesta es a ambos de forma coordinada. La terapia sexual aborda los factores psicológicos, conductuales y de pareja; el médico evalúa las opciones farmacológicas y descarta causas orgánicas. En una primera consulta orientamos qué necesita cada persona.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo consultar sin mi pareja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Se puede trabajar de forma individual. Cuando hay pareja e interés de ambos, incluirla suele potenciar los resultados, pero no es un requisito para comenzar.',
          },
        },
        {
          '@type': 'Question',
          name: '¿La atención es confidencial?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutamente. Toda consulta se realiza en un marco de confidencialidad y sin prejuicios. Es un motivo de consulta frecuente y lo abordamos con la misma naturalidad que cualquier otro.',
          },
        },
      ],
    },
  ],
};

export default function TratamientoEyaculacionPrecozPage() {
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
          <span className="text-slate-600">Tratamiento de la eyaculación precoz</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Terapia sexual</span>
            <span className="text-[12px] text-slate-400">15 de julio, 2026 · 8 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Tratamiento de la eyaculación precoz: qué funciona según la evidencia
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            La eyaculación precoz es la dificultad sexual masculina más frecuente y, al mismo tiempo, una de las que menos se consulta. La buena noticia es que hoy existen tratamientos con respaldo científico —psicológicos, sexológicos y médicos— que funcionan, sobre todo cuando se combinan.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Especialista en terapia de pareja y sexual</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            En SUBJETIVIDADES, la consulta por eyaculación precoz es una de las más habituales dentro del área de terapia sexual. Muchos hombres llegan después de años conviviendo con el problema en silencio, convencidos de que no tiene solución o de que hablarlo será incómodo. En la práctica ocurre lo contrario: es una dificultad concreta, muy común, y con opciones de tratamiento bien estudiadas. La mayoría de las personas que consultan mejora de forma significativa.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">¿Qué es la eyaculación precoz?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Se habla de eyaculación precoz cuando la eyaculación ocurre antes de lo que la persona desea, de manera recurrente, con poca sensación de control sobre el momento, y esto genera malestar personal o dificultades en la relación de pareja.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            Conviene subrayar dos cosas. La primera es que el criterio central no es un cronómetro, sino la falta de control y el malestar asociado. Muchos hombres se comparan con estándares poco realistas y consultan por un funcionamiento que en realidad está dentro de lo esperable. La segunda es que en sexología distinguimos dos formas, porque orientan tratamientos distintos:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-6">
            <li>
              <strong>Eyaculación precoz primaria (de toda la vida):</strong> presente desde las primeras experiencias sexuales. Suele tener un componente neurobiológico más marcado.
            </li>
            <li>
              <strong>Eyaculación precoz adquirida:</strong> aparece después de un período de funcionamiento normal. Aquí pesan más los factores psicológicos y relacionales —ansiedad, estrés, problemas de pareja— y también condiciones médicas tratables (por ejemplo, disfunción eréctil o prostatitis).
            </li>
          </ul>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Esta distinción importa: en la forma adquirida, el trabajo psicológico y de pareja suele ser la primera línea; en la forma primaria, muchas veces se combina desde el inicio con apoyo farmacológico.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Por qué ocurre?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            No hay una única causa. La comprensión actual es biopsicosocial: intervienen a la vez factores biológicos, psicológicos y de la relación.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            En el plano biológico, se sabe que la serotonina regula el reflejo eyaculatorio, y por eso varios tratamientos médicos actúan sobre ese sistema. En el plano psicológico, el protagonista suele ser la ansiedad de desempeño: la preocupación por &ldquo;durar&rdquo; activa una respuesta que, paradójicamente, acelera la eyaculación y alimenta un círculo de anticipación ansiosa. A esto se suman la historia de aprendizaje sexual, el estrés y el estado anímico. Y en el plano relacional, la comunicación de la pareja y la dinámica sexual pueden mantener o aliviar el problema.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Entender esto explica por qué los abordajes que combinan lo médico con lo psicológico tienden a dar mejores resultados que cualquiera por separado.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Tratamientos psicológicos y sexológicos</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Es el terreno propio de la terapia sexual y, para muchos casos, la base del tratamiento. Incluye varias herramientas complementarias.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            <strong>Técnicas conductuales de control eyaculatorio.</strong> Las más conocidas son la técnica de &ldquo;parada y arranque&rdquo; (detener la estimulación al acercarse el punto de inevitabilidad y retomarla al bajar la excitación) y la técnica de compresión. Su objetivo es que la persona reconozca y aprenda a modular sus propios niveles de excitación. Son un punto de partida útil, aunque la evidencia muestra que rinden mucho más cuando se integran en un trabajo terapéutico más amplio que cuando se aplican de forma aislada.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            <strong>Trabajo sobre la ansiedad de desempeño.</strong> Buena parte del tratamiento consiste en desarmar el círculo de anticipación ansiosa: reducir la autoexigencia, reorientar la atención hacia la experiencia sensorial en lugar del &ldquo;resultado&rdquo;, y modificar creencias rígidas sobre el sexo. Aquí se emplean estrategias cognitivo-conductuales junto con un trabajo más profundo sobre lo que la dificultad significa para la persona.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            <strong>Terapia de pareja e intimidad.</strong> Cuando hay una pareja estable, incluirla suele mejorar los resultados. El problema deja de vivirse como un &ldquo;defecto&rdquo; individual y pasa a abordarse como algo del vínculo, lo que reduce la presión y abre otras formas de encuentro sexual.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            <strong>Conciencia y control del suelo pélvico.</strong> Muchas técnicas se apoyan en la capacidad de percibir y regular la musculatura pélvica, que participa en el reflejo eyaculatorio.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Fisioterapia del suelo pélvico</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Es una de las líneas con desarrollo más reciente y resultados prometedores. El entrenamiento de la musculatura del suelo pélvico —con ejercicios específicos, a veces apoyados en biofeedback— busca mejorar el control voluntario sobre la respuesta eyaculatoria. Algunos estudios reportan mejoras relevantes en el tiempo de latencia, con beneficios que se sostienen en el tiempo.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Con todo, conviene ser honestos con el estado de la evidencia: la calidad de los estudios es todavía variable y, como herramienta única, suele rendir menos que otras opciones. Su mayor valor aparece como parte de un plan combinado, integrada con el trabajo conductual y, cuando corresponde, con el tratamiento médico.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Tratamientos farmacológicos</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            Existen fármacos con eficacia demostrada. Es importante aclarar que su indicación, dosis y control corresponden a un médico (urólogo, andrólogo o médico tratante), no al psicólogo. En SUBJETIVIDADES trabajamos la dimensión psicológica y sexológica, y cuando el caso lo requiere coordinamos con el especialista médico. A grandes rasgos, las opciones más respaldadas son:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-6">
            <li>
              <strong>Dapoxetina:</strong> un medicamento del grupo de los inhibidores selectivos de la recaptación de serotonina (ISRS), diseñado específicamente para la eyaculación precoz y de uso &ldquo;a demanda&rdquo; (se toma unas horas antes de la relación). Es la única opción oral aprobada para este fin en muchos países.
            </li>
            <li>
              <strong>Otros ISRS de uso diario:</strong> algunos antidepresivos de este grupo retrasan la eyaculación como parte de su efecto y se usan, bajo indicación médica, con esa finalidad. Requieren tomarse a diario y su efecto aparece tras algunas semanas.
            </li>
            <li>
              <strong>Anestésicos tópicos (cremas o spray de lidocaína/prilocaína):</strong> reducen levemente la sensibilidad del glande para prolongar el tiempo hasta la eyaculación. Son de los tratamientos más antiguos y, en los estudios, muestran muy buena eficacia.
            </li>
          </ul>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Cada opción tiene ventajas, limitaciones y posibles efectos secundarios, que el médico evalúa caso a caso. Cuando coexiste disfunción eréctil, el plan suele contemplar también su tratamiento, ya que ambos problemas se retroalimentan.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">El enfoque más efectivo: combinar</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Si hay un mensaje que la investigación repite, es este: los abordajes combinados superan a las monoterapias. La evidencia muestra que sumar el trabajo psicológico y conductual al tratamiento farmacológico mejora no solo el control eyaculatorio, sino también la satisfacción sexual de la persona y de su pareja.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            La lógica clínica es sencilla. El fármaco, cuando se usa, abre una ventana: da más tiempo y reduce la presión inmediata. Pero lo que sostiene el cambio a largo plazo —el reaprendizaje del control, el manejo de la ansiedad, una relación de pareja más comunicada— es justamente lo que se trabaja en terapia. Por eso la combinación tiende a producir resultados más estables, y ayuda a que las mejoras no se pierdan si en algún momento se retira la medicación.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿La eyaculación precoz tiene tratamiento efectivo?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Sí. Es una de las dificultades sexuales con mejor pronóstico. Con un tratamiento adecuado, la mayoría de las personas logra mayor control, más satisfacción y una reducción importante del malestar. Los factores que más influyen en el resultado son consultar en lugar de postergar, seguir un plan sostenido en el tiempo, e incluir a la pareja cuando es posible.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-6 my-8">
            <p className="text-[15px] text-slate-600 leading-relaxed">
              El principal obstáculo no suele ser la falta de tratamientos, sino la vergüenza que retrasa la consulta durante años. Es un problema médico y psicológico común, no un motivo de juicio.
            </p>
          </div>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes sobre la eyaculación precoz</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Es normal tener eyaculación precoz de vez en cuando?',
                a: 'Sí. Que ocurra ocasionalmente —por ejemplo, en un encuentro nuevo, tras un período sin actividad sexual o en un momento de estrés— es esperable y no constituye un problema. Se considera una dificultad que amerita consulta cuando es recurrente, hay poca sensación de control y genera malestar.',
              },
              {
                q: '¿Se cura o solo se controla?',
                a: 'Depende del caso. En muchas personas, sobre todo en la forma adquirida, el tratamiento resuelve el problema. En otras, el objetivo es alcanzar un control satisfactorio y estable. En ambos escenarios, la mejora en calidad de vida sexual suele ser significativa.',
              },
              {
                q: '¿Necesito ir al médico o al psicólogo?',
                a: 'Depende de cada situación, y muchas veces la respuesta es a ambos de forma coordinada. La terapia sexual aborda los factores psicológicos, conductuales y de pareja; el médico evalúa las opciones farmacológicas y descarta causas orgánicas. En una primera consulta orientamos qué necesita cada persona.',
              },
              {
                q: '¿Puedo consultar sin mi pareja?',
                a: 'Sí. Se puede trabajar de forma individual. Cuando hay pareja e interés de ambos, incluirla suele potenciar los resultados, pero no es un requisito para comenzar.',
              },
              {
                q: '¿La atención es confidencial?',
                a: 'Absolutamente. Toda consulta se realiza en un marco de confidencialidad y sin prejuicios. Es un motivo de consulta frecuente y lo abordamos con la misma naturalidad que cualquier otro.',
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
            <a href="/terapia-sexual" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">Terapia sexual en Santiago: cómo funciona y qué esperar</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a href="/blog/cuando-ir-al-psicologo" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">¿Cuándo ir al psicólogo? Señales de que necesitas apoyo</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
          </div>
        </section>

        <div className="mt-12 bg-slate-900 rounded-[14px] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">¿Quieres consultar por eyaculación precoz?</h2>
          <p className="text-slate-400 text-sm mb-5">
            Primera consulta de terapia sexual, presencial en Ñuñoa, Santiago u online para todo Chile. Atención profesional, confidencial y sin prejuicios.
          </p>
          <SchedulingLink className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-teal-700 transition-colors">
            Agendar consulta
          </SchedulingLink>
        </div>
      </main>
    </>
  );
}
