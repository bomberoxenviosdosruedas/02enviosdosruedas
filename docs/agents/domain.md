# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root (primary glossary, entity definitions, Mar del Plata geographical & brand guidelines).
- **`docs/marketing/glosario.md`**: Definitive glossary of business and logistics terms for Envíos DosRuedas.
- **`docs/marketing/decisiones.md`**: Architecture, business, and design decisions recorded for the project.
- **`docs/adr/`**: Architectural Decision Records that touch the area you are about to work in.
- **`AGENTS.md` & `DESIGN.md`**: Binding brand, typography (Anton / Bebas Neue / IBM Plex Sans / Geist Mono), and chromatic rules (Egyptian Blue `#0636A5`, Yellow `#FFEC01`, White).

If `docs/adr/` does not have decisions for a specific module yet, proceed following `docs/marketing/decisiones.md` and `AGENTS.md`. The `/domain-modeling` skill creates ADRs lazily when technical decisions land.

## File structure

Single-context repo:

```
/
├── CONTEXT.md                         ← Core domain glossary and entity definitions
├── docs/
│   ├── adr/                           ← Architectural Decision Records
│   ├── agents/                        ← Skills configuration (tracker, triage, domain)
│   └── marketing/                     ← Marketing strategy, tasks, prompts and business rules
│       ├── TASKS.md                   ← Master sprint and task board
│       ├── F4-0-backlog.md            ← Backlog specifications
│       ├── glosario.md                ← Domain terms & synonyms
│       └── decisiones.md              ← Log of owner & technical decisions
└── src/                               ← Next.js 16 App Router application
```

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, spec, refactor proposal, component name, or test), use the terms as defined in `CONTEXT.md` and `docs/marketing/glosario.md`. Do not invent synonyms or translate established domain terminology.

## Flag ADR conflicts

If your output contradicts an existing decision in `docs/marketing/decisiones.md` or `docs/adr/`, surface it explicitly rather than silently overriding.
