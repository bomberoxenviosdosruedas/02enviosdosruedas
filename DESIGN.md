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
*   **700 / Azul Corporativo Primario (`#0636A5`):** Solidez, orden y presencia institucional. Se utiliza en cabeceras principales, navegación, secciones enteras y fondos de alto impacto.
*   **600 / Variación Intermedia (`#0742CA`):** Cambios de estado en componentes sobre fondo claro.
*   **500 / Acento Vibrante (`#0950F6`):** Detalles visuales y botones interactivos activos.
*   **400 / Interactivo Primario (`#3570F8`):** Enlaces y botones de acción principal en contextos específicos.
*   **300 / Hover Interactivo (`#628FF9`):** Estado hover de botones y componentes interactivos claros.
*   **200 / Detalles Visuales (`#8EAFFB`):** Enlaces secundarios, indicadores de estado sutiles y acentos.
*   **100 / Bordes Suaves (`#BACEFD`):** Bordes de tarjetas físicas, divisores de sección y estados inactivos.
*   **50 / Fondos Ultra-Claros (`#E6EEFE`):** Envolturas exteriores de tarjetas, fondos de alerta y áreas de soporte.

### 🟡 Amarillo EnviosDosruedas (Acento Logístico)
*   **500 / CTA Oficial (`#FFEC01`):** Color oficial de llamadas a la acción (CTA) primarios, botones interactivos clave y señales de alta prioridad.
*   **400 / Hover component claro (`#FFF12E`):** Hover para CTAs sobre fondos blancos o claros.
*   **300 / Hover component oscuro (`#FFF45C`):** Hover para CTAs sobre fondos de color Azul 700.
*   **200 / Detalles Decorativos (`#FFF78A`):** Pequeñas insignias (badges) de estado e indicadores de ruteo.
*   **100 / Bordes Destacados (`#FFFAB8`):** Bordes que requieren atención inmediata o resaltado.
*   **50 / Fondos de Alerta Suaves (`#FFFDE6`):** Fondos de advertencia, consejos viales o estados especiales.

### ⚪ Blanco EnviosDosruedas (Lienzo & Claridad)
*   **50 / Fondo Base (`#FFFFFF`):** Fondo base de todas las páginas, núcleo interior de tarjetas, tablas de tarifas y campos de formulario.

---

## 3. Typography Rules
*   **Headlines & Section Titles:** `Anton` (Uppercase). Se trata como un elemento de *bloque arquitectónico y señalética monumental*. Se utiliza con un interlineado extremadamente ajustado (`line-height: 1.1` o `1.2`) y un ligero `letter-spacing: 0.02em` para evocar la robustez de los antiguos timbres de aduana y contenedores marítimos.
*   **Body & Form Fields:** `IBM Plex Sans` o `Inter`. Una tipografía sans-serif de ingeniería, con una legibilidad excepcional en tablas de tarifas, códigos de seguimiento y formularios de cotización.
*   **Labels & Accents:** `IBM Plex Sans` (Semibold/Bold, Uppercase) con espaciado de letras expandido (`letter-spacing: 0.05em` a `0.1em`) para emular etiquetas industriales de lujo.
*   **Data / Metrics:** `ui-monospace` o `Geist Mono`. Exclusiva para números de rastreo, tarifas, tiempos estimados de entrega (ETA) y coordenadas físicas.

---

## 4. Component Stylings (Architecture)

### A. The "Double-Bezel" Card Architecture
Las tarjetas informativas u hojas de cálculo en el cotizador no deben presentarse planas sobre el fondo. Se modelan como piezas físicas de precisión ensambladas:
*   **Contenedor Exterior (Outer Shell):** Una envoltura `div` con fondo de Azul ultra-claro (`bg-[#E6EEFE]`), borde delgado de Azul 100 (`border border-[#BACEFD]`), un padding pequeño (`p-2`) y esquinas redondeadas (`rounded-xl` o `rounded-2xl`).
*   **Núcleo Interior (Inner Core):** El contenedor real de información dentro de la envoltura, con fondo plano Blanco (`bg-[#FFFFFF]`), su propia sombra interna suave y esquinas internas proporcionales calculadas matemáticamente.
*   **Contraste Corporativo:** Cuando las tarjetas se ubican sobre secciones de fondo azul institucional (`#0636A5`), las tarjetas nunca deben usar fondos oscuros o azules. Se implementan con fondos blancos (`bg-[#FFFFFF]` en el núcleo interior) y un contenedor exterior claro de Azul 50 (`bg-[#E6EEFE]`) para garantizar legibilidad de alta gama.

### B. Nested CTA Pills (Button-in-Button)
*   Los botones de llamada a la acción primarios deben ser completamente redondeados o con radios calculados (`rounded-xl` o `rounded-full`).
*   **Trailing Icon:** Cualquier flecha de acción (`↗` o `→`) o icono debe estar encapsulado en su propio círculo independiente con fondo sutil al final del botón para una apariencia mecánica y refinada.

### C. Inputs / Form Controls
*   Etiquetas superiores claras en tipografía técnica e inputs con fondo Blanco (`bg-[#FFFFFF]`) y bordes definidos de `1px` en Azul 100 (`#BACEFD`). Al recibir foco, transicionan fluidamente al color Azul 700 (`#0636A5`) con un anillo de enfoque nítido.

---

## 5. Layout & Grid Principles
*   **Macro-Whitespace:** Separación generosa de secciones (`py-24` a `py-36`) para permitir que la estructura de información respire.
*   **Intercalación de Secciones (Alternancia cromática):**
    Las páginas principales de presentación intercalan secciones de fondo azul institucional (`#0636A5`) y claro/blanco (`#FFFFFF`):
    *   **Sección Azul:** Fondo Azul 700 (`#0636A5`). El texto de la sección es Blanco (`#FFFFFF`), los elementos destacados e iconos son Amarillos (`#FFEC01`), y las tarjetas de información se presentan en color Blanco para legibilidad e impacto visual.
    *   **Sección Clara/Blanca:** Fondo Blanco 50 (`#FFFFFF`). Los títulos y textos principales adoptan el Azul 700 (`#0636A5`), mientras que los elementos de control e iconos se destacan en Amarillo 500 (`#FFEC01`).
*   **CSS Grid Asimétrico:** Reemplazar el uso repetitivo de tarjetas simétricas de 3 columnas por diseños asimétricos estilo Bento o splits laterales donde la información pesada reside en un bloque más grande (ej: `col-span-8`) y las acciones secundarias en el bloque complementario (`col-span-4`).
*   **Resiliencia Móvil:** Todas las estructuras asimétricas deben colapsar estrictamente a `grid-cols-1`, `w-full` y `px-4` por debajo del breakpoint de `768px` (móviles).

---

## 6. Dirección de Diseño UI por URL

1.  **Home (`/`):** Conexión corporativa. Bloques limpios que alternan fondos azul profundo (`#0636A5`) con superficies en Blanco (`#FFFFFF`). La cabecera principal expone el lema monumental con Anton en mayúsculas, seguido de un panel de cotización rápida integrado directamente en el primer pliegue como una tarjeta física blanca y flotante.
2.  **Contacto (`/contacto`):** Layout asimétrico de 2 columnas (5/12 para información institucional y datos de contacto en Azul 700; 7/12 para el formulario en tarjeta blanca con bordes Azul 100).
3.  **Cotizar Express (`/cotizar/express`):** Precisión matemática. Interfaz limpia tipo panel de control. Indicadores paso a paso utilizando números gigantescos en Anton y etiquetas explicativas en IBM Plex Sans. Entrada de datos robusta, inputs con validación en tiempo real y el botón de acción destacado en color Amarillo 500 (`#FFEC01`).
4.  **Envíos Express (`/servicios/envios-express`):** Alta velocidad controlada. Evitar iconografía de motos voladoras; utilizar fotografía conceptual de aeropuertos, hubs logísticos organizados y carreteras de noche con estelas de luz. Tonos predominantemente limpios sobre Blanco con llamadas a la acción inmediatas.
5.  **Envíos Lowcost (`/servicios/envios-lowcost`):** Eficiencia e ingeniería de costos. Layout extremadamente limpio, ordenado, sin adornos visuales innecesarios. Se le da prioridad a las tablas tarifarias donde los números en IBM Plex Sans son los protagonistas absolutos sobre fondo Blanco.
6.  **Envíos Flex (`/servicios/enviosflex`):** Adaptabilidad empresarial. Tonos Azul 50 (`#E6EEFE`) y Blanco (`#FFFFFF`) con acentos sutiles en Amarillo 500. Iconos lineales de grosor constante de `2px` en Azul 700 que ilustran la integración API con tiendas en línea.
7.  **Plan Emprendedores (`/servicios/plan-emprendedores`):** Crecimiento ordenado e institucional. Fondos que transmiten seguridad. Se detalla el proceso de acompañamiento logístico como una línea de tiempo vertical rígida con nodos en Azul 700.
8.  **Envíos Flex Alternativo (`/servicios/envios-flex`):** Profesionalización de la entrega programada. Cada sector se presenta en tarjetas con bordes definidos en Azul 100 (`#BACEFD`) y micro-fotografías.
9.  **Logística Corporativa (`/servicios/logistica-corporativa`):** Elite B2B. Bloques de color Azul 700 que ocupan secciones enteras de la pantalla. Fotografía industrial a gran escala en tonos fríos. Información crítica sobre integraciones ERP, SLAs contractuales y seguridad del transporte de valores.
10. **Cotizar Lowcost (`/cotizar/lowcost`):** Racionalidad económica. El panel de la derecha actualiza dinámicamente el precio final con números de gran tamaño en Azul 700, desglosando impuestos y tasas de distribución para dar la máxima transparencia institucional.
11. **Nuestras Redes (`/nosotros/nuestras-redes`):** Conectividad y comunidad regulada. En lugar de una estética caótica de redes sociales tradicionales, las tarjetas se presentan como comunicados de prensa con marcos rígidos en Azul 100 y tipografías uniformes.
12. **Sobre Nosotros (`/nosotros/sobre-nosotros`):** Legado y visión nacional. Uso de tipografía Anton monumental para hitos históricos. Documentación fotográfica oficializada de la infraestructura en blanco y azul.
13. **Preguntas Frecuentes (`/nosotros/preguntas-frecuentes`):** Orden de biblioteca estatal. Los acordeones de preguntas frecuentes utilizan un diseño limpio con bordes inferiores finos en Azul 100 (`#BACEFD`), expandiéndose con transiciones suaves y micro-indicadores en Amarillo 500 (`#FFEC01`).
14. **Términos y Condiciones (`/terminos-y-condiciones`):** Layout editorial clásico de 1 columna con barra de navegación lateral para los apartados del documento sobre fondo Blanco.
15. **Política de Privacidad (`/politica-de-privacidad`):** Transparencia institucional y custodia de la privacidad de los datos. Secciones bien delimitadas por separadores horizontales de `1px` en Azul 100 (`#BACEFD`) y llamada de atención visual al canal de consultas de privacidad.

---

## 7. Design Audit & Optimization (2026-07-17)

### Cambios Aplicados en Última Optimización

#### 🔴 Critical — Corrección de colores externos a la paleta
Se eliminaron todos los usos de `text-slate-*`, `bg-slate-*` y `border-slate-*` en 9 archivos, reemplazándolos con tokens de la paleta oficial:

| Archivo | Cambio |
|---------|--------|
| `nosotros/sobre-nosotros/page.tsx` | `text-slate-900` → `text-brand-blue-700` |
| `nosotros/preguntas-frecuentes/page.tsx` | `text-slate-900` → `text-brand-blue-700` |
| `nosotros/nuestras-redes/page.tsx` | `text-slate-900` → `text-brand-blue-700` |
| `cotizar/express/*Form.tsx` | `text-slate-500` → `text-brand-blue-400`, `bg-slate-50` → `bg-brand-blue-50/50` |
| `cotizar/express/*Hero.tsx` | `text-slate-700/500` → `text-brand-blue-500/400` |
| `cotizar/lowcost/*Form.tsx` | `text-slate-500` → `text-brand-blue-400`, `bg-slate-50` → `bg-brand-blue-50/50` |
| `cotizar/lowcost/*Hero.tsx` | `text-slate-700/500` → `text-brand-blue-500/400` |
| `cotizar/lowcost/*Help.tsx` | `text-slate-600` → `text-brand-blue-500` |
| `FaqAccordion.tsx` | `text-slate-800` → `text-brand-blue-500` |

#### 🟡 Major — Inconsistencias de layout
- **gradient-surface** eliminado de 4 páginas de servicios → reemplazado por `bg-white`
- **gradient-dark** eliminado de cotizar/express → reemplazado por `bg-brand-blue-700`
- **Logo externo postimg.cc** reemplazado por logo local (`/LogoEnviosDosRuedas.webp`)
- **CarruselRedes duplicado** unificado (se eliminó import a `Carrusel-Redes.tsx`)

#### 🟢 Minor — Pulido visual
- Todos los textos ahora usan exclusivamente brand-blue-700 o brand-ink como color base

### Reglas Vigentes Post-Auditoría
1. **NO** usar `text-slate-*`, `bg-slate-*`, `border-slate-*` — usar siempre brand-blue-* equivalente
2. **NO** usar gradientes completos de página (`gradient-surface`, `gradient-dark`) como fondo base
3. **NO** usar URLs externas para assets del brand (logo, imágenes críticas)
4. Las secciones deben alternar: `bg-brand-blue` (oscura) ↔ `bg-white` (clara)
5. Los inputs siempre con `border-2 border-brand-blue-700` en foco
6. Los CTA siempre con `cta-nested-pill` y esquinas `rounded-full`
