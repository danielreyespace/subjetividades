import WhatsAppLink from '@/components/WhatsAppLink';
import { CTA_LABEL } from '@/lib/whatsapp';
import type { TeamMember } from '@/lib/team';
import {
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from '@/components/sections/DanielReyes_GoogleReviews';

type Review = { name: string; text: string };

export interface ServiceContent {
  crumb: string;
  h1: string;
  lead: string;
  waUrl: string;
  heroImg: string; // ruta absoluta bajo /public
  trust: [string, string][];
  s1h: string;
  s1intro: string;
  motivos: string[];
  consiste: string[];
  moreTxt: string;
  moreHref: string;
  valor: string; // incluye el símbolo, ej. "$50.000"
  teamIntro: string;
  team: TeamMember[];
  reviews: Review[];
  faqs: { q: string; a: string }[];
  ctaH: string;
}

const navLinks: [string, string][] = [
  ['/#centro', 'El Centro'],
  ['/#servicios', 'Servicios'],
  ['/#equipo', 'Equipo'],
  ['/#resenas', 'Reseñas'],
  ['/prensa', 'Prensa'],
  ['/blog', 'Blog'],
];

export default function ServiceRedesign({ c }: { c: ServiceContent }) {
  const teamCols =
    c.team.length === 1 ? 'minmax(0,260px)' : c.team.length === 2 ? 'repeat(2,1fr)' : 'repeat(3,1fr)';
  return (
    <div className="sj" style={{ minHeight: '100vh' }}>
      {/* NAV */}
      <div className="nav">
        <a href="/" className="brand">Subjetividades<span>Psicología Clínica</span></a>
        <div className="nl">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="/#contacto" className="navcta">Contacto</a>
        </div>
      </div>

      {/* SUBHERO */}
      <section className="subhero">
        <div className="inner">
          <div>
            <div className="crumb"><a href="/">Inicio</a> / <span style={{ color: '#C9C5BC' }}>{c.crumb}</span></div>
            <div className="lab">Servicio</div>
            <h1>{c.h1}</h1>
            <p className="lead">{c.lead}</p>
            <WhatsAppLink href={c.waUrl} className="hcta">{CTA_LABEL}</WhatsAppLink>
            <div className="hmeta">Presencial en Ñuñoa · Online en todo Chile</div>
            <div className="hmeta"><span className="stars">★★★★★</span> {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} reseñas en Google</div>
          </div>
          <div className="subhero-img" style={{ backgroundImage: `url('${c.heroImg}')` }} />
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="inner">
          {c.trust.map(([t, s]) => (
            <div key={t} className="ti"><b>{t}</b><span>{s}</span></div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 1 (Cuándo consultar / Qué aborda) */}
      <section className="band">
        <div className="inner">
          <h2>{c.s1h}</h2>
          <p className="body">{c.s1intro}</p>
          <ul className="mlist">{c.motivos.map((m) => <li key={m}>{m}</li>)}</ul>
        </div>
      </section>

      {/* EN QUÉ CONSISTE */}
      <section className="band tint">
        <div className="inner">
          <h2>En qué consiste</h2>
          {c.consiste.map((p, i) => <p key={i} className="body">{p}</p>)}
          <a className="morelink" href={c.moreHref}>{c.moreTxt} →</a>
        </div>
      </section>

      {/* MODALIDAD Y VALOR */}
      <section className="band">
        <div className="inner">
          <h2>Modalidad y valor</h2>
          <ul className="mlist">
            <li><strong>Presencial</strong> en Ñuñoa, Santiago, o <strong>por videollamada</strong> para todo Chile, con resultados comparables.</li>
            <li><strong>Valor:</strong> desde {c.valor} por sesión.</li>
            <li>Se emite <strong>boleta de honorarios</strong> para solicitar reembolso en Isapre y seguro complementario. <a className="tlink" href="/blog/reembolso-psicologo-isapre-fonasa">Cómo funciona el reembolso</a>.</li>
          </ul>
        </div>
      </section>

      {/* QUIÉN ATIENDE */}
      <section className="band tint">
        <div className="inner">
          <h2>Quién atiende</h2>
          <p className="body">{c.teamIntro}</p>
          <div className="team" style={{ gridTemplateColumns: teamCols, marginTop: 26 }}>
            {c.team.map((m) => (
              <div key={m.id}>
                {m.photo && <div className="av" style={{ backgroundImage: `url('${m.photo}')` }} />}
                <h3>{m.name}</h3>
                <div className="rol">{m.role}</div>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
          <WhatsAppLink href={c.waUrl} className="morelink">{CTA_LABEL} →</WhatsAppLink>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="band">
        <div className="inner">
          <div className="revhead">
            <div>
              <div className="lab">Reseñas</div>
              <h2 style={{ marginTop: 10 }}>Lo que dicen los pacientes</h2>
            </div>
            <a className="revrate" href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              <b>{GOOGLE_RATING}</b>
              <span className="rr-sub"><span className="stars">★★★★★</span> · {GOOGLE_REVIEW_COUNT} reseñas en Google</span>
            </a>
          </div>
          <div className="rev">
            {c.reviews.map((r) => (
              <div key={r.name}>
                <blockquote>{`“${r.text}”`}</blockquote>
                <div className="who"><span className="stars">★★★★★</span><span className="nm">{r.name} · vía Google</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="band tint">
        <div className="inner">
          <h2 style={{ marginBottom: 10 }}>Preguntas frecuentes</h2>
          <div className="faq">
            {c.faqs.map((f) => (
              <div key={f.q} className="qa"><h3>{f.q}</h3><p>{f.a}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="band">
        <div className="inner">
          <div className="ctabox">
            <h2>{c.ctaH}</h2>
            <p>Primera consulta presencial en Ñuñoa, Santiago, u online para todo Chile.</p>
            <WhatsAppLink href={c.waUrl} className="hcta">{CTA_LABEL}</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ftr2">
        <div>
          <div className="fbrand">Subjetividades</div>
          <div className="fbrandsub">Psicología Clínica</div>
          <div className="faddr">Alonso de Ercilla 2959, Ñuñoa, Región Metropolitana, Chile · Atención online para todo Chile</div>
        </div>
        <div className="flinks">
          <a href="/prensa">Prensa</a>
          <a href="/blog">Blog</a>
          <a href="/blog/cuando-ir-al-psicologo">¿Cuándo ir al psicólogo?</a>
          <a href="/blog/terapia-de-pareja-como-funciona">Terapia de pareja</a>
          <a href="https://www.instagram.com/subjetividades.cl/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
