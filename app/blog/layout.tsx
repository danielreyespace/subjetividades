import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Blog SUBJETIVIDADES',
    default: 'Blog — SUBJETIVIDADES',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-white text-slate-700"
      style={{
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Blog Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-sm">
        <div className="max-w-[760px] mx-auto flex items-center justify-between h-[64px] px-6">
          <a href="/" className="flex flex-col leading-tight no-underline">
            <span
              className="text-[14px] font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: "'Courier Prime', Courier, monospace" }}
            >
              SUBJETIVIDADES
            </span>
            <span
              className="font-medium text-teal-600 uppercase"
              style={{ fontFamily: "'Courier Prime', Courier, monospace", fontSize: '10px', letterSpacing: '0em' }}
            >
              Psicología Clínica
            </span>
          </a>
          <div className="flex items-center gap-5">
            <a
              href="/blog"
              className="text-sm font-medium text-slate-500 no-underline hover:text-slate-900 transition-colors"
            >
              Blog
            </a>
            <a
              href="/#contacto"
              className="text-sm font-semibold text-white bg-teal-600 px-4 py-2 rounded-lg no-underline hover:bg-teal-700 transition-colors"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-[64px]">{children}</div>

      <footer className="bg-slate-900 text-slate-400 py-10 px-6 mt-20">
        <div className="max-w-[760px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <div
              className="text-base font-bold text-white"
              style={{ fontFamily: "'Courier Prime', Courier, monospace" }}
            >
              SUBJETIVIDADES
            </div>
            <div
              className="font-medium text-teal-500 uppercase mt-0.5"
              style={{ fontFamily: "'Courier Prime', Courier, monospace", fontSize: '11px', letterSpacing: '0em' }}
            >
              Psicología Clínica
            </div>
            <div className="text-[13px] text-slate-400 mt-1">
              Ñuñoa, Santiago de Chile · Atención online para todo Chile
            </div>
            <div className="text-[12px] text-slate-500 mt-2">
              © 2026 SUBJETIVIDADES · Todos los derechos reservados.
            </div>
          </div>
          <div className="flex gap-5">
            <a href="/" className="text-[13px] text-slate-400 no-underline hover:text-white transition-colors">
              Volver al sitio
            </a>
            <a href="/blog" className="text-[13px] text-slate-400 no-underline hover:text-white transition-colors">
              Blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
