# TASKS.md

Generado a partir de `docs/marketing/F4-0-backlog.md` y del resto de los documentos `F*` de `docs/marketing/`. Una tarea por ítem `BL-xx` del backlog, más las tareas que no son de código (decisiones del dueño, ficha de Google, entrevistas, propuestas comerciales). Se actualiza cada vez que un ítem cambia de estado — ver §3, la rutina de cierre de sesión.

**Estado de esta lista:** generada el 2026-09-18, a partir del backlog tal como quedó después de la Fase 13. Ningún ítem de código fue confirmado como mergeado en esta sesión (no hay acceso al repo real en GitHub, solo a un clon local) — el estado "Specs listos" describe qué hay preparado, no qué está en producción.

---

## 1. Tareas de código (una por ítem del backlog)

Leyenda de estado: `Pendiente` (nada hecho todavía) · `Specs listos` (tiene handoff en `F4-1-specs/` y prompt en `F4-2-prompts/`, no confirmado como mergeado) · `Bloqueado` (depende de una decisión del dueño o de otro ítem antes de poder arrancar).

### Sprint 1 — bugs de indexación y conversión

| Tarea | BL | Estado | IDs de origen | Bloqueado por |
|---|---|---|---|---|
| Redirecciones 301 + bloqueo del duplicado en Vercel | BL-01 | Specs listos | DC (D-3), CAMP-04 | — |
| Metadata global, horarios reales en JSON-LD | BL-02 | Specs listos | D-9, CAMP-04, MARCA-01, GEO-02 | Horario real (owner) |
| Constantes únicas de promesa de tiempo/umbral | BL-03 | Specs listos | DC-03, DC-13, CAMP-06 | Promesa y umbral reales (owner) |
| Contadores con valor final en SSR | BL-04 | Specs listos | DC-07/08/09, A11Y-09/10, CAMP-07 | — |
| Unificar email de contacto público | BL-19 | Specs listos | MARCA-02 | Email real (owner) |

### Sprint 2 — SEO técnico + accesibilidad crítica del flujo de conversión

| Tarea | BL | Estado | IDs de origen | Bloqueado por |
|---|---|---|---|---|
| Un CTA primario por vista | BL-05 | Pendiente | DC-02/14/15/18/20/23, CAMP-08 | — |
| Menú móvil accesible | BL-06 | Pendiente | A11Y-04 | — |
| `aria-live` en resultado de cotizadores | BL-07 | Pendiente | A11Y-11, COPY-10 | BL-03 |
| Contraste de texto y foco sobre fondos azules | BL-08 | Pendiente | A11Y-01/02/03 | — |
| Formulario del cotizador arriba del pliegue | BL-27 | Pendiente | DC-01, DC-01b, DC-12, CAMP-09 | BL-07 |

### Sprint 3 — resto de accesibilidad

| Tarea | BL | Estado | IDs de origen |
|---|---|---|---|
| `aria-label` + alternativa textual en mapa Leaflet | BL-09 | Pendiente | A11Y-05 |
| Kill-switch de `prefers-reduced-motion` + reemplazo de `animate-bounce` | BL-10 | Pendiente | A11Y-07/08, DC-34 |
| Objetivos táctiles ≥ 44px | BL-11 | Pendiente | DC-30 |
| `aria-label` en enlaces de WhatsApp/teléfono | BL-17 | Pendiente | A11Y-12 |
| `aria-selected` dinámico + `aria-label` en botón eliminar fila | BL-18 | Pendiente | A11Y-06/13 |

### Sprint 4 — copy y afirmaciones

| Tarea | BL | Estado | IDs de origen | Bloqueado por |
|---|---|---|---|---|
| Quitar jerga de cliente, reformular "SLA garantizado" | BL-12 | Pendiente | COPY-01/02/03/04, DC-19 | — |
| Unificar CTAs al glosario de F2-3 | BL-13 | Pendiente | COPY-05/06/07 | — |
| Quitar afirmaciones absolutas sin respaldo | BL-14 | **Bloqueado** | F2-4 tabla, DC-32 | Antigüedad real, "+50k envíos", homologación Flex, badge 3PL (owner) |
| Botones de WhatsApp en amarillo de marca | BL-15 | Pendiente | DC-25, CAMP-20 | — |
| Reseñas: "N reseñas verificadas" en vez de número fijo | BL-16 | Pendiente | DC-10, CAMP-17 | — |

### Sprint 5 — precios y páginas nuevas (parte 1)

| Tarea | BL | Estado | IDs de origen | Bloqueado por |
|---|---|---|---|---|
| `docs/contexto/precios.md` + carga en `PriceRange` | BL-32 | **Bloqueado** | DC-24, D-12, CAMP-19 | Precio real Emprendedores/Flex/3PL (owner) |
| Página `/servicios/envios-contrareembolso` | BL-20 | Pendiente | CONT-02, CAMP-10 | BL-32, BL-14 |
| Página `/guias/envios-flex-mar-del-plata` | BL-21 | Pendiente | CONT-01, CAMP-11 | — |
| Eventos GA4 + UTM + helper de WhatsApp | BL-25 | Pendiente | CAMP-01/02/03/05 | — |

### Sprint 6 — depósito, home, trazabilidad, contacto

| Tarea | BL | Estado | IDs de origen | Bloqueado por |
|---|---|---|---|---|
| Rename `/servicios/plan-emprendedores` → `/servicios/deposito-fulfillment` | BL-22 | Pendiente | CONT-03, CAMP-13, DC-22 | BL-32 |
| Home: orden canónico + bloque de segmentos | BL-26 | Pendiente | DC-04/06, D-4, CAMP-14 | BL-04, BL-05 |
| Trazabilidad de cotización (ID visible + persistencia) | BL-28 | Pendiente | DC-05 | BL-25 |
| Contacto: mapa embebido, H1, formulario reducido | BL-30 | Pendiente | DC-26/27 | — |

### Sprint 7 — páginas nuevas (parte 2)

| Tarea | BL | Estado | IDs de origen | Bloqueado por |
|---|---|---|---|---|
| Página `/servicios/empresas-cuenta-corriente` | BL-23 | Pendiente | CAMP-15 | — |
| Página `/cobertura` | BL-24 | Pendiente | CAMP-16 | — |
| FAQ: preguntas reales + buscador | BL-29 | **Bloqueado** | DC-28/29 | Factura A/C, qué no se transporta (owner) |
| Página Flex: tarifas arriba del scroll | BL-31 | Pendiente | CAMP-12, DC-21 | BL-12 |
| Casos de clientes (3, con foto) | BL-33 | Pendiente | CAMP-18 | — |

### Sprint 8 — estético y deuda documental

| Tarea | BL | Estado | IDs de origen | Bloqueado por |
|---|---|---|---|---|
| Logo vectorial ≥ 120px | BL-34 | Pendiente | DC-11 | — |
| `h-screen` → `min-h-[100dvh]` | BL-35 | Pendiente | DC-31 | — |
| Deuda visual de DESIGN.md §11 — **revisar contra F13 antes de tomar** | BL-36 | Pendiente | DESIGN.md §11, F13 §1 | — |
| Decidir tipografía de cuerpo | BL-37 | **Bloqueado** | DC-33, D-11 | Decisión de tipografía (owner) |
| Crear `PROJECT.md` | BL-38 | Pendiente | MARCA-03, D-12 | — |
| Corregir `SchemaMarkup.tsx` antes de conectarlo | BL-39 | Pendiente | MARCA, F2-2 | BL-14 |

### Sprint 9 — GEO (agregado tras Fases 6-7)

| Tarea | BL | Estado | IDs de origen | Bloqueado por |
|---|---|---|---|---|
| Sección de `llms.txt` orientada a clientes | BL-40 | Pendiente | GEO-01 | — |
| `X-Robots-Tag: noindex` en previews de Vercel | BL-42 | Pendiente | GEO-04 | — |
| `BreadcrumbList` en JSON-LD | BL-41 | Pendiente | GEO-03 | BL-39 |

### Sprint 10 — sistema de diseño (agregado tras Fase 13)

| Tarea | BL | Estado | IDs de origen | Bloqueado por |
|---|---|---|---|---|
| `HeroProceduralBackground` sin `prefers-reduced-motion` | BL-46 | Pendiente | DS-05 | — |
| Corregir colores en prompt de herramienta interna de imágenes | BL-47 | Pendiente | DS-06 | — |
| `InputField.tsx` sin uso — integrar o retirar | BL-44 | Pendiente | DS-03 | — |
| `LogisticaNetworkCanvas.tsx` sin uso — integrar o retirar | BL-45 | Pendiente | DS-04 | — |
| 6 de 7 componentes insignia sin uso — integrar o retirar | BL-43 | **Bloqueado** | DS-01, DS-02 | Decisión Opción A/B (owner) |

## 2. Tareas que no son de código

| Tarea | Fuente | Estado |
|---|---|---|
| Completar categorías, horario real y 20 fotos de la ficha de Google Business Profile | F4-0 §5 | Pendiente |
| Publicar el calendario de redes de octubre 2026 (12 piezas) — bloqueado por el brand kit de Canva sin confirmar | `F11-1-calendario-2026-10.md` | Bloqueado (brand kit Canva) |
| Confirmar o crear el brand kit de Envíos DosRuedas en Canva | `F5-1-piezas.md`, `F11-1` §6 | Bloqueado (conector Canva sin verificar en esta sesión) |
| Aprobar el calendario de octubre 2026 (contenido y fechas) | `F11-1-calendario-2026-10.md` §6 | Pendiente decisión del dueño |
| Programa de reseñas: pedir reseña en los 3 momentos de F3-1/F7, responder las 9 reseñas reales sin respuesta | `F7-reputacion.md` §6bis | Pendiente (dueño) |
| Prospección B2B: contactar a los 19 prospectos marcados Top20 en `F9-1-prospectos.xlsx` | `F9-1-perfil-cliente-ideal.md`, `F9-2-outreach.md` | Pendiente (dueño) |
| 10 entrevistas + test de usabilidad + encuesta de WhatsApp de `F8-1` | `F8-1-plan-investigacion.md` | Pendiente — necesita que el dueño reclute a los participantes |
| Completar y enviar las 3 propuestas comerciales (`PROP-01/02/03`) con precios reales | `F10-1-propuestas/` | Bloqueado (faltan precios y condiciones — `{A DEFINIR POR EL DUEÑO}`) |
| Validación legal de `/terminos-y-condiciones` y `/politica-de-privacidad` con un abogado | `F10-2-contratos.md` (LEGAL-01, LEGAL-02) | Pendiente (dueño / profesional) |
| Definir presupuesto de Google Ads / Meta Ads, recién después de BL-25 y Sprint 1 | `F11-2-pauta-2026-10.md` | Bloqueado (BL-25, Sprint 1) |
| Aprobar la activación del reporte semanal como tarea programada | `F14-1-definicion-reporte.md` §5 | Pendiente decisión del dueño |
| Responder las preguntas pendientes de la tabla de `F4-0-backlog.md` §4 (11 preguntas) | `F4-0-backlog.md` §4 | Pendiente (dueño) |

## 3. Rutina de cierre de sesión

Prompt corto para que cualquier agente, al terminar una sesión de trabajo sobre este proyecto, actualice este archivo y registre decisiones nuevas:

> Antes de terminar: (1) marcá en `TASKS.md` cualquier ítem que haya cambiado de estado en esta sesión (Pendiente → Specs listos → Mergeado, o Bloqueado → Pendiente si se resolvió la pregunta que lo bloqueaba); (2) si el dueño tomó alguna decisión nueva durante la sesión, agregala a `memory/decisiones.md` con fecha y motivo; (3) si se generó un documento `F*` nuevo, sumalo al índice de `memory/indice-documentos.md` con una línea de qué contiene.

---

## 4. Supuestos y lo que no se pudo verificar

- Ningún ítem de código fue confirmado como mergeado en el repo real — esta sesión trabajó sobre un clon local sin acceso a GitHub en vivo. "Specs listos" describe preparación, no producción.
- El punto 4 de esta fase (propuesta como pull request aparte) no se pudo cumplir tal como lo pide el enunciado: esta sesión no tiene forma de abrir un pull request en el repositorio real (`github.com/bomberoxenviosdosruedas/02enviosdosruedas`), solo de escribir los archivos en el clon local. `TASKS.md`, la carpeta `memory/` y el cambio a `CLAUDE.md` quedan listos como si fueran el contenido de esa PR — alguien con acceso al repo real tiene que abrirla a mano.
