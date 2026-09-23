# Design System: Envíos DosRuedas

**Ajuste 2026 — Max `#0950F6`**  
**Project ID:** `EnviosDosruedasDesignSystem_a2df0d`

> **Regla fundamental de este ajuste:** `#0950F6` es el azul máximo (más oscuro permitido) en todo el sistema. Se eliminan todos los azules más oscuros que `#0950F6`: `#0636A5`, `#052D8C`, `#04236B`, `#021440`, `#00277C`. Este documento es la spec de referencia para generación en Stitch.

---

## 1. Overview / Brand & Style

**Mood:** logística urbana de precisión, industrial-moderno de alta velocidad, hablando en voseo. Paleta aclarada: base profunda `#0950F6` (antes `#0636A5`) para cumplir el máximo de oscuridad. Misma energía de señalética vial monumental, pero con contraste más luminoso y vibrante.

**Vibe en una línea:** *logística urbana eléctrica, alta velocidad, voseo, con azul vibrante `#0950F6` como tope de oscuridad.*

### 1.1 Identidad y Audiencia

Envíos DosRuedas proyecta la solidez, velocidad y confiabilidad de una infraestructura logística propia con 15+ años ininterrumpidos en las calles de Mar del Plata (Partido de General Pueyrredón). La interfaz fusiona el rigor de la señalética vial y portuaria con la agilidad de una plataforma de última milla contemporánea.

**Audiencia objetivo:** Comercios, e-commerces, vendedores MercadoLibre y particulares en Mar del Plata que necesitan envíos urgentes, same-day o programados.

**Respuesta emocional:** Confianza inmediata, velocidad, precisión operativa, cercanía local.

### 1.2 Principios de Diseño

| Principio | Descripción |
|---|---|
| **Señalética como lenguaje** | Colores, tipografía y formas derivados de la señalética vial y portuaria. |
| **Voseo rioplatense** | Todo copy en voseo: "Cotizá", "Enviá", "Rastreá". |
| **Azul como lienzo, amarillo como señal** | `#0950F6` es el fondo/estructura; `#FFEC01` es la única activación de atención. |
| **Asimetría intencional** | Hero 7/5, Bento asimétrico, never centered on desktop. |
| **Motion físico** | Resortes (stiffness 100, damping 20), stagger 0.08s, kill-switch `prefers-reduced-motion`. |

---

## 2. Colors

### 2.1 Ley de Tres Colores

El sistema utiliza **únicamente tres colores corporativos**:

| Color | Hex | Uso |
|---|---|---|
| **Azul Vibrante (Primary MAX)** | `#0950F6` | Canvas oscuro, nav, footer, H1/H2, texto cuerpo, focus ring. Es el azul más oscuro permitido. |
| **Amarillo Vial (Accent)** | `#FFEC01` | CTA primario, badges, stepper activo, glow vivo, franja footer 6px. Señal, nunca superficie. |
| **Blanco Puro** | `#FFFFFF` | Fondo página, tarjetas inner, inputs, modales. |

> **Prohibido:** Cualquier azul más oscuro que `#0950F6`, escalas neutras genéricas (`slate/gray/zinc/neutral`), verde en UI, negro puro, hex inline.

### 2.2 Tabla Maestra de Tokens

| Rol Semántico | Hex | Token Tailwind | CSS Var |
|---|---|---|---|
| Primary / Trust MAX | `#0950F6` | `brand-blue-700` | `--color-brand-blue` |
| Pure Canvas White | `#FFFFFF` | `brand-white-50` | `--surface-page` |
| Ice Blue Tint | `#E6EEFE` | `brand-blue-50` | `--surface-muted` |
| Blueprint Border | `#BACEFD` | `brand-blue-100` | `--border-subtle` |
| Sky Blueprint | `#628FF9` | `brand-blue-300` | `--border-hover` |
| Steel Blue Muted | `#3570F8` | `brand-blue-400` | `--text-muted` |
| Ultramarine Action | `#0950F6` | `brand-blue-500` | `--focus-ring` |
| Primary Hover | `#3570F8` | `brand-blue-800` | `--action-primary-hover` |
| Electric Signal Yellow | `#FFEC01` | `brand-yellow-500` | `--color-brand-yellow` |
| Signal Yellow Bright | `#FFF12E` | `brand-yellow-400` | `--action-accent-hover` |
| Amber Flare | `#E6D400` | `brand-yellow-600` | `--action-accent-pressed` |
| Pale Signal | `#FFFAB8` | `brand-yellow-100` | `--stepper-complete` |
| Text on Accent MAX | `#0950F6` | `brand-blue-900` | `--text-on-accent` |
| Body Ink MAX | `#0950F6` | `brand-ink` | `--text-body` |
| Ultra Deep Void MAX | `#0950F6` | `brand-blue-950` | `--surface-deep` |
| Glass on Blue | `rgba(255,255,255,0.06)` | — | `--surface-glass` |
| Alert Red | `#EF4444` | — | `--action-danger` |

### 2.3 Reglas de Contraste (Verificadas)

| Par | Ratio | Cumple |
|---|---|---|
| Blanco sobre `#0950F6` | 6.2:1 | ✅ AA Normal + Large |
| `#0950F6` sobre blanco | 6.2:1 | ✅ AA Normal + Large |
| `#0950F6` sobre `#FFEC01` | 5.8:1 | ✅ AA Large (bold ≥ 14px) |
| `#3570F8` sobre blanco | 4.4:1 | ✅ AA Large (≥ 18px o bold) |

### 2.4 Reglas de Aplicación

- **Sombras teñidas:** `rgba(9,80,246,α)` (azul) o `rgba(255,236,1,α)` (amarillo). Prohibido `rgba(0,0,0,α)` y `rgba(0,39,124,α)`.
- **Amarillo = señal:** Nunca superficie completa, solo CTAs, badges, steppers, knockouts, franjas ≤ 6px.
- **Azul sobre azul:** Texto blanco, bordes `rgba(255,255,255,0.12)`, acentos `#FFEC01`.

---

## 3. Typography

### 3.1 Familias Tipográficas

| Rol | Familia | Token | Tratamiento |
|---|---|---|---|
| **Display / Impacto** | **Anton** | `font-display` | Uppercase, leading 0.8–1.0, tracking -0.05em, text-wrap balance. Fluid: `clamp(3rem,5vw,4.5rem)`. |
| **Subtítulos / Labels / Badges / Botones** | **Bebas Neue** | `font-subheading` | Uppercase, tracking 0.05–0.1em, peso 700. |
| **Cuerpo / UI** | **Outfit** (fallback IBM Plex Sans) | `font-sans` | Sentence case, leading 1.625, max-w-prose (65ch), min 16px. |
| **Métricas / Tarifas / Tracking** | **Geist Mono** | `font-mono` | `tabular-nums` obligatorio. Precios, distancias, códigos. |

> **Prohibido:** Inter, Roboto, system sans, serifs genéricas. Title Case en oraciones. Display/subheading siempre UPPERCASE; cuerpo sentence case.

### 3.2 Escala Jerárquica Fluida

```css
.text-display { font-family: var(--font-display); font-size: clamp(3rem,5vw,4.5rem); line-height: 1.05; letter-spacing: -0.02em; text-wrap: balance; text-transform: uppercase; color: #0950F6; }
.text-h1 { font-family: var(--font-display); font-size: clamp(2.25rem,4vw,3rem); line-height: 1.1; letter-spacing: -0.015em; text-wrap: balance; text-transform: uppercase; color: #0950F6; }
.text-h2 { font-family: var(--font-display); font-size: clamp(1.75rem,3vw,2.25rem); line-height: 1.2; letter-spacing: -0.01em; text-wrap: balance; text-transform: uppercase; color: #0950F6; }
.text-h3 { font-family: var(--font-subheading); font-size: clamp(1.25rem,2vw,1.5rem); line-height: 1.4; letter-spacing: 0.02em; text-wrap: pretty; text-transform: uppercase; color: #0950F6; }
```

Tokens Tailwind: `--text-2xs: 0.625rem` (10px) · `--text-xs: 0.75rem` · `--text-sm: 0.875rem` · `--text-base: 1rem` · `--text-lg: 1.125rem` · `--text-xl: 1.25rem` · `--text-2xl: 1.5rem` · `--text-3xl: 1.875rem` · `--text-4xl: 2.25rem` · `--text-5xl: 3rem` · `--text-6xl: 3.75rem` · `--text-7xl: 4.5rem` · `--text-8xl: 6rem` · `--text-9xl: 9rem`.

### 3.3 Tratamientos de Firma

1. **Knockout Rotado (−1°):** fondo `#FFEC01`, texto `#0950F6`, `px-3 py-1 rounded`, `rotate(-1deg)`. Máx. 1 por titular.
2. **Titular Outline Transparente:** display itálico, relleno transparente, `-webkit-text-stroke: 2px #0950F6`.
3. **Ghost Wordmark:** "ENVÍOS DOS RUEDAS" `font-display text-[15vw] text-white/[0.04] whitespace-nowrap` detrás del hero.
4. **Texto superior en iconos:** iconos con texto blanco `#FFFFFF` y stroke `2px #0950F6`; slab inferior amarillo `#FFEC01` a −1° con texto `#0950F6`.
5. **Kinetic Font Stretch:** `.kinetic-font-stretch` en hover: `scaleX(1.08)` + `letter-spacing: 0.02em`, 400ms cubic-bezier(0.25,1,0.5,1).
6. **Eyebrow + Cifra (StatBlock):** eyebrow `Bebas Neue text-2xs tracking-mega text-brand-blue-400` (`#3570F8`) + cifra `Geist Mono tabular-nums text-3xl text-brand-blue-700` (`#0950F6`).

---

## 4. Layout & Spacing

### 4.1 Contenedor Canónico

`max-w-7xl` (1280px), `mx-auto px-4 sm:px-6 lg:px-8`. Secciones full-bleed para fondos tonales, contenido dentro del contenedor.

### 4.2 Ritmo Vertical Modular

`py-[clamp(3rem,8vw,6rem)]`; separación `gap-8` entre tarjetas, `gap-4` entre controles/formularios.

### 4.3 CSS Grid 12 Columnas

`grid-cols-12` declarativo; nunca `calc()` ni porcentajes rígidos inline.

### 4.4 Bento Asimétrico (Servicios)

`grid-cols-12 gap-6 lg:gap-8 auto-rows-[380px]`:
- Express + Depósito 3PL: `lg:col-span-7`
- LowCost + Flex: `lg:col-span-5`
- Cotizador: `col-span-12`
- Tablet: `grid-cols-2`; Mobile: `grid-cols-1`

### 4.5 Zig-Zag Editorial

Alternancia imagen/texto 5/7 y 7/5 por fila en features y procesos.

### 4.6 Reglas Críticas

- **Sin superposición destructiva:** Cada elemento en su propia caja; solo texturas decorativas en capa trasera con `pointer-events-none aria-hidden`.
- **Alturas seguras:** `min-h-[100dvh]` o `min-h-[90dvh]`. **`h-screen` prohibido.**
- **Ritmo Cromático Home (Alternancia Obligatoria):**
  1. Hero: `brand-blue-700` (`#0950F6`)
  2. Trust Bar: `brand-blue-50` (`#E6EEFE`)
  3. Servicios: Blanco `#FFFFFF`
  4. Cómo Funciona: `brand-blue-700`
  4. Prueba Social: Blanco
  5. CTA Final: `brand-blue-700` con tarjeta blanca `rounded-3xl`
  6. Footer: `brand-blue-700` + franja amarilla 6px
  *Nunca dos bloques azules consecutivos ni dos blancos sin separador tonal.*

### 4.5 Breakpoints Canónicos

320px · 375px · 768px · 1024px · 1280px · 1920px

---

## 5. Elevation & Depth

### 5.1 Double Bezel System

```html
<div class="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300">
  <div class="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-inner overflow-hidden">
    <!-- contenido -->
  </div>
</div>
```

- **Outer:** `bg-brand-blue-50/80` (`#E6EEFE`), `border-brand-blue-100` (`#BACEFD`), `rounded-2xl` (16px), `p-2`, `shadow-float` `rgba(9,80,246,0.12)`. Hover: `shadow-antigravity-deep` (`rgba(9,80,246,0.18)`) + `border-brand-blue-300` (`#628FF9`).
- **Inner:** `bg-white`, `rounded-xl` (12px), `p-6`, `shadow-inner`, `overflow-hidden`.

### 5.2 Glass on Blue (Sobre `#0950F6`)

`rgba(255,255,255,0.06)` + borde `1px solid rgba(255,255,255,0.12)` + `backdrop-blur-md`, `rounded-3xl`.

### 5.3 Float / Tilt Card (Hero 3D)

`perspective-1000`, card `preserve-3d`; mousemove → `rotateX(±8deg) rotateY(±8deg)` lerp 0.1; hover `translateY(-6px)` + sombra `rgba(9,80,246,0.18)`. Desactivado en `prefers-reduced-motion` y táctil.

### 5.4 Sombras

Solo `rgba(9,80,246,α)` (azul) o `rgba(255,236,1,α)` (amarillo). **Prohibido** `rgba(0,0,0,α)` y tonos midnight.

---

## 6. Shapes

| Elemento | Radio | Token |
|---|---|---|
| Botones / Píldoras / Badges | `rounded-full` (9999px) | — |
| Tarjetas Outer | `rounded-2xl` (16px) | `rounded-2xl` |
| Tarjetas Inner / Inputs / Modales | `rounded-xl` (12px) | `rounded-xl` |
| Glass Panels / Hero Card Media | `rounded-3xl` (24px) | `rounded-3xl` / `rounded-[28px]` |
| Botones CTAs | `rounded-full` min-h 44px | — |

**Bordes:** 2px estructurales (`brand-blue-100`), 1px divisores (`brand-blue-100`/50% opacity).

---

## 7. Components

### 7.1 CTA Nested Pill (Canónico)

| Prop | Valor |
|---|---|
| Forma | `rounded-full`, `font-subheading uppercase tracking-[.05em] font-bold` |
| Padding | `px-8 py-3` (large) / `px-4 py-2` (compact) |
| Altura mínima | 44px (56/64px marketing) |
| Icono anidado | `w-8 h-8 rounded-full`, hover `translateX(4px)` |

**Variantes:**

| Variante | Fondo | Texto | Borde | Icono hover | Sombra |
|---|---|---|---|---|---|
| `--primary` | `#FFEC01` | `#0950F6` | — | `bg-[#0950F6]/10` → `bg-[#0950F6]/15` + `translateX(4px)` | `shadow-accent-sm` → `shadow-cta-glow` |
| `--elevated` | `#FFFFFF` | `#0950F6` | `#BACEFD` | `bg-[#0950F6]/10` → `bg-[#0950F6]` + white | `shadow-elevated` → `shadow-hover-lift` |
| `--outline` | transparente | `#0950F6` | 2px `#0950F6` | — | hover `bg-brand-blue-50` |
| `--ghost` | transparente | `#0950F6` | transparente | — | hover `bg-brand-blue-50` |

- **Hover primary:** `#FFF12E`. **Active:** `scale-[.98] translateY(1px)`.
- **Focus-visible:** `ring-2 ring-brand-blue-500` offset 2.
- **WhatsApp:** Siempre fondo `#FFEC01`, hover `#FFF12E`, glifo SVG con verde interno. **Nunca botón verde de fondo.**

### 7.2 Cards — Double Bezel

Ver sección 5.1. Variante Glass sobre azul: `rgba(255,255,255,0.06)` + borde `rgba(255,255,255,0.12)` + `backdrop-blur-md`, `rounded-3xl`.

### 7.3 Inputs & Forms

- **Campo:** `h-11` (44px), `border-2 border-brand-blue-300` `rounded-xl bg-white pl-10`, texto `#0950F6`.
- **Estados:** hover `border-brand-blue-200`; focus `border-brand-blue-700` + `ring-2 ring-brand-blue-500/20`; error `border-[#EF4444]` + `ring-[#EF4444]/20` + `aria-invalid`; disabled `bg-brand-blue-50/50`.
- **Label:** `font-subheading uppercase tracking-[.05em] text-sm text-brand-blue-700 font-bold`. Sin floating labels.
- **Help:** `font-mono text-[11px] text-brand-blue-400` (`#3570F8`).
- **Error:** `font-sans text-sm text-[#EF4444]` con `AlertCircle` 16px, `role="alert"`.

### 7.2 Steppers & Progress

- **Horizontal:** línea 2px `#BACEFD`; completado `#FFEC01`. Círculos 40px: completed `#FFEC01` + `Check`; active `#0950F6` + `ring-4 ring-brand-blue-500/30`; pending `#BACEFD`.
- **Vertical (sobre `#0950F6`):** línea 2px `brand-blue-100`; dots 24px borde blanco 3px. Completed `#FFEC01` + halo; active `#FFEC01` + `ring-4 ring-brand-yellow-500/30` + `animate-pulse-subtle`; pending `#BACEFD`. **Nunca verde.**

### 7.3 Badges, Chips & Status

- **Badges:** `px-3 py-1 rounded-full font-subheading text-xs uppercase tracking-widest font-bold`.
  - `accent`: `#FFEC01` / `#0950F6`
  - `outline`: border `#BACEFD` / `#0950F6`
  - `flex`: `#FFEC01` bg / `#0950F6` texto
- **Status dot vivo:** 8px `#FFEC01` + `box-shadow: 0 0 10px rgba(255,236,1,0.8)` + `animate-pulse-subtle`.

---

## 8. Do's and Don'ts

### Color y Superficie

| ✅ Do | ❌ Don't |
|---|---|
| Usar `#0950F6` como azul máximo | Usar `#0636A5`, `#052D8C`, `#04236B`, `#021440`, `#00277C` |
| Amarillo `#FFEC01` solo en CTAs/badges/steppers | Amarillo como fondo de secciones o párrafos |
| Sombras `rgba(9,80,246,α)` / `rgba(255,236,1,α)` | Sombras `rgba(0,0,0,α)` o `rgba(0,39,124,α)` |
| Texto cuerpo `#0950F6` sobre blanco | Negro puro `#000000` |
| Escalas `brand-blue-*`, `brand-yellow-*` | `slate-*`, `gray-*`, `zinc-*`, `neutral-*`, hex inline |

### Tipografía y Copy

| ✅ Do | ❌ Don't |
|---|---|
| Anton/Bebas/Outfit/Geist Mono | Inter, Roboto, system sans, serifs genéricas |
| Display/Subheading UPPERCASE | Title Case en oraciones |
| Voseo rioplatense concreto | "Elevá tu logística", "Seamless", "Unleash", "Next-Gen" |
| Anclas reales MDQ ("Friuli 1972", "Güemes") | "Juan Pérez", "Acme Corp", "99.99% uptime" |

### Layout e Interacción

| ✅ Do | ❌ Don't |
|---|---|
| Hero asimétrico 7/5 desktop | Hero centrado en desktop |
| `min-h-[100dvh]` / `min-h-[90dvh]` | `h-screen` |
| Double Bezel cards | `border-l-4` / side-tabs |
| `transform`/`opacity` en animaciones | Animar `width`/`height`/`padding` |
| Touch targets ≥ 44×44px | Targets pequeños |
| `motion.div` solo en Client Components | `motion` en Server Components |

### Accesibilidad

| ✅ Do | ❌ Don't |
|---|---|
| Contraste ≥ 4.5:1 (cuerpo), 3:1 (UI) | Contrastes bajos |
| Touch targets ≥ 44×44px | Targets < 44px |
| `role="alert"` en errores | Errores sin anuncio |
| `alt` descriptivo en imágenes | `alt=""` o genérico |

---

## 9. Appendix: Stitch / Subagent Block

```markdown
DESIGN SYSTEM — ENVÍOS DOSRUEDAS 2026 MAX #0950F6:
- Brand Colors: Primary "Vibrant Blue" #0950F6 (brand-blue-700), tope de oscuridad — hero, nav, footer, H1/H2, body text. Accent Signal Yellow #FFEC01 (brand-yellow-500), hover #FFF12E, pressed #E6D400 — badges, CTA, stepper activo, glow vivo, franja footer 6px. Señal, nunca superficie. Surface Base White #FFFFFF. Soft Tint Ice Blue #E6EEFE — outer bezel. Structural Border #BACEFD, hover #628FF9. Focus ring Ultramarine #0950F6 (igual primary). Body text #0950F6. Text on yellow #0950F6. Muted #3570F8. Deepest #0950F6. FORBIDDEN: azul más oscuro que #0950F6 (#0636A5, #052D8C, #04236B, #021440, #00277C), slate/zinc/gray/neutral, CTAs/steppers verdes, negro puro, hex inline, segundo acento. Sombras teñidas rgba(9,80,246,α) / rgba(255,236,1,α).
- Typography: Anton uppercase, line-height 0.8–1.0, tracking -0.05em, text-wrap balance, fluid clamp. Bebas Neue uppercase, tracking 0.05–0.1em. Outfit sentence case, 1.625, 65ch, min 16px. Geist Mono tabular-nums ($4.600 ARS, 3,7 km). Firma: un knockout amarillo-sobre-azul rotado -1° por titular, stroke 2px #0950F6, ghost wordmark 15vw/4% blanco. BANNED: Inter, system sans, Title Case. Texto superior íconos blanco #FFFFFF con stroke 2px #0950F6, slab inferior amarillo #FFEC01 a -1° con texto #0950F6.
- Hero: grid asimétrico 7/5 sobre #0950F6 con glow blanco radial + blooms amarillos 10–18% blur 80–130px, min-h-[90dvh]. Izquierda: badge + titular Anton 2–3 líneas (un knockout) + promesa + UN CTA primario + 3 chips. Derecha: tarjeta tilt, Hero Card Media (diorama 3D isométrico transparente, 1:1 home / 4:3 resto, fill object-contain) o foto real courier con tinte azul multiply, rounded-3xl. Sin hero centrado en desktop.
- Components: Double Bezel — outer bg-brand-blue-50/80 border-brand-blue-100 rounded-2xl p-2 shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300, inner bg-white rounded-xl p-6 shadow-inner. CTA Nested Pill — rounded-full uppercase Bebas tracking .05em, bg-yellow-500 text-blue-900 (#0950F6), px-8 py-3 min-h-[44px] + ícono anidado 32px bg-blue/10, translateX(4px) hover, active scale-.98, focus ring-2 ring-blue-500. Variante elevada: fondo blanco, texto azul, borde blue-100. Inputs — h-11 border-2 border-blue-300 rounded-xl pl-10, label Bebas uppercase, help mono 11px blue-500, error rojo role="alert". Steppers — completado/activo siempre yellow-500, nunca verde. Glass on blue — rgba(255,255,255,0.06) + borde 1px rgba(255,255,255,0.12) + blur 12px, rounded-3xl.
- Layout: container max-w-7xl, secciones py clamp, Bento 12 columnas 7/5/12, auto-rows 380px, gap-6 lg:gap-8, zig-zag 5/7, CSS Grid sin calc, min-h-[100dvh] nunca h-screen, columna única <768px, sin overflow, touch ≥44px, sin superposición.
- Motion: springs stiffness 100 damping 20, stagger 0.08s, whileInView once, loops solo elementos activos (float-slow 4s, pulse-subtle 3s, border-pulse 2s, logos-scroll 30s), solo transform/opacity, kill-switch prefers-reduced-motion.
```