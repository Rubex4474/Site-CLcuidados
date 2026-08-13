import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { aboutHeadline, aboutParagraphs } from "@/content/about";

export function AboutSection() {
  return (
    <section id="sobre-nos" className="bg-white py-28 lg:py-36">
      <div className="container">
        <FadeIn className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Badge variant="petrol">Sobre nós</Badge>
          <h2 className="text-balance font-display text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            {aboutHeadline}
          </h2>
        </FadeIn>

        <FadeIn className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <PlaceholderImage
            src="/images/about/equipe-cl-cuidados.jpg"
            alt="Equipe da CL Cuidados Domiciliares, fundadores e profissionais que atendem as famílias"
            aspect="3/2"
            className="shadow-card-hover"
            sizes="(min-width: 1024px) 55vw, 90vw"
          />

          <div className="flex flex-col gap-6">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-muted-foreground">
                {paragraph.map((segment, segmentIndex) =>
                  segment.emphasis ? (
                    <strong key={segmentIndex} className="font-semibold text-foreground">
                      {segment.text}
                    </strong>
                  ) : (
                    <span key={segmentIndex}>{segment.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
