# AGENTS.md - Configuración de Agentes para Envíos DosRuedas

**Proyecto:** Envíos DosRuedas  
**Entorno:** Next.js 16 · React 19 · TypeScript 5.7 · Tailwind CSS v4 · Prisma · PostgreSQL · Vitest  
**Gestor de paquetes:** pnpm (único gestor autorizado)  
**Despliegue:** Vercel

---

## 1. Identidad de Marca y Reglas de Diseño

### Paleta Cromática Canónica (Ley de Tres Colores)

| Token | Hex | Función |
| --- | --- | --- |
| `brand-blue-500` / `brand-blue-700` | `#0950F6` | Azul institucional corporativo (techo máximo de oscuridad) |
| `brand-blue-400` | `#3570F8` | Acentos claros, íconos y estados hover |
| `brand-blue-300` | `#628FF9` | Bordes activos y anillos de foco |
| `brand-blue-200` | `#8EAFFB` | Trazos secundarios y bordes suaves |
| `brand-blue-100` | `#BACEFD` | Divisores y líneas estructurales |
| `brand-blue-50` | `#E6EEFE` | Fondos suaves y biseles exteriores |
| `brand-yellow-500` | `#FFEC01` | Amarillo vial para botones de acción (CTAs <= 15% del área) |
| `brand-yellow-400` | `#FFF12E` | Hover de llamadas a la acción |
| `brand-yellow-600` | `#E6D400` | Estado presionado (pressed) |
| `brand-yellow-50` | `#FFFDE6` | Fondos de selección destacados |
| `white` | `#FFFFFF` | Blanco puro institucional |
| `error-500` | `#EF4444` | Señalización de errores |

**Colores estrictamente prohibidos:** Negro puro (`#000000`), escalas de grises oscuros, verdes estándar y tonos azules más oscuros que `#0950F6` (como `#0636A5`, `#052C87`, `#04236B`, `#021440`).

### Tipografía Oficial

- **Display / Titulares de Impacto:** `Anton` 400 (`font-display`)
- **Subtítulos y Eyebrows:** `Bebas Neue` 400 (`font-subheading`)
- **Texto Principal y Lectura:** `Outfit` (`font-sans`)
- **Precios, Métricas y Distancias:** `Geist Mono` con números tabulares (`font-mono`)

### Primitivas UI Obligatorias

Toda interfaz nueva debe estructurarse utilizando las primitivas estandarizadas en `src/components/ui/`:
- `DoubleBezelCard`: Contenedor insignia con doble bisel (exterior suave e interior blanco o azul).
- `CTANestedPill`: Botón interactivo redondeado con micro-chip circular para íconos.
- `InputField`: Campo de entrada accesible con anillos de foco corporativos.
- `RadioCardGroup`: Selector de tarjetas con soporte de teclado y estados activos.
- `BentoGrid`: Grilla modular para despliegue de funcionalidades y servicios.
- `HeroProceduralBackground`: Fondo decorativo procedural con partículas o gradientes livianos.

### Accesibilidad (A11y)

- Cumplimiento estricto de WCAG 2.2 Nivel AA.
- Contraste visual mínimo de 4.5:1 (texto azul sobre amarillo cumple ratio de 4.9:1).
- Respeto integral de `prefers-reduced-motion` en todas las animaciones (`MotionConfig` en `src/app/layout.tsx`).
- Anillos de foco visibles en elementos interactivos (`ring-2 ring-brand-blue-500`).

---

## 2. Niveles de Verificación para Agentes (N0 a N3)

Al modificar la base de código, ejecutá las comprobaciones correspondientes según la magnitud del cambio:

| Nivel | Alcance | Comandos Requeridos |
| --- | --- | --- |
| **N0** | Documentación o consultas de lectura | Análisis de código sin cambios en archivos de producción |
| **N1** | Modificaciones cosméticas o de bajo riesgo | `pnpm typecheck` |
| **N2** | Cambios en componentes, Server Actions o lógica puntual | `pnpm typecheck` + `pnpm exec eslint <archivos>` + `pnpm exec vitest related <archivos> --run` |
| **N3** | Cambios estructurales, estilos globales, Prisma o configuración | `pnpm typecheck` + `pnpm lint` + `pnpm test:ci` + `pnpm build` |

> **Regla de ejecución:** Nunca ejecutes `pnpm test` a secas (permanece en modo interactivo). Empleá siempre `pnpm test:ci` o `pnpm exec vitest run`.

---

## 3. Salvaguardas de Negocio y Reglas de Copy

Los tests de integridad en `src/lib/copy-guard.test.ts` y las definiciones en `src/lib/promises.ts` establecen las siguientes restricciones no negociables:

1. **Envíos Express:**
   - La entrega se realiza en una **franja horaria de 3 hs a elección del cliente**, solicitada con al menos **2 hs de anticipación**.
   - Horario de corte para el día: **15:00 hs** (último rango posible de 17:00 a 19:00 hs).
   - Prohibido prometer "en 2 horas", "en 3 hs", "menos de 2 h" o "60 a 90 minutos".

2. **Envíos LowCost:**
   - Reparto programado económico en el día, sin selección de franja horaria.
   - Horario de corte: **13:00 hs**; ventana de entrega hasta las **19:00 hs**.
   - Prohibido categorizarlo como servicio "agrupado" o "por lote". La tarifa se calcula por distancia individual.

3. **Mercado Envíos Flex:**
   - Logística de entregas en el mismo día para MercadoLibre.
   - Horario de corte: **15:00 hs**; entrega garantizada hasta las **20:00 hs**.
   - SLA superior al 99.8% con acuse de entrega mediante foto del paquete y firma digital.

4. **Capacidad y Bultos:**
   - Medida estándar incluida: hasta **5 kg** o **40 x 40 x 30 cm**.
   - Todo bulto que exceda ese volumen se coordina como especial con recargo operativo desde `$1.800`.
   - Prohibido publicar límites de peso máximos inventados (como "15 kg"). No se publica techo rígido: se transporta lo que quepa con seguridad en moto.

5. **Cálculo Tarifario y Distancias:**
   - Tramo extendido (más de 10 km hasta 20 km): cálculo lineal directo (`distancia * precioPorKm`). Nunca utilizar `Math.ceil`.
   - Distancias viales superiores a 20 km: retorno `'consultar'`, derivando la cotización a atención personalizada.
   - No utilizar la frase "sin sorpresas" si existen recargos operativos estipulados (lluvia, tiempo de espera desde el minuto 11, paradas extra, bultos mayores).

6. **Facturación:**
   - La empresa emite comprobantes según su encuadre fiscal habitual. No se emite Factura A.

---

## 4. Estructura de Trabajo en el Código

- **Server Actions:** Crear mutaciones en `src/actions/` asegurando validación rigurosa de entradas con Zod.
- **Consultas a Base de Datos:** Usar la instancia centralizada `prisma` importada de `@/lib/prisma`.
- **Rutas y API:** En Next.js 16 App Router, preferir Server Components por defecto y delegar la interactividad a componentes clientes con `'use client'`.
- **Estilos:** Emplear las clases de utilidad de Tailwind v4 y los tokens semánticos definidos en `src/app/globals.css`.

---

## 5. Reglas Mandatorias de Interacción

- Usá **voseo rioplatense** en todos los textos dirigidos a humanos (comentarios de código, documentación, mensajes de commit o descripciones técnicas).
- No uses guiones largos ni en-dash en la redacción en español.
- Nunca imprimas ni expongas claves de entorno (`.env`, `DATABASE_URL`, `GOOGLE_MAPS_API_KEY`, `GEMINI_API_KEY`).
- No modifiques tarifas, rutas existentes ni redirecciones fijadas sin especificación explícita.
