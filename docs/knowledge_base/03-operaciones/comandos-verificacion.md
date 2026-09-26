# Comandos y Verificación — Envíos DosRuedas

> **Fuente consolidada:** `AGENTS.md` (secciones "Comandos" y "Protocolo de trabajo"), `CLAUDE.md`, `README.md`.

---

## 1. Stack de Comandos (Solo `pnpm`)

| Acción | Comando | Tiempo Aprox. | Notas |
|---|---|---|---|
| **Typecheck** | `pnpm typecheck` | ~20 s | Obligatorio antes de PR |
| **Lint puntual** | `pnpm exec eslint <archivos>` | ~1 min | Solo archivos tocados |
| **Lint completo** | `pnpm run lint` | ~2 min | Solo si cambió config ESLint |
| **Tests relacionados** | `pnpm exec vitest related <archivos> --run --reporter=dot` | ~40 s | Solo si existe test que cubra |
| **Test archivo** | `pnpm exec vitest run <ruta>` | Según archivo | — |
| **Build producción** | `pnpm build` | **10–12 min** | Windows: `powershell -ExecutionPolicy Bypass -Command "pnpm build"` |
| **Dev** | `pnpm dev` | — | Windows hot-reload fix: `pnpm dev --webpack` |
| **Prisma generate** | `pnpm prisma generate` | — | — |
| **Prisma db push** | `pnpm prisma db push` | — | — |

> ⚠️ **NUNCA** correr `pnpm test` a secas: lanza `vitest` en modo watch y deja al agente colgado. Siempre `pnpm exec vitest run ...` o `pnpm exec vitest related --run`.

---

## 2. Protocolo de Trabajo (Plan → Ejecuta → Verifica → Itera → Cierre)

La verificación **se escala según el riesgo de lo que tocaste**, no se corre completa siempre.

| Fase | Acción | Criterio |
|---|---|---|
| **1. PLAN** | Leer archivos que la tarea toca + sección de referencia correspondiente. Definir archivos afectados, criterio de terminado y **nivel de verificación** (tabla abajo). | Plan con archivos y nivel |
| **2. EJECUTA** | Cambios mínimos y atómicos, siguiendo `AGENTS.md` y `DESIGN.md`. | Sin `any`, Server Components por defecto |
| **3. VERIFICA** | Correr **solo** los chequeos del nivel, una vez, al terminar el cambio (no después de cada edición). | Sin errores ni warnings **nuevos** en lo tocado |
| **4. ITERA** | Si algo falla: corregir y **re-correr solo el chequeo que falló**. Máx 3 vueltas; si sigue fallando, parar y reportar con el error. | Loop hasta verde |
| **5. CIERRE** | Build y lint completo **solo si el nivel lo exige** (N3) o si el usuario lo pide. | Recién acá se marca `completed` |

---

## 3. Niveles de Verificación

Elegir el nivel **más alto** que aplique a cualquier archivo tocado.

| Nivel | Qué Tocaste | Qué Correr | Qué NO Correr |
|---|---|---|---|
| **N0 — Docs** | Markdown, comentarios, assets en `public/`, `docs/` | Nada | Todo |
| **N1 — Estilo y Copy** | Solo `className`, textos visibles, orden JSX, íconos; sin cambiar props, tipos, imports, hooks ni lógica | `pnpm exec eslint <archivos>` | typecheck, tests, build |
| **N2 — Componente o Lógica Local** | Props, tipos, imports, hooks, estado, handlers o componentes nuevos en `src/components/**` o `src/hooks/**` | `pnpm typecheck` + `pnpm exec eslint <archivos>` + `pnpm exec vitest related <archivos> --run` **solo si existe test que los cubra** | build, lint completo, suite entera |
| **N3 — Crítico o Transversal** | `src/lib/pricing.ts` y demás `src/lib/**`, `src/actions/**`, `src/app/api/**`, `src/proxy.ts`, `prisma/**`, `src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.ts`, `next.config.ts`, `eslint.config.mjs`, `package.json`, rutas o metadata SEO, o **más de ~10 archivos** | **Lo de N2 +** tests del área (`pnpm exec vitest run <carpeta>`) + **cierre:** `pnpm build` (Win: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`) + `pnpm run lint` | Suite entera, salvo cambios transversales (config, `globals.css`, `layout.tsx`) |

- **Tests nuevos:** escribirlos solo si la tarea lo pide, si es N3 con lógica (precios, Server Actions, validaciones) o si corregís un bug reproducible con test. No agregar tests a cambios N1.
- **No repetir chequeos** que ya pasaron si no volviste a tocar esos archivos. No correr `pnpm build` para "confirmar" un cambio N1 o N2.
- **Salida corta:** mostrar solo errores y resumen final, no el log completo. Bash: `… 2>&1 | tail -40`; PowerShell: `… 2>&1 | Select-Object -Last 40`. Tests con `--reporter=dot`.

---

## 4. Baseline de Fallos Previos (2026-09-21)

| Tipo | Cantidad | Detalle | Acción |
|---|---|---|---|
| **Lint** | 57 errores | En archivos **no tocados** por la tarea actual | No perseguirlos salvo que la tarea sea arreglarlos. Si un fallo aparece en archivo no tocado y está en baseline, no es tuyo. |
| **Tests** | 5 fallan | `cotizar/express`, `cotizar/lowcost`, `preguntas-frecuentes`, `lib/promises.test.ts` | No perseguirlos salvo que la tarea sea arreglarlos. |

> **Uso de `git stash`:** solo si el fallo es nuevo y dudás de su origen. Cuando el lint quede limpio, el criterio pasa a ser "0 warnings ESLint".

---

## 5. Al Reportar (Obligatorio)

Decir explícitamente:
1. **Nivel elegido** (N0/N1/N2/N3).
2. **Qué chequeos corristes** y su resultado (pasó/falló).
3. **Cuáles salteaste por el nivel** y por qué.
4. Si era N3 y el build no se corrió (o falló), decirlo explícitamente y **no marcar `completed`**.

---

## 6. Next.js 16 — Reglas Críticas (vs Versiones Anteriores)

| Regla | Detalle |
|---|---|
| **APIs async** | `params`, `searchParams`, `cookies()`, `headers()` son **async**: siempre `await`. |
| **Middleware** | Se llama **`src/proxy.ts`** y corre en runtime Node.js. **No** agregar `export const runtime = 'edge'` por defecto. |
| **Server Components por defecto** | `'use client'` solo con hooks, `motion`, GSAP, Leaflet, `localStorage` o APIs del navegador; mantener islas lo más abajo posible. |
| **Mutaciones** | Con **Server Actions** en `src/actions/`. Route Handlers (`src/app/api/`) solo para webhooks o consumo externo. |
| **Imágenes** | `next/image` obligatorio. |
| **Fuentes** | `next/font` (Anton, Bebas Neue, Outfit, Geist Mono) — **no** `<link>` a Google Fonts. |
| **Build** | `next build` **ya no corre ESLint**: lint se corre aparte (ver tabla Niveles). |
| **Turbopack** | Default en dev y build; config en `next.config.ts` (`turbopack: {}`). |

---

## 7. Mapa de Código (Referencia Rápida)

```
src/
├── app/                    # Rutas App Router
│   ├── cotizar/           # Express, LowCost
│   ├── servicios/         # 7 servicios
│   ├── nosotros/          # Sobre nosotros, FAQ, Redes
│   ├── contacto/          # Formulario + info
│   ├── api/               # Webhooks
│   └── layout.tsx         # Root layout + fonts + metadata
├── actions/               # Server Actions (quote.ts)
├── components/
│   ├── ui/                # Primitivas (barril en index.ts)
│   ├── cotizar/
│   ├── servicios/
│   ├── nosotros/
│   └── contacto/
├── hooks/                 # Hooks de cliente
├── lib/
│   ├── pricing.ts         # Cálculo puro de tarifas (fuente de verdad)
│   ├── analytics.ts       # GA4 + UTMs
│   ├── whatsapp.ts        # Generador links WhatsApp
│   └── utils.ts           # cn(), helpers
└── proxy.ts               # Middleware Next.js 16
prisma/
├── schema.prisma          # Modelos productivos: PriceRange + enum ServiceType
└── seed.ts                # Seed PriceRange
```

---

## 8. Tarifas 2026 — No Inventar Valores

**Fuente de verdad:** `PriceRange` (BD) → `docs/contexto/precios.md` → `src/lib/pricing.ts` (fallback).

| Servicio | 0-3km | 3-5km | 5-7km | 7-10km | +10km | >20km |
|---|---|---|---|---|---|---|
| **EXPRESS** | $3.700 | $4.600 | $6.100 | $8.200 | `Math.ceil(km) × $1.000` | Consultar |
| **LOW_COST** | $3.000 | $4.000 | $5.300 | $7.000 | `Math.ceil(km) × $700` | Consultar |

> Cualquier precio en código, copy, seed o marketing debe coincidir **exactamente**.