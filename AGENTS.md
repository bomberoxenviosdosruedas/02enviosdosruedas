# AGENTS.md — Envíos DosRuedas (Índice Normativo)

> **Este archivo es el anclaje operativo.** No asumas nada: lee la documentación completa en `docs/knowledge_base/` antes de actuar.

---

## 🎯 Acceso Rápido a la Verdad

| Qué Necesitas | Dónde Está (Fuente Canónica) |
|---|---|
| **Identidad, negocio, stack, servicios, tarifas** | `docs/knowledge_base/00-proyecto/identidad-negocio.md` |
| **Stack tecnológico, comandos, verificación, mapa de código** | `docs/knowledge_base/03-operaciones/comandos-verificacion.md` |
| **Sistema de diseño completo (tokens, tipografía, hero, primitivas, motion, iconos, anti-patrones, deuda, plan)** | `docs/knowledge_base/01-diseno/design-system.md` |
| **Tokens de color (paleta, sombras, contraste, reglas cromáticas)** | `docs/knowledge_base/01-diseno/tokens-colores.md` |
| **Tipografía (familias, escala, utilities, tratamientos, anti-patrones)** | `docs/knowledge_base/01-diseno/tipografia.md` |
| **Hero Section (estructura 7/5, variantes, ejemplo canónico)** | `docs/knowledge_base/01-diseno/hero-layout.md` |
| **Primitivas UI (DoubleBezelCard, CTANestedPill, InputField, Badge, RadioCardGroup, Stepper, BentoGrid, HeroProceduralBackground, FloatTiltCard, Card, AddressAutocomplete, DynamicRouteMap, helpers)** | `docs/knowledge_base/01-diseno/primitivas-ui.md` |
| **Motion & Accesibilidad (springs, reduced-motion, GSAP, a11y checklist)** | `docs/knowledge_base/01-diseno/motion-accesibilidad.md` |
| **Iconografía e Imagen (librerías, logo, fotografía, hero card media, ilustraciones)** | `docs/knowledge_base/01-diseno/iconografia-imagen.md` |
| **Anti-Patrones (lista completa de prohibidos con fixes)** | `docs/knowledge_base/01-diseno/anti-patrones.md` |
| **Deuda de Adherencia (12 ítems priorizados con métricas)** | `docs/knowledge_base/01-diseno/deuda-adherencia.md` |
| **Tarifas y Lógica de Negocio (fuente de verdad, flujo server-side, testing)** | `docs/knowledge_base/01-diseno/tarifas-logica-negocio.md` |
| **Quick Reference / Cheat Sheet (tokens, spacing, primitivas, hero, tarifas, reglas, comandos)** | `docs/knowledge_base/04-referencia-rapida/cheat-sheet.md` |
| **Plan de Remediación (12 ítems con prompts, orden, criterios de cierre)** | `docs/knowledge_base/01-diseno/plan-remediacion.md` |
| **Glosario de Dominio (términos, prefijos DS/COPY/MARCA/BL, siglas)** | `docs/knowledge_base/02-dominio/glosario.md` |
| **Decisiones (dueño + método, formato inmutable)** | `docs/knowledge_base/02-dominio/decisiones.md` |
| **Contexto SEO (keywords, on-page, content gaps, benchmark, plan acción)** | `docs/knowledge_base/02-dominio/contexto-seo.md` |
| **Comandos y Verificación (niveles N0-N3, baseline, reporte)** | `docs/knowledge_base/03-operaciones/comandos-verificacion.md` |
| **Agent Skills (issue tracker, triage labels, domain docs, skills internas, prompts)** | `docs/knowledge_base/03-operaciones/agentes-skills.md` |
| **Issue Tracker (state machine, template, backlog, flujo semanal, reglas de oro)** | `docs/knowledge_base/03-operaciones/issue-tracker.md` |
| **Triage Labels (5 estados, transiciones, políticas, sync TASKS.md)** | `docs/knowledge_base/03-operaciones/triage-labels.md` |

---

## ⚡ Reglas de Oro (Memorizar)

| Regla | Descripción |
|---|---|
| **Fuente única de tarifas** | `PriceRange` (BD) → `src/lib/pricing.ts` (fallback). **Nunca** del cliente. |
| **Paleta 3 colores** | `#0950F6` (azul, techo oscuridad), `#FFEC01` (amarillo, ≤15% CTA), `#FFFFFF` (blanco). **Nada más oscuro que `#0950F6`**. |
| **Tipografía** | Anton/Bebas **solo peso 400** (no `font-bold`). Outfit body. Geist Mono `tabular-nums` obligatorio en precios. |
| **Server Components por defecto** | `'use client'` solo para hooks, motion, GSAP, Leaflet, localStorage. Islas lo más abajo posible. |
| **Server Actions para mutaciones** | En `src/actions/`. Route Handlers solo webhooks/consumo externo. |
| **Primitivas primero** | Antes de escribir markup: `DoubleBezelCard`, `CTANestedPill`, `InputField`, `Badge`, `HeroProceduralBackground`, `Stepper`, `BentoGrid`, `RadioCardGroup`. |
| **Voseo rioplatense obligatorio** | "Cotizá", "Enviá", "Calculá", "Contactanos". NUNCA "usted/su". |
| **`Math.ceil(km)` obligatorio** | En excedentes >10km. Nunca `Math.floor/round`. |
| **`prefers-reduced-motion` en TODO** | MotionConfig global + `useReducedMotion()` en componentes + gate GSAP. |
| **Touch targets ≥ 44px** | `min-h-[44px]` CTA, `h-11` input. Focus visible `ring-2 brand-blue-500`. |
| **Gestor de paquetes: solo `pnpm`** | Nunca `npm` ni `yarn`. |

---

## 📋 Protocolo de Verificación (Niveles N0–N3)

| Nivel | Qué Tocaste | Qué Correr | Qué NO |
|---|---|---|---|
| **N0** | Docs, comentarios, assets | Nada | Todo |
| **N1** | Solo `className`, textos, orden JSX, íconos | `pnpm exec eslint <archivos>` | typecheck, tests, build |
| **N2** | Props, tipos, hooks, estado, componentes en `src/components/**` o `src/hooks/**` | `pnpm typecheck` + `pnpm exec eslint <archivos>` + `pnpm exec vitest related <archivos> --run` (si existe test) | build, lint completo, suite |
| **N3** | `src/lib/pricing.ts`, `src/actions/**`, `src/app/api/**`, `src/proxy.ts`, `prisma/**`, `layout.tsx`, `globals.css`, `tailwind.config.ts`, `next.config.ts`, `eslint.config.mjs`, `package.json`, rutas/SEO, >10 archivos | **N2 +** tests del área + **cierre:** `pnpm build` + `pnpm run lint` | Suite entera (salvo configs transversales) |

> **Baseline fallos previos (2026-09-21):** 57 errores lint en otros archivos; 5 tests fallan en `cotizar/express`, `cotizar/lowcost`, `preguntas-frecuentes`, `lib/promises.test.ts`. **No perseguirlos** salvo que la tarea sea arreglarlos.

---

## 🚀 Comandos Esenciales

```bash
# Typecheck (obligatorio antes de PR)
pnpm typecheck

# Lint archivos tocados
pnpm exec eslint <archivos>

# Tests relacionados
pnpm exec vitest related <archivos> --run --reporter=dot

# Build (solo N3 o si usuario lo pide)
pnpm build  # Windows: powershell -ExecutionPolicy Bypass -Command "pnpm build"

# Dev
pnpm dev  # Windows hot-reload fix: pnpm dev --webpack

# Prisma
pnpm prisma generate && pnpm prisma db push
```

---

## 📁 Estructura `docs/knowledge_base/`

```
docs/knowledge_base/
├── 00-proyecto/
│   ├── identidad-negocio.md
│   ├── stack-tecnologico.md
│   └── servicios-tarifas-2026.md
├── 01-diseno/
│   ├── design-system.md           # Canónico (fuente de verdad)
│   ├── tokens-colores.md
│   ├── tipografia.md
│   ├── hero-layout.md
│   ├── primitivas-ui.md
│   ├── motion-accesibilidad.md
│   ├── iconografia-imagen.md
│   ├── anti-patrones.md
│   ├── deuda-adherencia.md
│   ├── tarifas-logica-negocio.md
│   ├── quick-reference.md
│   └── plan-remediacion.md
├── 02-dominio/
│   ├── glosario.md
│   ├── decisiones.md
│   └── contexto-seo.md
├── 03-operaciones/
│   ├── comandos-verificacion.md
│   ├── agentes-skills.md
│   ├── issue-tracker.md
│   └── triage-labels.md
└── 04-referencia-rapida/
    └── cheat-sheet.md
```

---

## 🔗 Referencias Clave del Código

| Archivo | Qué Es |
|---|---|
| `src/app/globals.css` | `@theme` Tailwind v4 (tokens, sombras, keyframes, tipografía) |
| `src/app/layout.tsx` | Root layout, `next/font`, metadata, `MotionConfig` |
| `src/lib/pricing.ts` | Funciones puras `calculateExpressPrice` / `calculateLowCostPrice` + constantes `*_TIERS` |
| `src/actions/quote.ts` | Server Action de cotización (debe leer `PriceRange` vía Prisma) |
| `src/components/ui/index.ts` | Barril de primitivas (alias `@/components/ui`) |
| `prisma/schema.prisma` | `PriceRange` + `ServiceType` (modelos productivos) |
| `src/proxy.ts` | Middleware Next.js 16 (runtime Node.js) |

---

**Última actualización:** 2026-09-26 — Reestructuración `docs/knowledge_base/` completada.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
