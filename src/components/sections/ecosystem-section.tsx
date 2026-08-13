import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { ecosystemPillars } from "@/content/ecosystem";
import { getIcon } from "@/components/icon-map";

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="bg-surface py-28 lg:py-36">
      <div className="container">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Badge variant="petrol">Como funciona por dentro</Badge>
          <h2 className="text-balance font-display text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            Não enviamos um cuidador. Entregamos um ecossistema inteiro de cuidado.
          </h2>
        </FadeIn>

        <StaggerGroup
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {ecosystemPillars.map((pillar) => {
            const Icon = getIcon(pillar.icon);
            return (
              <StaggerItem key={pillar.title}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="mt-2 text-lg">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <CardDescription>{pillar.description}</CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
