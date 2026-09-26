# Plan de Remediación — Envíos DosRuedas

> **Fuente:** `DESIGN.md` §15, auditoría commit `5d6588a` (2026-09-24).
> **Metodología:** Un ítem por tarea y por PR, con nivel de verificación según `AGENTS.md`. Prompts en `docs/agents/prompts-remediacion.md`.

---

## Ítems de Remediación (12)

| # | Título | Severidad | Archivos Clave | Nivel Verif. | Prompt |
|---|---|---|---|---|---|
| **1** | **Server Action: Revalidar tarifas en servidor** | 🔴 Crítico | `src/actions/quote.ts` | N3 | `docs/agents/prompts-remediacion.md#1` |
| **2** | **HeroProceduralBackground: Corregir paleta a Max** | 🔴 Crítico | `ui/HeroProceduralBackground.tsx`, `ExpressHero`, `FlexHero`, `EmprendedoresHero` | N2 | `docs/agents/prompts-remediacion.md#2` |
| **3** | **Erradicar navy legacy (`#052C87`, `#0636A5`, `rgba(6,54,165,…)`)** | 🔴 Crítico | `contacto/*`, `nosotros/*`, `*Features.tsx`, `LeafletRouteMap`, `CtaSection`, `EmprendedoresHome`, `admin/imagenes/actions.ts` | N2 | `docs/agents/prompts-remediacion.md#3` |
| **4** | **Flex/Emprendedores: Quitar precios sin `PriceRange`** | 🔴 Crítico | `servicios/flex/FlexPricing.tsx`, `FlexHero.tsx`, `servicios/emprendedores/EmprendedoresPricing.tsx` | N2 | `docs/agents/prompts-remediacion.md#4` |
| **5** | **Contraste AA: Fix tokens en componentes** | 🔴 Crítico | `card.tsx`, `RadioCardGroup`, `StepperVertical`, `Badge`, `CTANestedPill`, `AddressAutocomplete` | N2 | `docs/agents/prompts-remediacion.md#5` |
| **6** | **`prefers-reduced-motion`: Gate global + componentes** | 🟠 Alto | `layout.tsx` (global), 41 archivos con `motion/react` | N2 | `docs/agents/prompts-remediacion.md#6` |
| **7** | **InputField: `required` nativo + `aria-describedby` + `role="alert"`** | 🟠 Alto | `ui/InputField.tsx` | N2 | `docs/agents/prompts-remediacion.md#7` |
| **8** | **Faux bold: Eliminar `font-bold`/`font-extrabold` en Anton/Bebas** | 🟠 Alto | `layout.tsx`, primitivas, páginas | N1 | `docs/agents/prompts-remediacion.md#8` |
| **9** | **LogosCarousel: Animación real + partners reales** | 🟠 Alto | `ui/LogosCarousel.tsx` | N2 | `docs/agents/prompts-remediacion.md#9` |
| **10** | **Skills/docs secundarios: Actualizar a `#0950F6` (Ajuste Max)** | 🟡 Medio | Skill `dosruedas-brand-system`, `.agents/skills/tailwind-v4-design-system`, `docs/agents/domain.md` | N1 | `docs/agents/prompts-remediacion.md#10` |
| **11** | **Migración masiva a primitivas + enforcement automático** | 🟡 Medio | 321 hex, 183 radios, 140 textos, 5 primitivas 0-consumers | N2/N3 | `docs/agents/prompts-remediacion.md#11` |
| **12** | **Enforcement automático: Lint rules + Tests + CI Gate** | 🟡 Medio | `eslint.config.mjs`, `vitest.setup.ts`, `.github/workflows/ci.yml` | N3 | `docs/agents/prompts-remediacion.md#12` |

---

## Detalle por Ítem

### Ítem 1: Server Action — Revalidar Tarifas en Servidor
- **Problema:** `calculateQuoteAction` recibe `price` y `distanceKm` del `FormData` y los usa sin verificar contra `PriceRange`.
- **Fix:**
  1. Eliminar `price` del `FormData` esperado.
  2. En Server Action: `const ranges = await prisma.priceRange.findMany({ where: { serviceType } })`.
  3. Calcular: `const price = serviceType === 'EXPRESS' ? calculateExpressPrice(distanceKm, ranges) : calculateLowCostPrice(distanceKm, ranges)`.
  4. Guardar `quote` con `price` calculado en servidor.
- **Verificación N3:** `pnpm typecheck` + `pnpm exec eslint src/actions/quote.ts` + `pnpm build` + `pnpm run lint`.
- **Tests:** Unitarios para `calculateExpressPrice`/`calculateLowCostPrice` con BD mock + integración Server Action.

### Ítem 2: HeroProceduralBackground — Paleta Max
- **Problema:** Gradiente `#021440 → #04236B → #0636A5 → #00277C` + halos `rgba(6,54,165,…)`.
- **Fix en `ui/HeroProceduralBackground.tsx`:**
  - Gradiente base: `linear-gradient(135deg, #0950F6 0%, #0950F6 55%, #3570F8 100%)`.
  - Halos: `rgba(9,80,246,0.35)` (azul), `rgba(255,236,1,0.22)` (amarillo), `rgba(9,80,246,0.4)` (azul profundo).
  - Eliminar `rgba(6,54,165,…)` y `rgba(0,39,124,…)`.
- **Fix en copias inline:** `ExpressHero`, `FlexHero`, `EmprendedoresHero` → eliminar gradientes inline, consumir `<HeroProceduralBackground variant="…" />`.
- **Verificación N2:** `pnpm typecheck` + `pnpm exec eslint` archivos tocados + `pnpm exec vitest related --run`.

### Ítem 3: Erradicar Navy Legacy
- **Valores a eliminar:**
  - `#052C87` (×43), `#04236B`, `#0636A5`
  - `rgba(6,54,165,α)`, `rgba(0,39,124,α)`, `rgba(0,16,53,α)`
- **Sustitución sistemática:**
  - Fondos/texto `#052C87`/`#0636A5` → `bg-brand-blue-700` / `text-brand-blue-900` / `text-brand-ink`
  - Bordes `#052C87`/`#D6E4FE` → `border-brand-blue-100`
  - Sombras `rgba(6,54,165,…)` → `rgba(9,80,246,α)` / `shadow-elevated` / `shadow-float`
  - Halos `rgba(0,39,124,…)` → `rgba(9,80,246,α)`
- **Archivos prioritarios:** `contacto/*`, `nosotros/*`, `*Features.tsx`, `LeafletRouteMap`, `CtaSection`, `EmprendedoresHome`, `admin/imagenes/actions.ts`.
- **Verificación N2:** `pnpm typecheck` + `pnpm exec eslint` + `grep -r` valores prohibidos.

### Ítem 4: Flex/Emprendedores — Sin Precios Hardcodeados
- **Problema:** `FlexPricing` muestra `$3.000`, `$4.500`, Z5 `$7.000+$700/km`; `EmprendedoresPricing` muestra `$6.000`, `$3.800`, `$4.000` sin fila en `PriceRange`.
- **Fix:**
  - **Flex:** Si no hay `PriceRange` para FLEX → reemplazar tabla por CTA único `variant="primary"` → "Cotización Flex a medida por WhatsApp". Si dueño aprueba lógica propia → mover a `pricing.ts` como `FLEX_TIERS`.
  - **Emprendedores:** Idem → CTA "Cotización 3PL a medida por WhatsApp".
  - **FlexHero.tsx:79** → eliminar precio hardcodeado.
- **Verificación N2:** `pnpm typecheck` + `pnpm exec eslint` + test que verifica ausencia de precios hardcodeados en esos componentes.

### Ítem 5: Contraste AA — Fix Tokens en Componentes
| Componente | Violación | Fix |
|---|---|---|
| `card.tsx` | `CardDescription` usa `text-brand-blue-400` (4.35:1) | `text-brand-blue-700` o `text-brand-ink` |
| `RadioCardGroup` | Label `text-brand-blue-100` sobre azul (3.82:1) | `text-white/85` (mínimo) o `text-brand-blue-50` |
| `StepperVertical` | Badge `economic` `brand-blue-400` sobre `brand-blue-100` (2.76:1) | Cambiar variant `economic` a `text-brand-blue-700` sobre `brand-blue-50` |
| `Badge` | Variant `economic` misma violación | Idem |
| `CTANestedPill` | Hover `elevated` `text-brand-blue-800` (4.35:1) | `hover:text-brand-blue-700` |
| `AddressAutocomplete` | Lista `text-white` sobre `brand-blue-800` (4.35:1) | `text-white/90` o `text-brand-blue-50` |

- **Verificación N2:** `pnpm typecheck` + `pnpm exec eslint` + test visual (Chromatic/Storybook) o test unitario de clases.

### Ítem 6: `prefers-reduced-motion` — Gate Global + Componentes
- **Global:** En `src/app/layout.tsx`:
  ```tsx
  import { MotionConfig } from 'motion/react';
  export default function RootLayout({ children }) {
    return (
      <html><body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body></html>
    );
  }
  ```
- **Por componente (41 archivos):** Donde `MotionConfig` no cubra (GSAP, keyframes CSS, `whileInView` condicional):
  ```tsx
  const shouldReduce = useReducedMotion();
  <motion.div initial={shouldReduce ? false : {opacity:0, y:20}} animate={{opacity:1, y:0}} ... />
  ```
- **GSAP:** Gate en `useEffect`:
  ```tsx
  const reduce = useReducedMotion();
  useEffect(() => { if (reduce) return; const ctx = gsap.context(() => {...}, ref); return () => ctx.revert(); }, [reduce]);
  ```
- **Verificación N2:** `pnpm typecheck` + `pnpm exec eslint` + test manual en DevTools (Emulate `prefers-reduced-motion: reduce`).

### Ítem 7: InputField — Accesibilidad Completa
- **Fix en `ui/InputField.tsx`:**
  ```tsx
  // Spread required al input nativo
  <input {...inputProps} required={required} aria-invalid={!!error} aria-describedby={error ? errorId : helpText ? helpId : undefined} ... />

  // Error message con role="alert" + id
  {error ? (
    <p id={errorId} role="alert" className="font-mono text-[11px] text-red-600 font-medium">{error}</p>
  ) : helpText ? (
    <p id={helpId} className="font-mono text-[11px] text-brand-blue-500">{helpText}</p>
  ) : null}
  ```
- **Verificación N2:** `pnpm typecheck` + `pnpm exec eslint ui/InputField.tsx` + test a11y (axe-core) en formulario real.

### Ítem 8: Faux Bold — Anton / Bebas Solo 400
- **Fix:**
  1. `src/app/layout.tsx`: Confirmar `next/font` carga solo `weight: '400'` para Anton y Bebas.
  2. **Eliminar** `font-bold`, `font-extrabold`, `font-black`, `font-semibold` de:
     - `.font-display`, `.font-subheading` en `globals.css`
     - Primitivas (`CTANestedPill`, `InputField` label, `Badge`, etc.)
     - Páginas y componentes (buscar `font-bold` + `font-display`/`font-subheading`).
  3. Opcional: `font-synthesis-weight: none` en `.font-display, .font-subheading` en `globals.css`.
- **Verificación N1:** `pnpm exec eslint` (solo estilo) + `grep -r "font-bold.*font-display\|font-bold.*font-subheading"`.

### Ítem 9: LogosCarousel — Animación Real + Partners Reales
- **Fix en `ui/LogosCarousel.tsx`:**
  - Usar `animate-logos-scroll` (existe en `globals.css`) en lugar de `animate-marquee` (inexistente).
  - Reemplazar partners inventados ("Acme", "Globex", "Initech") por reales vía `simple-icons`:
    ```tsx
    const partners = ['vercel', 'github', 'postgresql', 'prisma', 'tailwindcss', 'nextjs'];
    partners.map(p => <img src={`https://cdn.simpleicons.org/${p}/ffffff`} alt={p} className="h-8" />);
    ```
  - Duplicar array para loop infinito suave.
- **Verificación N2:** `pnpm typecheck` + `pnpm exec eslint` + test visual.

### Ítem 10: Skills/Docs Secundarios — Actualizar a Ajuste Max
- **Archivos a corregir:**
  - `.agents/skills/dosruedas-brand-system/` → referencias a `#0636A5` → `#0950F6`.
  - `.agents/skills/tailwind-v4-design-system/` → igual.
  - `docs/agents/domain.md` → igual.
- **Verificación N1:** `grep -r "0636A5\|052D8C\|052C87" .agents/skills/ docs/agents/` → 0 resultados.

### Ítem 11: Migración Masiva a Primitivas + Enforcement
- **Fase 1 — Auditable (Scripts):**
  ```bash
  # Hex arbitrarios
  grep -r "bg#\[$\|text#\[$\|border#\[\$" src/ --include="*.tsx" | wc -l  # Target: 0
  # Radios arbitrarios
  grep -r "rounded-\[$\|rounded-\[2[0-9]px\]" src/ --include="*.tsx" | wc -l  # Target: 0
  # Textos sub-12px
  grep -r "text-\[\(8\|9\|10\|11\)px\]" src/ --include="*.tsx" | wc -l  # Target: 0
  ```
- **Fase 2 — Migración por Carpeta (PRs separados):**
  | Carpeta | Primitivas a Aplicar |
  |---|---|
  | `src/components/cotizar/express/` | `InputField` (4), `DoubleBezelCard` (1), `CTANestedPill` (1) |
  | `src/components/cotizar/lowcost/` | `InputField` (4), `AddressAutocomplete` (2), `DoubleBezelCard` (1), `CTANestedPill` (1) |
  | `src/components/contacto/` | `InputField` (3 + select), `CTANestedPill` (2), `DoubleBezelCard` (2) |
  | `src/components/nosotros/` | `DoubleBezelCard` (5+), `Badge` (3), `CTANestedPill` (2) |
  | `src/components/servicios/` | `DoubleBezelCard` (pricing), `CTANestedPill` (CTAs), `BentoGrid` (features) |
- **Fase 3 — Steppers/Radios/Bento:**
  - Cotizadores → `StepperHorizontal` (desktop) / `StepperVertical` (mobile).
  - `LowCostFeatures`, `AboutAdvantages` → `BentoGrid`.
  - Selectores manuales → `RadioCardGroup`.
- **Verificación N2/N3:** Por PR: `pnpm typecheck` + `pnpm exec eslint` + `pnpm exec vitest related --run`. Cierre: `pnpm build` + `pnpm run lint`.

### Ítem 12: Enforcement Automático
- **ESLint Rules (`eslint.config.mjs`):**
  ```js
  rules: {
    'no-restricted-syntax': [
      'error',
      { selector: "JSXAttribute[name.name='className'][value.value=/#[0-9a-fA-F]{3,8}/]", message: 'Hex inline prohibido. Usa tokens brand-*.' },
      { selector: "JSXAttribute[name.name='className'][value.value=/rounded-\[/", message: 'Radio arbitrario prohibido. Usa rounded-xl/2xl/3xl.' },
      { selector: "JSXAttribute[name.name='className'][value.value=/text-\[[0-9]{1,2}px\]/", message: 'Tamaño texto arbitrario prohibido. Usa text-2xs/xs/sm/base.' },
    ],
    // Contraste: requiere plugin a11y o custom rule
  }
  ```
- **Tests Vitest (`vitest.setup.ts` + tests):**
  - `pricing.test.ts`: `calculateExpressPrice(10.3) === 11000`, `calculateLowCostPrice(10.1) === 7700`, constants match seed.
  - `primitives.test.tsx`: `InputField` renders label+error+help, `CTANestedPill` variants, `DoubleBezelCard` variants.
  - `tokens.test.ts`: No hex inline en componentes críticos, no colores prohibidos.
- **CI Gate (`.github/workflows/ci.yml`):**
  ```yaml
  jobs:
    verify:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: pnpm/action-setup@v4
        - run: pnpm install --frozen-lockfile
        - run: pnpm typecheck
        - run: pnpm exec eslint .
        - run: pnpm exec vitest run
        - run: pnpm build
  ```
- **Verificación N3:** `pnpm typecheck` + `pnpm exec eslint` + `pnpm exec vitest run` + `pnpm build` + `pnpm run lint` todo verde.

---

## Orden de Ejecución Recomendado

| Sprint | Ítems | Rationale |
|---|---|---|
| **1** | 1, 2, 3 | Bloquean integridad de negocio y marca (Críticos) |
| **2** | 4, 5 | Tarifas visibles y contraste (Críticos/Alto) |
| **3** | 6, 7, 8 | Accesibilidad y tipografía base (Alto) |
| **4** | 9, 10 | Componentes aislados y docs (Medio) |
| **5** | 11 | Migración masiva (Medio/Alto - varios PRs) |
| **6** | 12 | Enforcement (Medio - infraestructura) |

---

## Criterios de Cierre Global

- [ ] `pnpm typecheck` → 0 errores
- [ ] `pnpm exec eslint .` → 0 warnings nuevos (baseline 57 pre-existentes OK)
- [ ] `pnpm exec vitest run` → 0 fallos nuevos (baseline 5 pre-existentes OK)
- [ ] `pnpm build` → éxito
- [ ] `grep -r` valores prohibidos → 0 resultados
- [ ] Métricas dashboard (cheat-sheet §4) → targets alcanzados
- [ ] Todos los ítems marcados en `DESIGN.md` §11 y §15

---

## Referencias

- **Prompts detallados por ítem:** `docs/agents/prompts-remediacion.md`
- **Design System canónico:** `docs/knowledge_base/01-diseno/design-system.md`
- **Anti-patrones:** `docs/knowledge_base/01-diseno/anti-patrones.md`
- **Deuda detallada:** `docs/knowledge_base/01-diseno/deuda-adherencia.md`
- **Tarifas y lógica:** `docs/knowledge_base/01-diseno/tarifas-logica-negocio.md`