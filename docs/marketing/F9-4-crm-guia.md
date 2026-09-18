# F9-4 — Guía del CRM liviano en planilla

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `F9-1-prospectos.xlsx`, `F9-3-respuesta-leads.md` (etapas y criterios de calificación).

El CRM en sí (`F9-4-crm.xlsx`) **vive fuera del repositorio público**, en `private_no_repo/F9-4-crm.xlsx` — tiene nombres de negocios y, con el uso, va a tener datos de contacto reales, así que no corresponde que esté en un repo público (regla 9 del bloque base). Esta guía sí va al repo porque no contiene ningún dato de cliente o prospecto puntual.

---

## 1. Qué hojas tiene y para qué sirve cada una

| Hoja | Para qué sirve |
|---|---|
| **Contactos y empresas** | Una fila por negocio — cliente actual o prospecto. Ya viene cargada con los 10 clientes actuales conocidos (nombres tal como los muestra el sitio) y los 43 prospectos de `F9-1-prospectos.xlsx`. |
| **Oportunidades** | Una fila por negociación en curso. Ya viene con las 19 oportunidades de los prospectos prioritarios en etapa "nuevo", listas para avanzar a medida que se los contacte. |
| **Actividades** | Registro de cada interacción real (mensaje, llamada, reunión) — vacía hasta que empiece a usarse. |
| **Próximos pasos** | Lista de tareas pendientes por contacto/oportunidad, con fecha límite y si ya se hizo. |
| **Tablero** | Números que se recalculan solos a partir de lo cargado en "Oportunidades" (ver §3). |
| **Rutina semanal** | Los 15 minutos semanales sugeridos y el prompt corto para pegar notas de una llamada y que una IA devuelva qué actualizar. |

## 2. Etapas (las mismas que ya define `F9-3-respuesta-leads.md`)

`nuevo` → `contactado` → `calificado` → `propuesta enviada` → `prueba en curso` → `cliente activo` → `perdido` (con motivo de pérdida en la columna correspondiente de "Oportunidades").

## 3. Campos mínimos por oportunidad

Segmento, servicio, volumen mensual estimado, origen (usa los mismos valores que los parámetros UTM ya definidos en `F3-1-campaign-plan.md` §8.2, para que el origen de una oportunidad se pueda cruzar más adelante con la métrica de marketing), último contacto, próximo paso y su fecha, y responsable.

## 4. Duplicados

Se revisaron los 43 prospectos contra los 10 clientes actuales y no se encontró ningún duplicado por nombre — no hizo falta marcar ninguno. Si en el futuro se cargan más prospectos a mano, conviene revisar por nombre antes de agregar una fila nueva, para no terminar con el mismo negocio dos veces.

## 5. Qué falta para que el Tablero muestre números reales

El Tablero ya tiene las fórmulas armadas (oportunidades por etapa, tasa de conversión, oportunidades sin próximo paso), pero hoy la mayoría da 0 o vacío porque las 19 oportunidades cargadas están todas en etapa "nuevo" — es el punto de partida, no un error. Dos indicadores necesitan más que solo avanzar etapas: "tiempo promedio por etapa" necesita que se registre la fecha de cada cambio de etapa en la hoja "Actividades", y "clientes sin actividad en 30 días" necesita fechas reales en la columna "Último contacto" — ninguno de los dos se puede calcular todavía con datos inventados, así que quedan como fórmulas listas pero sin resultado hasta que haya uso real.

---

## 6. Supuestos y lo que no se pudo verificar

- Las 19 oportunidades cargadas son un punto de partida a partir de la prospección de `F9-1`, no negociaciones reales en curso.
- Los 10 clientes actuales se cargaron solo con el nombre y el rubro que se pudo verificar en `F9-1-perfil-cliente-ideal.md` — no hay datos de contacto, volumen ni antigüedad real de ninguno, porque no se adjuntó una planilla de clientes real.
