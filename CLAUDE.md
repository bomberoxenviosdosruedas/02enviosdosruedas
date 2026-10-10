# CLAUDE.md — Envíos DosRuedas Configuration for Claude Code

**Proyecto:** Envíos DosRuedas (2026) — Logística última milla, Mar del Plata  
**Stack:** Next.js 16 (App Router) · React 19 · TypeScript 5 strict · Tailwind CSS v4 · Prisma · PostgreSQL 16 · Vitest · pnpm

---

## 1. Visión General Rápida

| Aspecto | Detalle |
|---------|---------|
| **Framework** | Next.js 16 con App Router, React 19 |
| **Lenguaje** | TypeScript 5 (strict mode) |
| **Estilos** | Tailwind CSS v4 (`@theme` en `src/app/globals.css`) |
| **Animaciones** | GSAP + `motion/react` (con `useReducedMotion()`) |
| **Base de Datos** | Prisma ORM + PostgreSQL 16 (`PriceRange` + fallback `pricing.ts`) |
| **Mapas/Geocoding** | Google Places & Directions API (Proxied via Server Actions) + Leaflet |
| **Testing** | Vitest (unitario e integración) + JSDOM |
| **Deploy** | Vercel |
| **Package Manager** | **pnpm 9+** (único autorizado) |

---

## 2. Archivos de Configuración Raíz (Contexto Obligatorio)

| Archivo | Propósito |
|---------|-----------|
| `AGENTS.md` | Configuración de agentes, reglas de marca, workflow, triage, verificación |
| `DESIGN.md` | Sistema de diseño completo (tokens, tipografía, componentes, motion, accesibilidad) |
| `CONTEXT.md` | Glosario core, entidades de dominio, geografía Mar del Plata, reglas de negocio |
| `PROJECT.md` | Resumen técnico del proyecto, arquitectura, decisiones clave |
| `PRODUCT.md` | Especificación de producto, servicios, pricing, reglas operativas |
| `README.md` | Documentación pública, inicio rápido, comandos, contacto |

**Regla:** Antes de cualquier tarea, leer `AGENTS.md` y `DESIGN.md` §2 (paleta y tokens).

---

## 3. Comandos de Desarrollo

```bash
# Instalación
pnpm install

# Base de datos
cp .env.example .env
pnpm prisma generate
pnpm prisma db push
pnpm prisma db seed          # Seed tarifas vigentes 2026

# Desarrollo
pnpm dev                     # Servidor desarrollo (Turbopack)

# Verificación
pnpm typecheck               # TypeScript strict check
pnpm exec eslint <archivos>  # Lint específico
pnpm exec vitest --run       # Tests CI (no watch)
pnpm exec vitest related <archivos> --run  # Tests related

# Build & Deploy
pnpm build                   # Build producción (Windows: powershell -ExecutionPolicy Bypass -Command "pnpm build")
pnpm prisma studio           # Prisma Studio
```

---

## 4. Niveles de Verificación (N0–N3)

| Nivel | Cuándo usar | Comandos requeridos |
|-------|-------------|---------------------|
| **N0** | Solo docs, análisis, planificación | Ninguno (solo lectura) |
| **N1** | Cambios triviales, typo, docs | `pnpm typecheck` |
| **N2** | Un archivo/área, lógica acotada | `pnpm typecheck` + `pnpm exec eslint <archivos>` + `pnpm exec vitest related <archivos> --run` |
| **N3** | Cambios globales, CSS, config, arquitectura | `pnpm typecheck` + `pnpm run lint` + `pnpm exec vitest run` + `pnpm build` |

**⚠️ Nunca** `pnpm test` a secas (queda en watch mode). Siempre `pnpm exec vitest run ...`.

---

## 5. Estructura del Proyecto (src/)

```
src/
├── actions/               # Server Actions (calculateQuoteAction, feedback, admin-imagenes)
├── app/                   # Rutas App Router (cotizar, servicios, nosotros, contacto, api)
├── components/
│   ├── ui/                # Primitivas (DoubleBezelCard, CTANestedPill, InputField, RadioCardGroup, BentoGrid, HeroProceduralBackground)
│   ├── home/              # Componentes página home
│   ├── servicios/         # Módulos servicios
│   ├── cotizar/           # Módulos cotizador
│   ├── layout/            # Header, Footer, Navigation
│   ├── nosotros/          # Páginas nosotros
│   ├── contacto/          # Formulario contacto
│   └── legal/             # Legales
├── hooks/                 # useCotizador, useGoogleRoute, useReducedMotion
├── lib/
│   ├── pricing.ts         # Motor de cotización (PriceRange + fallback)
│   ├── promises.ts        # Promesas de servicio
│   ├── whatsapp.ts        # Integración WhatsApp Business
│   └── prisma.ts          # Cliente Prisma singleton
└── test/                  # Setup Vitest, utilities
```

---

## 6. Paleta y Tokens (Resumen Binding)

**Fuente de verdad:** `src/app/globals.css` `@theme` + `DESIGN.md` §2 + `AGENTS.md` §1

| Token Canónico | Hex | Uso |
|---|---|---|
| `brand-blue-500` | `#0950F6` | Azul corporativo (máx. oscuridad) |
| `brand-blue-400` | `#3570F8` | Hover/acento |
| `brand-blue-300` | `#628FF9` | Bordes, focus-ring |
| `brand-blue-200` | `#8EAFFB` | Fondos suaves |
| `brand-blue-100` | `#BACEFD` | Fondos muy suaves |
| `brand-blue-50` | `#E6EEFE` | Fondos mínimos |
| `brand-yellow-500` | `#FFEC01` | Amarillo accent (CTA ≤15%) |
| `brand-yellow-400` | `#FFF12E` | Hover CTA |
| `brand-yellow-600` | `#E6D400` | Pressed CTA |
| `white` | `#FFFFFF` | Blanco |
| `error-500` | `#EF4444` | Solo errores |
| `error-600` | `#DC2626` | Solo errores pressed |

**Prohibidos:** Negro, grises, verdes, azules fuera de paleta, `#0636A5`, `#052C87`, `#04236B`, `#021440`, `#00277C`.

**Tipografía:** Anton 400 (display), Bebas Neue 400 (subheading), Outfit (body), Geist Mono tabular-nums (precios).

---

## 7. Optimización de Tokens (Context Boundaries)

Tres archivos coordinados excluyen contenido pesado del contexto IA:

| Archivo | Agentes objetivo |
|---------|------------------|
| `.aiexclude` | Universal (Cursor, Copilot, Windsurf, Cody, JetBrains, Gemini, etc.) |
| `.antigravityignore` | Antigravity AI |
| `.geminiignore` | Google AI / Gemini |

**Whitelist compartida (SÍ se incluyen):**
- Config: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `package.json`, `pnpm-workspace.yaml`, `postcss.config.mjs`, `eslint.config.mjs`, `vitest.config.ts`, `prisma.config.ts`, `prisma/schema.prisma`, `prisma/seed.ts`
- Source: `src/**/*`, `public/**/manifest.json`
- Raíz: `README.md`, `AGENTS.md`, `DESIGN.md`, `PROJECT.md`, `CONTEXT.md`, `PRODUCT.md`, `CLAUDE.md`
- IA Control: `.antigravityignore`, `.geminiignore`, `.aiexclude`
- Skills: `.agents/skills/**/SKILL.md`, `.agents/skills.json`, `.agents/rules/**`
- Docs: `docs/knowledge_base/**`, `docs/contexto/**`, `docs/marketing/glosario.md`, `docs/marketing/decisiones.md`, `docs/adr/**`, `docs/agents/**`

**Excluidos (no llegan al contexto):**
`node_modules/`, `pnpm-lock.yaml`, `.next/`, `dist/`, `build/`, `.git/`, `.env*`, `*.log`, `prisma/migrations/**/*.sql`, `enviosdosruedas_datos_2_anos/`, `*.csv`, `*.xlsx`, `docs/imagenes/`, `docs/prompts/`, `docs/paginas*/`, `.claude/`, `.hermes/`, `.agents/**/node_modules/`, `.agents/**/bin/`, `.agents/**/font-index.json`

---

## 8. Reglas de Negocio Clave (Guardrails)

- **Facturación:** Factura C para todos los clientes/servicios
- **Cobro destino (contreembolso):** Rendición cierre día / 24hs / semanal (nunca inmediata)
- **Express:** Franja horaria 3hs a elección (no promete duración "60-90min")
- **Peso:** Hasta 5kg o 40×40cm sin recargo (`STANDARD_WEIGHT_KG = 5`)
- **Clima adverso:** Recargo según tipo de servicio
- **Espera:** 10 min gracia en domicilio

---

## 9. Servicios Principales

| Servicio | Tipo | Corte | Tarifa clave |
|----------|------|-------|--------------|
| **Express** | Demanda prioritario | 15:00hs, min 2hs antelación | Distancia + $1.000/km excedente 10-20km |
| **LowCost** | Programado diario | 13:00hs → entrega <19:00hs | Económica + $700/km excedente |
| **Mercado Envíos Flex** | Same-day ML | 15:00hs → entrega <20:00hs | 3 Niveles (N1/N2/N3), 2da visita GRATIS |
| **E-Commerce Same Day (3PL)** | Fulfillment | 15:00hs → same day | Tarifa plana integral MDP |
| **E-Commerce 24hs** | Next day | Retiro hoy, entrega mañana | Tarifa plana escalada, Drop-Off 20% OFF |
| **Cuenta Corriente** | PyMEs/Empresas | 15:00hs, min 2hs | Express + liquidación personalizada |
| **Gestión Cobranzas** | Contrareembolso | Rendición día/24hs/semanal | Arqueo detallado |

---

## 10. Variables de Entorno (.env)

| Variable | Req | Descripción |
|----------|-----|-------------|
| `DATABASE_URL` | ✅ | `postgresql://user:pass@localhost:5432/enviosdosruedas` |
| `GOOGLE_MAPS_API_KEY` | ✅ | Places & Directions API (proxied) |
| `NEXT_PUBLIC_SITE_URL` | ✅ | `https://enviosdosruedas.com` |
| `GA4_MEASUREMENT_ID` | ⚪ | `G-XXXXXXXXXX` |
| `WHATSAPP_NUMBER` | ⚪ | `542236602699` |

**Nunca** exponer `.env` ni `DATABASE_URL` en outputs.

---

## 11. RTK (Rust Token Killer) — Optimización Bash

```bash
rtk gain              # Analytics de ahorro de tokens
rtk gain --history    # Historial de comandos con ahorro
rtk discover          # Analiza historial Claude Code oportunidades perdidas
rtk proxy <cmd>       # Ejecuta comando sin filtrar (debug)
```

Hook automático: `git status` → `rtk git status` (transparente, 0 tokens overhead).

---

## 12. Hooks y Permisos (.claude/settings.json)

```json
{
  "enabledPlugins": {
    "mattpocock-skills@claude-plugins-official": true,
    "frontend-design@claude-plugins-official": true,
    "code-review@claude-plugins-official": true
  }
}
```

---

## 13. Reglas Duras para Claude Code

- **NUNCA** modificar precios, textos visibles, rutas, lógica de negocio, colores
- **NUNCA** borrar `.agent`, `.agents`, `.hermes`, `.opencode`, `.design-sync`, `.impeccable`, `.stitch`, `.claude`, `.aiexclude`, `.antigravityignore`, `.geminiignore`
- **NUNCA** exponer secrets (`.env`, `DATABASE_URL`)
- Cambios CSS = visualmente nulos (salvo bug demostrado)
- Paleta, tipografía, `prefers-reduced-motion`, focus-ring: **binding** (AGENTS.md + DESIGN.md)
- Solo **pnpm**. No `pnpm test` sin `--run`
- **Voseo rioplatense** en outputs para humanos. Sin em-dash/en-dash.
- Usar vocabulario de `CONTEXT.md` y `docs/marketing/glosario.md` (no inventar sinónimos)

---

## 14. Documentación de Arquitectura (docs/architecture/)

| Doc | Contenido |
|-----|-----------|
| `01-system-overview.md` | Stack, estructura `src/` |
| `02-domain-pricing-engine.md` | Algoritmo precios, franjas, guardrails |
| `03-server-actions-and-integrations.md` | Server Actions, proxy Google, `safeCache` |
| `04-ui-design-system.md` | Tokens, tipografías, Double-Bezel, accesibilidad |
| `05-testing-verification-protocol.md` | Niveles N0–N3, Vitest JSDOM, TS strict |

---

## 15. Contacto Institucional

- **Base Operativa:** Friuli 1972, Mar del Plata, Buenos Aires, Argentina
- **Fundador & CEO:** Matías Nicolás Cejas
- **WhatsApp/Tel:** +54 223 660-2699
- **Email:** MatiasCejas@enviosdosruedas.com
- **Web:** www.enviosdosruedas.com