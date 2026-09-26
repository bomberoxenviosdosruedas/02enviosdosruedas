# Tokens de Color — Envíos DosRuedas

> **Fuente:** `src/app/globals.css` (`@theme` Tailwind v4) — **Este documento refleja el código compilado.** Si hay discrepancia, gana `globals.css`.

---

## 1. Escalas de Color (Colapsadas por Ajuste Max)

### 1.1 Escala Azul (Todas colapsan a `#0950F6` desde 500 en adelante)

| Token CSS | Hex | Clase Tailwind | Función |
|---|---|---|---|
| `--color-brand-blue-50` | `#E6EEFE` | `bg-brand-blue-50` | Superficie muted, bezel exterior (`/80`), hover ghost/outline, skeleton |
| `--color-brand-blue-100` | `#BACEFD` | `border-brand-blue-100` | **Borde estructural**, divisores, línea de stepper pendiente |
| `--color-brand-blue-200` | `#8EAFFB` | `border-brand-blue-200` | Hover de borde de tarjeta, anillo de radio pendiente. **Nunca texto** |
| `--color-brand-blue-300` | `#628FF9` | `border-brand-blue-300` | Borde input reposo, hover bezel, trazos SVG secundarios. **Nunca texto cuerpo** |
| `--color-brand-blue-400` | `#3570F8` | `text-brand-blue-400` | Íconos, texto grande muted (≥ 24 px o ≥ 18.66 px bold). **Falla AA texto normal (4.35:1)** |
| `--color-brand-blue-500` | `#0950F6` | `ring-brand-blue-500` | Anillo de foco |
| `--color-brand-blue-600` | `#0950F6` | — | Colapsado al tope |
| `--color-brand-blue-700` | `#0950F6` | `bg-brand-blue-700` | **Primario**: lienzo institucional, header, footer, hero, H1/H2, Express seleccionado |
| `--color-brand-blue-800` | `#3570F8` | `hover:bg-brand-blue-800` | Hover de **fondos** azules (se aclara porque no se puede oscurecer). ⚠️ **No usar como color de texto** |
| `--color-brand-blue-900` | `#0950F6` | `text-brand-blue-900` | Texto sobre amarillo y cuerpo en tarjetas |
| `--color-brand-blue-950` | `#0950F6` | — | Colapsado al tope (footer profundo = mismo azul) |

> **Consecuencia del colapso:** 500/600/700/900/950 son **un valor con cinco nombres semánticos**. El nombre elige la _función_, no la _oscuridad_. No hay "azul más oscuro" para jerarquía ni _pressed_: la jerarquía se construye con blanco/amarillo sobre azul, peso visual, escala y tracking; el _pressed_ es `active:scale-[.98]`, nunca oscurecer.

### 1.2 Escala Amarilla

| Token CSS | Hex | Clase | Función |
|---|---|---|---|
| `--color-brand-yellow-50` | `#FFFDE6` | `bg-brand-yellow-50` | Fondo Flex seleccionado |
| `--color-brand-yellow-100` | `#FFFAB8` | `bg-brand-yellow-100` | Badge `flex`, anillo step completado, halos |
| `--color-brand-yellow-200` | `#FFF78A` | `border-brand-yellow-200` | Borde Flex seleccionado |
| `--color-brand-yellow-300` | `#FFF45C` | `text-brand-yellow-300` | Detalle mono sobre azul |
| `--color-brand-yellow-400` | `#FFF12E` | `hover:bg-brand-yellow-400` | Hover CTA primario y WhatsApp |
| `--color-brand-yellow-500` | `#FFEC01` | `bg-brand-yellow-500` | **CTA primario**, step completado/activo, precio sobre azul, franja footer 6 px |
| `--color-brand-yellow-600` | `#E6D400` | `active:bg-brand-yellow-600` | Pressed del CTA |

### 1.3 Blanco

| Token CSS | Hex | Clase | Función |
|---|---|---|---|
| `--color-brand-white-50` | `#FFFFFF` | `bg-brand-white-50` / `bg-white` | Lienzo, superficie de tarjeta |

---

## 2. Semánticos y Alias (Declarados en `@theme`)

| Token | Valor | Uso |
|---|---|---|
| `--color-brand-blue` | `var(--color-brand-blue-700)` | Alias canónico del primario |
| `--color-brand-yellow` | `var(--color-brand-yellow-500)` | Alias canónico del acento |
| `--color-brand-white` / `--color-brand-white-50` | `#FFFFFF` | Lienzo |
| `--color-brand-ink` | `#0950F6` | Texto de cuerpo (6.02:1 sobre blanco) |
| `--color-brand-navy`, `-blue-deep`, `-blue-ink`, `-dark` | `→ brand-blue-700` | **Legacy. No usar en código nuevo** |

---

## 3. Superficies y Acciones (Variables `@theme` sin prefijo `--color-`)

| Token | Valor | Nota |
|---|---|---|
| `--surface-page` / `--surface-card` | `#FFFFFF` | Consumir con `var()` |
| `--surface-muted` | `#E6EEFE` | — |
| `--surface-invert` | `#0950F6` | — |
| `--surface-glass` | `rgba(255,255,255,0.06)` | Paneles sobre azul |
| `--text-body` / `--text-heading` / `--text-on-accent` | `#0950F6` | ⚠️ `--text-*` es namespace de **tamaños** en Tailwind v4: no usar como clase |
| `--text-muted` | `#3570F8` | Mismo conflicto + falla AA como texto normal |
| `--text-on-invert` | `#FFFFFF` | Mismo conflicto |
| `--border-subtle` | `#BACEFD` | — |
| `--focus-ring` / `--action-primary` | `#0950F6` | — |
| `--action-primary-hover` | `#3570F8` | — |
| `--action-accent` / `--action-accent-hover` | `#FFEC01` / `#FFF12E` | — |
| `--action-danger` | `#EF4444` | Borde e ícono de error (§2.5 regla 8) |

> 🟡 **Pendiente de diseño:** renombrar a `--color-surface-*`, `--color-fg-*`, `--color-action-*` para generar clases reales y eliminar choque con `--text-*`.

---

## 4. Red de Seguridad: Escalas Re-mapeadas

`@theme` remapea `blue-*`, `gray-*`, `slate-*` y `zinc-*` a la escala de marca:

- `bg-gray-900` → pinta `#0950F6`
- `bg-slate-100` → pinta `#E6EEFE`
- `bg-zinc-500` → pinta `#3570F8`

**No** están remapeados: `black`, `neutral-*`, `stone-*` ni el resto de tonos (por eso `border-black` en `ServicesOverview.tsx` sí pinta negro).

**La red evita que una clase heredada rompa la paleta, pero esas clases no son API válida:** código nuevo usa **solo `brand-*`**.

---

## 5. Sombras y Elevación (Todas Teñidas)

| Token | Valor | Uso |
|---|---|---|
| `shadow-xs` | `0 1px 2px rgba(9,80,246,.04)` | Hairline |
| `shadow-sm` | `0 2px 4px rgba(9,80,246,.06), 0 1px 2px rgba(9,80,246,.03)` | Tarjeta interior, badge neutral |
| `shadow-md` | `0 4px 8px …/.08, 0 2px 4px …/.04` | Express seleccionado |
| `shadow-lg` | `0 8px 16px …/.10, 0 4px 8px …/.06` | Overlays mapa |
| `shadow-xl` | `0 16px 32px …/.12, 0 8px 16px …/.08` | Badges flotantes |
| `shadow-2xl` | `0 25px 50px -12px rgba(9,80,246,.25)` | Dropdowns |
| `shadow-float` | `0 25px 50px -12px rgba(9,80,246,.15)` | Bezel exterior en reposo |
| `shadow-elevated` | `0 16px 40px rgba(9,80,246,.18)` | CTA `elevated`, Card `elevated`, header scroll |
| `shadow-hover-lift` | `0 24px 64px rgba(9,80,246,.20)` | Hover elevated |
| `shadow-antigravity-deep` | `0 24px 64px rgba(9,80,246,.22)` | Hover bezel, tilt card |
| `shadow-panel` | `0 32px 120px -20px rgba(9,80,246,.15)` | Paneles grandes |
| `shadow-ambient-elevation` | `0 20px 80px rgba(9,80,246,.18)` | Ambiental |
| `shadow-accent-sm` / `-md` | `rgba(255,236,1,.15 / .20)` | CTA primario reposo, badge urgente |
| `shadow-accent` / `-hover` | `rgba(255,236,1,.30 / .40)` | Acento grande |
| `shadow-glow-blue` | `0 0 25px rgba(9,80,246,.35)` | Halo azul |
| `shadow-glow-yellow` | `0 0 25px rgba(255,241,46,.45)` | Halo amarillo |
| `shadow-cta-glow` | `0 0 28px rgba(255,236,1,.45), 0 8px 24px rgba(9,80,246,.18)` | **Hover CTA primario** |

**Regla:** Toda sombra nueva usa `rgba(9,80,246,α)`, `rgba(53,112,248,α)` o `rgba(255,236,1,α)`. **Prohibidas** `rgba(0,39,124,…)`, `rgba(6,54,165,…)` y `rgba(0,0,0,…)`.

---

## 6. Contraste WCAG 2.1 (Calculado)

Umbrales: **texto normal ≥ 4.5**, **texto grande (≥ 24 px, o ≥ 18.66 px bold) ≥ 3.0**, **UI no textual ≥ 3.0**.

| Primer plano | Fondo | Ratio | Normal | Grande/UI | Dónde aparece |
|---|---|---|---|---|---|
| `#0950F6` | `#FFFFFF` | **6.02** | ✅ | ✅ | Cuerpo, títulos |
| `#FFFFFF` | `#0950F6` | **6.02** | ✅ | ✅ | Texto sobre hero/header |
| `#FFFFFF` @90% | `#0950F6` | 5.17 | ✅ | ✅ | Chips hero |
| `#FFFFFF` @85% | `#0950F6` | 4.76 | ✅ | ✅ | Párrafo hero (mínimo) |
| `#FFFFFF` @80% | `#0950F6` | 4.38 | ❌ | ✅ | **No usar texto normal** |
| `#0950F6` | `#FFEC01` | **4.94** | ✅ | ✅ | Texto CTA primario |
| `#FFEC01` | `#0950F6` | **4.94** | ✅ | ✅ | Precio amarillo sobre azul, knockout invertido |
| `#0950F6` | `#FFF12E` | 5.12 | ✅ | ✅ | CTA hover |
| `#0950F6` | `#E6EEFE` | 5.17 | ✅ | ✅ | Badge `secure`, hover ghost |
| `#E6EEFE` | `#0950F6` | 5.17 | ✅ | ✅ | Texto claro sobre azul |
| `#0950F6` | `#FFFAB8` | 5.62 | ✅ | ✅ | Badge `flex` |
| `#3570F8` | `#FFFFFF` | **4.35** | ❌ | ✅ | `CardDescription`, hover `elevated`, `--text-muted` 🔴 |
| `#0950F6` @80% | `#FFFFFF` | **4.21** | ❌ | ✅ | `text-brand-blue-700/80` 🔴 |
| `#BACEFD` | `#0950F6` | **3.82** | ❌ | ✅ | `text-brand-blue-100` sobre azul 🔴 |
| `#3570F8` | `#BACEFD` | **2.76** | ❌ | ❌ | Badge `economic` 🔴 |
| `#FFFFFF` | `#3570F8` | 4.35 | ❌ | ✅ | Lista autocompletado 🔴 |
| `#628FF9` | `#FFFFFF` | 3.08 | ❌ | ✅ (UI) | Borde input: válido como UI |
| `#8EAFFB` | `#FFFFFF` | 2.17 | ❌ | ❌ | No usar |
| `#FFEC01` | `#FFFFFF` | **1.22** | ❌ | ❌ | **Prohibido** |
| `#EF4444` | `#FFFFFF` | 3.76 | ❌ | ✅ (UI) | Borde/ícono error |
| `#DC2626` | `#FFFFFF` | 4.83 | ✅ | ✅ | Texto error |

### Reglas Derivadas (Obligatorias)

- Texto normal sobre blanco: `text-brand-blue-900` / `text-brand-blue-700` / `text-brand-ink`. **Nunca** `brand-blue-300/400/800` ni opacidades `< 100`.
- Texto sobre azul: `text-white`, `text-white/90`, `text-white/85` (mínimo) o `text-brand-blue-50`. `brand-blue-100` solo en texto grande.
- `brand-blue-400` solo para íconos y texto grande.
- Todo par nuevo se calcula antes de publicar.

---

## 7. Reglas Cromáticas Estrictas (Resumen)

1. **Techo de oscuridad:** nada más oscuro que `#0950F6`.
2. **Prohibidos por nombre:** `#0636A5`, `#052D8C`, `#052C87`, `#04236B`, `#021440`, `#00277C`, `#041F5E`, `#001035`, `#002068`, `#151B2D` y sus `rgba()`.
3. **Prohibidos por clase:** `bg-black`, `text-black`, `border-black`, `shadow-black`, `neutral-*`, `stone-*`, gradientes hacia grises/oscuros, hex en clases (`bg-[#…]`).
4. **Amarillo ≤ 15%:** señal, nunca superficie. Permitido: CTA primario, step completado, precio, knockout, badge `urgent/accent`, nodos grilla, franja ≤ 6px.
5. **Un solo CTA primario amarillo por pantalla.**
6. **Nunca verde** (WhatsApp: fondo amarillo, verde solo en glifo).
7. **Sombras siempre teñidas** (ver §5).
8. **Rojo error:** `#EF4444` (borde/anillo/ícono), `#DC2626` (texto mensaje). Ningún otro rojo.
9. **Azul sobre azul:** fondo `#0950F6` → texto blanco, bordes `rgba(255,255,255,0.12)`, acentos amarillos.

---

## 8. Token Huérfano `#D6E4FE`

El valor `#D6E4FE` (azul intermedio usado erróneamente en bordes/divisores hardcodeados) **NO existe** en `@theme`.

| Valor incorrecto | Sustitución correcta |
|---|---|
| `border-[#D6E4FE]` | `border-brand-blue-100` (`#BACEFD`) |
| `bg-[#D6E4FE]` | `bg-brand-blue-50` (`#E6EEFE`) |
| `text-[#D6E4FE]` | No usar — no hay caso válido |

---

## 9. Reemplazo Canónico del Gradiente Hero

```css
/* ❌ Prohibido (navy legacy) */
background: linear-gradient(
  135deg,
  #021440 0%,
  #04236b 35%,
  #0636a5 75%,
  #00277c 100%
);

/* ✅ Canónico (plano #0950F6 que solo varía hacia más claro) */
background: linear-gradient(135deg, #0950f6 0%, #0950f6 55%, #3570f8 100%);
```

---

## 10. Anexo: Tokens `@theme` Vigentes (Recorte de `src/app/globals.css`)

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
--font-sans (Outfit) · --font-display/--font-headline (Anton) · --font-subheading (Bebas Neue) · --font-mono (Geist Mono)
--text-2xs: .625rem … --text-9xl: 9rem
--leading-hero: .8 · --leading-none: 1 · --leading-tight: 1.25 · --leading-relaxed: 1.625
--tracking-tighter: -.05em … --tracking-mega: .2em

/* Espaciado y Radios (Escala REDEFINIDA) */
--spacing-section-y: 6rem · --spacing-container-max: 80rem
--radius-sm: 6px · -md: 8px · -lg: 12px · -xl: 16px · -2xl: 24px · -3xl: 32px · -4xl: 40px

/* Sombras: todas rgba(9,80,246,α) o rgba(255,236,1,α) — ver §5 */
/* Animación: float-slow, pulse-subtle, border-pulse, shimmer, counter-up, logos-scroll */
/* Alias semánticos: --surface-*, --text-*, --border-subtle, --focus-ring, --action-* */
```

> `tailwind.config.ts` se sigue cargando con `@config` y duplica colores, sombras y keyframes (`counter-up` solo existe ahí). Sus aliases `brand-ink` y `brand-dark` también valen `#0950F6`. Si un valor exacto importa, verificar el CSS compilado.