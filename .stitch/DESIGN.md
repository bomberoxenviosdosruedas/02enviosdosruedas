---
name: Envíos DosRuedas
colors:
  primary: '#0636A5'
  on-primary: '#FFFFFF'
  secondary: '#FFEC01'
  on-secondary: '#04236B'
  background: '#FFFFFF'
  on-background: '#0636A5'
  surface: '#FFFFFF'
  on-surface: '#0636A5'
  surface-variant: '#E6EEFE'
  on-surface-variant: '#3570F8'
  outline: '#BACEFD'
  brand-blue: '#0636A5'
  brand-yellow: '#FFEC01'
  dark-blue: '#021440'
  light-blue: '#E6EEFE'
  success: '#16A34A'
  warning: '#F59E0B'
  error: '#DC2626'
typography:
  display:
    fontFamily: Anton
    fontSize: clamp(3rem, 5vw, 4.5rem)
    lineHeight: '1.05'
    letterSpacing: '-0.02em'
  h1:
    fontFamily: Anton
    fontSize: clamp(2.25rem, 4vw, 3rem)
    lineHeight: '1.1'
    letterSpacing: '-0.015em'
  h2:
    fontFamily: Anton
    fontSize: clamp(1.75rem, 3vw, 2.25rem)
    lineHeight: '1.2'
    letterSpacing: '-0.01em'
  h3:
    fontFamily: Bebas Neue
    fontSize: clamp(1.25rem, 2vw, 1.5rem)
    lineHeight: '1.4'
    letterSpacing: '0.02em'
  h4:
    fontFamily: Bebas Neue
    fontSize: clamp(1.125rem, 1.5vw, 1.25rem)
    lineHeight: '1.4'
    letterSpacing: '0.02em'
  body:
    fontFamily: 'IBM Plex Sans'
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-lg:
    fontFamily: 'IBM Plex Sans'
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  label:
    fontFamily: 'Bebas Neue'
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1.5'
    letterSpacing: '0.05em'
    textTransform: uppercase
  mono:
    fontFamily: 'Geist Mono'
    fontSize: 1rem
    fontWeight: '500'
    lineHeight: '1.5'
    fontVariantNumeric: tabular-nums
  mono-lg:
    fontFamily: 'Geist Mono'
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: '1.2'
    fontVariantNumeric: tabular-nums
rounded:
  none: 0
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  2xl: 16px
  3xl: 24px
  full: 9999px
  bezel-outer: 16px
  bezel-inner: 12px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px
  6xl: 144px
shadows:
  xs: '0 1px 2px rgba(6, 54, 165, 0.04)'
  sm: '0 2px 4px rgba(6, 54, 165, 0.06), 0 1px 2px rgba(6, 54, 165, 0.03)'
  md: '0 4px 8px rgba(6, 54, 165, 0.08), 0 2px 4px rgba(6, 54, 165, 0.04)'
  lg: '0 8px 16px rgba(6, 54, 165, 0.1), 0 4px 8px rgba(6, 54, 165, 0.06)'
  xl: '0 16px 32px rgba(6, 54, 165, 0.12), 0 8px 16px rgba(6, 54, 165, 0.08)'
  2xl: '0 25px 50px -12px rgba(6, 54, 165, 0.15)'
  inner: 'inset 0 2px 4px rgba(6, 54, 165, 0.06)'
  bezel: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
  elevated: '0 20px 40px -8px rgba(6, 54, 165, 0.2), 0 8px 16px -4px rgba(6, 54, 165, 0.12)'
  hover-lift: '0 32px 64px -12px rgba(6, 54, 165, 0.25)'
  float: '0 25px 50px -12px rgba(6, 54, 165, 0.15)'
  minimal: '0 4px 20px -2px rgba(6, 54, 165, 0.04), 0 2px 6px -1px rgba(6, 54, 165, 0.02)'
  soft-elevation: '0 12px 24px -10px rgba(6, 54, 165, 0.12)'
  antigravity-deep: '0 30px 60px -15px rgba(6, 54, 165, 0.3), 0 0 50px -10px rgba(255, 236, 1, 0.15)'
  accent-sm: '0 2px 4px rgba(255, 236, 1, 0.15)'
  accent-md: '0 4px 8px rgba(255, 236, 1, 0.2), 0 2px 4px rgba(255, 236, 1, 0.1)'
  accent-lg: '0 8px 16px rgba(255, 236, 1, 0.3), 0 4px 8px rgba(255, 236, 1, 0.2)'
  cta-glow: '0 0 40px rgba(255, 236, 1, 0.4), 0 0 80px rgba(255, 236, 1, 0.15)'
  cta-glow-sm: '0 0 20px rgba(255, 236, 1, 0.3)'
motion:
  duration-instant: 50ms
  duration-fast: 150ms
  duration-base: 200ms
  duration-normal: 300ms
  duration-slow: 400ms
  duration-slower: 500ms
  duration-slowest: 800ms
  ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
  ease-out: cubic-bezier(0, 0, 0.2, 1)
  ease-in: cubic-bezier(0.4, 0, 1, 1)
  ease-snappy: cubic-bezier(0.2, 0.8, 0.2, 1)
  ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1)
  ease-sharp: cubic-bezier(0.4, 0, 0.6, 1)
  ease-smooth: cubic-bezier(0.25, 1, 0.5, 1)
gradients:
  blue: 'linear-gradient(135deg, #0636A5 0%, #002068 100%)'
  blue-light: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)'
  yellow: 'linear-gradient(135deg, #FFEC01 0%, #E6B800 100%)'
  mixed: 'linear-gradient(135deg, #0636A5 0%, #002068 50%, #FFEC01 100%)'
  surface: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
  dark: 'linear-gradient(180deg, #151B2D 0%, #002068 50%, #001035 100%)'
  hero-mesh: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(6, 54, 165, 0.15) 0%, transparent 70%)'
  shimmer: 'linear-gradient(90deg, #E6EEFE 25%, #BACEFD 50%, #E6EEFE 75%)'
zIndex:
  hide: -1
  base: 0
  dropdown: 100
  sticky: 200
  fixed: 300
  modal-backdrop: 400
  modal: 500
  popover: 600
  tooltip: 700
  toast: 800
  header: 900
  max: 9999
breakpoints:
  xs: 320px
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px
  3xl: 1920px
container:
  max: 80rem
  pad-mobile: 1rem
  pad-tablet: 1.5rem
  pad-desktop: 2rem
---

# Design System: Envíos DosRuedas

Este documento define de manera estricta y detallada las especificaciones del sistema de diseño, los tokens visuales, las pautas estéticas y la arquitectura del proyecto **Envíos DosRuedas** (Logística de última milla y soluciones E-Commerce en Mar del Plata, año de referencia **2026**). Este sistema se fundamenta en un esquema de **Bento Grid UI** potenciado por una estética **Corporate Sovereign** con arquitectura **Double Bezel**.

---

## 1. Visual Theme & Atmosphere

El sistema de diseño de Envíos DosRuedas está concebido para transmitir velocidad, profesionalidad y confianza vial en el entorno urbano de Mar del Plata. Fusiona la solidez y rigidez estructural del **Bento Grid** con la fuerza gráfica de una estética **Corporate Sovereign**. La interfaz presenta un fuerte contraste mediante bordes definidos, sombras en capas (elevated, float, antigravity), esquinas suavizadas con sistema bezel (16px/12px) y tipografías condensadas de gran impacto que emulan la señalización vial y portuaria.

La atmósfera general es enérgica, limpia y corporativa. La densidad del contenido es moderada a alta, organizando la información en tarjetas modulares y widgets interactivos autoportantes. El aire visual se garantiza mediante espacios holgados y márgenes internos generosos, complementando la rigidez modular con micro-interacciones suaves y dinámicas (estiramiento tipográfico cinético, reducción de desplazamiento en botones al pasar el cursor, tilt 3D en hero cards).

---

## 2. Color Palette & Roles

Nuestra paleta de colores equilibra la confianza institucional y la velocidad vial urbana. Está configurada estrictamente para evitar colores hexadecimales genéricos ad-hoc. **Solo tres colores oficiales**: Azul, Amarillo, Blanco — cada uno con su escala completa.

### Primary Foundation (Azul - 60% Dominancia)
*   **Azul Corporativo 700** (`#0636A5` / `--color-primary`): **Dominancia (60%).** Utilizado para estructurar el sitio, contenedores, barras de navegación principales, bordes del sistema bezel y textos de marca destacados.
*   **Fondo Base** (`#FFFFFF` / `--color-surface`): Fondo principal limpio en modo claro que maximiza la legibilidad.
*   **Fondo Oscuro** (`#021440` / `--color-blue-950`): Utilizado en el pie de página, paneles táctiles y modales en modo oscuro.
*   **Escalas completas:** 50–950 definidas en tokens para estados, bordes, overlays, superficies.

### Accent & Interactive (Amarillo - 30% Impacto)
*   **Amarillo Oficial 500** (`#FFEC01` / `--color-accent`): **Acción e Impacto (30%).** Reservado para llamadas a la acción (CTAs), checkmarks, botones interactivos principales, estados activos y acentos viales de advertencia.
*   **Escalas completas:** 50–600 para hovers, backgrounds, borders, badges.

### Functional States
*   **Success:** Verde esmeralda (`#16A34A`) para confirmaciones de entrega o tarifas correctas.
*   **Warning/Error:** Rojo brillante (`#DC2626`) para advertencias de servicio o errores de cotización.
*   **Focus Ring:** Azul 500 (`#0950F6`) con offset blanco.

---

## 3. Typography Rules

Imitando el impacto visual y la legibilidad inmediata de la señalización urbana y portuaria, el sistema tipográfico utiliza fuentes claras y estructuradas con pesos y anchos contrastantes:

### Hierarchy & Weights
*   **Títulos Display & H1-H2 (`font-display`):** **Anton** (Mayúsculas condensadas). Utilizada en títulos principales `h1` y `h2` de las cabeceras Bento y Hero. `line-height: 1.05-1.1`, `letter-spacing: -0.02em`, `text-wrap: balance`.
*   **Subtítulos y Números Destacados (`font-subheading`):** **Bebas Neue**. Utilizada en badges, números clave, métricas viales e indicadores de tarifas. Uppercase obligatorio, `letter-spacing: 0.02-0.1em`.
*   **Cuerpo de Texto y Formularios (`font-sans`):** **IBM Plex Sans**. Tipografía limpia y neutral para descripciones y flujos interactivos. `line-height: 1.6`.
*   **Datos / Métricas / Código (`font-mono`):** **Geist Mono**. Exclusiva para números de rastreo, tarifas, tiempos estimados de entrega (ETA) y coordenadas físicas. `font-variant-numeric: tabular-nums` obligatorio.

### Spacing Principles
*   **Display / Cabeceras:** Interlineado muy ajustado (`1.05-1.2`) con tracking ligeramente expandido (`-0.02em` a `0.02em`) para dar fuerza.
*   **Textos de Cuerpo:** Interlineado relajado (`1.6`) con tracking neutro para asegurar una lectura cómoda en pantallas móviles.
*   **Labels/Badges:** Uppercase, `letter-spacing: 0.05-0.1em`, `font-weight: 700`.

### Kinetic Font Stretch (Signature)
Para elementos interactivos clave (CTAs principales, links destacados): al hover, `transform: scaleX(1.1)` + `letter-spacing: 0.02em` con transición `duration-slower ease-smooth`.

---

## 4. Component Stylings (Signature Patterns)

### A. Double Bezel Card Architecture
Las tarjetas informativas no se presentan planas. Se modelan como piezas físicas de precisión ensambladas:

1.  **Contenedor Exterior (Outer Shell / Bezel Exterior):**
    *   Fondo: Azul 50 (`#E6EEFE` / `--color-primary-light`)
    *   Borde: 1px Azul 100 (`#BACEFD` / `--color-primary-border`)
    *   Padding exterior: 8px (`--card-outer` / `--space-2`)
    *   Border-radius: 16px (`--radius-bezel-outer`)
    *   Sombra: `--shadow-float` (reposo) → `--shadow-antigravity-deep` (hover)

2.  **Núcleo Interior (Inner Core / Bezel Interior):**
    *   Fondo: Blanco puro (`#FFFFFF` / `--color-surface`)
    *   Border-radius: 12px (`--radius-bezel-inner`) — calculado matemáticamente: `outer - padding`
    *   Sombra interna: `--shadow-inner`
    *   Padding: 24px (`--card-inner` / `--space-6`)

3.  **Contraste Corporativo:** Sobre secciones de fondo azul institucional (`#0636A5`), las tarjetas **nunca** usan fondos oscuros. Se implementan con núcleo blanco + bezel exterior Azul 50 para legibilidad premium.

### B. Nested CTA Pills (Button-in-Button)
Los botones de llamada a la acción primarios son píldoras completamente redondeadas con icono encapsulado:

*   **Forma:** `rounded-full` (9999px), altura 40px/44px (`--btn-h`/`--btn-h-lg`)
*   **Variantes:**
    *   **Primary:** Fondo Amarillo 500, texto Azul 900, borde Amarillo 500, sombra `--shadow-accent-sm` → hover: `--shadow-cta-glow`, `scale(1.02)`
    *   **Elevated:** Fondo Blanco, texto Azul 700, borde Azul 100, sombra `--shadow-elevated` → hover: `--shadow-hover-lift`, `translateY(-2px)`
    *   **Outline:** Transparente, texto Azul 700, borde Azul 700
    *   **Ghost:** Transparente, texto Azul 700, sin borde
*   **Trailing Icon (Nested Pill):** Círculo independiente 32px (`cta-nested-icon`) al final del botón:
    *   Primary: Fondo `rgba(6,54,165,0.1)`, icono Azul 700 → hover: Fondo Azul 700, icono Amarillo, `translateX(4px)`
    *   Elevated: Fondo `rgba(6,54,165,0.1)`, icono Azul 700 → hover: Fondo Azul 700, icono Blanco, `translateX(4px)`

### C. Inputs / Form Controls
*   **Estructura:** Wrapper con label superior + input
*   **Input:** Fondo Blanco, borde 2px Azul 100, `rounded-xl` (12px), altura 44px (`--input-h`)
*   **Focus:** Borde Azul 700 + anillo `0 0 0 2px rgba(6,54,165,0.2)`
*   **Label:** Bebas Neue, 12px, uppercase, tracking-wide, Azul 700
*   **Icon:** Posición absoluta izquierda, Azul 400
*   **Error:** Borde Rojo 500 + anillo `rgba(220,38,38,0.2)`

### D. Badge System
*   Base: `inline-flex`, Bebas Neue 12px, uppercase, tracking-wide, `rounded-full`, `px-2 py-1`, border 1px
*   **Urgent:** Amarillo 500 bg/text-on-accent
*   **Secure:** Azul 700 bg/white text
*   **Economic:** Azul 100 bg/Azul 700 text + Azul 200 border
*   **Flex:** Amarillo 100 bg/Azul 700 text + Amarillo 200 border
*   **Outline:** Transparente, Azul 700 text + Azul 300 border

### E. Radio Card Group (Service Selector)
*   Grid 3 cols en desktop, 1 col mobile
*   Card con border 2px Azul 100, `rounded-xl`, padding 24px
*   Checked states por variante:
    *   Express: Fondo Azul 700, border Azul 700, texto blanco, icono blanco/Azul
    *   LowCost: Fondo Azul 50, border Azul 200, texto Azul 700, icono Azul 700/blanco
    *   Flex: Fondo Amarillo 50, border Amarillo 200, texto Azul 700, icono Azul 700/blanco
*   Focus visible: Anillo Azul 500 + offset blanco

### F. Vertical Stepper (How It Works)
*   Línea vertical 2px Azul 100 a la izquierda (left: 1.5rem)
*   Dots 24px con border 3px blanco:
    *   Completed: Verde 500 bg + verde light glow
    *   Active: Amarillo 500 bg + amarillo glow + pulse animation
    *   Pending: Azul 100 bg
*   Número: Anton H2, Completed→Azul 400, Active→Blanco, Pending→Azul 300
*   Título: Anton H3, Desc: IBM Plex Sans body

### G. Logos Carousel (Infinite Scroll)
*   Container: `overflow-hidden` + `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`
*   Track: `display: flex`, `gap: 48px`, `animation: logos-scroll 30s linear infinite`, `width: max-content`
*   Items: `flex-shrink: 0`, height 48px, `filter: grayscale(100%) contrast(1.2) opacity(0.6)`
*   Hover/Focus: `filter: none`, `opacity: 1`
*   Pause on: hover, focusin, visibilitychange (tab hidden)

### H. Float / Tilt Cards (Hero Control Tower)
*   `transform-style: preserve-3d`
*   Container con `perspective: 1000px`
*   4 capas con `translateZ`: 10px, 40px, 70px, 80px
*   Mousemove: lerp suave (factor 0.1) → `rotateX(max 8deg) rotateY(max 8deg)`
*   Hover individual: `translateY(-6px) rotateX(4deg) rotateY(-2deg)` + `--shadow-antigravity-deep`

---

## 5. Layout Principles

### Grid & Structure
*   **Bento Grid:** Layout base de 12 columnas (`grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8`) que redistribuye dinámicamente el contenido según pantalla.
*   **Celdas Maestras (Master Cells):** Ocupan 7-12 columnas (ej: Express span 7, E-Commerce span 7).
*   **Celdas de Soporte (Support Cells):** Ocupan 5-6 columnas (ej: LowCost span 5, Flex span 5).
*   **Full Width:** Cotizador Express span 12.

### Whitespace Strategy
*   **Base Spacing:** Sistema basado en múltiplos de 4px (unidad base).
*   **Card Paddings:** Mínimo `p-6` (24px) en móviles y `p-8` (32px) en escritorios para asegurar aire visual interno.
*   **Section Padding:** `py-16` a `py-36` según jerarquía (fluid clamp).

### Alignment & Visual Balance
*   **Equilibrio Asimétrico:** Distribución Bento que equilibra bloques grandes con métricas dinámicas pequeñas, ofreciendo un mapa visual de lectura intuitiva.
*   **Alineación Textual:** Títulos principales display alineados a la izquierda o al centro dentro de su correspondiente Bento Card.

### Responsive Behavior & Touch
*   **Mobile-First Grid:** Las columnas colapsan a 1 sola columna en dispositivos móviles (< 768px).
*   **Touch Sizing:** Elementos interactivos táctiles optimizados con tamaño mínimo de 44px (`--btn-h-lg`, `--input-h`).

---

## 6. Homepage Section Architecture (URL: `/`)

La home alterna estrictamente: **Azul 700** ↔ **Blanco** ↔ **Azul 50** ↔ **Blanco** ↔ **Azul 700** ↔ **Blanco** ↔ **Azul 700** (footer)

| Orden | Sección | ID | Fondo | Componentes Clave |
|-------|---------|-----|-------|-------------------|
| 1 | **Hero** | — | Azul 700 | Control Tower (3D tilt cards), Copy con Anton Display, Dual CTA (Primary Elevated + Outline), Trust Pills |
| 2 | **Trust Bar** | — | Azul 50 | 4 Counters animados (IntersectionObserver), Badge ISO 9001 |
| 3 | **Services** | `#servicios` | Blanco | Bento Grid 12-col (Express 7, LowCost 5, Flex 5, E-Commerce 7, Cotizador 12), Double Bezel Cards |
| 4 | **How It Works** | `#como-funciona` | Azul 700 | Vertical Stepper (4 pasos), Copy lead, Divider Amarillo |
| 5 | **Social Proof** | `#confianza` | Blanco | Logos Carousel (infinite), 3 Testimonial Cards (Double Bezel) |
| 6 | **CTA Final** | — | Azul 700 | Card Blanca centered (radius 24px), Grid pattern sutil, Dual CTA (Primary + WhatsApp Verde) |
| 7 | **Footer** | — | Azul 700 + Azul 950 gradients | 3 cols (Brand/Redes, Servicios, Empresa/Contacto), Accent bar Amarilla 6px, Scroll-to-top Amarillo |

---

## 7. Design System Notes for Stitch Generation

### Language to Use
*   *Atmosphere:* "Corporate sovereign bento grid layout with double-bezel card architecture, layered shadows (elevated/float/antigravity), Anton display typography, Bebas Neue industrial labels, Geist Mono data, kinetic font stretch interactions, rioplatense local voice, Mar del Plata delivery 2026."
*   *Keywords:* "Double bezel card, antigravity shadow, nested CTA pill, kinetic font stretch, asymmetric bento grid, vertical stepper, infinite logos carousel, float/tilt 3D cards, counter animations, sovereign corporate aesthetics."

### Color References (Stitch Tokens)
```json
{
  "brand-blue": "#0636A5",
  "brand-blue-50": "#E6EEFE",
  "brand-blue-100": "#BACEFD",
  "brand-blue-200": "#8EAFFB",
  "brand-blue-300": "#628FF9",
  "brand-blue-400": "#3570F8",
  "brand-blue-500": "#0950F6",
  "brand-blue-600": "#0742CA",
  "brand-blue-700": "#0636A5",
  "brand-blue-800": "#052D8C",
  "brand-blue-900": "#04236B",
  "brand-blue-950": "#021440",
  "brand-yellow": "#FFEC01",
  "brand-yellow-50": "#FFFDE6",
  "brand-yellow-100": "#FFFAB8",
  "brand-yellow-200": "#FFF78A",
  "brand-yellow-300": "#FFF45C",
  "brand-yellow-400": "#FFF12E",
  "brand-yellow-500": "#FFEC01",
  "brand-yellow-600": "#E6D400",
  "white": "#FFFFFF",
  "success": "#16A34A",
  "warning": "#F59E0B",
  "error": "#DC2626"
}
```

### Component Prompts for Stitch

**Double Bezel Card:**
> "A rounded-2xl outer shell with background #E6EEFE, 1px solid #BACEFD border, 8px padding, and shadow [0 25px 50px -12px rgba(6,54,165,0.15)]. Inner core: rounded-xl (12px), white background, inset shadow [inset 0 2px 4px rgba(6,54,165,0.06)], 24px padding. Hover: outer shadow becomes [0 30px 60px -15px rgba(6,54,165,0.3), 0 0 50px -10px rgba(255,236,1,0.15)], border shifts to #628FF9."

**Nested CTA Pill (Primary):**
> "Rounded-full pill, 40px height, #FFEC01 background, #04236B text, 2px #FFEC01 border. Trailing icon: 32px circle, rgba(6,54,165,0.1) bg, #0636A5 icon. Hover: bg #FFF12E, shadow [0 0 40px rgba(255,236,1,0.4), 0 0 80px rgba(255,236,1,0.15)], scale(1.02). Icon hover: bg #0636A5, icon #FFEC01, translateX(4px)."

**Nested CTA Pill (Elevated - on Blue sections):**
> "Rounded-full pill, 40px height, white background, #0636A5 text, 2px #BACEFD border, shadow [0 20px 40px -8px rgba(6,54,165,0.2), 0 8px 16px -4px rgba(6,54,165,0.12)]. Hover: shadow [0 32px 64px -12px rgba(6,54,165,0.25)], translateY(-2px). Icon: rgba(6,54,165,0.1) bg, #0636A5 color → hover: bg #0636A5, white icon, translateX(4px)."

**Asymmetric Bento Grid:**
> "12-column CSS Grid. Card 1 (Express): col-span-7 on lg, col-span-6 on md, col-span-12 on sm. Card 2 (LowCost): col-span-5 lg, col-span-6 md. Card 3 (Flex): col-span-5 lg, col-span-6 md. Card 4 (E-Commerce): col-span-7 lg, col-span-6 md. Card 5 (Cotizador): col-span-12 all. Gap: 24px md, 32px lg. Auto-rows: 380px. All cards: double bezel architecture."

**Vertical Stepper:**
> "Vertical timeline with 2px line left:1.5rem. Dots: 24px, 3px white border. Completed: #16A34A bg + #DCFCE7 glow. Active: #FFEC01 bg + rgba(255,236,1,0.3) glow + pulse 2s. Pending: #BACEFD bg. Numbers: Anton clamp(1.75rem,3vw,2.25rem). Titles: Bebas Neue clamp(1.25rem,2vw,1.5rem). Body: IBM Plex Sans 1rem."

**Logos Carousel:**
> "Infinite horizontal scroll. Mask fade edges (10%/90%). Track: flex, gap 48px, animate 30s linear infinite translateX(-50%). Items: 48px height, grayscale(100%) contrast(1.2) opacity(0.6). Hover/focus: grayscale(0%) contrast(1) opacity(1). Pause on hover/focus/tab-hidden."

**Float/Tilt Hero Cards:**
> "Perspective 1000px container. 4 absolute cards with translateZ: 10px, 40px, 70px, 80px. Mousemove lerp 0.1 → rotateX/Y max 8deg. Card hover: translateY(-6px) rotateX(4deg) rotateY(-2deg) + antigravity shadow [0 30px 60px -15px rgba(6,54,165,0.3), 0 0 50px -10px rgba(255,236,1,0.15)]."

### Incremental Iteration Rules
*   Al expandar las vistas, mantener siempre la grilla modular bento-friendly.
*   Usar el voseo argentino en los copys generados ("Cotizá", "Ingresá", "Contactanos").
*   Simular localizaciones en Mar del Plata ("Friuli 1972", "Constitución", "Chauvín", "Punta Mogotes", "Playa Grande", "Centro").
*   **Nunca** usar `slate-*`, `gray-*`, `zinc-*`, `neutral-*` — solo tokens brand-blue/brand-yellow/white.
*   **Nunca** usar gradientes de página completa como fondo base (`gradient-surface`, `gradient-dark`).
*   **Nunca** usar URLs externas para assets de marca (logo, imágenes críticas).
*   Inputs siempre con `border-2 border-brand-blue-100` → focus `border-brand-blue-700` + ring.
*   CTA siempre con `cta-nested-pill` y esquinas `rounded-full`.

---

## 8. Reglas Vigentes Post-Auditoría (2026-07-18)

1.  **NO** usar `text-slate-*`, `bg-slate-*`, `border-slate-*` — usar siempre `brand-blue-*` equivalente
2.  **NO** usar gradientes completos de página (`gradient-surface`, `gradient-dark`) como fondo base
3.  **NO** usar URLs externas para assets del brand (logo, imágenes críticas)
4.  Las secciones deben alternar: `bg-brand-blue-700` (oscura) ↔ `bg-white` (clara) ↔ `bg-brand-blue-50` (overlay)
5.  Los inputs siempre con `border-2 border-brand-blue-100` → focus `border-brand-blue-700` + ring
6.  Los CTA siempre con `cta-nested-pill` y esquinas `rounded-full`
7.  Fuente mono **siempre** `Geist Mono` (no `ui-monospace` genérico sin fallback)
8.  Body font **siempre** `IBM Plex Sans` (no `Inter` como principal)
9.  Double Bezel: outer radius 16px, inner radius 12px, outer padding 8px, inner padding 24px
10. Sección Hero: `min-height: 95dvh`, `padding-top: 8rem` (header offset)
11. Container max-width: 1280px (80rem), padding responsive 16/24/32px