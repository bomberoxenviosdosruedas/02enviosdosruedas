# Especificación de Arquitectura y Configuración
**Proyecto:** Envíos DosRuedas
**Entorno:** Next.js 16 (App Router), TypeScript 5.7.3, Tailwind CSS v4, Prisma ORM

---

## 1. Inventario Exacto de Dependencias (`package.json`)

### Información General
- **Nombre:** `envios-dosruedas`
- **Versión:** `0.1.0`
- **Privado:** `true`
- **Tipo de Módulo:** `module` (ESM native)
- **Gestor de Paquetes:** `pnpm@12.8.1`

### Scripts Npm
```json
{
  "dev": "next dev",
  "build": "prisma generate && next build",
  "start": "next start",
  "lint": "eslint .",
  "clean": "next clean",
  "typecheck": "tsc --noEmit",
  "postinstall": "prisma generate",
  "test": "vitest",
  "test:ci": "vitest run",
  "test:ui": "vitest --ui",
  "eval:llm": "tsx scripts/eval-llm.ts",
  "pdf": "python scripts/generate_page_pdf.py",
  "pdf:prod": "python scripts/generate_page_pdf.py --url https://enviosdosruedas.com",
  "export:texts": "python scripts/extract_site_texts.py"
}
```

### Dependencias de Producción (`dependencies`)
| Paquete | Versión Exacta | Propósito / Rol en la Arquitectura |
| :--- | :--- | :--- |
| `@genkit-ai/google-genai` | `^1.42.0` | Integración de IA con Google GenAI / Gemini vía Firebase Genkit |
| `@google/genai` | `^2.24.0` | SDK nativo de Google Gemini AI |
| `@hookform/resolvers` | `^5.9.1` | Adaptadores de validación de esquemas (Zod) para React Hook Form |
| `@number-flow/react` | `^0.6.2` | Componente de animación fluida de transiciones numéricas (tarifas y métricas) |
| `@prisma/adapter-pg` | `^7.10.0` | Adaptador de base de datos Postgres nativo para Prisma ORM v7 |
| `@prisma/client` | `^7.10.0` | Cliente ORM tipado para la base de datos PostgreSQL |
| `@radix-ui/react-accordion` | `^1.2.20` | Primitiva accesible sin estilo para preguntas frecuentes (FAQ) |
| `@radix-ui/react-dialog` | `^1.1.23` | Primitiva accesible de ventanas modales y diálogos |
| `@radix-ui/react-icons` | `^1.3.2` | Iconos de Radix UI |
| `@radix-ui/react-navigation-menu` | `^1.2.22` | Primitiva de menú de navegación accesible para el Header |
| `@radix-ui/react-slot` | `^1.3.3` | Composición de componentes primitivos mediante `asChild` |
| `@vercel/speed-insights` | `^2.0.0` | Monitoreo de rendimiento Core Web Vitals en Vercel |
| `autoprefixer` | `^10.6.1` | Procesador de prefijos CSS vendor (compatibilidad) |
| `class-variance-authority` | `^0.7.1` | Gestión de variantes de componentes UI (CVA) |
| `clsx` | `^2.1.1` | Construcción condicional de clases de Tailwind/CSS |
| `dotenv` | `^18.0.4` | Carga de variables de entorno desde `.env` |
| `genkit` | `^1.42.0` | Framework de desarrollo de IA / Agentes de Genkit |
| `leaflet` | `^1.9.4` | Librería cliente de mapas interactivos OpenStreetMap |
| `lucide-react` | `^1.48.0` | Conjunto principal de iconos en SVG de la interfaz |
| `motion` | `^13.4.4` | Librería de animaciones (Framer Motion v13) |
| `next` | `^16.3.6` | Framework React de producción (App Router) |
| `pg` | `^8.23.0` | Driver nativo de Node.js para PostgreSQL |
| `postcss` | `^8.5.28` | Procesador de estilos CSS |
| `react` | `^19.3.0` | Librería UI principal (React 19) |
| `react-dom` | `^19.3.0` | Renderer DOM para React 19 |
| `react-icons` | `^5.7.0` | Iconos vectoriales adicionales (ej. FontAwesome, SimpleIcons, WhatsApp) |
| `tailwind-merge` | `^3.7.0` | Fusión eficiente de clases Tailwind sin conflictos de especificidad |
| `zod` | `^4.6.5` | Validación de esquemas y tipos TypeScript |

### Dependencias de Desarrollo (`devDependencies`)
| Paquete | Versión Exacta | Propósito / Rol en la Arquitectura |
| :--- | :--- | :--- |
| `@eslint/eslintrc` | `^3.3.7` | Compatibilidad de configuración de ESLint v9 |
| `@google/design.md` | `^0.4.0` | Lector y parser de especificaciones DESIGN.md de Google |
| `@material/material-color-utilities` | `^0.4.0` | Utilidades de cálculo de paletas cromáticas Material You |
| `@tailwindcss/postcss` | `4.3.3` | Plugin de PostCSS para Tailwind CSS v4 |
| `@tailwindcss/typography` | `^0.5.20` | Plugin para estilos tipográficos en contenidos markdown/prose |
| `@testing-library/jest-dom` | `^7.0.1` | Matchers customizados de DOM para Vitest |
| `@testing-library/react` | `^16.3.3` | Utilidades de renderizado y prueba de componentes React |
| `@testing-library/user-event` | `^14.6.7` | Simulación accesible de eventos de usuario en tests |
| `@types/leaflet` | `^1.9.22` | Tipos TypeScript para Leaflet |
| `@types/node` | `^26.6.3` | Tipos TypeScript para Node.js |
| `@types/pg` | `^8.23.1` | Tipos TypeScript para el driver `pg` |
| `@types/react` | `^19.3.0` | Tipos TypeScript para React 19 |
| `@types/react-dom` | `^19.3.0` | Tipos TypeScript para React DOM 19 |
| `@vitejs/plugin-react` | `^6.1.1` | Plugin de Vite para soporte de React en Vitest |
| `@vitest/ui` | `^5.0.2` | Interfaz gráfica interactiva de ejecución de Vitest |
| `eslint` | `9.21.0` | Linter de código estático |
| `eslint-config-next` | `16.3.6` | Configuración oficial de ESLint para Next.js 16 |
| `firebase-tools` | `^15.32.0` | CLI de Firebase / Genkit Deployment |
| `jsdom` | `^30.1.1` | Entorno de simulación de DOM en Node.js para Vitest |
| `playwright` | `^1.63.0` | Framework de pruebas End-to-End (E2E) |
| `prisma` | `^7.10.0` | CLI de administración de esquema y migraciones Prisma ORM |
| `puppeteer` | `^25.12.0` | Control de navegador headless para generación de PDFs y capturas |
| `tailwindcss` | `4.3.3` | Engine principal de Tailwind CSS v4 |
| `tsx` | `^4.23.15` | Ejecutor directo de scripts de TypeScript sin compilación previa |
| `tw-animate-css` | `^1.4.0` | Integración de animaciones CSS con utilidades de Tailwind |
| `typescript` | `5.7.3` | Compilador y chequeador de tipos TypeScript |
| `vitest` | `^5.0.2` | Runner de pruebas unitarias e integración ultrasónico |

---

## 2. Estructura de Directorios y Organización del Proyecto

```
envios-dosruedas/
├── .gitignore
├── .npmrc
├── AGENTS.md                          # Instrucciones y reglas operativas para agentes IA
├── CLAUDE.md                          # Guía de estilo y comandos del proyecto
├── DESIGN.md                          # Tokens de diseño oficiales y principios visuales
├── DESIGN_ANALIZADO.md                # Análisis profundo de la evolución del diseño
├── README.md                          # Documentación general del repositorio
├── eslint.config.mjs                  # Configuración de ESLint 9 (Flat Config)
├── next-env.d.ts                      # Declaración de tipos para Next.js
├── next.config.ts                     # Configuración de Next.js (redirects, headers, images)
├── package.json                       # Manifiesto de dependencias y scripts
├── pnpm-lock.yaml                     # Lockfile exacto de dependencias pnpm
├── pnpm-workspace.yaml                # Configuración de workspace monorepo/pnpm
├── postcss.config.mjs                 # Configuración de PostCSS (Tailwind CSS v4)
├── prisma.config.ts                   # Configuración moderna de Prisma ORM v7
├── vercel.json                        # Configuración de despliegue en Vercel
├── vitest.config.ts                   # Configuración de Vitest (JSDOM, aliases, coverage)
├── tsconfig.json                      # Configuración de compilador TypeScript
├── prisma/                            # Capa de Base de Datos
│   ├── schema.prisma                  # Esquema Prisma (Modelos: PriceRange, Quote, Feedback)
│   ├── seed.ts                        # Datos semilla e inicialización de la base de datos
│   └── migrations/                    # Historial de migraciones SQL PostgreSQL
│       ├── 20260701082740_init/
│       ├── 20260701083353_add_price_range/
│       └── 20260704104508_add_feedback/
├── public/                            # Archivos estáticos servidos públicamente
│   ├── favicon.ico, logo.png, logo.webp
│   └── mock/                          # Datos mock para desarrollo local
├── scripts/                           # Scripts de utilidad (PDFs, evaluaciones LLM, extractores)
│   ├── eval-llm.ts
│   ├── generate_page_pdf.py
│   └── extract_site_texts.py
└── src/                               # Código fuente principal
    ├── actions/                       # Server Actions de Next.js (Cotizaciones, Admin, Feedback)
    │   ├── quote.ts                   # Acción server-side para cotizaciones y persistencia
    │   ├── feedback.ts                # Gestión de opiniones de usuarios
    │   └── admin-imagenes.ts          # Administración de assets de imágenes
    ├── app/                           # Rutas y páginas del App Router de Next.js
    │   ├── layout.tsx                 # Root Layout (Fuentes, Metadatos, ClientLayout)
    │   ├── page.tsx                   # Landing Page Principal
    │   ├── globals.css                # Estilos globales y tokens CSS de Tailwind v4
    │   ├── sitemap.ts                 # Sitemap dinámico del sitio
    │   ├── robots.ts                  # Configuración de robots.txt
    │   ├── opengraph-image.tsx        # Generación dinámica de imagen OG
    │   ├── cotizar/                   # Página de Cotizador Unificado
    │   ├── contacto/                  # Página de Contacto Directo
    │   ├── cobertura/                 # Explorer de cobertura por barrios de Mar del Plata
    │   ├── nosotros/                  # Subrutas: sobre-nosotros, preguntas-frecuentes, nuestras-redes
    │   ├── servicios/                 # Subrutas: envios-express, envios-lowcost, enviosflex, deposito-fulfillment, empresas-cuenta-corriente
    │   ├── terminos-y-condiciones/    # Términos y marco legal
    │   ├── politica-de-privacidad/    # Política de protección de datos
    │   ├── guias/                     # Guías informativas (Flex MDP)
    │   ├── revisar/                   # Catálogo de revisión interna
    │   ├── admin/                     # Dashboard de administración
    │   └── api/                       # API Routes (Google Places, Directions, Assistant LLM)
    ├── components/                    # Componentes UI de la aplicación
    │   ├── layout/                    # Header optimizado, Footer, MobileNav, CarruselRedes
    │   ├── home/                      # Componentes de la Landing Page
    │   ├── cotizar/                   # Componentes del Cotizador Unificado
    │   ├── servicios/                 # Secciones específicas por servicio
    │   ├── contacto/                  # Formularios e información de contacto
    │   ├── cobertura/                 # Explorador interactivo de mapa/zonas
    │   ├── nosotros/                  # Secciones de Historia, FAQ, Redes
    │   ├── legal/                     # Módulos de términos y privacidad
    │   └── ui/                        # Primitivas UI y Firma (DoubleBezelCard, CTANestedPill, Stepper, Knockout, etc.)
    ├── hooks/                         # Custom React Hooks
    │   ├── useGoogleRoute.ts          # Cálculo de rutas y distancias Google Maps
    │   └── cotizador/                 # State management y analytics del cotizador
    ├── lib/                           # Módulos de lógica de negocio, clientes y helpers
    │   ├── pricing.ts                 # Lógica Pura de Cálculo de Tarifas y Reglas Operativas
    │   ├── prisma.ts                  # Instancia singleton de Prisma Client
    │   ├── whatsapp.ts                # Generador de enlaces y mensajes formateados de WhatsApp
    │   ├── analytics.ts               # Envío de eventos a Google Analytics / Vercel
    │   ├── assistant-prompt.ts        # Prompts del asistente de IA
    │   ├── gemini.ts                  # Integración con Google Gemini
    │   └── utils.ts                   # Utilidades generales (cn, formateo de moneda)
    └── test/                          # Configuración y utilidades de Vitest
```

---

## 3. Análisis de Archivos de Configuración

### 3.1 `tsconfig.json` (Configuración de TypeScript)
- **Target:** `ES2022`
- **Módulo & Resolución:** `esnext` / `bundler`
- **Modo Estricto:** `strict: true` activado (máxima seguridad de tipos)
- **JSX:** `react-jsx` (React 19)
- **Alias de Rutas (`paths`):**
  - `@/*` -> `./src/*`
  - `@generated/*` -> `./generated/*`
- **Exclusiones Explícitas:** `.next`, `node_modules`, `coverage`, `generated`, `.scratch`, `.stitch`, etc.

### 3.2 `postcss.config.mjs` (Procesador CSS)
```javascript
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
export default config;
```
*Nota de Arquitectura:* Se utiliza el plugin nativo `@tailwindcss/postcss` para Tailwind CSS v4. No requiere `autoprefixer` separado porque Lightning CSS maneja internamente el vendor prefixing.

### 3.3 `next.config.ts` (Configuración de Next.js)
- **Strict Mode:** Activado (`reactStrictMode: true`).
- **Dev Indicators:** Desactivados para evitar ruido visual en pruebas.
- **Redirecciones Permanentes (301/308):**
  - `/enviosflex` -> `/servicios/enviosflex`
  - `/servicios/express` -> `/servicios/envios-express`
  - `/servicios/lowcost` -> `/servicios/envios-lowcost`
  - `/servicios/flex` -> `/servicios/enviosflex`
  - `/servicios/3pl` -> `/servicios/deposito-fulfillment`
  - `/servicios/plan-emprendedores` -> `/servicios/empresas-cuenta-corriente`
  - `/servicios/envios-contrareembolso` -> `/servicios`
  - `/cotizar/express` -> `/cotizar`
  - `/cotizar/lowcost` -> `/cotizar`
- **Imágenes Remotas:** Autorizado `picsum.photos` e `i.postimg.cc`. Formatos optimizados `AVIF` y `WebP`.
- **Headers de Seguridad:** Content-Security-Policy (CSP) estricto, HSTS (`max-age=63072000`), X-Frame-Options (`SAMEORIGIN`), X-Content-Type-Options (`nosniff`), Referrer-Policy (`strict-origin-when-cross-origin`).
- **Paquetes Transpilados y Optimizados:** `motion`, `lucide-react`, `react-icons`, `zod`, `@radix-ui/*`, `@number-flow/react`.

### 3.4 `eslint.config.mjs` (Configuración de Linter)
Usa la nueva especificación Flat Config de ESLint 9 integrando `eslint-config-next` e ignorando artefactos de construcción (`.next/`, `generated/`, `coverage/`) y carpetas de agentes IA (`.agent/`, `.claude/`).

### 3.5 `vitest.config.ts` (Configuración de Pruebas Unitarias)
- **Entorno:** `jsdom` (simulación de navegador para componentes React y hooks).
- **Setup File:** `./src/test/setup.ts` (extiende matchers de `jest-dom`).
- **Inclusión:** `src/**/*.{test,spec}.{ts,tsx}`.
- **Aliases:** Refleja exactamente `@/` a `./src` y `@generated/` a `./generated`.
- **Cobertura:** Proveedor `v8` enfocado en `src/lib/**` y `src/hooks/**`.

### 3.6 `prisma.config.ts` (Configuración de Prisma ORM v7)
Define la ubicación de `prisma/schema.prisma`, las migraciones en `prisma/migrations`, el script de *seed* `tsx prisma/seed.ts` y la variable de entorno `DATABASE_URL`.
