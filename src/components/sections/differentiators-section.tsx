import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { differentiators } from "@/content/differentiators";
import { getIcon } from "@/components/icon-map";
import { cn } from "@/lib/utils";

export function DifferentiatorsSection() {
  return (
    <section id="diferenciais" className="bg-white py-28 lg:py-36">
      <div className="container">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Badge>Diferenciais</Badge>
          <h2 className="text-balance font-display text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            Tudo o que uma família de alto padrão espera de um cuidado domiciliar.
          </h2>
        </FadeIn>

        <StaggerGroup
          className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
          stagger={0.05}
        >
          {differentiators.map((item, index) => {
            const Icon = getIcon(item.icon);
            const alt = index % 2 === 1;
            return (
              <StaggerItem key={item.label}>
                <div className="flex h-full flex-col gap-4 rounded-lg border border-border/60 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full",
                      alt ? "bg-teal/20 text-petrol" : "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-base font-medium leading-snug text-foreground">
                    {item.label}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
