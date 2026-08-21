# Invariantes SEO — subjetividades.cl

Referencia fija para el rediseño. Todo cambio en la maqueta y toda migración a
producción debe respetar esta lista. Antes de publicar, comparar el "antes/después"
de estos elementos. Extraído del sitio real el 2026-08-20.

---

## NIVEL 0 — Nunca tocar (impacto SEO/Ads directo)

### URLs / slugs (no renombrar, no redirigir)
- `/` (home)
- `/terapia-individual`
- `/terapia-de-pareja`
- `/terapia-sexual`
- `/terapia-adolescentes`
- `/prensa`
- Anclas internas: `#inicio` `#centro` `#servicios` `#equipo` `#enfoque`
  `#prensa` `#resenas` `#faq` `#contacto` (las usan links internos y el menú)

### `<title>` y meta (home) — `app/page.tsx`
- **title:** `Psicólogo clínico en Ñuñoa, Santiago | Subjetividades. Psicología Clínica`
- **description:** `Centro de psicología clínica en Ñuñoa, Santiago. Terapia individual, de pareja, sexual y para adolescentes con más de 20 años de experiencia. Atención presencial y online en todo Chile.`
- **canonical:** `https://subjetividades.cl`
- **OG/Twitter:** mismos títulos; imagen `photos/waiting-room.png`
- **robots:** index, follow (no romper)
- Cada página de servicio tiene su propio title/description/canonical → conservarlos.

### Schema JSON-LD (`app/page.tsx`, bloque `@graph`) — mantener íntegro
- `MedicalClinic` — nombre, `Alonso de Ercilla 2959, Ñuñoa`, geo, `availableService`
  (Individual, Pareja, Sexual, Adolescentes), horarios, `sameAs` (IG + Google Maps), `hasMap`
- `Person` ×3 — Daniel Reyes Pace / Fernando Bravo Matheu / Allison Rowe Carrasco
  (jobTitle, credenciales, knowsAbout, worksFor)
- `FAQPage` — 6 preguntas; **el texto debe coincidir con el FAQ visible** (Google compara)
- `WebSite`
- **NO** agregar `telephone` (el número es solo WhatsApp) — es intencional, no "corregir"
- **NO** agregar `AggregateRating` con la nota propia de Google — penaliza; la nota va solo como badge visual

### Tracking de conversión — dejar cableado
- CTA WhatsApp (`lib/whatsapp.ts`: `waHref`, `WA_MESSAGES`, `CTA_LABEL`) — no romper los `wa.me`
- Ping de conversión `/thankyou` + gtag `AW-17550627973`
- Formulario de contacto (segunda vía de "solicitud de hora")
- Links `sameAs`: Instagram, ficha Google Maps (cid=12037037789320556678)

---

## NIVEL 1 — Preservar la palabra clave aunque cambie la redacción

### H1 (único, en el hero) — `DanielReyes_HeroSection.tsx`
Un solo `<h1>` que envuelve dos líneas:
1. `SUBJETIVIDADES`
2. `Psicología clínica · Ñuñoa, Santiago`  ← keyword dentro del H1, no sacarla

### H2 por sección (orden actual) — cada una lleva keyword
1. Hero (bajada): `Terapia individual, de pareja, sexual y para adolescentes. Más de 20 años de experiencia en salud mental.`
2. Centro: `Un espacio pensado para tu bienestar`
3. Servicios: `Nuestros servicios clínicos`
4. Equipo: `Psicólogos clínicos con experiencia y especialización`
5. Enfoque: `Metodología clínica basada en evidencia`
6. Prensa: `Presencia académica, institucional y en medios`
7. Reseñas: `Reseñas verificadas en Google`
8. FAQ: `Resolvemos tus dudas`

> Si una sección cambia de nombre en el rediseño (p.ej. Centro → "El Centro"),
> la keyword que se pierda debe reaparecer en el cuerpo de esa sección.

### H3 — no perder
- Títulos de servicio: Terapia Individual / de Pareja / Sexual / para Adolescentes
- Nombres del equipo (con roles "Psicólogo/a Clínico/a")

### Palabras clave que deben sobrevivir en headings o cuerpo
`psicólogo clínico` · `psicología clínica` · `Ñuñoa` · `Santiago` ·
`terapia individual` · `terapia de pareja` · `terapia sexual` ·
`terapia para adolescentes` · `presencial` · `online` · `todo Chile` ·
`basada en evidencia` · `más de 20 años`

---

## NIVEL 2 — Consistencia y contenido rastreable

- **FAQ visible == FAQ del schema** (las 6 preguntas y respuestas deben calzar).
- No borrar el texto crawleable con keywords: descripciones de servicios, bios del equipo.
- `alt` de imágenes con sentido (hero, centro, equipo) — conservarlos.
- Rendimiento (Core Web Vitals): fuentes self-hosted y livianas, imágenes optimizadas.

---

## Decisiones que esta lista nos obliga a mirar en la maqueta actual

Cambios que ya hicimos en la maqueta y que tocan NIVEL 1 (a resolver antes de migrar):
1. **El Centro**: reescribimos el copy + cita de Kelly y el H2 pasó a `El Centro`.
   → Se pierden "espacio/bienestar" (no son core). Verificar que "psicología clínica /
   Ñuñoa / Santiago" sigan en el cuerpo de esa sección. ✅ el texto los menciona.
2. **Enfoque**: si se fusiona o se elimina, se pierde el H2 `Metodología clínica basada
   en evidencia` y los 3 pilares. → Conservar "basada en evidencia" en otra parte, o
   mantener la sección. **Pendiente de decisión.**

## Cómo se blinda cada migración
1. Trabajo en la maqueta con libertad (proyecto Cloudflare aparte, sin impacto SEO).
2. Migración por rama → merge (producción intacta hasta aprobar).
3. Diff de estos elementos antes de publicar, para confirmar que nada de Nivel 0/1 cambió.
