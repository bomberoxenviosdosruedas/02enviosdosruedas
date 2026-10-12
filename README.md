# Envíos DosRuedas

Plataforma web de mensajería urbana en moto y logística de última milla para e-commerce en Mar del Plata, Argentina.

El sistema ofrece cotización online en tiempo real por distancia vial, contratación de servicios de entrega programada e inmediata, integración para vendedores de Mercado Envíos Flex, almacenamiento y fulfillment 3PL, y asistencia virtual inteligente.

---

## Stack Tecnológico

El proyecto está construido sobre un stack moderno y tipado de punta a punta:

- **Framework:** Next.js 16 (App Router)
- **Biblioteca UI:** React 19
- **Lenguaje:** TypeScript 5.7 (modo estricto)
- **Estilos:** Tailwind CSS v4 con tokens de diseño dedicados
- **Base de Datos y ORM:** PostgreSQL con Prisma ORM (`@prisma/adapter-pg`)
- **Inteligencia Artificial:** Google GenAI SDK (`@google/genai`) y Genkit (`genkit`, `@genkit-ai/google-genai`)
- **Mapas y Ruteo:** Google Maps Platform (Directions, Places Autocomplete y Details) con fallback visual en Leaflet
- **Animaciones y Primitivas:** Motion, GSAP, Radix UI y Lucide React
- **Testing:** Vitest con jsdom y Testing Library
- **Gestor de paquetes:** pnpm (gestor único autorizado)
- **Despliegue:** Vercel

---

## Arquitectura del Proyecto (`src`)

La base de código se organiza de manera modular dentro de `src/`:

```
src/
├── actions/              # Server Actions para mutaciones y consultas seguras
│   ├── quote.ts          # Cotización server-side validada con Google Directions y Zod
│   ├── feedback.ts       # Registro de feedback y sugerencias en base de datos
│   └── admin-imagenes.ts # Gestión y sugerencias asistidas por IA para metadatos de imágenes
├── app/                  # Rutas y páginas de Next.js App Router
│   ├── (public)/         # Páginas públicas: inicio, servicios, cotizador, cobertura, nosotros, contacto
│   ├── admin/            # Panel administrativo interno (gestión de imágenes)
│   ├── api/              # Route Handlers para proxies y endpoints
│   │   ├── assistant/    # API del asistente virtual ("DosRuedas Bot") con Gemini
│   │   ├── places/       # Proxy seguro para Google Places (Autocomplete y Details)
│   │   └── routes/       # Proxy para Google Directions
│   ├── globals.css       # Definición de tokens @theme Tailwind v4 y variables CSS
│   ├── layout.tsx        # Layout raíz con configuración de fuentes y SEO global
│   ├── sitemap.ts        # Generación dinámica del mapa del sitio
│   └── robots.ts         # Directivas de indexación para buscadores
├── assets/               # Tipografías locales (Anton, Bebas Neue) y estáticos
├── components/           # Componentes React organizados por dominio y biblioteca UI
│   ├── cotizar/          # Módulos del cotizador unificado (formulario, mapa, comparativa)
│   ├── home/             # Secciones interactivas de la página de inicio
│   ├── layout/           # Header optimizado, footer institucional y navegación móvil
│   ├── servicios/        # Secciones y calculadoras por servicio logístico
│   └── ui/               # Primitivas del sistema de diseño (DoubleBezelCard, CTANestedPill, InputField)
├── hooks/                # Custom hooks (cotización unificada, analítica, ruteo)
├── lib/                  # Lógica pura del negocio y configuraciones de clientes
│   ├── analytics.ts      # Captura de UTMs y eventos de GA4
│   ├── gemini.ts         # Cliente oficial de Google GenAI
│   ├── genkit.ts         # Instancia configurada de Genkit
│   ├── pricing.ts        # Algoritmos puros de cálculo tarifario
│   ├── prisma.ts         # Instancia única del cliente de Prisma
│   ├── promises.ts       # Constantes canónicas de promesas de servicio y umbrales
│   └── whatsapp.ts       # Generador de enlaces a WhatsApp con trazabilidad
└── test/                 # Configuración global y extensiones para Vitest
```

---

## Servicios Logísticos y Reglas de Negocio

La plataforma modela las siguientes soluciones para Mar del Plata:

1. **Envíos Express:**
   - Entrega en franja horaria acotada de 3 horas a elección del cliente.
   - Solicitud con un mínimo de 2 horas de anticipación.
   - Horario de corte para el mismo día: 15:00 hs (última franja disponible 17:00 a 19:00 hs).
   - Cálculo tarifario automático por distancia vial hasta 20 km. Para trayectos mayores a 20 km se consulta con el equipo.

2. **Envíos LowCost:**
   - Reparto programado económico en el día, sin elección de franja horaria.
   - Horario de corte: 13:00 hs; entrega en el transcurso del día antes de las 19:00 hs.
   - Cada paquete se cotiza individualmente según su distancia.

3. **Mercado Envíos Flex:**
   - Logística para vendedores con entregas "Llega Hoy".
   - Horario de corte: 15:00 hs; ventana de entrega hasta las 20:00 hs.
   - Cumplimiento de SLAs superior al 99.8%, con comprobante fotográfico y firma digital en destino.

4. **Depósito y Fulfillment 3PL:**
   - Almacenamiento, control de inventario y preparación de pedidos (Pick & Pack) en la base central (Friuli 1972).
   - Planes para e-commerce con recolección bonificada por volumen y modalidad DropOFF con descuento al despachar en base.

5. **Límites de Carga y Condiciones:**
   - Bulto estándar sin recargo: hasta 5 kg o dimensiones de 40 x 40 x 30 cm.
   - Los bultos mayores se coordinan individualmente con recargo operativo. No existe un techo numérico rígido publicado, admitiéndose todo lo transportable con seguridad en moto.
   - Cobro contra entrega (contrareembolso) disponible sin comisión adicional porcentual sobre el valor recaudado.

---

## Sistema de Diseño y Marca

La identidad visual está regida por la Ley de Tres Colores definida en `globals.css`:

- **Azul Vibrante:** `#0950F6` (`brand-blue-500` / `brand-blue-700`). Es el techo máximo de oscuridad permitido en la interfaz. No se utilizan tonos negros ni azules noche.
- **Amarillo Vial:** `#FFEC01` (`brand-yellow-500`). Reservado estrictamente para acentos de alta jerarquía y botones de llamada a la acción (CTAs), con una presencia no mayor al 15% del área visual.
- **Blanco:** `#FFFFFF`. Fondo principal y lienzo institucional.
- **Tipografías:**
  - `Anton` (`font-display`): Títulos de impacto y números destacados.
  - `Bebas Neue` (`font-subheading`): Subtítulos, eyebrows y textos en mayúsculas de CTAs.
  - `Outfit` (`font-sans`): Lectura general, párrafos y formularios.
  - `Geist Mono` (`font-mono`): Precios, distancias, códigos y métricas con números tabulares.

---

## Requisitos Previos

- **Node.js:** Versión 20.x o superior.
- **pnpm:** Versión 10 o superior (gestor exclusivo del repositorio).
- **PostgreSQL:** Base de datos relacional accesible localmente o mediante servicio cloud.

---

## Instalación y Configuración

1. Cloná el repositorio en tu máquina:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd 02enviosdosruedassetiembre
   ```

2. Instalá las dependencias con pnpm:
   ```bash
   pnpm install
   ```

3. Creá el archivo `.env` en la raíz copiando las variables base:
   ```env
   # Base de Datos
   DATABASE_URL="postgresql://usuario:password@localhost:5432/enviosdosruedas?schema=public"

   # Google Maps Platform (Ruteo y Autocomplete)
   GOOGLE_MAPS_API_KEY="AIzaSy..."
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSy..."

   # Inteligencia Artificial (Gemini)
   GEMINI_API_KEY="AIzaSy..."

   # Configuración de Sitio y Contacto
   NEXT_PUBLIC_SITE_URL="https://www.enviosdosruedas.com"
   WHATSAPP_NUMBER="542236602699"
   GA4_MEASUREMENT_ID="G-XXXXXXXXXX"
   ```

4. Generá el cliente de Prisma y ejecutá el seed inicial:
   ```bash
   pnpm prisma generate
   pnpm prisma db push
   pnpm prisma db seed
   ```

---

## Comandos de Desarrollo

| Acción | Comando | Descripción |
| --- | --- | --- |
| **Servidor de desarrollo** | `pnpm dev` | Inicia Next.js en `http://localhost:3000` |
| **Verificación de tipos** | `pnpm typecheck` | Ejecuta `tsc --noEmit` |
| **Linter** | `pnpm lint` | Inspecciona el código con ESLint 9 |
| **Tests unitarios** | `pnpm test:ci` | Corre Vitest en modo ejecución única |
| **Interfaz de tests** | `pnpm test:ui` | Abre el panel visual de Vitest |
| **Generar cliente Prisma** | `pnpm postinstall` | Genera los tipos de Prisma Client |
| **Prisma Studio** | `pnpm prisma studio` | Abre el panel de administración de datos |
| **Compilación de producción** | `pnpm build` | Genera Prisma y compila la aplicación para producción |
| **Servidor de producción** | `pnpm start` | Inicia la versión optimizada construida |

> **Nota:** Nunca ejecutes `pnpm test` en entornos automatizados para evitar que el proceso quede bloqueado en modo observación. Usá siempre `pnpm test:ci`.

---

## Verificación y Calidad de Código

Antes de enviar cualquier cambio, asegurate de cumplir el ciclo de verificación:

1. **Chequeo de tipos:** `pnpm typecheck`
2. **Linter:** `pnpm lint`
3. **Tests de regresión y copy:** `pnpm test:ci`
4. **Compilación completa:** `pnpm build`
