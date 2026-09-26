# Contexto SEO y Estrategia de Posicionamiento — Envíos DosRuedas 2026

> **Fuente consolidada:** `docs/contexto/seo-audit-estrategia-2026.md`, `docs/contexto/Keyword Stats 2026-08-18 at 03_09_45.csv`.

---

## 1. Resumen Ejecutivo

**Envíos DosRuedas** cuenta con una sólida arquitectura técnica en **Next.js 16 App Router** (React 19, TypeScript estricto, Tailwind v4, Schema.org estructurado). La desconexión principal era entre la alta demanda de términos clave y las definiciones operativas del dueño.

| Fortaleza Principal | Oportunidad |
|---|---|
| Operativa real con ventajas insuperables: 100% cumplimiento Flex, 3PL en Friuli 1972, DropOFF 20% OFF, contrareembolso sin recargo, cotizador transparente | Estructurar contenidos por intención de búsqueda para captar tráfico orgánico inmediato |

**Top 3 Prioridades de Alto Impacto:**
1. **Optimización On-Page y Metadatos** → Alinear `<title>` y `<meta description>` a clusters de mayor volumen comercial.
2. **Despliegue Cluster 3PL & Fulfillment** → Posicionar modalidades: E-Commerce Same Day, Next Day 24hs, DropOFF 20% OFF.
3. **Diferenciación Local** → Capitalizar falencias de competidores (MMDP, Retorno, apps masivas) enfatizando atención humana, cadetes propios, SLA garantizado.

---

## 2. Matriz de Oportunidades SEO (Keywords Prioritarias)

| Keyword | Vol. Mensual | Dificultad | Opportunity Score | Intención | Tipo Contenido | Página Objetivo |
|---|---|---|---|---|---|---|
| **envios flex** | 3.600 | Media (62) | 🟢 Alta | Comercial/Transaccional | Landing + Guía vendedor | `/servicios/enviosflex` |
| **mensajeria en moto** | 1.900 | Baja (28) | 🟢 Muy Alta | Transaccional/Local | Hero + Tarjetas Express | `/servicios/envios-express` |
| **paqueteria ecommerce** | 1.600 | Baja (31) | 🟢 Muy Alta | Comercial/B2B | Landing 3PL + Comparador | `/servicios/plan-emprendedores` |
| **envios express** | 1.300 | Media (59) | 🟢 Alta | Transaccional | Cotizador + Mapa | `/cotizar/express` |
| **servicios de mensajerias** | 1.000 | Baja (9) | 🟢 Muy Alta | Informativa/Comercial | Home + Sobre Nosotros | `/`, `/nosotros/sobre-nosotros` |
| **envios ecommerce** | 880 | Baja (32) | 🟢 Muy Alta | Comercial/PyME | Landing Soluciones | `/servicios/plan-emprendedores` |
| **reparto mercadolibre** | 720 | Media (48) | 🟢 Alta | Comercial/Vendedores | Landing Flex + FAQ Reputación | `/servicios/enviosflex` |
| **entregas inmediatas** | 590 | Baja (2) | 🟢 Muy Alta | Transaccional Urgente | Landing Express + CTA WhatsApp | `/servicios/envios-express` |
| **logistica mercado flex** | 590 | Alta (86) | 🟡 Media | Comercial/B2B | Guía Técnica Flex | `/servicios/enviosflex` |
| **envios a domicilio** | 390 | Baja (33) | 🟢 Alta | Transaccional Local | Cotizadores Express/LowCost | `/cotizar/express`, `/cotizar/lowcost` |

> **Dataset completo:** `docs/contexto/Keyword Stats 2026-08-18 at 03_09_45.csv` (52 keywords).

---

## 3. On-Page SEO — Issues y Soluciones Aplicadas

| Página | Issue Detectado | Severidad | Optimización Requerida |
|---|---|---|---|
| `/servicios/envios-express` | Falta destacar rango 3hs y corte 15:00 hs | **Alta** | Integrar en H2/H3 y metadatos: *"Envíos Express con rango de 3hs y corte 15hs en Mar del Plata"* |
| `/servicios/envios-lowcost` | Servicio más rentable, falta énfasis en corte 13:00 hs y entregas < 19:00 hs | **Alta** | Optimizar Title/Meta con `paqueteria economica`, `entregas programadas en el dia` |
| `/servicios/enviosflex` | Vendedores buscan mínimos y horario límite de retiro | **Alta** | FAQ/badges: *"Sin mínimo · Retiros múltiples · Corte 15:00 · Entregas < 20:00"* |
| `/servicios/plan-emprendedores` | No se comunicaba DropOFF 20% OFF ni Contrareembolso sin costo | **Crítica** | Cards: E-Commerce Same Day, Next Day 24hs, DropOFF 20% Descuento |
| Metadatos globales (`layout.tsx`) | Faltaba eslogan oficial *"Tu Partner Logístico en Mar del Plata"* | **Media** | Actualizar `defaultTitle` y `description` con keywords mensajería/paquetería |

---

## 4. Brechas de Contenido Estratégicas (Content Gaps)

| Brecha | Keyword Objetivo | Justificación Comercial | Formato Recomendado |
|---|---|---|---|
| **Modalidad DropOFF 20% Descuento** | `drop off envios mar del plata`, `despacho encomiendas mar del plata` | Captar emprendedores que llevan paquetes a Friuli 1972 y ahorran 20% | Bloque interactivo en `/servicios/plan-emprendedores` + calculadora ahorro |
| **Contrareembolso Sin Costo Extra** | `envios contrareembolso mar del plata`, `cobro contra entrega cadeteria` | Diferencial brutal: competencia cobra 5-10% comisión; DosRuedas = $0 extra | Badge destacado + sección FAQ global |
| **E-Commerce Same Day vs Next Day (24hs)** | `fulfillment mar del plata`, `almacenamiento y empaquetado ecommerce` | Explicar flujo: stock en Friuli 1972 → picking QR → embala → entrega en el día | Comparativa visual 2 columnas (Same Day vs Next Day) |
| **Horarios de Corte Inquebrantables** | — | Express: 2hs antelación, antes 15:00, rango 3hs. LowCost: antes 13:00, entrega < 19:00. Flex: corte 15:00, entrega < 20:00. | Badges + FAQ + metadatos en cada landing |

---

## 5. Technical SEO Checklist (Estado Actual)

| Factor Técnico | Estado | Detalle |
|---|---|---|
| **Estructura H1 Única** | ✅ Pass | Cada ruta implementa exactamente un H1 semántico con keywords principales. |
| **Schema.org Structured Data** | ✅ Pass | `LocalBusiness` (coords Friuli 1972), `FAQPage` dinámico, `WebApplication` en cotizadores. |
| **OpenGraph & Twitter Cards** | ✅ Pass | `og:title`, `og:description`, `og:locale: es_AR`, `canonical`, `meta robots` indexables. |
| **Core Web Vitals** | ✅ Pass | Next.js 16 + RSC, imports dinámicos Leaflet (`DynamicRouteMap`), SVG vectorial optimizado. |
| **Accesibilidad & Touch Targets** | ✅ Pass | Botones ≥ 44×44px, `focus-visible` ring azul/amarillo, contraste AA validado. |
| **Consistencia URLs** | ✅ Pass | Estructura limpia sin trailing slash inconsistente ni parámetros innecesarios. |

---

## 6. Benchmark Competitivo Local (Mar del Plata)

| Dimensión | **Envíos DosRuedas** | **MMDP** | **Retorno Mensajería** | **CDI / Grupos Informales** |
|---|---|---|---|---|
| **Tecnología & Cotizador** | 🥇 Cotizador vivo + mapa OSRM + WhatsApp | Web estática / llamada | Solo teléfono/WhatsApp manual | Sin web / grupos mensajería |
| **SLA MercadoLibre Flex** | 🥇 100% entregas en el día (Corte 15hs) | Cumplimiento moderado | Rutas fijas sin flexibilidad | Alta tasa reclamos/demoras |
| **Almacenamiento 3PL & Fulfillment** | 🥇 Depósito Friuli 1972 + Picking QR + DropOFF 20% | Depósito tradicional sin foco e-com | Sin fulfillment automatizado | No ofrece |
| **Contrareembolso** | 🥇 Sin cargo adicional | Con comisión | Con comisión | Riesgo pérdida / informal |
| **Presencia Digital & Redes** | 🥇 +5.000 seguidores orgánicos (IG+FB) | Presencia baja | Presencia nula | Grupos cerrados |
| **Transparencia Tarifaria** | 🥇 Tarifas públicas 2026 segmentadas por km | Precios a consultar | Precios a consultar | Precios variables sin ticket |

---

## 7. Plan de Acción Priorizado

### 🟢 Quick Wins (Inmediato)
1. **Actualizar Copys de Horarios de Corte y Rangos:**
   - `/servicios/envios-express`: Rango 3hs (ej: 10-13hs), aviso 2hs antelación, corte 15:00.
   - `/servicios/envios-lowcost`: Pedidos < 13:00 → entrega < 19:00 mismo día.
2. **Destacar "Contrareembolso Sin Costo Extra":** Badge en cotizador y landings.
3. **Publicar Opción DropOFF 20% OFF:** CTA para clientes que lleven paquetes a Friuli 1972.

### 🔵 Inversiones Estratégicas (Próximo Trimestre)
1. **Pillar Page MercadoLibre Flex MDQ:** Guía técnica completa para vendedores (configurar Flex, SLAs, evitar perder MercadoLíder).
2. **Calculadora 3PL para PyMEs:** Módulo interactivo ahorro: depósito propio vs. fulfillment DosRuedas.
3. **Local Link Building MDQ:** Alianzas con UCIP, polos tecnológicos, directorios empresariales locales.

---

## 8. Referencias

- **Dataset Keywords:** `docs/contexto/Keyword Stats 2026-08-18 at 03_09_45.csv`
- **Respuestas Dueño:** `docs/contexto/respuestas_dueno_enviosdosruedas.csv`
- **Auditoría Completa:** `docs/contexto/seo-audit-estrategia-2026.md`
- **Schema.org Implementation:** `src/components/seo/SchemaMarkup.tsx`
- **Metadatos Globales:** `src/app/layout.tsx`