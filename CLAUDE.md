# CLAUDE.md

Protocolo obligatorio del proyecto — leer y respetar en toda tarea:

@AGENTS.md

## Diseño y tarifas

- Las reglas de verificación, diseño y precios están en `AGENTS.md` (arriba). Detalle en `DESIGN.md` y `docs/knowledge_base/`.
- Antes de tocar UI, leer la sección de `DESIGN.md` que corresponda y usar las primitivas de `src/components/ui/`.
- Para ejecutar el plan de remediación (`DESIGN.md` §15), usar los prompts de `docs/agents/prompts-remediacion.md`, **un ítem por tarea y por PR**, con el nivel de verificación que indica cada prompt. Al cerrar un ítem, marcarlo en `DESIGN.md` §11 y §15 en el mismo PR.
- Si un skill (por ejemplo `dosruedas-brand-system` o `.agents/skills/tailwind-v4-design-system`) contradice a `DESIGN.md` en colores, gana `DESIGN.md`.

## Agent skills

### Issue tracker

Local markdown tracker integrado con el backlog de `docs/marketing/` y `.scratch/`. Ver `docs/agents/issue-tracker.md`.

### Triage labels

Etiquetas canónicas de triage (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) mapeadas al estado de `docs/marketing/TASKS.md`. Ver `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo con `CONTEXT.md` en la raíz (vinculado con `docs/marketing/glosario.md` y `docs/marketing/decisiones.md`) y `docs/adr/`. Ver `docs/agents/domain.md`.
