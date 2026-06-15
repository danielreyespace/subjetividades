'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const isapres = [
  { name: 'Banmédica', logo: '/daniel-reyes/assets/logos/isapres/banmedica.jpg', width: 120, height: 50 },
  { name: 'Colmena', logo: '/daniel-reyes/assets/logos/isapres/colmena.png', width: 120, height: 50 },
  { name: 'Consalud', logo: '/daniel-reyes/assets/logos/isapres/consalud.png', width: 155, height: 50 },
  { name: 'Cruz Blanca', logo: '/daniel-reyes/assets/logos/isapres/cruz-blanca.svg', width: 120, height: 50 },
  { name: 'Vida Tres', logo: '/daniel-reyes/assets/logos/isapres/vida-tres.jpg', width: 120, height: 50 },
];

export default function DanielReyes_IsapreGallery() {
  return (
    <section id="isapres" className="py-14 px-6 border-t border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-slate-900 mb-2"
        >
          Reembolso con tu Isapre
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[15px] text-slate-500 mb-8 max-w-[500px] mx-auto"
        >
          Emitimos boleta para que puedas solicitar reembolso en tu Isapre y seguro complementario.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-5"
        >
          {isapres.map(({ name, logo, width, height }) => (
            <div
              key={name}
              className="w-[150px] h-16 rounded-[10px] bg-white border border-slate-100 flex items-center justify-center px-4 transition-all hover:border-slate-200 hover:shadow-sm"
            >
              <Image
                src={logo}
                alt={`Isapre ${name} — aceptamos reembolso`}
                width={width}
                height={height}
                className="object-contain max-h-9 w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
