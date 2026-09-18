# BL-04 — Contadores con valor final en SSR y texto animado sin romper espacios

```
LECTURA PREVIA
Antes de tocar nada, leé en este orden: docs/knowledge_base/contexto.md (si existe), AGENTS.md, DESIGN.md (sección de accesibilidad y motion), docs/marketing/F4-1-specs/BL-04-contadores-ssr-y-texto-sin-espacios.md.

OBJETIVO
Los contadores de la home ("+50K envíos", "0 paquetes extraviados", "+50 emprendedores") se renderizan en "0" hasta que la animación dispara al entrar en viewport — Google indexa "+0K" y un lector de pantalla que llega antes de la animación anuncia un dato falso. El párrafo de EmprendedoresHome se parte palabra por palabra sin espacios reales en el HTML, rompiendo selección de texto, lectores de pantalla y SEO. Este PR corrige ambos patrones (y el mismo patrón en FaqHero y vertical-cut-reveal).

ALCANCE
Archivos a tocar: src/components/home/VisionSection.tsx, src/components/home/EmprendedoresHome.tsx, src/components/nosotros/preguntas-frecuentes/FaqHero.tsx, src/components/ui/vertical-cut-reveal.tsx.
Archivos prohibidos: no cambies el copy de "0 paquetes extraviados" en este PR (eso es BL-14, ya tiene su propio prompt) — acá solo arreglás que el valor que sea (el actual u otro que venga de BL-14) se muestre correctamente en SSR, no decidís cuál es el valor. Si BL-14 ya se mergeó antes que este PR, usá el copy que haya quedado; si no, dejá el copy actual intacto y solo corregí el mecanismo de renderizado.

PASOS
1. Inspeccioná VisionSection.tsx (CounterMetric, líneas 7-34, 167, 191-196) y EmprendedoresHome.tsx (línea 12, descriptionText.split(" ")) para confirmar el patrón exacto. Presentá un plan breve: cómo vas a mostrar el valor final en SSR y animar solo visualmente sin perder el contenido real.
2. En VisionSection.tsx: que el HTML inicial muestre el valor final real (no 0), animando con una técnica que no oculte el contenido inicial (ej. animar solo la interpolación visual con el valor ya presente en el DOM, o usar CSS counter/transform en vez de reemplazar el texto). Agregá aria-hidden="true" al nodo animado y un <span class="sr-only"> con el valor final fijo al lado.
3. En EmprendedoresHome.tsx (y el mismo patrón en FaqHero.tsx y vertical-cut-reveal.tsx): reemplazá el split(" ") sin espacios por una técnica que preserve el texto real en el DOM (ej. envolver cada palabra en un span con `{' '}` explícito después, o animar con clip-path sobre el párrafo completo en vez de partirlo).
4. Verificá los 33 bloques con opacity:0 inicial que identificó F2-1 (DC-07): cambialos a visibles por defecto, animando desde un estado visible (initial={{ opacity: 1, y: 12 }}) o condicionando la animación a que exista window.IntersectionObserver y prefers-reduced-motion no esté activo.
5. Probá con JavaScript deshabilitado (o curl) que el HTML inicial de la home tiene el contenido completo y correcto.

RESTRICCIONES
No cambies el copy en sí (solo el mecanismo de renderizado), salvo lo que ya haya decidido BL-14 si se mergeó antes. Respetá prefers-reduced-motion: con reduced motion activo, mostrar directamente el valor final sin animar. Solo pnpm, sin dependencias nuevas.

CRITERIOS DE ACEPTACIÓN
- curl a / sin ejecutar JS muestra el valor final de cada contador, no "0" ni "+0K".
- El párrafo de EmprendedoresHome es seleccionable con espacios correctos.
- Lighthouse/axe no marca contenido oculto al cargar en la home.
- Con prefers-reduced-motion activo, no hay animación de conteo, se ve el valor final directo.

VERIFICACIÓN
pnpm build, pnpm run lint, pnpm tsc --noEmit, pnpm test. Sumá una prueba Playwright: cargar la home con JS deshabilitado y verificar que el textContent de los contadores y del párrafo de Emprendedores no contiene "0" literal donde debería ir el valor real, ni palabras pegadas sin espacio.

ENTREGA
Rama: fix/a11y-ssr-counters-and-text
Commit: fix(a11y): mostrar contadores y texto animado completos en el HTML inicial
Descripción del PR: qué, por qué (Google indexa "+0K", lectores de pantalla anuncian datos falsos o texto sin espacios), cómo probarlo, IDs resueltos (DC-07, DC-08, DC-09, A11Y-09, A11Y-10, CAMP-07, BL-04).

SI ALGO NO CIERRA
Si cambiar la técnica de animación de vertical-cut-reveal.tsx rompe visualmente alguno de los cuatro componentes *Pricing.tsx que lo usan, no fuerces el cambio ahí — parate, documentá cuál se rompe y cómo, y preguntá si conviene un fix distinto para ese caso puntual en vez de forzar la misma solución en los cinco lugares.
```
