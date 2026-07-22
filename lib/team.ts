// Fuente única de verdad del equipo clínico.
// La usan la sección de equipo del home (DanielReyes_TeamSection) y las
// páginas de servicio (app/<slug>/page.tsx), que muestran el equipo completo
// o un subconjunto según quién atiende ese servicio.

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string | null;
  specialties: string[];
  bio: string;
}

export const team: TeamMember[] = [
  {
    id: 'daniel-reyes',
    name: 'Daniel Reyes Pace',
    role: 'Director Clínico',
    photo: '/daniel-reyes/photos/team-daniel-reyes.webp',
    specialties: ['Terapeuta para adultos', 'Terapia de pareja', 'Sexualidad y deseo'],
    bio: 'Psicólogo y Doctor en Psicología de la Universidad de Chile, con más de 20 años de experiencia como terapeuta, docente universitario y consultor internacional.',
  },
  {
    id: 'fernando-bravo',
    name: 'Fernando Bravo Matheu',
    role: 'Psicólogo Clínico',
    photo: '/daniel-reyes/photos/team-fernando-bravo.webp',
    specialties: ['Adolescentes y adultos', 'Vínculos y emociones', 'Terapia de pareja'],
    bio: 'Psicólogo clínico de la Universidad Diego Portales, con formación en clínica psicoanalítica de Winnicott. Con experiencia en la atención de adolescentes, adultos y parejas, en contextos comunitarios y en centros de salud mental.',
  },
  {
    id: 'allison-rowe',
    name: 'Allison Rowe Carrasco',
    role: 'Psicóloga Clínica',
    photo: '/daniel-reyes/photos/team-allison-rowe.webp',
    specialties: ['Adultos y adolescentes', 'Terapia de pareja', 'Enfoque sistémico'],
    bio: 'Psicóloga de la Universidad de Chile, con diplomado en Terapia Sistémica y Familiar. Trabaja con población adulta y adolescente. Posee formación y experiencia en atención clínica, tanto en modalidad individual como en terapia de parejas.',
  },
];

/** Devuelve los miembros indicados (por id), en el orden pedido. */
export function teamByIds(ids: string[]): TeamMember[] {
  return ids
    .map((id) => team.find((m) => m.id === id))
    .filter((m): m is TeamMember => Boolean(m));
}
