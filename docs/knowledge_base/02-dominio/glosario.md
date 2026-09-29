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
| **Friuli 1972** | Dirección del depósito/base de operaciones de Envíos DosRuedas en Mar del Plata. **No** es punto de retiro: el dueño lo negó explícitamente el 2026-09-28. |
| **E-Commerce Same Day** | Nombre comercial del servicio de depósito y fulfillment. Tarifa fija de `$6.000` a toda la ciudad. Es la nomenclatura que compra el cliente; "3PL" describe la operación, no el producto. |
| **DropOFF** | Entrega en la que el remitente trae el envío ya listo al depósito de Friuli 1972. Lleva `-20 %` sobre la tarifa final (`DROPOFF_DISCOUNT_PERCENT`) y aplica **solo al E-commerce 24HS** (planilla `01!E13`). |
| **Rango / franja horaria** | Ventana de 3 hs a elección del cliente para retiro y entrega. **No es una duración**: "entrega en 3 hs" sería una promesa falsa. Constantes separadas: `EXPRESS_WINDOW` y `EXPRESS_WINDOW_SHORT`. |
| **Bulto extra** | Lo que excede 40 × 40 cm o 5 kg. Se coordina con un extra **según el servicio**, sin monto fijo publicado. No confundir con `MAX_WEIGHT_KG` (15 kg, techo absoluto). ⚠️ El CSV del dueño dice 40 × 30 cm: conflicto abierto, el sitio sigue con 40 × 40. |
| **Rendición** | Entrega del dinero cobrado por contrareembolso al comercio. Plazo real: en el día, al día siguiente o semanal, **según acordado**. No hay garantía de rendición inmediata. |
| **E-Commerce 24HS** | Servicio de retiro hoy y entrega mañana. **Precio confirmado: `$3.800`/envío** (Matías, 2026-09-29), con **recolección gratis desde 10 envíos**. No confundir con "entrega en 24 horas": es un plazo de operación, no un tiempo de tránsito. El nombre es inconsistente en el sitio: "Next Day 24hs" en unas páginas, "E-Commerce 24HS" en otras. |
| **Periferia** | Envío **fuera de Mar del Plata**, cobrado a `$1.200` por km de ruta (`PERIPHERY_PRICE_PER_KM`) y cotizado aparte. **No hay lista de barrios** (planilla `01!E18`). No confundir con el excedente de 10 a 20 km (`$1.000`/`$700` por km). |
| **Termómetro verde** | Indicador de reputación de MercadoLibre. El 100 % de cumplimiento del límite de las 21 hs es lo que lo mantiene. No es un sello propio de DosRuedas. |
| **Picking por QR** | Modalidad de preparación de pedidos en el 3PL: el comercio escanea el código y el pedido sale del hub sin ambigüedad. Diferenciador operativo. **Ya está publicado** en `/servicios`, `/servicios/deposito-fulfillment` y `EmprendedoresFeatures`. |
| **Cobertura de Flex** | **Todo Mar del Plata, explícitamente no las zonas aledañas** (verbatim del dueño). Flex es más restrictivo que Express y LowCost: un destino en Camet o San Jacinto no es cliente de Flex. |
| **MailAmericas** | Cliente de e-commerce internacional, **2.500-4.000 envíos semanales**, satisfacción 10/10. Nombrado por el dueño en el CSV de mayo. **Documentado y sin publicar:** requiere autorización explícita y el volumen expone la capacidad operativa de la flota. |
| **Línea roja** | Lo que la empresa **no hace, no dice o no tolera bajo ninguna circunstancia**. El dueño definió tres por escrito. No son preferencias de estilo: son límites. |
| **"Preferimos decir que no podemos, a fallar"** | La tercera línea roja del dueño, y **la más valiosa**: autoriza a la empresa a rechazar un envío que no puede cubrir. Es el argumento de fiabilidad más fuerte del archivo, en un mercado donde todos prometen llegar siempre. **No está publicado.** |
| **"Una persona normal, trabajador"** | Definición de la voz de la marca (pregunta 30 del CSV), completa con *"un tono medio formal pero sin exagerar"*. Contrapeso importante: la escena visual es de alto contraste y la marca **no** es informal. No aligerar el diseño sin tocar también el copy. |
| **Prueba de laurreta** | Criterio de redacción derivado de la voz del dueño: *si no lo diría nadie al hablar, no lo escribe DosRuedas*. Filtra superlativos, jerga de agencia y frases largas. |

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
