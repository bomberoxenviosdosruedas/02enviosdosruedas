# Design System: Envíos DosRuedas (Sovereign Infrastructure & Heritage Logistics)

**Project ID:** `EnviosDosruedasDesignSystem_a2df0d`

> **Documento Maestro de Arquitectura Visual, Sistema de Diseño Semántico y Directrices de Generación (2026)**
> Fuente de verdad canónica para desarrollo, agentes de IA y generación de pantallas en Stitch. Integra los contratos de marca de [AGENTS.md](./AGENTS.md), los tokens reales de [src/app/globals.css](./src/app/globals.css) y las fichas de componentes de `docs/diseno/`.
> **Regla de precedencia:** si este documento contradice a `AGENTS.md`, manda `AGENTS.md`. Si contradice a `globals.css`, el token del CSS es el valor real y este documento debe corregirse (ver §11).

---

## 1. Overview: Visual Theme & Atmosphere

### 1.1 Calibración Sensorial (Taste Spectrum)

| Eje            | Valor | Lectura                                                                                                                                                                 |
| -------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Creativity** | 9/10  | Identidad urbana costera marplatense: señalética vial monumental, bloques de color duros, energía de afiche deportivo aplicada a un servicio logístico.                 |
| **Variance**   | 8/10  | Composición offset: Bento asimétrico 7/5/12, split de hero 7/5, knockout rotado -1°, slab amarillo sesgado sangrando por el borde. **El hero centrado está prohibido.** |
| **Motion**     | 7/10  | Coreografía fluida con física de resortes (`stiffness: 100, damping: 20`), reveals en cascada, micro-loops perpetuos en indicadores activos, tilt 3D en tarjetas hero.  |
| **Density**    | 6/10  | Equilibrio entre la precisión operativa de un panel logístico (métricas en mono, steppers) y la respiración de un servicio premium (secciones `py-24`, `max-w-prose`).  |

### 1.2 Narrativa de Atmósfera

Envíos DosRuedas proyecta la solidez, velocidad y confiabilidad de una infraestructura logística propia con 15+ años ininterrumpidos en las calles de Mar del Plata. La interfaz fusiona el rigor de la señalética vial y portuaria con la claridad de una plataforma de última milla contemporánea. Lienzos limpios en **Blanco Puro (`#FFFFFF`)** contrastan con bloques monumentales en **Azul Egipcio (`#0636A5`)** y una única señal de alta energía en **Amarillo Vial (`#FFEC01`)**. Todo suena a que ya está en movimiento: la tipografía empuja, los botones ofrecen resistencia táctil al click y las tarjetas flotan con elevación gravitacional real (sombras teñidas al tono del fondo, nunca grises).

**Vibe en una línea:** _logística urbana de precisión, industrial-moderno de alta velocidad, hablando en voseo._

### 1.3 Firma Geométrica & Elevación

- **Contenedores de Doble Capa (`double-bezel`):** Capa exterior en azul hielo suave (`rounded-2xl` / 16px, `bg-brand-blue-50/80`, `border border-brand-blue-100`, `p-2`, `shadow-float`) y núcleo interior (`rounded-xl` / 12px, `bg-white`, `p-6`, `border border-brand-blue-50/50`, `shadow-inner`).
- **Insignias de Velocidad:** Etiquetas y badges inclinados suavemente (`-rotate-1` / `rotate-1`).
- **Resplandor de Señal Vial:** Halos cálidos ámbar/amarillo (`shadow-accent-*`, `shadow-cta-glow`) y azul ultramar (`shadow-glow-blue`), nunca luces neón cibernéticas desvinculadas de la identidad.
- **Hero Card Media Vectorial:** la ilustración de hero es una pieza flat vector minimal corporate —formas geométricas puras, trazo redondeado de 4px, sombreado en dos tonos y paleta estricta de 3 colores con acento amarillo ≤ 15%— recortada sobre transparente y montada en la cabecera interior de la tarjeta tilt (§9.1). Es la "firma visual complementaria" de la marca.

---

## 2. Colors & Color Palette (Ley de Tres Colores & Paleta Oficial)

> **REGLA FUNDAMENTAL DE MARCA:** el sistema cromático utiliza **únicamente tres colores corporativos** —Azul Egipcio, Amarillo Vial y Blanco Puro— más sus escalas oficiales. Prohibidas las escalas genéricas de Tailwind (`slate-*`, `gray-*`, `zinc-*`, `neutral-*` —están remapeadas a azul y **no deben invocarse**), colores externos (`green-*`, `red-*` salvo el estado destructivo semántico) y hex inline arbitrarios.
>
> **Excepción documentada al límite de saturación:** el acento `#FFEC01` es 100% saturado por identidad de marca (señalética vial). Es la **única** excepción: no se agrega ningún segundo acento ni se intensifica el azul.

### 2.1 Tabla Maestra de Tokens Cromáticos

| Rol Semántico                   | Nombre Descriptivo     | Token Tailwind / CSS                         | Hex                      | Función en la Interfaz                                                                                                                                     |
| ------------------------------- | ---------------------- | -------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Primary / Trust**             | Egyptian Brand Blue    | `brand-blue-700` / `--color-brand-blue`      | `#0636A5`                | Header, footer, navegación, secciones invertidas, títulos H1/H2, marcos institucionales.                                                                   |
| **Surface Base**                | Pure Canvas White      | `brand-white-50` / `--surface-page`          | `#FFFFFF`                | Fondo de página, núcleo de tarjetas (`double-bezel-inner`), inputs, modales, tablas.                                                                       |
| **Soft Canvas / Outer Bezel**   | Ice Blue Tint          | `brand-blue-50` / `--surface-muted`          | `#E6EEFE`                | Marco exterior de tarjetas, secciones alternas suaves, fondo de skeleton.                                                                                  |
| **Structural Border**           | Blueprint Border       | `brand-blue-100` / `--border-subtle`         | `#BACEFD`                | Bordes de tarjetas e inputs (2px), divisores 1px, líneas inactivas de steppers.                                                                            |
| **Hover Border**                | Sky Blueprint          | `brand-blue-300`                             | `#628FF9`                | Borde del outer bezel en hover.                                                                                                                            |
| **Muted Text**                  | Steel Blue Muted       | `brand-blue-400` / `--text-muted`            | `#3570F8`                | Metadatos y eyebrows **≥ 18px** (4,35:1 sobre blanco). Texto chico, help text y placeholders usan `brand-blue-500` (6,0:1). Nunca para párrafos completos. |
| **Interactive Blue**            | Ultramarine Action     | `brand-blue-500` / `--focus-ring`            | `#0950F6`                | Botones secundarios, estado activo de navegación, **anillo de foco universal**.                                                                            |
| **Primary Hover**               | Royal Pressed          | `brand-blue-800` / `--action-primary-hover`  | `#052D8C`                | Hover de botones azules sólidos, dropdowns sobre header.                                                                                                   |
| **Accent / CTA Oficial**        | Electric Signal Yellow | `brand-yellow-500` / `--color-brand-yellow`  | `#FFEC01`                | **CTA primario oficial**, badges de alta prioridad, stepper dots activos/completos, franja footer 6px.                                                     |
| **Accent Hover**                | Signal Yellow Bright   | `brand-yellow-400` / `--action-accent-hover` | `#FFF12E`                | Hover de CTA primario y botón WhatsApp.                                                                                                                    |
| **Accent Pressed**              | Amber Flare            | `brand-yellow-600`                           | `#E6D400`                | Estado `:active` de CTA y badges de alta prioridad.                                                                                                        |
| **Accent Halo**                 | Pale Signal            | `brand-yellow-100`                           | `#FFFAB8`                | Anillo de stepper completado, fondo de badge "Flex".                                                                                                       |
| **Text on Accent**              | Deep Navy              | `brand-blue-900` / `--text-on-accent`        | `#04236B`                | Texto sobre amarillo (CTA primary, badges).                                                                                                                |
| **Body Ink**                    | Deep Blue Ink          | `brand-ink` / `--text-body`                  | `#00277C`                | Texto de cuerpo, párrafos, valores de inputs. Reemplaza al negro.                                                                                          |
| **Ultra Deep Void**             | Midnight Abyss         | `brand-blue-950`                             | `#021440`                | Footer profundo, overlays de modales críticos.                                                                                                             |
| **Glass on Blue**               | Atmospheric Mist       | `--surface-glass`                            | `rgba(255,255,255,0.06)` | Paneles flotantes sobre azul + `border: 1px solid rgba(255,255,255,0.12)` + `backdrop-blur-md`.                                                            |
| **Destructive (único externo)** | Alert Red              | `--action-danger`                            | `#EF4444`                | **Solo** bordes/anillos de error de formulario y acciones destructivas confirmadas. Jamás decorativo.                                                      |

### 2.2 Reglas de Aplicación

- **Sombras teñidas, nunca grises:** todas las sombras usan `rgba(0,39,124,α)` o `rgba(6,54,165,α)`; los CTAs amarillos usan bloom `rgba(255,236,1,α)` (`shadow-accent-*`, `shadow-cta-glow`). Nunca `rgba(0,0,0,…)`.
- **Amarillo = señal, no superficie:** nunca como fondo de secciones completas ni para párrafos de texto; sí para CTAs, badges, dots, subrayados, franjas ≤ 6px y knockouts.
- **Azul sobre azul:** en secciones invertidas el texto es blanco; los bordes `rgba(255,255,255,0.10)` (`--border-on-invert`); los acentos, amarillo.
- **Contraste mínimo AA:** `brand-ink` sobre blanco (13.3:1), blanco sobre `brand-blue-700` (10.1:1), `brand-blue-900` sobre `brand-yellow-500` (11.8:1). `brand-blue-400` sobre blanco (4.4:1) solo en texto ≥ 14px bold o ≥ 18px.

---

## 3. Typography Rules & Architecture

### 3.1 Familias Tipográficas Oficiales (cargadas vía `next/font/google`)

| Rol                                        | Familia                                                    | Token                              | Tratamiento                                                                                                                                                         |
| ------------------------------------------ | ---------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Display / Titulares de impacto**         | `Anton` (Anton SC como alias visual)                       | `font-display` / `--font-headline` | Uppercase obligatorio, `leading` 0.8–1.0 (`--leading-hero: 0.8`), tracking `-0.05em` a `-0.025em`, `text-wrap: balance`. H1, H2, cifras de impacto, ghost wordmark. |
| **Subtítulos / Labels / Badges / Botones** | `Bebas Neue`                                               | `font-subheading`                  | Uppercase obligatorio, tracking `0.05em`–`0.1em` (`tracking-wider`/`widest`), peso 700 visual. H3, eyebrows, nav, headers de tabla, texto de CTA, labels de input.  |
| **Cuerpo / UI**                            | `Outfit` (primaria) · `IBM Plex Sans` (fallback del stack) | `font-sans` / `--font-body`        | Sentence case, `leading-relaxed` (1.625), `max-w-prose` (~65ch), pesos 400–600. Párrafos, descripciones, inputs, tooltips, textos legales.                          |
| **Métricas / Tarifas / Tracking**          | `Geist Mono`                                               | `font-mono`                        | `font-variant-numeric: tabular-nums` siempre. Precios (`$4.600 ARS`), distancias (`3,7 km`), códigos de seguimiento, coordenadas, help text de inputs (10px).       |

> **Prohibido:** `Inter`, `Roboto`, `Arial` y cualquier system sans en contextos de marca; serifs genéricas (`Times New Roman`, `Georgia`, `Garamond`) en cualquier contexto. `Inter` aparece como fallback residual en `--font-sans` de `globals.css` y **debe eliminarse** del stack (ver §11).

### 3.2 Escala Jerárquica y Utilidades Responsive

Tokens (`@theme`): `--text-2xs: 0.625rem` (10px, eyebrows técnicos) · `--text-xs: 0.75rem` · `--text-sm: 0.875rem` · `--text-base: 1rem` · `--text-lg: 1.125rem` · `--text-xl: 1.25rem` · `--text-2xl: 1.5rem` · `--text-3xl: 1.875rem` · `--text-4xl: 2.25rem` · `--text-5xl: 3rem` · `--text-6xl: 3.75rem` · `--text-7xl: 4.5rem` · `--text-8xl: 6rem` · `--text-9xl: 9rem` (144px, display monumental en contacto/hero).

Utilidades fluidas (preferir sobre tamaños fijos por breakpoint):

```css
.text-display {
  font: var(--font-display);
  font-size: clamp(3rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-wrap: balance;
}
.text-h1 {
  font: var(--font-display);
  font-size: clamp(2.25rem, 4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
  text-wrap: balance;
}
.text-h2 {
  font: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-wrap: balance;
}
.text-h3 {
  font: var(--font-subheading);
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-wrap: pretty;
}
```

- La jerarquía se comunica por **familia + peso + color**, no solo por tamaño gigante. Un H2 `text-h2` en `brand-blue-700` sobre blanco pesa más que un H1 gris desvaído.
- Cuerpo mínimo `1rem` (16px); `text-sm` (14px) solo en controles y metadatos; `text-xs`/`text-2xs` solo en badges y eyebrows uppercase con tracking ancho.
- **Nunca Title Case** en oraciones; uppercase por regla en display/subheading, sentence case en cuerpo.

### 3.3 Tratamientos de Firma Tipográfica

1. **Knockout Rotado (-1°):** palabra clave con fondo `brand-yellow-500`, texto `brand-blue-900`, `px-3 py-1 rounded` y `transform: rotate(-1deg)`. Máximo una por titular. Sobre azul puede invertirse (fondo azul 700, letras amarillas).
2. **Titular Outline Transparente:** display itálico con relleno transparente y `-webkit-text-stroke: 2px #0636A5` (blanco sobre azul). Para la segunda línea de un H1, nunca para párrafos.
3. **Ghost Wordmark:** "ENVÍOS DOS RUEDAS" en `font-display text-[15vw] text-white/[0.035] whitespace-nowrap` detrás del hero, con `pointer-events-none select-none aria-hidden`. Textura, no contenido.
4. **Kinetic Font Stretch:** clase `.kinetic-font-stretch` en enlaces/CTAs clave: `transform: scaleX(1.1)` + `letter-spacing: 0.02em` en hover con `cubic-bezier(0.25, 1, 0.5, 1)` 400ms, `transform-origin: left`.
5. **Eyebrow + Cifra (StatBlock):** eyebrow `Bebas Neue text-2xs tracking-mega text-brand-blue-400` sobre cifra `Geist Mono tabular-nums text-3xl text-brand-blue-700`. Solo con datos reales (§9).

---

## 4. Hero Section (Primera Impresión)

La home y cada landing de servicio abren con un hero que debe ser **asimétrico, concreto y sin relleno**:

- **Estructura:** `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center` con **7/5** — columna izquierda (`lg:col-span-7`) para titular + promesa + CTA; columna derecha (`lg:col-span-5`) para la tarjeta tilt 3D (`FloatTiltCard`) —con su **Hero Card Media** (ilustración flat vector minimal corporate, transparente, en la cabecera interior de la tarjeta, §9.1)— o la foto del courier. Sobre fondo `brand-blue-700` con glow radial blanco centrado y blooms de amarillo al 10–18% con `blur(80–130px)`. Nunca centrado en desktop (`text-center` solo `< lg`).
- **Altura:** `min-h-[90dvh]` o `min-h-[100dvh]`. **Jamás `h-screen`** (salto catastrófico en iOS Safari).
- **Titular:** `font-display` uppercase en 2–3 líneas con **un** knockout rotado o **una** línea outline. Escala `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`, `leading-[0.95–1.0]`.
- **Tipografía con imagen inline (técnica de firma):** cuando haya fotografía real disponible, una foto pequeña (courier, caja, mapa MDQ) puede insertarse entre palabras del titular a la altura de la x, en `rounded-xl h-[0.8em] aspect-[4/3] object-cover`, con tinte `bg-brand-blue-700/10 mix-blend-multiply`. En mobile la imagen baja debajo del titular. Nunca con imágenes de stock genéricas ni placeholders rotos.
- **Badge de contexto:** pill `bg-brand-yellow-500 text-brand-blue-900 font-subheading text-xs uppercase tracking-widest` con dato real ("Mar del Plata · 15+ años · 2026").
- **Promesa + consecuencia:** un párrafo `text-lg text-white/85 max-w-prose` en voseo: _"Si no llegamos a la hora acordada, el envío corre por nuestra cuenta. Sin excusas."_
- **CTA:** **un solo** CTA primario (`CTANestedPill --primary`, "Cotizá tu envío"). Permitido un segundo enlace de texto plano hacia WhatsApp/tarifas, nunca un segundo botón compitiendo.
- **Prueba operativa:** fila de 3 chips `font-subheading text-sm uppercase` con hechos verificables ("Express en menos de 60 min", "Cobertura Gral. Pueyrredón", "Friuli 1972") — nunca métricas inventadas.
- **Prohibido en el hero:** "Scroll para explorar", flechas/chevrons rebotando, texto superpuesto a imágenes o a otro texto, partículas violetas, más de un acento amarillo grande, contadores de uptime.

---

## 5. Components & Component Stylings (Componentes & Primitivas UI)

Las primitivas viven en `src/components/ui/` (`DoubleBezelCard`, `CTANestedPill`, `InputField`, `RadioCardGroup`, `StepperHorizontal`, `StepperVertical`, `LogosCarousel`, `FloatTiltCard`, `BentoGrid`, `Badge`). **Las páginas deben consumirlas, no reimplementar el markup a mano.**

### 5.1 Buttons — CTA Nested Pill

- **Forma:** `rounded-full`, `font-subheading uppercase tracking-[.05em] font-bold`, `px-8 py-3` (large) / `px-4 py-2` (compact). Altura mínima 44px (56/64px en CTAs de marketing).
- **Icono anidado:** círculo `w-8 h-8` (32px) `rounded-full`, `transition: transform, background-color, color`; en hover `translateX(4px)`.
- **Variantes:**

| Variante                  | Fondo              | Texto            | Borde                | Icono reposo → hover                                            | Sombra reposo → hover                   |
| ------------------------- | ------------------ | ---------------- | -------------------- | --------------------------------------------------------------- | --------------------------------------- |
| `--primary`               | `brand-yellow-500` | `brand-blue-900` | —                    | `bg-brand-blue/10` → `bg-brand-blue/15` + `translateX(4px)`     | `shadow-accent-sm` → `shadow-cta-glow`  |
| `--elevated` (sobre azul) | `brand-white-50`   | `brand-blue-700` | `brand-blue-100`     | `bg-brand-blue/10 text-brand-blue` → `bg-brand-blue text-white` | `shadow-elevated` → `shadow-hover-lift` |
| `--outline`               | transparente       | `brand-blue-700` | `brand-blue-700` 2px | —                                                               | hover `bg-brand-blue-50`                |
| `--ghost`                 | transparente       | `brand-blue-700` | transparente         | —                                                               | hover `bg-brand-blue-50`                |

- **Hover primary:** fondo `brand-yellow-400`. **Active:** `scale-[.98] translateY(1px)` (primary) / `scale-[.98]` (elevated). Feedback táctil, sin glow exterior neón.
- **Focus-visible:** `ring-2 ring-brand-blue-500 ring-offset-2 ring-offset-white` (sobre azul: `ring-offset-brand-blue-700`).
- **Disabled:** `opacity-50 cursor-not-allowed`, sin hover.
- **WhatsApp CTA:** fondo **siempre** `brand-yellow-500`, hover `brand-yellow-400`, icono SVG blanco sobre amarillo o trazo interno verde solo en el glifo. **Nunca `green-*` como fondo.**
- **Loading:** spinner reemplazado por el texto "Calculando…" + icono anidado con `animate-pulse-subtle`; el ancho del botón no cambia (`min-w`).

### 5.2 Cards — Double Bezel System

/logo-envios-simplified.webp
/logo-envios-simplified.webp

```html
<div
  class="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float transition-all duration-300 hover:shadow-antigravity-deep hover:border-brand-blue-300"
>
  <div
    class="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-inner overflow-hidden"
  >
    <!-- contenido -->
  </div>
</div>
```

- **Outer:** `bg-brand-blue-50/80`, `border-brand-blue-100`, `rounded-2xl` (16px), `p-2` (8px), `shadow-float`. Hover: `shadow-antigravity-deep` + `border-brand-blue-300`.
- **Inner:** `bg-white`, `rounded-xl` (12px), `p-6`, `shadow-inner` suave, `overflow-hidden`.
- **Variante Dark (sobre azul):** el outer mantiene `bg-brand-blue-50` / `border-brand-blue-100` por legibilidad; alternativa glass: `--surface-glass` + `border-white/12` + `backdrop-blur-md`, `rounded-3xl`.
- **Cuándo NO usar tarjeta:** listados densos (tablas de tarifas, FAQ) usan `border-t border-brand-blue-100` + espacio negativo, no tarjetas apiladas.
- **Float / Tilt Card (hero 3D):** contenedor `perspective-1000`, card `preserve-3d`; mousemove → `rotateX(±8deg) rotateY(±8deg)` con lerp 0.1; hover `translateY(-6px) rotateX(4deg) rotateY(-2deg)` + `shadow-antigravity-deep`; capas internas `translateZ(10/40/70/80px)`. Se desactiva con `prefers-reduced-motion` y en touch.
- **Radio Card Group (selector de servicio):** `grid lg:grid-cols-3 grid-cols-1 gap-4`; card `bg-white border-2 border-brand-blue-100 rounded-xl p-6`, icon box `w-12 h-12 rounded-xl`. Checked Express: `bg-brand-blue-700 border-brand-blue-700 text-white`; checked LowCost: `bg-brand-blue-50 border-brand-blue-200 text-brand-blue-700`; checked Flex: `bg-brand-yellow-50 border-brand-yellow-200 text-brand-blue-700`. Input nativo visualmente oculto (`sr-only`), focus-visible en el label.

### 5.3 Inputs & Forms

- **Campo:** `h-11` (44px), `border-2 border-brand-blue-300 rounded-xl bg-white pl-10` (espacio para icono Lucide 20px a la izquierda; el borde necesita ≥ 3:1), texto `brand-ink`, placeholder `brand-blue-500`.
- **Estados:** hover `border-brand-blue-200`; focus `border-brand-blue-700 ring-2 ring-brand-blue-500/20`; error `border-[--action-danger] ring-2 ring-[--action-danger]/20` + `aria-invalid="true"`; disabled `bg-brand-blue-50/50 cursor-not-allowed`.
- **Label:** arriba del campo, `font-subheading uppercase tracking-[.05em] text-sm text-brand-blue-700 font-bold`. Sin floating labels.
- **Help text:** debajo, `font-mono text-[11px] text-brand-blue-500`. **Error text:** debajo, `font-sans text-sm` en `--action-danger`, con icono `AlertCircle` 16px, `role="alert"`.
- **Autocomplete de direcciones:** lista `bg-white border border-brand-blue-100 rounded-xl shadow-elevated`, opción activa `bg-brand-blue-50`; siempre con sugerencias reales de MDQ ("Güemes 3200", "Av. Constitución 5400", "Friuli 1972").
- **Gap vertical:** `space-y-1.5` dentro del wrapper, `gap-5` entre campos, `gap-8` entre grupos.

### 5.4 Steppers & Progress

- **Horizontal (cotizador):** línea 2px `brand-blue-100`; tramo completado `brand-yellow-500`. Círculos 40px: completed `bg-brand-yellow-500` + glifo `Check`; active `bg-brand-blue-700 ring-4 ring-brand-blue-500/30`; pending `bg-brand-blue-100`. Labels `font-subheading text-sm uppercase`.
- **Vertical (Cómo Funciona, sobre azul):** línea izquierda 2px `brand-blue-100`; dots 24px con borde blanco 3px. Completed `brand-yellow-500` + ring `brand-yellow-100`; active `brand-yellow-500` + ring `brand-yellow-500/30` + `animate-pulse-subtle`; pending `brand-blue-100`. Números `font-display text-h2`. **Nunca `green-500`.**

### 5.5 Badges, Chips & Status

- **Badge:** pill `px-3 py-1 rounded-full font-subheading text-xs uppercase tracking-widest font-bold`. Variantes: `accent` (`bg-brand-yellow-500 text-brand-blue-900`), `outline` (`border border-brand-blue-200 text-brand-blue-700`), `invert` (`bg-white/10 text-white border-white/15`), `flex` (`bg-brand-yellow-50 text-brand-blue-700 border-brand-yellow-200`).
- **Status dot:** 8px `bg-brand-yellow-500` + `box-shadow: 0 0 10px rgba(255,236,1,0.8)` + `animate-pulse-subtle` para "En camino"; `bg-brand-blue-300` estático para pendiente.

### 5.6 Navigation

- **Header:** `fixed top-0 z-50 bg-brand-blue-700`; al scrollear `bg-brand-blue-700/95 backdrop-blur-md shadow-elevated border-b border-white/10` y padding `py-4 → py-3`. Logo vectorial `/public/logo-envios-simplified.webp` ≥ 120px de ancho. Links `font-subheading uppercase tracking-wider text-base xl:text-lg text-white hover:text-brand-yellow-500`, activo con subrayado `link-animated` amarillo. Dropdown `bg-brand-blue-800/95 rounded-2xl border-white/15 shadow-2xl`.
- **Mobile nav (`< lg`):** botón hamburguesa 44px; panel full-height `bg-brand-blue-700` con items `py-4 text-2xl font-subheading`, CTA primary al pie, cierre con `Escape` y focus trap.
- **Footer:** `bg-brand-blue-950` con franja superior `h-1.5 bg-brand-yellow-500`; columnas 4/3/3/2 en desktop, 1 en mobile; datos reales (Friuli 1972 · 223 660-2699 · hola@enviosdosruedas.com).

### 5.7 Feedback States (Loading · Empty · Error)

- **Skeleton:** bloques con `shimmer-bg` (gradiente `brand-blue-50 → brand-blue-100 → brand-blue-50`, 2.5s) que **replican las dimensiones exactas** del layout final (misma altura de tarjeta, mismo número de líneas). Sin spinners circulares genéricos.
- **Empty state:** composición con icono Lucide 48px en `bg-brand-blue-50 rounded-2xl p-4`, título `text-h3`, una línea en voseo que dice qué hacer y el CTA correspondiente. Ej.: _"Todavía no cargaste envíos. Subí tu planilla o agregá el primero a mano."_ Nunca "No data".
- **Error state:** inline, junto al elemento que falló; `border-l-4` en `--action-danger` sobre `bg-white`, texto `brand-ink`, acción de reintento visible. Tono: _"No pudimos calcular la ruta. Revisá la dirección de destino e intentá de nuevo."_
- **Toast:** esquina inferior derecha, `bg-brand-blue-700 text-white rounded-xl shadow-elevated border-l-4 border-brand-yellow-500`, entra con spring desde abajo, auto-dismiss 5s con pausa en hover, `role="status"`.
- **Mapa (Leaflet) cargando:** skeleton con el mismo `aspect-[16/10] rounded-2xl` + etiqueta mono "Trazando ruta…".

### 5.8 Carousels & Media

- **Logos Carousel:** track `flex gap-12 animate-logos-scroll` (30s linear infinite, `translateX(-50%)` con contenido duplicado) bajo `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`. Items `h-12 grayscale contrast-[1.2] opacity-60`, hover/focus `grayscale-0 contrast-100 opacity-100`. **Pausa obligatoria** en hover, `focusin` y `document.hidden`; respeta `prefers-reduced-motion`.
- **Slider de servicios:** dots ≥ 44px de área táctil (el punto visual puede ser 8px dentro de un botón de 44px), flechas visibles en desktop, swipe en mobile.

---

## 6. Layout Principles & Whitespace Strategy

- **Contenedor:** `max-w-7xl` (1280px) `mx-auto px-4 sm:px-6 lg:px-8`. Secciones full-bleed para color, contenido contenido.
- **Ritmo vertical:** `py-[clamp(3rem,8vw,6rem)]` (`--spacing-section-y-tight: 3rem` → `--spacing-section-y: 6rem`). `gap-8` entre tarjetas, `gap-4` en filas de controles.
- **Grid sobre flexbox math:** layouts de sección con CSS Grid (`grid-cols-12`); nunca `calc()` con porcentajes ni `w-[33.33%]`.
- **Bento Asimétrico (Servicios):** `grid-cols-12 gap-6 lg:gap-8 auto-rows-[380px]`. Express y E-Commerce 3PL `lg:col-span-7`; LowCost y Flex `lg:col-span-5`; panel Cotizador `col-span-12`. Tablet `grid-cols-2`; mobile `grid-cols-1`.
- **Zig-Zag editorial:** para "beneficios"/"cómo funciona" alternar imagen/texto 5/7 y 7/5 por fila en vez de tres tarjetas iguales.
- **Sin superposición:** cada elemento ocupa su zona; nada de texto absoluto sobre otro texto ni imágenes pisando titulares. Lo único "detrás" es textura (ghost wordmark, blooms, slab sesgado) con `pointer-events-none aria-hidden`.
- **Alturas completas:** `min-h-[100dvh]` / `min-h-[90dvh]`. `h-screen` prohibido.
- **Ritmo cromático de la home (canon):**
  1. Hero — `brand-blue-700`, split 7/5, tilt card.
  2. Trust Bar — `brand-blue-50`, StatBlocks en Geist Mono (solo datos reales).
  3. Servicios — blanco, Bento + Double Bezel.
  4. Cómo Funciona — `brand-blue-700`, Stepper Vertical amarillo.
  5. Prueba Social — blanco, carrusel de comercios marplatenses.
  6. CTA Final — panel `brand-blue-700` con tarjeta blanca `rounded-3xl` y slab amarillo sesgado (`-skew-x-12`, amarillo al 10%) sangrando a la derecha.
  7. Footer — `brand-blue-950` con franja amarilla 6px.
     Nunca dos secciones azules consecutivas ni dos blancas consecutivas sin un separador tonal.

---

## 7. Responsive Rules

| Regla                           | Especificación                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Mobile-first collapse**       | `< 768px`: toda grilla multi-columna colapsa a una columna. Sin excepciones. Bento → stack en orden de lectura (Express, LowCost, Flex, 3PL, Cotizador).                 |
| **Sin scroll horizontal**       | Overflow lateral en mobile = fallo crítico. Tablas y bloques de código van dentro de `overflow-x-auto` propio; el ghost wordmark usa `overflow-hidden` en el contenedor. |
| **Tipografía**                  | Titulares con `clamp()` (`text-display`, `text-h1`…); cuerpo nunca `< 1rem`; badges `< 12px` solo uppercase con tracking.                                                |
| **Touch targets**               | Todo elemento interactivo ≥ 44×44px (botones, links de nav, dots de carrusel, iconos de input, chips de filtro).                                                         |
| **Imágenes**                    | `max-w-full h-auto`, `next/image` con `sizes`; fotos del hero inline bajan debajo del titular en mobile; tilt card pasa a `mt-4` estático sin 3D.                        |
| **Navegación**                  | Horizontal `≥ lg`; hamburguesa + panel full-screen `< lg`.                                                                                                               |
| **Espaciado**                   | Secciones `clamp(3rem, 8vw, 6rem)`; `gap-6 → gap-8` en `lg`; padding de tarjeta `p-5 → p-6`.                                                                             |
| **Breakpoints de verificación** | 320 · 375 · 768 · 1024 · 1280 · 1920 px.                                                                                                                                 |
| **Hero mobile**                 | `text-center` permitido solo `< lg`; CTA full-width (`w-full sm:w-auto`); badge arriba del titular.                                                                      |

---

## 8. Motion Philosophy & Spring Physics

- **Motor:** `motion/react` (Framer Motion 12) para entradas, menús, modales y layout; GSAP solo para timelines de canvas/hero procedural. Componentes animados aislados en Client Components pequeños (`'use client'`) para no arrastrar secciones enteras al cliente.
- **Resortes por defecto:** `transition={{ type: 'spring', stiffness: 100, damping: 20 }}` — peso físico, sin `linear`. Hovers CSS con `cubic-bezier(0.25, 1, 0.5, 1)` 300–500ms; bouncy solo en `hover-float` (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Orquestación en cascada:** listas y grillas nunca montan de golpe: `staggerChildren: 0.08`, `delayChildren: 0.1`, `whileInView` con `viewport={{ once: true, margin: '-80px' }}`; hijos `initial={{ opacity: 0, y: 16 }}`.
- **Micro-loops perpetuos (solo en lo activo):**
  - `animate-float-slow` — `translateY(-5px)` sinusoidal 4s, tarjetas hero y badges flotantes.
  - `animate-pulse-subtle` — `scale(1.03)` + opacidad 0.85, 3s, dots de estado y paso activo del stepper.
  - `animate-border-pulse` / `cta-pulse` — borde amarillo 0.3→0.8 alpha, 2s, CTA principal en reposo prolongado.
  - `animate-shimmer` — skeletons 2.5s.
  - `animate-logos-scroll` — 30s linear.
  - `animate-counter-up` — contadores de la Trust Bar, 0.8s `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Rendimiento:** animar **solo** `transform` y `opacity` (+ `box-shadow`/`border-color` en hovers cortos). Jamás `top`, `left`, `width`, `height`, `margin`. `will-change` solo en elementos que realmente animan. Grain/blooms en pseudo-elementos fijos, nunca en el flujo.
- **Kill-switch global obligatorio:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
  y `useReducedMotion()` en cada componente `motion` para degradar a fade simple. El tilt 3D y el carrusel se detienen por completo.
- **Duraciones:** micro 150–200ms · hover 300ms · entrada de sección 500–700ms · modales 350ms. Nada supera 800ms salvo loops.

---

## 9. Iconografía, Imagen y Logotipo

- **Iconos:** `lucide-react` exclusivamente; stroke 2px (1.75px en tamaños ≥ 32px); tamaños 16 / 20 / 24 / 48px; color heredado (`currentColor`). Sin emojis, sin icon packs mezclados. La flecha `→` (o glifo `ArrowRight`) es el único ornamento de texto permitido en CTAs y rutas ("Centro → Terminal").
- **Fotografía:** real, de couriers, cajas, calles y mapas de Mar del Plata; luz diurna cálida, saturación moderada, sin grano ni duotono. El azul se suma encima: `bg-brand-blue-700/10 mix-blend-multiply` o gradiente de protección `rgba(6,54,165,0.95) → 0.35` detrás de texto. Marcos `rounded-3xl shadow-2xl`, eventualmente `rotate-2`. Placeholders: `picsum.photos` o SVG propios; **nunca** enlaces rotos de Unsplash.
- **Logo:** solo `/public/logo-envios-simplified.webp` (vectorial). Ancho mínimo 120px web / 30mm impreso; zona de respeto = altura de la "D"; sobre azul usar la versión con wordmark blanco; nunca rasterizado, recoloreado, estirado ni con sombra.
- **Generación de imágenes (Nano Banana):** fotografía/escenas según la Estructura 1/2 de `AGENTS.md` (§Prompts de Imágenes; `docs/directrices_imagenes.md` aún no existe en el repo), referencias en `docs/imagenes/`, paleta `#00277C · #FFEC01 · #0636A5`, entorno MDQ. **Hero Card Media:** exclusivamente según §9.1 y `docs/imagenes/hero-derecha/PROMPTS.md`.
- **Dos carriles visuales, sin mezcla:** _fotografía real_ (secciones, imagen inline del titular, zig-zag) y _renders 3D isométricos modernos_ (Hero Card Media: diorama kit sobre tarjeta, estilo Blender Cycles / Octane depurado y sin texto). Prohibido flat vector genérico o ilustración 2D en el slot de Hero Card Media; los iconos Lucide de UI no cuentan como ilustración.

### 9.1 Hero Card Media — Renders 3D Isométricos de la Columna Derecha

Render **3D isométrico moderno en miniatura (diorama)** con fondo transparente recortado que vive dentro de la tarjeta de la columna derecha del hero (o en modo standalone en Contacto). Geometría simplificada, bordes biselados, materiales soft matte clay y satin plastic con brillos satinados sutiles, iluminación de estudio three-point y paleta corporativa estricta. Canon visual: evolución limpia de `public/card_mapa.webp` (**sin** su texto, logo rasterizado ni superficies grises). Complementa la tarjeta: muestra la narrativa física que el texto no muestra (topología de manzanas costeras, circuito consolidado, picking 3PL, equipo propio, despacho humano). **Nunca** repite cifras, precios, direcciones ni horarios que la tarjeta ya renderiza en código.

**Referencias de adaptación:** capturas de producción de `docs/imagenes/todos_heros/` (`hero_home.png`, `hero_envioexpress.png`, `hero_lowcost.png`, `hero_enviosflex.png`, `hero_plan-emprendedores.png`, `hero_cotizar_express.png`, `hero_cotizar_lowcost.png`, `hero_sobre-nosotros.png`, `hero_preguntas-frecuentes.png`, `hero_nuestras-redes.png`, `hero_contacto.png`).
**Fuente de verdad de prompts:** `docs/imagenes/hero-derecha/PROMPTS.md` (catálogo por slug + variantes B). **Pipeline:** `python docs/imagenes/hero-derecha/generate.py [slug ...]` → crudo chroma en `docs/imagenes/hero-derecha/chroma/<slug>.png` → recorte alfa (T0 60 / T1 140), despill de bordes magenta y optimización en `public/img/heroes/<slug>.{png,webp}`.

**Estructura de prompt obligatoria** (inglés, un bloque por línea):

```text
[Subject: narrativa visual en diorama isométrico complementaria al componente, usando el Kit 3D canónico] + [Style: Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look] + [Palette: fórmula cromática según superficie destino: dark, light o bright] + [Lighting: Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements] + [Composition: Isometric three-quarter view from 30 degrees above, centered, <aspect>, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide] + [Quality: 8k ultra-detailed, crisp clean edges, noise-free high-end product render] + [Background: Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout] + [Negative: base negativa canónica + exclusiones específicas]
```

**Slots (modos de montaje):**

| Modo                  | Dónde                                                       | Aspect | Contenedor                                                | Páginas                                                                                                   |
| --------------------- | ----------------------------------------------------------- | ------ | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `card-media` cuadrado | Centro de la tarjeta tilt, entre HUD pill y chips           | `1:1`  | `relative w-full aspect-square max-w-[340px] mx-auto`     | Home (reemplaza a `/card_mapa.webp`)                                                                      |
| `card-media` cabecera | Primer bloque del inner de la tarjeta, arriba del contenido | `4:3`  | `relative w-full aspect-[4/3] max-w-[400px] mx-auto mb-4` | Servicios (Express, LowCost, Flex, Emprendedores), Cotizar (Express, LowCost), Sobre Nosotros, FAQ, Redes |
| `standalone` compacto | Columna derecha sin tarjeta, encima de los canales          | `4:3`  | `relative w-full aspect-[4/3] max-w-[420px] mb-6`         | Contacto                                                                                                  |
| `standalone` vertical | Columna derecha completa                                    | `4:5`  | `relative w-full aspect-[4/5] max-w-[420px] mx-auto`      | Reservado: páginas legales / internas cuando tengan hero 7/5                                              |

**Superficie destino → regla de contraste y materiales** (define la línea `[Palette]`):

| Superficie | Fondo real                                              | Volúmenes principales | Caras superiores / highlights | Caras laterales / bisel                    | Regla de contraste                                              |
| ---------- | ------------------------------------------------------- | --------------------- | ----------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| `dark`     | Tarjeta `brand-blue-950` / `#052C87` / `brand-blue-900` | `#0950F6` · `#628FF9` | `#E6EEFE` · `#FFFFFF`         | `#0636A5` (navy `#00277C` solo en grietas) | Volúmenes claros y luminosos para recortar sobre el azul noche. |
| `light`    | Tarjeta `bg-white` (LowCost, Flex, Emprendedores)       | `#0636A5` · `#0950F6` | `#E6EEFE`                     | `#00277C` (navy en laterales y canto)      | Sin grandes volúmenes blancos; solidez contra tarjeta blanca.   |
| `bright`   | Sección `brand-blue-500` sin tarjeta (Contacto)         | `#FFFFFF` · `#E6EEFE` | `#FFFFFF`                     | `#0636A5` · `#00277C`                      | Sin grandes masas `#0950F6`; contrasta sobre el azul saturado.  |

Amarillo `#FFEC01` = único acento (cajones de moto, rutas tubulares emisivas, biseles de pin, top boxes), **≤ 15%** del sujeto (coherente con "un solo acento amarillo grande" de §4). Sin gris, carbón, degradados ajenos ni cromo/oro metálico.

**Kit 3D Canónico DosRuedas (vocabulario común):**

- **Diorama base:** `a rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge, like a chunk cut out of a miniature city map` (o navy edge en superficie `light`/`bright`).
- **City blocks:** `low matte blue city blocks of varied heights with pale-blue rooftops and narrow streets between them`.
- **Route:** `a thick glossy route tube in signal yellow with a tight emissive core, following the streets`.
- **Map pin:** `a faceted chunky map pin in bright blue with a signal-yellow bevelled rim, its face a smooth pale-blue disc`.
- **Courier scooter:** `a chunky toy-like delivery scooter in bright blue with a large rounded signal-yellow top box, ridden by a stylized faceless vinyl-toy courier in a blue jacket and pale-blue helmet`.
- **Parcel:** `rounded cardboard-shaped parcels in pale blue with a signal-yellow tape band`.
- **Coast:** `one diorama side ending in a strip of stylized glossy blue sea with soft rounded waves`.

**Estilo inquebrantable:** render 3D de diorama en miniatura, clay mate y plástico satinado, figuras de vinilo estilizadas sin rasgos faciales (sin personas reales). Anclas MDQ reconocibles por geometría (faro costero a rayas azules/blancas, mar atlántico, manzanas bajas). Sin texto, números, logos ni marcas externas (Mercado Libre, WhatsApp, Instagram, Google) dentro de la imagen.

**Reglas de recorte (chroma key):** fondo `#FF00FF` plano uniforme borde a borde; alternativo `#00B140` si el magenta contamina bordes celestes. Prohibido: glow desmedido, halos, semitransparencias descontroladas, sombras proyectadas sobre el fondo magenta, piso que llegue a los bordes. Margen vacío ≥ 8% en cada lado.

**Implementación en componentes:**

```tsx
<div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto mb-4">
  <Image
    src="/img/heroes/servicio-express.webp"
    alt=""
    fill
    priority
    sizes="(min-width: 1024px) 400px, 90vw"
    className="object-contain"
  />
</div>
```

- `next/image` con `fill` + `object-contain` (nunca `object-cover`: recortaría el margen de seguridad). `priority` porque e/logo-envios-simplified.webp
- **Alt:** `alt=""` (decorativa) cuando la tarjeta ya comunica el contenido — caso por defecto. Alt descriptivo en voseo solo en modo `standalone` sin texto equivalente.
- **Motion:** hereda el tilt/float de la tarjeta; sin animación propia salvo `hover:scale-[1.03]` (300ms, transform). Nada bajo `prefers-reduced-motion` ni en touch.
- **Sin superposición:** el render ocupa su propio bloque en el flujo; nunca `absolute` detrás o encima de texto de la tarjeta (§10.13).
- **Mobile (`< lg`):** se mantiene dentro de la tarjeta con `max-w-[320px]`; si la tarjeta se oculta en mobile, el render se oculta con ella.
- **Peso:** WebP ≤ 120 KB; lado corto del master ≥ 1024 px.

---

## 10. Anti-Patterns & Guidelines (Do's and Don'ts — Cero Tolerancia)

**Color y superficie**

1. Emojis en UI o copy (solo iconos Lucide).
2. Negro puro `#000000` (usar `brand-ink #00277C` o `brand-blue-950 #021440`).
3. Escalas `slate/gray/zinc/neutral`, hex inline, segundo acento, "AI purple/cyan neon", degradados cibernéticos, glow exterior neón.
4. Verde en steppers, CTA de WhatsApp o cualquier fondo (`#10B981`, `green-*`); amarillo off-brand (`#FFCC00`, `#E6B800` como fondo plano).
5. Sombras grises `rgba(0,0,0,…)`; gradiente de texto en titulares grandes.

**Tipografía y copy** 6. `Inter`, system sans, serifs genéricas; Title Case en oraciones; inglés en copy de cara al cliente. 7. Clichés de IA: "Elevá tu logística", "Seamless", "Unleash", "Next-Gen", "Soluciones integrales 360°". Usar voseo concreto con promesa + consecuencia. 8. Nombres genéricos ("Juan Pérez", "Acme", "Empresa S.A."); usar anclas reales de MDQ ("Friuli 1972", "Zona Güemes", "Playa Grande", "Punta Mogotes", "Batán"). 9. Formato `ETIQUETA // 2026` decorativo; eyebrows vacíos. 10. Métricas inventadas ("99.99% uptime", "124ms", "18.5k envíos") y secciones "By the numbers" con datos ficticios. Si no hay dato real: `[métrica]` como placeholder explícito.

**Layout e interacción** 11. Hero centrado en desktop; "Scroll para explorar", chevrons rebotando, flechas de scroll. 12. Tres tarjetas idénticas en fila; grillas simétricas de features. 13. Elementos superpuestos (texto sobre texto, contenido absoluto apilado); `h-screen`; `calc()` con porcentajes; overflow horizontal en mobile. 14. Cursores personalizados; spinners circulares genéricos; "No data" como empty state. 15. Más de un CTA primario por pantalla; botones "Saber más" sin destino concreto. 16. Logo rasterizado (`.webp/.png`), menor a 120px o recoloreado. 17. Borde lateral grueso en tarjetas (`side-tab` / `border-l-4` o similar): cliché visual de IA que rompe la limpieza de superficie. Usar el sistema canónico `double-bezel` o separadores tonales limpios. 18. Animaciones de rebote (`bounce-easing` / `animate-bounce` / curvas elásticas): transmiten desprolijidad e inestabilidad; usar resortes físicos (`stiffness: 100, damping: 20`) o curvas exponenciales controladas. 19. Animación de propiedades de layout (`layout-transition`): animar `width`, `height`, `padding` o `margin` provoca layout thrash; animar únicamente `transform` y `opacity`.

**Imagen de hero** 20. Hero Card Media con texto, cifras, logos o marcas externas dibujadas; render que repite los datos que la tarjeta ya muestra; mezclar flat vector o ilustración 2D en el slot de Hero Card Media; superficies grises, carbón, degradados ajenos a la paleta o cromo/oro metálico; fondo no transparente, halo o sangrado magenta/verde; siluetas navy sobre tarjeta oscura (sin contraste) o siluetas blancas sobre tarjeta blanca; más de un acento amarillo dominante (máx 15%); `object-cover` sobre el render (§9.1).

---

## 11. Deuda de Adherencia Conocida (Auditoría Técnica Impeccable 2026-09-15)

Para que los agentes no "corrijan" el spec hacia el bug, se registra lo que el código aún no cumple:

| Área                                     | Estado real                                                                                                                                                                                                                                                                                                                                          | Acción esperada                                                                                                                                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Borde lateral AI (`side-tab`)            | Detectado `border-l-4` en 12 componentes (`LowCostFeatures`, `FlexFeatures`, `ExpressFeatures`, `AboutHero`, etc.).                                                                                                                                                                                                                                  | Reemplazar por tarjetas limpias con `double-bezel` o espaciado tonal sin bordes asimétricos gruesos.                                                                                                                             |
| Curvas de rebote (`bounce-easing`)       | `animate-bounce` en `NewsletterSubscribe` y `LeafletRouteMap`; `cubic-bezier(0.34, 1.56, 0.64, 1)` en `globals.css`.                                                                                                                                                                                                                                 | Migrar a resortes de Framer Motion o easing exponencial suave (`cubic-bezier(0.25, 1, 0.5, 1)`).                                                                                                                                 |
| Animación de ancho (`layout-transition`) | `transition: width` en barra de progreso de `globals.css` (línea 508).                                                                                                                                                                                                                                                                               | Animar `transform: scaleX()` con `transform-origin: left`.                                                                                                                                                                       |
| Primitivas UI                            | 8 de 11 primitivas de `src/components/ui/` son código muerto; las páginas reimplementan el markup.                                                                                                                                                                                                                                                   | Migrar páginas a las primitivas, no borrar las primitivas.                                                                                                                                                                       |
| `@utility cta-nested-icon`               | Define `w/h 1.75rem` (28px); el contrato dice 32px (`2rem`).                                                                                                                                                                                                                                                                                         | Alinear la utility en `globals.css` a `w-8 h-8` (`2rem`) y `bg-brand-blue/10`.                                                                                                                                                   |
| Fuentes                                  | `Inter` figura como fallback residual en `--font-sans`; `IBM Plex Sans` no se carga vía `next/font`.                                                                                                                                                                                                                                                 | Quitar `Inter`; cargar IBM Plex Sans o consolidar exclusivamente `Outfit` como primaria.                                                                                                                                         |
| `h-screen`                               | 18 usos en `src/`.                                                                                                                                                                                                                                                                                                                                   | Reemplazar por `min-h-[100dvh]`.                                                                                                                                                                                                 |
| Logo en header                           | `/logo-envios-simplified.webp` rasterizado a 40px en algunos componentes legacy.                                                                                                                                                                                                                                                                     | Usar exclusivamente `/logo-envios-simplified.webp` ≥ 120px.                                                                                                                                                                      |
| Reduced motion                           | Cobertura parcial en componentes motion; falta formalizar el kill-switch global en `globals.css`.                                                                                                                                                                                                                                                    | Incorporar el media query estricto de §8 en `globals.css` y `useReducedMotion()`.                                                                                                                                                |
| Focus-visible                            | Cobertura ~20%; header con anillo amarillo sobre azul.                                                                                                                                                                                                                                                                                               | Extender cobertura con `focus-ring-brand` y formalizar anillo amarillo (`ring-brand-yellow-500`) sobre azul.                                                                                                                     |
| Colores off-brand                        | `#10B981` en `RevisarClient.tsx`; `#FFCC00` ×10 en `LogisticaNetworkCanvas.tsx`.                                                                                                                                                                                                                                                                     | Reemplazar por `brand-yellow-500` / tokens oficiales.                                                                                                                                                                            |
| Home vs canon §6                         | Falta "Cómo Funciona"; alternancia de fondos invertida.                                                                                                                                                                                                                                                                                              | Reordenar secciones según el ritmo canónico.                                                                                                                                                                                     |
| Archivos huérfanos                       | ~14 componentes sin uso con métricas falsas/copy en inglés (`HeroSection.tsx`, `cinematic-hero`, `demo.tsx`).                                                                                                                                                                                                                                        | Eliminar, no corregir.                                                                                                                                                                                                           |
| Tarifas B2B                              | Flex y Emprendedores muestran precios sin fila en `PricingRange`.                                                                                                                                                                                                                                                                                    | Decisión de negocio pendiente; no inventar valores.                                                                                                                                                                              |
| Hero Card Media (§9.1)                   | Solo Home tiene imagen en la tarjeta y es un render 3D rasterizado legacy (`/card_mapa.webp`). Los otros 10 heroes no tienen slot en código aún. Catálogo de prompts 3D isométricos actualizado y optimizado en `PROMPTS.md` con variantes B a partir de capturas en `todos_heros/`. Assets aún no generados (`GEMINI_API_KEY` sin cuota de imagen). | Generar con `docs/imagenes/hero-derecha/generate.py`, reemplazar `card_mapa.webp` por `home.webp` (render 3D diorama transparente depurado) e incorporar el slot `card-media` cabecera 4:3 (y central 1:1 en Home) en cada hero. |
| CTA WhatsApp verde                       | `FaqHero.tsx`: botón "Preguntanos por WhatsApp" con fondo verde (captura 2026-09-16).                                                                                                                                                                                                                                                                | `brand-yellow-500` / hover `brand-yellow-400` (§12, WhatsApp CTA).                                                                                                                                                               |
| Páginas sin hero 7/5                     | `politica-de-privacidad`, `terminos-y-condiciones`, `admin/imagenes`, `revisar` no tienen columna derecha.                                                                                                                                                                                                                                           | Prompts `standalone 4:5` listos en `PROMPTS.md` §Pendientes; no generar hasta que exista el hero.                                                                                                                                |

---

## 12. Bloque de Sistema de Diseño para Stitch & Subagentes

```markdown
**DESIGN SYSTEM SPECIFICATION — ENVÍOS DOSRUEDAS (2026):**

- **Brand Colors (STRICT 3-COLOR RULE):**
  - Primary: Egyptian Blue `#0636A5` (`brand-blue-700`) — dark section canvas, nav, footer, H1/H2, institutional borders.
  - Accent / CTA: Electric Signal Yellow `#FFEC01` (`brand-yellow-500`; hover `#FFF12E`, pressed `#E6D400`) — primary buttons, badges, completed/active stepper dots, live status glow, 6px footer stripe. Signal, never a surface.
  - Surface Base: Pure White `#FFFFFF` — page background, card inner cores, inputs, modals.
  - Soft Tint: Ice Blue `#E6EEFE` (`brand-blue-50`) — outer card bezel, alternate sections, skeletons.
  - Structural Border: `#BACEFD` (`brand-blue-100`); hover border `#628FF9` (`brand-blue-300`).
  - Focus ring / interactive: Ultramarine `#0950F6` (`brand-blue-500`).
  - Body text: Deep Ink `#00277C` (`brand-ink`); text on yellow: `#04236B` (`brand-blue-900`); muted: `#3570F8` (`brand-blue-400`); deepest: `#021440` (`brand-blue-950`).
  - Destructive only: `#EF4444` for form errors. Shadows always tinted `rgba(0,39,124,α)` / `rgba(255,236,1,α)`, never gray.
  - FORBIDDEN: slate/zinc/gray/neutral, green CTAs or steppers, purple/neon, pure black, inline hex, second accent.
- **Typography (loaded via next/font):**
  - H1/H2 & impact figures: `Anton`, uppercase, line-height 0.8–1.0, letter-spacing -0.05em to -0.025em, `text-wrap: balance`. Fluid: `clamp(3rem, 5vw, 4.5rem)` display / `clamp(2.25rem, 4vw, 3rem)` H1 / `clamp(1.75rem, 3vw, 2.25rem)` H2.
  - H3, eyebrows, badges, nav, button text, input labels: `Bebas Neue`, uppercase, tracking 0.05–0.1em.
  - Body & UI: `Outfit`, sentence case, line-height 1.625, max 65ch, min 16px.
  - Prices, distances, tracking codes, help text: `Geist Mono`, tabular-nums (`$4.600 ARS`, `3,7 km`).
  - Signature treatments: one yellow-on-blue knockout rotated -1° per headline; transparent outline line (`2px #0636A5` stroke); ghost wordmark "ENVÍOS DOS RUEDAS" at 15vw / 3.5% white behind hero.
  - BANNED: Inter, system sans, generic serifs, Title Case sentences, English customer copy.
- **Hero:** asymmetric 7/5 grid on `#0636A5` with radial white glow + yellow blooms (10–18%, blur 80–130px); `min-h-[90dvh]`; left column = badge + 2–3 line Anton headline (one knockout) + one-paragraph promise + ONE primary CTA + 3 factual chips; right column = 3D tilt card (with Hero Card Media: transparent modern 3D isometric diorama render in the card header, 1:1 on home / 4:3 elsewhere, `next/image fill object-contain`, `alt=""`, complements card data and never repeats it) or real courier photo. Optional inline photo between headline words (rounded, x-height, stacks below on mobile). No centered hero on desktop, no scroll prompts, no overlapping.
- **Signature Components:**
  - Double Bezel Card: outer `bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300` wrapping inner `bg-white rounded-xl p-6 shadow-inner overflow-hidden`.
  - CTA Nested Pill: `rounded-full uppercase font-subheading tracking-[.05em] bg-brand-yellow-500 text-brand-blue-900 px-8 py-3 min-h-[44px]` + nested 32px circular icon `bg-brand-blue/10` translating `translateX(4px)` on hover; active `scale-[.98] translateY(1px)`; focus `ring-2 ring-brand-blue-500 ring-offset-2`. Elevated variant on blue: white bg, blue text, `border-brand-blue-100`.
  - Inputs: `h-11 border-2 border-brand-blue-300 rounded-xl pl-10`, label above in Bebas uppercase, mono 11px help text in brand-blue-500, red error text below with `role="alert"`.
  - Steppers: completed & active = `brand-yellow-500` (NEVER green); horizontal 40px circles, vertical 24px dots with 3px white border + `pulse-subtle` on active.
  - Radio Card Group: 3 cols desktop / 1 mobile; checked Express = solid blue-700, checked LowCost = blue-50, checked Flex = yellow-50.
  - WhatsApp CTA: background ALWAYS `brand-yellow-500`, hover `brand-yellow-400`; green only inside the SVG glyph.
  - Glass on blue: `rgba(255,255,255,0.06)` + `1px solid rgba(255,255,255,0.12)` + `backdrop-filter: blur(12px)`, `rounded-3xl`.
  - Loading = layout-matching shimmer skeletons (blue-50→blue-100, 2.5s); empty states = Lucide icon tile + voseo instruction + CTA; errors inline with retry.
  - Logos carousel: 30s linear infinite, edge mask 10%/90%, grayscale 60% → color on hover, paused on hover/focus/hidden.
- **Layout:** `max-w-7xl` container; sections `py-[clamp(3rem,8vw,6rem)]`; 12-col asymmetric Bento (7/5/12, `auto-rows-[380px]`, `gap-6 lg:gap-8`); zig-zag 5/7 rows instead of equal 3-card rows; CSS Grid, no `calc()` percentages; `min-h-[100dvh]` never `h-screen`; strict single column < 768px; no horizontal overflow; touch targets ≥ 44px; no overlapping elements.
- **Motion:** springs `stiffness 100, damping 20`; stagger `0.08s`; `whileInView once`; perpetual loops only on active elements (`float-slow` 4s, `pulse-subtle` 3s, `border-pulse` 2s, `logos-scroll` 30s); transform/opacity only; full `prefers-reduced-motion` kill-switch; tilt/carousel disabled on reduced motion and touch.
- **Icons & imagery:** Lucide only (16/20/24/48px, 2px stroke); real Mar del Plata courier photography with blue multiply tint in `rounded-3xl` frames; logo = `/logo-envios-simplified.webp` ≥ 120px; placeholders via picsum/SVG, never broken links.
- **Hero renders (Hero Card Media):** modern 3D isometric miniature diorama renders only, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry. Prompts from `docs/imagenes/hero-derecha/PROMPTS.md` with structure `[Subject] [Style: Modern 3D isometric miniature diorama render] [Palette] [Lighting: Soft studio three-point] [Composition: centered] [Quality: 8k ultra-detailed] [Background: chroma #FF00FF] [Negative]`. Palette by target surface — dark card: bright-blue/sky-blue volumes, pale-blue/white tops, egyptian-blue sides; white card: egyptian-blue/bright-blue volumes, navy sides, pale-blue tops; bright-blue section: white/pale-blue volumes, navy sides. Yellow `#FFEC01` single accent ≤ 15%. No text, numbers, logos, external brands, realistic humans/faces, grey/charcoal or metal.
- **Language & Tone:**
  - Argentinian Spanish with strict voseo: "Cotizá tu envío", "Ingresá origen y destino", "Contactanos", "Rastreá tu paquete". Promise + consequence: "Si no llegamos a la hora acordada, el envío corre por nuestra cuenta. Sin excusas."
  - Mar del Plata anchors: "Friuli 1972", "Zona Güemes", "Playa Grande", "Punta Mogotes", "Batán", "Camet", "Puerto". Contact: 223 660-2699 · hola@enviosdosruedas.com.
  - Prices only from the 2026 table (Express 0–3 km $3.700 … LowCost 0–3 km $3.000 …), dot thousands + "ARS". Reference year 2026. No invented metrics — use `[métrica]` if unknown.
```
