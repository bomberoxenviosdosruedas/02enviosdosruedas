# Sistema de Diseño — Envíos DosRuedas (DESIGN.md)

Este documento define de manera estricta y detallada las especificaciones del sistema de diseño, los tokens visuales, las pautas estéticas y la arquitectura del proyecto **Envíos DosRuedas** (Logística de última milla y soluciones E-Commerce en Mar del Plata, año de referencia **2026**), evolucionado hacia un sistema de **Bento Grid UI** con acento **Neo-Brutalista Corporativo**.

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
> - Mapas interactivos de ruteo y geolocalización (LeafletRouteMap).

---

## 🍱 2. Arquitectura Estructural Bento Grid UI

El diseño visual del sitio se organiza mediante una estructura modular de Bento Cards que distribuye la información de manera limpia, jerárquica y altamente eficiente.

### Estructura de la Grilla (Grid Scheme)
Se utiliza una base responsiva de 12 columnas para ofrecer la máxima flexibilidad posible de composición tridimensional:
```html
<div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
  <!-- Bento Cards -->
</div>
```

### Reglas de Card Spanning (Celda Maestra y Celdas de Apoyo)
Las tarjetas deben dimensionarse según su relevancia y contenido dentro de la grilla de 12 columnas:

*   **Celdas Maestras (Hero, Mapas Interactivos o Cotizadores):** Ocupan un ancho de `col-span-12` o `md:col-span-8` con altura extendida (opcionalmente `row-span-2`).
*   **Celdas Medias (Estadísticas Clave, Accesos Rápidos):** Ocupan `md:col-span-6` o `md:col-span-4`.
*   **Celdas Secundarias (Tags, Clima, Avisos Rápidos):** Ocupan `md:col-span-3` o `md:col-span-4`.

### Aislamiento y Aire Visual
Para garantizar una experiencia premium, todas las Bento Cards deben respetar las siguientes directrices:
1.  **Esquinas Suaves:** Uso obligatorio de `rounded-2xl` (16px) o `rounded-3xl` (24px) para suavizar la estructura rígida de las tarjetas.
2.  **Aislamiento de Desborde:** Aplicar `overflow-hidden` obligatoriamente en tarjetas que contengan mapas, canvas interactivos o imágenes de fondo.
3.  **Padding Interno Estricto:** Margen de aire interno no inferior a `p-6` (24px) para pantallas medianas, escalando a `p-8` (32px) en pantallas grandes.

---

## ⚡ 3. Efectos Neo-Brutalistas y Premium de Refuerzo

Fucionamos la rigidez estructural con la fluidez del diseño web interactivo moderno:

### Efecto "Tarjeta Neo-Bento" (Bordes y Sombras)
Todas las celdas Bento interactivas deben combinar bordes sólidos de marca con sombras duras sin desenfoque:
*   **Estado Base:** `border-2 border-brand-blue shadow-[4px_4px_0px_#0636A5]`
*   **Estado Activo/Hover:** Para simular un hundimiento táctico real al pasar el mouse, se traslada la tarjeta y se reduce la sombra:
    `hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0636A5] transition-all duration-200`

### Resplandores (Glows Premium)
Para iluminar áreas clave en fondos oscuros sin romper la estética de Bento:
*   `glow-blue-bento`: Resplandor de acento azul (`box-shadow: 0 0 25px rgba(6, 54, 165, 0.25)`)
*   `glow-yellow-bento`: Resplandor de acento amarillo (`box-shadow: 0 0 25px rgba(255, 236, 1, 0.35)`)

### Degradados de Superficie
Para dar profundidad visual a las Bento Cards individuales:
*   `gradient-blue-bento`: De azul de marca `#0636A5` a un tono profundo `#172554`.
*   `gradient-yellow-bento`: De amarillo de marca `#FFEC01` a un ámbar suave `#F59E0B`.
*   `gradient-surface-bento`: Transición sutil clara de `#FFFFFF` a `#F8FAFC`.

---

## 🔤 4. Sistema Tipográfico Urbano

Imitando el impacto visual y la legibilidad inmediata de la señalización vial de Mar del Plata, la jerarquía de fuentes es estricta:

*   **Títulos Display (`font-display`):** **Anton** (Mayúsculas condensadas). Utilizada en títulos principales `h1` y `h2` de las cabeceras Bento.
*   **Subtítulos y Números Destacados (`font-subheading`):** **Bebas Neue**. Utilizada en badges, números clave, métricas viales e indicadores de tarifas.
*   **Cuerpo de Texto y Formularios (`font-sans`):** **Inter**. Tipografía limpia y neutral para descripciones y flujos interactivos.

### Utilidades CSS Definidas en [globals.css](file:///e:/proyectos/02enviosdosruedashector/src/app/globals.css)
*   `text-display`: Fuente **Anton**, tamaño fluido (`clamp(3rem, 5vw, 4.5rem)`), interlineado `1.1` y espaciado `0.02em`.
*   `text-h1`: Fuente **Anton**, clamp de `2.25rem` a `3rem`.
*   `text-h2`: Fuente **Anton**, clamp de `1.75rem` a `2.25rem`.
*   `text-h3`: Fuente **Bebas Neue**, clamp de `1.25rem` a `1.5rem`.

---

## 🗣️ 5. Pautas de Contenido y Tono de Voz

1.  **Voseo Rioplatense:** Hablamos siempre en español de Argentina utilizando el voseo nativo ("Vos elegís", "Cotizá tus pedidos", "Ingresá los datos"). Evitamos el tono impersonal o neutro.
2.  **Geolocalización Explícita:** Envíos DosRuedas opera exclusivamente en **Mar del Plata**. Los textos informativos, alertas y ejemplos de ruteo deben mencionar zonas reales de la ciudad ("Zona Güemes", "Constitución", "Chauvín", "Puerto") y nuestra central operativa en **Friuli 1972**.
3.  **Vigencia Operativa:** El año de vigencia para todas las tarifas, estimaciones y objetivos de crecimiento es **2026**.

---

## 📂 6. Arquitectura de Componentes Orientada a Bento

Para dar soporte a la grilla modular, los componentes bajo `src/components/` se dividen en mini-aplicaciones y widgets listos para encajar dentro del sistema Bento Grid:

```
src/
├── app/                  # Rutas y vistas de la aplicación (Next.js App Router)
└── components/
    ├── ui/               # Widgets y controles interactivos elementales
    │   ├── LeafletRouteMap.tsx      # Widget de mapa de ruteo modular
    │   ├── DistanceMap.tsx          # Bento Card para cálculo visual de distancias
    │   └── ...
    ├── layout/           # Componentes comunes de navegación y comunidad
    │   ├── OptimizedHeader.tsx      # Cabecera Bento-friendly con CTAs
    │   └── OptimizedFooter.tsx      # Pie de página estructurado
    ├── home/             # Bloques Bento modulares para la Landing Page
    │   ├── HeroAnimado.tsx          # Bento Card principal (Celda Maestra)
    │   ├── VisionSection.tsx        # Bento Grid de estadísticas y visión de flota
    │   ├── ServicesOverview.tsx     # Cuadrícula modular de accesos a servicios
    │   └── EmprendedoresHome.tsx    # Celda de beneficios corporativos
    └── cotizar/          # Widgets interactivos de cotización y despacho
```
