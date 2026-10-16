# 002 — Home & Landing Page Motion Choreography

- **Status**: DONE
- **Commit**: b8a95d6
- **Severity**: HIGH
- **Category**: Easing & Duration / Physicality & Origin / Performance
- **Estimated scope**: 5 files (`src/components/home/ServicesOverview.tsx`, `src/components/home/EmprendedoresHome.tsx`, `src/components/home/CtaSection.tsx`, `src/components/home/HeroAnimado.tsx`, `src/components/layout/CarruselRedes.tsx`), ~80 lines

## Problem

Home page sections suffer from sluggish spring physics, infinite GPU-draining loops, and over-animated typography:
1. `src/components/home/ServicesOverview.tsx:382-387` runs an infinite `scale: [1, 1.05, 1]` loop on a 125x125 blur-3xl div, draining battery and keeping the GPU compositor constantly active.
2. `src/components/home/ServicesOverview.tsx:402`, `EmprendedoresHome.tsx:22`, and `CtaSection.tsx:38` all define `{ type: 'spring', stiffness: 100, damping: 20 }`. Stiffness 100 is excessively soft and underdamped, taking over 800ms to settle and making section entrances feel mushy and slow.
3. `src/components/home/EmprendedoresHome.tsx:13-60` splits an entire descriptive paragraph into individual words (`words.map(...)`) and renders a staggered `motion.span` for each word. This clutters the DOM with tens of motion nodes and delays text comprehension.
4. `src/components/home/HeroAnimado.tsx:115-124` defines rings with `animate-pulse-ring` expanding from `scale(0.6)` to `scale(3.2)`, where extreme scale expansion distorts stroke widths.

### Verbatim Current Code Excerpts

```tsx
/* src/components/home/ServicesOverview.tsx:382-387 — current */
<motion.div
  className="absolute bottom-0 right-0 w-125 h-125 bg-brand-yellow-500/5 rounded-full blur-3xl pointer-events-none"
  aria-hidden="true"
  animate={reduceMotion ? {} : { scale: [1, 1.05, 1] }}
  transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
/>
```

```tsx
/* src/components/home/EmprendedoresHome.tsx:22-45 — current */
const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reduceMotion ? { duration: 0.01 } : springTransition,
  },
};
```

```tsx
/* src/components/home/CtaSection.tsx:38-59 — current */
const springConfig = { type: 'spring' as const, stiffness: 100, damping: 20 };

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: reduceMotion ? { duration: 0.01 } : springConfig,
  },
};
```

---

## Target

Align the landing experience with Emil Kowalski's guidelines:
1. Replace infinite scale loop on large blurred surfaces with a static lightweight radial gradient.
2. Standardize all section entrance springs to snappy values: `{ type: 'spring', stiffness: 360, damping: 28 }` with translation distance constrained to `y: 12-16px`.
3. Eliminate word-by-word splitting in `EmprendedoresHome.tsx`; animate the paragraph as a single cohesive block with `opacity` and subtle `y: 8px` translation.
4. Constrain `pulse-ring` keyframes in `globals.css` to `scale(0.85)` to `scale(1.8)` so line weight stays visually consistent.

```tsx
/* Target: Snappy Kowalski Spring Config */
const KOWALSKI_SPRING = { type: 'spring' as const, stiffness: 360, damping: 28 };
const KOWALSKI_ITEM_VARIANT = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: KOWALSKI_SPRING,
  },
};
```

---

## Repo Conventions to Follow

- Use `useReducedMotion()` from `motion/react` to disable spatial transforms when requested.
- Entrance animations should trigger once with `viewport={{ once: true, margin: '-40px' }}`.
- Exemplar: `src/components/layout/OptimizedHeader.tsx:74` (`stiffness: 420, damping: 28`).

---

## Steps

1. In `src/components/home/ServicesOverview.tsx`:
   - Replace the animated `scale: [1, 1.05, 1]` div with a static `div` containing `bg-[radial-gradient(circle_at_bottom_right,rgba(255,236,1,0.06),transparent_70%)]`.
   - Update header entrance `transition` (line 402) from `{ type: 'spring', stiffness: 100, damping: 20 }` to `{ type: 'spring', stiffness: 360, damping: 28 }`.
   - Adjust carousel arrow tap scale from `0.95` to `0.97`.
2. In `src/components/home/EmprendedoresHome.tsx`:
   - Replace `springTransition` with `{ type: 'spring' as const, stiffness: 360, damping: 28 }`.
   - Reduce `itemVariants.hidden.y` from `30` to `12`.
   - Remove `words.map(...)` word split loop; render `descriptionText` inside a single `motion.p` using `itemVariants`.
3. In `src/components/home/CtaSection.tsx`:
   - Update `springConfig` from `stiffness: 100, damping: 20` to `stiffness: 360, damping: 28`.
   - Reduce `itemVariants.hidden.y` from `24` to `12`.
4. In `src/components/layout/CarruselRedes.tsx`:
   - Ensure the social carousel paused state uses `transition: transform 200ms var(--ease-out-ui)` when hovered rather than abrupt stops.

---

## Boundaries

- Do NOT alter any business copy, marketing badges, or phone/WhatsApp numbers.
- Do NOT alter carousel keyboard navigation logic or ARIA attributes.
- Keep all visual styles and layout grids intact.

---

## Verification

- **Mechanical**:
  - `pnpm exec tsc --noEmit` exits with 0 errors.
  - `pnpm test:ci` passes.
- **Feel check**:
  - Scroll through the landing page: sections pop into view crisply in under 250ms with zero lingering rubber-banding.
  - Check browser GPU utilization in Chrome Task Manager: idling on the Services Overview section drops to near 0% CPU/GPU.
  - Inspect Emprendedores paragraph: text is immediately legible without waiting for staggered word fades.
- **Done when**: Landing page feel is crisp, energetic, and free of sluggish spring oscillations.
