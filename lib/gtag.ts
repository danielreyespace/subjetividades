declare global {
  interface Window {
    gtag?: (
      command: 'event',
      action: 'conversion',
      params: {
        send_to: string;
        value: number;
        currency: string;
        event_timeout?: number;
      },
    ) => void;
  }
}

export function trackWhatsAppConversion() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17550627973/YFCDCNDA0bQcEIWp5bBB',
      value: 5000,
      currency: 'CLP',
      event_timeout: 1200,
    });
  }
}
