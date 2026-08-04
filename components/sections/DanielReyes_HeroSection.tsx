'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import SchedulingLink from '@/components/SchedulingLink';

export default function DanielReyes_HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/daniel-reyes/photos/waiting-room.webp"
          alt="Sala de espera del centro de psicología clínica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,35,50,0.72)] via-[rgba(26,35,50,0.65)] to-[rgba(26,35,50,0.8)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[780px] text-center px-6 pt-[120px] pb-20 md:pt-[120px] md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-white/[0.12] backdrop-blur-lg border border-white/[0.15] text-white/90 px-[18px] py-2 rounded-full text-[13px] font-medium tracking-wide mb-7"
        >
          <span className="w-[7px] h-[7px] bg-teal-500 rounded-full animate-pulse" />
          Atendiendo presencial y online
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="mb-5"
        >
          <span className="block text-[clamp(34px,5.5vw,54px)] font-bold text-white leading-[1.15] tracking-tight">
            SUBJETIVIDADES
          </span>
          <span className="block mt-2.5 text-[clamp(12px,1.5vw,15px)] font-semibold uppercase tracking-[0.18em] text-teal-300/90">
            Psicología clínica · Ñuñoa, Santiago
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="text-[clamp(16px,2vw,19px)] text-white/75 max-w-[600px] mx-auto mb-9 leading-relaxed font-normal"
        >
          Terapia individual, de pareja, sexual y para adolescentes con enfoque basado en la evidencia. Más de 20 años de experiencia en salud mental.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="flex gap-3.5 justify-center flex-wrap"
        >
          <SchedulingLink
           
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-600 text-white rounded-[9px] text-[15px] font-semibold transition-all hover:bg-teal-700 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(13,148,136,0.3)]"
          >
            <Calendar className="w-[18px] h-[18px]" />
            Agendar primera consulta
          </SchedulingLink>
        </motion.div>
      </div>
    </section>
  );
}
