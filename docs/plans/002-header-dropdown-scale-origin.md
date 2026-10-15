# 002 — Standardize Transform Origins and Initial Scale States

- **Status**: TODO
- **Severity**: MEDIUM
- **Category**: Fisicalidad y Origen
- **Estimated scope**: 3 archivos de Next.js (`OptimizedHeader.tsx`, `timeline-animation.tsx`, `NetworksChannels.tsx`), ~18 líneas

## Problem
Header navigation dropdowns scale out from their geometric center rather than expanding directly from their trigger nav button (`transform-origin`). Additionally, exaggerated initial scale values (e.g. `scale(0.88)` in timeline animations) cause elements to appear out of nowhere, violating Kowalski's rule that UI elements must never spring from invisible zero-size points.

### Verbatim current code (`src/components/layout/OptimizedHeader.tsx:168`):
```tsx
<motion.div variants={dropdownContainer} initial="hidden" animate="visible" exit="exit" className="absolute left-0 mt-2 w-64 bg-brand-blue-700 rounded-2xl shadow-2xl border border-white/15 py-2.5 text-white overflow-hidden z-50">
```

### Verbatim current code (`src/components/ui/timeline-animation.tsx:29-30`):
```tsx
hidden:  { opacity: 0, scale: 0.88 },
visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 14 } },
```

## Target

Anchor dropdown scaling explicitly to `top left` trigger origin and clamp initial scale transforms strictly between `0.95` and `0.97`.

### Target code (`src/components/layout/OptimizedHeader.tsx`):
```tsx
const dropdownContainer = useMemo<Variants>(() => ({
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 4, scale: prefersReducedMotion ? 1 : 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 420, damping: 28, staggerChildren: prefersReducedMotion ? 0 : 0.03, delayChildren: 0.01 },
  },
  exit: { opacity: 0, y: prefersReducedMotion ? 0 : 4, scale: prefersReducedMotion ? 1 : 0.97, transition: { duration: 0.14, ease: [0.23, 1, 0.32, 1] } },
}), [prefersReducedMotion]);

...

<motion.div
  variants={dropdownContainer}
  initial="hidden"
  animate="visible"
  exit="exit"
  style={{ transformOrigin: 'top left' }}
  className="absolute left-0 mt-2 w-64 bg-brand-blue-700 rounded-2xl shadow-2xl border border-white/15 py-2.5 text-white overflow-hidden z-50"
>
```

### Target code (`src/components/ui/timeline-animation.tsx`):
```tsx
hidden:  { opacity: 0, scale: 0.96, y: 12 },
visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 350, damping: 26 } },
```

## Repo conventions to follow
- Inline styles or Tailwind origin utilities (`origin-top-left`) must be used for dynamic Framer Motion containers.
- Maintain `useReducedMotion()` guards on scale properties.

## Steps
1. Add `style={{ transformOrigin: 'top left' }}` to `OptimizedHeader.tsx` dropdown container.
2. Update initial scale state in `OptimizedHeader.tsx` dropdown container from `0.97` with tighter spring dynamics (`stiffness: 420`, `damping: 28`).
3. Replace `scale: 0.88` in `timeline-animation.tsx` with `scale: 0.96` + `y: 12`.

## Boundaries
- Do not alter dropdown item layout structure or link destinations.

## Verification
- **Mechanical**: Run `pnpm run typecheck` and `pnpm exec vitest run`.
- **Feel check**: Hover over "Servicios" in desktop header. Confirm dropdown expands outwards pinned directly to its navigation label trigger.
- **Done when**: All dropdown popovers scale from trigger origin and initial scale values remain within 0.95–0.97 range.
