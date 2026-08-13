import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-surface py-28 lg:py-36">
      <div className="container">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Badge variant="petrol">Serviços</Badge>
          <h2 className="text-balance font-display text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            Cuidado sob medida para cada momento da família.
          </h2>
        </FadeIn>

        <StaggerGroup
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border/60 bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <PlaceholderImage
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  aspect="4/3"
                  className="rounded-none"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <h3 className="font-display text-xl text-foreground">{service.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
