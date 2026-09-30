# AGENTS.md — Envíos DosRuedas

Sitio Next.js de una mensajería en moto de Mar del Plata. Dueño: Matías Cejas. **Antes de actuar, abrí `docs/knowledge_base/README.md`**: es el índice, el orden de autoridad de las fuentes y el baseline de verificación. Este archivo solo guarda lo que tiene que estar cargado siempre.

## Dónde buscar

| Necesitás | Archivo |
|---|---|
| Qué es cada servicio (los 6 del sitio), cortes, URLs | `docs/knowledge_base/00-negocio/servicios.md` |
| Tarifas, tarifas fijas, recargos (copia única) | `docs/knowledge_base/00-negocio/tarifas.md` |
| Lo que el dueño niega, líneas rojas, voz de marca | `docs/knowledge_base/00-negocio/voz-y-lineas-rojas.md` |
| Lo que dijo el dueño, textual (celda por celda) | `docs/knowledge_base/01-fuentes-dueno/` |
| Dudas sin resolver con el dueño (no las decidas vos) | `docs/knowledge_base/01-fuentes-dueno/conflictos-abiertos.md` |
| Qué del sitio ya cumple y qué falta | `docs/knowledge_base/05-auditoria/estado-sitio.md` |
| Diseño (tokens, tipografía, hero, primitivas, motion) | `DESIGN.md` (manda) y `docs/knowledge_base/03-diseno/` |
| Comandos, niveles N0-N3, baseline de tests | `docs/knowledge_base/04-operaciones/comandos-verificacion.md` |

## Precios: nunca inventar ni copiar

- **Fuente única:** `PriceRange` (BD) → `src/lib/pricing.ts` (fallback) para tarifas por distancia; `src/lib/promises.ts` para tarifas fijas y recargos. **Nunca** un literal nuevo en un componente, nunca un precio calculado en el cliente.
- **`Math.ceil(km)`** en el excedente de 10 a 20 km (`$1.000` Express, `$700` LowCost). Periferia fuera de la ciudad es otra tarifa: **`$1.000` por km de ruta** (`PERIPHERY_PRICE_PER_KM`, confirmado por el dueño el 2026-09-30). El `$1.200` del cuestionario y la planilla (sep-2026) **no se aplica**: no abras esa discusión con un informe, ver `tarifas.md` §7.1.
- **No tocar sin confirmación del dueño:** Flex Nivel 2 `$6.500` y Nivel 3 `$4.500` (hardcodeados en `FlexPricing.tsx`, sin respaldo de cifras) y E-commerce 24HS `$3.800` (confirmado de palabra el 2026-09-29; hoy en `src/app/servicios/page.tsx:230` y `:274`).
- **Orden de fuentes:** `.docx`/`.xlsx` de sep-2026 > informe estratégico > CSV de may-2026. Nada marcado **[PLANTILLA]** o **[SIN CONFIRMAR]** se publica. Una celda de respuesta del dueño en la planilla no es plantilla.

## Lo que el sitio no puede decir (el dueño lo negó)

Cada línea es un bug de contenido, no una preferencia. Detalle y citas en `voz-y-lineas-rojas.md`.

- Entrega en **60-90 min**, "menos de 2 h" o cualquier duración. Express es una **franja de 3 hs** a elección (`EXPRESS_WINDOW`), pedida con 2 hs de anticipación, corte 15:00 hs. **Nunca** "en 3 hs".
- LowCost **"agrupado"** o por lote de un mismo cliente. Es reparto programado en el día, sin franja: corte 13:00, entrega antes de 19:00.
- **Factura A** (no la emiten). Tampoco afirmar "Factura C": el dueño no lo dijo (ver `conflictos-abiertos.md`).
- **Rendición inmediata** en contrareembolso. Es en el día, al día siguiente o semanal, según lo acordado.
- **Cualquier techo de peso.** Sin recargo va hasta **5 kg o 40 × 40 cm** (`STANDARD_WEIGHT_KG`, un solo umbral). **No se publica techo de peso** (decisión del dueño 2026-09-30): `MAX_WEIGHT_KG = 15` no lo respaldaba ninguna fuente suya y se eliminó. `src/lib/copy-guard.test.ts` bloquea el número.
- Friuli 1972 como **punto de retiro**, envíos **fuera del horario laboral**, Flex **fuera de Mar del Plata**.
- DropOFF -20 % es **solo para E-commerce 24HS**.

**Líneas rojas del dueño:** no se transportan productos ilegales · no se tolera falta de respeto al repartidor · "preferimos decir que no podemos, a fallar".
**No publicar** clientes con volumen (MailAmericas), competidores (CDI, MMDP, Retorno Mensajería) ni qué servicio es más rentable.
**Voz:** voseo rioplatense obligatorio ("Cotizá", "Enviá"; nunca "usted"), tono medio formal, sin superlativos.

## Diseño (no negociable)

- Paleta de 3 colores: `#0950F6` (azul, **el más oscuro permitido**), `#FFEC01` (amarillo, ≤15 % de la superficie, CTA), `#FFFFFF`. Cualquier `#0636A5`, `#052C87`, `#04236B`, `#021440` o `#00277C` en el código es deuda.
- Anton/Bebas **solo peso 400**; Outfit en cuerpo; Geist Mono `tabular-nums` en todo precio.
- Primitivas de `src/components/ui/` antes que markup nuevo.
- `prefers-reduced-motion` en todo lo que se mueva (`useReducedMotion()` + gate GSAP). El `MotionConfig` global **todavía no existe**.
- Touch targets ≥ 44 px; foco visible `ring-2` `brand-blue-500`.

## Arquitectura

- Server Components por defecto; `'use client'` solo para hooks, motion, GSAP, Leaflet o localStorage, lo más abajo posible.
- Mutaciones con Server Actions en `src/actions/`; Route Handlers solo para webhooks o consumo externo.
- **Solo `pnpm`**, nunca `npm` ni `yarn`.

## Verificación por nivel

Informá siempre el nivel elegido. Nunca `pnpm test` a secas (queda en modo watch). Re-corré solo lo que falló.

| Nivel | Qué tocaste | Qué correr |
|---|---|---|
| **N0** | Docs, comentarios, assets | Nada |
| **N1** | Solo `className`, textos, orden JSX, íconos | `pnpm exec eslint <archivos>` |
| **N2** | Props, tipos, hooks, estado, `src/components/**`, `src/hooks/**` | `pnpm typecheck` + eslint de los archivos + `pnpm exec vitest related <archivos> --run` |
| **N3** | `pricing.ts`, `src/actions/**`, `src/app/api/**`, `src/proxy.ts`, `prisma/**`, `layout.tsx`, `globals.css`, `next.config.ts`, configs, `package.json`, rutas/SEO, >10 archivos | N2 + tests del área, cierre con `pnpm build` y `pnpm run lint` |

En Windows: `pnpm build` puede necesitar `powershell -ExecutionPolicy Bypass -Command "pnpm build"`, y `pnpm dev --webpack` si falla el hot-reload.

**Última actualización:** 2026-09-29 — reestructurado contra el `.docx` y el `.xlsx` del dueño.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
