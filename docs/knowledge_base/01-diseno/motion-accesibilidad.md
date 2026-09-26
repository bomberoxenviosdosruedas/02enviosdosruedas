# Motion & Accesibilidad — Envíos DosRuedas

> **Fuente:** `DESIGN.md` §6-8, `src/app/globals.css` (keyframes, `@media prefers-reduced-motion`), `motion/react` usage.

---

## 1. Principios de Motion

| Principio | Regla |
|---|---|
| **Solo transform/opacity** | Nunca animar `top`, `left`, `width`, `height`, `margin`, `padding`, `background`, `color`. |
| **Springs obligatorios** | `stiffness: 100, damping: 20` (o `ease: [0.16, 1, 0.3, 1]`). **No linear easing.** |
| **Hardware acceleration** | `will-change: transform` solo en elementos que animan. |
| **Reduced motion** | **Obligatorio** en todo lo que se mueve. Ver §2. |
| **GSAP aislado** | Solo para scrolltelling/hijack. Componentes hoja con `useEffect` cleanup. |
| **Motion aislado** | `motion/react` en componentes hoja `'use client'` lo más abajo posible. |

---

## 2. `prefers-reduced-motion` (Obligatorio)

### 2.1 En CSS (`globals.css`)

```css
@media (prefers-reduced-motion: reduce) {
  .animate-marquee-left,
  .animate-marquee-right { animation: none !important; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 2.2 En Componentes Motion (`motion/react`)

```tsx
import { useReducedMotion, MotionConfig } from 'motion/react';

// Opción A: Config global (layout.tsx)
<MotionConfig reducedMotion="user">...</MotionConfig>

// Opción B: Por componente
const shouldReduce = useReducedMotion();

<motion.div
  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
  animate={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
/>

// Opción C: whileInView con viewport
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
/>
```

### 2.3 En GSAP

```tsx
import { useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const shouldReduce = useReducedMotion();

useEffect(() => {
  if (shouldReduce) return;
  const ctx = gsap.context(() => {
    // ScrollTrigger.create({...})
    // gsap.to(...)
  }, ref);
  return () => ctx.revert();
}, [shouldReduce]);
```

### 2.4 Qué Debe Colapsar a Estático

| Animación | Comportamiento `reduce` |
|---|---|
| `whileInView` / `initial` → `animate` | Instantáneo (`opacity: 1`, `y: 0`) |
| `animate` loops (`animate-float-slow`, `animate-pulse-subtle`, `animate-marquee-*`) | `animation: none` |
| ScrollTrigger scrub | Sin animación (valores finales) |
| GSAP `to/from` con `scrollTrigger` | Sin animación |
| `FloatTiltCard` tilt | Sin tilt (estático) |
| `kinetic-font-stretch` hover | Sin transform |

---

## 3. Keyframes Globales (`globals.css`)

| Keyframe | Clase Utility | Uso |
|---|---|---|
| `float-slow` (6s ease-in-out) | `.animate-float-slow` | Hero visual flotante |
| `pulse-subtle` (2s ease-in-out) | `.animate-pulse-subtle` | Badges live, dots estado |
| `border-pulse` (2s ease-in-out) | `.animate-border-pulse` | Bordes focus/estado |
| `shimmer` (2.5s ease-in-out) | `.animate-shimmer` | Skeletons, loading |
| `counter-up` (0.6s ease-out) | `.animate-counter-up` | Números animados |
| `logos-scroll` (30s linear infinite) | `.animate-logos-scroll` | Carousel logos partners |

> Todas respetan `@media (prefers-reduced-motion: reduce)` → `animation: none`.

---

## 4. Transiciones Estándar

| Contexto | Transición |
|---|---|
| **Hover/Active botones** | `transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1)` → `active:scale-[.98]` |
| **Hover tarjetas** | `transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1)` → `shadow-antigravity-deep` |
| **Reveal scroll** | `duration: 0.6, ease: [0.16, 1, 0.3, 1]` + `staggerChildren: 0.08` |
| **Knockout rotado** | `transform: rotate(-1deg)` estático, no animado |
| **Chip CTA translate-x** | `transition-transform duration-200 group-hover:translate-x-1` |

---

## 5. Patrones de Animación por Componente

### 5.1 Hero (Entrada)

```tsx
// Izquierda (copy)
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>

// Derecha (visual)
<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
```

### 5.2 Reveal Stagger (Secciones)

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.08 } }
  }}
>
  {children.map((child, i) => (
    <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }} }>
      {child}
    </motion.div>
  ))}
</motion.div>
```

### 5.3 FloatTiltCard (Tilt 3D)

```tsx
// motion/useMotionValue + useTransform
const x = useMotionValue(0);
const y = useMotionValue(0);
const rotateX = useTransform(y, [-100, 100], ['10deg', '-10deg']);
const rotateY = useTransform(x, [-100, 100], ['-10deg', '10deg']);

<motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} onMouseMove={...} onMouseLeave={...}>
```

### 5.4 CTANestedPill (Micro-interacciones)

```css
/* En utility cta-nested-pill (globals.css) */
transition: all 0.25s cubic-bezier(0.25,1,0.5,1);
&:hover { transform: translateY(-1px); }
&:active { transform: scale(0.98); background-color: #E6D400; }

/* Chip icono */
.cta-nested-icon { transition: transform 0.25s; }
.group:hover .cta-nested-icon { transform: translateX(4px); }
```

### 5.5 Marquee (Logos / Texto infinito)

```tsx
<div className="flex animate-marquee-left" aria-hidden="true">
  {logos.map(logo => <img key={logo} src={logo} className="h-8" />)}
  {logos.map(logo => <img key={logo} src={logo} className="h-8" />)}
</div>
```

---

## 6. GSAP + ScrollTrigger (Solo Scrolltelling / Hijack)

### 6.1 Requisitos
- Componente **hoja** (`'use client'`) aislado.
- `useEffect` con `gsap.context()` + cleanup `ctx.revert()`.
- `shouldReduceMotion` gate al inicio del effect.
- **Nunca** `window.addEventListener('scroll', ...)` ni `requestAnimationFrame` tocando React state.

### 6.2 Sticky-Stack (Canónico)

```tsx
'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export function StickyStack({ cards }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>('.stack-card');
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cardEls[cardEls.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.92, opacity: 0.55, ease: 'none',
          scrollTrigger: { trigger: cardEls[i + 1], start: 'top bottom', end: 'top top', scrub: true }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={ref} className="relative">
      {cards.map((card, i) => (
        <div key={i} className="stack-card sticky top-0 min-h-[100dvh] flex items-center justify-center">{card}</div>
      ))}
    </div>
  );
}
```

### 6.3 Horizontal-Pan (Canónico)

```tsx
'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalPan({ children }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: -distance, ease: 'none',
        scrollTrigger: { trigger: wrap.current, start: 'top top', end: () => `+=${distance}`, pin: true, scrub: 1, invalidateOnRefresh: true }
      });
    }, wrap);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={wrap} className="relative overflow-hidden">
      <div ref={track} className="flex h-[100dvh] items-center">{children}</div>
    </section>
  );
}
```

---

## 7. Accesibilidad (WCAG 2.1 AA)

### 7.1 Controles Nativos
- **Siempre** `<button>` para acciones, `<a>` para navegación. **Nunca** `div role="button"`.

### 7.2 Estados de Foco
- `focus-visible:ring-2 ring-brand-blue-500 ring-offset-2` (sobre azul `ring-offset-brand-blue-700`).
- Touch targets **≥ 44×44px** (`min-h-[44px]` en CTAs, `h-11` en inputs).

### 7.3 Formularios
- Label arriba del input (`htmlFor` + `id`).
- Error: `aria-describedby` en input + `role="alert"` en mensaje.
- `InputField` **debe** reenviar `required` y asociar error vía `aria-describedby`.

### 7.4 Íconos Decorativos
- `aria-hidden="true"` en todos los íconos y SVG decorativos.

### 7.5 Motion
- `prefers-reduced-motion` respetado en **todo** (ver §2).
- No auto-play de video/audio sin consentimiento.

### 7.6 Contraste
- Ver `tokens-colores.md` §6. **Texto normal ≥ 4.5:1**, grande/UI ≥ 3.0.

---

## 8. Checklist de Auditoría Motion/A11y

| ✅ | Verificación |
|---|---|
| [ ] Todo componente con `motion/react` usa `useReducedMotion()` o `MotionConfig reducedMotion="user"` |
| [ ] GSAP effects tienen gate `shouldReduceMotion` y cleanup `ctx.revert()` |
| [ ] No `window.addEventListener('scroll')` ni `requestAnimationFrame` tocando state |
| [ ] Touch targets ≥ 44px (CTAs, inputs, botones) |
| [ ] Focus visible en todos los interactivos (ring-2 brand-blue-500) |
| [ ] Formularios: label → input, error con `aria-describedby` + `role="alert"` |
| [ ] Íconos decorativos con `aria-hidden="true"` |
| [ ] Contraste WCAG AA verificado en todos los pares (ver `tokens-colores.md`) |
| [ ] No animación auto-play sin consentimiento |
| [ ] `animate-marquee-*` respeta `prefers-reduced-motion` |