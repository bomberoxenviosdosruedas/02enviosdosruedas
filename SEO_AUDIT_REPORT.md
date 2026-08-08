# SEO Audit Report: www.enviosdosruedas.com

**Fecha:** 2026-08-08
**Auditor:** Claude Code SEO Audit
**Alcance:** Auditoría completa (técnica, on-page, contenido, autoridad)

---

## Executive Summary

**Overall Health Assessment: GOOD** — El sitio tiene bases técnicas sólidas, sitemaps bien estructurados y buen SEO on-page básico. Sin embargo, hay **problemas críticos de canonicalización** que afectan a todas las páginas de servicio/conversión, un **error 404 en imagen** en la página Flex, y **oportunidades de schema perdidas** en páginas clave.

**Top 3 Priority Issues:**
1. **CRÍTICO** — Todas las páginas no-home tienen canonical apuntando a home (bloquea indexación de páginas de servicio/cotización)
2. **ALTO** — Falta schema markup específico por página (Service, FAQPage, ContactPage) — solo renderiza Organization/LocalBusiness global
3. **ALTO** — Error 404 en banner de `/servicios/enviosflex` afectando Core Web Vitals

**Quick Wins Identificados:**
- Fix canonical tags en todas las páginas (fix de 15 min)
- Agregar JSON-LD schemas page-specific via metadata
- Fix imagen rota en página de servicio Flex
- FAQPage schema en preguntas-frecuentes (ya en código, pero no renderiza por canonical issue)

---

## Technical SEO Findings

### 1. Incorrect Canonical Tags — **CRÍTICO** (Priority: 1/5)

**Issue:** Cada página testeada (`/nosotros/preguntas-frecuentes`, `/servicios/envios-express`, `/servicios/envios-lowcost`, `/servicios/enviosflex`, `/servicios/plan-emprendedores`, `/cotizar/express`, `/cotizar/lowcost`, `/nosotros/sobre-nosotros`, `/contacto`) tiene canonical tag apuntando a `https://www.enviosdosruedas.com/` en lugar de self-referencing.

**Impacto:** Google tratará todas estas páginas como duplicados de la home. Páginas de servicio, cotización y contacto **NO se indexarán independientemente**. Esto anula completamente el valor SEO de tus landing pages.

**Evidencia:** Evaluación en browser en 9 páginas — todas devolvieron `canonical: "https://www.enviosdosruedas.com/"`

**Root Cause:** En `src/app/layout.tsx` línea 77: `alternates: { canonical: baseUrl }` — esto setea un canonical global para TODAS las páginas.

**Fix:** Remover el global `alternates.canonical` de layout.tsx y agregar canonicals page-specific en cada page.tsx:
```typescript
// En cada page.tsx
export const metadata: Metadata = {
  // ... otros campos
  alternates: {
    canonical: `${baseUrl}/servicios/envios-express`, // self-referencing
  },
};
```

---

### 2. XML Sitemap — **BUENO** (Priority: 4/5)

**Status:** ✅ Configurado correctamente con 23 URLs, prioridades correctas (home=1.0, services/quotes=0.9, legal=0.3), changefreqs, y lastmod recientes.

**Issue:** El sitemap incluye las URLs con problema de canonical — Google las crawleará pero puede no indexarlas por conflicto de canonical.

**Fix:** Después de fixear canonicals, re-submitir sitemap en Search Console.

---

### 3. Robots.txt — **BUENO** (Priority: 5/5)

**Status:** ✅ Permite correctamente todas las páginas públicas, bloquea `/admin` y `/ordenes`, referencia sitemap.xml.

---

### 4. Schema Markup — **PARCIAL** (Priority: 2/5)

**Issue:** Solo el **schema global Organization + LocalBusiness** (de layout.tsx) renderiza en todas las páginas. Los schemas page-specific (Service, FAQPage, AboutPage, ContactPage) definidos en páginas individuales **NO renderizan** porque Next.js metadata merging no combina `other['script:ld+json']` múltiples veces — solo gana el primero.

**Evidencia:** Todas las 9 páginas testeadas muestran @graph idéntico con solo Organization + LocalBusiness.

**Páginas Faltando Schema Nativo:**
- `/servicios/envios-express` — debería tener Service + OfferCatalog (código existe en page.tsx:10-59)
- `/servicios/envios-lowcost` — debería tener Service schema
- `/servicios/enviosflex` — debería tener Service schema
- `/servicios/plan-emprendedores` — debería tener Service schema
- `/cotizar/express` — debería tener Service schema con OfferCatalog para tiers de precio
- `/cotizar/lowcost` — debería tener Service schema con OfferCatalog
- `/nosotros/preguntas-frecuentes` — debería tener FAQPage schema (código existe en page.tsx:9-62)
- `/nosotros/sobre-nosotros` — debería tener AboutPage + LocalBusiness (código existe en page.tsx:12-30)
- `/contacto` — debería tener ContactPage schema (código existe en page.tsx:9-20)

**Fix Options:**
1. **Mergear todos los schemas en @graph en layout.tsx** (recomendado) — combinar Organization, LocalBusiness, y tipos page-specific
2. **Usar next-schema-org** o componente custom para inyectar múltiples script tags
3. **Mover page-specific schema a nivel componente** y renderizar inline

---

### 5. Broken Image — **ALTO** (Priority: 2/5)

**Issue:** `/servicios/enviosflex` devuelve 404 para `https://www.enviosdosruedas.com/_next/image?url=%2Fimg%2Fgenerales%2Fbanner-servicio-flex.jpg&w=96&q=75`

**Impacto:** Penalización CLS (Cumulative Layout Shift), mala UX, crawl budget desperdiciado.

**Fix:** Agregar imagen faltante en `public/img/generales/banner-servicio-flex.jpg` o actualizar componente para usar imagen existente.

---

### 6. Mobile & HTTPS — **BUENO** (Priority: 5/5)

**Status:** ✅ Sitio usa HTTPS, diseño responsive, viewport correcto. Sin mixed content detectado.

---

### 7. URL Structure — **BUENO** (Priority: 4/5)

**Status:** ✅ URLs limpias, descriptivas en español con keywords (`/servicios/envios-express`, `/cotizar/lowcost`, `/nosotros/preguntas-frecuentes`). Lowercase consistente, separadas por hyphens.

---

### 8. Core Web Vitals — **SIN TESTEAR** (Priority: 3/5)

**Nota:** PageSpeed Insights API no disponible en este entorno. Recomiendo testear manualmente:
- https://pagespeed.web.dev/analysis/https-www-enviosdosruedas-com
- Páginas clave: home, `/servicios/envios-express`, `/cotizar/express`, `/contacto`

Preocupaciones esperadas por arquitectura:
- Animaciones GSAP + orbes 3D pueden impactar LCP/INP
- Next.js Image optimization debería ayudar ✅
- Font loading (3 Google Fonts) — preconnect presente ✅

---

## On-Page SEO Findings

### 1. Title Tags — **BUENO** (Priority: 4/5)

**Status:** ✅ Únicos, descriptivos, keyword-rich en todas las páginas:
- Home: "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas"
- Express: "Envíos Express Inmediatos | Envíos DosRuedas Mar del Plata"
- LowCost: "Envíos LowCost Rentables | Envíos DosRuedas Mar del Plata"
- Flex: "Envíos Flex MercadoLibre | Envíos DosRuedas Mar del Plata"
- Plan Emprendedores: "Logística 3PL y Plan Emprendedores | Envíos DosRuedas Mar del Plata"
- FAQ: "Preguntas Frecuentes (FAQ) | Envíos DosRuedas Mar del Plata"
- Sobre Nosotros: "Sobre Nosotros | Envíos DosRuedas Mar del Plata"
- Contacto: "Contacto Comercial | Envíos DosRuedas Mar del Plata"
- Cotizadores: "Cotizador de Envíos Express/LowCost en Mar del Plata | Envíos DosRuedas"

**Menor:** Template suffix " | Envíos DosRuedas" configurado globalmente ✅

---

### 2. Meta Descriptions — **BUENO** (Priority: 4/5)

**Status:** ✅ Únicas, compelling, ~150-160 chars, incluyen primary keywords e intent local ("Mar del Plata").

---

### 3. Heading Structure — **BUENO** (Priority: 4/5)

**Status:** ✅ Single H1 por página matching title keyword. jerarquía H2/H3 lógica en componentes.

---

### 4. Content Optimization — **BUENO** (Priority: 4/5)

**Status:** ✅ Páginas de servicio tienen feature lists detalladas, pricing tables, use cases. FAQ tiene 6 Q&A pairs. Contexto local Mar del Plata tejido throughout (barrios: Güemes, Friuli 1972, Playa Grande, Punta Mogotes, Chauvín, Puerto, Batán, Camet). Voseo rioplatense usado correctamente.

---

### 5. Internal Linking — **MODERADO** (Priority: 3/5)

**Status:** Homepage linkea a todos los servicios via ServicesOverview, SliderServicios, EmprendedoresHome. CTA sections linkean a `/cotizar/*` y `/contacto`.

**Gap:** Sin breadcrumb navigation. Páginas de servicio no cross-linkean entre sí ni a páginas de cotización contextual. FAQ no linkea a páginas de servicio relevantes.

**Fix:** Agregar breadcrumb schema + componente. Agregar links contextuales "Servicios Relacionados" en cada página de servicio.

---

### 6. Image SEO — **PARCIAL** (Priority: 3/5)

**Status:** Next.js Image optimization habilitado. Un 404 en banner Flex. Alt texts necesitan verificación across components.

**Fix:** Auditar todos los componentes `<Image>` para alt text descriptivo con keywords.

---

## Content Findings

### 1. E-E-A-T Signals — **BUENO** (Priority: 4/5)

**Experience:** 7+ años declarados (foundingDate: 2017), fotos de equipo, timeline, escenarios reales de clientes.
**Expertise:** Specs detalladas de servicios, pricing por zona, límites peso/dimensión, certificación Flex.
**Authoritativeness:** Socio certificado MercadoLibre Flex, fulfillment 3PL, dirección física (Friuli 1972).
**Trustworthiness:** Info de contacto, páginas legales, privacy policy, terms, tel/email/WhatsApp.

---

### 2. Local SEO — **FUERTE** (Priority: 4/5)

**Fortalezas:**
- NAP consistente across schema (Friuli 1972, Mar del Plata, +54-223-660-2699)
- LocalBusiness schema con geo coordinates, opening hours, areaServed (Mar del Plata)
- Menciones a nivel barrio
- Código verificación Google Business Profile en layout (google: 'Xmi1zpx45Gdf_z7dZfPWRjDuG7ExiOo7N2fy1hnlBbA')

**Gap:** No hay páginas de ubicación dedicadas por barrio/zona. No hay review markup (aggregateRating) en páginas de servicio.

---

### 3. Content Gaps — **MODERADO** (Priority: 3/5)

**Oportunidades de Contenido Faltantes:**

| Keyword Cluster | Search Intent | Recommended Page |
|---|---|---|
| "envíos mismo día mar del plata" | Commercial | `/servicios/envios-express` (expandir) |
| "cadetería mar del plata precios" | Commercial | Nueva página o expandir `/cotizar/*` |
| "logística ecommerce mar del plata" | Informational | Blog/article section |
| "mercadolibre flex mar del plata socios" | Navigational/Commercial | `/servicios/enviosflex` (expandir) |
| "fulfillment 3pl mar del plata" | Commercial | `/servicios/plan-emprendedores` (expandir) |

---

### 4. FAQ Page Content — **BUENO** (Priority: 4/5)

**Status:** 6 preguntas bien targeteadas cubriendo: tipos de servicio, zonas de cobertura, límites tamaño/peso, ML Flex, facturación, contrarrembolso. Código de schema existe pero no renderiza.

---

## Prioritized Action Plan

### 🔴 CRÍTICO (Esta Semana)

| # | Acción | Esfuerzo | Impacto |
|---|--------|----------|---------|
| 1 | **Fix canonical tags** — Remover `alternates.canonical: baseUrl` de `layout.tsx:77`. Agregar self-referencing `alternates.canonical` a metadata export de cada página | 15 min | **Desbloquea indexación de todas las 22 páginas non-home** |
| 2 | **Fix broken Flex banner image** — Agregar `public/img/generales/banner-servicio-flex.jpg` o actualizar componente | 10 min | Fixea CLS, 404, crawl waste |
| 3 | **Habilitar page-specific schemas** — Mergear FAQPage, Service, AboutPage, ContactPage en @graph del layout O usar component-level script injection | 30-60 min | Rich results eligibility para todos los page types |

---

### 🟠 ALTO IMPACTO (Próximas 2 Semanas)

| # | Acción | Esfuerzo | Impacto |
|---|--------|----------|---------|
| 4 | Agregar breadcrumb navigation + BreadcrumbList schema — Todas las páginas | 1 hr | Mejor UX, site structure signals, sitelinks |
| 5 | Agregar AggregateRating/Review schema — Páginas de servicio, si hay reviews | 30 min | Rich stars en SERP |
| 6 | Internal linking contextual — "Servicios relacionados" en cada service page linkeando a otros servicios + quote pages | 1 hr | Distribuye authority, mejora crawl depth |
| 7 | Run PageSpeed Insights en 5 páginas clave — Documentar baselines LCP/INP/CLS | 15 min | Core Web Vitals baseline |
| 8 | Crear blog/content hub — Target "logística ecommerce mar del plata", "cómo elegir cadetería", "costos envío mismo día" | 1 semana+ | Authority tópica, traffic long-tail |

---

### 🟡 MEDIO (Próximo Mes)

| # | Acción | Esfuerzo | Impacto |
|---|--------|----------|---------|
| 9 | Image alt audit — Verificar todos los `<Image>` components tienen alt text descriptivo, keyword-rich | 30 min | Image search, accesibilidad |
| 10 | FAQ expansion — Agregar 4-6 preguntas más (rastreo, seguros, devoluciones, horarios, zonas extendidas) | 1 hr | Más FAQ rich results, voice search |
| 11 | Location pages por zona — `/cobertura/güemes`, `/cobertura/punta-mogotes`, etc. con LocalBusiness schema cada una | 1 semana | Hyper-local rankings |
| 12 | Competitor gap analysis — vs. otras cadeterías Mar del Plata | 2 hrs | Keyword opportunities |

---

### 🟢 LARGO PLAZO (Trimestral)

| # | Acción | Esfuerzo | Impacto |
|---|--------|----------|---------|
| 13 | International SEO ready — Si expandiendo a otras ciudades, implementar subdirectory structure (`/mdp/`, `/cba/`, `/ros/`) con hreflang | 1-2 semanas | Scalable multi-city |
| 14 | Video schema + YouTube embeds — Service demo videos, team intros | 1 semana | Video rich results, engagement |
| 15 | Programmatic location pages — Si escalando a 10+ ciudades en Argentina | 2+ semanas | Massive local footprint |

---

## Validation Checklist (Post-Fix)

Después de implementar fixes críticos, verificar:
- [ ] `site:enviosdosruedas.com` muestra todas las 23 URLs indexadas
- [ ] Google Rich Results Test pasa para: Service (4 páginas), FAQPage, AboutPage, ContactPage, LocalBusiness, Organization
- [ ] Search Console Coverage report: 0 "Duplicate, Google chose different canonical"
- [ ] PageSpeed Insights: LCP < 2.5s, INP < 200ms, CLS < 0.1 en todas las páginas clave
- [ ] Mobile-Friendly Test: Pass en todas las páginas
- [ ] No 404s en Coverage report

---

## Appendix: Pages Tested & Schema Status

| Page | Canonical | Meta Robots | Schema Rendered | Expected Schema |
|------|-----------|-------------|-----------------|-----------------|
| `/` | ✅ Self | index,follow | WebSite, Org, LocalBusiness | WebSite, Org, LocalBusiness |
| `/servicios/envios-express` | ❌ Home | index,follow | Org, LocalBusiness only | **Service + OfferCatalog** |
| `/servicios/envios-lowcost` | ❌ Home | index,follow | Org, LocalBusiness only | **Service + OfferCatalog** |
| `/servicios/enviosflex` | ❌ Home | index,follow | Org, LocalBusiness only | **Service + OfferCatalog** |
| `/servicios/plan-emprendedores` | ❌ Home | index,follow | Org, LocalBusiness only | **Service + OfferCatalog** |
| `/cotizar/express` | ❌ Home | index,follow | Org, LocalBusiness only | **Service + OfferCatalog** |
| `/cotizar/lowcost` | ❌ Home | index,follow | Org, LocalBusiness only | **Service + OfferCatalog** |
| `/nosotros/preguntas-frecuentes` | ❌ Home | index,follow | Org, LocalBusiness only | **FAQPage** |
| `/nosotros/sobre-nosotros` | ❌ Home | index,follow | Org, LocalBusiness only | **AboutPage + LocalBusiness** |
| `/contacto` | ❌ Home | index,follow | Org, LocalBusiness only | **ContactPage** |
| `/nosotros/nuestras-redes` | Untested | Untested | Untested | — |
| `/revisar` | Untested | Untested | Untested | — |
| `/politica-de-privacidad` | Untested | Untested | Untested | — |
| `/terminos-y-condiciones` | Untested | Untested | Untested | — |

---

## Next Steps

Recomiendo empezar con el **canonical fix inmediatamente** — es una remoción de una línea en `layout.tsx` y agregar 10 líneas de metadata page-specific. Esto desbloqueará a Google para indexar tus money pages (servicios, cotizaciones, contacto).