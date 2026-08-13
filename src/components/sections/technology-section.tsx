import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { PhoneMockup } from "@/components/media/phone-mockup";
import { technologyFeatures } from "@/content/technology";
import { getIcon } from "@/components/icon-map";
import { cn } from "@/lib/utils";

export function TechnologySection() {
  return (
    <section id="tecnologia" className="bg-petrol py-28 text-white lg:py-36">
      <div className="container grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="order-2 lg:order-1">
          <PhoneMockup />
        </div>

        <div className="order-1 flex flex-col gap-10 lg:order-2">
          <FadeIn direction="right" className="flex flex-col gap-5">
            <Badge variant="inverse">Tecnologia própria</Badge>
            <h2 className="text-balance font-display text-2xl font-medium leading-snug lg:text-3xl">
              Cuidado que você acompanha em tempo real.
            </h2>
            <p className="max-w-lg text-white/70">
              O aplicativo exclusivo da CL Cuidados conecta cada etapa do atendimento à família,
              com transparência total sobre o que acontece no dia a dia.
            </p>
          </FadeIn>

          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
            {technologyFeatures.map((feature, index) => {
              const Icon = getIcon(feature.icon);
              const alt = index % 2 === 1;
              const isLast = index === technologyFeatures.length - 1;
              return (
                <StaggerItem
                  key={feature.title}
                  className={cn(
                    "group rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.1]",
                    isLast && "sm:col-span-2",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
                      alt ? "bg-teal text-petrol" : "bg-primary text-primary-foreground",
                    )}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-base text-white">{feature.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/65">
                    {feature.description}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
