# Deuda de Adherencia — Envíos DosRuedas

> **Fuente:** `DESIGN.md` §11, auditoría commit `5d6588a` (2026-09-24).
> **Estado:** Deuda conocida, priorizada y con plan de remediación en `plan-remediacion.md`.

---

## 1. Resumen de Deuda por Categoría

| Categoría | Ítems | Severidad Promedio | Esfuerzo Estimado |
|---|---|---|---|
| **Tokens no consumidos** | 321 hex arbitrarios, 183 radios arbitrarios, 140 textos 8–11px | 🔴 Crítico | Alto |
| **Primitivas sin adopción** | 5 de 12 con 0 consumidores; 3 con 1 solo | 🟠 Alto | Medio |
| **Integridad tarifas** | Server Action confía en cliente; Flex/Emprendedores sin `PriceRange` | 🔴 Crítico | Medio |
| **Motion / A11y** | 41/64 archivos ignoran `prefers-reduced-motion`; InputField sin `aria-describedby` | 🟠 Alto | Medio |
| **Tipografía** | Faux bold en Anton/Bebas (solo 400 cargado) | 🟠 Alto | Bajo |
| **Iconografía** | LogosCarousel partners inventados + clases inexistentes | 🟠 Alto | Bajo |
| **Documentación gobernanza** | Skills y docs secundarios con `#0636A5` | 🟡 Medio | Bajo |
| **Enforcement automático** | Sin lint/tests de paleta, contraste, tarifas | 🟡 Medio | Medio |

---

## 2. Detalle por Hallazgo (IDs de `DESIGN.md` §0 Tabla)

### DS-01: Tarifas enviadas por el cliente (Server Action)
- **Archivo:** `src/actions/quote.ts:9-44`
- **Problema:** `calculateQuoteAction` recibe `distanceKm` y `price` del `FormData` y los usa sin revalidar contra `PriceRange`.
- **Riesgo:** Manipulación de precios, inconsistencia con BD.
- **Fix:** Leer `PriceRange` vía Prisma en Server Action; usar `pricing.ts` como fallback.
- **Plan:** `plan-remediacion.md` Ítem 1.

### DS-02: Gradiente hero + halos navy legacy
- **Archivos:** `ui/HeroProceduralBackground.tsx:25,33,52` + copias inline en `ExpressHero`, `FlexHero`, `EmprendedoresHero`
- **Problema:** Gradiente `#021440 → #04236B → #0636A5 → #00277C` y halos `rgba(6,54,165,…)`. Colores prohibidos (§2.5).
- **Fix:** Gradiente canónico `#0950F6` + halos `rgba(9,80,246,α)` + `rgba(255,236,1,α)`.
- **Plan:** `plan-remediacion.md` Ítem 2.

### DS-03: Navy prohibido fuera de heros
- **Archivos:** `contacto/*`, `nosotros/*`, `*Features.tsx`, `LeafletRouteMap`, `CtaSection`, `EmprendedoresHome`, `admin/imagenes/actions.ts`
- **Problema:** `#052C87` × 43, `#04236B`, `#0636A5`, `rgba(6,54,165,…)`, `rgba(0,39,124,…)` en sombras, bordes, fondos.
- **Fix:** Sustitución sistemática por tokens `brand-*` y sombras teñidas correctas.
- **Plan:** `plan-remediacion.md` Ítem 3.

### DS-04: Flex y Emprendedores muestran precios sin respaldo
- **Archivos:** `servicios/flex/FlexPricing.tsx`, `FlexHero.tsx:79`, `servicios/emprendedores/EmprendedoresPricing.tsx`
- **Problema:** Precios hardcodeados ($3.000, $4.500, Z5 $7.000+$700/km, $6.000, $3.800, recolección $4.000) sin fila en `PriceRange` ni `pricing.ts`. Flex Z5 dice "km adicional" (contradice regla km total).
- **Fix:** Si no hay `PriceRange` → CTA "Cotización a medida por WhatsApp". Si hay → derivar de `pricing.ts`.
- **Plan:** `plan-remediacion.md` Ítem 4.

### DS-05: Contraste < 4.5:1 en múltiples componentes
- **Componentes:** `card.tsx` (`brand-blue-400`/`/80` sobre blanco), `RadioCardGroup` (`brand-blue-100` sobre azul), `StepperVertical` (badge `economic` `brand-blue-400` sobre `brand-blue-100` = 2.76:1), `Badge` (variant `economic`), `CTANestedPill` (hover `elevated` `brand-blue-800` = 4.35:1), `AddressAutocomplete` (lista `text-white` sobre `brand-blue-800` = 4.35:1).
- **Fix:** Ajustar tokens de texto a combinaciones AA válidas (ver `tokens-colores.md` §6).
- **Plan:** `plan-remediacion.md` Ítem 5.

### DS-06: `prefers-reduced-motion` ignorado
- **Alcance:** 41 de 64 archivos con `motion/react` sin gate `useReducedMotion()` o `MotionConfig`. `scroll-smooth` no se desactiva.
- **Fix:** Gate global en `layout.tsx` (`<MotionConfig reducedMotion="user">`) + por componente `useReducedMotion()`.
- **Plan:** `plan-remediacion.md` Ítem 6.

### DS-07: InputField accesibilidad incompleta
- **Archivo:** `ui/InputField.tsx`
- **Problema:** No reenvía `required` al `<input>` nativo; error sin `aria-describedby` ni `role="alert"`.
- **Fix:** Spread `required` + `aria-describedby={errorId}` + mensaje `role="alert" id={errorId}`.
- **Plan:** `plan-remediacion.md` Ítem 7.

### DS-08: Faux bold en Anton y Bebas
- **Archivos:** `layout.tsx` (carga fonts solo 400) + primitivas usan `font-bold`/`font-extrabold`.
- **Problema:** Navegador sintetiza negrita deforma glifos.
- **Fix:** Eliminar `font-bold`/`font-extrabold` de `.font-display` y `.font-subheading`; jerarquía por `text-*`, `tracking-*`, color. Opcional: `font-synthesis-weight: none`.
- **Plan:** `plan-remediacion.md` Ítem 8.

### DS-09: LogosCarousel roto + partners inventados
- **Archivo:** `ui/LogosCarousel.tsx`
- **Problema:** Clases `animate-marquee` inexistentes (no en `globals.css`); partners "Acme", "Globex", "Initech" inventados.
- **Fix:** Usar `animate-logos-scroll` (existente) + partners reales via `simple-icons` CDN.
- **Plan:** `plan-remediacion.md` Ítem 9.

### DS-10: Skills y docs secundarios con `#0636A5`
- **Archivos:** Skill `dosruedas-brand-system`, `.agents/skills/tailwind-v4-design-system`, `docs/agents/domain.md`
- **Problema:** Siguen declarando `#0636A5` como primario tras PR #21.
- **Fix:** Actualizar a `#0950F6` (Ajuste Max) en todas las referencias.
- **Plan:** `plan-remediacion.md` Ítem 10.

### DS-11: Baja adopción primitivas + métricas globales
- **Métricas:** 321 hex arbitrarios, 183 radios arbitrarios, 140 textos 8–11px, 5 primitivas con 0 consumidores.
- **Fix:** Migración sistemática a primitivas + enforcement automático.
- **Plan:** `plan-remediacion.md` Ítem 11.

### DS-12: Sin enforcement automático
- **Faltantes:** Lint rule paleta/contraste, tests Vitest tarifas/primitivas, CI gate.
- **Fix:** Implementar en `eslint.config.mjs`, `vitest.setup.ts`, `.github/workflows/ci.yml`.
- **Plan:** `plan-remediacion.md` Ítem 12.

---

## 3. Deuda Ya Saldada (Verificada en `5d6588a`)

| Hallazgo Anterior | Estado |
|---|---|
| `h-screen` en heroes | ✅ 0 ocurrencias (migración a `min-h-[90dvh]`) |
| `animate-bounce` | ✅ 0 ocurrencias |
| `border-l-4` | ✅ 0 ocurrencias |
| Verdes (`green-*`, `#25D366` WhatsApp) | ✅ 0 ocurrencias (CTAs amarillo + glifo verde interno) |
| Paleta `globals.css` legacy (`#0636A5`) | ✅ Migrada a Max (`#0950F6` colapsado) |
| `slate/zinc/gray` no remapeados | ✅ Re-mapeados en `@theme` a `brand-*` |

---

## 4. Métricas de Seguimiento (Dashboard Objetivo)

| Métrica | Baseline (2026-09-24) | Target (Post-Remediación) |
|---|---|---|
| Hex arbitrarios (`bg-[#…]`) | 321 | 0 |
| Radios arbitrarios (`rounded-[…]`) | 183 | 0 |
| Textos sub-12px (`text-[8-11px]`) | 140 | 0 |
| `prefers-reduced-motion` gates | 23/64 (36%) | 64/64 (100%) |
| Primitive adoption (consumers > 0) | 7/12 (58%) | 12/12 (100%) |
| Contraste AA violations | 7 componentes | 0 |
| Faux bold instances | ~50 | 0 |
| Skills/docs con `#0636A5` | 3 | 0 |
| Lint rules paleta/contraste | 0 | 3+ |
| Tests tarifas/primitivas | 0 | 5+ |

---

## 5. Referencias

- **Plan de remediación:** `plan-remediacion.md` (12 ítems con prompts en `docs/agents/prompts-remediacion.md`)
- **Prompts de remediación:** `docs/agents/prompts-remediacion.md` (un ítem por tarea/PR)
- **Anti-patrones completos:** `anti-patrones.md`
- **Tokens de color válidos:** `tokens-colores.md`