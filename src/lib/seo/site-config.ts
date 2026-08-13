/**
 * Fonte única de verdade para NAP (Nome, Endereço, Telefone) e dados de
 * negócio. O footer, o formulário de WhatsApp e o JSON-LD leem todos daqui
 * — nunca duplique esses valores em outro arquivo, ou o Local SEO diverge.
 *
 * Campos marcados com "PLACEHOLDER" precisam ser substituídos pelos dados
 * reais da CL Cuidados antes do lançamento.
 */

export const SITE_CONFIG = {
  name: "CL Cuidados Domiciliares",
  legalName: "CL Cuidados Domiciliares", // PLACEHOLDER: razão social / CNPJ se for exibir
  shortName: "CL Cuidados",
  // PLACEHOLDER: trocar para "https://www.clcuidados.com.br" assim que
  // esse domínio estiver comprado e apontado pra Vercel. Até lá,
  // apontar aqui pro domínio errado quebra o og:image, o JSON-LD, o
  // sitemap e o card de prévia de links no WhatsApp — todos leem esse
  // valor e viram URLs que não resolvem pra nada.
  url: "https://site-c-lcuidados.vercel.app",
  description:
    "Cuidador de idosos em Indaiatuba e região. Cuidado domiciliar de alto padrão, com equipe própria, supervisão contínua e suporte 24 horas para quem precisa de assistência contínua.",
  locale: "pt-BR",
  ogImage: "/og-image.jpg",
} as const;

export const CONTACT = {
  phoneDisplay: "(19) 99688-7883",
  phoneE164: "+5519996887883",
  whatsappNumber: "5519996887883", // só dígitos, com DDI+DDD
  // Segundo número de WhatsApp, exibido junto do principal no rodapé.
  phoneDisplaySecondary: "(19) 98973-8622",
  whatsappNumberSecondary: "5519989738622",
  email: "clcuidadosdomiciliares@gmail.com",
  instagramHandle: "@clcuidados_domiciliares",
  instagramUrl: "https://www.instagram.com/clcuidados_domiciliares/",
  googleMapsUrl: "https://maps.app.goo.gl/vWYkdKxy5zp4YY9t7",
  // Não é sensível (aparece em qualquer link de Maps público) — a chave de
  // API é que fica só em variável de ambiente (GOOGLE_PLACES_API_KEY).
  googlePlaceId: "ChIJ2Tz5bclLUQsRFpq2v1_0Ois",
  // Gerado via Google Maps → Compartilhar → Incorporar um mapa. Não precisa
  // de API key nem de cobrança no Cloud Console (endpoint público do
  // consumidor, diferente da Maps Embed API paga).
  googleMapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.293058756866!2d-47.21192402373823!3d-23.086365544315452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb514bc96df93cd9%3A0x2b3af45fbfb69a16!2sCL%20CUIDADOS%20DOMICILIARES!5e0!3m2!1spt-BR!2sbr!4v1786398059978!5m2!1spt-BR!2sbr",
} as const;

export const ADDRESS = {
  streetAddress: "R. Humaitá, 1266 - Cidade Nova I",
  addressLocality: "Indaiatuba",
  addressRegion: "SP",
  postalCode: "13339-140",
  addressCountry: "BR",
} as const;

export const GEO = {
  // Pino real do perfil "CL Cuidados Domiciliares" no Google Maps
  // (resolvido a partir do link curto que o cliente enviou) — mais preciso
  // que geocodificação por endereço, pois é a localização que o próprio
  // Google associa ao negócio.
  latitude: "-23.0863705",
  longitude: "-47.2093491",
} as const;

// Deliberadamente genérico: o cliente segmenta bairros por perfil de renda
// para targeting de anúncios, mas isso nunca deve aparecer no site público.
export const AREA_SERVED = "Indaiatuba e região";

export const BUSINESS_HOURS = {
  // Cuidado domiciliar é um serviço 24h/7 dias por natureza — não há
  // "horário comercial" separado, então o schema e o rodapé usam o mesmo dado.
  opens: "00:00",
  closes: "23:59",
  display: "Todos os dias — 24 horas",
  emergencyNote: "Atendimento assistencial 24 horas, 7 dias por semana",
} as const;

export const PAYMENT_METHODS = ["Boleto", "Pix"] as const;

/**
 * Interruptores de conteúdo/SEO que dependem de decisões de negócio ou de
 * dados reais ainda não disponíveis.
 */
export const SITE_FLAGS = {
  // Teste A/B pedido pelo cliente: rodar uma primeira fase sem preços
  // visíveis nos Planos (só "Falar sobre este plano") para medir a
  // qualidade/volume dos leads, antes de decidir se exibe os valores.
  // Controla ao mesmo tempo a UI (PlansSection) e o JSON-LD — nunca deixar
  // o schema mostrar um preço que a página não mostra.
  showPricing: false,
  // FAQPage: Google aposentou o rich result em 07/05/2026 — mantido por
  // custo zero e possível sinal para crawlers de IA, sem prometer SERP.
  // Uma única flag torna a remoção trivial se deixar de fazer sentido.
  emitFaqSchema: true,
  // Habilita o AggregateRating/Review no JSON-LD — só tem efeito quando a
  // busca ao vivo ao Google Places (src/lib/google-reviews.ts) realmente
  // retorna dados; nunca fabricar avaliação. Flag existe como kill-switch
  // manual caso seja preciso desligar sem mexer no código de busca.
  emitReviewSchema: true,
} as const;
