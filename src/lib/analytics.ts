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
 * "whatsapp_formulario" já existia e continua disparando a cada envio do
 * mini formulário. "generate_lead" é o evento GA4 padrão (nome reconhecido
 * pelo Google, facilita importar como conversão no Ads) — os dois disparam
 * juntos no mesmo submit, nunca na abertura do modal. Todo botão de
 * WhatsApp do site agora passa por esse formulário (não existe mais link
 * direto pra wa.me em lugar nenhum), então "whatsapp_direto" — usado só
 * pelos antigos links diretos — não dispara mais e foi removido.
 */
export const ANALYTICS_EVENTS = {
  whatsappForm: "whatsapp_formulario",
  generateLead: "generate_lead",
} as const;
