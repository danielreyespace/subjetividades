'use client';

import { motion } from 'framer-motion';

export default function DanielReyes_VideoSection() {
  return (
    <section id="video" className="py-24 px-6 bg-[#f7f8fa]">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-10">
          <div className="text-[13px] font-semibold text-teal-600 tracking-widest uppercase mb-3.5">
            Conoce el Centro
          </div>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-bold text-slate-900 leading-tight tracking-tight max-w-[680px] mx-auto">
            Un recorrido por SUBJETIVIDADES
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-[360px]"
        >
          <div className="relative aspect-[9/16] rounded-[14px] overflow-hidden shadow-[0_10px_30px_rgba(26,35,50,0.12)] bg-slate-900">
            <iframe
              src="https://www.youtube.com/embed/Ghp7d5VZvuU?rel=0&modestbranding=1&playsinline=1"
              title="Conoce el Centro SUBJETIVIDADES"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
