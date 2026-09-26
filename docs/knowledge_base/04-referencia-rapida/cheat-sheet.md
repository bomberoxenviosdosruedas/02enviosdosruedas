# Quick Reference / Cheat Sheet — Envíos DosRuedas

> **Acceso rápido a tokens, spacing, primitivas y reglas críticas.**
> **Fuentes canónicas:** `tokens-colores.md`, `tipografia.md`, `primitivas-ui.md`, `anti-patrones.md`.

---

## 1. Colores (Solo 3 + Escalas)

| Uso | Token | Hex | Clase Tailwind |
|---|---|---|---|
| **Primario / Lienzo / Hero / Header / Footer / H1** | `brand-blue-700` | `#0950F6` | `bg-brand-blue-700`, `text-brand-blue-700` |
| **Texto sobre amarillo / Body en cards** | `brand-blue-900` | `#0950F6` | `text-brand-blue-900` |
| **Body ink (sobre blanco)** | `brand-ink` | `#0950F6` | `text-brand-ink` |
| **Hover fondos azules** | `brand-blue-800` | `#3570F8` | `hover:bg-brand-blue-800` |
| **Borde estructural / Divisores** | `brand-blue-100` | `#BACEFD` | `border-brand-blue-100` |
| **Superficie muted / Bezel exterior** | `brand-blue-50` | `#E6EEFE` | `bg-brand-blue-50`, `bg-brand-blue-50/80` |
| **CTA Primario / Precio sobre azul / Step activo** | `brand-yellow-500` | `#FFEC01` | `bg-brand-yellow-500`, `text-brand-yellow-500` |
| **Hover CTA** | `brand-yellow-400` | `#FFF12E` | `hover:bg-brand-yellow-400` |
| **Pressed CTA** | `brand-yellow-600` | `#E6D400` | `active:bg-brand-yellow-600` |
| **Blanco lienzo** | `brand-white-50` | `#FFFFFF` | `bg-white`, `text-white` |
| **Rojo error (borde/ícono)** | `action-danger` | `#EF4444` | `border-red-500`, `ring-red-500/20` |
| **Rojo error (texto)** | — | `#DC2626` | `text-red-600` |

> **Regla:** `brand-blue-500/600/700/900/950` = **mismo hex** (`#0950F6`). El nombre elige función, no oscuridad.

---

## 2. Tipografía

| Rol | Familia | Clase | Peso | Tratamiento |
|---|---|---|---|---|
| **Display / H1-H2** | Anton | `font-display` / `text-display` / `text-h1` / `text-h2` | **Solo 400** | UPPERCASE, `leading-hero` (0.8), `tracking-tighter` (-0.05em) |
| **Subtítulos / H3 / Labels / CTA / Badges** | Bebas Neue | `font-subheading` | **Solo 400** | UPPERCASE, `tracking-wider` (0.05em) |
| **Body / UI** | Outfit | `font-sans` (default) | 400–600 | Sentence case, `leading-relaxed` (1.625) |
| **Métricas / Precios / Códigos** | Geist Mono | `font-mono` | Variable | `tabular-nums` **obligatorio** |

> **Prohibido:** `font-bold` / `font-extrabold` en Anton/Bebas. Jerarquía por `text-*`, `tracking-*`, color.

---

## 3. Espaciado y Layout

| Token | Valor | Clase | Uso |
|---|---|---|---|
| `--spacing-section-y` | `6rem` | `py-section-y` | Padding vertical secciones |
| `--spacing-container-max` | `80rem` | `max-w-7xl` | Ancho máx contenedor |
| `max-w-prose` | ~65ch | `max-w-prose` | Ancho lectura párrafos |

### Breakpoints
`sm: 640` • `md: 768` • `lg: 1024` • `xl: 1280` • `2xl: 1536`

### Hero Grid
`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center` → `lg:col-span-7` (copy) + `lg:col-span-5` (visual)

---

## 4. Radios (Escala Redefinida)

| Token | Valor | Clase | Uso |
|---|---|---|---|
| `--radius-sm` | 6px | `rounded-sm` | Badges, chips pequeños |
| `--radius-md` | 8px | `rounded-md` | Inputs compactos |
| `--radius-lg` | 12px | `rounded-lg` | Cards interior |
| `--radius-xl` | **16px** | `rounded-xl` | **Bezel exterior**, inputs, cards |
| `--radius-2xl` | **24px** | `rounded-2xl` | **Bezel exterior large**, modales |
| `--radius-3xl` | 32px | `rounded-3xl` | Hero cards, CTAs large |
| `--radius-4xl` | 40px | `rounded-4xl` | Contenedores grandes |
| `--radius-full` | 9999px | `rounded-full` | Pills, badges, chips |

> **Prohibido:** `rounded-[20px]`, `rounded-[24px]`, `rounded-[28px]`, `rounded-[30px]`.

---

## 5. Sombras (Todas Teñidas)

| Token | Uso |
|---|---|
| `shadow-float` | Bezel exterior reposo |
| `shadow-elevated` | CTA `elevated`, Card `elevated`, header scroll |
| `shadow-antigravity-deep` | Hover bezel, tilt card |
| `shadow-cta-glow` | **Hover CTA primario** |
| `shadow-glow-yellow` | Halo amarillo (badges, knockouts) |
| `shadow-glow-blue` | Halo azul (hero visual) |

> **Nunca:** `rgba(0,0,0,…)`, `rgba(6,54,165,…)`, `rgba(0,39,124,…)`.

---

## 6. Primitivas UI (Import: `@/components/ui`)

| Primitiva | Props Clave | Uso Principal |
|---|---|---|
| `DoubleBezelCard` | `variant: 'light'\|'dark'`, `hoverEffect`, `outerClassName`, `innerClassName` | Contenedor firma 2 capas (servicios, métricas, pricing) |
| `CTANestedPill` | `variant: 'primary'\|'elevated'\|'outline'\|'ghost'`, `size`, `href`, `icon`, `iconPosition` | **Único botón/CTA** del sistema (link o button) |
| `InputField` | `label`, `error`, `helpText`, `icon`, `required`, `containerClassName` | **Todo formulario** (label + icon + help + error + a11y) |
| `Badge` | `variant: 'default'\|'accent'\|'urgent'\|'economic'\|'flex'\|'secure'`, `size` | Etiquetas estado/categoría |
| `RadioCardGroup` | `name`, `value`, `onChange`, `options[]` | Selector opciones mutuamente excluyentes (tarjetas) |
| `StepperHorizontal` / `StepperVertical` | `steps[]`, `currentStep`, `onStepClick` | Progreso lineal (cotizador, onboarding) |
| `BentoGrid` / `BentoGridItem` | `span: {base, sm, lg, xl}` | Grilla asimétrica 12 cols (Apple style) |
| `HeroProceduralBackground` | `variant: 'express'\|'lowcost'\|'flex'\|'3pl'\|'contact'\|'default'` | **Único fondo hero permitido** |
| `FloatTiltCard` | `maxTilt` | Hero visual home (tilt 3D mouse) |
| `AddressAutocomplete` | `onSelectCoordinate`, `className` | Input direcciones (Google Places proxy) |
| `DynamicRouteMap` / `LeafletRouteMap` | `origin`, `destination`, `routeCoords`, `distanceKm`, `serviceType` | Mapa ruta interactivo |

---

## 7. Hero Structure (Copy-Paste)

```tsx
<section className="relative isolate overflow-hidden bg-brand-blue-700 text-white min-h-[90dvh]">
  <HeroProceduralBackground variant="express" /> {/* o lowcost, flex, 3pl, contact, default */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      {/* LEFT 7 cols */}
      <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
        <span className="-rotate-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading text-xs uppercase tracking-widest shadow-glow-yellow">
          <Zap className="h-4 w-4 shrink-0" /> Mar del Plata · +7 años · 2026
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight leading-[0.92] text-white">
          COTIZÁ TU <span className="inline-block bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded-lg -rotate-1 shadow-glow-yellow mx-1">ENVÍO</span> EXPRESS
        </h1>
        <p className="text-lg text-white/85 max-w-prose font-sans leading-relaxed">Calculá en segundos y coordiná por WhatsApp.</p>
        <CTANestedPill href="/cotizar/express" variant="primary" size="large">Cotizá tu envío</CTANestedPill>
        <ul className="grid grid-cols-3 gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
          {chips.map(c => <li key={c.label} className="p-3 rounded-xl bg-white/10 border border-white/20 text-center"><span className="font-mono text-xl text-brand-yellow-500 tabular-nums">{c.value}</span><span className="font-subheading text-xs uppercase text-white/90">{c.label}</span></li>)}
        </ul>
      </div>
      {/* RIGHT 5 cols */}
      <div className="lg:col-span-5">
        <DoubleBezelCard variant="dark" className="w-full max-w-md">
          <FloatTiltCard><Image src="/elementos/hero_express.webp" alt="..." fill className="object-cover" priority /></FloatTiltCard>
        </DoubleBezelCard>
      </div>
    </div>
  </div>
</section>
```

---

## 8. Tarifas 2026 (Resumen)

| Servicio | 0-3km | 3-5km | 5-7km | 7-10km | +10km (excedente) | >20km |
|---|---|---|---|---|---|---|
| **EXPRESS** | $3.700 | $4.600 | $6.100 | $8.200 | `Math.ceil(km) × $1.000` | Consultar |
| **LOW_COST** | $3.000 | $4.000 | $5.300 | $7.000 | `Math.ceil(km) × $700` | Consultar |

> **Constantes:** `EXPRESS_TIERS`, `LOW_COST_TIERS`, `EXPRESS_PRICE_PER_KM=1000`, `LOW_COST_PRICE_PER_KM=700` desde `src/lib/pricing.ts`.

---

## 9. Reglas Críticas (Memorizar)

| ❌ Nunca | ✅ Siempre |
|---|---|
| Hex inline (`bg-[#…]`) | Tokens `brand-*` |
| Más oscuro que `#0950F6` | Techo de oscuridad = `#0950F6` |
| Verde en UI (ni WhatsApp) | CTA amarillo + glifo verde interno |
| `font-bold` en Anton/Bebas | Solo 400; jerarquía por size/tracking/color |
| `h-screen` | `min-h-[100dvh]` / `min-h-[90dvh]` |
| `animate-bounce` | Springs `stiffness 100, damping 20` |
| `border-l-4` | `border-2` + `ring-2` en errores |
| Hero centrado desktop | Asimétrico 7/5 |
| Precio del cliente en Server Action | Leer `PriceRange` vía Prisma |
| `Math.floor/round` en excedentes | `Math.ceil(km)` |
| `div role="button"` | `<button>` / `<a>` nativos |
| `prefers-reduced-motion` ignorado | Gate en todo Motion/GSAP/CSS |
| Touch targets < 44px | `min-h-[44px]` CTA, `h-11` input |

---

## 10. Comandos Esenciales

```bash
# Typecheck (obligatorio antes de PR)
pnpm typecheck

# Lint archivos tocados
pnpm exec eslint <archivos>

# Tests relacionados
pnpm exec vitest related <archivos> --run --reporter=dot

# Build (solo N3 o si usuario lo pide)
pnpm build  # Windows: powershell -ExecutionPolicy Bypass -Command "pnpm build"

# Dev
pnpm dev  # Windows hot-reload fix: pnpm dev --webpack

# Prisma
pnpm prisma generate && pnpm prisma db push
```

---

## 11. Voseo Rioplatense (Copy)

| Imperativo | Forma Correcta |
|---|---|
| Cotice → **Cotizá** | Calculá, Enviá, Ingresá, Elegí, Contactanos, Rastreá, Coordiná, Mirá |
| Usted / Su → **Vos / Tu** | "Tu envío", "Tu negocio", "Contactanos" |
| Nombres genéricos → **Datos reales MDQ** | Güemes, Batán, Constitución, Puerto, Centro, Chauvín, Friuli 1972 |
| Emojis → **Íconos Lucide** | `<Zap />`, `<MapPin />`, `<ShieldCheck />` |

---

## 12. Accesibilidad Mínima

| Requisito | Implementación |
|---|---|
| Focus visible | `focus-visible:ring-2 ring-brand-blue-500 ring-offset-2` (azul: `ring-offset-brand-blue-700`) |
| Touch target | `min-h-[44px]` CTA, `h-11` (44px) input |
| Form error | `aria-describedby` en input + mensaje `role="alert"` |
| Label → Input | `htmlFor` + `id` obligatorio |
| Iconos decorativos | `aria-hidden="true"` |
| Reduced motion | `MotionConfig reducedMotion="user"` o `useReducedMotion()` en todo Motion/GSAP |
| Contraste texto normal | ≥ 4.5:1 (ver `tokens-colores.md` §6) |

---

## 13. Imports Canónicos

```typescript
// UI Primitivas
import { DoubleBezelCard, CTANestedPill, InputField, Badge, HeroProceduralBackground, FloatTiltCard } from '@/components/ui';

// Librerías
import { Zap, MapPin, Clock, ShieldCheck, Phone, User, Package, CheckCircle2, ChevronDown, Search, X, ArrowRight, MessageCircle, Truck, Percent, Sparkles, Building2, Navigation, CreditCard, Mail, Share2, ExternalLink, HelpCircle, Layers, CloudRain, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Solo WhatsApp

// Utils
import { cn } from '@/src/lib/utils';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
```