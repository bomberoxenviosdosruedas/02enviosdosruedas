# F5-1 — Piezas en Canva

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `F3-1-campaign-plan.md` §11 ("Piezas a producir"), `F3-2-contenidos.md` §3-4 (calendario de redes y GBP del primer mes), `DESIGN.md` (paleta y tipografías).

Este documento se detiene en el checkpoint que pide el propio enunciado de la fase ("Mostrámelas antes de producir en lote") — no se generó ninguna pieza todavía. Lo que sigue es el paso 1 (brand kit) y el paso 2 (plantillas propuestas) de la Fase 5.1; el paso 3 en adelante (generar, redimensionar, pasar `canva-brand-check`, exportar y organizar) queda pendiente de la aprobación del dueño sobre las plantillas de abajo.

---

## 1. Brand kits disponibles en la cuenta conectada

Se listaron los brand kits de la cuenta de Canva conectada a esta sesión. Resultado:

| ID            | Nombre            | ¿Es el de Envíos DosRuedas?                                                                                                       |
| ------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `kAFDWO-20I0` | (sin nombre)      | No identificable como tal — sin nombre ni forma de confirmar colores/tipografías con las herramientas disponibles en esta sesión. |
| `kAG_NSSWvFY` | "Martiarena Prop" | No — el nombre corresponde a otro negocio/proyecto, no a Envíos DosRuedas.                                                        |

**No hay un brand kit identificado con azul `#0636A5`, amarillo `#FFEC01`, blanco y las tipografías Anton, Bebas Neue e IBM Plex Sans/Outfit.** Las herramientas disponibles en esta sesión no permiten inspeccionar los colores/fuentes exactos de cada kit (no hay un "ver detalle de brand kit" además del listado), así que no se puede confirmar ni descartar del todo el kit sin nombre por inspección automática — pero ninguno de los dos está identificado como el de Envíos DosRuedas.

**Antes de generar cualquier pieza en lote, según el punto 1 del enunciado de esta fase:** recomendación es crear (o confirmar cuál de los dos existentes es) el brand kit de Envíos DosRuedas en Canva, con:

- Azul `#0636A5`, amarillo `#FFEC01`, blanco `#FFFFFF` (y opcionalmente los tonos de apoyo `brand-blue-50` a `900` de `src/app/globals.css`, ya relevados en F2-2).
- Tipografías Anton (display), Bebas Neue (subtítulos/badges), IBM Plex Sans u Outfit (cuerpo, según se resuelva D-11 del backlog).
- Logo vectorial (`/logo-envios-simplified.webp`, no el `.webp` rasterizado que F2-1 marcó como DC-11).

---

## 2. Plantillas base propuestas (4) — para aprobar antes de producir en lote

Basadas en las piezas ya definidas en `F3-2-contenidos.md` §3 y en los formatos que pide el enunciado (anuncio de servicio, testimonio de Google, dato/tip para sellers, promoción por rubro).

| #   | Plantilla                 | Formato base              | Para qué piezas del calendario sirve                                                                                 | Elementos fijos (marca)                                                  | Elementos variables (por pieza)                                                                                  |
| --- | ------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 1   | **Anuncio de servicio**   | 4:5 (feed) + 9:16 (story) | CONT-04, CONT-09 a CONT-12 (posts de servicio y GBP)                                                                 | Logo, franja azul/amarilla, tipografía Anton para el titular             | Foto (depósito/rider, nunca stock genérico), titular corto, CTA del glosario de F2-3                             |
| 2   | **Testimonio de Google**  | 4:5 (feed)                | Piezas de reseñas (apoya CONT-05 y el programa de F3-1 §7)                                                           | Logo, marco con los 5 sellos/estrellas, enlace a la ficha real de Google | Cita textual del cliente (solo reseñas reales de `SocialProofSection.tsx`, nunca inventadas), nombre y categoría |
| 3   | **Dato/tip para sellers** | 4:5 + 9:16                | CONT-06/07/08 (contrareembolso), futuros tips de Flex de la guía (CONT-01)                                           | Logo, paleta azul/amarillo, ícono simple (sin stock genérico)            | Texto del tip (tomado de `F2-3-ux-copy.md`/`F3-2-contenidos.md`, nunca improvisado en Canva)                     |
| 4   | **Promoción por rubro**   | 4:5 + 9:16                | Piezas futuras dirigidas a un segmento (Flex, empresas, particulares) según calendario de sprints siguientes de F3-1 | Logo, paleta, CTA                                                        | Segmento destacado, ángulo de mensaje (de `F1-1-competitive-brief.md`), CTA correspondiente del glosario         |

Reglas para las cuatro, heredadas de `DESIGN.md` y de `F2-4-brand-review.md`:

- Solo afirmaciones marcadas como "respaldada" en `F2-4-brand-review.md` §3 — nunca "0 paquetes extraviados", "SLA 100%", "Partner 3PL Verificado" ni ninguna de la lista "no respaldadas".
- Sin fotos de personas reales sin autorización ni logos de Mercado Libre u otras marcas sin verificar que su uso esté permitido (regla explícita del enunciado).
- CTA único por pieza, tomado del glosario de `F2-3-ux-copy.md` §4 — no improvisar un CTA nuevo en Canva.

---

## 3. Piezas del primer mes listas para generar (una vez aprobadas las plantillas)

Tabla de referencia — mapea cada pieza de `F3-2-contenidos.md` §3-4 a la plantilla que le corresponde, para que la generación en lote (paso 3 del enunciado) sea directa una vez que haya brand kit y plantillas aprobadas:

| ID (F3-2)         | Pieza                                         | Plantilla a usar                                       | Formatos a exportar                  |
| ----------------- | --------------------------------------------- | ------------------------------------------------------ | ------------------------------------ |
| CONT-04           | Foto real del depósito/rider + texto de marca | 1 · Anuncio de servicio                                | Post 4:5 IG/FB, Story 9:16           |
| CONT-05           | Invitación a dejar reseña                     | 2 · Testimonio de Google (variante sin cita, solo CTA) | Post 4:5                             |
| CONT-06 (= PZ-05) | Reel contrareembolso                          | No aplica — es video, no pieza estática de Canva       | —                                    |
| CONT-07           | Texto para grupos (sin imagen)                | No aplica — es texto puro, no pieza gráfica            | —                                    |
| CONT-08 (= PZ-07) | Carrusel "Cómo funciona el contrareembolso"   | 3 · Dato/tip para sellers (adaptada a 5 placas)        | Carrusel 4:5 ×5                      |
| CONT-09 a CONT-12 | Publicaciones GBP                             | 1 · Anuncio de servicio                                | Formato de imagen de ficha de Google |

---

## 4. Qué falta para pasar al paso 3 (generar en lote)

1. **Confirmar o crear el brand kit de Envíos DosRuedas en Canva** (§1) — sin esto, `canva-brand-check` no tiene contra qué validar.
2. **Aprobación del dueño sobre las 4 plantillas propuestas (§2)** — el enunciado de esta fase pide mostrarlas antes de producir en lote; no se generó ninguna pieza real todavía por esa razón, no por una limitación técnica del conector (que sí está conectado y funcionando).
3. Una vez aprobado lo anterior: generar las piezas de §3 con `canva-generate-design`/`canva-bulk-create`, redimensionar a post/story de Instagram y post de Facebook, pasar `canva-brand-check` a todo, exportar y organizar en carpetas por semana — y completar esta tabla con el enlace a cada diseño, tal como pide la salida de esta fase.

---

## 5. Supuestos y lo que no se pudo verificar

- El conector de Canva está disponible y respondió correctamente (`list-brand-kits` devolvió 2 resultados) — no es una limitación de acceso, es que ninguno de los dos kits existentes está identificado como el de Envíos DosRuedas.
- No se pudo inspeccionar el contenido exacto (colores/fuentes) del brand kit sin nombre (`kAFDWO-20I0`) con las herramientas disponibles en esta sesión — si alguien con acceso a Canva confirma que ese kit sí tiene la paleta de DosRuedas, el paso 1 de este documento puede darse por resuelto sin crear uno nuevo.
- Ninguna pieza fue generada, exportada ni publicada en esta pasada.
