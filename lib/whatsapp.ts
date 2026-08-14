// Fuente única de verdad del contacto directo del centro.
//
// ⚠️ TRACKING: la conversión principal de Google Ads (`contacto_whatsapp`) se
// dispara por la medición mejorada de clics salientes de GA4 (event=click Y
// link_domain contiene wa.me). Para que siga funcionando, TODO CTA de WhatsApp
// debe ser un <a href="https://wa.me/..."> real (con target=_blank y
// rel=noopener), nunca un <button> con onClick/preventDefault/window.open.
// Usa el componente WhatsAppLink, que ya cumple esa restricción.

// El número del centro solo responde WhatsApp (no recibe llamadas), por eso no
// se expone como enlace tel:. La única vía directa es WhatsApp.
export const WHATSAPP_NUMBER = '56937389719';

/** Construye la URL de wa.me con el mensaje pre-escrito (codificado en URL). */
export function waHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Mensaje pre-escrito distinto por página, para identificar el origen del lead.
// El verbo es "solicitar" (no "agendar"): es una solicitud de hora, no una
// reserva confirmada. Ver brief de "solicitud de hora".
export const WA_MESSAGES = {
  home: 'Hola, me gustaría solicitar una hora.',
  individual: 'Hola, me gustaría solicitar una hora de terapia individual.',
  pareja: 'Hola, me gustaría solicitar una hora de terapia de pareja.',
  sexual: 'Hola, me gustaría solicitar una hora de terapia sexual.',
  adolescentes: 'Hola, me gustaría solicitar una hora de terapia para adolescentes.',
} as const;

// Etiqueta unificada del CTA principal de contacto.
export const CTA_LABEL = 'Escríbenos por WhatsApp';
