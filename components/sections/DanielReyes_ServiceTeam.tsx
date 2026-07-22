import Image from 'next/image';
import type { TeamMember } from '@/lib/team';

// Grilla de equipo para las páginas de servicio. Presentacional (server
// component): recibe los miembros que atienden ese servicio. Funciona con el
// equipo completo o con un solo profesional.
export default function DanielReyes_ServiceTeam({
  members,
  intro,
}: {
  members: TeamMember[];
  intro?: string;
}) {
  const single = members.length === 1;

  return (
    <div className="mx-auto max-w-[820px]">
      <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900 mb-4">
        Quién atiende
      </h2>
      {intro && <p className="text-[16px] leading-relaxed text-slate-600 mb-8">{intro}</p>}

      <div className={single ? 'grid grid-cols-1' : 'grid grid-cols-1 sm:grid-cols-2 gap-6'}>
        {members.map((member) => (
          <div
            key={member.id}
            className={`flex gap-5 rounded-[14px] border border-slate-100 bg-white p-5 ${
              single ? 'sm:p-6' : ''
            }`}
          >
            {member.photo && (
              <div className="relative h-[104px] w-[88px] shrink-0 overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={member.photo}
                  alt={`Foto de ${member.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="88px"
                />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
              <p className="mb-2 text-[13px] font-medium text-teal-600">{member.role}</p>
              <p className="text-[13px] leading-relaxed text-slate-500">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
