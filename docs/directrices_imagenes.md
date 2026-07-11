# 🖼️ Directrices de Estilo para Imágenes y Banners

Este documento establece las directrices visuales, cromáticas y de diseño para la creación de banners, anuncios y activos fotográficos en el ecosistema de **Envíos DosRuedas** (Mar del Plata, 2026).

---

## 📐 1. Composición y Encuadre

*   **Regla del Tercio Limpio:** Todo banner debe reservar al menos un **40% de su espacio** sobre un fondo plano, desenfocado o limpio en **Egyptian Blue (`#0636A5`)** o **Blanco (`#FFFFFF`)**. Esto garantiza que los textos montados con la tipografía display sean 100% legibles.
*   **Enfoque Humano y Operativo:** Las fotografías deben mostrar personas en situaciones reales de uso, trabajadores en ruta, o procesos técnicos logísticos reales. Evitar poses artificiales y clichés típicos de bancos de imágenes genéricos.

---

## 🎨 2. Tratamiento Fotográfico e Integración de Color

*   **Filtros de Marca (Duotono / Superposición):** Para integrar fotos genéricas de soporte, aplicar una capa de color **Egyptian Blue (`#0636A5`)** en modo *Multiplicar* o *Luz suave* con una opacidad del 20% al 40%. Esto unifica la paleta visual con la identidad de la marca.
*   **Acentos de Color:** Los elementos clave dentro de la foto (un paquete, una herramienta, el casco, o un botón) pueden aislarse para llevar el color de acento **Sunbeam Yellow (`#FFEC01`)**, dirigiendo la mirada del usuario de forma inmediata.

---

## ✍️ 3. Jerarquía Textual en Anuncios

La estructura de texto dentro de cualquier banner publicitario debe seguir este orden estricto de lectura:

1.  **Palabra Clave o Gancho (Máx. 3 palabras):**
    *   *Fuente:* `Anton` (Display)
    *   *Estilo:* Mayúsculas rígidas, tamaño extra grande.
    *   *Color:* **Sunbeam Yellow (`#FFEC01`)** o **Blanco (`#FFFFFF`)**.
    *   *Propósito:* Capturar la atención en menos de un segundo (Ej: "ENVÍA YA", "NUEVA APP").
2.  **Mensaje Secundario / Explicación:**
    *   *Fuente:* `Bebas Neue` (Subheading)
    *   *Estilo:* Mayúsculas con tracking ligero, tamaño mediano.
    *   *Color:* Blanco o azul en contraste.
    *   *Propósito:* Desarrollar la idea del gancho de forma directa y concisa.
3.  **Llamado a la Acción (Botón CTA):**
    *   *Estilo:* Caja sólida rectangular (sin bordes redondeados pronunciados o con bordes rectos de 0px a 4px).
    *   *Color:* Fondo **Sunbeam Yellow (`#FFEC01`)** con texto en **Egyptian Blue (`#0636A5`)** sobre fondos oscuros.

---

## 🗂️ 4. Tipos de Banners y Plantillas Estructurales

### A. Banner de Novedades o Campañas (Formato Horizontal / Hero Web)
*   **Fondo:** Bloque sólido **Egyptian Blue (`#0636A5`)** a la izquierda que se desvanece hacia la fotografía descriptiva en el lateral derecho.
*   **Texto:** Alineado a la izquierda. Título imponente en Anton que no compite visualmente con la imagen de fondo.
*   **Uso:** Anunciar nuevos servicios, alertas importantes o lanzamientos.

### B. Banners Promocionales (Formato Cuadrado 1:1 o Vertical 9:16)
*   **Diseño:** Marcos perimetrales delgados en **Sunbeam Yellow (`#FFEC01`)** de solo 2px para encuadrar la pieza.
*   **Composición:** La tipografía Anton ocupa el centro o el tercio superior de la imagen con un sombreado plano (flat shadow) en `#0636A5` para separarse del fondo.

---

## 🤖 5. Plantilla de Prompting Híbrido (Google Flow)

Para generar nuevos activos o banners consistentes utilizando el modelo **Nano Banana Pro**, usar la siguiente estructura de prompt:

> **[Sujeto/Acción]**: A high-end [horizontal 16:9 banner / vertical 9:16 poster] composition. The left half features a solid Egyptian Blue (#0636A5) color block.
> **[Contexto MDQ]**: The right half features a photorealistic action shot of a courier riding a motorcycle in Mar del Plata.
> **[Marca y Logo]**: The courier wears an Egyptian Blue (#0636A5) jacket. The circular logo is visible on the vehicle, referencing the logo image logo.png.
> **[Texto Verbatim]**: Render the text verbatim: "ENVÍOS DOSRUEDAS" using bold Anton font in Sunbeam Yellow (#FFEC01) on the left blue block.
> **[JSON Maestro]**: Please strictly follow this JSON:
> ```json
> {
>   "color_palette": "Egyptian Blue (#0636A5) for base and primary typography, Sunbeam Yellow (#FFEC01) strictly for highlights and text accents, Canvas White (#FFFFFF) for high contrast.",
>   "typography": "Anton for display headlines, Bebas Neue for secondary tags, Inter for descriptive body.",
>   "lighting": "Bright coastal daylight with clean, sharp shadows.",
>   "constraints": {
>     "must_keep": ["flat shadow styling", "strictly 3-color palette", "2px border borders for social assets"],
>     "avoid": ["pill-shaped buttons", "gradients on text", "unreadable fake background text"]
>   }
> }
> ```

---

## ❌ 6. Lo que se debe Evitar (Restricciones Críticas)

*   ❌ **No usar texto largo en Anton o Bebas Neue:** Provoca fatiga visual inmediata y arruina la estética corporativa.
*   ❌ **No colocar texto directamente sobre fondos fotográficos complejos:** Siempre usar un contenedor sólido, plasta de color, o difuminado intermedio para asegurar el contraste.
*   ❌ **No usar degradados complejos:** La marca se basa en colores planos y alto contraste industrial; los degradados suaves rompen la identidad de la marca.