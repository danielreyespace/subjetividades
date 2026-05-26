'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, Newspaper, University } from 'lucide-react';
import { homePressHighlights } from '@/lib/press';

const icons = [Award, Newspaper, University];

export default function DanielReyes_PressSection() {
  return (
    <section id="prensa" className="py-24 px-6 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-[13px] font-semibold text-teal-600 tracking-widest uppercase mb-3.5">
              Trayectoria pública
            </div>
            <h2 className="text-[clamp(26px,3.5vw,38px)] font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Presencia académica, institucional y en medios
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Además de su trabajo clínico, los profesionales del equipo han participado en el debate público sobre psicología, educación, y salud sexual desde medios, universidades y organismos internacionales.
            </p>
            <a
              href="/prensa"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-teal-600 px-5 py-3 rounded-lg no-underline transition-colors hover:bg-teal-700"
            >
              Ver trayectoria y apariciones
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {homePressHighlights.map((item, index) => {
              const Icon = icons[index] || Newspaper;
              return (
                <motion.a
                  key={`${item.source}-${item.title}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group grid grid-cols-[44px_1fr] gap-4 rounded-[14px] border border-slate-100 bg-[#f7f8fa] p-5 no-underline transition-all hover:border-teal-200 hover:shadow-[0_4px_16px_rgba(13,148,136,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-teal-700">
                        {item.source}
                      </span>
                      {item.date && <span className="text-[12px] text-slate-400">{item.date}</span>}
                    </span>
                    <span className="block text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-teal-700">
                      {item.title}
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
