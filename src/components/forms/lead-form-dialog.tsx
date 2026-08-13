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
}

export function LeadFormDialog({ trigger }: LeadFormDialogProps) {
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
        <WhatsappLeadForm onSubmitted={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
