/**
 * Módulo de física, resortes y curvas de microinteracción premium (BL-Motion).
 * Inspirado en la filosofía de craftsmanship de agency-senior-developer y Emil Kowalski.
 *
 * Todas las transiciones están calibradas para ejecutarse a 60 fps en navegadores
 * modernos, respetando estrictamente `useReducedMotion()` para accesibilidad (WCAG 2.1 AA).
 */

import type { Transition, Variants } from 'motion/react';

// ============================================================================
// 1. CURVAS CÚBICAS BÉZIER CANÓNICAS
// ============================================================================

/** Easing principal: entrada suave y desaceleración orgánica prolongada */
export const EASE_FLUID = [0.23, 1, 0.32, 1] as const;

/** Easing rápido: respuesta táctil inmediata para botones y controles interactivos */
export const EASE_SNAPPY = [0.16, 1, 0.3, 1] as const;

/** Easing de desplazamiento: para drawers, acordeones y expansión de paneles */
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

// ============================================================================
// 2. CONFIGURACIONES DE RESORTES (PHYSICS SPRINGS)
// ============================================================================

/** Resorte suave para tarjetas, modales y cambios de layout */
export const SPRING_GENTLE: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
  mass: 0.8,
};

/** Resorte ágil para botones, chips y radio selectors */
export const SPRING_SNAPPY: Transition = {
  type: 'spring',
  stiffness: 420,
  damping: 28,
  mass: 0.6,
};

/** Resorte de rebote micro-háptico para badges, checkmarks y confirmaciones */
export const SPRING_POP: Transition = {
  type: 'spring',
  stiffness: 520,
  damping: 22,
  mass: 0.5,
};

// ============================================================================
// 3. VARIANTES DE INTERACCIÓN REUTILIZABLES
// ============================================================================

/**
 * Variantes de elevación para tarjetas interactivas (DoubleBezelCard, etc.).
 * Si `reduceMotion` es true, preserva la estabilidad visual sin translate.
 */
export function getCardInteractiveVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      initial: { opacity: 1 },
      hover: { opacity: 1 },
      tap: { opacity: 0.96 },
    };
  }

  return {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -3,
      scale: 1.008,
      transition: SPRING_GENTLE,
    },
    tap: {
      y: 0,
      scale: 0.99,
      transition: SPRING_SNAPPY,
    },
  };
}

/**
 * Variantes de micro-resorte para botones y CTAs tipo píldora.
 */
export function getPillButtonVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      initial: { opacity: 1 },
      hover: { opacity: 0.92 },
      tap: { opacity: 0.85 },
    };
  }

  return {
    initial: { scale: 1 },
    hover: {
      scale: 1.025,
      transition: SPRING_SNAPPY,
    },
    tap: {
      scale: 0.97,
      transition: SPRING_SNAPPY,
    },
  };
}

/**
 * Variantes para elementos que aparecen en cascada (staggered list).
 */
export const STAGGER_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export function getFadeUpItemVariants(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    };
  }

  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: EASE_FLUID,
      },
    },
  };
}

// ============================================================================
// 4. HELPERS DE EFECTO MAGNÉTICO
// ============================================================================

/**
 * Calcula el offset de atracción magnética para botones respecto al cursor.
 * @param event Evento de mouse sobre el contenedor
 * @param strength Factor de resistencia magnética (0.1 a 0.35 recomendado)
 */
export function calculateMagneticOffset(
  event: React.MouseEvent<HTMLElement>,
  strength = 0.2
): { x: number; y: number } {
  const rect = event.currentTarget.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = (event.clientX - centerX) * strength;
  const deltaY = (event.clientY - centerY) * strength;

  return { x: deltaX, y: deltaY };
}
