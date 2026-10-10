# Guía Definitiva y Estructura Maestra: DESIGN.md (Design System & UI Architecture)

Un archivo `DESIGN.md` es el **documento fundacional de diseño de producto** para cualquier proyecto de software o diseño de interfaces. Funciona como la única fuente de verdad (*Single Source of Truth*), alineando a diseñadores de UI/UX, ingenieros frontend, product managers y modelos de IA en la toma de decisiones estéticas, funcionales y de accesibilidad.

A continuación se presenta la **estructura profesional exhaustiva**, plantilla canónica y criterios de redacción para documentar cualquier proyecto.

---

## 1. Propósito y Filosofía del `DESIGN.md`

1. **Gobernanza de Diseño:** Evitar la fragmentación visual (*design drift*) a medida que el producto escala.
2. **Sincronización Código-Diseño:** Mapear directamente tokens de diseño (variables CSS, Tailwind, Figma tokens) con nomenclatura semántica unificada.
3. **Escalabilidad y Mantenibilidad:** Facilitar el onboarding inmediato de nuevos desarrolladores o diseñadores.
4. **Accesibilidad Integrada:** Fijar contratos mínimos de contraste (WCAG 2.1 AA/AAA), navegación por teclado y semántica HTML.

---

## 2. Plantilla Canónica Completa (`DESIGN.md`)

```markdown
# [Nombre del Proyecto] — Design System & UI Architecture Spec

> **Versión:** 1.0.0  
> **Última actualización:** [YYYY-MM-DD]  
> **Estado:** Activo / En Producción  
> **Ámbito:** Web / Mobile / Multiplataforma  

---

## 1. Identidad de Marca y Principios de Diseño

### 1.1. Filosofía y Personalidad
Definición de 3 a 5 adjetivos rectores que guían cualquier decisión de diseño (e.g., *Rápido, Robusto, Transparente, Energético*).
- **Principio 1 (e.g., Claridad Inmediata):** La información operativa clave (precios, estados, métricas) debe entenderse en menos de 3 segundos sin ambigüedad.
- **Principio 2 (e.g., Jerarquía Funcional):** La ornamentación visual nunca debe competir con las acciones principales (CTAs).
- **Principio 3 (e.g., Resiliencia y Rendimiento):** Carga ultrarrápida, fuentes web optimizadas y estados interactivos táctiles y fluidos.

### 1.2. Voz y Tono (Microcopy)
- **Tono:** Profesional, directo, sin rodeos, confiable y empático.
- **Formato numérico y moneda:** Especificar separadores decimales/miles (e.g., `$3.000` con punto para miles en AR/ES o coma según locale).
- **Formatos de fecha y hora:** (e.g., formato 24h `13:00 hs`).

---

## 2. Sistema de Color (Color Tokens)

La arquitectura de color se divide en tres niveles:
1. **Primitivos:** Colores brutos con escalas numéricas (50-900).
2. **Semánticos:** Asignación contextual (background, surface, text, border, interactive).
3. **Roles de Componente:** Variantes específicas.

### 2.1. Paleta Primitiva (Base Palette)
| Token Primitivo | Hex | HSL / RGB | Uso Previsto |
| :--- | :--- | :--- | :--- |
| `palette.blue.500` | `#0950F6` | `rgb(9, 80, 246)` | Azul eléctrico primario |
| `palette.blue.600` | `#003CC1` | `rgb(0, 60, 193)` | Estado hover / interactivo |
| `palette.blue.950` | `#04153F` | `rgb(4, 21, 63)` | Fondo oscuro / texto de alto contraste |
| `palette.yellow.500`| `#FFEC01` | `rgb(255, 236, 1)` | Amarillo acento de alta visibilidad |
| `palette.neutral.50`| `#F8FAFC` | `rgb(248, 250, 252)`| Fondos de sección |
| `palette.neutral.900`| `#0F172A`| `rgb(15, 23, 42)` | Texto primario sobre fondos claros |

### 2.2. Colores Semánticos (Theme Semantic Tokens)
| Token Semántico | Mapeo Primitivo | Rol / Aplicación |
| :--- | :--- | :--- |
| `--color-bg-canvas` | `neutral.50` / `white` | Fondo global de la aplicación |
| `--color-bg-surface` | `white` | Contenedores, tarjetas elevadas |
| `--color-bg-surface-elevated`| `palette.blue.950` | Contenedores invertidos o hero |
| `--color-brand-primary` | `palette.blue.500` | Color primario de marca |
| `--color-brand-accent` | `palette.yellow.500`| Puntos de atención, ofertas, badges destacados |
| `--color-text-main` | `neutral.900` | Títulos y párrafos de alta legibilidad |
| `--color-text-muted` | `neutral.500` | Metadatos, subtítulos y notas al pie |
| `--color-text-inverse` | `white` | Texto sobre fondos oscuros o primarios |
| `--color-status-success` | `#10B981` | Confirmación, entregado, activo |
| `--color-status-warning` | `#F59E0B` | Advertencia, atención requerida |
| `--color-status-danger` | `#EF4444` | Error, corte superado, cancelación |

### 2.3. Ratios de Contraste y Accesibilidad (WCAG)
- Todo texto estándar sobre fondos de color debe superar **4.5:1**.
- Texto grande (>24px o >18.5px negrita) debe superar **3:1**.
- Se prohíbe el uso de texto blanco sobre amarillo `#FFEC01` (usar siempre texto negro/marino `#04153F` para garantizar ratio > 12:1).

---

## 3. Tipografía (Typography System)

### 3.1. Familias Tipográficas (Font Stacks)
- **Display / Titulares:** e.g., `Anton` o `Bebas Neue` (condensadas, mayúsculas, gran peso de impacto).
- **Cuerpo / Interfaz (UI):** e.g., `Outfit` o `Inter` (geométrica, legible en tamaños pequeños de 12px a 16px).
- **Monoespaciada / Datos:** e.g., `Geist Mono` o `JetBrains Mono` (precios, códigos de seguimiento, coordenadas, métricas).

### 3.2. Escala Tipográfica Modular (Type Scale)
| Nivel | Tamaño (px / rem) | Line Height | Letter Spacing | Font Family | Peso | Uso |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 2XL** | `64px / 4rem` | `1.05` | `-0.02em` | Display | 700 / Bold | Héroes principales |
| **Display XL** | `48px / 3rem` | `1.1` | `-0.01em` | Display | 700 / Bold | Encabezados de sección (H1) |
| **Heading LG** | `32px / 2rem` | `1.2` | `0` | Display | 600 / Semi | Títulos de tarjeta (H2) |
| **Heading MD** | `24px / 1.5rem` | `1.25` | `0` | UI Sans | 600 / Semi | Subtítulos de módulo (H3) |
| **Body LG** | `18px / 1.125rem` | `1.5` | `0` | UI Sans | 400 / Regular| Bajadas y entradillas |
| **Body MD** | `15px / 0.9375rem`| `1.5` | `0` | UI Sans | 400 / Regular| Texto de lectura principal |
| **Body SM** | `13px / 0.8125rem`| `1.4` | `+0.01em` | UI Sans | 400 / Regular| Listas de condiciones, labels |
| **Caption / Tag**| `11px / 0.6875rem`| `1.3` | `+0.05em` | UI Sans / Mono | 700 / Bold | Badges, pills, sobretítulos (uppercase) |
| **Data Metric** | `44px / 2.75rem` | `1.0` | `-0.03em` | Mono | 700 / Bold | Importes monetarios, cifras clave |

---

## 4. Espaciado, Grillas y Layout (Spatial System)

### 4.1. Escala de Espaciado (Base 4px / 8px Grid)
Todos los márgenes, paddings y distancias deben ser múltiplos de 4 u 8:
- `space-1`: `4px` (Micro-separaciones, padding de badges)
- `space-2`: `8px` (Gaps entre iconos y textos)
- `space-3`: `12px` (Paddings compactos de botones)
- `space-4`: `16px` (Paddings estándar de inputs)
- `space-6`: `24px` (Padding interno de tarjetas)
- `space-8`: `32px` (Gaps entre tarjetas en grilla)
- `space-12`: `48px` (Márgenes entre bloques secundarios)
- `space-16`: `64px` (Padding vertical de secciones medianas)
- `space-24`: `96px` (Padding vertical de hero / grandes secciones)

### 4.2. Puntos de Quiebre (Breakpoints)
- **Mobile (`sm`):** `360px` – `640px` (Layout de 1 columna, full width en tarjetas, 16px gutter lateral).
- **Tablet (`md`):** `641px` – `1024px` (Layout de 2 columnas, 24px gutter lateral).
- **Desktop (`lg`):** `1025px` – `1280px` (Layout de 3 o 4 columnas, max-width contenedor `1200px`).
- **Wide (`xl`):** `> 1280px` (Contenedor centrado max-width `1280px` o `1440px`).

### 4.3. Radios de Borde (Border Radius)
- `radius-sm`: `6px` (Badges pequeños, tags de datos)
- `radius-md`: `12px` (Botones estándar, inputs, selects)
- `radius-lg`: `20px` (Tarjetas de contenido estándar)
- `radius-xl`: `28px` (Tarjetas destacadas, modales, banners flotantes)
- `radius-full`: `9999px` (Píldoras, avatars, botones circulares)

### 4.4. Sombras y Profundidad (Elevation / Shadows)
- `elevation-1 (Plana/Sutil):` `0 1px 3px rgba(0,0,0,0.06)` — Separación mínima.
- `elevation-2 (Tarjeta):` `0 8px 24px -4px rgba(0,0,0,0.08)` — Tarjetas en reposo.
- `elevation-3 (Flotante/Hover):` `0 20px 40px -8px rgba(0,0,0,0.15)` — Hover y tarjetas destacadas.
- `elevation-focus-glow:` `0 0 0 4px rgba(255, 236, 1, 0.45)` — Anillos de foco y destacados.

---

## 5. Biblioteca de Componentes Core (Component Spec)

Para cada componente se documentan: estados, variantes y comportamiento.

### 5.1. Botones (Buttons & CTAs)
- **Variante Primaria (Solid Brand):** Fondo `--color-brand-primary`, texto blanco, radio full o md.
- **Variante High-Visibility (Acento):** Fondo `--color-brand-accent`, texto marino `--color-bg-surface-elevated`, sombra intensa.
- **Variante Outline / Ghost:** Borde 1.5px, fondo transparente, texto de color de marca.
- **Estados obligatorios:**
  - *Default:* Escala 1.0.
  - *Hover:* Oscurecimiento del 10% del fondo, translación vertical `-1px` o `scale(1.02)`.
  - *Active:* `scale(0.98)` feedback táctil inmediato.
  - *Focus-visible:* Anillo exterior de 3px de alto contraste.
  - *Disabled:* Opacidad 40%, cursor `not-allowed`.

### 5.2. Tarjetas de Precios / Producto (Pricing & Feature Cards)
- Estructura atómica:
  1. Header (Identificador de categoría + Badge opcional superior).
  2. Zona de Valor (Precio grande con soporte monoespaciado y periodicidad).
  3. Descripción breve (máximo 2 líneas de texto auxiliar).
  4. Lista de características (Iconos de verificación SVG inline alineados al centro/arriba).
  5. CTA de conversión anclado al pie de la tarjeta.
- Variante Destacada: Marco resaltado (Ring o borde de acento), elevación superior o inversión de color.

### 5.3. Badges, Chips & Status Pills
- Formato píldora con padding horizontal simétrico (`px-3 py-1`).
- Indicador dot pulsante opcional (`w-2 h-2 rounded-full animate-pulse`).
- Tipografía en mayúsculas (`uppercase tracking-wider`) en tamaño 11px a 12px.

### 5.4. Formularios e Inputs
- Altura táctil mínima recomendada para móviles: `44px` a `48px`.
- Mensajes de error bajo el campo vinculados mediante `aria-describedby`.

---

## 6. Animación e Interacciones (Motion & Micro-interactions)

### 6.1. Curvas de Aceleración (Timing Functions)
- **Entrada / Salida Estándar:** `cubic-bezier(0.16, 1, 0.3, 1)` (efecto muelle natural / iOS spring feel).
- **Transición Rápida UI:** `ease-out` para hovers de botones (150ms – 200ms).
- **Despliegues / Modales:** 250ms – 300ms.

### 6.2. Reglas de Movimiento
- Todo movimiento debe ser funcional (indicar feedback o cambio de estado), nunca puramente decorativo si ralentiza la interacción.
- Respetar siempre `prefers-reduced-motion: reduce` desactivando transiciones complejas o auto-reproducción.

---

## 7. Directrices de Accesibilidad (A11y Checklist)

- [ ] **Sintaxis Semántica:** Empleo riguroso de `<main>`, `<header>`, `<footer>`, `<section>`, `<nav>`, `<h1>`-`<h6>`.
- [ ] **Navegación por Teclado:** Orden lógico de tabulación (`tabindex="0"` sin saltos arbitrarios); outline visible con `:focus-visible`.
- [ ] **Elementos Interactivos:** Botones con `<button>` o enlaces con `<a>`; no utilizar `<div>` clicables sin rol ni handler de teclado.
- [ ] **Contraste de Color:** Ratios validados según WCAG 2.1 AA.
- [ ] **Etiquetado para Lectores de Pantalla:** Atributos `aria-label` en botones con sólo iconos y `alt` descriptivo en imágenes con valor informativo.

---

## 8. Guía de Implementación en Código (Code Mapping)

### 8.1. Tokens en Variables CSS (`tokens.css`)
```css
:root {
  /* Colors */
  --color-primary: #0950F6;
  --color-primary-hover: #003CC1;
  --color-accent: #FFEC01;
  --color-dark: #04153F;
  --color-surface: #FFFFFF;

  /* Typography */
  --font-display: 'Anton', -apple-system, sans-serif;
  --font-body: 'Outfit', sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* Spacing */
  --space-unit: 8px;
  --radius-card: 24px;
  --radius-btn: 9999px;

  /* Shadows */
  --shadow-card: 0 10px 30px -5px rgba(9, 80, 246, 0.08);
}
```

### 8.2. Mapeo en Tailwind CSS (`tailwind.config.js`)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            500: '#0950F6',
            600: '#003cc1',
            950: '#04153f',
          },
          yellow: {
            400: '#facc15',
            500: '#FFEC01',
          }
        }
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      borderRadius: {
        'card': '1.5rem',
      }
    }
  }
}
```
```

---

## 3. Criterios Clave para Adaptar este Documento a Cualquier Proyecto

1. **Si el proyecto es B2B / SaaS Empresarial:**
   - La escala de color se enfoca en tonos neutros fríos (Slate/Zinc), un acento corporativo contenido, densidad de información mayor (tablas, tags compactos) y tipografías neutras (`Inter`, `Geist`).
2. **Si el proyecto es Consumer / E-Commerce / Fintech:**
   - Mayor protagonismo visual, contrastes audaces, badges de urgencia/beneficio, tipografía display expresiva y componentes de checkout claros.
3. **Si es Mobile-First:**
   - Priorizar alturas táctiles mínimas (48x48px), layout de navegación inferior (*bottom bars*) y menús deslizantes (*sheets/drawers*).
4. **Mantenimiento vivo:**
   - Todo cambio o adición en el diseño debe registrarse en el `DESIGN.md` con su fecha y justificación de producto.
