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
| **Tarifas y Lógica de Negocio (fuente de verdad, flujo server-side, testing, recargos, protocolos)** | `docs/knowledge_base/01-diseno/tarifas-logica-negocio.md` |
| **Contexto del dueño (entrevista 2026-09-28): definiciones verbatim, recargos, protocolos, lo que NIEGA, visión de foto, auditoría de claims** | `docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md` |
| **Voz de marca, líneas rojas, cliente estrella y FAQs del dueño (cuestionario de 31 preguntas, 25/5/2026)** | `docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md` §11 y §12 |
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
| **Fuente única de tarifas** | `PriceRange` (BD) → `src/lib/pricing.ts` (fallback). **Nunca** del cliente. **Nunca** un literal en un componente. |
| **Tarifas publicadas sin respaldo del dueño** | Quedan **dos**: Flex Nivel 2 `$6.500` y Nivel 3 `$4.500`, hardcodeadas en `FlexPricing.tsx`. **No tocarlas ni replicarlas** hasta que Matías confirme. El dueño validó el *concepto* (base LowCost, descuento por volumen, sin mínimo) pero **no las cifras**. Ver `02-dominio/entrevista-dueno-2026-09-28.md` §1.3.1 |
| **24HS confirmado, implementación pendiente** | `$3.800`/envío **es correcto** (Matías, 2026-09-29), más **recolección gratis desde 10 envíos**. El número está bien; lo que falta es la centralización: vive hardcodeado en `app/servicios/page.tsx:183`, sin `PriceRange`, sin función de cálculo, con CTA que no lleva a ningún cotizador. **No cambiar el valor.** Ver §1.5 |
| **El CSV es la fuente más antigua, no la más nueva** | `docs/contexto/respuestas_dueno_enviosdosruedas.csv` está firmado el **25/5/2026**, ~4 meses antes que las otras tres. Para **voz, tono, líneas rojas y nombres propios** es la fuente más literal. Para **precios** no: dio `$4.000` para el 24HS y el vigente es `$3.800`. **Orden: `.docx`/planilla > informe estratégico > CSV** |
| **Voz de marca: persona normal, trabajador, sin exagerar** | Del cuestionario del dueño. Tono medio formal, sin superlativo, prueba de laurreta antes de escribir. Contrapeso: la escena visual es de alto contraste y la marca **no** es informal. No aligerar el diseño sin tocar el copy. Ver `anti-patrones.md` §5.4 |
| **Tres líneas rojas del dueño** | No se transportan productos ilegales · no se tolera falta de respeto al repartidor · **"preferimos decir que no podemos, a fallar"**. La tercera es la más valiosa y hoy **no está publicada**. Ver §4.7-§4.9 y §11.1 |
| **No publicar clientes, competidores ni rentabilidad** | MailAmericas (2.500-4.000 envíos/semana) existe pero **sin autorización**: publicar el volumen expone la capacidad de la flota. CDI, MMDP y Retorno Mensajería son **información interna**: no se nombran. Y las fuentes se contradicen sobre cuál servicio es "más rentable". Ver `anti-patrones.md` §5.1 |
| **Paleta 3 colores** | `#0950F6` (azul, techo oscuridad), `#FFEC01` (amarillo, ≤15% CTA), `#FFFFFF` (blanco). **Nada más oscuro que `#0950F6`**. |
| **Tipografía** | Anton/Bebas **solo peso 400** (no `font-bold`). Outfit body. Geist Mono `tabular-nums` obligatorio en precios. |
| **Server Components por defecto** | `'use client'` solo para hooks, motion, GSAP, Leaflet, localStorage. Islas lo más abajo posible. |
| **Server Actions para mutaciones** | En `src/actions/`. Route Handlers solo webhooks/consumo externo. |
| **Primitivas primero** | Antes de escribir markup: `DoubleBezelCard`, `CTANestedPill`, `InputField`, `Badge`, `HeroProceduralBackground`, `Stepper`, `BentoGrid`, `RadioCardGroup`. |
| **Voseo rioplatense obligatorio** | "Cotizá", "Enviá", "Calculá", "Contactanos". NUNCA "usted/su". |
| **Nada que el dueño haya negado** | Ver `anti-patrones.md` §5.1. Afirmaciones que él desmintió por nombre (rendición inmediata, Factura A, 60-90 min, "hasta 15 kg" sin recargo, LowCost "agrupado", punto de retiro, "entregas en 24hs" como duración) son **bugs de contenido**, no preferencias. Ojo: el **servicio** E-Commerce 24HS existe y su precio `$3.800` está confirmado (ver fila propia). |
| **Franja ≠ duración** | `EXPRESS_WINDOW` ("franja horaria de 3 hs") es ventana; `EXPRESS_WINDOW_SHORT` ("Franja de 3 hs") es rótulo. **Nunca** "en 3 hs": sería entrega en 3 horas. |
| **5 kg ≠ 15 kg** | `STANDARD_WEIGHT_KG` (5) es lo que va sin recargo y es el número del copy. `MAX_WEIGHT_KG` (15) es el techo absoluto. No intercambiables. |
| **`Math.ceil(km)` obligatorio** | En excedentes >10km. Nunca `Math.floor/round`. |
| **`prefers-reduced-motion` en TODO** | `useReducedMotion()` en componentes + gate GSAP + bloque `prefers-reduced-motion` en `globals.css`. **Ojo:** el `MotionConfig` global que se pidió en `design-system.md` **todavía no existe**. Lo que sí existe hoy es el gate por componente y el bloque CSS. |
| **Touch targets ≥ 44px** | `min-h-[44px]` CTA, `h-11` input. Focus visible `ring-2 brand-blue-500`. |
| **Gestor de paquetes: solo `pnpm`** | Nunca `npm` ni `yarn`. |

---

## 📋 Protocolo de Verificación (Niveles N0–N3)

| Nivel | Qué Tocaste | Qué Correr | Qué NO |
|---|---|---|---|
| **N0** | Docs, comentarios, assets | Nada | Todo |
| **N1** | Solo `className`, textos, orden JSX, íconos | `pnpm exec eslint <archivos>` | typecheck, tests, build |
| **N2** | Props, tipos, hooks, estado, componentes en `src/components/**` o `src/hooks/**` | `pnpm typecheck` + `pnpm exec eslint <archivos>` + `pnpm exec vitest related <archivos> --run` (si existe test) | build, lint completo, suite |
| **N3** | `src/lib/pricing.ts`, `src/actions/**`, `src/app/api/**`, `src/proxy.ts`, `prisma/**`, `layout.tsx`, `globals.css`, `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`, `vitest.config.ts`, `package.json`, rutas/SEO, >10 archivos | **N2 +** tests del área + **cierre:** `pnpm build` + `pnpm run lint` | Suite entera (salvo configs transversales) |

> **Baseline fallos previos (medido 2026-09-29, post-refactorización de arquitectura):**
>
> - `pnpm run lint`: **0 errores, 0 warnings** (se limpiaron los 3 warnings de los shims locales al añadirlos a `eslint.config.mjs` ignores).
> - Suite completa (`pnpm exec vitest run`): **12 archivos, 121 tests → 119 pasan, 2 fallan.** Los 2 son preexistentes y **NO** son consecuencia de esta refactorización:
>   - `contacto.test.tsx` test 3 espera la sección de redes (`Nuestra Comunidad Digital`), que vive en `CarruselRedes` (layout), no en `<ContactoPage />`. Test 6 espera un único mensaje de error de nombre y hoy lo renderizan dos elementos.
>
> **No perseguirlos** salvo que la tarea sea arreglarlos. `src/lib/pricing.ts` y la lógica de los cotizadores no se tocan.

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
│   ├── entrevista-dueno-2026-09-28.md
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
| `src/app/layout.tsx` | Root layout, `next/font`, metadata. **No** tiene `MotionConfig`: es deuda abierta, ver `deuda-adherencia.md` y `DESIGN.md` §8.4 |
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
