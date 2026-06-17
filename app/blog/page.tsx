import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog';

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

const posts = blogPosts;

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
