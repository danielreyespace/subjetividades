import type { Metadata } from 'next';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: '¿Psicólogo o psiquiatra? Guía para saber cuál necesitas',
  description:
    'Psicólogo vs psiquiatra: diferencias clave, cuándo ir a cada uno y si pueden trabajar juntos. Guía práctica del equipo de SUBJETIVIDADES, centro de psicología clínica en Santiago.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/diferencia-psicologo-psiquiatra',
  },
  openGraph: {
    title: '¿Psicólogo o psiquiatra? Guía práctica para saber cuál necesitas',
    description:
      'Diferencias clave entre psicólogo y psiquiatra, y cuándo recurrir a cada profesional. Escrito por el equipo clínico de SUBJETIVIDADES, Ñuñoa, Santiago.',
    url: 'https://subjetividades.cl/blog/diferencia-psicologo-psiquiatra',
    type: 'article',
    locale: 'es_CL',
    authors: ['Daniel Reyes Pace'],
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/photos/credentials-wall.png',
        width: 1200,
        height: 630,
        alt: 'Credenciales y títulos académicos en SUBJETIVIDADES — Psicólogo vs psiquiatra',
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
      '@id': 'https://subjetividades.cl/blog/diferencia-psicologo-psiquiatra',
      headline: '¿Psicólogo o psiquiatra? Guía práctica para saber cuál necesitas',
      description:
        'Diferencias clave entre psicólogo y psiquiatra. Cuándo ir a cada uno y si pueden trabajar juntos.',
      datePublished: '2025-04-02',
      dateModified: '2025-04-02',
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
          name: '¿Cuál es la diferencia entre psicólogo y psiquiatra?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El psicólogo tiene formación universitaria en psicología y trabaja mediante la conversación y técnicas terapéuticas. El psiquiatra es médico (doctor en medicina) con especialización en psiquiatría, y puede prescribir medicación. El psicólogo trata el comportamiento y los procesos mentales; el psiquiatra, los trastornos mentales desde una perspectiva médica.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuándo necesito un psiquiatra y no un psicólogo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Necesitas un psiquiatra cuando los síntomas son intensos y requieren evaluación médica para considerar medicación: episodios maníacos o depresivos severos, síntomas psicóticos, trastorno bipolar, esquizofrenia, o cuando la condición no ha respondido a la psicoterapia sola.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Pueden trabajar juntos el psicólogo y el psiquiatra?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, y es el modelo más efectivo para muchas condiciones. El psiquiatra maneja la medicación y el psicólogo trabaja la psicoterapia. En Chile, muchos pacientes con depresión moderada-severa o ansiedad trabajan con ambos simultáneamente con muy buenos resultados.',
          },
        },
      ],
    },
  ],
};

export default function DiferenciaPsicologoPsiquiatraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="artpage max-w-[760px] mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="text-[13px] text-slate-400 mb-8">
          <a href="/" className="hover:text-teal-600 no-underline transition-colors">Inicio</a>
          {' / '}
          <a href="/blog" className="hover:text-teal-600 no-underline transition-colors">Blog</a>
          {' / '}
          <span className="text-slate-600">Psicólogo vs psiquiatra</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Guías</span>
            <span className="text-[12px] text-slate-400">2 de abril, 2025 · 5 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            ¿Psicólogo o psiquiatra? Guía práctica para saber cuál necesitas
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            La confusión entre ambas profesiones es muy común. Entender la diferencia te ayuda a tomar la decisión correcta y llegar al profesional que realmente puede ayudarte.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Director SUBJETIVIDADES</div>
          </div>
        </header>

        <article className="prose prose-slate max-w-none">
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            "¿Debería ir a un psicólogo o a un psiquiatra?" Es una de las preguntas más frecuentes que recibimos — y es completamente razonable. Aunque ambas profesiones trabajan con la salud mental, tienen formaciones, herramientas y roles muy distintos.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 border border-slate-200"> </th>
                  <th className="text-left py-3 px-4 font-semibold text-teal-700 border border-slate-200">Psicólogo</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 border border-slate-200">Psiquiatra</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Título base', 'Licenciatura en Psicología', 'Médico cirujano (6+ años) + especialización en psiquiatría (3-4 años)'],
                  ['Herramienta principal', 'Psicoterapia (conversación, técnicas cognitivas, conductuales, etc.)', 'Diagnóstico médico + medicación + psicoterapia en algunos casos'],
                  ['¿Prescribe medicamentos?', 'No', 'Sí'],
                  ['¿Puede hacer psicodiagnóstico?', 'Sí (pruebas psicológicas)', 'Sí (evaluación clínica y médica)'],
                  ['Sesión típica', '50-60 minutos, enfocada en exploración y cambio', '20-30 minutos, enfocada en evaluación y seguimiento farmacológico'],
                ].map(([cat, psi, psiq]) => (
                  <tr key={cat} className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-700 border border-slate-200">{cat}</td>
                    <td className="py-3 px-4 text-slate-600 border border-slate-200">{psi}</td>
                    <td className="py-3 px-4 text-slate-600 border border-slate-200">{psiq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Qué hace un psicólogo?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            El psicólogo clínico trabaja mediante la psicoterapia: una forma de tratamiento basada en la conversación y en técnicas específicas según el enfoque (cognitivo-conductual, psicodinámico, integrativo, sistémico, entre otros). Su objetivo es ayudarte a comprender y cambiar patrones de pensamiento, emoción y conducta que te generan malestar.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            En SUBJETIVIDADES trabajamos con un enfoque clínico basado en evidencia, lo que significa que las técnicas que usamos tienen respaldo científico de efectividad.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Qué hace un psiquiatra?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            El psiquiatra es primero médico. Evalúa los trastornos mentales desde una perspectiva clínica y biológica, puede solicitar exámenes médicos, y está capacitado para prescribir medicación psiquiátrica (antidepresivos, ansiolíticos, estabilizadores del ánimo, antipsicóticos, etc.). Muchos psiquiatras también hacen psicoterapia, aunque no es su foco principal.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Cuándo ir a un psicólogo?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            El psicólogo es el punto de entrada más adecuado para la mayoría de las situaciones:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-6">
            <li>Ansiedad o estrés que interfiere con el día a día</li>
            <li>Tristeza persistente o pérdida de motivación</li>
            <li>Dificultades en relaciones de pareja o familia</li>
            <li>Duelo o pérdidas significativas</li>
            <li>Baja autoestima, inseguridad crónica</li>
            <li>Deseo de crecimiento personal o autoconocimiento</li>
            <li>Terapia sexual o dificultades en la intimidad</li>
          </ul>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Cuándo ir a un psiquiatra?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-4">
            Considera al psiquiatra cuando los síntomas son intensos, persistentes y requieren evaluación médica:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px] text-slate-600 mb-6">
            <li>Depresión severa que no responde a psicoterapia</li>
            <li>Episodios maníacos o de euforia extrema</li>
            <li>Síntomas psicóticos (alucinaciones, delirios)</li>
            <li>Trastorno bipolar o esquizofrenia</li>
            <li>Trastornos alimentarios graves</li>
            <li>Cuando el psicólogo lo recomiende como complemento</li>
          </ul>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">¿Pueden trabajar juntos?</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Sí, y es el modelo más efectivo para muchas condiciones. El psiquiatra maneja la medicación y el psicólogo trabaja la psicoterapia. En Chile, muchos pacientes con depresión moderada-severa o ansiedad trabajan con ambos simultáneamente, con resultados consistentemente mejores que con cualquiera de las dos intervenciones solas.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Si en tu proceso de terapia en SUBJETIVIDADES evaluamos que puede ser beneficioso complementar con psiquiatría, te orientamos y podemos derivar a profesionales de confianza.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-[12px] p-6 my-8">
            <h3 className="text-base font-bold text-slate-800 mb-2">En resumen</h3>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Si no estás seguro/a, <strong>empieza por el psicólogo</strong>. Es el punto de entrada natural para la mayoría de las consultas de salud mental. Si durante el proceso se detecta necesidad de evaluación médica o medicación, te derivamos al especialista adecuado.
            </p>
          </div>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Cuál es la diferencia principal entre psicólogo y psiquiatra?',
                a: 'El psicólogo trabaja mediante psicoterapia y no puede recetar medicamentos. El psiquiatra es médico especializado que puede prescribir medicación y realizar evaluaciones clínicas médicas.',
              },
              {
                q: '¿Puedo ir directamente al psiquiatra sin pasar antes por un psicólogo?',
                a: 'Sí, puedes. En Chile no necesitas derivación para consultar con un psiquiatra. Sin embargo, para la mayoría de los problemas de salud mental cotidianos, el psicólogo es el punto de entrada más adecuado.',
              },
              {
                q: '¿El seguro de Isapre cubre al psicólogo?',
                a: 'Sí. En Chile, la mayoría de las Isapres reembolsan un porcentaje de las consultas de psicología cuando emites boleta de honorarios. En SUBJETIVIDADES emitimos boleta para que puedas solicitar el reembolso correspondiente según tu plan.',
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
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">¿Cuánto cuesta una sesión de psicología en Santiago 2026?</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 bg-slate-900 rounded-[14px] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">¿Listo para comenzar?</h2>
          <p className="text-slate-400 text-sm mb-5">En SUBJETIVIDADES puedes agendar una primera consulta presencial en Ñuñoa o en modalidad online para todo Chile.</p>
          <SchedulingLink className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-teal-700 transition-colors">
            Agendar primera consulta
          </SchedulingLink>
        </div>
      </main>
    </>
  );
}
