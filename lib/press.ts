export type PressItem = {
  source: string;
  date?: string;
  title: string;
  description: string;
  href: string;
  action: string;
};

export type PressSection = {
  title: string;
  description: string;
  items: PressItem[];
};

export const pressIntro = [
  'Daniel Reyes Pace es psicólogo clínico y Doctor en Psicología de la Universidad de Chile, con más de 20 años de ejercicio profesional. Es Director Clínico y fundador de SUBJETIVIDADES, Centro de Psicología Clínica en Ñuñoa, y uno de los referentes públicos más reconocidos en Chile en las áreas de sexualidad, salud sexual y psicología clínica.',
  'A lo largo de su trayectoria ha publicado para la UNESCO como autor principal, impartido cursos en la Universidad de Chile con más de 17.000 participantes en toda América Latina, colaborado con medios de comunicación nacionales, publicado en Ediciones UAH, y sido convocado como experto por el Congreso Nacional.',
];

export const pressSections: PressSection[] = [
  {
    title: 'Columnas de opinión',
    description:
      'Publicaciones en medios de referencia nacional sobre políticas de educación sexual, salud pública y derechos de los estudiantes.',
    items: [
      {
        source: 'El Mostrador',
        date: 'Septiembre 2018',
        title: 'Cinco razones para no reactivar la estrategia de los 7 programas de educación sexual',
        description:
          'Análisis crítico de la política ministerial de educación sexual y sus consecuencias para los estudiantes chilenos.',
        href: 'https://www.elmostrador.cl/noticias/opinion/2018/09/20/cinco-razones-para-no-reactivar-la-estrategia-de-los-7-programas-de-educacion-sexual/',
        action: 'Leer columna',
      },
      {
        source: 'El Mostrador',
        date: 'Diciembre 2015',
        title: 'Educación sexual, el campeonato en que Chile pierde por paliza',
        description:
          'Evaluación comparada del avance de Chile en educación sexual respecto al compromiso latinoamericano "Prevenir con Educación".',
        href: 'https://www.elmostrador.cl/noticias/opinion/2015/12/05/educacion-sexual-el-campeonato-en-que-chile-pierde-por-paliza/',
        action: 'Leer columna',
      },
      {
        source: 'El Mostrador',
        date: 'Junio 2015',
        title: 'Educación cívica y educación sexual: matar dos pájaros de un tiro',
        description:
          'Propuesta para articular la educación cívica con la educación sexual en el currículum escolar chileno.',
        href: 'https://www.elmostrador.cl/noticias/opinion/2015/06/20/educacion-civica-y-educacion-sexual-matar-dos-pajaros-de-un-tiro/',
        action: 'Leer columna',
      },
      {
        source: 'El Quinto Poder',
        title: 'Belén y la educación sexual',
        description:
          'Análisis sobre el caso Belén y el derecho de los y las estudiantes a recibir educación sexual de calidad en Chile.',
        href: 'https://elquintopoder.cl/educacion/belen-y-la-educacion-sexual/',
        action: 'Leer columna',
      },
    ],
  },
  {
    title: 'Prensa y televisión',
    description: 'Entrevistas y apariciones como experto en medios de comunicación nacionales.',
    items: [
      {
        source: 'CNN Chile',
        title: '¿Falta educación sexual en Chile?',
        description:
          'Entrevistado como psicólogo experto en educación sexual en el debate nacional sobre el acceso de los jóvenes a información de calidad sobre sexualidad.',
        href: 'https://www.cnnchile.com/pais/falta-educacion-sexual-en-chile/',
        action: 'Ver cobertura',
      },
      {
        source: 'La Tercera',
        title: 'Aumento de VIH en jóvenes',
        description:
          'Citado como experto en el análisis del aumento de casos de VIH en población joven en Chile y sus implicancias para la salud pública.',
        href: 'https://www.latercera.com/diario-impreso/aumento-vih-en-jovenes/',
        action: 'Ver cobertura',
      },
    ],
  },
  {
    title: 'Universidades e instituciones',
    description:
      'Participación en la Universidad de Chile, la Cámara de Diputados y otras instituciones públicas en calidad de investigador y experto.',
    items: [
      {
        source: 'FACSO - U. de Chile',
        date: 'Julio 2013',
        title: 'El caso de Belén y el derecho de los estudiantes a recibir educación sexual',
        description:
          'Publicado por la Facultad de Ciencias Sociales de la Universidad de Chile en el marco de su participación en el Programa de Aprendizaje en Sexualidad y Afectividad (PASA).',
        href: 'https://facso.uchile.cl/noticias/93053/daniel-reyes-el-caso-de-belen-y-la-educacion-sexual',
        action: 'Leer nota',
      },
      {
        source: 'UAbierta - U. de Chile',
        date: '2016',
        title: 'Curso "Sexualidades en la Escuela" - Docente',
        description:
          'Profesor del curso abierto y gratuito de la Universidad de Chile. El programa reunió a más de 17.000 participantes de toda América Latina, con una satisfacción del 97%.',
        href: 'https://uchile.cl/noticias/124385/curso-en-linea-sexualidades-en-la-escuela-abre-sus-inscripciones',
        action: 'Ver programa',
      },
      {
        source: 'Cámara de Diputados',
        date: 'Abril 2020',
        title: 'Invitado como experto ante comisión legislativa',
        description:
          'Convocado por la Cámara de Diputados de Chile en calidad de experto para informar sobre materias de su especialidad ante una comisión legislativa.',
        href: 'https://www.camara.cl/legislacion/comisiones/citaciones_semana.aspx?prmSemana=2020-04',
        action: 'Ver citación',
      },
    ],
  },
  {
    title: 'Política pública y participación gremial',
    description:
      'Liderazgo en el Colegio de Psicólogos de Chile y aportes técnicos al debate legislativo sobre derechos sexuales y reproductivos.',
    items: [
      {
        source: 'Ministerio de la Mujer y la Equidad de Género',
        date: 'Agosto 2017',
        title: 'Aporte al Tribunal Constitucional por la Ley de Aborto en Tres Causales',
        description:
          'Como coordinador de la Comisión de Sexualidades y Género del Colegio de Psicólogos de Chile, presentó antecedentes ante el Tribunal Constitucional en el marco del proyecto de interrupción voluntaria del embarazo en tres causales. La Ministra Claudia Pascual agradeció formalmente este aporte mediante carta institucional.',
        href: '/daniel-reyes/prensa/carta-ministra-claudia-pascual-2017.pdf',
        action: 'Ver carta',
      },
    ],
  },
];

export const featuredPublication = {
  source: 'UNESCO',
  date: '2019',
  title: 'La pedagogía de la Sexualidad',
  description:
    'Publicación de la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO), elaborada por el Daniel Reyes Pace en calidad de autor principal y consultor internacional.',
  href: 'https://unesdoc.unesco.org/ark:/48223/pf0000369032',
  action: 'Ver publicación',
};

export const publications: PressItem[] = [
  {
    source: 'Ediciones UAH',
    date: '2022',
    title: 'Política y debates en educación sexual: Articulaciones, sujetos y objetos emergentes',
    description:
      'Libro colectivo publicado por Ediciones Universidad Alberto Hurtado, del cual es editor junto a Pablo Astudillo y Nicola Ríos. Adquirido por el Estado de Chile y disponible gratuitamente en préstamo digital para todo el país.',
    href: 'https://catalogoadquisiciondelibros.cultura.gob.cl/libro/politica-y-debates-en-educacion-sexual-articulaciones-sujetos-y-objetos-emergentes/',
    action: 'Acceder en préstamo digital',
  },
  {
    source: 'Municipalidad de Santiago',
    date: '2016',
    title: '100 Preguntas sobre Sexualidad Adolescente',
    description:
      'Integrante del comité de expertos de este material de educación sexual para adolescentes, publicado por la Municipalidad de Santiago. Disponible para descarga libre en la Biblioteca Pública Digital.',
    href: 'https://www.bpdigital.cl/info/100-preguntas-sobre-sexualidad-adolescente-descarga-libre-00030310',
    action: 'Descargar libro',
  },
  {
    source: 'Revista Docencia N°49',
    date: 'Mayo 2013',
    title: 'Educación sexual en Chile: Pluralismo y libertad de elección que esconde una propuesta gubernamental conservadora',
    description:
      'Artículo publicado en la Revista Docencia, coescrito con Irma Palma y Claudia Moreno, sobre el diseño gubernamental de educación sexual de 2010.',
    href: 'https://facso.uchile.cl/dam/jcr:3a839942-4c52-4e84-a71d-ed6706af4e56/educacin-sexual-pasa.pdf',
    action: 'Ver artículo',
  },
  {
    source: 'Repositorio U. de Chile',
    title: 'Publicación en el Repositorio Académico de la Universidad de Chile',
    description: 'Investigación disponible en el repositorio académico institucional de la Universidad de Chile.',
    href: 'https://repositorio.uchile.cl/handle/2250/152826',
    action: 'Ver publicación',
  },
];

export const homePressHighlights: PressItem[] = [
  featuredPublication,
  pressSections[1].items[0],
  pressSections[2].items[2],
];
