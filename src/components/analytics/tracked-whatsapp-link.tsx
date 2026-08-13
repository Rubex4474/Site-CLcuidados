"use client";

import * as React from "react";

import { trackEvent } from "@/lib/analytics";

interface TrackedWhatsappLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  eventParams?: Record<string, unknown>;
}

/**
 * <a> comum, só que dispara um evento de analytics no clique antes de
 * seguir pro WhatsApp — usado nos botões diretos (header, rodapé, hero,
 * botão flutuante) para diferenciar esse lead do que passa pelo mini
 * formulário (ver WhatsappLeadForm, que dispara o evento por conta própria).
 */
export function TrackedWhatsappLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedWhatsappLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, eventParams);
        onClick?.(event);
      }}
    />
  );
}
