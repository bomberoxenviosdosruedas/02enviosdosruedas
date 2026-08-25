---
name: framer-motion-animations
description: >-
  Use this skill when implementing UI animations, transitions, 3D tilt effects, marquee/infinite carousels, kinetic font stretch, or interactive micro-interactions with Framer Motion (motion/react) or GSAP in React 19 and Next.js 16.
---

# Framer Motion & Interactive Animations Skill

Esta skill define los patrones de animación de alto rendimiento, microinteracciones y efectos 3D para **React 19** y **Next.js 16 App Router** usando `motion/react` y utilidades CSS optimizadas por GPU.

---

## 🚀 1. Reglas de Hidratación y SSR en React 19

En Next.js 16 App Router:
- Añadir `'use client'` al inicio del archivo que contiene animaciones de Framer Motion.
- Para animaciones que dependen del viewport, usar `whileInView` con `viewport={{ once: true, margin: "-50px" }}` para evitar re-triggers innecesarios.
- Para animaciones con estado inicial dinámico, usar `isMounted` o `useReducedMotion` para prevenir saltos de hidratación.

```tsx
'use client';

import { motion } from 'motion/react';

export function FadeInCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

---

## ⚡ 2. Kinetic Font Stretch

Efecto de dilatación tipográfica interactiva en hover para elementos clave de navegación y títulos interactivos.

```tsx
<span className="kinetic-font-stretch font-display uppercase text-2xl text-brand-blue-700 hover:text-brand-blue-500 cursor-pointer">
  Mensajería Express
</span>
```

CSS subyacente en `globals.css`:
```css
.kinetic-font-stretch {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), letter-spacing 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  transform-origin: left;
  will-change: transform, letter-spacing;
}
.kinetic-font-stretch:hover {
  transform: scaleX(1.1);
  letter-spacing: 0.02em;
}
```

---

## 🎴 3. Float / Tilt 3D Cards

Tarjeta con física de inclinación tridimensional sobre el contenedor:

```tsx
'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';

export function FloatTiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 15);
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="transform-style-3d hover:shadow-antigravity-deep transition-shadow duration-300 rounded-2xl"
      >
        {children}
      </motion.div>
    </div>
  );
}
```

---

## 🔄 4. Marquee / Infinite Logos Carousel

Carrusel infinito con pausa en hover y soporte para `prefers-reduced-motion`:

```tsx
<div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
  <div className="flex gap-12 animate-logos-scroll hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] w-max">
    {/* Lista duplicada para loop continuo */}
  </div>
</div>
```

---

## ♿ 5. Accesibilidad (a11y) y Performance

1. **`prefers-reduced-motion`**: Si el usuario tiene reducción de movimiento activada, desactivar rotaciones y transiciones complejas o usar `duration: 0`.
2. **GPU Acceleration**: Animar solo `transform` y `opacity` (`translateY`, `scale`, `rotateX/Y`). Evitar animar `width`, `height`, `margin` o `top/left` para prevenir layout thrashing.
3. **`will-change`**: Usar con moderación en elementos con hover continuo.
