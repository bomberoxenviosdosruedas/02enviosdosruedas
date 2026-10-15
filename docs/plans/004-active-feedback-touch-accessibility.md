# 004 — Standardize Active Press Feedback, Touch Guards, and Spatial Micro-Interactions

- **Status**: TODO
- **Severity**: MEDIUM
- **Category**: Accesibilidad / Oportunidades Perdidas
- **Estimated scope**: 4 archivos de Next.js (`OptimizedHeader.tsx`, `MobileNav.tsx`, `OptimizedFooter.tsx`, `globals.css`), ~20 líneas

## Problem
Inconsistent scale factor on button press states (`whileTap={{ scale: 0.95 }}` vs `scale(0.92)`) creates uneven tactile response across UI controls. Furthermore, hover transforms applied without media guards cause sticky active hover states on touch screens (iOS/Android Safari), while spatial transitions are missing on interactive steps and value feedback.

### Verbatim current code (`src/components/layout/OptimizedHeader.tsx:135`):
```tsx
<motion.div className="relative w-10 h-10 shrink-0" whileHover={prefersReducedMotion ? {} : { rotate: 12, scale: 1.08 }} whileTap={prefersReducedMotion ? {} : { scale: 0.95 }} transition={{ type: 'spring', stiffness: 500, damping: 18 }}>
```

### Verbatim current code (`src/components/layout/MobileNav.tsx:98`):
```tsx
<motion.button onClick={onClose} whileHover={prefersReducedMotion ? {} : { scale: 1.08, rotate: 90 }} whileTap={prefersReducedMotion ? {} : { scale: 0.92 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }} className="...">
```

## Target

Standardize all active press feedback states to strictly `scale(0.97)` with duration-based Kowalski spring parameters `{ type: "spring", duration: 0.2, bounce: 0.12 }`, and guard hover states under `@media (hover: hover)`.

### Target code (`src/components/layout/OptimizedHeader.tsx`):
```tsx
<motion.div
  className="relative w-10 h-10 shrink-0"
  whileHover={prefersReducedMotion ? {} : { rotate: 8, scale: 1.04 }}
  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
  transition={{ type: 'spring', duration: 0.22, bounce: 0.15 }}
>
```

### Target code (`src/components/layout/MobileNav.tsx`):
```tsx
<motion.button
  onClick={onClose}
  whileHover={prefersReducedMotion ? {} : { scale: 1.04, rotate: 90 }}
  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
  transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
  className="..."
>
```

### Target code (`src/app/globals.css`):
```css
@media (hover: hover) and (pointer: fine) {
  .hover-lift:hover {
    transform: translateY(-2px);
  }
}
```

## Repo conventions to follow
- Retain existing focus-visible focus rings (`focus-visible:ring-2 focus-visible:ring-brand-yellow-500`).
- Keep touch target sizes at minimum `44x44px` (`min-w-11 min-h-11`).

## Steps
1. Update `whileTap` scale values across `OptimizedHeader.tsx`, `MobileNav.tsx`, and `OptimizedFooter.tsx` to `scale: 0.97`.
2. Standardize spring responses using duration-based springs: `{ type: 'spring', duration: 0.22, bounce: 0.15 }`.
3. Wrap hover transform utilities in `src/app/globals.css` with `@media (hover: hover) and (pointer: fine)`.

## Boundaries
- Do not alter click event handlers or route links.

## Verification
- **Mechanical**: Run `pnpm run typecheck` and `pnpm exec vitest run`.
- **Feel check**: Test press states using Chrome Mobile Touch emulation. Confirm buttons react with immediate tactile `0.97` compression without sticky hover styling lingering after release.
- **Done when**: All interactive controls share uniform `scale(0.97)` active press feedback and touch devices are protected against sticky hover effects.
