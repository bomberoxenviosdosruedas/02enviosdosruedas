# Glosario de términos internos

**Envíos DosRuedas** · memoria del proyecto — actualizar cada vez que aparezca un término interno nuevo que no esté acá.

## Términos del negocio

- **MDQ**: código de aeropuerto de Mar del Plata, usado a veces como abreviatura informal de la ciudad en el rubro logístico local.
- **Flex**: en este proyecto, se refiere a dos cosas distintas según el contexto — (1) Mercado Libre Flex, el programa de Mercado Libre por el que un vendedor despacha sus propios pedidos con un tercero (Envíos DosRuedas cumple ese rol para sellers de MDQ), y (2) `/servicios/enviosflex` (antes `/servicios/plan-flex`), la página del sitio dirigida a esos sellers. Ver `BL-01` para el rename/redirección pendiente.
- **LowCost**: uno de los dos servicios de cotización del sitio (el otro es Express) — envío económico, con un umbral de distancia a partir del cual el resultado pasa a "a consultar" en vez de un precio fijo (el valor exacto del umbral es una de las preguntas pendientes al dueño, ver `F4-0-backlog.md` §4).
- **Express**: el servicio de cotización más rápido/caro de los dos, con su propia fórmula en `src/lib/pricing.ts`.
- **3PL**: "third-party logistics" — operador logístico externo. Se usa en el sitio para describir el servicio de depósito/fulfillment para e-commerce, pero `F2-3-ux-copy.md` (`COPY-01` a `COPY-04`) señaló que es jerga que el cliente final no entiende y pidió reformularla en el copy visible (no en la documentación interna, donde el término sigue siendo útil).
- **PriceRange**: el único modelo real de Prisma que se usa en producción hoy — la tabla de tarifas oficiales, leída por los cotizadores Express y LowCost. No confundir con `PricingRange` (nombre incorrecto que usa `llms.txt`, ver `GEO-01`) ni con `Order`/`Quote`/`Zone` (modelos que `llms.txt` menciona pero que no existen en el esquema real, ver `F12-1-diccionario.md`).
- **Friuli 1972**: la dirección del depósito/base de operaciones de Envíos DosRuedas en Mar del Plata.

## Prefijos de ID de hallazgos, por fase de origen

| Prefijo | Fase que lo originó | Qué tipo de hallazgo es |
|---|---|---|
| `D-` / `DC-` | F2-1 (crítica de diseño/UX) | Problemas de experiencia de usuario en las páginas reales |
| `A11Y-` | F2-2 (accesibilidad) | Problemas de accesibilidad (WCAG) |
| `COPY-` | F2-3 (copy UX) | Problemas de redacción/jerga/CTAs |
| `MARCA-` | F2-4 (revisión de marca) | Inconsistencias de marca y afirmaciones sin respaldo |
| `CAMP-` | F3-1 (plan de campaña) | Acciones de marketing derivadas del plan |
| `CONT-` | F3-2 (contenidos) | Piezas de contenido y páginas nuevas propuestas |
| `GEO-` | F6 (visibilidad IA / GEO) | Problemas de visibilidad para buscadores y motores de IA |
| `REP-` | F7 (reputación) | Hallazgos sobre reseñas y gestión de reputación |
| `DS-` | F13 (sistema de diseño) | Discrepancias entre `DESIGN.md` y el código real |
| `LEGAL-` | F10-2 (revisión de contratos) | Riesgos legales en términos/privacidad — **no se convierten en `BL-xx`** sin validación profesional |
| `BL-` | F4-0 (backlog unificado) | El ítem de trabajo final, numerado, que agrupa uno o más de los prefijos de arriba |

**Por qué existen los prefijos de origen:** cada `BL-xx` cita en su columna "IDs de origen" de qué hallazgo(s) viene, para poder rastrear una decisión hasta el documento que la generó sin tener que releer todo. No se inventaron IDs `SEO-xx`/`COMP-xx` retroactivos para `F1-1`/`F1-2` porque esos documentos se publicaron sin ese sistema de IDs — es un gap conocido, no un error de esta memoria.

## Otras siglas usadas en los documentos F*

- **GBP**: Google Business Profile, la ficha de Google del negocio.
- **GA4**: Google Analytics 4, la herramienta de analítica pendiente de instrumentar (`BL-25`).
- **ICP**: perfil de cliente ideal (Ideal Customer Profile), definido en `F9-1-perfil-cliente-ideal.md`.
- **CRM**: en este proyecto, la planilla liviana `F9-4-crm.xlsx` (no un software de CRM dedicado).
- **GEO**: en el contexto de las Fases 6-16 (no confundir con geolocalización), "Generative Engine Optimization" — visibilidad del sitio para crawlers y agentes de IA (GPTBot, ClaudeBot, PerplexityBot, etc.), no solo para buscadores tradicionales.
