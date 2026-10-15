# Plan 003: Mobile Nav Performance & Interruptibility Alignment

## Problem (Verbatim Code)

In `src/components/layout/MobileNav.tsx` (Line 120):
```tsx
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
  transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 340, damping: 28 }}
  className="pl-4 pr-1 py-2 flex flex-col gap-1 overflow-hidden"
>
```

In `src/components/layout/MobileNav.tsx` (Lines 108, 114, 125, 142):
```tsx
className="... transition-all min-h-12 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
```

In `src/components/layout/OptimizedFooter.tsx` (Line 94):
```tsx
className="... transition-all flex items-center justify-between group min-h-12"
```

In `src/app/servicios/page.tsx` (Line 335):
```tsx
className="... transition-all duration-300 flex flex-col ..."
```

## Target Code (Exact Numerical Values & Explicit Curves)

In `src/components/layout/MobileNav.tsx`:
```tsx
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
  className="pl-4 pr-1 py-2 flex flex-col gap-1 overflow-hidden"
>
```

In `src/components/layout/MobileNav.tsx`:
```tsx
/* Replace generic transition-all with targeted transition */
className="... transition-[color,background-color,border-color,transform] duration-150 ease-out min-h-12 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
```

In `src/components/layout/OptimizedFooter.tsx`:
```tsx
className="... transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out flex items-center justify-between group min-h-12"
```

In `src/app/servicios/page.tsx`:
```tsx
className="... transition-[border-color,box-shadow,transform] duration-250 ease-out flex flex-col ..."
```

## Concrete Editing Steps
1. Replace spring physics on accordion height animation in `MobileNav.tsx` with high-perceptual-smoothness Kowalski drawer curve `cubic-bezier(0.32, 0.72, 0, 1)` with `220ms` duration.
2. Search and replace all instances of `transition-all` in high-frequency elements (`MobileNav.tsx`, `OptimizedFooter.tsx`, `OptimizedHeader.tsx`, `CotizadorForm.tsx`, `ContactForm.tsx`) with targeted property transitions (`transition-[color,background-color,border-color,box-shadow,transform]`).
3. Ensure side drawer slide-in uses `{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }` or spring `{ type: 'spring', stiffness: 380, damping: 32 }` to avoid sluggish overbounce when rapidly opening/closing.

## Verification
1. **Mechanical Check**: Run `pnpm run typecheck` and `pnpm exec vitest run`.
2. **Feel Check**: Open Mobile Menu on simulated mobile viewport (375px width). Toggle submenus rapidly back and forth. Verify height expands without wobble or jitter, and button hover states do not cause layout thrashing.
