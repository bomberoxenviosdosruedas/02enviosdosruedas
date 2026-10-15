# Plan 002: Header & Dropdown Scale Origin Alignment

## Problem (Verbatim Code)

In `src/components/layout/OptimizedHeader.tsx` (Lines 66-72):
```tsx
const dropdownContainer = useMemo<Variants>(() => ({
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8, scale: prefersReducedMotion ? 1 : 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 320, damping: 24, staggerChildren: prefersReducedMotion ? 0 : 0.06, delayChildren: 0.02 },
  },
  exit: { opacity: 0, y: prefersReducedMotion ? 0 : 6, scale: prefersReducedMotion ? 1 : 0.97, transition: { duration: 0.15, ease: 'easeIn' as const } },
}), [prefersReducedMotion]);

...

<motion.div variants={dropdownContainer} initial="hidden" animate="visible" exit="exit" className="absolute left-0 mt-2 w-64 bg-brand-blue-700 rounded-2xl shadow-2xl border border-white/15 py-2.5 text-white overflow-hidden z-50">
```

In `src/components/nosotros/nuestras-redes/NetworksChannels.tsx` (Lines 40-42):
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  whileInView={{ opacity: 1, scale: 1 }}
>
```

In `src/components/ui/timeline-animation.tsx` (Lines 29-30):
```tsx
hidden:  { opacity: 0, scale: 0.88 },
visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 14 } },
```

## Target Code (Exact Numerical Values & Explicit Curves)

In `src/components/layout/OptimizedHeader.tsx`:
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

In `src/components/ui/timeline-animation.tsx`:
```tsx
hidden:  { opacity: 0, scale: 0.96, y: 12 },
visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 350, damping: 26 } },
```

## Concrete Editing Steps
1. Add explicit `style={{ transformOrigin: 'top left' }}` to `OptimizedHeader.tsx` dropdown container element so it expands directly from its trigger button.
2. Tighten spring config for dropdowns (`stiffness: 420`, `damping: 28`) and reduce stagger delay from `60ms` to `30ms` so interactive options are ready immediately.
3. Replace exaggerated `scale(0.88)` in `src/components/ui/timeline-animation.tsx` with subtle `scale(0.96)` + `y: 12`.
4. Ensure all popovers, menus, and card entrances clamp scale initial values strictly between `0.95` and `0.97`.

## Verification
1. **Mechanical Check**: Run `pnpm run typecheck` and `pnpm exec vitest run`.
2. **Feel Check**: Hover over "Servicios" and "Nosotros" in desktop navigation. Verify that dropdown expands anchored to top-left (trigger origin) instead of blowing out from center.
