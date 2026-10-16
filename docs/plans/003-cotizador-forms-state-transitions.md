# 003 — Cotizador & Forms State Transitions

- **Status**: DONE
- **Commit**: b8a95d6
- **Severity**: HIGH
- **Category**: Purpose & Frequency / Performance / Missed Opportunities
- **Estimated scope**: 5 files (`src/components/cotizar/unified/CotizadorComparativa.tsx`, `src/components/cotizar/unified/CotizadorForm.tsx`, `src/components/cotizar/unified/CotizadorHero.tsx`, `src/components/cotizar/unified/CotizadorMapa.tsx`, `src/components/revisar/RevisarClient.tsx`), ~65 lines

## Problem

The quotation flow is the core conversion engine of the site. Currently, key calculation transitions are either sluggish or abruptly un-animated:
1. `src/components/cotizar/unified/CotizadorComparativa.tsx:152` uses `{ type: 'spring', stiffness: 100, damping: 20 }` when rendering calculation results. Users waiting for a price calculation experience a floaty, 1-second delay before the card settles.
2. `src/components/cotizar/unified/CotizadorComparativa.tsx:238,295` updates comparison bar widths (`style={{ width: \`\${ancho}%\` }}`) with zero transition. When recalculating or switching addresses, the bar jumps abruptly without spatial continuity.
3. `src/components/revisar/RevisarClient.tsx:248` uses `transition-all duration-200` on catalog cards, violating the "Animate transform and opacity only" rule and triggering unwanted layout property interpolations.
4. `src/components/cotizar/unified/CotizadorForm.tsx` lacks tactile feedback and clear focus rings on address autocomplete suggestions during rapid typing.

### Verbatim Current Code Excerpts

```tsx
/* src/components/cotizar/unified/CotizadorComparativa.tsx:149-153 — current */
initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
transition={shouldReduceMotion ? { duration: 0.15 } : { type: 'spring', stiffness: 100, damping: 20 }}
className="w-full"
```

```tsx
/* src/components/cotizar/unified/CotizadorComparativa.tsx:234-240 — current */
<div
  className={`h-full rounded-full ${
    key === 'express' ? 'bg-brand-yellow-500' : 'bg-brand-blue-500'
  }`}
  style={{ width: `${ancho}%` }}
/>
```

```tsx
/* src/components/revisar/RevisarClient.tsx:248 — current */
className={`rounded-2xl p-5 border-2 transition-all duration-200 flex flex-col justify-between ${
  isReviewed 
    ? 'border-brand-blue-400 bg-brand-white-50/10 shadow-[3px_3px_0px_var(--color-brand-blue-500)]'
    : 'border-brand-blue-100 bg-white hover:border-brand-blue shadow-sm'
}`}
```

---

## Target

Turn calculation and form state changes into immediate, seamless micro-interactions:
1. Replace the floaty result card entrance spring with a snappy curve (`cubic-bezier(0.23, 1, 0.32, 1)`, duration 200ms) with `y: 6px`.
2. Add smooth, GPU-accelerated width or transform interpolation to comparison bars (`transition: width 240ms cubic-bezier(0.23, 1, 0.32, 1)`).
3. Replace `transition-all` in `RevisarClient.tsx` with specific properties (`transition: border-color 160ms var(--ease-out-ui), box-shadow 160ms var(--ease-out-ui), background-color 160ms var(--ease-out-ui)`).
4. Ensure error alerts pop in rapidly (`duration: 150ms`) with subtle `y: -4px` offset.

```tsx
/* Target: Cotizador Comparison Result Transition */
transition={shouldReduceMotion ? { duration: 0.05 } : { duration: 0.2, ease: [0.23, 1, 0.32, 1] }}

/* Target: Smooth Bar Interpolation */
style={{
  width: `${ancho}%`,
  transition: shouldReduceMotion ? 'none' : 'width 240ms cubic-bezier(0.23, 1, 0.32, 1)',
}}
```

---

## Repo Conventions to Follow

- Quotation logic and promises (`EXPRESS_CUTOFF_TIME`, `LOWCOST_CUTOFF_TIME`, `STANDARD_WEIGHT_KG`) must remain completely untouched.
- Error alerts use `role="alert"` and `aria-live="assertive"`.
- Use the project's canonical easing tokens `--ease-out-ui` in CSS and `[0.23, 1, 0.32, 1]` in Framer Motion.

---

## Steps

1. In `src/components/cotizar/unified/CotizadorComparativa.tsx`:
   - Change line 152 result entrance transition from `{ type: 'spring', stiffness: 100, damping: 20 }` to `{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }`.
   - Update lines 238 and 295 by adding inline CSS transition:
     `transition: shouldReduceMotion ? 'none' : 'width 240ms cubic-bezier(0.23, 1, 0.32, 1)'`.
   - Update error banner exit transition to `duration: 0.15, ease: [0.23, 1, 0.32, 1]`.
2. In `src/components/revisar/RevisarClient.tsx`:
   - Replace `transition-all duration-200` at line 248 with `transition-[border-color,background-color,box-shadow] duration-160 ease-out`.
   - Ensure the submit feedback button includes `active:scale-[0.97] transition-transform duration-160`.
3. In `src/components/cotizar/unified/CotizadorForm.tsx`:
   - Ensure input focus rings transition with `transition-[border-color,box-shadow] duration-150 ease-out`.

---

## Boundaries

- Do NOT modify quotation calculations, pricing tiers, or distance thresholds (>20 km 'consultar').
- Do NOT modify WhatsApp URL generation parameters or tracking hooks.
- Limit changes strictly to transitions, easing, and visual state timing.

---

## Verification

- **Mechanical**:
  - `pnpm exec tsc --noEmit` exits with 0 errors.
  - `pnpm exec vitest run src/test/pricing.test.ts` passes.
- **Feel check**:
  - Calculate a quote between two Mar del Plata points: the price card appears promptly in 200ms without wobble.
  - Change addresses: the price comparison bar glides smoothly to its new width instead of blinking/jumping.
  - Trigger an error (e.g. out-of-bounds address): error message fades in immediately and dismisses cleanly.
- **Done when**: Quotation tool feels instantaneous and comparison bars animate smoothly without layout thrashing.
