"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Encapsula o useReducedMotion() do próprio framer-motion (já ligado ao
 * matchMedia de prefers-reduced-motion) — não reimplementa a checagem.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
