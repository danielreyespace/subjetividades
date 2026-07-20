import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¿Cuánto cuesta una sesión de psicología en Santiago 2026?',
  description:
    'Rangos de precio de una sesión de psicología en Santiago, Chile (2026). Cómo funciona el reembolso de Isapre y Fonasa, y cómo reducir el costo real de la terapia.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/costo-sesion-psicologia-santiago',
  },
  openGraph: {
    title: '¿Cuánto cuesta una sesión de psicología en Santiago 2026?',
    description:
      'Rangos de precio reales de la psicología en Santiago 2026 y cómo funciona el reembolso de Isapre. Información del equipo de SUBJETIVIDADES.',
    url: 'https://subjetividades.cl/blog/costo-sesion-psicologia-santiago',
    type: 'article',
    locale: 'es_CL',
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/assets/atmosphere-office.png',
        width: 1200,
        height: 630,
        alt: '¿Cuánto cuesta una sesión de psicología en Santiago 2026? — SUBJETIVIDADES',
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
      headline: '¿Cuánto cuesta una sesión de psicología en Santiago 2026?',
      datePublished: '2025-04-02',
      dateModified: '2026-05-26',
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
          name: '¿Cuánto cuesta una sesión de psicología en Santiago en 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En Santiago, el precio de una sesión de psicología varía entre $36.000 y $120.000 CLP según el profesional, su formación y la modalidad (presencial u online). El arancel sugerido por el Colegio de Psicólogos de Chile vigente desde febrero de 2026 es $36.000 CLP. El rango más común para psicólogos con especialización y experiencia es $60.000–$90.000 CLP por sesión de 50–60 minutos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto reembolsa la Isapre por una sesión de psicología?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El reembolso depende de tu plan de Isapre. En general, las Isapres reembolsan entre el 20% y el 50% del arancel FONASA del prestador. Para acceder al reembolso, necesitas boleta de honorarios del psicólogo. En SUBJETIVIDADES emitimos boleta en cada sesión.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cubre FONASA las sesiones de psicología privada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FONASA no cubre consultas en centros privados directamente. Sin embargo, si eres FONASA modalidad libre elección (tramo C o D), puedes atenderte con prestadores privados acreditados y recibir un reembolso parcial. Consulta con tu FONASA para conocer los beneficios de tu tramo.',
          },
        },
      ],
    },
  ],
};

export default function CostoSesionPage() {
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
          <span className="text-slate-600">Costo sesión psicología Santiago</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Información práctica</span>
            <span className="text-[12px] text-slate-400">Actualizado mayo 2026 · 5 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            ¿Cuánto cuesta una sesión de psicología en Santiago 2026?
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            El costo de la terapia es una de las primeras preguntas que recibimos. Aquí explicamos los rangos reales de precio, cómo funciona el reembolso de Isapre, y qué debes considerar para calcular el costo real de tu proceso terapéutico.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Director SUBJETIVIDADES</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">Rangos de precio en Santiago (2026)</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            El precio de una sesión de psicología en Santiago varía considerablemente. Los factores que más influyen son: nivel de formación del profesional, años de experiencia, tipo de especialización y modalidad de atención. El <strong>Colegio de Psicólogos de Chile fijó el arancel sugerido en $36.000 CLP desde febrero de 2026</strong>.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 border border-slate-200">Perfil del profesional</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 border border-slate-200">Rango de precio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Psicólogo recién titulado (sin especialización)', '$36.000 – $50.000 CLP'],
                  ['Psicólogo con magíster o especialización', '$55.000 – $80.000 CLP'],
                  ['Psicólogo clínico con doctorado y experiencia', '$80.000 – $120.000 CLP'],
                  ['Psicología online (general)', '$40.000 – $70.000 CLP'],
                ].map(([perfil, rango]) => (
                  <tr key={perfil} className="border-b border-slate-100">
                    <td className="py-3 px-4 text-slate-600 border border-slate-200">{perfil}</td>
                    <td className="py-3 px-4 font-semibold text-slate-800 border border-slate-200">{rango}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px] text-slate-500 italic mb-8">
            * Precios referenciales 2026. Arancel mínimo sugerido por el Colegio de Psicólogos de Chile vigente desde febrero 2026: $36.000 CLP. Pueden variar según el profesional y el centro. Corresponden a sesiones individuales de 50–60 minutos.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Qué incluye el precio de una sesión?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Una sesión estándar de psicoterapia dura entre 50 y 60 minutos. Incluye el tiempo con el profesional, su preparación previa, y el registro y seguimiento del proceso. Algunos centros cobran por separado la evaluación inicial o las pruebas psicológicas (test de personalidad, evaluación cognitiva, etc.) — siempre consulta qué incluye el precio antes de comenzar.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Cómo funciona el reembolso de Isapre</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            Si tienes Isapre, puedes solicitar el reembolso de parte del costo de tus sesiones. El proceso es simple:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-[16px] text-slate-600 mb-6">
            <li>Solicita al psicólogo una <strong>boleta de honorarios</strong> por cada sesión (en SUBJETIVIDADES la emitimos siempre).</li>
            <li>Sube la boleta al portal de tu Isapre o preséntala en sucursal.</li>
            <li>La Isapre reembolsa un porcentaje del arancel FONASA del prestador — habitualmente entre el 20% y el 50%.</li>
          </ol>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            El porcentaje exacto depende de tu plan. Si tienes un plan hospitalario básico, el reembolso puede ser bajo. Si tienes un plan más completo, puede cubrir hasta la mitad de cada sesión.
          </p>

          <div className="bg-teal-50 border border-teal-100 rounded-[12px] p-6 my-8">
            <h3 className="text-base font-bold text-teal-900 mb-2">Isapres que reembolsan psicología</h3>
            <p className="text-[15px] text-teal-800 leading-relaxed">
              En SUBJETIVIDADES emitimos boleta de honorarios compatible con Banmédica, Colmena, Consalud, Cruz Blanca y Vida Tres. El porcentaje de reembolso depende de tu plan específico — te recomendamos consultarlo directamente con tu Isapre.
            </p>
          </div>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Cómo calcular el costo real de tu proceso?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            El costo de la terapia no es solo el precio de cada sesión — es la inversión total del proceso. Para calcularlo de manera realista considera:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-6">
            <li><strong>Frecuencia:</strong> Generalmente 1 sesión semanal al inicio, luego puede bajar a quincenal.</li>
            <li><strong>Duración estimada:</strong> Un proceso corto focalizado puede ser 8-12 sesiones. Procesos más complejos pueden extenderse por meses.</li>
            <li><strong>Reembolso de Isapre:</strong> Descuéntalo del precio por sesión para calcular tu desembolso real.</li>
            <li><strong>Efectividad:</strong> Un proceso terapéutico efectivo puede reducir costos en salud a largo plazo (menos licencias médicas, menor uso de urgencias, etc.).</li>
          </ul>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Existe psicología gratuita o de bajo costo en Santiago?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Sí. En Chile existen varias alternativas de bajo costo o gratuitas:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-6">
            <li><strong>CESFAM (Centros de Salud Familiar):</strong> Atención psicológica gratuita para beneficiarios FONASA. La lista de espera puede ser larga.</li>
            <li><strong>Universidades:</strong> Algunos centros de práctica clínica de universidades ofrecen atención supervisada a precios reducidos.</li>
            <li><strong>Programa de Salud Mental FONASA:</strong> Cobertura GES para depresión y esquizofrenia.</li>
            <li><strong>Telefonía de crisis:</strong> Fono Salud Responde 600 360 7777 (gratuito, 24/7).</li>
          </ul>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Cuánto cuesta la primera sesión en SUBJETIVIDADES?',
                a: 'Contáctanos directamente para conocer nuestras tarifas actualizadas. La primera sesión incluye evaluación y definición de objetivos del proceso. Emitimos boleta de honorarios para que puedas solicitar reembolso a tu Isapre.',
              },
              {
                q: '¿La terapia de pareja es más cara que la individual?',
                a: 'En muchos centros sí, porque la sesión de pareja suele durar más (70-80 minutos) y requiere mayor preparación del profesional. En SUBJETIVIDADES la terapia de pareja tiene un precio diferenciado — contáctanos para conocerlo.',
              },
              {
                q: '¿Cuánto reembolsa la Isapre por psicología?',
                a: 'El reembolso varía según tu Isapre y tu plan. En términos generales, puede ser entre el 20% y el 50% del arancel FONASA. Te recomendamos consultar directamente con tu Isapre ingresando el código de prestación de psicología (consulta psicológica) para obtener el detalle exacto de tu plan.',
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
          <h2 className="text-xl font-bold text-white mb-2">¿Quieres conocer nuestras tarifas?</h2>
          <p className="text-slate-400 text-sm mb-5">Completa el formulario de contacto y te respondemos en menos de 2 horas en día hábil.</p>
          <a href="/#contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-teal-700 transition-colors">
            Consultar tarifas
          </a>
        </div>
      </main>
    </>
  );
}
