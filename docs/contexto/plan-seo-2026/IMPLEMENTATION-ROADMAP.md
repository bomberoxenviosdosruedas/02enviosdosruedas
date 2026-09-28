# IMPLEMENTATION-ROADMAP — Plan de Ejecución SEO (4 Fases)

> Prioridad: **Critical** (bloquea/penaliza) · **High** (1 semana) · **Medium** (1 mes) · **Low** (backlog).
> Verificación de cada ítem: "cómo sabríamos que falló" (falsabilidad) + indicador temprano.

## Estado de Ejecución — 2026-09-28

- **T1-T6: ✅ implementados (sin deploy aún).** Canonical de home (`/` → `https://www.enviosdosruedas.com`), `metadataBase`, og/twitter unificados con el `<title>` default, title 55 chars / description 148 chars, sitemap con `/servicios/plan-emprendedores` (priority 0.9), huérfanas enlazadas en footer SSR + dropdown del header.
- **Bloqueo extra detectado y resuelto:** `next.config.ts` tenía un redirect 308 estale `'/servicios/plan-emprendedores' → '/servicios/deposito-fulfillment'` (resto de `09ccf48 "refaccion"`, 2026-09-18) que dejaba la landing inaccesible. Se eliminó; la URL responde 200 y queda indexable. Dejó de matar G1.
- **G1 (Modalidad DropOFF 20%): ✅ construido.** Bloque interactivo + calculadora de ahorro en `/servicios/plan-emprendedores` (`EmprendedoresDropoff` + `DropoffCalculator`), ticket térmico con cálculo transparente sobre la tarifa publicada del Plan Inicial DropOFF.
- **Pendiente:** deploy + re-medición PSI a11y (97→100) + validación GSC de la URL `/servicios/plan-emprendedores`.

---

## Fase 1 — Fundamentos (Semanas 1-4)

### 1.1 Technical Quick Wins (Crítico — arrancar YA)

| # | Tarea | Severidad | Archivo(s) | Cómo sabríamos que falló | Indicador temprano |
|---|---|---|---|---|---|
| T1 | **Agregar canonical a la home** (`/` no emite canonical; todas las otras rutas sí) | **Critical** | `src/app/page.tsx` (exportar `metadata` con `alternates.canonical`) o layout | Re-fetch de `/` sin `<link rel="canonical">` | GSC: consolidación de páginas duplicadas para `/` |
| T2 | **Agregar `metadataBase`** en layout (warning de build: OG/twitter images se resuelven contra localhost en dev) | **High** | `src/app/layout.tsx` | Warning de build persiste | OG preview correcto |
| T3 | **Unificar `og:title`/`twitter:title`** con el `<title>` (hoy: "Envíos DosRuedas - Mensajería & Logística…" ≠ "Mensajería en moto…") | High | `src/app/layout.tsx` | Compartir en WhatsApp/IG muestra título viejo | Screenshot de share |
| T4 | **Recortar title ≤60 y description ≤158** (hoy 66 y 170) | Medium | `src/app/layout.tsx` | SERP trunca con "…" | CTR en GSC |
| T5 | **Sitemap: agregar `/servicios/plan-emprendedores`** (existe en build, falta en sitemap — es target de "paqueteria ecommerce" 1.600) | High | fuente del sitemap (`src/app/sitemap.ts` o similar) | `/sitemap.xml` sin la URL | Indexación de plan-emprendedores en GSC |
| T6 | **Enlazar las 7 páginas huérfanas desde home** (`/servicios`, `/servicios/envios-express`, `/servicios/envios-contrareembolso`, `/servicios/empresas-cuenta-corriente`, `/cobertura`, `/nosotros`, `/guias/…`) | High | Nav/Footer/Home | Home sin esos hrefs | Crawl del sitio (GSC "Enlazadas internamente") |
| T7 | **Re-medir PSI a11y 97→100** post-deploy (cambios locales ya listos, sin commit) | High | deploy | PSI < 100 en producción | Lighthouse local |

### 1.2 Fundación de Datos
- Conectar **Google Search Console** (verificar ownership, enviar sitemap).
- **GBP**: relevar categorías, horarios, fotos, WhatsApp (ver SEO-STRATEGY §5).
- Baseline de KPIs (GSC 90 días + GBP insights) — sin baseline no hay plan.
- Auditar conciencia del 404/redirects (rutas viejas → nuevas).

| Tarea | Severidad | Cómo sabríamos que falló |
|---|---|---|
| GSC ownership + sitemap | High | GSC sin datos en 14 días |
| Relevamiento GBP | High | Categorías desactualizadas frente a servicio real |
| Baseline GSC/GBP | Medium | Métricas de F2 sin punto de comparación |

---

## Fase 2 — Expansión (Semanas 5-12)

| Semana | Tarea | Prioridad |
|---|---|---|
| S5 | Pillar Flex MDQ (ampliar guía: config, SLAs, no perder MercadoLíder) | High |
| S6 | Calculadora 3PL en plan-emprendedores | High |
| S7 | Comparativa Same Day vs Next Day | Medium |
| S8 | 2 guías nuevas ("Cómo elegir mensajería MDP", "Costos de envío MDP 2026") | Medium |
| S9-12 | FAQ humana en landings + respuestas de reviews (GBP) | High todos |

**Verificación F2:** +5 queries nuevas con impresiones (GSC) relacionadas a Flex/3PL/contrarreembolso; CTR de páginas de servicio mejora.

---

## Fase 3 — Escala (Meses 4-6)

| Tarea | Prioridad | Verificación |
|---|---|---|
| **Link building local:** UCIP, polos tecnológicos, directorios de comercios, cámaras | High | +8-12 dominios referentes locales (GSC "Enlaces externos") |
| **Programa de reviews:** QR en entregas, respuesta a 100% | High | +12 reviews/trimestre; rating ≥4,8 |
| 2 posts/mes con casos reales | Medium | Clicks orgánicos a blog/guías |
| GEO: verificar citas de la marca en ChatGPT/Perplexity para queries locales | Medium | Menciones de enviosdosruedas.com en respuestas AI |
| 1er data study ("Estado del e-commerce en MDP") | Low→Medium | Citas en medios/portales locales |

---

## Fase 4 — Autoridad (Meses 7-12)

| Tarea | Prioridad |
|---|---|
| Data study semestral (tarifas, tiempos, cumplimiento Flex) — material PR local | Medium |
| Video testimoniales + fotos de operación (depósito Friuli, picking QR) | Medium |
| Co-marketing con tiendas online MDP (blog cruzado, casos) | Low |
| Presencia en "mejores listas" locales (factor #1 visibilidad AI local) | Medium |
| Revisión anual del plan completo + re-benchmark competidores | Alta |

---

## Orden General de Ejecución (Dependencias)

1. **T1-T6 (Fase 1)** — técnico: sin canonical/metadata/sitemap el resto pierde señal. *(Día 1-3)*
2. **F1.2** — datos: GSC/GBP baseline (paralelo a T1-T6).
3. **Fase 2** — contenido: requiere que las plantillas/estructura ya existan.
4. **Fase 3** — off-page: solo tiene sentido con contenido en pie.
5. **Fase 4** — autoridad: acumulativa sobre F2+F3.

> ⚠️ Sin commits durante la ejecución de la sesión actual (regla del proyecto). Los cambios se agrupan y se entregan para revisión.