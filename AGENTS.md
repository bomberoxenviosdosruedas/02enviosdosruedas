# AGENTS.md — Envíos DosRuedas Agent Configuration

**Proyecto:** Envíos DosRuedas (2026)  
**Stack:** Next.js 16 · React 19 · TypeScript 5 (strict) · Tailwind CSS v4 · Prisma · PostgreSQL 16 · Vitest  
**Gestor de paquetes:** pnpm (único autorizado)  
**Deploy:** Vercel

---

## 1. Reglas de Marca (Binding)

### Paleta Cromática
| Token | Hex | Uso |
|-------|-----|-----|
| `brand-blue-500` | `#0950F6` | Azul corporativo base (techo de oscuridad permitido) |
| `brand-blue-400` | `#3570F8` | Hover/acentos claros |
| `brand-blue-300` | `#628FF9` | Bordes, focus rings |
| `brand-blue-200` | `#8EAFFB` | Fondos suaves |
| `brand-blue-100` | `#BACEFD` | Fondos muy suaves |
| `brand-blue-50` | `#E6EEFE` | Fondos mínimos |
| `brand-yellow-500` | `#FFEC01` | Amarillo accent (CTAs ≤15%) |
| `brand-yellow-400` | `#FFF12E` | Hover CTA |
| `brand-yellow-600` | `#E6D400` | Pressed CTA |
| `brand-yellow-50` | `#FFFDE6` | Fondos accent suaves |
| `brand-yellow-100` | `#FFFAB8` | Fondos accent |
| `brand-yellow-200` | `#FFF78A` | Fondos accent medios |
| `brand-yellow-300` | `#FFF45C` | Fondos accent fuertes |
| `white` | `#FFFFFF` | Blanco puro |
| `error-500` | `#EF4444` | Solo errores |
| `error-600` | `#DC2626` | Solo errores pressed |

**Prohibidos:** Negro, grises, verdes, azules fuera de paleta, `#0636A5`, `#052C87`, `#04236B`, `#021440`, `#00277C`.

### Tipografía
- **Display/Titulares:** `Anton` 400 (`font-display`)
- **Subtítulos/Eyebrows:** `Bebas Neue` 400 (`font-subheading`)
- **Body:** `Outfit` (`font-sans`)
- **Mono/Precios/Métricas:** `Geist Mono` tabular-nums (`font-mono`)

### Primitivas UI Obligatorias
`DoubleBezelCard`, `CTANestedPill`, `InputField`, `RadioCardGroup`, `BentoGrid`, `HeroProceduralBackground`

### Accesibilidad
- WCAG 2.2 Level AA
- `prefers-reduced-motion` en toda animación
- Focus ring: `ring-2 ring-brand-blue-500`
- Contraste mínimo 4.5:1 (brand-blue-500 sobre amarillo = 4.9:1)

---

## 2. Niveles de Verificación (N0–N3)

| Nivel | Descripción | Comandos |
|-------|-------------|----------|
| **N0** | Solo documentación / sin cambios de código | Lectura, análisis, planificación |
| **N1** | Cambios triviales, bajo riesgo | `pnpm typecheck` |
| **N2** | Cambios moderados, un archivo/área | `pnpm typecheck` + `pnpm exec eslint <archivos>` + `pnpm exec vitest related <archivos> --run` |
| **N3** | Cambios estructurales, globales, CSS, configuración | `pnpm typecheck` + `pnpm run lint` + `pnpm exec vitest run` + `pnpm build` (Windows: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`) |

**Regla:** Nunca `pnpm test` a secas (queda en watch). Siempre `pnpm exec vitest run ...`.

---

## 3. Flujo de Trabajo de Agentes

### Issue Tracking (Local Markdown)
- **Directorio de features:** `.scratch/<feature-slug>/`
- **Spec:** `.scratch/<feature-slug>/spec.md`
- **Tickets:** `.scratch/<feature-slug>/issues/<NN>-<slug>.md` (números desde `01`)
- **Estado:** Línea `Status:` al inicio (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`)
- **Comentarios:** Al final bajo `## Comments`

### Alineación con `docs/marketing`
- Backlog maestro: `docs/marketing/TASKS.md` y `docs/marketing/F4-0-backlog.md`
- Prompts listos para agentes: `docs/marketing/BL-*-prompt.md`
- Al completar: actualizar `docs/marketing/TASKS.md` (rutina de cierre de sesión)

### Wayfinding (para `/wayfinder`)
- **Mapa:** `.scratch/<effort>/map.md` (Notes / Decisions-so-far / Fog body)
- **Ticket hijo:** `.scratch/<effort>/issues/NN-<slug>.md`
- **Bloqueo:** Línea `Blocked by: NN, NN`
- **Frontera:** Escanear issues abiertos, sin bloquear, sin reclamar; el primero por número gana
- **Reclamar:** `Status: claimed` antes de empezar
- **Resolver:** Anexar solución bajo `## Answer`, `Status: resolved`, actualizar `map.md`

---

## 4. Etiquetas de Triage (Canónicas)

| Label en skills | Label en nuestro tracker | Significado en workflow local |
|-----------------|--------------------------|-------------------------------|
| `needs-triage` | `needs-triage` | Mantenedor debe evaluar (`Pendiente`) |
| `needs-info` | `needs-info` | Esperando aclaración owner/reporter (`Bloqueado`) |
| `ready-for-agent` | `ready-for-agent` | Especificado completamente, prompt listo (`Specs listos`) |
| `ready-for-human` | `ready-for-human` | Requiere acción humana (Canva, Google Business, contratos) |
| `wontfix` | `wontfix` | Fuera de alcance, rechazado o supersedido |

---

## 5. Documentación de Dominio (Lectura Obligatoria)

Antes de explorar código, leer en orden:

1. **`CONTEXT.md`** (raíz) — Glosario core, definiciones de entidad, guías geográficas Mar del Plata y marca
2. **`docs/marketing/glosario.md`** — Glosario definitivo de términos negocio/logística
3. **`docs/marketing/decisiones.md`** — Decisiones arquitectura, negocio, diseño
4. **`docs/adr/`** — ADRs del área a trabajar
5. **`AGENTS.md` & `DESIGN.md`** — Reglas binding de marca, tipografía, cromáticas

**Vocabulario obligatorio:** Usar términos tal como definidos en `CONTEXT.md` y `docs/marketing/glosario.md`. No inventar sinónimos ni traducir terminología establecida.

**Conflictos ADR:** Si la salida contradice decisión en `docs/marketing/decisiones.md` o `docs/adr/`, surfear explícitamente en lugar de sobrescribir silenciosamente.

---

## 6. Optimización de Tokens (Context Boundaries)

Este repo usa tres archivos de exclusión coordinados para reducir contexto IA:

| Archivo | Propósito | Agentes objetivo |
|---------|-----------|------------------|
| `.aiexclude` | Estándar universal (Cursor, Copilot, Windsurf, Cody, JetBrains AI, Gemini, etc.) | Todos |
| `.antigravityignore` | Optimización FinOps para Antigravity AI | Antigravity |
| `.geminiignore` | FinOps & Context Optimization para Google AI / Gemini | Gemini |

**Whitelist común (archivos SÍ incluidos):**
- Configuración: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `package.json`, `pnpm-workspace.yaml`, `postcss.config.mjs`, `eslint.config.mjs`, `vitest.config.ts`, `prisma.config.ts`, `prisma/schema.prisma`, `prisma/seed.ts`
- Código fuente: `src/**/*`, `public/**/manifest.json`
- Reglas/raíz: `README.md`, `AGENTS.md`, `DESIGN.md`, `PROJECT.md`, `CONTEXT.md`, `PRODUCT.md`, `CLAUDE.md`
- Control IA: `.antigravityignore`, `.geminiignore`, `.aiexclude`
- Skills: `.agents/skills/**/SKILL.md`, `.agents/skills.json`, `.agents/rules/**`
- Docs operativas: `docs/knowledge_base/**`, `docs/contexto/precios.md`, `docs/contexto/arquitectura.md`, `docs/contexto/convenciones.md`, `docs/contexto/decisiones.md`, `docs/contexto/errores-conocidos.md`, `docs/contexto/flujo-de-trabajo.md`, `docs/contexto/glosario.md`, `docs/marketing/glosario.md`, `docs/marketing/decisiones.md`, `docs/adr/**`, `docs/agents/**`, `docs/imagenes/hero-derecha/PROMPTS.md`

**Excluidos principales:** `node_modules/`, `pnpm-lock.yaml`, `.next/`, `dist/`, `build/`, `.git/`, `.env*`, `*.log`, `prisma/migrations/**/*.sql`, `enviosdosruedas_datos_2_anos/`, `*.csv`, `*.xlsx`, `docs/imagenes/`, `docs/prompts/`, `docs/paginas*/`, `.claude/`, `.hermes/`, `.agents/**/node_modules/`, `.agents/**/bin/`, `.agents/**/font-index.json`

---

## 7. Comandos de Desarrollo

| Acción | Comando |
|--------|---------|
| **Typecheck** | `pnpm typecheck` |
| **Lint** | `pnpm exec eslint <archivos>` |
| **Tests CI** | `pnpm exec vitest --run` |
| **Tests related** | `pnpm exec vitest related <archivos> --run` |
| **Build** | `pnpm build` (Windows: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`) |
| **Prisma Studio** | `pnpm prisma studio` |
| **Seed tarifas 2026** | `pnpm prisma db seed` |
| **Dev server** | `pnpm dev` |

---

## 8. Variables de Entorno Requeridas

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `DATABASE_URL` | ✅ | PostgreSQL (`postgresql://user:pass@localhost:5432/enviosdosruedas`) |
| `GOOGLE_MAPS_API_KEY` | ✅ | AddressAutocomplete & Directions API proxied |
| `NEXT_PUBLIC_SITE_URL` | ✅ | URL canónica (`https://enviosdosruedas.com`) |
| `GA4_MEASUREMENT_ID` | ⚪ | Google Analytics 4 (`G-XXXXXXXXXX`) |
| `WHATSAPP_NUMBER` | ⚪ | WhatsApp Business Oficial (`542236602699`) |

**Nunca** imprimir valores de `.env` ni `DATABASE_URL`.

---

## 9. Reglas Duras (No Negociables)

- **NUNCA** cambiar precios, textos visibles, rutas, redirecciones, lógica de negocio ni colores
- **NUNCA** borrar carpetas de herramientas de agentes (`.agent`, `.agents`, `.hermes`, `.opencode`, `.design-sync`, `.impeccable`, `.stitch`, `.claude`) ni archivos de ignore de IA (`.aiexclude`, `.antigravityignore`, `.geminiignore`)
- **NUNCA** imprimir valores de `.env` ni `DATABASE_URL`
- Todo cambio CSS = visualmente nulo (salvo bug demostrado y declarado)
- Paleta, tipografías, `prefers-reduced-motion`, focus ring: son reglas de este AGENTS.md y DESIGN.md, no se relajan
- Solo **pnpm**. Nunca `pnpm test` a secas
- **Voseo rioplatense** en todo lo que escribas para humanos (comentarios, docs, PR). Sin em-dash ni en-dash