# AGENTS.md — Envíos DosRuedas

Contrato para agentes de código en este repo. Es corto a propósito: se carga en cada sesión. El detalle vive en los documentos enlazados; leelos cuando la tarea los toque, no por las dudas.

## Proyecto

Mensajería y logística de última milla en Mar del Plata (Partido de General Pueyrredón), moto propia. Sitio comercial + cotizadores Express y LowCost. Año operativo **2026**.

**Stack:** Next.js 16 (App Router, React 19, Turbopack) · TypeScript strict · Tailwind CSS v4 (`@theme` en `src/app/globals.css`) · Prisma + PostgreSQL · Motion (`motion/react`) · GSAP · Vitest. Gestor de paquetes: **pnpm** (nunca npm ni yarn).

## Comandos

| Acción | Comando | Tiempo aprox. |
|---|---|---|
| Typecheck | `pnpm typecheck` | ~20 s |
| Lint de archivos puntuales | `pnpm exec eslint <archivos>` | ~1 min |
| Lint completo (solo si cambió config ESLint) | `pnpm run lint` | ~2 min |
| Tests relacionados a lo tocado | `pnpm exec vitest related <archivos> --run` | ~40 s |
| Tests de un archivo | `pnpm exec vitest run <ruta>` | según archivo |
| Build de producción | `pnpm build` (Windows: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`) | **10–12 min** |
| Dev | `pnpm dev` (si el hot-reload no refleja cambios en Windows: `pnpm dev --webpack`) | — |
| Prisma | `pnpm prisma generate` · `pnpm prisma db push` | — |

- **Nunca** correr `pnpm test` a secas: el script en `package.json` lanza `vitest` en modo watch y deja al agente colgado. Usar siempre `pnpm exec vitest run ...` o `pnpm exec vitest related --run`.
- `pnpm dev` solo en segundo plano y solo si hace falta ver la app.
- No existe suite E2E (no hay Playwright configurado).

## Protocolo de trabajo (Plan → Ejecuta → Verifica → Itera → Build final)

Ninguna tarea que toque código se marca `completed` sin pasar el paso 5.

| Fase | Acción | Criterio |
|---|---|---|
| **1. PLAN** | Leer los archivos que la tarea toca y la sección de referencia que corresponda (ver "Documentos de referencia"). Definir archivos afectados y criterio de terminado | Plan con archivos afectados |
| **2. EJECUTA** | Cambios mínimos y atómicos, siguiendo este archivo y `DESIGN.md` | Sin `any`, Server Components por defecto |
| **3. VERIFICA (loop rápido, repetible)** | `pnpm typecheck` + `pnpm exec eslint <archivos que editaste en esta tarea>` + `pnpm exec vitest run <archivo de test>` si aplica | 0 errores de TypeScript, sin errores ni warnings nuevos en lo tocado |
| **4. ITERA** | Si falla → corregir → volver al paso 3, las veces que haga falta | Loop hasta verde. **Nunca** correr `pnpm build` en esta vuelta |
| **5. BUILD FINAL (una sola vez, al cerrar la tarea)** | `pnpm build` (Windows: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`) + `pnpm run lint` completo + suite de tests relevante (`pnpm exec vitest run <carpeta o archivos>`) | Build sin errores, 0 errores de TypeScript, ningún error de lint ni test **nuevo** respecto del baseline. Recién acá se marca `completed` |

> **Por qué dos velocidades:** `pnpm build` compila y prerenderiza el sitio entero (10–12 min en esta máquina); es el paso más lento del flujo. Se corre **una sola vez**, como gate final antes de marcar la tarea `completed`. Durante el loop de iteración, `pnpm typecheck` (incremental, `tsc --noEmit`, ~20 s) + lint acotado a los archivos que **vos editaste** (pasalos directo a `pnpm exec eslint`, sin `git diff`) detectan la gran mayoría de los errores sin recompilar todo el sitio en cada ajuste chico.

- **Tests:** nunca `pnpm test` a secas ni `pnpm test <archivo>`: es `vitest` en modo watch y deja al agente colgado. Siempre `pnpm exec vitest run ...`.
- **Tareas solo de documentación, markdown o assets:** no aplican los pasos 3–5.
- **Baseline de fallos previos (2026-09-21):** 57 errores de lint en otros archivos; 5 tests fallan en `cotizar/express`, `cotizar/lowcost`, `preguntas-frecuentes` y `lib/promises.test.ts`. No perseguirlos salvo que la tarea sea arreglarlos. Para confirmar que un fallo no es tuyo, correr el mismo test con tus cambios en `git stash`. Cuando el lint quede limpio, el criterio del paso 5 pasa a ser "0 warnings ESLint".
- **Al reportar:** decir qué pasos se corrieron y su resultado. Si el build no se corrió (o falló), decirlo explícitamente y no marcar `completed`.

## Next.js 16 — reglas que cambian respecto de versiones anteriores

- **Antes de usar una API de Next, leer la guía en `node_modules/next/dist/docs/`** (versión exacta instalada). Lo aprendido de Next 13–15 puede estar desactualizado.
- `params`, `searchParams`, `cookies()` y `headers()` son **async**: siempre `await`.
- El middleware se llama **`src/proxy.ts`** y corre en runtime Node.js. No agregar `export const runtime = 'edge'` por defecto.
- **Server Components por defecto.** `'use client'` solo con hooks, `motion`, GSAP, Leaflet, `localStorage` o APIs del navegador; mantener esas islas lo más abajo posible del árbol.
- Mutaciones con **Server Actions** en `src/actions/`. Route Handlers (`src/app/api/`) solo para webhooks o consumo externo.
- Imágenes con `next/image`; fuentes ya cargadas con `next/font` (no agregar `<link>` a Google Fonts).
- `next build` ya no corre ESLint: el lint se corre aparte (ver "Protocolo de trabajo").
- Turbopack es el default en dev y build; la config vive en `next.config.ts` (`turbopack: {}`).

## Mapa del código

```
src/
├── app/              rutas (App Router). Servicios: servicios/{envios-express,envios-lowcost,enviosflex,
│                     deposito-fulfillment,empresas-cuenta-corriente,envios-contrareembolso,plan-emprendedores}
│                     cotizar/{express,lowcost} · nosotros/* · contacto · cobertura · guias/* · admin/imagenes · api/
├── actions/          Server Actions (quote.ts)
├── components/       por dominio: home, layout, servicios, cotizar, nosotros, contacto, cobertura, seo, ui
│   └── ui/           primitivas compartidas (barrel en index.ts) — preferirlas antes de reescribir markup
├── hooks/            hooks de cliente
├── lib/pricing.ts    cálculo de tarifas (funciones puras) — fuente de verdad de la lógica
└── proxy.ts          proxy de Next 16
prisma/schema.prisma  modelos productivos: PriceRange + enum ServiceType (User/Post son restos del starter, ignorarlos)
```

## Tarifas 2026 — no inventar valores

Fuente de verdad: tabla `PriceRange` en BD → `docs/contexto/precios.md` → `src/lib/pricing.ts` (fallback si la BD está vacía). Cualquier precio en código, copy, seed o pieza de marketing tiene que coincidir **exactamente**.

| Servicio | 0–3 km | 3–5 km | 5–7 km | 7–10 km | 10–20 km | > 20 km |
|---|---|---|---|---|---|---|
| EXPRESS | $3.700 | $4.600 | $6.100 | $8.200 | `Math.ceil(km) × $1.000` | consultar (WhatsApp) |
| LOW_COST | $3.000 | $4.000 | $5.300 | $7.000 | `Math.ceil(km) × $700` | consultar (WhatsApp) |

`calculateExpressPrice(10.3)` → `11000`. Flex y Emprendedores no tienen fila en `PriceRange`: no mostrar números para esos servicios.

## Diseño — no negociable

Spec completa: **`DESIGN.md`** (tokens, componentes, layout, motion, a11y; §2.0 mapea spec↔producción, §2.4 es el anexo `@theme`, §11 lista la deuda conocida y §13 es el cheat sheet de las primitivas de `src/components/ui/`). Si `DESIGN.md` contradice a `globals.css`, gana el CSS. Leer la sección que corresponda antes de crear o editar UI.

- **Tres colores:** azul egipcio `brand-blue-700` (#0636A5, lienzo), amarillo vial `brand-yellow-500` (#FFEC01, único acento/CTA), blanco. Texto de cuerpo `brand-ink`. Siempre tokens `brand-*`: nada de `slate/gray/zinc/neutral`, hex inline, ni aliases legacy de `tailwind.config.ts` (`slate-canvas`, `brand-dark`, `brand-yellow-hover`, `brand-navy-deep`).
- **Spec Max vs. producción:** `DESIGN.md` describe el ajuste Max (`#0950F6`); el código vivo usa la paleta de `globals.css` (`brand-blue-700` = `#0636A5`, `brand-ink` = `#00277C`). Antes de escribir una clase de color, resolver el valor por la tabla §2.0 de `DESIGN.md`; no mezclar ni inventar hex.
- `brand-blue-500` (#0950F6) es solo foco/hover, nunca fondo. Sombras teñidas de azul o amarillo, nunca negras.
- **Nunca verde**, tampoco en steppers ni en el CTA de WhatsApp (fondo amarillo; el verde solo dentro del glifo). Único color externo: rojo `#EF4444` para errores de formulario.
- **Tipografía:** `font-display` (Anton) y `font-subheading` (Bebas Neue) en uppercase; `font-sans` (Outfit) para cuerpo; `font-mono` (Geist Mono) con `tabular-nums` para precios y datos.
- **Componentes de firma:** usar las utilities `double-bezel-outer`/`double-bezel-inner` y `cta-nested-pill`/`cta-nested-icon` de `globals.css`. Ojo: acá `rounded-xl` = 16px y `rounded-2xl` = 24px (escala redefinida).
- Un solo CTA primario por pantalla. Nada de `border-l-4` en tarjetas, `h-screen` (usar `min-h-[100dvh]`), `animate-bounce`, emojis en UI, ni animar `width`/`height`. Respetar `prefers-reduced-motion`.
- Logo: solo `/logo-envios-simplified.webp`, mínimo 120px de ancho, sin recolorear.
- Íconos: `lucide-react` (`react-icons/fa` solo para el glifo de WhatsApp).

## Copy y contenido

- **Voseo rioplatense** en todo texto de cara al cliente: Cotizá, Enviá, Rastreá, Ingresá, Elegí, Mirá, Contactanos. Nunca "usted"/"su".
- Ejemplos con zonas reales de MDQ: Güemes, Constitución, Puerto, Friuli 1972, Playa Grande, Punta Mogotes, Chauvín, Batán, Camet.
- Nada de métricas, testimonios o nombres inventados ("Juan Pérez", "Acme"): si falta el dato, placeholder explícito `[métrica]`.
- Sin rayas (—) en texto visible; en comentarios de código no importa.

## TypeScript

- Prohibido `any`: usar `unknown` + type guard. No tocar `strict` en `tsconfig.json`.
- `interface` para props públicas; `type` para uniones y utilidades.

## Límites

**Sin preguntar:** leer archivos, correr los comandos de verificación de los pasos 3 y 5, editar dentro del alcance pedido.

**Preguntar antes:** agregar dependencias, cambiar `prisma/schema.prisma` o datos de `PriceRange`, borrar archivos, cambiar rutas o slugs (impacta SEO y redirecciones), tocar `next.config.ts` o `src/proxy.ts`, commitear o pushear.

**Nunca:** inventar precios, commitear secretos o `.env`, `git push --force`, saltear hooks (`--no-verify`), desactivar reglas de lint o tests para que "pase".

## Documentos de referencia

| Tema | Archivo |
|---|---|
| Sistema de diseño | `DESIGN.md` (mapeo spec↔producción §2.0 · fichas de primitivas §13) |
| Tarifas | `docs/contexto/precios.md` |
| Arquitectura, roadmap, DoD por milestone | `PROJECT.md` |
| Vocabulario de dominio | `CONTEXT.md`, `docs/marketing/glosario.md` |
| Decisiones | `docs/marketing/decisiones.md`, `docs/adr/` |
| Backlog / issues | `docs/agents/issue-tracker.md` (tracker en `docs/marketing/` y `.scratch/`) |
| Prompts de imágenes hero | `docs/imagenes/hero-derecha/PROMPTS.md` |
| Skills del proyecto | `.agents/skills/` |

## Errores conocidos

| Síntoma | Causa / solución |
|---|---|
| Cambios que no se reflejan en el navegador (Windows) | Bug de hot-reload con Turbopack → `pnpm dev --webpack` |
| Hook de React falla en un componente | Falta `'use client'` en un componente que usa hooks |
| Leaflet sin estilos | Importar `leaflet/dist/leaflet.css` en el componente padre o layout |
| Animación de Motion no arranca / error de hidratación | Usar `whileInView` con `viewport={{ once: true }}` o montar tras `useEffect` |
| Precio distinto a la tabla | Revisar `src/lib/pricing.ts` (tramo +10 km con `Math.ceil`) → fila en `PriceRange` → `precios.md` |
| Agente colgado corriendo tests | Se usó `pnpm test` (watch) → cortar y usar `vitest run` |
