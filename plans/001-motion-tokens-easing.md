# Plan 001: Motion Tokens & Easing Alignment

## Problem (Verbatim Code)

In `src/app/globals.css`:
```css
/* Unstandardized and missing Kowalski curves in CSS tokens */
@utility double-bezel-outer {
  ...
  transition: border-color 0.3s cubic-bezier(0.25,1,0.5,1), box-shadow 0.3s cubic-bezier(0.25,1,0.5,1);
}
@utility cta-nested-pill {
  ...
  transition: transform 0.25s cubic-bezier(0.25,1,0.5,1), background-color 0.25s cubic-bezier(0.25,1,0.5,1), border-color 0.25s cubic-bezier(0.25,1,0.5,1), box-shadow 0.25s cubic-bezier(0.25,1,0.5,1);
}
```

In `src/components/layout/OptimizedHeader.tsx` (Line 71):
```tsx
exit: {
  opacity: 0,
  y: prefersReducedMotion ? 0 : 6,
  scale: prefersReducedMotion ? 1 : 0.97,
  transition: { duration: 0.15, ease: 'easeIn' as const }
}
```

In `src/app/template.tsx` (Line 22):
```tsx
transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: "easeInOut" }}
```

In `src/components/contacto/ContactForm.tsx` (Line 116):
```tsx
transition={{ duration: 0.3 }}
```

## Target Code (Exact Numerical Values & Explicit Curves)

In `src/app/globals.css`:
```css
:root {
  /* Motion Tokens Emil Kowalski Philosophy */
  --ease-out-ui: cubic-bezier(0.23, 1, 0.32, 1);       /* Strong ease-out for enters/exits */
  --ease-in-out-ui: cubic-bezier(0.77, 0, 0.175, 1);   /* On-screen movements */
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

In `src/components/layout/OptimizedHeader.tsx`:
```tsx
const EASE_KOWALSKI_EXIT = [0.23, 1, 0.32, 1] as const;

exit: {
  opacity: 0,
  y: prefersReducedMotion ? 0 : 4,
  scale: prefersReducedMotion ? 1 : 0.97,
  transition: { duration: 0.16, ease: EASE_KOWALSKI_EXIT }
}
```

In `src/app/template.tsx`:
```tsx
const EASE_PAGE_ENTER = [0.23, 1, 0.32, 1] as const;

<motion.div
  initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
  transition={{ duration: reduceMotion ? 0.01 : 0.22, ease: EASE_PAGE_ENTER }}
>
```

In `src/components/contacto/ContactForm.tsx`:
```tsx
const EASE_TOAST = [0.23, 1, 0.32, 1] as const;

<motion.div
  initial={{ opacity: 0, y: 8, scale: 0.97 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -4, scale: 0.97 }}
  transition={{ duration: 0.18, ease: EASE_TOAST }}
>
```

## Concrete Editing Steps
1. Declare official motion tokens under `:root` in `src/app/globals.css`.
2. Replace hardcoded `cubic-bezier(0.25,1,0.5,1)` in `@utility double-bezel-outer`, `@utility cta-nested-pill`, and `@utility kinetic-font-stretch` with token references.
3. Update `OptimizedHeader.tsx` dropdown exit variant to use `[0.23, 1, 0.32, 1]` with `160ms` duration instead of `easeIn`.
4. Update page transition in `src/app/template.tsx` to reduce duration from `350ms` to `220ms` and replace `"easeInOut"` with strong exit/entry curve `[0.23, 1, 0.32, 1]`.
5. Update success alert in `src/components/contacto/ContactForm.tsx` to use `180ms` duration and `scale(0.97)` initial state.

## Verification
1. **Mechanical Check**: Run `pnpm run typecheck` and `pnpm exec vitest run` to verify no compilation or test regressions.
2. **Feel Check**: Open Chrome DevTools -> Animations tab, set speed to 10% (0.1x). Verify that exiting elements (header dropdowns, success alerts) start instantly and decelerate gracefully into rest without sluggish `ease-in` drag at start.
