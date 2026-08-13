"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  REDUCED_VARIANTS,
  fadeUpVariants,
  fadeVariants,
  scaleUpVariants,
  slideLeftVariants,
  slideRightVariants,
} from "@/components/motion/variants";

type Direction = "up" | "left" | "right" | "scale" | "none";

const DIRECTION_MAP: Record<Direction, Variants> = {
  up: fadeUpVariants,
  left: slideLeftVariants,
  right: slideRightVariants,
  scale: scaleUpVariants,
  none: fadeVariants,
};

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  direction?: Direction;
  delay?: number;
  children: React.ReactNode;
}

export function FadeIn({ direction = "up", delay = 0, className, children, ...props }: FadeInProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? REDUCED_VARIANTS : DIRECTION_MAP[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={delay ? { delay } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
