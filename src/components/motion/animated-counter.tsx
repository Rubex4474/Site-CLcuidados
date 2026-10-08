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
  duration = 2.5,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = React.useState(prefersReducedMotion ? value : 0);

  React.useEffect(() => {
    if (!isInView || prefersReducedMotion) return;
    // "linear" de propósito, não "easeOut": o easing original concentrava
    // quase toda a subida no primeiro instante e só "arrastava" o final,
    // então pra números pequenos (3, 60, 5.0) parecia já abrir no valor
    // final em vez de contar — cliente pediu pra dar pra acompanhar a
    // contagem. Linear mantém o ritmo constante do início ao fim.
    const controls = animate(0, value, {
      duration,
      ease: "linear",
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
