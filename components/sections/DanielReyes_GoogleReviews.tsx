import { Star, ArrowUpRight } from 'lucide-react';

// Ficha de Google Business (Google Maps) de SUBJETIVIDADES.
export const GOOGLE_PROFILE_URL = 'https://maps.google.com/?cid=12037037789320556678';
export const GOOGLE_RATING = '5,0';
export const GOOGLE_REVIEW_COUNT = 58;

// Reseñas reales seleccionadas desde la ficha de Google (nombre abreviado por
// discreción). Se curan por servicio para no repetir personas entre páginas ni
// con los testimonios escritos del home.
type Review = { name: string; text: string };

const R = {
  camila: {
    name: 'María Camila R.',
    text: 'He tenido una muy buena experiencia con Daniel. Desde la primera sesión me hizo sentir en un espacio de confianza y escuchada, siempre con mucho profesionalismo y empatía. Me ha ayudado a ver las cosas desde otra perspectiva y valoro mucho su forma de acompañar el proceso. Lo recomiendo totalmente.',
  },
  romina: {
    name: 'Romina F.',
    text: 'Daniel es un muy buen terapeuta, se preocupa de uno como paciente y te da puntos de vista objetivos. Genera un espacio de confianza. Personalmente me ha apoyado a entender muchas cosas de mí misma que me han ido ayudando a lograr mis objetivos.',
  },
  alvaro: {
    name: 'Álvaro V.',
    text: 'Excelente atención y muy profesionales. Se nota el compromiso con cada paciente y el ambiente es muy acogedor. La atención fue puntual, clara y con un trato muy humano. Totalmente recomendado.',
  },
  sebastian: {
    name: 'Sebastián M.',
    text: 'Llevo un tiempo atendiéndome aquí y la calidad humana y profesional es increíble. El nivel de profesionalismo, la calidez en la atención y el compromiso con los pacientes se destacan desde el primer momento. Es un espacio seguro, serio y de primer nivel. Recomendable a un 100%.',
  },
  yanet: {
    name: 'Yanet S.',
    text: 'Cuando llegué a consultar tenía varios temas que me agobiaban, y desde la primera sesión me sentí muy cómoda y sin juicios. Daniel me ha ayudado entregándome herramientas reales. Su forma de explicar las cosas es clara y siempre me hacen sentido. Lo recomiendo 100% si buscas un espacio seguro para trabajar en ti.',
  },
  thiare: {
    name: 'Thiare B.',
    text: 'Daniel nos ayudó muchísimo junto a mi pareja para resolver conflictos y situaciones que necesitaban ser escuchadas y comprendidas desde otra perspectiva. Aprendimos mucho de las comunicaciones efectivas y de que cada uno tiene una forma diferente de ver y sentir las cosas. Dejo 5 estrellitas porque estoy contenta con el resultado.',
  },
  natalia: {
    name: 'Natalia G.',
    text: 'Iniciar terapia en este centro ha sido una de las mejores decisiones que he tomado. Durante todo el proceso he encontrado un espacio seguro, de confianza y libre de juicios, donde he podido conocerme mejor y comprender aspectos de mí que antes no lograba identificar. Lo recomiendo completamente a cualquier persona que busque un psicólogo comprometido, empático y con una mirada profundamente humana.',
  },
} satisfies Record<string, Review>;

export const googleReviewSets = {
  individual: [R.natalia, R.camila, R.romina],
  pareja: [R.thiare, R.camila, R.sebastian],
  sexual: [R.sebastian, R.yanet, R.alvaro],
  // Para la home: reseñas que hablan del centro/los profesionales (sin nombrar
  // a Daniel) y que no se repiten con los testimonios escritos.
  centro: [R.natalia, R.alvaro, R.sebastian],
} satisfies Record<string, Review[]>;

const defaultReviews = googleReviewSets.individual;

function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-amber-400 text-amber-400`} />
      ))}
    </span>
  );
}

// Badge compacto de nota — pensado para el hero oscuro (variant 'dark') o fondo claro.
export function GoogleRatingBadge({ variant = 'light' }: { variant?: 'dark' | 'light' }) {
  const dark = variant === 'dark';
  return (
    <a
      href={GOOGLE_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-[13px] no-underline transition-colors ${
        dark ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-slate-900'
      }`}
    >
      <Stars />
      <span className={`font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{GOOGLE_RATING}</span>
      <span className={dark ? 'text-slate-400' : 'text-slate-500'}>
        · {GOOGLE_REVIEW_COUNT} reseñas en Google
      </span>
    </a>
  );
}

// Bloque completo de reseñas para las páginas de servicio.
export default function DanielReyes_GoogleReviews({
  reviews = defaultReviews,
  label = 'Reseñas',
  heading = 'Lo que dicen los pacientes',
}: {
  reviews?: Review[];
  label?: string;
  heading?: string;
}) {
  return (
    <section id="resenas" className="scroll-mt-[72px] bg-white px-6 py-16">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-teal-600">{label}</div>
            <h2 className="text-[clamp(24px,3vw,32px)] font-bold leading-tight text-slate-900">
              {heading}
            </h2>
          </div>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm no-underline transition-colors hover:border-slate-300"
          >
            <Stars />
            <span className="font-bold text-slate-900">{GOOGLE_RATING}</span>
            <span className="text-slate-500">· {GOOGLE_REVIEW_COUNT} en Google</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-[14px] border border-slate-100 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <Stars />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-700">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-sm font-semibold text-slate-900">{r.name}</span>
                <span className="text-[12px] text-slate-400">vía Google</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 no-underline hover:text-teal-800"
          >
            Ver las {GOOGLE_REVIEW_COUNT} reseñas en Google
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
