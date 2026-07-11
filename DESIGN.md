# Design System: Envíos DosRuedas (High-End Corporate Heritage Theme)

Este documento define la base del sistema de diseño para **Envíos DosRuedas** (2026), unificando la solemnidad estructural de los correos e instituciones logísticas de confianza (inspirado en `correo_propio`) con las micro-interacciones cinéticas de alta gama, ritmos de movimiento premium y arquitectura de hardware de la guía visual moderna.

---

## 1. Visual Theme & Atmosphere
El entorno evoca confianza soberana, solidez corporativa y precisión técnica. Es una cabina de control digital de alto rendimiento y velocidad logística. El lienzo principal del sitio es **completamente claro** (siguiendo a `correo_propio`), utilizando el color azul institucional únicamente en cabeceras, menús y pie de página para estructurar el contenido de forma seria y corporativa.

- **Density:** Utility Focused (7/10) — La información debe estar estructurada de manera impecable. El espaciado generoso convive con datos nítidos.
- **Variance:** Structural Asymmetry (7/10) — Uso de cuadrículas estructuradas (Grids Asimétricos y Bentos de Información) para dar dinamismo a las secciones.
- **Motion:** Haptic Response (6/10) — Respuestas de animación fluidas con resortes cinéticos controlados en botones y barras de estado, simulando fricción física real.
- **Atmósfera:** La solemnidad del azul institucional se entrelaza con el amarillo como gatillo de acción principal. Relleno y cuerpo en color blanco y gris claro.

---

## 2. Color Palette & Roles
El sistema cromático utiliza bloques limpios de contraste sólido para separar jerarquías de contenido, eliminando gradientes estridentes y destellos de fondo artificiales.

- **Primary / Egyptian Blue** (`#00277c`) — El núcleo de la identidad de confianza. Utilizado exclusivamente en la barra superior (Header), barra de navegación y pie de página.
- **Accent / Sun Yellow** (`#FFEC01`) — Acento exclusivo y puntual. Reservado para botones principales (CTAs), barras de estado activas y alertas.
- **Sostenible Green** (`#2E7D32`) — Para etiquetas y badges de sostenibilidad (ej. Flota Eléctrica).
- **Canvas White / Surface** (`#FFFFFF`) — Fondo principal para todo el cuerpo del sitio, tarjetas de contenido y paneles.
- **Soft Light Gray / Surface Variant** (`#F9F9FC`) — Fondo secundario general para estructurar secciones de la página, alineado a `correo_propio`.
- **Ink Black / On-Surface** (`#0F172A`) — Texto principal de alta legibilidad sobre fondos claros.
- **Muted Gray / Text Variant** (`#475569`) — Metadatos, subtítulos y textos informativos.
- **Subtle Border** (`#E2E8F0` / `white/10`) — Líneas finas divisorias para estructurar contenedores.

---

## 3. Typography Rules
- **Display / Headlines:** `Anton` — Tipografía sans-serif condensada y potente, usada estrictamente en mayúsculas para H1, H2 y números destacados. Transmite velocidad e impacto corporativo.
- **Subheadings & Accents:** `Bebas Neue` o `IBM Plex Sans` (Medium/Bold) — Para subtítulos rápidos, títulos de tarjetas de servicio y badges de estado.
- **Body & Forms:** `Outfit` — Fuente geométrica de palo seco de alta legibilidad con excelente peso visual en texto plano y etiquetas de formulario.
- **Data / Metrics:** `ui-monospace` o `Geist Mono` — Exclusiva para ID de rastreo, costos numéricos, tiempos estimados de entrega (ETA) y métricas de rendimiento.

---

## 4. Component Stylings (Architecture)

### A. The "Double-Bezel" (Doppelrand) Card Architecture
Las tarjetas informativas u hojas de cálculo en el cotizador no deben presentarse planas sobre el fondo. Deben modelarse como piezas físicas ensambladas:
*   **Contenedor Exterior (Outer Shell):** Una envoltura `div` con fondo sutil (`bg-[#F1F5F9]` o `bg-slate-200/65`), borde delgado (`border border-slate-200` o `border-slate-350`), un padding pequeño (`p-1.5` o `p-2`) y esquinas redondeadas (`rounded-[2rem]`).
*   **Núcleo Interior (Inner Core):** El contenedor real de información dentro de la envoltura, con fondo plano (`bg-white`), su propia sombra interna suave y esquinas internas proporcionales calculadas matemáticamente (`rounded-[calc(2rem-0.5rem)]`).
*   **Contraste sobre fondos oscuros/azules:** Cuando las tarjetas se ubican sobre secciones de fondo azul institucional (`#00277c`), **las tarjetas nunca deben usar fondos oscuros o azules**. Se implementan con fondos blancos (`bg-white` en el núcleo interior) y un contenedor exterior claro, garantizando una legibilidad de alta gama y un contraste corporativo premium.

### B. Nested CTA Pills (Button-in-Button)
*   Los botones de llamada a la acción primarios deben ser completamente redondeados (`rounded-full`).
*   **Trailing Circle:** Cualquier flecha de acción (`↗` o `→`) o icono debe estar encapsulado en su propio círculo independiente (ej: `w-8 h-8 rounded-full bg-black/5 flex items-center justify-center`) al final del botón para una apariencia mecánica y refinada.

### C. Inputs / Form Controls
*   Etiquetas en mayúsculas con fuente `Bebas Neue` o `Outfit` en tamaño pequeño y peso bold (`tracking-wider text-slate-500`).
*   Marcos limpios con bordes definidos de 1px. Al recibir foco, transicionan fluidamente al color azul primario con un anillo de enfoque nítido.

---

## 5. Layout & Grid Principles
- **Macro-Whitespace:** Separación generosa de secciones (`py-24` a `py-36`) para permitir que la estructura de información respire.
- **Intercalación de Secciones (Alternancia cromática):**
  Las páginas principales de presentación intercalan secciones de fondo azul institucional (`#00277c`) y claro (`#F9F9FC` / blanco):
  *   **Sección Azul:** El texto de la sección es blanco, los elementos destacados e iconos son amarillos, y las tarjetas de información se presentan en color blanco para legibilidad e impacto visual.
  *   **Sección Clara/Blanca:** Los títulos y textos principales adoptan el azul corporativo (`#00277c`), mientras que los elementos de control e iconos se destacan en amarillo.
- **CSS Grid Asimétrico:** Reemplazar el uso repetitivo de tarjetas simétricas de 3 columnas por diseños asimétricos estilo Bento o splits laterales donde la información pesada reside en un bloque más grande (ej: `col-span-8`) y las acciones secundarias en el bloque complementario (`col-span-4`).
- **Resiliencia Móvil:** Todas las estructuras asimétricas deben colapsar estrictamente a `grid-cols-1`, `w-full` y `px-4` por debajo del breakpoint de `768px` (móviles).

---

## 6. Motion Choreography
*   **Física de Resortes (Spring Transitions):** Uso de transiciones amortiguadas personalizadas para hovers e interacciones (`stiffness: 120, damping: 18`).
*   **Staggered Entrance:** Los enlaces de navegación del header y las filas en tablas no se cargan estáticamente; se revelan secuencialmente ascendiendo sutilmente desde una máscara invisible.
