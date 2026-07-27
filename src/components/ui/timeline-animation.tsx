'use client';

import React from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'motion/react';

// ─── Preset entrance variants — cinematographic quality ───────────────────────

export const timelineVariants = {
  /** Classic fade up — most versatile */
  fadeUp: {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
  } as Variants,

  /** Slide in from left with spring */
  slideLeft: {
    hidden:  { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70, damping: 16 } },
  } as Variants,

  /** Slide in from right */
  slideRight: {
    hidden:  { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70, damping: 16 } },
  } as Variants,

  /** Scale pop — for cards and icons */
  scalePop: {
    hidden:  { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 14 } },
  } as Variants,

  /** Blur reveal — cinematic, for headlines */
  blurIn: {
    hidden:  { opacity: 0, y: 20, filter: 'blur(12px)' },
    visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  } as Variants,

  /** Clip reveal from bottom — editorial feel */
  clipUp: {
    hidden:  { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
    visible: { clipPath: 'inset(0% 0 0 0)',   opacity: 1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  } as Variants,

  /** Stagger container — apply to parent for child stagger */
  staggerContainer: {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  } as Variants,

  /** Stagger item — use inside staggerContainer */
  staggerItem: {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 85, damping: 17 } },
  } as Variants,
} as const;

export type TimelineVariantName = keyof typeof timelineVariants;

// ─── Props ────────────────────────────────────────────────────────────────────

interface TimelineContentProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  /** One of the built-in variant presets */
  variant?: TimelineVariantName;
  /** Override with fully custom variants */
  customVariants?: Variants;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** How many px below the viewport trigger point */
  viewportMargin?: string;
  /** Run animation only once (default: true) */
  once?: boolean;
  /** Render as a different element tag */
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animationNum?: number;
  timelineRef?: React.RefObject<any>;
}

// ─── Component ───────────────────────────────────────────────────────────────

export function TimelineContent({
  children,
  variant = 'fadeUp',
  customVariants,
  delay = 0,
  viewportMargin = '-80px',
  once = true,
  as = 'div',
  className,
  style,
  animationNum,
  timelineRef,
  ...rest
}: TimelineContentProps) {
  const Component = as as any;

  // Merge delay into the transition of whichever variants are active
  const activeVariants: Variants = customVariants ?? timelineVariants[variant];
  const resolvedVariants: Variants = delay > 0
    ? {
        ...activeVariants,
        visible: {
          ...(activeVariants.visible as object),
          transition: {
            ...((activeVariants.visible as { transition?: object })?.transition ?? {}),
            delay,
          },
        },
      }
    : activeVariants;

  return (
    <Component
      className={className}
      style={style}
      variants={resolvedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      custom={animationNum}
      {...rest}
    >
      {children}
    </Component>
  );
}

// ─── Convenience: stagger wrapper ─────────────────────────────────────────────

interface TimelineGroupProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  viewportMargin?: string;
  once?: boolean;
  as?: React.ElementType;
}

/**
 * Wraps children and staggers their `staggerItem` entrance animations.
 * Each direct child should use `<TimelineContent variant="staggerItem" />`.
 */
export function TimelineGroup({
  children,
  className,
  style,
  delay = 0,
  viewportMargin = '-80px',
  once = true,
  as = 'div',
}: TimelineGroupProps) {
  const Component = as as any;

  const containerVariants: Variants = {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  return (
    <Component
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
    >
      {children}
    </Component>
  );
}
