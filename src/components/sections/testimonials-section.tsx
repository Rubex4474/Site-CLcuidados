import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { testimonials as fallbackTestimonials } from "@/content/testimonials";
import type { GoogleReviewsData } from "@/types/content";

interface TestimonialsSectionProps {
  reviewsData: GoogleReviewsData | null;
}

export function TestimonialsSection({ reviewsData }: TestimonialsSectionProps) {
  const items = reviewsData?.reviews ?? fallbackTestimonials;

  return (
    <section id="depoimentos" className="bg-white py-28 lg:py-36">
      <div className="container">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Badge variant="petrol">Depoimentos</Badge>
          <h2 className="text-balance font-display text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            Famílias que confiam na CL Cuidados
          </h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-0.5 text-primary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
            </div>
            <span>
              {reviewsData
                ? `${reviewsData.rating.toFixed(1)} · ${reviewsData.userRatingCount} avaliações no Google`
                : "Espaço reservado para nota média e número real de avaliações"}
            </span>
          </div>
        </FadeIn>

        <div className="mt-16">
          <TestimonialsCarousel testimonials={items} />
        </div>
      </div>
    </section>
  );
}
