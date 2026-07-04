# 🚀 Envíos Dos Ruedas — Logística Same-Day en Mar del Plata (2026)

Bienvenido al repositorio oficial de **Envíos Dos Ruedas**, la plataforma digital líder en mensajería de última milla, ruteo inteligente LowCost y soluciones logísticas para E-Commerce y MercadoLibre Flex. Desarrollada específicamente para la operatividad vial y comercial de **Mar del Plata**, con vigencia operativa proyectada para el año **2026**.

Este proyecto está diseñado para ofrecer una experiencia digital premium, fluida e interactiva, tanto para clientes finales que cotizan envíos como para PyMEs y emprendedores que gestionan entregas masivas.

---

## 🎨 Identidad Visual y Diseño Premium

Nuestra interfaz web se rige por un sistema de diseño propio documentado en [DESIGN.md](file:///E:/proyectos/02enviosdosruedashector/DESIGN.md):
*   **Azul Principal (`#0636A5`):** Transmite confianza, seriedad y el respaldo institucional de nuestra red.
*   **Amarillo Acento (`#FFEC01`):** Aporta la energía, velocidad vial y visibilidad urbana que caracteriza a nuestra flota.
*   **Tipografía de Impacto:** 
    *   Títulos Display: **Anton** (estilo señalización vial).
    *   Subtítulos y Badges: **Bebas Neue**.
    *   Cuerpo e Inputs: **Inter**.
*   **Efectos Premium:** Uso intensivo de glassmorphism, resplandores dinámicos (`glow-blue`, `glow-yellow`) y micro-animaciones fluidas con **Motion** y **GSAP**.

---

## 🛠️ Stack Tecnológico

El proyecto está construido sobre una arquitectura moderna, eficiente y robusta:

*   **Framework principal:** [Next.js 15](https://nextjs.org/) (App Router, con soporte experimental para React 19).
*   **Modelado y ORM:** [Prisma ORM](https://www.prisma.io/) conectado a PostgreSQL.
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (configuración a través de variables de tema centralizadas en `@theme`).
*   **Mapas y Geo-ruteo:** [Leaflet](https://leafletjs.com/) para visualización interactiva de direcciones y cálculo de rutas en tiempo real sobre el trazado urbano marplatense.
*   **Animaciones:** [Motion](https://motion.dev/) (`motion/react`) y [GSAP](https://gsap.com/).
*   **Gestor de Paquetes:** [pnpm](https://pnpm.io/).

---

## 📂 Arquitectura del Proyecto

El código fuente está estructurado de manera modular y mantenible:

```
src/
├── app/                      # Enrutamiento y páginas (Next.js App Router)
│   ├── cotizar/              # Módulos de cotización interactiva
│   │   ├── express/          # Express: Envío rápido con mapa interactivo
│   │   └── lowcost/          # LowCost: Planilla para envíos masivos y ruteo programado
│   └── servicios/            # Páginas informativas de servicios (Express, Flex, LowCost, Emprendedores)
├── components/               # Componentes interactivos reutilizables
│   ├── ui/                   # Componentes base y widgets genéricos (ej. LeafletRouteMap)
│   ├── layout/               # Elementos globales (OptimizedHeader, OptimizedFooter, CarruselRedes)
│   └── home/                 # Componentes específicos de la Landing (HeroAnimado, VisionSection)
├── prisma/                   # Esquema de base de datos y migraciones
└── generated/                # Cliente auto-generado de Prisma
```

---

## 🚀 Inicio Rápido (Desarrollo Local)

Seguí estos pasos para levantar el entorno local en tu máquina:

### 1. Requisitos previos
Asegurate de tener instalados:
*   [Node.js](https://nodejs.org/) (v18 o superior recomendado)
*   [pnpm](https://pnpm.io/) (`npm i -g pnpm`)
*   Una base de datos PostgreSQL activa

### 2. Instalación
Instalá las dependencias del proyecto:
```bash
pnpm install
```

### 3. Configuración de Variables de Entorno
Copiá el archivo `.env.example` para crear tu `.env.local`:
```bash
cp .env.example .env.local
```
Abrí el archivo `.env.local` y configurá tus credenciales:
```env
GEMINI_API_KEY="tu_clave_api_gemini"
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/envios_dos_ruedas"
```

### 4. Preparación de la Base de Datos
Generá el cliente de Prisma y aplicá el esquema a tu base de datos local:
```bash
pnpm prisma generate
pnpm prisma db push
```

### 5. Ejecutar en Entorno de Desarrollo
Levantá el servidor local:
```bash
pnpm dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🤖 Desarrollo Colaborativo con Inteligencia Artificial (IA)

Este proyecto está altamente optimizado para trabajar con agentes de inteligencia artificial y copilotos. Antes de escribir código, por favor revisá los siguientes archivos de configuración:
*   [AGENTS.md](file:///E:/proyectos/02enviosdosruedashector/AGENTS.md): Reglas de código estrictas, convenciones CSS para Tailwind CSS v4, tipografías y el uso obligatorio del **Tono de Voz con voseo Rioplatense** para copys finales.
*   [GEMINI.md](file:///E:/proyectos/02enviosdosruedashector/GEMINI.md): Resumen técnico del repositorio para optimización y ahorro en el consumo de tokens de contexto.
*   [.aiexclude](file:///E:/proyectos/02enviosdosruedashector/.aiexclude): Definición de rutas y archivos excluidos para las lecturas de los asistentes.
