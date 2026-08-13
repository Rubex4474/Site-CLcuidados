import Image from "next/image";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { plans } from "@/content/plans";
import { buildServiceInquiryMessage, buildWhatsappLink } from "@/lib/whatsapp";
import { ANALYTICS_EVENTS } from "@/lib/analytics";
import { PAYMENT_METHODS, SITE_FLAGS } from "@/lib/seo/site-config";
import { cn } from "@/lib/utils";
import { TrackedWhatsappLink } from "@/components/analytics/tracked-whatsapp-link";

export function PlansSection() {
  return (
    <section id="planos" className="bg-white py-28 lg:py-36">
      <div className="container">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Badge variant="petrol">Planos</Badge>
          <h2 className="text-balance font-display text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            Um plano para cada momento da família.
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Suporte 24 horas e resposta rápida em qualquer plano — a CL Cuidados está sempre por
            perto, para a família e para o profissional em campo.
          </p>
        </FadeIn>

        <StaggerGroup
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.slug}>
              <div
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-lg border shadow-card transition-shadow hover:shadow-card-hover",
                  plan.featured ? "border-teal bg-teal text-petrol" : "border-border bg-white",
                )}
              >
                <div className="relative">
                  <PlaceholderImage
                    alt={plan.imageAlt}
                    aspect="4/3"
                    className="rounded-none"
                    showLabel={false}
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
                    <Image
                      src={plan.badgeSrc}
                      alt=""
                      width={260}
                      height={260}
                      className="h-44 w-44 object-contain drop-shadow-[0_10px_28px_rgba(154,106,45,0.6)] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3"
                    />
                  </div>
                  {plan.featured && (
                    <Badge
                      variant="inverse"
                      className="absolute right-4 top-4 bg-teal text-petrol shadow-subtle"
                    >
                      Mais completo
                    </Badge>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-widest2",
                      plan.featured ? "text-petrol/70" : "text-primary",
                    )}
                  >
                    {plan.cadence}
                  </span>

                  <h3 className="font-display text-xl">{plan.name}</h3>

                  {SITE_FLAGS.showPricing && (
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-2xl">{plan.price}</span>
                      <span
                        className={cn(
                          "text-xs",
                          plan.featured ? "text-petrol/70" : "text-muted-foreground",
                        )}
                      >
                        {plan.priceSuffix}
                      </span>
                    </div>
                  )}

                  <p
                    className={cn(
                      "flex-1 text-sm leading-relaxed",
                      plan.featured ? "text-petrol/80" : "text-muted-foreground",
                    )}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={cn(
                      "flex items-center gap-2 text-xs font-medium",
                      plan.featured ? "text-petrol/90" : "text-primary",
                    )}
                  >
                    <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                    Suporte 24h incluso
                  </div>

                  <Button asChild size="sm" variant="outline">
                    <TrackedWhatsappLink
                      href={buildWhatsappLink(buildServiceInquiryMessage(`plano ${plan.name}`))}
                      target="_blank"
                      rel="noopener noreferrer"
                      eventName={ANALYTICS_EVENTS.whatsappDirect}
                      eventParams={{ location: "plans", plan: plan.slug }}
                    >
                      Falar sobre este plano
                    </TrackedWhatsappLink>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {SITE_FLAGS.showPricing && (
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Formas de pagamento: {PAYMENT_METHODS.join(" ou ")}.
          </p>
        )}
      </div>
    </section>
  );
}
