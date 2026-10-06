# 01 — Visión General del Sistema (System Overview)

## 1. Stack Tecnológico

El sitio web de **Envíos DosRuedas** está construido sobre un stack moderno de alto rendimiento y renderizado híbrido:

| Capa | Tecnología | Propósito |
|---|---|---|
| **Framework Web** | Next.js 16 (App Router) | Renderizado del lado del servidor (RSC), Server Actions y rutas API. |
| **Biblioteca UI** | React 19 | Interfaces interactivas y componentes por servidor/cliente. |
| **Estilos CSS** | Tailwind CSS v4 + `theme.css` | Sistema de tokens visuales de la marca y diseño responsivo. |
| **Animaciones** | GSAP (GreenSock) | Animaciones fluidas con control de preferencia de movimiento reducido. |
| **Base de Datos / ORM** | Prisma ORM | Modelado y persistencia de tarifas (`PriceRange`) y registros operacionales. |
| **Testing** | Vitest + JSDOM | Suite de pruebas unitarias y de integración de componentes. |
| **Íconos** | Lucide React | Iconografía vectorial optimizada y semántica. |

---

## 2. Arquitectura de Directorios (`src/`)

```
src/
├── actions/             # Server Actions (Mutaciones, lógica server-only, sanitización)
│   ├── quote.ts         # Cálculo de cotizaciones y consumo de Google Directions API
│   ├── feedback.ts      # Envío de formulario de contacto
│   └── admin-imagenes.ts# Gestión administrativa de imágenes
├── app/                 # Rutas de Next.js App Router
│   ├── admin/           # Panel administrativo
│   ├── api/             # Route Handlers / API Endpoints (places, routes, assistant)
│   ├── cotizar/         # Página de cotización unificada
│   ├── contacto/        # Formulario y datos de contacto
│   ├── cobertura/       # Mapa y zonas de cobertura en Mar del Plata
│   ├── nosotros/        # Sobre nosotros, redes, FAQ
│   └── servicios/       # Landing pages para cada uno de los 6 servicios
├── components/          # Componentes de React
│   ├── cotizar/         # Formularios y tablas del cotizador
│   ├── home/            # Secciones del landing principal
│   ├── layout/          # Header, Footer, Nav, Contenedores
│   ├── servicios/       # Componentes específicos de servicios
│   └── ui/              # Primitivas UI reutilizables (CTANestedPill, etc.)
├── hooks/               # Custom React Hooks
│   ├── cotizador/       # Estado y lógica client-side de cotización
│   └── useGoogleRoute.ts# Hook para cálculo interactivo de rutas
├── lib/                 # Utilidades core y lógica pura de negocio
│   ├── pricing.ts       # Motor de cotización por distancia y fallbacks
│   ├── promises.ts      # Definición de servicios, recargos y tarifas fijas
│   ├── prisma.ts        # Instancia singleton del cliente de Prisma
│   └── whatsapp.ts      # Generador de enlaces profundos para WhatsApp API
└── test/                # Setup de testing y utilidades para Vitest
```

---

## 3. Principios de Arquitectura

### 3.1. Server Components por Defecto
Todas las páginas y componentes dentro de `src/app/` son **React Server Components (RSC)** por defecto para optimizar el tiempo de primera carga (FCP), el SEO y reducir el tamaño del bundle JS enviado al cliente.

La directiva `'use client'` está estrictamente restringida a:
- Formularios interactivos (e.g., `CotizadorForm.tsx`).
- Hooks de estado o efectos de cliente (`useState`, `useEffect`).
- Componentes animadores GSAP y librerías interactivas como Leaflet.

### 3.2. Aislamiento de Mutaciones mediante Server Actions
Toda mutación de datos o interacción con APIs externas complejas se realiza exclusivamente en la capa `src/actions/` utilizando Server Actions. Los componentes de cliente no realizan directamente `fetch` a APIs de terceros con tokens privados, garantizando la seguridad de las claves de API.
