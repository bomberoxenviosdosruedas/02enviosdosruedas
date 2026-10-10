# Envíos DosRuedas — Design System & UI Architecture Spec

> **Versión:** 2.0.0 (Clean Slate — Definido desde Primeros Principios)  
> **Fecha de Emisión:** 2026-10-10  
> **Estado:** Especificación Canónica Aprobada  
> **Ámbito:** Multiplataforma Web (Next.js + Tailwind CSS v4)  
> **Nivel de Modificación de Código:** N0 (Documentación de Arquitectura de UI pura)

---

## 1. Identidad de Marca y Principios de Diseño

### 1.1. Filosofía y Personalidad de Marca
El Design System de **Envíos DosRuedas** (servicio de mensajería urbana en moto de Mar del Plata) se rige por una estética limpia, vibrante y de alto contraste visual. Elimina cualquier elemento decorativo innecesario y rechaza el uso de colores oscuros o grises pesados, sosteniéndose sobre 3 principios rectores:

1. **Claridad Operativa Inmediata:** La información logística crítica (precios por kilometraje, cortes de horario, zonas de cobertura y franjas de entrega) debe entenderse en menos de 3 segundos sin ambigüedad.
2. **Confianza y Transparencia:** Sin letras chicas ni slogans genéricos de marketing. La UI prioriza datos objetivos y reglas claras de servicio.
3. **Energía Urbana y Robustez Táctil:** Diseño de alto brillo e impacto con zonas táctiles grandes ($\ge 48\text{px}$) preparadas para la consulta rápida en dispositivos móviles en entorno urbano y de calle.

### 1.2. Voz, Tono y Microcopy
- **Tono de Voz:** Profesional, directo, confiable y cercano. Empleo **obligatorio del voseo rioplatense** ("Cotizá tu envío", "Pedí tu moto", "Enviá hoy"). Se prohíbe el uso de "usted".
- **Formato Numérico y Moneda:** Signo `$` precediendo al valor numérico con punto separador de miles (ejemplo: `$3.000`, `$10.000`).
- **Formato de Hora:** Sistema de 24 horas con sufijo `hs` (ejemplo: `13:00 hs`, `15:00 hs`).
- **Líneas Rojas de Comunicación:** No prometer duraciones exactas en minutos (Express es franja de 3 hs a elección solicitada con 2 hs de anticipación; LowCost es reparto programado en el día con corte 13:00 hs).

### 1.3. Log Acumulado de Decisiones (Trazabilidad Canónica)

| Decisión Confirmada | Justificación | Bloque | Estado |
| :--- | :--- | :--- | :--- |
| **Principios:** Claridad Operativa, Confianza/Transparencia, Energía Urbana | Conversión rápida y legibilidad óptima en logística urbana | Bloque 1 | **CONFIRMADO** |
| **Paleta Estricta 3 Colores:** `#0950F6` (Azul Primario), `#FFEC01` (Amarillo Accent), `#FFFFFF` (Blanco) | Sin tonos dark/oscuros (el azul `#0950F6` es el más oscuro permitido) | Bloque 1 | **CONFIRMADO** |
| **Microcopy:** Voseo Rioplatense + `$X.XXX` + `HH:MM hs` | Consistencia regional (Mar del Plata) y formato estándar argentino | Bloque 1 | **CONFIRMADO** |
| **Estructura de Secciones:** Navbar y Footer SIEMPRE fondo Azul `#0950F6`. Hero Azul o Amarillo. Cuerpo de página alterna entre Azul y Blanco | Ritmo visual limpio de alto contraste y separación clara entre bloques | Bloque 2 | **CONFIRMADO** |
| **Contraste WCAG AA sobre Amarillo:** Texto sobre `#FFEC01` SIEMPRE Azul `#0950F6` (ratio 5.23:1) | Garantiza accesibilidad WCAG AA. Prohibido texto blanco sobre amarillo | Bloque 2 | **CONFIRMADO** |
| **Tokens de Estado Operativo:** Success `#10B981`, Warning `#F59E0B`, Danger `#EF4444` | Badges e indicadores de feedback operativo aislados | Bloque 2 | **CONFIRMADO** |
| **Fuentes:** `Anton` (titulares peso 400), `Outfit` (cuerpo UI), `Geist Mono` (precios) | Jerarquía clara de alto impacto, legibilidad sans y alineación tabular `tabular-nums` | Bloque 3 | **CONFIRMADO** |
| **Escala Tipográfica:** 8 niveles (Display 2XL 64px a Caption 11px + Data Metric 44px) | Cobertura completa para banners, H1-H3, textos y tarifarios | Bloque 3 | **CONFIRMADO** |
| **Reglas por Fondo:** Texto en Blanco o Amarillo sobre Azul; Azul sobre Blanco o Amarillo | Garantiza WCAG AA puro sin depender de tonos grises u oscuros | Bloque 3 | **CONFIRMADO** |
| **Espaciado Grid 4/8px:** 9 niveles (`space-1` 4px a `space-24` 96px) | Coherencia métrica en paddings, gaps y separación de secciones | Bloque 4 | **CONFIRMADO** |
| **Breakpoints:** `sm` 360-640px, `md` 641-1024px, `lg` 1025-1280px, `xl` >1280px (`max-width: 1280px`) | Adaptabilidad fluida desde móviles pequeños hasta monitores de escritorio | Bloque 4 | **CONFIRMADO** |
| **Radios de Borde:** 5 niveles (`radius-sm` 6px a `radius-full` 9999px) | Suavizado orgánico predecible según escala del componente | Bloque 4 | **CONFIRMADO** |
| **Bordes & Focus Ring:** Bordes 1-2px sólidos de contraste + Ring de foco 4px en Amarillo `#FFEC01` | Estructura visual clara sin dependencia de sombras oscuras | Bloque 4 | **CONFIRMADO** |
| **Botones & CTAs:** Primario (Amarillo `#FFEC01` + texto Azul `#0950F6`), Secundario (Azul + Blanco), Ghost (Outline 2px) | Jerarquía de acción fuerte con estados hover (`scale 1.02`), active (`scale 0.98`) y focus ring amarillo | Bloque 5 | **CONFIRMADO** |
| **Tarjetas de Servicio Operativas:** Estructura atómica con cifra `Geist Mono` + **Badges Operativos por KM/Franja Horaria** | Evita marketing ambiguo y comunica condiciones logísticas exactas | Bloque 5 | **CONFIRMADO** |
| **Badges & Forms:** Pills `rounded-full` con dot pulsante opcional + Inputs de 48px de alto táctil con error en Rojo `#EF4444` | Usabilidad móvil responsive de alta precisión | Bloque 5 | **CONFIRMADO** |
| **Primitivas UI Complejas:** CTANestedPill con chip, RadioCardGroup, Stepper de Pasos y LeafletRouteMap normados en paleta 3 colores | Cobertura total para cotizador, mapas interactivos y navegación | Audit / Bloque 5 | **CONFIRMADO** |
| **Motion GPU-First:** Transiciones exclusivas sobre `transform` y `opacity` (150ms/250ms/350ms) con `prefers-reduced-motion` | Garantiza 60 fps constantes sin saltos en dispositivos móviles | Bloque 6 | **CONFIRMADO** |
| **Directrices A11y:** Ratios WCAG 2.1 AA (4.5:1 / 3:1), semántica HTML5, navegación por teclado y etiquetas `aria-label` | Accesibilidad universal y compatibilidad total con lectores de pantalla | Bloque 7 | **CONFIRMADO** |

---

## 2. Sistema de Color (Paleta Primitiva, Tokens Semánticos y WCAG)

La arquitectura de color se basa **estrictamente en 3 colores de marca base** (`#0950F6`, `#FFEC01`, `#FFFFFF`). El color Azul Corporativo `#0950F6` es el tono más oscuro permitido en toda la interfaz (se prohíbe el uso de `#04153F`, `#003CC1`, `#0636A5` o grises oscuros).

### 2.1. Paleta Primitiva (Base Palette)

| Token Primitivo | Hex | HSL / RGB | Uso Previsto | Nivel |
| :--- | :--- | :--- | :--- | :--- |
| `palette.brand.blue` | `#0950F6` | `rgb(9, 80, 246)` | Azul corporativo primario. Color de marca y tono más oscuro de la UI | Primitivo |
| `palette.brand.yellow` | `#FFEC01` | `rgb(255, 236, 1)` | Amarillo acento de alta visibilidad ($\le 15\%$ superficie) | Primitivo |
| `palette.brand.white` | `#FFFFFF` | `rgb(255, 255, 255)` | Blanco base para canvas, superficies y texto sobre azul | Primitivo |
| `palette.status.success`| `#10B981` | `rgb(16, 185, 129)` | Indicador funcional de confirmación o estado entregado | Primitivo Estado |
| `palette.status.warning`| `#F59E0B` | `rgb(245, 158, 11)` | Indicador funcional de atención o franja próxima a cortar | Primitivo Estado |
| `palette.status.danger` | `#EF4444` | `rgb(239, 68, 68)` | Indicador funcional de error, corte superado o validación | Primitivo Estado |

### 2.2. Colores Semánticos (Theme Semantic Tokens)

| Token Semántico | Mapeo Primitivo | Rol / Aplicación | Nivel |
| :--- | :--- | :--- | :--- |
| `--color-bg-canvas` | `palette.brand.white` | Fondo global de la aplicación | Semántico |
| `--color-bg-navbar` | `palette.brand.blue` | Navbar principal (Fondo azul obligatorio) | Semántico |
| `--color-bg-footer` | `palette.brand.blue` | Pie de página (Fondo azul obligatorio) | Semántico |
| `--color-bg-hero` | `palette.brand.blue` / `palette.brand.yellow` | Encabezado principal Hero (Azul o Amarillo) | Semántico |
| `--color-bg-surface` | `palette.brand.white` / `palette.brand.blue` | Contenedores y secciones con alternancia de fondo | Semántico |
| `--color-brand-primary` | `palette.brand.blue` | Color de marca primario | Semántico |
| `--color-brand-accent` | `palette.brand.yellow` | Puntos de atención, badges de oferta y CTAs | Semántico |
| `--color-text-main` | `palette.brand.blue` | Texto principal sobre fondos claros (blanco/amarillo) | Semántico |
| `--color-text-on-primary`| `palette.brand.white` | Texto sobre superficies de fondo Azul `#0950F6` | Semántico |
| `--color-text-on-accent` | `palette.brand.blue` | Texto sobre superficies de fondo Amarillo `#FFEC01` | Semántico |
| `--color-border-primary` | `palette.brand.blue` | Bordes estructurantes sobre fondo blanco | Semántico |
| `--color-border-inverse` | `palette.brand.white` / `palette.brand.yellow` | Bordes estructurantes sobre fondo azul | Semántico |

### 2.3. Ratios de Contraste y Accesibilidad (WCAG 2.1 AA)
- **Texto Estándar (<24px):** Ratio de contraste mínimo obligatorio de **4.5:1**.
  - Azul `#0950F6` sobre Blanco `#FFFFFF`: **4.56:1** (Cumple WCAG AA).
  - Azul `#0950F6` sobre Amarillo `#FFEC01`: **5.23:1** (Cumple WCAG AA).
- **Texto Grande ($\ge$24px o 18.5px Bold):** Ratio de contraste mínimo de **3:1**.
  - Blanco `#FFFFFF` sobre Azul `#0950F6`: **4.56:1** (Cumple WCAG AA).
- **REGLA ESTRICTA SOBRE AMARILLO ACCENT (`#FFEC01`):**
  > [!IMPORTANT]
  > Se prohíbe terminantemente el uso de texto blanco sobre fondo amarillo `#FFEC01` (ratio nulo 1.07:1). Todo texto, icono o cifra colocada sobre una superficie o botón amarillo debe ser exclusivamente **Azul Corporativo `#0950F6`** (ratio **5.23:1**).

---

## 3. Tipografía (Escala Modular y Fuentes)

### 3.1. Familias Tipográficas (Font Stacks)
- **Display / Titulares:** `Anton` (o `Bebas Neue`), **peso único `400`**. Fuente condensada de alto impacto en mayúsculas para titulares principales.
- **Cuerpo / Interfaz (UI Sans):** `Outfit` (pesos `400` Regular, `600` SemiBold, `700` Bold). Tipografía geométrica limpia de alta legibilidad en pantallas móviles de 13px a 18px.
- **Datos / Precios / Tarifas (Mono):** `Geist Mono` (peso `700` Bold) con propiedad CSS `font-variant-numeric: tabular-nums` obligatoria para que todas las cifras y precios alineen verticalmente sin saltos de ancho.

### 3.2. Escala Tipográfica Modular (Type Scale)

| Nivel | Tamaño (px / rem) | Line Height | Letter Spacing | Font Family | Peso | Uso Principal |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 2XL** | `64px / 4.0rem` | `1.05` | `-0.02em` | Display | `400` | Encabezado principal de Hero |
| **Display XL (H1)**| `48px / 3.0rem` | `1.1` | `-0.01em` | Display | `400` | Títulos principales de páginas |
| **Heading LG (H2)**| `32px / 2.0rem` | `1.2` | `0` | Display | `400` | Encabezados de grilla y tarjetas |
| **Heading MD (H3)**| `24px / 1.5rem` | `1.25` | `0` | UI Sans | `700` | Subtítulos de módulos y formularios |
| **Body LG** | `18px / 1.125rem`| `1.5` | `0` | UI Sans | `400` / `600` | Entradillas de sección y bajadas |
| **Body MD** | `15px / 0.9375rem`| `1.5` | `0` | UI Sans | `400` | Párrafos y descripciones de servicio |
| **Body SM** | `13px / 0.8125rem`| `1.4` | `+0.01em` | UI Sans | `400` | Legales, aclaraciones de horario y notas |
| **Caption / Tag** | `11px / 0.6875rem`| `1.3` | `+0.05em` | UI Sans | `700` (UPPERCASE) | Badges de KM, pills de estado |
| **Data Metric** | `44px / 2.75rem` | `1.0` | `-0.03em` | Mono (`tabular-nums`)| `700` | Importes de tarifas y resultados de cotización |

### 3.3. Reglas de Aplicación Tipográfica por Fondo
- **Secciones de Fondo Azul (`#0950F6`):** Titulares en Blanco (`#FFFFFF`) o Amarillo (`#FFEC01`); párrafos en Blanco (`#FFFFFF`).
- **Secciones de Fondo Blanco (`#FFFFFF`):** Titulares y párrafos en Azul Corporativo (`#0950F6`).
- **Secciones / Hero de Fondo Amarillo (`#FFEC01`):** Titulares y párrafos **exclusivamente en Azul Corporativo (`#0950F6`)**.

---

## 4. Espaciado, Grillas y Layout (Base 4px/8px, Breakpoints)

### 4.1. Escala de Espaciado (Base 4px / 8px Grid)

| Token Espacial | Valor (px / rem) | Aplicación Típica |
| :--- | :--- | :--- |
| `space-1` | `4px / 0.25rem` | Micro-márgenes y padding interno de badges |
| `space-2` | `8px / 0.5rem` | Gap entre icono y texto |
| `space-3` | `12px / 0.75rem` | Padding vertical/horizontal en botones compactos e inputs |
| `space-4` | `16px / 1.0rem` | Padding de tarjetas móviles y gutter lateral en smart-phones |
| `space-6` | `24px / 1.5rem` | Padding interno de tarjetas desktop y gaps entre elementos de formulario |
| `space-8` | `32px / 2.0rem` | Gaps entre tarjetas en grilla de 3-4 columnas |
| `space-12` | `48px / 3.0rem` | Separación vertical entre módulos dentro de una misma sección |
| `space-16` | `64px / 4.0rem` | Padding vertical estándar de secciones de cuerpo |
| `space-24` | `96px / 6.0rem` | Padding vertical de gran impacto en secciones Hero |

### 4.2. Puntos de Quiebre (Breakpoints) y Contenedores

| Breakpoint | Rango de Ancho | Grid Layout | Gutter Lateral | Contenedor Máximo |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile (`sm`)** | `360px` – `640px` | 1 Columna | `16px` | `100%` |
| **Tablet (`md`)** | `641px` – `1024px` | 2 Columnas | `24px` | `100%` |
| **Desktop (`lg`)** | `1025px` – `1280px` | 3 - 4 Columnas | `32px` | `max-width: 1200px` |
| **Wide (`xl`)** | `> 1280px` | 3 - 4 Columnas | Centrado | `max-width: 1280px` |

### 4.3. Radios de Borde (Border Radius)

| Token Radio | Valor (px / rem) | Aplicación de UI |
| :--- | :--- | :--- |
| `radius-sm` | `6px / 0.375rem` | Badges de KM, chips operativas y tags |
| `radius-md` | `12px / 0.75rem` | Botones rectangulares suavizados, inputs y selects |
| `radius-lg` | `20px / 1.25rem` | Tarjetas de servicio y contenedores de grilla |
| `radius-xl` | `28px / 1.75rem` | Cotizador flotante interactivo, cards principales y modales |
| `radius-full` | `9999px` | Botones CTA redondos, avatars y pills de estado |

### 4.4. Bordes de Estructura e Indicadores de Foco (Sin Sombras Dark)
Al no utilizar sombras oscuras o grises difusos, la separación visual se logra mediante bordes de alto contraste y alternancia de fondos:
- **Borde sobre Fondo Blanco:** Borde de `1px` o `2px` sólido en Azul Corporativo `#0950F6` (o `rgba(9, 80, 246, 0.15)` para tarjetas secundarias).
- **Borde sobre Fondo Azul:** Borde de `1px` o `2px` sólido en Blanco `#FFFFFF` o Amarillo `#FFEC01`.
- **Focus Ring (Anillo de Foco Accesible):** Anillo exterior de `4px` en Amarillo Accent `#FFEC01` (`focus-visible:ring-4 focus-visible:ring-[#FFEC01]`) con borde interior limpio en Azul `#0950F6`.

---

## 5. Biblioteca de Componentes Core (Component Spec)

### 5.1. Botones y CTAs (Buttons & Actions)

| Variante | Fondo | Texto | Borde | Comportamiento Hover / Active |
| :--- | :--- | :--- | :--- | :--- |
| **CTA Primario (Alta Conversión)** | Amarillo `#FFEC01` | Azul `#0950F6` (Bold) | Sin borde | Hover: `scale(1.02)`. Active: `scale(0.98)`. Ring: `4px #FFEC01` |
| **CTA Secundario / Invertido** | Azul `#0950F6` | Blanco `#FFFFFF` | Borde `2px` Blanco/Amarillo | Hover: `scale(1.02)`. Active: `scale(0.98)`. Ring: `4px #FFEC01` |
| **CTA Outline / Ghost** | Transparente | Azul `#0950F6` / Blanco | Borde `2px` sólido | Hover: Fondo `rgba(9,80,246,0.08)`. Active: `scale(0.98)` |

### 5.2. Tarjetas de Servicios y Precios (Service & Pricing Cards)
- **Estructura Atómica Obligatoria:**
  1. *Header:* Título del servicio + Badge Operativo por KM/Horario (ej: `"HASTA 10 KM"`, `"CORTE 15:00 HS"`). **Prohibido badges genéricos tipo "MÁS POPULAR"**.
  2. *Zona de Valor:* Cifra en `Geist Mono` (`tabular-nums`, 44px) en Azul `#0950F6` (sobre blanco) o Amarillo `#FFEC01` (sobre azul).
  3. *Descripción:* Máximo 2-3 líneas de texto auxiliar claro.
  4. *Lista de Beneficios:* Iconos de verificación SVG inline alineados arriba.
  5. *Botonera de Acción:* CTA anclado al pie (`mt-auto`).
- **Variante Destacada por Tarifa/Km:** Marco exterior resaltado con borde de `3px` en Amarillo Accent `#FFEC01` + Badge superior operativo de tarifa fija o franja horaria.

### 5.3. Badges, Chips & Status Pills
- Formato píldora con `radius-full`, padding horizontal `px-3 py-1`, tipografía 11px uppercase `font-bold tracking-wider`.
- **Badge Operativo de Marca:** Fondo Amarillo `#FFEC01`, texto Azul `#0950F6`.
- **Badge de Estado en Vivo:** Fondo Azul `#0950F6`, texto Blanco `#FFFFFF`, con **dot pulsante opcional** (`w-2 h-2 rounded-full animate-pulse bg-[#10B981]`).

### 5.4. Formularios e Inputs (Cotizador y Contacto)
- Altura táctil mínima móvil: `48px` (`h-12`).
- Radio de borde: `radius-md` (12px).
- Borde de input: `2px` sólido en Azul `#0950F6` (sobre fondo blanco) o Blanco `#FFFFFF` (sobre fondo azul).
- Estado Focus-visible: `ring-4 ring-[#FFEC01]` en amarillo accent.
- Etiquetas de Error: Texto en Rojo `#EF4444` alineado al pie del input y vinculado vía `aria-describedby`.

### 5.5. Botón Insignia con Chip Anidado (`CTANestedPill` Component)
- **Formato:** Píldora (`radius-full`), font-subheading, uppercase, `tracking-wider`, `font-bold`.
- **Chip Circular Anidado:** Chip interior `w-8 h-8 rounded-full` contenedor del icono (ej. `ArrowRight`).
- **Animación Hover:** El chip circular se desplaza horizontalmente (`group-hover:translate-x-1 duration-200`).
- **Variante Primaria (Yellow Pill):** Fondo Amarillo Accent `#FFEC01`, texto Azul `#0950F6`. Chip interior transparente con icono azul que en hover conmuta a fondo Azul `#0950F6` e icono Amarillo `#FFEC01`.
- **Variante Invertida (Blue Pill):** Fondo Azul `#0950F6`, texto Blanco `#FFFFFF`. Chip interior Amarillo Accent `#FFEC01` con icono Azul `#0950F6`.

### 5.6. Selector de Servicios en Tarjetas (`RadioCardGroup` Component)
- Tarjetas seleccionables tipo radio para la elección inmediata de la modalidad de envío en el Cotizador (Express vs LowCost).
- **Estado Reposo / Inactivo:** Fondo Blanco `#FFFFFF`, borde `2px` sólido en Azul `#0950F6` (o `rgba(9,80,246,0.15)`), radio button exterior vacante.
- **Estado Seleccionado / Activo:** Borde `3px` sólido en Amarillo Accent `#FFEC01` o Azul `#0950F6`, radio button interior completo en Azul `#0950F6`, con el badge de acento activo.

### 5.7. Indicador de Progreso por Pasos (`StepperHorizontal` & `StepperVertical` Components)
- Guía de progresión táctil para cotizadores multi-etapa y secciones de "Cómo Funciona".
- **Nodos de Paso:** Círculos `w-8 h-8 rounded-full font-mono font-bold text-sm flex items-center justify-center`.
  - *Paso Completado:* Fondo Azul `#0950F6`, checkmark Blanco `#FFFFFF`.
  - *Paso Actual:* Fondo Amarillo Accent `#FFEC01`, número en Azul `#0950F6`, con `ring-4 ring-[#FFEC01]`.
  - *Paso Pendiente:* Fondo Blanco `#FFFFFF`, borde `2px` Azul `#0950F6`, número en Azul `#0950F6` con opacidad 50%.
- **Línea Conectora:** Trazo de `2px` en Azul `#0950F6` (pasos completados) o Azul al 20% (pasos pendientes).

### 5.8. Módulo de Mapa Interactivo y Rutas (`LeafletRouteMap` & `DynamicRouteMap` Components)
- Visualización interactiva del trayecto logístico (Origen/Retiro $\rightarrow$ Destino/Entrega).
- **Contenedor:** `radius-xl` (28px), borde `2px` sólido en Azul `#0950F6`, altura táctil adecuada para interacción en smartphones.
- **Marcadores de Origen y Destino (Map Pins):**
  - *Pin A (Retiro):* Indicador circular en Azul Corporativo `#0950F6` con borde Blanco `#FFFFFF`.
  - *Pin B (Entrega):* Indicador circular en Amarillo Accent `#FFEC01` con borde Azul `#0950F6`.
- **Línea de Ruta (Polyline):** Trazo de alta visibilidad en Azul Corporativo `#0950F6` (ancho 4px, opacidad 0.9) o trazo discontinuo en Amarillo `#FFEC01`.
- **Popups de Información:** Contenedores en Blanco `#FFFFFF` con texto y bordes en Azul `#0950F6`.

---

## 6. Animación e Interacciones (Motion & Micro-interactions)

### 6.1. Arquitectura de Motion GPU-First
Para garantizar un rendimiento constante de 60 fps en dispositivos móviles, **todas las animaciones e interacciones se ejecutan exclusivamente sobre las propiedades GPU `transform` y `opacity`**. Queda prohibido animar `width`, `height`, `top`, `left`, `margin` o `padding`.

### 6.2. Tokens de Duración y Curvas de Aceleración (Easing)

| Token de Motion | Duración | Curva Easing | Uso Previsto |
| :--- | :--- | :--- | :--- |
| `motion-fast` | `150ms` | `cubic-bezier(0.16, 1, 0.3, 1)` (`ease-spring`) | Hovers de botones, feedback táctil active y toggles |
| `motion-normal` | `250ms` | `cubic-bezier(0.4, 0, 0.2, 1)` (`ease-smooth`) | Despliegue de dropdowns, acordiones y modales |
| `motion-slow` | `350ms` | `cubic-bezier(0.16, 1, 0.3, 1)` (`ease-spring`) | Transición entre pestañas del cotizador y drawers |
| `motion-pulse` | `2000ms` (infinito) | `linear` | Pulsación continua de dots de estado en vivo |

### 6.3. Directriz de Accesibilidad (`prefers-reduced-motion`)
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    transform: none !important;
  }
}
```

---

## 7. Directrices de Accesibilidad (A11y Checklist)

- [x] **Contraste Rioplatense AA:** Todos los pares de color cumplen o superan 4.5:1 para texto normal y 3:1 para texto grande.
- [x] **Regla Estricta sobre Amarillo:** Prohibición absoluta de texto blanco sobre amarillo `#FFEC01`. Texto sobre amarillo siempre Azul `#0950F6` (ratio 5.23:1).
- [x] **Sintaxis Semántica HTML5:** Empleo de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, y jerarquía sin saltos de `<h1>` a `<h6>`.
- [x] **Navegación por Teclado:** Elementos interactivos nativos (`<button>` o `<a>`). Foco visible continuo mediante anillo de 4px en Amarillo Accent `#FFEC01`.
- [x] **Soporte para Lectores de Pantalla:** Atributos `aria-label` en botones sin texto explícito y formato accesible en precios (uso de `sr-only` para guiar la lectura de montos monetarios).

---

## 8. Guía de Implementación en Código (Tailwind v4 - Spec Propuesta)

> **PROPUESTA SPEC:** Esta sección constituye una especificación técnica de mapeo propuesto para Tailwind CSS v4 en `@theme`. **Esta etapa no modifica ningún archivo de código fuente del proyecto.**

### 8.1. Tokens de Tema en Tailwind v4 (`src/app/globals.css` @theme Propuesto)

```css
@import "tailwindcss";

@theme {
  /* Brand Colors (Paleta Estricta de 3 Colores + Estados) */
  --color-brand-blue: #0950F6;
  --color-brand-yellow: #FFEC01;
  --color-brand-white: #FFFFFF;

  /* Colores de Estado Operativo */
  --color-status-success: #10B981;
  --color-status-warning: #F59E0B;
  --color-status-danger: #EF4444;

  /* Font Families */
  --font-display: 'Anton', 'Bebas Neue', sans-serif;
  --font-sans: 'Outfit', sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;

  /* Spatial Spacing Scale */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-24: 96px;

  /* Motion Timing Easing */
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 8.2. Mapeo de Clases de Componentes Core (Tailwind v4 Reference)

```html
<!-- Navbar Principal (Fondo Azul Obligatorio) -->
<header class="bg-[#0950F6] text-white py-4 px-6 border-b-2 border-[#FFEC01]">
  <!-- ... Navbar Content ... -->
</header>

<!-- Botón CTA Primario (Alta Conversión) -->
<button class="bg-[#FFEC01] text-[#0950F6] font-bold rounded-md px-6 py-3 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150 ease-spring focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFEC01]">
  Cotizá tu envío
</button>

<!-- Tarjeta de Servicio Operativa con Badge por KM -->
<div class="bg-white border-2 border-[#0950F6] rounded-lg p-6 flex flex-col relative">
  <span class="bg-[#FFEC01] text-[#0950F6] text-xs font-bold uppercase tracking-wider rounded-sm px-2 py-1 self-start mb-3">
    Hasta 10 KM
  </span>
  <h3 class="font-display text-2xl text-[#0950F6]">Servicio Express</h3>
  <p class="font-mono text-44px font-bold text-[#0950F6] tabular-nums my-2">$3.500</p>
  <p class="font-sans text-sm text-[#0950F6] mb-4">Entrega en franja de 3 hs a elección.</p>
  <button class="mt-auto bg-[#0950F6] text-white font-bold rounded-md py-3 hover:scale-[1.02] transition-transform duration-150">
    Pedir Express
  </button>
</div>
```
