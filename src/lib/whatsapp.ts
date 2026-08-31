import { CONTACT, SITE_CONFIG } from "@/lib/seo/site-config";

export function buildWhatsappLink(
  message?: string,
  phoneNumber: string = CONTACT.whatsappNumber,
): string {
  const base = `https://wa.me/${phoneNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildLeadMessage(fields: {
  name: string;
  phone: string;
  relation?: string;
  /**
   * Complemento livre pro final da frase de abertura, ex.: "o plano Gold
   * 24h" — sem isso, cai no texto genérico de avaliação. É o que preserva,
   * dentro do modal único, a mesma personalização por seção/plano que os
   * links diretos de wa.me tinham antes de tudo passar pelo formulário.
   */
  context?: string;
}): string {
  const intro = fields.context
    ? `Olá! Meu nome é ${fields.name} e gostaria de saber mais sobre ${fields.context} da ${SITE_CONFIG.shortName}.`
    : `Olá! Meu nome é ${fields.name} e gostaria de solicitar uma avaliação da ${SITE_CONFIG.shortName}.`;

  const lines = [
    intro,
    fields.relation ? `Relação com o paciente: ${fields.relation}` : null,
    `Meu telefone para contato: ${fields.phone}`,
  ].filter((line): line is string => Boolean(line));

  return lines.join("\n");
}
