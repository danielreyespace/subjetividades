'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function DanielReyes_MapSection() {
  return (
    <section id="ubicacion" className="py-20 px-6 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="text-[13px] font-semibold text-teal-600 tracking-widest uppercase mb-3.5">
            Ubicación
          </div>
          <h2 className="text-[clamp(22px,3vw,32px)] font-bold text-slate-900 mb-3 tracking-tight">
            Encuéntranos en Ñuñoa
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-[15px]">
            <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Alonso de Ercilla 2959, Ñuñoa, Región Metropolitana, Chile</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[16px] overflow-hidden border border-slate-100 shadow-sm"
          style={{ height: '420px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6657.803275170859!2d-70.5990791!3d-33.451869099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf4a2e22282b%3A0xa70c26182c67b086!2sSubjetividades.%20Psicolog%C3%ADa%20Cl%C3%ADnica!5e0!3m2!1ses-419!2scl!4v1781881555733!5m2!1ses-419!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Subjetividades. Psicología Clínica — Alonso de Ercilla 2959, Ñuñoa"
          />
        </motion.div>
      </div>
    </section>
  );
}
