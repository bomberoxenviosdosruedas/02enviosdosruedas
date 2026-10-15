# 001 — Centralize Motion Tokens and Fix Easing Violations

- **Status**: DONE
- **Severity**: HIGH
- **Category**: Curvas (Easing) y Duración / Cohesión y Tokens
- **Estimated scope**: 4 archivos de Next.js (`globals.css`, `OptimizedHeader.tsx`, `template.tsx`, `ContactForm.tsx`), ~25 líneas

## Problem
Inconsistent, hardcoded easing curves and sluggish exit transitions affect perceived application responsiveness. `OptimizedHeader.tsx` uses `easeIn` on exit (making menu dismissal feel heavy and dragging), while global utility classes rely on unstandardized `cubic-bezier(0.25, 1, 0.5, 1)`. Page route transitions in `template.tsx` use `350ms easeInOut`, exceeding the 300ms UI threshold recommended by Emil Kowalski.

### Verbatim current code (`src/app/globals.css:215` & `239`):
```css
@utility double-bezel-outer {
  ...
  transition: border-color 0.3s cubic-bezier(0.25,1,0.5,1), box-shadow 0.3s cubic-bezier(0.25,1,0.5,1);
}
@utility cta-nested-pill {
  ...
  transition: transform 0.25s cubic-bezier(0.25,1,0.5,1), background-color 0.25s cubic-bezier(0.25,1,0.5,1), border-color 0.25s cubic-bezier(0.25,1,0.5,1), box-shadow 0.25s cubic-bezier(0.25,1,0.5,1);
}
```

### Verbatim current code (`src/components/layout/OptimizedHeader.tsx:71`):
```tsx
exit: { opacity: 0, y: prefersReducedMotion ? 0 : 6, scale: prefersReducedMotion ? 1 : 0.97, transition: { duration: 0.15, ease: 'easeIn' as const } }
```

### Verbatim current code (`src/app/template.tsx:22`):
```tsx
transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: "easeInOut" }}
```

## Target

Declare canonical Kowalski easing tokens under `:root` in `src/app/globals.css` and enforce strict entry/exit curves across route templates and header overlays.

### Target code (`src/app/globals.css`):
```css
:root {
  /* Motion Tokens — Emil Kowalski Philosophy */
  --ease-out-ui: cubic-bezier(0.23, 1, 0.32, 1);       /* Strong ease-out for enters/exits */
  --ease-in-out-ui: cubic-bezier(0.77, 0, 0.175, 1);   /* On-screen spatial movements */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);       /* Drawers & side panels */

  --duration-feedback: 160ms;
  --duration-dropdown: 200ms;
  --duration-modal: 250ms;
}

@utility double-bezel-outer {
  ...
  transition: border-color var(--duration-dropdown) var(--ease-out-ui), box-shadow var(--duration-dropdown) var(--ease-out-ui);
}

@utility cta-nested-pill {
  ...
  transition: transform var(--duration-feedback) var(--ease-out-ui), background-color var(--duration-feedback) var(--ease-out-ui), border-color var(--duration-feedback) var(--ease-out-ui), box-shadow var(--duration-feedback) var(--ease-out-ui);
}
```

### Target code (`src/components/layout/OptimizedHeader.tsx`):
```tsx
const EASE_KOWALSKI_EXIT = [0.23, 1, 0.32, 1] as const;

exit: {
  opacity: 0,
  y: prefersReducedMotion ? 0 : 4,
  scale: prefersReducedMotion ? 1 : 0.97,
  transition: { duration: 0.16, ease: EASE_KOWALSKI_EXIT }
}
```

### Target code (`src/app/template.tsx`):
```tsx
const EASE_PAGE_ENTER = [0.23, 1, 0.32, 1] as const;

<motion.div
  initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
  transition={{ duration: reduceMotion ? 0.01 : 0.22, ease: EASE_PAGE_ENTER }}
>
```

## Repo conventions to follow
- CSS custom properties must be declared in `:root` inside `src/app/globals.css` (Tailwind CSS v4 `@theme` compatibility).
- Keep `'use client'` at top of client components (`OptimizedHeader.tsx`).
- Preserve accessibility checks with `useReducedMotion()`.

## Steps
1. Add Kowalski motion tokens under `:root` in `src/app/globals.css`.
2. Update `@utility double-bezel-outer`, `@utility cta-nested-pill`, and `@utility kinetic-font-stretch` in `src/app/globals.css` to consume `var(--ease-out-ui)`.
3. Update `OptimizedHeader.tsx` dropdown exit variant transition to use `[0.23, 1, 0.32, 1]` with `160ms` duration instead of `'easeIn'`.
4. Update `src/app/template.tsx` page entrance transition to `220ms` duration and `[0.23, 1, 0.32, 1]` curve.

## Boundaries
- Do not modify API routes or state hooks.
- Do not add external animation packages.

## Verification
- **Mechanical**: Run `pnpm run typecheck` and `pnpm exec vitest run`.
- **Feel check**: Open DevTools Animation drawer at 10% speed. Confirm header dropdown exit decelerates cleanly without sluggish start lag.
- **Done when**: All global transitions utilize centralized tokens or explicit `[0.23, 1, 0.32, 1]` tuples, and route changes feel instantaneous under 250ms.
