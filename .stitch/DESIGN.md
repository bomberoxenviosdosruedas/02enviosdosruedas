---
name: Envíos DosRuedas
colors:
  primary: '#0636A5'
  on-primary: '#ffffff'
  secondary: '#FFEC01'
  on-secondary: '#0F172A'
  background: '#F8FAFC'
  on-background: '#0F172A'
  surface: '#ffffff'
  on-surface: '#0F172A'
  surface-variant: '#F1F5F9'
  on-surface-variant: '#475569'
  outline: '#CBD5E1'
  brand-blue: '#0636A5'
  brand-yellow: '#FFEC01'
  dark-blue: '#172554'
  light-blue: '#EFF6FF'
typography:
  display:
    fontFamily: Anton
    fontSize: clamp(3rem, 5vw, 4.5rem)
    lineHeight: '1.1'
    letterSpacing: '0.02em'
  h1:
    fontFamily: Anton
    fontSize: clamp(2.25rem, 4vw, 3rem)
    lineHeight: '1.2'
    letterSpacing: '0.02em'
  h2:
    fontFamily: Anton
    fontSize: clamp(1.75rem, 3vw, 2.25rem)
    lineHeight: '1.3'
    letterSpacing: '0.03em'
  h3:
    fontFamily: Bebas Neue
    fontSize: clamp(1.25rem, 2vw, 1.5rem)
    lineHeight: '1.4'
    letterSpacing: '0.04em'
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '24px'
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
---

# Design System: Envíos DosRuedas

Este documento define de manera estricta y detallada las especificaciones del sistema de diseño, los tokens visuales, las pautas estéticas y la arquitectura del proyecto **Envíos DosRuedas** (Logística de última milla y soluciones E-Commerce en Mar del Plata, año de referencia **2026**). Este sistema se fundamenta en un esquema de **Bento Grid UI** potenciado por una estética **Neo-Brutalista Corporativa**.

---

## 1. Visual Theme & Atmosphere

El sistema de diseño de Envíos DosRuedas está concebido para transmitir velocidad, profesionalidad y confianza vial en el entorno urbano de Mar del Plata. Fusiona la solidez y rigidez estructural del **Bento Grid** con la fuerza gráfica del **Neo-Brutalismo Corporativo**. La interfaz presenta un fuerte contraste mediante bordes gruesos y oscuros, sombras duras sin desenfoque (offset), esquinas suavizadas y tipografías condensadas de gran impacto que emulan la señalización vial.

La atmósfera general es enérgica, limpia y corporativa. La densidad del contenido es moderada a alta, organizando la información en tarjetas modulares y widgets interactivos autoportantes. El aire visual se garantiza mediante espacios holgados y márgenes internos generosos, complementando la rigidez modular con micro-interacciones suaves y dinámicas (como el estiramiento tipográfico cinético y la reducción de desplazamiento en botones al pasar el cursor).

---

## 2. Color Palette & Roles

Nuestra paleta de colores equilibra la confianza institucional y la velocidad vial urbana. Está configurada estrictamente para evitar colores hexadecimales genéricos ad-hoc.

### Primary Foundation
*   **Egyptian Blue** (`#0636A5` / `bg-brand-blue`): **Dominancia (60%).** Utilizado para estructurar el sitio, contenedores, barras de navegación principales, bordes del neo-brutalismo y textos de marca destacados.
*   **Fondo Claro** (`#F8FAFC` / `bg-slate-50`): Fondo principal limpio en modo claro que maximiza la legibilidad.
*   **Fondo Oscuro** (`#0F172A` / `bg-slate-950` / `bg-slate-900`): Utilizado en el pie de página, paneles tácticos y modales en modo oscuro.

### Accent & Interactive
*   **Sunbeam Yellow** (`#FFEC01` / `bg-brand-yellow`): **Acción e Impacto (30%).** Reservado para llamadas a la acción (CTAs), checkmarks, botones interactivos principales, estados activos y acentos viales de advertencia.
*   **Deep Blue / Navy** (`#172554` / `bg-blue-950`): Tono secundario utilizado para degradados de superficie y estados activos oscuros.
*   **Light Blue** (`#EFF6FF` / `bg-blue-50`): Utilizado para contrastar con textos oscuros en celdas Bento de menor jerarquía.

### Typography & Text Hierarchy
*   **Primary Text** (`#0F172A` / `text-slate-900`): Contraste y legibilidad óptima para títulos internos y descripciones.
*   **Secondary Text** (`#475569` / `text-slate-600`): Para cuerpos de texto secundarios y leyendas explicativas.
*   **Light Text** (`#FFFFFF` / `text-white`): Para textos sobre fondos de marca (Egyptian Blue) u oscuros.

### Functional States
*   **Success**: Verde esmeralda (`#10B981`) para confirmaciones de entrega o tarifas correctas.
*   **Warning / Error**: Rojo brillante (`#EF4444`) para advertencias de servicio o errores de cotización.

---

## 3. Typography Rules

Imitando el impacto visual y la legibilidad inmediata de la señalización urbana, el sistema tipográfico utiliza fuentes claras y estructuradas con pesos y anchos contrastantes:

### Hierarchy & Weights
*   **Títulos Display & H1-H2 (`font-display`):** **Anton** (Mayúsculas condensadas). Utilizada en títulos principales `h1` y `h2` de las cabeceras Bento.
*   **Subtítulos y Números Destacados (`font-subheading`):** **Bebas Neue**. Utilizada en badges, números clave, métricas viales e indicadores de tarifas.
*   **Cuerpo de Texto y Formularios (`font-sans`):** **Inter**. Tipografía limpia y neutral para descripciones y flujos interactivos.

### Spacing Principles
*   **Display / Cabeceras:** Interlineado muy ajustado (`line-height: 1.1` o `1.2`) con tracking ligeramente expandido (`0.02em` a `0.03em`) para dar fuerza.
*   **Textos de Cuerpo:** Interlineado relajado (`line-height: 1.5` o `1.6`) con tracking neutro para asegurar una lectura cómoda en pantallas móviles.

---

## 4. Component Stylings

### Buttons
*   **Primary Button (CTA):** Fondo Sunbeam Yellow (`bg-brand-yellow`), borde sólido negro o azul (`border-2 border-brand-blue`), texto en Anton o Bebas Neue, esquinas redondeadas (`rounded-xl`).
*   **Neo-Brutalist Effect:** Al hacer hover, el botón reduce su sombra (`hover:shadow-[2px_2px_0px_#0636A5]`) y se desplaza ligeramente (`hover:translate-x-[2px] hover:translate-y-[2px]`) para simular presión física.
*   **Interactive Target:** Altura mínima de 48px para facilitar el uso en dispositivos móviles de repartidores y clientes.

### Cards & Bento Containers
*   **Bento Cards:** Bordes definidos de 2px en Egyptian Blue (`border-2 border-brand-blue`) y sombra dura sólida sin difuminado (`shadow-[4px_4px_0px_#0636A5]`).
*   **Esquinas:** Redondeado suave (`rounded-2xl` o `rounded-3xl`) para contrastar con la rigidez modular.
*   **Degradados de fondo:** Uso de gradientes sutiles (`gradient-surface` o `gradient-blue`) para enriquecer las tarjetas visualmente sin sobrecargarlas.

### Navigation
*   **OptimizedHeader:** Layout de grilla modular en la barra superior que encaja de forma fluida con las tarjetas Bento de la landing page. Presenta accesos directos de marca con tipografía Bebas Neue y llamadas a la acción viales en Sunbeam Yellow.

### Inputs & Forms
*   **Inputs:** Cajas limpias con bordes de 2px en gris claro (`border-2 border-gray-200`) que cambian a Egyptian Blue (`border-brand-blue`) con sombra azul en estado enfocado.
*   **Etiquetas:** Siempre visibles y escritas en mayúscula ligera usando la fuente Inter con un peso `semibold`.

### Domain-Specific Components
*   **LeafletRouteMap / DistanceMap:** Mapas interactivos de ruteo de envíos en Mar del Plata, contenidos dentro de Bento Cards con aislamiento estricto de desborde (`overflow-hidden`) y esquinas redondeadas.
*   **Cotizador Express:** Formulario interactivo modular integrado en una celda Bento Maestra para estimación inmediata de tarifas.

---

## 5. Layout Principles

### Grid & Structure
*   **Bento Grid:** Layout base de 12 columnas (`grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8`) que redistribuye de forma dinámica el contenido según la pantalla.
*   **Celdas Maestras:** Ocupan de 8 a 12 columnas.
*   **Celdas de Soporte:** Ocupan de 3 a 6 columnas en pantallas grandes.

### Whitespace Strategy
*   **Base Spacing:** Sistema basado en múltiplos de 4px (unidad base).
*   **Card Paddings:** Mínimo de `p-6` (24px) en móviles y `p-8` (32px) en escritorios para asegurar aire visual interno.

### Alignment & Visual Balance
*   **Equilibrio Asimétrico:** Distribución Bento que equilibra bloques grandes con métricas dinámicas pequeñas, ofreciendo un mapa visual de lectura intuitiva.
*   **Alineación Textual:** Títulos principales display alineados a la izquierda o al centro dentro de su correspondiente Bento Card.

### Responsive Behavior & Touch
*   **Mobile-First Grid:** Las columnas colapsan a 1 sola columna en dispositivos móviles.
*   **Touch Sizing:** Elementos interactivos táctiles optimizados con un tamaño de interacción mínimo de 48px para usuarios en movimiento.

---

## 6. Design System Notes for Stitch Generation

### Language to Use
*   *Atmosphere:* "Neo-brutalist bento grid layout with bold corporate aesthetics, sharp borders, solid shadows, heavy typography, and vibrant street-level accent lighting."
*   *Keywords:* "Bento card, hard offset shadow, Anton typography, Bebas Neue highlights, rioplatense local voice, Mar del Plata delivery 2026."

### Color References
*   `brand-blue` / `primary` (Egyptian Blue): `#0636A5`
*   `brand-yellow` / `secondary` (Sunbeam Yellow): `#FFEC01`
*   `dark-blue`: `#172554`
*   `light-blue`: `#EFF6FF`
*   `slate-50` (Background): `#F8FAFC`
*   `slate-900` (Text / Dark Background): `#0F172A`

### Component Prompts
*   **Bento Card Callout:** "A rounded-2xl bento card with a 2px solid '#0636A5' border, a solid hard shadow of `[4px_4px_0px_#0636A5]`, featuring a clean white-to-slate-50 gradient background, Inter sans-serif text, and an interactive primary action button in bright yellow `#FFEC01`."
*   **Neo-Brutalist Action Button:** "An interactive button with a bright `#FFEC01` background, Anton display text in uppercase, rounded-xl corners, a 2px `#0636A5` border, and custom hover states that translate 2px on both axes with shadow size reduction to simulate a tactile button click."

### Incremental Iteration
*   Al expandir las vistas, mantén siempre la grilla modular bento-friendly.
*   Usa el voseo argentino en los copys generados ("Cotizá", "Ingresá", "Contactanos").
*   Simula localizaciones en Mar del Plata ("Friuli 1972", "Constitución", "Chauvín", "Punta Mogotes").
