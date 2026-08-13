"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { buildWhatsappLink, GENERIC_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { SITE_CONFIG } from "@/lib/seo/site-config";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

const NAV_ITEMS = [
  { label: "Sobre Nós", href: "/#sobre-nos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Planos", href: "/#planos" },
  { label: "Como Funciona", href: "/#como-funciona" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b bg-white/90 backdrop-blur-md transition-all duration-300",
        scrolled ? "border-b-black/5 bg-white/95 shadow-subtle backdrop-blur-xl" : "border-b-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/brand/logo-icon.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            {SITE_CONFIG.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a
              href={buildWhatsappLink(GENERIC_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(ANALYTICS_EVENTS.whatsappDirect, { location: "header_desktop" })}
            >
              Falar pelo WhatsApp
            </a>
          </Button>
          <LeadFormDialog trigger={<Button size="sm">Solicitar Avaliação</Button>} />
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent title="Menu de navegação">
            <nav className="flex flex-col gap-6" aria-label="Navegação mobile">
              {NAV_ITEMS.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link href={item.href} className="font-display text-2xl text-foreground">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <Button asChild variant="outline">
                <a
                  href={buildWhatsappLink(GENERIC_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.whatsappDirect, { location: "header_mobile" })}
                >
                  Falar pelo WhatsApp
                </a>
              </Button>
              <LeadFormDialog trigger={<Button>Solicitar Avaliação</Button>} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
