'use client';

import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Monitor } from 'lucide-react';
import Image from 'next/image';
import WhatsAppLink from '@/components/WhatsAppLink';
import { waHref, WA_MESSAGES, CTA_LABEL } from '@/lib/whatsapp';
import { GoogleRatingBadge } from './DanielReyes_GoogleReviews';

// URL de WhatsApp con mensaje pre-escrito propio del home.
const WHATSAPP_URL = waHref(WA_MESSAGES.home);

export default function DanielReyes_HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-end justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/daniel-reyes/photos/waiting-room.webp"
          alt="Sala de espera del centro de psicología clínica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,35,50,0.22)] via-[rgba(26,35,50,0.34)] to-[rgba(26,35,50,0.82)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto text-left px-6 pb-16 md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="mb-5"
        >
          <span className="block text-[clamp(40px,9vw,92px)] font-bold text-white leading-[1.02] tracking-tight [text-shadow:0_2px_24px_rgba(15,23,42,0.35)]">
            SUBJETIVIDADES
          </span>
          <span className="block mt-3 text-[clamp(12px,1.6vw,16px)] font-semibold uppercase tracking-[0.18em] text-teal-300/90">
            Psicología clínica · Ñuñoa, Santiago
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="text-[clamp(16px,2vw,19px)] text-white/80 max-w-[560px] mb-9 leading-relaxed font-normal"
        >
          Terapia individual, de pareja, sexual y para adolescentes. Más de 20 años de experiencia en salud mental.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-3.5 sm:justify-start"
        >
          <WhatsAppLink
            href={WHATSAPP_URL}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 border border-transparent bg-teal-600 text-white rounded-[9px] text-[15px] font-semibold transition-all hover:bg-teal-700 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(13,148,136,0.3)]"
          >
            <MessageCircle className="w-[18px] h-[18px]" />
            {CTA_LABEL}
          </WhatsAppLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-col items-start gap-4"
        >
          <div className="flex flex-wrap items-center justify-start gap-x-5 gap-y-2 text-[13px] text-white/70">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-teal-400" /> Presencial en Ñuñoa</span>
            <span className="inline-flex items-center gap-1.5"><Monitor className="h-4 w-4 text-teal-400" /> Online en todo Chile</span>
          </div>
          <GoogleRatingBadge variant="dark" />
        </motion.div>
      </div>
    </section>
  );
}
