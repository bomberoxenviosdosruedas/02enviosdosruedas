# PROJECT.md — Arquitectura Técnica & Roadmap con Definition of Done
## Envíos DosRuedas | Mar del Plata 2026 | Stack: Next.js 16 · React 19 · Tailwind v4 · Prisma · PostgreSQL · pnpm · Vitest · Playwright

---

## 1. Arquitectura Técnica

### 1.1 Stack Definitivo (2026)

| Capa | Tecnología | Versión | Rationale |
|------|------------|---------|-----------|
| **Framework** | Next.js | 16 (App Router, Turbopack, React 19) | RSC by default, Server Actions, Edge Runtime, Streaming |
| **Styling** | Tailwind CSS | v4 (@theme, CSS-first) | Tokens en CSS vars, cero config JS, performance nativo |
| **Language** | TypeScript | 5.6+ (strict) | Type safety end-to-end, `unknown` over `any` |
| **ORM/DB** | Prisma ORM + PostgreSQL | 5.18+ / 16 | Type-safe queries, migrations, connection pooling |
| **Package Manager** | pnpm | 9+ | Disk efficiency, strict dependencies, workspaces |
| **Testing Unit** | Vitest | 2+ | Vite-native, fast, TypeScript-first |
| **Testing E2E** | Playwright | 1.46+ | Cross-browser, trace viewer, auto-wait |
| **Animations** | Framer Motion (motion/react) + GSAP | 11+ / 3.12+ | Layout animations, 3D, scroll-triggered |
| **Maps/Geo** | Leaflet + OSRM | 1.9+ / 5.25+ | Open-source, self-hosted routing, MDQ coverage |
| **Forms** | React Hook Form + Zod | 7.52+ / 3.23+ | Performant, schema validation |
| **Auth (futuro)** | NextAuth.js | 5+ | Edge-compatible, multiple providers |

### 1.2 Patrones Arquitectónicos Obligatorios

| Patrón | Regla | Excepción Documentada |
|--------|-------|----------------------|
| **Server Components by Default** | Todo componente es RSC salvo que use hooks cliente, motion, leaflet, WebSocket, localStorage | `'use client'` solo en leaf de interactividad |
| **Server Actions para Mutaciones** | Forms, webhooks, writes → Server Actions con Zod validation | Edge Runtime para latency-critical (auth, geo) |
| **Middleware para Auth/Geo/IP** | `middleware.ts` en root — validación sesión, detección zona MDQ, rate-limiting | — |
| **Edge Runtime en API Críticas** | `/api/assistant`, `/api/quote`, `/api/track` → `export const runtime = 'edge'` | — |
| **Prisma Singleton** | `src/lib/prisma.ts` — `globalThis.prisma` pattern | — |
| **Pricing Logic Pura** | `src/lib/pricing.ts` — funciones puras, testeables, sin side effects | Fuente de verdad única + BD `PricingRange` |
| **Design Tokens en CSS** | `globals.css` con `@theme` + variables semánticas — NO `tailwind.config.ts` para colores | — |

### 1.3 Estructura de Carpetas (Canónica)

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Route group: login, register, password-reset
│   ├── (dashboard)/              # Route group: panel cliente, panel rider, admin
│   ├── (public)/                 # Route group: landing, cotizar, servicios, nosotros, contacto, ayuda
│   │   ├── cotizar/
│   │   │   ├── express/          # /cotizar/express — Mapa + Autocomplete + OSRM
│   │   │   └── lowcost/          # /cotizar/lowcost — Planilla masiva + Batch routing
│   │   ├── servicios/
│   │   │   ├── express/          # /servicios/express
│   │   │   ├── lowcost/          # /servicios/lowcost
│   │   │   ├── flex/             # /servicios/flex (MercadoLibre)
│   │   │   ├── 3pl/              # /servicios/3pl (E-Commerce fulfillment)
│   │   │   └── emprendedores/    # /servicios/emprendedores
│   │   ├── nosotros/
│   │   │   ├── sobre-nosotros/   # Historia, valores, equipo, flota, certificaciones
│   │   │   ├── preguntas-frecuentes/ # Accordion + Schema.org FAQPage
│   │   │   └── nuestras-redes/   # Carrusel IG/LI/WA + Click-to-chat
│   │   ├── contacto/             # Form RHF+Zod + Mapa oficina Friuli 1972
│   │   └── ayuda/                # /ayuda — Search (Meilisearch) + Artículos MDX
│   ├── api/                      # API Routes (Edge donde aplique)
│   │   ├── quote/                # POST /api/quote — Cálculo precio server-side
│   │   ├── route/                # POST /api/route — OSRM batch/single
│   │   ├── webhook/              # MercadoLibre Flex, MercadoPago, WHATSApp
│   │   └── assistant/            # Chat AI (Gemini) — streaming
│   ├── globals.css               # @theme Tailwind v4 + variables semánticas
│   ├── layout.tsx                # Root layout: Header, Footer, Providers, Metadata
│   ├── page.tsx                  # Landing page (/)
│   ├── not-found.tsx             # 404 branded
│   └── loading.tsx               # Streaming fallback
├── components/
│   ├── ui/                       # Primitivas shadcn-like (Button, Input, Card, Badge, etc.)
│   │   ├── button.tsx            # CTA Nested Pill variantes
│   │   ├── input.tsx             # Double-bezel wrapper + label + icon
│   │   ├── card.tsx              # Double Bezel Card (outer/inner)
│   │   ├── badge.tsx             # Badge system (urgent, secure, economic, flex)
│   │   ├── radio-card-group.tsx  # Radio Card Group (Express/LowCost/Flex)
│   │   ├── stepper.tsx           # Horizontal (cotizador) / Vertical (how-it-works)
│   │   ├── logos-carousel.tsx    # Infinite scroll + mask + pause-on-hover
│   │   ├── float-tilt-card.tsx   # Hero 3D cards (perspective 1000px)
│   │   └── bento-grid.tsx        # Asymmetric 12-col grid (span 7/5/12)
│   ├── cotizar/
│   │   ├── express/
│   │   │   ├── CotizadorExpressHero.tsx   # Hero section express
│   │   │   ├── CotizadorExpressForm.tsx   # Form + Mapa Leaflet + OSRM
│   │   │   ├── AddressAutocomplete.tsx    # Nominatim + MDQ filter
│   │   │   └── RoutePreview.tsx           # Polyline + distancia + tiempo
│   │   └── lowcost/
│   │       ├── CotizadorLowCostHero.tsx
│   │       ├── CotizadorLowCostSheet.tsx  # Editable grid (tanstack/table-like)
│   │       ├── BatchRouter.tsx            # OSRM batch + preview
│   │       └── ExportActions.tsx          # CSV / PDF download
│   ├── servicios/
│   │   ├── ServiceHero.tsx
│   │   ├── BenefitCard.tsx
│   │   ├── CoverageMap.tsx
│   │   ├── ProcessStepper.tsx
│   │   └── CTASection.tsx
│   ├── layout/
│   │   ├── Header.tsx            # Sticky z-900, dropdowns, mobile panel, phone+CTA
│   │   ├── Footer.tsx            # Accent bar, 3-col grid, scroll-to-top, legal
│   │   └── CarruselRedes.tsx     # IG feed + LI posts + WA click-to-chat
│   └── home/
│       ├── HeroAnimado.tsx       # 3D cards + copy + dual CTA + trust pills
│       ├── TrustBar.tsx          # Animated counters + ISO badge
│       ├── ServicesBento.tsx     # Asymmetric grid 7/5/12
│       ├── HowItWorks.tsx        # Vertical stepper
│       ├── SocialProof.tsx       # Logos carousel + testimonials
│       └── CTAFinal.tsx          # White card on blue + dual CTA (Yellow + Green/WA)
├── hooks/
│   ├── useOSRMRoute.ts           # Single route calculation
│   ├── useOSRMBatch.ts           # Batch routing for LowCost
│   ├── useAddressAutocomplete.ts # Nominatim debounced + MDQ filter
│   ├── usePricing.ts             # Wrapper pricing.ts + cache
│   └── useIntersectionObserver.ts# Reveal animations
├── lib/
│   ├── pricing.ts                # FUNCIONES PURAS — calculateExpress, calculateLowCost, Math.ceil km
│   ├── prisma.ts                 # Singleton PrismaClient
│   ├── utils.ts                  # cn(), formatARS(), clamp(), debounce()
│   ├── validations.ts            # Zod schemas (quote, contact, auth)
│   ├── meilisearch.ts            # Client para /ayuda search
│   └── constants.ts              # ZONAS_MDQ, SERVICE_TYPES, PRICING_RANGES (sync with BD)
├── types/
│   ├── pricing.ts                # PricingRange, QuoteResult, QuoteInput
│   ├── geo.ts                    # Coordinates, RouteResult, AddressSuggestion
│   └── services.ts               # ServiceType, ServiceFeature, FAQItem
└── styles/
    └── globals.css               # Ya en app/ — mantener referencia
```

---

## 2. Contratos de Interfaz (Interface Contracts) — Fuente: DESIGN.md

| Componente | Contrato Obligatorio | Tokens Clave |
|------------|---------------------|--------------|
| **Double Bezel Card** | `outer: bg-brand-blue-50/80 border-brand-blue-100 p-2 rounded-2xl shadow-float hover:shadow-antigravity-deep hover:border-brand-blue-300` + `inner: bg-white p-6 rounded-xl border-brand-blue-50/50 shadow-sm` | `--radius-bezel-outer`, `--radius-bezel-inner`, `--shadow-float`, `--shadow-antigravity-deep` |
| **CTA Nested Pill** | `cta-nested-pill` + `cta-nested-icon` — 4 variantes: `primary`, `elevated`, `outline`, `ghost` | `--color-accent`, `--color-primary`, `--shadow-cta-glow`, `--shadow-elevated` |
| **Radio Card Group** | Grid 3-col desktop / 1-col mobile — checked states: Express (blue-700), LowCost (blue-50), Flex (yellow-50) | `--radius-xl`, `--color-primary`, `--color-accent` |
| **Input Fields** | `h-11 border-2 border-brand-blue-100 rounded-xl pl-10` → focus: `border-brand-blue-700 ring-2 ring-brand-blue-500/20` | `--input-h`, `--color-border-default`, `--color-border-focus` |
| **Steppers** | Horizontal: línea 2px blue-100 (done: yellow-500), círculos 40px. Vertical: línea 2px left, dots 24px | `--color-border-default`, `--color-accent`, `--color-success` |
| **Logos Carousel** | `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` — 30s linear infinite — pause hover/focus/visibilitychange | `--shadow-minimal`, `--duration-slowest` |
| **Float/Tilt Card** | `perspective-1000` container → `rotateX(±8deg) rotateY(±8deg)` lerp 0.1 → hover `translateY(-6px) rotateX(4deg) rotateY(-2deg)` + `shadow-antigravity-deep` | `--shadow-antigravity-deep`, `--ease-smooth` |
| **Bento Grid** | `grid-cols-12 gap-6 lg:gap-8 auto-rows-[380px]` — spans: 7 (hero), 5 (std), 12 (full) — mobile `grid-cols-1` | `--section-lg`, `--container-max` |
| **Vertical Stepper** | Línea 2px left blue-100, dots 24px, numbers `font-display text-h2` | `--color-border-default`, `--text-h2`, `--color-accent` |

---

## 3. Roadmap Detallado con Definition of Done (DoD)

### Fase 1 — Foundation & Landing (Semanas 1-3)

| # | Página/Componente | Scope | Definition of Done (✅ = obligatorio) |
|---|-------------------|-------|--------------------------------------|
| **F1.1** | **Landing Page (`/`)** | Hero 3D, Trust Bar, Services Bento, How It Works, Social Proof, CTA Final, Footer | ▅ Responsive 320-1920px ▅ Paleta 3 colores verificada (0 slate/gray/zinc) ▅ Double Bezel en todas las cards blancas ▅ CTA Nested Pill (primary + elevated) ▅ Animaciones Framer Motion/GSAP (reduced-motion OK) ▅ Lighthouse Perf ≥ 90 ▅ A11y AA (axe-core 0 violaciones) ▅ Build Next.js 16 sin errores |
| **F1.2** | **Header & Footer Globales** | Nav dropdowns, mobile panel, phone+CTA, sticky z-900, accent bar, scroll-to-top, legal links | ▅ Focus-visible rings en todos interactivos ▅ Skip link funcional ▅ ARIA en dropdowns/submenus ▅ Logo inalterable (120px min-w) ▅ Mobile drawer accesible (Esc cierra, focus trap) |
| **F1.3** | **Design System Base (components/ui/*)** | Button, Input, Card, Badge, RadioCardGroup, Stepper, LogosCarousel, FloatTiltCard, BentoGrid | ▅ Storybook/Playground con todas las variantes ▅ Tests visuales (Chromatic/Playwright snapshot) ▅ Tokens CSS mapeados 1:1 a DESIGN.md ▅ Zero `any` en props públicas |

### Fase 2 — Cotizadores Core (Semanas 3-6)

| # | Página/Componente | Scope | Definition of Done |
|---|-------------------|-------|-------------------|
| **F2.1** | **`/cotizar/express`** | Hero express, AddressAutocomplete (Nominatim + MDQ filter), Leaflet map interactivo, OSRM route preview (polyline + distance + duration), RadioCardGroup (Express/LowCost/Flex), Pricing server-side (Server Action), dual CTA (Cotizar + WhatsApp) | ▅ Mapa carga < 2s (tiles cached) ▅ Autocomplete solo MDQ (filter `city: "Mar del Plata"`) ▅ OSRM response < 800ms p95 ▅ **Precios EXACTOS tabla 2026** (validar contra `docs/contexto/precios.md` + BD) ▅ `Math.ceil(km - 10)` en +10km (test unitario) ▅ Double Bezel form ▅ Error states a11y (aria-invalid, live region) ▅ Responsive: mobile mapa full-width, desktop split 50/50 |
| **F2.2** | **`/cotizar/lowcost`** | Hero lowcost, Planilla editable multi-direcciones (grid keyboard-nav), Batch OSRM routing, Preview ruta optimizada (ordered stops), Export CSV/PDF, Pricing LowCost server-side | ▅ Grid editable: Tab/Enter navegación, Escape cancela, flechas mueven ▅ OSRM batch: ≤ 20 stops/request, retry exponential backoff ▅ Preview: polyline animada, modo "simular rider" ▅ CSV: headers correctos (Origen, Destino, km, Precio, ETA) ▅ PDF: branded, tabla + mapa miniatura ▅ Precios LowCost EXACTOS 2026 ▅ `Math.ceil` +10km validado ▅ Responsive: mobile cards stack, desktop table |

### Fase 3 — Páginas de Servicios (Semanas 6-9)

| # | Página/Componente | Scope | Definition of Done |
|---|-------------------|-------|-------------------|
| **F3.1** | **`/servicios/express`** | Hero servicio, Beneficios (3-col), Cobertura MDQ (mapa interactivo zonas), Proceso (Vertical Stepper 4 steps), CTA cotizar | ▅ Bento grid asimétrico (si aplica) ▅ Iconografía consistente (stroke 2px, brand-blue) ▅ Copy voseo + referencias MDQ (Güemes, Centro, Playa Grande) ▅ Double Bezel benefit cards ▅ CTA Nested Pill primary |
| **F3.2** | **`/servicios/lowcost`** | Hero, Planes (RadioCardGroup), Cobertura, FAQ servicio, CTA | ▅ Badge "ECONÓMICO" amarillo en cards ▅ Tabla precios responsive (mobile: cards) ▅ FAQ accordion keyboard-nav ▅ CTA WhatsApp click-to-chat |
| **F3.3** | **`/servicios/flex`** | Hero ML Flex, Integración técnica (webhooks, credenciales .env.example), Almacenaje, Picking/Packing, Tracking, API docs link, CTA comercial | ▅ Arquitectura webhook documentada (sequence diagram) ▅ Credenciales ejemplo en `.env.example` (ML_CLIENT_ID, ML_CLIENT_SECRET) ▅ Double Bezel feature cards ▅ CTA "Hablar con ventas" (elevated pill) |
| **F3.4** | **`/servicios/3pl`** | Hero E-Commerce 3PL, Almacenaje FTP (Friuli 1972), Fulfilment end-to-end, Integraciones (Shopify, Woo, Tiendanube, API), SLA 99.9%, CTA comercial | ▅ Mapa interactivo hub Friuli 1972 ▅ Logos plataformas integradas (grayscale → color hover) ▅ SLA metrics visuales (counters animados) ▅ CTA "Solicitar propuesta" (form short + Calendly embed) |
| **F3.5** | **`/servicios/emprendedores`** | Hero, Beneficios, Onboarding 3 pasos, Casos de éxito (3 testimonials), Precios escalonados (tiers), Lead magnet form | ▅ Testimonials carousel (3 cols lg, 1 mobile) ▅ Tiers pricing: Inicial / Crecimiento / Escala ▅ Form lead magnet (email + nombre + rubro) → toast success ▅ Voseo emprendedor local ("Tu changa crece con nosotros") |

### Fase 4 — Nosotros & Soporte (Semanas 9-12)

| # | Página/Componente | Scope | Definition of Done |
|---|-------------------|-------|-------------------|
| **F4.1** | **`/nosotros/sobre-nosotros`** | Historia (Vertical Stepper 5 hitos), Valores (Tradición/Cercanía/Eficacia — cards), Equipo (Double Bezel cards + foto + rol), Flota (stats + fotos), Certificaciones (ISO, ML Partner), Mapa cobertura interactivo | ▅ Stepper इतिहास cricket vertical ▅ Valores = 3 pillars inmutables ▅ Equipo: fotos reales, nombres, roles ▅ Flota: 80+ motos, 20+ utilitarios, GPS real-time ▅ Mapa: zonas MDQ coloreadas (Express/LowCost/Flex) |
| **F4.2** | **`/nosotros/preguntas-frecuentes`** | Accordion accesible (radix-like), Categorías: Precios, Cobertura, Tiempos, Seguros, Emprendedores, Búsqueda (Meilisearch), Schema.org FAQPage, Fallback contacto | ▅ Accordion: Enter/Space abre, flechas navegan, Esc cierra ▅ Search < 200ms (Meilisearch) ▅ JSON-LD FAQPage válido (Google Rich Results Test) ▅ Categoría "Seguros" explica cobertura $500k por envío |
| **F4.3** | **`/nosotros/nuestras-redes`** | Carrusel IG feed (12 posts), LinkedIn posts (3), WhatsApp Business click-to-chat (prefilled msg), UTM tracking automático, Pause on hover | ▅ IG: `@enviosdosruedas` — grayscale→color hover ▅ LI: posts institucionales + empleos ▅ WA: `https://wa.me/549223XXXXXXX?text=Hola%20quiero%20cotizar%20un%20envío` ▅ UTM: `utm_source=web&utm_medium=redes&utm_campaign=footer` |
| **F4.4** | **`/contacto`** | React Hook Form + Zod, Honeypot + rate-limit (middleware), Double Bezel form, Toast feedback (sonner), Leaflet mapa oficina Friuli 1972, Horarios, FAQ rápida (3 items), CTA WhatsApp sticky mobile | ▅ Validación: nombre (2+ chars), email (regex), teléfono (AR +54 9 11/223), mensaje (10+ chars) ▅ Honeypot field invisible + timestamp check ▅ Rate limit: 5 req/min/IP (Upstash Redis) ▅ Toast: success (green), error (red), loading (blue) ▅ Mapa: marker oficina, popup con horario ▅ Mobile: WhatsApp sticky bottom (z-50) |
| **F4.5** | **`/ayuda` (Centro de Ayuda Global)** | Meilisearch index (artículos MDX), Categorías sidebar, Búsqueda instantánea (<200ms), Artículos con frontmatter (title, description, category, tags, updatedAt), Feedback thumbs up/down + "¿Útil?", Breadcrumbs, Escalamiento a contacto | ▅ MDX en `content/help/` con frontmatter ▅ Search: autocomplete + enter → results page ▅ Artículo: TOC sticky, copy code blocks, print CSS ▅ Feedback: POST /api/help/feedback → BD + email soporte ▅ Breadcrumbs: Home > Ayuda > Categoría > Artículo ▅ Escalamiento: "¿No encontraste? [Contactanos](/contacto)" con context prefill |

### Fase 5 — Calidad, Testing & Hardening (Semanas 12-14)

| # | Milestone | Scope | Definition of Done |
|---|-----------|-------|-------------------|
| **M5.1** | **E2E Test Suite (Tiers 1-4)** | Playwright: Tier 1 (Critical paths: quote express, quote lowcost, contact), Tier 2 (Services pages), Tier 3 (Nosotros), Tier 4 (Ayuda/FAQ) | ▅ 100% critical paths passing ▅ Trace viewer en CI ▅ Parallel execution < 10 min ▅ Flaky test < 1% |
| **M5.2** | **Coverage Hardening (Tier 5)** | White-box analysis, mutation testing (Stryker), Challengers adversarial | ▅ Unit coverage ≥ 85% (pricing, validations, utils) ▅ Mutation score ≥ 70% ▅ 0 critical vulnerabilities (npm audit) |
| **M5.3** | **Performance Budget** | Lighthouse CI en PR: Perf ≥ 90, A11y ≥ 95, Best Practices ≥ 90, SEO ≥ 90 | ▅ Budgets: JS < 170KB gz, CSS < 50KB gz, LCP < 2.5s, CLS < 0.1, FID < 100ms |
| **M5.4** | **Accessibility Audit** | axe-core CI + manual testing (NVDA, VoiceOver, solo teclado) | ▅ 0 violaciones AA ▅ Skip link, focus order, landmarks, heading hierarchy ▅ Contraste verificado en todos los pares |
| **M5.5** | **Production Deploy & Monitoring** | Vercel (prod), Supabase/Neon (PostgreSQL), Upstash (Redis rate-limit), Meilisearch Cloud, Sentry (errors), LogRocket (session replay) | ▅ Preview deployments en PR ▅ Health checks: `/api/health` (DB, Redis, Meili) ▅ Alertas: error rate > 1%, p95 latency > 2s ▅ Backups PG diarios + point-in-time recovery |

---

## 4. Milestones & Dependencias

| ID | Nombre | Entregable Clave | Dependencias | Estado | DoD Global |
|----|--------|------------------|--------------|--------|------------|
| **M1** | **Foundation & Design System** | `components/ui/*` + tokens + Storybook | — | 🟢 Planned | DoD F1.3 |
| **M2** | **Landing Page Completa** | `/` + Header/Footer | M1 | 🟢 Planned | DoD F1.1 + F1.2 |
| **M3** | **Cotizador Express** | `/cotizar/express` | M1, M2 | 🟢 Planned | DoD F2.1 |
| **M4** | **Cotizador LowCost** | `/cotizar/lowcost` | M1, M3 | 🟢 Planned | DoD F2.2 |
| **M5** | **Páginas Servicios (5)** | `/servicios/*` | M1 | 🟢 Planned | DoD F3.1-F3.5 |
| **M6** | **Nosotros (3) + Contacto + Ayuda** | `/nosotros/*`, `/contacto`, `/ayuda` | M1 | 🟢 Planned | DoD F4.1-F4.5 |
| **M7** | **Testing & Hardening** | E2E Tiers 1-5, Perf, A11y, Security | M2-M6 | 🟢 Planned | DoD M5.1-M5.5 |
| **M8** | **Production Launch** | Deploy prod + monitoring + docs handoff | M7 | 🟢 Planned | Zero critical bugs, perf budget met, runbooks ready |

---

## 5. Criterios de Calidad Transversales (Non-Negotiables)

| Dimensión | Métrica | Herramienta | Umbral |
|-----------|---------|-------------|--------|
| **Performance** | Lighthouse Performance | Lighthouse CI | ≥ 90 |
| **Performance** | LCP (p75) | Web Vitals / Vercel Analytics | ≤ 2.5s |
| **Performance** | CLS (p75) | Web Vitals | ≤ 0.1 |
| **Performance** | INP (p75) | Web Vitals | ≤ 200ms |
| **Accessibility** | Axe violations | axe-core / Playwright | 0 (AA) |
| **Accessibility** | Lighthouse A11y | Lighthouse CI | ≥ 95 |
| **Code Quality** | TypeScript strict | `tsc --noEmit` | 0 errors |
| **Code Quality** | ESLint | `pnpm lint` | 0 errors, 0 warnings |
| **Code Quality** | Type coverage | `type-coverage` | ≥ 95% |
| **Testing** | Unit coverage | Vitest + c8 | ≥ 85% (pricing, validations, utils) |
| **Testing** | E2E critical paths | Playwright | 100% passing |
| **Security** | Dependencies audit | `pnpm audit` / Snyk | 0 critical/high |
| **Security** | Secrets scan | TruffleHog / GitLeaks | 0 leaks |
| **Bundle** | JS total gzipped | `next build` + bundle analyzer | ≤ 170KB (first load) |
| **Bundle** | CSS total gzipped | `next build` | ≤ 50KB |

---

## 6. Convenciones de Commits & PRs

| Tipo | Prefijo | Ejemplo |
|------|---------|---------|
| Feature | `feat:` | `feat(cotizar): add OSRM batch routing for lowcost` |
| Fix | `fix:` | `fix(pricing): Math.ceil on +10km edge case 10.3km` |
| Design System | `design:` | `design(button): add ghost variant to CTA Nested Pill` |
| Refactor | `refactor:` | `refactor(hooks): extract useOSRMBatch from useOSRMRoute` |
| Docs | `docs:` | `docs(project): update DoD for F3.3 Flex integration` |
| Test | `test:` | `test(pricing): add unit tests for calculateLowCost edge cases` |
| Chore | `chore:` | `chore(deps): update next.js to 16.0.1` |

**PR Requirements:**
- [ ] Title: `[tipo(scope)] descripción clara en español`
- [ ] Description: Qué, Por qué, Cómo testear, Screenshots (si UI)
- [ ] Checks: `pnpm build` ✅, `pnpm lint` ✅, `pnpm test` ✅, `pnpm test:e2e` ✅
- [ ] Preview deploy URL en descripción
- [ ] 1 approval mínimo (code owner del área)
- [ ] Squash merge, delete branch

---

## 7. Referencias Cruzadas

- **Contexto de Marca/Negocio:** `docs/knowledge_base/contexto.md`
- **Tarifas 2026 (Fuente de Verdad):** `docs/contexto/precios.md`
- **Sistema de Diseño:** `DESIGN.md`
- **Protocolo Agentes IA:** `AGENTS.md`
- **Arquitectura / Decisiones:** `docs/contexto/arquitectura.md`, `docs/contexto/decisiones.md`
- **Errores Conocidos:** `docs/contexto/errores-conocidos.md`
- **Esquema BD Schema:** `prisma/schema.prisma` (models: `ServiceType`, `PricingRange`, `Order`, `Zone`, `User`)

---

*Documento vivo — Actualizar en cada milestone completado. Owner: Tech Lead + Product Owner. Revisión: Sprint Review.*