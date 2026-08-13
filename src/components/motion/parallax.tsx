"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ParallaxProps {
  className?: string;
  children: React.ReactNode;
  amount?: number;
}

/**
 * Efeito de profundidade puramente decorativo. Sob prefers-reduced-motion
 * a transformação vira no-op total (style undefined), não apenas mais
 * lenta — o elemento renderiza estático.
 */
export function Parallax({ className, children, amount = 40 }: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <motion.div ref={ref} className={className} style={prefersReduced ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
