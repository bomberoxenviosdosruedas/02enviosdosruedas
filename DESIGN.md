# Sistema de Diseño — Envíos DosRuedas (DESIGN.md)

Este documento define de manera estricta y detallada las especificaciones del sistema de diseño, los tokens visuales, la estética y la arquitectura del proyecto **Envíos DosRuedas** (Logística de última milla y soluciones E-Commerce en Mar del Plata, año de referencia **2026**).

---

## 🎨 1. Paleta de Colores Estratégica (Tailwind CSS v4)

Nuestra paleta de colores equilibra la confianza institucional y la velocidad vial urbana. Está configurada en el tema del proyecto y no debe reemplazarse por colores hexadecimales genéricos en las clases de Tailwind:

| Token de Color | Valor Hex | Clase Tailwind | Rol en la Interfaz (Branding y Conversión) |
| :--- | :--- | :--- | :--- |
| **Egyptian Blue** (Azul Principal) | `#0636A5` | `bg-brand-blue` / `text-brand-blue` | **Dominancia (60%):** Estructura del sitio, contenedores, barras de navegación y textos de marca principales. |
| **Sunbeam Yellow** (Amarillo Acento) | `#FFEC01` | `bg-brand-yellow` / `text-brand-yellow` | **Acción e Impacto (30%):** Reservado para llamadas a la acción (CTAs), checkmarks, indicadores activos y acentos viales. |
| **Fondo Claro** | `#F8FAFC` | `bg-slate-50` / `bg-gray-50` | Fondo primario limpio en modo claro que maximiza la legibilidad. |
| **Texto Principal** | `#0F172A` | `text-slate-900` / `text-gray-900` | Contraste y legibilidad óptima para descripciones y cuerpo de texto. |
| **Fondo Oscuro** | `#0F172A` | `bg-slate-950` / `bg-slate-900` | Fondos de pie de página (Footer), modales oscuros y paneles tácticos. |

> [!IMPORTANT]
> Los colores hexadecimales `#0636A5` y `#FFEC01` solo deben ser utilizados de forma directa (hardcoded) en elementos especiales donde las clases de Tailwind no son aplicables, como:
> - Elementos gráficos nativos en Canvas (`CanvasRenderingContext2D`).
> - Atributos de dibujo en SVGs nativos (`fill`, `stroke`).
> - Configuraciones de trazado e íconos en mapas interactivos (`LeafletMap` / `LeafletRouteMap`).

---

## 🔤 2. Sistema Tipográfico

Para transmitir solidez y el impacto visual de la señalización urbana, la jerarquía tipográfica es estricta:

*   **Títulos de Gran Tamaño (`font-display`):** **Anton** (Mayúsculas condensadas). Utilizada en títulos principales `h1` y `h2` del sitio para dar impacto de señalética de tránsito.
*   **Subtítulos y Números Destacados (`font-subheading`):** **Bebas Neue**. Utilizada en badges, números clave, estadísticas y etiquetas de tarifas.
*   **Cuerpo de Texto y Formularios (`font-sans`):** **Inter**. Tipografía altamente legible y neutra para descripciones, inputs y flujos de cotización.

### Clases CSS de Utilidad en [globals.css](file:///e:/proyectos/02enviosdosruedashector/src/app/globals.css)
*   `text-display`: Fuente **Anton**, tamaño responsivo fluido (`clamp(3rem, 5vw, 4.5rem)`), interlineado `1.1` y espaciado `0.02em`.
*   `text-h1`: Fuente **Anton**, clamp de `2.25rem` a `3rem`.
*   `text-h2`: Fuente **Anton**, clamp de `1.75rem` a `2.25rem`.
*   `text-h3`: Fuente **Bebas Neue**, clamp de `1.25rem` a `1.5rem`.

---

## ⚡ 3. Estética Neo-Brutalista y Efectos Premium

Combinamos las formas suaves del diseño moderno con la fuerza estructural del Neo-Brutalismo Corporativo:

### Bordes y Formas
*   **Tarjetas y Contenedores:** `rounded-2xl` (`16px`) o `rounded-3xl` (`24px`).
*   **Botones y Controles de Formulario:** `rounded-xl` (`12px`) o `rounded-md` (`8px`).

### Sombras y Resplandores (Glows & Shadows)
*   **Neo-Brutalismo Corporativo:** Uso selectivo de bordes de marca definidos (`border-2 border-brand-blue`) y sombras duras sin desenfoque (`shadow-[4px_4px_0px_#0636A5]`).
*   **Glows Premium:**
    *   `glow-blue` y `glow-blue-lg`: Resplandor de acento azul (`rgba(6, 54, 165, 0.3)`) para tarjetas del Home y secciones interactivas.
    *   `glow-yellow` y `glow-yellow-lg`: Resplandor de acento amarillo (`rgba(255, 236, 1, 0.4)`) para CTAs principales.
*   **Sombras de Acento:** `shadow-accent-sm`, `shadow-accent-md`, `shadow-accent-lg` optimizadas para resaltar elementos interactivos activos.

### Glassmorphism
*   Estilo de desenfoque translúcido (`glassmorphism`): `backdrop-filter: blur(12px)`, fondo azul semi-transparente `rgba(6, 54, 165, 0.5)` y borde sutil blanco.

---

## 🌊 4. Degradados (Gradients)

Disponemos de clases `@utility` en CSS para degradados fluidos:
*   `gradient-blue`: Degradado corporativo profundo de azul a azul oscuro.
*   `gradient-blue-light`: Fondo suave celeste-azul para secciones claras.
*   `gradient-yellow`: Transición de amarillo vibrante a ámbar.
*   `gradient-mixed`: Fusión de marca azul a amarillo.
*   `gradient-surface`: Fondo degradado claro.
*   `gradient-dark`: Fondo degradado oscuro para pies de página.

---

## 🗣️ 5. Pautas de Contenido y Tono de Voz

Para asegurar consistencia en la comunicación:
1.  **Voseo Rioplatense:** Hablamos en español rioplatense (argentino) utilizando modismos locales ("Vos elegís", "Ingresá tus datos", "Cotizá", "Envianos tu consulta"). Evitamos terminologías neutras e impersonales.
2.  **Geolocalización Local:** Envíos DosRuedas opera exclusivamente en **Mar del Plata**. Los textos informativos, ejemplos y mapas simulados deben mencionar zonas locales ("Zona Güemes", "Constitución", "Centro de Distribución", "Puerto", "Chauvín").
3.  **Vigencia Operativa:** El año de vigencia para tarifas, metas de crecimiento y campañas de marketing es **2026**.

---

## 📂 6. Arquitectura de Componentes

La estructura modular bajo `src/components/` organiza los widgets e interfaces del sistema:

```
src/
├── app/                  # Rutas y páginas principales del sitio (Next.js App Router)
└── components/
    ├── ui/               # Widgets genéricos y mapas interactivos (Leaflet, Canvas, etc.)
    ├── layout/           # Componentes estructurales de navegación y contacto legal
    ├── home/             # Componentes exclusivos de la página de inicio (Landing Page)
    ├── servicios/        # Lógica, tarifas y vistas de Express, LowCost y Flex
    ├── cotizar/          # Formularios y lógica de cotizadores automáticos
    ├── contacto/         # Vistas de consultas y formulario de contacto
    └── nosotros/         # Información de la empresa, FAQ y soporte técnico
```

---

## 🔎 7. Resultados de la Auditoría del Proyecto

Tras realizar una auditoría automática y manual del código del proyecto en Julio de 2026:
- **Consistencia de Color:** Se confirmó que el uso de los colores hexadecimales `#0636A5` y `#FFEC01` está reservado exclusivamente para Canvas, SVGs y configuraciones de Leaflet. En las interfaces de usuario (HTML/React), se emplean los tokens `bg-brand-blue`, `text-brand-blue`, `bg-brand-yellow` y `text-brand-yellow` de Tailwind CSS v4.
- **Consistencia Temporal:** Todos los componentes, textos de ayuda y pies de página muestran correctamente el año de vigencia **2026**.
- **Consistencia de Tono:** Las alertas, diálogos informativos y llamadas a la acción utilizan el voseo argentino y hacen referencias correctas a la central de operaciones de **Friuli 1972** y a zonas clave de **Mar del Plata**.
