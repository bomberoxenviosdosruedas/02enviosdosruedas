# CLAUDE.md - Guía de Desarrollo Operacional para Asistentes

Este archivo contiene las directivas técnicas, comandos canónicos y reglas de arquitectura para trabajar en el código de **Envíos DosRuedas**.

---

## 1. Stack Tecnológico y Configuración

- **Framework:** Next.js 16 (App Router con Server Components y Server Actions)
- **Runtime y Biblioteca:** React 19 / Node.js 20+
- **Lenguaje:** TypeScript 5.7 (estricto)
- **Estilos:** Tailwind CSS v4 con variables en `@theme` (`src/app/globals.css`)
- **Base de Datos:** PostgreSQL con Prisma ORM (`@prisma/adapter-pg`, cliente en `generated/prisma`)
- **Pruebas:** Vitest con jsdom y `@testing-library/react`
- **IA:** Google GenAI SDK (`@google/genai`) y Genkit (`genkit`, `@genkit-ai/google-genai`)
- **Mapas:** Google Maps APIs (Directions, Places) y Leaflet (`leaflet`, `@types/leaflet`)
- **Gestor de paquetes:** `pnpm` (exclusivo, no usar npm ni yarn ni bun)

---

## 2. Comandos Canónicos de Trabajo

Todos los comandos deben ejecutarse con `pnpm`:

```bash
# Desarrollo local
pnpm dev

# Verificación estricta de TypeScript
pnpm typecheck

# Análisis estático y linter
pnpm lint
pnpm exec eslint <ruta/al/archivo>

# Tests (NUNCA ejecutar "pnpm test" a secas porque entra en watch mode)
pnpm test:ci                                # Corre todos los tests en Vitest sin watch
pnpm exec vitest run                        # Equivalente directo con Vitest
pnpm exec vitest related <archivo> --run    # Tests asociados a un archivo puntual

# Base de datos y Prisma
pnpm prisma generate                        # Genera el cliente en generated/prisma
pnpm prisma db push                         # Sincroniza esquema con PostgreSQL
pnpm prisma db seed                         # Carga datos iniciales (seed)
pnpm prisma studio                          # Interfaz web de exploración de datos

# Build de producción
pnpm build                                  # prisma generate && next build
```

---

## 3. Estructura del Código en `src/`

- `src/actions/`: Server Actions con directiva `'use server'`. Validación de entradas con Zod y consultas con Prisma.
- `src/app/`: Estructura de rutas del App Router. Páginas informativas, cotizador, área administrativa y route handlers en `src/app/api/`.
- `src/components/ui/`: Primitivas reutilizables de interfaz de usuario. Destacan `DoubleBezelCard`, `CTANestedPill`, `InputField`, `RadioCardGroup`, `BentoGrid` y `HeroProceduralBackground`.
- `src/components/[dominio]/`: Componentes específicos de cada vista (`home`, `cotizar`, `servicios`, `nosotros`, `contacto`, `admin`).
- `src/hooks/`: Hooks de React para estado de cotización (`useCotizadorUnified.ts`), ruteo y eventos de analítica.
- `src/lib/`: Núcleo de lógica pura, desacoplada de la interfaz:
  - `pricing.ts`: Cálculos matemáticos y tramos de tarifas para Express y LowCost.
  - `promises.ts`: Constantes oficiales de promesas de servicio, cortes horarios, dimensiones y recargos.
  - `prisma.ts`: Conexión de Prisma Client optimizada para Next.js.
  - `gemini.ts` y `genkit.ts`: Integraciones con modelos de lenguaje.
  - `whatsapp.ts`: Construcción de URLs con número corporativo y parámetros de trazabilidad.
  - `analytics.ts`: Gestión de eventos y persistencia de UTMs.
- `src/test/`: Configuración global de Vitest y mocks de entorno.

---

## 4. Reglas Críticas de Negocio y Copy (Invariantes)

El archivo `src/lib/copy-guard.test.ts` valida automáticamente que no se reintroduzcan afirmaciones erróneas. Respetá estrictamente las siguientes pautas:

1. **Promesa de Entrega Express:**
   - La entrega Express coordina una **franja horaria acotada de 3 hs a elección del cliente**.
   - Se solicita con un mínimo de **2 hs de anticipación**.
   - Corte operativo: pedidos hasta las **15:00 hs** se entregan en el día (última franja disponible 17:00 a 19:00 hs).
   - **PROHIBIDO:** Decir "en 2 horas", "en 3 hs", "menos de 2 h" o "60 a 90 minutos".

2. **Servicio LowCost:**
   - Reparto programado económico en el día, sin franja horaria.
   - Corte operativo a las **13:00 hs**; entrega antes de las **19:00 hs**.
   - Cada envío se cotiza por su distancia individual.
   - **PROHIBIDO:** Describirlo como servicio "agrupado" o "por lote".

3. **Mercado Envíos Flex:**
   - Solución para vendedores con entrega en el día ("Llega Hoy").
   - Corte a las **15:00 hs**; entrega hasta las **20:00 hs**.
   - Exige comprobante fotográfico y firma digital en la recepción.

4. **Límites Físicos y Bultos:**
   - El estándar sin recargo es hasta **5 kg** o medidas de **40 x 40 x 30 cm**.
   - Pasado ese volumen, se coordina como bulto especial con recargo operativo desde `$1.800`.
   - **PROHIBIDO:** Publicar un límite máximo inventado (como "15 kg"). No existe techo numérico rígido publicado: se traslada todo lo que pueda llevarse de manera segura en moto.

5. **Tarifas y Cotización:**
   - Tramo lineal: para distancias mayores a 10 km y hasta 20 km, el cálculo es lineal (`distanceKm * pricePerKm`). **Nunca usar Math.ceil**.
   - Más de 20 km de distancia vial no calcula tarifa automática en la web, muestra `'consultar'`.
   - No asegurar "sin sorpresas" si existen recargos operativos declarados (lluvia, espera en puerta tras 10 minutos, parada extra, bulto especial).

6. **Facturación:**
   - Envíos DosRuedas emite comprobantes conforme a su condición fiscal estándar. No se emite Factura A.

---

## 5. Directrices de Estilo y UI

1. **Paleta de Colores Canónica:**
   - `brand-blue-500` / `brand-blue-700` (`#0950F6`): Azul institucional principal. Es el techo de oscuridad de la interfaz. Están prohibidos los tonos negros, grises oscuros o azules fuera de paleta.
   - `brand-yellow-500` (`#FFEC01`): Amarillo vial para botones de acción principal (CTAs) y elementos de alta atención (máximo 15% del área).
   - `white` (`#FFFFFF`): Fondo general y superficies limpias.
   - Variaciones suaves: `brand-blue-50` (`#E6EEFE`), `brand-blue-100` (`#BACEFD`), `brand-yellow-50` (`#FFFDE6`).

2. **Tipografía:**
   - Display / Títulos: `Anton` (`font-display`).
   - Eyebrows / Subtítulos en mayúsculas: `Bebas Neue` (`font-subheading`).
   - Párrafos y UI: `Outfit` (`font-sans`).
   - Métricas, distancias y precios: `Geist Mono` (`font-mono`).

3. **Accesibilidad:**
   - Contraste visual mínimo de 4.5:1 (el azul `#0950F6` sobre el amarillo `#FFEC01` cumple ratio de 4.9:1).
   - Anillos de foco visibles (`focus-visible:ring-2 focus-visible:ring-brand-blue-500`).
   - Soporte para `prefers-reduced-motion` en animaciones.

---

## 6. Convenciones de Código

- Utilizá TypeScript estricto, sin `any` implícitos ni conversiones forzadas.
- Priorizá Server Components en Next.js. Reservá `'use client'` para componentes que requieren interactividad, hooks de navegador o animaciones cliente.
- Importaciones con alias:
  - `@/*` mapea a `src/*`.
  - `@generated/*` mapea a `generated/*` (Prisma Client).
- Comunicación y documentación: mantené el voseo rioplatense en los textos explicativos, comentarios de código y mensajes dirigidos a humanos, evitando guiones largos o en-dash.
