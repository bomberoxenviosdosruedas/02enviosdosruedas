# CLAUDE.md

Protocolo obligatorio del proyecto — leer y respetar en toda tarea:

@AGENTS.md

## Comandos y verificación

Definidos en `AGENTS.md` (secciones "Comandos" y "Protocolo de trabajo"). La verificación se escala por nivel de riesgo (N0 docs · N1 estilo y copy · N2 componente o lógica · N3 crítico): correr solo los chequeos del nivel, re-correr solo lo que falló y `pnpm build` únicamente en N3 o si el usuario lo pide. Siempre informar el nivel elegido. Nunca `pnpm test` a secas (modo watch). Gestor de paquetes: **pnpm únicamente**.

## Diseño y tarifas

- Reglas obligatorias en `AGENTS.md` ("Diseño — no negociable" y "Tarifas 2026"); detalle en `DESIGN.md`. El ajuste Max ya está en producción: `#0950F6` es el azul primario y el más oscuro permitido. Cualquier `#0636A5`, `#052C87`, `#04236B`, `#021440` o `#00277C` en el código es deuda, nunca referencia.
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
