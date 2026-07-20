# 🚀 Envíos Dos Ruedas — Logística Same-Day en Mar del Plata (2026)

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.18-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![pnpm](https://img.shields.io/badge/pnpm-9-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Vitest](https://img.shields.io/badge/Vitest-2-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-1.46-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

> **Plataforma digital líder** en mensajería última milla, ruteo inteligente LowCost y soluciones logísticas para E-Commerce y MercadoLibre Flex.
> Desarrollada específicamente para la operatividad vial y comercial de **Mar del Plata**.
> Vigencia operativa: **2026**. Año base para tarifas, referencias temporales y proyecciones.

---

## 🎯 Resumen Ejecutivo

| Qué es | Para quién | Dónde opera | Stack principal |
|--------|------------|-------------|-----------------|
| Logística urbana same-day + programada | Particulares, PyMEs, Sellers ML, E-Commerce | **Mar del Plata** (Partido General Pueyrredón completo) | Next.js 16 + Tailwind v4 + Prisma + PostgreSQL |

**Servicios Core:**
- **🚀 Express** — Puerta a puerta **< 90 min**. Moto dedicada. Precio por distancia.
- **📦 LowCost** — Ruteo optimizado multi-entrega **24h**. Ahorro hasta 30%. Precio por distancia + eficiencia.
- **🛒 Flex** — Integración nativa **MercadoLibre Flex**. Retiro en hub/domicilio → Entrega SLA ML.
- **🏭 3PL / Fulfillment** — Almacenaje en **Friuli 1972** + Pick/Pack + Envío. Para PyMEs que tercerizan logística.
- **🌱 Emprendedores** — Planes escalonados por volumen mensual. Onboarding asistido. Desde $2.800/envío.

---

## 🎨 Identidad Visual & Diseño Premium

Sistema de diseño propio, rígido y documentado en **[DESIGN.md](./DESIGN.md)**.

### Paleta — Ley de 3 Colores (Inmutable)

| Color | Token | Hex | Qué transmite |
|-------|-------|-----|---------------|
| **Azul Principal** | `brand-blue-700` / `--color-primary` | `#0636A5` | Confianza, seriedad, respaldo institucional, orden |
| **Amarillo Acento** | `brand-yellow-500` / `--color-accent` | `#FFEC01` | Energía, velocidad vial, visibilidad urbana, acción |
| **Blanco Base** | `brand-white-50` / `--color-surface` | `#FFFFFF` | Claridad, limpieza, lienzo, foco en contenido |

**🚫 Prohibido:** `slate-*`, `gray-*`, `zinc-*`, `neutral-*`, `stone-*`, hex inline arbitrarios.

### Tipografía de Impacto

| Rol | Fuente | Uso |
|-----|--------|-----|
| **Display / H1 Hero** | **Anton** | Títulos monumentales, estilo señalética vial |
| **Subheading / Badge / Botón** | **Bebas Neue** | Subtítulos, métricas, CTAs, labels |
| **Body / UI / Inputs** | **IBM Plex Sans** | Párrafos, formularios, navegación, textos descriptivos |
| **Mono / Data / Precios** | **Geist Mono** | Precios, tracking numbers, métricas tabulares |

### Componentes Signature (Contratos Inmutables)

| Componente | Descripción | Archivo Ref. |
|------------|-------------|--------------|
| **Double Bezel Card** | Arquitectura doble bisel (outer blue-50 + inner white) para tarjetas contenido | `src/components/ui/card.tsx` |
| **CTA Nested Pill** | Botón pastilla anidada (4 variantes: primary, elevated, outline, ghost) | `src/components/ui/button.tsx` |
| **Radio Card Group** | Selector de servicio (Express/LowCost/Flex) con estados visuales distintos | `src/components/ui/radio-card-group.tsx` |
| **Logos Carousel** | Infinite scroll con máscara gradient + pausa accesible | `src/components/ui/logos-carousel.tsx` |
| **Float/Tilt 3D Cards** | Hero cards con perspectiva 1000px + lerp mousemove | `src/components/ui/float-tilt-card.tsx` |
| **Asymmetric Bento Grid** | Grid 12-col spans 7/5/12 para Services section | `src/components/ui/bento-grid.tsx` |
| **Vertical Stepper** | Procesos secuenciales (How It Works, Historia) | `src/components/ui/stepper.tsx` |

---

## 🛠️ Stack Tecnológico Detallado

| Capa | Tecnología | Por Qué |
|------|------------|---------|
| **Framework** | **Next.js 16** (App Router, React 19, Turbopack) | RSC by default, Server Actions, Streaming, Edge Runtime, cero config |
| **Styling** | **Tailwind CSS v4** (`@theme`, CSS-first) | Tokens en CSS vars, JIT nativo, performance, DX |
| **DB/ORM** | **Prisma 5 + PostgreSQL 16** | Type-safe queries, migraciones, pooling, JSONB para flexibilidad |
| **Animations** | **Framer Motion** (`motion/react`) + **GSAP** | Layout animations, 3D, scroll-triggered, timelines complejas |
| **Maps/Routing** | **Leaflet** + **OSRM self-hosted** | Open-source, MDQ coverage custom, sin costos Google Maps, control total |
| **Forms/Validation** | **React Hook Form** + **Zod** | Performant, schema-first, type-safe, DX excelente |
| **Search** | **Meilisearch** | Typo-tolerant, filtering, < 50ms, self-hosted/Cloud |
| **Testing** | **Vitest** (unit) + **Playwright** (E2E) | Fast, TypeScript-native, trace viewer, parallel |
| **Package Manager** | **pnpm 9** | Disk efficiency, strict deps, workspaces, speed |
| **Deploy** | **Vercel** (Edge Functions) + **Neon/Supabase** (PG) | Zero-config, preview deployments, edge global, autoscaling |

---

## 📂 Arquitectura del Proyecto

```
src/
├── app/                          # Next.js App Router (RSC by default)
│   ├── (public)/                 # Route group: páginas públicas
│   │   ├── cotizar/
│   │   │   ├── express/          # /cotizar/express — Mapa + OSRM + Precio
│   │   │   └── lowcost/          # /cotizar/lowcost — Planilla + Batch routing
│   │   ├── servicios/
│   │   │   ├── express/          # /servicios/express
│   │   │   ├── lowcost/          # /servicios/lowcost
│   │   │   ├── flex/             # /servicios/flex (ML Integration)
│   │   │   ├── 3pl/              # /servicios/3pl (E-Commerce fulfillment)
│   │   │   └── emprendedores/    # /servicios/emprendedores
│   │   ├── nosotros/
│   │   │   ├── sobre-nosotros/   # Historia, valores, equipo, flota
│   │   │   ├── preguntas-frecuentes/ # FAQ + Schema.org + Search
│   │   │   └── nuestras-redes/   # IG/LI/WA carousel
│   │   ├── contacto/             # Form RHF+Zod + Mapa Friuli 1972
│   │   └── ayuda/                # Centro ayuda: Search + MDX + Feedback
│   ├── api/                      # API Routes (Edge donde crítico)
│   │   ├── quote/                # POST cálculo precio server-side
│   │   ├── route/                # POST OSRM single/batch
│   │   ├── webhook/              # ML Flex, MP, WhatsApp
│   │   └── assistant/            # Chat AI streaming
│   ├── globals.css               # @theme Tailwind v4 + vars semánticas
│   ├── layout.tsx                # Root: Header, Footer, Providers, Metadata
│   └── page.tsx                  # Landing (/)
├── components/
│   ├── ui/                       # Primitivas design system (Button, Input, Card, etc.)
│   ├── cotizar/
│   │   ├── express/              # ExpressHero, ExpressForm, AddressAutocomplete, RoutePreview
│   │   └── lowcost/              # LowCostHero, LowCostSheet, BatchRouter, ExportActions
│   ├── servicios/                # ServiceHero, BenefitCard, CoverageMap, ProcessStepper, CTASection
│   ├── layout/                   # Header, Footer, CarruselRedes
│   └── home/                     # HeroAnimado, TrustBar, ServicesBento, HowItWorks, SocialProof, CTAFinal
├── hooks/                        # useOSRMRoute, useOSRMBatch, useAddressAutocomplete, usePricing
├── lib/                          # pricing.ts (PURAS), prisma.ts, utils.ts, validations.ts, meilisearch.ts
├── types/                        # pricing.ts, geo.ts, services.ts
└── styles/                       # Referencia a app/globals.css
```

---

## 🚀 Inicio Rápido (Desarrollo Local)

### 1. Requisitos Previos
- **Node.js 20+** (recomendado: `fnm` / `nvm`)
- **pnpm 9+** → `npm i -g pnpm` o `corepack enable pnpm`
- **PostgreSQL 16+** (local: `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:16`)

### 2. Instalación
```bash
# Clonar y entrar
git clone https://github.com/tallermchector/02enviosdosruedas.git
cd 02enviosdosruedas

# Instalar dependencias (pnpm ONLY)
pnpm install
```

### 3. Variables de Entorno
```bash
# Copiar ejemplo
cp .env.example .env.local

# Editar .env.local con tus valores
# Mínimo requerido para dev:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/envios_dos_ruedas"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
# Opcionales para features completas:
# GEMINI_API_KEY="..."           # Assistant AI
# MEILISEARCH_HOST="..."         # /ayuda search
# UPSTASH_REDIS_URL="..."        # Rate limiting
# ML_CLIENT_ID/SECRET="..."      # Flex integration
```

### 4. Base de Datos
```bash
# Generar cliente Prisma
pnpm prisma generate

# Aplicar schema (crea tablas)
pnpm prisma db push

# (Opcional) Seed con datos MDQ: tarifas, zonas, servicios
pnpm prisma db seed
```

### 5. Desarrollo
```bash
# Default (Turbopack)
pnpm dev

# Windows: si hot-reload falla → fuerza polling
pnpm dev --webpack

# App disponible en http://localhost:3000
```

### 6. Comandos Útiles
```bash
# Build producción (Windows)
powershell -ExecutionPolicy Bypass -Command "pnpm build"

# Lint (ejecutar ANTES de commit)
pnpm run lint

# Tests unitarios
pnpm test

# Tests E2E (Playwright)
pnpm test:e2e

# Prisma Studio (GUI BD)
pnpm prisma studio

# Verificar tipos TypeScript
pnpm tsc --noEmit
```

---

## 🤖 Onboarding para Agentes IA

**LEER EN ORDEN ANTES DE CUALQUIER TAREA:**

| Orden | Archivo | Qué Encontrarás |
|-------|---------|-----------------|
| **1** | [`docs/knowledge_base/contexto.md`](./docs/knowledge_base/contexto.md) | **CONSTITUCIÓN**: Manifiesto, 3 valores inmutables, voz rioplatense (diccionario verbos), contexto MDQ 2026, reglas visuales inquebrantables (logo, paleta 3 colores, tipografía) |
| **2** | [`AGENTS.md`](./AGENTS.md) | **PROTOCOLO OBLIGATORIO**: Plan→Ejecuta→Verifica→Itera, mapa archivos críticos, reglas código, reglas tarifas (tabla 2026 exacta), checklist DoD por tarea, errores conocidos |
| **3** | [`DESIGN.md`](./DESIGN.md) | **SISTEMA DISEÑO**: Tokens, componentes signature, layout principles, homepage structure, a11y, motion, rules post-auditoría |
| **4** | [`PROJECT.md`](./PROJECT.md) | **ARQUITECTURA + ROADMAP**: Stack, contratos interfaz, roadmap 5 fases × 15+ páginas con DoD específico, milestones, calidad transversal |
| **5** | [`docs/contexto/precios.md`](./docs/contexto/precios.md) | **FUENTE VERDAD TARIFAS**: Tabla exacta Express/LowCost 2026, `Math.ceil` +10km |
| **6** | [`.geminiignore`](./.geminiignore) / [`.aiexclude`](./.aiexclude) | Exclusiones FinOps: qué NO leer para ahorrar tokens |

### Reglas de Oro para Agentes
1. **NUNCA inventes precios** → Leer `docs/contexto/precios.md` + `src/lib/pricing.ts`
2. **NUNCA uses colores fuera de la paleta** → Solo `brand-blue-*`, `brand-yellow-*`, `brand-white-*`
3. **SIEMPRE voseo rioplatense** → "Cotizá", "Enviá", "Rastreá", "Contactanos", "Tu envío"
4. **SIEMPRE referencias MDQ reales** → Güemes, Friuli 1972, Playa Grande, Punta Mogotes, Chauvín, Puerto, Batán, Camet
5. **SIEMPRE 2026** en tarifas, fechas, vigencia
6. **ANTES de done** → `pnpm build` + `pnpm lint` + tests relevantes = VERDE

---

## 🧩 Guía de Módulos Principales (Paso a Paso)

### 1. Landing Page (`/`) — `src/app/page.tsx`

**Secciones (orden estricto, alternancia fondo):**
```
1. HEADER (bg-brand-blue, sticky z-900) — Logo + Nav + Phone + CTA Primary
2. HERO (bg-brand-blue, min-h-[95dvh]) — Copy 60% + 3D Visual 40%
   - Badge "Envíos en Mar del Plata"
   - H1 Display (Anton): "Enviá hoy. Llega al toque."
   - Lead (IBM Plex Sans): "Cotizá en segundos. Rastreá en vivo. Pagás al recibir."
   - Dual CTA: [Cotizá Express] (primary yellow) + [Enviá LowCost] (elevated white)
   - Trust Pills (3): "Retiro en 15 min" · "Rastreo GPS vivo" · "Pago al recibir"
   - Visual: 4 Float/Tilt cards (Mapa, Tracking, Servicio, Contador animado)
3. TRUST BAR (bg-brand-blue-50) — 4 Métricas animadas + Badge ISO
4. SERVICES (bg-white) — Bento Grid Asimétrico 12-col
   - Express (span 7) — Double Bezel + Imagen
   - LowCost (span 5) — Double Bezel + Imagen
   - Flex (span 5) — Double Bezel + Imagen
   - 3PL (span 7) — Double Bezel + Imagen
   - CTA Full Width (span 12) — "Empezá a enviar hoy"
5. HOW IT WORKS (bg-brand-blue) — Vertical Stepper 4 pasos
   1. Creás la orden → 2. Asignamos rider → 3. Rastreás en vivo → 4. Entrega confirmada
6. SOCIAL PROOF (bg-white) — Logos Carousel + Testimonials Grid (3 cols)
7. CTA FINAL (bg-brand-blue) — Card White (rounded-3xl) + Dual CTA (Yellow + Green/WA)
8. FOOTER (bg-brand-blue + radial) — Accent bar + 3-col grid + Scroll-to-top + Legal
```

**Copy Key (voseo MDQ):**
```tsx
// Hero
<h1 className="font-display text-display uppercase">Enviá hoy. Llega al toque.</h1>
<p className="font-sans text-body-lg">Cotizá en segundos. Rastreá en vivo. Pagás al recibir.</p>
// CTAs
<CTAPrimary>Cotizá Express</CTAPrimary>
<CTASecondary>Enviá LowCost</CTASecondary>
// Trust
<Badge>Retiro en 15 min</Badge>
<Badge>Rastreo GPS vivo</Badge>
<Badge>Pago al recibir</Badge>
// CTA Final
<h2 className="font-display text-h1 uppercase">Tu logística en Mar del Plata, al toque.</h2>
<CTAPrimary>Cotizá tu primer envío</CTAPrimary>
<CTAWhatsApp>Escribinos por WhatsApp 💬</CTAWhatsApp>
```

### 2. Cotizador Express (`/cotizar/express`) — `src/app/(public)/cotizar/express/page.tsx`

**Flujo:**
1. **Hero Express** → Badge "EXPRESS" + H1 "Envío urgente puerta a puerta" + Lead "< 90 min en Mar del Plata"
2. **Form Double Bezel** → RadioCardGroup (Express seleccionado) → Origen (Autocomplete MDQ) → Destino (Autocomplete MDQ) → Peso/Dimensiones (opcional) → **Botón "Calculá tu envío" (CTA Primary)**
3. **Mapa Leaflet** (lado derecho desktop, abajo mobile) → Polyline OSRM + Markers origen/destino + Distancia km + Tiempo estimado
4. **Resultado** → Precio EXACTO tabla 2026 + Desglose (Base + Excedente si +10km) + SLA "< 90 min" → **CTA "Enviá ahora" + "Contactanos por WhatsApp"**

**Validaciones Críticas:**
- Autocomplete: **Solo resultados Mar del Plata** (filter `city: "Mar del Plata"`, `country: "Argentina"`)
- OSRM: `routing.machine` profile `car` (motos usan mismo grafo) → response `< 800ms` p95
- Precio: **Server Action** `/api/quote` → llama `calculateExpressPrice(km)` → valida contra BD `PricingRange`
- `Math.ceil(km - 10)` **OBLIGATORIO** en excedente (test: 10.3km = 11km facturados)

**Copy Key:**
```tsx
<Label>ORIGEN</Label>
<Placeholder>Calle 123, Güemes</Placeholder>
<HelpText>Cubrimos todo General Pueyrredón</HelpText>

<Label>DESTINO</Label>
<Placeholder>Av. Colón 4500, Playa Grande</Placeholder>

<CTAPrimary>Calculá tu envío</CTAPrimary>
// Resultado
<Price>$8.200</Price>
<Caption>7–10 km · Express · Llega en < 90 min</Caption>
<CTAPrimary>Enviá ahora</CTAPrimary>
<CTAWhatsApp>Contactanos por WhatsApp 💬</CTAWhatsApp>
```

### 3. Cotizador LowCost (`/cotizar/lowcost`) — `src/app/(public)/cotizar/lowcost/page.tsx`

**Flujo:**
1. **Hero LowCost** → Badge "LOWCOST" + H1 "Envíos programados, ruteo inteligente" + Lead "Ahorrá hasta 30% agrupando entregas"
2. **Planilla Editable** (Grid keyboard-nav) → Columnas: #, Origen, Destino, Referencia, Paquete, Acciones
   - **Agregar fila** → Focus inmediato en Origen
   - **Autocomplete MDQ** por celda (debounced 300ms)
   - **Batch OSRM** al tocar "Calcular ruta óptima" → Reordena stops + muestra polyline animada
3. **Preview Ruta** → Mapa con stops numerados + Distancia total + Tiempo estimado + Ahorro vs Express
4. **Resumen Precios** → Tabla por envío (Origen → Destino, km, Precio LowCost) + **Total** → Export CSV/PDF
5. **CTA Dual** → "Confirmá y agendá" (primary) + "Guardá borrador" (ghost)

**Validaciones Críticas:**
- Grid: **Navegación solo teclado** (Tab, Enter, Escape, Flechas) — accesible
- OSRM Batch: ≤ 20 stops/request → retry exponential backoff → fallback individual
- Precio: **Server Action** → `calculateLowCostPrice(km)` por cada fila → `Math.ceil` +10km
- Export CSV: `Origen,Destino,km,Precio ARS,ETA` — UTF-8 BOM para Excel
- Export PDF: Branded (logo, azul/amarillo) + tabla + mapa miniatura

**Copy Key:**
```tsx
<Label>ORIGEN</Label>
<Placeholder>Ingresá dirección, ej: Güemes 2350</Placeholder>

<CTAPrimary>Calcular ruta óptima</CTAPrimary>
// Preview
<Badge className="bg-brand-yellow-500">RUTA ÓPTIMA</Badge>
<Caption>12 envíos · 47 km total · Ahorro $15.600 vs Express</Caption>

<CTAPrimary>Confirmá y agendá</CTAPrimary>
<CTAGhost>Guardá borrador</CTAGhost>
```

### 4. Servicios Flex / 3PL (`/servicios/flex`, `/servicios/3pl`)

#### `/servicios/flex` — Integración MercadoLibre Flex
```tsx
// Secciones
<ServiceHero 
  badge="MERCADOLIBRE FLEX"
  title="Tu operación Flex, sin fricción"
  lead="Retiro en hub o domicilio. Entrega SLA ML. Webhooks automáticos."
/>

<FeatureGrid>
  <DoubleBezelCard icon="📦">
    <h3>Retiro Flexible</h3>
    <p>Hub Friuli 1972 o pickup en tu local. Vos elegís.</p>
  </DoubleBezelCard>
  <DoubleBezelCard icon="🔗">
    <h3>Webhooks Nativos</h3>
    <p>shipment_created, shipment_delivered, shipment_cancelled. < 200ms ACK.</p>
  </DoubleBezelCard>
  <DoubleBezelCard icon="📍">
    <h3>Tracking Unificado</h3>
    <p>ML + DosRuedas en un solo panel. Rider GPS en vivo.</p>
  </DoubleBezelCard>
</FeatureGrid>

<TechnicalSpecs>
  <h4>Configuración Requerida</h4>
  <CodeBlock>
{`# .env.local
ML_CLIENT_ID="tu_client_id"
ML_CLIENT_SECRET="tu_client_secret"
ML_WEBHOOK_SECRET="webhook_signing_secret"
WEBHOOK_URL="https://tudominio.com/api/webhook/mercadolibre"`}
  </CodeBlock>
</TechnicalSpecs>

<CTASection>
  <CTAElevated>Hablar con equipo de integración</CTAElevated>
</CTASection>
```

#### `/servicios/3pl` — E-Commerce Fulfillment
```tsx
<ServiceHero 
  badge="3PL / FULFILLMENT"
  title="Tu stock en Friuli 1972. Nosotros pick, pack & ship."
  lead="Almacenaje + Preparación + Envío. Integración Shopify, Woo, Tiendanube, API."
/>

<MetricsRow>
  <Metric value="99.9%" label="SLA Entrega" />
  <Metric value="< 2h" label="Pick & Pack" />
  <Metric value="500k" label="Cobertura Seguro" />
  <Metric value="24/7" label="Monitoreo" />
</MetricsRow>

<IntegrationsLogos> {/* Shopify, WooCommerce, Tiendanube, API REST — grayscale → color hover */} </IntegrationsLogos>

<CTASection>
  <CTAPrimary>Solicitá propuesta comercial</CTAPrimary>
</CTASection>
```

### 5. Centro de Ayuda / FAQ (`/ayuda`, `/nosotros/preguntas-frecuentes`)

#### `/ayuda` — Centro Global (Meilisearch + MDX)
```
Layout: Sidebar categorías (sticky) + Main resultados/artículo
1. Search Bar (autocomplete + enter → results)
2. Categorías: Precios · Cobertura · Tiempos · Seguros · Emprendedores · Flex/3PL · Técnico
3. Results Page: Cards (título, descripción, categoría, updatedAt) → click → Artículo
4. Artículo MDX: TOC sticky + copy code blocks + print CSS + Feedback (👍/👎 + "¿Útil?")
5. No encontrado → "¿No encontraste? Contactanos" (prefill context)
```

#### `/nosotros/preguntas-frecuentes` — FAQ Corporativa (Schema.org)
```tsx
// Accordion accesible (radix-like)
<Accordion type="single" collapsible>
  <AccordionItem value="precios">
    <AccordionTrigger>¿Cómo se calcula el precio? ¿Qué es el excedente +10km?</AccordionTrigger>
    <AccordionContent>
      <p>Usamos tabla por rangos de km (ver <Link href="/ayuda/precios">detalle</Link>). 
      Para +10km aplicamos <strong>Math.ceil</strong>: 10.3 km = 11 km facturados.</p>
    </AccordionContent>
  </AccordionItem>
  // ... más items
</Accordion>

// JSON-LD FAQPage (inyectado en <head>)
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {{"@type": "Question", "name": "¿Cómo se calcula el precio?", "acceptedAnswer": {{"@type": "Answer", "text": "..."}}}},
    // ...
  ]
}}
</script>
```

---

## 🧭 Despliegue & Producción

### Vercel (Recomendado)
```bash
# Conectar repo en Vercel → Auto-detecta Next.js
# Configurar Environment Variables en Dashboard:
# - DATABASE_URL (Neon/Supabase/PostgreSQL managed)
# - GEMINI_API_KEY
# - MEILISEARCH_HOST / MEILISEARCH_API_KEY
# - UPSTASH_REDIS_REST_URL / TOKEN
# - ML_CLIENT_ID / ML_CLIENT_SECRET / ML_WEBHOOK_SECRET
# - NEXT_PUBLIC_APP_URL="https://tudominio.com"

# Deploy: push a main → Preview → Promote to Production
```

### Docker (Alternativo)
```dockerfile
# Dockerfile.nextjs16 (standalone output)
FROM node:20-alpine AS base
# ... (usar next.config.ts output: 'standalone')
```

### Health Checks & Monitoreo
| Endpoint | Qué Verifica | SLA |
|----------|--------------|-----|
| `GET /api/health` | DB conexiones, Redis ping, Meili health, FS writable | < 500ms |
| `GET /api/health/ready` | Migraciones aplicadas, seed data presente | < 200ms |

**Alertas (Sentry + Vercel + PagerDuty):**
- Error rate > 1% (5 min window)
- p95 latency > 2s (API routes)
- Build failures
- DB connection pool exhaustion

---

## 🤝 Contribuir

### Convenciones de Commits
```bash
feat(cotizar): add OSRM batch routing for lowcost
fix(pricing): Math.ceil on +10km edge case 10.3km
design(button): add ghost variant to CTA Nested Pill
docs(project): update DoD for F3.3 Flex integration
test(pricing): add unit tests for calculateLowCost edge cases
```

### Pull Request Checklist
- [ ] Título: `[tipo(scope)] descripción clara en español`
- [ ] Descripción: Qué + Por qué + Cómo testear + Screenshots (si UI)
- [ ] `pnpm build` ✅ | `pnpm lint` ✅ | `pnpm test` ✅ | `pnpm test:e2e` ✅
- [ ] Preview deploy URL en descripción
- [ ] 1 approval mínimo (code owner del área)
- [ ] Squash merge, delete branch

### Code Owners
| Área | Owners |
|------|--------|
| Design System / UI | `@design-lead` |
| Pricing / Cotizadores | `@backend-lead` |
| Maps / OSRM / Geo | `@geo-engineer` |
| ML Flex / Webhooks | `@integrations-lead` |
| Testing / Quality | `@qa-lead` |
| Infra / Deploy | `@devops-lead` |

---

## 📄 Licencia & Contacto

**Código:** Propietario — Envíos DosRuedas S.R.L. — Mar del Plata, Argentina
**Contacto Técnico:** `dev@enviosdosruedas.com.ar`
**WhatsApp Business:** `+54 9 223 XXX XXXX`
**Oficina:** Friuli 1972, Mar del Plata (B7600), Buenos Aires

---

## 📚 Documentación Relacionada (Single Source of Truth)

| Documento | Qué Es | Cuándo Leer |
|-----------|--------|-------------|
| [`docs/knowledge_base/contexto.md`](./docs/knowledge_base/contexto.md) | **Constitución**: Marca, valores, voz, contexto MDQ, reglas visuales | **SIEMPRE PRIMERO** |
| [`AGENTS.md`](./AGENTS.md) | Protocolo obligatorio agentes IA | Antes de CUALQUIER tarea |
| [`DESIGN.md`](./DESIGN.md) | Sistema de diseño completo | Antes de tocar UI/estilos |
| [`PROJECT.md`](./PROJECT.md) | Arquitectura + Roadmap + DoD | Antes de planificar/estimar |
| [`docs/contexto/precios.md`](./docs/contexto/precios.md) | Tabla tarifas 2026 exacta | Antes de tocar precios |
| [`docs/contexto/errores-conocidos.md`](./docs/contexto/errores-conocidos.md) | Gotchas: Turbopack, ESLint, Prisma, tests | Al debuggear |
| [`docs/contexto/arquitectura.md`](./docs/contexto/arquitectura.md) | Decisiones técnicas (por qué Next.js 16, OSRM, etc.) | Al entender arquitectura |
| [`docs/contexto/decisiones.md`](./docs/contexto/decisiones.md) | ADR log | Al proponer cambio arquitectónico |

---

> **Hecho en Mar del Plata. Para Mar del Plata.** 🏍️💙💛
> 
> *Última actualización: 2026-07-20 | Versión: 2.0 | Stack: Next.js 16 + Tailwind v4 + Prisma + PostgreSQL*