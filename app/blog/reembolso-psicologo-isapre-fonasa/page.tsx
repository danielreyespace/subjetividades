import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: 'Reembolso del psicólogo en Isapre: cómo funciona y qué dice la ley (2026)',
  description:
    'Cómo opera el reembolso de las sesiones de psicología en Isapre y seguro complementario, y por qué —según la Ley 21.331 de Salud Mental— las consultas de salud mental no pueden tener una cobertura menor que las demás prestaciones de salud.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/reembolso-psicologo-isapre-fonasa',
  },
  openGraph: {
    title: 'Reembolso del psicólogo en Isapre: cómo funciona y qué dice la ley',
    description:
      'Cómo opera el reembolso de las sesiones de psicología en Isapre, y por qué la Ley 21.331 prohíbe coberturas menores para la salud mental.',
    url: 'https://subjetividades.cl/blog/reembolso-psicologo-isapre-fonasa',
    type: 'article',
    locale: 'es_CL',
    authors: ['Daniel Reyes Pace'],
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/assets/atmosphere-office.png',
        width: 1200,
        height: 630,
        alt: 'Reembolso de psicología en Isapre — SUBJETIVIDADES, Ñuñoa, Santiago',
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
      headline: 'Reembolso del psicólogo en Isapre: cómo funciona y qué dice la ley (2026)',
      datePublished: '2026-06-16',
      dateModified: '2026-06-16',
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
          name: '¿Puede recuperarse parte del costo de la consulta psicológica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Con la boleta de honorarios es posible solicitar el reembolso parcial en la Isapre y, cuando se cuenta con él, en el seguro complementario de salud. El porcentaje depende del plan y de su cobertura.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Pueden las Isapres aplicar un tope a las consultas de psicología?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No por debajo del resto de las prestaciones. La Ley N° 21.331 (2021) prohíbe discriminar a la salud mental en materia de coberturas, y la Circular IF/N° 396 de la Superintendencia de Salud instruye que los planes no pueden fijar topes de bonificación ni topes anuales inferiores a los de las prestaciones físicas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué hacer si la Isapre no respeta esa cobertura?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es posible reclamar ante la Superintendencia de Salud, organismo que fiscaliza a las aseguradoras. La Corte Suprema (2025) ha ordenado a las Isapres igualar la cobertura de salud mental a la de la salud física, incluso en planes antiguos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo opera en Fonasa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fonasa funciona de manera distinta: la atención ambulatoria privada se canaliza por la Modalidad de Libre Elección, con prestadores en convenio. La boleta de honorarios opera principalmente en el reembolso de Isapres y seguros complementarios.',
          },
        },
      ],
    },
  ],
};

export default function ReembolsoPsicologoPage() {
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
          <span className="text-slate-600">Reembolso del psicólogo en Isapre</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Información práctica</span>
            <span className="text-[12px] text-slate-400">16 de junio, 2026 · 6 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            Reembolso del psicólogo en Isapre: cómo funciona y qué dice la ley
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            El costo suele ser la primera barrera para quien busca atención psicológica. Una parte es recuperable mediante el reembolso del seguro de salud; menos difundido es que, desde 2021, la ley prohíbe a las Isapres cubrir la salud mental en condiciones inferiores a las del resto de la medicina.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Director de SUBJETIVIDADES</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La atención psicológica particular funciona por reembolso: la consulta se paga de manera directa y el seguro devuelve una fracción del valor, determinada por la cobertura del plan. A esa devolución puede sumarse la de un seguro complementario, cuando existe, aplicada sobre el saldo no bonificado. Hasta aquí, el mecanismo no difiere del de cualquier otra prestación ambulatoria. La diferencia relevante de los últimos años está en las reglas de cobertura que la ley impone a la salud mental.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">La cobertura de la salud mental ya no puede ser inferior</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Durante décadas, los planes de salud trataron la salud mental como una categoría de segundo orden: topes anuales, número limitado de sesiones y porcentajes de bonificación menores que los aplicados a la salud física. La{' '}
            <a href="https://www.bcn.cl/leychile/navegar?idNorma=1159383" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-800">
              Ley N° 21.331
            </a>, publicada el 11 de mayo de 2021, modificó ese marco. Entre sus principios, prohíbe toda forma de discriminación hacia las personas por motivos de salud mental, de manera expresa en el ámbito de las prestaciones y coberturas de salud.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Para trasladar ese principio a los seguros privados, la Superintendencia de Salud dictó la{' '}
            <a href="https://www.superdesalud.gob.cl/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-800">
              Circular IF/N° 396 (noviembre de 2021)
            </a>, que instruye a las Isapres que ningún plan puede fijar topes de bonificación ni topes máximos anuales para la salud mental inferiores a los establecidos para las prestaciones físicas. En términos concretos, una consulta de psicología o de psiquiatría debe cubrirse en las mismas condiciones que cualquier otra consulta médica.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Una norma que no siempre se cumple</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La existencia de la norma no garantiza su cumplimiento. Diversas Isapres —en particular en los planes contratados con anterioridad a la ley— mantuvieron topes y coberturas reducidas para las atenciones de salud mental. La judicatura ha sido categórica: la{' '}
            <a href="https://actualidadjuridica.doe.cl/corte-suprema-ordena-a-isapre-igualar-cobertura-en-salud-mental-a-la-fisica-conforme-a-la-ley-21-331/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-800">
              Corte Suprema, en diciembre de 2025
            </a>, fijó un estándar de igualdad y ordenó equiparar la cobertura de salud mental a la de las prestaciones físicas, incluso en contratos anteriores a la entrada en vigencia de la ley.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Ante un tope o una bonificación menor en las consultas psicológicas, cabe presentar un reclamo ante la{' '}
            <a href="https://www.superdesalud.gob.cl/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-800">
              Superintendencia de Salud
            </a>, organismo encargado de fiscalizar a las aseguradoras. Existe una{' '}
            <a href="https://www.biobiochile.cl/noticias/servicios/explicado/2026/01/07/que-hacer-si-tu-isapre-no-respeta-la-cobertura-de-salud-mental-debe-ser-igual-que-la-salud-fisica.shtml" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-800">
              orientación pública
            </a>{' '}
            sobre el procedimiento.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">El caso de Fonasa</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Fonasa opera bajo una lógica distinta. La atención ambulatoria en prestadores privados se canaliza, principalmente, a través de la Modalidad de Libre Elección, sujeta a convenio. La boleta de honorarios, en cambio, opera sobre todo en el reembolso de Isapres y de seguros complementarios. Conviene, por tanto, revisar la cobertura específica según el sistema previsional antes de iniciar el proceso.
          </p>

          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Que la salud mental se cubra en igualdad de condiciones no es un tecnicismo administrativo. Expresa una decisión de fondo: dejar de tratar el sufrimiento psíquico como un asunto de segundo orden y reconocerlo, también en el plano del financiamiento, como parte de la salud.
          </p>

          <p className="text-[13px] text-slate-400 leading-relaxed mb-2">
            Esta información es de carácter general y orientativo; no constituye asesoría legal. Las coberturas y los porcentajes dependen de cada plan y pueden variar.
          </p>
        </article>

        {/* Fuentes */}
        <section className="mt-12 border-t border-slate-100 pt-8">
          <h2 className="text-base font-bold text-slate-900 mb-4">Fuentes y referencias</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-[14px] text-slate-500">
            <li>
              <a href="https://www.bcn.cl/leychile/navegar?idNorma=1159383" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-800">
                Ley N° 21.331
              </a>{' '}— Reconocimiento y protección de los derechos de las personas en la atención de salud mental (Biblioteca del Congreso Nacional).
            </li>
            <li>
              <a href="https://www.superdesalud.gob.cl/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-800">
                Superintendencia de Salud
              </a>{' '}— Circular IF/N° 396 sobre cobertura de salud mental en Isapres y canal de reclamos.
            </li>
            <li>
              <a href="https://actualidadjuridica.doe.cl/corte-suprema-ordena-a-isapre-igualar-cobertura-en-salud-mental-a-la-fisica-conforme-a-la-ley-21-331/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-800">
                Corte Suprema
              </a>{' '}— Estándar de igualdad en la cobertura de salud mental conforme a la Ley 21.331 (2025).
            </li>
          </ul>
        </section>

        {/* Internal links */}
        <section className="mt-12 border-t border-slate-100 pt-10">
          <h2 className="text-base font-bold text-slate-900 mb-5">Artículos relacionados</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/blog/costo-sesion-psicologia-santiago" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">¿Cuánto cuesta una sesión de psicología en Santiago 2026?</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a href="/blog/cuando-ir-al-psicologo" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
          </div>
        </section>

        <div className="mt-12 bg-slate-900 rounded-[14px] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">¿Buscas iniciar un proceso?</h2>
          <p className="text-slate-400 text-sm mb-5">
            Primera consulta presencial en Ñuñoa, Santiago u online para todo Chile.
          </p>
          <SchedulingLink location="blog_reembolso_psicologo_isapre_fonasa_cta" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-teal-700 transition-colors">
            Agendar primera consulta
          </SchedulingLink>
        </div>
      </main>
    </>
  );
}
