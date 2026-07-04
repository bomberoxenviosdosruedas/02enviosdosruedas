# Flujo de Trabajo

## Preparación del Entorno
1.  **Requisitos:** Node.js (v18+) y `pnpm` instalado de forma global. PostgreSQL activo en el entorno de desarrollo.
2.  **Instalación:** Ejecutar `pnpm install` para instalar dependencias.
3.  **Variables de Entorno:** Copiar `.env.example` a `.env.local` y configurar `GEMINI_API_KEY` y `DATABASE_URL`.
4.  **Base de Datos:**
    *   Generar el cliente: `pnpm prisma generate`
    *   Sincronizar el esquema: `pnpm prisma db push`
5.  **Desarrollo:** Levantar la app con `pnpm dev`. El entorno de Turbopack será usado por defecto (a menos que se fuerce webpack).

## Cambios y Convenciones de Código
*   Antes de hacer cambios, revisar las reglas de `AGENTS.md` y `DESIGN.md`.
*   Usar componentes de servidor por defecto.
*   El código modificado debe respetar el "Voseo Rioplatense" y el año "2026" para copys del cliente.
*   Mantener el estricto tipado de TypeScript.

## Checklist de "Terminado"
*   [ ] Cambios en UI utilizan variables oficiales de Tailwind (ej. `bg-brand-blue`). No se usan colores Hexadecimales directamente.
*   [ ] Los textos en front-end referencian modismos argentinos y locaciones de Mar del Plata.
*   [ ] El proyecto compila correctamente (`pnpm build`).
*   [ ] [PENDIENTE: Ejecución de tests una vez configurados].
*   [ ] Se generaron los clientes de Prisma si hubo cambios en la base de datos (`pnpm prisma generate`).

## Despliegue (Deploy)
*   **Build:** La configuración de Next.js está establecida como `output: 'standalone'`, ideal para contenedores Docker o plataformas Vercel-like.
*   Asegurar que todas las variables de entorno `.env` de producción estén correctamente mapeadas en el entorno destino antes del deploy.
