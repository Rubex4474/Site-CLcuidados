import { ArrowDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Parallax } from "@/components/motion/parallax";
import { HeroVideo } from "@/components/media/hero-video";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { TrackedWhatsappLink } from "@/components/analytics/tracked-whatsapp-link";
import { ANALYTICS_EVENTS } from "@/lib/analytics";
import { buildWhatsappLink, HERO_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { heroStats } from "@/content/hero";
import { getIcon } from "@/components/icon-map";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen-safe relative flex items-end overflow-hidden bg-foreground"
    >
      {/* No mobile o vídeo é bem mais estreito/alto que os 16:9 nativos do
          arquivo — cobrir a altura toda (como no desktop) cortava as
          laterais e sobrava só a pessoa do centro. "hero-loop-mobile.mp4" é
          um recorte à parte (mesma filmagem, aprovado pelos donos): só os
          2 homens, já centralizados no quadro, sem a terceira pessoa —
          assim um object-cover comum já preenche 100% da tela sem sobrar
          ninguém pela metade nem precisar de faixa/desfoque de fundo.
          HeroVideo escolhe em JS qual dos dois montar — nunca os dois ao
          mesmo tempo, pra não duplicar o download em conexão fraca. */}
      <Parallax amount={60} className="absolute inset-0 overflow-hidden">
        <HeroVideo />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/25" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/35 to-transparent lg:to-foreground/5"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white lg:h-32"
        aria-hidden="true"
      />

      <div className="container relative z-10 flex min-w-0 flex-col gap-10 pb-24 pt-40 lg:pb-28">
        <StaggerGroup className="flex max-w-3xl flex-col gap-6" stagger={0.14}>
          <StaggerItem>
            <Badge variant="inverse">Cuidador de idosos em Indaiatuba e região</Badge>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-balance font-display text-[2.75rem] font-medium leading-[1.05] tracking-tightest text-white sm:text-6xl lg:text-[5.5rem]">
              Você cuida do amor. Nós cuidamos de todo o resto.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-xl text-balance text-lg leading-relaxed text-white/80">
              A CL Cuidados assume toda a gestão técnica, operacional e humana do atendimento
              domiciliar para que sua família tenha tranquilidade, segurança e qualidade de vida.
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-col gap-3 sm:flex-row">
            <LeadFormDialog trigger={<Button size="lg">Solicitar Avaliação</Button>} />
            <Button asChild variant="outline-inverse" size="lg">
              <TrackedWhatsappLink
                href={buildWhatsappLink(HERO_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                eventName={ANALYTICS_EVENTS.whatsappDirect}
                eventParams={{ location: "hero" }}
              >
                Falar pelo WhatsApp
              </TrackedWhatsappLink>
            </Button>
          </StaggerItem>
        </StaggerGroup>

        <StaggerGroup
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          stagger={0.08}
          delayChildren={0.4}
        >
          {heroStats.map((stat) => {
            const Icon = getIcon(stat.icon);
            return (
              <StaggerItem key={stat.label} direction="up">
                <div className="glass flex items-center gap-3 rounded-lg px-4 py-3.5 text-white">
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-medium leading-tight">{stat.label}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex">
        <span className="text-[0.65rem] uppercase tracking-widest2">Role para explorar</span>
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
      </div>
    </section>
  );
}
