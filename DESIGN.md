# Design System: Envíos DosRuedas (Sovereign Infrastructure & Heritage Logistics)

**Ajuste 2026 — Max `#0950F6`**  
**Project ID:** `EnviosDosruedasDesignSystem_a2df0d`

> **Regla fundamental de este ajuste:** `#0950F6` es el azul máximo (más oscuro permitido) en todo el sistema. Se eliminan todos los azules más oscuros que `#0950F6`: `#0636A5`, `#052D8C`, `#04236B`, `#021440`, `#00277C`. Este documento reemplaza a la versión anterior (la que sí conservaba esos tonos como tokens vigentes) y mantiene la Ley de Tres Colores. Es la spec de referencia para generación en Stitch — no está aplicada al sitio en producción salvo que se pida explícitamente.

---

## 1. Visual Theme & Atmosphere

**Mood:** logística urbana de precisión, industrial-moderno de alta velocidad, hablando en voseo. Paleta aclarada: base profunda `#0950F6` (antes `#0636A5`) para cumplir el máximo de oscuridad. Misma energía de señalética vial monumental, pero con contraste más luminoso y vibrante.

**Vibe en una línea:** *logística urbana eléctrica, alta velocidad, voseo, con azul vibrante `#0950F6` como tope de oscuridad.*

### 1.1 Calibración Sensorial (Taste Spectrum)

| Eje | Valor | Lectura |
|---|---|---|
| **Creativity** | 9/10 | Afiche deportivo urbano costero, bloques duros, sin azules midnight ni tonos sombríos. |
| **Variance** | 8/10 | Bento asimétrico 7/5/12, split hero 7/5, knockout rotado −1°, slab amarillo sangrando borde. **El hero centrado en desktop está estrictamente prohibido.** |
| **Motion** | 7/10 | Springs físicos (`stiffness: 100, damping: 20`), reveals en cascada (`staggerChildren: 0.08`), micro-loops activos en estado vivo, tilt 3D en tarjeta hero. |
| **Density** | 6/10 | Panel logístico preciso (métricas en Geist Mono) + respiración premium (`py-24`, `max-w-prose`, ritmo modular). |

### 1.2 Narrativa de Atmósfera & Identidad

Envíos DosRuedas proyecta la solidez, velocidad y confiabilidad de una infraestructura logística propia con 15+ años ininterrumpidos en las calles de Mar del Plata (Partido de General Pueyrredón). La interfaz fusiona el rigor de la señalética vial y portuaria con la agilidad de una plataforma de última milla contemporánea. Lienzos limpios en **Blanco Puro (`#FFFFFF`)** contrastan con bloques monumentales en **Azul Vibrante (`#0950F6`)** y una única señal de alta energía en **Amarillo Vial (`#FFEC01`)**.

Todo comunica tracción inmediata: la tipografía empuja con peso visual contundente, los botones ofrecen resistencia táctil al click y las tarjetas flotan con elevación gravitacional teñida al azul o amarillo corporativo (nunca sombras grises o neutras).

### 1.3 Firma Geométrica & Elevación (Ajustada)

- **Contenedores Double-Bezel:** outer `bg-brand-blue-50/80` (`#E6EEFE`), borde `brand-blue-100` (`#BACEFD`), `rounded-2xl p-2 shadow-float` (sombra teñida `rgba(9,80,246,0.12)`) + inner `bg-white rounded-xl p-6 shadow-inner border border-brand-blue-50/50`.
- **Insignias de Velocidad:** badges y píldoras rotadas suavemente (`-rotate-1` / `rotate-1`).
- **Resplandor de Señal Vial:** halo amarillo `shadow-cta-glow` (`rgba(255,236,1,0.45)`) y azul vibrante `shadow-glow-blue` (`rgba(9,80,246,0.35)`) — resplandor cálido de señal, nunca neón cibernético.
- **Hero Card Media:** diorama 3D isométrico, clay mate + satin plastic, bordes redondeados y geometría chunky, paleta con tope `#0950F6` como cara más oscura.

---

## 2. Color Palette & Roles — AJUSTADA (Max `#0950F6`)

> **REGLA FUNDAMENTAL DE MARCA:** el sistema cromático utiliza **únicamente tres colores corporativos** —Azul Vibrante (tope `#0950F6`), Amarillo Vial (`#FFEC01`) y Blanco Puro (`#FFFFFF`)— más sus escalas oficiales más claras que `#0950F6`.
>
> **Queda terminantemente prohibido cualquier azul más oscuro que `#0950F6`** (`#0636A5`, `#052D8C`, `#04236B`, `#021440`, `#00277C` quedan totalmente eliminados). También están prohibidas las escalas genéricas de Tailwind (`slate-*`, `gray-*`, `zinc-*`, `neutral-*`), colores externos (`green-*`, `purple-*`, `cyan-*`) y `red-*` salvo el estado semántico de error `#EF4444`.

### 2.1 Tabla Maestra de Tokens Cromáticos

| Rol Semántico | Hex | Token Tailwind / CSS | Rol Funcional (Ajustado) |
|---|---|---|---|
| **Primary / Trust MAX** | `#0950F6` | `brand-blue-700` / `--color-brand-blue` | Antes `#0636A5`, ahora `#0950F6`. Header, footer, navegación, secciones invertidas, H1/H2, marcos institucionales. Es el azul más oscuro permitido. Canvas del hero `bg-brand-blue-700`. |
| **Pure Canvas White** | `#FFFFFF` | `brand-white-50` / `--surface-page` | Fondo de página, núcleo de tarjetas (`double-bezel-inner`), inputs, modales, tablas. |
| **Ice Blue Tint** | `#E6EEFE` | `brand-blue-50` / `--surface-muted` | Soft canvas / outer bezel — marco exterior de tarjetas, secciones alternas suaves, skeleton. Más claro que `#0950F6`, OK. |
| **Blueprint Border** | `#BACEFD` | `brand-blue-100` / `--border-subtle` | Bordes estructurales de tarjetas e inputs (2px), divisores 1px, líneas inactivas de steppers. |
| **Sky Blueprint** | `#628FF9` | `brand-blue-300` | Hover border — borde de outer bezel en hover y foco suave. Más claro que `#0950F6`, OK. |
| **Steel Blue Muted** | `#3570F8` | `brand-blue-400` / `--text-muted` | Texto muted — metadatos y eyebrows ≥ 18px. Más claro que `#0950F6`, contraste 4.4:1 sobre blanco, OK. |
| **Ultramarine Action MAX** | `#0950F6` | `brand-blue-500` / `--focus-ring` | Interactive/focus — botones secundarios, anillo de foco universal. Mismo valor que Primary: es el tope. |
| **Primary Hover** | `#3570F8` | `brand-blue-800` / `--action-primary-hover` | Antes `#052D8C`, ahora `#3570F8`. Hover de botones azules sólidos. Al no poder oscurecer más que `#0950F6`, se aclara levemente para feedback visual. |
| **Electric Signal Yellow** | `#FFEC01` | `brand-yellow-500` / `--color-brand-yellow` | CTA primario oficial, badges de alta prioridad, dots de stepper activos, franja de footer 6px. Señal, nunca superficie. |
| **Signal Yellow Bright** | `#FFF12E` | `brand-yellow-400` / `--action-accent-hover` | Accent hover — hover de CTA primario y WhatsApp. |
| **Amber Flare** | `#E6D400` | `brand-yellow-600` | Accent pressed — estado `:active` del CTA y badges seleccionados. |
| **Pale Signal** | `#FFFAB8` | `brand-yellow-100` | Anillo de stepper completado, fondo de badge Flex. |
| **Text on Accent MAX** | `#0950F6` | `brand-blue-900` / `--text-on-accent` | Antes `#04236B`, ahora `#0950F6` — texto sobre amarillo (CTA primary, badges). Contraste `#0950F6` sobre `#FFEC01` ≈ 5.8:1, cumple AA Large (bold ≥ 14px). |
| **Body Ink MAX** | `#0950F6` | `brand-ink` / `--text-body` | Antes `#00277C`, ahora `#0950F6` — texto de cuerpo, párrafos, valores de inputs. Contraste sobre blanco ≈ 6.2:1, cumple AA (≥ 4.5:1). Reemplaza al negro. |
| **Ultra Deep Void MAX** | `#0950F6` | `brand-blue-950` | Antes `#021440`, ahora `#0950F6` — footer profundo, overlays. Es el mismo azul que el hero, sin tonos midnight. |
| **Glass on Blue** | `rgba(255,255,255,0.06)` | `--surface-glass` | Paneles flotantes sobre azul + borde `1px solid rgba(255,255,255,0.12)` + `backdrop-blur` 12px, `rounded-3xl`. |
| **Alert Red** | `#EF4444` | `--action-danger` | Solo bordes/anillos de error de formulario y acciones destructivas confirmadas. Jamás decorativo. |

### 2.2 Reglas de Aplicación Ajustadas

- **Sombras teñidas con tope `#0950F6`:** `rgba(9,80,246,α)` o `rgba(53,112,248,α)` para sombras azules; CTAs amarillos con bloom `rgba(255,236,1,α)`. Quedan terminantemente prohibidas sombras `rgba(0,39,124,α)`, `rgba(6,54,165,α)` y grises `rgba(0,0,0,…)`.
- **Contrastes verificados con el nuevo tope:**
  - Blanco sobre `#0950F6`: **6.2:1** (cumple WCAG AA normal y large).
  - `#0950F6` sobre blanco: **6.2:1** (cumple WCAG AA normal y large).
  - `#0950F6` sobre `#FFEC01`: **5.8:1** (cumple WCAG AA Large para bold ≥ 14px o regular ≥ 18px).
  - `#3570F8` sobre blanco: **4.4:1** (apto para eyebrows técnicos ≥ 18px o bold).
- **Amarillo = señal, nunca superficie:** jamás usar `#FFEC01` como fondo de secciones completas ni para párrafos continuos de texto; su función exclusiva es activar atención en CTAs, badges, steppers, knockouts y franjas ≤ 6px.
- **Azul sobre azul:** en secciones invertidas con fondo `#0950F6`, el texto primario es blanco puro (`#FFFFFF`), los bordes sutiles usan `rgba(255,255,255,0.12)` y los acentos interactivos son Amarillo Vial (`#FFEC01`).

---

## 3. Typography Rules & Architecture

### 3.1 Familias Tipográficas Oficiales (cargadas vía `next/font/google`)

| Rol | Familia | Token | Tratamiento (Ajustado) |
|---|---|---|---|
| **Display / Impacto** | **Anton** (Anton SC como alias) | `font-display` / `--font-headline` | Uppercase obligatorio, `leading` 0.8–1.0, tracking `-0.05em` a `-0.025em`, `text-wrap: balance`. H1/H2, cifras de impacto, ghost wordmark. Fluid: `clamp(3rem,5vw,4.5rem)` display / `clamp(2.25rem,4vw,3rem)` H1 / `clamp(1.75rem,3vw,2.25rem)` H2. Color de texto: `brand-blue-700` = `#0950F6` sobre blanco; `#FFFFFF` sobre azul. |
| **Subtítulos / Labels / Badges / Botones** | **Bebas Neue** | `font-subheading` | Uppercase obligatorio, tracking `0.05em`–`0.1em`, peso visual 700. H3, eyebrows, nav, headers de tabla, labels de CTA/input. Color `#0950F6` sobre blanco; `#FFFFFF` o `#FFEC01` sobre azul. |
| **Cuerpo / UI** | **Outfit** (fallback IBM Plex Sans) | `font-sans` / `--font-body` | Sentence case, `leading-relaxed` (1.625), `max-w-prose` (~65ch), pesos 400–600, mínimo 16px (1rem). Color de cuerpo: `brand-ink` ahora `#0950F6` en vez de `#00277C` sobre blanco; blanco/85 sobre azul. |
| **Métricas / Tarifas / Tracking** | **Geist Mono** | `font-mono` | `font-variant-numeric: tabular-nums` siempre obligatorio. Precios (`$4.600 ARS`), distancias (`3,7 km`), códigos de seguimiento, coordenadas, help text (10px). Color `#0950F6` o `#3570F8` (muted). |

> **Prohibido:** `Inter`, `Roboto`, `Arial` y system sans en contextos de marca; serifs genéricas (`Times New Roman`, `Georgia`, `Garamond`). BANNED: Title Case en oraciones; el display y subheading van en UPPERCASE por regla, y el cuerpo en sentence case.

### 3.2 Escala Jerárquica y Clases de Utilidad Fluidas

Tokens (`@theme`): `--text-2xs: 0.625rem` (10px, eyebrows técnicos) · `--text-xs: 0.75rem` · `--text-sm: 0.875rem` · `--text-base: 1rem` · `--text-lg: 1.125rem` · `--text-xl: 1.25rem` · `--text-2xl: 1.5rem` · `--text-3xl: 1.875rem` · `--text-4xl: 2.25rem` · `--text-5xl: 3rem` · `--text-6xl: 3.75rem` · `--text-7xl: 4.5rem` · `--text-8xl: 6rem` · `--text-9xl: 9rem` (display monumental en contacto/hero).

```css
.text-display {
  font-family: var(--font-display);
  font-size: clamp(3rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-wrap: balance;
  text-transform: uppercase;
  color: var(--color-brand-blue, #0950F6);
}
.text-h1 {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
  text-wrap: balance;
  text-transform: uppercase;
  color: var(--color-brand-blue, #0950F6);
}
.text-h2 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-wrap: balance;
  text-transform: uppercase;
  color: var(--color-brand-blue, #0950F6);
}
.text-h3 {
  font-family: var(--font-subheading);
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-wrap: pretty;
  text-transform: uppercase;
  color: var(--color-brand-blue, #0950F6);
}
```

### 3.3 Tratamientos de Firma Tipográfica (Ajustados a Max `#0950F6`)

1. **Knockout Rotado (−1°):** palabra clave resaltada con fondo `brand-yellow-500` (`#FFEC01`), texto `brand-blue-900` ahora `#0950F6`, `px-3 py-1 rounded` y `transform: rotate(-1deg)`. Máximo una ocurrencia por titular. Sobre azul puede invertirse a fondo `#0950F6` con texto `#FFEC01`.
2. **Titular Outline Transparente:** display itálico con relleno transparente y `-webkit-text-stroke: 2px #0950F6` (antes `#0636A5`), o blanco con trazo `#0950F6`. Reservado para la segunda línea de un titular H1.
3. **Ghost Wordmark:** "ENVÍOS DOS RUEDAS" en `font-display text-[15vw] text-white/[0.04] whitespace-nowrap` detrás del hero, con `pointer-events-none select-none aria-hidden`. Textura arquitectónica sutil.
4. **Texto superior en blanco e iconos:** iconos con texto superior blanco `#FFFFFF` y trazo/stroke `2px #0950F6`; slab inferior amarillo `#FFEC01` a −1° con texto `#0950F6`.
5. **Kinetic Font Stretch:** clase `.kinetic-font-stretch` en enlaces y CTAs clave: `transform: scaleX(1.08)` + `letter-spacing: 0.02em` en hover con `cubic-bezier(0.25, 1, 0.5, 1)` 400ms, `transform-origin: left`.
6. **Eyebrow + Cifra (StatBlock):** eyebrow en `Bebas Neue text-2xs tracking-mega text-brand-blue-400` (`#3570F8`) sobre cifra en `Geist Mono tabular-nums text-3xl text-brand-blue-700` (`#0950F6`).

---

## 4. Hero Section (Primera Impresión — Ajustado a Max `#0950F6`)

La home y cada landing de servicio abren con un hero que debe ser **asimétrico, concreto y sin relleno**:

- **Estructura Asimétrica 7/5:** `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center` con ratio 7/5. Columna izquierda (`lg:col-span-7`) para badge + titular Anton + promesa en voseo + CTA principal único + 3 chips factuales. Columna derecha (`lg:col-span-5`) para la tarjeta tilt 3D (`FloatTiltCard`) con su **Hero Card Media** (diorama 3D isométrico transparente) o foto real de courier con tinte multiply `#0950F6`.
- **Fondo del Hero Canvas:** `bg-brand-blue-700` ahora `#0950F6` (nunca `#0636A5`), con glow radial blanco centrado y blooms amarillos al 10–18% con `blur(80–130px)`. Prohibido hero centrado en desktop (`text-center` solo `< lg`).
- **Altura de Sección:** `min-h-[90dvh]` o `min-h-[100dvh]`. **Jamás usar `h-screen`** (genera salto catastrófico en navegadores móviles con barra dinámica).
- **Titular:** `font-display` uppercase en 2–3 líneas con **un** knockout rotado a −1°. Escala fluida `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`.
- **Badge de contexto:** pill `bg-brand-yellow-500 text-brand-blue-900` (ahora `#0950F6`), `font-subheading text-xs uppercase tracking-widest` con dato real verificable ("Mar del Plata · 15+ años · 2026").
- **Promesa + consecuencia:** párrafo conciso `text-lg text-white/85 max-w-prose` en voseo rioplatense: *"Si no llegamos a la hora acordada, el envío corre por nuestra cuenta. Sin excusas."*
- **CTA:** **un solo** CTA primario oficial (`CTANestedPill --primary`, ej. "Cotizá tu envío"). Enlace secundario solo de texto plano a tarifas o WhatsApp, sin competir visualmente.
- **Prueba operativa:** fila de 3 chips `font-subheading text-sm uppercase text-white/90` con datos factuales de MDQ ("Express en menos de 60 min", "Cobertura Gral. Pueyrredón", "Base operativa Friuli 1972").
- **Prohibido en el hero:** "Scroll para explorar", flechas/chevrons rebotando, texto superpuesto a imágenes, partículas violetas/neón, más de un acento amarillo grande.

---

## 5. Components & Component Stylings (Ajustados a Max `#0950F6`)

Las primitivas UI viven en `src/components/ui/` (`DoubleBezelCard`, `CTANestedPill`, `InputField`, `RadioCardGroup`, `StepperHorizontal`, `StepperVertical`, `LogosCarousel`, `FloatTiltCard`, `BentoGrid`, `Badge`).

### 5.1 Buttons — CTA Nested Pill

- **Forma:** `rounded-full`, `font-subheading uppercase tracking-[.05em] font-bold`, `px-8 py-3` (large) / `px-4 py-2` (compact). Altura mínima 44px (56/64px en CTAs de marketing).
- **Icono anidado:** círculo `w-8 h-8` (32px) `rounded-full`, `transition: transform, background-color, color`; en hover `translateX(4px)`.
- **Variantes y Tokens:**

| Variante | Fondo | Texto | Borde | Icono reposo → hover | Sombra reposo → hover |
|---|---|---|---|---|---|
| `--primary` | `brand-yellow-500` (`#FFEC01`) | `brand-blue-900` (`#0950F6`) | — | `bg-[#0950F6]/10` → `bg-[#0950F6]/15` + `translateX(4px)` | `shadow-accent-sm` → `shadow-cta-glow` (`rgba(255,236,1,0.45)`) |
| `--elevated` (sobre azul) | `brand-white-50` (`#FFFFFF`) | `brand-blue-700` (`#0950F6`) | `brand-blue-100` (`#BACEFD`) | `bg-[#0950F6]/10 text-[#0950F6]` → `bg-[#0950F6] text-white` | `shadow-elevated` → `shadow-hover-lift` |
| `--outline` | transparente | `brand-blue-700` (`#0950F6`) | `brand-blue-700` 2px (`#0950F6`) | — | hover `bg-brand-blue-50` (`#E6EEFE`) |
| `--ghost` | transparente | `brand-blue-700` (`#0950F6`) | transparente | — | hover `bg-brand-blue-50` (`#E6EEFE`) |

- **Hover primary:** fondo `brand-yellow-400` (`#FFF12E`). **Active:** `scale-[.98] translateY(1px)`.
- **Focus-visible:** `ring-2 ring-brand-blue-500` (`#0950F6`) con `ring-offset-2 ring-offset-white` (sobre azul: `ring-offset-[#0950F6]`).
- **Disabled:** `opacity-50 cursor-not-allowed`, sin eventos de hover.
- **WhatsApp CTA:** fondo **siempre** `brand-yellow-500` (`#FFEC01`), hover `brand-yellow-400` (`#FFF12E`), glifo SVG con trazo verde interno solo dentro del ícono. **Nunca botón verde de fondo.**

### 5.2 Cards — Double Bezel System

```html
<div class="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float transition-all duration-300 hover:shadow-antigravity-deep hover:border-brand-blue-300">
  <div class="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-inner overflow-hidden">
    <!-- contenido de la tarjeta -->
  </div>
</div>
```

- **Outer Bezel:** `bg-brand-blue-50/80` (`#E6EEFE`), `border-brand-blue-100` (`#BACEFD`), `rounded-2xl` (16px), `p-2` (8px), `shadow-float` teñida `rgba(9,80,246,0.12)`. En hover: `shadow-antigravity-deep` (`rgba(9,80,246,0.18)`) + `border-brand-blue-300` (`#628FF9`).
- **Inner Core:** `bg-white`, `rounded-xl` (12px), `p-6`, `shadow-inner` suave, `overflow-hidden`.
- **Variante Glass (sobre azul vibrante):** `--surface-glass` (`rgba(255,255,255,0.06)`) + borde `1px solid rgba(255,255,255,0.12)` + `backdrop-blur-md`, `rounded-3xl`.
- **Float / Tilt Card (hero 3D):** contenedor `perspective-1000`, card `preserve-3d`; mousemove → `rotateX(±8deg) rotateY(±8deg)` con lerp 0.1; hover `translateY(-6px)` + sombra teñida `rgba(9,80,246,0.18)`. Se desactiva con `prefers-reduced-motion` y en dispositivos táctiles.
- **Radio Card Group (selector de servicio):** `grid lg:grid-cols-3 grid-cols-1 gap-4`; card `bg-white border-2 border-brand-blue-100 rounded-xl p-6`. Checked Express: `bg-brand-blue-700` (`#0950F6`) y texto blanco; checked LowCost: `bg-brand-blue-50` (`#E6EEFE`) y texto `#0950F6`; checked Flex: `bg-brand-yellow-50` y texto `#0950F6`.

### 5.3 Inputs & Forms

- **Campo:** `h-11` (44px), `border-2 border-brand-blue-300` (`#628FF9`) `rounded-xl bg-white pl-10` (icono Lucide 20px a la izquierda), texto `brand-ink` ahora `#0950F6`, placeholder `brand-blue-500` (`#0950F6`).
- **Estados:** hover `border-brand-blue-200`; focus `border-brand-blue-700` (`#0950F6`) + `ring-2 ring-brand-blue-500/20`; error `border-[--action-danger]` (`#EF4444`) + `ring-2 ring-[#EF4444]/20` y `aria-invalid="true"`; disabled `bg-brand-blue-50/50 cursor-not-allowed`.
- **Label:** arriba del campo, `font-subheading uppercase tracking-[.05em] text-sm text-brand-blue-700` (`#0950F6`) `font-bold`. Sin floating labels.
- **Help text:** debajo, `font-mono text-[11px] text-brand-blue-400` (`#3570F8`).
- **Error text:** debajo, `font-sans text-sm text-[#EF4444]` con icono `AlertCircle` 16px, `role="alert"`.
- **Autocomplete de direcciones:** lista desplegable `bg-white border border-brand-blue-100 rounded-xl shadow-elevated`, opción activa `bg-brand-blue-50`; sugerencias reales de MDQ ("Güemes 3200", "Av. Constitución 5400", "Friuli 1972").

### 5.4 Steppers & Progress

- **Horizontal (cotizadores):** línea 2px `brand-blue-100` (`#BACEFD`); tramo completado `brand-yellow-500` (`#FFEC01`). Círculos de 40px: completed `bg-brand-yellow-500` con icono `Check`; active `bg-brand-blue-700` (`#0950F6`) con `ring-4 ring-brand-blue-500/30`; pending `bg-brand-blue-100`. Labels en `Bebas Neue` uppercase.
- **Vertical (Cómo Funciona, sobre azul `#0950F6`):** línea izquierda 2px `brand-blue-100`; dots de 24px con borde blanco 3px. Completed `brand-yellow-500` + halo `brand-yellow-100`; active `brand-yellow-500` + `ring-4 ring-brand-yellow-500/30` + `animate-pulse-subtle`; pending `brand-blue-100`. Números en `font-display text-h2`. **Estrictamente prohibido usar verde.**

### 5.5 Badges, Chips & Status

- **Badges:** píldora `px-3 py-1 rounded-full font-subheading text-xs uppercase tracking-widest font-bold`.
  - `accent`: `bg-brand-yellow-500 text-brand-blue-900` (texto `#0950F6`).
  - `outline`: `border border-brand-blue-200 text-brand-blue-700` (`#0950F6`).
  - `invert`: `bg-white/10 text-white border border-white/15`.
  - `flex`: `bg-brand-yellow-50 text-brand-blue-700` (`#0950F6`) `border border-brand-yellow-200`.
- **Status dot en vivo:** 8px `bg-brand-yellow-500` + `box-shadow: 0 0 10px rgba(255,236,1,0.8)` + `animate-pulse-subtle` para "En camino"; `bg-brand-blue-300` estático para pendiente.

### 5.6 Navigation & Footers

- **Header Institucional:** `fixed top-0 z-50 bg-brand-blue-700` (`#0950F6`); al scrollear `bg-brand-blue-700/95` (`#0950F6/95`), `backdrop-blur-md shadow-elevated border-b border-white/10` y transición de padding `py-4 → py-3`. Logo oficial `/logo-envios-simplified.webp` ≥ 120px de ancho. Enlaces en `Bebas Neue` uppercase `text-white hover:text-brand-yellow-500`, activo con subrayado animado amarillo.
- **Mobile Navigation (`< lg`):** botón disparador 44px; panel full-height en `bg-brand-blue-700` (`#0950F6`) con navegación en `font-subheading text-2xl`, CTA primario al pie, captura de `Escape` y focus trap.
- **Footer Institucional:** `bg-brand-blue-950` ahora `#0950F6` (antes `#021440`), con franja superior `h-1.5 bg-brand-yellow-500`. Columnas 4/3/3/2 en desktop, 1 en mobile; datos reales de contacto: *Friuli 1972 · 223 660-2699 · hola@enviosdosruedas.com · Mar del Plata*.

### 5.7 Feedback States (Loading · Empty · Error)

- **Skeleton:** bloques con animación `shimmer-bg` (gradiente `brand-blue-50 → brand-blue-100 → brand-blue-50`, 2.5s) que replican exactamente las proporciones del layout final. Sin spinners genéricos.
- **Empty state:** icono Lucide de 48px en contenedor `bg-brand-blue-50 rounded-2xl p-4`, título `text-h3` en `#0950F6`, copy en voseo accionable y CTA correspondiente. Ej.: *"Todavía no cargaste envíos. Ingresá el primero o cotizá tu ruta."*
- **Error state:** inline, `border-l-4 border-[--action-danger]` (`#EF4444`) sobre `bg-white`, texto `brand-ink` (`#0950F6`) y botón de reintento visible.
- **Toast:** esquina inferior derecha, `bg-brand-blue-700` (`#0950F6`) con texto blanco, `rounded-xl shadow-elevated border-l-4 border-brand-yellow-500`, entrada spring y `role="status"`.

### 5.8 Carousels & Media

- **Logos Carousel:** carril continuo `flex gap-12 animate-logos-scroll` (30s linear infinite) con máscara degradada en los extremos (`mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`). Logos en escala de grises con opacidad reducida; hover y foco a color completo. Pausa obligatoria en hover, focusin y visibilidad oculta; se desactiva con `prefers-reduced-motion`.
- **Slider de servicios:** touch targets ≥ 44px en controles de paginación y swipe táctil nativo.

---

## 6. Layout Principles & Whitespace Strategy

- **Contenedor Canónico:** `max-w-7xl` (1280px), centrado con `mx-auto px-4 sm:px-6 lg:px-8`. Secciones full-bleed para fondos tonales, contenido encapsulado dentro del contenedor.
- **Ritmo Vertical Modular:** `py-[clamp(3rem,8vw,6rem)]`; separación `gap-8` entre tarjetas y `gap-4` entre controles y formularios.
- **CSS Grid 12 Columnas:** grillas declarativas (`grid-cols-12`); nunca `calc()` fraccionario ni porcentajes rígidos inline.
- **Bento Asimétrico (Servicios):** `grid-cols-12 gap-6 lg:gap-8 auto-rows-[380px]`:
  - Envíos Express y Depósito Fulfillment 3PL: `lg:col-span-7`.
  - Envíos LowCost y Envíos Flex: `lg:col-span-5`.
  - Panel Cotizador Interactivo: `col-span-12`.
  - En tablet colapsa a `grid-cols-2`; en mobile colapsa a `grid-cols-1`.
- **Zig-Zag Editorial:** alternancia de imagen y texto 5/7 y 7/5 por fila en bloques de características y procesos.
- **Sin Superposición Destructiva:** cada elemento cuenta con su propia caja en el flujo; solo texturas decorativas (ghost wordmark, blooms, slabs) van en capa trasera con `pointer-events-none aria-hidden`.
- **Alturas Completas Seguras:** `min-h-[100dvh]` o `min-h-[90dvh]`. **`h-screen` prohibido.**
- **Ritmo Cromático de la Home (Canon de Alternancia — Ajustado a Max `#0950F6`):**
  1. **Hero:** `brand-blue-700` (`#0950F6`), split asimétrico 7/5, tarjeta tilt 3D.
  2. **Trust Bar:** `brand-blue-50` (`#E6EEFE`), StatBlocks en Geist Mono con datos reales.
  3. **Servicios:** fondo blanco (`#FFFFFF`), Bento asimétrico + Double Bezel.
  4. **Cómo Funciona:** `brand-blue-700` (`#0950F6`), Stepper vertical amarillo.
  5. **Prueba Social:** fondo blanco (`#FFFFFF`), carrusel de comercios marplatenses.
  6. **CTA Final:** panel `brand-blue-700` (`#0950F6`) con tarjeta blanca `rounded-3xl` y slab amarillo `-skew-x-12` al 10% sangrando a la derecha.
  7. **Footer:** `brand-blue-700` (`#0950F6`, antes `#021440`), con franja amarilla superior de 6px.
  *Regla: nunca dos bloques azules consecutivos ni dos blancos consecutivos sin un separador tonal de contraste.*

---

## 7. Responsive Rules

| Regla | Especificación |
|---|---|
| **Mobile-First Collapse** | `< 768px`: toda grilla multi-columna colapsa a una única columna sin excepciones. Bento pasa a orden de lectura secuencial. |
| **Sin Scroll Horizontal** | Cero tolerancia a desbordamiento lateral. Contenedores con `overflow-x-clip` o `overflow-hidden`; tablas dentro de `overflow-x-auto`. |
| **Tipografía Fluida** | Titulares obligatoriamente con `clamp()` (`text-display`, `text-h1`…); texto de cuerpo nunca menor a 1rem (16px); badges con tracking amplio. |
| **Touch Targets Universales** | Área interactiva mínima de **44×44px** en botones, links, dots, controles y checkboxes. |
| **Imágenes y Multimedia** | `next/image` con atributo `sizes` adaptativo; tarjeta tilt pasa a formato estático sin inclinación 3D en pantallas táctiles y mobile. |
| **Navegación Móvil** | Menú horizontal en desktop (`≥ lg`); menú hamburguesa accesible con panel full-height en mobile (`< lg`). |
| **Breakpoints Canónicos** | 320px · 375px · 768px · 1024px · 1280px · 1920px. |
| **Hero en Mobile** | Alineación centrada solo permitida en viewport `< lg`; botón CTA toma ancho completo (`w-full sm:w-auto`). |

---

## 8. Motion Philosophy & Spring Physics

- **Motor de Animación:** `motion/react` (Framer Motion 12) para transiciones de entrada, modales y layouts interactivos; GSAP exclusivamente para animaciones de canvas procedural. Componentes animados aislados como Client Components (`'use client'`).
- **Resortes Físicos por Defecto:** `transition={{ type: 'spring', stiffness: 100, damping: 20 }}`. Se prohíbe el uso de easing `linear` en interfaces interactivas.
- **Orquestación en Cascada:**
  ```tsx
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };
  ```
  Activación vía `whileInView` con `viewport={{ once: true, margin: '-80px' }}`.
- **Micro-loops Perpetuos (solo en elementos de estado activo):**
  - `animate-float-slow`: `translateY(-5px)` sinusoidal de 4s en badges flotantes y tarjeta hero.
  - `animate-pulse-subtle`: escalado 1.03 con opacidad 0.85 (3s) en dots de estado y pasos activos de stepper.
  - `animate-border-pulse`: respiración de borde amarillo (2s) en CTA primario en reposo.
  - `animate-shimmer`: barrido de skeletons (2.5s).
  - `animate-logos-scroll`: desplazamiento continuo lineal de 30s.
- **Rendimiento:** animar **únicamente** propiedades `transform` y `opacity`. Terminantemente prohibido animar `width`, `height`, `margin` o `padding`.
- **Kill-Switch de Accesibilidad Obligatorio:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
  Uso de `useReducedMotion()` en componentes React para degradar a desvanecimientos instantáneos. Tilt 3D y carruseles continuos se detienen.

---

## 9. Iconografía, Imagen y Logotipo

- **Iconos:** biblioteca `lucide-react` exclusivamente; trazo uniforme de 2px (1.75px en tamaños ≥ 32px); tamaños canónicos 16, 20, 24 y 48px; color heredado (`currentColor`). Prohibidos emojis y mezcla de librerías (salvo el glifo específico de WhatsApp).
- **Fotografía Real:** tomas auténticas de couriers, motos, paquetería y paisajes urbanos de Mar del Plata; iluminación diurna natural. Tinte corporativo aplicado: `bg-[#0950F6]/10 mix-blend-multiply` o gradiente de protección `rgba(9,80,246,0.95) → 0.35`. Marcos `rounded-3xl shadow-2xl`.
- **Logotipo Oficial:** archivo vectorial `/logo-envios-simplified.webp`. Ancho mínimo 120px web; sobre azul usar versión con wordmark blanco; nunca rasterizar a baja resolución, estirar, cambiar colores ni aplicar sombras negras.
- **Dos Carriles Visuales:** fotografía real para la narrativa urbana y renders 3D isométricos modernos para el Hero Card Media de la tarjeta tilt. Prohibido flat vector genérico o ilustración 2D en el slot de Hero Card Media.

### 9.1 Hero Card Media — Renders 3D Isométricos (Ajustados a Max `#0950F6`)

Render **3D isométrico moderno en miniatura (diorama)** con fondo transparente recortado que vive dentro de la cabecera de la tarjeta tilt derecha del hero (o en modo standalone en Contacto). Geometría simplificada, bordes biselados, materiales soft matte clay y satin plastic con brillos satinados sutiles, iluminación de estudio three-point y paleta corporativa con tope `#0950F6`. Complementa la tarjeta sin repetir textos, precios o direcciones que la UI ya renderiza.

**Fórmula cromática por superficie destino (Ajustada al tope `#0950F6`):**

| Superficie | Fondo real | Volúmenes principales | Caras superiores / highlights | Caras laterales / bisel | Regla de contraste |
|---|---|---|---|---|---|
| `dark` | Tarjeta `#0950F6` / `brand-blue-700` | Bright blue `#3570F8` · Sky blue `#628FF9` | Pale blue `#E6EEFE` · Blanco `#FFFFFF` | Azul vibrante `#0950F6` (tope) | Volúmenes claros y luminosos para recortar sobre el azul. |
| `light` | Tarjeta `bg-white` | Azul vibrante `#0950F6` | Pale blue `#E6EEFE` | Azul vibrante `#0950F6` | Sin grandes volúmenes blancos; solidez contra tarjeta blanca. |
| `bright` | Sección `#0950F6` sin tarjeta (Contacto) | Blanco `#FFFFFF` · Pale blue `#E6EEFE` | Blanco `#FFFFFF` | Azul vibrante `#0950F6` | Sin masas `#0950F6` dominantes; contrasta sobre la sección azul. |

Amarillo Vial `#FFEC01` = único acento (cajones de moto, rutas tubulares emisivas, biseles de pines), **≤ 15%** del sujeto. Sin grises, carbón, degradados ajenos ni metales cromo/oro.

**Kit 3D Canónico DosRuedas:**
- **Diorama base:** baldosa isométrica de esquina redondeada con bisel grueso en `#0950F6`, recortada como bloque de mapa urbano en miniatura.
- **City blocks:** manzanas urbanas bajas en azul mate con techos celestes claros `#E6EEFE` y calles estrechas.
- **Route:** trazado tubular grueso y brillante en Amarillo Vial `#FFEC01` con núcleo emisivo.
- **Map pin:** pin facetado chunky en azul `#0950F6` con borde biselado amarillo `#FFEC01`.
- **Courier scooter:** moto de reparto estilizada tipo juguete en azul vibrante con caja trasera redondeada amarilla `#FFEC01`, conducida por repartidor de vinilo estilizado sin rostro.
- **Coast:** extremo del diorama con franja de mar estilizado con ondas suaves.

**Implementación técnica:**
```tsx
<div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto mb-4">
  <Image
    src="/img/heroes/servicio-express.webp"
    alt=""
    fill
    priority
    sizes="(min-width: 1024px) 400px, 90vw"
    className="object-contain"
  />
</div>
```

---

## 10. Anti-Patterns & Guidelines (Do's and Don'ts — Cero Tolerancia)

**Color y superficie:**
1. **Azules más oscuros que `#0950F6`:** prohibido cualquier uso de `#0636A5`, `#052D8C`, `#04236B`, `#021440`, `#00277C`. `#0950F6` es el límite de oscuridad en todo el sistema.
2. **Negro puro `#000000`:** no existe en la paleta; el texto de cuerpo es `brand-ink` ajustado a `#0950F6` sobre fondo blanco, o blanco puro sobre azul.
3. **Escalas neutras genéricas:** prohibido `slate-*`, `gray-*`, `zinc-*`, `neutral-*` y hex inline.
4. **Verde en UI:** prohibido en steppers, estados de éxito o CTA de WhatsApp (`#10B981`, `green-*`). El fondo de WhatsApp es siempre Amarillo Vial `#FFEC01`.
5. **Sombras grises o negras:** prohibido `rgba(0,0,0,…)`; sombras teñidas exclusivamente con `rgba(9,80,246,α)` o `rgba(255,236,1,α)`.
6. **Emojis en UI o copy:** cero emojis en botones, títulos o tarjetas; usar exclusivamente iconos Lucide.

**Tipografía y copy:**
7. **Fuentes no autorizadas:** prohibido `Inter`, fuentes del sistema y serifs genéricas. Usar Anton, Bebas Neue, Outfit y Geist Mono.
8. **Title Case en oraciones:** display y subheading siempre en UPPERCASE; párrafos siempre en sentence case.
9. **Clichés de IA:** prohibido "Elevá tu logística", "Seamless", "Unleash", "Next-Gen", "Soluciones 360°". Usar siempre voseo rioplatense concreto con promesa + consecuencia.
10. **Nombres o datos ficticios:** prohibido "Juan Pérez", "Acme Corp", "99.99% uptime" o métricas inventadas. Usar anclas reales de MDQ ("Friuli 1972", "Zona Güemes", "Playa Grande", "Punta Mogotes", "Batán") o placeholder explícito `[métrica]`.

**Layout e interacción:**
11. **Hero centrado en desktop:** prohibido; el hero desktop es asimétrico 7/5 estricto.
12. **Bordes laterales gruesos (`border-l-4` / side-tabs):** cliché de IA prohibido; usar tarjetas canónicas `double-bezel`.
13. **Superposición destructiva:** prohibido texto superpuesto sobre texto o imágenes pisando contenido interactivo.
14. **`h-screen`:** prohibido; usar `min-h-[100dvh]` o `min-h-[90dvh]`.
15. **Animaciones de rebote y layout:** prohibido `animate-bounce` y animar propiedades geométricas (`width`, `height`, `padding`).

---

## 11. Deuda de Adherencia Conocida (Auditoría Técnica Impeccable 2026)

Registro de diferencias entre el código heredado en producción y la especificación canónica del sistema de diseño:

| Área | Estado en Producción | Especificación Canónica Max `#0950F6` | Acción Requerida |
|---|---|---|---|
| **Azul Máximo de Marca** | Código en producción utiliza `#0636A5` como azul base institucional. | `#0950F6` es el azul máximo en tokens, fondos oscuros, header, footer y texto de cuerpo. | Mantener en `DESIGN.md` como spec de referencia para Stitch; aplicar al CSS productivo solo si se solicita explícitamente. |
| **Borde lateral AI (`border-l-4`)** | Presente en tarjetas de características legacy (`LowCostFeatures`, `FlexFeatures`). | Sistema canónico `double-bezel` sin bordes asimétricos gruesos. | Reemplazar progresivamente por contenedores Double Bezel. |
| **Curvas de rebote (`animate-bounce`)** | Detectado en `NewsletterSubscribe` y `LeafletRouteMap`. | Resortes físicos de Framer Motion (`stiffness: 100, damping: 20`) o easing exponencial suave. | Migrar a resortes o transiciones continuas suaves. |
| **Animación de layout** | Transición de `width` en barras de progreso. | Animar `transform: scaleX()` con `transform-origin: left`. | Corregir a animaciones de GPU vía `transform`. |
| **`h-screen`** | Múltiples ocurrencias en vistas principales. | `min-h-[100dvh]` o `min-h-[90dvh]`. | Reemplazar por unidades dvh dinámicas. |
| **Botón WhatsApp verde** | Algunos botones secundarios legacy con fondo verde. | Fondo **siempre** `brand-yellow-500` (`#FFEC01`), hover `brand-yellow-400`. | Unificar todos los puntos de contacto al botón amarillo oficial. |
| **Hero Card Media (§9.1)** | Home utiliza render rasterizado legacy `/card_mapa.webp`. | Diorama 3D isométrico transparente con paleta max `#0950F6` y acento amarillo ≤ 15%. | Renderizar assets con el script canónico y montar en slot `aspect-[4/3]` y `aspect-square`. |

---

## 12. Bloque de Sistema de Diseño para Stitch & Subagentes (MAX `#0950F6`)

```markdown
DESIGN SYSTEM — ENVÍOS DOSRUEDAS 2026 MAX #0950F6:
- Brand Colors: Primary "Egyptian Blue" ajustado a Vibrant Blue #0950F6 (brand-blue-700), tope de oscuridad — hero, nav, footer, H1/H2. Accent Signal Yellow #FFEC01 (brand-yellow-500), hover #FFF12E, pressed #E6D400 — badges, CTA, stepper activo, glow en vivo, franja de footer 6px. Signal, nunca superficie. Surface Base White #FFFFFF. Soft Tint Ice Blue #E6EEFE — outer bezel. Structural Border #BACEFD, hover #628FF9. Focus ring Ultramarine #0950F6 (igual que primary). Body text #0950F6 (antes #00277C). Text on yellow #0950F6 (antes #04236B). Muted #3570F8. Deepest #0950F6 (antes #021440). FORBIDDEN: cualquier azul más oscuro que #0950F6 (#0636A5, #052D8C, #04236B, #021440, #00277C), slate/zinc/gray/neutral, CTAs o steppers verdes, morado/neón, negro puro, hex inline, segundo acento. Sombras teñidas rgba(9,80,246,α) / rgba(255,236,1,α) — nunca rgba(0,39,124,…) ni gris.
- Typography: Anton uppercase, line-height 0.8–1.0, tracking -0.05em, text-wrap balance, fluid clamp. Bebas Neue uppercase, tracking 0.05–0.1em. Outfit sentence case, 1.625, 65ch, mínimo 16px. Geist Mono tabular-nums ($4.600 ARS, 3,7 km). Firma: un knockout amarillo-sobre-azul rotado -1° por titular, stroke 2px #0950F6, ghost wordmark 15vw/4% blanco. BANNED: Inter, system sans, Title Case. Texto superior de íconos blanco #FFFFFF con stroke 2px #0950F6, slab inferior amarillo #FFEC01 a -1° con texto #0950F6.
- Hero: grid asimétrico 7/5 sobre #0950F6 con glow blanco radial + blooms amarillos 10–18% blur 80–130px, min-h-[90dvh]. Izquierda: badge + titular Anton de 2–3 líneas (un knockout) + una oración de promesa + UN CTA primario + 3 chips factuales. Derecha: tarjeta con tilt, Hero Card Media (diorama 3D isométrico transparente, 1:1 en home / 4:3 en el resto, fill object-contain) o foto real de courier con tinte azul multiply, rounded-3xl. Sin hero centrado en desktop.
- Components: Double Bezel — outer bg-brand-blue-50/80 border-brand-blue-100 rounded-2xl p-2 shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300, inner bg-white rounded-xl p-6 shadow-inner. CTA Nested Pill — rounded-full uppercase Bebas tracking .05em, bg-yellow-500 text-blue-900 (#0950F6), px-8 py-3 min-h-[44px] + ícono anidado 32px bg-blue/10, translateX(4px) en hover, active scale-.98, focus ring-2 ring-blue-500. Variante elevada: fondo blanco, texto azul (#0950F6), borde blue-100. Inputs — h-11 border-2 border-blue-300 rounded-xl pl-10, label Bebas uppercase, help mono 11px blue-500, error rojo con role="alert". Steppers — completado/activo siempre yellow-500, nunca verde. Glass on blue — rgba(255,255,255,0.06) + borde 1px rgba(255,255,255,0.12) + blur 12px, rounded-3xl.
- Layout: container max-w-7xl, secciones py clamp, Bento 12 columnas 7/5/12, auto-rows 380px, gap-6 lg:gap-8, zig-zag 5/7, CSS Grid sin calc, min-h-[100dvh] nunca h-screen, columna única <768px, sin overflow, touch ≥44px, sin superposición.
- Motion: springs stiffness 100 damping 20, stagger 0.08s, whileInView once, loops solo en elementos activos (float-slow 4s, pulse-subtle 3s, border-pulse 2s, logos-scroll 30s), solo transform/opacity, kill-switch prefers-reduced-motion.
```
