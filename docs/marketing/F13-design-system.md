# F13 — Auditoría del sistema de diseño: DESIGN.md vs. código real

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `DESIGN.md` (contrato de diseño, §11 "Deuda de Adherencia Conocida" fechada 2026-09-15), extracción propia en `F13-design-extraido.md`, código real del repo clonado (commit único visible: `46bf3c6`, 2026-09-15).

**No se sobrescribió `DESIGN.md`** — este documento lo compara contra el código y propone correcciones para que el dueño o quien programe decida si actualizarlo.

---

## 1. Resultado principal: la auto-auditoría de `DESIGN.md` §11 no coincide con el código verificado en esta pasada

`DESIGN.md` ya trae una sección de autocrítica (§11, "Auditoría Técnica Impecable 2026-09-15") con 12 puntos de deuda. Se volvió a verificar cada punto comprobable contra el código real. El resultado: varios puntos específicos de esa tabla **no se sostienen** con la evidencia actual, mientras que el problema de fondo que describen (componentes de marca sin usar, cobertura de accesibilidad desigual) **sí es real, solo que más grave y en otro lugar del que dice la tabla**. El repo clonado solo tiene un commit visible con la misma fecha que la auditoría, así que no hay forma de saber si la tabla describía una versión anterior del código o si nunca se verificó línea por línea contra el repo — no se afirma cuál de las dos cosas pasó, solo se documenta la discrepancia.

| Claim de `DESIGN.md` §11 | Verificado en esta pasada | Conclusión |
|---|---|---|
| `border-l-4` en 12 componentes | 0 coincidencias exactas de `border-l-4`; con patrón más amplio `border-l-`, solo 2 archivos (`EmprendedoresHero.tsx`, `FlexHero.tsx`) | No se sostiene tal como está escrito |
| `animate-bounce` en `NewsletterSubscribe`/`LeafletRouteMap` | 0 coincidencias de `animate-bounce` en todo el repo | No se sostiene |
| `transition: width` en `globals.css` línea 508 | 0 coincidencias de esa regla en todo el archivo; la línea 508 real es parte de la utilidad `bezel-outer` | No se sostiene |
| `cta-nested-icon` 28px vs. contrato de 32px | La regla real en `globals.css` mide `width: 2rem; height: 2rem` = 32px — coincide con el contrato | No se sostiene |
| Color `#10B981` en `RevisarClient.tsx` | El archivo no tiene ningún color hexadecimal literal | No se sostiene |
| Color `#FFCC00` ×10 en `LogisticaNetworkCanvas.tsx` | El archivo usa `#FFEC01` (el amarillo de marca correcto) y `#ffffff` — no `#FFCC00` | No se sostiene, y además el color usado es el correcto |
| 8 de 11 primitivas de UI sin uso | Verificado con metodología propia (import/JSX fuera del propio archivo): **8 de 18** archivos de `src/components/ui/` sin uso — la cifra "8" coincide, pero el denominador y la lista concreta de cuáles son difieren (ver §2) | Parcialmente coincide, con matiz importante |
| Cobertura de `focus-visible` ~20% | Encontrado en 29 archivos reales, cubriendo formularios, precios de los 4 servicios, header, footer, FAQ y cotizadores | No se sostiene — la cobertura real es amplia |
| Cobertura parcial de `prefers-reduced-motion` | Hay una regla global en `globals.css` que cubre toda animación/transición CSS del sitio — pero ningún componente animado por canvas/JS en uso real la respeta (ver `DS-05`) | Parcialmente coincide, con el problema real en otro lugar |

**Recomendación:** tratar la tabla de `DESIGN.md` §11 como una lista de temas a revisar, no como hechos verificados — y reemplazarla por los hallazgos `DS-xx` de abajo, que sí están comprobados contra el código de esta sesión con archivo y comando de verificación citables.

## 2. DS-01 (crítico) — Los componentes insignia del sistema de diseño no se usan en ninguna página real

El enunciado de esta fase pide verificar 7 componentes "insignia": Double Bezel Card, CTA Nested Pill, Radio Card Group, Logos Carousel, Float/Tilt 3D Card, Bento Grid y Vertical Stepper. Resultado, verificando imports y uso JSX fuera del propio archivo de definición:

| Componente | ¿En uso real? | Evidencia |
|---|---|---|
| **CTA Nested Pill** (`CTANestedPill.tsx`) | **Sí** | Usado en `OptimizedHeader.tsx` — el header del sitio |
| Double Bezel Card (`DoubleBezelCard.tsx`) | **No**, como componente — pero su *markup* (clases `double-bezel-outer`/`double-bezel-inner`) está reimplementado a mano en `ServicesOverview.tsx` y `EmprendedoresHome.tsx` | Ningún `import DoubleBezelCard` fuera de `BentoGrid.tsx`, que a su vez tampoco se usa |
| Bento Grid (`BentoGrid.tsx`) | **No** | 0 imports en todo el repo |
| Float/Tilt 3D Card (`FloatTiltCard.tsx`) | **No** | 0 imports en todo el repo — el hero usa "la tarjeta tilt 3D... o la foto del courier" según `DESIGN.md` línea 111; en el código real, ningún componente de hero importa `FloatTiltCard` |
| Radio Card Group (`RadioCardGroup.tsx`) | **No** | 0 imports en todo el repo |
| Logos Carousel (`LogosCarousel.tsx`) | **No** | 0 imports en todo el repo |
| Vertical Stepper (`StepperVertical.tsx`) | **No** | 0 imports en todo el repo (tampoco `StepperHorizontal.tsx`) |

**6 de los 7 componentes insignia documentados en `DESIGN.md` §5 no se usan en ninguna página real hoy.** Solo el CTA Nested Pill está vivo. `DESIGN.md` línea 125 es explícito: *"Las páginas deben consumirlas, no reimplementar el markup a mano"* — y sin embargo `ServicesOverview.tsx` y `EmprendedoresHome.tsx` hacen exactamente eso con el patrón double-bezel (aplican las clases CSS directamente sobre `<div>` propios en vez de importar `<DoubleBezelCard>`). El resultado visual es el mismo hoy (mismas clases CSS), pero la capa de componente reutilizable —la que garantiza que un cambio futuro al bezel se propague a todo el sitio de una sola vez— no cumple su función.

**Dos lecturas posibles, ninguna verificable sin más contexto:**
1. Estos componentes se construyeron para una versión del sitio que después se simplificó, y quedaron como código muerto.
2. Estos componentes se construyeron pensando en usarse pero la integración a las páginas reales quedó pendiente.

No se asume cuál es — es una pregunta para quien programe o para el dueño.

## 3. DS-02 (alto) — Recomendación: decisión explícita sobre los 6 componentes sin uso

Antes de escribir más código nuevo que dependa de `DESIGN.md` §5, conviene una decisión de una sola vez:
- **Opción A — Integrar:** conectar los 6 componentes a las páginas que ya deberían usarlos según `DESIGN.md` (por ejemplo, el Bento Grid + Double Bezel en la sección de Servicios, línea 206 del propio `DESIGN.md`). Es el camino más fiel al contrato ya escrito.
- **Opción B — Retirar:** si el diseño real evolucionó hacia el patrón "clases CSS directas" que ya usan `ServicesOverview.tsx`/`EmprendedoresHome.tsx`, borrar los componentes sin uso y actualizar `DESIGN.md` §5 para que el contrato describa el patrón que el código realmente sigue.

Cualquiera de las dos es válida — lo que no conviene es dejarlo como está: código y contrato describiendo dos sistemas distintos.

## 4. DS-03 (medio) — `InputField.tsx` también es código muerto, fuera de los 7 insignia

No estaba en la lista de 7, pero apareció en la misma verificación: `src/components/ui/InputField.tsx` no tiene ningún punto de uso en todo el repo. Los formularios reales (`ContactForm.tsx`, cotizadores) parecen implementar sus propios campos de entrada en vez de usar esta primitiva. Mismo tipo de decisión que `DS-02`.

## 5. DS-04 (medio) — `LogisticaNetworkCanvas.tsx` es código muerto que sí usa el color de marca correcto

A diferencia de lo que decía `DESIGN.md` §11, este componente no tiene colores fuera de marca (usa `#FFEC01`, el amarillo correcto). El problema real es otro: el componente entero no se importa en ningún lado — es una animación de red logística en canvas que nunca llegó a integrarse a ninguna página. Si el plan es usarlo en algún lugar (por ejemplo, como fondo de una sección "cómo funciona"), falta conectarlo; si no, es candidato a borrar junto con `DS-02`/`DS-03`.

## 6. DS-05 (medio) — Animación por canvas/JS sin respetar `prefers-reduced-motion`

`HeroProceduralBackground.tsx` (en uso real, 12 archivos) dibuja su animación con `requestAnimationFrame` sobre un `<canvas>`. La regla global de `globals.css` (§2 de `F13-design-extraido.md`) cubre animaciones definidas con `animation`/`transition` de CSS, pero no alcanza a un bucle de dibujo manual en JavaScript. Alguien con esa preferencia de sistema operativa activada sigue viendo la animación del fondo del hero en movimiento. Ajuste sugerido: chequear `window.matchMedia('(prefers-reduced-motion: reduce)').matches` al iniciar el bucle de animación y detenerlo o mostrar un fondo estático si es `true` — el mismo patrón que ya usa `FloatTiltCard.tsx` (código muerto hoy, pero con el chequeo correcto ya escrito, reutilizable).

## 7. DS-06 (bajo) — Colores fuera de marca en una herramienta interna, no en el sitio público

`src/app/admin/imagenes/actions.ts` (líneas 165, 170, 242, 245) tiene las cadenas `#003399` y `#FFCC00` como texto dentro de un prompt para un generador de imágenes por IA, no como estilo real de ningún componente visible. Impacto bajo porque es una herramienta de administración interna, no una página de cara al cliente — pero vale corregir el texto del prompt para que coincida con los colores de marca reales (`#0636A5`/`#FFEC01`), para que las imágenes que genere esa herramienta salgan con los colores correctos.

## 8. Regla de lint/test propuesta, para prevenir reintroducción de colores fuera de marca

Ya que en esta pasada no se encontró ningún color fuera de marca aplicado a la interfaz real (el único caso encontrado es texto de prompt en una herramienta interna), la prioridad no es "limpiar" sino "prevenir". Propuesta simple, sin herramienta nueva que instalar:

```js
// scripts/check-brand-colors.mjs — pensado para correr en CI (`pnpm check:brand-colors`)
// Falla si aparece un color hexadecimal que no sea uno de los tokens de marca permitidos,
// en cualquier archivo .tsx/.ts/.css bajo src/ — con una lista de excepciones explícita
// (blanco/negro puro, y archivos de herramientas internas como admin/imagenes).
const ALLOWED = ['#0636A5', '#FFEC01', '#ffffff', '#000000']; // + la escala completa de tokens
const EXCEPT_FILES = ['src/app/admin/imagenes/actions.ts']; // prompts de IA, no estilo real
// Recorre src/**/*.{ts,tsx,css}, busca /#[0-9A-Fa-f]{3,6}\b/g, reporta cualquier match
// que no esté en ALLOWED y cuyo archivo no esté en EXCEPT_FILES.
```
Es una propuesta de punto de partida (un script Node simple, sin dependencias nuevas) — quien programe puede decidir si conviene como script de CI, como regla de ESLint personalizada, o como test de Vitest que recorra el filesystem. No se instaló ni se corrió nada — es una propuesta para decidir e implementar.

## 9. Ajustes de paleta por accesibilidad — cruce con `F2-2`

Esta fase pide proponer ajustes de paleta guiados por hallazgos de contraste. `F2-2-ux-audit.md` (fase anterior) ya documentó sus propios hallazgos de contraste — no se repitió esa auditoría de cero en esta pasada. No se encontró, en esta verificación de código, ningún uso de un color fuera de la paleta de marca que compitiera por contraste en una página real (ver §1 y §7) — así que no hay un ajuste de paleta nuevo que proponer desde el lado del código; cualquier ajuste de contraste sigue siendo el que ya haya señalado `F2-2` dentro de los tokens de marca existentes.

## 10. Documentación por componente — lo que falta

`DESIGN.md` documenta el contrato visual de los 7 insignia (clases, estados, comportamiento) pero no tiene, para ninguno, una nota de "dónde se usa hoy" ni "última vez verificado contra el código". Dado lo encontrado en `DS-01`, se propone agregar a cada entrada de componente en `DESIGN.md` §5 una línea de estado (`En uso: sí/no — última verificación: <fecha>`) para que la próxima auditoría no tenga que rehacer esta misma búsqueda desde cero.

---

## 11. Resumen de hallazgos de esta fase (para `F4-0-backlog.md`)

| ID | Hallazgo | Prioridad | Tipo de cambio |
|---|---|---|---|
| DS-01 | 6 de 7 componentes insignia sin uso real; patrón double-bezel reimplementado a mano en 2 páginas | Crítico | Decisión de producto (integrar o retirar) + código |
| DS-02 | Decisión explícita pendiente sobre los 6 componentes sin uso | Alto | Decisión del dueño/equipo |
| DS-03 | `InputField.tsx` sin uso | Medio | Decisión + código |
| DS-04 | `LogisticaNetworkCanvas.tsx` sin uso (con color correcto) | Medio | Decisión + código |
| DS-05 | Animación de canvas del hero no respeta `prefers-reduced-motion` | Medio | Código (accesibilidad) |
| DS-06 | Colores fuera de marca en texto de prompt de herramienta interna | Bajo | Código (texto) |

Estos hallazgos se agregan a `F4-0-backlog.md` como `BL-43` a `BL-47` (ver ese archivo para la especificación completa) — no se renumeran los `BL-01` a `BL-42` existentes, siguiendo la misma regla de retorno al backlog usada en las fases anteriores.

## 12. Supuestos y lo que no se pudo verificar

- No se verificaron el resto de los 12 puntos de `DESIGN.md` §11 no comprobables por texto (fallback de Inter, conteo exacto de `h-screen`, orden de secciones de home, ~14 componentes huérfanos exactos, brechas de precio B2B sin fila de `PriceRange`) — quedan tal como los documentó `DESIGN.md`, ni confirmados ni descartados en esta pasada.
- No se corrió ninguna herramienta de accesibilidad automatizada — todo lo de `DS-05` es lectura de código, no una medición en navegador con la preferencia activada.
- El script de `§8` es una propuesta de punto de partida, no una herramienta probada — no se instaló ni se ejecutó.
