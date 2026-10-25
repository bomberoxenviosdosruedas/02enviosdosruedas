# Design System y Guía Técnica: Envíos DosRuedas

> **Notas de Implementación para Agentes**
> 
> - **Tipografía Principal:** `Outfit` (`--font-sans`, respaldo en `IBM Plex Sans, system-ui, -apple-system, sans-serif`)
> - **Tipografía de Display:** `Anton` / `Anton SC` (`--font-display`, display hero en mayúsculas sostenidas)
> - **Tipografía de Subtítulos y Botones:** `Bebas Neue` (`--font-subheading`, mayúsculas condensadas)
> - **Tipografía Monospace:** `Geist Mono` (`--font-mono`, cifras tabulares para métricas, precios y geolocalización)
> - **Instrucciones de Servido:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript 5.7+ · PostgreSQL & Prisma ORM. Gestor exclusivo: `pnpm@12.8.1`. Comandos: `pnpm dev` (desarrollo), `pnpm build` (`prisma generate && next build`), `pnpm typecheck` (`tsc --noEmit`), `pnpm lint` (`eslint .`), `pnpm test:ci` (`vitest run`).

---

## 1. Tema Visual y Atmósfera

El sistema visual de **Envíos DosRuedas** proyecta agilidad urbana, solidez técnica y confiabilidad logística en Mar del Plata. Está fundamentado en la señalética vial y el dinamismo operativo de última milla con base física en Friuli 1972 (Chauvín).

La interfaz opera bajo una premisa estética hiperdisciplinada: **la Ley de Tres Colores**. Queda estrictamente desterrado el negro puro (`#000000`), las gamas de gris deslucidas y cualquier tono de verde genérico. Todo el sistema cromático se articula entre el Azul Institucional Canónico (`#0950F6`), el Amarillo Vial de Alta Visibilidad (`#FFEC01`) y el Blanco Puro (`#FFFFFF`), complementado con matices tonales derivados que conservan saturación y contraste. La profundidad no se resuelve con sombras neutras, sino mediante sombras teñidas con el propio azul corporativo y destellos amarillos, logrando una atmósfera etérea, luminosa y nítida (*"Airy yet Precise"*).

**Características Clave:**
- **Ley de Tres Colores y Techo de Oscuridad:** El color más oscuro permitido en toda la interfaz es el Azul Canónico `#0950F6`. Todos los elementos que convencionalmente serían negros o grises (textos, sombras, bordes de contenedor) se resuelven en azul vibrante o sus tintes directos.
- **Geometría de Doble Bisel (*Double-Bezel*):** Contenedores estructurados en dos capas físicas continuas: un bisel exterior suave acolchado (`bg-brand-blue-50/80` con radio exterior de 16px) y un receptáculo interior blanco nítido (radio de 12px) con micro-sombras integradas.
- **Micro-interacciones Táctiles y Físicas (*Emil Kowalski Philosophy*):** Botones en píldora (*CTANestedPill*) con microchips circulares anidados que se desplazan 4px en hover, compresión táctil (`active:scale-[0.97]`) y resortes elásticos suaves, respetando de forma estricta las preferencias de movimiento reducido (`prefers-reduced-motion`).

---

## 2. Paleta de Colores y Roles

Todos los contrastes están calibrados bajo WCAG 2.2 Nivel AA. El contraste del texto azul `#0950F6` sobre fondo amarillo vial `#FFEC01` alcanza una relación de 4.94:1 (superando el umbral de 4.5:1).

### Primarios y Marca
- **Azul Primario Canónico / Techo de Oscuridad** (`#0950F6` / `var(--color-brand-blue-500)`): Primario institucional, techo absoluto de oscuridad en la aplicación. Utilizado en titulares display, textos de alta jerarquía, íconos de servicio, bordes activos de foco, fondos de héroes y footers.
- **Fondo Principal / Lienzo Base** (`#FFFFFF` / `var(--color-white)` o `var(--surface-page)`): Superficie base de la aplicación y fondo de tarjetas interiores limpias.

### Secundarios y Acentos
- **Amarillo Vial Canónico** (`#FFEC01` / `var(--color-brand-yellow-500)`): Señalización vial y máxima atención. Reservado estrictamente para llamadas a la acción primarias (CTAs), insignias de urgencia, pasos completados en steppers, líneas de acento decorativas de 6px y precios destacados sobre fondo azul. Cobertura visual restringida a $\le 15\%$ del lienzo.
- **Amarillo Hover Radiante** (`#FFF12E` / `var(--color-brand-yellow-400)`): Estado hover interactivo para botones CTA primarios y accesos a WhatsApp.
- **Amarillo Activo / Presionado** (`#E6D400` / `var(--color-brand-yellow-600)`): Estado presionado (*active/pressed*) en botones de acción.
- **Azul Acento Eléctrico** (`#3570F8` / `var(--color-brand-blue-400)`): Íconos secundarios, enlaces secundarios y textos de apoyo.

### Superficies y Contenedores
- **Bisel Exterior / Superficie Acolchada** (`#E6EEFE` / `var(--color-brand-blue-50)`): Fondo exterior del componente `DoubleBezelCard` (al 80% de opacidad), fondos hover de botones ghost y esqueletos de carga (*skeletons*).
- **Superficie de Tarjetas Interiores** (`#FFFFFF` / `var(--color-white)`): Superficie estándar para tarjetas, modales y formularios.
- **Superficie Alternativa Oscura** (`#0950F6` / `var(--color-brand-blue-500)`): Bloques de alto contraste para Hero, Footer, variantes oscuras de `DoubleBezelCard` y estados seleccionados de Express.
- **Superficie Suave Flex** (`#FFFDE6` / `var(--color-brand-yellow-50)`): Fondo de selección para el servicio Mercado Envíos Flex.

### Neutros y Tipografía
- **Texto Principal (Brand Ink)** (`#0950F6` / `var(--text-body)`): Títulos, subtítulos y cuerpo de lectura general sobre fondos claros.
- **Texto en Superficie Oscura** (`#FFFFFF` / `var(--color-white)`): Texto de títulos y párrafos sobre secciones azul corporativo.
- **Texto Secundario / Metadato** (`#3570F8` / `var(--color-brand-blue-400)` o `#FFFFFF` con opacidad `text-white/80`): Horarios de corte, descripciones secundarias y notas técnicas.
- **Texto Deshabilitado / Placeholder** (`#0950F6` con opacidad o `#3570F8` / `var(--color-brand-blue-400)`): Placeholders de formularios (`placeholder:text-brand-blue-500`) y controles inactivos.

### Estados Semánticos
- **Éxito (Success)** (`#FFEC01` / `var(--color-brand-yellow-500)` sobre `#0950F6`): Confirmaciones, entregas realizadas y estados completados. *(El verde está prohibido y anulado en `@theme`)*.
- **Alerta / Advertencia (Warning)** (`#FFEC01` / `var(--color-brand-yellow-500)` o `#FFF45C` / `var(--color-brand-yellow-300)`): Avisos de corte horario inminente y recargos climáticos por lluvia.
- **Peligro / Error (Danger)** (`#EF4444` / `border-red-500`, `text-red-600`): Validación de campos erróneos, bloqueos de servicio o avisos críticos.

### Bordes y Divisores
- **Borde Divisor Estructural** (`#BACEFD` / `var(--color-brand-blue-100)`): Separadores horizontales, bordes en reposo de tarjetas y líneas pendientes de steppers.
- **Borde Intermedio / Tarjeta Hover** (`#8EAFFB` / `var(--color-brand-blue-200)`): Trazos de selección intermedia e ilustraciones vectoriales.
- **Borde de Input en Reposo / Bisel Hover** (`#628FF9` / `var(--color-brand-blue-300)`): Contorno de campos de texto y hover del bisel exterior.
- **Borde de Foco Activo** (`#0950F6` / `var(--color-brand-blue-500)`): Anillo de foco accesible con desplazamiento (`ring-2 ring-brand-blue-500/20`).

---

## 3. Reglas de Tipografía

### Familias Tipográficas
- **Principal (Sans-serif)**: `Outfit` (`var(--font-sans)`), con respaldo en `IBM Plex Sans, system-ui, -apple-system, sans-serif`.
- **Display / Impacto**: `Anton` / `Anton SC` (`var(--font-display)`), con respaldo en `Anton, sans-serif`.
- **Subtítulos y Botones**: `Bebas Neue` (`var(--font-subheading)`), con respaldo en `Bebas Neue, sans-serif`.
- **Monospace (Tabular)**: `Geist Mono` (`var(--font-mono)`), con respaldo en `ui-monospace, monospace`.

### Jerarquía Tipográfica

| Rol | Familia | Tamaño | Peso (Weight) | Altura de Línea | Espaciado (Tracking) | Notas de Uso |
|-----|---------|--------|---------------|-----------------|----------------------|--------------|
| **Display / Hero** | `Anton` | `clamp(3rem, 5vw, 4.5rem)` (48px - 72px) | 400 | `0.85` | `-0.05em` | Titulares de héroes (`text-display`), mayúsculas obligatorias |
| **Encabezado H1** | `Anton` | `clamp(2.25rem, 4vw, 3rem)` (36px - 48px) | 400 | `0.9` | `-0.025em` | Títulos principales de página y sección (`text-h1`) |
| **Encabezado H2** | `Anton` | `clamp(1.75rem, 3vw, 2.25rem)` (28px - 36px) | 400 | `0.9` | `-0.02em` | Subtítulos de sección y bloques destacados (`text-h2`) |
| **Título de Tarjeta** | `Bebas Neue` | `1.5rem` (24px) | 400 | `1.0` | `0.05em` | Cabeceras de `DoubleBezelCard` y `CardTitle`, mayúsculas |
| **Cuerpo Grande** | `Outfit` | `1.125rem` (18px) | 500 / 600 | `1.5` | `0em` | Bajadas de héroe y textos introductorios de servicios |
| **Cuerpo Estándar** | `Outfit` | `1rem` (16px) | 400 | `1.625` | `0em` | Párrafos generales, políticas, preguntas frecuentes y formularios |
| **Texto UI / Botón** | `Bebas Neue` | `0.875rem - 1rem` (14px - 16px) | 700 | `1.0` | `0.05em` | Botones `CTANestedPill`, badges y selectores, mayúsculas |
| **Caption / Metadato** | `Outfit` / `Geist Mono` | `0.75rem - 0.875rem` (12px - 14px) | 500 | `1.25` | `0.025em` | Etiquetas de formulario, estados de entrega y ayudas contextuales |
| **Código / Mono** | `Geist Mono` | `0.625rem - 1.5rem` (10px - 24px) | 500 / 600 | `1.0` | `0em` (`tabular-nums`) | Precios en ARS, distancias en km, coordenadas y horas de corte |

---

## 4. Estilos de Componentes

### Botones (Buttons - `CTANestedPill`)
- **Morfología General:** Estructura de píldora redondeada completa (`rounded-full`), `font-subheading` (`Bebas Neue`), mayúsculas, tracking amplio (`0.05em`), peso 700. Altura mínima táctil de 44px (`min-h-11`) a 52px (`min-h-13`). Incluye un microchip circular (`w-8 h-8` o `w-10 h-10`) con flecha o ícono que transiciona 4px hacia la derecha en hover (`group-hover:translate-x-1`).
- **Primario (`variant="primary"`):** Fondo amarillo vial `bg-brand-yellow-500`, texto azul `text-brand-blue-500`, borde `border-brand-yellow-500`, sombra `shadow-accent-sm`. En hover: `hover:bg-brand-yellow-400 hover:shadow-cta-glow`. Presionado: `active:scale-[0.97]`.
- **Azul Corporativo (`variant="blue"`):** Para contraste sobre fondos amarillos o blancos. Fondo `bg-brand-blue-500`, texto blanco `text-white`, borde `border-brand-blue-500`, sombra `shadow-[0_0_24px_rgba(9,80,246,0.28)]`. Chip interno amarillo `bg-brand-yellow-500`.
- **Elevado (`variant="elevated"`):** Fondo blanco `bg-white`, texto azul `text-brand-blue-500`, borde `border-brand-blue-100`, sombra `shadow-elevated`. En hover: `hover:shadow-hover-lift hover:border-brand-blue-300`.
- **Contorno (`variant="outline"`):** Fondo transparente `bg-transparent`, texto azul `text-brand-blue-500`, borde doble `border-2 border-brand-blue-500`. En hover: `hover:bg-brand-blue-50`.
- **Fantasma (`variant="ghost"`):** Fondo transparente `bg-transparent`, texto azul `text-brand-blue-500`, borde transparente. En hover: `hover:bg-brand-blue-50`.

### Tarjetas y Contenedores (Cards - `DoubleBezelCard`)
- **Firma Geométrica de Doble Bisel:**
  - **Bisel Exterior (*Outer*):** `bg-brand-blue-50/80`, borde de 1px en `border-brand-blue-100`, radio `rounded-2xl` (16px), relleno perimetral `p-2` (8px), sombra `shadow-float`. En hover interactivo transiciona a `hover:border-brand-blue-300` y `hover:shadow-antigravity-deep` en 200ms (`var(--ease-out-ui)`).
  - **Receptáculo Interior (*Inner*):** Fondo blanco `bg-white` (o `bg-brand-blue-500` en variante oscura), radio `rounded-xl` (12px), relleno interno `p-6` (24px), sombra interior sutil `shadow-inner` o `shadow-sm`, borde fino `border-brand-blue-50/50`.

### Entradas y Formularios (Inputs - `InputField`)
- **Estructura:** Altura ergonómica de 44px (`h-11 min-h-11`), radio suave `rounded-xl` (12px), fondo blanco `bg-white`, tipografía `font-sans` (`Outfit`) en `text-base sm:text-sm text-brand-blue-500`.
- **Bordes y Estados:**
  - Reposo: Borde de 2px en `border-brand-blue-300`.
  - Hover: `hover:border-brand-blue-400`.
  - Foco: `focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20 focus:outline-none`.
  - Error: `border-red-500 focus:border-red-500 ring-2 ring-red-500/20 text-red-600`.
  - Deshabilitado: `border-brand-blue-100 bg-brand-blue-50/50 text-brand-blue-400 cursor-not-allowed`.
- **Etiquetas y Ayudas:** Label superior en `font-subheading text-xs uppercase tracking-wider text-brand-blue-500`. Mensajes de ayuda y error en `font-mono text-2xs`.

### Insignias y Badges (Pills - `Badge`)
- **Morfología:** Forma de píldora redondeada (`rounded-full`), `font-subheading font-bold uppercase tracking-wider`.
- **Escala de Tamaños:** `sm` (`px-2 py-0.5 text-2xs`), `md` (`px-3 py-1 text-xs`), `lg` (`px-4 py-1.5 text-sm`).
- **Variantes Semánticas:**
  - `urgent` / `accent`: Fondo `bg-brand-yellow-500`, texto `text-brand-blue-500`, borde `border-brand-yellow-400`, sombra `shadow-accent-sm`.
  - `secure` / `economic`: Fondo suave `bg-brand-blue-50`, texto `text-brand-blue-500`, borde `border-brand-blue-200`.
  - `flex`: Fondo amarillo claro `bg-brand-yellow-100`, texto `text-brand-blue-500`, borde `border-brand-yellow-200`.
  - `neutral`: Fondo blanco `bg-white`, texto `text-brand-blue-500`, borde `border-brand-blue-100`, sombra `shadow-sm`.
  - `primary`: Fondo azul corporativo `bg-brand-blue-500`, texto `text-white`, borde `border-brand-blue-500`.

### Cápsula Tipográfica Rematada (`Knockout`)
- **Estilo:** Elemento tipográfico rotado `-rotate-1`, `rounded-full px-3 py-1 my-1 font-display uppercase leading-[1.1] tracking-[-0.02em]`.
- **Tonos:** `yellow` (`bg-brand-yellow-500 text-brand-blue-500 shadow-[0_0_28px_rgba(255,236,1,0.45)]`) sobre fondos azules, y `blue` (`bg-brand-blue-500 text-white shadow-[0_0_24px_rgba(9,80,246,0.28)]`) sobre fondos amarillos.

---

## 5. Principios de Layout

### Sistema de Espaciado (Spacing Scale)
- **Unidad Base:** `8px` (malla de 0.5rem / 4px para micro-ajustes y 8px para escala estructural).
- **Escala de Secciones y Contenedores:**
  - Ritmo vertical amplio de sección: `6rem` (96px, `--spacing-section-y`) en escritorio; `3rem` (48px, `--spacing-section-y-tight`) en móviles.
  - Ancho máximo de contenedor (`max-w-7xl`): `80rem` (1280px, `--spacing-container-max`).
  - Alturas de controles: `sm: 2.25rem` (36px), `default: 2.5rem` (40px), `lg: 2.75rem` (44px), `xl: 3.5rem` (56px), `2xl: 4rem` (64px).

### Grillas y Contenedores
- **Bento Grid Asimétrico (`BentoGrid`):** Malla modular de 12 columnas: `grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8`.
  - Tarjetas Hero (Express, E-commerce 3PL): `lg:col-span-7`.
  - Tarjetas Estándar (LowCost, Flex): `lg:col-span-5`.
  - Ancho Completo (Cotizador, Call to Action): `col-span-12`.
  - Móvil: colapso estricto a 1 columna (`col-span-1`).

### Filosofía de Espacios en Blanco
- Gran holgura espacial ("Airy yet Precise") que evita la saturación visual.
- El lienzo respira con padding horizontal fluido (`px-4 sm:px-6 lg:px-8`) y separaciones limpias entre grupos lógicos de contenido.

### Radio de Bordes (Border Radius Scale)
- **Pequeño (`--radius-sm`):** `6px` (tags internos, tooltips).
- **Medio (`--radius-md`):** `8px` (botones secundarios pequeños).
- **Grande (`--radius-lg`):** `12px` (receptáculo interior `DoubleBezelCard`, campos de entrada `InputField`).
- **Extra Grande (`--radius-xl`):** `16px` (bisel exterior `DoubleBezelCard`).
- **2XL / 3XL / 4XL:** `24px` / `32px` / `40px` (contenedores modulares y paneles flotantes).
- **Píldora Completa (`--radius-full`):** `9999px` (botones `CTANestedPill`, badges y chips).

---

## 6. Profundidad y Elevación

Todas las sombras están teñidas exclusivamente con el Azul Canónico (`rgba(9, 80, 246, ...)`) o el destello Amarillo Vial (`rgba(255, 236, 1, ...)`). **Queda prohibido el uso de sombras grises o negras descoloridas.**

| Nivel | Tratamiento de Sombra / Borde | Uso Recomendado |
|-------|-------------------------------|-----------------|
| **Nivel 0 (Plano)** | Sin sombra (`box-shadow: none`), borde opcional `border-brand-blue-100` | Fondos de página, lienzos planos |
| **Nivel 1 (Sutil)** | `--shadow-sm`: `0 2px 4px rgba(9, 80, 246, 0.06), 0 1px 2px rgba(9, 80, 246, 0.03)` | Tarjetas interiores estándar, badges neutrales |
| **Nivel 2 (Elevado)** | `--shadow-float`: `0 25px 50px -12px rgba(9, 80, 246, 0.15)` \| `--shadow-elevated`: `0 16px 40px rgba(9, 80, 246, 0.18)` | Bisel exterior de `DoubleBezelCard`, dropdowns de navegación |
| **Nivel 3 (Modal / Antigravedad)** | `--shadow-antigravity-deep`: `0 24px 64px rgba(9, 80, 246, 0.22)` \| `--shadow-hover-lift` | Estado hover de tarjetas interactivas, modales y popovers |
| **Acento Glow (CTA)** | `--shadow-cta-glow`: `0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18)` | Botones CTA primarios y cápsulas `Knockout` |

---

## 7. Interacción y Movimiento

### Estados de Interacción (States)
- **Hover:** Elevación sutil vertical (`hover:-translate-y-0.5` o `hover:translate-y-[-1px]`), incremento del borde hacia `border-brand-blue-300` y transición al nivel superior de sombra teñida (`shadow-antigravity-deep`).
- **Focus Visible:** Anillo de foco sin outline predeterminado: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`. Bimodal: anillo amarillo `#FFEC01` sobre superficies azules, y anillo azul `#0950F6` sobre superficies blancas o amarillas.
- **Active / Pressed:** Compresión táctil elástica inmediata: `active:scale-[0.97]`.
- **Desplazamiento de Ícono:** Los chips dentro de los botones se trasladan 4px hacia la derecha (`group-hover:translate-x-1`) en 160ms.

### Transiciones y Curvas de Easing
- **Curva Rápida UI (`--ease-out-ui` / `--ease-snappy`):** `cubic-bezier(0.16, 1, 0.3, 1)` y `cubic-bezier(0.23, 1, 0.32, 1)` para respuestas táctiles inmediatas.
- **Curva de Menú / Cajón (`--ease-drawer`):** `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Duraciones Estándar:**
  - Micro-feedback interactivo (`--duration-feedback`): `160ms`.
  - Menús desplegables (`--duration-dropdown`): `200ms`.
  - Modales y diálogos (`--duration-modal`): `250ms`.
- **Soporte Estricto de Movimiento Reducido (`prefers-reduced-motion: reduce`):**
  - Desactiva automáticamente giros 3D en `FloatTiltCard`, carruseles continuos y animaciones continuas (`animate-floaty`, `animate-shuttle`, `animate-pulse-ring`).
  - Reduce duraciones de transición a `0.01ms`.

---

## 8. Comportamiento Responsivo

### Puntos de Quiebre (Breakpoints)
| Nombre | Ancho Mínimo | Cambios Estructurales |
|--------|--------------|-----------------------|
| **Móvil** | `< 640px` | Todo el layout Bento se colapsa a 1 columna vertical (`col-span-1`). Tipografía display escala a `text-4xl` (36px). Botones y campos adoptan ancho completo (`w-full`). La navegación de escritorio se oculta y da paso al cajón móvil táctil (`MobileNav`). Los paddings horizontales bajan a `px-4`. |
| **Tableta** | `640px - 1024px` | Grillas intermedias a 2 columnas (`md:grid-cols-6` o `md:grid-cols-12`). La tipografía escala fluidamente con funciones `clamp()`. Aparecen tarjetas combinadas y paddings de sección medianos (`py-14 sm:py-20`). |
| **Escritorio** | `> 1024px` | Grilla completa Bento asimétrica de 12 columnas (`lg:col-span-7` + `lg:col-span-5`). Menú de navegación principal con dropdowns animados mediante resortes elásticos (`motion/react`). Contenedor central limitado a `80rem` (1280px). |

---

## 9. Guía de Prompts y Mantenimiento

### Referencia Rápida para Agentes IA
- **Color Principal (Techo de Oscuridad):** `#0950F6` (prohibido `#000000` y escalas de gris).
- **Color de Acento / CTA:** `#FFEC01` (cobertura $\le 15\%$).
- **Fondo General:** `#FFFFFF` (y `#E6EEFE` para biseles exteriores).
- **Tipografía Base:** `Outfit` (cuerpo general).
- **Tipografía Display:** `Anton` (titulares en mayúsculas sostenidas).
- **Tipografía Botones / Subtítulos:** `Bebas Neue` (mayúsculas con tracking abierto).
- **Tipografía Cifras:** `Geist Mono` (`tabular-nums`).
- **Términos de Negocio Clave:** Base física en Friuli 1972 (Chauvín), flota propia, bulto estándar de 5 kg / 40x40x30 cm, franjas horarias estrictas (corte LowCost 13:00 hs, Flex 15:00 hs, Express en franja de 3 hs).

### Ejemplos de Prompts de Componentes

#### Prompt para Botón Primario de Llamada a la Acción (CTA)
```tsx
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { ArrowRight } from 'lucide-react';

<CTANestedPill
  variant="primary"
  size="default"
  href="/cotizar"
  icon={<ArrowRight className="w-4 h-4" />}
>
  Cotizá tu envío ahora
</CTANestedPill>
```

#### Prompt para Tarjeta con Doble Bisel (DoubleBezelCard)
```tsx
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { Badge } from '@/components/ui/Badge';
import { Zap } from 'lucide-react';

<DoubleBezelCard variant="light" hoverEffect={true} className="w-full">
  <div className="flex items-center justify-between mb-4">
    <Badge variant="urgent" size="sm" icon={<Zap className="w-3.5 h-3.5" />}>
      Franja de 3 hs
    </Badge>
    <span className="font-mono text-sm text-brand-blue-400">Mar del Plata</span>
  </div>
  <h3 className="font-subheading text-2xl uppercase tracking-wider text-brand-blue-500 mb-2">
    Envíos Express
  </h3>
  <p className="font-sans text-sm text-brand-blue-500 leading-relaxed">
    Retiro prioritario en tu local o domicilio y entrega directa en moto con flota propia.
  </p>
</DoubleBezelCard>
```

#### Prompt para Campo de Entrada de Formulario (InputField)
```tsx
import { InputField } from '@/components/ui/InputField';
import { MapPin } from 'lucide-react';

<InputField
  label="Dirección de retiro"
  placeholder="Ej. Friuli 1972"
  icon={<MapPin className="w-4 h-4" />}
  required
  helpText="Ingresá calle y altura en Mar del Plata"
/>
```
