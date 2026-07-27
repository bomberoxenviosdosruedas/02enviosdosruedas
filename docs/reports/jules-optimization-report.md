# Informe de Auditoría Técnica y Optimización — Envíos DosRuedas 2026

**Autor:** Google Jules (Agente de Desarrollo Autónomo)
**Fecha:** 2026

Este documento detalla los resultados de la auditoría técnica profunda realizada sobre el repositorio "Envíos DosRuedas", cubriendo arquitectura Next.js 16, Tailwind v4, Prisma, PostgreSQL y la configuración de agentes/skills. Se incluyen propuestas de mejora y optimizaciones críticas, alineadas con las directrices de `docs/knowledge_base/contexto.md`, `AGENTS.md` y `DESIGN.md`.

---

## MÓDULO 1: CONFIGURACIÓN DE AGENTES Y SKILLS

**Análisis Actual:**
*   El archivo `.aiexclude` está correctamente configurado para proteger archivos sensibles (llaves privadas, `.env`, `.git`).
*   Los archivos `AGENTS.md` y `SKILLS.md` están bien estructurados y documentan claramente los contratos y protocolos obligatorios.
*   Sin embargo, hay un exceso de habilidades genéricas de UI/UX y diseño 3D listadas en `SKILLS.md` que podrían distraer a agentes enfocados únicamente en lógica de negocio o despliegue.

**Optimizaciones Propuestas:**
1.  **Refinamiento de `.aiexclude` y `.geminiignore`:** Consolidar estos archivos para asegurar que los agentes solo indexen la documentación activa (p. ej., `docs/knowledge_base/contexto.md`) y el código fuente relevante. Archivos obsoletos como `Pantilla_Base_General.md`, `REPORTE_BRAND_AUDIT.md`, etc., presentes en la raíz o en `docs/`, deben ser movidos a una carpeta `archive/` o ignorados para ahorrar tokens de contexto.
2.  **Sistema de Onboarding Mejorado (`README.md`):** Agregar una sección específica al inicio del `README.md` dirigida exclusivamente a Agentes IA: `"🤖 START HERE: Si eres un agente IA, lee inmediatamente docs/knowledge_base/contexto.md y AGENTS.md antes de proponer cualquier cambio."`.

---

## MÓDULO 2: ARQUITECTURA NEXT.JS 16 & REACT 19

**Análisis Actual:**
*   Se utiliza correctamente el App Router de Next.js y React Server Components por defecto.
*   Se ha detectado el uso del paquete obsoleto `framer-motion` (advertencias `React does not recognize the whileInView prop on a DOM element`). El ecosistema actual (React 19) requiere el uso de `motion/react` y las props de Framer Motion deben estar estrictamente sobre componentes `motion.*` (ej. `motion.div`).
*   El cálculo de la tarifa adicional por excedente kilométrico (más allá de 10 km) en `src/lib/pricing.ts` implementa correctamente `Math.ceil(distanceKm - 10)` para asegurar el cobro por kilómetro entero sin prorrateo, de acuerdo a las reglas de negocio.
*   En `src/app/api/assistant/route.ts` (Endpoint del chatbot), la variable de entorno de Next.js indica el uso de Gemini pero la configuración de API Key es vulnerable. Faltan Server Actions en lugares críticos donde la manipulación directa de rutas API podría migrarse para mejor type safety con Zod.

**Correcciones Realizadas / Propuestas:**
1.  **Limpieza de Tests y React DOM:** En `src/test/setup.ts`, se eliminaron declaraciones duplicadas que rompían Vitest y causaban errores (`MockComp is not defined`). Las advertencias de JSDOM (`Received true for a non-boolean attribute fill`) sobre componentes SVG se deben solucionar cambiando `fill="currentColor"` a `fill="currentColor"`.
2.  **Server Actions en Cotización:** Se recomienda refactorizar las rutas de cotización (si existen en `/api/quote`) hacia Server Actions (`'use server'`) junto a validación estricta con `zod` para integrarse nativamente con `useActionState` de React 19.

---

## MÓDULO 3: RENDIMIENTO Y PERFORMANCE (TAILWIND CSS V4)

**Análisis Actual:**
*   La inmutabilidad de la paleta de colores (Azul `#0636A5`, Amarillo `#FFEC01`, Blanco `#FFFFFF`) se está respetando, pero es necesario asegurar en `globals.css` y `tailwind.config.ts` (si aún se usa en v4) que las utilidades generadas no incluyan neutros prohibidos (slate, gray) fuera del diseño preaprobado.
*   Existen advertencias del linter (LCP de imágenes) por el uso directo de la etiqueta `<img>` en lugar del componente `<Image />` de `next/image` en:
    *   `src/components/layout/Carrusel-Redes.tsx`
    *   `src/components/ui/service-card.tsx`
    *   `src/components/ui/shadcnblocks-com-navbar1.tsx`

**Optimizaciones Propuestas:**
1.  **Reemplazo Sistemático de `<img>` por `<Image />`:** Esto es crítico para mejorar el Largest Contentful Paint (LCP) y el performance de renderizado.
2.  **Optimización de Carruseles:** En componentes con scroll infinito (como Logos Carousel), asegurarse de usar paginación virtual o animaciones CSS (`translate-x`) aceleradas por hardware en lugar de repintados continuos manejados por JS/React state.
3.  **Remoción de Prop `fill` en SVGs:** Encontrar los SVG mal formados y corregir el atributo `fill="currentColor"`.

---

## MÓDULO 4: INFRAESTRUCTURA, MAPAS Y BASE DE DATOS

**Análisis Actual:**
*   El cliente Prisma está inicializado.
*   El hook `useOSRMRoute.ts` llama directamente a la API pública de Project OSRM. **Alerta Crítica:** La API pública de OSRM limita drásticamente la capacidad (rate limiting). Para un entorno de producción (especialmente con Batch Routing para LowCost), esta dependencia causará caídas.
*   Advertencias en `src/components/ui/LeafletMap.tsx` y `LeafletRouteMap.tsx` por dependencias faltantes en `useEffect` (`bounds`, `mdpCenter`).

**Optimizaciones Propuestas:**
1.  **Estrategia Exponential Backoff para OSRM:** Implementar un mecanismo de reintento con backoff exponencial y un timeout estricto en la llamada a `fetchRoute` para manejar gracefully los errores de red (HTTP 429 Too Many Requests).
2.  **Batch Routing Sólido:** Para el cotizador LowCost, si se requiere calcular distancias entre múltiples paradas (TSP), se debe construir una Server Action especializada que procese la matriz de distancias usando una instancia privada o auto-hospedada de OSRM, limitando a 20 paradas por solicitud.
3.  **Arreglo de Hooks de React:** Corregir los arreglos de dependencias de `useEffect` en los mapas Leaflet para evitar renders infinitos o estados estancados.

---

## CONCLUSIÓN Y SIGUIENTES PASOS

Se ejecutaron correcciones en los mocks de pruebas (`src/test/setup.ts`) que permitieron la ejecución exitosa de los tests unitarios e integrales (Vitest). La arquitectura base es sólida y respeta los lineamientos del año 2026, sin embargo, el frontend tiene varias asperezas técnicas (warnings de hidratación, imágenes no optimizadas, SVG erróneos) que restan calidad y penalizan el rendimiento.

Se recomienda la revisión manual y aplicación del Pull Request adjunto.
