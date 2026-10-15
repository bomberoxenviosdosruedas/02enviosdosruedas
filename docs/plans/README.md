# Implementation Plans Index — Emil Kowalski Motion Audit

This directory contains modular, ready-to-execute implementation plans created from a comprehensive motion audit of the codebase, guided strictly by **Emil Kowalski's animation philosophy** (`emilkowal.ski`) and Next.js / React 19 best practices.

---

## Executive Summary & Plan Matrix

| # | Plan | Severidad | Categoría de Auditoría | Estado | Dependencias |
|---|---|---|---|---|---|
| **001** | [001 — Centralize Motion Tokens and Fix Easing Violations](./001-centralize-motion-tokens.md) | **HIGH** | Curvas (Easing) y Duración / Cohesión | `TODO` | Ninguna (Fase 1) |
| **002** | [002 — Standardize Transform Origins and Initial Scale States](./002-header-dropdown-scale-origin.md) | **MEDIUM** | Fisicalidad y Origen | `TODO` | Plan 001 |
| **003** | [003 — Optimize Mobile Drawer Performance and Eliminate Reflow Anti-Patterns](./003-mobile-nav-performance-interruptibility.md) | **HIGH** | Rendimiento y Desacople de Render | `TODO` | Plan 001 |
| **004** | [004 — Standardize Active Press Feedback, Touch Guards, and Spatial Micro-Interactions](./004-active-feedback-touch-accessibility.md) | **MEDIUM** | Accesibilidad / Oportunidades Perdidas | `TODO` | Plan 001, 003 |

---

## Suggested Execution Order

1. **Fase 1 (Fundación):** Execute **Plan 001** to establish canonical motion CSS variables under `:root` in `src/app/globals.css` and eliminate sluggish `ease-in` drag on exits and route changes.
2. **Fase 2 (Navegación y Layout Crítico):** Execute **Plan 002** and **Plan 003** to anchor header dropdown scaling to trigger origins, replace layout-thrashing `height: auto` spring animations in mobile drawers with Kowalski curves (`cubic-bezier(0.32, 0.72, 0, 1)`), and purge `transition-all`.
3. **Fase 3 (Tacto y Accesibilidad):** Execute **Plan 004** to enforce tactile `scale(0.97)` active press states across all interactive buttons/cards, wrap hover states in `@media (hover: hover)`, and verify reduced motion support.

---

## Execution Instructions for AI Agents / Engineers

To execute any plan in isolation:
1. Read the target plan file (e.g. `docs/plans/001-centralize-motion-tokens.md`).
2. Follow the precise step-by-step instructions and verbatim code targets.
3. Obey all specified boundaries (do not modify business logic or API routes).
4. Perform both **Mechanical Checks** (`pnpm run typecheck`, `pnpm exec vitest run`) and **Feel Checks** (DevTools animation inspection at 10% speed).
5. Update the plan status in this `README.md` index from `TODO` to `DONE`.
