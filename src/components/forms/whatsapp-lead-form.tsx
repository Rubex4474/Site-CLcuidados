"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buildLeadMessage, buildWhatsappLink } from "@/lib/whatsapp";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";

interface WhatsappLeadFormProps {
  onSubmitted?: () => void;
  /** Qual botão abriu o modal (ex.: "plano_gold_24h", "footer_primario") —
   * vira o parâmetro origem_botao do evento generate_lead. */
  origin: string;
  /** Complemento pra frase de abertura da mensagem, ex.: "o plano Gold
   * 24h" — repassado direto pra buildLeadMessage. */
  context?: string;
  /** Sobrescreve o número padrão (usado no botão de WhatsApp secundário
   * do rodapé). */
  phoneNumber?: string;
}

export function WhatsappLeadForm({ onSubmitted, origin, context, phoneNumber }: WhatsappLeadFormProps) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [relation, setRelation] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = buildLeadMessage({ name, phone, relation: relation || undefined, context });
    trackEvent(ANALYTICS_EVENTS.generateLead, { origem_botao: origin, metodo_contato: "whatsapp" });
    // keepalive: a navegação pro WhatsApp logo abaixo não pode cancelar
    // essa requisição em voo. Sem token configurado, a rota não faz nada
    // (ver lib/meta-capi.ts) — por isso não trava nem precisa de retry.
    fetch("/api/meta-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, origin }),
      keepalive: true,
    }).catch(() => {});
    window.open(buildWhatsappLink(message, phoneNumber), "_blank", "noopener,noreferrer");
    onSubmitted?.();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="lead-name">Seu nome</Label>
        <Input
          id="lead-name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome completo"
          autoComplete="name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="lead-phone">Telefone com DDD</Label>
        <Input
          id="lead-phone"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="(11) 90000-0000"
          inputMode="tel"
          autoComplete="tel"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="lead-relation">Relação com o paciente (opcional)</Label>
        <Input
          id="lead-relation"
          value={relation}
          onChange={(event) => setRelation(event.target.value)}
          placeholder="Ex.: filha, filho, cônjuge"
        />
      </div>
      <Button type="submit" className="mt-2 w-full">
        Continuar no WhatsApp
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Ao continuar, abriremos o WhatsApp com uma mensagem pronta para a nossa equipe de avaliação.
      </p>
    </form>
  );
}
