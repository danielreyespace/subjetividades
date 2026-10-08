import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: {
    absolute: 'Narcisismo o egoísmo: cómo distinguirlos | Subjetividades',
  },
  description:
    "Por qué el uso de 'narcisista' en redes confunde una dimensión de toda persona con un diagnóstico, y qué observar en una relación que hace daño.",
  alternates: {
    canonical: 'https://subjetividades.cl/blog/narcisismo-egoismo-diferencia',
  },
  openGraph: {
    title: 'El narcisismo fuera de la clínica: sobre el uso popular de un concepto',
    description:
      "Por qué el uso de 'narcisista' en redes confunde una dimensión de toda persona con un diagnóstico, y qué observar en una relación que hace daño.",
    url: 'https://subjetividades.cl/blog/narcisismo-egoismo-diferencia',
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
      headline: 'El narcisismo fuera de la clínica: sobre el uso popular de un concepto',
      datePublished: '2026-10-08',
      dateModified: '2026-10-08',
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
  ],
};

const p = 'text-[16px] text-slate-600 leading-relaxed mb-6';
const h2 = 'text-[22px] font-bold text-slate-900 mt-10 mb-4';
const doiLink = 'text-teal-700 hover:text-teal-800 underline underline-offset-2 break-all';

export default function NarcisismoPage() {
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
          <span className="text-slate-600">El narcisismo fuera de la clínica</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Salud mental</span>
            <span className="text-[12px] text-slate-400">8 de octubre, 2026 · 5 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            El narcisismo fuera de la clínica: sobre el uso popular de un concepto
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            El término narcisismo ocupa hoy en el lenguaje cotidiano un lugar que hace dos décadas pertenecía casi exclusivamente a la clínica. Circula en redes sociales y organiza el relato con que muchas personas describen a una ex pareja o a un padre al iniciar una <a href="/terapia-individual" className="text-teal-700 hover:text-teal-800 underline underline-offset-2">psicoterapia</a>. Sostengo aquí que ese uso toma una dimensión presente en todo funcionamiento psíquico y la convierte en una categoría de personas. Sostengo también que la crítica habitual, según la cual el narcisismo se confunde con rasgos comunes como el egoísmo o la defensividad, requiere una formulación más precisa.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Doctor en Psicología, U. de Chile · Director de SUBJETIVIDADES</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <p className={`${p} mb-8`}>
            Haslam (2016) llamó concept creep a la tendencia de los conceptos psicológicos vinculados al daño a ampliar su significado con el tiempo. El narcisismo ofrece un caso claro: el término pasa de designar una organización de la personalidad a designar conductas aisladas de desconsideración. Haslam reconoce que esta ampliación permitió nombrar daños antes desatendidos y advierte que favorece una lectura del mundo social en términos de víctimas y victimarios.
          </p>

          <h2 className={h2}>Qué designa el narcisismo en la clínica</h2>
          <p className={p}>
            Criticar el mal uso de un concepto supone un uso correcto, y en este caso el campo especializado carece de acuerdo. Pincus y Lukowitsky (2010) mostraron que la teoría clínica y el diagnóstico psiquiátrico trabajan con descripciones del narcisismo que no coinciden entre sí ni con las de la psicología de la personalidad. Conviene entonces explicitar el referente. En lo que sigue adopto el de la tradición psicoanalítica, que es además la que introdujo el término en la clínica.
          </p>
          <p className={`${p} mb-8`}>
            Freud (1914) concibió el narcisismo como un momento necesario en la constitución del yo. Kohut (1971) le atribuyó una línea de desarrollo propia, cuyas formas maduras sostienen las ambiciones y los ideales. Kernberg (1975) reservó el adjetivo patológico para una organización apoyada en un self grandioso y en la devaluación defensiva de los otros. En los tres autores el narcisismo designa una función: la regulación de la autoestima. La patología aparece cuando esa regulación se vuelve rígida y compromete el conjunto de los vínculos de la persona.
          </p>

          <h2 className={h2}>Narcisismo, egoísmo y torpeza relacional</h2>
          <p className={p}>
            De aquí se sigue una corrección a la crítica habitual. El egoísmo y la defensividad pertenecen al campo del narcisismo: el merecimiento es uno de sus rasgos centrales y la defensa frente a la herida en la autoestima es su operación característica. Quien llama narcisista a una persona egoísta acierta en la dimensión y yerra en la inferencia, pues de una conducta deduce una estructura estable.
          </p>
          <p className={p}>
            La diferencia entre el funcionamiento corriente y el patológico se juega en la rigidez del patrón y en su extensión al conjunto de los vínculos. Un indicador clínico útil es la respuesta de la persona cuando alguien le señala el daño que causó. La capacidad de registrar ese señalamiento y de reparar habla de un narcisismo suficientemente flexible.
          </p>
          <p className={`${p} mb-8`}>
            La torpeza relacional constituye un caso distinto. Quien no advierte el efecto de sus actos por falta de habilidad social o por ansiedad produce a veces efectos semejantes. Falta en ese caso el uso del otro al servicio de la propia autoestima, que define al narcisismo patológico en su dimensión interpersonal. La categoría de narcisismo &quot;encubierto&quot;, muy difundida en redes, facilita la confusión porque permite aplicar la etiqueta a personas inhibidas o inseguras. Miller, Widiger y Campbell (2014) cuestionaron dentro del propio campo el peso creciente de la vulnerabilidad en la definición.
          </p>

          <h2 className={h2}>El daño real y los costos de la etiqueta</h2>
          <p className={p}>
            Esta crítica tiene un límite. Day, Bourke, Townsend y Grenyer (2020) estudiaron a 683 personas en relación cercana con alguien con narcisismo patológico. La carga que reportaron superó a la de cuidadores de personas con trastorno límite de la personalidad, y el 69% alcanzaba el umbral de caso para depresión. Una relación puede causar daño y justificar una separación sin que la otra persona tenga un diagnóstico, y el reconocimiento de ese daño es independiente de la exactitud de la etiqueta.
          </p>
          <p className={p}>
            La etiqueta tiene además costos para quien la emplea. La versión popular incluye la premisa de que el narcisista no cambia, lo que descarta de antemano la conversación y la reparación. El diagnóstico se formula a partir del relato de una de las partes y tiende a atribuir a la personalidad del otro lo que depende también de la dinámica del vínculo.
          </p>
          <p className={p}>
            En el trabajo clínico resulta más productivo describir qué se repite en <a href="/terapia-de-pareja" className="text-teal-700 hover:text-teal-800 underline underline-offset-2">la relación</a> y cómo responde el otro cuando se le muestra el efecto de sus actos. Esas descripciones permiten decidir sobre el vínculo con mejor información que la que entrega un diagnóstico hecho a distancia.
          </p>
        </article>

        {/* Referencias */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-6">Referencias</h2>
          <ul className="space-y-3 text-[14px] text-slate-500 leading-relaxed list-none p-0">
            <li>
              Day, N. J. S., Bourke, M. E., Townsend, M. L. y Grenyer, B. F. S. (2020). Pathological narcissism: A study of burden on partners and family. Journal of Personality Disorders, 34(6), 799-813.
            </li>
            <li>
              Freud, S. (1914). Introducción del narcisismo. En Obras completas (vol. 14). Amorrortu.
            </li>
            <li>
              Haslam, N. (2016). Concept creep: Psychology&apos;s expanding concepts of harm and pathology. Psychological Inquiry, 27(1), 1-17.
            </li>
            <li>
              Kernberg, O. F. (1975). Borderline conditions and pathological narcissism. Jason Aronson.
            </li>
            <li>
              Kohut, H. (1971). The analysis of the self. International Universities Press.
            </li>
            <li>
              Miller, J. D., Widiger, T. A. y Campbell, W. K. (2014). Vulnerable narcissism: Commentary for the special series &quot;Narcissistic personality disorder: New perspectives on diagnosis and treatment&quot;. Personality Disorders: Theory, Research, and Treatment, 5(4), 450-451.{' '}
              <a href="https://doi.org/10.1037/per0000083" className={doiLink} target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1037/per0000083
              </a>
            </li>
            <li>
              Pincus, A. L. y Lukowitsky, M. R. (2010). Pathological narcissism and narcissistic personality disorder. Annual Review of Clinical Psychology, 6, 421-446.{' '}
              <a href="https://doi.org/10.1146/annurev.clinpsy.121208.131215" className={doiLink} target="_blank" rel="noopener noreferrer">
                https://doi.org/10.1146/annurev.clinpsy.121208.131215
              </a>
            </li>
          </ul>
        </section>

        {/* Internal links */}
        <section className="mt-12 border-t border-slate-100 pt-10">
          <h2 className="text-base font-bold text-slate-900 mb-5">Artículos relacionados</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/blog/terapia-de-pareja-como-funciona" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">Terapia de pareja en Santiago: cómo funciona y qué esperar</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a href="/blog/el-paciente-estoico" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">El paciente estoico: por qué el estoicismo seduce y qué se ve en la consulta</div>
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
