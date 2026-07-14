# Project: Envíos DosRuedas Remaining Routes Optimization

## Architecture
This project focuses on visual optimization of existing pages/routes to ensure strict alignment with the design system defined in `DESIGN.md`.
Routes to optimize:
- `/nosotros/sobre-nosotros` (Milestone 2)
- `/nosotros/preguntas-frecuentes` (Milestone 2)
- `/nosotros/nuestras-redes` (Milestone 2)
- `/cotizar/lowcost` (Milestone 3)
- `/cotizar/express` (Milestone 3)
- `/contacto` (Milestone 4)

We utilize standard Next.js App Router (React 19), Tailwind CSS v4, and Framer Motion for interactive micro-interactions and transitions.

## Code Layout
- `src/app/` — Route entrypoints and layouts.
- `src/components/` — Shared UI and route-specific sub-components.
- `src/lib/` — Shared utilities (pricing, prisma client, etc.).
- `src/hooks/` — Custom hooks.
- `docs/contexto/` — Local pricing and operational business context.

## Milestones
| # | Name | Scope | Dependencies | Status | Conversation ID |
|---|---|---|---|---|---|
| M1 | E2E Testing Track | Create comprehensive E2E test suite (Tiers 1-4) using Puppeteer/Vitest. Publishes `TEST_READY.md`. | None | DONE | e8ec074f-12b9-4113-8f68-624361eee5c2 |
| M2 | Nosotros Optimization | Optimize sobre-nosotros, preguntas-frecuentes, nuestras-redes and their sub-components. | None | IN_PROGRESS | d3f83f46-7b46-4520-9bae-c8c4be05f6d6 |
| M3 | Cotizar Optimization | Optimize lowcost, express cotizadores and their sub-components. | None | IN_PROGRESS | d3f83f46-7b46-4520-9bae-c8c4be05f6d6 |
| M4 | Contacto Optimization | Optimize contacto page and its sub-components. | None | IN_PROGRESS | d3f83f46-7b46-4520-9bae-c8c4be05f6d6 |
| M5 | E2E Test Pass (Tiers 1-4) | Validate and pass E2E tests for Tiers 1-4 sequentially. | M1, M2, M3, M4 | PLANNED | |
| M6 | Coverage Hardening (Tier 5) | White-box analysis and gap coverage via Challengers. | M5 | PLANNED | |

## Interface Contracts
- **Double-Bezel UI**: All card/block components must render with `double-bezel-outer bg-[#E6EEFE]/80 hover:shadow-... hover:border-... border border-[#BACEFD] p-2 rounded-2xl` and `double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm`.
- **Button / CTA Pills**: Primary buttons must utilize `cta-nested-pill` combined with an inner `cta-nested-icon` container.
- **Typography Alignment**: Strict enforcement of `font-display` (Anton) on primary headers, `font-subheading` (Bebas Neue) on buttons, numbers, and badges, and `font-sans` (Inter/IBM Plex Sans) for body copy.
- **Backgrounds**: Dark sections must use multi-dimensional gradients (`bg-gradient-to-br from-[#0636A5] to-[#0742CA]`) or variation textures rather than solid flat fills.
