# Envíos DosRuedas — convenciones para diseñar con este sistema

Logística de última milla en Mar del Plata (2026). Todo diseño usa **solo** la paleta Azul + Amarillo + Blanco,
copy en **voseo rioplatense** ("Cotizá", "Enviá", "Rastreá", "Ingresá", "Contactanos") y referencias locales
(Zona Güemes, Centro, Playa Grande, Punta Mogotes, Puerto, Constitución, Batán, Camet).

## Setup
- Sin provider: los componentes se usan directo desde `window.EnviosDosRuedas` (`const { CTANestedPill, DoubleBezelCard } = window.EnviosDosRuedas;`).
- Los estilos llegan por `styles.css` (tokens de Tailwind v4 compilados del sitio real + fuentes Outfit, Anton, Bebas Neue, Geist Mono, IBM Plex Sans). Fondo de página: `bg-white`, texto cuerpo `text-brand-ink font-sans`.
- Íconos: 59 íconos lucide curados en el mismo global con sufijo `Icon` (`ZapIcon`, `TruckIcon`, `MapPinIcon`, `PackageIcon`, `WalletIcon`, `MessageCircleIcon`…). Usá esos, no otra librería.
- **Solo existen las clases Tailwind que el sitio ya usa** (el CSS está precompilado). Antes de inventar una utilidad, buscala en `_ds_bundle.css`; para glue de layout que no exista, usá `style={{...}}`.

## Idioma de estilos (clases reales)
| Familia | Clases |
|---|---|
| Color fondo | `bg-brand-blue-700` (primario, secciones oscuras), `bg-brand-blue-50` (contenedores claros), `bg-brand-yellow-500` (CTA/acento), `bg-white` |
| Color texto | `text-brand-ink` (cuerpo), `text-brand-blue-700` (títulos), `text-brand-blue-500` (secundario/links), `text-brand-blue-400` (solo ≥ 18px), `text-brand-yellow-500` (acento sobre azul), `text-white` |
| Tipografía | `font-display` (Anton, H1/H2, siempre `uppercase`), `font-subheading` (Bebas Neue: labels, badges, botones, `uppercase tracking-wider`), `font-sans` (Outfit, cuerpo), `font-mono tabular-nums` (precios, tracking) |
| Superficies | `double-bezel-outer` / `double-bezel-inner` (o el componente `DoubleBezelCard`), `rounded-2xl`, `rounded-xl` |
| Sombras | `shadow-float`, `shadow-elevated`, `shadow-antigravity-deep`, `shadow-accent-sm`, `shadow-cta-glow` |

Contraste (AA): texto chico nunca en `text-brand-blue-400`/`-300` sobre blanco (usá `text-brand-blue-500` o más oscuro); jamás texto amarillo sobre blanco; sobre `bg-brand-blue-700` el texto secundario es `text-brand-blue-100`.

Prohibido: `slate-*`, `gray-*`, `zinc-*` (están remapeados a azul, no usarlos), `green-*` (ni para WhatsApp: el CTA de WhatsApp es `bg-brand-yellow-500`), hex inline.

## Dónde está la verdad
- `guidelines/DESIGN.md`: sistema completo (paleta, tipografía, Double Bezel, CTA Nested Pill, steppers, bento).
- `guidelines/tokens.md` (tokens + pares de contraste verificados), `guidelines/voz-y-contenido.md` (voseo, zonas, servicios, tarifas) y `guidelines/ejemplos.md` (6 patrones de página: hero, bento, tarifario, cotizador, cómo funciona, confianza + WhatsApp).
- `components/<grupo>/<Nombre>/<Nombre>.prompt.md` y `.d.ts`: API y ejemplos por componente.
- Tarifas 2026 (no inventar): Express 0–3 km $3.700 · 3–5 km $4.600 · 5–7 km $6.100 · 7–10 km $8.200 · +10 km `ceil(km) × $1.000`; Low Cost $3.000 · $4.000 · $5.300 · $7.000 · +10 km `ceil(km) × $700`.

## Ejemplo
```jsx
const { DoubleBezelCard, Badge, CTANestedPill } = window.EnviosDosRuedas;

<section className="bg-brand-blue-700" style={{ padding: 48 }}>
  <DoubleBezelCard>
    <Badge variant="urgent" size="sm">Express</Badge>
    <h2 className="font-display uppercase text-4xl text-brand-blue-700 mt-3">Envío en el día</h2>
    <p className="font-sans text-sm text-brand-ink mt-2">Retiramos en Zona Güemes y entregamos en Playa Grande.</p>
    <p className="font-mono tabular-nums text-2xl font-bold text-brand-blue-700 mt-4">$3.700</p>
    <CTANestedPill variant="primary" href="/cotizar/express">Cotizá tu envío</CTANestedPill>
  </DoubleBezelCard>
</section>
```
