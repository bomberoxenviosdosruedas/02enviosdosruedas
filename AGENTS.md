# AGENTS.md - Contexto Operativo y Arquitectura para Agentes

> Guía de referencia avanzada para agentes autónomos y asistentes de IA en **Envíos DosRuedas** (Mar del Plata).

---

## 1. Stack Tecnológico y Comandos Esenciales
* **Gestor autorizado:** `pnpm@12.8.1` (Prohibido `npm`, `yarn`, `bun`).
* **Desarrollo:** `pnpm dev` (Next.js App Router)
* **Build y Prisma:** `pnpm build` (`prisma generate && next build`)
* **Verificación Estricta:** `pnpm typecheck` (`tsc --noEmit`) y `pnpm lint` (`eslint .`)
* **Testing:** `pnpm test:ci` (Vitest en modo no interactivo; **nunca** ejecutar `pnpm test` a secas en modo watch).
* **Evaluación LLM:** `pnpm eval:llm` (contra Golden Dataset en `src/lib/llm-eval.ts`).

---

## 2. Dominio de Negocio y Arquitectura Core
* **Última Milla en Mar del Plata:** Operaciones basadas en flota propia (base física en Friuli 1972, Chauvín), sin tercerización, conectando los 5 radios zonales de la ciudad.
* **Cotización Unificada (`src/hooks/cotizador/useCotizadorUnified.ts`):** Motor tarifario basado en distancia vial calculada por Google Maps API y tramos definidos en `src/lib/pricing.ts` y `src/lib/promises.ts`.
* **Cortes Horarios y Promesas:** Los servicios (Express, LowCost, Flex, Same Day, E-commerce 24hs) operan bajo franjas horarias estrictas documentadas en `src/lib/promises.ts` (ej. corte LowCost 13:00 hs, Flex 15:00 hs).
* **Base de Datos:** PostgreSQL con Prisma ORM (`prisma/schema.prisma`). Cliente centralizado en `src/lib/prisma.ts`.

---

## 3. Normas y Convenciones de Código
* **Voseo Rioplatense:** Obligatorio en todos los textos dirigidos a humanos (comentarios de código, documentación y mensajes).
* **Formato de Enlaces:** Usar formato Markdown con esquema `file:///` y barras `/` para referencias a archivos y símbolos.
* **Salvaguardas de Copy (`src/lib/copy-guard.test.ts`):** Respetar estrictamente los términos permitidos (ej. capacidad estándar de bulto de 5 kg / 40x40x30 cm; evitar frases prohibidas como "en 2 horas" o "sin sorpresas").
* **Estilo Visual:** Tailwind CSS v4, componentes estilizados con primitivas robustas (`DoubleBezelCard`, `CTANestedPill`) y animaciones con `motion/react` respetando `useReducedMotion`.
