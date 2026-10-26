# Bloque 00: Setup Base del Proyecto y Árbol de Rutas

> **Ubicación:** `replicacion/prompts/00-setup-base-y-rutas.md`  
> **Objetivo:** Inicializar la arquitectura limpia del proyecto, configurar paquetes, variables de entorno, Tailwind CSS v4, Prisma ORM y generar los stubs (esqueletos) de todas las rutas del sitio.  

---

## 🎯 MODALIDAD 1: PROMPT DECLARATIVO / FUNCIONAL
*(Copiá y pegá esta sección a una IA si preferís que organice y genere el esqueleto con autonomía funcional)*

```text
Actúa como Arquitecto de Software Fullstack experto en Next.js App Router, TypeScript, Tailwind CSS v4 y PostgreSQL.

Tu objetivo en esta fase es inicializar la plataforma web de "Envíos DosRuedas" (mensajería urbana en Mar del Plata) y generar todo el árbol de rutas públicas del proyecto para que la navegación sea 100% navegable desde el inicio sin errores 404.

Por favor, realizá las siguientes acciones:
1. Creá la aplicación Next.js 16 con TypeScript, ESLint, App Router y soporte para pnpm como gestor oficial.
2. Instalá las dependencias necesarias: Next.js 16, React 19, Motion (motion/react), Prisma 7 con cliente PostgreSQL (pg), Zod, Lucide React, Leaflet para mapas, y el SDK de Google GenAI (@google/genai).
3. Configurá el archivo de variables de entorno (.env) con DATABASE_URL, GOOGLE_MAPS_API_KEY, NEXT_PUBLIC_GOOGLE_MAPS_API_KEY y GEMINI_API_KEY.
4. Establecé el archivo `globals.css` bajo Tailwind CSS v4 aplicando la Ley de Tres Colores de la marca:
   - Azul Institucional: #0950F6 (techo máximo de oscuridad; ningún elemento puede ser más oscuro que este tono).
   - Amarillo Vial: #FFEC01 (CTAs, acentos y franjas de señalización; máximo 15% de cobertura visual).
   - Blanco Puro: #FFFFFF (lienzo base).
   - Se prohíbe el uso de negro puro (#000000) o grises neutros genéricos.
   - Declaración de fuentes: Anton SC (display), Bebas Neue (subheading), Outfit (body sans) y Geist Mono (números/datos).
5. Configurá Prisma ORM con el esquema relacional que incluye: PriceRange, User, Post, Feedback, ImageMetadata y AiPromptSuggestion.
6. Generá todos los archivos de rutas públicas como páginas funcionales iniciales (stubs limpios con título H1 y contenedor estilizado) para:
   - / (Home)
   - /cotizar (Cotizador Unificado)
   - /contacto (Contacto y Base)
   - /cobertura (Mapa de Radios de Mar del Plata)
   - /servicios (Catálogo central)
   - /servicios/envios-express (Express en franja de 3 hs)
   - /servicios/envios-lowcost (LowCost en el día)
   - /servicios/enviosflex (Mercado Envíos Flex)
   - /servicios/deposito-fulfillment (Depósito y Stock)
   - /servicios/empresas-cuenta-corriente (Cuenta Corriente B2B)
   - /servicios/envios-contrareembolso (Cobro Contra Reembolso)
   - /servicios/plan-emprendedores (Tarifas para e-commerce local)
   - /nosotros (Hub institucional)
   - /nosotros/sobre-nosotros (Historia y flota propia)
   - /nosotros/preguntas-frecuentes (FAQs)
   - /nosotros/nuestras-redes (Canales oficiales)
   - /guias/envios-flex-mar-del-plata (Guía SEO Flex)
   - /terminos-y-condiciones (Términos legales)
   - /politica-de-privacidad (Privacidad)
```

---

## 🛠️ MODALIDAD 2: PROMPT TÉCNICO / CÓDIGO E IMPORTS EXACTOS
*(Copiá y pegá esta sección para indicarle a la IA la implementación técnica exacta de comandos, esquemas y archivos iniciales)*

```text
Actúa como un Desarrollador Senior en Next.js App Router y TypeScript. Implementá el setup inicial y el árbol de rutas de "Envíos DosRuedas" ejecutando y creando exactamente los siguientes archivos y comandos:

### 1. Inicialización y dependencias con pnpm
pnpm create next-app@latest envios-dosruedas --typescript --tailwind --eslint --app --src-dir --use-pnpm --import-alias "@/*"
cd envios-dosruedas

pnpm add next@^16.3.6 react@^19.3.0 react-dom@^19.3.0 \
  motion@^13.4.4 \
  @prisma/client@^7.10.0 @prisma/adapter-pg@^7.10.0 pg@^8.23.0 \
  zod@^4.6.5 @hookform/resolvers@^5.9.1 \
  lucide-react@^1.48.0 react-icons@^5.7.0 \
  leaflet@^1.9.4 @types/leaflet@^1.9.22 \
  @number-flow/react@^0.6.2 \
  @google/genai@^2.24.0 genkit@^1.42.0 @genkit-ai/google-genai@^1.42.0 \
  clsx@^2.1.1 tailwind-merge@^3.7.0 class-variance-authority@^0.7.1 \
  @radix-ui/react-accordion@^1.2.20 @radix-ui/react-dialog@^1.1.23

pnpm add -D prisma@^7.10.0 \
  @tailwindcss/postcss@4.3.3 tailwindcss@4.3.3 @tailwindcss/typography@^0.5.20 \
  typescript@5.7.3 @types/node@^26.6.3 @types/pg@^8.23.1 \
  tsx@^4.23.15

### 2. Configuración de variables (.env)
DATABASE_URL="postgresql://postgres:password@localhost:5432/envios_dosruedas?schema=public"
GOOGLE_MAPS_API_KEY="AIzaSyTuClaveOficialGoogleMapsPlatformAqui"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyTuClaveOficialGoogleMapsPlatformAqui"
GEMINI_API_KEY="AIzaSyTuClaveOficialGoogleGeminiAqui"
NEXT_PUBLIC_SITE_URL="https://www.enviosdosruedas.com"

### 3. Prisma Client (src/lib/prisma.ts)
import { PrismaClient } from '@prisma/client';
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

### 4. Estilos Globales (src/app/globals.css)
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

:root {
  --surface-page: #FFFFFF;
  --text-body: #0950F6;
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-feedback: 160ms;
  --duration-dropdown: 200ms;
  --duration-modal: 250ms;
}

@theme {
  --color-brand-blue-50: #E6EEFE;
  --color-brand-blue-100: #BACEFD;
  --color-brand-blue-200: #8EAFFB;
  --color-brand-blue-300: #628FF9;
  --color-brand-blue-400: #3570F8;
  --color-brand-blue-500: #0950F6;
  --color-brand-yellow-50: #FFFDE6;
  --color-brand-yellow-100: #FFFAB8;
  --color-brand-yellow-200: #FFF78A;
  --color-brand-yellow-300: #FFF45C;
  --color-brand-yellow-400: #FFF12E;
  --color-brand-yellow-500: #FFEC01;
  --color-brand-yellow-600: #E6D400;
  --color-white: #FFFFFF;

  --color-brand-blue: var(--color-brand-blue-500);
  --color-brand-yellow: var(--color-brand-yellow-500);
  --color-brand-ink: var(--color-brand-blue-500);
  --color-brand-white: var(--color-white);

  --font-sans: var(--font-sans, "Outfit"), "IBM Plex Sans", sans-serif;
  --font-display: var(--font-display, "Anton SC"), "Anton", sans-serif;
  --font-subheading: var(--font-subheading, "Bebas Neue"), sans-serif;
  --font-mono: var(--font-mono, "Geist Mono"), monospace;

  --color-neutral-50: initial; --color-neutral-500: initial; --color-neutral-900: initial;
  --color-stone-50: initial; --color-stone-500: initial; --color-stone-900: initial;
}

### 5. Generar Stubs de Rutas Limpias
Generá en `src/app/` las carpetas y archivos `page.tsx` para cada ruta pública con su respectivo título y estructura base accesible:
- `src/app/page.tsx`
- `src/app/cotizar/page.tsx`
- `src/app/contacto/page.tsx`
- `src/app/cobertura/page.tsx`
- `src/app/servicios/page.tsx`
- `src/app/servicios/envios-express/page.tsx`
- `src/app/servicios/envios-lowcost/page.tsx`
- `src/app/servicios/enviosflex/page.tsx`
- `src/app/servicios/deposito-fulfillment/page.tsx`
- `src/app/servicios/empresas-cuenta-corriente/page.tsx`
- `src/app/servicios/envios-contrareembolso/page.tsx`
- `src/app/servicios/plan-emprendedores/page.tsx`
- `src/app/nosotros/page.tsx`
- `src/app/nosotros/sobre-nosotros/page.tsx`
- `src/app/nosotros/preguntas-frecuentes/page.tsx`
- `src/app/nosotros/nuestras-redes/page.tsx`
- `src/app/guias/envios-flex-mar-del-plata/page.tsx`
- `src/app/terminos-y-condiciones/page.tsx`
- `src/app/politica-de-privacidad/page.tsx`
```
