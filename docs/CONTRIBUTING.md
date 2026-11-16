# 🤝 Guía de Contribución — Envíos DosRuedas

Bienvenido a la guía de contribución para el desarrollo en **Envíos DosRuedas**.

## 1. Prerrequisitos y Configuración del Entorno

Gestor de paquetes obligatorio: **pnpm** (`pnpm@12.8.1`). Queda prohibido el uso de `npm`, `yarn` o `bun`.

1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   pnpm install
   ```
3. Configurar las variables de entorno basándose en la sección de entorno a continuación.
4. Generar el cliente Prisma:
   ```bash
   pnpm postinstall
   ```

---

## 2. Referencia de Comandos (Scripts)

<!-- AUTO-GENERATED -->
| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia servidor de desarrollo local (Next.js 16) |
| `pnpm build` | Genera Prisma Client y compila producción (`prisma generate && next build`) |
| `pnpm start` | Inicia servidor de producción compilado |
| `pnpm clean` | Limpia caché de Next.js (`.next/`) |
| `pnpm typecheck` | Chequeo estricto de tipos TypeScript sin emitir archivos (`tsc --noEmit`) |
| `pnpm lint` | Análisis estático completo con ESLint 9 Flat Config |
| `pnpm test:ci` | Ejecuta toda la suite una sola vez (modo no interactivo con Vitest) |
| `pnpm test:ui` | Panel interactivo de Vitest en navegador |
| `pnpm eval:llm` | Evaluación con Golden Dataset contra Gemini 3.5 Flash |
| `pnpm pdf` | Genera reportes PDF locales vía script Python |
| `pnpm export:texts` | Extrae copys y textos del sitio |
<!-- /AUTO-GENERATED -->

---

## 3. Variables de Entorno (`.env.example`)

| Variable | Requerido | Descripción | Ejemplo |
|----------|----------|-------------|---------|
| `DATABASE_URL` | Sí | Cadena de conexión PostgreSQL (Prisma) | `postgresql://user:pass@localhost:5432/db` |
| `GEMINI_API_KEY` | Sí | API Key de Google GenAI para asistente y evals | `AIzaSy...` |

---

## 4. Pruebas Automatizadas y Calidad

- **Nunca ejecutar `pnpm test` a secas** en CLI/CI (inicia en modo watch indefinido). Usar `pnpm test:ci`.
- **Salvaguarda de Copy:** El test estático `src/lib/copy-guard.test.ts` valida que no se introduzcan afirmaciones comerciales no autorizadas.
- **Voseo Rioplatense:** Todo texto dirigido al usuario debe usar voseo cordial y evitar guiones largos en español.

---

## 5. Proceso de Pull Request
1. Crear una rama descriptiva.
2. Ejecutar `pnpm typecheck`, `pnpm lint` y `pnpm test:ci`.
3. Enviar PR con descripción detallada.
