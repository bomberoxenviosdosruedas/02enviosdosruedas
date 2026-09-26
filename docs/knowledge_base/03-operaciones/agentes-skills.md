# Agent Skills — Envíos DosRuedas

> **Fuente consolidada:** `CLAUDE.md` (sección "Agent skills"), `docs/agents/`.

---

## 1. Issue Tracker Local

**Archivo:** `docs/agents/issue-tracker.md`

Tracker en markdown integrado con el backlog de `docs/marketing/` y `.scratch/`.

- **Estados:** `needs-triage` → `needs-info` → `ready-for-agent` → `ready-for-human` → `wontfix` / `done`.
- **Fuente de verdad del backlog:** `docs/marketing/TASKS.md` (tablero maestro de sprints y tareas) y `docs/marketing/F4-0-backlog.md` (backlog con especificaciones detalladas `BL-xx`).
- **Flujo:** Triage semanal → Asignación a agente → PR → Verificación → Cierre.

---

## 2. Triage Labels (Etiquetas Canónicas)

**Archivo:** `docs/agents/triage-labels.md`

Mapeadas al estado de `docs/marketing/TASKS.md`.

| Label | Significado | Próxima Acción |
|---|---|---|
| `needs-triage` | Recién llegado, sin revisar | Triage semanal |
| `needs-info` | Falta información del dueño / stakeholder | Preguntar y esperar respuesta |
| `ready-for-agent` | Especificación completa, listo para codificar | Asignar a agente / crear PR |
| `ready-for-human` | Requiere decisión humana (diseño, negocio, legal) | Esperar feedback |
| `wontfix` | No se hará (fuera de scope, duplicado, obsoleto) | Cerrar |

> **Regla:** Todo issue debe tener exactamente una de estas labels en todo momento.

---

## 3. Domain Docs (Contexto Único de Dominio)

**Archivo Raíz:** `CONTEXT.md` (en la raíz del repo, vinculado con `docs/marketing/glosario.md` y `docs/marketing/decisiones.md`).

**Estructura:**
- `CONTEXT.md` → Identidad, Glosario canónico, Reglas de Marca/UI, Fuentes de Verdad.
- `docs/marketing/glosario.md` → Términos de dominio, prefijos de hallazgos, siglas.
- `docs/marketing/decisiones.md` → Registro de decisiones (dueño + método), formato inmutable.
- `docs/adr/` → Architecture Decision Records (decisiones técnicas con fecha, contexto, consecuencias).

> **Single-context repo:** Un solo `CONTEXT.md` en raíz. No duplicados por carpeta.

---

## 4. Skills Disponibles (Internas al Repo)

### 4.1 `dosruedas-brand-system`
- **Qué hace:** Aplica el sistema de marca oficial (paleta `#0950F6`/`#FFEC01`, tipografía Anton/Bebas/Outfit/Geist Mono, Double Bezel, Kit 3D Canónico, voseo rioplatense, checklist anti-IA-genérica).
- **Cuándo usar:** Siempre que se pida diseñar, maquetar, tocar estilos, crear componentes/páginas del repo `02enviosdosruedas`, revisar si algo "está en marca", escribir copy para sitio/Instagram/Facebook/WhatsApp, generar imágenes/prompts publicitarios para Envíos DosRuedas.
- **Nota:** Si también aplica skill genérica de frontend/anti-slop, cargar esta **además** (resuelve qué reglas genéricas no aplican a esta marca).

### 4.2 `tailwind-v4-design-system`
- **Qué hace:** Crea/edita componentes UI, aplica design tokens, trabaja con Tailwind CSS v4 `@theme`, mantiene estricta paleta 3 colores (`brand-blue`, `brand-yellow`, `brand-white`, `brand-ink`) y jerarquía tipográfica (Anton, Bebas Neue, Outfit, Geist Mono).
- **Cuándo usar:** Creando/ editando componentes UI, estilizando layouts, aplicando tokens, manteniendo paleta y tipografía estricta.

### 4.3 `vercel-optimize`
- **Qué hace:** Audita observabilidad-first Vercel (métricas, usage, contract, code scan). Requiere Vercel CLI autenticado y linked app.
- **Cuándo usar:** Optimización de costos/rendimiento en proyectos deployados en Vercel (Next.js, SvelteKit, Nuxt).

---

## 5. Prompts de Remediación

**Archivo:** `docs/agents/prompts-remediacion.md`

Contiene un prompt detallado por cada ítem del **Plan de Remediación** (`docs/knowledge_base/01-diseno/plan-remediacion.md`), con:
- Contexto del problema.
- Archivos a tocar.
- Fix específico paso a paso.
- Nivel de verificación (N1/N2/N3).
- Criterios de aceptación.

> **Metodología:** Un ítem por tarea y por PR. Al cerrar un ítem, marcarlo en `DESIGN.md` §11 y §15 en el mismo PR.

---

## 6. Cómo Invocar Skills en una Tarea

```markdown
## Tarea: [Título]

### Skills Requeridas
- `dosruedas-brand-system` — Para garantizar paleta, tipografía, voseo, componentes insignia.
- `tailwind-v4-design-system` — Para tokens Tailwind v4, componentes UI, primitivas.
- `vercel-optimize` — (Solo si la tarea es optimización Vercel).

### Contexto Obligatorio (Leer Antes)
- `docs/knowledge_base/00-proyecto/identidad-negocio.md`
- `docs/knowledge_base/01-diseno/design-system.md` (o archivo temático específico)
- `docs/knowledge_base/01-diseno/anti-patrones.md`
- `docs/knowledge_base/03-operaciones/comandos-verificacion.md`

### Nivel de Verificación
[N1/N2/N3 según tabla en comandos-verificacion.md]
```

> **Regla:** Antes de tocar UI, **siempre** leer la sección de `DESIGN.md` (o archivo temático en `docs/knowledge_base/01-diseno/`) que corresponda y usar las primitivas de `src/components/ui/`.