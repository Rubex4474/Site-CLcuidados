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
  staggerContainer,
} from "@/components/motion/variants";

type Direction = "up" | "left" | "right" | "scale" | "none";

const DIRECTION_MAP: Record<Direction, Variants> = {
  up: fadeUpVariants,
  left: slideLeftVariants,
  right: slideRightVariants,
  scale: scaleUpVariants,
  none: fadeVariants,
};

interface StaggerGroupProps extends Omit<HTMLMotionProps<"div">, "children"> {
  stagger?: number;
  delayChildren?: number;
  children: React.ReactNode;
}

export function StaggerGroup({
  stagger = 0.12,
  delayChildren = 0,
  className,
  children,
  ...props
}: StaggerGroupProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? REDUCED_VARIANTS : staggerContainer(stagger, delayChildren);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  direction?: Direction;
  children: React.ReactNode;
}

export function StaggerItem({ direction = "up", className, children, ...props }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? REDUCED_VARIANTS : DIRECTION_MAP[direction];

  return (
    <motion.div className={className} variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
