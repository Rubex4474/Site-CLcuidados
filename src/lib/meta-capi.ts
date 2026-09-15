import { createHash } from "node:crypto";

/**
 * Normaliza pro formato que a Meta espera em user_data.ph: só dígitos,
 * com DDI. O campo do formulário aceita formato livre tipo
 * "(11) 90000-0000" — sem DDI a maioria das vezes, já que é o padrão que
 * as pessoas digitam pra um número nacional. Se já vier com 55 na frente
 * (ex.: usuário colou o número internacional), não duplica.
 */
function normalizePhone(rawPhone: string): string {
  const digits = rawPhone.replace(/\D/g, "");
  if (digits.startsWith("55") && digits.length >= 12) return digits;
  return `55${digits}`;
}

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

interface LeadEventInput {
  phone: string;
  origin: string;
  eventSourceUrl: string;
  clientIp: string | null;
  clientUserAgent: string | null;
}

/**
 * Manda o evento "Lead" pra Conversions API da Meta, server-to-server —
 * não depende do pixel de navegador nem é afetado por bloqueador de
 * anúncios/ITP do Safari. Silencioso em erro (nunca deve travar o envio
 * do lead pro WhatsApp, que é o fluxo principal); loga no console do
 * servidor (Vercel → Logs) pra debug.
 */
export async function sendMetaLeadEvent(input: LeadEventInput): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return;

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: input.eventSourceUrl,
        user_data: {
          ph: [sha256(normalizePhone(input.phone))],
          ...(input.clientIp ? { client_ip_address: input.clientIp } : {}),
          ...(input.clientUserAgent ? { client_user_agent: input.clientUserAgent } : {}),
        },
        custom_data: {
          origem_botao: input.origin,
          metodo_contato: "whatsapp",
        },
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    if (!response.ok) {
      console.error("Meta CAPI respondeu com erro:", response.status, await response.text());
    }
  } catch (error) {
    console.error("Falha ao enviar evento pra Meta CAPI:", error);
  }
}
