# Issue Tracker Local — Envíos DosRuedas

> **Fuente:** `docs/agents/issue-tracker.md`, `docs/marketing/TASKS.md`, `docs/marketing/F4-0-backlog.md`.
> **Formato:** Markdown en `docs/agents/issue-tracker.md` (este archivo) + backlog maestro en `docs/marketing/`.

---

## 1. Flujo de Estados (State Machine)

```mermaid
stateDiagram-v2
    [*] --> needs-triage: Nuevo issue
    needs-triage --> needs-info: Falta info del dueño
    needs-triage --> ready-for-agent: Spec completa
    needs-triage --> wontfix: Fuera de scope / duplicado
    needs-info --> ready-for-agent: Info recibida
    needs-info --> wontfix: Dueño descarta
    ready-for-agent --> ready-for-human: Requiere decisión diseño/negocio/legal
    ready-for-agent --> done: PR merged + verificado
    ready-for-human --> ready-for-agent: Decisión recibida
    ready-for-human --> wontfix: Dueño cancela
    done --> [*]
    wontfix --> [*]
```

---

## 2. Etiquetas de Estado (Obligatorias)

| Label | Descripción | Color Sugerido |
|---|---|---|
| `needs-triage` | Recién llegado, sin revisar | 🟡 Amarillo |
| `needs-info` | Falta información del dueño / stakeholder | 🟠 Naranja |
| `ready-for-agent` | Especificación completa, listo para codificar | 🟢 Verde |
| `ready-for-human` | Requiere decisión humana (diseño, negocio, legal) | 🔵 Azul |
| `wontfix` | No se hará (fuera de scope, duplicado, obsoleto) | ⚫ Gris |

> **Regla estricta:** Todo issue debe tener **exactamente una** de estas labels en todo momento.

---

## 3. Estructura de un Issue (Plantilla)

```markdown
## Issue: [Título Descriptivo]

**Labels:** `needs-triage` | `needs-info` | `ready-for-agent` | `ready-for-human` | `wontfix`

### Contexto
- **Origen:** [Dueño / Agente / Auditoría / Usuario / Bug report]
- **Área:** [UI / Tarifas / SEO / Performance / Accesibilidad / Infra / Docs]
- **Archivos Relacionados:** `src/app/...`, `src/components/...`, `prisma/...`, `docs/...`

### Descripción del Problema
[Qué pasa, por qué es problema, impacto en usuario/negocio]

### Criterio de Aceptación (Definition of Done)
- [ ] Check 1
- [ ] Check 2
- [ ] Tests pasan / Build verde / Lint limpio

### IDs de Origen (Trazabilidad)
- `DS-XX` (Design System)
- `COPY-XX` (UX Copy)
- `MARCA-XX` (Marca)
- `BL-XX` (Backlog unificado)
- `GEO-XX` (Visibilidad IA)
- `LEGAL-XX` (Legal — no se convierte en BL sin validación pro)

### Nivel de Verificación Requerido
- [ ] N0 (Docs)
- [ ] N1 (Estilo/Copy)
- [ ] N2 (Componente/Lógica)
- [ ] N3 (Crítico/Transversal)

### Notas del Agente / Dueño
[Comentarios, decisiones, bloqueos]
```

---

## 4. Backlog Maestro (`docs/marketing/TASKS.md`)

Tablero maestro de sprints y tareas. Cada fila = un `BL-xx` con:

| Columna | Contenido |
|---|---|
| **ID** | `BL-XX` (numérico, secuencial) |
| **Título** | Descripción corta accionable |
| **Estado** | `needs-triage` / `needs-info` / `ready-for-agent` / `ready-for-human` / `wontfix` / `done` |
| **Área** | UI / Tarifas / SEO / Performance / Accesibilidad / Infra / Docs |
| **Nivel Verif.** | N0 / N1 / N2 / N3 |
| **IDs Origen** | `DS-XX`, `COPY-XX`, `MARCA-XX`, `GEO-XX`, `LEGAL-XX` |
| **Sprint** | `Sprint 1` / `Sprint 2` / `Backlog` / `Icebox` |
| **Owner** | `agent` / `human` / `dueño` |
| **PR** | Link al PR cuando `ready-for-agent` → `done` |

---

## 4.1 Backlog Detallado (`docs/marketing/F4-0-backlog.md`)

Especificaciones completas por `BL-xx`:

```markdown
## BL-XX: [Título]

**IDs de Origen:** `DS-XX`, `COPY-XX`, `MARCA-XX`
**Área:** [UI / Tarifas / SEO / ...]
**Nivel Verif.:** N2

### Especificación
[Detalle técnico exacto: qué archivos, qué props, qué tokens, qué primitivas]

### Criterio de Aceptación
- [ ] Check técnico 1
- [ ] Check visual 2
- [ ] Test 3

### Prompt de Remediación
Ver `docs/agents/prompts-remediacion.md#XX`
```

---

## 5. Flujo de Trabajo Semanal (Triage)

### Lunes — Triage de Entrada
1. Revisar issues nuevos en `needs-triage`.
2. Asignar label correcta (`needs-info`, `ready-for-agent`, `wontfix`).
3. Si `needs-info`: preguntar al dueño / stakeholder y mover a `needs-info`.
4. Si `ready-for-agent`: asegurar que tiene spec completa en `F4-0-backlog.md` y prompt en `prompts-remediacion.md`.

### Miércoles — Revisión de `ready-for-human`
1. Revisar issues bloqueados esperando decisión humana.
2. Recordar al dueño / stakeholder si lleva > 48hs sin respuesta.
3. Si decisión recibida → mover a `ready-for-agent` (o `wontfix`).

### Viernes — Cierre de Sprint
1. Verificar issues en `done` (PR merged + verificación N3 completa).
2. Mover `wontfix` confirmados.
3. Actualizar `TASKS.md` (estado, sprint, PR link).
4. Preparar triage del lunes siguiente.

---

## 6. Reglas de Oro

| Regla | Descripción |
|---|---|
| **Una label de estado** | Todo issue tiene exactamente una de: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. |
| **Trazabilidad obligatoria** | Todo `BL-xx` cita sus `IDs de Origen` (`DS-XX`, `COPY-XX`, etc.). |
| **Definition of Done en issue** | No se marca `done` sin checks explícitos (tests, build, lint, verificación visual). |
| **Nivel de verificación declarado** | Cada issue declara su nivel (N0-N3) y el agente lo respeta. |
| **No renumerar BLs** | `BL-01` a `BL-39` fijos; nuevos al final (`BL-40`+). Renumerar rompe referencias cruzadas. |
| **LEGAL-XX no → BL-xx** | Hallazgos legales esperan validación profesional antes de entrar al backlog de código. |
| **Prompt por BL** | Cada `BL-xx` en `ready-for-agent` tiene su prompt en `docs/agents/prompts-remediacion.md#XX`. |

---

## 7. Integración con Agentes

```markdown
## Al Iniciar Tarea (Agente)

1. Leer issue asignado (`ready-for-agent`).
2. Leer spec en `F4-0-backlog.md` y prompt en `prompts-remediacion.md`.
3. Leer contexto obligatorio:
   - `docs/knowledge_base/00-proyecto/identidad-negocio.md`
   - `docs/knowledge_base/01-diseno/design-system.md` (o archivo temático)
   - `docs/knowledge_base/01-diseno/anti-patrones.md`
   - `docs/knowledge_base/03-operaciones/comandos-verificacion.md`
4. Declarar nivel de verificación (N1/N2/N3).
5. Ejecutar → Verificar (solo chequeos del nivel) → Iterar → Cerrar.

## Al Cerrar (Agente)

1. Marcar checks en issue.
2. Mover label a `done`.
3. Actualizar `TASKS.md`: estado `done`, link PR, sprint.
4. Si aplica, marcar ítem en `DESIGN.md` §11 y §15 (mismo PR).
```