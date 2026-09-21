# CLAUDE.md

Protocolo obligatorio del proyecto — leer y respetar en toda tarea:

@AGENTS.md

## Comandos y verificación

Definidos en `AGENTS.md` (secciones "Comandos" y "Protocolo de trabajo"): mientras iterás, typecheck + lint y tests de lo tocado (pasos 3–4, sin build); `pnpm build` una sola vez al cerrar la tarea (paso 5). Nunca `pnpm test` a secas (modo watch). Gestor de paquetes: **pnpm únicamente**.

## Agent skills

### Issue tracker

Local markdown tracker integrado con el backlog de `docs/marketing/` y `.scratch/`. Ver `docs/agents/issue-tracker.md`.

### Triage labels

Etiquetas canónicas de triage (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) mapeadas al estado de `docs/marketing/TASKS.md`. Ver `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo con `CONTEXT.md` en la raíz (vinculado con `docs/marketing/glosario.md` y `docs/marketing/decisiones.md`) y `docs/adr/`. Ver `docs/agents/domain.md`.

