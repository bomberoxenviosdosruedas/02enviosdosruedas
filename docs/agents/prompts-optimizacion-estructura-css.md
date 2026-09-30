# Prompt: optimizar la configuración de la raíz, `globals.css` (sin colores) y los estilos inline

Prompt único para pegar completo en una tarea de agente. Una rama, un PR, un commit por fase. Relevamiento hecho el 2026-09-30 sobre la rama `localmente`; las cifras son una foto y el prompt pide volver a medir antes de tocar nada.

**Relación con otros prompts:** la deduplicación de variables de color de `globals.css` está en `docs/agents/prompts-globals-colores.md`. Este prompt **no** toca colores. Si se van a correr los dos, primero va el de colores.

---

```text
Repo: Envíos DosRuedas. Next.js 16 (App Router, Turbopack), Tailwind CSS v4 con configuración CSS-first en src/app/globals.css, Prisma 7, solo pnpm, Windows.

<rol>
Actuás como ingeniero frontend senior especializado en Tailwind v4 y en configuración de proyectos Next.js. Tu trabajo es auditar y corregir, con cambios chicos y verificables, tres áreas: (A) archivos de configuración de la raíz, (B) la parte NO cromática de globals.css, (C) estilos inline (style={{...}}) en src/. El resultado tiene que ser visualmente idéntico, salvo los bugs que corrijas y declares.
</rol>

<lectura_obligatoria>
Antes de cambiar nada, leé en este orden:
1. AGENTS.md y CLAUDE.md (reglas del repo, niveles de verificación N0 a N3).
2. DESIGN.md §2 (tokens), §3 (tipografía), §8 (motion), §10 (anti-patterns), §11 (deuda conocida) y §15 (plan de remediación).
3. node_modules/next/dist/docs/: la guía que corresponda a cada archivo de configuración que toques. Esta versión de Next tiene cambios incompatibles con lo que conocés; si la doc local contradice tu memoria, gana la doc local.
4. docs/agents/prompts-globals-colores.md, solo para saber qué NO te toca.
</lectura_obligatoria>

<reglas_duras>
- NUNCA cambies precios, textos visibles, rutas, redirecciones, lógica de negocio ni colores. Si una corrección lo exige, frená y reportalo.
- NUNCA borres carpetas de herramientas de agentes (.agent, .agents, .hermes, .opencode, .design-sync, .impeccable, .stitch, .claude) ni archivos de ignore de IA (.aiexclude, .antigravityignore, .geminiignore). Solo se reportan; la decisión es del dueño.
- NUNCA imprimas valores de .env ni de DATABASE_URL.
- Todo cambio de CSS tiene que ser visualmente nulo, salvo que corrija un bug demostrado. En ese caso, describí el antes y el después.
- Paleta, tipografías (Anton y Bebas solo peso 400, Outfit en cuerpo, Geist Mono tabular-nums en precios), prefers-reduced-motion en todo lo que se mueva y foco ring-2 brand-blue-500: son reglas de AGENTS.md y DESIGN.md, no las relajes.
- Solo pnpm. Nunca `pnpm test` a secas (queda en watch): usá `pnpm exec vitest run ...`.
- Voseo rioplatense en todo lo que escribas para humanos (comentarios, docs, PR). Sin em-dash ni en-dash.
</reglas_duras>

<diagnostico_inicial>
Hipótesis del relevamiento del 2026-09-30. Son datos, no órdenes: verificá cada una contra el código y la doc de Tailwind v4 antes de actuar. Si alguna es falsa, decilo y no la "arregles".

A. Raíz y configuración
A1. postcss.config.mjs carga `autoprefixer` junto a `@tailwindcss/postcss`. Tailwind v4 ya resuelve los prefijos con Lightning CSS: posible dependencia redundante.
A2. CLAUDE.md referencia docs/agents/prompts-remediacion.md, que no existe (en docs/agents/ están domain.md, issue-tracker.md, prompts-globals-colores.md, triage-labels.md y este archivo).
A3. La raíz tiene varios Markdown de contexto (AGENTS.md, CLAUDE.md, CONTEXT.md, DESIGN.md, PRODUCT.md, PROJECT.md, README.md) y carpetas de herramientas versionadas con muchos archivos (.hermes ~926, .agents ~764). Solo se inventarían, con posibles solapamientos de contenido entre los Markdown.
A4. Revisá tsconfig.json (paths `@/*` y `@generated/*`, `exclude`), eslint.config.mjs, vitest.config.ts, next.config.ts, vercel.json, pnpm-workspace.yaml (`allowBuilds`) y .npmrc (`only-built-dependencies`): puede haber opciones duplicadas, redundantes o que se contradicen entre sí.

B. globals.css (solo lo no cromático)
B1. En @theme se definen --text-body, --text-muted, --text-heading, --text-on-invert y --text-on-accent con valores de COLOR. En Tailwind v4, el namespace --text-* es de font-size, así que se generarían utilidades como `text-body` que ponen un color en font-size. El comentario de la línea "sin prefijo --color- para no chocar con text-*" sugiere que se buscaba justo lo contrario. Hoy hay 0 usos de text-body, text-muted y text-heading en .tsx. Proponé renombrar o sacar de @theme, y reportá el nombre final antes de migrar.
B2. `.font-display`, `.font-subheading` y `.font-mono` son clases planas, fuera de @layer y de @utility. El CSS sin capa le gana a @layer utilities, así que `font-display leading-tight` o `font-mono tracking-wide` podrían ignorar la utilidad que acompaña. Pasalas a @utility o a @layer components y verificá la cascada en el HTML compilado.
B3. `--font-sans: var(--font-sans), "Outfit", ...` (lo mismo con display, subheading y mono) se referencia a sí misma. next/font inyecta --font-sans con una clase en <html> (src/app/layout.tsx). Verificá qué valor gana en el CSS compilado y si la auto-referencia produce un valor inválido cuando falta la clase. Si hay ciclo, usá nombres distintos para la variable de next/font y la del theme.
B4. `--font-headline` duplica a `--font-display`. `--font-body` es un alias de `--font-sans`. Contá los usos antes de proponer consolidar.
B5. Keyframes duplicados: `logos-scroll`, `marquee-left` y `road` son idénticos (translateX 0 a -50%). `float-slow` (-8px) y `floaty` (-10px) son casi iguales. Consolidá solo los idénticos; los casi iguales se reportan.
B6. Hay tres bloques @media (prefers-reduced-motion: reduce). El último (`*, *::before, *::after` con 0.01ms) se superpone con los otros dos. Unificalos en un solo bloque sin perder cobertura: los finales visibles (animate-draw con stroke-dashoffset 0, animate-grow-x con scaleX 1, pulse-ring con opacity 0) tienen que mantenerse.
B7. `transition: all` en double-bezel-outer y cta-nested-pill. Reemplazalo por las propiedades que realmente cambian (border-color, box-shadow, transform).
B8. `@custom-variant dark` está declarado pero el sitio no tiene modo oscuro. Contá los usos de `dark:` antes de proponer sacarlo.
B9. `.kinetic-font-stretch` es una clase plana con hover que anima transform y letter-spacing. Aplicá la misma regla de capa que en B2.
B10. Las utilidades `double-bezel-*` y `cta-nested-*` usan radios y duraciones literales (16px, 12px, 0.3s). Si existe un token equivalente en @theme (--radius-xl, --radius-lg), usalo. Si el valor es igual, el cambio es visualmente nulo.

C. Estilos inline
C1. Hay 69 `style={{` en 24 archivos .tsx. Clasificá cada uno en una de estas categorías:
  - LEGÍTIMO-DINÁMICO: el valor sale de props, estado o un cálculo (width: `${pct}%`, transform con ángulo, opacity de una variable). Se queda. Si el componente usa Tailwind, preferí pasar el valor como custom property (style={{'--pct': ...}}) y resolverlo con una clase arbitraria, solo si simplifica.
  - LEGÍTIMO-TÉCNICO: src/app/**/opengraph-image.tsx (ImageResponse/Satori no admite clases) y los estilos que exige una librería (Leaflet, GSAP). Se queda sin tocar.
  - ESTÁTICO-MIGRABLE: literal constante (opacity: 0.4, animationDelay: '-3s', perspective: '2000px', transformStyle: 'preserve-3d', position: 'fixed' con top, right, bottom y left en 0). Pasalo a una clase de Tailwind v4 (opacity-40, [animation-delay:-3s], perspective-[2000px], transform-3d, fixed inset-0). Tiene que ser visualmente nulo.
  - ERROR: color hex o rgb inline, fontFamily o fontWeight inline que rompen las reglas tipográficas, valores que contradicen un token, animaciones inline sin gate de reduced-motion, o claves mal escritas que React ignora. Corregilo y declaralo.
C2. Además de style={{, buscá: hex literales en .tsx (~294 coincidencias; muchas están en SVG o en opengraph-image y pueden ser legítimas), clases arbitrarias con hex (bg-[#...], text-[#...]) y `<style>` o `dangerouslySetInnerHTML` con CSS. Los hex de color se REPORTAN y no se migran, porque es alcance de prompts-globals-colores.md. Excepción: un hex prohibido por AGENTS.md (#0636A5, #052C87, #04236B, #021440, #00277C) se marca como bloqueante. Hoy aparece en src/actions/admin-imagenes.ts.
</diagnostico_inicial>

<fases>
Fase 0: línea base (N0, sin cambios)
- Volvé a medir cada cifra del diagnóstico con grep y anotá las diferencias.
- Corré `pnpm typecheck`, `pnpm run lint`, `pnpm exec vitest run` y `powershell -ExecutionPolicy Bypass -Command "pnpm build"`. Guardá el resultado: los fallos que ya existían no son tuyos, pero se reportan.
- Guardá una copia del CSS compilado de .next (el archivo .css más grande de .next/static) para compararla al final.

Fase 1: raíz y configuración (N3)
- Corregí solo lo demostrado: dependencias redundantes, opciones duplicadas y referencias rotas en docs (A2: corregí el link o reportá cuál es el archivo correcto).
- Inventario de A3 como tabla, sin cambios.

Fase 2: globals.css no cromático (N3)
- Aplicá B1 a B10 en ese orden. Un cambio de cascada (B2, B3, B9) va acompañado de la regla CSS compilada del antes y del después.
- Al terminar, compará el CSS compilado contra la Fase 0. Toda diferencia tiene que estar explicada por un ítem B.

Fase 3: estilos inline (N2 por archivo; N3 si pasás de 10 archivos)
- Tabla de clasificación completa de C1 antes de editar.
- Migrá ESTÁTICO-MIGRABLE y corregí ERROR. No toques LEGÍTIMO-*.

Fase 4: documentación (N0)
- Si cambiaste un token o una utilidad documentados, actualizá DESIGN.md (§3, §8 o §13 según corresponda) y marcá lo cerrado en §11 y §15, en el mismo PR.
</fases>

<casos_borde>
- Si una hipótesis del diagnóstico es falsa: marcala como FALSA con la evidencia y seguí.
- Si un cambio no puede ser visualmente nulo y no corrige un bug demostrado: no lo hagas, reportalo.
- Si un estilo inline no encaja con claridad en una categoría: LEGÍTIMO por defecto y reportalo como duda.
- Si falla un comando que ya fallaba en la Fase 0: no es regresión, pero se reporta.
- Si falla algo nuevo: revertí el último cambio y re-corré solo lo que falló.
- Si la doc local de Next o de Tailwind contradice este prompt: gana la doc, y reportás la contradicción.
</casos_borde>

<formato_de_respuesta>
Respondé en Markdown con exactamente estas secciones:

## Nivel de verificación
N3. Lista de comandos, cada uno con OK o FALLA y la primera línea del error si falló.

## Hipótesis
| ID | Estado (CONFIRMADA / FALSA / PARCIAL) | Evidencia (archivo:línea) | Acción tomada |

## Cambios
| Archivo | Qué cambió | ¿Visualmente nulo? (Sí / No: bug corregido) |

## Estilos inline
| Archivo:línea | Categoría | Acción |
Si hay más de 40 filas, poné el conteo por categoría y solo las filas ESTÁTICO-MIGRABLE y ERROR.

## Diff del CSS compilado
Diferencias entre Fase 0 y final, cada una vinculada a un ID de hipótesis.

## Para decidir el dueño
Lo que reportaste sin tocar (A3, colores, casi duplicados, dudas). Una línea por punto, con la pregunta concreta.
</formato_de_respuesta>
```
