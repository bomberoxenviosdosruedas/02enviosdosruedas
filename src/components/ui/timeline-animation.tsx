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

interface RenderMotionElementProps extends HTMLMotionProps<'div'> {
  as?: React.ElementType | string;
  custom?: unknown;
}

// Component to dynamically switch motion tags statically (React Compiler requirement)
function RenderMotionElement({
  as,
  children,
  className,
  style,
  variants,
  initial,
  whileInView,
  viewport,
  custom,
  ...rest
}: RenderMotionElementProps) {
  switch (as) {
    case 'p':
      return <motion.p className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.p>;
    case 'span':
      return <motion.span className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.span>;
    case 'h1':
      return <motion.h1 className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.h1>;
    case 'h2':
      return <motion.h2 className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.h2>;
    case 'h3':
      return <motion.h3 className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.h3>;
    case 'h4':
      return <motion.h4 className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.h4>;
    case 'h5':
      return <motion.h5 className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.h5>;
    case 'h6':
      return <motion.h6 className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.h6>;
    case 'section':
      return <motion.section className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.section>;
    case 'article':
      return <motion.article className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.article>;
    case 'aside':
      return <motion.aside className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.aside>;
    case 'header':
      return <motion.header className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.header>;
    case 'footer':
      return <motion.footer className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.footer>;
    case 'nav':
      return <motion.nav className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.nav>;
    default:
      return <motion.div className={className} style={style} variants={variants} initial={initial} whileInView={whileInView} viewport={viewport} custom={custom} {...rest}>{children}</motion.div>;
  }
}

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
  timelineRef?: React.RefObject<HTMLElement | null>;
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
    <RenderMotionElement
      as={as}
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
    </RenderMotionElement>
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
    <RenderMotionElement
      as={as}
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
    >
      {children}
    </RenderMotionElement>
  );
}
