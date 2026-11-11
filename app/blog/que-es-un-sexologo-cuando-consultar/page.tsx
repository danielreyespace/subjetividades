import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: 'Qué es un sexólogo y cuándo conviene consultar',
  description:
    'En Chile «sexólogo» no es un título regulado. Qué formación hay detrás del término, qué hace un psicólogo con especialización en terapia sexual, qué corresponde a un médico y cuándo consultar. SUBJETIVIDADES, Ñuñoa, Santiago.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/que-es-un-sexologo-cuando-consultar',
  },
  openGraph: {
    title: 'Qué es un sexólogo y cuándo conviene consultar',
    description:
      'Qué hay detrás del término «sexólogo» en Chile, qué hace cada profesional de la salud sexual y por dónde empezar. Escrito por Daniel Reyes Pace, Director de SUBJETIVIDADES.',
    url: 'https://subjetividades.cl/blog/que-es-un-sexologo-cuando-consultar',
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

// Fuente única de las preguntas frecuentes: alimenta el schema FAQPage y la sección visible.
const faqs = [
  {
    q: '¿Sexólogo y psicólogo sexual son lo mismo?',
    a: 'No necesariamente. «Sexólogo» es un nombre de uso libre en Chile, que emplean profesionales de distintas disciplinas y también personas sin formación clínica. Un psicólogo con especialización en terapia sexual tiene un título profesional verificable y formación de posgrado en sexualidad.',
  },
  {
    q: '¿Cómo puedo verificar la formación de un sexólogo?',
    a: 'El título de base se comprueba en el Registro Nacional de Prestadores Individuales de Salud, de la Superintendencia de Salud, con el nombre o el RUT del profesional. La formación en sexualidad se le puede preguntar directamente: qué programa cursó, en qué institución y de qué duración.',
  },
  {
    q: '¿Hay que ir en pareja a la terapia sexual?',
    a: 'No es requisito. Muchas personas consultan solas, tengan o no pareja. Cuando la dificultad se da dentro de una relación estable, incluir a la pareja en algún momento del proceso suele mejorar los resultados, y esa decisión se toma en conjunto.',
  },
  {
    q: '¿La Isapre reembolsa la terapia sexual?',
    a: 'Si quien atiende es psicólogo, la sesión se reembolsa como consulta psicológica con la boleta de honorarios, en las condiciones del plan de salud.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Qué es un sexólogo y cuándo conviene consultar',
      datePublished: '2026-11-11',
      dateModified: '2026-11-11',
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
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

const P = 'text-[16px] text-slate-600 leading-relaxed mb-6';
const H2 = 'text-[22px] font-bold text-slate-900 mt-10 mb-4';
const LINK = 'text-teal-700 underline hover:text-teal-800';

export default function QueEsUnSexologoPage() {
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
          <span className="text-slate-600">Qué es un sexólogo</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Terapia sexual</span>
            <span className="text-[12px] text-slate-400">11 de noviembre, 2026 · 7 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Qué es un sexólogo y cuándo conviene consultar
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            En Chile no existe la carrera de sexología ni una especialidad reconocida legalmente con ese nombre. Quien se presenta como sexólogo o sexóloga es, en el mejor de los casos, un profesional de la salud que sumó a su título de origen una formación de posgrado en sexualidad humana. Saber cuál es ese título de origen permite anticipar qué puede hacer esa persona por quien consulta y qué queda fuera de su competencia.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Doctor en Psicología, U. de Chile · Director de SUBJETIVIDADES</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">Un nombre sin título propio</h2>
          <p className={P}>
            La sexología es un campo de estudio que reúne conocimientos de la medicina, la psicología, la biología y las ciencias sociales. Como práctica clínica se consolidó en la segunda mitad del siglo XX, y de esa historia me ocupé en{' '}
            <a href="/blog/terapia-sexual" className={LINK}>otro artículo de este blog</a>. Su carácter interdisciplinario explica que en casi ningún país exista como profesión autónoma.
          </p>
          <p className={P}>
            En Chile se llega a ella por la vía del posgrado. Psicólogos, médicos, matronas y kinesiólogos cursan diplomados, postítulos o magísteres en sexualidad y terapia sexual que imparten universidades e institutos privados, con exigencias muy dispares entre un programa y otro. El término «sexólogo» no está protegido, de modo que también lo usan personas sin formación clínica alguna. Para quien busca ayuda, el dato verificable es el título profesional de base, que puede consultarse en el{' '}
            <a href="https://rnpi.superdesalud.gob.cl/" target="_blank" rel="noopener noreferrer" className={LINK}>
              Registro Nacional de Prestadores Individuales de Salud
            </a>{' '}
            de la Superintendencia de Salud. Si el nombre no figura en el registro, conviene pedir una aclaración antes de iniciar un tratamiento.
          </p>

          <h2 className={H2}>Qué hace cada profesional</h2>
          <p className={P}>
            Un psicólogo clínico con formación en sexología ofrece terapia sexual, que es una forma de psicoterapia focalizada en las dificultades de la vida sexual. Trabaja conversando, en sesiones individuales o de pareja, y suele indicar ejercicios para realizar en privado entre una sesión y otra. No examina físicamente ni prescribe medicamentos.
          </p>
          <p className={P}>
            El médico interviene cuando hay o puede haber una causa orgánica. La urología se ocupa de la disfunción eréctil y de otros problemas genitourinarios masculinos; la ginecología, del dolor en las relaciones, los cambios de la menopausia y la anticoncepción; la psiquiatría, de los cuadros anímicos y de los efectos de los psicofármacos sobre la respuesta sexual. Algunos médicos se han formado además en medicina sexual y reúnen parte de estas competencias.
          </p>
          <p className={P}>
            Matronas y kinesiólogos especializados en piso pélvico completan el cuadro. Su aporte es central en el dolor genital y en el vaginismo, donde el tratamiento combina rehabilitación física con trabajo psicológico.
          </p>

          <h2 className={H2}>Por qué rara vez basta una sola mirada</h2>
          <p className={P}>
            La Organización Mundial de la Salud define la{' '}
            <a href="https://www.who.int/health-topics/sexual-health" target="_blank" rel="noopener noreferrer" className={LINK}>
              salud sexual
            </a>{' '}
            como un estado de bienestar físico, mental y social en relación con la sexualidad, que no se reduce a la ausencia de enfermedad o disfunción. La definición tiene consecuencias prácticas. En la undécima revisión de la Clasificación Internacional de Enfermedades, vigente desde 2022, las disfunciones sexuales salieron del capítulo de trastornos mentales y pasaron a uno nuevo, «Condiciones relacionadas con la salud sexual», que abandona la vieja separación entre causas orgánicas y causas psicológicas.
          </p>
          <p className={P}>
            Esa separación nunca describió bien lo que ocurre en la clínica. Una dificultad de erección de origen vascular genera, a las pocas semanas, ansiedad anticipatoria que la agrava. Un antidepresivo que alivia el ánimo puede apagar el deseo. Un dolor que comenzó con una infección persiste, ya resuelta la infección, porque el cuerpo aprendió a anticiparlo. En todos estos casos el tratamiento exige que el profesional consultado sepa reconocer el límite de su disciplina y derive a tiempo.
          </p>

          <h2 className={H2}>Motivos de consulta más frecuentes</h2>
          <p className={P}>
            Las dificultades sexuales son comunes. El primer estudio poblacional de Estados Unidos, publicado por{' '}
            <a href="https://pubmed.ncbi.nlm.nih.gov/10022110/" target="_blank" rel="noopener noreferrer" className={LINK}>
              Laumann y colaboradores en 1999
            </a>, encontró alguna disfunción en el 43% de las mujeres y el 31% de los hombres. La encuesta británica Natsal-3, con más de quince mil participantes, registró que el 51% de las mujeres y el 42% de los hombres sexualmente activos había tenido al menos un problema sexual durante tres meses o más en el último año, aunque{' '}
            <a href="https://pubmed.ncbi.nlm.nih.gov/24286787/" target="_blank" rel="noopener noreferrer" className={LINK}>
              solo una de cada diez personas
            </a>{' '}
            declaraba sentirse afligida por su vida sexual.
          </p>
          <p className={P}>
            La distancia entre ambas cifras orienta la decisión de consultar. Tener un funcionamiento distinto del esperado es frecuente y, por sí solo, no requiere tratamiento. Se vuelve motivo de consulta cuando produce malestar, cuando lleva a evitar los encuentros o cuando tensiona a la pareja.
          </p>
          <p className={P}>
            En la práctica, las personas llegan por disminución o ausencia de deseo, dificultades de erección, eyaculación precoz o retardada, dificultad para alcanzar el orgasmo y dolor en la penetración. También consultan parejas con niveles de deseo muy distintos, personas con dudas sobre su orientación o su identidad, y quienes han visto cambiar su vida sexual después de una enfermedad, un parto, una cirugía o el inicio de un medicamento.
          </p>

          <h2 className={H2}>Qué ocurre en una terapia sexual</h2>
          <p className={P}>
            La terapia sexual es un tratamiento conversacional. En la sesión no hay contacto físico ni desnudez, y esa aclaración, que parece obvia, suele aliviar a quien consulta por primera vez.
          </p>
          <p className={P}>
            Las primeras sesiones se dedican a evaluar. Se revisa cómo comenzó la dificultad y en qué situaciones aparece, el estado de salud general y los medicamentos en uso, la historia sexual y, cuando hay pareja, la relación. Con esa información se acuerda un plan que puede incluir educación sobre la respuesta sexual, trabajo sobre la ansiedad de desempeño, ejercicios graduales de contacto que la pareja realiza en su casa y conversaciones sobre lo que cada uno espera y calla.
          </p>
          <p className={P}>
            La eficacia de estas intervenciones está documentada. Un{' '}
            <a href="https://doi.org/10.1007/s10508-012-0062-0" target="_blank" rel="noopener noreferrer" className={LINK}>
              metaanálisis de Frühauf y colaboradores
            </a>, publicado en 2013 en <em>Archives of Sexual Behavior</em>, concluyó que los tratamientos psicológicos mejoran los síntomas y la satisfacción sexual, con los resultados más sólidos en el deseo sexual hipoactivo y en las dificultades de orgasmo en mujeres.
          </p>

          <h2 className={H2}>Por dónde empezar</h2>
          <p className={P}>
            Conviene partir por una evaluación médica cuando el problema apareció de forma brusca, cuando hay dolor, cuando coincide con el inicio de un medicamento o cuando existen enfermedades como diabetes o hipertensión. En los hombres, una dificultad de erección persistente justifica además un control cardiovascular.
          </p>
          <p className={P}>
            La consulta psicológica es un buen punto de partida cuando la dificultad depende de la situación, por ejemplo si la respuesta sexual es normal a solas y se altera con la pareja, cuando predomina la ansiedad o cuando el problema se instaló junto con un conflicto de la relación. Muchas veces se necesitan ambas cosas, y un buen profesional lo advertirá en las primeras sesiones.
          </p>
          <p className={P}>
            En SUBJETIVIDADES la{' '}
            <a href="/terapia-sexual" className={LINK}>terapia sexual</a>{' '}
            la atiendo personalmente, como psicólogo clínico especialista en terapia de pareja y sexual. Atendemos de forma presencial en Ñuñoa y por videollamada para todo Chile, en procesos individuales o de pareja, y trabajamos en coordinación con médicos tratantes cuando el caso lo requiere.
          </p>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes sobre sexólogos y terapia sexual</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-base font-semibold text-slate-800 mb-2">{q}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fuentes */}
        <section className="mt-12 border-t border-slate-100 pt-8">
          <h2 className="text-base font-bold text-slate-900 mb-4">Fuentes y referencias</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-[14px] text-slate-500">
            <li>
              Organización Mundial de la Salud.{' '}
              <a href="https://www.who.int/health-topics/sexual-health" target="_blank" rel="noopener noreferrer" className={LINK}>
                Salud sexual
              </a>. Definición de trabajo de 2006.
            </li>
            <li>
              Organización Mundial de la Salud.{' '}
              <a href="https://icd.who.int/es" target="_blank" rel="noopener noreferrer" className={LINK}>
                Clasificación Internacional de Enfermedades, 11.ª revisión (CIE-11)
              </a>, capítulo 17: Condiciones relacionadas con la salud sexual.
            </li>
            <li>
              Laumann, E. O., Paik, A. y Rosen, R. C. (1999).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/10022110/" target="_blank" rel="noopener noreferrer" className={LINK}>
                Sexual dysfunction in the United States: prevalence and predictors
              </a>. <em>JAMA</em>, 281(6), 537-544.
            </li>
            <li>
              Mitchell, K. R. et al. (2013).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/24286787/" target="_blank" rel="noopener noreferrer" className={LINK}>
                Sexual function in Britain: findings from the third National Survey of Sexual Attitudes and Lifestyles (Natsal-3)
              </a>. <em>The Lancet</em>, 382(9907), 1817-1829.
            </li>
            <li>
              Frühauf, S., Gerger, H., Schmidt, H. M., Munder, T. y Barth, J. (2013).{' '}
              <a href="https://doi.org/10.1007/s10508-012-0062-0" target="_blank" rel="noopener noreferrer" className={LINK}>
                Efficacy of psychological interventions for sexual dysfunction: a systematic review and meta-analysis
              </a>. <em>Archives of Sexual Behavior</em>, 42, 915-933.
            </li>
            <li>
              Superintendencia de Salud.{' '}
              <a href="https://rnpi.superdesalud.gob.cl/" target="_blank" rel="noopener noreferrer" className={LINK}>
                Registro Nacional de Prestadores Individuales de Salud
              </a>.
            </li>
          </ul>
        </section>

        {/* Internal links */}
        <section className="mt-12 border-t border-slate-100 pt-10">
          <h2 className="text-base font-bold text-slate-900 mb-5">Artículos relacionados</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/blog/terapia-sexual" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">Terapia sexual: medio siglo de una disciplina clínica</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a href="/blog/tratamiento-eyaculacion-precoz" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">Tratamiento de la eyaculación precoz: qué funciona según la evidencia</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a href="/blog/reembolso-psicologo-isapre-fonasa" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">Reembolso del psicólogo en Isapre: cómo funciona y qué dice la ley</div>
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
