# 003 — Optimize Mobile Drawer Performance and Eliminate Reflow Anti-Patterns

- **Status**: TODO
- **Severity**: HIGH
- **Category**: Rendimiento y Desacople de Render / Interrumpibilidad
- **Estimated scope**: 4 archivos de Next.js (`MobileNav.tsx`, `OptimizedFooter.tsx`, `page.tsx`, `globals.css`), ~30 líneas

## Problem
In `MobileNav.tsx`, sub-navigation accordions animate `height: 'auto'` with spring physics. Height animation causes layout thrashing by forcing browser layout reflows on every animation frame. Furthermore, broad `transition-all` utility usage across navigation links and cards causes unneeded paint invalidation on properties that don't need transitions.

### Verbatim current code (`src/components/layout/MobileNav.tsx:120`):
```tsx
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
  transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 340, damping: 28 }}
  className="pl-4 pr-1 py-2 flex flex-col gap-1 overflow-hidden"
>
```

### Verbatim current code (`src/components/layout/MobileNav.tsx:108`):
```tsx
className="flex items-center gap-3.5 py-2.5 px-3 rounded-xl text-xl font-subheading tracking-wider uppercase text-white hover:text-brand-yellow-500 hover:bg-white/5 transition-all min-h-12 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
```

## Target

Replace spring physics on height transitions with high-smoothness Kowalski drawer curve `cubic-bezier(0.32, 0.72, 0, 1)` (220ms), and replace `transition-all` with targeted property transitions (`transition-[color,background-color,border-color,transform]`).

### Target code (`src/components/layout/MobileNav.tsx`):
```tsx
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
  className="pl-4 pr-1 py-2 flex flex-col gap-1 overflow-hidden"
>
```

### Target code (`src/components/layout/MobileNav.tsx`):
```tsx
className="flex items-center gap-3.5 py-2.5 px-3 rounded-xl text-xl font-subheading tracking-wider uppercase text-white hover:text-brand-yellow-500 hover:bg-white/5 transition-[color,background-color,border-color,transform] duration-150 ease-out min-h-12 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
```

## Repo conventions to follow
- Retain `useSyncExternalStore` in `MobileNav.tsx` for client-side portal mounting.
- Ensure minimum touch target heights (`min-h-11` or `min-h-12`) are preserved on mobile links.

## Steps
1. Update accordion height animation transition in `MobileNav.tsx` to `{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }`.
2. Replace `transition-all` in `MobileNav.tsx`, `OptimizedFooter.tsx`, and `app/servicios/page.tsx` with targeted CSS transitions.
3. Verify mobile drawer entrance spring parameters are tuned for instant response (`stiffness: 380`, `damping: 32`).

## Boundaries
- Do not alter drawer z-index or body scroll locking logic.

## Verification
- **Mechanical**: Run `pnpm run typecheck` and `pnpm exec vitest run`.
- **Feel check**: Open Chrome DevTools Performance panel, record drawer open/accordion toggle on 4x CPU slowdown. Confirm absence of forced reflow layout warnings.
- **Done when**: `transition-all` is eliminated from header/drawer components and accordion expanding uses Kowalski drawer curve.
