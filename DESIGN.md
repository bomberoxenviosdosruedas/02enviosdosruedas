# Sistema de Diseño — Envíos DosRuedas (DESIGN.md)

Este documento define las especificaciones del sistema de diseño, los tokens visuales y la arquitectura de componentes del proyecto **Envíos DosRuedas** (Logística de última milla y soluciones E-Commerce en Mar del Plata, año de referencia **2026**).

---

## 🎨 1. Paleta de Colores Estratégica (Tailwind v4 `@theme`)

Nuestra paleta de colores equilibra la confianza institucional y la velocidad vial urbana:

| Nombre de Token | Color Hex | Clases Tailwind | Rol en la Interfaz (Branding x Conversión) |
| :--- | :--- | :--- | :--- |
| **Azul Principal** | `#0636A5` | `bg-brand-blue` / `text-brand-blue` | **Dominancia (60%):** Estructura del sitio, confianza, seguridad y respaldo corporativo. |
| **Amarillo Acento** | `#FFEC01` | `bg-brand-yellow` / `text-brand-yellow` | **Acción e Impacto (30%):** Reservado para botones de conversión (CTAs), checkmarks, estados y acentos viales. |
| **Fondo Claro** | `#F8FAFC` | `bg-slate-50` / `bg-gray-50` | Fondo primario limpio que minimiza la carga cognitiva del usuario. |
| **Texto Principal** | `#0F172A` | `text-slate-900` / `text-gray-900` | Legibilidad y contraste óptimo en textos informativos. |
| **Fondo Oscuro** | `#0F172A` | `bg-slate-950` / `bg-slate-900` | Fondos de pie de página y secciones oscuras. |

---

## 🔤 2. Sistema Tipográfico

Utilizamos tipografías que transmiten la solidez e impacto de la señalización vial:

*   **Títulos de Gran Tamaño (`font-display`):** **Anton** (Mayúsculas condensadas). Utilizado en `h1`, `h2` principales de las páginas para dar impacto de señalética de tránsito.
*   **Subtítulos y Números Destacados (`font-subheading`):** **Bebas Neue**. Utilizado en badges, números clave, estadísticas rápidas e indicadores de tarifas.
*   **Cuerpo de Texto y Formularios (`font-sans`):** **Inter**. Tipografía altamente legible y neutral para explicaciones y flujos conversacionales.

### Utilidades Tipográficas en [globals.css](file:///e:/proyectos/02enviosdosruedashector/src/app/globals.css)
*   `text-display`: Fuente Anton con tamaño adaptativo en clamp (`clamp(3rem, 5vw, 4.5rem)`), interlineado `1.1` y tracking `0.02em`.
*   `text-h1`: Fuente Anton, clamp `2.25rem` a `3rem`.
*   `text-h2`: Fuente Anton, clamp `1.75rem` a `2.25rem`.
*   `text-h3`: Fuente Bebas Neue, clamp `1.25rem` a `1.5rem`.

---

## ✨ 3. Bordes, Sombras y Efectos (Glows & Glass)

Para lograr un diseño digital premium, combinamos esquinas suaves con resplandores de luz y desenfoques:

### Bordes y Esquinas
*   Tarjetas Principales y Contenedores: `rounded-2xl` (`16px`) / `rounded-3xl` (`24px`).
*   Botones e Inputs: `rounded-xl` (`12px`) / `rounded-md` (`8px`).

### Sombras e Iluminación (Glows)
*   **glow-blue / glow-blue-lg:** Resplandor de acento azul (`rgba(6, 54, 165, 0.3)`) para tarjetas del Home y secciones interactivas.
*   **glow-yellow / glow-yellow-lg:** Resplandor de acento amarillo (`rgba(255, 236, 1, 0.4)`) para CTAs principales y botones flotantes.
*   **shadow-accent-sm / md / lg:** Sombras optimizadas en color amarillo para elementos en movimiento o activos.
*   **glassmorphism:** Elemento con desenfoque de fondo `blur(12px)`, fondo azul translúcido `rgba(6, 54, 165, 0.5)` y borde sutil blanco.

---

## 🌊 4. Degradados (Gradients)

Disponemos de utilidades de degradados definidos como clases `@utility` en CSS:
*   `gradient-blue`: Degradado corporativo profundo de azul a azul oscuro.
*   `gradient-blue-light`: Fondo suave celeste-azul para secciones claras.
*   `gradient-yellow`: Transición de amarillo vibrante a ámbar.
*   `gradient-mixed`: Fusión de marca azul a amarillo.
*   `gradient-surface`: Fondo degradado claro.
*   `gradient-dark`: Fondo degradado oscuro para pies de página.

---

## 📂 5. Arquitectura de Componentes (`src/components/`)

Los componentes de la aplicación se estructuran de forma modular según su funcionalidad y contexto:

```
src/
├── app/                  # Rutas y páginas principales del sitio (Next.js App Router)
└── components/
    ├── ui/               # Widgets genéricos reutilizables
    │   ├── LeafletRouteMap.tsx      # Visualizador de mapas de ruteo
    │   ├── sheet.tsx                # Panel lateral de navegación/opciones
    │   └── ...
    ├── layout/           # Componentes estructurales de toda la web
    │   ├── OptimizedHeader.tsx      # Barra de navegación principal optimizada
    │   ├── OptimizedFooter.tsx      # Pie de página y contacto legal
    │   └── CarruselRedes.tsx        # Carrusel dinámico de redes sociales
    ├── home/             # Componentes exclusivos de la página de inicio (Landing Page)
    │   ├── HeroAnimado.tsx          # Panel táctico con canvas dinámico del mapa MDQ
    │   ├── VisionSection.tsx        # Sección de estadísticas de flota y visión
    │   ├── ServicesOverview.tsx     # Cuadrícula de acceso rápido a servicios
    │   ├── SliderServicios.tsx      # Carrusel interactivo de ventajas logísticas
    │   └── EmprendedoresHome.tsx    # Panel corporativo para PyMEs
    ├── servicios/        # Componentes específicos de cada flujo de servicio
    │   ├── express/                 # Features, tarifas e itinerarios Express
    │   ├── lowcost/                 # Ruteo diario optimizado y recolección programada
    │   └── flex/                    # Integración y SLAs MercadoLibre Flex
    ├── cotizar/          # Formularios y lógica de cotizadores automáticos
    │   ├── express/                 # Cotizador con mapa en tiempo real Express
    │   └── lowcost/                 # Cotizador de envíos masivos y ruteo diario
    ├── contacto/         # Vistas de consultas y formulario de contacto
    └── nosotros/         # Componentes sobre la empresa, FAQ y canales de soporte
```

---

## 🗣️ 6. Pautas de Contenido y Tono de Voz

Para asegurar la coherencia estética en cada rincón del sitio web, se deben aplicar las siguientes reglas:
1.  **Voseo Rioplatense:** Hablamos en español rioplatense (argentino) utilizando modismos locales ("Vos elegís", "Ingresá tus datos", "Cotizá", "Envianos tu consulta"). Evitamos terminologías neutras e impersonales como "Estimado cliente".
2.  **Geolocalización Local:** Envíos DosRuedas opera exclusivamente en **Mar del Plata**. Los textos informativos, ejemplos y mapas simulados deben mencionar zonas locales ("Zona Güemes", "Constitución", "Centro de Distribución", "Puerto", "Chauvín").
3.  **Vigencia Operativa:** El año de vigencia para tarifas, metas de crecimiento y campañas de marketing es **2026**.
