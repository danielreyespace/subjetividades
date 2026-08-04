'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Monitor } from 'lucide-react';
import Image from 'next/image';
import SchedulingLink from '@/components/SchedulingLink';
import WhatsAppLink from '@/components/WhatsAppLink';
import { GoogleRatingBadge } from './DanielReyes_GoogleReviews';

// URL de WhatsApp con mensaje pre-escrito para el hero del home (distinto del
// botón flotante para poder diferenciarlos en la medición).
const WHATSAPP_URL =
  'https://wa.me/56937389719?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20primera%20consulta.';

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
          Terapia individual, de pareja, sexual y para adolescentes. Más de 20 años de experiencia en salud mental.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-3.5 justify-center"
        >
          <SchedulingLink
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 border border-transparent bg-teal-600 text-white rounded-[9px] text-[15px] font-semibold transition-all hover:bg-teal-700 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(13,148,136,0.3)]"
          >
            <Calendar className="w-[18px] h-[18px]" />
            Agendar primera consulta
          </SchedulingLink>
          <WhatsAppLink
            href={WHATSAPP_URL}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 rounded-[9px] text-[15px] font-semibold border border-teal-400 text-teal-200 bg-transparent transition-all hover:bg-teal-400/10 hover:-translate-y-px"
          >
            Escríbenos por WhatsApp
          </WhatsAppLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-white/70">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-teal-400" /> Presencial en Ñuñoa</span>
            <span className="inline-flex items-center gap-1.5"><Monitor className="h-4 w-4 text-teal-400" /> Online en todo Chile</span>
          </div>
          <GoogleRatingBadge variant="dark" />
        </motion.div>
      </div>
    </section>
  );
}
