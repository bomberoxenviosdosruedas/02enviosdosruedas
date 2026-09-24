# AGENTS.md — Envíos DosRuedas

Contrato para agentes de código en este repo. Es corto a propósito: se carga en cada sesión. El detalle vive en los documentos enlazados; leelos cuando la tarea los toque, no por las dudas.

## Proyecto

Mensajería y logística de última milla en Mar del Plata (Partido de General Pueyrredón), moto propia. Sitio comercial + cotizadores Express y LowCost. Año operativo **2026**.

**Stack:** Next.js 16 (App Router, React 19, Turbopack) · TypeScript strict · Tailwind CSS v4 (`@theme` en `src/app/globals.css`) · Prisma + PostgreSQL · Motion (`motion/react`) · GSAP · Vitest. Gestor de paquetes: **pnpm** (nunca npm ni yarn).

## Comandos

| Acción                                       | Comando                                                                            | Tiempo aprox. |
| -------------------------------------------- | ---------------------------------------------------------------------------------- | ------------- |
| Typecheck                                    | `pnpm typecheck`                                                                   | ~20 s         |
| Lint de archivos puntuales                   | `pnpm exec eslint <archivos>`                                                      | ~1 min        |
| Lint completo (solo si cambió config ESLint) | `pnpm run lint`                                                                    | ~2 min        |
| Tests relacionados a lo tocado               | `pnpm exec vitest related <archivos> --run --reporter=dot`                         | ~40 s         |
| Tests de un archivo                          | `pnpm exec vitest run <ruta>`                                                      | según archivo |
| Build de producción                          | `pnpm build` (Windows: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`) | **10–12 min** |
| Dev                                          | `pnpm dev` (si el hot-reload no refleja cambios en Windows: `pnpm dev --webpack`)  | —             |
| Prisma                                       | `pnpm prisma generate` · `pnpm prisma db push`                                     | —             |

- **Nunca** correr `pnpm test` a secas: el script en `package.json` lanza `vitest` en modo watch y deja al agente colgado. Usar siempre `pnpm exec vitest run ...` o `pnpm exec vitest related --run`.
- No existe suite E2E (no hay Playwright configurado).

## Protocolo de trabajo (Plan → Ejecuta → Verifica según riesgo → Itera → Cierre)

La verificación **se escala según el riesgo de lo que tocaste**, no se corre completa siempre. Cada chequeo cuesta tiempo y tokens: correr solo lo que puede fallar por tu cambio.

| Fase            | Acción                                                                                                                                                                         | Criterio                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| **1. PLAN**     | Leer los archivos que la tarea toca y la sección de referencia que corresponda. Definir archivos afectados, criterio de terminado y **nivel de verificación** (tabla de abajo) | Plan con archivos y nivel                       |
| **2. EJECUTA**  | Cambios mínimos y atómicos, siguiendo este archivo y `DESIGN.md`                                                                                                               | Sin `any`, Server Components por defecto        |
| **3. VERIFICA** | Correr **solo** los chequeos del nivel, una vez, al terminar el cambio (no después de cada edición)                                                                            | Sin errores ni warnings **nuevos** en lo tocado |
| **4. ITERA**    | Si algo falla: corregir y **re-correr solo el chequeo que falló**. Máximo 3 vueltas; si sigue fallando, parar y reportar con el error                                          | Loop hasta verde                                |
| **5. CIERRE**   | Build y lint completo **solo si el nivel lo exige** (N3) o si el usuario lo pide                                                                                               | Recién acá se marca `completed`                 |

### Niveles de verificación

Elegir el nivel **más alto** que aplique a cualquier archivo tocado.

| Nivel                              | Qué tocaste                                                                                                                                                                                                                                                                       | Qué correr                                                                                                                                                                      | Qué NO correr                                                                   |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **N0 — Docs**                      | Markdown, comentarios, assets en `public/`, `docs/`                                                                                                                                                                                                                               | Nada                                                                                                                                                                            | Todo                                                                            |
| **N1 — Estilo y copy**             | Solo `className`, textos visibles, orden de JSX, íconos; sin cambiar props, tipos, imports, hooks ni lógica                                                                                                                                                                       | `pnpm exec eslint <archivos>`                                                                                                                                                   | typecheck, tests, build                                                         |
| **N2 — Componente o lógica local** | Props, tipos, imports, hooks, estado, handlers o componentes nuevos en `src/components/**` o `src/hooks/**`                                                                                                                                                                       | `pnpm typecheck` + `pnpm exec eslint <archivos>` + `pnpm exec vitest related <archivos> --run` **solo si existe un test que los cubra**                                         | build, lint completo, suite entera                                              |
| **N3 — Crítico o transversal**     | `src/lib/pricing.ts` y demás `src/lib/**`, `src/actions/**`, `src/app/api/**`, `src/proxy.ts`, `prisma/**`, `src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.ts`, `next.config.ts`, `eslint.config.mjs`, `package.json`, rutas o metadata SEO, o más de ~10 archivos | Lo de N2 + tests del área (`pnpm exec vitest run <carpeta>`) + **cierre:** `pnpm build` (Windows: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`) + `pnpm run lint` | Suite entera, salvo cambios transversales (config, `globals.css`, `layout.tsx`) |

- **Tests nuevos:** escribirlos solo si la tarea lo pide, si es N3 con lógica (precios, Server Actions, validaciones) o si corregís un bug que se puede reproducir con un test. No agregar tests a cambios N1.
- **No repetir chequeos que ya pasaron** si no volviste a tocar esos archivos. No correr `pnpm build` para "confirmar" un cambio N1 o N2.
- **Salida corta:** mostrar solo errores y el resumen final, no el log completo. Bash: `… 2>&1 | tail -40`; PowerShell: `… 2>&1 | Select-Object -Last 40`. Tests con `--reporter=dot`.
- **`pnpm dev`** solo en segundo plano y solo si la tarea necesita verificación visual (cambios N1/N2 de UI que el usuario va a revisar, o el prompt lo pide).
- **Tests:** nunca `pnpm test` a secas ni `pnpm test <archivo>`: es `vitest` en modo watch y deja al agente colgado. Siempre `pnpm exec vitest run ...` o `pnpm exec vitest related <archivos> --run`.
- **Baseline de fallos previos (2026-09-21):** 57 errores de lint en otros archivos; 5 tests fallan en `cotizar/express`, `cotizar/lowcost`, `preguntas-frecuentes` y `lib/promises.test.ts`. No perseguirlos salvo que la tarea sea arreglarlos. Si un fallo aparece en un archivo que no tocaste y está en el baseline, no es tuyo: no hace falta `git stash` para confirmarlo. Usar `git stash` solo si el fallo es nuevo y dudás de su origen. Cuando el lint quede limpio, el criterio pasa a ser "0 warnings ESLint".
- **Al reportar:** decir el nivel elegido, qué chequeos corriste y su resultado, y cuáles salteaste por el nivel. Si era N3 y el build no se corrió (o falló), decirlo explícitamente y no marcar `completed`.

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

| Servicio | 0–3 km | 3–5 km | 5–7 km | 7–10 km | 10–20 km                 | > 20 km              |
| -------- | ------ | ------ | ------ | ------- | ------------------------ | -------------------- |
| EXPRESS  | $3.700 | $4.600 | $6.100 | $8.200  | `Math.ceil(km) × $1.000` | consultar (WhatsApp) |
| LOW_COST | $3.000 | $4.000 | $5.300 | $7.000  | `Math.ceil(km) × $700`   | consultar (WhatsApp) |

`calculateExpressPrice(10.3)` → `11000`. Flex y Emprendedores no tienen fila en `PriceRange`: no mostrar números para esos servicios (hoy `FlexPricing`, `FlexHero` y `EmprendedoresPricing` los muestran: es deuda pendiente de decisión del dueño, ver `DESIGN.md` §12.2).

- **Las tarifas se leen en el servidor.** Un Server Action nunca calcula con tarifas que lleguen del cliente (`FormData`, props serializadas, query): las obtiene de `PriceRange` vía Prisma y cae al fallback de `src/lib/pricing.ts`. Hoy `src/actions/quote.ts` viola esta regla (`DESIGN.md` §12.3).
- **No copiar tablas de precios a mano en componentes:** derivarlas de constantes exportadas por `src/lib/pricing.ts`.

## Diseño — no negociable

Spec completa: **`DESIGN.md`** (§0 resumen de auditoría · §2 color y contraste · §3 tipografía · §5 fichas de primitivas · §8 motion · §10 anti-patrones · §11 deuda conocida · §12 tarifas · §13 cheat sheet · §15 plan de remediación). Prompts para ejecutar el plan: `docs/agents/prompts-remediacion.md`. Si `DESIGN.md` contradice a `globals.css` o al código de una primitiva, gana el código y `DESIGN.md` se corrige en el mismo PR. Leer la sección que corresponda antes de crear o editar UI.

- **Ajuste Max aplicado en producción (PR #21):** `#0950F6` es el azul primario **y** el más oscuro permitido. `brand-blue-500/600/700/900/950` y `brand-ink` valen `#0950F6`; `brand-blue-800` vale `#3570F8` (hover de fondos, se aclara). Ya no hay mapeo spec↔producción: el hex de `DESIGN.md` es el del sitio.
- **Tres colores:** azul vibrante `brand-blue-700` (`#0950F6`, lienzo, header, footer, hero, títulos), amarillo vial `brand-yellow-500` (`#FFEC01`, único acento/CTA, ≤ 15% de la superficie, nunca fondo de sección ni texto sobre blanco), blanco. Texto de cuerpo `text-brand-blue-900` / `brand-ink`. Siempre tokens `brand-*`: nada de `slate/gray/zinc/neutral/stone/black`, hex en clases (`bg-[#…]`) ni en `style`/SVG, ni aliases legacy (`brand-dark`, `brand-navy`, `brand-blue-deep`, `brand-blue-ink`, `slate-canvas`, `brand-yellow-hover`, `brand-navy-deep`).
- **Prohibido todo azul más oscuro que `#0950F6`:** `#0636A5`, `#052D8C`, `#052C87`, `#04236B`, `#021440`, `#00277C` y sus `rgba()` (`6,54,165` · `0,39,124`), también en gradientes, sombras, Leaflet y prompts de imagen. Si aparecen en el código son deuda a eliminar, no valores vigentes.
- **Contraste mínimo 4.5:1 en texto normal** (`DESIGN.md` §2.4). Sobre blanco: `text-brand-blue-900`/`700`, nunca `brand-blue-300/400/800` ni opacidades. Sobre azul: `text-white`, mínimo `text-white/85`, o `text-brand-blue-50`. `brand-blue-400` solo en íconos o texto ≥ 24 px.
- Sombras teñidas (`rgba(9,80,246,α)` o `rgba(255,236,1,α)`), nunca grises ni negras.
- **Nunca verde**, tampoco en steppers ni en el CTA de WhatsApp (fondo amarillo; el verde solo dentro del glifo). **Rojo solo para errores de formulario:** `#EF4444` (`border-red-500`, `ring-red-500/20`, ícono) en borde e ícono; `text-red-600` en el texto del mensaje. Ningún otro rojo.
- **Tipografía:** `font-display` (Anton) y `font-subheading` (Bebas Neue) en uppercase y **sin clases de peso** (`font-bold`, `font-extrabold`: solo se cargan en 400 y el navegador inventa la negrita); `font-sans` (Outfit) para cuerpo; `font-mono` (Geist Mono) con `tabular-nums` para precios y datos. Nada por debajo de `text-2xs` (10 px); texto que se lee ≥ 12 px.
- **Primitivas primero:** tarjetas, botones, inputs, selectores, steppers, badges, grillas y fondos de hero salen de `src/components/ui/` (`DoubleBezelCard`, `CTANestedPill`, `InputField`, `RadioCardGroup`, `StepperHorizontal/Vertical`, `Badge`, `BentoGrid`, `HeroProceduralBackground`). Import desde `@/components/ui`. Todo hero usa `HeroProceduralBackground`, sin gradientes inline. Ojo: acá `rounded-xl` = 16px y `rounded-2xl` = 24px (escala redefinida); nada de radios arbitrarios (`rounded-[20px]`).
- **Motion:** solo `transform`/`opacity`, springs (`stiffness 100, damping 20`). Respetar `prefers-reduced-motion` también en animaciones JS (`motion/react` bajo `MotionConfig reducedMotion="user"` o `useReducedMotion`). Nada de clases dinámicas por interpolación (`md:col-span-${n}`): Tailwind no las genera.
- **Accesibilidad:** controles nativos (`<button>`, `<a>`), nunca `div role="button"`; errores de formulario con `aria-describedby` + `role="alert"`; íconos y SVG decorativos con `aria-hidden="true"`; objetivos táctiles ≥ 44 px.
- Un solo CTA primario por pantalla. Nada de `border-l-4` (tampoco en toasts ni errores), `h-screen` (usar `min-h-[100dvh]`), `animate-bounce`, emojis en UI, ni animar `width`/`height`. Hero asimétrico 7/5, nunca centrado en desktop.
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

| Tema                                     | Archivo                                                                                         |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Sistema de diseño                        | `DESIGN.md` (contraste §2.4 · fichas de primitivas §5 · deuda §11 · cheat sheet §13 · plan §15) |
| Prompts del plan de remediación          | `docs/agents/prompts-remediacion.md`                                                            |
| Tarifas                                  | `docs/contexto/precios.md`                                                                      |
| Arquitectura, roadmap, DoD por milestone | `PROJECT.md`                                                                                    |
| Vocabulario de dominio                   | `CONTEXT.md`, `docs/marketing/glosario.md`                                                      |
| Decisiones                               | `docs/marketing/decisiones.md`, `docs/adr/`                                                     |
| Backlog / issues                         | `docs/agents/issue-tracker.md` (tracker en `docs/marketing/` y `.scratch/`)                     |
| Prompts de imágenes hero                 | `docs/imagenes/hero-derecha/PROMPTS.md`                                                         |
| Skills del proyecto                      | `.agents/skills/`                                                                               |

## Errores conocidos

| Síntoma                                                    | Causa / solución                                                                                                                                            |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cambios que no se reflejan en el navegador (Windows)       | Bug de hot-reload con Turbopack → `pnpm dev --webpack`                                                                                                      |
| Hook de React falla en un componente                       | Falta `'use client'` en un componente que usa hooks                                                                                                         |
| Leaflet sin estilos                                        | Importar `leaflet/dist/leaflet.css` en el componente padre o layout                                                                                         |
| Animación de Motion no arranca / error de hidratación      | Usar `whileInView` con `viewport={{ once: true }}` o montar tras `useEffect`                                                                                |
| Precio distinto a la tabla                                 | Revisar `src/lib/pricing.ts` (tramo +10 km con `Math.ceil`) → fila en `PriceRange` → `precios.md`                                                           |
| Agente colgado corriendo tests                             | Se usó `pnpm test` (watch) → cortar y usar `vitest run`                                                                                                     |
| Clase de Tailwind que no aplica estilos                    | Clase inexistente (`animate-marquee`, `glass-card`) o armada por interpolación (`col-span-${n}`) → usar clases definidas en `globals.css` y mapas estáticos |
| Texto en Anton/Bebas con trazo deforme                     | Se aplicó `font-bold`/`font-extrabold` a una familia cargada solo en 400 → quitar la clase de peso                                                          |
| Botón `outline`/`ghost` con fondo amarillo o alto de 56 px | Colisión con la utility `cta-nested-pill` de `globals.css` → ver `DESIGN.md` §5.2                                                                           |

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
