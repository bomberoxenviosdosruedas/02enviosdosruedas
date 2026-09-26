# AGENTS.md — Protocolo Autónomo de Desarrollo

## 🛠️ Stack Tecnológico de Referencia (2026)

- **Framework:** Next.js 16 (App Router, React 19, Turbopack por defecto).
- **Estilos:** Tailwind CSS v4 (Estructura CSS-first mediante `@theme`, prohibido usar utilitarias legacy).
- **Base de Datos:** Prisma ORM 5 + PostgreSQL 16.
- **Validación y Formularios:** React Hook Form + Zod Schemas.
- **Testing:** Vitest (Unitario) y Playwright (End-to-End).

## 📌 Contexto Local Inmutable

Antes de inicializar cualquier generación de código, lee los esquemas e índices locales para evitar alucinaciones:

- **Definición de Modelos:** `prisma/schema.prisma`
- **Configuración de Estilos:** `src/app/globals.css`.

## ⚙️ Flujo Obligatorio de Comandos (Entorno Unix)

Ejecuta las tareas usando exclusivamente `pnpm`:

- **Servidor de Desarrollo:** `pnpm dev`
- **Generación de Clientes:** `pnpm prisma generate`
- **Validación Estricta:** `pnpm typecheck` (Debe pasar al 100% antes de dar una tarea por terminada).
- **Pruebas de Regresión:** `pnpm exec vitest run`

## 🏗️ Reglas de Arquitectura en Next.js 16

1. **Componentes de Servidor por Defecto (RSC):** Toda página dentro de `src/app/` es un Server Component. No agregues `'use client'` a menos que manejes hooks de estado (`useState`, `useEffect`) o eventos interactivos.
2. **Tratamiento de Rutas Dinámicas:** Asegúrate de tipar correctamente los objetos `params` e `searchParams` de acuerdo con las firmas asíncronas nativas de Next.js 16.
3. **Manejo de Respuestas Asíncronas:** Las operaciones de lectura/escritura en base de datos deben procesarse mediante _Server Actions_ localizadas en archivos independientes o bajo la directiva explícita dentro de funciones asíncronas.
