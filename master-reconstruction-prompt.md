# MASTER PROMPT DE RECONSTRUCCIÓN PASO A PASO (ENVÍOS DOSRUEDAS 2026)

Actúa como un Software Architect & Lead Fullstack Engineer. Tu tarea es construir desde cero la aplicación web e-commerce/logística para "Envíos DosRuedas" (Mar del Plata, Argentina) siguiendo estrictamente este plan de ejecución sin deuda técnica:

### Paso 1: Inicialización del Proyecto
1. Ejecuta `pnpm create next-app@latest envios-dosruedas --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`.
2. Actualiza `package.json` para asegurar Next.js 16+, React 19, Tailwind CSS v4 (`@tailwindcss/postcss`), Prisma `^7.10.0`, y `motion ^13.4.4`.
3. Configura `postcss.config.mjs` únicamente con `@tailwindcss/postcss`.

### Paso 2: Configuración del Design System (Tailwind CSS v4 & Ley de Tres Colores)
1. Reemplaza `src/app/globals.css` implementando la paleta canónica:
   - Azul Institucional: `#0950F6` (Tope de oscuridad).
   - Amarillo Vial: `#FFEC01` (Acento ≤15%).
   - Blanco: `#FFFFFF`.
2. Declara las fuentes tipográficas en `@theme`: `Anton` (Display), `Bebas Neue` (Subtítulos/Botones), `Outfit` (Sans), `Geist Mono` (Mono).
3. Implementa las utilidades personalizadas: `.double-bezel-outer`, `.double-bezel-inner`, `.cta-nested-pill`, `.cta-nested-icon`.

### Paso 3: Capa de Datos con Prisma ORM
1. Crea `prisma/schema.prisma` con el proveedor `postgresql` y los modelos `User`, `Post`, `PriceRange`, `Feedback`, `ImageMetadata`, y `AiPromptSuggestion`.
2. Crea `src/lib/pricing.ts` con la lógica pura de cálculo lineal (`calculateExpressPrice`, `calculateLowCostPrice`) respetando las tarifas 2026 y sin usar `Math.ceil`.

### Paso 4: Server Actions y Trazabilidad
1. Crea `src/actions/quote.ts` para calcular cotizaciones de forma segura en el servidor invocando Google Directions API / Leaflet y `pricing.ts`.
2. Crea `src/lib/whatsapp.ts` para estructurar la integración con WhatsApp con etiquetado UTM (`[ref: ...]`) y número unificado `+54 223 660-2699`.

### Paso 5: Construcción de Pantallas y Rutas (`src/app/`)
1. `/`: Landing page con HeroAnimado, Bento Grid de servicios y prueba social.
2. `/cotizar`: Cotizador interactivo con mapa de ruta real y tabla comparativa.
3. `/servicios/*`: Fichas técnicas de Express, LowCost, Flex, Fulfillment (Friuli 1972) y Cuentas Corrientes.
4. `/cobertura`: Explorador de barrios de Mar del Plata.

### Paso 6: Verificación y Cierre
1. Corre `pnpm run typecheck`, `pnpm run lint`, y `pnpm test:ci` para garantizar 0 errores.
