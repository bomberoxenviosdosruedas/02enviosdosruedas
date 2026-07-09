# Design System: Envíos DosRuedas (High-Velocity Corporate Theme)

## 1. Visual Theme & Atmosphere
Un entorno corporativo e industrial de alto rendimiento que combina precisión operativa y velocidad. El flujo visual transita dinámicamente entre secciones inmersivas oscuras de tono institucional y secciones de lienzo claro de alta legibilidad, emulando una cabina de control logística moderna.
- **Density:** Daily App Balanced (6/10) - Diseñado para una lectura ágil de datos de envío y servicios críticos.
- **Variance:** Offset Asymmetric (6/10) - Diseños de héroe con splits asimétricos e integración lateral de componentes de tracking simulados.
- **Motion:** Fluid CSS & Kinetic Loops (5/10) - Micro-interacciones cinéticas en barras de progreso y botones con respuestas directas.
- **Atmósfera:** Estructura limpia y utilitaria, con contrastes de bloque muy definidos donde el azul corporativo transmite seguridad y el amarillo acentúa la acción inmediata.

## 2. Color Palette & Roles
El sistema de color utiliza bloques sólidos de alto contraste para separar jerarquías de contenido sin recurrir a gradientes sobrecargados.

- **Primary / Egyptian Blue** (#003399) — Fondo principal de secciones inmersivas, cabecera y pie de página. Aporta la base de identidad corporativa.
- **Dark Primary / Deep Navy** (#002068) — Fondo secundario para layouts de soporte y contraste estructural.
- **Accent / Sun Yellow** (#FFCC00) — Color de acento único reservado para botones principales de conversión (CTAs), badges de estado críticos y barras de localización activa. Saturación controlada.
- **Canvas White / Surface** (#FFFFFF) — Fondo limpio y despejado para secciones de lectura, paneles internos y tarjetas.
- **Ink Black / On-Surface** (#151B2D) — Texto principal sobre fondos claros. Alta legibilidad.
- **Muted Gray / On-Surface Variant** (#444653) — Texto secundario, subtítulos y metadatos de menor jerarquía.
- **Subtle Border** (#E2E8F0) — Líneas de separación y marcos de tarjetas en secciones claras.

## 3. Typography Rules
- **Display / Headlines:** Anton — Tipografía condensada e industrial en mayúsculas. Genera impacto visual inmediato. Track-tight y leading controlado.
- **Body & Text:** Satoshi (Recomendada premium para producción) o Inter (Base) — Letra de palo seco limpia y con alta legibilidad para descripciones largas y etiquetas de formulario. Límite estricto de 65 caracteres por línea.
- **Mono / Data:** ui-monospace o Geist Mono — Utilizada estrictamente para números de guía, códigos de seguimiento (Tracking ID), horas estimadas de entrega (ETA) y métricas duras.

## 4. Component Stylings
* **Buttons:** Botones con cantos vivos y planos (sin bordes redondeados pronunciados o con bordes rectos `rounded-none`/`rounded-sm` de 2px a 4px). El botón principal utiliza fondo Sun Yellow (#FFCC00) con texto en Egyptian Blue (#003399). Botones secundarios en secciones oscuras usan bordes translúcidos (`border-white/30`).
* **Cards:** Contenedores de información con elevación nula o muy baja. Se estructuran mediante fondos blancos limpios y bordes finos `#E2E8F0` para separar la información. Esquinas rectangulares o sutilmente suavizadas (máximo 4px-8px).
* **Inputs:** Campos de formulario con etiqueta superior en mayúsculas pequeñas. Bordes definidos de 1px que transicionan al color de acento o azul en foco.
* **Progress Bar (Tracking):** Línea gruesa de 6px a 8px donde el tramo recorrido usa color de acento o azul brillante y el tramo restante un gris neutro claro, rematando con un punto activo parpadeante.

## 5. Layout Principles
- **Alternancia Dinámica de Fondo:** Estructuración de la landing page alternando secuencialmente entre fondos oscuros (Egyptian Blue) y claros (Canvas White) para generar un ritmo de lectura dinámico.
- **Split Asimétrico de Héroe:** Héroe alineado a la izquierda con el contenido de copy de ventas principal y CTA, y un widget simulado interactivo de alta fidelidad alineado a la derecha.
- **Grids Utilitarios:** Estructuras de rejilla que colapsan estrictamente a 1 columna en móviles (<768px). Prohibido el uso de layouts de 3 tarjetas iguales horizontales; usar cuadrículas de 2x2, 2x3 o alternancia asimétrica en su lugar.

## 6. Motion & Interaction
- **Transiciones de Estado:** Efectos hover limpios de cambio de color o elevación sutil para los elementos interactivos.
- **Aceleración por Hardware:** Uso exclusivo de propiedades `transform` y `opacity` para mantener el rendimiento web al 100%.

## 7. Anti-Patterns (Banned)
- Prohibido el uso de emojis en cualquier sección formal.
- Prohibidos los degradados en texto de gran tamaño o fondos de tarjetas.
- Prohibido el color negro absoluto (#000000) en textos y lienzos.
- Prohibido inventar o simular datos ficticios de rendimiento técnico que no pertenezcan al negocio real (usar marcadores `[métrica]`).
- Prohibidas las sombras brillantes de neón o estilos glow artificiales de IA.
- Prohibido el desbordamiento horizontal en layouts de móvil.
- Prohibido el uso de nombres en inglés genéricos para la demostración de rutas locales de Mar del Plata.
