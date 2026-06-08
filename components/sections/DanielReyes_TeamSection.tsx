'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarDays, GraduationCap, Heart, Users, Brain } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  photo: string | null;
  specialties: string[];
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Daniel Reyes Pace',
    role: 'Director Clínico y Fundador',
    photo: '/daniel-reyes/photos/team-daniel-reyes.jpg',
    specialties: ['Terapeuta para adultos', 'Terapia de pareja', 'Sexualidad y deseo'],
    bio: 'Psicólogo y Doctor en Psicología de la Universidad de Chile, con más de 20 años de experiencia como terapeuta, docente universitario y consultor internacional.',
  },
  {
    name: 'Fernando Bravo Matheu',
    role: 'Psicólogo Clínico',
    photo: '/daniel-reyes/photos/team-fernando-bravo.jpg',
    specialties: ['Adolescentes y adultos', 'Vínculos y emociones', 'Terapia de pareja'],
    bio: 'Psicólogo clínico de la Universidad Diego Portales, con formación en clínica psicoanalítica de Winnicott. Con experiencia en la atención de adolescentes, adultos y parejas, en contextos comunitarios y en centros de salud mental.',
  },
  {
    name: 'Allison Rowe Carrasco',
    role: 'Psicóloga Clínica',
    photo: '/daniel-reyes/photos/team-allison-rowe.jpg',
    specialties: ['Adultos y adolescentes', 'Terapia de pareja', 'Enfoque sistémico'],
    bio: 'Psicóloga de la Universidad de Chile, con diplomado en Terapia Sistémica y Familiar. Trabaja con población adulta y adolescente. Posee formación y experiencia en atención clínica, tanto en modalidad individual como en terapia de parejas.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TeamCard({ member }: { member: TeamMember }) {
  const isDaniel = member.name === 'Daniel Reyes Pace';
  const iconMap: Record<string, typeof Heart> = {
    'Terapeuta para adultos': Brain,
    'Terapia de pareja': Heart,
    'Sexualidad y deseo': Heart,
    'Adolescentes y adultos': Users,
    'Vínculos y emociones': Heart,
    'Adultos y adolescentes': Users,
    'Enfoque sistémico': GraduationCap,
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-[14px] border border-slate-100 overflow-hidden transition-all hover:shadow-[0_4px_16px_rgba(26,35,50,0.08)] hover:-translate-y-[3px]"
    >
      {/* Photo */}
      {member.photo && (
        <div className={`relative w-full h-[420px] bg-slate-100 overflow-hidden ${isDaniel ? 'group' : ''}`}>
          <Image
            src={member.photo}
            alt={`Foto de ${member.name}`}
            fill
            className={`object-cover object-top ${isDaniel ? 'transition-all duration-300 group-hover:brightness-[0.38]' : ''}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {isDaniel && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2v0skIM06AfjXvgc6XLIl2dwRRR-ZM5Kza7z_6-0ojv1tRu7cfYG_U80NXtj54fOwxKGmxc5GB?gv=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <CalendarDays className="w-4 h-4" />
                Agendar con Daniel
              </a>
              <span className="text-white/75 text-xs">Confirmación inmediata por correo</span>
            </div>
          )}
        </div>
      )}

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-0.5">{member.name}</h3>
        <p className="text-[13px] font-medium text-teal-600 mb-3">{member.role}</p>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">{member.bio}</p>
        {isDaniel && (
          <a
            href="/prensa"
            className="mb-4 inline-flex text-sm font-semibold text-teal-600 no-underline transition-colors hover:text-teal-700"
          >
            Ver trayectoria y apariciones en medios →
          </a>
        )}

        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {member.specialties.map((specialty) => {
            const Icon = iconMap[specialty] || GraduationCap;
            return (
              <span
                key={specialty}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md"
              >
                <Icon className="w-3 h-3" />
                {specialty}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function DanielReyes_TeamSection() {
  return (
    <section id="equipo" className="py-24 px-6 bg-[#f7f8fa]">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-14">
          <div className="text-[13px] font-semibold text-teal-600 tracking-widest uppercase mb-3.5">
            Equipo Clínico
          </div>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-bold text-slate-900 leading-tight tracking-tight">
            Profesionales dedicados a tu bienestar
          </h2>
          <p className="text-base text-slate-500 mt-3.5 max-w-[580px] mx-auto leading-relaxed">
            Nuestro equipo clínico combina experiencia, formación académica de excelencia y un compromiso genuino con cada paciente.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
