# Glosario de Términos Internos — Envíos DosRuedas

> **Fuente:** `docs/marketing/glosario.md` (memoria del proyecto).
> **Actualizar** cada vez que aparezca un término interno nuevo.

---

## Términos del Negocio

| Término | Definición |
|---|---|
| **MDQ** | Código de aeropuerto de Mar del Plata, usado como abreviatura informal de la ciudad en el rubro logístico local. |
| **Flex** | Dos significados según contexto: (1) **Mercado Libre Flex** — programa de ML donde el vendedor despacha sus propios pedidos con un tercero (Envíos DosRuedas cumple ese rol para sellers de MDQ). (2) `/servicios/enviosflex` — página del sitio dirigida a esos sellers (antes `/servicios/plan-flex`). Ver `BL-01` para rename/redirección pendiente. |
| **LowCost** | Uno de los dos servicios de cotización del sitio (el otro es Express). Envío económico, con umbral de distancia a partir del cual el resultado pasa a "a consultar" en vez de precio fijo. El valor exacto del umbral es una pregunta pendiente al dueño (ver `F4-0-backlog.md` §4). |
| **Express** | Servicio de cotización más rápido/caro de los dos, con su propia fórmula en `src/lib/pricing.ts`. |
| **3PL** | "Third-party logistics" — operador logístico externo. Se usa en el sitio para describir el servicio de depósito/fulfillment para e-commerce. `F2-3-ux-copy.md` (`COPY-01` a `COPY-04`) señaló que es jerga que el cliente final no entiende y pidió reformularla en el copy visible (no en la documentación interna, donde el término sigue siendo útil). |
| **PriceRange** | El único modelo real de Prisma que se usa en producción hoy — la tabla de tarifas oficiales, leída por los cotizadores Express y LowCost. **No confundir** con `PricingRange` (nombre incorrecto que usa `llms.txt`, ver `GEO-01`) ni con `Order`/`Quote`/`Zone` (modelos que `llms.txt` menciona pero que no existen en el esquema real, ver `F12-1-diccionario.md`). |
| **Friuli 1972** | Dirección del depósito/base de operaciones de Envíos DosRuedas en Mar del Plata. |

---

## Prefijos de ID de Hallazgos (por Fase de Origen)

| Prefijo | Fase | Qué Tipo de Hallazgo |
|---|---|---|
| `D-` / `DC-` | F2-1 (crítica diseño/UX) | Problemas de experiencia de usuario en páginas reales |
| `A11Y-` | F2-2 (accesibilidad) | Problemas de accesibilidad (WCAG) |
| `COPY-` | F2-3 (copy UX) | Problemas de redacción/jerga/CTAs |
| `MARCA-` | F2-4 (revisión marca) | Inconsistencias de marca y afirmaciones sin respaldo |
| `CAMP-` | F3-1 (plan campaña) | Acciones de marketing derivadas del plan |
| `CONT-` | F3-2 (contenidos) | Piezas de contenido y páginas nuevas propuestas |
| `GEO-` | F6 (visibilidad IA / GEO) | Problemas de visibilidad para buscadores y motores de IA |
| `REP-` | F7 (reputación) | Hallazgos sobre reseñas y gestión de reputación |
| `DS-` | F13 (sistema de diseño) | Discrepancias entre `DESIGN.md` y código real |
| `LEGAL-` | F10-2 (revisión contratos) | Riesgos legales en términos/privacidad — **no se convierten en `BL-xx`** sin validación profesional |
| `BL-` | F4-0 (backlog unificado) | Ítem de trabajo final, numerado, que agrupa uno o más hallazgos de arriba |

> **Por qué existen los prefijos:** cada `BL-xx` cita en su columna "IDs de origen" de qué hallazgo(s) viene, para poder rastrear una decisión hasta el documento que la generó sin tener que releer todo. No se inventaron IDs `SEO-xx`/`COMP-xx` retroactivos para `F1-1`/`F1-2` porque esos documentos se publicaron sin ese sistema de IDs — es un gap conocido, no un error de esta memoria.

---

## Otras Siglas Usadas en Documentos F*

| Sigla | Significado |
|---|---|
| **GBP** | Google Business Profile, la ficha de Google del negocio. |
| **GA4** | Google Analytics 4, la herramienta de analítica pendiente de instrumentar (`BL-25`). |
| **ICP** | Perfil de cliente ideal (Ideal Customer Profile), definido en `F9-1-perfil-cliente-ideal.md`. |
| **CRM** | En este proyecto, la planilla liviana `F9-4-crm.xlsx` (no un software de CRM dedicado). |
| **GEO** | En el contexto de las Fases 6-16 (no confundir con geolocalización), "Generative Engine Optimization" — visibilidad del sitio para crawlers y agentes de IA (GPTBot, ClaudeBot, PerplexityBot, etc.), no solo para buscadores tradicionales. |