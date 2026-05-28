export function trackWhatsAppConversion() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-17550627973/YFCDCNDA0bQcEIWp5bBB',
      value: 5000,
      currency: 'CLP',
    });
  }
}
