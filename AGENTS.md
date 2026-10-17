# AGENTS.md - Directrices de Arquitectura y Reglas para Agentes de IA

**Proyecto:** Envíos DosRuedas (Logística de última milla y mensajería urbana en Mar del Plata)  
**Entorno Técnico:** Next.js 16 · React 19 · TypeScript 5.7 · Tailwind CSS v4 · Prisma 7 · PostgreSQL · Vitest 5  
**Gestor de paquetes:** pnpm (exclusivo y obligatorio: `pnpm@12.8.1`)  
**Despliegue:** Vercel

---

## 1. Misión y Rol del Agente

Actuás como un Ingeniero de Software Senior especializado en el ecosistema moderno de Next.js App Router, TypeScript estricto y Tailwind CSS v4. Tu responsabilidad es diseñar, implementar, refactorizar y verificar código de producción manteniendo máxima solidez arquitectónica, accesibilidad (WCAG AA), rendimiento web (Core Web Vitals) y estricto respeto por las reglas de negocio del servicio logístico.

---

## 2. Fronteras de Contexto y Seguridad (Context Boundaries & Token Hygiene)

Para preservar la precisión de los modelos de IA y evitar la degradación de contexto o la filtración de información sensible, respetá de forma estricta los límites configurados en `.antigravityignore`, `.aiexclude` y `.claudeignore`:

1. **Aislamiento de Secretos (Zero-Secrets Policy):**
   - Queda terminantemente prohibido imprimir, modificar o inspeccionar variables de entorno en producción o archivos locales (`.env`, `.env.local`, `.env.production`).
   - El único archivo autorizado para consultas sobre el esquema de variables es `.env.example`.
2. **Archivos Fuera de Límites:**
   - **Artefactos generados:** `.next/`, `generated/`, `dist/`, `build/`, `out/`, `tsconfig.tsbuildinfo`, sourcemaps (`*.map`).
   - **Dependencias y bloqueos:** `node_modules/`, `pnpm-lock.yaml`, `package-lock.json`, `.pnpm-store/`.
   - **Tooling de agentes duplicados:** `.agent/`, `.agents/`, `.claude/`, `.hermes/`, `.impeccable/`, `.opencode/`, `.stitch/`, `.scratch/`.
   - **Archivos multimedia pesados:** `*.png`, `*.jpg`, `*.webp`, `*.svg`, `*.pdf`, fuentes (`*.woff2`).
   - **Documentación histórica y scrapings:** `docs/paginas/`, `docs/imagenes/`, `docs/sitio_completo.html`.
3. **Acceso Quirúrgico a Archivos:** No ejecutes búsquedas globales indiscriminadas ni intentes leer árboles de directorios completos. Localizá con precisión el archivo de producción en `src/` correspondiente a tu tarea.

---

## 3. Orquestación y Arquitectura Full-Stack en Next.js (App Router)

### Capa de Datos y Persistencia (Database Layer)
- Toda interacción con la base de datos PostgreSQL debe canalizarse a través de la instancia compartida de Prisma en `@/lib/prisma`.
- El esquema canónico vive en `prisma/schema.prisma` y genera sus tipos en `@generated/prisma` (mediante `pnpm postinstall` o `pnpm prisma generate`).
- No agregues consultas SQL en bruto sin justificación ni bypasses a las restricciones de esquema.

### Capa de Mutaciones y Servicios (Server Actions & Route Handlers)
1. **Mutaciones con Server Actions:**
   - Centralizá mutaciones y formularios en `src/actions/` con la directiva `'use server'`.
   - Toda Server Action debe validar sus argumentos de entrada de forma exhaustiva mediante esquemas de **Zod**.
   - Manejá errores de forma estructurada devolviendo respuestas tipadas (éxito o error con mensajes claros para el usuario).
2. **Route Handlers (`src/app/api/`):**
   - Reservá los Route Handlers exclusivamente para endpoints HTTP externos, webhooks o proxies de APIs que requieran manejo especial de cabeceras o streaming (ejemplo: integración de Google Places, Directions o streaming con Gemini/Genkit).

### Capa de Interfaz y Cliente (Presentation Layer)
1. **Server Components por Defecto:** Todos los componentes dentro de `src/app/` son Server Components salvo que se declare expresamente lo contrario. Aprovéchalos para carga de datos segura, acceso directo a la base de datos y optimización del bundle cliente.
2. **Uso Restringido de `'use client'`:**
   - Empleá `'use client'` únicamente cuando el componente necesite manejar estado interactivo (`useState`, `useReducer`), ciclos de vida (`useEffect`), referencias del DOM, event listeners directos o librerías de animación basadas en browser (Motion).
   - Mantené los Client Components en las hojas del árbol de componentes, pasándoles Server Components o contenido renderizado vía `children` o props.
3. **Tokens Semánticos de Estilo:**
   - Utilizá clases utilitarias de Tailwind v4 y los tokens semánticos definidos en `@theme` dentro de `src/app/globals.css`.
   - **Ley de Tres Colores de Marca:**
     - `brand-blue-500` / `brand-blue-700` (`#0950F6`): Azul institucional corporativo (techo máximo de oscuridad permitido en la UI, prohibido el uso de negros o azules noche más oscuros).
     - `brand-yellow-500` (`#FFEC01`): Amarillo vial para botones de acción (CTAs) y llamadas prioritarias (máximo 15% del área visual).
     - `white` (`#FFFFFF`): Fondo general y superficies limpias.
4. **Tipografías Oficiales:**
   - Display / Titulares: `Anton` (`font-display`).
   - Eyebrows y Subtítulos en mayúsculas: `Bebas Neue` (`font-subheading`).
   - Texto de lectura y formularios: `Outfit` (`font-sans`).
   - Métricas, distancias y precios: `Geist Mono` (`font-mono`).
5. **Primitivas Reutilizables:** Antes de construir una nueva interfaz, utilizá las primitivas estandarizadas en `src/components/ui/` (`DoubleBezelCard`, `CTANestedPill`, `InputField`, `RadioCardGroup`, `BentoGrid`, `HeroProceduralBackground`).

---

## 4. Salvaguardas de Negocio y Reglas de Copy (Invariantes del Código)

Los tests de integridad en `src/lib/copy-guard.test.ts` y las definiciones en `src/lib/promises.ts` fijan las siguientes restricciones operativas que no deben vulnerarse:

1. **Envíos Express:**
   - La entrega se realiza en una **franja horaria de 3 hs a elección del cliente**, solicitada con al menos **2 hs de anticipación**.
   - Horario de corte para el día: **15:00 hs** (último rango posible de 17:00 a 19:00 hs).
   - **Prohibición estricta:** Prometer "en 2 horas", "en 3 hs", "menos de 2 h" o "60 a 90 minutos".
2. **Envíos LowCost:**
   - Reparto programado económico en el día, sin selección de franja horaria.
   - Horario de corte: **13:00 hs**; ventana de entrega hasta las **19:00 hs**.
   - La tarifa se calcula por distancia individual.
   - **Prohibición estricta:** Categorizarlo como servicio "agrupado" o "por lote".
3. **Mercado Envíos Flex:**
   - Logística de entregas en el mismo día para Mercado Libre ("Llega Hoy").
   - Horario de corte: **15:00 hs**; entrega garantizada hasta las **20:00 hs**.
   - Acuse de entrega con foto del paquete y firma digital.
4. **Capacidad y Bultos:**
   - Medida estándar incluida sin recargo: hasta **5 kg** o **40 x 40 x 30 cm**.
   - Los bultos mayores se coordinan individualmente con recargo operativo.
   - **Prohibición estricta:** Publicar techos numéricos rígidos inventados (como "máximo 15 kg"). No se publica límite de peso rígido: se transporta lo que quepa con seguridad en moto.
5. **Cálculo Tarifario y Distancias:**
   - Tramo lineal (de 10 km hasta 20 km): cálculo directo (`distancia * precioPorKm`). **Nunca utilizar Math.ceil**.
   - Distancias viales superiores a 20 km: retorno `'consultar'`, derivando a atención personalizada.
   - No utilizar la frase "sin sorpresas" si existen recargos operativos estipulados (lluvia, tiempo de espera en puerta a partir del minuto 11, paradas extra, bultos mayores).
6. **Facturación:**
   - La empresa emite comprobantes según su encuadre fiscal habitual. No se emite Factura A.

---

## 5. Flujo de Trabajo en Git y Convenciones de Commits

1. **Formato Conventional Commits:**
   - `feat(...)`: Nueva funcionalidad o componente de producción.
   - `fix(...)`: Corrección de errores o ajustes de bugs reportados.
   - `refactor(...)`: Reestructuración de código sin alterar el comportamiento observable.
   - `test(...)`: Incorporación o actualización de pruebas unitarias o de integración.
   - `chore(...)`: Tareas de mantenimiento, dependencias o configuración interna.
2. **Atomicidad:** Cada commit debe representar una unidad de cambio lógica, reversible y completamente tipada.
3. **Mensajes:** Redactá el título y la descripción en español con tono claro, conciso y sin guiones largos ni caracteres en-dash.

---

## 6. Restricciones Técnicas y de Seguridad

1. **Gestión de Dependencias:**
   - **pnpm** es el único gestor autorizado.
   - No agregues dependencias npm que no estén técnicamente justificadas. Preferí utilitarios nativos de la plataforma o librerías ya instaladas en `package.json`.
2. **Rutas y Mapeo:**
   - Respetá siempre los alias de importación `@/*` (`src/*`) y `@generated/*` (`generated/*`).
   - Evitá imports relativos con más de un nivel de profundidad (`../../`).
3. **Seguridad y Secretos:**
   - Queda terminantemente prohibido imprimir o subir variables de entorno sensibles (`.env`, `DATABASE_URL`, `GOOGLE_MAPS_API_KEY`, `GEMINI_API_KEY`).
   - Verificá que los archivos listados en `.claudeignore`, `.antigravityignore` y `.aiexclude` permanezcan intactos y fuera de control de versiones.

---

## 7. Niveles de Verificación para Agentes (N0 a N3)

Al modificar la base de código, ejecutá las comprobaciones correspondientes según la magnitud del cambio:

| Nivel | Alcance | Comandos Requeridos |
| --- | --- | --- |
| **N0** | Consultas de lectura o documentación | Inspección de código sin cambios en archivos de producción |
| **N1** | Ajustes cosméticos o cambios menores de bajo riesgo | `pnpm typecheck` |
| **N2** | Modificaciones en componentes, Server Actions o lógica puntual | `pnpm typecheck` + `pnpm exec eslint <archivos>` + `pnpm exec vitest related <archivos> --run` |
| **N3** | Cambios estructurales, estilos globales, esquema de Prisma o configuración | `pnpm typecheck` + `pnpm lint` + `pnpm test:ci` + `pnpm build` |

> **Regla de ejecución:** Nunca ejecutes `pnpm test` a secas (permanece en modo interactivo). Empleá siempre `pnpm test:ci` o `pnpm exec vitest run`.

---

## 8. Reglas Mandatorias de Interacción

- Usá **voseo rioplatense** en todos los textos dirigidos a humanos (comentarios de código, documentación, mensajes de commit o descripciones técnicas).
- No uses guiones largos ni en-dash en la redacción en español.
- Mantené siempre la integridad documental y el tipado estricto de TypeScript.
