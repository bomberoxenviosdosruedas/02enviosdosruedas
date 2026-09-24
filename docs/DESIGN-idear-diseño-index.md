---
name: Envíos DosRuedas — Homepage Ideación 2026
colors:
  primary: '#0950F6'
  on-primary: '#ffffff'
  primary-container: '#0950F6'
  on-primary-container: '#ffffff'
  secondary: '#FFEC01'
  on-secondary: '#0950F6'
  secondary-container: '#FFF12E'
  on-secondary-container: '#0950F6'
  surface: '#0950F6'
  on-surface: '#ffffff'
  surface-container-low: '#0950F6'
  surface-container: '#ffffff'
  surface-container-high: '#E6EEFE'
  on-surface-variant: '#BACEFD'
  outline: '#628FF9'
  outline-variant: '#BACEFD'
  facebook: '#1877F2'
  instagram-a: '#833AB4'
  instagram-b: '#FD1D1D'
  instagram-c: '#F77737'
  instagram-border: '#E1306C'
  ink: '#0950F6'
typography:
  display:
    fontFamily: Anton
    fontWeight: '400'
    textTransform: uppercase
    letterSpacing: -0.05em
  subheading:
    fontFamily: Bebas Neue
    fontWeight: '700'
    textTransform: uppercase
    letterSpacing: 0.08em
  body:
    fontFamily: Outfit
    weights: [300, 400, 500, 600, 700]
    lineHeight: 1.625
  mono:
    fontFamily: Geist Mono
    weights: [400, 600, 700]
rounded:
  pill: 9999px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 28px
  xxl: 30px
  hero: 32px
  hero-inner: 20px
spacing:
  container: 1280px
  section-y: 96px
  card-gap: 24px
---

# Design System: Envíos DosRuedas — Homepage Ideación (idear_diseño_index.html)

**Fuente única del diseño:** `docs/informes/idear_diseño_index.html` (mockup estático autónomo con Tailwind CDN, vanilla JS y Google Fonts). Toda la spec visual (tokens, tipografía, layout, elevation, motion, componentes) describe exactamente lo que propone ese HTML; la **organización por secciones** es la de producción: `src/app/page.tsx` + `src/app/layout.tsx` (mapa en §1.3).

> **Naturaleza del documento:** spec de **ideación aplicada a la homepage real**. Aplica el ajuste Max `#0950F6` como azul tope de oscuridad; el `@theme` de `src/app/globals.css` ya colapsa `brand-blue-500→950` e `ink` en `#0950F6`, alineado con el mockup. Cada sección real se mapea en §1.3 y §7 con estado: **fiel** (reproduce el mockup), **desviada** (diferencia de lienzo), **extra de producción** (no está en el mockup; spec derivada de sus tokens) o **ausente** (spec del mockup sin componente montado). Las desviaciones del mockup vs. ley de marca se listan en §9 y §10.

---

## 1. Overview / Brand & Style

**Mood:** logística urbana de alta velocidad sobre lienzo azul vibrante `#0950F6`, con amarillo vial `#FFEC01` como única señal de atención. El mockup construye una homepage completa de última milla para Mar del Plata: header fijo con dropdowns, hero animado con mockup de ruteo en vivo, sección visión/partner con métricas, vitrina de servicios en carrusel 3D con ficha técnica modal, bento de emprendedores con marquee de marcas locales, prueba social con reseñas reales de Google, cards de comunidad digital (Facebook, Instagram, WhatsApp) y footer optimizado con banner CTA.

**Vibe en una línea:** *panel logístico vivo sobre azul eléctrico, voseo rioplatense, señalética vial monumental con acentos amarillos y glifos de marca de redes sociales.*

### 1.1 Identidad y Audiencia

El mockup presenta a Envíos DosRuedas como partner logístico de marca local: mensajería en moto, envíos en el día, última milla para e-commerce y PyMEs. La interfaz mezcla rigor de señalética (colores, tipografía display enorme, geometrías rotadas) con panel operativo en vivo (ruteo, métricas en mono, estado "Operaciones Activas").

**Audiencia objetivo:** comercios y e-commerces locales, vendedores de MercadoLibre y particulares de Mar del Plata que necesitan envíos express, low cost o programados.

**Respuesta emocional:** confianza inmediata, velocidad, transparencia operativa, cercanía local (voseo, zonas reales "Friuli 1972", "Zona Güemes", "Playa Grande").

### 1.2 Principios de Diseño (derivados del HTML)

| Principio | Evidencia en el HTML |
|---|---|
| **Azul como lienzo, amarillo como señal** | Fondo `#0950F6` en header/hero/servicios/redes/footer; amarillo solo en CTAs, badges, franjas 6px, statbox activo, dots activos. |
| **Panel logístico vivo** | Hero con "Ruteo Activo · MDQ", ping dot animado, chip "Friuli 1972", diorama de ruta con trazo amarillo discontinuo. |
| **Asimetría intencional** | Hero `lg:grid-cols-12` 7/5; bento emprendedores `col-span-7 + col-span-5`; footer 5/3/4. Nada centrado en desktop salvo secciones sociales. |
| **Tipografía monumental** | Anton enorme (`text-4xl`→`text-7xl`, `leading-[0.9]`), labels Bebas uppercase con tracking, métricas Geist Mono `tabular-nums`. |
| **Elevación teñida** | Sombras con alpha azul o amarillo (`float`, `hover-lift`, `cta-glow`, `glow-yellow`, `glow-blue`); blooms radiales blur 80–150px. |
| **Doble encuadre ("double bezel")** | Tarjetas con outer `rounded-[28px–32px]` (blue-50 o glass) + inner `rounded-[20px]` (blue o blanco) en stats, hero card y modal. |
| **Micro-interacción táctil** | `hover:scale-[1.03]`, `active:scale-[.98]`, `group-hover:translate-x-1`, tilt 3D, kinetic font stretch. |

### 1.3 Mapa de secciones — `page.tsx` + `layout.tsx` ↔ mockup

La homepage real compone las siguientes secciones (en orden DOM), todas con el diseño del mockup:

| # | Sección real (producción) | Archivo | Spec en este doc | Estado vs. mockup |
|---|---|---|---|---|
| 1 | Shell / Layout (html, body, fuentes, metadata, JSON-LD, gtag) | `src/app/layout.tsx` | §7.0 | Infra de producción (no existe en el mockup) |
| 2 | Skip link + `main#main-content` | `src/components/ClientLayout.tsx` | §7.0 | Extra de producción (a11y, no está en el mockup) |
| 3 | Header optimizado | `src/components/layout/OptimizedHeader.tsx` | §7.1 | **Fiel** (tokens ya Max) |
| 4 | Hero | `src/components/home/HeroAnimado.tsx` | §7.3 | **Fiel** |
| 5 | Strip de métricas (ticker mono) | inline en `page.tsx` (l.13–23) | §7.10 | Extra de producción (no está en el mockup) |
| 6 | Segmentos (4 cards) | `src/components/home/SegmentosHome.tsx` | §7.11 | Extra de producción (no está en el mockup) |
| 7 | Servicios: header + red logística + carrusel 3D + modal | wrapper inline en `page.tsx` + `LogisticaNetworkCanvas.tsx` + `ServicesOverview.tsx` | §7.5 | **Fiel**, con desvíos (ver §7.5) |
| 8 | Emprendedores (bento + marquee) | `src/components/home/EmprendedoresHome.tsx` | §7.6 | **Desviada**: fondo azul `#0950F6` en vez de Ice `#E6EEFE` |
| 9 | CTA + form a WhatsApp | `src/components/home/CtaSection.tsx` | §7.12 | Extra de producción (no está en el mockup) |
| 10 | Comunidad Digital (FB / IG / WA) | `src/components/layout/CarruselRedes.tsx` | §7.8 | **Fiel** |
| 11 | Footer optimizado | `src/components/layout/OptimizedFooter.tsx` | §7.9 | **Fiel** |

**Componentes del mockup sin contraparte montada en la homepage:**

| Spec del mockup | Archivo existente | Estado |
|---|---|---|
| §7.4 Visión / Partner Logístico | `src/components/home/VisionSection.tsx` | Existe pero **no se importa** en `page.tsx` (ausente de la homepage) |
| §7.7 Prueba Social (reseñas Google) | `src/components/home/SocialProofSection.tsx` | Existe pero **no se importa** en `page.tsx` (ausente de la homepage) |

**Ritmo cromático real de la homepage** (difiere del mockup, que pedía Blanco → Ice → Blanco entre servicios y redes): Azul (header) → Azul (hero, franja amarilla al pie) → **Ice `#E6EEFE`** (strip métricas) → **Blanco** (segmentos) → Azul/Navy (servicios) → **Azul** (emprendedores; el mockup pedía Ice) → Azul (CTA, card blanca interna) → Azul (redes) → Azul (footer, franja amarilla).

---

## 2. Colors

### 2.1 Tokens declarados en el `tailwind.config` del HTML

| Rol semántico | Hex | Token del mockup | Uso observado |
|---|---|---|---|
| **Azul Vibrante (Canvas / Primary MAX)** | `#0950F6` | `brand-blue-500/700/800/900`, `ink` | Header, hero, servicios, redes, footer, H1/H2, texto sobre blanco, focus. Es el tope de oscuridad: `700/800/900` se colapsan en `#0950F6` con comentario "Límite máximo de oscuridad". |
| **Amarillo Vial (Accent)** | `#FFEC01` | `brand-yellow-500` | CTA primario `cta-nested-pill`, badges, franjas superiores/inferiores de 6px, dots activos, knockout "E-Commerce", CTA WhatsApp / footer. |
| **Amarillo Hover** | `#FFF12E` | `brand-yellow-400` | Hover de CTAs amarillos y del toggle de rotación. |
| **Amarillo hover extra** | `#FFF44A` | `[#FFF44A]` | Hover del CTA de la card PyMEs. |
| **Blanco Puro** | `#FFFFFF` | `white` | Fondo de secciones blancas (visión, prueba social), inners de tarjetas, CTA secundario. |
| **Ice Blue Tint** | `#E6EEFE` | `brand-blue-50` | Fondo de la sección emprendedores, outers de tarjetas stats, chips de avatar/quotes. |
| **Blueprint Border** | `#BACEFD` | `brand-blue-100` | Bordes de tarjetas blancas, iconos en dropdowns, texto de descripción sobre azul. |
| **Sky Blueprint** | `#628FF9` | `brand-blue-300` | Trazo secundario del mapa del hero, bordes hover, texto muted light. |
| **Steel Blue Muted** | `#3570F8` | `brand-blue-400` | Cifras muted (contador de reseñas), box de ícono "Flota Propia". |
| **Azul hover secundario** | `#0742CA` | `brand-blue-600` | Hover de textos/CTAs azules sobre amarillo (Flex) y labels pequeñas sobre blanco. |
| **Glifo / texto claro** | `#8EAFFB` | `brand-blue-200` | Labels de statboxes en cards azules, dots inactivos de reseñas. |

> **Scale de blue completa declarada:** `50 #E6EEFE · 100 #BACEFD · 200 #8EAFFB · 300 #628FF9 · 400 #3570F8 · 500 #0950F6 · 600 #0742CA · 700/800/900 #0950F6`.

### 2.2 Sombras (tokens del mockup)

| Token | Valor | Uso |
|---|---|---|
| `cta-glow` | `0 0 40px rgba(255,236,1,0.45)` | CTAs amarillos, card central Express, hover de la stat big. |
| `glow-yellow` | `0 0 25px rgba(255,236,1,0.45)` | Badges llevados a amarillo, botón toggle activo, CTA PyMEs. |
| `glow-blue` | `0 0 25px rgba(9,80,246,0.25)` | Iconos/boxes azules, card "100% Flota Propia". |
| `accent-sm` | `0 2px 4px rgba(255,236,1,0.15)` | CTA hero primario en reposo. |
| `hover-lift` | `0 20px 30px -10px rgba(9,80,246,0.2)` | Hover del CTA secundario blanco. |
| `float` | `0 25px 50px -12px rgba(9,80,246,0.15)` | Tarjetas stats y cards emprendedores. |
| `elevated` | `0 10px 25px -5px rgba(0,0,0,0.15)` | Header con scroll y CTA secundario. ⚠️ desviación: alpha negro (ver §9). |

Además aparecen sombras arbitrarias en el mockup: `shadow-2xl` (dropdowns, modal), `shadow-xl` (cards redes y reseñas), `shadow-sm/md` (iconos, badges), `shadow-inner` (pill del footer), `shadow-[0_25px_50px_-12px_rgba(9,80,246,0.35)]` (hero card), `shadow-[2px_2px_0px_rgba(0,39,124,0.4)]` (box de ícono Meli Flex, ⚠️ navy legacy, §9) y un `drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]` sobre el diorama del hero (⚠️ desviación, §9).

### 2.3 Colores de marca externos — sección Comunidad Digital

La sección de redes sociales introduce **colores de plataforma** de forma deliberada, única excepción a la ley de tres colores en este mockup:

| Plataforma | Color principal | Gradiente / variantes |
|---|---|---|
| **Facebook** | `#1877F2` | badges/CTA/glifo `#1877F2`; hover CTA `#166fe5`. |
| **Instagram** | Gradiente `#833AB4 → #FD1D1D → #F77737` | Glifo con gradiente; badge y handle en `#FD1D1D`. Además usa `#E1306C` en bordes, overlay y glifo gigante (con alpha) y `#F56040` en el gradiente del box de ícono. |
| **WhatsApp** | `#FFEC01` (amarillo de marca, fondo y texto azul) | Hover `#FFF12E`; glifo SVG **monocromo** `fill-current` (amarillo o azul según el contexto) — **no hay verde** en este mockup. |

### 2.4 Reglas de aplicación

- **Amarillo = señal, nunca superficie completa** a nivel sección (sí se usa como fondo de *cards* chicas: card Flex Meli y card central Flex del carrusel, ambas con texto `#0950F6`).
- **Azul sobre azul:** texto blanco, bordes `rgba(255,255,255,0.12–0.20)`, glass `bg-white/10` con `backdrop-blur`.
- **Opacidades de blanco como escala de "texto secundario"** sobre azul: `white/90` (promesa), `white/70` (subtítulos de stat mini), `white/[0.04]` (ghost wordmark).
- **Bordes entre secciones:** `border-y border-white/10` o `border-[#BACEFD]/60` según el lienzo.
- ⚠️ En las cards de reseñas aparecen colores **default de Tailwind** (`border-yellow-200/80`, `border-blue-100` = `#dbeafe`, `border-blue-50` = `#eff6ff`, `shadow-xs`) que **no** pertenecen a la paleta de marca; se marcan como desviación (§9).

---

## 3. Typography

### 3.1 Familias (cargadas por Google Fonts en el `<head>`)

| Rol | Familia | Peso cargado | Tratamiento en el mockup |
|---|---|---|---|
| **Display** | Anton | 400 | Uppercase, `tracking-[-0.05em]`/`tracking-tight`, `leading-[0.9–0.98]`. Títulos de hero, secciones, cards y modal. |
| **Subheading** | Bebas Neue | 400 (sintetiza bold) | Uppercase, `tracking-[0.05–0.1em]`/`tracking-widest`, peso 700 visual. Navegación, badges, labels, h3 de features, quotes de reseñas, encabezados de footer. |
| **Cuerpo** | Outfit | 300;400;500;600;700 | Sentence case, `leading-[1.625]` o `leading-relaxed`, `font-light` en promesas, `font-medium` en párrafos de sección. |
| **Mono / Datos** | Geist Mono | 400;600;700 | `tabular-nums` en cifras: `+50K`, `0`, `+50`, `+7 Años`, `5.0 / 5`, `$3.700 Base`, teléfonos, tags de zona ("Friuli 1972"), contadores "1 / 12". |

### 3.2 Escala observada en uso

| Elemento | Clases | Tamaño resultante |
|---|---|---|
| H1 hero | `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl` | 36px → 72px |
| H2 secciones | `text-5xl sm:text-6xl lg:text-7xl` | 48px → 72px |
| H2 servicios | `text-4xl sm:text-6xl` | 36px → 60px |
| Título modal | `text-3xl sm:text-4xl` | 30px → 36px |
| Título card carrusel / PyMEs | `text-2xl sm:text-3xl` | 24px → 30px |
| Título card redes | `text-3xl sm:text-4xl` | 30px → 36px |
| H3 feature / footer | `text-2xl` / `text-lg` | 24px / 18px |
| Quote reseña | `text-xl sm:text-2xl` | 20px → 24px |
| Nav / badges / labels | `text-xs`–`text-sm` con `tracking-widest` | 12–14px |
| Body | `text-xs`–`text-xl` | 12–20px |
| Cifras stats | `text-7xl lg:text-8xl` / `text-6xl` / `text-2xl sm:text-3xl` | 72–96px / 60px / 24–30px |
| Detalles legales | `text-xs` | 12px |

### 3.3 Tratamientos de firma

1. **Kinetic Font Stretch:** `.kinetic-font-stretch` aplica en hover `transform: scaleX(1.02)` + `letter-spacing: 0.01em`, 400ms `cubic-bezier(0.25,1,0.5,1)`, `transform-origin: left`. Se usa en el wordmark del header y en H2/H1 clave.
2. **Knockout Rotado (−1°) con doble marco:** la línea "E-Commerce" del H1 del hero usa outer `bg-white/10 px-3.5 py-1 rounded-xl border-[#FFEC01]/40 shadow-xl -rotate-1` + inner `bg-[#FFEC01] text-[#0950F6] px-3 py-1 font-black rounded-lg`. El badge del hero también rota `-rotate-1`.
3. **Ghost Wordmark:** "ENVÍOS DOS RUEDAS" `font-display uppercase text-[15vw] text-white/[0.04] tracking-tighter whitespace-nowrap` centrado detrás del hero.
4. **Eyebrow + Cifra (StatBlock):** el label va en **Outfit** (`font-sans` bold uppercase `text-[10px] tracking-widest`, p. ej. "PAQUETES EXTRAVIADOS", "EMPRENDEDORES CONFÍAN") + cifra Geist Mono `tabular-nums` (p. ej. "+50K", "0", "+50"). Excepción: los labels de las 3 stat cards de reseñas (`5.0 / 5`, `100%`, `+7 Años`) usan **Bebas** `font-subheading text-[11px]`.
5. **Quotes Bebas en reseñas:** el highlight de cada reseña va en Bebas `uppercase font-bold leading-tight` (amarillo sobre card azul, azul sobre card blanca).
6. **Handle/etiqueta mono:** handle de Instagram `@enviosdosruedas`, `+54 223 660-2699`, horarios y tags de zona siempre en Geist Mono.

> Uso de mayúsculas: todo display/subheading uppercase; el cuerpo en sentence case. Copy en voseo: "Cotizá", "Mirá", "Seguí", "Sumate", "Escribinos", "Comprobá".

---

## 4. Layout & Spacing

### 4.1 Contenedor canónico

- Contenido: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. Secciones full-bleed de color y contenido dentro del contenedor.
- Header/footer: contenedor propio con el mismo ancho máximo. Header fijo `z-50` con `pt-20` en `body` como compensación.

### 4.2 Ritmo vertical

- Secciones principales: `py-24`, con `md:py-36` en emprendedores y `py-20 md:py-32` en comunidad digital. Hero: `py-12 sm:py-20 lg:py-28` con `min-height:90dvh`.
- Separación header de sección: `mb-16` (servicios), `mb-12` (prueba social), `gap-10 lg:gap-12` (grids).
- Cards: `gap-6 lg:gap-8`. Chips: `gap-3 sm:gap-4`.

### 4.3 Grids

- **Hero:** `grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center` → izquierda `lg:col-span-7` (texto), derecha `lg:col-span-5` (tarjeta ruteo).
- **Visión / Partner:** mismo 12-col, `col-span-6/6` (texto + grid de stats).
- **Stats:** `grid-cols-1 sm:grid-cols-2 gap-6` con la card big `sm:col-span-2`.
- **Emprendedores (bento asimétrico):** `grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-auto lg:auto-rows-[340px]` → PyMEs `lg:col-span-7 lg:row-span-2` · Meli Flex `lg:col-span-5` · Corporativos `lg:col-span-5`.
- **Redes:** `grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`, cards de altura fija `h-[390px] md:h-[430px]`.
- **Footer:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-12` → marca/sociales `col-span-5` · servicios `col-span-3` · base de operaciones `col-span-4`.

### 4.4 Carruseles

- **Servicios 3D:** contenedor `relative h-[500px] sm:h-[540px] flex items-center justify-center` con `perspective:2000px` y `transform-style:preserve-3d`; cards absolutas `w-[290px] sm:w-[350px] h-[440px] sm:h-[490px]`. Posicionamiento por JS (ver §8).
- **Reseñas:** `grid grid-flow-col auto-cols-[85%] sm:auto-cols-[420px] lg:auto-cols-[460px] gap-6 overflow-x-auto` con `scroll-snap-type:x mandatory` y dots de navegación.
- **Marquee:** fila duplicada `flex gap-16 w-max animate-logos-scroll` con `mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)`.

### 4.5 Breakpoints usados

`sm` (640px) · `md` (768px) · `lg` (1024px) · `xl` (1280px) — Tailwind default del CDN; el mockup no redefine breakpoints.

### 4.6 Reglas observadas

- Alturas de sección con `min-height:90dvh` (hero) y `dvh` en tarjetas fijas; **no aparece `h-screen`**.
- Touch targets: botones de navegación/dots `min-h-[44px]`/`min-w-[44px]`, iconos mobile `min-w-11 min-h-11`, CTAs `min-h-[52px]` o `min-h-[48px]`.
- Ritmo cromático real de la homepage (ver §1.3): Azul (header) → Azul (hero, franja amarilla al pie) → Ice `#E6EEFE` (strip métricas) → Blanco (segmentos) → Azul/Navy (servicios) → Azul (emprendedores) → Azul (CTA) → Azul (comunidad digital) → Azul (footer con franjas amarillas). El mockup proponía otro ritmo (Blanco visión → Ice emprendedores → Blanco prueba social) que la producción aún no replica.

---

## 5. Elevation & Depth

### 5.1 Blooms y fondos atmosféricos

- **Radiales difuminados:** `radial-gradient` con blur 80–150px: blanco `rgba(255,255,255,0.2)` y azules `#3570F8` en el hero; amarillo `rgba(255,236,1,0.05–0.30)` en hero y emprendedores (dos de ellos con `animate-pulse`).
- **Procedural grid SVG:** patrón 48px, stroke blanco `0.75` dash `2,6`, opacidad `0.07`, con puntos amarillos `r=1.5` en las intersecciones (hero).
- **Rutas GPS SVGs:** trazo amarillo `2.5` dash `12 16` con `animate-pulse` + trazo `#628FF9` `1.5` dash `8 12`, con círculos amarillos como origen/destino.
- **Footer:** gradientes radiales amarillo 8% arriba y azul 50% abajo + retícula overlay blanca 5% `bg-[size:32px_32px]`.

### 5.2 Glass on Blue

`bg-white/10` + `border-white/20` + `backdrop-blur-md` + `rounded-2xl/3xl`, sobre lienzo `#0950F6`. Aparece en: hero card, chips del hero, stats mini, dropdowns (con `bg-[#0950F6]` + `border-white/15`), modal y banner CTA del footer. Bordes hover `border-white/40`.

### 5.3 Tilt Card (hero)

Contenedor con `perspective:1200px` + `.tilt-card-container:hover .tilt-card { transform: rotateX(-4deg) rotateY(6deg) translateY(-6px) }`; transición 300ms `cubic-bezier(0.25,1,0.5,1)`. La card internamente es un "double bezel" glass: outer `rounded-[32px] bg-white/10 backdrop-blur border-white/20` + inner `rounded-[20px] bg-[#0950F6] border-white/15`.

### 5.4 Double Bezel system (como aparece en el mockup)

Patrón en stats y cards de impacto: **outer** `rounded-[28–32px] bg-[#E6EEFE]/80 border-[#BACEFD] p-2 shadow-float` (hover: `hover:-translate-y-1` + `hover:shadow-glow-yellow` o sombra azul) + **inner** `rounded-[20px] bg-white o bg-[#0950F6] border-[#BACEFD]/white-20`. El modal usa las clases `double-bezel-outer`/`double-bezel-inner`.

### 5.5 Sombras duras de "sticker"

Iconos corporativos usan `shadow-[2px_2px_0px_#0950F6]` o `shadow-[3px_3px_0px_#0950F6]` (sombras duras offset, no difusas) para dar efecto de pegatina sobre los iconos amarillos.

---

## 6. Shapes

| Elemento | Radio | Notas |
|---|---|---|
| CTAs, badges, chips, pills de status | `rounded-full` | Píldora completa. |
| Dropdowns, glass panels, card Meli/Corporativos | `rounded-xl` (12px) / `rounded-2xl` (16px) | — |
| Inners de tarjetas stats / hero | `rounded-[20px]` | — |
| Modal (inner azul / outer glass) | `rounded-2xl` (16px) / `rounded-3xl` (24px) | El modal NO usa `[20px]`: usa la escala canónica del CDN. |
| Modal / outer de stats | `rounded-3xl` / `rounded-[32px]` | — |
| Outers de reseñas / cards redes | `rounded-[28px]` / `rounded-2xl` | — |
| Card PyMEs | `rounded-[30px]` | — |
| Tarjetas del carrusel 3D | `rounded-3xl` con `border-4` | Borde grueso de 4px, no 2px. |
| Logo de marca (SVG) | círculos y trazos redondeados | Moto con ruedas + manubrio, stroke 3–4px. |

> El mockup usa radios arbitrarios extendidos (`[20px] [28px] [30px] [32px]`) más allá de la escala canónica; se documentan tal cual aparecen (§9 nota de producción).

---

## 7. Components

> Las specs de esta sección se organizan por las **secciones reales** de `src/app/page.tsx` y `src/app/layout.tsx`; el diseño de cada una proviene del mockup (mapa completo en §1.3). **Fiel** = reproduce el mockup con tokens Max; **desvío** = diferencia de lienzo a resolver; **extra** = no existe en el mockup (spec derivada de sus tokens); **ausente** = spec del mockup cuyo componente no está montado.

### 7.0 Shell / Layout (producción) → `layout.tsx` + `ClientLayout.tsx`

- **`layout.tsx`:** `next/font` carga Outfit (`--font-sans`), Anton 400 (`--font-display`), Bebas Neue 400 (`--font-subheading`) y Geist Mono (`--font-mono`); `<html lang="es" scroll-smooth>`; `<body>` con `bg-white text-[#0950F6] font-sans antialiased selection:bg-[#FFEC01] selection:text-[#0950F6] min-h-[100dvh] flex flex-col`. Metadata de marca + JSON-LD (Organization + LocalBusiness: Friuli 1972, +54 223 660-2699, Lun–Vie 09–18 · Sáb 10–15) + gtag.
- **`ClientLayout.tsx`:** skip link amarillo "Saltar al contenido" → `OptimizedHeader` → `<main id="main-content" class="flex-grow pt-[72px]">` → `CarruselRedes` (dynamic, GSAP) → `OptimizedFooter`. Es infra de producción (el mockup no tiene shell): el mockup compensa el header fijo con `pt-20` en `body`; producción usa `pt-[72px]` en el `<main>`.

### 7.1 Header optimizado → `OptimizedHeader.tsx` (layout · fiel)

- Fijo, `bg-[#0950F6] py-4` → al hacer scroll: `bg-opacity-95 backdrop-blur-md py-2.5 border-white/10 shadow-elevated` (JS vanilla).
- **Wordmark:** SVG de moto amarillo + "Envíos" blanco / "DosRuedas" amarillo, Anton `text-2xl sm:text-3xl`, con `kinetic-font-stretch` y `group-hover:rotate-12 scale-105` en el ícono. Focus-visible `ring-2 ring-[#FFEC01]`.
- **Nav desktop:** links `px-4 py-2 rounded-xl font-subheading font-bold uppercase tracking-wider text-sm`, hover amarillo + `bg-white/10`.
- **Dropdowns (Servicios / Nosotros):** panel `w-64 bg-[#0950F6] rounded-2xl border-white/15 shadow-2xl`, abierto por hover con transición `opacity + translateY(8px→0) scale(0.97→1)`. Ítem: icono en box `bg-white/10 text-[#BACEFD]` que se voltea a `bg-[#FFEC01] text-[#0950F6]` en hover + label Bebas uppercase.
- **Acciones:** teléfono `font-mono text-sm` con ícono amarillo; CTA yellow `cta-nested-pill px-6 py-2.5 text-sm`; en mobile, botones de ícono `min-w-11 min-h-11 rounded-xl bg-white/10`.

### 7.2 CTA Nested Pill (canónico del mockup) → primitiva `CTANestedPill` en `src/components/ui/`

Forma `rounded-full font-subheading uppercase tracking-[.05em] font-bold`, icono anidado circular `w-7/8 h-7/8 rounded-full bg-[#0950F6]/10 text-[#0950F6]` que en hover pasa a `bg-[#0950F6] text-[#FFEC01]` (o blanco en la variante blanca) + `translate-x-1`; `active:scale-[.98]`.

| Variante | Fondo | Texto | Borde | Sombra / hover |
|---|---|---|---|---|
| Primaria (amarilla) | `#FFEC01` | `#0950F6` | `#FFEC01` | `shadow-accent-sm` → `shadow-cta-glow`; hover `#FFF12E` |
| Elevada (blanca) | `#FFFFFF` | `#0950F6` | `#BACEFD` (hover `#628FF9`) | `shadow-elevated` → `shadow-hover-lift`; icono hover `bg-blue text-white` |
| Azul (sobre amarillo, Flex) | `#0950F6` | `#FFFFFF` | `#0950F6` | hover `#0742CA` |
| Ghost (footer) | `bg-white/10` | `#FFFFFF` | `border-white/20` (hover `/40`) | hover `bg-white/20` |

### 7.3 Hero → `HeroAnimado.tsx` (page · fiel)

Estructura `min-h-[90dvh]` azul con: capa de blooms + grid procedural + rutas SVG + ghost wordmark (todo `pointer-events-none select-none`), luego grid 7/5:

- **Izq (7):** badge amarillo `-rotate-1` "Tu solución confiable · Mar del Plata" (icono sparkles fill azul) → H1 Anton 3 líneas con knockout "E-Commerce" → párrafo `font-light text-white/90 max-w-xl leading-[1.625]` → **dos** CTAs (`Cotizá Express` amarillo primario + `Mirá los Servicios` blanco elevado, `min-h-[52px] px-8 py-3`) → 3 chips glass (`Miles de Envíos`/package, `Cobertura Total MDQ`/map-pin, `Entregas en el Día`/fast-forward) con box de ícono 28px amarillo translúcido.
- **Der (5):** tarjeta tilt con header de estado (`Ruteo Activo · MDQ` + ping dot amarillo; tag mono `Friuli 1972`), diorama SVG de ruta (grid `#628FF9` opacidad 0.3, ruta amarilla `stroke-6`, marcador círculo amarillo con centro azul), y 2 stat mini-cards (`Envíos Same-Day` con box amarillo / `Flota Propia` con box `#3570F8`).
- **Cierre:** franja amarilla `h-1.5` full-width al pie.

### 7.4 Visión / Partner Logístico (blanco) → `VisionSection.tsx` · ⚠️ **ausente**: existe pero no se importa en `page.tsx`

Badge yellow-translúcido → H2 Anton con kinetic stretch → párrafo `max-w-prose font-medium` → 2 feature rows (icono amarillo en box que gira/crece en hover; título Bebas `text-2xl uppercase tracking-wider`; copy `text-sm text-blue/75`) → grid de stats: big card azul con `+50K` (Geist Mono `text-7xl lg:text-8xl tabular-nums`), badge `MAR DEL PLATA 2026`, truck en box amarillo; + 2 cards blancas (`0 · Paquetes extraviados`, `+50 · Emprendedores confían`) con iconos `bg-[#E6EEFE]` que en hover pasan a `bg-[#0950F6] text-[#FFEC01]`.

### 7.5 Carrusel 3D de Servicios + Modal Ficha Técnica → wrapper `page.tsx` + `LogisticaNetworkCanvas.tsx` + `ServicesOverview.tsx` (page · fiel, con desvíos)

- **Header de sección:** badge `NUESTROS SERVICIOS` (azul/amarillo) + H2 con span amarillo `underline decoration-[#0950F6] underline-offset-8` + controles (toggle de rotación y botones prev/next `p-3 rounded-full bg-white/10 hover:bg-[#FFEC01]`).
- **Card (ver §4.4):** anatomía fija: header (icono box amarillo + badge de cada servicio) → label de ciudad (map-pin + Bebas uppercase) → título Anton → descripción 2 líneas → 3 statboxes (`ENTREGA/TARIFA/PESO`, valores Bebas + labels `text-[9px] uppercase`) → hint `Mirá la Ficha Técnica` (solo card central).
- **Variantes de card:** Express (azul, borde/glow amarillo) · LowCost (blanca, borde `#628FF9`) · Flex (amarilla, texto azul, borde azul) · Depósito & Fulfillment (azul, borde `#628FF9`). Datos por servicio: tiempos, precio base (Exp `$3.700` / LowCost `$3.000`), peso (hasta 15 kg; "Apto Moto/Auto" en Flex; "Sin límite" en 3PL; políticas "Zonificado LowCost").
- **Modal:** overlay `bg-[#0950F6]/80 backdrop-blur-md`; card `double-bezel` (outer glass `rounded-3xl` + inner azul `rounded-2xl`); icono `p-4 rounded-2xl` amarillo con sombra dura; badge info; título Anton; bloque resumen `bg-[#0950F6]/40 border-white/10` con lista "Beneficios Clave" (shield-check amarillo); 3 statboxes (`Tiempos`/`Precio Base`/`Capacidad`); link "Volver Atrás" + CTA yellow con href por servicio. Cierra con X, click en overlay y tecla Escape.
- **Producción (`ServicesOverview.tsx` + wrapper de `page.tsx` + `LogisticaNetworkCanvas.tsx`):** fiel al mockup en anatomía de card, variantes Express/LowCost/Flex/3PL, auto-rotación 4.5s con toggle, navegación por teclado y modal. **Desvíos a resolver:** doble H2 de servicios (`page.tsx:36` "Conectamos Mar del Plata…" + `ServicesOverview:328` "Soluciones Logísticas…") y **fondo `#052C87`** (más oscuro que el tope Max) en el `<section>` de `ServicesOverview:302`. Replica las desviaciones §9 del mockup (⚡ emoji en el toggle, `border-black/5` en el divisor de statboxes, `shadow-2xl`). El diorama de ruta no es SVG: la capa de fondo es `LogisticaNetworkCanvas.tsx`, canvas GSAP determinístico con nodos de zonas reales de MDQ (Sede Central Friuli, Centro, La Perla, Constitución, Zona Güemes, Playa Grande, Puerto, Bosque Peralta Ramos, Batán) y partículas amarillas/blancas que reaccionan al pointer.

### 7.6 Emprendedores (Ice Blue) + Marquee → `EmprendedoresHome.tsx` (page · **desvío**: producido sobre azul, no Ice)

- Badge amarillo + H2 con **pill MDQ inline** (`rounded-full bg-gradient-to-r from-[#FFEC01] to-[#FFF12E] border shadow-md`, Anton, hover `scale-105`) + párrafo + divisor `h-[3px] w-24 bg-[#FFEC01]`.
- **Bento:** Card PyMEs (azul, icono watermark 160px blanco 3% abajo-der (`absolute right-4 bottom-4`), título hover amarillo, 3 bullets shield-check, CTA `rounded-full min-h-[52px] bg-[#FFF12E]` con flecha en círculo `bg-[#0950F6]/15`, hover `bg-[#FFF44A]`) · Card Meli Flex (gradiente amarillo `to-br`, icono box azul, badge MERCADOLIBRE azul, CTA azul) · Card Corporativos (blanca, badge CORPORATIVO `bg-[#E6EEFE]`, CTA amarillo "Abrir Cuenta Corriente").
- **Marquee de marcas locales:** label + fila duplicada en loop infinito (`logos-scroll 30s linear`, pausa en hover), máscara de degradado lateral, items `font-display text-2xl uppercase text-blue/70 hover:text-blue hover:scale-105`. Lista: Toy Piola Juguetería, Ama & Pola, Dropix 3D, El Cóndor, StarCel, UrbanCow, Wanca, Catalina Indumentaria, Envases 3G, La Peri.
- **Producción (`EmprendedoresHome.tsx`):** bento y marquee fieles (IDs de cards, marcas y `logo-scroll` con pausa en hover/focus). **Desvío de lienzo**: la sección corre sobre `bg-[#0950F6]` (azul, contenido blanco) con `border-y border-white/10`, no sobre Ice `#E6EEFE` como propone el mockup; el badge "Socio Estratégico Local" va translúcido y las marcas del marquee usan `text-brand-blue-200` (el mockup las trae en `text-blue/70` sobre Ice). El H2 mantiene el pill MDQ rotulado con gradiente amarillo y el título hover en amarillo.

### 7.7 Prueba Social (reseñas reales de Google) → `SocialProofSection.tsx` · ⚠️ **ausente**: existe pero no se importa en `page.tsx`

- **Header:** pill verificado `5.0 / 5.0 Verificado en Google Maps · +120 Valoraciones` (estrella rellena azul sobre amarillo) + H2 + contador mono `1 / 12` + botones prev/next `h-11 w-11 rounded-xl border-2` (prev blanco → hover azul; next amarillo).
- **Stat cards (3):** `5.0 / 5 ★★★★★ Reputación Perfecta en Google` · `100% Flota Propia Identificada` (icono box azul con corazón/manos amarillo) · `+7 Años Liderando la Cadetería Local`. Labels en Bebas `font-subheading text-[11px]`.
- **Chips de categoría:** píldoras Bebas uppercase; activa `bg-[#0950F6] text-white border-[#0950F6] scale-105`; inactiva blanca con borde `#BACEFD`, hover `#E6EEFE`. La chip "Todas" muestra contador mono.
- **Cards de reseña (variantes):** `dark-blue` (azul, quote amarilla, avatar círculo amarillo, badge Local Guide, respuesta del dueño colapsable) · `yellow-accent` (outer `#FFF12E/20`) · `frost-blue` y `clean-white` (outers blancos translúcidos). Anatomía: 5 estrellas amarillas → label de categoría (pill mono) → quote Bebas → texto → footer con avatar inicial, nombre, badge/horario mono y botón de respuesta del equipo.
- **Cards de impacto (3):** `Zona Güemes · E-Commerce & Flex`, `Av. Juan B. Justo · Autopartes & Express`, `Playa Grande / Alem · Fulfillment 3PL` — formato Desafío/Solución + cierre `✓` en mono.
- **CTA final:** yellow `Comprobá la reputación en Google Maps` con `external-link` que se desplaza en hover.
- **Producción:** `SocialProofSection.tsx` existe pero **no está montado** en `page.tsx` (ver §1.3). Queda documentada como spec pendiente de montar: pill verificado `5.0 / 5.0`, stat cards, chips de categoría, carrusel snap de reseñas (variantes dark-blue / yellow-accent / frost-blue / clean-white) y cards de impacto Desafío/Solución con cierre en mono.

### 7.8 Comunidad Digital (Facebook / Instagram / WhatsApp) → `CarruselRedes.tsx` (layout · fiel)

Patrón de card uniforme: outer `p-2 rounded-2xl border-[color]/30 bg-[#0950F6]/80 backdrop-blur-md hover:-translate-y-1.5 hover:border-[color]/70 shadow-xl` + overlay gradiente del color de plataforma (0→100% opacity) + inner `rounded-xl p-6 sm:p-7 h-[390px] md:h-[430px] bg-[color]/10 hover:/15 border-white/10` + **glifo gigante** `w-56 h-56 text-[color]/10 hover:/20 scale-125 -rotate-12` en la esquina + badge pill + ícono de plataforma `w-11 h-11 rounded-xl bg-[color] shadow-lg shadow-[color]/40` + título Anton + handle `font-mono` + descripción `font-light text-[#E6EEFE]/90` + CTA full-width pill del color de la plataforma con icono `arrow-up-right` en círculo `bg-white/20`.

- Facebook: CTA `bg-[#1877F2] hover:bg-[#166fe5]` "SEGUIR COMUNIDAD".
- Instagram: CTA gradiente `#833AB4 → #FD1D1D → #F77737` "VER CONTENIDO", handle `@enviosdosruedas`; bordes, overlay y glifo gigante en `#E1306C`.
- WhatsApp: CTA `bg-[#FFEC01] hover:bg-[#FFF12E] text-[#0950F6]` "INICIAR CHAT", teléfono `+54 223 660-2699` (glifo monocromo, sin verde).
- **Producción (`CarruselRedes.tsx`):** fiel al patrón de card (outer `p-2 rounded-2xl` + inner `rounded-xl h-[390px] md:h-[430px]`), colores de plataforma (FB `#1877F2`/hover `#166fe5`; IG gradiente `#833AB4→#FD1D1D→#F77737` con bordes/overlay/glifo gigante `#E1306C` y box `#F56040→#FD1D1D→#833AB4`; WA amarillo de marca) y glifo gigante `w-56 h-56` con `group-hover:scale-125 group-hover:-rotate-12`. Diferencias menores: entrada animada con GSAP ScrollTrigger (`stagger 0.15`, `power3.out`, `once:true`) en vez del hover-lift del mockup, y títulos de card blancos (el mockup los usa del color de plataforma).

### 7.9 Footer optimizado → `OptimizedFooter.tsx` (layout · fiel)

- **Franja superior amarilla** `h-1.5 shadow-[#FFEC01]/30` + blooms + retícula.
- **Banner CTA:** card glass `bg-[#0950F6]/90 border-white/15` con pill de status (ping dot + "Operaciones Activas Mar del Plata 2026"), H3 "¿Tenés envíos para hoy? **Los entregamos a tiempo.**" y 2 CTAs (Cotizá tu Envío amarillo / Chateá con Nosotros ghost con glifo WhatsApp amarillo).
- **Col 1 (5):** wordmark + tagline mono `text-[10px] uppercase tracking-widest` + párrafo de 7 años + "Canales Oficiales" (IG/FB ghost `h-10 w-10 rounded-xl bg-white/10 hover:bg-[#FFEC01]` + WA amarillo) + pill "Centro de Depósito y Logística Local · Friuli 1972".
- **Col 2 (3):** "Servicios y Cotizadores" con 4 links (íconos lucide amarillos `h-4 w-4`, hover `translate-x-1` + `arrow-up-right` que aparece).
- **Col 3 (4):** "Base de Operaciones MDQ" con 4 bloques informativos (map-pin Friuli 1972 · tel mono amarillo · mail · horarios Lun–Vie 09–18 / Sáb 10–15 en mono amarillo).
- **Bottom:** separador con botón scroll-to-top amarillo circular (⚠️ lleva `animate-bounce`, ver §9) + legal `© 2026 Envíos DosRuedas · Mar del Plata, Argentina` + links institucionales.
- **Producción (`OptimizedFooter.tsx`):** fiel: franja amarilla `h-1.5` con glow, blooms + retícula, banner CTA glass con pill de estado (ping dot), 3 columnas 5/3/4, canales oficiales (IG/FB ghost + WA amarillo), bloque de operaciones con tel/mail/horarios en mono amarillo, legal. Diferencias: el scroll-to-top usa **loop de flotación** (`y: [0,-5,0]`, `useReducedMotion` respetado) en lugar del `animate-bounce` del mockup (desvío §9 resuelto en producción); "Chateá con Nosotros" es ghost con glifo WA amarillo; entradas por columna con `whileInView` + stagger.

### 7.10 Strip de métricas (producción · **extra** al mockup) → inline en `page.tsx` l.13–23

Franja `bg-[#E6EEFE] border-y border-[#BACEFD] py-4` bajo el hero: 4 ítems `font-mono text-[11px] tracking-[0.12em] uppercase` (`Miles de Envios`, `Cobertura Total MDQ`, `Entregas en el Dia`, `Ruteo Activo MDQ`), cada uno con dot `h-2 w-2 rounded-full bg-[#FFEC01] border-[#0950F6]/20`. Reutiliza los chips del hero (§7.3) como ticker de confianza full-width. No está en el mockup: se spec aquí con sus tokens para mantener consistencia.

### 7.11 Segmentos (producción · **extra** al mockup) → `SegmentosHome.tsx`

Fondo blanco (`bg-brand-white-50`) con `border-b border-brand-blue-100/50`. Header centrado: badge amarillo translúcido (`bg-brand-yellow-500/15 border-brand-yellow-500/30 shadow-accent-sm` + Sparkles) + H2 Anton `text-3xl→5xl` "¿CÓMO PODEMOS IMPULSAR TU LOGÍSTICA HOY?" + párrafo. Grid `md:grid-cols-2 lg:grid-cols-4 gap-6` de 4 cards `DoubleBezelCard` (patrón doble encuadre del mockup §5.4): la destacada (Meli Flex) con outer amarillo (`bg-brand-yellow-500/20 border-2 border-brand-yellow-500 shadow-cta-glow`) y las otras con outer Ice (`bg-brand-blue-50/80 border-brand-blue-100 shadow-float`); inner con ícono `w-12 h-12 rounded-xl`, tag mono, H3 Anton, copy y CTA pill full-width con `ArrowRight` (`min-h-[44px]`). No está en el mockup: aplica pills/badges/tokens del mockup.

### 7.12 CTA + Form a WhatsApp (producción · **extra** al mockup) → `CtaSection.tsx`

Sección azul `bg-[#0950F6]` con card exterior glass (`rounded-[30px] bg-white/10 backdrop-blur-md border-white/25 shadow-2xl`) + inner blanco (`rounded-[20px] border-blue-100/50 shadow-sm`) con retícula `rgba(6,54,165,0.03)`. Izq: badge amarillo "Cotización Inmediata" (`shadow-glow-yellow`), H2 Anton azul "¿Listo para escalar la logística de tu e-commerce?", párrafo y línea mono "Atención comercial < 2 MIN" con chip. Der: **form** (no existe en el mockup; deriva de su lenguaje) con 2 inputs + 1 select de volumen (1–50 / 51–200 / +200), submit pill amarilla `min-h-[52px]` "Hablar por WhatsApp" que arma `wa.me` con nombre/negocio/volumen. ⚠️ Desvíos de producción: fondo del form `#F8FAFC` (slate default de Tailwind) y borde `blue-100/50`; inputs/select sin `name` ni `autocomplete` (ver análisis WIG).

---

## 8. Motion & Interaction

| Patrón | Implementación en el mockup |
|---|---|
| **Kinetic font stretch** | Hover: `scaleX(1.02)` + `letter-spacing 0.01em`, 400ms `cubic-bezier(0.25,1,0.5,1)` (`transform-origin: left`). |
| **Tilt 3D** | `.tilt-card-container:hover .tilt-card` → `rotateX(-4deg) rotateY(6deg) translateY(-6px)`, 300ms. |
| **Dropdowns por hover** | `opacity 0→1` + `translateY(8px→0)` + `scale(0.97→1)`, 200ms `cubic-bezier(0.25,0.8,0.25,1)`. |
| **Carrusel 3D de servicios** | Transform por offset: `rotateY(offset × −28deg)`, `translateZ(centro 120px / lateral −abs×180px)`, `translateX(offset × 140px|260px)`, `opacity` (centro 1, lateral `max(0.15, 1−abs×0.4)`), `scale` (centro 1.05, lateral `max(0.65, 1−abs×0.18)`), `zIndex = total − abs`. Auto-rotación cada **4.5s** con toggle de pausa; click en lateral centra la card; click en centro abre el modal. |
| **Modal** | Overlay `opacity 0→1` + card `scale(0.95→1)` con `transition-opacity/transform 300ms`; cierre por X, overlay o Escape; `body overflow hidden` mientras está abierto. |
| **Header con scroll** | JS intercambia clases (`py-4` → `py-2.5`, agrega blur + sombra + borde abajo de 20px de scroll). |
| **Marquee** | `@keyframes logos-scroll { 0% → 100% translateX(0 → -50%) }`, 30s linear infinite, pausa en hover. |
| **Ping dot de estado** | `animate-ping` sobre el punto amarillo de "Ruteo Activo" y en el banner del footer. |
| **Reseñas** | `scroll-snap` horizontal suave (`scroll-smooth`), dots que se actualizan por `scrollLeft`; toggle de respuesta del dueño re-renderiza la lista. |
| **Hover táctil general** | `hover:scale-[1.03]`, `group-hover:translate-x-1` en iconos de CTA, `active:scale-[.98]` en CTAs, icon boxes que rotan (`rotate-6/-6`) o crecen (`scale-110`) en las features. |

> ⚠️ El mockup **no** implementa `prefers-reduced-motion` ni desactiva el tilt en táctil (deuda a resolver en producción). Animaciones por JS no tienen guard de motion.

---

## 9. Do's and Don'ts del mockup

### Lo que el mockup hace bien (reglas a conservar)

- Tres colores de marca como base: azul lienzo, amarillo señal, blanco superficie; escala de blue sin pasar de `#0950F6`.
- CTAs siempre `cta-nested-pill` con icono anidado que se desplaza; un CTA primario claro por sección principal.
- Métricas, teléfonos y precios en Geist Mono con `tabular-nums`.
- Display/subheading SIEMPRE uppercase; copy en voseo; anclas reales de MDQ.
- Touch targets ≥ 44px; `min-h-[90dvh]` en hero; botones con `aria-label`; overlay modal con `role="dialog" aria-modal`.
- Alturas con `dvh`, nunca `h-screen`; animaciones solo `transform/opacity` en la mayoría de los casos.

### Desviaciones del mockup vs. ley de marca (notas para producción)

| # | Desviación | Dónde | Recomendación producción |
|---|---|---|---|
| 1 | Colores externos de plataforma (`#1877F2`, gradiente IG) | Sección Comunidad Digital | Excepción deliberada y acotada: documentar en ADR; el resto del sitio conserva los tres colores. WhatsApp ya usa amarillo de marca. |
| 2 | Sombras neutras de Tailwind con `rgba(0,0,0,…)`: `shadow-sm/md/xl/2xl/inner` (iconos, badges, dropdowns, modal, cards redes/reseñas, pill del footer), `shadow-elevated` y `drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]` | Config de sombras; dropdowns, modal, diorama hero card | Reemplazar por sombras teñidas azul/amarillo (`rgba(9,80,246,α)` / `rgba(255,236,1,α)`). |
| 3 | `animate-bounce` en scroll-to-top | Footer | Prohibido por estilo: usar un float suave propio o `active:scale`. |
| 4 | Emoji `⚡` en el toggle de rotación | Sección servicios | Quitar; usar solo el ícono lucide (ej. `RotateCcw`/`Pause`) o texto. |
| 5 | Colores default de Tailwind en cards de reseñas (`border-yellow-200/80`, `border-blue-100` = `#dbeafe`, `border-blue-50` = `#eff6ff`, `shadow-xs`) | Prueba social | Mapear a `brand-blue-100`/`brand-blue-50` y a `brand-yellow-100`. |
| 6 | Radios arbitrarios extendidos (`[20px] [28px] [30px] [32px]`, `rounded-2xl`=16px en cards Meli/Corporativos) | Tarjetas varias | Unificar según la tabla de Shapes del DESIGN.md canónico (24px o 16px según jerarquía). |
| 7 | `border-black/5` en el divisor de statboxes del carrusel | Carrusel 3D | Usar `border-white/10` o `border-brand-blue-100/50` según variante. |
| 8 | Sin `prefers-reduced-motion` ni guard de tilt táctil | Global | Implementar en producción con `motion` + `useReducedMotion`. |
| 9 | Fuentes por Google Fonts CDN; Tailwind por CDN | `<head>` | Producción: `next/font` y Tailwind v4 de proyecto; los tokens se traducen a `@theme` en `globals.css`. |
| 10 | Marca local "StarCel"/etc. en el marquee | Emprendedores | Verificar autorización de uso de marcas reales antes de publicar. |
| 11 | Precio base `$3.700` / `$3.000` citado en el carrusel | Carrusel 3D | Concordar con `src/lib/pricing.ts` y la tabla `PriceRange` (no inventar valores en producción). |
| 12 | Sombra dura con `rgba(0,39,124,0.4)` (`#00277C`, "navy" legacy) | Box de ícono de la card Meli Flex | Usar el patrón sticker del mockup (`shadow-[2px_2px_0px_#0950F6]`) o una sombra amarilla. |

---

## 10. Appendix: Stitch / Subagent Block

```markdown
DESIGN SYSTEM — ENVÍOS DOSRUEDAS HOMEPAGE IDEACIÓN 2026 (Max #0950F6):
- Canvas: Vibrant Blue #0950F6 como azul tope (header, hero, servicios, redes, footer). Accent Signal Yellow #FFEC01 (hover #FFF12E, extra #FFF44A). Surface White #FFFFFF. Tints: Ice #E6EEFE, borders #BACEFD / #628FF9, muted #3570F8, glyph #8EAFFB, hover blue #0742CA. Excepción acotada: colores de plataforma en cards de redes (FB #1877F2, IG gradiente #833AB4→#FD1D1D→#F77737 + #E1306C/#F56040, WA #FFEC01 — glifo monocromo, sin verde). FORBIDDEN fuera de esa sección: colores externos, azul más oscuro que #0950F6, escalas slate/gray/zinc, emojis, animate-bounce, sombras negras. Sombras teñidas rgba(9,80,246,α) / rgba(255,236,1,α); duras 2-3px offset #0950F6 para iconos.
- Typography: Anton uppercase tracking -0.05em leading 0.9 (H1 7xl, H2 5-7xl, cards 2-3xl). Bebas Neue uppercase tracking-widest (nav, badges 10-12px, h3 features 2xl, quotes de reseña 2xl, encabezados footer 18px). Outfit light/medium 14-20px leading 1.625. Geist Mono tabular-nums (cifras stats hasta 96px, precios, teléfonos, tags de zona, contadores). Firma: kinetic font stretch (scaleX 1.02 + letter-spacing 0.01em, 400ms), knockout amarillo rotado -1° con doble marco (outer glass + inner yellow), ghost wordmark 15vw al 4% blanco.
- Hero: lienzo #0950F6 min-h-90dvh, blooms radiales blur 80-150px (blanco/amarillo/azul), grid procedural SVG 48px con dots amarillos, rutas SVG dash yellow pulse + #628FF9, ghost wordmark. Grid 7/5: badge amarillo -rotate-1 con sparkles, H1 Anton con knockout "E-Commerce", promesa light, 2 CTAs (pill amarilla + pill blanca elevada) min-h-52px, 3 chips glass (package/map-pin/fast-forward). Derecha: tilt card glass rounded-32px + inner rounded-20px con header "Ruteo Activo · MDQ" (ping dot), tag mono "Friuli 1972", diorama SVG ruta amarilla con marcador, 2 stat mini-cards. Franja amarilla 6px al pie.
- Componentes: CTA Nested Pill rounded-full Bebas uppercase (amarilla/blanca/azul/ghost) con icono circular anidado que se desplaza translateX(4px) y se invierte de color; dropdowns hover con panel w-64 glass traslúcido e ítems con icono que se voltea a amarillo; carrusel 3D de servicios (perspective 2000px, rotateY -28°/offset, translateZ/scale/opacity por distancia, auto-rotación 4.5s toggleable, dots 44px) con 4 variantes de card (azul/glow amarillo, blanca/borde #628FF9, amarilla/borde azul, azul/borde #628FF9) y modal ficha técnica double-bezel con 3 statboxes (Tiempos/Precio Base/Capacidad) y CTA por servicio; bento emprendedores 12-col 7/5+5 auto-rows 340px (card azul PyMEs con CTA #FFF12E, card amarilla gradiente Meli Flex con CTA azul, card blanca Corporativos con CTA amarilla) + marquee de marcas 30s con máscara deg; prueba social con chips de categoría, carrusel snap de reseñas (variantes dark-blue/yellow/frost/white, quote Bebas, avatar inicial, respuesta del dueño colapsable) y cards de impacto Desafío/Solución; cards de redes (glifo gigante 56 → 20% opacity, hover lift, CTA del color de plataforma, IG con #E1306C en bordes/overlay); footer con franja amarilla, banner CTA glass + 3 columnas (5/3/4) + legal.
- Layout: container max-w-7xl px-4/6/8, secciones py-24 (hero py-12/20/28), grids 12-col con spans 7/5 y 5/3/4, gap-6 lg:gap-8, breakpoints sm/md/lg/xl, cards redes h-390/430px, carrusel reseñas auto-cols 420/460px, touch ≥ 44px, sin h-screen.
- Motion: kinetic font stretch, tilt (-4deg/6deg/-6px), dropdowns hover 200ms, carrusel 3D programático, modal 300ms zoom, marquee 30s, ping dots, scroll-snap reseñas. PENDIENTE: agregar prefers-reduced-motion en producción.
- Secciones reales (page.tsx/layout.tsx, mapa §1.3): Header → Hero → Strip métricas (Ice) → Segmentos (blanco) → Servicios (carrusel 3D + LogisticaNetworkCanvas) → Emprendedores (azul, desvío Ice) → CTA + Form → Comunidad Digital → Footer. Visión y Prueba Social: componentes existentes (VisionSection / SocialProofSection), NO montados.
```

---

*Spec de diseño tomada exclusivamente de `docs/informes/idear_diseño_index.html`, organizada por las secciones reales de `src/app/page.tsx` y `src/app/layout.tsx` (mapa en §1.3). La paleta del `@theme` de `src/app/globals.css` ya colapsa en Max `#0950F6`, alineada con el mockup; para implementar cada sección, resolver roles contra el `DESIGN.md` canónico del repo.*