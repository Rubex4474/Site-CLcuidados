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
}): string {
  const lines = [
    `Olá! Meu nome é ${fields.name} e gostaria de solicitar uma avaliação da ${SITE_CONFIG.shortName}.`,
    fields.relation ? `Relação com o paciente: ${fields.relation}` : null,
    `Meu telefone para contato: ${fields.phone}`,
  ].filter((line): line is string => Boolean(line));

  return lines.join("\n");
}

export function buildServiceInquiryMessage(serviceName: string): string {
  return `Olá! Gostaria de saber mais sobre o serviço de ${serviceName} da ${SITE_CONFIG.shortName}.`;
}

// Mensagem exclusiva do botão "Falar pelo WhatsApp" do Hero — primeiro
// contato do visitante, tom mais pessoal. Os demais botões (header, rodapé,
// botão flutuante) usam GENERIC_WHATSAPP_MESSAGE, todos iguais entre si.
export const HERO_WHATSAPP_MESSAGE =
  "Olá! Vi o site da CL Cuidados e gostaria de saber mais sobre como vocês podem cuidar da minha família com segurança e tranquilidade.";

export const GENERIC_WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre os serviços de cuidado domiciliar da CL Cuidados.";
