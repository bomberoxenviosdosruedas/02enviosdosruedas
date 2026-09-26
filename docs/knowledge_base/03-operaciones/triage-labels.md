# Triage Labels — Envíos DosRuedas

> **Fuente:** `docs/agents/triage-labels.md`, `docs/marketing/TASKS.md`.
> **Mapeo 1:1** entre labels de triage y estados del backlog maestro.

---

## 1. Labels Canónicos (5 Estados)

| Label | Descripción | Próxima Acción | Color | Emoji |
|---|---|---|---|---|
| `needs-triage` | Recién llegado, sin revisar | Triage semanal (Lunes) | 🟡 Amarillo | 📥 |
| `needs-info` | Falta información del dueño / stakeholder | Preguntar y esperar respuesta | 🟠 Naranja | ❓ |
| `ready-for-agent` | Especificación completa, listo para codificar | Asignar a agente / crear PR | 🟢 Verde | ✅ |
| `ready-for-human` | Requiere decisión humana (diseño, negocio, legal) | Esperar feedback del dueño | 🔵 Azul | 👤 |
| `wontfix` | No se hará (fuera de scope, duplicado, obsoleto) | Cerrar | ⚫ Gris | 🚫 |

---

## 2. Mapeo a `docs/marketing/TASKS.md`

| Columna `Estado` en TASKS.md | Label GitHub / Local |
|---|---|
| `needs-triage` | `needs-triage` |
| `needs-info` | `needs-info` |
| `ready-for-agent` | `ready-for-agent` |
| `ready-for-human` | `ready-for-human` |
| `wontfix` | `wontfix` |
| `done` | *(sin label — issue cerrado)* |

> **Regla:** La columna `Estado` en `TASKS.md` **siempre** refleja la label actual. Sincronizar en cada movimiento.

---

## 3. Transiciones Válidas (State Machine)

```mermaid
stateDiagram-v2
    [*] --> needs-triage
    needs-triage --> needs-info: "Falta info del dueño"
    needs-triage --> ready-for-agent: "Spec completa"
    needs-triage --> wontfix: "Fuera de scope / duplicado"
    needs-info --> ready-for-agent: "Info recibida"
    needs-info --> wontfix: "Dueño descarta"
    ready-for-agent --> ready-for-human: "Requiere decisión humano"
    ready-for-agent --> done: "PR merged + verificado N3"
    ready-for-human --> ready-for-agent: "Decisión recibida"
    ready-for-human --> wontfix: "Dueño cancela"
    done --> [*]
    wontfix --> [*]
```

### Transiciones Prohibidas
| Desde | Hacia | Por Qué |
|---|---|---|
| `needs-triage` | `done` | No hay spec ni verificación |
| `needs-info` | `done` | No hay spec completa |
| `ready-for-agent` | `needs-triage` | Regresión de estado |
| `ready-for-human` | `needs-triage` | Regresión de estado |
| `wontfix` | *cualquiera* | Estado terminal |
| `done` | *cualquiera* | Estado terminal |

---

## 4. Políticas por Label

### `needs-triage` (Entrada)
- **Tiempo máx en este estado:** 7 días (triage semanal los lunes).
- **Acción del triage:**
  1. ¿Tiene contexto suficiente? → `ready-for-agent` (crear spec en `F4-0-backlog.md` + prompt en `prompts-remediacion.md`).
  2. ¿Falta info del dueño? → `needs-info` (preguntar y asignar a dueño).
  3. ¿Fuera de scope / duplicado / obsoleto? → `wontfix` (documentar motivo).

### `needs-info` (Bloqueado por Info)
- **Tiempo máx:** 14 días (recordatorio a dueño a los 7 días).
- **Responsable:** Dueño / Stakeholder.
- **Al recibir info:** Mover a `ready-for-agent` (completar spec si faltaba).

### `ready-for-agent` (Listo para Codificar)
- **Requisitos de entrada:**
  - [ ] Spec completa en `docs/marketing/F4-0-backlog.md` (`BL-xx`).
  - [ ] Prompt de remediación en `docs/agents/prompts-remediacion.md#XX`.
  - [ ] Nivel de verificación declarado (N1/N2/N3).
  - [ ] IDs de origen citados (`DS-XX`, `COPY-XX`, `MARCA-XX`, `GEO-XX`).
- **Salida:** PR abierto → review → merge → `done` (tras verificación nivel declarado).

### `ready-for-human` (Bloqueado por Decisión)
- **Casos típicos:** Decisión de diseño (UI/UX), decisión de negocio (precios, scope), validación legal (LEGAL-XX), aprobación de copy sensible.
- **Tiempo máx:** 7 días (recordatorio a los 3 días).
- **Responsable:** Dueño / Stakeholder / Legal.
- **Al recibir decisión:** Mover a `ready-for-agent` (actualizar spec si cambió) o `wontfix`.

### `wontfix` (Cerrado sin Hacer)
- **Motivos válidos:** Fuera de scope actual, duplicado de otro issue, obsoleto (supersedido por otra decisión), dueño descarta explícitamente.
- **Documentación obligatoria:** Comentario en issue con motivo exacto.
- **No reabrir:** Si el contexto cambia, crear issue nuevo referenciando el `wontfix` anterior.

### `done` (Completado)
- **Criterios:** PR merged + verificación del nivel declarado (N1/N2/N3) pasada + tests/build/lint según nivel.
- **Post-merge:** Actualizar `TASKS.md` (estado `done`, link PR, sprint). Marcar en `DESIGN.md` §11 y §15 si aplica (mismo PR).

---

## 5. Sincronización `TASKS.md` ↔ Labels

| Evento | Acción en `TASKS.md` |
|---|---|
| Issue creado | Agregar fila con `Estado: needs-triage` |
| Label → `needs-info` | Actualizar `Estado: needs-info` |
| Label → `ready-for-agent` | Actualizar `Estado: ready-for-agent`, agregar `BL-xx` si nuevo |
| Label → `ready-for-human` | Actualizar `Estado: ready-for-human` |
| Label → `wontfix` | Actualizar `Estado: wontfix`, agregar motivo en columna `Notas` |
| PR merged + verificado | Actualizar `Estado: done`, agregar `PR: #XXX`, `Sprint: N` |

> **Automatización sugerida:** GitHub Actions / script local que sincronice labels ↔ `TASKS.md` en cada push/PR.

---

## 6. Quick Reference para Agentes

| Si el issue tiene... | Tú debes... |
|---|---|
| `needs-triage` | **No tocar.** Esperar triage del lunes. |
| `needs-info` | **No tocar.** Esperar info del dueño (o preguntar si eres el dueño). |
| `ready-for-agent` | **Leer spec + prompt**, declarar nivel N1/N2/N3, codificar, verificar, PR. |
| `ready-for-human` | **No tocar código.** Esperar decisión (o dar feedback si eres el decisor). |
| `wontfix` | **Ignorar.** No reabrir sin crear issue nuevo. |
| `done` | **Celebrar.** 🎉 |

---

## 7. Referencias

- **Issue Tracker completo:** `docs/knowledge_base/03-operaciones/issue-tracker.md`
- **Backlog Maestro:** `docs/marketing/TASKS.md`
- **Backlog Detallado:** `docs/marketing/F4-0-backlog.md`
- **Prompts Remediación:** `docs/agents/prompts-remediacion.md`
- **Plan de Remediación:** `docs/knowledge_base/01-diseno/plan-remediacion.md`