'use client';

import { Calendar } from 'lucide-react';

export default function DanielReyes_StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-white/[0.97] backdrop-blur-xl border-t border-slate-100 p-3 md:hidden">
      <div className="max-w-[480px] mx-auto">
        <a
          href="#equipo"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-teal-600 text-white rounded-[9px] text-sm font-semibold transition-colors hover:bg-teal-700"
        >
          <Calendar className="w-4 h-4" />
          Agendar primera consulta
        </a>
      </div>
    </div>
  );
}
