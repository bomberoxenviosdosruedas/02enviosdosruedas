# Design System: Envíos DosRuedas (MDQ)

**Versión:** 2026.09 — Ajuste Max `#0950F6` **aplicado en producción** (PR #21, commit `5d6588a`, 2026-09-24).
**Project ID (Stitch):** `EnviosDosruedasDesignSystem_a2df0d`

> **Fuente de verdad y cascada.** El sistema vive en `src/app/globals.css` (`@theme` de Tailwind v4) y en las primitivas de `src/components/ui/`. Este documento los describe y fija las reglas de uso. **Si este documento contradice a `globals.css` o al código de una primitiva, gana el código** y este documento se corrige en el mismo PR.
>
> **Fin de la dualidad spec ↔ producción.** Hasta PR #21 este archivo describía el ajuste Max como spec futura y producción corría `#0636A5`. Eso terminó: `globals.css` ya emite `brand-blue-700 = #0950F6` y `brand-ink = #0950F6`. **Ya no existe tabla de mapeo**: el hex de este documento es el hex del sitio. Toda referencia a `#0636A5`, `#00277C`, `#04236B`, `#052D8C`, `#052C87` o `#021440` que quede en el código es **deuda a eliminar** (§11), no un valor vigente.

---

## 0. Resumen de la Auditoría 2026-09

Auditoría hecha leyendo el código del commit `5d6588a` (tokens, las 19 piezas de `src/components/ui/`, módulos de dominio y `src/lib/pricing.ts`).

**Estado general:** la capa de tokens está bien: paleta colapsada al tope `#0950F6`, sombras teñidas, `gray/slate/zinc` remapeados a marca. Los problemas están **fuera** de los tokens:

1. **Código que no consume tokens:** 321 clases con hex arbitrario (`bg-[#…]`) y gradientes navy hardcodeados en heros y bloques de Contacto/Nosotros.
2. **Primitivas sin adopción:** 5 de las 12 piezas del barril tienen **cero** consumidores y otras 3 tienen uno solo. El sitio re-implementa tarjetas, inputs y steppers a mano.
3. **Integridad de tarifas:** el Server Action de cotización confía en tarifas enviadas por el navegador, y dos servicios muestran precios que no existen en la fuente de verdad.
4. **Documentación de gobierno** que seguía declarando `#0636A5` como primario (corregido en `AGENTS.md` junto con esta versión; quedan el skill de marca y docs secundarios, §15 ítem 10).

| # | Hallazgo | Sev. | Dónde | Plan §15 |
|---|---|---|---|---|
| 1 | Tarifas enviadas por el cliente y usadas sin revalidar en el Server Action | 🔴 | `src/actions/quote.ts:9-44` | 1 |
| 2 | Gradiente hero `#021440 → #04236B → #0636A5 → #00277C` y halos `rgba(6,54,165,…)` | 🔴 | `ui/HeroProceduralBackground.tsx:25,33,52` + copias inline | 2 |
| 3 | Navy prohibido fuera de heros: `#052C87` × 43, `#04236B`, `#0636A5`, `rgba(6,54,165,…)`, `rgba(0,39,124,…)` | 🔴 | `contacto/*`, `nosotros/*`, `*Features.tsx`, `LeafletRouteMap`, `CtaSection`, `EmprendedoresHome`, `admin/imagenes/actions.ts` | 3 |
| 4 | Flex y Emprendedores muestran precios sin respaldo en `PriceRange`/`pricing.ts` | 🔴 | `servicios/flex/FlexPricing.tsx`, `servicios/emprendedores/EmprendedoresPricing.tsx` | 4 |
| 5 | Texto con contraste < 4.5:1 (`brand-blue-400`, `/80`, `brand-blue-100` sobre azul, badge `economic`, autocompletado) | 🔴 | `card.tsx`, `RadioCardGroup`, `StepperVertical`, `Badge`, `CTANestedPill`, `AddressAutocomplete` | 5 |
| 6 | 41 de 64 archivos con `motion/react` ignoran `prefers-reduced-motion` | 🟠 | global | 6 |
| 7 | `InputField` no reenvía `required`; error sin `aria-describedby` ni `role="alert"` | 🟠 | `ui/InputField.tsx` | 7 |
| 8 | Faux bold: Anton y Bebas se cargan solo en 400 pero se les aplica `font-bold`/`font-extrabold` | 🟠 | `layout.tsx` + primitivas | 8 |
| 9 | `LogosCarousel` no anima (clases inexistentes) y trae partners inventados | 🟠 | `ui/LogosCarousel.tsx`, `ui/BentoGrid.tsx` | 9 |
| 10 | Skill de marca y docs secundarios siguen con `#0636A5` | 🟡 | skills, `.agents/skills/tailwind-v4-design-system`, `docs/agents/domain.md` | 10 |
| 11 | Baja adopción de primitivas + 321 hex arbitrarios + 183 radios arbitrarios + 140 textos de 8–11 px | 🟡 | global | 11 |
| 12 | Sin enforcement automático (lint/tests) de paleta, contraste ni tarifas | 🟡 | — | 12 |

**Deuda de auditorías anteriores ya saldada** (verificado en `5d6588a`): 0 × `h-screen`, 0 × `animate-bounce`, 0 × `border-l-4`, 0 × verdes (`green-*`, `#25D366`), paleta de `globals.css` migrada a Max.

---

## 1. Visual Theme & Atmosphere

**Mood:** logística urbana de precisión en Mar del Plata, industrial-moderno de alta velocidad, hablando en voseo. Lienzos limpios en **Blanco Puro `#FFFFFF`**, bloques monumentales en **Azul Vibrante `#0950F6`** y una única señal de alta energía en **Amarillo Vial `#FFEC01`**.

**Vibe en una línea:** _afiche deportivo urbano costero: bloques duros de azul eléctrico, una sola señal amarilla, datos en mono, cero penumbra._

### 1.1 Calibración Sensorial

| Eje | Valor | Lectura | Evidencia en código |
|---|---|---|---|
| **Creativity** | 9/10 | Afiche urbano costero, bloques duros, sin tonos midnight | Tope `#0950F6` (luminancia 0.124); nada más oscuro en `@theme` |
| **Variance** | 8/10 | Bento 7/5/12, hero split 7/5, knockout rotado −1°, slab amarillo sangrando. **Hero centrado en desktop prohibido.** | `BentoGrid`, `text-display` |
| **Motion** | 7/10 | Springs (`stiffness 100, damping 20`), cascadas `staggerChildren 0.08`, loops solo en estado vivo, tilt 3D en hero | `FloatTiltCard`, keyframes §8 |
| **Density** | 6/10 | Métricas en Geist Mono + respiración (`py-section-y`, `max-w-prose`) | `max-w-7xl`, `--spacing-section-y` |

### 1.2 Narrativa

Envíos DosRuedas proyecta la solidez de una infraestructura logística propia con 15+ años en las calles de Mar del Plata (Partido de General Pueyrredón). La interfaz fusiona la señalética vial y portuaria con la agilidad de una plataforma de última milla: la tipografía empuja con peso visual, los botones ofrecen resistencia táctil al click y las tarjetas flotan con elevación teñida de azul o amarillo, **nunca** gris.

### 1.3 Firma Geométrica y Elevación

- **Double-Bezel:** exterior `bg-brand-blue-50/80` (`#E6EEFE`) + borde `brand-blue-100` (`#BACEFD`) + `p-2` + `shadow-float` (`rgba(9,80,246,0.15)`); interior blanco `p-6`. Ver `primitivas-ui.md`.
- **CTA Nested Pill:** píldora con chip de ícono anidado que se desplaza `translate-x-1` al hover. Ver `primitivas-ui.md`.
- **Insignias de velocidad:** badges y knockouts rotados `-rotate-1` / `rotate-1`.
- **Resplandor de señal:** `shadow-cta-glow` (`rgba(255,236,1,0.45)` + `rgba(9,80,246,0.18)`) y `shadow-glow-blue` (`rgba(9,80,246,0.35)`). Resplandor cálido de señal, nunca neón.
- **Grilla vectorial procedural:** trama SVG punteada 48 px con nodos amarillos sobre los heros (`HeroProceduralBackground`), sin raster.
- **Hero Card Media:** diorama 3D isométrico, clay mate + satin plastic (ver `iconografia-imagen.md`).

---

## 2. Color Palette & Tokens

### 2.1 Ley de Tres Colores

| Rol | Hex | RGB | HSL (aprox.) | Cobertura objetivo |
|---|---|---|---|---|
| **Azul Vibrante** (dominante, techo de oscuridad) | `#0950F6` | 9, 80, 246 | 222°, 93%, 50% | ~35–55% |
| **Amarillo Vial** (acento único) | `#FFEC01` | 255, 236, 1 | 56°, 100%, 50% | **≤ 15%** |
| **Blanco** (lienzo) | `#FFFFFF` | 255, 255, 255 | 0°, 0%, 100% | resto |

Más sus escalas **más claras** que `#0950F6`. **Única excepción externa:** rojo de error de formulario (§2.5 regla 8).

### 2.2 Tabla Maestra de Tokens (`@theme` en `src/app/globals.css`)

Ver `tokens-colores.md` para tabla completa con todas las escalas, semánticos, sombras y alias.

### 2.3 Sombras y Elevación (Todas Teñidas)

Ver `tokens-colores.md` §2.3 para tabla completa. **Toda sombra nueva se escribe con `rgba(9,80,246,α)`, `rgba(53,112,248,α)` o `rgba(255,236,1,α)`. Prohibidas `rgba(0,39,124,…)`, `rgba(6,54,165,…)` y `rgba(0,0,0,…)`.**

### 2.4 Contraste WCAG 2.1 (Calculado)

Ver `tokens-colores.md` §2.4 para tabla completa. **Reglas derivadas obligatorias:**
- Texto normal sobre blanco: `text-brand-blue-900` / `text-brand-blue-700` / `text-brand-ink`. **Nunca** `brand-blue-300/400/800` ni opacidades `< 100`.
- Texto sobre azul: `text-white`, `text-white/90`, `text-white/85` (mínimo) o `text-brand-blue-50`.
- `brand-blue-400` solo para íconos y texto grande.
- Todo par nuevo se calcula antes de publicar.

### 2.5 Reglas Cromáticas Estrictas

1. **Techo de oscuridad:** nada más oscuro que `#0950F6` en fondos, textos, bordes, sombras, gradientes, SVG ni props de librerías (Leaflet, tsParticles, prompts de imagen).
2. **Prohibidos por nombre:** `#0636A5`, `#052D8C`, `#052C87`, `#04236B`, `#021440`, `#00277C`, `#041F5E`, `#001035`, `#002068`, `#151B2D` y sus `rgba()` (`6,54,165` · `0,39,124` · `2,20,64` · `4,35,107`). Negro puro `#000000` no existe en la paleta.
3. **Prohibidos por clase:** `bg-black`, `text-black`, `border-black`, `shadow-black`, `neutral-*`, `stone-*`, gradientes `from/via/to` hacia grises u oscuros, y hex arbitrarios en clases (`bg-[#…]`).
4. **Amarillo ≤ 15%:** señal, nunca superficie. Permitido: CTA primario, step completado/activo, precio destacado, knockout, badge `urgent/accent`, nodos de grilla, franja ≤ 6 px. Prohibido: fondos de sección, tarjetas grandes amarillas, párrafos continuos, texto amarillo sobre blanco.
5. **Un solo CTA primario amarillo por pantalla.**
6. **Nunca verde**, tampoco en WhatsApp: fondo amarillo, verde solo dentro del glifo.
7. **Sombras siempre teñidas** (ver `tokens-colores.md`).
8. **Rojo de error:** `#EF4444` (`--action-danger`, `border-red-500`, `ring-red-500/20`) para **borde, anillo e ícono**; `#DC2626` (`text-red-600`) para el **texto** del mensaje. Ningún otro rojo (`red-200/400/700`) y ningún rojo decorativo.
9. **Azul sobre azul:** en secciones con fondo `#0950F6`, texto blanco, bordes sutiles `rgba(255,255,255,0.12)` y acentos interactivos amarillos.

**Reemplazo canónico del gradiente hero:** ver `tokens-colores.md` §2.5.

---

## 3. Typography Architecture

Ver `tipografia.md` para detalle completo de familias, escala, utilities fluidas y tratamientos de firma.

**Resumen crítico:**
- **Anton** (`font-display`) y **Bebas Neue** (`font-subheading`) cargan **solo peso 400**. **Prohibido** `font-bold`, `font-extrabold`, `font-black`. Jerarquía sale de tamaño, tracking y color.
- **Outfit** (`font-sans`) para cuerpo, sentence case, `leading-relaxed`, `max-w-prose`.
- **Geist Mono** (`font-mono`) con `tabular-nums` obligatorio para precios, distancias, códigos.
- **Piso absoluto:** `text-2xs` (10 px). `text-[8px]` y `text-[9px]` prohibidos.

---

## 4. Hero Section

Ver `hero-layout.md` para especificación completa.

**Reglas clave:**
- **Estructura 7/5:** `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center`. Izquierda `lg:col-span-7`, derecha `lg:col-span-5`.
- **Fondo:** consumen `<HeroProceduralBackground variant="…" />`. **No** escriben gradiente inline.
- **Altura:** `min-h-[90dvh]` o `min-h-[100dvh]`. **Jamás `h-screen`**.
- **Titular:** `font-display` UPPERCASE 2–3 líneas, **un** knockout rotado.
- **Badge de contexto:** dato real verificable ("Mar del Plata · 15+ años · 2026").
- **CTA:** un `CTANestedPill` primario. Secundario solo link texto o `variant="ghost"`/`"outline"`.
- **Prohibido:** hero centrado en desktop, "Scroll para explorar", chevrons rebotando, texto sobre imágenes, partículas violetas/neón, más de un acento amarillo grande.

---

## 5. Components & Component Stylings

Ver `primitivas-ui.md` para fichas completas de cada primitiva.

**Primitivas en `src/components/ui/`, exportadas por barril `index.ts`** (salvo `AddressAutocomplete`, `DynamicRouteMap`, `LeafletRouteMap`, `sparkles`, `timeline-animation`, `vertical-cut-reveal` que se importan por ruta).

**Regla:** antes de escribir markup de tarjeta, botón, input, selector, stepper, badge o grilla, **usar la primitiva**. Alias canónico: `@/components/ui`.

### Adopción Actual (Consumidores fuera de `ui/`, sin tests)

| Primitiva | Consumidores | Estado |
|---|---|---|
| `CTANestedPill` | 15 | ✅ |
| `HeroProceduralBackground` | 7 | ⚠️ viola paleta (§11) |
| `Card` (+ subcomponentes) | 4 | ✅ páginas de pricing |
| `Sparkles`, `TimelineContent`, `VerticalCutReveal` | 4 c/u | Helpers de animación |
| `AddressAutocomplete`, `DynamicRouteMap` | 2 | Cotizador Express |
| `DoubleBezelCard`, `InputField`, `FloatTiltCard` | 1 | 🟡 sub-adoptadas |
| `RadioCardGroup`, `StepperHorizontal`, `StepperVertical`, `LogosCarousel`, `BentoGrid` | **0** | 🟡 markup duplicado a mano |

---

## 6. Layout & Responsive

- **Contenedor:** `max-w-7xl` (`--spacing-container-max: 80rem`).
- **Secciones:** `py-section-y` (`--spacing-section-y: 6rem`).
- **Breakpoints:** `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.
- **Viewport stability:** **Nunca `h-screen`**. Usar `min-h-[100dvh]`.
- **Grid over flex-math:** CSS Grid obligatorio para layouts complejos.
- **Mobile collapse explícito** por sección (`< 768px` → `w-full px-4 max-w-7xl mx-auto`).

---

## 7. Motion

- **Solo `transform`/`opacity`**. Nunca animar `top`, `left`, `width`, `height`.
- **Springs:** `stiffness 100, damping 20`. No linear easing.
- **`prefers-reduced-motion` obligatorio** en todo lo que se mueve (`MotionConfig reducedMotion="user"` o `useReducedMotion`).
- **GSAP + ScrollTrigger** solo para scrolltelling y scroll hijacks. Aislar en componentes hoja con `useEffect` cleanup.
- **Prohibido:** `window.addEventListener('scroll', …)`, `requestAnimationFrame` tocando React state, `layout` props en contenido estático.

---

## 8. Iconografía e Imagen

- **Íconos:** `lucide-react` (primario). `react-icons/fa` **solo** para glifo WhatsApp (`FaWhatsapp`).
- **Nunca** hand-rolled SVG íconos. Si falta glifo, instalar segunda librería o componer desde primitivas.
- **Una familia por proyecto.** No mezclar Lucide con Phosphor/Tabler.
- **Logos:** solo `/logo-envios-simplified.webp`, mínimo 120px ancho, sin recolorear.
- **Fotos reales:** `picsum.photos/seed/{descriptivo}/{w}/{h}` o generadas. **Prohibido** div-based fake screenshots.

---

## 9. Anti-Patrones (Prohibidos)

Ver `anti-patrones.md` para lista completa. Resumen:

- ❌ `h-screen`, `animate-bounce`, `border-l-4`
- ❌ Verde en UI (ni en WhatsApp CTA)
- ❌ Emojis en UI
- ❌ Texto < 12 px legible (`text-2xs` piso = 10px solo metadato)
- ❌ Hex arbitrario (`bg-[#…]`), `slate/gray/zinc/neutral/stone/black`
- ❌ `font-bold` en Anton/Bebas
- ❌ Centro hero en desktop
- ❌ Más de un CTA primario por pantalla
- ❌ `div role="button"`, `div role="link"`
- ❌ `useState` para valores continuos (mouse, scroll, physics) → `useMotionValue`/`useTransform`

---

## 10. Deuda de Adherencia (Known Gaps)

Ver `deuda-adherencia.md` para tabla completa con 12 ítems priorizados.

---

## 11. Tarifas y Lógica de Negocio

Ver `tarifas-logica-negocio.md` y `docs/knowledge_base/00-proyecto/servicios-tarifas-2026.md`.

**Regla crítica:** Server Action **nunca** calcula con tarifas del cliente. Obtiene `PriceRange` vía Prisma → fallback `src/lib/pricing.ts`.

---

## 12. Quick Reference

Ver `cheat-sheet.md` (tokens, spacing, radii, sombras, tipografía, primitivas, anti-patrones).

---

## 13. Plan de Remediación

Ver `plan-remediacion.md` (12 ítems priorizados con prompts en `docs/agents/prompts-remediacion.md`).

---

## 14. Bloque para Stitch y Subagentes

```yaml
# Design System Token Summary for AI Agents
brand:
  primary: "#0950F6"      # brand-blue-700, brand-blue-900, brand-ink
  accent: "#FFEC01"       # brand-yellow-500 (CTA only, ≤15%)
  surface: "#FFFFFF"      # brand-white-50
  muted: "#E6EEFE"        # brand-blue-50
  border: "#BACEFD"       # brand-blue-100
typography:
  display: "Anton"        # font-display, UPPERCASE, only 400 weight
  subheading: "Bebas Neue" # font-subheading, UPPERCASE, only 400 weight
  body: "Outfit"          # font-sans, sentence case
  mono: "Geist Mono"      # font-mono, tabular-nums
rules:
  - "No hex inline (bg-[#…])"
  - "No colors darker than #0950F6"
  - "Yellow ≤ 15% surface"
  - "No green (not even WhatsApp)"
  - "All shadows tinted rgba(9,80,246,α)"
  - "WCAG AA contrast mandatory"
  - "prefers-reduced-motion respected"
  - "Server Components by default"
  - "Server Actions for mutations"
  - "pnpm only"
```