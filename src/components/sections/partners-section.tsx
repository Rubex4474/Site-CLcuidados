import Image from "next/image";
import { Siren } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { partners } from "@/content/partners";

export function PartnersSection() {
  return (
    <section id="parceiros" className="bg-petrol-tint py-28 lg:py-36">
      <div className="container">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Badge>Rede de apoio</Badge>
          <h2 className="text-balance font-display text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            Parcerias que reforçam a segurança do cuidado.
          </h2>
        </FadeIn>

        <FadeIn className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col gap-4 rounded-lg border border-destructive/25 bg-destructive/[0.06] p-8 sm:flex-row sm:items-center">
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/images/partners/salute-emergencias-medicas.png"
                alt="Logo da Salute Emergências Médicas, parceira de suporte de emergência da CL Cuidados"
                width={447}
                height={447}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl text-foreground">
                  Suporte de emergência 24 horas
                </h3>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <Siren className="h-4 w-4" strokeWidth={1.5} />
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Quando a equipe avalia que é necessário, o suporte de emergência é acionado
                imediatamente em parceria com a Salute Emergências Médicas — sem custo
                adicional para a família.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest2 text-muted-foreground">
            Rede multidisciplinar parceira
          </p>

          <StaggerGroup
            className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3"
            stagger={0.1}
          >
            {partners.map((partner) => (
              <StaggerItem key={partner.name}>
                <div className="flex h-full flex-col items-center gap-4 rounded-lg border border-petrol/10 bg-white p-6 text-center shadow-card">
                  <div className="flex h-24 w-full items-center justify-center">
                    <Image
                      src={partner.logoSrc}
                      alt={partner.logoAlt}
                      width={260}
                      height={130}
                      className="h-auto max-h-24 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{partner.name}</p>
                    <p className="text-xs text-muted-foreground">{partner.specialty}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
