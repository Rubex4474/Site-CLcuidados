"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface AnimatedCounterProps {
  value: number;
  className?: string;
  /** Prefixo/sufixo fixos ao redor do número animado, ex.: prefix="+" */
  prefix?: string;
  suffix?: string;
  duration?: number;
  /** Casas decimais fixas, ex.: decimals={1} pra uma nota tipo "5.0". */
  decimals?: number;
}

/**
 * Número que conta de 0 até `value` quando entra na tela (inspirado numa
 * referência que o cliente mandou). Só dispara uma vez (`once: true`) e
 * pula direto pro valor final sob prefers-reduced-motion, mesmo padrão
 * do resto do site (ver hooks/use-reduced-motion.ts).
 */
export function AnimatedCounter({
  value,
  className,
  prefix = "",
  suffix = "",
  duration = 1.6,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = React.useState(prefersReducedMotion ? value : 0);

  React.useEffect(() => {
    if (!isInView || prefersReducedMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });
    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}
