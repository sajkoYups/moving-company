/**
 * Animation utilities and constants for consistent animation timing
 */

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 600,
} as const;

export const ANIMATION_EASING = {
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
} as const;

export const STAGGER_DELAYS = {
  1: 0.1,
  2: 0.2,
  3: 0.3,
  4: 0.4,
  5: 0.5,
  6: 0.6,
} as const;

/**
 * Calculate stagger delay for an item at a given index
 */
export function getStaggerDelay(index: number, baseDelay: number = 0.1, increment: number = 0.1): number {
  return baseDelay + index * increment;
}

/**
 * CSS animation classes for common patterns
 */
export const ANIMATION_CLASSES = {
  fadeInUp: "animate-fade-in-up",
  fadeIn: "animate-fade-in",
  slideInLeft: "animate-slide-in-left",
  slideInRight: "animate-slide-in-right",
  scaleIn: "animate-scale-in",
  stagger: (index: number) => `stagger-${Math.min(index + 1, 6)}`,
} as const;
