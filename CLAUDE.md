# CLAUDE.md

Protocolo obligatorio del proyecto — leer y respetar en toda tarea:

@AGENTS.md

## Comandos

- `pnpm dev` — servidor de desarrollo (Turbopack)
- `pnpm build` — build de producción (verificación obligatoria antes de dar por terminada una tarea)
- `pnpm lint` — ESLint
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm test` — Vitest

Gestor de paquetes: **pnpm únicamente** (nunca npm ni yarn).

## Agent skills

### Issue tracker

Local markdown tracker integrado con el backlog de `docs/marketing/` y `.scratch/`. Ver `docs/agents/issue-tracker.md`.

### Triage labels

Etiquetas canónicas de triage (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) mapeadas al estado de `docs/marketing/TASKS.md`. Ver `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo con `CONTEXT.md` en la raíz (vinculado con `docs/marketing/glosario.md` y `docs/marketing/decisiones.md`) y `docs/adr/`. Ver `docs/agents/domain.md`.

