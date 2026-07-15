// Fuente única de verdad de los artículos del blog.
// La usan el listado del blog (app/blog/page.tsx) y el sitemap (app/sitemap.ts).
// Al agregar un artículo nuevo: crea su página en app/blog/<slug>/page.tsx
// y añade una entrada aquí. Aparecerá automáticamente en el listado y en el sitemap.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // fecha visible en el listado
  readTime: string;
  category: string;
  lastModified: string; // ISO (YYYY-MM-DD), para el sitemap
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'tratamiento-eyaculacion-precoz',
    title: 'Tratamiento de la eyaculación precoz: qué funciona según la evidencia',
    excerpt:
      'La eyaculación precoz es la dificultad sexual masculina más frecuente y, al mismo tiempo, una de las que menos se consulta. Hoy existen tratamientos con respaldo científico —psicológicos, sexológicos y médicos— que funcionan, sobre todo cuando se combinan.',
    date: '15 de julio, 2026',
    readTime: '8 min',
    category: 'Terapia sexual',
    lastModified: '2026-07-15',
  },
  {
    slug: 'soledad-masculina-adulta',
    title: 'Hombres sin amigos: la soledad masculina en la adultez',
    excerpt:
      'Muchos hombres llegan a los cuarenta, cincuenta o sesenta años sin amigos y con el trabajo como único contacto social. No es una falla personal: las instituciones que organizaban el encuentro adulto se desmantelaron sin reemplazo.',
    date: '4 de julio, 2026',
    readTime: '6 min',
    category: 'Salud mental',
    lastModified: '2026-07-04',
  },
  {
    slug: 'reembolso-psicologo-isapre-fonasa',
    title: 'Reembolso del psicólogo en Isapre: cómo funciona y qué dice la ley',
    excerpt:
      'Una parte del costo es recuperable mediante el reembolso del seguro de salud. Y desde la Ley 21.331 de Salud Mental, la cobertura de la psicología no puede ser menor que la de cualquier otra consulta de salud.',
    date: '16 de junio, 2026',
    readTime: '7 min',
    category: 'Información práctica',
    lastModified: '2026-06-16',
  },
  {
    slug: 'terapia-sexual',
    title: 'Terapia sexual: medio siglo de una disciplina clínica',
    excerpt:
      'La terapia sexual suele cargar con una imagen difusa, entre el tabú y la curiosidad. Tiene, sin embargo, más de medio siglo de desarrollo científico, un cuerpo de técnicas propio y resultados bien documentados.',
    date: '15 de junio, 2026',
    readTime: '6 min',
    category: 'Servicios',
    lastModified: '2026-06-15',
  },
  {
    slug: 'cuando-ir-al-psicologo',
    title: '¿Cuándo ir al psicólogo? 7 señales de que necesitas apoyo profesional',
    excerpt:
      'Muchas personas esperan llegar a un punto de crisis antes de buscar ayuda. Sin embargo, la terapia es más efectiva — y más rápida — cuando se empieza antes de ese punto.',
    date: '2 de abril, 2025',
    readTime: '6 min',
    category: 'Guías',
    lastModified: '2025-04-02',
  },
  {
    slug: 'diferencia-psicologo-psiquiatra',
    title: '¿Psicólogo o psiquiatra? Guía práctica para saber cuál necesitas',
    excerpt:
      'La confusión entre ambas profesiones es muy común. Entender la diferencia te ayuda a tomar la decisión correcta y llegar al profesional que realmente puede ayudarte.',
    date: '2 de abril, 2025',
    readTime: '5 min',
    category: 'Guías',
    lastModified: '2025-04-02',
  },
  {
    slug: 'costo-sesion-psicologia-santiago',
    title: '¿Cuánto cuesta una sesión de psicología en Santiago 2026?',
    excerpt:
      'El costo de la terapia es una de las primeras preguntas que recibimos. Explicamos los rangos de precio reales en 2026 (arancel mínimo $36.000 CLP) y cómo el reembolso de Isapre puede reducir el costo.',
    date: 'Actualizado mayo 2026',
    readTime: '5 min',
    category: 'Información práctica',
    lastModified: '2026-05-26',
  },
  {
    slug: 'terapia-de-pareja-como-funciona',
    title: 'Terapia de pareja en Santiago: cómo funciona y qué esperar',
    excerpt:
      'La terapia de pareja no es solo para relaciones en crisis. Es una herramienta preventiva que fortalece la comunicación y la intimidad antes de que los problemas escalen.',
    date: '2 de abril, 2025',
    readTime: '7 min',
    category: 'Servicios',
    lastModified: '2025-04-02',
  },
];
