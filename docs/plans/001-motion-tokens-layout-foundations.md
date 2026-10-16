# 001 — Motion Tokens and Layout Foundations

- **Status**: DONE
- **Commit**: b8a95d6
- **Severity**: HIGH
- **Category**: Easing & Duration / Performance / Cohesion & Tokens
- **Estimated scope**: 5 files (`src/app/globals.css`, `src/app/template.tsx`, `src/components/layout/OptimizedHeader.tsx`, `src/components/layout/MobileNav.tsx`, `src/components/layout/OptimizedFooter.tsx`), ~75 lines

## Problem

Global motion lacks complete canonical Kowalski tokens, and critical layout transitions violate core performance and duration constraints:
1. `src/app/template.tsx:21-24` runs `filter: "blur(4px)"` on page exit/enter across the whole viewport root (`w-full h-full`), triggering full rasterization repaints on every navigation frame.
2. `src/app/globals.css:347-354` uses `scaleX(0)` in `@keyframes grow-x` with a 1.1s duration, violating the "Never `scale(0)`" rule and exceeding the 300ms UI duration threshold.
3. `src/components/layout/MobileNav.tsx:129` animates `height: 0` to `height: 'auto'`, causing severe layout thrashing and forced reflows during navigation interactions.
4. `src/components/layout/OptimizedFooter.tsx:31,41,50` applies floaty high-distance translations (`y: 28`, `y: 40`) with sluggish springs and an excessive `scale: 1.12` social hover without `@media (hover: hover)` gates.

### Verbatim Current Code Excerpts

```tsx
/* src/app/template.tsx:21-24 — current */
<motion.div
  initial={reduceMotion ? false : isMounted ? { opacity: 0, y: 6, filter: "blur(4px)" } : false}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(4px)" }}
  transition={{ duration: reduceMotion ? 0.01 : 0.22, ease: EASE_PAGE_ENTER }}
  className="w-full h-full"
>
```

```css
/* src/app/globals.css:347-354 — current */
@keyframes grow-x {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@utility animate-grow-x {
  animation: grow-x 1.1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  transform-origin: left center;
}
```

```tsx
/* src/components/layout/MobileNav.tsx:129 — current */
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
  className="pl-4 pr-1 py-2 flex flex-col gap-1 overflow-hidden"
>
```

```tsx
/* src/components/layout/OptimizedFooter.tsx:30-51 — current */
const FOOTER_COL = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 24 },
  },
} as const;

const BANNER_VARIANT = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 22, delay: 0.08 },
  },
} as const;

const SOCIAL_HOVER = { y: -4, scale: 1.12 } as const;
```

---

## Target

Establish a clean GPU-only motion baseline using standard Kowalski tokens:
1. Purge root-level `filter: blur(...)` in `template.tsx`; rely purely on `opacity` and subtle `y: 4` translation (sub-10px) with `cubic-bezier(0.23, 1, 0.32, 1)`.
2. Convert `@keyframes grow-x` to start at `scaleX(0.25)` with opacity fade and 220ms duration.
3. Replace height animation in `MobileNav.tsx` submenus with CSS grid-template-rows expansion (`grid-template-rows: 0fr -> 1fr`) or direct opacity/transform transitions without reflows.
4. Tighten `OptimizedFooter.tsx` column and banner entrance to `y: 12` with snappy spring `{ type: 'spring', stiffness: 380, damping: 28 }`, and reduce social hover scale to `1.04` gated behind `@media (hover: hover)`.

```css
/* src/app/globals.css — target motion token additions */
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);

  --ease-out-ui: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out-ui: cubic-bezier(0.77, 0, 0.175, 1);

  --duration-feedback: 160ms;
  --duration-dropdown: 200ms;
  --duration-modal: 250ms;
}

@keyframes grow-x {
  from { transform: scaleX(0.25); opacity: 0.3; }
  to { transform: scaleX(1); opacity: 1; }
}
@utility animate-grow-x {
  animation: grow-x 220ms var(--ease-out-ui) forwards;
  transform-origin: left center;
}
```

```tsx
/* src/app/template.tsx — target */
<motion.div
  initial={reduceMotion ? false : isMounted ? { opacity: 0, y: 4 } : false}
  animate={{ opacity: 1, y: 0 }}
  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
  transition={{ duration: reduceMotion ? 0.01 : 0.18, ease: [0.23, 1, 0.32, 1] }}
  className="w-full h-full"
>
```

---

## Repo Conventions to Follow

- Motion CSS variables reside under `:root` in `src/app/globals.css`.
- Motion curve arrays for Framer Motion: `[0.23, 1, 0.32, 1]` for UI entering/exiting, `[0.32, 0.72, 0, 1]` for drawers.
- Exemplar: `src/components/layout/OptimizedHeader.tsx:76` which already uses `ease: [0.23, 1, 0.32, 1]` on dropdown exits.

---

## Steps

1. In `src/app/template.tsx`:
   - Remove `filter: "blur(4px)"` and `filter: "blur(0px)"`.
   - Update `y: 6` / `y: -6` to `y: 4` / `y: -4`.
   - Adjust duration to `0.18s` (180ms) with `[0.23, 1, 0.32, 1]`.
2. In `src/app/globals.css`:
   - Update `@keyframes grow-x` to start at `scaleX(0.25); opacity: 0.3` and finish at `scaleX(1); opacity: 1`.
   - Change `animate-grow-x` duration from `1.1s` to `220ms var(--ease-out-ui)`.
3. In `src/components/layout/MobileNav.tsx`:
   - Refactor the dropdown submenu container (line 129) from `animate={{ opacity: 1, height: 'auto' }}` to use a CSS grid height wrapper:
     ```tsx
     <div className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] ${activeDropdown === item.label ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
       <div className="overflow-hidden pl-4 pr-1 py-1 flex flex-col gap-1">
         {/* subItems */}
       </div>
     </div>
     ```
4. In `src/components/layout/OptimizedFooter.tsx`:
   - Reduce `FOOTER_COL.hidden.y` from `28` to `12`, and update spring to `{ type: 'spring', stiffness: 360, damping: 28 }`.
   - Reduce `BANNER_VARIANT.hidden.y` from `40` to `16`.
   - Change `SOCIAL_HOVER` from `{ y: -4, scale: 1.12 }` to `{ y: -2, scale: 1.04 }`.

---

## Boundaries

- Do NOT alter navigation links, routes, or footer legal metadata.
- Do NOT remove portal logic or focus traps in `MobileNav.tsx`.
- Touch only styling, easing curves, and layout motion properties.

---

## Verification

- **Mechanical**:
  - `pnpm exec tsc --noEmit` exits with code 0.
  - `pnpm exec vitest run` passes all test suites.
- **Feel check**:
  - Open Chrome DevTools Animations panel, set speed to 10%.
  - Navigate between routes: page content transitions crisply in under 200ms with zero blur artifacts or frame stutter.
  - Open mobile navigation drawer and toggle submenus: drawer slides without reflow jerking; accordion expands smoothly at 60fps.
  - Inspect footer social icons: hover scales gently (1.04) without jumping or blurry text rasterization.
- **Done when**: All layout transitions complete under 250ms, with zero layout thrashing on mobile navigation.
