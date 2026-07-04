# Arquitectura

## Stack Tecnológico
*   **Framework:** Next.js (App Router, soporte experimental React 19).
*   **Lenguaje:** TypeScript.
*   **Estilos:** Tailwind CSS v4.
*   **Base de Datos y ORM:** PostgreSQL con Prisma ORM (`@prisma/adapter-pg`).
*   **Mapas:** Leaflet (`leaflet`).
*   **Animaciones:** Motion (`motion/react`) y GSAP.
*   **Gestor de Paquetes:** pnpm.

## Mapa de Carpetas Principal
*   `src/app/`: Rutas principales de la aplicación (Next.js App Router).
    *   `cotizar/`: Módulos de cotización interactiva (Express y LowCost).
    *   `servicios/`: Páginas informativas de servicios.
    *   `contacto/`, `nosotros/`: Páginas institucionales.
    *   `api/`: Rutas de API (e.g. `api/assistant`).
*   `src/components/`: Componentes interactivos y reutilizables.
    *   `ui/`: Widgets genéricos y mapas interactivos.
    *   `layout/`: Elementos globales como Header y Footer.
    *   `home/`, `servicios/`, `cotizar/`, `contacto/`, `nosotros/`: Componentes específicos por sección.
*   `src/lib/`: Utilidades generales (ej. `prisma.ts`, `utils.ts`).
*   `prisma/`: Esquema de la base de datos (`schema.prisma`) y migraciones.
*   `docs/`: Documentación del proyecto y guías.

## Flujo de Datos
*   Las vistas utilizan **Next.js Server Components** por defecto.
*   Las interacciones del cliente (mapas, animaciones, cotizadores) utilizan la directiva `'use client'`.
*   [PENDIENTE: Flujo exacto de la base de datos a las vistas, no se observa uso extenso de Prisma en los archivos inspeccionados más allá de la conexión en `src/lib/prisma.ts`].

## Qué NO existe
*   **Tests:** No hay directorio de tests, ni frameworks de testing instalados (como Jest o Playwright).
*   **Storybook:** No se detecta un catálogo de componentes interactivo.
*   **Docker:** No existe un `Dockerfile` ni un `docker-compose.yml`.
