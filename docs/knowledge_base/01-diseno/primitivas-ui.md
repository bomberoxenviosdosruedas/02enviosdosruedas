# Primitivas UI — Envíos DosRuedas

> **Fuente:** `src/components/ui/`, `DESIGN.md` §5.
> **Regla:** Antes de escribir markup de tarjeta, botón, input, selector, stepper, badge o grilla, **usar la primitiva**.
> **Alias import canónico:** `@/components/ui` (barril `index.ts`).

---

## 1. Barril de Exportación (`src/components/ui/index.ts`)

```ts
export { DoubleBezelCard } from './DoubleBezelCard';
export { CTANestedPill } from './CTANestedPill';
export { InputField } from './InputField';
export { Badge } from './Badge';
export { RadioCardGroup } from './RadioCardGroup';
export { StepperHorizontal } from './StepperHorizontal';
export { StepperVertical } from './StepperVertical';
export { BentoGrid, BentoGridItem } from './BentoGrid';
export { HeroProceduralBackground } from './HeroProceduralBackground';
export { FloatTiltCard } from './FloatTiltCard';
export { Card, CardHeader, CardContent, CardFooter } from './card';
```

> **No exportados por barril** (importar por ruta directa):
> - `AddressAutocomplete` → `@/components/ui/AddressAutocomplete`
> - `DynamicRouteMap` → `@/components/ui/DynamicRouteMap`
> - `LeafletRouteMap` → `@/components/ui/LeafletRouteMap`
> - `Sparkles` → `@/components/ui/sparkles`
> - `TimelineContent` → `@/components/ui/timeline-animation`
> - `VerticalCutReveal` → `@/components/ui/vertical-cut-reveal`

---

## 2. DoubleBezelCard

**Para qué:** Contenedor firma de dos capas para contenido primario (servicios, segmentos, métricas). Base de `BentoGridItem` y `Card variant="bezel"`.

### 2.1 Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `children` | `ReactNode` | — | Contenido |
| `variant` | `'light' \| 'dark'` | `'light'` | `dark` pinta interior en `brand-blue-700` |
| `hoverEffect` | `boolean` | `true` | Sombra y borde hover |
| `outerClassName` | `string` | — | Clases exterior |
| `innerClassName` | `string` | — | Clases interior |
| `className` | `string` | — | Al exterior (soporta `ref`) |
| `...props` | `HTMLAttributes<HTMLDivElement>` | — | Resto al exterior |

### 2.2 Estructura Visual

| Capa | `light` | `dark` |
|---|---|---|
| **Exterior** | `bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float` | Igual con `border-brand-blue-100/80` |
| **Interior** | `bg-white rounded-xl p-6 shadow-sm border border-brand-blue-50/50 text-brand-blue-900` | `bg-brand-blue-700 border border-white/10 text-white` |
| **Hover** | `hover:shadow-antigravity-deep hover:border-brand-blue-300` | `hover:border-brand-yellow-400/80` |

### 2.3 Ejemplos

```tsx
import { DoubleBezelCard } from '@/components/ui';

// Light (default) — sobre fondo blanco
<DoubleBezelCard>
  <h3 className="font-subheading text-xl uppercase text-brand-blue-900">Envíos Express</h3>
  <p className="text-sm text-brand-blue-900">Retiro y entrega en el día en todo General Pueyrredón.</p>
</DoubleBezelCard>

// Dark — sobre fondo azul (hero, secciones invertidas)
<DoubleBezelCard variant="dark">
  <p className="font-mono text-2xl tabular-nums text-brand-yellow-500">$3.700</p>
</DoubleBezelCard>

// Con clases personalizadas
<DoubleBezelCard variant="dark" outerClassName="shadow-panel" innerClassName="space-y-4">
  {contenido}
</DoubleBezelCard>
```

### 2.4 Accesibilidad
- Contenedor neutro. Si **toda la tarjeta es clicable**, el elemento interactivo es un `<a>`/`<button>` real con `focus-visible:ring-2 ring-brand-blue-500 ring-offset-2`.

### 2.5 Deuda Conocida
- 🟡 Radio duplicado: utility fija 16px/12px y componente agrega `rounded-2xl` (24px) / `rounded-xl` (16px); JSDoc dice "rounded-2xl (16px)" incorrecto.
- ⚪ `'use client'` innecesario (no usa hooks).

---

## 3. CTANestedPill

**Para qué:** Único componente de acción del sistema (link o botón). Registra analítica: `whatsappClick` si `href` apunta a `wa.me`/`whatsapp.com`, `ctaClick` en otro caso.

### 3.1 Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `children` | `ReactNode` | — | Etiqueta (truncate) |
| `href` | `string` | — | Si existe y no `disabled`, renderiza `next/link` |
| `variant` | `'primary' \| 'elevated' \| 'outline' \| 'ghost'` | `'primary'` | Estilo |
| `size` | `'compact' \| 'default' \| 'large' \| 'lg'` | `'default'` | `lg` = `large` |
| `icon` | `ReactNode` | `<ArrowRight />` | `null` oculta el chip |
| `iconPosition` | `'left' \| 'right'` | `'right'` | — |
| `iconClassName` | `string` | — | Chip |
| `target`, `rel` | `string` | — | Modo link |
| `disabled` | `boolean` | — | En modo link fuerza `<button disabled>` |
| `...buttonProps` | `ButtonHTMLAttributes` | — | `type` default `button`; `id` = id analítica |

### 3.2 Variantes Visuales

| Variant | Reposo | Hover | Active | Chip Hover |
|---|---|---|---|---|
| `primary` | `bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-500 shadow-accent-sm` | `bg-brand-yellow-400 shadow-cta-glow` | `scale-[.98] translate-y-[1px]` | `bg-brand-blue-700 text-brand-yellow-500 translate-x-1` |
| `elevated` | `bg-white text-brand-blue-700 border-brand-blue-100 shadow-elevated` | `shadow-hover-lift border-brand-blue-300 text-brand-blue-700` ⚠️ | `scale-[.98]` | `bg-brand-blue-700 text-white` |
| `outline` | `bg-transparent text-brand-blue-700 border-2 border-brand-blue-700` | `bg-brand-blue-50` | `scale-[.98]` | ídem |
| `ghost` | `bg-transparent text-brand-blue-700 border-transparent` | `bg-brand-blue-50` | `scale-[.98]` | ídem |

### 3.3 Tamaños

| Size | Clases | Alto |
|---|---|---|
| `compact` | `px-4 py-1.5 text-xs min-h-[36px]` | 36 px ⚠️ |
| `default` | `px-5 py-2 text-sm min-h-[44px]` | 44 px |
| `large` / `lg` | `px-8 py-3 text-base min-h-[52px]` | 52 px |

### 3.4 Focus / Disabled / Loading
- Focus-visible: `ring-2 ring-brand-blue-500 ring-offset-2` (sobre azul `ring-offset-brand-blue-700`).
- Disabled: `opacity-50 cursor-not-allowed pointer-events-none`.
- Loading: **no hay estado propio** → usar `disabled` + texto ("Calculando…").

### 3.5 WhatsApp CTA
- Siempre `variant="primary"` (fondo amarillo, hover `#FFF12E`).
- Glifo `FaWhatsapp` puede llevar verde **dentro** del ícono. **Nunca botón verde.**

### 3.6 Ejemplos

```tsx
import { CTANestedPill } from '@/components/ui';

// Primario (CTA principal)
<CTANestedPill href="/cotizar/express" size="large">Cotizá tu envío</CTANestedPill>

// Secundario outline
<CTANestedPill href="/servicios" variant="outline">Mirá los servicios</CTANestedPill>

// Botón submit en formulario
<CTANestedPill type="submit" disabled={isPending}>{isPending ? 'Calculando…' : 'Calcular'}</CTANestedPill>

// WhatsApp
<CTANestedPill href="https://wa.me/542236602699" variant="primary">
  <FaWhatsapp className="h-5 w-5" /> WhatsApp Comercial
</CTANestedPill>
```

### 3.7 Deuda / Objetivo
- 🔴 Hover `elevated` a `#3570F8` (4.35:1) → corregir a `hover:text-brand-blue-700`.
- 🟠 `compact` < 44 px → no usar en superficies táctiles o subir a `min-h-[44px]`.
- 🟡 Utility `cta-nested-pill` en `globals.css` compite con clases del componente (fija `min-height: 56px`, padding, fondo amarillo). **Objetivo:** dejar utility solo estructural (display, radius, familia, uppercase, tracking) o quitarla del componente.
- 🟡 Chip sin `aria-hidden="true"`; botón solo-ícono sin `aria-label`.

---

## 4. InputField

**Para qué:** Campo de texto con label, ícono, ayuda y error. **Todo formulario del sitio lo usa.**

### 4.1 Props

| Prop | Tipo | Descripción |
|---|---|---|
| `label` | `string` | Label superior (requerido para a11y) |
| `error` | `string \| null` | Mensaje de error (activa estado error) |
| `helpText` | `string` | Texto de ayuda bajo el input |
| `icon` | `React.ReactNode` | Ícono izquierdo (ej. `<Phone />`) |
| `containerClassName` | `string` | Clases wrapper |
| `labelClassName` | `string` | Clases label |
| `className` | `string` | Clases input (extiende `React.InputHTMLAttributes`) |
| `required` | `boolean` | Añade `*` rojo en label |
| `...inputProps` | — | Resto de props nativas (`type`, `name`, `value`, `onChange`, etc.) |

### 4.2 Estados Visuales

| Estado | Clases `<input>` |
|---|---|
| **Base** | `h-11 w-full border-2 rounded-xl bg-white font-sans text-sm text-brand-blue-900 placeholder:text-brand-blue-500` + `pl-10` con ícono |
| **Default** | `border-brand-blue-300` |
| **Hover** | `hover:border-brand-blue-400` |
| **Focus** | `focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 focus:outline-none` |
| **Error** | `border-red-500 focus:border-red-500 ring-2 ring-red-500/20 text-red-600` + mensaje `font-mono text-[11px] text-red-600 font-medium` |
| **Disabled** | `border-brand-blue-100 bg-brand-blue-50/50 text-brand-blue-400 cursor-not-allowed` |
| **Help** | `font-mono text-[11px] text-brand-blue-500` |

### 4.3 Label
`font-subheading text-xs uppercase tracking-wider font-bold text-brand-blue-700` + `*` rojo si `required`.

### 4.4 Ejemplo Completo

```tsx
import { InputField } from '@/components/ui';
import { Phone } from 'lucide-react';

<InputField
  label="Teléfono"
  name="telefono"
  type="tel"
  required
  icon={<Phone className="w-4 h-4" />}
  helpText="Te escribimos por WhatsApp"
  error={errors.telefono}
  value={form.telefono}
  onChange={(e) => setTelefono(e.target.value)}
  className="font-mono tabular-nums"
/>
```

### 4.5 Deuda
- 🟠 No reenvía `required` al input nativo (solo visual en label).
- 🟠 Error sin `aria-describedby` ni `role="alert"` en el contenedor.

---

## 5. Badge

**Para qué:** Etiquetas de estado, categoría, urgencia. Pequeñas, informativas, no interactivas.

### 5.1 Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `children` | `ReactNode` | — | Contenido |
| `variant` | `'default' \| 'accent' \| 'urgent' \| 'economic' \| 'flex' \| 'secure'` | `'default'` | Estilo semántico |
| `size` | `'sm' \| 'md'` | `'md'` | Tamaño |
| `className` | `string` | — | Sobrescritura |

### 5.2 Variantes

| Variant | Fondo | Texto | Borde | Uso |
|---|---|---|---|---|
| `default` | `bg-brand-blue-50` | `text-brand-blue-700` | `border-brand-blue-100` | Neutral |
| `accent` | `bg-brand-yellow-500` | `text-brand-blue-900` | — | Destacado / Activo |
| `urgent` | `bg-brand-yellow-500/20` | `text-brand-yellow-500` | `border-brand-yellow-500/40` | Urgencia / Live |
| `economic` | `bg-brand-blue-100` | `text-brand-blue-400` | — | LowCost / Económico ⚠️ contraste |
| `flex` | `bg-brand-yellow-100` | `text-brand-blue-900` | `border-brand-yellow-200` | Mercado Envíos Flex |
| `secure` | `bg-brand-blue-50` | `text-brand-blue-700` | `border-brand-blue-100` | Garantía / Seguridad |

### 5.3 Tamaños
- `sm`: `px-2 py-0.5 text-[10px]` (`text-2xs`)
- `md`: `px-2.5 py-1 text-xs` (`text-xs`)

### 5.4 Ejemplo

```tsx
import { Badge } from '@/components/ui';

<Badge variant="accent" size="sm">ACTIVO</Badge>
<Badge variant="flex">FLEX</Badge>
<Badge variant="urgent" className="animate-pulse-subtle">EN VIVO</Badge>
```

---

## 6. RadioCardGroup

**Para qué:** Selector de opciones mutuamente excluyentes presentado como tarjetas clicables (accesible, radio nativo oculto).

### 6.1 Props

| Prop | Tipo | Descripción |
|---|---|---|
| `name` | `string` | `name` del grupo radio (requerido) |
| `value` | `string` | Valor seleccionado |
| `onChange` | `(value: string) => void` | Handler cambio |
| `options` | `Array<{value, label, description?, icon?}>` | Opciones |
| `className` | `string` | Contenedor grid |
| `optionClassName` | `string` | Clases por tarjeta |
| `disabled` | `boolean` | Deshabilita todo |

### 6.2 Estructura Tarjeta

```tsx
// Interior de cada opción
<div className="relative p-4 rounded-xl border-2 transition-all bg-white
  focus-within:ring-2 focus-within:ring-brand-blue-500
  has-[:checked]:border-brand-blue-700 has-[:checked]:bg-brand-blue-50/50
  has-[:checked]:shadow-md">
  <input type="radio" className="sr-only" name={name} value={opt.value} checked={value === opt.value} onChange={...} disabled={disabled} />
  {opt.icon && <div className="mb-2 text-brand-blue-700">{opt.icon}</div>}
  <h4 className="font-subheading text-sm uppercase text-brand-blue-700">{opt.label}</h4>
  {opt.description && <p className="text-xs text-brand-blue-700/80 mt-1">{opt.description}</p>}
</div>
```

---

## 7. StepperHorizontal / StepperVertical

**Para qué:** Progreso lineal de pasos (cotizador, onboarding, checkout).

### 7.1 Props Comunes

| Prop | Tipo | Descripción |
|---|---|---|
| `steps` | `Array<{id, label, description?, icon?}>` | Pasos |
| `currentStep` | `number` | Índice paso actual (0-based) |
| `onStepClick` | `(index: number) => void` | Click en paso (opcional) |
| `className` | `string` | Contenedor |
| `completedColor` | `string` | Color pasos completados (default `brand-yellow-500`) |

### 7.2 Horizontal (Desktop default)

```tsx
<StepperHorizontal
  steps={[
    { id: 'origen', label: 'Origen', icon: <MapPin /> },
    { id: 'destino', label: 'Destino', icon: <MapPin /> },
    { id: 'datos', label: 'Datos', icon: <User /> },
  ]}
  currentStep={1}
  className="w-full max-w-3xl mx-auto"
/>
```

- Conectores: `border-t-2 border-brand-blue-100` → completados `border-brand-yellow-500`.
- Nodos: `w-8 h-8 rounded-full` → completados `bg-brand-yellow-500 text-brand-blue-900` + check.

### 7.3 Vertical (Mobile / Sidebar)

```tsx
<StepperVertical steps={...} currentStep={1} />
```

- Conector lateral izquierda: `border-l-2 border-brand-blue-100` → completados `border-brand-yellow-500`.

---

## 8. BentoGrid / BentoGridItem

**Para qué:** Grilla asimétrica estilo Apple Control Center (12 cols base, spans variables).

### 8.1 BentoGrid Props

| Prop | Tipo | Descripción |
|---|---|---|
| `children` | `ReactNode` | Solo `BentoGridItem` |
| `className` | `string` | Grid container |
| `columns` | `number` | Columnas base (default 12) |
| `gap` | `string` | Gap (default `gap-6`) |

### 8.2 BentoGridItem Props

| Prop | Tipo | Descripción |
|---|---|---|
| `span` | `{ base?: number; sm?: number; lg?: number; xl?: number }` | Spans responsive |
| `children` | `ReactNode` | Contenido |
| `className` | `string` | Sobrescritura |

### 8.3 Ejemplo

```tsx
import { BentoGrid, BentoGridItem } from '@/components/ui';

<BentoGrid className="max-w-7xl mx-auto">
  <BentoGridItem span={{ base: 12, lg: 7 }}>
    <DoubleBezelCard><Contenido principal 7/12 /></DoubleBezelCard>
  </BentoGridItem>
  <BentoGridItem span={{ base: 12, lg: 5 }}>
    <DoubleBezelCard variant="dark"><Contenido lateral 5/12 /></DoubleBezelCard>
  </BentoGridItem>
  <BentoGridItem span={{ base: 12, lg: 12 }}>
    <DoubleBezelCard><Full width /></DoubleBezelCard>
  </BentoGridItem>
</BentoGrid>
```

### 8.4 Deuda
- 🟠 `BentoGridItem` genera clases dinámicas (`md:col-span-${n}`) → Tailwind no las genera. **Corregir a spans estáticos o CSS Grid inline.**

---

## 9. HeroProceduralBackground

**Para qué:** Fondo hero canónico (gradiente + halos + grilla SVG + gráficos vectoriales por variant). **Único fondo hero permitido.**

### 9.1 Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `variant` | `'express' \| 'lowcost' \| 'flex' \| '3pl' \| 'community' \| 'contact' \| 'default'` | `'default'` | Ver `hero-layout.md` §4 |
| `className` | `string` | — | Sobrescritura |

### 9.2 Qué Pinta (Automático)

1. **Gradiente base:** `linear-gradient(135deg, #0950F6 0%, #0950F6 55%, #3570F8 100%)`
2. **Halos radiales:** Azul (`rgba(9,80,246,0.35)`) + Amarillo (`rgba(255,236,1,0.22)`) + Azul profundo
3. **Grilla SVG:** Trama punteada 48px blanca + nodos amarillos (`opacity-[0.07]`)
4. **Gráficos por variant:** Ver `hero-layout.md` §4 (paths animados, anillos, radar, etc.)

### 9.3 Uso Obligatorio

```tsx
<section className="relative isolate overflow-hidden bg-brand-blue-700">
  <HeroProceduralBackground variant="express" />
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Grid 7/5 hero */}
  </div>
</section>
```

---

## 10. FloatTiltCard

**Para qué:** Tarjeta con tilt 3D suave siguiendo mouse (home hero visual, showcase producto).

### 10.1 Props

| Prop | Tipo | Descripción |
|---|---|---|
| `children` | `ReactNode` | Contenido (usualmente `<Image fill />`) |
| `maxTilt` | `number` | Grados máx (default 8) |
| `className` | `string` | Wrapper |
| `innerClassName` | `string` | Contenido |

### 10.2 Uso

```tsx
import { FloatTiltCard } from '@/components/ui';
import Image from 'next/image';

<FloatTiltCard className="w-full max-w-md mx-auto">
  <Image src="/elementos/hero_home.webp" alt="Courier Envíos DosRuedas" fill className="object-cover rounded-xl" priority />
</FloatTiltCard>
```

---

## 11. Card (y Subcomponentes)

**Para qué:** Tarjeta simple (no double-bezel) para pricing, features, content blocks.

### 11.1 Componentes

| Componente | Descripción |
|---|---|
| `Card` | Wrapper `rounded-xl border border-brand-blue-100 bg-white shadow-sm` |
| `CardHeader` | `px-6 py-4` |
| `CardContent` | `px-6 py-4` |
| `CardFooter` | `px-6 py-4 border-t border-brand-blue-100` |

### 11.2 Variant `bezel` (usa DoubleBezel internamente)

```tsx
<Card variant="bezel" className="h-full">
  <CardContent className="p-6">...</CardContent>
</Card>
```

---

## 12. AddressAutocomplete

**Para qué:** Input con autocomplete de direcciones (Google Places via proxy local `/api/places/autocomplete`).

### 12.1 Props

| Prop | Tipo | Descripción |
|---|---|---|
| `id` | `string` | Requerido (asocia label + lista) |
| `placeholder` | `string` | Placeholder |
| `value` | `string` | Controlado |
| `onChange` | `(value: string) => void` | Handler texto |
| `onSelectCoordinate` | `(coords: {lat, lng} \| null) => void` | Handler coordenadas al seleccionar |
| `required` | `boolean` | — |
| `className` | `string` | Clases input (sobrescribe default) |

### 12.2 Uso en Cotizador

```tsx
<AddressAutocomplete
  id="origen-input"
  placeholder="Ej: Av. Colón 1234, Mar del Plata"
  value={origen}
  onChange={setOrigen}
  onSelectCoordinate={setOrigenCoords}
  required
  className="w-full h-11 bg-white border-2 border-brand-blue-100 focus:border-brand-blue-700 rounded-xl px-4 text-sm text-brand-blue-900 placeholder:text-brand-blue-500"
/>
```

---

## 13. DynamicRouteMap / LeafletRouteMap

**Para qué:** Mapa interactivo de ruta (OSRM + Leaflet). `DynamicRouteMap` = wrapper React; `LeafletRouteMap` = implementación Leaflet.

### 13.1 Props Comunes

| Prop | Tipo | Descripción |
|---|---|---|
| `origin` | `{lat, lng} \| null` | Origen |
| `destination` | `{lat, lng} \| null` | Destino |
| `routeCoords` | `[number, number][]` | Coordenadas ruta |
| `distanceKm` | `number \| undefined` | Distancia calculada |
| `serviceType` | `'EXPRESS' \| 'LOW_COST'` | Para estilo visual |

---

## 14. Helpers de Animación (Importar por Ruta)

| Helper | Ruta | Uso |
|---|---|---|
| `Sparkles` | `@/components/ui/sparkles` | Partículas fondo (hero pricing, etc.) |
| `TimelineContent` | `@/components/ui/timeline-animation` | Reveal scroll-secuenciado |
| `VerticalCutReveal` | `@/components/ui/vertical-cut-reveal` | Texto corte vertical animado |

---

## 15. Adopción Actual (Resumen)

| Primitiva | Consumidores | Estado | Acción Requerida |
|---|---|---|---|
| `CTANestedPill` | 15 | ✅ | — |
| `HeroProceduralBackground` | 7 | ⚠️ | Corregir paleta en componente |
| `Card` (+ subs) | 4 | ✅ | — |
| `Sparkles` / `TimelineContent` / `VerticalCutReveal` | 4 c/u | ✅ Helpers | — |
| `AddressAutocomplete` / `DynamicRouteMap` | 2 | ✅ Cotizador | — |
| `DoubleBezelCard` | 1 | 🟡 | Migrar tarjetas manuales |
| `InputField` | 1 | 🟡 | Migrar inputs manuales (Contacto, Cotizadores) |
| `FloatTiltCard` | 1 | 🟡 | Solo home hero |
| `RadioCardGroup` | 0 | 🟡 | Reemplazar radios manuales |
| `StepperHorizontal/Vertical` | 0 | 🟡 | Reemplazar steppers manuales |
| `LogosCarousel` | 0 | 🟡 | Corregir animación + partners reales |
| `BentoGrid` | 0 | 🟡 | Reemplazar grids manuales |

---

## 16. Checklist de Migración (Por Hacer)

- [ ] `CotizadorExpressFormFields` → `InputField` (4 inputs)
- [ ] `CotizadorLowCostForm` → `InputField` (4 inputs) + `AddressAutocomplete` (2)
- [ ] `ContactForm` → `InputField` (3 inputs + select)
- [ ] `BatchGrid` → `InputField` (4 inputs por fila)
- [ ] `NewsletterSubscribe` → `InputField` (1 input)
- [ ] Tarjetas `ContactInfo`, `AboutAdvantages`, `BatchGrid`, `CotizadorDetails` → `DoubleBezelCard`
- [ ] Steppers en cotizadores → `StepperHorizontal`
- [ ] Grids asimétricas en `LowCostFeatures`, `AboutAdvantages` → `BentoGrid`
- [ ] `LogosCarousel` → partners reales + animación real