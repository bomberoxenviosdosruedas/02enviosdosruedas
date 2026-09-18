# F13 — Extracción cruda del sistema de diseño (desde el código)

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuente: código real del repo clonado (`src/app/globals.css`, `src/components/ui/`, `tailwind.config.ts` si aplica, componentes de página). **Esto no reemplaza ni reescribe `DESIGN.md`** — es la extracción independiente que pide esta fase, para comparar contra el contrato en `F13-design-system.md`.

---

## 1. Tokens de color confirmados en `globals.css`

| Token | Valor | Uso confirmado |
|---|---|---|
| Azul de marca | `#0636A5` (variable `--color-brand-blue-700` y escala relacionada) | Color primario, fondos, texto sobre amarillo |
| Amarillo de marca | `#FFEC01` (variable `--color-brand-yellow-500` y escala relacionada) | CTA, acentos, detalles — confirmado en uso real en `LogisticaNetworkCanvas.tsx` (ver §4) |
| Blanco | `#ffffff` | Fondos, texto sobre azul |

No se reescribe la escala completa de tokens (ya documentada en `DESIGN.md` §1-2) — esta sección solo confirma que los dos colores de marca declarados existen tal cual en el CSS real, sin desvío de valor hexadecimal.

## 2. Utilidades CSS reales en `globals.css` (extracto relevante a esta fase)

- `@utility bezel-outer` / `@utility bezel-inner` (línea ~500-511): variante simple del patrón de tarjeta con doble borde.
- `@utility double-bezel-outer` (línea 536) / `@utility double-bezel-inner` (línea 543): la variante que usa el componente `DoubleBezelCard.tsx` y que también aplican **directamente sobre `<div>`** dos componentes de página (ver §5).
- `@utility glass-card` / `@utility glass-card-blue`: variantes de vidrio esmerilado.
- Bloque `@media (prefers-reduced-motion: reduce)` (líneas 663-672): regla global `*, *::before, *::after { animation-duration: 0.01ms !important; ... }` — cubre **toda** animación/transición definida en CSS (Tailwind `animate-*`/`transition-*`) en todo el sitio, sin necesidad de que cada componente la repita.
- No se encontró ninguna regla `transition: width` ni `transition-property: width` en todo el archivo.
- No se encontró ninguna clase ni regla `animate-bounce` en ningún `.tsx` del repo.

## 3. Inventario real de `src/components/ui/` (18 archivos, sin contar `index.ts`)

| Componente | ¿Se usa en algún JSX/import fuera de su propio archivo? | Dónde |
|---|---|---|
| `AddressAutocomplete.tsx` | Sí | `CotizadorExpressForm.tsx`, `CotizadorLowCostForm.tsx` |
| `Badge.tsx` | Sí (uso amplio) | 21 archivos |
| `BentoGrid.tsx` | **No** | — |
| `CTANestedPill.tsx` | Sí | `OptimizedHeader.tsx` |
| `DoubleBezelCard.tsx` | Solo dentro de `BentoGrid.tsx` (que a su vez no se usa en ningún lado) | — |
| `DynamicRouteMap.tsx` | Sí | `CotizadorExpressForm.tsx`, `CotizadorLowCostForm.tsx` |
| `FloatTiltCard.tsx` | **No** | — |
| `HeroProceduralBackground.tsx` | Sí (uso amplio) | 12 archivos |
| `InputField.tsx` | **No** | — |
| `LeafletRouteMap.tsx` | Sí, pero solo como wrapper interno de `DynamicRouteMap.tsx` (carga dinámica sin SSR, patrón esperado para Leaflet) | — |
| `LogosCarousel.tsx` | **No** | — |
| `RadioCardGroup.tsx` | **No** | — |
| `StepperHorizontal.tsx` | **No** | — |
| `StepperVertical.tsx` | **No** | — |
| `card.tsx` | Sí (uso amplio) | 21 archivos |
| `sparkles.tsx` | Sí | 4 archivos |
| `timeline-animation.tsx` | Sí | 4 archivos |
| `vertical-cut-reveal.tsx` | Sí | 4 archivos |

**8 de 18 archivos de `src/components/ui/` no tienen ningún punto de importación fuera de su propio archivo**: `BentoGrid`, `DoubleBezelCard` (indirectamente, vía `BentoGrid`), `FloatTiltCard`, `InputField`, `LogosCarousel`, `RadioCardGroup`, `StepperHorizontal`, `StepperVertical`.

## 4. Componentes fuera de `ui/` verificados en esta pasada

- `src/components/home/LogisticaNetworkCanvas.tsx` (327 líneas): usa `#FFEC01` (9 veces) y `#ffffff` como colores de partículas en un canvas animado. **No tiene ningún punto de importación en ningún otro archivo del repo** — es código muerto, igual que los 8 de `ui/`.
- `src/app/revisar/RevisarClient.tsx` (408 líneas): no contiene ningún color hexadecimal literal en todo el archivo.
- `src/app/admin/imagenes/actions.ts`: contiene las cadenas de texto `#003399` y `#FFCC00` (líneas 165, 170, 242, 245) — pero como **texto dentro de un prompt para un generador de imágenes por IA** ("Brand Colors: Egyptian Blue (#003399) and Sunbeam Yellow (#FFCC00)..."), no como estilo aplicado a ningún elemento de la interfaz. Es una herramienta interna de administración, no una página que vean los clientes.

## 5. Patrón "double-bezel" reimplementado a mano (hallazgo central de esta fase, ver DS-01)

`ServicesOverview.tsx` (líneas 579, 581) y `EmprendedoresHome.tsx` aplican las clases `double-bezel-outer` / `double-bezel-inner` directamente sobre `<div>` propios, en vez de importar y usar el componente `<DoubleBezelCard>` de `src/components/ui/DoubleBezelCard.tsx` (que aplica las mismas clases). El resultado visual es el mismo (mismas utilidades CSS), pero la capa de componente reutilizable queda sin uso real en ninguna página.

## 6. `focus-visible` y `prefers-reduced-motion` — cobertura real

- `focus-visible` aparece en **29 archivos** (componentes de página + `globals.css`), incluyendo formularios de contacto, precios de los 4 servicios, header, footer, FAQ, cotizadores y varias secciones de "nosotros".
- `prefers-reduced-motion` aparece explícitamente en **3 lugares**: `globals.css` (regla global §2), `FloatTiltCard.tsx` (código muerto, §3) y `AdminImagenesClient.tsx` (herramienta interna, no de cara al cliente).
- Ningún componente animado por canvas/JS que sí está en uso real (`HeroProceduralBackground.tsx`, 12 usos) tiene su propio chequeo de `prefers-reduced-motion` — la regla global de `globals.css` solo alcanza animaciones definidas con `animation`/`transition` CSS, no `requestAnimationFrame` dibujado a mano en un `<canvas>`.

## 7. Supuestos y lo que no se pudo verificar en esta extracción

- No se revisó el 100% de los ~150+ componentes del repo color por color — se verificaron los puntos que `DESIGN.md` §11 señala específicamente, más los 7 componentes "insignia" que pide el enunciado de esta fase.
- No se corrió ninguna herramienta de cobertura de accesibilidad automatizada (axe, Lighthouse) — todo lo de arriba es lectura y búsqueda de texto en el código fuente, no una auditoría de accesibilidad en el navegador.
- El repo clonado tiene un solo commit visible (`46bf3c6`, 2026-09-15) — no hay historial anterior disponible en esta sesión para saber si algún hallazgo de `DESIGN.md` §11 describía un estado del código previo a ese commit.
