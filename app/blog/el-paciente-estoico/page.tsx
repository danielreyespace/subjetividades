import type { Metadata } from 'next';
import Image from 'next/image';
import SchedulingLink from '@/components/SchedulingLink';

export const metadata: Metadata = {
  title: 'El paciente estoico: por qué el estoicismo seduce y qué se ve en la consulta',
  description:
    'El auge del estoicismo entre hombres jóvenes tiene raíces sociales: incertidumbre, individuación y un mandato de autosuficiencia. Qué ofrece, qué esconde y qué se observa en la consulta. SUBJETIVIDADES, Ñuñoa, Santiago.',
  alternates: {
    canonical: 'https://subjetividades.cl/blog/el-paciente-estoico',
  },
  openGraph: {
    title: 'El paciente estoico: por qué el estoicismo seduce y qué se ve en la consulta',
    description:
      'Por qué el estoicismo se volvió una de las filosofías más leídas, con particular arraigo entre hombres jóvenes, y qué observa la clínica. Escrito por Daniel Reyes Pace, Director de SUBJETIVIDADES.',
    url: 'https://subjetividades.cl/blog/el-paciente-estoico',
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
      headline: 'El paciente estoico: por qué el estoicismo seduce y qué se ve en la consulta',
      datePublished: '2026-08-31',
      dateModified: '2026-08-31',
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
          name: '¿Por qué el estoicismo se volvió tan popular?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Buena parte de la respuesta está en la incertidumbre. En un tiempo de precariedad laboral y de porvenir global incierto, y tras la caída de las instituciones que antes entregaban un relato sobre cómo vivir, cada quien quedó a cargo de inventar su identidad sin brújula heredada. El estoicismo ofrece una salida a ese sujeto agotado de administrarse: gobernar al menos el propio juicio.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué el estoicismo arraiga sobre todo entre hombres jóvenes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Muchos hombres arrastran, por razones culturales, una dificultad para reconocer y poner en palabras lo que sienten, fruto de una crianza orientada hacia la contención y la autosuficiencia. A quienes crecieron evitando mostrar vulnerabilidad, una filosofía que interpreta el dominio de las emociones como fortaleza les hace sentido: ofrece dignidad y un vocabulario noble a un mecanismo que ya estaba instalado.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es malo practicar el estoicismo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No en sí mismo. El problema aparece cuando se vive como supresión emocional: quienes lo practican así suelen sufrir más malestar, y la calma que promete termina pareciéndose a la soledad. Su núcleo, en cambio —examinar los juicios que anteceden a la angustia—, está en el origen de las terapias cognitivas que hoy alivian a muchas personas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuándo conviene consultar en vez de solo aplicar la filosofía?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cuando la calma buscada se transforma en aislamiento, cuando controlar las emociones exige un esfuerzo sostenido que deja más solo, o cuando el malestar persiste pese a la disciplina íntima. Una filosofía o una psicoterapia pueden acercarnos a los demás o dejarnos todavía más solos: si predomina el repliegue, conviene consultar.',
          },
        },
      ],
    },
  ],
};

export default function PacienteEstoicoPage() {
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
          <span className="text-slate-600">El paciente estoico</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">Salud mental</span>
            <span className="text-[12px] text-slate-400">31 de agosto, 2026 · 5 min lectura</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
            El paciente estoico
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Las <em>Meditaciones</em> de Marco Aurelio, el cuaderno privado que su autor nunca pensó publicar, vendían alrededor de dieciséis mil ejemplares al año a comienzos de la década pasada. En 2019 superaron los cien mil, según cifras que Penguin entregó a <em>The Guardian</em>, y hoy figuran de manera estable entre los libros más vendidos, casi dos mil años después de que su autor las anotara. Una escuela que durante siglos pareció extinta es hoy una de las filosofías que más gente lee y practica, con particular arraigo entre hombres jóvenes.
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="text-sm font-semibold text-slate-800">Daniel Reyes Pace</div>
            <div className="text-[13px] text-slate-400">Psicólogo clínico · Doctor en Psicología, U. de Chile · Director de SUBJETIVIDADES</div>
          </div>
        </header>

        <figure className="mb-12">
          <Image
            src="/blog/epicteto.webp"
            alt="Retrato grabado de Epicteto, filósofo estoico"
            width={1280}
            height={1707}
            className="w-full max-w-[380px] mx-auto h-auto rounded-[12px]"
            priority
          />
          <figcaption className="text-center text-[13px] text-slate-400 mt-3">
            Epicteto, cuya distinción entre lo que depende de nosotros y lo que no está en el centro del estoicismo. Grabado de época.
          </figcaption>
        </figure>

        <article className="prose prose-slate max-w-none">
          <h2 className="text-[22px] font-bold text-slate-900 mt-2 mb-4">Un fenómeno que merece explicación</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            La cuenta Daily Stoic, del divulgador estadounidense Ryan Holiday, reúne unos tres millones de seguidores en Instagram, y su libro homónimo lleva más de dos millones de copias vendidas. El fenómeno merece una explicación, y creo que buena parte de la respuesta está en la incertidumbre. En un tiempo de precariedad laboral y de porvenir global incierto, la promesa de gobernar al menos el propio juicio podría estar ofreciendo algún grado de alivio.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Durante buena parte del siglo XX, la pertenencia a un partido o a una iglesia le entregaba a cada cual un relato sobre cómo vivir y para qué. Con la caída de esas instituciones normativas, cada quien quedó a cargo de inventar su identidad y su destino sin una brújula heredada, eso que la sociología llama individuación.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">El costo de administrarse a uno mismo</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Esa autonomía tiene un costo, y con el tiempo se ha vuelto más exigente. Imaginar un destino y recorrerlo sin brújula libera, pero requiere audacia y un derroche de energía psíquica del que no siempre somos conscientes. El individuo de hoy rinde como empresario de sí mismo y termina agotado de administrarse. Alain Ehrenberg, en <em>La fatiga de ser uno mismo</em>, leyó buena parte de la depresión de nuestro tiempo como el reverso de ese mandato.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Un problema social vuelto disciplina íntima</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            El estoicismo le ofrece a ese sujeto una salida. Su distinción central, que formuló Epicteto, separa lo que depende de nosotros de lo que no y pone la serenidad del lado de lo primero. Si el mundo de afuera no depende de él, que retire de ahí su energía y gobierne su interior. La fórmula convierte un problema de origen social en una disciplina íntima, y por eso cobra sentido para alguien que necesita gestionar su propia angustia.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Por qué arraiga entre los hombres jóvenes</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Falta explicar su arraigo entre los hombres jóvenes. Ya he descrito antes la dificultad, de origen cultural, que muchos hombres arrastramos para reconocer y poner en palabras lo que sentimos, fruto de una crianza que nos ha orientado hacia la contención y la autosuficiencia. A quienes crecimos evitando mostrar vulnerabilidad, una filosofía que interpreta el dominio de las emociones como fortaleza nos hace sentido. Ofrece dignidad y un vocabulario noble a un mecanismo que estaba instalado.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Cuando la calma se parece a la soledad</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Sin embargo, quienes viven el estoicismo como supresión emocional sufren más malestar. Es lo que se ve en la consulta. La calma que promete termina pareciéndose a la soledad, algo que la vida adulta masculina ya conoce de sobra en un país que desmontó los espacios donde antes la gente tejía sus vínculos.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-8">
            Hay además una ironía en todo esto. Queremos que nuestras decisiones sean una construcción propia y libre, y rechazamos en el discurso cualquier injerencia en ese proyecto, aunque para sostenerlo adoptemos sin titubear el manual que un emperador escribió hace dieciocho siglos.
          </p>

          <h2 className="text-[22px] font-bold text-slate-900 mt-10 mb-4">Lo que el estoicismo sí puede dar</h2>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            Esto no invalida lo que el estoicismo puede dar, y sería injusto despacharlo como un producto más de la autoayuda. Su núcleo, examinar los juicios que anteceden a la angustia, está en el origen de las terapias cognitivas que hoy alivian a muchas personas, invitando además al cuidado de los otros y a reconocerse parte de una comunidad humana, lejos del repliegue individual.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            El auge estoico expresa una demanda legítima que pocas instituciones atienden hoy: la de contar con herramientas para sostener la incertidumbre y con un lenguaje para la vida interior. Tomarse en serio ese impulso supone preguntarse si las herramientas que las personas tienen a mano —como la filosofía o la psicoterapia— las acercan a los demás o las dejan todavía más solas.
          </p>
          <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
            En SUBJETIVIDADES acompañamos ese trabajo en terapia individual, presencial en Ñuñoa o por videollamada para todo Chile, con un equipo con experiencia clínica en población adulta y en las exigencias particulares que la socialización masculina impone sobre la vida afectiva.
          </p>
        </article>

        {/* FAQ */}
        <section className="mt-14 border-t border-slate-100 pt-12">
          <h2 className="text-[22px] font-bold text-slate-900 mb-8">Preguntas frecuentes sobre el estoicismo</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Por qué el estoicismo se volvió tan popular?',
                a: 'Buena parte de la respuesta está en la incertidumbre. En un tiempo de precariedad laboral y de porvenir global incierto, y tras la caída de las instituciones que antes entregaban un relato sobre cómo vivir, cada quien quedó a cargo de inventar su identidad sin brújula heredada. El estoicismo ofrece una salida a ese sujeto agotado de administrarse: gobernar al menos el propio juicio.',
              },
              {
                q: '¿Por qué el estoicismo arraiga sobre todo entre hombres jóvenes?',
                a: 'Muchos hombres arrastran, por razones culturales, una dificultad para reconocer y poner en palabras lo que sienten, fruto de una crianza orientada hacia la contención y la autosuficiencia. A quienes crecieron evitando mostrar vulnerabilidad, una filosofía que interpreta el dominio de las emociones como fortaleza les hace sentido: ofrece dignidad y un vocabulario noble a un mecanismo que ya estaba instalado.',
              },
              {
                q: '¿Es malo practicar el estoicismo?',
                a: 'No en sí mismo. El problema aparece cuando se vive como supresión emocional: quienes lo practican así suelen sufrir más malestar, y la calma que promete termina pareciéndose a la soledad. Su núcleo, en cambio —examinar los juicios que anteceden a la angustia—, está en el origen de las terapias cognitivas que hoy alivian a muchas personas.',
              },
              {
                q: '¿Cuándo conviene consultar en vez de solo aplicar la filosofía?',
                a: 'Cuando la calma buscada se transforma en aislamiento, cuando controlar las emociones exige un esfuerzo sostenido que deja más solo, o cuando el malestar persiste pese a la disciplina íntima. Una filosofía o una psicoterapia pueden acercarnos a los demás o dejarnos todavía más solos: si predomina el repliegue, conviene consultar.',
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
            <a href="/blog/soledad-masculina-adulta" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">Hombres sin amigos: la soledad masculina en la adultez</div>
              <div className="text-[13px] text-teal-600">Leer →</div>
            </a>
            <a href="/blog/cuando-ir-al-psicologo" className="block p-5 border border-slate-100 rounded-[12px] no-underline hover:border-teal-200 transition-colors group">
              <div className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors mb-1">¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo</div>
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
