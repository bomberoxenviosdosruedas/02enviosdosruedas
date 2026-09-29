# Base de conocimiento — Envíos DosRuedas

> Reestructurada y **verificada contra código el 2026-09-29**. `AGENTS.md` (raíz) tiene las reglas de "nunca" que se cargan en cada sesión; acá está el detalle.

## Orden de autoridad de las fuentes

1. **`.docx` y planilla `.xlsx` del dueño (sep-2026)**: `01-fuentes-dueno/docx-2026-09.md` y `xlsx-2026-09.md`. Solo cuentan las respuestas del dueño (marcadas 🟦).
2. **Confirmaciones verbales de Matías**, registradas con fecha en `01-fuentes-dueno/fuentes.md`.
3. **Informe estratégico** (`docs/contexto/Informe de Estrategia…docx`): confirma, no crea. Lo que solo está ahí va **[SIN CONFIRMAR]**.
4. **CSV de 31 preguntas (25/5/2026)**: la fuente más literal para voz, tono y líneas rojas; la más vieja para precios y alcances.

**[PLANTILLA]** = texto de la planilla que el dueño no respondió (preguntas, "Típico: …", "Acción recomendada", "Pendiente"). **[SIN CONFIRMAR]** = dato que solo trae el informe. **Ninguno de los dos se publica.** Si dos fuentes del dueño chocan, va a `01-fuentes-dueno/conflictos-abiertos.md` y no se resuelve sin él.

Las transcripciones `docs/contexto/*.md` **no son fieles**: no usarlas como fuente.

## Índice

| Archivo | Qué es |
|---|---|
| **00-negocio/** | |
| `identidad.md` | Quién es la empresa, cobertura, horario, posicionamiento, estrategia comercial |
| `servicios.md` | Los 6 servicios de la vista: definición del dueño, cortes, precio → constante, URL. Detalle por servicio (§1) |
| `tarifas.md` | **Copia única** de tarifas por distancia, fijas y recargos; flujo server-side, capas de precio, reglas, testing |
| `operaciones.md` | Rutina de la base, protocolos (ausencia, rechazo, fricción de mapa, periferia), exclusiones de mercadería |
| `voz-y-lineas-rojas.md` | Lo que el dueño niega, líneas rojas, tono, glosario operativo, tablas de prohibiciones de copy |
| **01-fuentes-dueno/** | |
| `fuentes.md` | Inventario de fuentes, autoridad, confirmaciones verbales |
| `docx-2026-09.md` | Extracción fiel del `.docx` |
| `xlsx-2026-09.md` | Extracción fiel de la planilla, celda por celda |
| `csv-2026-05.md` | Qué sirve y qué no del CSV de mayo |
| `conflictos-abiertos.md` | Lo que hay que preguntarle a Matías |
| **02-dominio/** | |
| `glosario.md` | Términos del negocio y prefijos de hallazgos |
| `decisiones.md` | Registro inmutable de decisiones (dueño y método) |
| `marca-visual.md` | Sensación de marca, escenas, postales sí/no, frases de marca, clientes que confían |
| `contexto-seo.md` | Keywords, on-page, brechas de contenido |
| `entrevista-dueno-2026-09-28.md` | **Stub**: mapa de la vieja entrevista a los archivos nuevos |
| **03-diseno/** | Detalle de `DESIGN.md` (que manda): design-system, tokens, tipografía, hero, primitivas, motion y a11y, iconografía, anti-patrones de diseño, deuda, plan de remediación |
| **04-operaciones/** | |
| `comandos-verificacion.md` | Niveles N0-N3 y el **único** baseline de lint y tests |
| `stack-tecnologico.md` | Stack, reglas de arquitectura Next.js 16, mapa de directorios |
| `agentes.md` | Skills, prompts de remediación; issue tracker y triage viven en `docs/agents/` |
| **05-auditoria/** | |
| `estado-sitio.md` | Qué pidió el dueño y qué ya cumple el código, con archivo y línea |
| **06-referencia/** | |
| `cheat-sheet.md` | Resumen de diseño y reglas; los precios los enlaza, no los copia |

## Baseline de verificación (2026-09-29)

`pnpm run lint`: 0 errores. `pnpm exec vitest run`: 10 archivos, 113 tests, 111 pasan; fallan los tests 3 y 6 de `src/app/contacto/contacto.test.tsx` (preexistentes). Detalle en `04-operaciones/comandos-verificacion.md` §4.
