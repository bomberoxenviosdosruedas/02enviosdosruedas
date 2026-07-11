# Design System: Envíos DosRuedas (Sovereign Infrastructure & Heritage Logistics)

Este documento define la base del sistema de diseño para **Envíos DosRuedas** (2026), estableciendo una identidad de confianza soberana, solidez institucional e infraestructura logística premium. Rompe por completo con el sesgo informal de entrega urbana y eleva la marca al nivel de un correo postal e institucional de alto rendimiento.

---

## 1. Visual Theme & Atmosphere
El entorno evoca precisión cronométrica, custodia de activos y la espina dorsal de la conectividad corporativa. Es una cabina de control digital organizada y de alto rendimiento. El lienzo principal del sitio es **limpio y estructurado**, utilizando el color azul institucional como ancla de confianza y orden.

*   **Density:** Utility & Operational Focus (8/10) — Estructura impecable con tablas legibles, metadatos claros y jerarquías limpias.
*   **Variance:** Structural Asymmetry & Bento Layouts (7/10) — Grids asimétricos organizados y contenedores limpios.
*   **Motion:** Precise Kinetic Flow (5/10) — Transiciones amortiguadas sutiles que aportan fluidez y sensación física premium, sin animaciones infantiles o estridentes.
*   **Atmosphere:** La solemnidad y herencia del azul profundo combinado con acentos dorados quirúrgicos en fondos claros estructurados por capas.

---

## 2. Color Palette & Roles
El sistema cromático utiliza bloques limpios de contraste sólido para separar jerarquías de contenido, eliminando degradados estridentes o estéticas informales.

*   **Primary / Azul de Estado (`#00277C`):** Representa solidez, orden y presencia institucional. Utilizado en cabeceras principales, navegación y contenedores clave.
*   **Secondary / Oro Logístico (`#D8CA00`):** Acento quirúrgico para estados, indicadores activos, bordes y micro-detalles.
*   **Canvas / Fondo Base (`#F9F9FC`):** Superficie clara y fría que reduce la fatiga visual y enmarca contenedores.
*   **Surface Containers / Capas Físicas (`#EEEEF0` a `#FFFFFF`):** Estructura la profundidad del sitio mediante capas de información.
*   **Neutral Text / Charcoal de Imprenta (`#1A1C1E`):** Gris oscuro para texto de cuerpo de alta legibilidad.
*   **Muted Text / Slate Gray (`#444653`):** Para metadatos, etiquetas secundarias e indicadores secundarios.
*   **Subtle Border (`#E2E8F0`):** Líneas finas divisorias para estructurar contenedores físicos.

---

## 3. Typography Rules
*   **Headlines & Section Titles:** `Anton` (Uppercase). Se trata como un elemento de *bloque arquitectónico y señalética monumental*. Se utiliza con un interlineado extremadamente ajustado (`line-height: 1.1` o `1.2`) y un ligero `letter-spacing: 0.02em` para evocar la robustez de los antiguos timbres de aduana y contenedores marítimos.
*   **Body & Form Fields:** `IBM Plex Sans` o `Inter`. Una tipografía sans-serif de ingeniería, con una legibilidad excepcional en tablas de tarifas, códigos de seguimiento y formularios de cotización.
*   **Labels & Accents:** `IBM Plex Sans` (Semibold/Bold, Uppercase) con espaciado de letras expandido (`letter-spacing: 0.05em` a `0.1em`) para emular etiquetas industriales de lujo.
*   **Data / Metrics:** `ui-monospace` o `Geist Mono`. Exclusiva para números de rastreo, tarifas, tiempos estimados de entrega (ETA) y coordenadas físicas.

---

## 4. Component Stylings (Architecture)

### A. The "Double-Bezel" Card Architecture
Las tarjetas informativas u hojas de cálculo en el cotizador no deben presentarse planas sobre el fondo. Deben modelarse como piezas físicas ensambladas:
*   **Contenedor Exterior (Outer Shell):** Una envoltura `div` con fondo sutil (`bg-[#EEEEF0]`), borde delgado (`border border-[#E2E8F0]`), un padding pequeño (`p-2`) y esquinas redondeadas (`rounded-xl` o `rounded-2xl`).
*   **Núcleo Interior (Inner Core):** El contenedor real de información dentro de la envoltura, con fondo plano y limpio (`bg-white`), su propia sombra interna suave y esquinas internas proporcionales calculadas matemáticamente.
*   **Contraste Corporativo:** Cuando las tarjetas se ubican sobre secciones de fondo azul institucional (`#00277C`), las tarjetas nunca deben usar fondos oscuros o azules. Se implementan con fondos blancos (`bg-white` en el núcleo interior) y un contenedor exterior claro, garantizando una legibilidad de alta gama y un contraste corporativo premium.

### B. Nested CTA Pills (Button-in-Button)
*   Los botones de llamada a la acción primarios deben ser completamente redondeados o con radios calculados (`rounded-xl` o `rounded-full`).
*   **Trailing Icon:** Cualquier flecha de acción (`↗` o `→`) o icono debe estar encapsulado en su propio círculo independiente con fondo sutil al final del botón para una apariencia mecánica y refinada.

### C. Inputs / Form Controls
*   Etiquetas superiores claras en tipografía técnica e inputs con bordes definidos de `1px` en `#E2E8F0`. Al recibir foco, transicionan fluidamente al color azul primario con un anillo de enfoque nítido.

---

## 5. Layout & Grid Principles
*   **Macro-Whitespace:** Separación generosa de secciones (`py-24` a `py-36`) para permitir que la estructura de información respire.
*   **Intercalación de Secciones (Alternancia cromática):**
    Las páginas principales de presentación intercalan secciones de fondo azul institucional (`#00277C`) y claro (`#F9F9FC` / blanco):
    *   **Sección Azul:** El texto de la sección es blanco, los elementos destacados e iconos son amarillos o dorados, y las tarjetas de información se presentan en color blanco para legibilidad e impacto visual.
    *   **Sección Clara/Blanca:** Los títulos y textos principales adoptan el azul corporativo (`#00277C`), mientras que los elementos de control e iconos se destacan en amarillo.
*   **CSS Grid Asimétrico:** Reemplazar el uso repetitivo de tarjetas simétricas de 3 columnas por diseños asimétricos estilo Bento o splits laterales donde la información pesada reside en un bloque más grande (ej: `col-span-8`) y las acciones secundarias en el bloque complementario (`col-span-4`).
*   **Resiliencia Móvil:** Todas las estructuras asimétricas deben colapsar estrictamente a `grid-cols-1`, `w-full` y `px-4` por debajo del breakpoint de `768px` (móviles).

---

## 6. Dirección de Diseño UI por URL

1.  **Home (`/`):** Conexión corporativa. Bloques limpios que alternan fondos azul profundo con superficies en gris frío. La cabecera principal expone el lema monumental con Anton en mayúsculas, seguido de un panel de cotización rápida integrado directamente en el primer pliegue como una tarjeta física blanca y flotante.
2.  **Contacto (`/contacto`):** Layout asimétrico de 2 columnas (5/12 para información institucional y datos de contacto directo; 7/12 para el formulario de requerimientos corporativos).
3.  **Cotizar Express (`/cotizar/express`):** Precisión matemática. Interfaz limpia tipo panel de control. Indicadores paso a paso utilizando números gigantescos en Anton y etiquetas explicativas en IBM Plex Sans. Entrada de datos robusta, inputs con validación en tiempo real y el botón de acción principal destacado en el color oro de contraste.
4.  **Envíos Express (`/servicios/envios-express`):** Alta velocidad controlada. Evitar iconografía de motos voladoras; utilizar fotografía conceptual de aeropuertos, hubs logísticos organizados y carreteras de noche con estelas de luz. Tonos predominantemente limpios con llamadas a la acción inmediatas.
5.  **Envíos Lowcost (`/servicios/envios-lowcost`):** Eficiencia e ingeniería de costos. Layout extremadamente limpio, ordenado, sin adornos visuales innecesarios. Se le da prioridad a las tablas tarifarias donde los números en IBM Plex Sans son los protagonistas absolutos.
6.  **Envíos Flex (`/servicios/enviosflex`):** Adaptabilidad empresarial. Tonos grises suaves con acentos sutiles en oro. Iconos lineales de grosor constante de `2px` que ilustran la integración API con tiendas en línea y la flexibilidad horaria.
7.  **Plan Emprendedores (`/servicios/plan-emprendedores`):** Crecimiento ordenado e institucional. Fondos que transmiten seguridad. Se detalla el proceso de acompañamiento logístico como una línea de tiempo vertical rígida con nodos en azul de estado.
8.  **Envíos Flex Alternativo (`/servicios/envios-flex`):** Profesionalización de la entrega programada. Cada sector se presenta en tarjetas con bordes definidos y micro-fotografías que demuestran un manejo higiénico, seguro y premium de las mercancías.
9.  **Logística Corporativa (`/servicios/logistica-corporativa`):** Elite B2B. Bloques de color azul profundo que ocupan secciones enteras de la pantalla. Fotografía industrial a gran escala en tonos fríos. Información crítica sobre integraciones ERP, SLAs contractuales y seguridad del transporte de valores.
10. **Cotizar Lowcost (`/cotizar/lowcost`):** Racionalidad económica. El panel de la derecha actualiza dinámicamente el precio final con números de gran tamaño, desglosando impuestos y tasas de distribución para dar la máxima transparencia institucional.
11. **Nuestras Redes (`/nosotros/nuestras-redes`):** Conectividad y comunidad regulada. En lugar de una estética caótica de redes sociales tradicionales, las tarjetas se presentan como comunicados de prensa o portales de información con marcos rígidos y tipografías uniformes.
12. **Sobre Nosotros (`/nosotros/sobre-nosotros`):** Legado y visión nacional. Uso de tipografía Anton monumental para hitos históricos. Documentación fotográfica del crecimiento de la infraestructura física, flota vehicular oficializada y almacenes de distribución.
13. **Preguntas Frecuentes (`/nosotros/preguntas-frecuentes`):** Orden de biblioteca estatal. Los acordeones de preguntas frecuentes utilizan un diseño limpio con bordes inferiores finos en gris claro, expandiéndose con transiciones suaves y micro-indicadores en color oro logístico.
14. **Términos y Condiciones (`/terminos-y-condiciones`):** Layout editorial clásico de 1 columna con barra de navegación lateral para los apartados del documento.
15. **Política de Privacidad (`/politica-de-privacidad`):** Transparencia institucional y custodia de la privacidad de los datos. Secciones bien delimitadas por separadores horizontales de `1px` en gris claro y llamada de atención visual al canal de consultas de privacidad.
