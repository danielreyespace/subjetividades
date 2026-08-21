import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: 'Terapia sexual: qué es, su origen y cómo se trabaja hoy',
  description:
    'Qué es la terapia sexual, cuál es su origen y cómo se trabaja hoy. Una mirada seria a una disciplina con más de cincuenta años de desarrollo clínico. SUBJETIVIDADES, Ñuñoa, Santiago.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/terapia-sexual',
  },
  openGraph: {
    title: 'Terapia sexual: medio siglo de una disciplina clínica',
    description:
      'Qué es la terapia sexual, su historia y cómo se trabaja hoy desde el modelo biopsicosocial. Escrito por Daniel Reyes Pace, equipo de SUBJETIVIDADES.',
    url: 'https://subjetividades.cl/blog/terapia-sexual',
    type: 'article',
    locale: 'es_CL',
    authors: ['Daniel Reyes Pace'],
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/assets/service-sexual.png',
        width: 1200,
        height: 630,
        alt: 'Terapia sexual en SUBJETIVIDADES, centro de psicología en Ñuñoa, Santiago',
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
      headline: 'Terapia sexual: medio siglo de una disciplina clínica',
      datePublished: '2026-06-15',
      dateModified: '2026-06-15',
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
          name: '¿La terapia sexual incluye algún tipo de contacto físico?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Es psicoterapia: trabajo conversacional y estructurado en consulta. Los ejercicios prácticos que en ocasiones se indican se realizan en privado, nunca en sesión.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es necesario asistir en pareja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Existen procesos individuales y de pareja, y la modalidad se define según el motivo de consulta y los objetivos. Un proceso individual puede incorporar a la pareja más adelante, y a la inversa.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuándo corresponde una evaluación médica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los problemas sexuales suelen tener componentes físicos y psicológicos a la vez, de modo que no se trata de elegir entre médico y terapeuta sino de evaluar ambos planos. Ante señales de causa orgánica —dolor, cambios bruscos, enfermedades crónicas, efectos de medicamentos— la derivación médica forma parte del tratamiento.',
          },
        },
        {
          '@type': 'Question',
          name: '¿La modalidad online es efectiva para terapia sexual?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Dado que el trabajo en sesión es conversacional y los ejercicios se realizan en privado, la videollamada permite desarrollar el proceso completo con resultados comparables a la modalidad presencial.',
          },
        },
      ],
    },
  ],
};

export default function TerapiaSexualPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="artpage max-w-[760px] mx-auto px-6 py-16">
        <nav className="text-[13px] text-slate-400 mb-8">
          <a href="/" className="hover:text-teal-600 no-underline transition-colors">Inicio</a>
          {' / '}
          <a href="/blog" className="hover:text-teal-600 no-underline transition-colors">Blog</a>
          {' / '}
          <span className="text-slate-600">Terapia sexual</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Servicios</span>
            <span className="text-[12px] text-slate-400">15 de junio, 2026 · 6 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Terapia sexual: medio siglo de una disciplina clínica
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            La terapia sexual suele cargar con una imagen difusa, a medio camino entre el tabú y la curiosidad. Tiene, sin embargo, más de medio siglo de desarrollo científico, un cuerpo de técnicas propio y resultados bien documentados. Su historia explica buena parte de lo que es hoy.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Especialista en terapia de pareja y sexual</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Cuando la medicina del siglo XIX se ocupó de la sexualidad, no la liberó del juicio moral: lo tradujo a vocabulario científico. Como mostró Michel Foucault, la clínica de la época no vino a reemplazar a la moral sino a continuarla por otros medios — los tratados eran inventarios de supuestas desviaciones, y la frontera entre lo normal y lo patológico calcaba, con notable fidelidad, la frontera entre lo permitido y lo condenado. No existía la idea de tratar una dificultad sexual; existía la idea de diagnosticar una anormalidad.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            El primer quiebre importante no vino de la terapia sino de la estadística. A mediados del siglo XX, los estudios de Alfred Kinsey en Estados Unidos, construidos sobre miles de entrevistas, mostraron que la conducta sexual real de las personas era mucho más variada que lo que la norma social admitía. Prácticas tenidas por excepcionales resultaron ser frecuentes. La conclusión, incómoda para su época, era que gran parte del malestar sexual no provenía de una patología, sino de la distancia entre lo que las personas vivían y lo que creían que debían vivir.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">El nacimiento de la disciplina</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La terapia sexual propiamente tal nace en 1970, cuando William Masters y Virginia Johnson publicaron los resultados de más de una década de investigación sobre la respuesta sexual humana y, sobre esa base, propusieron algo inédito: un tratamiento estructurado, breve y con resultados verificables para las disfunciones sexuales.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Aquellas primeras terapias sexológicas tenían un perfil muy distinto al actual. Estaban orientadas casi exclusivamente al síntoma físico y al rendimiento: disfunción eréctil, eyaculación precoz, anorgasmia, vaginismo. El formato era intensivo, con programas de unas dos semanas en que la pareja era atendida a diario por un equipo de dos terapeutas, y el supuesto de fondo era conductual: la mayoría de los problemas sexuales se aprende y, por lo tanto, puede desaprenderse.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            De ese período sobrevive una técnica que, con adaptaciones, sigue siendo central: la focalización sensorial, una secuencia gradual de ejercicios que la pareja realiza en privado y cuyo propósito es desactivar la ansiedad de desempeño, devolviendo la atención al registro sensorial en lugar del resultado.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Del rendimiento al deseo</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            El modelo fundacional funcionaba bien para los problemas de respuesta física, pero dejaba fuera lo que con los años se convertiría en el motivo de consulta más frecuente de la especialidad: el deseo. Ese giro se atribuye a la psiquiatra Helen Singer Kaplan, quien a mediados de los años setenta integró las técnicas conductuales con una comprensión psicológica más profunda de cada caso e incorporó el deseo como una fase propia de la respuesta sexual.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            El cambio fue más que técnico. La pregunta central de la disciplina dejó de ser únicamente por qué el cuerpo no responde, y pasó a incluir qué ocurre con la historia de esa persona, con su relación de pareja y con el significado que la sexualidad tiene en su vida.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">La lección del Viagra</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            A fines de los años noventa, la aparición del sildenafil pareció anunciar la obsolescencia de la terapia sexual: si una pastilla resolvía la erección, el resto sobraba. La experiencia clínica posterior mostró otra cosa. El fármaco ayuda a muchos hombres, pero no resuelve la ansiedad de desempeño, los conflictos de pareja ni el deseo, y una proporción significativa de quienes inician tratamiento farmacológico lo abandona cuando el problema de fondo no era principalmente vascular.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            De esa experiencia se consolidó el modelo con que la disciplina trabaja hasta hoy, habitualmente llamado biopsicosocial: las dificultades sexuales casi siempre entrelazan factores físicos, psicológicos y relacionales, y un tratamiento serio evalúa los tres planos. Esto supone, además, colaboración con la medicina cuando corresponde —urología, ginecología, endocrinología— en lugar de competencia con ella. En las últimas dos décadas se han sumado herramientas con creciente respaldo de investigación, entre ellas las intervenciones basadas en mindfulness para dificultades de deseo y excitación, junto con una comprensión de la diversidad sexual que reclasificó como variabilidad humana normal buena parte de lo que el siglo XIX había llamado desviación.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Qué es la terapia sexual hoy</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Con esa trayectoria a la vista, la definición actual es sobria: la terapia sexual es psicoterapia especializada en las dificultades sexuales, en formato individual o de pareja, con objetivos definidos y técnicas de eficacia documentada.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-6 my-8">
            <h3 className="text-base font-bold text-slate-800 mb-2">Dónde se concentran los malentendidos</h3>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              La terapia sexual es trabajo conversacional y estructurado: en sesión no existe ningún tipo de contacto físico ni examen corporal, y los ejercicios prácticos, cuando se indican, se realizan en privado. Tampoco requiere tener pareja; una parte importante de los procesos es individual. Y no exige un umbral de gravedad: una vida sexual insatisfactoria es, por sí sola, un motivo de consulta legítimo, sin necesidad de diagnóstico previo.
            </p>
          </div>

          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            Los motivos de consulta habituales incluyen:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-8">
            <li>Bajo deseo o discrepancia de deseo en la pareja</li>
            <li>Dificultades de erección o eyaculación</li>
            <li>Dolor o imposibilidad de penetración</li>
            <li>Dificultades para alcanzar el orgasmo</li>
            <li>Ansiedad de desempeño</li>
            <li>El impacto de enfermedades, medicamentos o etapas vitales sobre la vida sexual</li>
            <li>La reconexión erótica en parejas de largo plazo</li>
          </ul>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">El proceso clínico</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            El tratamiento comienza con una evaluación: motivo de consulta, historia relevante, contexto de pareja si lo hay, y definición de objetivos. Cuando el cuadro lo amerita, se indica una evaluación médica complementaria para descartar o tratar factores físicos. A partir de ahí, el proceso combina trabajo en sesión con ejercicios estructurados entre sesiones, y su duración depende del problema: los cuadros focalizados suelen resolverse en algunos meses de trabajo regular.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            En SUBJETIVIDADES la terapia sexual se realiza en modalidad presencial en Ñuñoa o por videollamada para todo Chile, con el mismo encuadre de confidencialidad y evaluación de resultados que el resto de los procesos del centro.
          </p>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes sobre terapia sexual</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿La terapia sexual incluye algún tipo de contacto físico?',
                a: 'No. Es psicoterapia: trabajo conversacional y estructurado en consulta. Los ejercicios prácticos que en ocasiones se indican se realizan en privado, nunca en sesión.',
              },
              {
                q: '¿Es necesario asistir en pareja?',
                a: 'No. Existen procesos individuales y de pareja, y la modalidad se define según el motivo de consulta y los objetivos. Un proceso individual puede incorporar a la pareja más adelante, y a la inversa.',
              },
              {
                q: '¿Cuándo corresponde una evaluación médica?',
                a: 'Los problemas sexuales suelen tener componentes físicos y psicológicos a la vez, de modo que no se trata de elegir entre médico y terapeuta sino de evaluar ambos planos. Ante señales de causa orgánica —dolor, cambios bruscos, enfermedades crónicas, efectos de medicamentos— la derivación médica forma parte del tratamiento.',
              },
              {
                q: '¿La modalidad online es efectiva para terapia sexual?',
                a: 'Sí. Dado que el trabajo en sesión es conversacional y los ejercicios se realizan en privado, la videollamada permite desarrollar el proceso completo con resultados comparables a la modalidad presencial.',
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
            <a href="/blog/terapia-de-pareja-como-funciona" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">Terapia de pareja en Santiago: cómo funciona y qué esperar</div>
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
