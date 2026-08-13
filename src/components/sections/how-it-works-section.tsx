import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { timelineSteps } from "@/content/how-it-works";
import { getIcon } from "@/components/icon-map";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-surface py-28 lg:py-36">
      <div className="container">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Badge variant="petrol">Como funciona</Badge>
          <h2 className="text-balance font-display text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            Um caminho claro, do primeiro contato ao cuidado contínuo.
          </h2>
        </FadeIn>

        <StaggerGroup className="relative mt-20 flex flex-col gap-6 lg:flex-row lg:gap-5" stagger={0.1}>
          <div
            className="absolute left-8 top-2 h-[calc(100%-2rem)] w-0.5 rounded-full bg-gradient-to-b from-primary/25 via-teal/40 to-primary/25 lg:hidden"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-8 hidden h-0.5 rounded-full bg-gradient-to-r from-primary/25 via-teal/40 to-primary/25 lg:block"
            aria-hidden="true"
          />

          {timelineSteps.map((step, index) => {
            const Icon = getIcon(step.icon);
            const alt = index % 2 === 1;
            return (
              <StaggerItem
                key={step.number}
                className="relative flex min-w-0 flex-1 gap-4 lg:flex-col lg:gap-5"
              >
                <div className="relative z-10 flex shrink-0 lg:mx-auto">
                  <div
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-full shadow-card transition-transform duration-300 hover:-translate-y-1",
                      alt ? "bg-teal text-petrol" : "bg-primary text-primary-foreground",
                    )}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <span
                    className={cn(
                      "absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-surface text-[10px] font-bold shadow-subtle",
                      alt ? "bg-primary text-primary-foreground" : "bg-teal text-petrol",
                    )}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="min-w-0 lg:text-center">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
