# Prompt: deduplicar las variables de color de `globals.css` y migrar el código

Prompt único para pegar completo en una sola tarea. Todo va en **una rama y un PR**. Relevamiento hecho el 2026-09-30 sobre la rama `localmente`; las cifras son una foto y el prompt pide volver a medir.

---

Repo: Envíos DosRuedas (Next.js 16, Tailwind v4, solo `pnpm`). Antes de actuar leé `AGENTS.md` y `DESIGN.md` §2 (paleta y tokens).

## Objetivo

Dejar `src/app/globals.css` con **una sola variable por color** y migrar todo el código a esos tokens, sin que cambie nada de lo que se ve. Al final, un test tiene que impedir que vuelvan a aparecer colores repetidos.

## Reglas que no se negocian

- Paleta permitida: `#0950F6` (el azul más oscuro permitido), `#3570F8`, `#628FF9`, `#8EAFFB`, `#BACEFD`, `#E6EEFE`, `#FFEC01`, `#FFF12E`, `#E6D400`, `#FFFDE6`, `#FFFAB8`, `#FFF78A`, `#FFF45C`, `#FFFFFF`. Errores: solo `#EF4444` y `#DC2626`. Nada de negro, gris ni verde.
- La migración tiene que ser **visualmente nula**: cada alias se reemplaza por el token canónico **con el mismo hex**. Si un alias tiene un valor distinto al de la tabla de abajo, frená y reportalo; no elijas vos.
- Tokens canónicos finales, y ninguno más en la familia de marca: `brand-blue-{50,100,200,300,400,500}`, `brand-yellow-{50,100,200,300,400,500,600}` y `white`.
- No toques precios, textos, layout ni lógica. Solo nombres de color.
- Sin em-dash ni en-dash en lo que escribas.
- Tocar `globals.css` es **nivel N3**. Informá el nivel y el resultado de cada comando. Nunca `pnpm test` a secas.

## Diagnóstico (foto del 2026-09-30)

`globals.css` define 71 variables `--color-*` en `@theme`, pero la paleta real tiene 14 valores. El resto son alias con valores repetidos:

| Valor | Token canónico | Alias que repiten el valor |
|---|---|---|
| `#0950F6` | `brand-blue-500` | `brand-blue-600`, `-700`, `-900`, `-950`, `brand-blue`, `brand-ink`, `brand-navy`, `brand-blue-deep`, `brand-blue-ink`, `brand-dark`, `blue-500`, `-600`, `-700`, `-900`, `-950`, `gray-600` a `-950`, `slate-600` a `-950`, `zinc-600` a `-950` |
| `#3570F8` | `brand-blue-400` | `brand-blue-800`, `blue-400`, `blue-800`, `gray-500`, `slate-500`, `zinc-500` |
| `#628FF9` | `brand-blue-300` | `blue-300`, `gray-400`, `slate-400`, `zinc-400` |
| `#8EAFFB` | `brand-blue-200` | `blue-200`, `gray-300`, `slate-300`, `zinc-300` |
| `#BACEFD` | `brand-blue-100` | `blue-100`, `gray-200`, `slate-200`, `zinc-200` |
| `#E6EEFE` | `brand-blue-50` | `blue-50`, `gray-100`, `slate-100`, `zinc-100` |
| `#FFEC01` | `brand-yellow-500` | `brand-yellow` |
| `#FFFFFF` | `white` | `brand-white`, `brand-white-50`, `gray-50`, `slate-50`, `zinc-50` |

Además:

- Las 17 variables semánticas (`--surface-*`, `--text-*`, `--border-subtle`, `--focus-ring`, `--action-*`) tienen el hex escrito a mano en vez de referenciar el token.
- Las reglas de componentes de `globals.css` repiten hex sueltos (`#E6EEFE`, `#BACEFD`, `#628FF9`, `#FFFFFF`).
- Usos aproximados en `src/`:

  | Alias | Usos | Archivos |
  |---|---|---|
  | `brand-blue-700` | 449 | 61 |
  | `brand-blue-900` | 191 | 50 |
  | `brand-ink` | 63 | 20 |
  | `brand-white-50` | 48 | 26 |
  | `brand-blue` a secas | ~60 | |
  | `brand-yellow` a secas | ~30 | |
  | `brand-blue-600` | 27 | 11 |
  | `brand-blue-800` | 12 | 8 |
  | `brand-blue-950` | 8 | 5 |
  | `blue-*` | 4 | 3 |
  | `var(--color-<alias>)` | 36 | |
  | `gray-*`, `slate-*`, `zinc-*` | 0 | |

- `src/app/nosotros/nuestras-redes/nuestras-redes.test.tsx:69` nombra `from-brand-blue-700`.

**Riesgo principal:** Tailwind v4 no falla cuando una clase usa un color que ya no existe: simplemente no genera CSS. Si se borra un alias antes de migrar el código, se producen regresiones visuales **silenciosas**. Por eso el orden es: canonizar, migrar, borrar y verificar.

## Fase 0: línea base

1. Volvé a medir. Listá cada `--color-*` de `@theme` con su valor resuelto (siguiendo los `var()`), agrupalo por hex y comparalo con la tabla. Si hay diferencias, reportalas y frená.
2. Contá con grep los usos de cada alias en `src/**/*.{ts,tsx,css,mdx}`. Incluí:
   - clases con cualquier prefijo: `bg-`, `text-`, `border-`, `ring-`, `ring-offset-`, `from-`, `via-`, `to-`, `fill-`, `stroke-`, `outline-`, `decoration-`, `divide-`, `placeholder-`, `shadow-`, `accent-`, `caret-`;
   - variantes (`hover:`, `md:`…) y opacidades (`/20`, `/[0.85]`);
   - valores arbitrarios (`[var(--color-…)]`) y `var(--color-…)` en CSS o en `style`.
3. Con `pnpm dev --webpack`, guardá capturas de estas páginas a 1440 px y a 390 px: `/`, `/servicios/envios-express`, `/cotizar`, `/contacto`, `/nosotros/sobre-nosotros`. Son la referencia para comparar al final.

## Fase 1: canonizar `globals.css`, sin borrar alias todavía

1. Al principio de `@theme`, dejá un bloque "Paleta canónica" con los hex literales de estos tokens:
   - `--color-brand-blue-50` a `-500` (6);
   - `--color-brand-yellow-50` a `-600` (7);
   - `--color-white: #FFFFFF` (explícito).

   Poné un comentario corto por familia que diga para qué sirve cada paso: fondo suave, borde, hover aclarado, texto y lienzo, CTA, hover y pressed del CTA.

   Sacá los comentarios obsoletos, como el que enumera "#0950F6" cinco veces como eliminados o el de "era #0950F6, ahora #0950F6".
2. Mové todos los alias a un bloque al final de `@theme` titulado `/* DEPRECADO: alias temporales, se borran en la fase 3 */`. Cada alias apunta al canónico con `var()`, nunca a un hex. Por ejemplo:
   - `--color-brand-blue-900: var(--color-brand-blue-500);`
   - `--color-brand-blue-800: var(--color-brand-blue-400);`
   - `--color-brand-white-50: var(--color-white);`
3. En cada variable semántica, reemplazá el hex por `var(--color-…)` del token canónico. `--action-danger` queda en `#EF4444`. No agregues semánticas nuevas.
4. En las reglas de componentes de `globals.css`, reemplazá los hex de la paleta por `var(--color-…)`. Las sombras en `rgba(9, 80, 246, …)` y `rgba(255, 236, 1, …)` quedan como están.
5. Punto de control: `pnpm typecheck` y `pnpm build`. Nada visual debería cambiar.

## Fase 2: migrar el código

1. Reemplazá los alias en todo `src/` con esta tabla. Aplicala del nombre más largo al más corto, para que `brand-blue-deep` no quede convertido en `brand-blue-500-deep`.

   | Alias | Canónico |
   |---|---|
   | `brand-blue-deep`, `brand-blue-ink`, `brand-navy`, `brand-dark`, `brand-ink` | `brand-blue-500` |
   | `brand-blue-600`, `brand-blue-700`, `brand-blue-900`, `brand-blue-950` | `brand-blue-500` |
   | `brand-blue-800` | `brand-blue-400` |
   | `brand-blue` a secas (sin paso numérico, con o sin `/opacidad`) | `brand-blue-500` |
   | `brand-yellow` a secas | `brand-yellow-500` |
   | `brand-white-50`, `brand-white` | `white` |
   | `blue-50` a `blue-950` (sin `brand-`) | `brand-blue-*` del mismo hex, según la tabla del diagnóstico |

   Respetá los límites de palabra: `brand-blue-500` y `brand-blue-50` no se tocan, y `text-brand-blue/80` pasa a `text-brand-blue-500/80`.

   Si usás un script, guardalo fuera del repo y corrélo primero en modo "dry run". Revisá el diff por muestreo en al menos 10 archivos antes de aplicarlo.
2. Andá por lotes de carpeta y corré `pnpm exec eslint <archivos>` en cada lote. El orden es:
   1. `src/components/ui` (primitivas);
   2. `src/components/home`;
   3. `servicios/**`;
   4. `cotizar/**`;
   5. `layout`;
   6. `nosotros/**`;
   7. `contacto`;
   8. `legal`;
   9. el resto de `src/components`;
   10. `src/app/**` y `src/lib/**`.
3. Migrá también los strings que describen clases: `src/lib/reviewCatalog.ts`, catálogos, ejemplos en comentarios. Actualizá la descripción del test `nuestras-redes.test.tsx:69` y cualquier aserción que busque una clase con alias.
4. Algunas clases van a quedar redundantes después del reemplazo, por ejemplo `text-brand-blue-500 hover:text-brand-blue-500` o `from-brand-blue-500 to-brand-blue-500`. **No las simplifiques**: listalas en la respuesta. Son hovers o degradados que hoy no hacen nada, y decide el dueño de diseño.
5. Punto de control: el grep de cada alias en `src/` da **0**. Corré:
   - `pnpm typecheck`;
   - `pnpm exec vitest related <archivos tocados> --run`, en tandas si son muchos.

## Fase 3: borrar los alias y cerrar la puerta

1. Confirmá que ningún alias aparece en `src/` ni en `tests/` o `e2e/`, si existen. Después borrá el bloque DEPRECADO completo.
2. Neutralizá dentro de `@theme` las paletas default de Tailwind que la marca prohíbe, para que `text-gray-600` o `bg-green-500` no generen CSS:
   - `--color-gray-*: initial;`
   - `--color-slate-*: initial;`
   - `--color-zinc-*: initial;`
   - `--color-neutral-*: initial;`
   - `--color-stone-*: initial;`
   - `--color-green-*: initial;`
   - `--color-emerald-*: initial;`
   - `--color-lime-*: initial;`
   - `--color-teal-*: initial;`
   - `--color-blue-*: initial;`

   Antes de cada línea confirmá con grep que la familia tiene 0 usos. Si alguna tiene usos, reportala y no la neutralices. `red-*` y `black` no se tocan: solo reportá sus usos.
3. Creá `src/app/globals.test.ts` con vitest; lee `globals.css` con `fs`. Tiene que fallar si:
   - dos `--color-*` de `@theme` resuelven al mismo hex, siguiendo los `var()`;
   - aparece un `--color-*` fuera de la lista de canónicos, salvo las neutralizaciones `initial`;
   - un `--color-*` usa un hex fuera de la paleta permitida.

## Fase 4: documentación (N0)

1. En `DESIGN.md`, reemplazá los alias por los canónicos:
   - §2.2, la tabla maestra;
   - §2.6, el anexo de `@theme`, recortado fiel al `globals.css` nuevo;
   - los ejemplos de §5;
   - §13.1;
   - cualquier otra mención a `brand-blue-600/700/800/900/950`, `brand-ink`, `brand-navy`, `brand-white-50`, etc.

   Agregá en §11 una línea con fecha que registre el cierre de esta deuda.
2. Aplicá las mismas sustituciones en `docs/knowledge_base/03-diseno/*.md`, `docs/knowledge_base/00-negocio/tarifas.md` y `.agents/skills/**`.
3. Cambiá solo nombres de token, no reglas. Si un texto justifica un alias ("blue-900 para texto sobre amarillo"), reescribilo con el canónico ("brand-blue-500 sobre amarillo, 4.9:1").
4. Al terminar, el grep de alias en `DESIGN.md`, `docs/knowledge_base/` y `.agents/` tiene que dar 0, salvo la línea histórica de §11.

## Verificación final (N3)

1. Corré:
   - `pnpm exec vitest run src/app/globals.test.ts`;
   - `pnpm typecheck`;
   - `pnpm run lint`;
   - `pnpm build`. En Windows, si hace falta: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`.
2. Sacá capturas de las 5 páginas de la fase 0, a 1440 y 390 px, y comparalas con las de referencia. No puede cambiar ningún color.
3. El grep de cada alias en `src/`, `DESIGN.md`, `docs/knowledge_base/` y `.agents/` tiene que dar 0.

## Qué incluir en la respuesta

1. El bloque de colores final de `@theme`, completo.
2. Los reemplazos por alias y por carpeta, con cantidades.
3. Los archivos que necesitaron edición manual.
4. Las clases que quedaron redundantes (fase 2, paso 4).
5. Las familias neutralizadas y los usos encontrados de `red-*` y `black`.
6. El resultado de cada comando y de la comparación de capturas.
7. Un relevamiento, **sin aplicar cambios**, de los hex escritos a mano en `src/**/*.{ts,tsx}`, como tabla con estas columnas: archivo:línea, valor, tipo de uso (SVG, `style`, clase arbitraria, datos) y propuesta de token.
   - Cifras de la foto: `#0950F6` 204 veces, `#FFEC01` 70, `#FFFFFF` 26.
   - Fuera de paleta: `#D6E4FE`, `#F8FAFC`, `#3B7BF8`, `#FFF44A`, `#00277C` y colores de redes sociales (todos corregidos en src/).
   - Marcá los que están fuera de paleta como decisión de diseño pendiente.

## Fuera de alcance: reportar, no decidir

- En Tailwind v4, `red-500` y `red-600` son colores OKLCH que no coinciden con `#EF4444` y `#DC2626`. Hay que elegir entre dos opciones: definir tokens de error propios o redefinir esos rojos.
- Hay un `border-black` en `src/`, y el negro es un color prohibido.
- Las sombras en `rgba(9, 80, 246, …)` podrían pasar a `color-mix(...)`. No son variables repetidas, así que no entran en este trabajo.
