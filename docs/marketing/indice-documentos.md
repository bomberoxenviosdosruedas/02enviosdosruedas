# Índice de documentos F*

**Envíos DosRuedas** · memoria del proyecto. Una línea por documento — para saber cuál abrir sin tener que releer todo. Actualizar cada vez que se genera un documento nuevo (ver la rutina de cierre de sesión en `TASKS.md` §3).

## Fase 1 — diagnóstico competitivo (fuera de `docs/marketing/`, nomenclatura previa)

- `brief-competitivo-dosruedas.html` (fuera de `docs/marketing/`) — brief competitivo contra MMDP, DAR Logística, Mar del Motos y Uber Envíos; es la fuente que citan `F7-reputacion.md` y `F14-1-definicion-reporte.md` §4 como el set de competidores de referencia. No sigue la nomenclatura `F1-1`/`F1-2` de las fases posteriores — es un gap conocido, documentado en `F4-0-backlog.md` (nota sobre SEO-xx/COMP-xx).

## Fase 2 — auditoría de UX, accesibilidad, copy y marca

- `F2-1-design-critique.md` — crítica de diseño y UX de las 8 pantallas reales del sitio; origen de los IDs `DC-xx`/`D-xx`.
- `F2-2-accesibilidad.md` — auditoría de accesibilidad (WCAG); origen de los IDs `A11Y-xx`.
- `F2-3-ux-copy.md` — auditoría de copy y CTAs, glosario de verbos por acción; origen de los IDs `COPY-xx`.
- `F2-4-brand-review.md` — revisión de marca y tabla de afirmaciones sin respaldo; origen de los IDs `MARCA-xx` y de la regla "solo afirmaciones respaldadas" que rige las Fases 6-16.

## Fase 3 — plan de campaña y contenidos

- `F3-1-campaign-plan.md` — plan de campaña, objetivos, calendario de 9 semanas, responsables sugeridos (incluye a Matías, el dueño); origen de los IDs `CAMP-xx`.
- `F3-2-contenidos.md` — piezas de contenido y guías propuestas; origen de los IDs `CONT-xx`.

## Fase 4 — backlog y handoff a desarrollo

- `F4-0-backlog.md` — **el documento central del proyecto**: backlog unificado (`BL-01` a `BL-47`), sprints, bloqueos por pregunta del dueño, y lo que no es código.
- `F4-1-specs/` — specs de handoff para desarrollo del Sprint 1 (`BL-01`, `BL-02`, `BL-03`, `BL-04`, `BL-19`).
- `F4-2-prompts/` — prompts de código listos para ejecutar del mismo Sprint 1, más `00-arranque.md` y `99-revision.md`.

## Fase 5 — piezas gráficas y reporte

- `F5-1-piezas.md` — plantillas de piezas para Canva, bloqueadas por el brand kit sin confirmar en la cuenta conectada.
- `F5-2-reporte-plantilla.md` — plantilla de reporte de resultados, reemplazada como rutina semanal por `F14-1-definicion-reporte.md` (F5-2 queda como plantilla mensual/de referencia histórica, no se usa más como reporte activo).

## Fase 6-7 — visibilidad IA y reputación

- `F6-visibilidad-ia.md` — auditoría de visibilidad para crawlers tradicionales y de IA (GEO); origen de los IDs `GEO-xx`.
- `F7-reputacion.md` — auditoría de reseñas reales, protocolo de respuesta y calendario de pedido de reseñas; origen de los IDs `REP-xx`.

## Fase 8 — investigación con clientes

- `F8-1-plan-investigacion.md` — plan de 10 entrevistas + test de usabilidad + encuesta de WhatsApp; **no hay `F8-2-sintesis.md` todavía** porque depende de que esas entrevistas se hagan primero.

## Fase 9 — motor comercial B2B

- `F9-1-perfil-cliente-ideal.md` — perfil de cliente ideal, construido a partir de los 10 clientes reales del sitio; sin datos personales.
- `F9-1-prospectos.xlsx` (fuera de `docs/marketing/`, en `private_no_repo/` por tener datos de prospectos) — 43 prospectos reales, 19 marcados como prioritarios, con mensajes de outreach personalizados.
- `F9-2-outreach.md` — plantillas de outreach por tipo de prospecto y secuencia de seguimiento de 4 contactos.
- `F9-3-respuesta-leads.md` — protocolo de respuesta a leads entrantes, con tiempos objetivo y respuestas modelo.
- `F9-4-crm.xlsx` (fuera de `docs/marketing/`, en `private_no_repo/` por tener datos de clientes/prospectos) — CRM liviano en Excel, 6 hojas, con las oportunidades ya cargadas.
- `F9-4-crm-guia.md` — guía de uso del CRM anterior, sin datos personales.

## Fase 10 — cierre de cuentas corporativas / 3PL

- `F10-1-propuestas/` — 3 propuestas comerciales tipo (`PROP-01` cuenta corriente PyME, `PROP-02` operación Flex seller, `PROP-03` servicio 3PL/depósito), en `.md`, `.docx` y `.pdf`, con placeholders de precio pendientes del dueño.
- `F10-2-contratos.md` — revisión de términos y política de privacidad contra el código real; origen de `LEGAL-01`/`LEGAL-02` (no son `BL-xx`, requieren validación profesional).

## Fase 11 — operación continua de contenido y pauta

- `F11-1-calendario-2026-10.md` — calendario de contenido de octubre 2026, 12 piezas, bloqueado por el mismo brand kit de Canva que `F5-1`.
- `F11-2-pauta-2026-10.md` — plan de pauta publicitaria, con la recomendación explícita de no pautar todavía (faltan `BL-25` y el Sprint 1 mergeados).

## Fase 12 — datos del cotizador

- `F12-1-diccionario.md` — diccionario de datos real (esquema Prisma) y respuesta a la pregunta bloqueante: el sistema no guarda ninguna cotización hoy.
- `F12-1-consultas.sql` — consultas de análisis, comentadas, listas para cuando exista la tabla `Quote` propuesta.

## Fase 13 — auditoría del sistema de diseño

- `F13-design-extraido.md` — extracción cruda de tokens, componentes y utilidades CSS directo del código, sin comparar contra `DESIGN.md`.
- `F13-design-system.md` — comparación contra `DESIGN.md` §11 (varios puntos de esa autocrítica no se sostuvieron) y hallazgos nuevos `DS-01` a `DS-06`, el más importante siendo que 6 de los 7 componentes insignia del sistema de diseño no se usan en ninguna página real.

## Fase 14 — ritmo de gestión

- `F14-1-definicion-reporte.md` — definición fija del reporte semanal (10 indicadores, fuentes, umbrales de alerta); todavía sin ningún reporte real generado (`F14-reporte-AAAA-SS.md`) porque no hay datos de ninguna semana.
- `TASKS.md` (raíz del repo, no en `docs/marketing/`) — una tarea por ítem del backlog, más las tareas que no son de código.
- `memory/` (esta carpeta) — glosario, quién es quién, decisiones y este mismo índice.

## Lo que falta (Fases 15-16, ver el cierre en `F4-0-backlog.md` y el reporte final de esta sesión)

- `F15-1-reactivacion.md` y `F15-2` (cobranza) — no se empezaron: necesitan historial real de envíos por cliente y de cuentas corrientes, que no está disponible en esta sesión.
- `F16` (empaquetar como plugin propio) y el bloque opcional de Stitch — deliberadamente diferidos, ver el reporte de cierre de esta sesión.
