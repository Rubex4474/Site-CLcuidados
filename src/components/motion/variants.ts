import type { Variants } from "framer-motion";

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.5,
  base: 0.7,
  slow: 1,
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

export function staggerContainer(stagger = 0.12, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

export const REDUCED_VARIANTS: Variants = {
  hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
  show: { opacity: 1, x: 0, y: 0, scale: 1 },
};
