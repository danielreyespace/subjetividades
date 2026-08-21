import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Blog SUBJETIVIDADES',
    default: 'Blog — SUBJETIVIDADES',
  },
};

const navLinks: [string, string][] = [
  ['/#centro', 'El Centro'],
  ['/#servicios', 'Servicios'],
  ['/#equipo', 'Equipo'],
  ['/#resenas', 'Reseñas'],
  ['/prensa', 'Prensa'],
  ['/blog', 'Blog'],
];

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sj" style={{ minHeight: '100vh' }}>
      {/* NAV */}
      <div className="nav">
        <a href="/" className="brand">Subjetividades<span>Psicología Clínica</span></a>
        <div className="nl">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="/#contacto" className="navcta">Contacto</a>
        </div>
      </div>

      {children}

      {/* FOOTER */}
      <footer className="ftr2">
        <div>
          <div className="fbrand">Subjetividades</div>
          <div className="fbrandsub">Psicología Clínica</div>
          <div className="faddr">Alonso de Ercilla 2959, Ñuñoa, Región Metropolitana, Chile · Atención online para todo Chile · © 2026 SUBJETIVIDADES</div>
        </div>
        <div className="flinks">
          <a href="/">Volver al sitio</a>
          <a href="/prensa">Prensa</a>
          <a href="/blog">Blog</a>
          <a href="https://www.instagram.com/subjetividades.cl/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
