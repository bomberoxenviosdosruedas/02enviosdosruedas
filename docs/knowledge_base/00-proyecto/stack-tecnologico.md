# Stack Tecnológico — Envíos DosRuedas 2026

> **Fuente consolidada:** `PROJECT.md` §2, `AGENTS.md` §3, `CONTEXT.md`

---

## 1. Resumen del Stack

| Capa | Tecnología | Versión / Config | Notas Críticas |
|---|---|---|---|
| **Framework** | Next.js | 16 (App Router) | React 19, Server Components por defecto, Turbopack habilitado |
| **Runtime** | Node.js | 20+ LTS | Requerido para Next.js 16 |
| **Lenguaje** | TypeScript | 5.x | `strict: true`, **cero `any`** |
| **Estilos** | Tailwind CSS | v4 | `@theme` en `src/app/globals.css`, **prohibido hex inline** |
| **Animaciones** | Motion (ex-Framer Motion) | `motion/react` | `prefers-reduced-motion` obligatorio |
| **Base de Datos** | Prisma ORM + PostgreSQL | 5.x / 16 | Modelos productivos: `PriceRange`, `ServiceType` |
| **Mapas/Geocoding** | Leaflet + OSM + OSRM | - | Cálculo exacto punto a punto |
| **Gestor Paquetes** | **pnpm** | **Único autorizado** | Nunca `npm` ni `yarn` |
| **Testing** | Vitest + Playwright | - | Unitario + E2E |
| **Analytics** | GA4 + UTMs persistentes | `src/lib/analytics.ts` | - |

---

## 2. Reglas de Arquitectura Next.js 16

### 2.1 Server Components por Defecto
- **Toda página en `src/app/` es Server Component (RSC).**
- `'use client'` **solo** cuando uses: `useState`, `useEffect`, eventos interactivos, `motion/react`, GSAP, Leaflet, `localStorage` o APIs del navegador.
- Mantener islas de cliente **lo más abajo posible** en el árbol.

### 2.2 Mutaciones con Server Actions
- Ubicación: `src/actions/` (ej. `quote.ts`).
- **Route Handlers (`src/app/api/`)** solo para webhooks o consumo externo.
- Un Server Action **nunca** calcula con tarifas que lleguen del cliente (`FormData`, props serializadas, query): obtiene `PriceRange` vía Prisma y cae al fallback de `src/lib/pricing.ts`.

### 2.3 Rutas Dinámicas
- `params` y `searchParams` son **async**: siempre `await`.
- Tipado correcto según firmas nativas de Next.js 16.

### 2.4 Imágenes y Fuentes
- Imágenes: `next/image` obligatorio.
- Fuentes: `next/font` (Anton, Bebas Neue, Outfit, Geist Mono) — **no** `<link>` a Google Fonts.

### 2.5 Middleware / Proxy
- El middleware se llama **`src/proxy.ts`** y corre en runtime Node.js.
- **No** agregar `export const runtime = 'edge'` por defecto.

---

## 3. Comandos Obligatorios (pnpm únicamente)

| Acción | Comando | Tiempo aprox. |
|---|---|---|
| **Typecheck** | `pnpm typecheck` | ~20 s |
| **Lint puntual** | `pnpm exec eslint <archivos>` | ~1 min |
| **Lint completo** | `pnpm run lint` | ~2 min (solo si cambió config ESLint) |
| **Tests relacionados** | `pnpm exec vitest related <archivos> --run --reporter=dot` | ~40 s |
| **Test archivo** | `pnpm exec vitest run <ruta>` | según archivo |
| **Build producción** | `pnpm build` (Win: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`) | **10–12 min** |
| **Dev** | `pnpm dev` (Win hot-reload: `pnpm dev --webpack`) | — |
| **Prisma generate** | `pnpm prisma generate` | — |
| **Prisma db push** | `pnpm prisma db push` | — |

> ⚠️ **Nunca** correr `pnpm test` a secas: lanza `vitest` en modo watch y deja al agente colgado. Siempre `pnpm exec vitest run ...` o `pnpm exec vitest related --run`.

---

## 4. Protocolo de Verificación por Nivel de Riesgo

| Nivel | Qué Tocaste | Qué Correr | Qué NO Correr |
|---|---|---|---|
| **N0 — Docs** | Markdown, comentarios, `public/`, `docs/` | Nada | Todo |
| **N1 — Estilo/Copy** | Solo `className`, textos visibles, orden JSX, íconos | `pnpm exec eslint <archivos>` | typecheck, tests, build |
| **N2 — Componente/Lógica Local** | Props, tipos, imports, hooks, estado, handlers, componentes en `src/components/**` o `src/hooks/**` | `pnpm typecheck` + `pnpm exec eslint <archivos>` + `pnpm exec vitest related <archivos> --run` (solo si existe test) | build, lint completo, suite entera |
| **N3 — Crítico/Transversal** | `src/lib/pricing.ts`, `src/actions/**`, `src/app/api/**`, `src/proxy.ts`, `prisma/**`, `src/app/layout.tsx`, `globals.css`, `tailwind.config.ts`, `next.config.ts`, `eslint.config.mjs`, `package.json`, rutas/SEO, o >10 archivos | **N2 +** tests del área (`pnpm exec vitest run <carpeta>`) + **cierre:** `pnpm build` + `pnpm run lint` | Suite entera (salvo cambios transversales) |

**Baseline de fallos previos (2026-09-21):** 57 errores lint en otros archivos; 5 tests fallan en `cotizar/express`, `cotizar/lowcost`, `preguntas-frecuentes` y `lib/promises.test.ts`. No perseguirlos salvo que la tarea sea arreglarlos.

---

## 5. Estructura de Directorios Clave

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
├── schema.prisma          # Modelos productivos
└── seed.ts                # Seed PriceRange
```

---

## 6. Convenciones de Código

- **TypeScript strict:** `interface` para props públicas, `type` para uniones/utilidades. **Prohibido `any`** → usar `unknown` + type guard.
- **Imports:** Alias `@/` configurado. Primitivas UI: `@/components/ui`.
- **Server Actions:** Archivos separados en `src/actions/`, no inline en componentes.
- **Tailwind v4:** Usar **solo tokens `brand-*`** (`brand-blue-700`, `brand-yellow-500`, `brand-white-50`). Nunca `slate`, `gray`, `zinc`, `neutral`, `stone`, `black`, hex en clases (`bg-[#…]`) ni en `style`/SVG.
- **Accesibilidad:** Controles nativos (`<button>`, `<a>`), errores con `aria-describedby` + `role="alert"`, íconos decorativos `aria-hidden="true"`, touch targets ≥ 44px.