"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

export function WhatsappFloatButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LeadFormDialog
      origin="floating_button"
      context="os serviços de cuidado domiciliar"
      trigger={
        <button
          type="button"
          aria-label="Falar pelo WhatsApp"
          className={cn(
            "fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card-hover transition-all duration-300 hover:bg-primary-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
          )}
        >
          <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
        </button>
      }
    />
  );
}
