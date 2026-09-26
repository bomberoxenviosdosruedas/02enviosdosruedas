# Tipografía — Envíos DosRuedas

> **Fuente:** `src/app/globals.css` (`@theme`), `src/app/layout.tsx` (`next/font`), `DESIGN.md` §3.

---

## 1. Familias (Cargadas con `next/font/google` en `src/app/layout.tsx`)

| Rol | Familia | Pesos Cargados | Variable CSS | Clase Utility | Tratamiento |
|---|---|---|---|---|---|
| **Display / Impacto** | **Anton** | **400 únicamente** | `--font-display` | `font-display` / `font-headline` | UPPERCASE, `line-height .8–.9`, `tracking -0.05em` a `-0.025em`, `text-wrap: balance`. H1/H2, cifras impacto, ghost wordmark |
| **Subtítulos / Labels / CTA** | **Bebas Neue** | **400 únicamente** | `--font-subheading` | `font-subheading` | UPPERCASE, `tracking .05em–.1em`. H3, eyebrows, nav, labels CTA/input, badges |
| **Cuerpo / UI** | **Outfit** | Variable 100–900 | `--font-sans` | `font-sans` (default `body`) | Sentence case, `leading-relaxed`, `max-w-prose`, pesos 400–600, mínimo 16 px párrafos |
| **Métricas / Tarifas** | **Geist Mono** | Variable | `--font-mono` | `font-mono` | `tabular-nums` **obligatorio**: precios (`$4.600`), distancias (`3,7 km`), códigos, coordenadas |

---

## 2. Regla de Peso (Crítica)

**Anton y Bebas NO llevan clases de peso** (`font-bold`, `font-extrabold`, `font-black`).

- Solo existe el peso 400 en `next/font`.
- Cualquier peso mayor hace que el navegador sintetice una negrita deforme.
- Su jerarquía sale de **tamaño**, **tracking** y **color**.
- Opcional: `font-synthesis-weight: none` en `.font-display, .font-subheading`.

> **Prohibido:** Inter, Roboto, Arial, system sans y serifs genéricas en contextos de marca. Title Case en oraciones (display y subheading van en UPPERCASE; cuerpo en sentence case).

---

## 3. Integración `next/font` + `@theme`

- `next/font` define las variables en `<html className>`.
- `@theme` las reexpone con fallbacks.
- Como el CSS de `next/font` no está en capa y `@theme` sí, **gana `next/font`**.

---

## 4. Escala y Utilities Fluidas

### 4.1 Tokens de Tamaño (`--text-*`)

| Token | Tamaño | Uso |
|---|---|---|
| `text-2xs` | 0.625 rem (10 px) | **Piso absoluto**, solo metadato mono/Bebas en UPPERCASE |
| `text-xs` | 0.75 rem (12 px) | Labels, badges, help text |
| `text-sm` | 0.875 rem (14 px) | UI compacta, CTA default |
| `text-base` | 1 rem (16 px) | Párrafos |
| `text-lg` → `text-9xl` | 1.125 → 9 rem | Títulos, display monumental |

> **Micro-texto:** nada por debajo de `text-2xs` (10 px). `text-[8px]` y `text-[9px]` prohibidos; `text-[10px]` se escribe `text-2xs`; todo texto que se lee (no metadato) ≥ 12 px.

### 4.2 Utilities Compuestas (en `globals.css`)

| Utility | Familia | Tamaño | `line-height` | `letter-spacing` |
|---|---|---|---|---|
| `text-display` | Anton | `clamp(3rem, 5vw, 4.5rem)` | 0.85 | -0.05em |
| `text-h1` | Anton | `clamp(2.25rem, 4vw, 3rem)` | 0.9 | -0.025em |
| `text-h2` | Anton | `clamp(1.75rem, 3vw, 2.25rem)` | 0.9 | -0.02em |
| `.font-display` (global) | Anton | según `text-*` | 0.9 | -0.05em |
| `.font-subheading` (global) | Bebas | según `text-*` | — | 0.05em |
| `.font-mono` (global) | Geist Mono | según `text-*` | — | tabular |

> Las utilities `text-display/h1/h2` **no fijan color**: aplicar `text-brand-blue-700` sobre blanco o `text-white` sobre azul.
> No existe `text-h3` en `globals.css`: para H3 usar `font-subheading text-xl md:text-2xl uppercase`.

---

## 5. Line-Height y Tracking

| Token | Valor | Uso |
|---|---|---|
| `leading-hero` | 0.8 | Titulares hero |
| `leading-none` | 1 | Display tight |
| `leading-tight` | 1.25 | Subtítulos |
| `leading-relaxed` | 1.625 | Párrafos cuerpo |

| Token | Valor | Uso |
|---|---|---|
| `tracking-tighter` | -0.05em | Display tight |
| `tracking-tight` | -0.025em | H1/H2 |
| `tracking-normal` | 0 | Base |
| `tracking-wide` | 0.025em | Labels |
| `tracking-wider` | 0.05em | Badges, eyebrows |
| `tracking-widest` | 0.1em | Micro-labels |
| `tracking-mega` | 0.2em | StatBlock eyebrow |

---

## 6. Tratamientos de Firma Tipográfica

### 6.1 Knockout Rotado (−1°)
Palabra clave con `bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded -rotate-1`. Máximo uno por titular.
Sobre azul puede invertirse (`bg-brand-blue-700 text-brand-yellow-500`, 4.94:1).

### 6.2 Titular Outline
Display con relleno transparente y `-webkit-text-stroke: 2px #0950F6` (o blanco con trazo `#0950F6`). Solo segunda línea de un H1.

### 6.3 Ghost Wordmark
"ENVÍOS DOS RUEDAS" en `font-display text-[15vw] text-white/[0.04] whitespace-nowrap pointer-events-none select-none` con `aria-hidden="true"`.

### 6.4 Íconos con Texto Superior Blanco
Trazo `2px #0950F6`; slab inferior amarillo a −1° con texto `#0950F6`.

### 6.5 Kinetic Font Stretch
`.kinetic-font-stretch` (hover `scaleX(1.08)` + tracking `.02em`, 400 ms, `origin-left`).

### 6.6 Eyebrow + Cifra (StatBlock)
- Eyebrow: `font-subheading text-xs tracking-mega uppercase text-brand-blue-700`
- Cifra: `font-mono tabular-nums text-3xl text-brand-blue-700`
- Sobre azul: eyebrow `text-white/85`, cifra `text-brand-yellow-500`. (`brand-blue-400` en eyebrow solo si ≥ 24 px.)

---

## 7. Referencia Rápida de Clases Comunes

```tsx
// Hero H1
<h1 className="text-display text-white">COTIZÁ TU ENVÍO</h1>

// Hero H1 con knockout
<h1 className="text-h1 text-white">
  COTIZÁ TU <span className="bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded -rotate-1">ENVÍO</span> EXPRESS
</h1>

// H2 Sección
<h2 className="text-h2 text-brand-blue-700">SERVICIOS</h2>

// H3 / Subtítulo
<h3 className="font-subheading text-xl md:text-2xl uppercase text-brand-blue-700">Envíos Express</h3>

// Eyebrow (máx 1 por cada 3 secciones)
<span className="font-subheading text-xs tracking-mega uppercase text-brand-blue-700">VENTAJAS</span>

// Body párrafo
<p className="text-base text-brand-blue-900 leading-relaxed max-w-prose">Texto en voseo rioplatense.</p>

// Badge / Label
<span className="font-subheading text-xs uppercase tracking-wider text-brand-blue-700">EXPRESS</span>

// CTA (usa primitiva CTANestedPill)

// Precio / Métrica
<span className="font-mono text-2xl tabular-nums text-brand-blue-900">$4.600</span>

// Help text / Micro
<span className="font-mono text-2xs text-brand-blue-400">Corte 13:00 hs</span>
```

---

## 8. Anti-Patrones Tipográficos (Prohibidos)

| ❌ Prohibido | ✅ Correcto |
|---|---|
| `font-bold` / `font-extrabold` en `.font-display` o `.font-subheading` | Jerarquía por `text-*`, `tracking-*`, color |
| `text-[8px]`, `text-[9px]`, `text-[10px]`, `text-[11px]` | `text-2xs` (10px), `text-xs` (12px) |
| Inter, Roboto, system-ui en marca | Anton / Bebas / Outfit / Geist Mono |
| Title Case en display/subheading | UPPERCASE obligatorio |
| Sentence case en badges/CTA labels | UPPERCASE obligatorio |
| `font-mono` sin `tabular-nums` en precios | `font-mono tabular-nums` siempre |
| `leading-none` en párrafos | `leading-relaxed` (1.625) |