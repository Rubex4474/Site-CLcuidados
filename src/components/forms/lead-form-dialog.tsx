"use client";

import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WhatsappLeadForm } from "@/components/forms/whatsapp-lead-form";

interface LeadFormDialogProps {
  trigger: React.ReactNode;
  /** Qual botão abriu o modal — todo call site precisa declarar o seu,
   * pra nenhum lead cair sem origem no generate_lead. */
  origin: string;
  /** Complemento da mensagem pro WhatsApp, ex.: "o plano Gold 24h". */
  context?: string;
  /** Sobrescreve o número padrão (rodapé usa um segundo número). */
  phoneNumber?: string;
}

export function LeadFormDialog({ trigger, origin, context, phoneNumber }: LeadFormDialogProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Solicitar Avaliação</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo e fale diretamente com nossa equipe pelo WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <WhatsappLeadForm
          onSubmitted={() => setOpen(false)}
          origin={origin}
          context={context}
          phoneNumber={phoneNumber}
        />
      </DialogContent>
    </Dialog>
  );
}
