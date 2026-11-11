import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: 'Estrés laboral y burnout: qué son y cuándo consultar',
  description:
    'Tres de cada cuatro enfermedades profesionales en Chile son de salud mental. Qué es el burnout según la OMS, cómo se distingue de la depresión, cuándo consultar y qué puede hacer la psicoterapia. SUBJETIVIDADES, Ñuñoa, Santiago.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/estres-laboral-burnout-cuando-consultar',
  },
  openGraph: {
    title: 'Estrés laboral y burnout: qué son y cuándo consultar',
    description:
      'Qué es el burnout según la OMS, cómo se distingue de la depresión, qué depende del trabajo y cuándo conviene consultar. Escrito por Daniel Reyes Pace, Director de SUBJETIVIDADES.',
    url: 'https://subjetividades.cl/blog/estres-laboral-burnout-cuando-consultar',
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
    q: '¿El burnout es una enfermedad?',
    a: 'La Organización Mundial de la Salud lo clasifica como un fenómeno ocupacional y no como una condición médica. Describe un síndrome de agotamiento, distancia o cinismo hacia el trabajo y sensación de ineficacia, producido por estrés laboral crónico. Con frecuencia coexiste con cuadros que sí son diagnósticos clínicos, como la depresión o los trastornos de adaptación.',
  },
  {
    q: '¿Cómo distingo el burnout de una depresión?',
    a: 'El desgaste laboral se concentra en el trabajo y tiende a aliviarse al alejarse de él. La depresión afecta todas las áreas de la vida y se acompaña de pérdida de interés, cambios en el sueño y el apetito y, a veces, ideas de muerte. Los cuadros se superponen, por lo que la diferencia debe establecerla una evaluación clínica.',
  },
  {
    q: '¿Un psicólogo puede dar licencia médica por estrés laboral?',
    a: 'No. En Chile solo pueden emitir licencias los médicos cirujanos, los cirujanos dentistas y las matronas. El psicólogo evalúa, trata y puede emitir informes, y coordina con un médico general o psiquiatra cuando la persona necesita reposo.',
  },
  {
    q: '¿Qué hago si creo que mi problema de salud mental fue causado por el trabajo?',
    a: 'Puedes presentar una denuncia de enfermedad profesional ante la mutualidad o el Instituto de Seguridad Laboral al que esté afiliado tu empleador. Ese organismo evalúa el caso y, si califica la enfermedad como laboral, cubre el tratamiento y el reposo.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Estrés laboral y burnout: qué son y cuándo consultar',
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
const CARD = 'block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group';
const CARD_TITLE = 'text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1';

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={LINK}>
      {children}
    </a>
  );
}

export default function EstresLaboralBurnoutPage() {
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
          <span className="text-slate-600">Estrés laboral y burnout</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Salud mental</span>
            <span className="text-[12px] text-slate-400">11 de noviembre, 2026 · 7 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Estrés laboral y burnout: qué son y cuándo consultar
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            En 2025 las mutualidades y el Instituto de Seguridad Laboral reconocieron 11.272 enfermedades profesionales en Chile. Según el{' '}
            <Ext href="https://www.suseso.gob.cl/605/w3-article-779289.html">balance de la Superintendencia de Seguridad Social</Ext>, el 76% correspondió a diagnósticos de salud mental, cuando en 2020 esa proporción era cercana a la mitad. Las enfermedades musculoesqueléticas, que durante décadas encabezaron la lista, hoy representan el 12%.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Doctor en Psicología, U. de Chile · Director de SUBJETIVIDADES</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">Una cifra que cambió la idea de riesgo laboral</h2>
          <p className={P}>
            El dato de la Superintendencia se refiere solo a los casos calificados como de origen laboral, que son una fracción menor del problema. En el sistema común de licencias médicas la tendencia es la misma. De los cerca de siete millones de licencias emitidas en 2025, el 30,9% tuvo como diagnóstico un trastorno mental, por encima de las enfermedades musculoesqueléticas y respiratorias, de acuerdo con cifras del mismo organismo{' '}
            <Ext href="https://www.emol.com/noticias/Economia/2026/10/22/1214831/ausentismo-laboral-anticipar-problemas.html">recogidas por la prensa</Ext>.
          </p>
          <p className={P}>
            Las instituciones que administran el seguro laboral fueron diseñadas para prevenir caídas, cortes e intoxicaciones. Hoy la mayor parte de lo que califican como enfermedad proviene de la organización del trabajo: cargas, ritmos, jefaturas, trato. Buena parte de las consultas que recibimos de personas adultas tiene alguna relación con esto, aunque el motivo declarado sea el insomnio, la irritabilidad o un desánimo que la persona no logra explicar.
          </p>

          <h2 className={H2}>Qué es el burnout y qué no es</h2>
          <p className={P}>
            El término se usa con mucha libertad, y conviene partir por su definición formal. La Organización Mundial de la Salud lo incluyó en la CIE-11 como{' '}
            <Ext href="https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases">un fenómeno ocupacional</Ext>, y precisó que no lo clasifica como una condición médica. Lo describe como un síndrome que resulta del estrés crónico en el trabajo que no ha sido manejado con éxito, y le atribuye tres dimensiones: agotamiento o falta de energía, distancia mental respecto del trabajo acompañada de negativismo o cinismo, y una sensación de ineficacia profesional. Añade que el concepto se refiere al contexto laboral y que no debe aplicarse a otras áreas de la vida.
          </p>
          <p className={P}>
            Las tres dimensiones provienen de la investigación de Christina Maslach, que desde los años ochenta estudió el desgaste en profesiones de servicio. En su{' '}
            <Ext href="https://doi.org/10.1146/annurev.psych.52.1.397">revisión de 2001</Ext>, Maslach y sus colaboradores insistieron en un punto que la conversación pública suele omitir: el burnout se explica menos por las características de la persona que por el desajuste entre ella y su trabajo en materia de carga, control, reconocimiento, trato, equidad y valores.
          </p>

          <h2 className={H2}>Burnout, depresión y ansiedad</h2>
          <p className={P}>
            Agotamiento, desinterés y sensación de inutilidad son también síntomas depresivos, y los límites entre ambos cuadros se discuten desde hace años. Una{' '}
            <Ext href="https://doi.org/10.1016/j.cpr.2015.01.004">revisión de Bianchi, Schonfeld y Laurent</Ext>, publicada en 2015, concluyó que la evidencia disponible no permite sostener con claridad que se trate de fenómenos distintos, sobre todo en los casos graves. La propia CIE-11 establece que no corresponde hablar de burnout cuando hay un trastorno de adaptación, un trastorno de ansiedad o un trastorno del ánimo.
          </p>
          <p className={P}>
            Para quien lo padece, la distinción tiene una utilidad concreta. Cuando el malestar cede los fines de semana y en vacaciones, y se concentra en lo que ocurre en el trabajo, lo más probable es que estemos ante un desgaste de origen laboral. Cuando el ánimo bajo acompaña a la persona también en su casa, se pierde el interés por lo que antes gustaba, cambian el sueño y el apetito o aparecen ideas de muerte, hay que pensar en una depresión, que requiere tratamiento propio y, a veces, medicación. Solo una evaluación clínica puede establecer la diferencia.
          </p>

          <h2 className={H2}>Lo que depende del trabajo</h2>
          <p className={P}>
            Durante 2025 más de un millón de trabajadores respondió el cuestionario CEAL-SM, el instrumento con que la Superintendencia evalúa el ambiente laboral. Uno de cada cinco centros de trabajo, de un total de 20.913, mostró un nivel de riesgo psicosocial medio o alto. Desde agosto de 2024, además, la{' '}
            <Ext href="https://www.bcn.cl/leychile/navegar?idLey=21643">Ley 21.643</Ext>, conocida como Ley Karin, obliga a los empleadores a contar con protocolos de prevención del acoso laboral, el acoso sexual y la violencia en el trabajo.
          </p>
          <p className={P}>
            La investigación sobre tratamientos apunta en la misma dirección. Un{' '}
            <Ext href="https://doi.org/10.1001/jamainternmed.2016.7674">metaanálisis de Panagioti y colaboradores</Ext>, publicado en <em>JAMA Internal Medicine</em> en 2017 con datos de médicos, encontró que las intervenciones dirigidas a la organización, como reducir la carga o modificar los turnos, lograban un efecto mayor que las dirigidas a la persona, como los programas de manejo del estrés. Las segundas ayudan, pero su alcance es limitado si las condiciones que produjeron el desgaste siguen intactas. Esto fija también el alcance de la psicoterapia en estos casos, y es honesto decírselo a quien consulta desde la primera sesión.
          </p>

          <h2 className={H2}>Cuándo consultar</h2>
          <p className={P}>
            Las señales suelen instalarse de a poco. Dormir mal o despertar cansado durante semanas, irritarse con facilidad en la casa, cometer errores que antes no ocurrían, sentir angustia el domingo por la tarde, tratar con indiferencia o fastidio a personas con las que antes se trabajaba bien. A menudo se suman dolores de cabeza, molestias digestivas, contracturas y un consumo mayor de alcohol o de tranquilizantes para poder desconectarse.
          </p>
          <p className={P}>
            Conviene pedir una evaluación cuando estos signos persisten más de dos o tres semanas, cuando empiezan a afectar la vida familiar o cuando la sola idea de ir a trabajar produce un malestar intenso. Si aparecen pensamientos de muerte o de hacerse daño, la consulta debe ser inmediata. En Chile la línea *4141 del Ministerio de Salud atiende de forma gratuita las 24 horas.
          </p>

          <h2 className={H2}>Psicoterapia, licencia médica y origen laboral</h2>
          <p className={P}>
            Un psicólogo clínico puede evaluar el cuadro, tratarlo y emitir informes, pero no puede extender una licencia médica. En Chile esa facultad corresponde a{' '}
            <Ext href="https://www.suseso.gob.cl/605/w3-article-789857.html">médicos cirujanos, cirujanos dentistas y matronas</Ext>, cada uno dentro de su ámbito. Cuando se necesita reposo, lo indica un médico general o un psiquiatra, y lo habitual es que ambos tratamientos se coordinen.
          </p>
          <p className={P}>
            Si la persona estima que su cuadro fue causado por el trabajo, puede denunciarlo ante el organismo administrador del seguro de la{' '}
            <Ext href="https://www.bcn.cl/leychile/navegar?idLey=16744">Ley 16.744</Ext>{' '}
            al que esté afiliado su empleador: ACHS, Mutual de Seguridad, IST o el Instituto de Seguridad Laboral. El organismo evalúa las condiciones del puesto y resuelve si la enfermedad es de origen laboral. Cuando la califica como tal, el tratamiento y el subsidio por reposo son de su cargo, y el empleador queda obligado a corregir los factores de riesgo identificados.
          </p>
          <p className={P}>
            En la psicoterapia el trabajo tiene varios frentes. Se trata de recuperar el sueño y el descanso, revisar la relación de la persona con la exigencia y con los límites, y distinguir lo que puede modificar de su situación laboral de lo que no. A veces el proceso lleva a negociar condiciones o a pedir un cambio de funciones, y otras veces a decidir con calma si ese trabajo es sostenible. Cuando hay acoso o maltrato, la prioridad es la protección de la persona y el uso de los canales formales de denuncia.
          </p>
          <p className={P}>
            En SUBJETIVIDADES atendemos estos casos en{' '}
            <a href="/terapia-individual" className={LINK}>terapia individual</a>, de forma presencial en Ñuñoa o por videollamada para todo Chile, y derivamos a evaluación médica cuando se requiere tratamiento farmacológico o reposo.
          </p>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes sobre estrés laboral y burnout</h2>
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
              Superintendencia de Seguridad Social (28 de abril de 2026).{' '}
              <Ext href="https://www.suseso.gob.cl/605/w3-article-779289.html">Balance 2025 en Seguridad y Salud Laboral</Ext>.
            </li>
            <li>
              Superintendencia de Seguridad Social (11 de septiembre de 2026).{' '}
              <Ext href="https://www.suseso.gob.cl/605/w3-article-789857.html">Consulta pública sobre los profesionales que pueden emitir licencias médicas según el diagnóstico</Ext>.
            </li>
            <li>
              Emol (22 de octubre de 2026).{' '}
              <Ext href="https://www.emol.com/noticias/Economia/2026/10/22/1214831/ausentismo-laboral-anticipar-problemas.html">Ausentismo laboral: cifras de licencias médicas 2025 según SUSESO</Ext>.
            </li>
            <li>
              Organización Mundial de la Salud (28 de mayo de 2019).{' '}
              <Ext href="https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases">Burn-out an «occupational phenomenon»: International Classification of Diseases</Ext>.
            </li>
            <li>
              Maslach, C., Schaufeli, W. B. y Leiter, M. P. (2001).{' '}
              <Ext href="https://doi.org/10.1146/annurev.psych.52.1.397">Job burnout</Ext>. <em>Annual Review of Psychology</em>, 52, 397-422.
            </li>
            <li>
              Bianchi, R., Schonfeld, I. S. y Laurent, E. (2015).{' '}
              <Ext href="https://doi.org/10.1016/j.cpr.2015.01.004">Burnout–depression overlap: a review</Ext>. <em>Clinical Psychology Review</em>, 36, 28-41.
            </li>
            <li>
              Panagioti, M. et al. (2017).{' '}
              <Ext href="https://doi.org/10.1001/jamainternmed.2016.7674">Controlled interventions to reduce burnout in physicians: a systematic review and meta-analysis</Ext>. <em>JAMA Internal Medicine</em>, 177(2), 195-205.
            </li>
            <li>
              <Ext href="https://www.bcn.cl/leychile/navegar?idLey=21643">Ley N° 21.643</Ext>{' '}
              sobre prevención, investigación y sanción del acoso laboral, sexual y la violencia en el trabajo (Biblioteca del Congreso Nacional).
            </li>
            <li>
              <Ext href="https://www.bcn.cl/leychile/navegar?idLey=16744">Ley N° 16.744</Ext>{' '}
              sobre accidentes del trabajo y enfermedades profesionales (Biblioteca del Congreso Nacional).
            </li>
          </ul>
        </section>

        {/* Internal links */}
        <section className="mt-12 border-t border-slate-100 pt-10">
          <h2 className="text-base font-bold text-slate-900 mb-5">Artículos relacionados</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/blog/cuando-ir-al-psicologo" className={CARD}>
              <div className={CARD_TITLE}>¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a href="/blog/diferencia-psicologo-psiquiatra" className={CARD}>
              <div className={CARD_TITLE}>¿Psicólogo o psiquiatra? Guía práctica para saber cuál necesitas</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a href="/blog/el-paciente-estoico" className={CARD}>
              <div className={CARD_TITLE}>El paciente estoico: por qué el estoicismo seduce y qué se ve en la consulta</div>
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
