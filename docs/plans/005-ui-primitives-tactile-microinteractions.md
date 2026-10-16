# 005 — UI Primitives & Tactile Micro-Interactions

- **Status**: DONE
- **Commit**: b8a95d6
- **Severity**: HIGH
- **Category**: Performance / Physicality & Origin / Easing & Duration
- **Estimated scope**: 6 files (`src/components/ui/CTANestedPill.tsx`, `src/components/ui/DoubleBezelCard.tsx`, `src/components/ui/FloatTiltCard.tsx`, `src/components/ui/RadioCardGroup.tsx`, `src/components/ui/StepperHorizontal.tsx`, `src/components/ui/timeline-animation.tsx`), ~90 lines

## Problem

The core UI primitives that every page and component imports contain several high-severity motion anti-patterns:
1. `src/components/ui/FloatTiltCard.tsx:50-69` calls `setTransformStyle(...)` React state inside the raw `mousemove` listener. This triggers 60 to 120 full React component re-renders per second along with all nested children whenever the cursor moves over a 3D card.
2. `src/components/ui/FloatTiltCard.tsx:98-102` combines inline transition style strings (`transform 0.1s cubic-bezier(...)`) with Tailwind `transition-all duration-300`, causing competing transitions and animating off-GPU CSS properties.
3. `src/components/ui/timeline-animation.tsx:12,18,58` configures springs with `stiffness: 80, damping: 18` and `stiffness: 70, damping: 16`. These springs are underdamped and sluggish (taking over 1.2s to finish oscillating). Lines 36 & 43 define entrance durations of `0.7s` and `0.6s`, violating the 300ms UI duration rule.
4. `src/components/ui/CTANestedPill.tsx:54,87` relies on `transition-all duration-200` on both the pill wrapper and icon chip.

### Verbatim Current Code Excerpts

```tsx
/* src/components/ui/FloatTiltCard.tsx:50-68 — current */
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (disabled || reducedMotion || !cardRef.current) return;
  ...
  setTransformStyle(
    `translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
  );
};
```

```tsx
/* src/components/ui/FloatTiltCard.tsx:97-105 — current */
style={{
  transformStyle: 'preserve-3d',
  transform: isHovered
    ? transformStyle || 'translateY(-6px) rotateX(4deg) rotateY(-2deg)'
    : 'translateY(0px) rotateX(0deg) rotateY(0deg)',
  transition: isHovered
    ? 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease-out'
    : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease-out',
}}
className={cn(
  'relative transition-all duration-300',
  isHovered && 'shadow-antigravity-deep',
  className
)}
```

```tsx
/* src/components/ui/timeline-animation.tsx:10-25 — current */
fadeUp: {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
} as Variants,

slideLeft: {
  hidden:  { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70, damping: 16 } },
} as Variants,
```

```tsx
/* src/components/ui/CTANestedPill.tsx:54 — current */
const baseStyles =
  'cta-nested-pill group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none border';
```

---

## Target

1. Refactor `FloatTiltCard.tsx` to completely bypass React state during mouse moves: apply transforms directly to `cardRef.current.style.transform` inside `requestAnimationFrame`. Purge `transition-all`.
2. Rewrite `timeline-animation.tsx` presets to use crisp, snappy parameters:
   - `fadeUp`: `y: 12`, spring `{ type: 'spring', stiffness: 360, damping: 28 }`.
   - `slideLeft`/`slideRight`: `x: ±16`, spring `{ type: 'spring', stiffness: 360, damping: 28 }`.
   - `blurIn`: reduce duration from `0.7s` to `0.22s` with strong curve `cubic-bezier(0.23, 1, 0.32, 1)`.
   - `clipUp`: reduce duration from `0.6s` to `0.25s` with `cubic-bezier(0.23, 1, 0.32, 1)`.
3. In `CTANestedPill.tsx`, replace `transition-all` with targeted GPU transitions:
   `transition: transform 160ms var(--ease-out-ui), background-color 160ms var(--ease-out-ui), border-color 160ms var(--ease-out-ui), box-shadow 160ms var(--ease-out-ui)`.

```tsx
/* Target: FloatTiltCard 60fps transform handling */
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (disabled || reducedMotion || !cardRef.current) return;
  const rect = cardRef.current.getBoundingClientRect();
  const xPct = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
  const yPct = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  const rotX = (yPct * -6).toFixed(2);
  const rotY = (xPct * 6).toFixed(2);

  if (!rafRef.current) {
    rafRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `translateY(-4px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }
      rafRef.current = 0;
    });
  }
};
```

---

## Repo Conventions to Follow

- Primitives in `src/components/ui/` are universal across the entire application.
- Retain all accessibility attributes (`role="radio"`, `aria-checked`, keyboard handlers).
- Never break existing component prop signatures.

---

## Steps

1. In `src/components/ui/FloatTiltCard.tsx`:
   - Remove `transformStyle` state and `setTransformStyle` call.
   - Use `requestAnimationFrame` + direct DOM style mutation via `cardRef`.
   - Clean up conflicting CSS classes: remove `transition-all duration-300`, keeping only `transition: box-shadow 200ms ease-out`.
2. In `src/components/ui/timeline-animation.tsx`:
   - Replace slow spring configs (stiffness 70-85) with `{ type: 'spring', stiffness: 360, damping: 28 }`.
   - Cap translations at `y: 12` and `x: 16`.
   - Shorten `blurIn` and `clipUp` durations to `<= 250ms` using `[0.23, 1, 0.32, 1]`.
3. In `src/components/ui/CTANestedPill.tsx`:
   - Replace `transition-all duration-200` with `transition-[transform,background-color,border-color,box-shadow] duration-160 ease-out`.
   - In `iconChipBase`, replace `transition-all duration-200` with `transition-transform duration-160 ease-out`.
4. In `src/components/ui/RadioCardGroup.tsx`:
   - Ensure card selection transitions with `scale(0.98)` active press and `transition: border-color 160ms var(--ease-out-ui), background-color 160ms var(--ease-out-ui)`.

---

## Boundaries

- Do NOT change variant definitions or color tokens of `CTANestedPill`.
- Do NOT alter timeline sequence triggers or children layout structures.
- Touch only styling, easing curves, rAF loops, and transition properties.

---

## Verification

- **Mechanical**:
  - `pnpm exec tsc --noEmit` passes with 0 errors.
  - `pnpm exec vitest run src/test/ui-primitives.test.ts` (or component test) passes.
- **Feel check**:
  - Hover over a `FloatTiltCard` in React DevTools Profiler: moving the mouse over the card produces **zero** React render passes.
  - Click CTANestedPill buttons: immediate tactile response with scale(0.97) feedback and arrow chip translation.
  - Trigger any timeline-animated section: content settles immediately without wobbly oscillations.
- **Done when**: UI primitives are completely decoupled from setState on pointer events and have snappy <= 250ms transitions.
