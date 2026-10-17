# Envíos DosRuedas

Plataforma web de mensajería urbana en moto y logística de última milla para comercio electrónico en Mar del Plata, Argentina.

El sistema proporciona cotización online en tiempo real por distancia vial, contratación de envíos programados e inmediatos, logística integrada para vendedores de Mercado Envíos Flex, almacenamiento y fulfillment con picking y packing, y un asistente virtual inteligente para atención comercial.

---

## Stack Tecnológico

El proyecto está construido sobre un stack moderno, modular y tipado de punta a punta:

- **Framework Web:** Next.js 16.3 (`next@^16.3.6`) con App Router, Server Components y Server Actions
- **Biblioteca de Interfaz:** React 19 (`react@^19.3.0`, `react-dom@^19.3.0`)
- **Lenguaje:** TypeScript 5.7 (`typescript@5.7.3`) en modo estricto
- **Motor de Estilos:** Tailwind CSS v4 (`tailwindcss@4.3.3`, `@tailwindcss/postcss@4.3.3`)
- **Base de Datos y ORM:** PostgreSQL con Prisma 7 (`prisma@^7.10.0`, `@prisma/client@^7.10.0`, `@prisma/adapter-pg@^7.10.0`)
- **Inteligencia Artificial:** Google GenAI SDK (`@google/genai@^2.24.0`) y Genkit (`genkit@^1.42.0`, `@genkit-ai/google-genai@^1.42.0`)
- **Mapas y Geolocalización:** Google Maps Platform (Directions, Places Autocomplete y Details) con soporte de Leaflet (`leaflet@^1.9.4`)
- **Animaciones e Interacción:** Motion (`motion@^13.4.4`), Radix UI (`@radix-ui/react-accordion`, `@radix-ui/react-dialog`) y Lucide React (`lucide-react@^1.48.0`)
- **Validación de Datos:** Zod (`zod@^4.6.5`) y Hook Form Resolvers (`@hookform/resolvers@^5.9.1`)
- **Testing:** Vitest 5 (`vitest@^5.0.2`), jsdom (`jsdom@^30.1.1`) y Testing Library (`@testing-library/react@^16.3.3`)
- **Linter y Formato:** ESLint 9 (`eslint@9.21.0`, `eslint-config-next@16.3.6`) con Flat Config
- **Gestor de Paquetes:** pnpm 12 (`packageManager: pnpm@12.8.1`)
- **Métricas:** Vercel Speed Insights (`@vercel/speed-insights@^2.0.0`)

---

## Estructura del Proyecto (`src/`)

La base de código se estructura de manera modular dentro del directorio `src/`:

```
src/
├── actions/              # Server Actions ('use server') para mutaciones seguras
│   ├── quote.ts          # Cotización validada con Zod y Google Directions
│   ├── feedback.ts       # Registro de sugerencias en base de datos con Prisma
│   └── admin-imagenes.ts # Gestión y sugerencias asistidas por IA para metadatos
├── app/                  # Rutas y páginas de Next.js App Router
│   ├── (rutas públicas)/ # cotizar, servicios, cobertura, nosotros, contacto, guías
│   ├── admin/            # Panel administrativo interno
│   ├── api/              # Route Handlers para endpoints y proxies
│   │   ├── assistant/    # API del asistente virtual ("DosRuedas Bot") con Gemini
│   │   ├── places/       # Proxies seguros para Google Places (Autocomplete y Details)
│   │   └── routes/       # Proxy para Google Directions
│   ├── globals.css       # Definición de tokens de diseño @theme Tailwind v4
│   ├── layout.tsx        # Layout raíz con configuración de fuentes y SEO global
│   ├── sitemap.ts        # Generación dinámica del mapa del sitio
│   └── robots.ts         # Directivas de indexación para buscadores
├── assets/               # Recursos estáticos y fuentes locales
├── components/           # Componentes organizados por dominio y capa visual
│   ├── ui/               # Primitivas de diseño (DoubleBezelCard, CTANestedPill, InputField)
│   ├── layout/           # Cabecera (OptimizedHeader), footer y carrusel de redes
│   ├── home/             # Secciones de la página de inicio
│   ├── cotizar/          # Módulos del cotizador interactivo
│   ├── servicios/        # Secciones informativas por servicio logístico
│   └── nosotros/         # Vistas institucionales, preguntas frecuentes y canales
├── hooks/                # Custom hooks (cotización unificada, ruteo y analítica)
├── lib/                  # Lógica pura del negocio y clientes externos
│   ├── pricing.ts        # Algoritmos de cálculo tarifario y tramos por distancia
│   ├── promises.ts       # Constantes canónicas de horarios, límites y compromisos
│   ├── prisma.ts         # Conexión centralizada de Prisma Client
│   ├── gemini.ts         # Cliente oficial de Google GenAI
│   ├── genkit.ts         # Configuración de Genkit
│   ├── whatsapp.ts       # Constructor de enlaces a WhatsApp con trazabilidad
│   ├── analytics.ts      # Registro de eventos y persistencia de parámetros UTM
│   └── utils.ts          # Fusión de clases CSS con clsx y tailwind-merge
└── test/                 # Configuración de entorno y extensiones para Vitest
```

---

## Servicios Logísticos y Reglas Operativas

1. **Envíos Express:**
   - Entrega en una **franja horaria de 3 hs a elección del cliente**, solicitada con al menos **2 hs de anticipación**.
   - Horario de corte para el mismo día: **15:00 hs** (último rango posible de 17:00 a 19:00 hs).
   - Cálculo tarifario automático por distancia vial hasta 20 km.
2. **Envíos LowCost:**
   - Reparto programado económico en el día, sin selección de franja horaria.
   - Horario de corte: **13:00 hs**; ventana de entrega hasta las **19:00 hs**.
   - Tarifa individual calculada por tramo de distancia.
3. **Mercado Envíos Flex:**
   - Logística para vendedores con entregas en el día ("Llega Hoy").
   - Horario de corte: **15:00 hs**; entrega garantizada hasta las **20:00 hs**.
   - Acuse de entrega con foto del paquete y firma digital.
4. **Depósito y Fulfillment:**
   - Almacenamiento, control por QR y despacho desde la base central en Friuli 1972.
   - Modalidad Same-Day y 24hs con opción de descuento DropOFF.
5. **Condiciones de Carga:**
   - Bulto estándar sin recargo: hasta **5 kg** o medidas de **40 x 40 x 30 cm**.
   - Paquetes de mayor porte se coordinan como bulto especial con recargo operativo.

---

## Sistema de Diseño y Marca

La identidad visual está regida por la Ley de Tres Colores definida en `src/app/globals.css`:

- **Azul Corporativo:** `#0950F6` (`brand-blue-500` / `brand-blue-700`). Es el techo máximo de oscuridad permitido en la interfaz. No se utilizan fondos negros puros ni azules noche más oscuros.
- **Amarillo Vial:** `#FFEC01` (`brand-yellow-500`). Reservado estrictamente para botones de acción principal (CTAs) y detalles de alta jerarquía (máximo 15% del área visual).
- **Blanco:** `#FFFFFF` (`white`). Fondo general y superficies limpias.
- **Tipografías Oficiales:**
  - `Anton` (`font-display`): Títulos de impacto en mayúsculas.
  - `Bebas Neue` (`font-subheading`): Subtítulos, eyebrows y llamados a la acción.
  - `Outfit` (`font-sans`): Lectura general, párrafos y formularios.
  - `Geist Mono` (`font-mono`): Precios, distancias y métricas con números tabulares.

---

## Entorno para Asistentes y Agentes de IA

El repositorio cuenta con configuración avanzada de higiene de contexto y token optimization:
- `.aiexclude`: Estándar agnóstico de exclusión de contexto para asistentes y editores con IA (Cursor, Copilot, Windsurf, Cody, etc.).
- `.antigravityignore`: Exclusiones especializadas para el motor de Antigravity CLI.
- `.claudeignore`: Delimitación estricta para Claude Code y asistentes CLI.
- `AGENTS.md` y `CLAUDE.md`: Directrices de arquitectura, salvaguardas de negocio y protocolos de verificación N0 a N3.

---

## Requisitos del Entorno

- **Node.js:** Versión 20.x o superior.
- **pnpm:** Versión 10.x / 12.x (gestor de paquetes exclusivo del repositorio: `pnpm@12.8.1`).
- **PostgreSQL:** Base de datos relacional compatible con Prisma ORM.

---

## Instalación y Configuración Local

1. Cloná el repositorio en tu máquina:
   ```bash
   git clone https://github.com/bomberoxenviosdosruedas/02enviosdosruedas.git
   cd 02enviosdosruedas
   ```

2. Instalá las dependencias con pnpm:
   ```bash
   pnpm install
   ```

3. Configurá las variables de entorno creando un archivo `.env` en la raíz (basándote en `.env.example`):
   ```env
   # Base de Datos PostgreSQL
   DATABASE_URL="postgresql://usuario:password@localhost:5432/enviosdosruedas?schema=public"

   # Google Maps Platform (Directions, Places Autocomplete y Details)
   GOOGLE_MAPS_API_KEY="AIzaSy..."
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSy..."

   # Google GenAI / Gemini
   GEMINI_API_KEY="AIzaSy..."

   # Configuración de Sitio y Contacto
   NEXT_PUBLIC_SITE_URL="https://www.enviosdosruedas.com"
   WHATSAPP_NUMBER="542236602699"
   ```

4. Generá el cliente de base de datos de Prisma:
   ```bash
   pnpm postinstall
   ```

---

## Scripts Disponibles en `package.json`

| Script | Comando Real | Propósito |
| --- | --- | --- |
| `pnpm dev` | `next dev` | Inicia el entorno de desarrollo local con recarga en caliente |
| `pnpm build` | `prisma generate && next build` | Genera Prisma Client y compila la aplicación para producción |
| `pnpm start` | `next start` | Inicia el servidor optimizado de producción |
| `pnpm lint` | `eslint .` | Inspecciona el código mediante ESLint con flat config |
| `pnpm typecheck` | `tsc --noEmit` | Ejecuta la verificación estricta de tipos de TypeScript |
| `pnpm clean` | `next clean` | Limpia los directorios temporales de compilación de Next.js |
| `pnpm postinstall` | `prisma generate` | Genera los tipos tipados de Prisma en `generated/prisma` |
| `pnpm test` | `vitest` | Inicia Vitest en modo interactivo (watch mode) |
| `pnpm test:ci` | `vitest run` | Ejecuta la suite de pruebas unitarias una sola vez |
| `pnpm test:ui` | `vitest --ui` | Abre el panel visual de pruebas en el navegador |
| `pnpm pdf` | `python scripts/generate_page_pdf.py` | Genera capturas y reportes PDF vía script local |
| `pnpm pdf:prod` | `python scripts/generate_page_pdf.py --url https://enviosdosruedas.com` | Genera reportes PDF apuntando a producción |
| `pnpm export:texts` | `python scripts/extract_site_texts.py` | Extrae textos y copys de las vistas del sitio |

> **Importante:** En entornos automatizados o de integración continua (CI), no ejecutes `pnpm test` a secas porque el proceso queda en espera interactiva. Usá siempre `pnpm test:ci`.
