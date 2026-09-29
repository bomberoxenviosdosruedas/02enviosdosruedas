# Reporte de cierre N3 — Refactorización de arquitectura

**Fecha:** 2026-09-29
**Alcance:** Fases A, B, C, D + E (Tailwind, código muerto, robots) + F (verificación)
**Informe previo:** [`auditoria-arquitectura-estructura.md`](./auditoria-arquitectura-estructura.md)

---

## 1. Veredicto

| Gate | Exit | Resultado |
|---|---:|---|
| `pnpm typecheck` | **0** | 0 errores, 0 `any` implícitos |
| `pnpm run lint` | **0** | 0 errores, **0 warnings** (antes: 3) |
| `pnpm exec vitest run` | 1 | 121 tests → **119 pasan, 2 fallan** |
| `pnpm build` | **0** | 31 rutas generadas,incluido `/robots.txt` |

El exit 1 de Vitest es **idéntico a la baseline**: los 2 fallos son los 2 preexistentes de
`src/app/contacto/contacto.test.tsx`, ya identificados y acordados para un commit posterior.
Ningún test pasó de rojo a verde, y ninguno fue "arreglado" silenciosamente.

**127 archivos, +814 / −2722 líneas.**

---

## 2. Fases ejecutadas

### Fase A — Gobernanza de raíz

| Cambio | Detalle |
|---|---|
| `eslint.config.mjs` | Reescrito. Ignora `.agent/ .agents/ .claude/ .hermes/ .impeccable/ .opencode/ .design-sync/ .scratch/ .stitch/ docs/ generated/ coverage/ test-results/`. Exportación por defecto con nombre (eliminado el default export anónimo) |
| `tsconfig.json` | `exclude` ampliado; **eliminado** `"types": ["@testing-library/jest-dom"]` (redundante: `src/test/global.d.ts:2` ya tiene el triple-slash reference) |
| `package.json` | `name`: `ai-studio-applet` → **`envios-dosruedas`**; `+ "packageManager": "pnpm@10.15.1"`; `+ "test:ci": "vitest run"` |
| `src/app/robots.ts` | Reescrito (ver E3) |
| `public/robots.txt` | Eliminado |
| `src/app/favicon.ico` | Eliminado — duplicaba `public/favicon.ico`, que es el que se servía. Cero cambio visual |
| `AGENTS.md` | Baseline y tabla N3 actualizadas (ver §4) |

**Los 3 warnings de linterunner eran de los shims locales** ahora ignorados. De ahí el 3→0.

### Fase B — Alias limpios

- `tsconfig.json` `paths`: `"@/*": ["./src/*", "./*"]` → **`["@/*": ["./src/*"]]`**. Se quitó el fallback raíz.
  Verificado antes de tocar: los 245 imports `@/…` existentes se reparten en `components` (166), `lib` (71), `hooks` (5), `actions` (3). **Ninguno resolvía contra el fallback `./*`**, así que quitarlo era seguro.
- **227 reescrituras** `@/src/…` → `@/…` en 90 archivos. Verificado antes: las 227 ocurrencias son **todas** sentencias `import` (3 con comillas dobles, el resto simples). Cero falsos positivos.
- `vitest.config.ts`: alias parche `'@/src'` **eliminado**. Quedan 2 entradas que espejan `tsconfig.paths`: `@` y `@generated`. `__dirname` → `import.meta.dirname` (el loader nativo de Vite no expone `__dirname`).
- 6 imports relativos restantes:

| Archivo | Antes | Después |
|---|---|---|
| `src/app/layout.tsx:5` | `'../components/ClientLayout'` | `'@/components/ClientLayout'` |
| `src/components/ClientLayout.tsx:7` | `'../lib/analytics'` | `'@/lib/analytics'` |
| `src/lib/prisma.ts:4` | `'../../generated/prisma/client'` | `'@generated/prisma/client'` |
| `src/app/cotizar/lowcost/CotizadorLowCostForm.tsx:6-7` | `'../../ui/AddressAutocomplete'`, `'../../ui/DynamicRouteMap'` | `@/components/ui/…` |
| `src/lib/promises.test.ts:4` | `'../../next.config'` | **se mantiene** + comentario que documenta la excepción |

`next.config.ts` vive en la raíz, fuera del alcance de `@/*`. Documentarlo era preferible a inventar un alias `@root/*` para un solo test.

### Fase C — Reubicaciones (9 archivos, con `git mv`)

| Origen | Destino |
|---|---|
| `src/app/revisar/actions.ts` | `src/actions/feedback.ts` |
| `src/app/admin/imagenes/actions.ts` | `src/actions/admin-imagenes.ts` |
| `src/app/revisar/RevisarClient.tsx` | `src/components/revisar/RevisarClient.tsx` |
| `src/app/admin/imagenes/AdminImagenesClient.tsx` | `src/components/admin/AdminImagenesClient.tsx` |
| `src/app/politica-de-privacidad/PrivacyContent.tsx` | `src/components/legal/PrivacyContent.tsx` |
| `src/app/terminos-y-condiciones/TermsContent.tsx` | `src/components/legal/TermsContent.tsx` |
| `src/components/cotizar/express/hooks/useCotizadorExpress.ts` | `src/hooks/cotizador/useCotizadorExpress.ts` |
| `src/components/cotizar/express/hooks/useQuoteAnalytics.ts` | `src/hooks/cotizador/useQuoteAnalytics.ts` |
| `src/components/cotizar/unified/hooks/useCotizadorUnified.ts` | `src/hooks/cotizador/useCotizadorUnified.ts` |

Git los registra como `R094`–`R100`: el rename se detecta, el historial se conserva. 15 imports de importadores reparados (9 a los hooks, 6 a los movidos). Las carpetas `hooks/` vacías se eliminaron; `src/components/seo/` también.

**`src/app/` queda con 34 `.tsx`, todos de enrutamiento** (pages, layouts, opengraph) + los co-localizados de test + `robots.ts` / `sitemap.ts`, que son convención de metadata de Next. Cero lógica visual, cero `fs/promises`.

### Fase E — Las 3 decisiones

#### E1 · Tailwind: `tailwind.config.ts` eliminado

`globals.css` es ahora la **única** fuente de verdad. Se eliminó `@config "../../tailwind.config.ts"`.

**Trampa contiene.** `@keyframes counter-up` existía **solo** en el config JS. `--animate-counter-up: counter-up 0.6s ease-out` estaba declarado en `@theme`, pero el keyframe no. Borrar el config sin portar el keyframe habría roto `animate-counter-up` en silencio — el build seguiría verde. Se portó.

Lo que semovió de `@config` a `@theme` (6 tokens de spacing + 1 keyframe), verificado token por token contra el `@theme` existente:

```css
--spacing-section-y-tight: 3rem;
--spacing-control-sm: 2.25rem;   --spacing-control: 2.5rem;
--spacing-control-lg: 2.75rem;  --spacing-control-xl: 3.5rem;
--spacing-control-2xl: 4rem;
@keyframes counter-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
```

Las 2 escalas de fontSize (`2xs`, `9xl`), `lineHeight.hero`, la escala completa de letterSpacing, los 7 radios y los 20 shadows ya estaban en `@theme` con valores idénticos: no hubo que moverlos.

**Sobre los `control-*`:** tienen 0 usos en el repo, y Tailwind v4 hace tree-shaking de tokens sin consumir, así que **no aparecen en el CSS compilado** (verificado: 0 coincidencias). Eso es comportamiento correcto, no pérdida: si no hay ninguna clase que los use, no pueden producir diferencia visual. Se portaron de todos modos para no perder la escala de touch targets del design system.

**Verificación post-build** sobre el CSS de producción (166.9 KB): `#0950F6`, `#FFEC01`, `--color-brand-blue-700`, `--color-brand-yellow-500`, `--color-brand-ink`, `--font-display`, `--font-headline`, `--leading-hero`, `--text-9xl`, `--text-2xs`, `--radius-4xl`, `--shadow-cta-glow`, `--tracking-mega`, `@keyframes counter-up`, `--animate-counter-up`, `double-bezel-outer`, `cta-nested-pill` → **todos OK**.

#### E2 · 11 archivos muertos → `.scratch/deprecated/`

**Re-verificados antes de mover** (la reescritura de alias podía ocultar referencias). 6 sin referencias. 5 con coincidencias, todas **datos, no imports**:

`src/lib/reviewCatalog.ts` contiene 53 entradas con `componentPath` como **string**, y 5 apuntan a estos archivos. Se investigó si `/revisar` los resolvía dinámicamente: **no**. `componentPath` se usa solo como clave de búsqueda, clave de match contra el feedback en BD, y texto visible (`RevisarClient.tsx:47,60,90,206,242,259`). Sin import dinámico. El feedback histórico sigue anclado a su ítem.

Moverlos **no rompe `/revisar`**. `CotizadorLowCostForm` solo aparecía en un comentario de `useOSRMRoute.ts` (también muerto).

105.520 bytes a `.scratch/deprecated/`, que ya está en `.gitignore:77` y en los `exclude`/`ignores` de tsconfig y ESLint. Se deja `README.md` en la carpeta con el inventario, los motivos y el procedimiento de restauración.

**Las 5 primitivas del barrel se dejaron intactas** en `src/components/ui/`, según lo decidido.

#### E3 · `robots.txt` estático → route handler

El `.txt` estático **anulaba** al route handler (en Next sirve `public/` primero), y el `.txt` era **más rico** que el `.ts`. Se portaron los 3 grupos de directivasGEO al handler y se borró el archivo físico:

- `RESTRICTED_BOTS` — Googlebot, Googlebot-Smartphone, Bingbot, Applebot, GPTBot, ClaudeBot, PerplexityBot → `Allow: /` menos `['/api/', '/admin/', '/revisar']`
- `UNRESTRICTED_BOTS` — AdsBot-Google, Google-Extended → `Allow: /` sin restricciones
- `*` → igual que `RESTRICTED_BOTS`

Se preservó el string exacto `/revisar` **sin barra final**, para no abrir por accidente el rastreo del panel. El build genera `/robots.txt` (ruta estática en el output).

---

## 3. Docs sincronizadas

Los ejemplos de código de la knowledge base usaban `@/src/…`: copiarlos reintroducía el anti-patrón que acabamos de eliminar. 3 docs corregidas:

- `docs/knowledge_base/01-diseno/hero-layout.md`
- `docs/knowledge_base/01-diseno/tarifas-logica-negocio.md`
- `docs/knowledge_base/04-referencia-rapida/cheat-sheet.md`

Además:

- `tokens-colores.md:233` — la nota decía que `tailwind.config.ts` seguía duplicando la paleta y que `counter-up` solo vivía ahí. **Reescrita** con el estado nuevo y la advertencia de tree-shaking.
- `stack-tecnologico.md:75` y `comandos-verificacion.md:48` — quitan `tailwind.config.ts` de la lista N3.
- `docs/marketing/F13-*.md` — rutas de `app/admin/imagenes/actions.ts` y `app/revisar/RevisarClient.tsx` actualizadas.
- `anti-patrones.md:111` **se dejó como está**: listar `@/src/components/ui` como prohibido es ahora un guardrail correcto contra la regresión.

---

## 4. `AGENTS.md` actualizado

- Baseline: `lint` de "0 errores, 3 warnings" → **"0 errores, 0 warnings"**; suite de "11 archivos, 117 tests → 106/11" → **"12 archivos, 121 tests → 119/2"**. La baseline anterior describía una realidad que ya no existía.
- Fila N3: `tailwind.config.ts` (ya no existe) → `tsconfig.json` + `vitest.config.ts`.
- Última actualización: `2026-09-26` → `2026-09-29`.

---

## 5. Hallazgos que quedan abiertos

Ninguno bloquea. Ninguno se resolvió por iniciativa propia porque excede lo autorizado.

1. **2 tests de `contacto.test.tsx` siguen rojos.** Test 3 espera `Nuestra Comunidad Digital`, que vive en `CarruselRedes` dentro de `ClientLayout`, no en `<ContactoPage />`. Test 6 espera un único mensaje de error de nombre y hoy lo renderizan dos elementos (un `<span>` y un `<p class="font-mono …">`). Acordado para commit posterior.

2. **`reviewCatalog.ts` está desactualizado (preexistente).** Documenta como secciones de la home `VisionSection` y `SliderServicios`, que son código muerto: esas secciones no se renderizan. Es un problema de contenido, no de imports.

3. **`src/lib/analytics` vs `src/app/api/assistant` usan Genkit/Gemini** sin que quede claro si hay una sola instancia de cliente. No se tocó.

4. **`SchemaMarkup.tsx` está archivado pero el JSON-LD sigue inline en `layout.tsx`.** Cuando se quiera reintroducir el componente, hay que decidir cuál gana.

5. **`public/*.html` huérfanos** sin referenciar desde el código. No se borraron: son assets desplegables y su eliminación merece sign-off explícito.

6. **Las 5 primitivas del barrel** (`RadioCardGroup`, `StepperVertical`, `LogosCarousel`, …) siguen sin consumidores. Decisión consciousa: son catálogo de diseño reservado. Cuando el barrel crezca, `bundle-barrel-imports` va a empezar a costar.

7. **Vitest crea `jsdom` 12 veces** (38% del tiempo: 34.57s de 22.77s de duración medida en la última corrida). Sugiere `pool: 'vmThreads'`. No se tocó porque cambia la semántica de aislamiento de la suite.

8. **`tsconfig.tsbuildinfo`** reaparece en la raíz tras cada `typecheck`. Está gitignored; borrarlo es cosmético.
