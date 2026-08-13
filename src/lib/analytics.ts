/**
 * Wrapper fino sobre o gtag.js do Google — nunca quebra se a tag ainda não
 * carregou (ex.: usuário com bloqueador de anúncios, ou ID não configurado
 * ainda em .env.local). Eventos disparados aqui viram "eventos-chave" no
 * GA4, que por sua vez podem ser importados como conversões no Google Ads.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

/**
 * Nomes de evento usados para diferenciar, no Google Ads/GA4, o lead que
 * clica direto num botão de WhatsApp do lead que passa pelo mini
 * formulário "Solicitar Avaliação" antes de ir pro WhatsApp — pedido
 * explícito do cliente para separar os dois tipos de conversão.
 */
export const ANALYTICS_EVENTS = {
  whatsappDirect: "whatsapp_direto",
  whatsappForm: "whatsapp_formulario",
} as const;
