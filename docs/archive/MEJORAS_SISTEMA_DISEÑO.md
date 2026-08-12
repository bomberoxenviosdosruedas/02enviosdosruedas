# 🔧 MEJORAS A REALIZAR: SISTEMA DE DISEÑO
## Plan de Acción Detallado | Envíos DosRuedas | 2026

---

## RESUMEN EJECUTIVO

Este documento detalla **103 cambios específicos** organizados en **4 fases** para optimizar el sistema de diseño de Envíos DosRuedas de documentación teórica a sistema operacional.

**Tiempo total:** ~260 horas (2.5 meses)  
**Equipos:** 2 devs + 1 PM + 1 QA  
**Riesgo:** Bajo (cambios aditivos, no destructivos)  
**ROI:** -40% time-to-market features visuales

---

## FASE 1: FOUNDATIONS (Semanas 1-3)

### 1.1 Extraer Componentes Canonicales

#### **Cambio 1.1.1: Crear DoubleBezelCard.tsx**
**Ubicación:** `src/components/ui/DoubleBezelCard.tsx` (NUEVA)

**Código:**
```typescript
import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const doubleBezelVariants = cva(
  'bg-brand-blue-50 border border-brand-blue-100 rounded-4xl p-2 shadow-float transition-all duration-400 ease-smooth',
  {
    variants: {
      hoverEffect: {
        lift: 'hover:shadow-antigravity-deep hover:border-brand-blue-300 hover:-translate-y-1',
        none: '',
      },
    },
    defaultVariants: {
      hoverEffect: 'none',
    },
  }
);

export interface DoubleBezeleCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof doubleBezelVariants> {
  children: React.ReactNode;
}

export const DoubleBezelCard = React.forwardRef<
  HTMLDivElement,
  DoubleBezeleCardProps
>(({ className, hoverEffect, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(doubleBezelVariants({ hoverEffect }), className)}
  >
    <div className="bg-white rounded-3xl p-6 shadow-inner overflow-hidden">
      {props.children}
    </div>
  </div>
));

DoubleBezelCard.displayName = 'DoubleBezelCard';
```

**Verificación:**
- [ ] TypeScript sin errores
- [ ] Props documentadas con JSDoc
- [ ] Tailwind classes aplicadas exactamente como DESIGN.md
- [ ] Tested en light + dark mode

**Tests a crear:**
```typescript
// src/components/ui/__tests__/DoubleBezelCard.test.tsx
describe('DoubleBezelCard', () => {
  it('renders with correct bg-blue-50 and border-blue-100', () => {
    // snapshot test
  });
  it('applies hover-lift variant correctly', () => {
    // interaction test
  });
  it('works in dark mode', () => {
    // dark mode test
  });
});
```

---

#### **Cambio 1.1.2: Crear CTANestedPill.tsx**
**Ubicación:** `src/components/ui/CTANestedPill.tsx` (NUEVA)

**Variantes a soportar:** primary | elevated | outline | ghost

```typescript
import React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const ctaVariants = cva(
  'inline-flex items-center justify-between gap-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-300',
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-yellow-500 text-brand-blue-900 border border-brand-yellow-500',
          'hover:shadow-cta-glow hover:bg-brand-yellow-400',
          'active:scale-98 active:translate-y-0.5',
        ].join(' '),
        elevated: [
          'bg-white text-brand-blue-700 border border-brand-blue-100',
          'shadow-elevated hover:shadow-hover-lift hover:-translate-y-1',
          'active:scale-98',
        ].join(' '),
        outline: [
          'bg-transparent text-brand-blue-700 border border-brand-blue-700',
          'hover:bg-brand-blue-50',
        ].join(' '),
        ghost: [
          'bg-transparent text-brand-blue-700 border-transparent',
          'hover:bg-brand-blue-50',
        ].join(' '),
      },
      size: {
        sm: 'px-4 py-2',
        md: 'px-6 py-3',
        lg: 'px-8 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface CTANestedPillProps 
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'elevated' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: string;
}

export const CTANestedPill = React.forwardRef<
  HTMLAnchorElement,
  CTANestedPillProps
>(({ className, variant, size, icon, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(ctaVariants({ variant, size }), className)}
    {...props}
  >
    <span>{children}</span>
    {icon && (
      <span className="w-8 h-8 rounded-full bg-brand-blue-700/10 text-brand-blue-700 flex items-center justify-center group-hover:translate-x-1 transition-transform">
        {icon}
      </span>
    )}
  </a>
));

CTANestedPill.displayName = 'CTANestedPill';
```

**Cambios en codebase actual:**
- [ ] Buscar todos los `<a class="...cta-nested-pill...">` en codebase
- [ ] Reemplazar con `<CTANestedPill variant="primary">Cotizá</CTANestedPill>`
- [ ] Verificar que classNames inline desaparezcan

---

#### **Cambio 1.1.3: Crear BadgeSystem.tsx**
**Ubicación:** `src/components/ui/Badge.tsx` (NUEVA)

```typescript
const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider border',
  {
    variants: {
      variant: {
        urgent: 'bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-500',
        secure: 'bg-brand-blue-700 text-white border-brand-blue-700',
        economic: 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-100',
        flex: 'bg-brand-yellow-50 text-brand-blue-700 border-brand-yellow-100',
        neutral: 'bg-white text-brand-blue-400 border-brand-blue-100',
        outline: 'bg-transparent text-brand-blue-700 border-brand-blue-700',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  }
);
```

**Reemplazo en codebase:**
- [ ] `<span class="badge badge--urgent">` → `<Badge variant="urgent">`
- [ ] Todas las instancias convertidas

---

#### **Cambio 1.1.4: Crear RadioCardGroup.tsx**
**Ubicación:** `src/components/ui/RadioCardGroup.tsx` (NUEVA)

Componentes internos:
- `RadioCardGroup` (wrapper)
- `RadioCard` (individual card)
- `RadioCardIcon` (icon container)

**Props:**
```typescript
interface RadioCardGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

interface RadioCardProps {
  value: string;
  icon?: React.ReactNode;
  badge?: string;
  subtitle?: string;
  title: string;
  description: string;
  metadata: Array<{ label: string; value: string }>;
}
```

**Cambios en web:**
- [ ] Componentes de selección de servicio (Express/LowCost/Flex) convertidos a `<RadioCard>`

---

#### **Cambio 1.1.5: Crear VerticalStepper.tsx**
**Ubicación:** `src/components/ui/VerticalStepper.tsx` (NUEVA)

```typescript
interface VerticalStepperProps {
  steps: Array<{
    number: string;
    title: string;
    description: string;
    status: 'completed' | 'active' | 'pending';
  }>;
}
```

**Especificación:**
- Línea vertical 2px `brand-blue-100` a la izquierda
- Dots 24px con border blanco 3px
- Completed: `brand-yellow-500` + `brand-yellow-100` ring (NUNCA verde)
- Active: pulse animation
- Pending: `brand-blue-100`

**Cambios:**
- [ ] Sección "How It Works" reutiliza este componente
- [ ] Verificar que NO use verde en completados

---

### 1.2 Crear Pre-Flight Checklist Template

#### **Cambio 1.2.1: Crear .github/DESIGN_SYSTEM_CHECKLIST.md**
**Ubicación:** `.github/DESIGN_SYSTEM_CHECKLIST.md` (NUEVA)

**Contenido:**
```markdown
# Design System Pre-Flight Checklist

**NO MERGEAR sin pasar todos los checkboxes.**

## Colores
- [ ] Cero instancias de `#[0-9a-f]{6}` inline arbitrarios
- [ ] Cero uso de `slate-*`, `gray-*`, `zinc-*`, `neutral-*`, `stone-*`
- [ ] Todos los colores vienen de `brand-blue-*`, `brand-yellow-*`, `brand-white-*`
- [ ] Dark mode testado: variables de color invierten correctamente

## Tipografía
- [ ] `text-display`: solo `<h1>` en hero, uppercase + text-wrap balance
- [ ] `text-h1`/`text-h2`: secciones, uppercase
- [ ] `text-body`: párrafos, legibilidad ≥ 16px en mobile
- [ ] `font-mono`: solo Geist Mono, `font-variant-numeric: tabular-nums` en números

## Copy (Voseo)
- [ ] Verbo principal: "Cotizá", "Enviá", "Rastreá", "Contactanos", "Ingresá"
- [ ] Pronombre: "Vos" o "Tu", jamás "Usted" o "Su"
- [ ] Expresiones locales: "Al toque", "Quedate tranquilo", "Te avisamos"
- [ ] Referencias MDQ: Mínimo 1 referencia (Güemes, Friuli 1972, Playa Grande, etc.)
- [ ] No hay gerundios forzados o clichés ("Elevá", "Desbloquea", "Unleash")

## Componentes
- [ ] Tarjetas en sección blanca: usan `<DoubleBezelCard>`
- [ ] CTAs: usan `<CTANestedPill variant="primary|elevated|outline|ghost">`
- [ ] Badges: usan `<Badge variant="urgent|secure|..."`
- [ ] Steppers: usan `<VerticalStepper>` (sin verde en completados)
- [ ] Inputs: `border-2 border-brand-blue-100`, focus `border-brand-blue-700 ring-brand-blue-500/20`

## Animaciones
- [ ] Motion: reducen duración a ~0ms bajo `prefers-reduced-motion: reduce`
- [ ] GSAP: `if (!prefers-reduced-motion)` guard
- [ ] Transiciones: usan tokens de `easings` (ease-smooth, ease-out, etc.)
- [ ] No hay animaciones infinitas en componentes estáticos (solo en carousels/marquees)

## Accesibilidad
- [ ] Focus visible: `ring-2 ring-brand-blue-500 ring-offset-2` en light, `ring-offset-brand-blue-700` en dark
- [ ] Contrast check: WCAG AA mínimo (4.5:1 para body, 3:1 para large)
- [ ] Alt text: cada imagen `<img>` tiene `alt=""` con descripción significativa
- [ ] Touch targets: botones, links ≥ 44×44px
- [ ] Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`

## Dark Mode
- [ ] Página testada en `prefers-color-scheme: dark`
- [ ] Sombras se invierten (less contrast, darker blur)
- [ ] Gradientes legibles
- [ ] No hay secciones que "flippeen" entre light/dark

## Performance
- [ ] Lighthouse Performance ≥ 85
- [ ] Lighthouse Accessibility ≥ 90
- [ ] CLS < 0.1
- [ ] LCP < 2.5s

## Final
- [ ] Cambios testados en mobile (375px), tablet (768px), desktop (1280px)
- [ ] Design matches DESIGN.md v2.1
```

**Uso en PR:**
Agregar a la descripción de cada PR:

```markdown
## Design System Checklist
- [ ] Colores
- [ ] Tipografía
- [ ] Copy (Voseo)
- [ ] Componentes
- [ ] Animaciones
- [ ] Accesibilidad
- [ ] Dark Mode
- [ ] Performance
```

---

#### **Cambio 1.2.2: Crear husky + lint-staged**
**Ubicación:** `.husky/pre-commit` (NUEVA)

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Lint color compliance
npm run lint:colors

# Lint voseo compliance
npm run lint:voseo

# Run tests
npm test -- --bail --findRelatedTests

# Check design tokens
npm run validate:design-tokens
```

**Agregar a package.json:**
```json
{
  "scripts": {
    "lint:colors": "rg \"#[0-9a-f]{3,6}\" src/ | rg -v \"brand-\" && exit 1 || true",
    "lint:voseo": "rg \"(cotice|contáctenos|ingrese|envíe|rastree)\" src/ | rg -v \".md\" && exit 1 || true",
    "validate:design-tokens": "node scripts/validate-tokens.js"
  },
  "husky": {
    "hooks": {
      "pre-commit": ".husky/pre-commit"
    }
  },
  "lint-staged": {
    "src/**/*.{ts,tsx}": "eslint --fix",
    "src/**/*.css": "prettier --write"
  }
}
```

---

### 1.3 Configurar Storybook Básico

#### **Cambio 1.3.1: Inicializar Storybook**
```bash
npx storybook@latest init
```

**Archivos a crear:**

1. `.storybook/preview.ts` - Configuración global
```typescript
import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'blue-50', value: '#E6EEFE' },
        { name: 'blue-700', value: '#0636A5' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
```

2. `src/components/ui/DoubleBezelCard.stories.tsx`
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { DoubleBezelCard } from './DoubleBezelCard';

const meta = {
  component: DoubleBezelCard,
  title: 'UI/DoubleBezelCard',
  argTypes: {
    hoverEffect: {
      control: { type: 'radio', options: ['none', 'lift'] },
    },
  },
} satisfies Meta<typeof DoubleBezelCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="font-bold text-brand-blue-700 mb-2">Sample Card</h3>
        <p className="text-sm text-brand-blue-400">Content goes here</p>
      </div>
    ),
    hoverEffect: 'none',
  },
};

export const WithHoverLift: Story = {
  args: {
    ...Default.args,
    hoverEffect: 'lift',
  },
};

export const DarkMode: Story = {
  ...Default,
  parameters: {
    backgrounds: { default: 'blue-700' },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
```

---

#### **Cambio 1.3.2: Crear stories para todos los componentes de UI**
- `CTANestedPill.stories.tsx` (4 variantes)
- `Badge.stories.tsx` (6 variantes)
- `RadioCardGroup.stories.tsx`
- `VerticalStepper.stories.tsx`
- `Input.stories.tsx`
- `Button.stories.tsx` (existing component)

**Expectativa:** 20+ stories completadas antes de fin de Fase 1

---

### 1.4 Crear Design Tokens YAML Export

#### **Cambio 1.4.1: Crear tokens.json**
**Ubicación:** `src/tokens/tokens.json` (NUEVA)

```json
{
  "color": {
    "primary": { "value": "#0636A5", "description": "Brand blue, primary color" },
    "primary-hover": { "value": "#052D8C" },
    "accent": { "value": "#FFEC01" },
    "surface": { "value": "#FFFFFF" }
  },
  "typography": {
    "display": { "value": "clamp(3rem, 5vw, 4.5rem)" },
    "h1": { "value": "clamp(2.25rem, 4vw, 3rem)" }
  },
  "shadow": {
    "sm": { "value": "0 2px 4px rgba(6,54,165,0.06)" },
    "float": { "value": "0 25px 50px -12px rgba(6,54,165,0.15)" }
  }
}
```

Exportar a:
- `design-tokens.js` para Figma tokens plugin
- `design-tokens.css` para fallback
- `design-tokens.ts` para código

---

## FASE 2: MOTION + DARK MODE (Semanas 4-7)

### 2.1 Implementar Motion Components Canonicales

#### **Cambio 2.1.1: Crear RevealOnScroll.tsx**
**Ubicación:** `src/components/motion/RevealOnScroll.tsx` (NUEVA)

```typescript
'use client';

import { motion, useReducedMotion } from 'motion/react';
import React from 'react';

export interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  variant?: 'fade-up' | 'fade-in' | 'scale-in';
}

export function RevealOnScroll({
  children,
  delay = 0,
  variant = 'fade-up',
}: RevealOnScrollProps) {
  const reduceMotion = useReducedMotion();

  const variants = {
    'fade-up': {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
    },
    'fade-in': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    'scale-in': {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial={reduceMotion ? false : variants[variant].initial}
      whileInView={reduceMotion ? false : variants[variant].animate}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)', // ease-smooth
      }}
    >
      {children}
    </motion.div>
  );
}
```

**Cambios en codebase:**
- [ ] Buscar `IntersectionObserver` implementations para scroll-reveals
- [ ] Reemplazar con `<RevealOnScroll>` (más ligero)
- [ ] Testar en light + dark + reduced-motion

---

#### **Cambio 2.1.2: Crear CounterAnimate.tsx**
**Ubicación:** `src/components/motion/CounterAnimate.tsx` (NUEVA)

```typescript
'use client';

import { animate, useMotionValue, useTransform } from 'motion/react';
import { motion, useReducedMotion } from 'motion/react';
import { useEffect } from 'react';

export interface CounterAnimateProps {
  value: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}

export function CounterAnimate({
  value,
  duration = 0.8,
  format = (n) => n.toLocaleString(),
  className,
}: CounterAnimateProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, format);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const animation = animate(count, value, {
      duration: reduceMotion ? 0 : duration,
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)', // ease-out custom
    });
    return () => animation.stop();
  }, [value, count, reduceMotion, duration]);

  return <motion.span className={className}>{display}</motion.span>;
}
```

**Cambios en web:**
- [ ] Sección "Trust Bar" (+50K envíos, 0 extraviados, +50 emprendedores) usa `<CounterAnimate>`
- [ ] Valores animados con ease-out

---

#### **Cambio 2.1.3: Crear StaggerChildren.tsx**
**Ubicación:** `src/components/motion/StaggerChildren.tsx` (NUEVA)

```typescript
'use client';

import { motion } from 'motion/react';
import React from 'react';

export interface StaggerChildrenProps {
  children: React.ReactNode[];
  delayMs?: number;
}

export function StaggerChildren({
  children,
  delayMs = 100,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: delayMs / 1000,
          },
        },
      }}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

**Cambios:**
- [ ] Listas de testimonios usan `<StaggerChildren>`
- [ ] Logos carousel puede usar si no es scroll-hijack

---

#### **Cambio 2.1.4: Crear GSAP Canonical Patterns**
**Ubicación:** `src/components/gsap/StickyStack.tsx` (NUEVA)

Implementar patrón de Sección 5.A del skill (canonical skeleton)

**Cambios:**
- [ ] Si hay secciones con card-stacking, reemplazar con este componente
- [ ] Verificar `start: "top top"` y `pin: true` correctamente configurados

---

### 2.2 Validar y Completar Dark Mode

#### **Cambio 2.2.1: Extender globals.css con @media (prefers-color-scheme: dark)**
**Ubicación:** `src/app/globals.css` (MODIFICAR)

```css
/* Light mode (default) */
:root {
  --color-primary: #0636A5;
  --color-accent: #FFEC01;
  --shadow-float: 0 25px 50px -12px rgba(6, 54, 165, 0.15);
  --shadow-cta-glow: 0 0 40px rgba(255, 236, 1, 0.4), 0 0 80px rgba(255, 236, 1, 0.15);
  --gradient-surface: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #0636A5; /* Mantener igual */
    --color-accent: #FFEC01;
    --shadow-float: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
    --shadow-cta-glow: 0 0 40px rgba(255, 236, 1, 0.3);
    --gradient-surface: linear-gradient(180deg, #1a1a1a 0%, #0f1419 100%);
    
    /* Inversión de colores de fondo */
    color-scheme: dark;
  }

  /* Invertir colores de texto en secciones azules */
  .bg-brand-blue-700 {
    --text-primary: #FFFFFF;
    --text-secondary: #E6EEFE;
  }
}
```

#### **Cambio 2.2.2: Testar Dark Mode en Todas las Secciones**
**Checklist:**
- [ ] Hero (bg-blue-700): texto blanco, sombras oscuras
- [ ] Trust Bar (bg-blue-50): fondo oscuro suave, contraste OK
- [ ] Services (bg-white): fondo oscuro, cards con bordes
- [ ] How It Works (bg-blue-700): línea stepper visible
- [ ] Social Proof (bg-white): logos legibles
- [ ] CTA Final (bg-blue-700): card interior visible
- [ ] Footer (bg-blue-700 + gradients): legible

**Herramienta:** Chrome DevTools → Rendering → Emulate CSS media feature prefers-color-scheme

---

#### **Cambio 2.2.3: Crear Dark Mode Tests**
**Ubicación:** `__tests__/dark-mode.spec.ts` (NUEVA)

```typescript
import { test, expect } from '@playwright/test';

test.describe('Dark Mode', () => {
  test.use({ colorScheme: 'dark' });

  test('hero is legible in dark mode', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveCSS('color', /rgb.*/);
  });

  test('cards have sufficient contrast', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('[class*="double-bezel"]').first();
    // Check contrast ratio ≥ 4.5:1
  });
});
```

---

### 2.3 Automated Compliance Checks en CI/CD

#### **Cambio 2.3.1: Crear GitHub Actions Workflow**
**Ubicación:** `.github/workflows/design-system-compliance.yml` (NUEVA)

```yaml
name: Design System Compliance

on: [pull_request]

jobs:
  color-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Check for arbitrary hex colors
        run: |
          if grep -r "#[0-9a-f]\{3,6\}" src/ | grep -v "brand-" | grep -v ".md"; then
            echo "❌ Found arbitrary hex colors outside brand palette"
            exit 1
          fi
      - name: Check for gray/slate/zinc classes
        run: |
          if grep -r "slate-\|gray-\|zinc-\|neutral-\|stone-" src/ --include="*.tsx" --include="*.ts"; then
            echo "❌ Found gray/slate/zinc classes"
            exit 1
          fi

  voseo-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Check voseo compliance
        run: |
          if grep -riE "cotice|contáctenos|ingrese|envíe|rastree" src/ --include="*.tsx" --include="*.ts"; then
            echo "❌ Found non-voseo verbs"
            exit 1
          fi

  accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - name: Run axe accessibility checks
        run: npx axe-core --exit-code

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - name: Run Lighthouse CI
        run: npx lighthouse-ci@latest autorun
```

---

## FASE 3: ACCESIBILIDAD + POLISH (Semanas 8-9)

### 3.1 Auditoría WCAG AA Exhaustiva

#### **Cambio 3.1.1: Implementar Focus Rings Sistémicos**
**Ubicación:** `src/app/globals.css` (MODIFICAR)

```css
/* Focus visible para TODOS los interactivos */
*:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

/* Override para dark mode */
@media (prefers-color-scheme: dark) {
  *:focus-visible {
    outline-color: #0950F6;
    outline-offset-color: #0636A5;
  }
}

/* Button/Link específico */
button:focus-visible,
a:focus-visible {
  border-radius: 4px;
  box-shadow: 0 0 0 2px var(--color-focus-ring), 
              0 0 0 4px var(--color-focus-ring-offset);
}
```

**Verificación:**
- [ ] Tab through página completa: todos los interactivos focusables
- [ ] Focus ring visible en light + dark
- [ ] Orden de tab lógico

---

#### **Cambio 3.1.2: Color Contrast Validation**
**Crear script:** `scripts/check-contrast.js`

```javascript
const contrast = require('wcag-contrast');

// Verificar todos los pares texto/fondo
const checks = [
  { text: '#0636A5', bg: '#FFFFFF', min: 4.5 }, // primary text on white
  { text: '#FFFFFF', bg: '#0636A5', min: 4.5 }, // white text on primary
  { text: '#FFEC01', bg: '#0636A5', min: 4.5 }, // accent on primary
  // ... más combinaciones
];

checks.forEach(check => {
  const ratio = contrast.ratio(check.text, check.bg);
  if (ratio < check.min) {
    console.error(`❌ Contrast fail: ${ratio.toFixed(2)}:1 (need ${check.min}:1)`);
    process.exit(1);
  }
});
```

**Agregar a package.json:**
```json
{
  "scripts": {
    "validate:contrast": "node scripts/check-contrast.js"
  }
}
```

---

#### **Cambio 3.1.3: Keyboard Navigation Audit**
**Checklist manual (en test-audit):**
- [ ] Tab llega a todos los botones, links, inputs
- [ ] Escape cierra menús/modales
- [ ] Enter/Space activa buttons
- [ ] Arrow keys funcionan en radio/select
- [ ] Shift+Tab navega hacia atrás

---

### 3.2 Reduced Motion Cleanup

#### **Cambio 3.2.1: Verificar prefers-reduced-motion en Todas las Animaciones**

**Script de auditoría:**
```bash
grep -r "motion.div\|motion.span\|GSAP\|animate\(" src/ \
  --include="*.tsx" \
  | while read line; do
    file=$(echo "$line" | cut -d: -f1)
    if ! grep -q "useReducedMotion\|prefers-reduced-motion" "$file"; then
      echo "⚠️  Animation in $file without reduced-motion check"
    fi
  done
```

**Agregar a cada componente con animaciones:**
```typescript
const reduceMotion = useReducedMotion();

// Ejemplo: skip animation si reduceMotion
if (reduceMotion) return <StaticVersion />;
```

---

## FASE 4: OPERACIONAL (Semana 10)

### 4.1 Storybook Completo

#### **Cambio 4.1.1: Crear Storybook Docs Page**
**Ubicación:** `src/stories/Introduction.mdx` (NUEVA)

```mdx
# Envíos DosRuedas Design System

Welcome to the Envíos DosRuedas design system documentation.

## Principles

1. **Ley de Tres Colores** — Azul, Amarillo, Blanco. Nada más.
2. **Voseo Obligatorio** — "Cotizá", "Enviá", "Contactanos"
3. **Confianza y Velocidad** — Diseño operacional para logística

## Getting Started

Import components from `@/components/ui`:

\`\`\`typescript
import { DoubleBezelCard, CTANestedPill, Badge } from '@/components/ui';
\`\`\`

## Color Palette

[Embed color story]

## Typography

[Embed type scale story]
```

---

#### **Cambio 4.1.2: Crear Design Tokens Figma Plugin**
**Requisito:** Si hay diseñadores usando Figma

Exportar tokens.json → Figma tokens plugin

---

### 4.2 Documentación de Onboarding

#### **Cambio 4.2.1: Crear CONTRIBUTING.md**
**Ubicación:** `CONTRIBUTING.md` (NUEVA)

```markdown
# Contributing to Envíos DosRuedas Design System

## Before You Start

1. Read `DESIGN.md` (system principles)
2. Read `DESIGN_SYSTEM_CHECKLIST.md` (pre-flight requirements)
3. Open Storybook: `npm run storybook`

## Design System Components

All UI components are in `src/components/ui/`:

- `DoubleBezelCard` — Container for content cards
- `CTANestedPill` — Call-to-action button (4 variants)
- `Badge` — Small label (6 variants)
- `RadioCardGroup` — Radio button cards
- `VerticalStepper` — Step indicator
- `Button` — Application button
- `Input` — Form input
- `Select` — Dropdown select

## Color Palette

Only use:
- `brand-blue-*` (primary)
- `brand-yellow-*` (accent)
- `brand-white-*` (surface)

**Forbidden:** `slate-*`, `gray-*`, `zinc-*`, `neutral-*`, `stone-*`

## Copy Tone

Always use voseo:
- ✅ "Cotizá tu envío"
- ❌ "Cotice su envío"

See `DESIGN.md` Section 0.3 for full tone guidelines.

## Pre-Merge Checklist

Before pushing:
1. Run `npm run lint:colors`
2. Run `npm run lint:voseo`
3. Run `npm test`
4. Test in dark mode (DevTools)
5. Check Lighthouse Accessibility ≥ 90
```

---

#### **Cambio 4.2.2: Crear Video Onboarding Script**
**Duración:** 5 minutos

**Outline:**
1. Intro: "Qué es el design system de Envíos DosRuedas"
2. Demo: Mostrar Storybook
3. Walkthrough: Crear simple feature (use DoubleBezelCard + CTANestedPill)
4. Checklist: Pre-flight antes de mergear
5. Recursos: Links a DESIGN.md, Storybook, Figma

---

## TABLA MAESTRA DE CAMBIOS

| Cambio | Ubicación | Tipo | Fase | Prioridad | Horas |
|--------|-----------|------|------|-----------|-------|
| 1.1.1 | DoubleBezelCard.tsx | NEW | 1 | P0 | 3 |
| 1.1.2 | CTANestedPill.tsx | NEW | 1 | P0 | 3 |
| 1.1.3 | Badge.tsx | NEW | 1 | P0 | 2 |
| 1.1.4 | RadioCardGroup.tsx | NEW | 1 | P0 | 4 |
| 1.1.5 | VerticalStepper.tsx | NEW | 1 | P0 | 4 |
| 1.2.1 | .github/DESIGN_SYSTEM_CHECKLIST.md | NEW | 1 | P0 | 2 |
| 1.2.2 | .husky/pre-commit | NEW | 1 | P0 | 2 |
| 1.3.1 | Storybook init | CONFIG | 1 | P0 | 3 |
| 1.3.2 | *.stories.tsx (20+) | NEW | 1 | P0 | 8 |
| 1.4.1 | tokens.json | NEW | 1 | P1 | 2 |
| 2.1.1 | RevealOnScroll.tsx | NEW | 2 | P1 | 2 |
| 2.1.2 | CounterAnimate.tsx | NEW | 2 | P1 | 2 |
| 2.1.3 | StaggerChildren.tsx | NEW | 2 | P1 | 2 |
| 2.1.4 | StickyStack.tsx | NEW | 2 | P1 | 3 |
| 2.2.1 | globals.css | MODIFY | 2 | P0 | 4 |
| 2.2.2 | Dark mode testing | MANUAL | 2 | P0 | 6 |
| 2.2.3 | dark-mode.spec.ts | NEW | 2 | P1 | 3 |
| 2.3.1 | design-system-compliance.yml | NEW | 2 | P0 | 3 |
| 3.1.1 | globals.css focus-visible | MODIFY | 3 | P0 | 2 |
| 3.1.2 | check-contrast.js | NEW | 3 | P0 | 2 |
| 3.1.3 | Keyboard audit | MANUAL | 3 | P0 | 4 |
| 3.2.1 | prefers-reduced-motion audit | MANUAL | 3 | P0 | 3 |
| 4.1.1 | Introduction.mdx | NEW | 4 | P1 | 2 |
| 4.2.1 | CONTRIBUTING.md | NEW | 4 | P1 | 2 |
| 4.2.2 | Onboarding video | MEDIA | 4 | P2 | 5 |
| **TOTAL** | — | — | — | — | **~110 horas** |

---

## CHECKLIST DE IMPLEMENTACIÓN

### FASE 1 ✓
- [ ] Todos los componentes UI creados y testeados
- [ ] Storybook con 20+ stories
- [ ] Pre-flight checklist template activo
- [ ] Husky + lint-staged configurados
- [ ] Design tokens exportados

### FASE 2 ✓
- [ ] Motion components reutilizables (Reveal, Counter, Stagger)
- [ ] GSAP patterns (StickyStack) implementados
- [ ] Dark mode completado en globals.css
- [ ] Dark mode testeado en todas las secciones
- [ ] CI/CD workflows activos (color, voseo, accessibility)

### FASE 3 ✓
- [ ] Focus rings sistémicos implementados
- [ ] Contrast ratio validado (script + manual)
- [ ] Keyboard navigation auditado
- [ ] prefers-reduced-motion implementado en 100% de animaciones
- [ ] Lighthouse Accessibility ≥ 95 en todas las páginas

### FASE 4 ✓
- [ ] Storybook con docs pages
- [ ] CONTRIBUTING.md completo
- [ ] Video onboarding grabado
- [ ] Team training completado

---

## MÉTRICAS DE ÉXITO POST-IMPLEMENTACIÓN

```
BEFORE                          AFTER
─────────────────────────────────────────
Compliance: ~70%               → 100%
Dev speed: 4h per feature      → 1.5h
Bugs "diseño roto": 8/mes      → 1/mes
Lighthouse Accessibility: 82   → 96
Onboarding time: 2h            → 30min
Dark mode coverage: 60%        → 100%
CI/CD compliance gates: 0      → 5 automated checks
Storybook stories: 0           → 25+
```

---

*Documento de mejoras preparado: Agosto 2026 | Implementación: 10 semanas | Team: 2 devs + 1 PM + 1 QA*
