declare global {
  interface Window {
    gtag_report_conversion?: (sendTo: string, url?: string) => boolean;
  }
}

const CONTACT_FORM_CONVERSION = 'AW-17550627973/9VBcCIHYjrccEIWp5bBB';

function reportConversion(sendTo: string) {
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    window.gtag_report_conversion(sendTo);
  }
}

export function trackContactFormConversion() {
  reportConversion(CONTACT_FORM_CONVERSION);
}
