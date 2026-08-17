# Design System: Envíos DosRuedas (Sovereign Infrastructure & Heritage Logistics)

> **Documento Maestro de Arquitectura Visual y Sistema de Diseño (2026)**  
> Integra las especificaciones de marca de `AGENTS.md`, las fichas de diseño de `docs/diseno/`, tokens de `src/app/globals.css` y las directrices operativas para Mar del Plata.

---

## 0. Principios de Marca Inmutables (NO NEGOCIABLES)

> **Estas reglas son ley de cumplimiento estricto. Cualquier excepción requiere ADR documentado y aprobación de Brand + Product.**

### 0.1 Logotipo — INALTERABLE
| Regla | Especificación |
|---|---|
| **Archivo maestro** | `/public/logo-master.svg` (vectorial, sin fondo, safe-area 20% perimetral) |
| **Colores permitidos** | Solo: **Azul #0636A5** (primary), **Blanco #FFFFFF** (reverso), **Amarillo #FFEC01** (en marca compuesta oficial) |
| **PROHIBIDO ABSOLUTO** | Recolorear, estirar (aspect-ratio fijo 1:0.45), añadir sombras/glows externos, colocar sobre fondos ruidosos sin safe-area, usar versiones rasterizadas (`.webp`, `.png`, `.jpg`) salvo fallback técnico documentado |
| **Tamaño mínimo** | **120px ancho** (web), **30mm** (print) |
| **Clear space** | 0.25× altura del logotipo en todos los 4 lados |
| **Lockup tipográfico** | Logomarca + Wordmark en **Anton SC / Anton** uppercase: *"Envios"* en blanco y *"Dosruedas"* en amarillo (sobre azul), o ambos en azul (sobre fondo blanco) |

---

### 0.2 Paleta — LEY DE TRES COLORES
El sistema cromático usa **SOLO TRES COLORES CORPORATIVOS**: **Azul, Amarillo y Blanco** (y sus escalas oficiales remapeadas).

| Rol de Marca | Token CSS | Token Tailwind | Hex | Uso Principal |
|---|---|---|---|---|
| **Principal / Confianza** | `--brand-blue` / `--color-primary` | `brand-blue-700` | `#0636A5` | Headers, footers, navegación, secciones invertidas oscuras, títulos principales, bordes institucionales |
| **Acento / CTA / Señalética** | `--brand-yellow` / `--color-accent` | `brand-yellow-500` | `#FFEC01` | Botones primarios (CTAs), badges destacados, status dots activos, ribbons de plan recomendado, focus rings |
| **Lienzo / Superficie / Claridad** | `--brand-white` / `--color-surface` | `brand-white-50` | `#FFFFFF` | Fondo base de páginas, tarjetas blancas (inner core), inputs, modales, tablas de tarifas |

**Escalas Oficiales Aprobadas (`globals.css` / `tailwind.config.ts`):**
- **Azul:** `brand-blue-50` (`#E6EEFE`) → `brand-blue-700` (`#0636A5`) → `brand-blue-950` (`#021440`)
- **Amarillo:** `brand-yellow-50` (`#FFFDE6`) → `brand-yellow-500` (`#FFEC01`) → `brand-yellow-600` (`#E6D400`) — *(Alternativa de acento: `#FFF12E` / `#FFE200`)*
- **Blanco:** `brand-white-50` (`#FFFFFF`)

**🚫 PROHIBICIONES ESTRICTAS (CERO TOLERANCIA):**
```css
/* PROHIBIDO: Paletas genéricas de Tailwind */
slate-*, gray-*, zinc-*, neutral-*, stone-*
/* PROHIBIDO: Hex inline arbitrarios sin token */
#333, #f5f5f5, #666, #999, #ccc, #eee, #111
/* PROHIBIDO: Fondos oscuros de slate (ej. bg-slate-900) */
/* PROHIBIDO: Degradados decorativos no autorizados */
```

---

### 0.3 Voz y Tono — Voseo Rioplatense Obligatorio
| Acción | ✅ Forma Correcta | ❌ Prohibido |
|---|---|---|
| Cotizar | **Cotizá** | Cotice, Calcule |
| Enviar | **Enviá** | Envíe, Envie |
| Rastrear | **Rastreá** | Rastree, Siga |
| Contactar | **Contactanos / Escribinos** | Contáctenos, Contacte |
| Ingresar | **Ingresá** | Ingrese |
| Elegir | **Elegí** | Elija |
| Ver | **Mirá / Conocé** | Vea, Conozca |

- **Persona:** *"Nosotros"* para la empresa, *"Vos / Tu"* para el usuario.
- **Tono:** Rápido, contundente, orientado a pruebas y garantías: *"Sin formularios complejos ni esperas"*, *"Diseñado para la velocidad"*, *"Sin excusas"*.
- **Geolocalización MDQ:** Friuli 1972 (Hub central), Zona Güemes, Playa Grande, Punta Mogotes, Chauvín, Puerto, Constitución, Batán, Camet.
- **Año Operativo:** **2026** siempre en tarifas, vigencias y textos.

---

## 1. Tokens de Color & Variables Semánticas

### 🔵 Azul EnviosDosruedas
```css
--color-blue-50:  #E6EEFE; /* Outer bezel, fondos suaves, overlays */
--color-blue-100: #BACEFD; /* Bordes estructurales, divisores, líneas inactivas */
--color-blue-200: #8EAFFB; /* Bordes hover, enlaces secundarios */
--color-blue-300: #628FF9; /* Texto secundario sobre fondo oscuro, iconos suaves */
--color-blue-400: #3570F8; /* Acciones intermedias */
--color-blue-500: #0950F6; /* Botones interactivos activos, focus ring */
--color-blue-600: #0742CA; /* Hover intermedio */
--color-blue-700: #0636A5; /* PRIMARY OFICIAL — Marca, fondos oscuros, cabeceras */
--color-blue-800: #052D8C; /* Hover sobre primary */
--color-blue-900: #04236B; /* Texto de máximo contraste sobre blanco */
--color-blue-950: #021440; /* Fondo ultra profundo (footer, modales) */
--color-blue-ink: #00277C; /* Texto de cuerpo de alta legibilidad */
```

### 🟡 Amarillo EnviosDosruedas
```css
--color-yellow-50:  #FFFDE6; /* Fondos de alerta y badges suaves */
--color-yellow-100: #FFFAB8; /* Bordes de atención, anillos de stepper */
--color-yellow-200: #FFF78A; /* Badges de estado e indicadores de ruteo */
--color-yellow-300: #FFF45C; /* Hover sobre fondo azul 700 */
--color-yellow-400: #FFF12E; /* Hover sobre fondo blanco */
--color-yellow-500: #FFEC01; /* ACCENT / CTA OFICIAL — Botones de acción, status glow */
--color-yellow-600: #E6D400; /* Active / Pressed state */
```

### ⚪ Blanco & Superficies
```css
--color-white-50:   #FFFFFF; /* Superficie base, cards inner, inputs, modales */
--surface-page:     #FFFFFF; /* Lienzo de página */
--surface-card:     #FFFFFF; /* Núcleo de tarjetas */
--surface-muted:    #E6EEFE; /* Secciones alternadas suaves */
--surface-invert:   #0636A5; /* Secciones oscuras de marca */
--surface-glass:    rgba(255, 255, 255, 0.06); /* Tarjetas glassmorphism sobre azul */
--surface-tint-blue:#F0F4FF; /* Fondo panel tintado */
```

### 🎯 Alias Semánticos de Componentes
```css
--action-primary:       var(--color-blue-700);
--action-primary-fg:    #FFFFFF;
--action-primary-hover: #052D8C;

--action-accent:        var(--color-yellow-500);
--action-accent-fg:     var(--color-blue-900);
--action-accent-hover:  #FFF12E;

--text-heading:         var(--color-blue-700);
--text-body:            var(--color-blue-ink);
--text-muted:           var(--color-blue-400);
--text-on-invert:       #FFFFFF;
--text-on-accent:       var(--color-blue-900);

--border-subtle:        var(--color-blue-100);
--border-strong:        var(--color-blue-200);
--border-on-invert:     rgba(255, 255, 255, 0.12);
--focus-ring:           var(--color-blue-500);
```

---

## 2. Tipografía & Tratamientos Display

### 2.1 Fuentes Oficiales
| Rol | Familia | Fallback | Peso | Uso |
|---|---|---|---|---|
| **Display / Titulares** | `Anton` / `Anton SC` | `Bebas Neue`, sans-serif | 700-800 | H1, H2, cifras de impacto monumental (signalética vial) |
| **Subtitulares / UI Badges** | `Bebas Neue` | `IBM Plex Sans`, sans-serif | 600-700 | Subtítulos, badges, botones CTA, etiquetas, headers de tabla |
| **Cuerpo / Textos UI** | `Outfit` + `IBM Plex Sans` | `Inter`, system-ui, sans-serif | 400-600 | Párrafos, inputs, descripciones, tooltips |
| **Mono / Métricas / Tarifas** | `Geist Mono` | `JetBrains Mono`, monospace | 500-700 | Tarifas (`$4.600 ARS`), tracking IDs, distancias (`tabular-nums`) |

### 2.2 Escala Tipográfica (Fluid Clamp & Interlineado)
| Token | Tamaño | Line-Height | Tracking | Uso |
|---|---|---|---|---|
| `--text-9xl` | `9rem` (144px) | `0.8` (`--leading-hero`) | `-0.05em` | Hero display monumental |
| `--text-8xl` | `6rem` (96px) | `0.85` | `-0.05em` | Impact display |
| `--text-7xl` | `4.5rem` (72px) | `1.0` | `-0.05em` | H1 principal |
| `--text-5xl` | `3rem` (48px) | `1.0` | `-0.025em` | H2 de sección |
| `--text-3xl` | `1.875rem` (30px) | `1.1` | `-0.025em` | H3 de tarjeta |
| `--text-xl` | `1.25rem` (20px) | `1.25` (`--leading-tight`)| `0.05em` | Subheadings (`font-subheading`) |
| `--text-base` | `1rem` (16px) | `1.625` (`--leading-relaxed`)| `0` | Párrafos base |
| `--text-sm` | `0.875rem` (14px) | `1.5` | `0` | Textos secundarios y controles |
| `--text-xs` | `0.75rem` (12px) | `1.2` | `0.05em` | Badges, micro-copy |
| `--text-2xs` | `0.625rem` (10px) | `1.0` | `0.2em` (`--tracking-mega`)| Eyebrows en mayúsculas |

### 2.3 Tratamientos Tipográficos de Firma
1. **Knockout Amarillo sobre Azul con Rotación (-1°):**  
   Texto con `background: var(--brand-blue); color: var(--brand-yellow); padding: 0 8px; display: inline-block; transform: rotate(-1deg)`.
2. **Titular Outline Transparente con Trazo Azul:**  
   Texto itálico display con `color: transparent; -webkit-text-stroke: 2px #0636A5`.
3. **Ghost Wordmark Gigante de Fondo:**  
   `"ENVÍOS DOS RUEDAS"` en Anton uppercase con `font-size: 15vw`, `opacity: 0.045`, centrado detrás del contenido hero.
4. **Kinetic Font Stretch en Hover:**  
   Elementos interactivos destacados aplican `transform: scaleX(1.08)` y `letter-spacing: 0.04em` en estado hover con transición suave.

---

## 3. Escala de Controles, Radios y Espaciado

### 3.1 Altura de Controles (Control Heights Ladder)
| Nivel | Token | Altura | Padding X | Uso |
|---|---|---|---|---|
| **Micro / Small** | `--control-h-sm` | `36px` (2.25rem) | `12px` (`px-3`) | Botones compactos, filtros, pills de tabla |
| **Default UI** | `--control-h` | `40px` (2.5rem) | `16px` (`px-4`) | Botones estándar, selectores secundarios |
| **Touch Target Standard** | `--control-h-lg` | `44px` (2.75rem) | `20px` (`px-5`) | Inputs de formulario, botones estándar mobile |
| **Marketing CTA** | `--control-h-xl` | `56px` (3.5rem) | `32px` (`px-8`) | CTAs principales de navegación y cotizador |
| **Hero CTA** | `--control-h-2xl` | `64px` (4.0rem) | `40px` (`px-10`) | Botón principal de conversión en Hero |

### 3.2 Escala de Bordes Redondeados (Border Radii)
| Token | Valor | Uso |
|---|---|---|
| `--radius-none` | `0px` | Botones sharp de navbar, terminales |
| `--radius-sm` | `6px` / `0.375rem` | Badges pequeños, switches |
| `--radius-md` | `8px` / `0.5rem` | Botones estándar, inputs base |
| `--radius-lg` | `12px` / `0.75rem` | **Inner Bezel** de tarjetas, dropdowns |
| `--radius-xl` | `16px` / `1rem` | **Outer Bezel** de tarjetas, modales |
| `--radius-2xl` | `20px` / `1.25rem` | Contenedores bento estándar, photo cards |
| `--radius-3xl` | `24px` / `1.5rem` | Paneles glassmorphism, hero containers |
| `--radius-4xl` | `40px` / `2.5rem` | Grandes paneles de servicio y feature cards |
| `--radius-full` | `9999px` | **CTA Nested Pills**, chips, status dots |

### 3.3 Sistema de Sombras & Glows
```css
/* Elevaciones Neutras */
--shadow-sm:       0 1px 2px 0 rgba(6, 54, 165, 0.05);
--shadow-md:       0 4px 8px rgba(6, 54, 165, 0.08), 0 2px 4px rgba(6, 54, 165, 0.04);
--shadow-lg:       0 10px 15px -3px rgba(6, 54, 165, 0.10), 0 4px 6px -4px rgba(6, 54, 165, 0.06);
--shadow-xl:       0 20px 25px -5px rgba(6, 54, 165, 0.12), 0 8px 10px -6px rgba(6, 54, 165, 0.08);
--shadow-2xl:      0 25px 50px -12px rgba(6, 54, 165, 0.25);

/* Sombras de Firma Envíos DosRuedas */
--shadow-float:    0 25px 50px -12px rgba(6, 54, 165, 0.15); /* Double Bezel outer */
--shadow-panel:    0 32px 120px -20px rgba(6, 54, 165, 0.15); /* Grandes paneles claros */
--shadow-elevated: 0 20px 40px -8px rgba(6, 54, 165, 0.20), 0 8px 16px -4px rgba(6, 54, 165, 0.12); /* CTA White sobre azul */
--shadow-hover-lift: 0 32px 64px -12px rgba(6, 54, 165, 0.25);
--shadow-antigravity-deep: 0 30px 60px -15px rgba(6, 54, 165, 0.30), 0 0 50px -10px rgba(255, 236, 1, 0.15);

/* Acentos y Glows Amarillos */
--shadow-accent-sm:    0 2px 4px rgba(255, 236, 1, 0.15);
--shadow-accent-md:    0 12px 40px -6px rgba(255, 236, 1, 0.30);
--shadow-accent-hover: 0 6px 25px rgba(255, 236, 1, 0.40);
--shadow-cta-glow:     0 0 40px rgba(255, 236, 1, 0.40), 0 0 80px rgba(255, 236, 1, 0.15);
--glow-yellow:         0 0 10px rgba(255, 236, 1, 0.80); /* Live status dots */
```

---

## 4. Arquitectura de Componentes de Firma

### 4.1 Double Bezel Card (Obligatorio en Secciones Blancas)
```html
<div class="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float transition-all duration-300 hover:shadow-antigravity-deep hover:border-brand-blue-300">
  <div class="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm overflow-hidden">
    <!-- Contenido real del bloque -->
  </div>
</div>
```

### 4.2 CTA Nested Pill (Botón Pastilla con Icono Anidado)
```html
<a class="cta-nested-pill cta-nested-pill--primary" href="/cotizar/express">
  <span>Cotizar Envío</span>
  <span class="cta-nested-icon"><svg>→</svg></span>
</a>
```
- **Primary:** Fondo `brand-yellow-500`, texto `brand-blue-900`, icono con transition `translateX(4px)` y fondo `bg-brand-blue-700/10` → hover `shadow-cta-glow`.
- **Elevated (Sobre fondo azul):** Fondo `white`, texto `brand-blue-700`, borde `brand-blue-100`, icono azul que invierte a blanco en hover.
- **WhatsApp CTA:** **Fondo SIEMPRE `brand-yellow-500`**, hover `brand-yellow-400`. El verde solo reside en el glifo SVG del icono.

### 4.3 Selector de Servicios (Radio Card Group)
- Grid 3 columnas (desktop) / 1 columna (mobile).
- **Express seleccionado:** `bg-brand-blue-700 text-white border-brand-blue-700`.
- **LowCost seleccionado:** `bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200`.
- **Flex seleccionado:** `bg-brand-yellow-50 text-brand-blue-700 border-brand-yellow-200`.
- Icon Box de 48×48px con inversión de contraste según servicio.

### 4.4 Inputs de Formulario
- Altura obligatoria `44px` (`h-11`), `border-2 border-brand-blue-100`, `rounded-xl`, `pl-10` con icono prefix.
- **Focus:** `border-brand-blue-700 ring-2 ring-brand-blue-500/20`.
- **Etiqueta:** `font-subheading uppercase text-xs tracking-wider text-brand-blue-700`.

### 4.5 Steppers de Proceso
- **Horizontal (Cotizador):** Círculos de 40px. Pasos completados en `brand-yellow-500` (línea y dot). **PROHIBIDO verde**.
- **Vertical (How It Works & Tracking):** Línea vertical `brand-blue-100`. Dot de 24px: completado=`brand-yellow-500` + anillo `brand-yellow-100`; activo=`brand-yellow-500` + pulsación sutil.

### 4.6 Glassmorphism & Iluminación sobre Fondo Azul
- Paneles glass: `background: rgba(255, 255, 255, 0.06)`, `border: 1px solid rgba(255, 255, 255, 0.12)`, `backdrop-filter: blur(12px)`.
- Bloom decorativo: Esfera difuminada `background: rgba(255, 236, 1, 0.18)`, `filter: blur(80px)`.
- Status Dot: `8×8px` circular en `brand-yellow-500` con `box-shadow: 0 0 10px rgba(255,236,1,0.8)`.

### 4.7 Tratamiento de Fotografía e Imágenes
- Fotografía en luz natural cálida, sin grano digital ni duotono falso.
- Capa de mezcla en azul institucional: `bg-brand-blue-700/10` con `mix-blend-multiply` o degradado inferior `rgba(6,54,165,0.95) → rgba(6,54,165,0.35)` para legibilidad.
- Marcos en `rounded-3xl` (24px) o `rounded-[2.5rem]` (40px) con `shadow-xl`.

### 4.8 Iconografía
- **Lucide Icons exclusivamente** (`w-4 h-4` en nav, `w-5 h-5` en listas, `w-6 h-6` a `w-8 h-8` en tarjetas).
- Stroke: `2px`, sin relleno (never filled).
- Color: **Amarillo `#FFEC01` sobre fondos azules**, **Azul `#0636A5` sobre fondos blancos**.

---

## 5. Alternancia de Secciones en Homepage

| Orden | Sección | Fondo | Texto Principal | Componentes / Tarjetas | Acentos |
|---|---|---|---|---|---|
| 1 | **Hero** | `brand-blue-700` | Blanco | 3D Tilt Cards flotantes + Glass | `brand-yellow-500` |
| 2 | **Trust Bar** | `brand-blue-50` | Azul 700 | 4 Métricas animadas + ISO Badge | Yellow 500 / Blue |
| 3 | **Servicios** | `white` | Azul 700 | Bento Grid 12-col + Double Bezel | Yellow 500 |
| 4 | **Cómo Funciona** | `brand-blue-700` | Blanco | Stepper Vertical numerado | Dots Yellow 500 |
| 5 | **Prueba Social** | `white` | Azul 700 | Logos Carousel + Testimonios | Yellow 500 |
| 6 | **CTA Final** | `brand-blue-700` | Azul 700 | Tarjeta Blanca `rounded-3xl` | Dual CTA Yellow |
| 7 | **Footer** | `brand-blue-700` + gradients | Blanco | Columnas con borde sutil | Yellow 6px bar |

---

## 6. Bloque de Sistema de Diseño para Stitch Loops

> **Copia íntegra este bloque dentro de `.stitch/next-prompt.md` en cada iteración del `/stitch-loop`:**

```markdown
**DESIGN SYSTEM SPECIFICATION — ENVIOS DOSRUEDAS (2026):**
- **Brand Colors (STRICT 3-COLOR RULE):**
  - Primary: Egyptian Blue `#0636A5` (`brand-blue-700`) — headers, dark section canvas, nav, footer, borders.
  - Accent / CTA: Electric Yellow `#FFEC01` (`brand-yellow-500`) — all primary CTA buttons, badges, completed stepper dots, status glow.
  - Surface: Pure White `#FFFFFF` (`brand-white-50`) — page background, card inner cores, form inputs.
  - Soft Canvas / Overlay: Ice Blue `#E6EEFE` (`brand-blue-50`) — outer card bezel, alert backgrounds.
  - Ink Body Text: Deep Ink `#00277C` (`brand-ink`) or `#0636A5`.
  - FORBIDDEN: Generic grays (slate, zinc, gray, neutral), unbranded green/red CTAs, ad-hoc inline hex.
- **Typography:**
  - Headlines (H1/H2): `Anton` / `Anton SC`, uppercase, tight line-height `0.85-1.0`, letter-spacing `-0.05em`.
  - Subtitles, Badges, Labels, Button Text: `Bebas Neue`, uppercase, tracking `0.05em-0.1em`.
  - Body & UI: `Outfit` & `IBM Plex Sans`, sentence case, line-height `1.625`.
  - Metrics, Prices & Tracking: `Geist Mono`, tabular numbers (`$4.600 ARS`).
- **Signature UI Components:**
  - Double Bezel Cards: Outer `bg-brand-blue-50/80 border border-brand-blue-100 rounded-2xl p-2 shadow-float` wrapping Inner `bg-white rounded-xl p-6 border border-brand-blue-50/50`.
  - CTA Nested Pill: `rounded-full uppercase font-subheading bg-brand-yellow-500 text-brand-blue-900 px-8 py-3` with nested circular icon pill `w-8 h-8 rounded-full bg-brand-blue-700/10` translating `translateX(4px)` on hover.
  - Steppers: Completed state uses `brand-yellow-500` ring & dot (NEVER green).
  - WhatsApp CTA: Background is ALWAYS `brand-yellow-500`, hover `brand-yellow-400` (green is restricted to the internal SVG icon path).
  - Glass on Blue: `rgba(255,255,255,0.06)` + `border: 1px solid rgba(255,255,255,0.12)` + `backdrop-filter: blur(12px)`.
- **Language & Tone:**
  - Argentinian Spanish with strict voseo: "Cotizá tu envío", "Ingresá origen y destino", "Contactanos".
  - Mar del Plata local geographic anchors: "Friuli 1972", "Zona Güemes", "Playa Grande", "Punta Mogotes".
  - Reference Year: 2026.
```

---

## 7. Checklist de Accesibilidad & DoD

- [x] **Paleta 3 Colores:** Cero tokens genéricos `slate-*`, `gray-*`, `zinc-*`.
- [x] **Double Bezel:** Aplicado en tarjetas principales sobre secciones claras.
- [x] **Tipografía Jerárquica:** Display (Anton) / Subheading (Bebas Neue) / Body (Outfit) / Mono (Geist Mono).
- [x] **Touch Targets:** Mínimo `44×44px` en todos los controles interactivos.
- [x] **Voseo Rioplatense:** Textos en español argentino con referencias locales de Mar del Plata.
- [x] **Contraste AA:** Cumple estándares WCAG 2.1 AA en todas las combinaciones de texto y superficie.
- [x] **Focus-Visible:** `ring-2 ring-brand-blue-500 ring-offset-2 ring-offset-white` (o `ring-offset-brand-blue-700` sobre azul).
- [x] **Logo Maestro:** `/public/logo-master.svg` con ancho mínimo de 120px.