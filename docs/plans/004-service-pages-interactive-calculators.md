# 004 — Service Pages & Interactive Calculators

- **Status**: DONE
- **Commit**: b8a95d6
- **Severity**: MEDIUM
- **Category**: Performance / Physicality & Origin / Missed Opportunities
- **Estimated scope**: 5 files (`src/components/servicios/express/ExpressHeroCollage.tsx`, `src/components/servicios/flex/FlexFeatures.tsx`, `src/components/servicios/flex/FlexHowItWorks.tsx`, `src/components/servicios/lowcost/LowCostFeatures.tsx`, `src/components/servicios/emprendedores/DropoffCalculator.tsx`), ~70 lines

## Problem

Service pages feature interactive components with style recalculation bottlenecks and non-tactile controls:
1. `src/components/servicios/express/ExpressHeroCollage.tsx:180-181` drives parallax transforms by mutating `--mx` and `--my` CSS custom variables on the parent container element (`el.style.setProperty('--mx', ...)`). According to Kowalski's performance audit rules, setting CSS variables on parent elements forces full style recalculations across all DOM descendants on every pointer frame.
2. `src/components/servicios/emprendedores/DropoffCalculator.tsx:102-127` has interactive plus/minus buttons and monthly preset pills (`10/mes`, `30/mes`, `50/mes`) that completely lack active press feedback (`active:scale-[0.97]`). Clicking feels lifeless and lacks physical confirmation.
3. Feature list cards in `FlexFeatures.tsx` and `LowCostFeatures.tsx` use arbitrary hover translation without `@media (hover: hover)` guards, causing sticky hover artifacts on mobile touch taps.

### Verbatim Current Code Excerpts

```tsx
/* src/components/servicios/express/ExpressHeroCollage.tsx:179-184 — current */
if (!raf) {
  raf = requestAnimationFrame(() => {
    el.style.setProperty('--mx', nx.toFixed(3));
    el.style.setProperty('--my', ny.toFixed(3));
    raf = 0;
  });
}
```

```tsx
/* src/components/servicios/emprendedores/DropoffCalculator.tsx:102-109 — current */
<button
  type="button"
  onClick={() => apply(envios + 1)}
  aria-label="Sumar un envío"
  className="shrink-0 w-12 min-h-11 flex items-center justify-center text-brand-blue-700 hover:bg-brand-blue-50 active:bg-brand-blue-100 transition-colors cursor-pointer"
>
  <Plus className="h-4 w-4" aria-hidden="true" />
</button>
```

```tsx
/* src/components/servicios/emprendedores/DropoffCalculator.tsx:119-123 — current */
className={`min-h-11 px-4 rounded-full font-mono text-sm tabular-nums border-2 transition-colors cursor-pointer ${
  envios === n
    ? 'bg-brand-blue-700 text-brand-yellow-500 border-brand-blue-700'
    : 'bg-white text-brand-blue-700 border-brand-blue-300 hover:border-brand-blue-700'
}`}
```

---

## Target

1. In `ExpressHeroCollage.tsx`, target individual tile refs directly or apply transforms directly to the animated tile wrappers via `transform: translate3d(...)` on rAF, avoiding parent CSS variable mutations that trigger subtree style recalcs.
2. In `DropoffCalculator.tsx`, equip all stepper buttons and preset buttons with tactile `active:scale-[0.97]` feedback with `transition: transform 160ms var(--ease-out-ui)`.
3. Wrap hover lifts on service feature cards in `@media (hover: hover)` or Tailwind `hover:` scoped classes that prevent mobile tap stickiness.

```css
/* Target Button Touch Press Feedback */
.stepper-btn {
  transition: transform var(--duration-feedback) var(--ease-out-ui), background-color var(--duration-feedback) var(--ease-out-ui);
}
.stepper-btn:active {
  transform: scale(0.97);
}
```

---

## Repo Conventions to Follow

- Retain `@number-flow/react` in `DropoffCalculator.tsx` for animated counter numbers (already performs well).
- Respect `useReducedMotion()` to deactivate parallax and transforms on low-motion preference.
- All press feedback must stay subtle: `scale(0.97)`, duration 160ms.

---

## Steps

1. In `src/components/servicios/express/ExpressHeroCollage.tsx`:
   - Store tile element references in an array of refs (`tileRefs.current`).
   - In the `pointermove` rAF loop, write `translate3d(x, y, 0)` directly onto each tile's style property rather than `--mx`/`--my` on the parent node.
2. In `src/components/servicios/emprendedores/DropoffCalculator.tsx`:
   - Add `active:scale-[0.97] transition-[transform,background-color] duration-160 ease-out` to the minus button, plus button, and preset buttons.
   - Ensure the total savings card has a subtle pulse or transition when values update.
3. In `src/components/servicios/flex/FlexFeatures.tsx` and `LowCostFeatures.tsx`:
   - Verify all card hover lifts have `transition: transform 200ms var(--ease-out-ui)` and are inactive under touch.

---

## Boundaries

- Do NOT alter pricing calculations or discount formulas (`DROPOFF_DISCOUNT_PERCENT`, `SAVINGS_PER_UNIT`).
- Do NOT change service requirements, schedules, or cut-off times.
- Keep the collage layout and visual assets identical.

---

## Verification

- **Mechanical**:
  - `pnpm exec tsc --noEmit` exits with code 0.
  - `pnpm exec vitest run src/test/pricing.test.ts` passes.
- **Feel check**:
  - Move mouse across Express hero: parallax glides with 0 style recalculation warnings in Performance panel.
  - In DropoffCalculator, tap "+", "-", and presets: buttons depress noticeably (scale 0.97) under the finger and release instantly.
  - Touch test on simulated mobile device: cards don't stay stuck in hover state after tapping.
- **Done when**: Service pages feel interactive, responsive to touch, and free of unnecessary DOM style recalcs.
