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
 * "generate_lead" é o único evento de conversão disparado no envio do
 * formulário (nome padrão do GA4, reconhecido pra importar como conversão
 * no Ads). Existiam mais dois eventos aqui — "whatsapp_direto" (removido
 * quando os links diretos pro WhatsApp viraram esse mesmo modal) e
 * "whatsapp_formulario" (removido a pedido do cliente pra não contar o
 * mesmo lead duas vezes) — ambos estavam marcados como Evento-chave no
 * GA4 Admin; ao removê-los daqui eles páram de receber dado, então esses
 * dois eventos-chave também precisam ser desmarcados/substituídos por
 * generate_lead lá no GA4.
 */
export const ANALYTICS_EVENTS = {
  generateLead: "generate_lead",
} as const;
