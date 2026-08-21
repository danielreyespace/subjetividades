'use client';

import { useState } from 'react';

const links: [string, string][] = [
  ['/#centro', 'El Centro'],
  ['/#servicios', 'Servicios'],
  ['/#equipo', 'Equipo'],
  ['/#resenas', 'Reseñas'],
  ['/prensa', 'Prensa'],
  ['/blog', 'Blog'],
];

export default function SjNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav">
      <a href="/" className="brand">Subjetividades<span>Psicología Clínica</span></a>

      <div className="nl">
        {links.map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
        <a href="/#contacto" className="navcta">Contacto</a>
      </div>

      <button
        type="button"
        className="burger"
        aria-label="Menú de navegación"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={open ? 'x1' : ''} />
        <span className={open ? 'x2' : ''} />
        <span className={open ? 'x3' : ''} />
      </button>

      {open && (
        <div className="mobmenu">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="/#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </div>
      )}
    </div>
  );
}
