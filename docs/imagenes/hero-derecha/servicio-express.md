# Brief + Prompts — Hero Envíos Express (3D con referencias de marca) · 2026

Archivo dedicado al render 3D de la columna derecha de **`/servicios/envios-express`**. Amplía y **reemplaza** la entrada `servicio-express` de `PROMPTS.md` con referencias visuales reales de la marca (moto, uniforme, estilo 3D y logo). Contrato visual: `DESIGN.md` §9.1 y §10.20.

- **Pantalla:** `docs/imagenes/todos_heros/hero_envioexpress.png`
- **Componente:** `src/components/servicios/express/ExpressHero.tsx`
- **Generar:** `python docs/imagenes/hero-derecha/generate.py --prompts docs/imagenes/hero-derecha/servicio-express.md [slug ...]`


> **Actualización 2026-09-24:** paleta migrada al ajuste Max (sin `#0636A5` ni `#00277C`: la tarjeta es `#0950F6`, así que los volúmenes van claros y los cantos en `#3570F8`). La promesa pasó de "rango de 3 horas" a **60 a 90 min**: el reloj de un cuarto se reemplazó por un cronómetro con arco corto. La tabla §1 describe la pantalla anterior y queda como historial.

---

## 1. Lectura de la pantalla actual

| Zona                           | Qué hay hoy (código)                                                                                                           | Implicancia para la imagen                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Sección                        | `bg-brand-blue-500` + `HeroProceduralBackground variant="express"` + ghost wordmark "MENSAJERÍA EN MOTO"                       | El render nunca se ve contra el fondo de sección: vive dentro de la tarjeta             |
| Tarjeta derecha                | Outer `bg-white/10` `rounded-[28px]`, inner **`bg-brand-blue-900` (#04236B)** con grilla de puntos `#628FF9` y watermark `Zap` | Superficie **`dark`**: volúmenes claros y brillantes, canto azul, amarillo como acento  |
| Header tarjeta                 | "TELEMETRÍA EN VIVO · MDQ" + pill "PRIORIDAD 1"                                                                                | No dibujar badges ni textos de estado                                                   |
| Bloque visual (líneas 142–195) | SVG de ruta punteada origen→destino con beacon animado + labels "RETIRO EN ORIGEN / ENTREGA DESTINO"                           | **El render reemplaza este SVG** (ver §5): muestra la misma idea en volumen, sin labels |
| ETA                            | "RANGO HORARIO PROGRAMADO · 3 HS RANGO"                                                                                        | Traducir a imagen sin números: reloj con **un cuarto** en amarillo (3 h de 12)          |
| Chips                          | Ruteo DIRECTO · Custodia 100% EXCLUSIVA · Confirmación AL INSTANTE                                                             | Ruta recta sin paradas · un solo paquete con precinto · check al llegar                 |
| Copy izquierdo                 | "Todo lo que entre en moto (hasta 5 kg y 40x30 cm)", corte 15:00 hs                                                            | Paquete compacto que entra en la top box; nada de cifras en la imagen                   |

## 2. Referencias de marca (imágenes de entrada)

Se pasan a Gemini **antes** del texto, en este orden. El prompt las nombra por posición ("first reference image"…).

| #   | Archivo                                                                                                         | Qué se toma                                                                                             | Qué se ignora                                                                            |
| --- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 1   | `public/img/generales/card_moto01.webp`                                                                         | Identidad de la moto DosRuedas: underbone urbana, espejos redondos, rayos, top box grande, look clay 3D | Top box carbón, logo/teléfono/redes impresos, faro trasero rojo, gris del escape         |
| 2   | `public/cards/hero_express.webp`                                                                                | Uniforme: chomba azul con cuello amarillo, gorra azul con visera amarilla                               | **La cara y la persona real**, la caja marrón, el logo del pecho                         |
| 3   | `public/card_mapa.webp`                                                                                         | Estilo de diorama: manzanas azules mate, canto biselado, ruta amarilla emisiva                          | El texto "ENVIOS DosRuedas MDQ", la cara gris del pin                                    |
| 4   | `docs/imagenes/hero-derecha/referencias/logo-master-1024.png` (raster de `/public/logo-envios-simplified.webp`) | Aro a cuadros azul/blanco y pictograma de dos ruedas unidas                                             | Todas las palabras, el número de teléfono, íconos de Facebook/Instagram, el fondo carbón |

> El logo **no** se reproduce en la imagen del hero (DESIGN §10.20): solo sus motivos gráficos. El logo real se muestra en HTML con `/logo-envios-simplified.webp`. La variante con logo (§3.C) es exclusiva para redes/OG.

---

## 3. Prompts

### servicio-express

- **Uso:** Hero Card Media principal (recomendado) — reemplaza el SVG de ruta de la tarjeta
- **Referencias:** `public/img/generales/card_moto01.webp` · `public/cards/hero_express.webp` · `public/card_mapa.webp` · `docs/imagenes/hero-derecha/referencias/logo-master-1024.png`
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Idea:** un courier, un paquete, una ruta directa: la prioridad se ve.

```text
[Subject] A single DosRuedas express courier rides a delivery scooter at speed along one straight street on a long rounded-square isometric diorama tile, heading directly from a small faceted pale-blue origin pin to the front door of a small pale-blue house at the far end, with no other stops. Match the scooter to the first reference image — a classic underbone step-through city scooter with round mirrors, spoked wheels and a large rear top box, same proportions and chunky clay look — but recolor it: body bright blue, lower panels sky blue, wheel rims and mirror housings signal yellow, exhaust sky blue, tail light pale blue, and the top box signal yellow with rounded sky-blue bevels, a thin band of small alternating blue and white squares around its lid and a small embossed twin-wheel pictogram on its side, both taken from the fourth reference image. A tiny signal-yellow seal closes the top box latch. The rider wears the uniform from the second reference image as a stylized vinyl-toy figure: blue polo with yellow collar, and a pale-blue helmet with a yellow stripe and a fully closed tinted sky-blue visor, so no face is visible. A thick glossy route tube in signal yellow with a tight emissive core runs under the wheels to the door. Low matte blue city blocks with pale-blue rooftops line the street, in the diorama style of the third reference image. Above the house floats a chunky pale-blue 3D stopwatch without numerals, with a short signal-yellow sweep arc covering about one eighth of its face (a quick trip, not hours), and a small yellow check mark hovers by the door.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on the scooter and the top box, premium Blender Cycles / Octane product-render look. The reference images define object identity and brand motifs only, never the composition, the background or any text.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, deeper sky blue #3570F8 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (route, rims, top box, stopwatch arc) covering at most 15% of the image. Natural shading stays within these hues. The whole object must read light and bright against a bright blue #0950F6 card: nothing anywhere may be darker than #0950F6, not even crevices or shadows.
[Lighting] Soft studio three-point lighting: a large cool-white key light from the upper left, gentle fill, and a thin white rim light that separates the scooter silhouette from a dark card; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on the yellow route.
[Composition] Isometric three-quarter view from 30 degrees above with the street running diagonally from lower left to upper right, the scooter as the focal point on the left third, the house and clock on the right third. Horizontal 4:3, subject fills about 80% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 380px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no phone numbers, no social media icons, no logo badge, no brand name, no license plate, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic human, no visible face, no brown cardboard, no multiple parcels, no other vehicles, no traffic, no clock or stopwatch numerals, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped.
```

---

### servicio-express-producto

- **Uso:** alternativa para Hero Card Media cuando el diorama se lee chico — moto protagonista, silueta grande
- **Referencias:** `public/img/generales/card_moto01.webp` · `public/cards/hero_express.webp` · `docs/imagenes/hero-derecha/referencias/logo-master-1024.png`
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Idea:** "producto héroe": la moto DosRuedas saliendo de un pin a toda velocidad.

```text
[Subject] A hero product shot of the DosRuedas express delivery scooter launching forward out of a large faceted map-pin ring that lies flat on a small round isometric diorama pad. Match the scooter to the first reference image — classic underbone step-through city scooter, round mirrors, spoked wheels, large rear top box, chunky clay look, three-quarter rear view — recolored with a bright blue body, sky-blue lower panels, signal-yellow wheel rims and mirror housings, a sky-blue exhaust and a pale-blue tail light. The top box is signal yellow with rounded sky-blue bevels, a thin band of small alternating blue and white squares around the lid and an embossed twin-wheel pictogram on its side, both motifs taken from the third reference image, with one small yellow seal on the latch. The rider is a stylized vinyl-toy courier leaning into the speed, wearing the blue polo with yellow collar from the second reference image and a pale-blue helmet with a yellow stripe and a closed tinted sky-blue visor. The pin ring is bright blue with a signal-yellow bevelled rim; a short thick glossy route tube in signal yellow with a tight emissive core shoots out of the ring ahead of the front wheel, and three yellow capsule-shaped speed trails follow the rear wheel. A chunky pale-blue stopwatch without numerals, with a short yellow sweep arc covering about one eighth of its face, hovers above the top box.
[Style] Modern 3D isometric product render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, glossy highlights on the scooter bodywork and top box, premium Blender Cycles / Octane look. The reference images define object identity and brand motifs only, never the composition, the background or any text.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for highlights, deeper sky blue #3570F8 for side faces and the pad edge, signal yellow #FFEC01 as the single accent covering at most 18% of the image. Natural shading stays within these hues. The object must read light and bright against a bright blue #0950F6 card: nothing anywhere may be darker than #0950F6, not even crevices or shadows.
[Lighting] Soft studio three-point lighting: a large cool-white key light from the upper left, gentle fill, strong thin white rim light outlining the scooter; soft ambient occlusion; contact shadows only on the pad; tight emissive glow only on the yellow route and trails.
[Composition] Three-quarter view from 25 degrees above, scooter centered and large, diagonal motion from lower right to upper left. Horizontal 4:3, subject fills about 82% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, instantly readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no phone numbers, no social media icons, no logo badge, no brand name, no license plate, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no realistic human, no visible face, no city diorama, no other vehicles, no clock or stopwatch numerals, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped.
```

---

### servicio-express-marca

- **Uso:** marketing — posteo de Instagram / imagen OG de `/servicios/envios-express`. **No usar en Hero Card Media** (DESIGN §10.20). Pendiente de aprobación de marca: el script la saltea salvo que se pida por slug.
- **Referencias:** `docs/imagenes/hero-derecha/referencias/logo-master-1024.png` · `public/img/generales/card_moto01.webp` · `public/cards/hero_express.webp`
- **Aspect ratio:** `1:1`
- **Superficie:** `dark`
- **Idea:** la moto real de la flota con el badge de la marca aplicado como calco.

```text
[Subject] A three-quarter rear view of the DosRuedas express delivery scooter parked on a small round isometric diorama pad with a thick bevelled sky-blue edge. Match the scooter to the second reference image — classic underbone step-through city scooter, round mirrors, spoked wheels, large rear top box, chunky clay look — recolored with a bright blue body, sky-blue lower panels, signal-yellow rims and mirror housings, a sky-blue exhaust and a pale-blue tail light. The large top box is signal yellow with rounded sky-blue bevels. On its rear face, apply the circular badge from the first reference image as a clean printed decal: keep its ring of alternating blue and white squares, its twin-wheel pictogram and only the single word "DosRuedas" in bold white rounded sans-serif across the center band, with the badge center recolored from charcoal to bright blue. Leave out every other word, the phone number and the social media icons. Beside the scooter stands a stylized vinyl-toy courier wearing the uniform from the third reference image — blue polo with yellow collar and blue cap with yellow brim — holding one small pale-blue parcel with a yellow tape band, head turned toward the scooter so no face is visible. A short glossy signal-yellow route tube with a tight emissive core curves across the pad.
[Style] Modern 3D isometric product render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, glossy highlights on the top box decal and scooter bodywork, premium Blender Cycles / Octane look. The reference images define object identity and the badge design only, never the composition or background.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for highlights and the decal text, deeper sky blue #3570F8 for side faces, the pad edge and the badge center, signal yellow #FFEC01 as the single accent. Natural shading stays within these hues.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; contact shadows only on the pad; tight emissive glow only on the yellow route.
[Composition] Three-quarter rear view from 25 degrees above, top box and its badge decal facing the camera as the focal point, square 1:1, subject fills about 80% of the width with at least 8% empty margin on every side, fully contained, nothing cropped.
[Quality] 8k ultra-detailed, crisp clean edges, sharp legible decal, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text other than the single word "DosRuedas" on the decal, no phone numbers, no Facebook or Instagram icons, no numbers, no license plate text, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no realistic human, no visible face, no flat vector, no cartoon outlines, no depth-of-field blur, no motion blur, nothing cropped.
```

---

## 4. Refinamiento por turnos (multi-turn en Nano Banana)

Si la primera generación falla en un punto, **no regenerar desde cero**: editar la imagen con una sola instrucción por turno, repitiendo el contexto mínimo.

| Problema detectado                                          | Instrucción de edición (un turno)                                                                                                                                        |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aparecen letras, números o el teléfono en la top box        | `On this scooter render, remove every letter, number and icon from the top box, leaving a clean signal-yellow surface with the thin blue-and-white checkered band only.` |
| La top box sale carbón o gris (heredado de la referencia 1) | `In this render, recolor the top box to solid signal yellow #FFEC01 with rounded sky-blue #3570F8 bevels; keep everything else unchanged.`                          |
| Se ve una cara o una persona realista                       | `Keep the same pose, but make the rider a stylized vinyl-toy figure with a fully closed tinted sky-blue helmet visor so no face is visible.`                        |
| Faro trasero rojo o escape gris                             | `Change the tail light to pale blue #E6EEFE and the exhaust to sky blue #3570F8; change nothing else.`                                                              |
| Tinte violeta en los azules / reflejo del fondo             | `Remove any magenta or purple reflection from the scooter and diorama; surfaces must stay pure blue, pale blue, white and yellow.`                                       |
| El glow amarillo se derrama sobre el fondo                  | `Tighten the yellow route glow so it stays inside the tube; the magenta background must remain perfectly flat and unlit.`                                                |
| Diorama chico / silueta ilegible a 380 px                   | `Zoom in so the scooter and the house fill about 80% of the width, keeping 8% empty margin on every side.`                                                               |
| Sombra o piso fuera de la base                              | `Remove every shadow and floor outside the diorama tile; the background must be flat magenta #FF00FF edge to edge.`                                                      |

## 5. Implementación recomendada en `ExpressHero.tsx`

Reemplazar el bloque SVG de ruta (líneas 142–195, `h-32` + labels) por el render — la imagen ya cuenta "retiro → entrega directa" y evita duplicar la idea. Mantener header y chips; la promesa vigente es 60 a 90 min (`EXPRESS_WINDOW` en `src/lib/promises.ts`).

```tsx
{
  /* Hero Card Media — render 3D (DESIGN §9.1) */
}
<div className="relative z-10 w-full aspect-[4/3] max-w-[380px] mx-auto drop-shadow-[0_18px_28px_rgba(9,80,246,0.35)]">
  <Image
    src="/img/heroes/servicio-express.webp"
    alt=""
    fill
    priority
    sizes="(min-width: 1024px) 380px, 90vw"
    className="object-contain"
  />
</div>;
```

- Si se usa `servicio-express-producto`, mismo contenedor y `src`.
- `alt=""`: la tarjeta ya comunica el servicio. Sin `translateZ` porque esta tarjeta no usa `FloatTiltCard`.
- Verificar a 320 · 768 · 1024 · 1280 px que la tarjeta no supere la altura de la columna izquierda.

## 6. Checklist de aprobación (antes de publicar)

- [ ] Moto reconocible como la de `card_moto01.webp` (underbone, espejos redondos, top box grande)
- [ ] Top box amarilla con banda a cuadros azul/blanco y pictograma de dos ruedas — **sin** letras ni números
- [ ] Courier sin rostro, uniforme azul con detalle amarillo
- [ ] Un solo paquete / ruta recta sin paradas / cronómetro con un arco corto amarillo (viaje rápido, no horas) sin números
- [ ] Solo azules, blanco y amarillo; sin gris, carbón, rojo, verde ni violeta
- [ ] Recorte limpio: sin halo magenta, sin sombras fuera de la base (`transparente` ≥ 25% en el log del script)
- [ ] Legible dentro de la tarjeta `DoubleBezelCard variant="dark"` (`#0950F6`) a 380 px de ancho
- [ ] WebP ≤ 150 KB
