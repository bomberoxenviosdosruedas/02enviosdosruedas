# Issue tracker: Local Markdown

Issues, specs and tasks for this repo live as local markdown files in `.scratch/` and integrate directly with the project's backlog and marketing tasks documented in `docs/marketing/` (`TASKS.md` and `F4-0-backlog.md`).

## Conventions

- **Feature directory**: `.scratch/<feature-slug>/` or mapped directly to the backlog items in `docs/marketing/` (e.g. `BL-01`, `BL-02`, etc.).
- **Spec**: `.scratch/<feature-slug>/spec.md` (or the existing specs in `docs/marketing/BL-*-*.md`).
- **Implementation tickets**: One file per ticket at `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numbered from `01`.
- **Status & Triage**: Recorded as a `Status:` line near the top of each issue file (see `docs/agents/triage-labels.md` for role strings: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`).
- **Comments**: Conversation history appends to the bottom of the file under a `## Comments` heading.

## Alignment with `docs/marketing`

- The project backlog is maintained in `docs/marketing/TASKS.md` and `docs/marketing/F4-0-backlog.md`.
- Ready-to-implement prompts for agents are located in `docs/marketing/BL-*-prompt.md`.
- When an item is completed or changes state, update its entry in `docs/marketing/TASKS.md` following the session closing routine (`docs/marketing/TASKS.md` §3).

## When a skill says "publish to the issue tracker"

Create a new file under `.scratch/<feature-slug>/` (creating the directory if needed) and reflect any relevant item in `docs/marketing/TASKS.md`.

## When a skill says "fetch the relevant ticket"

Read the file at the referenced `.scratch/` path or the corresponding `BL-xx` document in `docs/marketing/`.

## Wayfinding operations

Used by `/wayfinder`. The **map** is a file with one **child** file per ticket:

- **Map**: `.scratch/<effort>/map.md` (Notes / Decisions-so-far / Fog body).
- **Child ticket**: `.scratch/<effort>/issues/NN-<slug>.md`, numbered from `01`. A `Type:` line records `research`/`prototype`/`grilling`/`task`; a `Status:` line records `claimed`/`resolved`.
- **Blocking**: A `Blocked by: NN, NN` line near the top. Unblocked when every prerequisite file is `resolved`.
- **Frontier**: Scan `.scratch/<effort>/issues/` for open, unblocked, unclaimed tickets; first by number wins.
- **Claim**: Set `Status: claimed` before starting work.
- **Resolve**: Append solution under `## Answer`, set `Status: resolved`, then update the map in `map.md`.
