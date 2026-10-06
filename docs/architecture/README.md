# Arquitectura Técnica — Envíos DosRuedas

Bienvenido al centro de documentación arquitectónica de **Envíos DosRuedas** (Mar del Plata). Este directorio define la estructura técnica del sistema, el motor de cotización, los contratos de Server Actions, el sistema de diseño visual y el protocolo de verificación automatizada.

---

## Índice de Documentación Arquitectónica

1. [Visión General del Sistema (System Overview)](./01-system-overview.md)
   - Stack tecnológico principal (Next.js 16, React 19, Tailwind CSS v4, Prisma ORM, Vitest).
   - Estructura de directorios y límites de responsabilidad (`src/app`, `src/actions`, `src/lib`, `src/components`, `src/hooks`).
   - Paradigma Server Components vs Client Components.

2. [Motor de Cotización y Dominio de Negocio (Domain & Pricing Engine)](./02-domain-pricing-engine.md)
   - Arquitectura del motor de cálculo (`src/lib/pricing.ts` y fallback Prisma `PriceRange`).
   - Tarifas Express vs LowCost, regla del `Math.ceil(km)` para tramos excedentes (10 a 20 km).
   - Tarifa de periferia fuera del ejido urbano (`$1.000` / km de ruta).
   - Tarifas fijas y recargos (`src/lib/promises.ts`).
   - Restricciones absolutas de negocio (Guardrails de copy y peso).

3. [Server Actions e Integraciones (Server Actions & APIs)](./03-server-actions-and-integrations.md)
   - `calculateQuoteAction` (`src/actions/quote.ts`): Caching seguro, fallbacks resilientes y sanitización de errores.
   - Proxies de API con Google Places Autocomplete/Details y Google Directions API (`src/proxy.ts` / `src/app/api/`).
   - Envío de formularios e integración con WhatsApp (`feedback.ts`, `whatsapp.ts`).

4. [Sistema de Diseño e Interfaces de Usuario (UI & Design System)](./04-ui-design-system.md)
   - Paleta institucional estricta (Azul `#0950F6`, Amarillo `#FFEC01`, Blanco `#FFFFFF`).
   - Tipografías (Anton 400 en titulares, Outfit en cuerpo, Geist Mono en cifras numéricas).
   - Patrón de contenedores *Double Bezel* y grillas Bento asimétricas.
   - Accesibilidad (A11y, touch targets ≥44px, `prefers-reduced-motion`).

5. [Protocolo de Verificación y Testing (Verification & QA Protocol)](./05-testing-verification-protocol.md)
   - Suite de pruebas automatizadas con Vitest y JSDOM (`pnpm exec vitest --run`).
   - Niveles de verificación incremental N0 a N3.
   - Reglas estricta de TypeScript (`pnpm typecheck`) y linters.

---

> **Mantenimiento**: Cualquier modificación estructural en `src/` o en las reglas de cotización debe ser reflejada inmediatamente en los documentos correspondientes de esta carpeta.
