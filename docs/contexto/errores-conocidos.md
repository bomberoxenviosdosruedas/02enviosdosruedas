# Errores Conocidos y Gotchas

## 1. Turbopack en Next.js
*   **Problema:** Un error no especificado pero recurrente de Turbopack causaba problemas en desarrollo. Adicionalmente, el `hot-reload` en Windows presenta inestabilidades.
*   **Workaround Actual:** Se declaró un objeto vacío `turbopack: {}` en `next.config.ts` para silenciar el error.
*   **Gotcha:** En Windows, si los cambios no se reflejan automáticamente en el navegador, se debe utilizar `pnpm dev --webpack` en lugar de `pnpm dev` para forzar el motor antiguo con opciones de `polling`.

## 2. Compilación y Linter (ESLint)
*   **Problema:** La configuración estricta de `eslint` producía errores de compilación (`next build`) que bloqueaban el despliegue o la generación del build.
*   **Workaround Actual:** La clave `eslint` (usualmente `ignoreDuringBuilds`) fue removida de `next.config.ts`.
*   **Gotcha:** El proyecto podría contener errores de linting que pasarán inadvertidos en el pipeline de build. Es recomendable correr `pnpm run lint` manualmente antes de hacer commit.

## 3. Estado de la Base de Datos (Prisma)
*   **Problema/Gotcha:** El esquema `schema.prisma` contiene modelos de ejemplo ("Starter models — replace with your own") como `User` y `Post` que coexisten con modelos de dominio productivos (`ServiceType`, `PriceRange`).
*   **Impacto:** Esto indica una deuda técnica en la inicialización o limpieza del ORM. Se deben ignorar o refactorizar próximamente.

## 4. Cobertura de Tests
*   **Problema/Gotcha:** El proyecto carece totalmente de tests y configuración de testing. Un escaneo exhaustivo no encuentra archivos relacionados. Cualquier refactorización profunda debe realizarse con cuidado ya que no hay red de seguridad automatizada.

## 5. Deuda Técnica Menor en Componentes
*   **Gotcha:** Existen marcadores en el código como `TODO MDQ` (ej. en `src/components/HeroSection.tsx`) que señalan ubicaciones pendientes de ser reemplazadas con datos locales dinámicos o contenido final de Mar del Plata.
