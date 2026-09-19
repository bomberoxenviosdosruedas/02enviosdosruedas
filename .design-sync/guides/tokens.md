# Tokens — Envíos DosRuedas 2026

Referencia rápida de los tokens compilados en `styles.css` (fuente: `src/app/globals.css`, `@theme` de Tailwind v4).
Usá siempre la clase utilitaria (`bg-brand-blue-700`), nunca el hex.

## Color (paleta exclusiva Azul · Amarillo · Blanco)

| Token | Hex | Uso |
|---|---|---|
| `brand-blue-950` | #021440 | Fondos ultra oscuros, overlays |
| `brand-blue-900` | #04236B | Texto sobre amarillo (CTA primario) |
| `brand-blue-800` | #052D8C | Hover de títulos |
| `brand-blue-700` | #0636A5 | **Primario**: header, footer, secciones oscuras, títulos |
| `brand-blue-600` | #0742CA | Estados hover de superficies azules |
| `brand-blue-500` | #0950F6 | Acento interactivo, focus ring |
| `brand-blue-400` | #3570F8 | Texto secundario **solo ≥ 18px** (4,35:1 sobre blanco) |
| `brand-blue-300` | #628FF9 | Decorativo / bordes hover (no texto) |
| `brand-blue-200` | #8EAFFB | Bordes hover |
| `brand-blue-100` | #BACEFD | Bordes suaves, texto secundario sobre azul-700 |
| `brand-blue-50`  | #E6EEFE | Contenedores claros, bezel exterior |
| `brand-yellow-500` | #FFEC01 | **CTA / acento**: botones primarios, badges urgentes, precios sobre azul |
| `brand-yellow-400` | #FFF12E | Hover del CTA |
| `brand-yellow-100` / `-50` | #FFFAB8 / #FFFDE6 | Fondos Flex, highlights suaves |
| `brand-ink` | #00277C | Texto de cuerpo |
| `white` | #FFFFFF | Superficie base |

`gray-*`, `slate-*`, `zinc-*` están remapeados a azules: no los uses. Nunca `green-*` (tampoco en WhatsApp).
Única excepción semántica: estado de error de inputs (`border-red-500`, `text-red-600`).

### Pares de contraste verificados (WCAG 2.1)

| Texto / fondo | Ratio | Uso permitido |
|---|---|---|
| `brand-ink` / blanco | 13,3:1 | Cuerpo |
| `brand-blue-700` / blanco | 10,1:1 | Títulos, labels |
| `brand-blue-500` / blanco | 6,0:1 | Links, texto chico |
| `brand-blue-400` / blanco | 4,35:1 | Solo texto ≥ 18px o bold ≥ 14px |
| `brand-blue-300` / blanco | 3,1:1 | No usar para texto (tampoco placeholders) |
| blanco / `brand-blue-700` | 10,1:1 | Texto sobre secciones oscuras |
| `brand-yellow-500` / `brand-blue-700` | 8,3:1 | Precios y acentos sobre azul |
| `brand-blue-100` / `brand-blue-700` | 6,4:1 | Texto secundario sobre azul |
| `brand-blue-900` / `brand-yellow-500` | 11,8:1 | Texto de CTA amarillo |
| `brand-yellow-500` / blanco | 1,2:1 | **Nunca** texto amarillo sobre blanco |

## Tipografía

| Clase | Fuente | Uso | Reglas |
|---|---|---|---|
| `font-display` | Anton | H1/H2 de impacto | `uppercase`, `leading-tight` o más (con `leading-[0.98]` se cortan los acentos en reveals) |
| `font-subheading` | Bebas Neue | Subtítulos, badges, botones, labels | `uppercase tracking-wider` |
| `font-sans` | Outfit (+ IBM Plex Sans) | Cuerpo, inputs | `text-sm`/`text-base`, `leading-relaxed` |
| `font-mono` | Geist Mono | Precios, tracking, horarios | `tabular-nums` siempre |

Escala: `text-2xs` 10px · `text-xs` 12 · `text-sm` 14 · `text-base` 16 · `text-lg` 18 · `text-xl` 20 · `text-2xl` 24 ·
`text-3xl` 30 · `text-4xl` 36 · `text-5xl` 48 · `text-6xl` 60 · `text-7xl` 72 · `text-8xl` 96. Utilidades
compuestas: `text-display`, `text-h1`, `text-h2`, `text-h3`.

## Forma, sombra y profundidad

- Radios: `rounded-xl` (tarjeta interior, inputs), `rounded-2xl` (bezel exterior), `rounded-full` (pills, badges).
- Sombras de marca (tinte azul, nunca negro): `shadow-float` (reposo de tarjetas), `shadow-elevated`,
  `shadow-hover-lift`, `shadow-antigravity-deep` (hover de tarjetas), `shadow-accent-sm` → `shadow-cta-glow`
  (CTA amarillo), `shadow-panel`, `shadow-glow-blue`, `shadow-glow-yellow`.
- Superficies: `double-bezel-outer` + `double-bezel-inner` (o `DoubleBezelCard`), `glassmorphism`,
  `glass-card`, `card-minimal`.
- Gradientes: `gradient-blue`, `gradient-dark`, `gradient-surface`, `gradient-yellow`.
- Controles: altura mínima 44px (`min-h-[44px]`), focus `focus-visible:ring-2 focus-visible:ring-brand-blue-500`.

## Movimiento

`animate-float-slow`, `animate-pulse-subtle` (paso activo del stepper), `animate-shimmer`, `animate-logos-scroll`.
Componentes de motion: `TimelineContent`, `TimelineGroup`, `VerticalCutReveal`, `Sparkles`,
`HeroProceduralBackground`, `FloatTiltCard`. Respetá `prefers-reduced-motion` (ya lo hace el CSS global).

## Íconos

`window.EnviosDosRuedas` expone 59 íconos lucide curados con sufijo `Icon` (`ZapIcon`, `TruckIcon`, `MapPinIcon`,
`PackageIcon`, `WalletIcon`, `ClockIcon`, `ShieldCheckIcon`, `MessageCircleIcon`, `PhoneIcon`, `CalculatorIcon`…).
Tamaño `w-4 h-4` en pills, `w-6 h-6` en icon boxes de 48px (`w-12 h-12 rounded-xl`).
