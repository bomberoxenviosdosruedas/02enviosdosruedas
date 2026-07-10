# Design System: Envíos DosRuedas (High-Velocity Corporate Theme)

## 1. Visual Theme & Atmosphere
Un entorno corporativo e industrial de alto rendimiento que combina precisión operativa y velocidad logística. El flujo visual transita dinámicamente entre secciones inmersivas oscuras de tono institucional y secciones de lienzo claro de alta legibilidad, emulando una cabina de control moderna y profesional.
- **Density:** Daily App Balanced (6/10) — Diseñado para una lectura ágil de datos de envío y servicios críticos.
- **Variance:** Offset Asymmetric (6/10) — Diseños de héroe con splits asimétricos e integración lateral de componentes de tracking simulados.
- **Motion:** Fluid CSS & Kinetic Loops (5/10) — Micro-interacciones cinéticas en barras de progreso y botones con respuestas físicas directas.
- **Atmósfera:** Estructura limpia y utilitaria, con contrastes de bloque muy definidos donde el azul corporativo transmite seguridad y el amarillo acentúa la acción inmediata.

---

## 2. Color Palette & Roles
El sistema de color utiliza bloques sólidos de alto contraste para separar jerarquías de contenido sin recurrir a gradientes sobrecargados.

- **Primary / Egyptian Blue** (`#0636A5`) — Fondo principal de secciones inmersivas, cabecera y pie de página. Aporta la base de identidad corporativa.
- **Dark Primary / Deep Navy** (`#002068`) — Fondo secundario para layouts de soporte y contraste estructural.
- **Accent / Sun Yellow** (`#FFEC01`) — Color de acento único reservado para botones principales de conversión (CTAs), badges de estado críticos y barras de localización activa. Saturación controlada.
- **Canvas White / Surface** (`#FFFFFF`) — Fondo limpio y despejado para secciones de lectura, paneles internos y tarjetas.
- **Ink Black / On-Surface** (`#151B2D`) — Texto principal sobre fondos claros. Alta legibilidad.
- **Muted Gray / On-Surface Variant** (`#444653`) — Texto secundario, subtítulos y metadatos de menor jerarquía.
- **Subtle Border** (`#E2E8F0`) — Líneas de separación y marcos de tarjetas en secciones claras.
*(Máximo 1 color de acento. Saturación por debajo del 80%. Prohibido el uso de halos degradados morados/neón).*

---

## 3. Typography Rules
- **Display / Headlines:** `Anton` — Tipografía condensada e industrial en mayúsculas. Genera impacto visual inmediato. Track-tight y leading controlado.
- **Body & Text:** `Outfit` (Tipografía principal para producción) — Letra de palo seco limpia y con alta legibilidad para descripciones largas y etiquetas de formulario. Límite estricto de 65 caracteres por línea.
- **Mono / Data:** `ui-monospace` o `Geist Mono` — Utilizada estrictamente para números de guía, códigos de seguimiento (Tracking ID), horas estimadas de entrega (ETA) y métricas duras.
- **Banned:** `Inter` y fuentes genéricas de sistema para contextos de producción premium.

---

## 4. Component Stylings
* **Buttons:** Botones con cantos vivos y planos (esquinas suavizadas, máximo `rounded-xl`). El botón principal utiliza fondo Sun Yellow (`#FFEC01`) con texto en Egyptian Blue (`#0636A5`) y efecto de traslación física en estado activo (`translate-y-[1px]` o `scale(0.98)`). Botones secundarios en secciones oscuras usan bordes translúcidos (`border-white/30`).
* **Cards:** Contenedores de información con elevación nula o muy baja. Se estructuran mediante fondos blancos limpios y bordes finos `#E2E8F0` para separar la información. En secciones oscuras, se prefiere el uso de bordes de acento translúcidos o efectos de vidrio realistas (`glassmorphism` con 1px de borde interior).
* **Inputs/Forms:** Campos de formulario con etiqueta superior en mayúsculas pequeñas. Bordes definidos de 1px que transicionan al azul corporativo en foco.
* **Loading States:** Esqueletos de carga (skeleton loaders) que coinciden exactamente con las dimensiones del componente a renderizar. Prohibido el uso de loaders circulares genéricos.
* **Progress Bar (Tracking):** Línea gruesa de 6px a 8px donde el tramo recorrido usa color de acento o azul brillante y el tramo restante un gris neutro claro, rematando con un punto activo parpadeante.

---

## 5. Layout Principles
- **Alternancia Dinámica de Fondo:** Estructuración de la landing page alternando secuencialmente entre fondos oscuros (Egyptian Blue) y claros (Canvas White) para generar un ritmo de lectura dinámico.
- **Split Asimétrico de Héroe:** Héroe alineado a la izquierda con el contenido de copy de ventas principal y CTA, y un widget simulado interactivo de alta fidelidad alineado a la derecha.
- **Grids Utilitarios:** Estructuras de rejilla que colapsan estrictamente a 1 columna en móviles (<768px). Prohibido el uso de layouts de 3 tarjetas iguales horizontales; usar cuadrículas de 2x2, 2x3 o alternancia asimétrica en su lugar.
- **Heights:** El tamaño de secciones de pantalla completa debe usar `min-h-[100dvh]` para evitar problemas de scroll y saltos en navegadores móviles (iOS Safari).

---

## 6. Motion & Interaction
- **Física de Resortes (Spring Physics):** Por defecto para animaciones e interacciones (`stiffness: 100, damping: 20` o `stiffness: 300, damping: 20` para hovers rápidos).
- **Transiciones de Estado:** Efectos hover limpios de cambio de color o elevación sutil para los elementos interactivos con duraciones controladas de 200ms a 300ms.
- **Aceleración por Hardware:** Uso exclusivo de propiedades `transform` y `opacity` para mantener el rendimiento web al 100%.

---

## 7. Anti-Patterns (Banned)
- Prohibido el uso de emojis en cualquier sección formal del sitio.
- Prohibida la tipografía `Inter` en favor de `Outfit`.
- Prohibido el uso de tipografías serif genéricas (`Times New Roman`, `Georgia`).
- Prohibido el color negro absoluto (`#000000`) en textos y lienzos (usar Ink Black `#151B2D`).
- Prohibidas las sombras brillantes de neón o estilos glow artificiales de IA.
- Prohibidos los degradados en texto de gran tamaño o fondos de tarjetas.
- Prohibido el desbordamiento horizontal en layouts de móvil.
- Prohibido el uso de nombres en inglés genéricos para la demostración de rutas locales de Mar del Plata.
- Prohibidas las palabras de copywriting cliché de IA (*"Elevate"*, *"Seamless"*, *"Unleash"*, *"Next-Gen"*, *"Game-changer"*).
- Prohibido el texto de relleno innecesario como *"Scroll to explore"*, *"Swipe down"* o iconos de flechas rebotando.
