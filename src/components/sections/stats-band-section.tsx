import { CalendarDays, Star, Users } from "lucide-react";

import { AnimatedCounter } from "@/components/motion/animated-counter";
import { cn } from "@/lib/utils";
import type { GoogleReviewsData } from "@/types/content";

interface StatsBandSectionProps {
  yearsInBusiness: number;
  reviewsData: GoogleReviewsData | null;
}

/**
 * Faixa de prova social logo abaixo do Hero, inspirada numa referência que
 * o cliente mandou (outro site com números que contam ao entrar na tela).
 * Fundo branco de propósito: o Hero já termina com um degradê pro branco
 * (ver hero-section.tsx), então essa faixa continua esse branco sem costura
 * visível — a borda inferior é que separa ela da próxima seção (AboutSection,
 * também branca).
 */
export function StatsBandSection({ yearsInBusiness, reviewsData }: StatsBandSectionProps) {
  const statCount = reviewsData ? 3 : 2;

  return (
    <section className="border-b border-border bg-white py-10 lg:py-14">
      <div
        className={cn(
          "container grid grid-cols-1 gap-8 divide-y divide-border sm:divide-x sm:divide-y-0",
          statCount === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2",
        )}
      >
        <div className="flex flex-col items-center gap-1 pt-6 text-center first:pt-0 sm:pt-0">
          <Users className="h-6 w-6 text-primary" strokeWidth={2} />
          <span className="font-display text-4xl font-bold text-primary">
            <AnimatedCounter value={60} prefix="+" />
          </span>
          <span className="text-sm text-muted-foreground">Famílias atendidas</span>
        </div>

        <div className="flex flex-col items-center gap-1 pt-6 text-center sm:pt-0">
          <CalendarDays className="h-6 w-6 text-primary" strokeWidth={2} />
          <span className="font-display text-4xl font-bold text-primary">
            <AnimatedCounter value={yearsInBusiness} prefix="+" />
          </span>
          <span className="text-sm text-muted-foreground">Anos de mercado</span>
        </div>

        {reviewsData && (
          <div className="flex flex-col items-center gap-1 pt-6 text-center sm:pt-0">
            <Star className="h-6 w-6 text-primary" strokeWidth={2} />
            <span className="font-display text-4xl font-bold text-primary">
              <AnimatedCounter value={reviewsData.rating} decimals={1} />
            </span>
            <span className="text-sm text-muted-foreground">
              {reviewsData.userRatingCount} avaliações no Google
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
