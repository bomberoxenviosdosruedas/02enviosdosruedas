# SITE-STRUCTURE — Arquitectura, Jerarquía y Linking 2026

> Estado relevado 2026-09-28 (build + sitemap.xml + HTML home). Objetivo: estructura que maximice captura por intención con linking completo.

---

## 1. Estado Actual (Sitemap: 19 URLs)

### Tier 0 — Home
```
/                        ✅ (falta CANONICAL — bug T1)
```

### Tier 1 — Servicios & Hub
```
/servicios                          ✅ hub PERO sin enlace desde home (huérfana)
/servicios/envios-express           ✅ SIN enlace desde home (huérfana)
/servicios/envios-lowcost           ✅ enlazada
/servicios/enviosflex               ✅ enlazada
/servicios/deposito-fulfillment     ✅ enlazada
/servicios/envios-contrareembolso   ✅ SIN enlace desde home (huérfana)
/servicios/empresas-cuenta-corriente ✅ SIN enlace desde home (huérfana)
/servicios/plan-emprendedores       ❌ FALTA EN EL SITEMAP (existe en build)
```

### Tier 1 — Cotizadores (transaccional)
```
/cotizar/express     ✅ enlazada · dynamic
/cotizar/lowcost     ✅ enlazada · dynamic
```

### Tier 2 — Confianza & Legal
```
/contacto                          ✅
/nosotros                          ✅ SIN enlace desde home (huérfana)
/nosotros/sobre-nosotros           ✅
/nosotros/preguntas-frecuentes     ✅
/nosotros/nuestras-redes           ✅
/politica-de-privacidad            ✅
/terminos-y-condiciones            ✅
/cobertura                         ✅ SIN enlace desde home (huérfana)
```

### Guías / Contenido
```
/guias/envios-flex-mar-del-plata   ✅ SIN enlace desde home (huérfana)
```

### No indexar
```
/revisar   (disallowed en robots.txt) · /admin/imagenes · /api/*
```

---

## 2. Problemas Detectados

| # | Problema | Severidad |
|---|---|---|
| S1 | **7 páginas huérfanas desde home**: `/servicios`, `/servicios/envios-express`, `/servicios/envios-contrareembolso`, `/servicios/empresas-cuenta-corriente`, `/cobertura`, `/nosotros`, `/guias/envios-flex-mar-del-plata` | **High** — señal de crawl y distribución de autoridad |
| S2 | `/servicios/plan-emprendedores` **ausente del sitemap** (target de "paqueteria ecommerce" 1.600 vol) | **High** — no se propone a indexar |
| S3 | `/servicios/envios-express` (keyword "mensajería en moto" 1.900) enlazada solo desde footer/nav, no desde el hero de home | Medium |
| S4 | `/nosotros` hub sin enlace (solo sus hijas) — jerarquía de raíz incompleta | Low |

---

## 3. Arquitectura Objetivo

```
/  (home — con canonical)
├── /servicios                      ← HUB con cards + FAQ + comparativa
│   ├── /servicios/envios-express           ← "mensajeria en moto", "entregas inmediatas"
│   ├── /servicios/envios-lowcost           ← "paqueteria economica"
│   ├── /servicios/enviosflex               ← "envios flex", "reparto mercadolibre"
│   ├── /servicios/envios-contrareembolso   ← cuña diferencial
│   ├── /servicios/deposito-fulfillment     ← "fulfillment mar del plata" (G3)
│   ├── /servicios/empresas-cuenta-corriente← B2B
│   └── /servicios/plan-emprendedores       ← "paqueteria ecommerce", DropOFF (G1)
├── /cotizar/express · /cotizar/lowcost     ← transaccional directo
├── /cobertura                              ← alcance geográfico (1 página, no por barrio)
├── /guias/                                 ← hub de guías (ampliar) → pillar Flex
├── /nosotros · /nosotros/sobre-nosotros · /preguntas-frecuentes · /nuestras-redes
├── /contacto
└── /politica-de-privacidad · /terminos-y-condiciones
```

### Reglas de Jerarquía
- **Máx 2 clics** desde home a cualquier cotizador/servicio.
- Equitativa: cada página de servicio enlaza a su cotizador correspondiente y viceversa.
- Guías enlazan a páginas de servicio; páginas de servicio enlazan a guías (hub-spoke).
- Ninguna página canónica nueva sin enlace interno desde una página enlazada.

---

## 4. Plan de Linking (Fix S1-S4)

| Origen | Destino | Forma | Aporte |
|---|---|---|---|
| Home hero / sección servicios | `/servicios/envios-express` | Botón secundario / card | Captura "mensajería en moto" |
| Home nav "Servicios" | `/servicios` (hub) | Item de menú con dropdown | Distribuye autoridad |
| Home footer | `/cobertura`, `/nosotros`, `/guias/envios-flex-mar-del-plata` | Links de footer | Cover huérfanas |
| `/servicios` hub | todas las hijas | Cards con descripciones | Jerarquía clara |
| Todas las landings | cotizador correspondiente | CTA final | Conversión |
| Guías | pillar + servicios | Links contextuales | Hub-spoke |

---

## 5. Schema por Tipo de Página (Estado + Objetivo)

| Página | Hoy | Objetivo |
|---|---|---|
| Home | ✅ Organization + LocalBusiness (layout, con horarios sábado) | + `WebSite` (mínimo) en layout |
| Servicio | ✅ JSON-LD inline por página (Service/FAQ donde corresponda) | Verificar Service + BreadcrumbList en cada una; limpiar duplicados |
| Cotizadores | ✅ WebApplication inline (verificar en cotizadores) | Mantener |
| FAQ | ✅ FAQPage inline (valor humano; sin rich results desde 2026-05) | Mantener; QAPage solo si hay Q&A real |
| Contacto | ✅ contacto inline | Mantener |
| **Dead code** | `SchemaMarkup.tsx` sin uso en app (contiene Service/Breadcrumb/FAQ) | Decidir: reconectar o eliminar (housekeeping) |

---

## 6. Control de Calidad (Gates)

| Gate | Umbral |
|---|---|
| Páginas de ubicación | ⚠️ 30+ → revisar · 🛑 50+ → parar (NO crear páginas por barrio) |
| Contenido único por página de servicio | 100% propio, ≥800 palabras |
| Cobertura geográfica | 1 página única con zonas + preguntas locales (no separadas por barrio) |