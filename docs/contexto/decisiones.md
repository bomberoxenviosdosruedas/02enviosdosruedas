# Decisiones Técnicas

## Next.js App Router (React 19)
*   **Decisión:** Se adoptó Next.js con el nuevo App Router y soporte experimental para React 19.
*   **Porqué:** Provee mejor rendimiento mediante Server Components por defecto, minimizando el JS enviado al cliente, y es el estándar de desarrollo moderno para aplicaciones React recomendadas oficialmente.

## Base de Datos y ORM (Prisma con PostgreSQL)
*   **Decisión:** Se implementó Prisma ORM (`@prisma/adapter-pg`) sobre una base de datos PostgreSQL.
*   **Porqué:** Prisma ofrece un cliente altamente tipado que se integra perfectamente con TypeScript, previniendo errores en tiempo de ejecución.
*   **Descartado:** [PENDIENTE: Alternativas como Drizzle u otros ORM no están mencionadas, pero Prisma suele ser elegido por su rapidez de desarrollo].

## Manejo de Estilos (Tailwind CSS v4)
*   **Decisión:** Uso del sistema de variables CSS nativo (`@theme` en Tailwind v4) y estricta prohibición de colores hexadecimales ad-hoc en las vistas de React.
*   **Porqué:** Mantiene coherencia absoluta de diseño (Design System en `DESIGN.md`), permitiendo cambios unificados rápidos y prevención de deuda técnica en la UI.

## Workaround para Turbopack
*   **Decisión:** Declarar `{ turbopack: {} }` en `next.config.ts`.
*   **Porqué:** Para silenciar un error específico de Turbopack. También se mantuvo una configuración antigua de `webpack` (con `watchOptions`) como alternativa (`pnpm dev --webpack`) por problemas de recarga automática (`hot-reload`) en sistemas Windows.

## Silenciamiento de ESLint en Build
*   **Decisión:** Se eliminó la propiedad `eslint` en `next.config.ts`.
*   **Porqué:** Según los comentarios del archivo, causaba problemas y fallos bloqueantes durante el proceso de compilación del proyecto.
