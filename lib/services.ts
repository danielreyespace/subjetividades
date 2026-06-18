// Fuente única de verdad de las páginas de servicio.
// La usa el sitemap dinámico (app/sitemap.ts).
// Al crear una página de servicio nueva (app/<slug>/page.tsx), añade aquí su entrada
// para que aparezca automáticamente en el sitemap.

export interface ServicePage {
  slug: string;
  name: string;
  lastModified: string; // ISO (YYYY-MM-DD)
}

export const servicePages: ServicePage[] = [
  { slug: 'terapia-de-pareja', name: 'Terapia de pareja', lastModified: '2026-06-18' },
];
