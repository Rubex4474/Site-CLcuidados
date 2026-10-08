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
    <section className="border-b border-border bg-white py-8 lg:py-14">
      {/* Lado a lado mesmo no mobile (pedido do cliente — a versão anterior
          empilhava verticalmente e ocupava altura demais rolando a página).
          Textos/ícones menores em telas estreitas pra caber 3 colunas sem
          quebrar feio; "divide-x" já funciona em qualquer largura, não
          precisa mais do par divide-y/divide-x condicional por breakpoint. */}
      <div
        className={cn(
          "container grid gap-2 divide-x divide-border sm:gap-8",
          statCount === 3 ? "grid-cols-3" : "grid-cols-2",
        )}
      >
        <div className="flex flex-col items-center gap-1 px-1 text-center sm:gap-1.5">
          <Users className="h-4 w-4 text-primary sm:h-6 sm:w-6" strokeWidth={2} />
          <span className="font-display text-xl font-bold text-primary sm:text-4xl">
            <AnimatedCounter value={60} prefix="+" />
          </span>
          <span className="text-[0.65rem] leading-tight text-muted-foreground sm:text-sm">
            Famílias atendidas
          </span>
        </div>

        <div className="flex flex-col items-center gap-1 px-1 text-center sm:gap-1.5">
          <CalendarDays className="h-4 w-4 text-primary sm:h-6 sm:w-6" strokeWidth={2} />
          <span className="font-display text-xl font-bold text-primary sm:text-4xl">
            <AnimatedCounter value={yearsInBusiness} prefix="+" />
          </span>
          <span className="text-[0.65rem] leading-tight text-muted-foreground sm:text-sm">
            Anos de mercado
          </span>
        </div>

        {reviewsData && (
          <div className="flex flex-col items-center gap-1 px-1 text-center sm:gap-1.5">
            <Star className="h-4 w-4 text-primary sm:h-6 sm:w-6" strokeWidth={2} />
            <span className="font-display text-xl font-bold text-primary sm:text-4xl">
              <AnimatedCounter value={reviewsData.rating} decimals={1} />
            </span>
            <span className="text-[0.65rem] leading-tight text-muted-foreground sm:text-sm">
              {reviewsData.userRatingCount} avaliações no Google
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
