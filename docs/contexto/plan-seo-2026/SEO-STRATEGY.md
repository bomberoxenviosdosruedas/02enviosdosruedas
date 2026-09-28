# SEO-STRATEGY — Plan Estratégico SEO 2026 · Envíos DosRuedas

> **Fuente de datos:** `docs/contexto/seo-audit-estrategia-2026.md`, `docs/knowledge_base/02-dominio/contexto-seo.md`, auditoría en vivo de la home (2026-09-28), template `seo-plan/assets/local-service.md`.
> **Dueño:** Matías · **Vigencia:** Q4 2026 → Q3 2027 (12 meses).

---

## 1. Resumen Ejecutivo

**Envíos DosRuedas es un negocio de servicio local** (mensajería / logística de última milla en moto, Mar del Plata) con una ventaja técnica rara en el rubro: **sitio Next.js 16 rápido, cotizadores vivos, schema rico y tarifas públicas**. El problema no es técnico — es de **captura de intención**: las keywords de mayor volumen comercial ya existen (`envios flex` 3.600/mes, `mensajeria en moto` 1.900/mes, `paqueteria ecommerce` 1.600/mes) con dificultad baja/media, pero el sitio aún no las explota con contenido propio.

**Tesis del plan:** ganar la cima del mercado local del e-commerce en MDP **combinando la operativa real (SLA Flex 100%, 3PL, contrareembolso gratis, DropOFF 20%) con estructura de contenidos por intención** → tráfico orgánico → WhatsApp / cotizador → despacho.

### Diagnóstico Rápido (2026-09-28)

| Dimensión | Estado | Nota |
|---|---|---|
| Técnica (CWV, RSC, indexable) | 🟢 Fuerte | Next.js 16, schema rico, robots.txt permite AI bots |
| On-page home | 🟡 2 bugs reales | **Sin canonical** en `/` + og/twitter title ≠ `<title>` |
| On-page subpáginas | 🟢 Bueno | Cada página tiene canonical + JSON-LD propio |
| Sitemap | 🟡 Incompleto | Falta `/servicios/plan-emprendedores` (keyword 1.600 vol) |
| Contenido por intención | 🟠 Baja cobertura | Faltan páginas/landings para los 4 content gaps |
| Internal linking | 🟡 7 páginas huérfanas | Pages del sitemap sin enlace desde home |
| E-E-A-T / Local | 🟢 Muy fuerte | NAP completo, geo, horarios, 12+ testimonios, fotos propias |
| AI Search (GEO) | 🟢 Preparado / 🟠 sin activar | robots permite AI crawlers; sin citas verificadas aún |

---

## 2. Objetivos y KPIs

| Métrica | Baseline (capturar) | 3 meses | 6 meses | 12 meses |
|---|---|---|---|---|
| Tráfico orgánico mensual (GSC) | por medir | +40% | +120% | +300% |
| Impresiones (GSC) | por medir | +60% | +200% | +400% |
| Keywords en top 10 (MDP) | por medir | +15 | +40 | +80 |
| Consultas transaccionales (WhatsApp/directorio) | por medir | +25% | +60% | +150% |
| Clics → cotizador (Express/LowCost) | por medir | +30% | +80% | +180% |
| Páginas indexadas (sitemap) | 19 | 21 | 25 | 28 |
| Reviews Google (cantidad/rating) | por relevar | +12 / ≥4,8 | +30 / ≥4,9 | +60 / ≥4,9 |
| Core Web Vitals (PSI a11y + LCP) | a11y 97→100 (en curso) | PSI ≥ 95 | PSI ≥ 95 | PSI ≥ 95 |

**Regla de oro:** cada acción del plan es medible en GSC o GBP Insights. Si una iniciativa no mueve impresiones o conversión en 90 días, se evalúa y se reemplaza (falsabilidad explícita).

---

## 3. Posicionamiento (por qué vencemos)

Apalancar estos diferenciales operativos **verificables** en todo contenido:

| Pilar | Mensaje clave | Evidencia |
|---|---|---|
| **SLA Mercado Envíos Flex** | "100% entregas en el día, corte 15:00" | Cumplimiento real + vendedores |
| **3PL & Fulfillment Friuli 1972** | "Tu stock en MDP, despachamos por vos" | Depósito físico, picking QR, DropOFF 20% OFF |
| **Contrareembolso sin costo** | "Cobrás contra entrega, sin comisión" | Diferencial vs competencia (cobra 5-10%) |
| **Tarifas públicas & transparencia** | "Cotizás online, sin sorpresas" | Cotizadores Express/LowCost públicos |

**Oposición:** MMDP y Retorno (sin cotizador, sin fulfillment, contrareembolso con comisión) y apps masivas / grupos informales (sin SLA ni ticket).

---

## 4. Estrategia por Intención de Búsqueda

### 4.1 Transaccional (prioridad: convertir hoy)
- `mensajeria en moto` (1.900, dif 28) → hero + `/servicios/envios-express`
- `envios express` (1.300, dif 59) → `/cotizar/express` (ya existe, mejorar copy corte 15:00 / rango 3hs)
- `envios a domicilio` (390) → ambas landings de cotizador
- `entregas inmediatas` (590, dif 2) → landing Express + CTA WhatsApp dominante

### 4.2 Comercial / B2B (prioridad: captar comercios)
- `paqueteria ecommerce` (1.600, dif 31) → `/servicios/plan-emprendedores` **+ calculadora 3PL**
- `envios ecommerce` (880, dif 32) → landing Soluciones + casos
- `reparto mercadolibre` (720, dif 48) → `/servicios/enviosflex` + guía vendedor

### 4.3 Informativa (prioridad: construir autoridad + captura AI)
- `servicios de mensajerias` (1.000, dif 9) → home + sobre-nosotros
- Guías (`/guias/…`), FAQ ampliada, comparativas — ver CONTENT-CALENDAR.md

### 4.4 Local + GEO (AI visibility)
- NAP consistente (ya), listas "mejores mensajerías en MDP", presencia en directorios locales
- Citas verificables para ChatGPT/Perplexity (bloques de datos: tarifas, horarios, SLA, ejemplos reales)
- **NO** dedicarse a FAQPage por rich results (retirado 2026-05-07). Mantener FAQ útil para humanos + QAPage solo si hay Q&A genuino.

---

## 5. Canal Principal: Google Business Profile (palanca #1 local)

| Acción | Estado | Prioridad |
|---|---|---|
| NAP consistente (Friuli 1972, 7600 MDP, 223-6602699) | ✅ | — |
| Categorías sync con servicios (mensajería, logística, fulfillment) | a relevar | Alta |
| **Post semanal** (ofertas DropOFF, horarios de corte, casos) | arrancar | Alta |
| Fotos: cadetes, motos, depósito Friuli, producto real | subir más | Media |
| **Respuestas a reviews** (~100%) con detalle | arrancar | Alta |
| WhatsApp como canal primario de mensajería (reemplazó Business Chat) | verificar | Media |
| Horarios exactos (Lun-Vie 09-18, Sáb 10-15) — factor top-5 | ✅ en schema | Mantener |

---

## 6. Riesgos y Mitigaciones

| Riesgo | Mitigación |
|---|---|
| FAQPage sin rich results (retiro 2026) | No invertir en FAQ para SERP; usar como contenido humano + QAPage si hay Q&A real |
| Ubicación única ciudad → riesgo de página delgada | NO crear páginas por barrio (gate 30/50). Usar contenido de cobertura zona en 1 sola página |
| Keywords "envios flex" competidas por MercadoLibre y apps | Apuntar a long tail local: "envios flex mar del plata", "reparto mercadolibre mdp", "meli flex mardel" |
| Actualizaciones de precios 2026 | Mantener tarifas públicas (source of truth `PriceRange`) siempre frescas — es capital SEO |

---

## 7. Referencias Cruzadas

- Estrategia detallada por fases → `IMPLEMENTATION-ROADMAP.md`
- Competidores → `COMPETITOR-ANALYSIS.md`
- Contenido y cadencia → `CONTENT-CALENDAR.md`
- Arquitectura y linking → `SITE-STRUCTURE.md`