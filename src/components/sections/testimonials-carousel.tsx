"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import type { TestimonialItem } from "@/types/content";

const QUOTE_TRUNCATE_LENGTH = 200;

interface TestimonialsCarouselProps {
  testimonials: TestimonialItem[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  // Autoplay contínuo sempre ligado aqui, mesmo sob prefers-reduced-motion —
  // exceção deliberada ao padrão do resto do site (pedido explícito do
  // cliente). Continua acessível: os botões de navegação são <button>
  // reais e stopOnInteraction faz qualquer clique assumir o controle manual.
  const [autoplayPlugin] = React.useState(() =>
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: false }),
  );

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[autoplayPlugin]}
      aria-label="Depoimentos de clientes"
      className="mx-auto max-w-5xl"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => {
          const isLong = testimonial.quote.length > QUOTE_TRUNCATE_LENGTH;
          const displayQuote = isLong
            ? `${testimonial.quote.slice(0, QUOTE_TRUNCATE_LENGTH).trimEnd()}…`
            : testimonial.quote;

          return (
            <CarouselItem key={index} className="basis-full sm:basis-1/2">
              <figure className="flex h-full flex-col items-center gap-4 rounded-lg border border-border bg-card px-6 py-8 text-center shadow-card sm:px-8">
                {testimonial.avatarUrl ? (
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.avatarAlt}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <PlaceholderImage
                    alt={testimonial.avatarAlt}
                    aspect="1/1"
                    className="h-12 w-12 rounded-full"
                  />
                )}
                <div className="flex gap-1 text-primary" aria-hidden="true">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-balance font-display text-base leading-relaxed text-foreground">
                  “{displayQuote}”
                </blockquote>
                <figcaption className="mt-auto text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{testimonial.name}</span>
                  {" · "}
                  {testimonial.role}
                </figcaption>
                {isLong && testimonial.sourceUrl && (
                  <a
                    href={testimonial.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary transition-colors hover:text-primary-deep"
                  >
                    Ler avaliação completa no Google
                  </a>
                )}
              </figure>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
