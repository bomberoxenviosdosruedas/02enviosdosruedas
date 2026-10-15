# Plan 004: Active Feedback, Touch & Accessibility Alignment

## Problem (Verbatim Code)

In `src/components/layout/OptimizedHeader.tsx` (Line 135):
```tsx
<motion.div
  className="relative w-10 h-10 shrink-0"
  whileHover={prefersReducedMotion ? {} : { rotate: 12, scale: 1.08 }}
  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
>
```

In `src/components/layout/MobileNav.tsx` (Line 98):
```tsx
<motion.button
  onClick={onClose}
  whileHover={prefersReducedMotion ? {} : { scale: 1.08, rotate: 90 }}
  whileTap={prefersReducedMotion ? {} : { scale: 0.92 }}
  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 transition-colors cursor-pointer min-w-11 min-h-11 flex items-center justify-center"
  aria-label="Cerrar menú"
>
```

In `src/components/layout/OptimizedFooter.tsx` (Lines 403-404):
```tsx
whileTap={{ scale: 0.92 }}
whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -7 }}
```

In `src/app/globals.css` (Lines 332-345):
```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto !important;
  }
  .animate-floaty, .animate-shuttle, .animate-roundtrip, .animate-pulse-ring, .animate-grow-x, .animate-marquee-left {
    animation: none !important;
  }
  .animate-grow-x { transform: scaleX(1) !important; }
  .animate-pulse-ring { opacity: 0 !important; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Target Code (Exact Numerical Values & Explicit Curves)

In `src/components/layout/OptimizedHeader.tsx`:
```tsx
<motion.div
  className="relative w-10 h-10 shrink-0"
  whileHover={prefersReducedMotion ? {} : { rotate: 8, scale: 1.04 }}
  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
  transition={{ type: 'spring', duration: 0.25, bounce: 0.15 }}
>
```

In `src/components/layout/MobileNav.tsx`:
```tsx
<motion.button
  onClick={onClose}
  whileHover={prefersReducedMotion ? {} : { scale: 1.04, rotate: 90 }}
  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
  transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 transition-colors cursor-pointer min-w-11 min-h-11 flex items-center justify-center"
  aria-label="Cerrar menú"
>
```

In `src/components/layout/OptimizedFooter.tsx`:
```tsx
whileTap={{ scale: 0.97 }}
whileHover={prefersReducedMotion ? {} : { scale: 1.06, y: -4 }}
transition={{ type: 'spring', duration: 0.25, bounce: 0.12 }}
```

In `src/app/globals.css`:
```css
/* Ensure hover triggers only on hover-capable pointer devices */
@media (hover: hover) and (pointer: fine) {
  .hover-lift:hover {
    transform: translateY(-2px);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto !important;
  }
  .animate-floaty, .animate-shuttle, .animate-roundtrip, .animate-pulse-ring, .animate-grow-x, .animate-marquee-left {
    animation: none !important;
  }
  .animate-grow-x { transform: scaleX(1) !important; }
  .animate-pulse-ring { opacity: 0 !important; }
  /* Retain 0.01ms for spatial movement but retain instant opacity feedback */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Concrete Editing Steps
1. Standardize all `whileTap` scale press states to exactly `0.97` across buttons, cards, and header controls.
2. Standardize spring responses using Kowalski duration-based springs: `{ type: 'spring', duration: 0.25, bounce: 0.15 }`.
3. Wrap pure hover utility transforms under `@media (hover: hover)` media queries in Tailwind CSS to avoid sticky hover states on iOS/Android touch taps.
4. Integrate missing micro-interactions: Add active press feedback `active:scale-[0.97]` to CTANestedPill and Service pricing cards.

## Verification
1. **Mechanical Check**: Run `pnpm run typecheck` and `pnpm exec vitest run`.
2. **Feel Check**: Test tap feedback on mobile devices / Chrome Touch emulation. Confirm buttons react with tight, tactile `0.97` compression without sticky hover styles sticking after tap release.
