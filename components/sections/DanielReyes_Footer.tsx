import { Instagram } from 'lucide-react';

export default function DanielReyes_Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <div className="text-base font-bold text-white" style={{ fontFamily: "'Courier Prime', Courier, monospace" }}>
            SUBJETIVIDADES
          </div>
          <div className="font-medium text-teal-500 uppercase mt-0.5" style={{ fontFamily: "'Courier Prime', Courier, monospace", fontSize: '11px', letterSpacing: '0em' }}>
            Psicología Clínica
          </div>
          <div className="text-[13px] text-slate-400 mt-1">
            Ñuñoa, Santiago de Chile | Atención online para todo Chile
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-end">
          <a href="/prensa" className="text-[13px] text-slate-400 no-underline transition-colors hover:text-white">
            Prensa
          </a>
          <a href="/blog" className="text-[13px] text-slate-400 no-underline transition-colors hover:text-white">
            Blog
          </a>
          <a href="/blog/cuando-ir-al-psicologo" className="text-[13px] text-slate-400 no-underline transition-colors hover:text-white">
            ¿Cuándo ir al psicólogo?
          </a>
          <a href="/blog/terapia-de-pareja-como-funciona" className="text-[13px] text-slate-400 no-underline transition-colors hover:text-white">
            Terapia de pareja
          </a>
          <a
            href="https://www.instagram.com/subjetividades.cl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de SUBJETIVIDADES"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Instagram className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
