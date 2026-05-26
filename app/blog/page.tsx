import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de Psicología Clínica | SUBJETIVIDADES',
  description:
    'Artículos sobre salud mental, terapia psicológica y bienestar emocional. Escritos por el equipo clínico de SUBJETIVIDADES, centro de psicología en Ñuñoa, Santiago.',
  alternates: { canonical: 'https://subjetividades.cl/blog' },
  openGraph: {
    title: 'Blog de Psicología Clínica | SUBJETIVIDADES',
    description: 'Artículos sobre salud mental y terapia psicológica escritos por profesionales clínicos en Santiago, Chile.',
    url: 'https://subjetividades.cl/blog',
    type: 'website',
    locale: 'es_CL',
    images: [
      {
        url: 'https://subjetividades.cl/daniel-reyes/photos/waiting-room.png',
        width: 1200,
        height: 630,
        alt: 'Blog de psicología clínica — SUBJETIVIDADES, Ñuñoa, Santiago',
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

const posts = [
  {
    slug: 'cuando-ir-al-psicologo',
    title: '¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo profesional',
    excerpt: 'Muchas personas esperan llegar a un punto de crisis antes de buscar ayuda. Sin embargo, la terapia es más efectiva — y más rápida — cuando se empieza antes de ese punto.',
    date: '2 de abril, 2025',
    readTime: '6 min',
    category: 'Guías',
  },
  {
    slug: 'diferencia-psicologo-psiquiatra',
    title: '¿Psicólogo o psiquiatra? Guía práctica para saber cuál necesitas',
    excerpt: 'La confusión entre ambas profesiones es muy común. Entender la diferencia te ayuda a tomar la decisión correcta y llegar al profesional que realmente puede ayudarte.',
    date: '2 de abril, 2025',
    readTime: '5 min',
    category: 'Guías',
  },
  {
    slug: 'costo-sesion-psicologia-santiago',
    title: '¿Cuánto cuesta una sesión de psicología en Santiago 2026?',
    excerpt: 'El costo de la terapia es una de las primeras preguntas que recibimos. Explicamos los rangos de precio reales en 2026 (arancel mínimo $36.000 CLP) y cómo el reembolso de Isapre puede reducir el costo.',
    date: 'Actualizado mayo 2026',
    readTime: '5 min',
    category: 'Información práctica',
  },
  {
    slug: 'terapia-de-pareja-como-funciona',
    title: 'Terapia de pareja en Santiago: cómo funciona y qué esperar',
    excerpt: 'La terapia de pareja no es solo para relaciones en crisis. Es una herramienta preventiva que fortalece la comunicación y la intimidad antes de que los problemas escalen.',
    date: '2 de abril, 2025',
    readTime: '7 min',
    category: 'Servicios',
  },
];

export default function BlogIndexPage() {
  return (
    <main className="max-w-[760px] mx-auto px-6 py-16">
      <div className="mb-14">
        <div className="text-[13px] font-semibold text-teal-600 tracking-widest uppercase mb-3">Blog</div>
        <h1 className="text-[clamp(28px,4vw,40px)] font-bold text-slate-900 leading-tight tracking-tight mb-4">
          Psicología clínica para la vida cotidiana
        </h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-[560px]">
          Artículos escritos por el equipo de SUBJETIVIDADES para ayudarte a entender mejor tu salud mental y dar el primer paso hacia el bienestar.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="block group no-underline">
            <article className="border border-slate-100 rounded-[14px] p-7 transition-all hover:border-teal-200 hover:shadow-[0_2px_12px_rgba(13,148,136,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[12px] font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">{post.category}</span>
                <span className="text-[12px] text-slate-400">{post.date}</span>
                <span className="text-[12px] text-slate-400">· {post.readTime} lectura</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-teal-700 transition-colors">{post.title}</h2>
              <p className="text-[15px] text-slate-500 leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 text-sm font-semibold text-teal-600 group-hover:text-teal-700">Leer artículo →</div>
            </article>
          </a>
        ))}
      </div>

      <div className="mt-16 bg-slate-900 rounded-[14px] p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">¿Listo para dar el primer paso?</h2>
        <p className="text-slate-400 text-sm mb-5">Agenda tu primera consulta en nuestro centro de Ñuñoa o en modalidad online.</p>
        <a href="/#contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold text-sm no-underline hover:bg-teal-700 transition-colors">
          Agendar consulta
        </a>
      </div>
    </main>
  );
}
