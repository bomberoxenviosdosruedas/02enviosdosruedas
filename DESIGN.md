# Design System: Envíos DosRuedas (MDQ)

**Versión:** 2026.09 — Ajuste Max `#0950F6` **aplicado en producción** (PR #21, commit `5d6588a`, 2026-09-24).
**Project ID (Stitch):** `EnviosDosruedasDesignSystem_a2df0d`

> **Fuente de verdad y cascada.** El sistema vive en `src/app/globals.css` (`@theme` de Tailwind v4) y en las primitivas de `src/components/ui/`. Este documento los describe y fija las reglas de uso. **Si este documento contradice a `globals.css` o al código de una primitiva, gana el código** y este documento se corrige en el mismo PR.
>
> **Fin de la dualidad spec ↔ producción.** Hasta PR #21 este archivo describía el ajuste Max como spec futura y producción corría `#0636A5`. Eso terminó: `globals.css` ya emite `brand-blue-700 = #0950F6` y `brand-ink = #0950F6`. **Ya no existe tabla de mapeo**: el hex de este documento es el hex del sitio. Toda referencia a `#0636A5`, `#00277C`, `#04236B`, `#052D8C`, `#052C87` o `#021440` que quede en el código es **deuda a eliminar** (§11), no un valor vigente.

### Leyenda de severidad

| Marca          | Significado                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------- |
| 🔴 **Crítico** | Rompe una regla de marca no negociable, un requisito WCAG AA o la integridad de las tarifas. |
| 🟠 **Alto**    | Bug funcional o de accesibilidad con impacto visible.                                        |
| 🟡 **Medio**   | Deuda de consistencia / mantenibilidad.                                                      |
| ⚪ **Bajo**    | Pulido.                                                                                      |

### Índice

0. Resumen de la auditoría 2026-09 · 1. Visual Theme · 2. Color · 3. Tipografía · 4. Hero · 5. Componentes · 6. Layout · 7. Responsive · 8. Motion · 9. Iconografía e imagen · 10. Anti-patrones · 11. Deuda de adherencia · 12. Tarifas y lógica de negocio · 13. Quick Reference · 14. Bloque para Stitch y subagentes · 15. Plan de remediación

---

## 0. Resumen de la auditoría 2026-09

Auditoría hecha leyendo el código del commit `5d6588a` (tokens, las 19 piezas de `src/components/ui/`, módulos de dominio y `src/lib/pricing.ts`).

**Estado general:** la capa de tokens está bien: paleta colapsada al tope `#0950F6`, sombras teñidas, `gray/slate/zinc` remapeados a marca. Los problemas están **fuera** de los tokens:

1. **Código que no consume tokens:** 321 clases con hex arbitrario (`bg-[#…]`) y gradientes navy hardcodeados en heros y bloques de Contacto/Nosotros.
2. **Primitivas sin adopción:** 5 de las 12 piezas del barril tienen **cero** consumidores y otras 3 tienen uno solo. El sitio re-implementa tarjetas, inputs y steppers a mano.
3. **Integridad de tarifas:** el Server Action de cotización confía en tarifas enviadas por el navegador, y dos servicios muestran precios que no existen en la fuente de verdad.
4. **Documentación de gobierno** que seguía declarando `#0636A5` como primario (corregido en `AGENTS.md` junto con esta versión; quedan el skill de marca y docs secundarios, §15 ítem 10).

| #   | Hallazgo                                                                                                                                                  | Sev. | Dónde                                                                                                                          | Plan §15 |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------ | -------- |
| 1   | Tarifas enviadas por el cliente y usadas sin revalidar en el Server Action                                                                                | 🔴   | `src/actions/quote.ts:9-44`                                                                                                    | 1        |
| 2   | Gradiente hero `#021440 → #04236B → #0636A5 → #00277C` y halos `rgba(6,54,165,…)`                                                                         | 🔴   | `ui/HeroProceduralBackground.tsx:25,33,52` + copias inline en `ExpressHero`, `FlexHero`, `EmprendedoresHero`                   | 2        |
| 3   | Navy prohibido fuera de los heros: `#052C87` × 43, `#04236B`, `#0636A5`, `rgba(6,54,165,…)`, `rgba(0,39,124,…)`                                           | 🔴   | `contacto/*`, `nosotros/*`, `*Features.tsx`, `LeafletRouteMap`, `CtaSection`, `EmprendedoresHome`, `admin/imagenes/actions.ts` | 3        |
| 4   | Flex y Emprendedores muestran precios sin respaldo en `PriceRange`/`pricing.ts`; Flex Z5 dice "$700 × km **adicional**" (contradice la regla de km total) | 🔴   | `servicios/flex/FlexPricing.tsx`, `FlexHero.tsx:79`, `servicios/emprendedores/EmprendedoresPricing.tsx`                        | 4        |
| 5   | Texto con contraste < 4.5:1 (`brand-blue-400`, `/80`, `brand-blue-100` sobre azul, badge `economic`, lista del autocompletado)                            | 🔴   | `card.tsx`, `RadioCardGroup`, `StepperVertical`, `Badge`, `CTANestedPill`, `AddressAutocomplete`                               | 5        |
| 6   | 41 de 64 archivos con `motion/react` ignoran `prefers-reduced-motion`; `scroll-smooth` no se desactiva                                                    | 🟠   | global                                                                                                                         | 6        |
| 7   | `InputField` no reenvía `required`; error sin `aria-describedby` ni `role="alert"`                                                                        | 🟠   | `ui/InputField.tsx`                                                                                                            | 7        |
| 8   | Faux bold: Anton y Bebas se cargan solo en 400 pero se les aplica `font-bold`/`font-extrabold`                                                            | 🟠   | `layout.tsx` + primitivas                                                                                                      | 8        |
| 9   | `LogosCarousel` no anima (clases inexistentes) y trae partners inventados; `BentoGridItem` genera clases dinámicas                                        | 🟠   | `ui/LogosCarousel.tsx`, `ui/BentoGrid.tsx`                                                                                     | 9        |
| 10  | Skill de marca y docs secundarios siguen con `#0636A5`                                                                                                    | 🟡   | skill `dosruedas-brand-system`, `.agents/skills/tailwind-v4-design-system`, `docs/agents/domain.md`                            | 10       |
| 11  | Baja adopción de primitivas + 321 hex arbitrarios + 183 radios arbitrarios + 140 textos de 8–11 px                                                        | 🟡   | global                                                                                                                         | 11       |
| 12  | Sin enforcement automático (lint/tests) de paleta, contraste ni tarifas                                                                                   | 🟡   | —                                                                                                                              | 12       |

**Deuda de auditorías anteriores ya saldada** (verificado en `5d6588a`): 0 × `h-screen`, 0 × `animate-bounce`, 0 × `border-l-4`, 0 × verdes (`green-*`, `#25D366`), paleta de `globals.css` migrada a Max.

---

## 1. Visual Theme & Atmosphere

**Mood:** logística urbana de precisión en Mar del Plata, industrial-moderno de alta velocidad, hablando en voseo. Lienzos limpios en **Blanco Puro `#FFFFFF`**, bloques monumentales en **Azul Vibrante `#0950F6`** y una única señal de alta energía en **Amarillo Vial `#FFEC01`**.

**Vibe en una línea:** _afiche deportivo urbano costero: bloques duros de azul eléctrico, una sola señal amarilla, datos en mono, cero penumbra._

### 1.1 Calibración sensorial

| Eje            | Valor | Lectura                                                                                                             | Evidencia en código                                             |
| -------------- | ----- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Creativity** | 9/10  | Afiche urbano costero, bloques duros, sin tonos midnight.                                                           | Tope `#0950F6` (luminancia 0.124); nada más oscuro en `@theme`. |
| **Variance**   | 8/10  | Bento 7/5/12, hero split 7/5, knockout rotado −1°, slab amarillo sangrando. **Hero centrado en desktop prohibido.** | `BentoGrid`, `text-display`                                     |
| **Motion**     | 7/10  | Springs (`stiffness 100, damping 20`), cascadas `staggerChildren 0.08`, loops solo en estado vivo, tilt 3D en hero. | `FloatTiltCard`, keyframes §8                                   |
| **Density**    | 6/10  | Métricas en Geist Mono + respiración (`py-section-y`, `max-w-prose`).                                               | `max-w-7xl`, `--spacing-section-y`                              |

### 1.2 Narrativa

Envíos DosRuedas proyecta la solidez de una infraestructura logística propia con 15+ años en las calles de Mar del Plata (Partido de General Pueyrredón). La interfaz fusiona la señalética vial y portuaria con la agilidad de una plataforma de última milla: la tipografía empuja con peso visual, los botones ofrecen resistencia táctil al click y las tarjetas flotan con elevación teñida de azul o amarillo, **nunca** gris.

### 1.3 Firma geométrica y elevación

- **Double-Bezel:** exterior `bg-brand-blue-50/80` (`#E6EEFE`) + borde `brand-blue-100` (`#BACEFD`) + `p-2` + `shadow-float` (`rgba(9,80,246,0.15)`); interior blanco `p-6`. Ver §5.1.
- **CTA Nested Pill:** píldora con chip de ícono anidado que se desplaza `translate-x-1` al hover. Ver §5.2.
- **Insignias de velocidad:** badges y knockouts rotados `-rotate-1` / `rotate-1`.
- **Resplandor de señal:** `shadow-cta-glow` (`rgba(255,236,1,0.45)` + `rgba(9,80,246,0.18)`) y `shadow-glow-blue` (`rgba(9,80,246,0.35)`). Resplandor cálido de señal, nunca neón.
- **Grilla vectorial procedural:** trama SVG punteada 48 px con nodos amarillos sobre los heros (`HeroProceduralBackground`), sin raster.
- **Hero Card Media:** diorama 3D isométrico, clay mate + satin plastic (§9.1).

---

## 2. Color Palette & Tokens

### 2.1 Ley de Tres Colores

| Rol                                               | Hex       | RGB           | HSL (aprox.)   | Cobertura objetivo |
| ------------------------------------------------- | --------- | ------------- | -------------- | ------------------ |
| **Azul Vibrante** (dominante, techo de oscuridad) | `#0950F6` | 9, 80, 246    | 222°, 93%, 50% | ~35–55%            |
| **Amarillo Vial** (acento único)                  | `#FFEC01` | 255, 236, 1   | 56°, 100%, 50% | **≤ 15%**          |
| **Blanco** (lienzo)                               | `#FFFFFF` | 255, 255, 255 | 0°, 0%, 100%   | resto              |

Más sus escalas **más claras** que `#0950F6`. **Única excepción externa:** rojo de error de formulario (§2.5 regla 8).

### 2.2 Tabla maestra de tokens (`@theme` en `src/app/globals.css`)

#### Escala azul, colapsada por el ajuste Max

| Token CSS                | Hex       | Clase Tailwind v4         | Función                                                                                                                    |
| ------------------------ | --------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `--color-brand-blue-50`  | `#E6EEFE` | `bg-brand-blue-50`        | Superficie muted, bezel exterior (`/80`), hover de ghost/outline, skeleton                                                 |
| `--color-brand-blue-100` | `#BACEFD` | `border-brand-blue-100`   | Borde estructural, divisores, línea de stepper pendiente                                                                   |
| `--color-brand-blue-200` | `#8EAFFB` | `border-brand-blue-200`   | Hover de borde de tarjeta, anillo de radio pendiente. **Nunca texto**                                                      |
| `--color-brand-blue-300` | `#628FF9` | `border-brand-blue-300`   | Borde de input en reposo, hover de bezel, trazos SVG secundarios. **Nunca texto de cuerpo**                                |
| `--color-brand-blue-400` | `#3570F8` | `text-brand-blue-400`     | Íconos, texto grande muted (≥ 24 px o ≥ 18.66 px bold). **Falla AA en texto normal** (4.35:1)                              |
| `--color-brand-blue-500` | `#0950F6` | `ring-brand-blue-500`     | Anillo de foco                                                                                                             |
| `--color-brand-blue-600` | `#0950F6` | —                         | Colapsado al tope                                                                                                          |
| `--color-brand-blue-700` | `#0950F6` | `bg-brand-blue-700`       | **Primario**: lienzo institucional, header, footer, hero, H1/H2, Express seleccionado                                      |
| `--color-brand-blue-800` | `#3570F8` | `hover:bg-brand-blue-800` | Hover de **fondos** azules (se aclara porque no se puede oscurecer). ⚠️ Más claro que 700. **No usar como color de texto** |
| `--color-brand-blue-900` | `#0950F6` | `text-brand-blue-900`     | Texto sobre amarillo y cuerpo en tarjetas                                                                                  |
| `--color-brand-blue-950` | `#0950F6` | —                         | Colapsado al tope (footer profundo = mismo azul)                                                                           |

> **Consecuencia del colapso:** 500/600/700/900/950 son **un valor con cinco nombres semánticos**. El nombre elige la _función_, no la _oscuridad_. No hay "azul más oscuro" para jerarquía ni para _pressed_: la jerarquía se construye con blanco/amarillo sobre azul, peso visual, escala y tracking; el _pressed_ es `active:scale-[.98]`, nunca oscurecer.
>
> ⚠️ **Atención - Token Huérfano `#D6E4FE`:** El valor `#D6E4FE` (azul intermedio usado erróneamente en bordes y divisores hardcodeados) **NO existe** en `@theme` de `src/app/globals.css`. Debe sustituirse sistemáticamente por `border-brand-blue-100` (`#BACEFD`) para bordes/separadores o `bg-brand-blue-50` (`#E6EEFE`) para fondos suaves.

#### Escala amarilla

| Token CSS                  | Hex       | Clase                        | Función                                                                            |
| -------------------------- | --------- | ---------------------------- | ---------------------------------------------------------------------------------- |
| `--color-brand-yellow-50`  | `#FFFDE6` | `bg-brand-yellow-50`         | Fondo de Flex seleccionado                                                         |
| `--color-brand-yellow-100` | `#FFFAB8` | `bg-brand-yellow-100`        | Badge `flex`, anillo de step completado, halos                                     |
| `--color-brand-yellow-200` | `#FFF78A` | `border-brand-yellow-200`    | Borde de Flex seleccionado                                                         |
| `--color-brand-yellow-300` | `#FFF45C` | `text-brand-yellow-300`      | Detalle mono sobre azul                                                            |
| `--color-brand-yellow-400` | `#FFF12E` | `hover:bg-brand-yellow-400`  | Hover de CTA primario y WhatsApp                                                   |
| `--color-brand-yellow-500` | `#FFEC01` | `bg-brand-yellow-500`        | **CTA primario**, step completado/activo, precio sobre azul, franja de footer 6 px |
| `--color-brand-yellow-600` | `#E6D400` | `active:bg-brand-yellow-600` | Pressed del CTA                                                                    |

#### Semánticos y alias

| Token                                                    | Valor                           | Uso                                   |
| -------------------------------------------------------- | ------------------------------- | ------------------------------------- |
| `--color-brand-blue`                                     | `var(--color-brand-blue-700)`   | Alias canónico del primario           |
| `--color-brand-yellow`                                   | `var(--color-brand-yellow-500)` | Alias canónico del acento             |
| `--color-brand-white` / `--color-brand-white-50`         | `#FFFFFF`                       | Lienzo                                |
| `--color-brand-ink`                                      | `#0950F6`                       | Texto de cuerpo (6.02:1 sobre blanco) |
| `--color-brand-navy`, `-blue-deep`, `-blue-ink`, `-dark` | `→ brand-blue-700`              | **Legacy.** No usar en código nuevo   |

#### Superficies y acciones (declaradas en `@theme` sin prefijo `--color-`)

| Token                                                 | Valor                    | Nota                                                                                                                            |
| ----------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `--surface-page` / `--surface-card`                   | `#FFFFFF`                | Consumir con `var()`                                                                                                            |
| `--surface-muted`                                     | `#E6EEFE`                | —                                                                                                                               |
| `--surface-invert`                                    | `#0950F6`                | —                                                                                                                               |
| `--surface-glass`                                     | `rgba(255,255,255,0.06)` | Paneles sobre azul                                                                                                              |
| `--text-body` / `--text-heading` / `--text-on-accent` | `#0950F6`                | ⚠️ `--text-*` es el namespace de **tamaños** en Tailwind v4: no usarlos como clase (`text-body` se resolvería como `font-size`) |
| `--text-muted`                                        | `#3570F8`                | Mismo conflicto + falla AA como texto normal                                                                                    |
| `--text-on-invert`                                    | `#FFFFFF`                | Mismo conflicto                                                                                                                 |
| `--border-subtle`                                     | `#BACEFD`                | —                                                                                                                               |
| `--focus-ring` / `--action-primary`                   | `#0950F6`                | —                                                                                                                               |
| `--action-primary-hover`                              | `#3570F8`                | —                                                                                                                               |
| `--action-accent` / `--action-accent-hover`           | `#FFEC01` / `#FFF12E`    | —                                                                                                                               |
| `--action-danger`                                     | `#EF4444`                | Borde e ícono de error (§2.5 regla 8)                                                                                           |

> 🟡 **Pendiente de diseño:** renombrar a `--color-surface-*`, `--color-fg-*`, `--color-action-*` para generar clases reales y eliminar el choque con `--text-*`. Tailwind v4 solo emite por defecto las variables de `@theme` que se usan: si se consumen desde TSX con `var(--…)`, verificar en DevTools que existan o declararlas con `@theme static`.

#### Red de seguridad: escalas remapeadas

`@theme` remapea `blue-*`, `gray-*`, `slate-*` y `zinc-*` a la escala de marca (`bg-gray-900` pinta `#0950F6`, `bg-slate-100` pinta `#E6EEFE`). **No** están remapeados `black`, `neutral-*`, `stone-*` ni el resto de tonos (por eso `border-black` en `ServicesOverview.tsx` sí pinta negro). La red evita que una clase heredada rompa la paleta, **pero esas clases no son API válida**: código nuevo usa solo `brand-*`.

### 2.3 Sombras y elevación (todas teñidas)

| Token                      | Valor                                                         | Uso                                                  |
| -------------------------- | ------------------------------------------------------------- | ---------------------------------------------------- |
| `shadow-xs`                | `0 1px 2px rgba(9,80,246,.04)`                                | Hairline                                             |
| `shadow-sm`                | `0 2px 4px rgba(9,80,246,.06), 0 1px 2px rgba(9,80,246,.03)`  | Tarjeta interior, badge neutral                      |
| `shadow-md`                | `0 4px 8px …/.08, 0 2px 4px …/.04`                            | Express seleccionado                                 |
| `shadow-lg`                | `0 8px 16px …/.10, 0 4px 8px …/.06`                           | Overlays del mapa                                    |
| `shadow-xl`                | `0 16px 32px …/.12, 0 8px 16px …/.08`                         | Badges flotantes                                     |
| `shadow-2xl`               | `0 25px 50px -12px …/.25`                                     | Dropdowns                                            |
| `shadow-float`             | `0 25px 50px -12px …/.15`                                     | Bezel exterior en reposo                             |
| `shadow-elevated`          | `0 16px 40px …/.18`                                           | CTA `elevated`, Card `elevated`, header al scrollear |
| `shadow-hover-lift`        | `0 24px 64px …/.20`                                           | Hover de elevated                                    |
| `shadow-antigravity-deep`  | `0 24px 64px …/.22`                                           | Hover de bezel, tilt card                            |
| `shadow-panel`             | `0 32px 120px -20px …/.15`                                    | Paneles grandes                                      |
| `shadow-ambient-elevation` | `0 20px 80px …/.18`                                           | Ambiental                                            |
| `shadow-accent-sm` / `-md` | `rgba(255,236,1,.15 / .20)`                                   | CTA primario en reposo, badge urgente                |
| `shadow-accent` / `-hover` | `rgba(255,236,1,.30 / .40)`                                   | Acento grande                                        |
| `shadow-glow-blue`         | `0 0 25px rgba(9,80,246,.35)`                                 | Halo azul                                            |
| `shadow-glow-yellow`       | `0 0 25px rgba(255,241,46,.45)`                               | Halo amarillo                                        |
| `shadow-cta-glow`          | `0 0 28px rgba(255,236,1,.45), 0 8px 24px rgba(9,80,246,.18)` | Hover del CTA primario                               |

Toda sombra nueva se escribe con `rgba(9,80,246,α)`, `rgba(53,112,248,α)` o `rgba(255,236,1,α)`. Prohibidas `rgba(0,39,124,…)`, `rgba(6,54,165,…)` y `rgba(0,0,0,…)`.

### 2.4 Contraste WCAG 2.1 (calculado)

Umbrales: **texto normal ≥ 4.5**, **texto grande (≥ 24 px, o ≥ 18.66 px bold) ≥ 3.0**, **UI no textual ≥ 3.0**.

| Primer plano   | Fondo     | Ratio    | Normal | Grande / UI | Dónde aparece                                          |
| -------------- | --------- | -------- | ------ | ----------- | ------------------------------------------------------ |
| `#0950F6`      | `#FFFFFF` | **6.02** | ✅     | ✅          | Cuerpo, títulos                                        |
| `#FFFFFF`      | `#0950F6` | **6.02** | ✅     | ✅          | Texto sobre hero/header                                |
| `#FFFFFF` @90% | `#0950F6` | 5.17     | ✅     | ✅          | Chips del hero                                         |
| `#FFFFFF` @85% | `#0950F6` | 4.76     | ✅     | ✅          | Párrafo del hero (**mínimo permitido**)                |
| `#FFFFFF` @80% | `#0950F6` | 4.38     | ❌     | ✅          | No usar en texto normal                                |
| `#0950F6`      | `#FFEC01` | **4.94** | ✅     | ✅          | Texto del CTA primario                                 |
| `#FFEC01`      | `#0950F6` | **4.94** | ✅     | ✅          | Precio amarillo sobre azul, knockout invertido         |
| `#0950F6`      | `#FFF12E` | 5.12     | ✅     | ✅          | CTA hover                                              |
| `#0950F6`      | `#E6EEFE` | 5.17     | ✅     | ✅          | Badge `secure`, hover ghost                            |
| `#E6EEFE`      | `#0950F6` | 5.17     | ✅     | ✅          | Texto claro sobre azul                                 |
| `#0950F6`      | `#FFFAB8` | 5.62     | ✅     | ✅          | Badge `flex`                                           |
| `#3570F8`      | `#FFFFFF` | **4.35** | ❌     | ✅          | `CardDescription`, hover `elevated`, `--text-muted` 🔴 |
| `#0950F6` @80% | `#FFFFFF` | **4.21** | ❌     | ✅          | `text-brand-blue-700/80` 🔴                            |
| `#BACEFD`      | `#0950F6` | **3.82** | ❌     | ✅          | `text-brand-blue-100` sobre azul 🔴                    |
| `#3570F8`      | `#BACEFD` | **2.76** | ❌     | ❌          | Badge `economic` 🔴                                    |
| `#FFFFFF`      | `#3570F8` | 4.35     | ❌     | ✅          | Lista del autocompletado 🔴                            |
| `#628FF9`      | `#FFFFFF` | 3.08     | ❌     | ✅ (UI)     | Borde de input: válido como UI                         |
| `#8EAFFB`      | `#FFFFFF` | 2.17     | ❌     | ❌          | No usar para nada que deba percibirse                  |
| `#FFEC01`      | `#FFFFFF` | **1.22** | ❌     | ❌          | **Prohibido**                                          |
| `#EF4444`      | `#FFFFFF` | 3.76     | ❌     | ✅ (UI)     | Borde/ícono de error                                   |
| `#DC2626`      | `#FFFFFF` | 4.83     | ✅     | ✅          | Texto de error                                         |

**Reglas derivadas (obligatorias):**

- Texto normal sobre blanco: `text-brand-blue-900` / `text-brand-blue-700` / `text-brand-ink`. **Nunca** `brand-blue-300/400/800` ni opacidades `< 100`.
- Texto sobre azul: `text-white`, `text-white/90`, `text-white/85` (mínimo) o `text-brand-blue-50`. `brand-blue-100` solo en texto grande.
- `brand-blue-400` solo para íconos y texto grande.
- Todo par nuevo se calcula antes de publicar.

### 2.5 Reglas cromáticas estrictas

1. **Techo de oscuridad:** nada más oscuro que `#0950F6` en fondos, textos, bordes, sombras, gradientes, SVG ni props de librerías (Leaflet, tsParticles, prompts de imagen).
2. **Prohibidos por nombre:** `#0636A5`, `#052D8C`, `#052C87`, `#04236B`, `#021440`, `#00277C`, `#041F5E`, `#001035`, `#002068`, `#151B2D` y sus `rgba()` (`6,54,165` · `0,39,124` · `2,20,64` · `4,35,107`). Negro puro `#000000` no existe en la paleta.
3. **Prohibidos por clase:** `bg-black`, `text-black`, `border-black`, `shadow-black`, `neutral-*`, `stone-*`, gradientes `from/via/to` hacia grises u oscuros, y hex arbitrarios en clases (`bg-[#…]`).
4. **Amarillo ≤ 15%:** señal, nunca superficie. Permitido: CTA primario, step completado/activo, precio destacado, knockout, badge `urgent/accent`, nodos de grilla, franja ≤ 6 px. Prohibido: fondos de sección, tarjetas grandes amarillas, párrafos continuos, texto amarillo sobre blanco.
5. **Un solo CTA primario amarillo por pantalla.**
6. **Nunca verde**, tampoco en WhatsApp: fondo amarillo, verde solo dentro del glifo.
7. **Sombras siempre teñidas** (§2.3).
8. **Rojo de error:** `#EF4444` (`--action-danger`, `border-red-500`, `ring-red-500/20`) para **borde, anillo e ícono**; `#DC2626` (`text-red-600`) para el **texto** del mensaje, porque `#EF4444` no llega a 4.5:1. Ningún otro rojo (`red-200/400/700`) y ningún rojo decorativo.
9. **Azul sobre azul:** en secciones con fondo `#0950F6`, texto blanco, bordes sutiles `rgba(255,255,255,0.12)` y acentos interactivos amarillos.

**Reemplazo canónico del gradiente hero:**

```css
/* Prohibido */
background: linear-gradient(
  135deg,
  #021440 0%,
  #04236b 35%,
  #0636a5 75%,
  #00277c 100%
);
/* Canónico: plano #0950F6 que solo varía hacia más claro */
background: linear-gradient(135deg, #0950f6 0%, #0950f6 55%, #3570f8 100%);
```

### 2.6 Anexo: tokens `@theme` vigentes (recorte fiel de `src/app/globals.css`)

```css
/* Colores */
--color-brand-blue-50: #E6EEFE;   --color-brand-blue-100: #BACEFD;
--color-brand-blue-200: #8EAFFB;  --color-brand-blue-300: #628FF9;
--color-brand-blue-400: #3570F8;  --color-brand-blue-500: #0950F6;
--color-brand-blue-600: #0950F6;  --color-brand-blue-700: #0950F6;  /* primario */
--color-brand-blue-800: #3570F8;  /* hover aclarado */
--color-brand-blue-900: #0950F6;  --color-brand-blue-950: #0950F6;
--color-brand-yellow-50: #FFFDE6;  --color-brand-yellow-100: #FFFAB8;
--color-brand-yellow-200: #FFF78A; --color-brand-yellow-300: #FFF45C;
--color-brand-yellow-400: #FFF12E; --color-brand-yellow-500: #FFEC01;
--color-brand-yellow-600: #E6D400;
--color-brand-white-50: #FFFFFF;   --color-brand-ink: #0950F6;
/* blue/gray/slate/zinc-* remapeados a brand-* (red de seguridad, no API) */

/* Tipografía */
--font-sans (Outfit) · --font-display / --font-headline (Anton) · --font-subheading (Bebas Neue) · --font-mono (Geist Mono)
--text-2xs: .625rem … --text-9xl: 9rem
--leading-hero: .8 · --leading-none: 1 · --leading-tight: 1.25 · --leading-relaxed: 1.625
--tracking-tighter: -.05em … --tracking-mega: .2em

/* Espaciado y radios (escala REDEFINIDA) */
--spacing-section-y: 6rem · --spacing-container-max: 80rem
--radius-sm: 6px · -md: 8px · -lg: 12px · -xl: 16px · -2xl: 24px · -3xl: 32px · -4xl: 40px

/* Sombras: todas rgba(9,80,246,α) o rgba(255,236,1,α), valores en §2.3 */
/* Animación: float-slow, pulse-subtle, border-pulse, shimmer, counter-up, logos-scroll (§8) */
/* Alias semánticos: --surface-*, --text-*, --border-subtle, --focus-ring, --action-* (§2.2) */
```

`tailwind.config.ts` se sigue cargando con `@config` y duplica colores, sombras y keyframes (`counter-up` solo existe ahí). Sus aliases `brand-ink` y `brand-dark` también valen `#0950F6`. Si un valor exacto importa, verificar el CSS compilado.

---

## 3. Typography Architecture

### 3.1 Familias (cargadas con `next/font/google` en `src/app/layout.tsx`)

| Rol                           | Familia    | Pesos cargados     | Variable            | Clase                            | Tratamiento                                                                                                                     |
| ----------------------------- | ---------- | ------------------ | ------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Display / impacto**         | Anton      | **400 únicamente** | `--font-display`    | `font-display` / `font-headline` | UPPERCASE, `line-height .8–.9`, `tracking -0.05em` a `-0.025em`, `text-wrap: balance`. H1/H2, cifras de impacto, ghost wordmark |
| **Subtítulos / labels / CTA** | Bebas Neue | **400 únicamente** | `--font-subheading` | `font-subheading`                | UPPERCASE, `tracking .05em–.1em`. H3, eyebrows, nav, labels de CTA/input, badges                                                |
| **Cuerpo / UI**               | Outfit     | variable 100–900   | `--font-sans`       | `font-sans` (default de `body`)  | Sentence case, `leading-relaxed`, `max-w-prose`, pesos 400–600, mínimo 16 px en párrafos                                        |
| **Métricas / tarifas**        | Geist Mono | variable           | `--font-mono`       | `font-mono`                      | `tabular-nums` obligatorio: precios (`$4.600`), distancias (`3,7 km`), códigos, coordenadas                                     |

**Regla de peso:** Anton y Bebas **no llevan clases de peso** (`font-bold`, `font-extrabold`, `font-black`). Solo existe el 400; cualquier peso mayor hace que el navegador sintetice una negrita deforme. Su jerarquía sale de tamaño, tracking y color. Opcional: `font-synthesis-weight: none` en `.font-display, .font-subheading`.

**Integración:** `next/font` define las variables en `<html className>`; `@theme` las reexpone con fallbacks. Como el CSS de `next/font` no está en capa y `@theme` sí, gana `next/font`.

> **Prohibido:** Inter, Roboto, Arial, system sans y serifs genéricas en contextos de marca. Title Case en oraciones (display y subheading van en UPPERCASE; cuerpo en sentence case).

### 3.2 Escala y utilities fluidas

| Token                  | Tamaño            | Uso                                                      |
| ---------------------- | ----------------- | -------------------------------------------------------- |
| `text-2xs`             | 0.625 rem (10 px) | **Piso absoluto**, solo metadato mono/Bebas en UPPERCASE |
| `text-xs`              | 0.75 rem (12 px)  | Labels, badges, help text                                |
| `text-sm`              | 0.875 rem (14 px) | UI compacta, CTA default                                 |
| `text-base`            | 1 rem (16 px)     | Párrafos                                                 |
| `text-lg` → `text-9xl` | 1.125 → 9 rem     | Títulos, display monumental                              |

| Utility                     | Familia    | Tamaño                         | `line-height` | `letter-spacing` |
| --------------------------- | ---------- | ------------------------------ | ------------- | ---------------- |
| `text-display`              | Anton      | `clamp(3rem, 5vw, 4.5rem)`     | 0.85          | -0.05em          |
| `text-h1`                   | Anton      | `clamp(2.25rem, 4vw, 3rem)`    | 0.9           | -0.025em         |
| `text-h2`                   | Anton      | `clamp(1.75rem, 3vw, 2.25rem)` | 0.9           | -0.02em          |
| `.font-display` (global)    | Anton      | según `text-*`                 | 0.9           | -0.05em          |
| `.font-subheading` (global) | Bebas      | según `text-*`                 | —             | 0.05em           |
| `.font-mono` (global)       | Geist Mono | según `text-*`                 | —             | tabular          |

Las utilities `text-display/h1/h2` **no fijan color**: aplicar `text-brand-blue-700` sobre blanco o `text-white` sobre azul. No existe `text-h3` en `globals.css`: para H3 usar `font-subheading text-xl md:text-2xl uppercase`.

**Line-height:** `leading-hero` 0.8 · `leading-none` 1 · `leading-tight` 1.25 · `leading-relaxed` 1.625. **Tracking:** `tighter` -0.05em · `tight` -0.025em · `normal` 0 · `wide` 0.025em · `wider` 0.05em · `widest` 0.1em · `mega` 0.2em.

**Micro-texto:** nada por debajo de `text-2xs` (10 px). `text-[8px]` y `text-[9px]` prohibidos; `text-[10px]` se escribe `text-2xs`; todo texto que se lee (no metadato) ≥ 12 px.

### 3.3 Tratamientos de firma tipográfica

1. **Knockout rotado (−1°):** palabra clave con `bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded -rotate-1`. Máximo uno por titular. Sobre azul puede invertirse (`bg-brand-blue-700 text-brand-yellow-500`, 4.94:1).
2. **Titular outline:** display con relleno transparente y `-webkit-text-stroke: 2px #0950F6` (o blanco con trazo `#0950F6`). Solo segunda línea de un H1.
3. **Ghost wordmark:** "ENVÍOS DOS RUEDAS" en `font-display text-[15vw] text-white/[0.04] whitespace-nowrap pointer-events-none select-none` con `aria-hidden="true"`.
4. **Íconos con texto superior blanco** y trazo `2px #0950F6`; slab inferior amarillo a −1° con texto `#0950F6`.
5. **Kinetic font stretch:** `.kinetic-font-stretch` (hover `scaleX(1.08)` + tracking `.02em`, 400 ms, `origin-left`).
6. **Eyebrow + cifra (StatBlock):** eyebrow `font-subheading text-xs tracking-mega uppercase text-brand-blue-700` sobre cifra `font-mono tabular-nums text-3xl text-brand-blue-700`. Sobre azul: eyebrow `text-white/85`, cifra `text-brand-yellow-500`. (`brand-blue-400` en el eyebrow solo si es ≥ 24 px.)

---

## 4. Hero Section

La home y cada landing de servicio abren con un hero **asimétrico, concreto y sin relleno**:

- **Estructura 7/5:** `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center`. Izquierda `lg:col-span-7`: badge + titular Anton + promesa en voseo + **un** CTA primario + 3 chips factuales. Derecha `lg:col-span-5`: `FloatTiltCard` con Hero Card Media (§9.1) o foto real de courier con tinte `#0950F6` multiply.
- **Fondo:** `relative isolate overflow-hidden` + `<HeroProceduralBackground variant="…" />` (gradiente canónico §2.5, halos y grilla). Los heros **no** escriben su propio gradiente inline: consumen la primitiva.
- **Altura:** `min-h-[90dvh]` o `min-h-[100dvh]`. Jamás `h-screen`.
- **Titular:** `font-display` UPPERCASE en 2–3 líneas, `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl` (o `text-display`), `text-white`, con **un** knockout rotado.
- **Badge de contexto:** `bg-brand-yellow-500 text-brand-blue-900 font-subheading text-xs uppercase tracking-widest` con dato real verificable ("Mar del Plata · 15+ años · 2026").
- **Promesa:** `text-lg text-white/85 max-w-prose` en voseo, promesa + consecuencia.
- **CTA:** un `CTANestedPill` primario ("Cotizá tu envío"). Secundario solo como link de texto o `variant="ghost"`/`"outline"` en blanco.
- **Prueba operativa:** 3 chips `font-subheading text-sm uppercase text-white/90` con datos reales de MDQ.
- **Prohibido:** hero centrado en desktop (`text-center` solo `< lg`), "Scroll para explorar", chevrons rebotando, texto sobre imágenes, partículas violetas/neón, más de un acento amarillo grande.

---

## 5. Components & Component Stylings

Primitivas en `src/components/ui/`, exportadas por el barril `index.ts` salvo `AddressAutocomplete`, `DynamicRouteMap`, `LeafletRouteMap`, `sparkles`, `timeline-animation` y `vertical-cut-reveal` (se importan por ruta). **Regla:** antes de escribir markup de tarjeta, botón, input, selector, stepper, badge o grilla, usar la primitiva. Alias de import canónico: `@/components/ui` (hoy conviven `@/src/components/ui`, que resuelve por el fallback `./*` de `tsconfig`; no usarlo en código nuevo).

**Adopción actual** (consumidores fuera de `ui/`, sin tests):

| Primitiva                                                                              | Consumidores | Estado                     |
| -------------------------------------------------------------------------------------- | ------------ | -------------------------- |
| `CTANestedPill`                                                                        | 15           | ✅                         |
| `HeroProceduralBackground`                                                             | 7            | ⚠️ viola paleta (§11)      |
| `Card` (+ subcomponentes)                                                              | 4            | ✅ páginas de pricing      |
| `Sparkles`, `TimelineContent`, `VerticalCutReveal`                                     | 4 c/u        | Helpers de animación       |
| `AddressAutocomplete`, `DynamicRouteMap`                                               | 2            | Cotizador Express          |
| `DoubleBezelCard`, `InputField`, `FloatTiltCard`                                       | 1            | 🟡 sub-adoptadas           |
| `RadioCardGroup`, `StepperHorizontal`, `StepperVertical`, `LogosCarousel`, `BentoGrid` | **0**        | 🟡 markup duplicado a mano |

Cada ficha indica el **comportamiento actual** del código y, en **Objetivo**, lo que exige el sistema. Cuando se corrija la deuda, la ficha se actualiza en el mismo PR.

### 5.1 DoubleBezelCard

**Para qué:** contenedor firma de dos capas para contenido primario (servicios, segmentos, métricas). Base de `BentoGridItem` y de `Card variant="bezel"`.

```tsx
import { DoubleBezelCard } from '@/components/ui';

<DoubleBezelCard>
  <h3 className="font-subheading text-xl uppercase text-brand-blue-900">Envíos Express</h3>
  <p className="text-sm text-brand-blue-900">Retiro y entrega en el día en todo General Pueyrredón.</p>
</DoubleBezelCard>

<DoubleBezelCard variant="dark">
  <p className="font-mono text-2xl tabular-nums text-brand-yellow-500">$3.700</p>
</DoubleBezelCard>
```

| Capa     | `light`                                                                                                            | `dark`                                         |
| -------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| Exterior | `double-bezel-outer rounded-2xl p-2 shadow-float bg-brand-blue-50/80 border border-brand-blue-100`                 | igual con `border-brand-blue-100/80`           |
| Interior | `double-bezel-inner rounded-xl p-6 shadow-sm overflow-hidden bg-white border-brand-blue-50/50 text-brand-blue-900` | `bg-brand-blue-700 border-white/10 text-white` |
| Hover    | `hover:shadow-antigravity-deep hover:border-brand-blue-300`                                                        | `hover:border-brand-yellow-400/80`             |

| Prop                           | Tipo                             | Default   | Descripción                                  |
| ------------------------------ | -------------------------------- | --------- | -------------------------------------------- |
| `children`                     | `ReactNode`                      | —         | Contenido                                    |
| `variant`                      | `'light' \| 'dark'`              | `'light'` | `dark` pinta el interior en `brand-blue-700` |
| `hoverEffect`                  | `boolean`                        | `true`    | Sombra y borde de hover                      |
| `outerClassName` / `className` | `string`                         | —         | Exterior                                     |
| `innerClassName`               | `string`                         | —         | Interior                                     |
| `...props`                     | `HTMLAttributes<HTMLDivElement>` | —         | Al exterior; soporta `ref`                   |

**A11y:** contenedor neutro. Si toda la tarjeta es clicable, el elemento interactivo es un `<a>`/`<button>` real con `focus-visible:ring-2 ring-brand-blue-500 ring-offset-2`.

**Deuda:** 🟡 radio duplicado (la utility fija 16 px/12 px y el componente agrega `rounded-2xl` = **24 px** / `rounded-xl` = 16 px; el JSDoc dice "rounded-2xl (16px)", incorrecto). **Objetivo:** una sola vía (preferir la utility) y JSDoc alineado. ⚪ `'use client'` innecesario.

### 5.2 CTANestedPill

**Para qué:** único componente de acción del sistema (link o botón). Registra analítica: `whatsappClick` si `href` apunta a `wa.me`/`whatsapp.com`, `ctaClick` en otro caso.

```tsx
import { CTANestedPill } from '@/components/ui';

<CTANestedPill href="/cotizar/express" size="large">Cotizá tu envío</CTANestedPill>
<CTANestedPill href="/servicios" variant="outline">Mirá los servicios</CTANestedPill>
<CTANestedPill type="submit" disabled={isPending}>{isPending ? 'Calculando…' : 'Calcular'}</CTANestedPill>
```

| Variant                 | Reposo                                                                             | Hover                                                                    | Active                          | Chip hover                                              |
| ----------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------- | ------------------------------------------------------- |
| `primary`               | `bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-500 shadow-accent-sm` | `bg-brand-yellow-400 shadow-cta-glow`                                    | `scale-[.98] translate-y-[1px]` | `bg-brand-blue-700 text-brand-yellow-500 translate-x-1` |
| `elevated` (sobre azul) | `bg-white text-brand-blue-700 border-brand-blue-100 shadow-elevated`               | `shadow-hover-lift border-brand-blue-300` · hoy `text-brand-blue-800` ⚠️ | `scale-[.98]`                   | `bg-brand-blue-700 text-white`                          |
| `outline`               | `bg-transparent text-brand-blue-700 border-2 border-brand-blue-700`                | `bg-brand-blue-50`                                                       | `scale-[.98]`                   | ídem                                                    |
| `ghost`                 | `bg-transparent text-brand-blue-700 border-transparent`                            | `bg-brand-blue-50`                                                       | `scale-[.98]`                   | ídem                                                    |

| Size           | Clases                             | Alto     |
| -------------- | ---------------------------------- | -------- |
| `compact`      | `px-4 py-1.5 text-xs min-h-[36px]` | 36 px ⚠️ |
| `default`      | `px-5 py-2 text-sm min-h-[44px]`   | 44 px    |
| `large` / `lg` | `px-8 py-3 text-base min-h-[52px]` | 52 px    |

Focus-visible `ring-2 ring-brand-blue-500 ring-offset-2` (sobre azul `ring-offset-brand-blue-700`) · disabled `opacity-50 cursor-not-allowed pointer-events-none` · loading: no hay estado propio (usar `disabled` + texto).

| Prop             | Tipo                                              | Default          | Descripción                                           |
| ---------------- | ------------------------------------------------- | ---------------- | ----------------------------------------------------- |
| `children`       | `ReactNode`                                       | —                | Etiqueta (`truncate`)                                 |
| `href`           | `string`                                          | —                | Si existe y no está `disabled`, renderiza `next/link` |
| `variant`        | `'primary' \| 'elevated' \| 'outline' \| 'ghost'` | `'primary'`      | Estilo                                                |
| `size`           | `'compact' \| 'default' \| 'large' \| 'lg'`       | `'default'`      | `lg` = `large`                                        |
| `icon`           | `ReactNode`                                       | `<ArrowRight />` | `null` oculta el chip                                 |
| `iconPosition`   | `'left' \| 'right'`                               | `'right'`        | —                                                     |
| `iconClassName`  | `string`                                          | —                | Chip                                                  |
| `target`, `rel`  | `string`                                          | —                | Modo link                                             |
| `disabled`       | `boolean`                                         | —                | En modo link fuerza `<button disabled>`               |
| `...buttonProps` | `ButtonHTMLAttributes`                            | —                | `type` default `button`; `id` = id de analítica       |

**WhatsApp CTA:** siempre `variant="primary"` (fondo amarillo, hover `#FFF12E`); el glifo `FaWhatsapp` puede llevar verde **dentro** del ícono. Nunca botón verde.

**Deuda / Objetivo:**

- 🔴 hover `elevated` a `#3570F8` (4.35:1) → `hover:text-brand-blue-700`.
- 🟠 `compact` < 44 px → no usar en superficies táctiles o subir a `min-h-[44px]`.
- 🟡 La utility `cta-nested-pill` (en `globals.css`) fija `min-height: 56px`, padding, fondo amarillo y color, y se aplica en todas las variantes; compite en la misma capa con las clases del componente y `tailwind-merge` no la conoce. Riesgo: `outline`/`ghost` con fondo amarillo o `compact` a 56 px. **Objetivo:** dejar la utility solo con lo estructural (display, radius, familia, uppercase, tracking) o quitarla del componente. Ídem `cta-nested-icon` (2.5 rem) vs `w-8 h-8`.
- 🟡 Chip sin `aria-hidden="true"`; botón solo-ícono sin `aria-label`.

### 5.3 InputField

**Para qué:** campo de texto con label, ícono, ayuda y error. Todo formulario del sitio lo usa (hoy solo `empresas-cuenta-corriente`).

```tsx
import { InputField } from "@/components/ui";
import { Phone } from "lucide-react";

<InputField
  label="Teléfono"
  name="telefono"
  type="tel"
  required
  icon={<Phone className="w-4 h-4" />}
  helpText="Te escribimos por WhatsApp"
  error={errors.telefono}
/>;
```

| Estado   | Clases del `<input>`                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Base     | `h-11 w-full border-2 rounded-xl bg-white font-sans text-sm text-brand-blue-900 placeholder:text-brand-blue-500` + `pl-10` con ícono |
| Default  | `border-brand-blue-300`                                                                                                              |
| Hover    | `hover:border-brand-blue-400`                                                                                                        |
| Focus    | `focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 focus:outline-none`                                           |
| Error    | `border-red-500 ring-2 ring-red-500/20` (texto del input en `text-brand-blue-900`)                                                   |
| Disabled | `border-brand-blue-100 bg-brand-blue-50/50 text-brand-blue-400 cursor-not-allowed`                                                   |

- **Label:** arriba, `font-subheading text-xs uppercase tracking-[.05em] text-brand-blue-700` (sin `font-bold`, §3.1). Sin floating labels.
- **Help:** `font-mono text-xs text-brand-blue-900` (hoy `text-[11px] text-brand-blue-500`).
- **Error (objetivo):** `<p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 font-sans text-xs text-red-600">` con `AlertCircle` 16 px `text-red-500 aria-hidden`.

| Prop                                    | Tipo                  | Default   | Descripción                      |
| --------------------------------------- | --------------------- | --------- | -------------------------------- |
| `label`                                 | `string`              | —         | Asociado vía `htmlFor`           |
| `error`                                 | `string`              | —         | Estado de error + `aria-invalid` |
| `helpText`                              | `string`              | —         | Se oculta si hay error           |
| `icon`                                  | `ReactNode`           | —         | Ícono izquierdo                  |
| `containerClassName` / `labelClassName` | `string`              | —         | —                                |
| `id`                                    | `string`              | `useId()` | —                                |
| `required`                              | `boolean`             | —         | `*` visual en el label           |
| `...inputProps`                         | `InputHTMLAttributes` | —         | Al `<input>`; soporta `ref`      |

**Deuda / Objetivo:** 🟠 `required` se desestructura y **no llega** al `<input>` → reenviarlo. 🟠 error/ayuda sin `aria-describedby` → vincular ids; error con `role="alert"`. 🟡 `*` con `aria-hidden="true"`. 🟡 texto de error hoy `text-red-600` a 11 px en mono → `text-xs` sans.

### 5.4 RadioCardGroup

**Para qué:** selector de servicio en tarjetas (Express / LowCost / Flex) para los cotizadores.

```tsx
import { RadioCardGroup } from "@/components/ui";

<RadioCardGroup
  name="servicio"
  value={servicio}
  onChange={setServicio}
  options={[
    {
      id: "express",
      serviceType: "EXPRESS",
      label: "Express",
      description: "Entrega en el día",
      price: "$3.700",
      badge: "Prioritario",
    },
    {
      id: "lowcost",
      serviceType: "LOW_COST",
      label: "LowCost",
      description: "Ruteo por lotes",
      price: "$3.000",
    },
  ]}
/>;
```

| `serviceType` seleccionado | Tarjeta                                                                                                          | Check    | Precio                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------- | ----------------------- |
| `EXPRESS` (y default)      | `bg-brand-blue-700 border-brand-blue-700 text-white shadow-md`                                                   | amarillo | `text-brand-yellow-500` |
| `LOW_COST`                 | `bg-brand-blue-50 border-brand-blue-200 text-brand-blue-700 shadow-sm`                                           | azul     | `text-brand-blue-700`   |
| `FLEX`                     | `bg-brand-yellow-50 border-brand-yellow-200 text-brand-blue-700 shadow-sm`                                       | azul     | `text-brand-blue-700`   |
| no seleccionada            | `bg-white border-2 border-brand-blue-100 text-brand-blue-900`, hover `border-brand-blue-200 bg-brand-blue-50/30` | vacío    | —                       |

Interacción: `hover:-translate-y-0.5 active:scale-[0.98]`, `cubic-bezier(0.16,1,0.3,1)` 200 ms, focus-visible `ring-2 ring-brand-blue-500 ring-offset-2`, disabled `opacity-50 pointer-events-none`.

| Prop                 | Tipo                             | Default                        | Descripción                                                                   |
| -------------------- | -------------------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| `options`            | `RadioCardOption[]`              | —                              | `{ id, label, description?, price?, badge?, serviceType?, icon?, disabled? }` |
| `value` / `onChange` | `string` / `(v: string) => void` | —                              | Controlado                                                                    |
| `name`               | `string`                         | `'service-selector'`           | —                                                                             |
| `gridCols`           | `string`                         | `'grid-cols-1 md:grid-cols-3'` | —                                                                             |
| `className`          | `string`                         | —                              | —                                                                             |

**Deuda / Objetivo:** 🟠 doble parada de tab (`label role="radio" tabIndex=0` + input `sr-only` enfocable) → elegir input nativo o patrón ARIA puro. 🟠 falta navegación con flechas y roving tabindex. 🔴 descripción `text-brand-blue-700/80` y `text-brand-blue-100` en Express; badge no seleccionado `text-brand-blue-800` sobre `bg-brand-blue-100`. 🟡 `aria-label` fijo → prop. 🟡 `aria-disabled`. 🟡 detección por `includes('LOW')` → comparar contra el enum `ServiceType`. Los precios los pasa el consumidor y **deben salir de `pricing.ts`** (§12).

### 5.5 StepperHorizontal

**Para qué:** progreso de pasos en los cotizadores.

```tsx
<StepperHorizontal
  steps={[
    { title: "Origen" },
    { title: "Destino" },
    { title: "Confirmá", subtitle: "WhatsApp" },
  ]}
  currentStep={1}
  onStepClick={setStep}
/>
```

| Estado     | Círculo 40 px                                                               | Label                 |
| ---------- | --------------------------------------------------------------------------- | --------------------- |
| Completado | `bg-brand-yellow-500 border-brand-yellow-500 text-brand-blue-900` + `Check` | `text-brand-blue-900` |
| Activo     | `bg-brand-blue-700 text-white ring-4 ring-brand-blue-500/20 scale-105`      | `text-brand-blue-700` |
| Pendiente  | `bg-white border-brand-blue-300 text-brand-blue-500`                        | `text-brand-blue-500` |

Línea base `h-0.5 bg-brand-blue-100`; progreso `bg-brand-yellow-500`. **Nunca verde.**

Props: `steps` (`{ title; subtitle? }[]`), `currentStep` (0-based), `onStepClick?`, `className`.

**Deuda / Objetivo:** 🟠 `<ol>/<li>` + `aria-current="step"` + texto oculto de estado; pasos clicables como `<button>` real. 🟡 anima `width` → `scaleX` con `origin-left`. 🟠 label activo con `font-extrabold` (faux bold).

### 5.6 StepperVertical

**Para qué:** timeline "Cómo funciona" y pasos de seguimiento (típicamente sobre azul).

```tsx
<StepperVertical
  activeStep={1}
  variant="dark"
  steps={[
    { title: "Cotizá", description: "Ingresá origen y destino." },
    {
      title: "Retiramos",
      description: "Pasamos por Güemes, Chauvín o donde estés.",
      badge: "Hoy",
    },
    {
      title: "Entregamos",
      description: "Seguimiento por WhatsApp.",
      detail: "[métrica]",
    },
  ]}
/>
```

Punto 24 px: completado `bg-brand-yellow-500 ring-4 ring-brand-yellow-100` + check · activo `bg-brand-yellow-500 ring-4 ring-brand-yellow-500/30 animate-pulse-subtle scale-110` · pendiente `bg-brand-blue-100` (light) / `bg-brand-blue-900 border-brand-blue-300` (dark). Número `font-display` ("01."). **Nunca verde.**

Props: `steps` (`{ number?, title, description, detail?, badge? }[]`), `activeStep`, `completedSteps?`, `variant` (`'light'`), `className`.

**Deuda / Objetivo:** 🟠 `<ol>` + `aria-current`; activo y completado se distinguen solo por anillo/pulso → texto oculto de estado. 🔴 descripción `text-brand-blue-700/80` → `text-brand-blue-900`; en dark `text-brand-blue-100/90` → `text-white/85`.

### 5.7 LogosCarousel

**Para qué:** marquee infinito de logos de clientes reales.

```tsx
<LogosCarousel
  logos={[
    {
      name: "[cliente]",
      logoUrl: "/clientes/[cliente].webp",
      alt: "Logo de [cliente]",
    },
  ]}
  speed={30}
/>
```

Máscara `linear-gradient(to right, transparent, black 10%, black 90%, transparent)` (canal alfa, no color). Track `flex items-center gap-12 w-max`. Ítems `h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100`.

Props: `logos` (`LogoItem[]`: `{ name, logoUrl?, logoSvg?, alt? }`), `speed` (`30` s), `className`.

**Deuda / Objetivo:** 🟠 usa `animate-marquee` y `animation-paused`, que no existen → `animate-logos-scroll` + `is-paused`. 🟠 tres copias con keyframe a `-50%` → **dos** copias exactas. 🔴 `DEFAULT_LOGOS` repite el logo propio con partners inventados → eliminar el default (prop requerida) o placeholder `[cliente]`. 🟠 copias duplicadas con `aria-hidden="true"`. 🟡 la pausa por foco no se dispara (no hay enfocables): usar `onFocusCapture`/`onBlurCapture` o quitarla.

### 5.8 FloatTiltCard

**Para qué:** tilt 3D decorativo de la tarjeta media del hero.

```tsx
<FloatTiltCard className="rounded-3xl">
  <Image
    src="/img/heroes/servicio-express.webp"
    alt=""
    width={640}
    height={480}
  />
</FloatTiltCard>
```

Física: `perspective: 1000px` · `preserve-3d` · mousemove → `translateY(-6px) rotateX(±8°) rotateY(±8°)` (transición 0.1 s); salida 0.5 s `cubic-bezier(0.25,1,0.5,1)`; hover `shadow-antigravity-deep`. Sin efecto en touch.

Props: `children`, `perspective` (`1000`), `disabled` (`false`), `className`.

✅ Respeta `prefers-reduced-motion` (lee y escucha el media query). ⚪ Si hay jank, mover el transform a `ref.style` + `requestAnimationFrame`.

### 5.9 BentoGrid / BentoGridItem

**Para qué:** vitrina asimétrica de 12 columnas.

```tsx
<BentoGrid>
  <BentoGridItem span="hero">Envíos Express</BentoGridItem>
  <BentoGridItem span="standard">Envíos LowCost</BentoGridItem>
  <BentoGridItem span="full" variant="dark">
    Cotizá tu envío
  </BentoGridItem>
</BentoGrid>
```

Grilla: `grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(340px,auto)] md:auto-rows-[380px]`.

| `span`                               | Mobile | `md`                  | `lg`                  |
| ------------------------------------ | ------ | --------------------- | --------------------- |
| `'hero'` / `'7'` / `7`               | 1 col  | 12                    | 7                     |
| `'standard'` / `'5'` / `5` (default) | 1 col  | 6                     | 5                     |
| `'full'` / `'12'` / `12`             | 1 col  | 12                    | 12                    |
| otro `number`                        | 1 col  | `md:col-span-${n}` ⚠️ | `lg:col-span-${n}` ⚠️ |

Props de `BentoGridItem`: `span`, `doubleBezel` (`true`), `variant` (`'light'`), `innerClassName`, `className`.

**Deuda / Objetivo:** 🟠 spans numéricos arbitrarios generan clases que Tailwind no ve → mapa estático o tipo limitado a los 3 spans. 🟡 `md:auto-rows-[380px]` recorta contenido largo → `minmax(380px,auto)`. 🟡 en `md` 7+5 se vuelve 12+6.

### 5.10 Badge

```tsx
<Badge variant="urgent" icon={<Zap className="w-3 h-3" aria-hidden="true" />}>
  En el día
</Badge>
```

| Variant             | Clases actuales                                                                    | Contraste   | Objetivo                               |
| ------------------- | ---------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| `urgent`            | `bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-400 shadow-accent-sm` | 4.94 ✅     | —                                      |
| `accent`            | `bg-brand-yellow-500 text-brand-blue-900 border-brand-yellow-500 shadow-accent-sm` | 4.94 ✅     | —                                      |
| `secure`            | `bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200`                       | 5.17 ✅     | —                                      |
| `economic`          | `bg-brand-blue-100 text-brand-blue-800 border-brand-blue-200`                      | **2.76 ❌** | `bg-brand-blue-50 text-brand-blue-900` |
| `flex`              | `bg-brand-yellow-100 text-brand-blue-900 border-brand-yellow-200`                  | 5.62 ✅     | —                                      |
| `neutral` (default) | `bg-white text-brand-blue-700 border-brand-blue-100 shadow-sm`                     | 6.02 ✅     | —                                      |
| `outline`           | `bg-transparent text-brand-blue-700 border-brand-blue-700`                         | según fondo | —                                      |
| `primary`           | `bg-brand-blue-700 text-white border-brand-blue-700`                               | 6.02 ✅     | —                                      |

Tamaños: `sm` `px-2 py-0.5 text-[10px]` (→ `text-2xs`) · `md` (default) `px-3 py-1 text-xs` · `lg` `px-4 py-1.5 text-sm`. Props: `variant`, `size`, `rounded` (`'full'`), `icon`, `className`. Sin `font-bold` (§3.1). Si comunica un estado que cambia, envolver en `aria-live`.

### 5.11 AddressAutocomplete

**Para qué:** combobox de direcciones (Google Places vía `/api/places/autocomplete` y `/api/places/details`). Cotizador Express.

```tsx
import AddressAutocomplete from '@/components/ui/AddressAutocomplete';

<label htmlFor="origen" className="font-subheading text-xs uppercase tracking-[.05em] text-brand-blue-700">Origen</label>
<AddressAutocomplete id="origen" placeholder="Ej: Güemes 2800" value={origen} onChange={setOrigen}
  onSelectCoordinate={setOrigenCoords} required
  className="h-11 w-full rounded-xl border-2 border-brand-blue-300 px-4 text-sm text-brand-blue-900" />
```

Props: `id` (requerido), `placeholder`, `value`, `onChange`, `onSelectCoordinate` (`null` al tipear), `required`, `className` (del `<input>`). Debounce 300 ms, mínimo 3 caracteres, ↑/↓/Enter/Escape, click afuera cierra.

✅ `role="combobox"`, `aria-autocomplete`, `aria-expanded`, `aria-controls`, `aria-activedescendant`, `listbox`/`option`/`aria-selected`.

**Deuda / Objetivo:** 🔴 lista `bg-brand-blue-800` (`#3570F8`) con texto blanco (4.35) → `bg-brand-blue-700` o lista blanca `bg-white border-brand-blue-100 shadow-elevated` con opción activa `bg-brand-blue-50`. 🟡 sin anuncio de resultados (`aria-live`) ni estado vacío/error. 🟡 carreras de respuestas → `AbortController`. ⚪ `encodeURIComponent(place_id)`.

### 5.12 Card (`card.tsx`)

| Variant    | Clases                                                                                                                                          |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `default`  | `rounded-lg border border-brand-blue-100 bg-brand-white-50 text-brand-blue-900 shadow-sm`                                                       |
| `bezel`    | exterior `double-bezel-outer p-2 shadow-float bg-brand-blue-50/80` + interior `double-bezel-inner bg-white rounded-xl shadow-inner`             |
| `glass`    | `glass-card` ⚠️ **clase inexistente** → definir (`--surface-glass` + `border-white/12` + `backdrop-blur-md rounded-3xl`) o eliminar la variante |
| `elevated` | `border-transparent shadow-elevated hover:shadow-hover-lift`                                                                                    |

Subcomponentes: `CardHeader` (`p-6 space-y-1.5`), `CardTitle` (`h3 font-subheading text-2xl uppercase text-brand-blue-700`), `CardDescription` (hoy `text-brand-blue-400` 🔴 → `text-brand-blue-900`), `CardContent` (`p-6 pt-0`), `CardFooter`.

### 5.13 HeroProceduralBackground

**Para qué:** fondo decorativo de todo hero: gradiente base + tres halos con blur + grilla SVG 48 px + motivo por servicio.

```tsx
<section className="relative isolate overflow-hidden min-h-[90dvh]">
  <HeroProceduralBackground variant="express" />
  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">…</div>
</section>
```

| `variant`   | Motivo                           | Animación                                       |
| ----------- | -------------------------------- | ----------------------------------------------- |
| `express`   | Arterias curvas punteadas        | `animate-pulse` (con guardia de reduced motion) |
| `lowcost`   | Anillos concéntricos de ruteo    | —                                               |
| `flex`      | Corredores + cuadros de despacho | —                                               |
| `3pl`       | Polígono de nodos de depósito    | —                                               |
| `community` | Grafo de nodos                   | —                                               |
| `contact`   | Radar GPS                        | `animate-ping` 4 s                              |
| `default`   | Solo grilla                      | —                                               |

**Deuda / Objetivo:** 🔴 gradiente base y halos con tonos prohibidos → gradiente canónico §2.5 y halos `rgba(9,80,246,…)` / `rgba(53,112,248,…)` / `rgba(255,236,1,…)`. 🟡 `aria-hidden="true"` en el contenedor. 🟡 `id` del `<pattern>` fijo → `useId()`.

### 5.14 Helpers de animación y mapas

| Módulo                                          | Propósito                                                | Nota                                                               |
| ----------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| `timeline-animation.tsx` → `TimelineContent`    | Entradas `whileInView` con presets                       | Queda cubierto por `MotionConfig` (§8.4)                           |
| `vertical-cut-reveal.tsx` → `VerticalCutReveal` | Revelado por palabra/letra                               | ✅ `sr-only` + partes `aria-hidden`                                |
| `sparkles.tsx` → `Sparkles`                     | Partículas tsParticles                                   | Desactivar con reduced motion; costoso en mobile                   |
| `DynamicRouteMap.tsx`                           | `next/dynamic` de Leaflet + skeleton `bg-brand-blue-700` | ✅                                                                 |
| `LeafletRouteMap.tsx`                           | Mapa de ruta con overlays                                | ✅ `role="region"`, `aria-live`; 🔴 polyline `#0636A5` → `#0950F6` |

### 5.15 Patrones compuestos (sin primitiva propia)

**Header institucional:** `fixed top-0 z-50 bg-brand-blue-700`; al scrollear `bg-brand-blue-700/95 backdrop-blur-md shadow-elevated border-b border-white/10` y padding `py-4 → py-3`. Logo `/logo-envios-simplified.webp` ≥ 120 px. Links `font-subheading uppercase text-white hover:text-brand-yellow-500`, activo con subrayado amarillo animado (`scaleX`).

**Mobile nav (`< lg`):** disparador 44 px con `aria-expanded`/`aria-controls`; panel full-height `bg-brand-blue-700`, links `font-subheading text-2xl`, CTA primario al pie, cierre con `Escape` y focus trap.

**Footer:** `bg-brand-blue-700` con franja superior `h-1.5 bg-brand-yellow-500`; columnas 4/3/3/2 en desktop, 1 en mobile; datos reales (Friuli 1972 · 223 660-2699 · hola@enviosdosruedas.com · Mar del Plata).

**Glass sobre azul:** `bg-white/[0.06] border border-white/12 backdrop-blur-md rounded-3xl`.

**Status dot en vivo:** 8 px `bg-brand-yellow-500` + `shadow-glow-yellow` + `animate-pulse-subtle` ("En camino"); pendiente `bg-brand-blue-300` estático.

**Skeleton:** bloques con `animate-shimmer` sobre `bg-[linear-gradient(90deg,var(--color-brand-blue-50),var(--color-brand-blue-100),var(--color-brand-blue-50))] bg-[length:200%_100%]`, mismas proporciones que el layout final. Sin spinners genéricos (salvo `Loader2` inline en inputs).

**Empty state:** ícono Lucide 48 px en `bg-brand-blue-50 rounded-2xl p-4`, título `font-subheading text-2xl text-brand-blue-700`, copy en voseo accionable ("Todavía no cargaste envíos. Ingresá el primero o cotizá tu ruta.") y CTA.

**Error state (bloque):** `rounded-xl border-2 border-red-500 bg-white p-4` + `AlertCircle` `text-red-500` + texto `text-red-600` / `text-brand-blue-900` + botón de reintento. **Sin** `border-l-4`.

**Toast:** esquina inferior derecha, `bg-brand-blue-700 text-white rounded-xl shadow-elevated border border-brand-yellow-500/60`, entrada con spring, `role="status"`. **Sin** `border-l-4`.

**Slider de servicios:** controles ≥ 44 px y swipe nativo.

---

## 6. Layout, Grid & Whitespace Strategy

### 6.1 Contenedor

| Patrón                  | Clases                                       | Nota                              |
| ----------------------- | -------------------------------------------- | --------------------------------- |
| **Canónico**            | `mx-auto max-w-7xl px-6 lg:px-8` (1280 px)   | 73 usos                           |
| Equivalente hardcodeado | `max-w-[1280px]`                             | 5 usos en `app/page.tsx` → migrar |
| Estrecho                | `max-w-6xl`                                  | —                                 |
| Prosa                   | `max-w-prose` / `max-w-[720px]` / `max-w-xl` | textos                            |

Secciones full-bleed para fondos tonales; contenido siempre dentro del contenedor.

### 6.2 Ritmo vertical

| Token                | Valor      | Uso                                   |
| -------------------- | ---------- | ------------------------------------- |
| `py-section-y`       | 6rem       | Separación estándar entre secciones   |
| `py-section-y-tight` | 3rem       | Secciones densas / mobile             |
| `gap-6 lg:gap-8`     | 24 / 32 px | Grillas de tarjetas                   |
| `gap-4`              | 16 px      | Controles y formularios               |
| `p-6` / `p-2`        | 24 / 8 px  | Padding de tarjeta / grosor del bezel |

Alturas de control (`tailwind.config.ts`): `control-sm` 36 px · `control` 40 px · `control-lg` 44 px · `control-xl` 56 px · `control-2xl` 64 px. Objetivo táctil: **≥ 44 px**.

### 6.3 Radios (escala REDEFINIDA)

| Clase         | Valor en este repo | Default Tailwind |
| ------------- | ------------------ | ---------------- |
| `rounded-sm`  | 6 px               | 4 px             |
| `rounded-md`  | 8 px               | 6 px             |
| `rounded-lg`  | 12 px              | 8 px             |
| `rounded-xl`  | **16 px**          | 12 px            |
| `rounded-2xl` | **24 px**          | 16 px            |
| `rounded-3xl` | 32 px              | 24 px            |
| `rounded-4xl` | 40 px              | —                |

Radios arbitrarios (`rounded-[20px]`, 183 usos) prohibidos en código nuevo: mapear a la escala.

### 6.4 Grilla y composición

- **CSS Grid de 12 columnas** declarativo; nunca `calc()` fraccionario ni porcentajes inline.
- **Bento asimétrico (servicios):** `BentoGrid` (§5.9). Express y Depósito/Fulfillment 3PL → `hero` (7); LowCost y Flex → `standard` (5); cotizador → `full` (12). Filas alternadas 7+5 / 5+7.
- **Zig-zag editorial:** imagen/texto 5/7 y 7/5 alternados.
- **Sin superposición destructiva:** solo texturas (ghost wordmark, halos, slabs) en capa trasera con `pointer-events-none aria-hidden`.
- **Alturas:** `min-h-[100dvh]` / `min-h-[90dvh]`. `h-screen` prohibido.

### 6.5 Ritmo cromático de la home

1. **Hero:** `brand-blue-700`, split 7/5, tarjeta tilt.
2. **Trust bar:** `brand-blue-50`, StatBlocks mono con datos reales.
3. **Servicios:** blanco, Bento + Double Bezel.
4. **Cómo funciona:** `brand-blue-700`, `StepperVertical variant="dark"`.
5. **Prueba social:** blanco, carrusel de comercios marplatenses reales.
6. **CTA final:** panel `brand-blue-700` con tarjeta blanca `rounded-3xl` y slab amarillo `-skew-x-12` al 10% sangrando a la derecha.
7. **Footer:** `brand-blue-700` con franja amarilla de 6 px.

_Nunca dos bloques azules ni dos blancos consecutivos sin un separador tonal (`brand-blue-50`)._

---

## 7. Responsive Rules

| Regla                     | Especificación                                                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Mobile-first collapse** | `< 768px`: toda grilla multi-columna pasa a una columna; el Bento sigue orden de lectura.                                   |
| **Sin scroll horizontal** | `overflow-x-clip`/`overflow-hidden` en wrappers; tablas en `overflow-x-auto`.                                               |
| **Tipografía fluida**     | Titulares con `clamp()` (`text-display`, `text-h1`, `text-h2`); párrafos ≥ 16 px; nada < 10 px.                             |
| **Touch targets**         | ≥ 44×44 px en botones, links, dots y controles.                                                                             |
| **Imágenes**              | `next/image` con `sizes`; la tarjeta tilt queda estática en touch.                                                          |
| **Navegación**            | Menú horizontal `≥ lg`; panel full-height accesible `< lg`.                                                                 |
| **Breakpoints**           | Tailwind default: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536. Probar en 320 · 375 · 768 · 1024 · 1280 · 1920. |
| **Hero mobile**           | Centrado solo `< lg`; CTA `w-full sm:w-auto`.                                                                               |

---

## 8. Motion Philosophy

### 8.1 Principios

1. **Movimiento = velocidad de reparto**: desplazamientos cortos (`-6px`, `translate-x-1`), escalas mínimas (0.98–1.10).
2. **Motor:** `motion/react` para entradas, modales y layouts; GSAP solo en `LogisticaNetworkCanvas` (canvas procedural) y `CarruselRedes`. Animaciones en Client Components lo más abajo posible del árbol.
3. **Springs por defecto:** `transition={{ type: 'spring', stiffness: 100, damping: 20 }}`. Curvas CSS: firma `cubic-bezier(0.25, 1, 0.5, 1)`; selección de tarjetas `cubic-bezier(0.16, 1, 0.3, 1)`. `linear` solo en marquees.
4. **Duraciones:** micro 200–250 ms · tarjetas 300 ms · retorno de tilt 500 ms · loops 2–6 s · marquees 30–42 s.
5. **Solo `transform` y `opacity`.** Prohibido animar `width`, `height`, `margin`, `padding`, `top/left`.
6. **Nada de rebote** (`animate-bounce` erradicado).

### 8.2 Orquestación en cascada

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};
// whileInView con viewport={{ once: true, margin: '-80px' }}
```

### 8.3 Keyframes y animaciones registradas (valores reales de `globals.css` / `tailwind.config.ts`)

| Clase                   | Keyframe        | Definición                                              | Uso                                                       |
| ----------------------- | --------------- | ------------------------------------------------------- | --------------------------------------------------------- |
| `animate-float-slow`    | `float-slow`    | 6 s ease-in-out ∞, `translateY(0 → -8px)`               | Badges flotantes, tarjeta hero                            |
| `animate-pulse-subtle`  | `pulse-subtle`  | 2 s ease-in-out ∞, `opacity 1 → .8`                     | Step activo, status dot, badge de precio en mapa          |
| `animate-border-pulse`  | `border-pulse`  | 2 s ∞, borde `rgba(9,80,246,.2 → .4)`                   | Estados "en vivo"                                         |
| `animate-shimmer`       | `shimmer`       | 2.5 s ∞, `background-position -200% → 200%`             | Skeletons                                                 |
| `animate-counter-up`    | `counter-up`    | 0.6 s ease-out, `opacity 0 → 1` + `translateY(8px → 0)` | Entrada de cifras (keyframe solo en `tailwind.config.ts`) |
| `animate-logos-scroll`  | `logos-scroll`  | 30 s linear ∞, `translateX(0 → -50%)`                   | `LogosCarousel`                                           |
| `animate-marquee-left`  | `marquee-left`  | 36 s linear ∞                                           | `SocialProofSection`, `LowCostHero`                       |
| `animate-marquee-right` | `marquee-right` | 42 s linear ∞                                           | ídem, sentido inverso                                     |
| `is-paused`             | —               | `animation-play-state: paused !important`               | Pausa por hover/visibilidad                               |
| `.kinetic-font-stretch` | —               | hover `scaleX(1.08)` + tracking, 0.4 s                  | Links y CTAs clave                                        |

Nomenclatura: `X` es el `@keyframes`, `animate-X` la clase. No definir `@keyframes` inline en componentes: se agregan en `globals.css`. Marquees con keyframe a `-50%` necesitan el contenido duplicado **exactamente 2 veces**.

### 8.4 `prefers-reduced-motion` (obligatorio)

| Capa                                        | Mecanismo                                                                                                                 | Estado                                                       |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Animaciones/transiciones CSS                | Kill-switch global en `globals.css` (`animation-duration` y `transition-duration` a `0.01ms`; marquees `animation: none`) | ✅                                                           |
| `scroll-smooth` en `<html>`                 | Agregar `html { scroll-behavior: auto; }` dentro del media query                                                          | 🟠 pendiente                                                 |
| Animaciones JS de `motion/react`            | `<MotionConfig reducedMotion="user">` en `src/components/ClientLayout.tsx`                                                | 🟠 pendiente (hoy 23 de 64 archivos usan `useReducedMotion`) |
| `FloatTiltCard`, `HeroProceduralBackground` | Guardia propia                                                                                                            | ✅                                                           |
| GSAP                                        | `gsap.matchMedia()` con rama reduce                                                                                       | Verificar                                                    |
| `Sparkles` (tsParticles)                    | No montar con reduce                                                                                                      | 🟡 pendiente                                                 |

Con reduce activo: entradas pasan a fade instantáneo, tilt y marquees se detienen, sin parallax.

---

## 9. Iconografía, imagen y logotipo

- **Íconos:** solo `lucide-react`; trazo 2 px (1.75 px ≥ 32 px); tamaños 16/20/24/48; `currentColor`; decorativos con `aria-hidden="true"`. Única excepción: glifo de WhatsApp de `react-icons/fa`. Sin emojis en UI.
- **Fotografía real:** couriers, motos, paquetería y paisajes urbanos de Mar del Plata, luz diurna. Tinte `bg-brand-blue-700/10 mix-blend-multiply` o gradiente de protección `rgba(9,80,246,0.95) → rgba(9,80,246,0.35)`. Marcos `rounded-3xl shadow-2xl`.
- **Logotipo:** `/logo-envios-simplified.webp`, ≥ 120 px de ancho, sin estirar, recolorear ni aplicar sombras negras.
- **Dos carriles visuales:** fotografía real para la narrativa urbana; renders 3D isométricos para el Hero Card Media. Prohibido flat vector genérico en el slot de Hero Card Media.

### 9.1 Hero Card Media: renders 3D isométricos

Diorama 3D isométrico en miniatura, fondo transparente, dentro de la cabecera de la tarjeta tilt del hero (o standalone en Contacto). Geometría simplificada, biseles, materiales soft matte clay y satin plastic, iluminación three-point, paleta con tope `#0950F6`. Complementa la tarjeta sin repetir textos, precios ni direcciones.

| Superficie | Fondo real                    | Volúmenes principales | Caras superiores      | Caras laterales | Regla                                     |
| ---------- | ----------------------------- | --------------------- | --------------------- | --------------- | ----------------------------------------- |
| `dark`     | Tarjeta `#0950F6`             | `#3570F8` · `#628FF9` | `#E6EEFE` · `#FFFFFF` | `#0950F6`       | Volúmenes claros para recortar sobre azul |
| `light`    | Tarjeta blanca                | `#0950F6`             | `#E6EEFE`             | `#0950F6`       | Sin grandes volúmenes blancos             |
| `bright`   | Sección `#0950F6` sin tarjeta | `#FFFFFF` · `#E6EEFE` | `#FFFFFF`             | `#0950F6`       | Sin masas `#0950F6` dominantes            |

Amarillo `#FFEC01` = único acento (cajones de moto, rutas tubulares emisivas, biseles de pines), **≤ 15%** del sujeto. Sin grises, carbón, navy, degradados ajenos ni metales cromo/oro.

**Kit 3D canónico:** diorama base (baldosa isométrica con bisel `#0950F6`) · city blocks azul mate con techos `#E6EEFE` · ruta tubular amarilla emisiva · map pin facetado azul con bisel amarillo · scooter de reparto tipo juguete con caja trasera amarilla y repartidor de vinilo sin rostro · franja de mar con ondas suaves.

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

Home: `aspect-square`; resto: `aspect-[4/3]`. Los prompts de generación viven en `docs/imagenes/hero-derecha/PROMPTS.md` y en `src/app/admin/imagenes/actions.ts`: ambos deben usar esta paleta (hoy `actions.ts` pide "Egyptian Blue #0636A5" y "navy #00277C", §11).

---

## 10. Anti-Patterns & Enforcement Rules

### 10.1 Cero tolerancia

| #   | Anti-patrón                                                                                                                    | Detección (regex)                                                                                                     | Reemplazo                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1   | Azules más oscuros que `#0950F6`                                                                                               | `#(0636A5\|052D8C\|052C87\|04236B\|021440\|00277C)` · `rgba\((6, ?54, ?165\|0, ?39, ?124\|2, ?20, ?64\|4, ?35, ?107)` | `brand-blue-700` / `rgba(9,80,246,α)`          |
| 2   | Clases oscuras por defecto                                                                                                     | `\b(bg\|text\|border\|shadow\|from\|via\|to)-(black\|neutral-\|stone-)`                                               | `brand-*`                                      |
| 3   | Escalas genéricas en código nuevo                                                                                              | `\b(bg\|text\|border)-(slate\|gray\|zinc)-`                                                                           | `brand-*`                                      |
| 4   | Hex arbitrario en clases                                                                                                       | `\[#[0-9A-Fa-f]{3,8}\]`                                                                                               | Token `brand-*`                                |
| 5   | Hex inline en `style`, SVG o props de librerías                                                                                | `#[0-9A-Fa-f]{6}` en `.tsx`                                                                                           | `var(--color-brand-…)`                         |
| 6   | Sombras grises/negras                                                                                                          | `rgba\(0, ?0, ?0` · `shadow-black`                                                                                    | `shadow-*` teñidas                             |
| 7   | Amarillo como superficie o texto sobre blanco                                                                                  | revisión                                                                                                              | Amarillo solo como señal (§2.5)                |
| 8   | Más de un CTA primario amarillo por vista                                                                                      | revisión                                                                                                              | `outline` / `ghost`                            |
| 9   | Verde, incluso en WhatsApp                                                                                                     | `green-\|emerald-\|#25D366\|#10B981`                                                                                  | Fondo amarillo, glifo verde                    |
| 10  | Rojos fuera de la regla de error                                                                                               | `(text\|bg\|border)-red-(50\|100\|200\|300\|400\|700\|800\|900)`                                                      | `border-red-500` / `text-red-600`              |
| 11  | Texto de cuerpo en tonos claros u opacidad                                                                                     | `text-brand-blue-(200\|300\|400\|800)` · `text-brand-blue-700/[0-9]` · `text-white/[1-7][0-9]`                        | `text-brand-blue-900` · `text-white/85` mínimo |
| 12  | Peso sobre Anton/Bebas                                                                                                         | `font-(display\|subheading)[^"']*font-(medium\|semibold\|bold\|extrabold\|black)`                                     | Sin peso                                       |
| 13  | Clases dinámicas por interpolación                                                                                             | `[a-z:-]+-\$\{`                                                                                                       | Mapas estáticos                                |
| 14  | Clases inexistentes                                                                                                            | `animate-marquee\b` · `animation-paused` · `glass-card`                                                               | Clases definidas                               |
| 15  | Animar layout                                                                                                                  | `transition-all` + `style={{ width`                                                                                   | `scaleX` + `origin-left`                       |
| 16  | `h-screen`, `animate-bounce`, `border-l-4`                                                                                     | literal                                                                                                               | `min-h-[100dvh]`, springs, double-bezel        |
| 17  | Texto < 10 px                                                                                                                  | `text-\[(8\|9)px\]`                                                                                                   | `text-2xs` mínimo                              |
| 18  | Radios arbitrarios                                                                                                             | `rounded-\[[0-9]+px\]`                                                                                                | Escala §6.3                                    |
| 19  | Controles no nativos                                                                                                           | `role="button"` en `div`                                                                                              | `<button>`                                     |
| 20  | Errores sin asociar                                                                                                            | `error &&` sin `aria-describedby`                                                                                     | `aria-describedby` + `role="alert"`            |
| 21  | SVG decorativo sin `aria-hidden`                                                                                               | `<svg` en fondos                                                                                                      | `aria-hidden="true"`                           |
| 22  | Animación JS sin guardia de reduced motion                                                                                     | `motion.` fuera de `MotionConfig`                                                                                     | §8.4                                           |
| 23  | Precios fuera de la fuente de verdad                                                                                           | `\$ ?[0-9]{1,2}\.[0-9]{3}` en componentes                                                                             | Constantes de `pricing.ts` (§12)               |
| 24  | Aliases legacy                                                                                                                 | `brand-(dark\|navy\|blue-deep\|blue-ink)`                                                                             | `brand-blue-700`                               |
| 25  | Nombres, partners, testimonios o métricas inventados                                                                           | revisión                                                                                                              | `[cliente]`, `[métrica]`                       |
| 26  | Hero centrado en desktop · texto sobre imagen · emojis · clichés de IA ("Elevá tu logística", "Seamless", "360°") · Title Case | revisión                                                                                                              | §3, §4                                         |

### 10.2 Do's & Don'ts

| ✅ Do                                                       | ❌ Don't                                     |
| ----------------------------------------------------------- | -------------------------------------------- |
| `bg-brand-blue-700 text-white` para bloques institucionales | `bg-[#052C87]`, gradientes navy              |
| `CTANestedPill` para toda acción                            | `<button className="bg-[#FFEC01] …">` a mano |
| `DoubleBezelCard` / `Card variant="bezel"`                  | `div` con `border-l-4` o sombras grises      |
| `InputField` en todo formulario                             | `<input>` ad hoc con `text-red-400`          |
| `HeroProceduralBackground` en todo hero                     | Gradiente inline copiado                     |
| Precios con `font-mono tabular-nums` desde `pricing.ts`     | Precios escritos a mano o en Anton           |
| `text-brand-blue-900` para cuerpo sobre blanco              | `text-brand-blue-400` o `/80` en párrafos    |
| Jerarquía por tamaño y tracking en Anton/Bebas              | `font-bold` en Anton/Bebas                   |
| `aria-hidden` en íconos y SVG decorativos                   | Íconos leídos por el lector de pantalla      |
| `transform`/`opacity` en animaciones                        | `width`, `top`, `left` animados              |
| Voseo con zonas reales de MDQ                               | "usted", "Juan Pérez", "Acme"                |

### 10.3 Enforcement

1. **ESLint `no-restricted-syntax`** sobre literales de `className` para las reglas 1–4, 10–14, 17–18, 24 (sin desactivar reglas para "hacer pasar": se corrige el código).
2. **Test de tokens (Vitest):** parsea `globals.css` y `tailwind.config.ts` y falla si algún color tiene luminancia relativa < 0.124.
3. **Test de contraste:** los pares de §2.4 con assert ≥ 4.5 (texto) / ≥ 3.0 (UI).
4. **Test de paleta en código:** recorre `src/**/*.tsx` y falla con los hex prohibidos de §2.5.
5. **Test de tarifas UI ↔ lógica:** las tablas mostradas se derivan de `pricing.ts`; el test compara contra `calculateExpressPrice` / `calculateLowCostPrice`.

---

## 11. Deuda de adherencia conocida

Estado al commit `5d6588a`. Cada fila apunta al ítem del plan (§15) que la resuelve; al cerrarla, marcar ✅ con fecha y PR.

| Área                          | Estado actual                                                                                                                                     | Objetivo                                                                            | Plan                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------- |
| Integridad de cotización      | ✅ 2026-09-24: `quote.ts` lee tarifas vía Prisma → fallback `pricing.ts`; valida `distanceKm` con Zod (finito, 0–200); los formularios ya no envían `priceRanges` | Tarifas leídas en el servidor (Prisma → fallback `pricing.ts`)                      | 1                       |
| Gradiente hero                | `HeroProceduralBackground` + 3 heros con `#021440/#04236B/#0636A5/#00277C`                                                                        | Gradiente canónico §2.5; los heros consumen la primitiva                            | 2                       |
| Navy fuera del hero           | `#052C87` × 43, `#04236B`, `#0636A5` (Leaflet), `rgba(6,54,165,…)`, `rgba(0,39,124,…)`, prompts de `admin/imagenes`                               | Tokens `brand-*` / `rgba(9,80,246,α)`                                               | 3                       |
| Tarifas Flex / Emprendedores  | Números sin respaldo; Flex Z5 "km adicional"                                                                                                      | Cargados en `PriceRange` + `precios.md`, o reemplazados por "Consultá por WhatsApp" | 4                       |
| Contraste                     | `CardDescription`, `/80`, `brand-blue-100` sobre azul, badge `economic`, hover `elevated`, lista del autocompletado                               | Pares ≥ 4.5 (§2.4)                                                                  | 5                       |
| Reduced motion JS             | 41 archivos sin guardia; `scroll-smooth` activo                                                                                                   | `MotionConfig reducedMotion="user"` + `scroll-behavior: auto`                       | 6                       |
| `InputField`                  | `required` no reenviado; error sin `aria-describedby`/`role="alert"`                                                                              | §5.3                                                                                | 7                       |
| Faux bold                     | `font-bold/extrabold` sobre Anton/Bebas                                                                                                           | Sin peso (§3.1)                                                                     | 8                       |
| `LogosCarousel` / `BentoGrid` | Carrusel no anima, partners inventados; spans dinámicos                                                                                           | §5.7, §5.9                                                                          | 9                       |
| Docs y skills desactualizados | ✅ 2026-09-24: `.agents/skills/tailwind-v4-design-system` y `docs/agents/domain.md` alineados a `#0950F6`; el skill externo `dosruedas-brand-system` está fuera del repo (`CLAUDE.md` ya fija que gana `DESIGN.md`) | Alineados a este documento | 10 |
| Radio del Double Bezel        | Utility (16/12 px) + `rounded-2xl/xl` (24/16 px)                                                                                                  | Una sola vía                                                                        | 11                      |
| Colisión `cta-nested-pill`    | Utility con fondo/padding/min-height compite con variantes                                                                                        | Utility solo estructural                                                            | 11                      |
| Adopción de primitivas        | 5 primitivas sin uso; formularios, tarjetas y steppers a mano; 321 hex arbitrarios; 183 radios arbitrarios; 140 textos de 8–11 px; `border-black` | Migración progresiva                                                                | 11                      |
| Aliases semánticos            | `--text-*` choca con el namespace de tamaños; `glass-card` inexistente                                                                            | Renombrar / definir                                                                 | 11                      |
| Enforcement                   | Sin lint ni tests de paleta, contraste y tarifas                                                                                                  | §10.3                                                                               | 12                      |
| Hero Card Media               | Home con render raster legacy `/card_mapa.webp`                                                                                                   | Diorama 3D §9.1                                                                     | fuera del plan (assets) |

---

## 12. Tarifas y lógica de negocio

### 12.1 Tarifario oficial 2026 (`src/lib/pricing.ts`)

Fuente de verdad: tabla `PriceRange` → `docs/contexto/precios.md` → `src/lib/pricing.ts` (fallback si la BD está vacía).

| Servicio     | 0–3 km | 3–5 km | 5–7 km | 7–10 km | 10–20 km                 | > 20 km       |
| ------------ | ------ | ------ | ------ | ------- | ------------------------ | ------------- |
| **EXPRESS**  | $3.700 | $4.600 | $6.100 | $8.200  | `Math.ceil(km) × $1.000` | `'consultar'` |
| **LOW_COST** | $3.000 | $4.000 | $5.300 | $7.000  | `Math.ceil(km) × $700`   | `'consultar'` |

Límites: tramo inferior inclusivo en 0, resto `> min && <= max`. A 10.01 km Express salta de $8.200 a $11.000 y LowCost de $7.000 a $7.700 (por diseño del tarifario). **Flex y Emprendedores no tienen fila en `PriceRange`.**

### 12.2 Alineación UI ↔ lógica

| Componente                                                                                                             | Valores                                                              | Estado                         |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------ |
| `servicios/express/ExpressPricing.tsx`, `ExpressDistanceRings.tsx`, `ExpressHero.tsx`, JSON-LD de `/servicios/envios-express` | `EXPRESS_TIERS` + `EXPRESS_PRICE_PER_KM` de `pricing.ts`             | ✅ derivados (2026-09-24)      |
| `cotizar/express/CotizadorExpressHero.tsx`, `home/ServicesOverview.tsx`                                               | $3.700–$8.200, "+10 km: $1.000 por km total"                         | ✅ coinciden (escritos a mano) |
| `servicios/lowcost/LowCostPricing.tsx`, `LowCostHero.tsx`, `cotizar/lowcost/CotizadorLowCostHero.tsx`, `BatchGrid.tsx` | $3.000–$7.000                                                        | ✅ coinciden (escritos a mano) |
| `cobertura/CoberturaExplorer.tsx`                                                                                      | precio por barrio                                                    | ✅ coincide (escrito a mano)   |
| `servicios/flex/FlexPricing.tsx`, `FlexHero.tsx`                                                                       | $3.000, $4.500 plana, tope $6.500, "Z5 $7.000 + $700 × km adicional" | 🔴 sin respaldo                |
| `servicios/emprendedores/EmprendedoresPricing.tsx`                                                                     | $6.000, desde $3.800, recolección $4.000, 20% OFF                    | 🔴 sin respaldo                |

**Regla:** este documento no valida ni inventa tarifas. Flex y Emprendedores requieren decisión del dueño (§15 ítem 4). Las tablas Express/LowCost deben derivarse de constantes exportadas por `pricing.ts` (`EXPRESS_TIERS`, `LOW_COST_TIERS`), no copiarse.

### 12.3 Integridad del cálculo

✅ 2026-09-24: `src/actions/quote.ts` lee las tarifas en el servidor (`prisma.priceRange.findMany({ where: { serviceType } })`, con fallback a `pricing.ts` si la BD falla o viene vacía) y nunca acepta tarifas del cliente: `quoteSchema` solo valida `distanceKm` y `serviceType`, y un `priceRanges` adulterado en el FormData se ignora (cubierto por `src/actions/quote.test.ts`). Pendiente: `distanceKm` todavía llega del cliente; recalcularlo en el servidor a partir de origen/destino es la mejora siguiente (TODO en `quote.ts`).

---

## 13. Quick Reference

### 13.1 Tokens esenciales

| Necesito…                    | Uso                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------- |
| Fondo institucional          | `bg-brand-blue-700`                                                              |
| Texto de cuerpo sobre blanco | `text-brand-blue-900` (o `text-brand-ink`)                                       |
| Texto sobre azul             | `text-white` · `text-white/90` · `text-white/85` (mínimo) · `text-brand-blue-50` |
| Superficie suave             | `bg-brand-blue-50`                                                               |
| Borde sutil / input          | `border-brand-blue-100` / `border-brand-blue-300`                                |
| Hover de fondo azul          | `hover:bg-brand-blue-800`                                                        |
| CTA / señal                  | `bg-brand-yellow-500 text-brand-blue-900` (vía `CTANestedPill`)                  |
| Foco                         | `focus-visible:ring-2 ring-brand-blue-500 ring-offset-2`                         |
| Sombra de tarjeta            | `shadow-float` → hover `shadow-antigravity-deep`                                 |
| Error                        | borde/ícono `border-red-500` / `text-red-500` · texto `text-red-600`             |
| Precio                       | `font-mono tabular-nums`                                                         |
| Títulos                      | `text-display` / `text-h1` / `text-h2` + color explícito                         |
| Label                        | `font-subheading text-xs uppercase tracking-wider` (sin peso)                    |
| Contenedor                   | `mx-auto max-w-7xl px-6 lg:px-8`                                                 |
| Sección                      | `py-section-y`                                                                   |

### 13.2 Primitivas

| Primitiva                     | Import                                | Props clave (default)                                                               | Uso | Deuda principal                                         |
| ----------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------- | --- | ------------------------------------------------------- |
| `DoubleBezelCard`             | `@/components/ui`                     | `variant` (`light`), `hoverEffect` (`true`), `innerClassName`                       | 1   | Radio duplicado                                         |
| `CTANestedPill`               | `@/components/ui`                     | `variant` (`primary`), `size` (`default`), `href`, `icon`, `iconPosition` (`right`) | 15  | Colisión con utility; `compact` 36 px; hover `elevated` |
| `InputField`                  | `@/components/ui`                     | `label`, `error`, `helpText`, `icon`, `required`                                    | 1   | `required` no se reenvía; error sin asociar             |
| `RadioCardGroup`              | `@/components/ui`                     | `options`, `value`, `onChange`, `name`, `gridCols`                                  | 0   | Doble tab stop; sin flechas; contraste                  |
| `StepperHorizontal`           | `@/components/ui`                     | `steps`, `currentStep`, `onStepClick`                                               | 0   | Sin `aria-current`; anima `width`                       |
| `StepperVertical`             | `@/components/ui`                     | `steps`, `activeStep`, `completedSteps`, `variant` (`light`)                        | 0   | Sin lista; contraste                                    |
| `LogosCarousel`               | `@/components/ui`                     | `logos`, `speed` (`30`)                                                             | 0   | No anima; partners inventados                           |
| `FloatTiltCard`               | `@/components/ui`                     | `perspective` (`1000`), `disabled`                                                  | 1   | —                                                       |
| `BentoGrid` / `BentoGridItem` | `@/components/ui`                     | `span` (`standard`), `doubleBezel` (`true`), `variant`                              | 0   | Spans dinámicos                                         |
| `Badge`                       | `@/components/ui`                     | `variant` (`neutral`), `size` (`md`), `rounded` (`full`), `icon`                    | —   | `economic` 2.76:1                                       |
| `AddressAutocomplete`         | `@/components/ui/AddressAutocomplete` | `id`, `value`, `onChange`, `onSelectCoordinate`, `required`                         | 2   | Lista `#3570F8`                                         |
| `Card`                        | `@/components/ui`                     | `variant` (`default`/`bezel`/`glass`/`elevated`)                                    | 4   | `glass` vacío; `CardDescription`                        |
| `HeroProceduralBackground`    | `@/components/ui`                     | `variant` (`default`), `className`                                                  | 7   | Gradiente prohibido                                     |

---

## 14. Bloque de sistema de diseño para Stitch y subagentes

```markdown
DESIGN SYSTEM — ENVÍOS DOSRUEDAS 2026 (MAX #0950F6, en producción):

- Colors: Primary Vibrant Blue #0950F6 (brand-blue-700) = darkest allowed color — hero, nav, footer, H1/H2, body text (brand-ink). Hover of blue fills #3570F8 (lighter, never darker). Accent Signal Yellow #FFEC01 (brand-yellow-500), hover #FFF12E, pressed #E6D400 — CTA, badges, active/completed steps, live glow, 6px footer stripe; signal, never surface, ≤15% coverage, one primary CTA per screen. Base White #FFFFFF. Soft tint #E6EEFE (outer bezel). Borders #BACEFD, hover #628FF9. Focus ring #0950F6. Form error: #EF4444 for border/icon, #DC2626 for error text. FORBIDDEN: any blue darker than #0950F6 (#0636A5, #052D8C, #052C87, #04236B, #021440, #00277C), black, slate/zinc/gray/neutral/stone, green (even WhatsApp), purple/neon, inline hex, second accent. Shadows tinted rgba(9,80,246,α) or rgba(255,236,1,α) only.
- Contrast: body text #0950F6 on white (6.0:1); white on #0950F6 (6.0:1), white at 85% minimum; #0950F6 on yellow (4.9:1). Never #3570F8 or lighter for body text; never yellow text on white.
- Typography: Anton UPPERCASE, line-height 0.85–0.9, tracking -0.05em, text-wrap balance, fluid clamp, weight 400 only (no bold). Bebas Neue UPPERCASE, tracking 0.05–0.1em, weight 400 only. Outfit sentence case, 1.625, 65ch, ≥16px. Geist Mono tabular-nums for prices ($4.600) and distances (3,7 km). One yellow knockout rotated -1° per headline; 2px #0950F6 text stroke; ghost wordmark 15vw at 4% white. No Inter/system sans, no Title Case, nothing below 10px.
- Hero: asymmetric 7/5 grid on #0950F6 with procedural vector grid + white radial glow + yellow blooms 10–18% blur 80–130px, min-h-[90dvh]. Left: badge + 2–3 line Anton headline (one knockout) + one promise sentence in Rioplatense voseo (white/85) + ONE primary CTA + 3 factual chips. Right: tilt card with transparent isometric 3D diorama (1:1 home / 4:3 elsewhere) or real courier photo with blue multiply tint, rounded-3xl. Never centered on desktop.
- Components: Double Bezel — outer bg-brand-blue-50/80 border-brand-blue-100 p-2 shadow-float, hover shadow-antigravity-deep border-brand-blue-300; inner bg-white rounded-xl p-6. CTA Nested Pill — rounded-full Bebas uppercase tracking .05em, yellow bg + #0950F6 text, min-h 44px, nested 32px icon chip that slides 4px on hover, active scale .98, focus ring-2 #0950F6. Elevated variant: white bg, #0950F6 text, #BACEFD border. Inputs — h-11 border-2 #628FF9 rounded-xl, Bebas uppercase label, help text ≥12px in #0950F6, error with role="alert". Steppers — completed/active yellow, never green. Glass on blue — rgba(255,255,255,0.06) + 1px rgba(255,255,255,0.12) border + blur 12px, rounded-3xl. Radii: xl=16px, 2xl=24px, 3xl=32px.
- Layout: container max-w-7xl, sections py 6rem, 12-col Bento 7/5/12 with gap-6 lg:gap-8, editorial zig-zag 5/7, alternating blue/white bands, single column <768px, no horizontal overflow, touch ≥44px, min-h-[100dvh] never h-screen.
- Motion: springs stiffness 100 damping 20, stagger 0.08s, whileInView once, loops only on live elements (float-slow 6s, pulse-subtle 2s, border-pulse 2s, logos-scroll 30s), transform/opacity only, no bounce, full prefers-reduced-motion kill switch.
- Copy: Rioplatense voseo (Cotizá, Enviá, Mirá), real Mar del Plata places (Güemes, Friuli 1972, Playa Grande, Punta Mogotes, Batán), no invented names or metrics (use [métrica]), prices only from the official 2026 table.
```

---

## 15. Plan de remediación priorizado

Los prompts listos para ejecutar cada ítem están en **`docs/agents/prompts-remediacion.md`**. Orden recomendado: 1 → 2 → 3 → 5 → 6 → 7 → 8 → 9 → 10 → 12 → 11 (progresivo); el 4 es una decisión del dueño que puede resolverse en paralelo.

| Orden | Acción                                                                                               | Resuelve    | Sev. | Esfuerzo          | Estado    |
| ----- | ---------------------------------------------------------------------------------------------------- | ----------- | ---- | ----------------- | --------- |
| 1     | Server Action lee tarifas del servidor                                                               | §12.3       | 🔴   | Bajo              | ✅ 2026-09-24 |
| 2     | Gradiente/halos canónicos en `HeroProceduralBackground`; Express/Flex/Emprendedores Hero la consumen | §2.5, §5.13 | 🔴   | Bajo              | Pendiente |
| 3     | Reemplazar `#052C87`, `#04236B`, `#0636A5`, `rgba(6,54,165…)`, `rgba(0,39,124…)` por tokens          | §2.5        | 🔴   | Bajo              | Pendiente |
| 4     | Confirmar tarifas Flex/Emprendedores con el dueño (cargar en BD o quitar números)                    | §12.2       | 🔴   | Decisión          | Pendiente |
| 5     | Contraste: `CardDescription`, `/80`, badge `economic`, hover `elevated`, lista del autocompletado    | §2.4        | 🔴   | Bajo              | Pendiente |
| 6     | `MotionConfig reducedMotion="user"` + `scroll-behavior`                                              | §8.4        | 🟠   | Muy bajo          | Pendiente |
| 7     | `InputField`: reenviar `required`, `aria-describedby`, `role="alert"`                                | §5.3        | 🟠   | Muy bajo          | Pendiente |
| 8     | Quitar peso de Anton/Bebas                                                                           | §3.1        | 🟠   | Bajo              | Pendiente |
| 9     | Arreglar `LogosCarousel` y spans de `BentoGrid`                                                      | §5.7, §5.9  | 🟠   | Bajo              | Pendiente |
| 10    | Alinear skill de marca y docs secundarios a `#0950F6` (`AGENTS.md` ya alineado en esta versión)      | §11         | 🟡   | Muy bajo          | ✅ 2026-09-24 (queda solo el skill externo `dosruedas-brand-system`, fuera del repo) |
| 11    | Migrar formularios/tarjetas/steppers a primitivas y reducir hex/radios arbitrarios                   | §5, §11     | 🟡   | Alto (progresivo) | Pendiente |
| 12    | Reglas ESLint + tests de tokens, contraste, paleta y tarifas                                         | §10.3       | 🟡   | Medio             | Pendiente |
