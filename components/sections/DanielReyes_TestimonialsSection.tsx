'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  text: string;
  initial: string;
  author: string;
  age: number;
  specialty: string;
}

// Full testimonials from psicologiaclinicachile.cl — scraped 2026-04-02
const testimonials: Testimonial[] = [
  {
    text: 'Ha sido una ayuda tremenda, volví a creer en mí y a ser optimista con el futuro. No puedo hacer más que recomendarlo muchísimo!',
    initial: 'M',
    author: 'Maxime V.',
    age: 33,
    specialty: 'Terapia individual',
  },
  {
    text: 'Genera confianza para decir aquellas cosas que son difíciles de contar.',
    initial: 'L',
    author: 'Luis Felipe C.',
    age: 34,
    specialty: 'Terapia individual',
  },
  {
    text: 'Entrega las herramientas necesarias para evaluar los problemas del presente, sin tomar decisiones apresuradas.',
    initial: 'Y',
    author: 'Yesenia B.',
    age: 45,
    specialty: 'Terapia individual',
  },
  {
    text: 'Nunca había tenido un psicólogo hombre y la verdad considero que fue un acierto y un cambio en 360 en todo ámbito: evolución del proceso, perspectivas, maneras de trabajo... siempre lo recomiendo.',
    initial: 'K',
    author: 'Karina A.',
    age: 35,
    specialty: 'Terapia individual',
  },
  {
    text: 'Me ayudó un montón a repasar mi biografía y a conocerme a mí mismo dentro de un ambiente de apertura intelectual, empatía y confianza. Sin duda fue la terapia más profunda que he tenido y me ayudó a hacer cambios grandes en mi vida.',
    initial: 'M',
    author: 'Mauricio B.',
    age: 33,
    specialty: 'Terapia individual',
  },
  {
    text: 'Pasé por una grave crisis matrimonial. Tuvimos una muy buena orientación, nos permitió reencontrarnos como matrimonio y darnos otra oportunidad.',
    initial: 'J',
    author: 'Juan O.',
    age: 68,
    specialty: 'Terapia de pareja',
  },
  {
    text: 'Me escucha con atención, sin juzgar, y me entrega consejos que me hacen reflexionar y ver las cosas desde otra perspectiva. Hoy siento que ese espacio se ha vuelto fundamental para entenderme mejor, avanzar y estar más en paz conmigo misma.',
    initial: 'P',
    author: 'Pamela M.',
    age: 23,
    specialty: 'Terapia individual',
  },
  {
    text: 'Fue fundamental su ayuda en un momento clave de mi vida. Su experiencia y apoyo me hizo salir fortalecido.',
    initial: 'I',
    author: 'Iván P.',
    age: 47,
    specialty: 'Terapia individual',
  },
  {
    text: 'Han pasado meses y creo que ya años de mi terapia, y gracias a lo vivido con Daniel puedo ir analizando mi situación emocional con prudencia y madurez. Eso no es habitual y se lo debo a él.',
    initial: 'A',
    author: 'Alejandro P.',
    age: 53,
    specialty: 'Terapia individual',
  },
  {
    text: 'No se le pasa ningún detalle, recomendado para mentes inquietas que buscan auto desafiarse.',
    initial: 'C',
    author: 'Claudia A.',
    age: 37,
    specialty: 'Terapia individual',
  },
  {
    text: 'Me ha ayudado muchísimo a poner en claro los pensamientos y las ideas que solo vivían en mi mente. Su estrategia me ha permitido observar cómo los sucesos de mi vida fueron conformando a la persona que soy hoy.',
    initial: 'M',
    author: 'Maximiliano V.',
    age: 32,
    specialty: 'Terapia individual',
  },
  {
    text: 'Mi esposo y yo fuimos a terapia de pareja, nos ayudó a resolver problemas que parecían más complicados para nosotros de lo que realmente eran.',
    initial: 'B',
    author: 'Brigitte A.',
    age: 60,
    specialty: 'Terapia de pareja',
  },
  {
    text: 'Escucha atentamente, orienta con claridad y transmite confianza. Su enfoque profesional me ha permitido avanzar y alcanzar los objetivos de la terapia. Valoro profundamente sus conocimientos y preparación.',
    initial: 'M',
    author: 'Marcela V.',
    age: 35,
    specialty: 'Terapia individual',
  },
  {
    text: 'Te puede ayudar no solo a atravesar lo que estés experimentando en ese momento, también a otros planos de tu vida y otros momentos en que siguen resonando las palabras que en algún momento tuve de Daniel.',
    initial: 'D',
    author: 'Diego N.',
    age: 35,
    specialty: 'Terapia individual',
  },
  {
    text: 'Al principio me costó conectar, pero con el tiempo entendió mi forma de relacionarme y de cómo poder trabajar conmigo. Siempre muy dispuesto a ayudar y ser flexible, una increíble persona e increíble psicólogo.',
    initial: 'M',
    author: 'Martín R.',
    age: 21,
    specialty: 'Terapia individual',
  },
  {
    text: 'Destaco su profesionalismo y metodología para poder llegar a descubrir soluciones y herramientas que ayudan en el día a día a ganarle a dificultades que uno pueda estar viviendo. Un gran apoyo!',
    initial: 'E',
    author: 'Enrique M.',
    age: 39,
    specialty: 'Terapia individual',
  },
  {
    text: 'Siempre dispuesto a escuchar lo que le trajera a sesión, fuera o no sobre la temática que trataríamos ese día.',
    initial: 'C',
    author: 'Camilo M.',
    age: 33,
    specialty: 'Terapia individual',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-[14px] p-6 border border-slate-100 flex flex-col"
    >
      <div className="flex gap-0.5 text-amber-400 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-[14px] h-[14px] fill-current" />
        ))}
      </div>
      <p className="text-[15px] text-slate-600 leading-relaxed mb-4 italic flex-1">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-base font-bold text-teal-600 shrink-0">
          {testimonial.initial}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-800">
            {testimonial.author}, {testimonial.age} años
          </div>
          <div className="text-[13px] text-slate-400">{testimonial.specialty}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DanielReyes_TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 px-6 bg-[#f7f8fa]">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-14">
          <div className="text-[13px] font-semibold text-teal-600 tracking-widest uppercase mb-3.5">
            Testimonios
          </div>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-bold text-slate-900 leading-tight tracking-tight">
            Lo que dicen quienes han pasado por nuestro centro
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={`${t.author}-${t.age}`} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
