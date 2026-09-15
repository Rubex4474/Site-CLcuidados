import { NextRequest, NextResponse } from "next/server";

import { sendMetaLeadEvent } from "@/lib/meta-capi";
import { SITE_CONFIG } from "@/lib/seo/site-config";

/**
 * Único endpoint de servidor do site (o resto é 100% estático). Recebe o
 * lead assim que o formulário "Solicitar Avaliação" é enviado e repassa
 * pra Conversions API da Meta — ver lib/meta-capi.ts. Chamado via
 * fetch(..., {keepalive:true}) sem aguardar resposta, então nunca atrasa
 * o redirecionamento pro WhatsApp.
 */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const phone = typeof body?.phone === "string" ? body.phone : null;
  const origin = typeof body?.origin === "string" ? body.origin : null;
  const testEventCode = typeof body?.testEventCode === "string" ? body.testEventCode : undefined;

  if (!phone || !origin) {
    return NextResponse.json({ error: "phone e origin são obrigatórios" }, { status: 400 });
  }

  await sendMetaLeadEvent({
    phone,
    origin,
    testEventCode,
    eventSourceUrl: SITE_CONFIG.url,
    clientIp: request.headers.get("x-forwarded-for"),
    clientUserAgent: request.headers.get("user-agent"),
  });

  return NextResponse.json({ ok: true });
}
