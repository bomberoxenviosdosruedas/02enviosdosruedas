# CLAUDE.md - Guía de Contexto Operativo

Guía operativa para Claude Code y asistentes CLI que interactúan con la base de código de **Envíos DosRuedas**.

---

## 1. Comandos Canónicos de Ejecución

El único gestor de paquetes autorizado en este proyecto es **pnpm** (`pnpm@12.8.1`). Queda prohibido el uso de `npm`, `yarn` o `bun`.

### Ciclo de Desarrollo y Construcción
```bash
pnpm dev             # Inicia el servidor de desarrollo local (next dev)
pnpm build           # Genera Prisma Client y compila para producción (prisma generate && next build)
pnpm start           # Inicia el servidor optimizado de producción (next start)
pnpm clean           # Limpia los directorios temporales de compilación de Next.js
pnpm postinstall     # Genera los tipos de Prisma Client en generated/prisma
```

### Verificación y Calidad Estática
```bash
pnpm typecheck       # Verificación estricta de TypeScript sin emitir código (tsc --noEmit)
pnpm lint            # Análisis estático completo con ESLint flat config (eslint .)
pnpm exec eslint <archivo> # Ejecuta ESLint sobre un archivo puntual
```

### Pruebas Unitarias y de Regresión (Vitest)
```bash
pnpm test:ci         # Ejecuta la suite de pruebas una sola vez sin modo interactivo (vitest run)
pnpm test:ui         # Abre la interfaz visual de Vitest en el navegador (vitest --ui)
pnpm exec vitest related <archivo> --run # Ejecuta pruebas vinculadas al archivo modificado
```
> **Regla de oro:** No ejecutes `pnpm test` en entornos automatizados o CLI no interactivos, ya que inicia Vitest en modo observador continuo (watch mode). Empleá siempre `pnpm test:ci` o agregá la bandera `--run`.

### Scripts Operativos Auxiliares
```bash
pnpm pdf             # Genera capturas y reportes PDF vía script de Python
pnpm pdf:prod        # Genera reportes PDF apuntando a producción
pnpm export:texts    # Extrae textos y copys de las vistas del sitio
```

---

## 2. Delimitación de Contexto y Gestión de Tokens (Token Hygiene)

Para evitar saturación de tokens, lecturas innecesarias y fugas de contexto, respetá los patrones declarados en `.claudeignore`, `.aiexclude` y `.antigravityignore`:

1. **Lectura Quirúrgica:** Nunca leas directorios completos ni archivos masivos generados. Apuntá directamente a los archivos específicos de `src/` relevantes a tu tarea.
2. **Archivos Estrictamente Ignorados:**
   - **Artefactos de compilación:** `.next/`, `generated/`, `dist/`, `build/`, `out/`, `tsconfig.tsbuildinfo`, `*.map`.
   - **Dependencias y bloqueos:** `node_modules/`, `pnpm-lock.yaml`, `package-lock.json`, `yarn.lock`.
   - **Cachés de testing y linters:** `.turbo/`, `.eslintcache`, `.vitest/`, `coverage/`, `test-results/`.
   - **Tooling de agentes:** `.agent/`, `.agents/`, `.claude/`, `.hermes/`, `.impeccable/`, `.opencode/`, `.stitch/`, `.scratch/`.
   - **Multimedia y binarios:** `*.webp`, `*.png`, `*.svg`, `*.pdf`, `*.woff2` (evita consumo masivo de visión).
   - **Documentación histórica y scrapings:** `docs/paginas/`, `docs/imagenes/`, `docs/sitio_completo.html`.
3. **Secretos y Seguridad:** Nunca leas, imprimas ni crees archivos `.env` reales (`.env`, `.env.local`, `.env.production`). El único archivo de plantilla autorizado para referencia es `.env.example`.

---

## 3. Arquitectura Full-Stack en `src/`

Toda la lógica de producción vive exclusivamente en `src/`, organizada en capas con responsabilidades desacopladas:

```
src/
├── actions/         # Server Actions ('use server'): mutaciones seguras validadas con Zod
├── app/             # Rutas, layouts y metadata de Next.js App Router
│   ├── (rutas)/     # Vistas públicas: cotizar, servicios, cobertura, contacto, nosotros, guías
│   ├── admin/       # Panel administrativo interno
│   ├── api/         # Route Handlers: assistant (asistente IA), places y routes (Google Maps)
│   ├── globals.css  # Tokens @theme Tailwind v4 y variables CSS corporativas
│   └── layout.tsx   # Layout raíz con configuración de fuentes y proveedores globales
├── assets/          # Recursos estáticos y fuentes locales
├── components/      # Componentes organizados por dominio y capa visual
│   ├── ui/          # Primitivas reutilizables (DoubleBezelCard, CTANestedPill, InputField)
│   ├── layout/      # Cabecera (OptimizedHeader), footer y carrusel de redes
│   └── [dominio]/   # Componentes específicos de vista (home, cotizar, servicios, etc.)
├── hooks/           # Custom hooks reutilizables (cotizador unificado, analítica)
├── lib/             # Núcleo de lógica pura y clientes externos:
│   ├── pricing.ts   # Algoritmos tarifarios y tramos por distancia vial
│   ├── promises.ts  # Constantes oficiales de promesas de entrega, cortes horarios y límites
│   ├── prisma.ts    # Instancia centralizada de Prisma Client para PostgreSQL
│   ├── gemini.ts    # Cliente oficial de Google GenAI
│   ├── genkit.ts    # Configuración de Genkit
│   ├── whatsapp.ts  # Constructor de enlaces estructurados a WhatsApp con trazabilidad
│   └── utils.ts     # Utilidades de clases CSS con clsx y tailwind-merge
└── test/            # Configuración de entorno y extensiones para Vitest
```

---

## 4. Convenciones de Código y Compilación

- **TypeScript Estricto:** Configurado con `strict: true`, target `ES2022`, module `esnext` y resolución `bundler`. Prohibido el uso de `any` implícitos o casting inseguro.
- **Alias de Importación:**
  - `@/*` mapea exclusivamente a `./src/*`.
  - `@generated/*` mapea a `./generated/*` (Prisma Client).
  - Evitá rutas relativas con saltos múltiples (`../../../../lib`).
- **Directivas React 19:**
  - Los componentes dentro de `src/app/` son Server Components por defecto.
  - Usá `'use client'` únicamente en las hojas del árbol que manejen estado (`useState`, `useReducer`), ciclos de vida (`useEffect`), referencias al DOM o librerías de animación basadas en browser.
  - Toda mutación o Server Action debe declarar `'use server'` en la cabecera.
- **Validación Contractual:** Toda entrada de datos externos o formularios debe validarse de forma exhaustiva con esquemas **Zod** antes de operar con la base de datos o APIs externas.
- **Estilos:** Empleá clases de utilidad de Tailwind CSS v4 y los tokens semánticos corporativos configurados en `src/app/globals.css`.

---

## 5. Reglas Mandatorias de Interacción

- Mantené siempre el **voseo rioplatense** en textos dirigidos a humanos (comentarios de código, documentación técnica y mensajes).
- No utilices guiones largos ni en-dash en la redacción en español (empleá dos puntos, paréntesis o guion corto `-`).
- Nunca modifiques archivos listados en `.claudeignore` o `.aiexclude`.
