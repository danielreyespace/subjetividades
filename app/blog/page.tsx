import type { Metadata } from 'next';
import WhatsAppLink from '@/components/WhatsAppLink';
import { waHref, WA_MESSAGES } from '@/lib/whatsapp';
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
const WHATSAPP_URL = waHref(WA_MESSAGES.home);

export default function BlogIndexPage() {
  return (
    <section className="band" style={{ borderTop: 'none' }}>
      <div className="wrap760">
        <div className="lab">Blog</div>
        <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-1.4px', lineHeight: 1.05, marginTop: 12 }}>
          Psicología clínica para la vida cotidiana
        </h1>
        <p className="secdesc" style={{ fontSize: 16, maxWidth: 560, marginTop: 14 }}>
          Artículos escritos por el equipo de SUBJETIVIDADES para ayudarte a entender mejor tu salud mental y dar el primer paso hacia el bienestar.
        </p>

        <div style={{ marginTop: 36 }}>
          {posts.map((post) => (
            <a key={post.slug} className="bpost" href={`/blog/${post.slug}`}>
              <div className="bmeta">
                <span className="bcat">{post.category}</span>
                <span className="bdate">{post.date} · {post.readTime} lectura</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="rd">Leer artículo →</div>
            </a>
          ))}
        </div>

        <div className="ctabox" style={{ marginTop: 30 }}>
          <h2>¿Listo para dar el primer paso?</h2>
          <p>Agenda tu primera consulta en nuestro centro de Ñuñoa o en modalidad online.</p>
          <WhatsAppLink href={WHATSAPP_URL} className="hcta">Agendar consulta</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
