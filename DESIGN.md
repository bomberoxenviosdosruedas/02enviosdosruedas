# Design System: Envíos DosRuedas (Sovereign Infrastructure & Heritage Logistics)

Este documento define la base del sistema de diseño para **Envíos DosRuedas** (2026), estableciendo una identidad de confianza soberana, solidez institucional e infraestructura logística premium. Toda la interfaz está regida estrictamente por una **paleta exclusiva de tres colores** (Azul, Amarillo y Blanco en sus respectivas escalas oficiales), eliminando grises genéricos, degradados informales o slates externos.

---

## 1. Visual Theme & Atmosphere

El entorno evoca precisión cronométrica, custodia de activos y la espina dorsal de la conectividad corporativa. Es una cabina de control digital organizada y de alto rendimiento. El lienzo principal del sitio es **limpio, blanco y estructurado**, utilizando el azul institucional como ancla de confianza y orden.

*   **Density:** Utility & Operational Focus (8/10) — Estructura impecable con tablas legibles, metadatos claros y jerarquías limpias.
*   **Variance:** Structural Asymmetry & Bento Layouts (7/10) — Grids asimétricos organizados y contenedores limpios.
*   **Motion:** Precise Kinetic Flow (5/10) — Transiciones amortiguadas sutiles que aportan fluidez y sensación física premium, sin animaciones infantiles o estridentes.
*   **Atmosphere:** La solemnidad y herencia del azul profundo combinado con acentos dorados/amarillos quirúrgicos sobre fondos blancos estructurados por capas limpias de la misma escala.

---

## 2. Color Palette & Roles (Tres Colores Oficiales)

El sistema cromático utiliza bloques limpios de contraste sólido para separar jerarquías de contenido, eliminando degradados estridentes o colores externos. Proviene exclusivamente de las siguientes escalas:

### 🔵 Azul EnviosDosruedas (Marca & Confianza)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-blue-50` | `#E6EEFE` | Envolturas exteriores de tarjetas (outer bezel), fondos de alerta, áreas de soporte |
| `--color-blue-100` | `#BACEFD` | Bordes de tarjetas físicas, divisores de sección, estados inactivos |
| `--color-blue-200` | `#8EAFFB` | Enlaces secundarios, indicadores de estado sutiles, acentos |
| `--color-blue-300` | `#628FF9` | Estado hover de botones y componentes interactivos claros |
| `--color-blue-400` | `#3570F8` | Enlaces y botones de acción principal en contextos específicos |
| `--color-blue-500` | `#0950F6` | Detalles visuales y botones interactivos activos |
| `--color-blue-600` | `#0742CA` | Cambios de estado en componentes sobre fondo claro |
| `--color-blue-700` | `#0636A5` | **PRIMARY** — Solidez, orden y presencia institucional. Cabeceras, navegación, secciones enteras, fondos de alto impacto |
| `--color-blue-800` | `#052D8C` | Hover sobre primary |
| `--color-blue-900` | `#04236B` | Texto sobre fondos claros |
| `--color-blue-950` | `#021440` | Fondos oscuros profundos (footer, modales) |

### 🟡 Amarillo EnviosDosruedas (Acento Logístico)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-yellow-50` | `#FFFDE6` | Fondos de advertencia, consejos viales, estados especiales |
| `--color-yellow-100` | `#FFFAB8` | Bordes que requieren atención inmediata o resaltado |
| `--color-yellow-200` | `#FFF78A` | Pequeñas insignias (badges) de estado e indicadores de ruteo |
| `--color-yellow-300` | `#FFF45C` | Hover para CTAs sobre fondos de color Azul 700 |
| `--color-yellow-400` | `#FFF12E` | Hover para CTAs sobre fondos blancos o claros |
| `--color-yellow-500` | `#FFEC01` | **ACCENT / CTA OFICIAL** — Color oficial de llamadas a la acción primarios, botones interactivos clave, señales de alta prioridad |
| `--color-yellow-600` | `#E6D400` | Hover oscuro |

### ⚪ Blanco EnviosDosruedas (Lienzo & Claridad)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-white-50` | `#FFFFFF` | **SUPERFICIE BASE** — Fondo base de todas las páginas, núcleo interior de tarjetas, tablas de tarifas, campos de formulario |

---

### Alias Semánticos (Obligatorios en Código)

```css
/* Primarios */
--color-primary: var(--color-blue-700);           /* #0636A5 */
--color-primary-hover: var(--color-blue-800);     /* #052D8C */
--color-primary-light: var(--color-blue-50);      /* #E6EEFE */
--color-primary-border: var(--color-blue-100);    /* #BACEFD */

/* Acentos */
--color-accent: var(--color-yellow-500);          /* #FFEC01 */
--color-accent-hover: var(--color-yellow-400);    /* #FFF12E */
--color-accent-hover-dark: var(--color-yellow-300); /* #FFF45C */
--color-accent-light: var(--color-yellow-50);     /* #FFFDE6 */
--color-accent-border: var(--color-yellow-100);   /* #FFFAB8 */

/* Superficies */
--color-surface: var(--color-white-50);           /* #FFFFFF */
--color-surface-overlay: var(--color-blue-50);    /* #E6EEFE */

/* Texto */
--color-text-primary: var(--color-blue-700);
--color-text-secondary: var(--color-blue-400);
--color-text-tertiary: var(--color-blue-300);
--color-text-inverse: var(--color-white-50);
--color-text-on-accent: var(--color-blue-900);
--color-text-muted: var(--color-blue-300);
--color-text-mono: var(--color-blue-700);

/* Bordes */
--color-border-default: var(--color-blue-100);
--color-border-strong: var(--color-blue-200);
--color-border-focus: var(--color-blue-700);
--color-border-accent: var(--color-yellow-500);

/* Focus */
--color-focus-ring: var(--color-blue-500);
--color-focus-ring-offset: var(--color-white-50);

/* Status Colors (Funcionales) */
--color-success: #16A34A;
--color-success-light: #DCFCE7;
--color-success-text: #166534;
--color-warning: #F59E0B;
--color-warning-light: #FEF3C7;
--color-warning-text: #92400E;
--color-error: #DC2626;
--color-error-light: #FEF2F2;
--color-error-text: #991B1B;
```

---

## 3. Typography Rules

### Fuentes Oficiales

| Rol | Fuente | Fallback | Peso |
|-----|--------|----------|------|
| **Display / Headlines** | `Anton` | `Bebas Neue`, sans-serif | 700-800 |
| **Subheadings / Labels / Badges** | `Bebas Neue` | `IBM Plex Sans`, sans-serif | 600-700 |
| **Body / UI Text** | `IBM Plex Sans` | `Inter`, system-ui, sans-serif | 400-600 |
| **Mono / Data / Metrics** | `Geist Mono` | `JetBrains Mono`, `Fira Code`, ui-monospace | 500-700 |

### Type Scale (Fluid Clamp)

| Token | Valor | Uso |
|-------|-------|-----|
| `--text-display` | `clamp(3rem, 5vw, 4.5rem)` | Hero headlines, page titles monumentales |
| `--text-h1` | `clamp(2.25rem, 4vw, 3rem)` | Section titles principales |
| `--text-h2` | `clamp(1.75rem, 3vw, 2.25rem)` | Section titles secundarios, card titles grandes |
| `--text-h3` | `clamp(1.25rem, 2vw, 1.5rem)` | Card titles, component headers |
| `--text-h4` | `clamp(1.125rem, 1.5vw, 1.25rem)` | Small headers, footer column titles |
| `--text-body-lg` | `1.125rem` (18px) | Lead paragraphs, important body |
| `--text-body` | `1rem` (16px) | Default body text |
| `--text-body-sm` | `0.875rem` (14px) | Secondary text, captions |
| `--text-label` | `0.75rem` (12px) | Labels, badges, uppercase micro-copy |
| `--text-mono-lg` | `1.5rem` (24px) | Large metrics, counters |
| `--text-mono` | `1rem` (16px) | Tracking numbers, prices |
| `--text-mono-sm` | `0.875rem` (14px) | Small data, meta info |

### Comportamiento Específico

*   **Display (Anton):** Uppercase obligatorio, `line-height: 1.05-1.1`, `letter-spacing: -0.02em`, `text-wrap: balance`
*   **Subheadings (Bebas Neue):** Uppercase obligatorio, `letter-spacing: 0.02-0.1em` según jerarquía
*   **Labels/Badges:** Uppercase, `letter-spacing: 0.05-0.1em`, `font-weight: 700`
*   **Mono:** `font-variant-numeric: tabular-nums` siempre
*   **Kinetic Font Stretch:** Para elementos interactivos clave — `transform: scaleX(1.1)` + `letter-spacing: 0.02em` en hover

---

## 4. Spacing System

### Base Unit: 4px

| Token | Rem | Px | Uso |
|-------|-----|-----|-----|
| `--space-0` | 0 | 0 | Reset |
| `--space-1` | 0.25rem | 4px | Micro gaps |
| `--space-2` | 0.5rem | 8px | Icon gaps, inner padding small |
| `--space-3` | 0.75rem | 12px | Component gaps |
| `--space-4` | 1rem | 16px | Default gap, mobile container padding |
| `--space-5` | 1.25rem | 20px | Form gaps |
| `--space-6` | 1.5rem | 24px | Card inner padding, default section gap |
| `--space-7` | 1.75rem | 28px | Medium gaps |
| `--space-8` | 2rem | 32px | Desktop container padding, large gaps |
| `--space-9` | 2.25rem | 36px | |
| `--space-10` | 2.5rem | 40px | |
| `--space-12` | 3rem | 48px | Section medium |
| `--space-14` | 3.5rem | 56px | |
| `--space-16` | 4rem | 64px | Section large |
| `--space-20` | 5rem | 80px | |
| `--space-24` | 6rem | 96px | Section XL |
| `--space-28` | 7rem | 112px | |
| `--space-32` | 8rem | 128px | Section XXL |
| `--space-36` | 9rem | 144px | Hero bottom, major sections |

### Espaciado Semántico

| Token | Valor | Uso |
|-------|-------|-----|
| `--section-sm` | `var(--space-16)` | 64px — Secciones compactas |
| `--section-md` | `var(--space-24)` | 96px — Secciones estándar |
| `--section-lg` | `var(--space-32)` | 128px — Secciones grandes |
| `--section-xl` | `var(--space-36)` | 144px — Hero, secciones principales |
| `--container-max` | `80rem` | 1280px — Ancho máximo contenido |
| `--container-pad-mobile` | `1rem` | 16px |
| `--container-pad-tablet` | `1.5rem` | 24px |
| `--container-pad-desktop` | `2rem` | 32px |
| `--card-inner` | `1.5rem` | 24px — Padding núcleo tarjeta |
| `--card-outer` | `0.5rem` | 8px — Gap bezel exterior |
| `--btn-h` | `2.5rem` | 40px — Altura botón estándar |
| `--btn-h-lg` | `2.75rem` | 44px — Altura botón grande (touch target) |
| `--input-h` | `2.75rem` | 44px — Altura input (touch target) |

---

## 5. Border Radius System

| Token | Rem | Px | Uso |
|-------|-----|-----|-----|
| `--radius-none` | 0 | 0 | Elementos sin redondeo |
| `--radius-xs` | 0.125rem | 2px | Badges pequeños, indicadores |
| `--radius-sm` | 0.25rem | 4px | Inputs, botones pequeños |
| `--radius-md` | 0.375rem | 6px | Componentes medios |
| `--radius-lg` | 0.5rem | 8px | Cards estándar, dropdowns |
| `--radius-xl` | 0.75rem | 12px | Cards grandes, modales, inputs |
| `--radius-2xl` | 1rem | 16px | Hero cards, contenedores principales |
| `--radius-3xl` | 1.5rem | 24px | CTA final card, contenedores hero |
| `--radius-full` | 9999px | — | Pills, badges, avatares, botones CTA |
| `--radius-bezel-outer` | 1rem | 16px | **Bezel exterior** (Double Bezel Card) |
| `--radius-bezel-inner` | 0.75rem | 12px | **Bezel interior** (Double Bezel Card) |

---

## 6. Shadows System

### Elevation Scale

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-xs` | `0 1px 2px rgba(6,54,165,0.04)` | Bordes sutiles |
| `--shadow-sm` | `0 2px 4px rgba(6,54,165,0.06), 0 1px 2px rgba(6,54,165,0.03)` | Cards en reposo |
| `--shadow-md` | `0 4px 8px rgba(6,54,165,0.08), 0 2px 4px rgba(6,54,165,0.04)` | Cards hover, dropdowns |
| `--shadow-lg` | `0 8px 16px rgba(6,54,165,0.1), 0 4px 8px rgba(6,54,165,0.06)` | Modales, panels |
| `--shadow-xl` | `0 16px 32px rgba(6,54,165,0.12), 0 8px 16px rgba(6,54,165,0.08)` | Hero cards, floating elements |
| `--shadow-2xl` | `0 25px 50px -12px rgba(6,54,165,0.15)` | Overlays grandes |
| `--shadow-inner` | `inset 0 2px 4px rgba(6,54,165,0.06)` | Núcleo interior bezel |
| `--shadow-bezel` | `inset 0 1px 0 rgba(255,255,255,0.1)` | Highlight borde interior |

### Shadows Especiales (Signature)

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-elevated` | `0 20px 40px -8px rgba(6,54,165,0.2), 0 8px 16px -4px rgba(6,54,165,0.12)` | **CTA Elevated** — Botones blancos sobre fondo azul |
| `--shadow-hover-lift` | `0 32px 64px -12px rgba(6,54,165,0.25)` | Hover lift en CTA elevated |
| `--shadow-float` | `0 25px 50px -12px rgba(6,54,165,0.15)` | **Double Bezel Outer** en reposo |
| `--shadow-minimal` | `0 4px 20px -2px rgba(6,54,165,0.04), 0 2px 6px -1px rgba(6,54,165,0.02)` | Testimonial cards, footer |
| `--shadow-soft-elevation` | `0 12px 24px -10px rgba(6,54,165,0.12)` | Cards hover suaves |
| `--shadow-antigravity-deep` | `0 30px 60px -15px rgba(6,54,165,0.3), 0 0 50px -10px rgba(255,236,1,0.15)` | **Hero cards hover** — Efecto antigravedad con glow amarillo |

### Accent Shadows (Amarillo)

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-accent-sm` | `0 2px 4px rgba(255,236,1,0.15)` | Badges amarillos |
| `--shadow-accent-md` | `0 4px 8px rgba(255,236,1,0.2), 0 2px 4px rgba(255,236,1,0.1)` | Cards con acento amarillo |
| `--shadow-accent-lg` | `0 8px 16px rgba(255,236,1,0.3), 0 4px 8px rgba(255,236,1,0.2)` | Elementos destacados amarillos |
| `--shadow-cta-glow` | `0 0 40px rgba(255,236,1,0.4), 0 0 80px rgba(255,236,1,0.15)` | **CTA Primary hover** — Glow principal |
| `--shadow-cta-glow-sm` | `0 0 20px rgba(255,236,1,0.3)` | CTA Primary reposo |

---

## 7. Motion System

### Duraciones

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-instant` | 50ms | Micro feedback |
| `--duration-fast` | 150ms | Hover states, focus rings |
| `--duration-base` | 200ms | Transiciones estándar |
| `--duration-normal` | 300ms | Reveals, dropdowns |
| `--duration-slow` | 400ms | Card hover, panel slides |
| `--duration-slower` | 500ms | 3D transforms, complex transitions |
| `--duration-slowest` | 800ms | Page transitions, counter animations |

### Easings

| Token | Valor | Uso |
|-------|-------|-----|
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default Material-ish |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | **Salidas** — Reveals, dropdowns |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Entradas |
| `--ease-snappy` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | **Botones, toggles** — Respuesta rápida |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful, badges pulse |
| `--ease-sharp` | `cubic-bezier(0.4, 0, 0.6, 1)` | Transiciones UI rápidas |
| `--ease-smooth` | `cubic-bezier(0.25, 1, 0.5, 1)` | **3D transforms, float/tilt** — Suavidad premium |

### Principios de Movimiento

1.  **Reduced Motion First:** Todo respeta `prefers-reduced-motion: reduce` — duraciones a 0.01ms, sin transforms
2.  **Orchestrated Reveals:** IntersectionObserver + stagger children (100ms increments)
3.  **Counter Animations:** Ease-out cubic-bezier(0.22, 1, 0.36, 1) desde translateY(100%)
4.  **3D Tilt:** Lerp suave (0.1 factor) en mousemove, reset en mouseleave
5.  **Logos Carousel:** 30s linear infinite, pausa en hover/focus/visibilitychange

---

## 8. Gradients

| Token | Definición | Uso |
|-------|------------|-----|
| `--gradient-blue` | `linear-gradient(135deg, #0636A5 0%, #002068 100%)` | Fondos secciones primarias, hero meshes |
| `--gradient-blue-light` | `linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)` | Fondos sutiles claros |
| `--gradient-yellow` | `linear-gradient(135deg, #FFEC01 0%, #E6B800 100%)` | CTA backgrounds, accents |
| `--gradient-mixed` | `linear-gradient(135deg, #0636A5 0%, #002068 50%, #FFEC01 100%)` | Brand moments |
| `--gradient-surface` | `linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)` | Card backgrounds (subtle) |
| `--gradient-dark` | `linear-gradient(180deg, #151B2D 0%, #002068 50%, #001035 100%)` | Footer, dark sections |
| `--gradient-hero-mesh` | `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(6,54,165,0.15) 0%, transparent 70%)` | Hero atmospheric depth |
| `--gradient-shimmer-bg` | `linear-gradient(90deg, var(--color-blue-50) 25%, var(--color-blue-100) 50%, var(--color-blue-50) 75%)` | Skeleton loaders, shimmer (200% size) |

---

## 9. Z-Index Scale

| Token | Valor | Uso |
|-------|-------|-----|
| `--z-hide` | -1 | Backgrounds detrás de contenido |
| `--z-base` | 0 | Contenido normal |
| `--z-dropdown` | 100 | Dropdown menus |
| `--z-sticky` | 200 | Sticky elements |
| `--z-fixed` | 300 | Fixed bars |
| `--z-modal-backdrop` | 400 | Modal overlays |
| `--z-modal` | 500 | Modales |
| `--z-popover` | 600 | Popovers, tooltips complejos |
| `--z-tooltip` | 700 | Tooltips simples |
| `--z-toast` | 800 | Notifications |
| `--z-header` | 900 | **Header fijo** |
| `--z-max` | 9999 | Skip links, critical overlays |

---

## 10. Breakpoints

| Token | Valor | Nombre |
|-------|-------|--------|
| `--bp-xs` | 320px | Mobile pequeño |
| `--bp-sm` | 640px | Mobile grande / Tablet pequeño |
| `--bp-md` | 768px | Tablet |
| `--bp-lg` | 1024px | Desktop |
| `--bp-xl` | 1280px | Desktop grande (container max) |
| `--bp-2xl` | 1536px | Wide |
| `--bp-3xl` | 1920px | Ultra-wide |

---

## 11. Component Architecture (Signature Patterns)

### A. Double Bezel Card (Arquitectura Doble Bisel)

```html
<div class="double-bezel-outer">
  <div class="double-bezel-inner">
    <!-- Contenido real aquí -->
  </div>
</div>
```

*   **Outer:** `bg-blue-50`, `border-blue-100`, `rounded-[1rem]`, `p-[0.5rem]`, `shadow-float`
*   **Inner:** `bg-white`, `rounded-[0.75rem]`, `shadow-inner`, `overflow-hidden`
*   **Hover Outer:** `shadow-antigravity-deep`, `border-blue-300`
*   **Variante Dark:** Sobre fondo azul — outer mantiene `bg-blue-50`/`border-blue-100` para legibilidad

### B. CTA Nested Pill (Botón Pastilla Anidada)

```html
<a class="cta-nested-pill cta-nested-pill--primary" href="#">
  <span>Cotizar Envío</span>
  <span class="cta-nested-icon"><svg>→</svg></span>
</a>
```

**Variantes:**

| Variante | Fondo | Texto | Borde | Icono (reposo) | Icono (hover) | Sombra |
|----------|-------|-------|-------|----------------|---------------|--------|
| `--primary` | Yellow 500 | Blue 900 | Yellow 500 | `bg-blue-700/10`, text-blue-700 | `bg-blue-700`, text-yellow-500, `translateX(4px)` | `shadow-accent-sm` → `shadow-cta-glow` |
| `--elevated` | White | Blue 700 | Blue 100 | `bg-blue-700/10`, text-blue-700 | `bg-blue-700`, text-white, `translateX(4px)` | `shadow-elevated` → `shadow-hover-lift` |
| `--outline` | Transparent | Blue 700 | Blue 700 | — | — | `bg-blue-50` on hover |
| `--ghost` | Transparent | Blue 700 | Transparent | — | — | `bg-blue-50` on hover |

**Reglas:**
*   `rounded-full`, `font-subheading`, `uppercase`, `letter-spacing: 0.05em`, `font-weight: 700`
*   `padding: var(--space-2) var(--space-4)` (compact) / `var(--space-3) var(--space-8)` (large)
*   Icono: `2rem` diameter, `rounded-full`, transition `transform + bg + color`
*   **Active state:** `scale(0.98) translateY(1px)` (primary) / `scale(0.98)` (elevated)
*   **Focus-visible:** `0 0 0 2px var(--color-focus-ring), 0 0 0 4px var(--color-focus-ring-offset)`

### C. Badge System

```html
<span class="badge badge--urgent">URGENTE</span>
<span class="badge badge--secure">SEGURO</span>
<span class="badge badge--economic">ECONÓMICO</span>
<span class="badge badge--flex">FLEX</span>
<span class="badge badge--neutral">NEUTRAL</span>
<span class="badge badge--outline">OUTLINE</span>
```

*   `font-subheading`, `var(--text-label)`, `uppercase`, `letter-spacing: 0.05em`, `font-weight: 700`
*   `rounded-full`, `padding: var(--space-1) var(--space-2)`, `border: 1px solid`

### D. Radio Card Group (Selector de Servicios)

*   Grid 3 columnas en desktop, 1 en mobile
*   Card: `bg-white`, `border-2 border-blue-100`, `rounded-xl`, `p-6`
*   **Checked Express:** `bg-blue-700`, `border-blue-700`, `text-white`
*   **Checked LowCost:** `bg-blue-50`, `border-blue-200`, `text-blue-700`
*   **Checked Flex:** `bg-yellow-50`, `border-yellow-200`, `text-blue-700`
*   Icon box: `3rem` square, `rounded-xl`, fondo según variante
*   Focus-visible: `0 0 0 2px var(--color-focus-ring), 0 0 0 4px var(--color-focus-ring-offset)`

### E. Input Fields

```html
<div class="input-wrapper">
  <label class="input-label">ORIGEN</label>
  <div style="position:relative">
    <svg class="input-icon">...</svg>
    <input class="input-field" placeholder="Calle 123" aria-invalid="false">
  </div>
</div>
```

*   `h-11` (44px), `border-2 border-blue-100`, `rounded-xl`, `pl-10` (icon space)
*   **Hover:** `border-blue-200`
*   **Focus:** `border-blue-700` + `ring-2 ring-blue-500/20`
*   **Error:** `border-red-500` + `ring-2 ring-red-500/20`
*   **Disabled:** `border-blue-100`, `bg-blue-50/50`, `cursor: not-allowed`
*   Label: `font-subheading`, `var(--text-label)`, `uppercase`, `letter-spacing: 0.05em`
*   Help text: `font-mono`, `10px`, `text-blue-400`

### F. Steppers

**Horizontal (Proceso de Cotizador):**
*   Línea horizontal 2px `blue-100` (completed: `yellow-500`)
*   Círculos 40px: completed=`yellow-500`, active=`blue-700` + ring, pending=`blue-100`
*   Labels: `font-subheading`, `var(--text-label)`, `uppercase`

**Vertical (How It Works):**
*   Línea vertical 2px izquierda, `blue-100`
*   Dots 24px con border blanco 3px
*   Completed: `green-500` + `green-100` ring
*   Active: `yellow-500` + `yellow-500/30` ring + `pulse-subtle`
*   Pending: `blue-100`
*   Numbers: `font-display`, `var(--text-h2)`

### G. Logos Carousel (Infinite Scroll)

```html
<div class="logos-carousel">
  <div class="logos-carousel__track">
    <!-- Items duplicados para loop seamless -->
  </div>
</div>
```

*   `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`
*   Track: `flex`, `gap: var(--space-12)`, `animation: logos-scroll 30s linear infinite`
*   Items: `h-12`, `grayscale(100%) contrast(1.2) opacity-60`
*   **Hover/Focus:** `grayscale(0) contrast(1) opacity-100`
*   **Pausa:** hover, focusin, `document.hidden`

### H. Float / Tilt Card (Hero 3D Cards)

*   `transform-style: preserve-3d`
*   `perspective: 1000px` en contenedor
*   Mousemove → `rotateX(±8deg) rotateY(±8deg)` con lerp 0.1
*   Hover: `translateY(-6px) rotateX(4deg) rotateY(-2deg)` + `shadow-antigravity-deep`
*   Capas con `translateZ`: 10px, 40px, 70px, 80px para profundidad

### I. Asymmetric Bento Grid (Services)

*   Base: `grid-cols-12`, `gap-6 lg:gap-8`, `auto-rows-[380px]`
*   **Span 7** (Hero cards): Express, E-Commerce 3PL — `lg:col-span-7`
*   **Span 5** (Standard cards): LowCost, Flex — `lg:col-span-5`
*   **Span 12** (Full width): Cotizador CTA — `col-span-12`
*   Mobile: todas `col-span-1` (`grid-cols-1`)
*   Tablet: `grid-cols-2` (pares)

### J. Vertical Stepper (How It Works)

*   Línea vertical 2px izquierda (`blue-100`)
*   Items: `flex gap-6`, dot 24px fixed left
*   Content: number (Display), title (Display), desc (Body)
*   Estados de color por step completado/activo/pendiente

---

## 12. Layout Principles

### Section Background Alternation (ESTRICTO)

| Orden | Fondo | Texto Principal | Tarjetas/Componentes | Acentos |
|-------|-------|-----------------|---------------------|---------|
| 1 (Hero) | `blue-700` | White | White (elevated) | Yellow 500 |
| 2 (Trust) | `blue-50` | Blue 700 | White | Green/Yellow/Blue |
| 3 (Services) | `white` | Blue 700 | White (double bezel) | Yellow 500 |
| 4 (How It Works) | `blue-700` | White | — | Yellow 500 dots |
| 5 (Social Proof) | `white` | Blue 700 | White (border blue-100) | Yellow 500 |
| 6 (CTA Final) | `blue-700` | Blue 700 (card white) | White card | Yellow/Green |
| 7 (Footer) | `blue-700` + gradients | White | — | Yellow 500 |

**Regla:** Nunca dos secciones consecutivas con mismo fondo. El hero SIEMPRE azul. El footer SIEMPRE azul.

### Container & Grid

*   Max-width: `80rem` (1280px)
*   Padding responsive: `16px / 24px / 32px`
*   Grid base 12-column para Bento
*   Gap: `24px` mobile, `32px` desktop

### Whitespace

*   Secciones: `py-24` a `py-36` (`var(--section-lg)` a `var(--section-xl)`)
*   Cards internas: mínimo `p-6` (24px) / `p-8` (32px) desktop
*   Micro-gaps: `8px` (iconos), `12px` (componentes), `16px` (default)

---

## 13. Homepage Section Structure (Reference)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (fixed, z-900)                                       │
│  ├─ Logo + Wordmark                                         │
│  ├─ Nav Desktop (dropdowns)                                 │
│  ├─ Phone + CTA Primary                                     │
│  └─ Mobile Toggle → Panel (submenus Servicios/Nosotros)     │
├─────────────────────────────────────────────────────────────┤
│ HERO (bg-blue-700, min-h-[95dvh])                           │
│  ├─ Copy (60%): Badge → Display Title → Lead → Dual CTA    │
│  │   → Trust Pills (3)                                      │
│  └─ Visual (40%): 3D Cards Container (perspective 1000px)  │
│      ├─ Map Card (translateZ 10px)                          │
│      ├─ Tracking Card (translateZ 40px, bg-blue-700)        │
│      ├─ Service Pill (translateZ 70px)                      │
│      └─ Counter Card (translateZ 80px, animated)            │
├─────────────────────────────────────────────────────────────┤
│ TRUST BAR (bg-blue-50, border-y blue-100)                   │
│  ├─ 4 Metrics Grid (2/4 cols) — Animated Counters           │
│  └─ ISO Badge (yellow-100, centered)                        │
├─────────────────────────────────────────────────────────────┤
│ SERVICES (bg-white) — BENTO GRID 12-col                     │
│  ├─ Header: Eyebrow → H1 → Lead                             │
│  ├─ Express (span 7) — Double Bezel + Image luminosity      │
│  ├─ LowCost (span 5) — Double Bezel + Image luminosity      │
│  ├─ Flex (span 5) — Double Bezel + Image luminosity         │
│  ├─ E-Commerce 3PL (span 7) — Double Bezel + Image          │
│  └─ CTA Full Width (span 12) — Blue bg, White text, CTA     │
├─────────────────────────────────────────────────────────────┤
│ HOW IT WORKS (bg-blue-700) — VERTICAL STEPPER               │
│  ├─ Header: Eyebrow → H1 → Lead → Divider (yellow)          │
│  └─ 4 Steps: 1. Creás orden 2. Asignamos rider              │
│       3. Rastreás (active) 4. Entrega confirmada            │
├─────────────────────────────────────────────────────────────┤
│ SOCIAL PROOF (bg-white)                                      │
│  ├─ Header: Eyebrow → H1 → Lead                             │
│  ├─ Logos Carousel (infinite, masked edges, pause hover)    │
│  └─ Testimonials Grid (3 cols lg) — Cards + Avatars + Badges│
├─────────────────────────────────────────────────────────────┤
│ CTA FINAL (bg-blue-700)                                      │
│  └─ Card White (rounded-3xl, grid pattern bg)               │
│      ├─ Badge → H1 → Lead → Dual CTA (Yellow + Green/WA)    │
│      └─ Mono Note: "Atención < 2 min"                       │
├─────────────────────────────────────────────────────────────┤
│ FOOTER (bg-blue-700 + radial gradients)                     │
│  ├─ Accent Bar (yellow 6px + glow)                          │
│  ├─ Grid 3 cols: Brand+Socials / Servicios / Empresa+Contact│
│  ├─ Scroll-to-top (yellow pill, blue shadow)                │
│  └─ Bottom: Copyright + Legal Links                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 14. Accessibility Checklist (Obligatorio)

- [ ] **Skip Link** — Primer elemento enfocable, salta a `#main-content`
- [ ] **Focus Visible** — Todos los interactivos: `ring-2 ring-blue-500 ring-offset-2 ring-offset-white` (o `ring-offset-blue-700` en secciones azules)
- [ ] **ARIA** — `aria-label`, `aria-expanded`, `aria-controls`, `aria-haspopup` en dropdowns/submenus
- [ ] **Semantic HTML** — `header`, `main`, `section`, `nav`, `footer`, `article`, `aside`
- [ ] **Reduced Motion** — `@media (prefers-reduced-motion: reduce)` desactiva animaciones
- [ ] **Color Contrast** — AA mínimo en todos los pares texto/fondo
- [ ] **Touch Targets** — Mínimo 44×44px (botones, links, inputs)
- [ ] **Alt Text** — Todas las imágenes informativas
- [ ] **Keyboard Nav** — Tab order lógico, escape cierra menús/modales

---

## 15. Reglas Vigentes Post-Auditoría (2026-07-17)

1.  **NO** usar `text-slate-*`, `bg-slate-*`, `border-slate-*` — usar siempre `brand-blue-*` equivalente
2.  **NO** usar gradientes completos de página (`gradient-surface`, `gradient-dark`) como fondo base de secciones
3.  **NO** usar URLs externas para assets del brand (logo, imágenes críticas) — usar `/public/`
4.  Las secciones deben alternar: `bg-brand-blue` (oscura) ↔ `bg-white` (clara) ↔ `bg-blue-50` (overlay)
5.  Los inputs siempre con `border-2 border-brand-blue-100` → focus: `border-brand-blue-700` + `ring-brand-blue-500/20`
6.  Los CTA siempre con `cta-nested-pill` y esquinas `rounded-full`
7.  **Double Bezel** obligatorio para tarjetas de contenido en secciones blancas
8.  **Kinetic Font Stretch** en headlines interactivas y CTA text
9.  **Logos Carousel** con máscara gradient y pausa accesible
10. **Vertical Stepper** para procesos secuenciales reales (How It Works, Tracking)
11. **Bento Grid Asimétrico** (7/5 spans) para Services — no grids simétricos 3-col
12. **3D Float/Tilt** solo en Hero cards — no abusar en otras secciones
13. Contadores animados con IntersectionObserver + `ease-out` cubic-bezier(0.22, 1, 0.36, 1)
14. Voseo argentino en copy: "Cotizá", "Ingresá", "Contactanos", "Tu logística"
15. Localizaciones MDQ: "Friuli 1972", "Centro", "Playa Grande", "Punta Mogotes", "Chauvín"