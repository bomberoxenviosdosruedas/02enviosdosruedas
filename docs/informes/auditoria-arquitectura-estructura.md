# Auditoría de Arquitectura y Estructura — Envíos DosRuedas

**Fecha:** 2026-09-29
**Alcance:** raíz completa del repositorio + árbol total de `src/`
**Nivel de verificación:** N3 (toca `globals.css`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `vitest.config.ts`, `package.json` y >10 archivos)
**Naturaleza:** **solo lectura.** Ningún archivo fue movido, creado ni modificado durante la auditoría.
**Estado del working tree al auditar:** limpio (`git status` sin cambios)

---

## 0. Resumen ejecutivo

La estructura del proyecto es **funcionalmente sana pero gobernada con holgura**. `pnpm typecheck` pasa con cero errores y el build de Next.js 16 está correctamente alineado con `src/`. Los problemas no son de Correctness sino de **encapsulación y fuente única de verdad**:

- El alias `@/*` tiene un fallback `"./*"` que habilita **227 imports no idiomáticos `@/src/...`** repartidos en ~100 archivos, y ese fallback es la causa raíz de un parche equivalente en `vitest.config.ts`.
- La paleta de marca está **declarada dos veces** con valores idénticos: en `tailwind.config.ts` y en el bloque `@theme` de `globals.css`.
- `public/robots.txt` **anula** a `src/app/robots.ts`, dejando el route handler como código muerto.
- Hay **~127 KB de código muerto** (16 archivos verificados como inalcanzables).
- `AGENTS.md` documenta una **baseline de tests que es falsa** (declara 11 fallos, hay 2), lo que descriptiva el estado real del repositorio.
- Existen **3 archivos de ignore casi idénticos y divergentes entre sí** y **dos árboles de documentación paralelos** con conflicto de canon declarado.

### Semáforo de hallazgos

| Severidad | Cantidad | Naturaleza |
|---|---|---|
| 🔴 Crítico | 6 | Rompen la fuente única de verdad o el esquema de carpetas declarado |
| 🟠 Alto | 6 | Deuda de gobernanza que degrada la operación de agentes IA |
| 🟡 Medio | 7 | Higiene, redundancia y documentación desactualizada |

---

## 1. Baseline ejecutada

Comandos ejecutados en la terminal, con código de salida real. **Ninguna cifra de este reporte es estimada.**

| Comando | Exit | Resultado |
|---|---|---|
| `pnpm typecheck` | **0** | ✅ 0 errores TypeScript |
| `pnpm run lint` | **0** | ⚠️ **0 errores, 3 warnings** |
| `pnpm exec vitest run --reporter=dot` | **0** | ⚠️ **12 archivos / 121 tests → 119 pasan, 2 fallan** |

### 1.1 Detalle de los 2 tests fallantes

Ambos residen en `src/app/contacto/contacto.test.tsx`:

- **Test 3** espera la sección de redes (`Nuestra Comunidad Digital`), que hoy vive en `CarruselRedes` (dentro de `ClientLayout`), no en `<ContactoPage />`.
- **Test 6** espera un único mensaje de error de nombre; hoy lo renderizan **dos** elementos distintos, y Testing Library lanza `getMultipleElementsFoundError`.

### 1.2 Los 3 warnings de lint

| Archivo | Regla | Causa |
|---|---|---|
| `.design-sync/build/shims/next-image.tsx:32` | `@next/next/no-img-element` | **Artefacto local**, no código del producto |
| `.design-sync/build/shims/next-image.tsx:32` | `jsx-a11y/alt-text` | Ídem |
| `eslint.config.mjs:3` | `import/no-anonymous-default-export` | El propio archivo de config se_exporta anónimamente |

> **2 de los 3 warnings son ruido de tooling local.** `eslint.config.mjs` no ignora `.design-sync/**`, pese a que sí lo ignoran `.gitignore` y los tres archivos de ignore de agentes IA.

### 1.3 ⚠️ Hallazgo crítico deExactitud: la baseline de `AGENTS.md` es falsa

`AGENTS.md` afirma textualmente:

> *"Suite completa (`pnpm exec vitest run`): **11 archivos, 117 tests → 106 pasan, 11 fallan.**"*

La medición real de hoy (2026-09-29) es **12 archivos, 121 tests, 119 pasan, 2 fallan**.

**Impacto:** la sección "Baseline fallos previos" de `AGENTS.md` **sobredeclara la deuda en 9 tests**. Cualquier agente que confíe en ella diagnosticará el repositorio como más roto de lo que está, y priorizarápersuasióntests que en realidad pasan. Es el tipo de dato que un agente lee antes de tocar nada y usa como criterio de decisión.

### 1.4 Nota metodológica: falso positivo de encoding descartado

La consola de Windows está en codepage **IBM437** (`chcp` → 437), por lo que todo texto UTF-8 acentuado se renderiza como `EnvA-os`, `A3`, `MÃ¡s`.

Se verificaron los **bytes crudos** del repositorio: `AGENTS.md` contiene `C3 AD` en la posición esperada = `í` correcto.

> ✅ **Los archivos están correctamente codificados en UTF-8. No hay corrupción de encoding.** Se deja constancia para que auditorías futuras no lo reporten como defecto.

---

## 2. Evaluación de la raíz

### 2.1 Configuraciones — estado y dependencias cruzadas

| Archivo | Estado | Hallazgo |
|---|---|---|
| `tsconfig.json` | ⚠️ Defectuoso | `"@/*": ["./src/*", "./*"]`. El fallback `./*` habilita imports desde la raíz sin obstáculo. Además `"types": ["@testing-library/jest-dom"]` inyecta tipos de test en el build de producción. `exclude` no lista `.scratch/`, `.design-sync/`, `.stitch/`, `generated/` (divergencia con `.gitignore` y ESLint) |
| `next.config.ts` | ✅ Correcto | Alineado con `src/`. `redirects` (BL-01), `images`, `headers` de seguridad, `optimizePackageImports`, `turbopack` + `webpack` coexisten sin residuos de raíz |
| `tailwind.config.ts` + `globals.css` | 🔴 Doble fuente de verdad | `globals.css:2` declara `@config "../../tailwind.config.ts"` **y** define un bloque `@theme` (líneas 7-40) con **la paleta idéntica**: `brand-blue 50→950`, `brand-yellow 50→600`, `brand-white-50`. ~127 KB de tokens duplicados + una ruta relativa que cruza `src/` → raíz. `content` incluye `./src/pages/**`, ruta que no existe (no hay Pages Router) |
| `vitest.config.ts` | ⚠️ Parche | Alias duplicados: `'@/src'` **y** `'@'`. El primero existe únicamente para sobrevivir a los imports `@/src/...` |
| `eslint.config.mjs` | ⚠️ Ignores incompletos | No ignora `.design-sync/**`, `.scratch/**`, `.stitch/**` → 2 de 3 warnings son ruido de artefactos locales |
| `package.json` | ⚠️ | Sin `"packageManager"` (nada hace cumplir el "solo pnpm" que exige `AGENTS.md`). `"test": "vitest"` queda en **watch mode**; no hay script no-interactivo para CI ni para agentes. `name: "ai-studio-applet"` es un nombre heredado ajeno al producto |
| `.npmrc` + `pnpm-workspace.yaml` | ⚠️ Redundantes | Ambos declaran la allow-list de builds nativos (`only-built-dependencies` / `allowBuilds`) con solapamiento. Dos lugares que editar |
| `next-env.d.ts` | ✅ | Generado por Next, correcto |
| `postcss.config.mjs` | ✅ | Correcto para Tailwind v4 vía `@tailwindcss/postcss` |
| `prisma.config.ts` | ✅ | `schema`, `migrations`, `seed` y `datasource` correctos |
| `pnpm-lock.yaml` | ✅ | Correcto, único gestor |

### 2.2 Raíz: artefactos locales fuera de `src/`

Ninguno está versionado en git (verificado con `git ls-files`), pero todos ensucian el contexto que consumen los agentes IA.

| Ruta | Tamaño / contenido | Acción propuesta |
|---|---|---|
| `tsconfig.tsbuildinfo` | 550 KB | Eliminar (ya cubierto por `.gitignore` → `*.tsbuildinfo`) |
| `screenshots/` | 2 PNG de capturas | Ignorado por git; opcionalmente mover a `docs/informes/` |
| `.scratch/`, `.design-sync/`, `.stitch/`, `.hermes/`, `.impeccable/`, `.agent/`, `generated/` | 7 carpetas de tooling | Añadir explícitamente a los `ignores` de ESLint y al `exclude` de tsconfig |
| `public/contacto.html`, `public/contact-hero.html` | HTML servido públicamente | No referenciados por el código; son residuo de prototipado |
| `.next/` | Build cache | Correctamente ignorado |

### 2.3 Raíz: meta-docs con solapamiento

Siete documentos normativos conviven en la raíz:

| Archivo | Bytes | Rol |
|---|---|---|
| `AGENTS.md` | 9.354 | Índice normativo y protocolo de verificación N0–N3 |
| `CLAUDE.md` | 2.033 | Redirige a `AGENTS.md` vía `@AGENTS.md` + reglas de diseño |
| `CONTEXT.md` | 3.030 | Contexto de dominio para agentes |
| `PROJECT.md` | 8.364 | Arquitectura y especificación técnica |
| `PRODUCT.md` | 5.321 | Visión de producto |
| `README.md` | 6.216 | Onboarding humano |
| `DESIGN.md` | 119.018 | Sistema de diseño v2 (canónico de color y tipografía) |

> **Problema:** la identidad de negocio (nombre, ciudad, dirección, tarifas, stack, `ContactPoint` con teléfono y email) está **repetida en 4 de estos documentos** y **ya ha divergido** entre ellos. Cada uno necesitaActualización manual y ninguno es generado desde los demás.

### 2.4 Raíz: 3 archivos de ignore duplicados y divergentes

| Archivo | Líneas | MD5 |
|---|---|---|
| `.aiexclude` | 290 | `42DF7D0B189BFC98B0835E6144E95038` |
| `.geminiignore` | — | `1C0022506D031242E6C87C5A8F575C2C` |
| `.antigravityignore` | — | `1A69B9145E8A85303A749C801D5DF3A8` |
| `.gitignore` | 122 | (contenido propio + bloque que replica la lista de agentes IA) |

Diff mutuo: **90 líneas** entre `.aiexclude` y `.geminiignore`; **68 líneas** entre `.aiexclude` y `.antigravityignore`.

> Son 3 copias denearly del mismo estándar, editadas a mano y ya desincronizadas. Además `.gitignore` replica internamente un bloque entitled *"AI AGENTS IGNORE (Unificado)"*, duplicando lo que esos 3 archivos ya Persian. **Cuatro archivos que mantener sincronizados manualmente.**

### 2.5 Raíz: dos árboles de documentación paralelos con conflicto de canon

- `AGENTS.md` declara `docs/knowledge_base/` **canónico** (reestructuración del 2026-09-26).
- `CLAUDE.md` y `CONTEXT.md` siguen apuntando al árbol **legacy** `docs/agents/` + `docs/marketing/`.

Duplicados semánticos confirmados:

| Legacy (`docs/`) | Canónico (`docs/knowledge_base/`) |
|---|---|
| `docs/agents/issue-tracker.md` | `03-operaciones/issue-tracker.md` |
| `docs/agents/triage-labels.md` | `03-operaciones/triage-labels.md` |
| `docs/marketing/glosario.md` | `02-dominio/glosario.md` |
| `docs/marketing/decisiones.md` | `02-dominio/decisiones.md` |

- `docs/` pesa **19,4 MB** en total.
- 🔴 **Referencia rota verificada:** `docs/agents/prompts-remediacion.md`, citado textualmente en `CLAUDE.md`, **no existe en disco**.
- `docs/STRUCTURE.md` declara *"14 URLs indexables"*; `src/app/sitemap.ts` define **20 rutas**. Documento desactualizado.

### 2.6 Raíz: fuentes de verdad de SEO duplicadas en `public/`

En Next.js, los archivos de `public/` se sirven **antes** que las rutas del App Router. Por tanto:

| Duplicado | Ganador real | Consecuencia |
|---|---|---|
| `public/robots.txt` (rico: Googlebot, Googlebot-Smartphone, AdsBot-Google, Bingbot, Applebot + GPTBot, ClaudeBot, PerplexityBot, Google-Extended, más `Host` y `Sitemap`) **vs** `src/app/robots.ts` (más pobre: solo `*`, Googlebot+Smartphone+AdsBot, y los 4 bots IA) | **`public/robots.txt`** | 🔴 **`src/app/robots.ts` es código muerto.** Y la inversión no es trivial: el archivo estático contiene directivas GEO que el route handler no tiene |
| `public/favicon.ico` **idéntico byte a byte** a `src/app/favicon.ico` (mismo MD5 `08B632E5D82B545931899B6DFEF5A07A`) | `public/favicon.ico` | `src/app/favicon.ico` es redundante |

> ⚠️ Este par **requiere decisión del propietario**: la opción segura es portar las reglas del `.txt` richer a `robots.ts` y borrar el estático (queda fuente única, `/robots.txt` se genera en build). La opción inversa **perdería** directivas GEO de los 4 rastreadores de IA.

---

## 3. Tabla de refactorización de archivos

### 3.1 `src/app/` — 6 archivos que no son enrutamiento nativo de Next.js 16

Se comparó el árbol completo de `src/app/` contra la lista blanca de archivos de ruta: `page`, `layout`, `route`, `template`, `loading`, `error`, `not-found`, `default`, `global-error`, `sitemap`, `robots`, `manifest`, `opengraph-image`, `icon`, `apple-icon`, `favicon.ico`, `globals.css`.

**Resultado: 6 violaciones** (más 9 tests co-localizados, tratados aparte en §3.2).

| # | Ruta actual | Carpeta destino propuesta | Justificación técnica |
|---|---|---|---|
| 1 | `src/app/admin/imagenes/actions.ts` | `src/actions/admin-imagenes.ts` | 9 Server Actions con `'use server'`, `fs/promises` y Genkit. `AGENTS.md` lo exige: *"Server Actions para mutaciones — En `src/actions/`"*. Son 300+ líneas de lógica de negocio e I/O de filesystem dentro de una ruta |
| 2 | `src/app/revisar/actions.ts` | `src/actions/feedback.ts` | 2 Server Actions (`saveFeedback`, `getFeedbackList`). Misma violación de esquema |
| 3 | `src/app/admin/imagenes/AdminImagenesClient.tsx` | `src/components/admin/AdminImagenesClient.tsx` | `'use client'` con `useState` / `useEffect` / `useCallback`. Componente visual, no enrutamiento |
| 4 | `src/app/revisar/RevisarClient.tsx` | `src/components/revisar/RevisarClient.tsx` | `'use client'` con `useState` / `useTransition`. Ídem |
| 5 | `src/app/politica-de-privacidad/PrivacyContent.tsx` | `src/components/legal/PrivacyContent.tsx` | `'use client'` + `motion/react`. Componente extenso de consumo en una ruta legal |
| 6 | `src/app/terminos-y-condiciones/TermsContent.tsx` | `src/components/legal/TermsContent.tsx` | Ídem. Ambos se emparejan bajo `components/legal/` |

> **Impacto en bundle de los #3–#6:** son hojas client. Moverlas a `components/` **no cambia el bundle** (siguen siendo módulos client, ahora importables por rutas hermanas). **Riesgo de regresión: bajo.**

### 3.2 Tests co-localizados en `src/app/` — recomendación: NO mover

| Archivo | Ruta actual |
|---|---|
| `page.test.tsx` | `src/app/page.test.tsx` |
| `contacto.test.tsx` | `src/app/contacto/contacto.test.tsx` |
| `cotizar.test.tsx` | `src/app/cotizar/cotizar.test.tsx` |
| `express.test.tsx` | `src/app/cotizar/express/express.test.tsx` |
| `lowcost.test.tsx` | `src/app/cotizar/lowcost/lowcost.test.tsx` |
| `nuestras-redes.test.tsx` | `src/app/nosotros/nuestras-redes/nuestras-redes.test.tsx` |
| `preguntas-frecuentes.test.tsx` | `src/app/nosotros/preguntas-frecuentes/preguntas-frecuentes.test.tsx` |
| `sobre-nosotros.test.tsx` | `src/app/nosotros/sobre-nosotros/sobre-nosotros.test.tsx` |
| `route.test.ts` | `src/app/api/assistant/route.test.ts` |

**Propuesta: dejarlos donde están.** Argumento:

1. El esquema solicitado define `src/test/` como *"Mocks globales, setups de testing y utilidades de Vitest/Playwright"* — **no** como contenedor de casos de prueba. `src/test/` cumple hoy correctamente con `setup.ts` y `global.d.ts`.
2. La co-localización es la convención recomendada por Next.js y por Vitest: mantiene el test junto a la ruta que valida y hace que `vitest related <archivo>` resuelva por proximidad.
3. Moverlos exigiría reescribir 9 archivos de `vi.mock()` y todos los paths, a cambio de un beneficio estético nulo.

### 3.3 Hooks fuera de `src/hooks/` — 3 violaciones

| # | Ruta actual | Carpeta destino propuesta | Justificación |
|---|---|---|---|
| 7 | `src/components/cotizar/express/hooks/useCotizadorExpress.ts` | `src/hooks/cotizador/useCotizadorExpress.ts` | Hook custom alojado en carpeta de componentes. El esquema dice: *"un hook en `hooks/`"* |
| 8 | `src/components/cotizar/express/hooks/useQuoteAnalytics.ts` | `src/hooks/cotizador/useQuoteAnalytics.ts` | Ídem |
| 9 | `src/components/cotizar/unified/hooks/useCotizadorUnified.ts` | `src/hooks/cotizador/useCotizadorUnified.ts` | Ídem |

> `src/hooks/` contiene hoy 2 hooks (`useGoogleRoute`, `useOSRMRoute`); los 3 de cotizador están dispersos en subcarpetas de componentes. Agruparlos deja 5 hooks en un único lugar.

### 3.4 Archivos de datos dentro de `components/`

| Ruta actual | Decisión propuesta | Justificación |
|---|---|---|
| `src/components/nosotros/preguntas-frecuentes/faqData.ts` | **Mantener en su sitio** (alternativa: `src/data/faq.ts`) | Módulo de datos puro (tipos + array). No encaja en `lib/` porque no es infraestructura ni lógica de negocio. Se mantiene por defecto para no fragmentar la estructura |

### 3.5 🔴 Código muerto verificado — 16 archivos, ~127 KB

Cada archivo se verificó contra **todas** las formas de importación presentes en el repo: `import`, `export`, `import()` dinámico y el barrel `ui/index.ts`.

#### 3.5.1 Archivos inalcanzables (0 referencias de importación)

| Archivo | Bytes | Nota |
|---|---|---|
| `src/components/cotizar/lowcost/CotizadorLowCostForm.tsx` | 17.094 | Superado por `CotizadorForm.tsx` del cotizador unificado |
| `src/components/home/SliderServicios.tsx` | 21.055 | — |
| `src/components/home/HeroPrincipal.tsx` | 16.090 | Reemplazado por `HeroAnimado.tsx` |
| `src/components/home/VisionSection.tsx` | 11.189 | — |
| `src/components/cotizar/express/CotizadorExpressHero.tsx` | 10.081 | — |
| `src/components/cotizar/lowcost/CotizadorLowCostHero.tsx` | 9.953 | — |
| `src/components/seo/SchemaMarkup.tsx` | 6.024 | El JSON-LD vive hoy inline en `layout.tsx` |
| `src/components/nosotros/nuestras-redes/NewsletterSubscribe.tsx` | 5.121 | — |
| `src/components/nosotros/nuestras-redes/NetworksBenefits.tsx` | 4.931 | — |
| `src/hooks/useOSRMRoute.ts` | 3.940 | Nunca importado |
| `src/components/nosotros/preguntas-frecuentes/FaqAccordion.tsx` | 144 | Archivo stub, prácticamente vacío |
| **Subtotal** | **105.520** | |

#### 3.5.2 Primitivas exportadas solo desde el barrel, nunca consumidas

| Archivo | Bytes | Referencia única |
|---|---|---|
| `src/components/ui/RadioCardGroup.tsx` | 7.388 | `ui/index.ts:4` |
| `src/components/ui/StepperVertical.tsx` | 5.652 | `ui/index.ts:7` |
| `src/components/ui/LogosCarousel.tsx` | 4.235 | `ui/index.ts:8` |
| `src/components/ui/StepperHorizontal.tsx` | 4.159 | `ui/index.ts:6` |
| `src/components/ui/BentoGrid.tsx` | 2.734 | `ui/index.ts:10` |
| **Subtotal** | **24.170** | |

> ⚠️ **No se propone borrado inmediato.** `AGENTS.md` y `docs/knowledge_base/01-diseno/primitivas-ui.md` los documentan como primitivas canónicas del sistema de diseño; eliminarlas es una **decisión de producto, no de arquitectura**. Se dejan listadas para decisión del propietario.
>
> Dato técnico: borrarlas **no rompe** `typecheck` ni `lint` (los exports no usados no los reportan), pero reduce el payload potencial de la librería de primitivas.

---

## 4. Diagnóstico de aliases y rutas

### 4.1 🔴 Causa raíz: el alias `@/src/` (no idiomático)

**227 ocurrencias en ~100 archivos.** Ejemplos reales:

```ts
import { prisma } from '@/src/lib/prisma';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/src/components/ui';
import { EXPRESS_TIERS } from '@/src/lib/pricing';
```

Esto **solo resuelve** gracias al fallback `"./*"` de `tsconfig.json`. Consecuencias:

1. **Viola el objetivo de aliases limpios** del encargo: `@/src/lib/...` duplica el segmento `src` que el alias ya implica.
2. **Rompe la encapsulación**: el fallback `./*` permite `import x from '@/prisma/schema'`, es decir importar desde la raíz sin ningún obstáculo.
3. **Fuerza el parche de `vitest.config.ts`**: el alias `'@/src'` existe únicamente por esto.
4. **Elimina el error temprano**: un import mal escrito que atraviese `src/` no falla, simplemente se resuelve.

**Evidencia de que la inconsistencia ya está Consolidada en producción:** el barrel `ui/index.ts` se consume con **ambos estilos en el mismo repo**.

| Estilo | Archivos | Ejemplos |
|---|---|---|
| `@/src/components/ui` | 9 | `ContactHero.tsx`, `HeroAnimado.tsx`, `NetworksHero.tsx`, `FaqHero.tsx`, `AboutHero.tsx`, `EmprendedoresDropoff.tsx`, `EmprendedoresHero.tsx`, `ExpressHero.tsx`, `FlexHero.tsx`, `LowCostHero.tsx` |
| `@/components/ui` | 5 | `MobileNav.tsx`, `OptimizedHeader.tsx`, `ExpressFeatures.tsx`, `ExpressPricing.tsx`, `ExpressUseCases.tsx` |

**Target de corrección:**

| Archivo | Antes | Después |
|---|---|---|
| `tsconfig.json` | `"@/*": ["./src/*", "./*"]` | `"@/*": ["./src/*"]` |
| Imports (227) | `@/src/lib/pricing` | `@/lib/pricing` |
| `vitest.config.ts` | `'@/src'` + `'@'` | solo `'@'` |

> Cambio **mecánico y verificable**: 227 reemplazos, 0 decisiones de diseño.

### 4.2 Imports relativos (6 en total — bajo, pero 2 destructivos)

| Ubicación | Import | Veredicto |
|---|---|---|
| `src/components/cotizar/lowcost/CotizadorLowCostForm.tsx:6` | `'../../ui/AddressAutocomplete'` | 🔴 **Destructivo** → `@/components/ui/AddressAutocomplete` |
| `src/components/cotizar/lowcost/CotizadorLowCostForm.tsx:7` | `'../../ui/DynamicRouteMap'` | 🔴 **Destructivo** → `@/components/ui/DynamicRouteMap` |
| `src/lib/prisma.ts:4` | `'../../generated/prisma/client'` | ⚠️ Sale de `src/` porque el client generado vive en `generated/`. **Candidato a alias dedicado** `@generated/*` |
| `src/lib/promises.test.ts:4` | `'../../next.config'` | ⚠️ `src/` → raíz. Acopla la suite a la config de build; aceptable para un test que valida `redirects` y `headers`, pero conviene documentarlo |
| `src/app/layout.tsx` | `'../components/ClientLayout'` | ⚠️ Relativo en un archivo raíz de Next → `@/components/ClientLayout` |
| `src/components/ClientLayout.tsx` | `'../lib/analytics'` | ⚠️ Ídem → `@/lib/analytics` |

**Además:** `src/app/globals.css:2` → `@config "../../tailwind.config.ts"` (relativo que cruza `src/` → raíz).

> **Veredicto global:** 0 dependencias rotas — `pnpm typecheck` pasa limpio. La deuda es de **higiene y encapsulación**, no de funcionalidad. Los 2 relativos que deben corregirse están además en un **archivo muerto**.

### 4.3 Reglas de React/Next (Vercel) aplicables al diagnóstico

| Regla | Hallazgo | Severidad |
|---|---|---|
| `bundle-barrel-imports` | `ui/index.ts` tiene **14 consumidores y 0 imports por subpath** (100% barrel). `optimizePackageImports` de `next.config.ts` no cubre barrels locales → riesgo de arrastrar `LeafletRouteMap` + Leaflet al cargar `CTANestedPill` | 🟠 Media |
| `bundle-dynamic-imports` | ✅ Correcto: `LeafletRouteMap`, `CarruselRedes` y `motion` ya usan `next/dynamic` | — |
| `bundle-defer-third-party` | ⚠️ `gtag` carga con `strategy="lazyOnload"` (bien), pero los 2 `<script>` inline de GTM/GA están **hardcodeados** en `layout.tsx` sin toggle por entorno | 🟡 Baja |
| `server-parallel-fetching` | ✅ `admin/imagenes/page.tsx` ya usa `Promise.all` para `getImageList()` + `getPageFolders()` | — |
| `client-swr-dedup` | ⚠️ No hay SWR. `AddressAutocomplete` y los cotizadores hacen fetch directo a `/api/places/*` y `/api/routes/*` sin deduplicación de requests | 🟡 Media |
| `client-event-listeners` | `const subscribe = () => () => {}` en `template.tsx` es un no-op deliberado para `useSyncExternalStore`; correcto | — |
| `advanced-init-once` | ⚠️ `lib/gemini.ts` cachea el client en variable de módulo (mutable module state). Aceptable para un singleton de SDK, pero es exactamente el patrón que la regla marca | 🟡 Baja |
| `async-parallel` | ✅ Aplicado donde correspondía | — |

### 4.4 Cross-check con React best practices por corrección

Ninguna de las reubicaciones propuestas (§3) puede degradar el rendimiento de render:

- Mover 4 hojas `'use client'` de `app/` a `components/` **no cambia el bundle client** ni el árbol de Server Components.
- Mover 2 archivos de Server Actions a `src/actions/` **no cambia el límite de confianza**: `'use server'` viaja con el archivo, y la frontera sigue siendo el import desde la ruta.
- Mover 3 hooks a `src/hooks/` es un cambio de ruta de módulo; los hooks siguen siendo importados por los mismos componentes.

---

## 5. Inventario de hallazgos por severidad

| Sev | # | Hallazgo | Ubicación |
|---|---|---|---|
| 🔴 | 1 | `tsconfig.json` con fallback `./*` habilitando 227 imports `@/src/` no idiomáticos en ~100 archivos | `tsconfig.json` |
| 🔴 | 2 | `tailwind.config.ts` + `@theme` de `globals.css` = dos fuentes de verdad para la misma paleta | `tailwind.config.ts`, `src/app/globals.css:2-40` |
| 🔴 | 3 | `public/robots.txt` anula a `src/app/robots.ts` → route handler muerto, y el `.txt` tiene reglas GEO que el `.ts` no tiene | `public/robots.txt`, `src/app/robots.ts` |
| 🔴 | 4 | 6 archivos de componentes y Server Actions dentro de `src/app/` | `src/app/admin/imagenes/`, `src/app/revisar/`, `src/app/*/…Content.tsx` |
| 🔴 | 5 | 3 hooks fuera de `src/hooks/` | `src/components/cotizar/*/hooks/` |
| 🔴 | 6 | Baseline de `AGENTS.md` **falsa**: declara 11 tests fallando, hay 2 | `AGENTS.md` |
| 🟠 | 7 | 3 archivos de ignore casi idénticos y divergentes (68-90 líneas de diff mutuo) | `.aiexclude`, `.geminiignore`, `.antigravityignore` |
| 🟠 | 8 | `eslint.config.mjs` ignora tooling local → 2 de 3 warnings son ruido de `.design-sync/` | `eslint.config.mjs` |
| 🟠 | 9 | Árboles `docs/` paralelos con conflicto de canon declarado + 1 referencia rota | `docs/knowledge_base/` vs `docs/agents/` + `docs/marketing/` |
| 🟠 | 10 | 7 meta-docs en la raíz con identidad de negocio duplicada y divergente | raíz |
| 🟠 | 11 | `vitest.config.ts` con alias parche `'@/src'` | `vitest.config.ts` |
| 🟠 | 12 | 16 archivos / ~127 KB de código muerto verificado | `src/components/`, `src/hooks/` |
| 🟡 | 13 | Sin `"packageManager"` en `package.json`; `"test"` en watch mode (sin script CI) | `package.json` |
| 🟡 | 14 | `public/favicon.ico` duplicado byte a byte de `src/app/favicon.ico` | `public/`, `src/app/` |
| 🟡 | 15 | `.npmrc` y `pnpm-workspace.yaml` declaran la misma allow-list de builds | raíz |
| 🟡 | 16 | 2 imports relativos destructivos `../../ui/` (en archivo muerto) | `src/components/cotizar/lowcost/CotizadorLowCostForm.tsx` |
| 🟡 | 17 | 2 HTML huérfanos servidos en `public/` | `public/contacto.html`, `public/contact-hero.html` |
| 🟡 | 18 | `docs/STRUCTURE.md` dice 14 URLs; `src/app/sitemap.ts` define 20 | `docs/STRUCTURE.md` |
| 🟡 | 19 | `tsconfig.json` inyecta `@testing-library/jest-dom` en tipos de producción | `tsconfig.json` |

---

## 6. Lo que está bien (línea base a preservar)

- `next.config.ts` **impecable**: `redirects` (BL-01), `images`, cabeceras de seguridad, `optimizePackageImports`, `turbopack`.
- `src/proxy.ts` correctamente implementado con la convención de Next.js 16, y bien documentado.
- `src/lib/pricing.ts` y la lógica de los cotizadores **intactos** — explícitamente fuera de alcance, no se tocan.
- `src/actions/quote.ts` ya reside en la carpeta correcta.
- Frontera Server / Client Components bien delimitada.
- `src/test/setup.ts` bien estructurado (mocks de `DynamicRouteMap`, `FloatTiltCard`, `timeline-animation`).
- `Promise.all` ya aplicado donde correspondía.
- `LeafletRouteMap` + `DynamicRouteMap` **no son duplicados**: el segundo es un wrapper `next/dynamic` con `ssr: false` del primero. Correcto.
- `src/assets/fonts/` **no son assets muertos**: son consumidas por `src/app/servicios/envios-express/opengraph-image.tsx` vía Satori, que no acepta WebP.
- Working tree limpio, sin cambios pendientes.

---

## 7. Plan de ejecución propuesto (tras autorización)

Ordenado por riesgo creciente. Cada bloque se verifica antes de pasar al siguiente.

| Fase | Alcance | Riesgo |
|---|---|---|
| **A** | Gobernanza de raíz: `ignores` de ESLint, `exclude` de tsconfig, `"packageManager"`, script `test:ci`, resolver `robots.txt` vs `robots.ts`, favicon duplicado, corregir baseline de `AGENTS.md` | 🟢 Nulo |
| **B** | Alias: `tsconfig` a una sola entrada, 227 reescrituras `@/src/` → `@/`, borrar alias `'@/src'` de `vitest.config.ts`, los 2 relativos destructivos | 🟢 Mecánico |
| **C** | Reubicaciones: 6 archivos fuera de `src/app/`, 3 hooks a `src/hooks/cotizador/` | 🟡 Bajo |
| **D** | `src/app/layout.tsx` y `src/components/ClientLayout.tsx` a alias; alias `@generated/*` para Prisma | 🟡 Bajo |
| **E** | Consolidación de `tailwind.config.ts` y lista de código muerto | 🟠 **Requiere decisión** |
| **F** | Verificación de cierre N3: `pnpm typecheck` + `pnpm run lint` + `pnpm exec vitest run` secuencial, y `pnpm build` | — |

---

## 8. Decisiones pendientes del propietario

Ninguna de estas se puede resolver sin criterio de producto:

1. **Fase E — `tailwind.config.ts`:** ¿consolidar toda la paleta en el `@theme` de `globals.css` y **borrar** `tailwind.config.ts` (recomendado: fuente única, elimina la ruta relativa `../../`), o **mantener** el config JS y vaciar el `@theme` duplicado?
2. **Fase E — código muerto (16 archivos, ~127 KB):** ¿borrar, dejar en lista de revisión, o mantener intacto?
3. **Fase A — `robots.txt`:** ¿portar las reglas GEO del `public/robots.txt` richer a `src/app/robots.ts` y borrar el estático (recomendado, sin pérdida de directivas), o conservar el estático y aceptar `robots.ts` muerto?
4. **Fase C — 6 archivos de `src/app/`:** ¿mover a `components/` + `actions/` como se propone, o mantener los panels admin y revisar auto-contenidos como excepción consciente?

---

*Reporte generado el 2026-09-29. Auditoría de solo lectura: no se modificó ningún archivo del repositorio salvo la creación de este documento.*
