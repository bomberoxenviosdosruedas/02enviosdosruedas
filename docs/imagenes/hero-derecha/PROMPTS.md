# Prompts Maestros — Renders 3D de Hero (Hero Card Media) · 2026

Fuente de verdad de los prompts para los **renders 3D modernos** de la columna derecha (`lg:col-span-5`) de los hero. El contrato visual y de implementación vive en `DESIGN.md` §9.1 — este archivo define **qué se genera y cómo**.

**Referencias de adaptación:** `docs/imagenes/todos_heros/hero_home.png` (render 3D dentro de tarjeta oscura), `hero_envioexpress.png` (fondo degradé navy + tarjeta de telemetría), `hero_nuestras-redes.png` y `hero_contacto.png` (sección `#0950F6` con tarjetas navy). **Canon de estilo:** `public/card_mapa.webp` (diorama isométrico de manzanas azules, pin facetado con canto amarillo, ruta amarilla emisiva) — **sin** su texto, logo rasterizado ni gris.

> Versión anterior en estilo flat vector (con variantes B): `PROMPTS.flat-backup-2026-09-16.md` — **descartada** como dirección; solo referencia histórica. El script no la lee.

Hallazgos que condicionan los prompts tras el relevamiento de `docs/imagenes/todos_heros/`:

| Slug                     | Captura en `todos_heros/`       | Datos que ya muestra la tarjeta en pantalla                                               | Contenido canónico del render 3D (complemento)                                                              | Superficie | Ratio |
| ------------------------ | ------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------- | ----- |
| `home`                   | `hero_home.png` / `hero.png`    | HUD "Ruteo activo · MDQ", "Friuli 1972", chips Same-Day y Flota propia                    | Diorama costero MDQ con bahía, manzanas azules, pin facetado central y scooter en ruta emisiva              | `dark`     | `1:1` |
| `servicio-express`       | `hero_envioexpress.png`         | Telemetría en vivo, "PRIORIDAD 1", ruta animada origen→destino, "3 HS rango"              | Scooter aerodinámico en tramo directo sin paradas hacia casa residencial con cronómetro 3D                  | `dark`     | `4:3` |
| `servicio-lowcost`       | `hero_lowcost.png`              | "Circuitos activos MDQ · Consolidado", tabs Ahorro (-40%) y Horario (corte 14:00)         | Plataforma de consolidación con pirámide de paquetes y scooter de cajón grande en circuito cerrado          | `light`    | `4:3` |
| `servicio-flex`          | `hero_enviosflex.png`           | "Integración logística Flex · SLA 100%", tabs Ventajas MercadoLíder y Proceso QR          | Taller e-commerce con escaneo de código QR mediante haz amarillo, scooter esperando y medalla reputación    | `light`    | `4:3` |
| `servicio-emprendedores` | `hero_plan-emprendedores.png`   | "Hub logístico Friuli 1972 · 3PL activo", tabs DropOff -20% y Flujo Operativo             | Corte estilo dollhouse de micro-hub 3PL: stock modular → picking QR → empaque con cinta → bahía moto        | `light`    | `4:3` |
| `cotizar-express`        | `hero_cotizar_express.png`      | "Cálculo automático · Sistema Express Maps", inputs origen/destino, distancia km y tarifa | Medición de ruta punto a punto sobre diorama urbano con calibre/bracket de distancia geométrico             | `dark`     | `4:3` |
| `cotizar-lowcost`        | `hero_cotizar_lowcost.png`      | "Cálculo automático · Sistema LowCost batch", matriz multidestino y descuentos            | Hub emisor desplegando 5 rutas simultáneas a 5 destinos con panel de manifiesto/checklist 3D                | `dark`     | `4:3` |
| `sobre-nosotros`         | `hero_sobre-nosotros.png`       | 5 estrellas Google, testimonio destacado, "Flota 100% propia", "Friuli 1972"              | Sede Friuli 1972 con persiana abierta, faro Punta Mogotes azul y blanco sobre olas, y 3 couriers propios    | `dark`     | `4:3` |
| `preguntas-frecuentes`   | `hero_preguntas-frecuentes.png` | Buscador interactivo, chips temáticos, acordeón "Respuestas rápidas", botón WhatsApp      | Secuencia de resolución: signo de interrogación 3D enlazado a paquete abierto del que emerge check mark     | `dark`     | `4:3` |
| `nuestras-redes`         | `hero_nuestras-redes.png`       | "+5.000 seguidores en redes", historias del asfalto MDQ, status badges                    | Smartphone 3D vertical exhibiendo feed con miniaturas del reparto, corazones amarillos y avatares orbitales | `dark`     | `4:3` |
| `contacto`               | `hero_contacto.png`             | 3 canales de atención directa (WhatsApp Comercial, Llamada, B2B) sobre fondo azul         | Puesto de despacho y coordinación humana: operadora con headset, laptop, teléfono fijo y scooter al fondo   | `bright`   | `4:3` |

- La columna derecha ya tiene **tarjetas funcionales**; el render va **dentro de la cabecera de la tarjeta** (Hero Card Media), nunca superpuesto (§10.13). Contacto, sin tarjeta, lo lleva encima de la lista de canales.
- El render **complementa** la tarjeta: nunca repite cifras, precios, direcciones ni horarios que la tarjeta muestra.
- Todas las piezas comparten el **Kit 3D DosRuedas** (abajo) para leerse como una serie armónica.
- La línea `[Palette]` cambia según la **superficie destino** para que el volumen recorte con contraste óptimo contra el fondo.

---

## 🧱 Kit 3D DosRuedas (vocabulario común)

Usar estos objetos con esta descripción exacta dentro de `[Subject]` para mantener consistencia entre páginas.

| Pieza               | Descripción canónica (inglés, pegar tal cual)                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Diorama base**    | `a rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge, like a chunk cut out of a miniature city map`                                                      |
| **City blocks**     | `low matte blue city blocks of varied heights with pale-blue rooftops and narrow streets between them`                                                                                |
| **Route**           | `a thick glossy route tube in signal yellow with a tight emissive core, following the streets`                                                                                        |
| **Map pin**         | `a faceted chunky map pin in bright blue with a signal-yellow bevelled rim, its face a smooth pale-blue disc`                                                                         |
| **Courier scooter** | `a chunky toy-like delivery scooter in bright blue with a large rounded signal-yellow top box, ridden by a stylized faceless vinyl-toy courier in a blue jacket and pale-blue helmet` |
| **Parcel**          | `rounded cardboard-shaped parcels in pale blue with a signal-yellow tape band`                                                                                                        |
| **Coast**           | `one diorama side ending in a strip of stylized glossy blue sea with soft rounded waves`                                                                                              |

---

## 📐 Estructura canónica

```text
[Subject] <escena de la página usando piezas del Kit 3D; complementa la tarjeta; anclas de Mar del Plata>
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] <línea según superficie destino — ver tabla>
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, <aspect>, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] <base negativa + exclusiones de la página>
```

### Líneas `[Palette]` por superficie destino

| Superficie | Dónde                                                                                         | Línea `[Palette]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dark` / `surface-blue` | Tarjeta `bg-brand-blue-950` / `brand-blue-900` / hero azul (Home, Express, Cotizar, Nosotros, FAQ, Redes) | `Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.` |
| `light` / `surface-white` | Tarjeta `bg-white` (LowCost, Flex, Emprendedores)                                             | `Base material colors ONLY: bright blue #0950F6 for main volumes, blue #3570F8 and sky blue #628FF9 for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. No large white volumes, no navy, no black.` |
| `bright` / `surface-accent` | Sección `bg-brand-blue-500` / hero amarillo sin tarjeta (Contacto)                                            | `Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, blue #3570F8 for side faces, pale blue #E6EEFE and white #FFFFFF for top faces and highlights. Signal yellow only in tiny details, always outlined by white or blue so it does not melt into a #FFEC01 background. No navy, no black.` |

### Base `[Negative]` (siempre presente)

```text
No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped.
```

---

## 🎯 Parámetros

| Parámetro       | Valor                                                                                                           | Motivo                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Modelo          | `gemini-3-pro-image-preview` (default del script) · `gemini-2.5-flash-image` vía `HERO_IMAGE_MODEL` para iterar | Pro resuelve materiales y bordes 3D con más limpieza                        |
| Aspect          | por entrada (`1:1`, `4:3`, `4:5`)                                                                               | Coincide con el slot real (§9.1)                                            |
| Resolución      | 2K final (≥ 1024 px lado corto)                                                                                 | Slot 340–420 px CSS × 2–3 DPR                                               |
| Idioma          | Inglés                                                                                                          | Adherencia del modelo                                                       |
| Chroma          | `#FF00FF` · alternativo `#00B140`                                                                               | Magenta ausente de la paleta; verde solo si aparece tinte violeta en azules |
| Post-proceso    | Recorte alfa (T0 60 / T1 140) + despill de bordes + clamp anti-tinte magenta                                    | Los renders 3D reflejan el fondo; el script lo neutraliza                   |
| Texto / logos   | Prohibidos en la imagen                                                                                         | Texto en HTML; logo solo `/public/logo-envios-simplified.webp`              |
| Personas        | Figuras tipo vinyl toy sin rostro                                                                               | Sin parecidos con personas reales                                           |
| Marcas externas | Nunca (Mercado Libre, WhatsApp, Instagram, Google)                                                              | Se nombran en el copy, no se dibujan                                        |

**Salidas:** `docs/imagenes/hero-derecha/chroma/<slug>.png` (crudo) → `public/img/heroes/<slug>.png` + `.webp` (transparente).
**Regenerar:** `python docs/imagenes/hero-derecha/generate.py [slug ...]` · solo recorte: `--cutout-only`. Requiere `GEMINI_API_KEY` con cuota de imagen.

---

## 📦 Catálogo

### home

- **Ruta:** `/` · **Componente:** `src/components/home/HeroAnimado.tsx`
- **Slot:** card media · reemplaza `/card_mapa.webp` (`aspect-square max-w-[340px]`)
- **Aspect ratio:** `1:1`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** "Ruteo activo · MDQ", "Friuli 1972", chips Same-Day y Flota propia → el render muestra la ciudad costera conectada (evolución limpia de `card_mapa.webp`).

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge, like a chunk cut out of a miniature Mar del Plata map: low matte blue city blocks of varied heights with pale-blue rooftops and narrow streets between them, and one diorama side ending in a strip of stylized glossy blue sea with soft rounded waves and a tiny seaside boardwalk. A large faceted chunky map pin in bright blue with a signal-yellow bevelled rim rises from the center, its face a smooth pale-blue disc with a simple embossed two-wheel pictogram. A thick glossy route tube in signal yellow with a tight emissive core winds through the streets to the pin's tip, and one chunky toy-like delivery scooter with a signal-yellow top box rides along it.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, square 1:1, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no words on the pin face, no dark pin face.
```

---

### servicio-express

- **Ruta:** `/servicios/envios-express` · **Componente:** `src/components/servicios/express/ExpressHero.tsx`
- **Slot:** card media · cabecera de la tarjeta "Telemetría en vivo"
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** ruta punteada origen→destino, "3 HS rango", ruteo directo, custodia exclusiva → el render muestra un solo courier dedicado yendo directo, sin paradas.
- **Versión vigente:** `docs/imagenes/hero-derecha/servicio-express.md` (brief + referencias de marca + variantes). Prevalece sobre este bloque; generar con `--prompts docs/imagenes/hero-derecha/servicio-express.md`.

```text
[Subject] A long rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge carrying one straight street between low matte blue city blocks with pale-blue rooftops. A chunky toy-like delivery scooter in bright blue with a large rounded signal-yellow top box, ridden by a stylized faceless vinyl-toy courier in a blue jacket and pale-blue helmet, leans forward at speed along a thick glossy route tube in signal yellow with a tight emissive core that runs directly from a small faceted blue origin pin to the door of a small pale-blue house, with no other stops. Three short yellow capsule-shaped speed trails float behind the scooter. Above the house hovers a chunky 3D stopwatch in pale blue with a yellow quarter-segment inset on its face.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no clock numerals, no multiple parcels, no traffic.
```

---

### servicio-lowcost

- **Ruta:** `/servicios/envios-lowcost` · **Componente:** `src/components/servicios/lowcost/LowCostHero.tsx`
- **Slot:** card media · cabecera de la tarjeta "Circuitos activos MDQ · Consolidado"
- **Aspect ratio:** `4:3`
- **Superficie:** `light`
- **La tarjeta ya muestra:** ventajas de ahorro, horario de corte, tarifa → el render muestra la consolidación: muchos envíos, un solo circuito planificado.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled navy edge. In one corner, a small loading platform holds a neat pyramid of rounded cardboard-shaped parcels in pale blue with a signal-yellow tape band, and a chunky toy-like delivery scooter in bright blue with an oversized rounded signal-yellow top box packed with several parcels waits beside it. From the platform, a thick glossy route tube in signal yellow with a tight emissive core forms one closed rounded loop around the diorama, passing five small pale-blue houses, each marked by a tiny faceted blue map pin. Order, volume and savings in a single trip.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: egyptian blue #0636A5 and bright blue #0950F6 for main volumes, navy #00277C for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. Natural shading stays within these hues. No large white volumes; the object must read strong against a white card.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no price tags, no currency symbols, no brown cardboard.
```

---

### servicio-flex

- **Ruta:** `/servicios/enviosflex` · **Componente:** `src/components/servicios/flex/FlexHero.tsx`
- **Slot:** card media · cabecera de la tarjeta "Integración logística Flex"
- **Aspect ratio:** `4:3`
- **Superficie:** `light`
- **La tarjeta ya muestra:** corte 15:00, protección de reputación, múltiples retiros, proceso QR → el render muestra el retiro en el local con escaneo QR y la medalla de reputación.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled navy edge shaped as a small online seller's workshop: a blue counter holding three rounded cardboard-shaped parcels in pale blue with a signal-yellow tape band, each with an embossed square QR-like block pattern on top. A large chunky smartphone in egyptian blue floats tilted above the counter, casting a thin signal-yellow emissive scan plane onto one parcel. At the workshop door, a chunky toy-like delivery scooter in bright blue with an open rounded signal-yellow top box waits. Floating at the upper right, a chunky 3D reputation medal: a pale-blue disc with a yellow bevelled rim, an embossed check mark and two short blue ribbon tails. Synced, reliable, same-day.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: egyptian blue #0636A5 and bright blue #0950F6 for main volumes, navy #00277C for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. Natural shading stays within these hues. No large white volumes; the object must read strong against a white card.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no Mercado Libre logo, no handshake emblem, no marketplace yellow branding, no screen UI text.
```

---

### servicio-emprendedores

- **Ruta:** `/servicios/plan-emprendedores` · **Componente:** `src/components/servicios/emprendedores/EmprendedoresHero.tsx`
- **Slot:** card media · cabecera de la tarjeta "Hub logístico Friuli 1972 · 3PL activo"
- **Aspect ratio:** `4:3`
- **Superficie:** `light`
- **La tarjeta ya muestra:** Same Day desde stock, DropOff −20%, contrareembolso → el render muestra el ciclo 3PL: stock → picking QR → empaque → despacho.

```text
[Subject] A dollhouse-style cutaway of a compact logistics hub on a rounded-square isometric diorama tile with a thick bevelled navy edge, read left to right: blue shelving with neatly stored rounded cardboard-shaped parcels in pale blue with a signal-yellow tape band; a stylized faceless vinyl-toy worker in a blue jacket scanning a parcel with a chunky handheld scanner; a packing table with a half-closed parcel and a yellow tape roll; an open rolling door where a chunky toy-like delivery scooter in bright blue with a large rounded signal-yellow top box is being loaded. A thin glossy signal-yellow floor line with a tight emissive core connects the four stations in order. Small-business logistics, organized and fast.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: egyptian blue #0636A5 and bright blue #0950F6 for main volumes, navy #00277C for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. Natural shading stays within these hues. No large white volumes; the object must read strong against a white card.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no labels with writing, no forklifts, no giant industrial warehouse, no brown cardboard.
```

---

### cotizar-express

- **Ruta:** `/cotizar/express` · **Componente:** `src/components/cotizar/express/CotizadorExpressHero.tsx`
- **Slot:** card media · cabecera de la tarjeta "Cálculo automático · Sistema Express Maps"
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** origen, destino, distancia y tarifa → el render muestra la medición de la ruta, sin cifras.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge, like a chunk cut out of a miniature city map: low matte blue city blocks of varied heights with pale-blue rooftops and narrow streets between them. Two faceted chunky map pins stand on it: a smaller pale-blue origin pin and a larger bright-blue destination pin with a signal-yellow bevelled rim. A thick glossy route tube in signal yellow with a tight emissive core follows the streets between them with two turns, and a tiny chunky delivery scooter with a yellow top box sits on the route. Floating just above the route, a chunky pale-blue 3D measuring bracket arcs from pin to pin with evenly spaced embossed blank tick marks. Exact distance, instant quote.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no prices, no currency symbols, no calculator, no street names, no Google Maps styling.
```

---

### cotizar-lowcost

- **Ruta:** `/cotizar/lowcost` · **Componente:** `src/components/cotizar/lowcost/CotizadorLowCostHero.tsx`
- **Slot:** card media · cabecera de la tarjeta "Cálculo automático · Sistema LowCost batch"
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** origen, destino, distancia y tarifa → el render muestra la carga por lote hacia múltiples destinos.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge, like a chunk cut out of a miniature city map: low matte blue city blocks with pale-blue rooftops. At one corner, a small origin platform with a stack of rounded cardboard-shaped parcels in pale blue with a signal-yellow tape band. From it, five thinner glossy route tubes in signal yellow with a tight emissive core branch across the streets to five small faceted pale-blue map pins spread over the diorama. Floating beside the tile, a chunky 3D clipboard panel in bright blue holding five embossed pale-blue bar rows, each row aligned with one route. Batch shipping, planned and organized.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no prices, no currency symbols, no spreadsheet text, no street names.
```

---

### sobre-nosotros

- **Ruta:** `/nosotros/sobre-nosotros` · **Componente:** `src/components/nosotros/sobre-nosotros/AboutHero.tsx`
- **Slot:** card media · cabecera de la tarjeta "Confianza local" (debajo de la franja amarilla, arriba de las estrellas)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** estrellas, reseña, flota 100% propia, Friuli 1972 → el render muestra al equipo propio con arraigo costero.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge, one side ending in a strip of stylized glossy blue sea with soft rounded waves. On the coast corner stands a chunky blue-and-white striped lighthouse with a yellow lantern top. In the center, the simple facade of a small neighborhood logistics office with a half-open rolling door, and in front of it three chunky toy-like delivery scooters in bright blue with large rounded signal-yellow top boxes parked in a neat row, each with a stylized faceless vinyl-toy courier in a blue jacket and pale-blue helmet standing proudly beside it. Own fleet, local roots, a team you can trust.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no red lighthouse stripes, no stars or rating icons, no office signage, no sunset sky.
```

---

### preguntas-frecuentes

- **Ruta:** `/nosotros/preguntas-frecuentes` · **Componente:** `src/components/nosotros/preguntas-frecuentes/FaqHero.tsx`
- **Slot:** card media · cabecera de la tarjeta "Respuestas rápidas"
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** preguntas en acordeón y CTA de consulta → el render muestra el paso de duda a respuesta.

```text
[Subject] A small round isometric diorama pad with a thick bevelled egyptian-blue edge. On the left, a large glossy chunky 3D question mark in pale blue floats above the pad. On the right, an open rounded cardboard-shaped parcel in pale blue with a signal-yellow tape band, from which a large chunky signal-yellow 3D check mark rises. A thick glossy route tube in signal yellow with a tight emissive core arcs from the question mark into the parcel. On the pad's front edge, a chunky toy-like delivery scooter in bright blue with a rounded signal-yellow top box is ready to go. Doubts answered, fast.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters other than the question mark shape, no numbers, no logos, no WhatsApp icon, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no light bulb, no speech bubble text.
```

---

### nuestras-redes

- **Ruta:** `/nosotros/nuestras-redes` · **Componente:** `src/components/nosotros/nuestras-redes/NetworksHero.tsx`
- **Slot:** card media · cabecera de la tarjeta de seguidores (debajo de la franja amarilla, arriba de la cifra)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** cifra de seguidores, hashtags, CTA a Instagram → el render muestra la comunidad alrededor del día a día de la flota.

```text
[Subject] A large chunky smartphone in bright blue standing slightly tilted on a small round isometric diorama pad with a thick bevelled egyptian-blue edge. Its screen is a pale-blue panel with three stacked embossed post tiles, each holding a tiny 3D miniature: a delivery scooter with a yellow top box, a parcel with a yellow tape band, and a small wave of sea. Popping out of the screen: glossy chunky signal-yellow 3D hearts and rounded pale-blue speech bubbles. Around the phone, five small glossy pale-blue avatar spheres with simple embossed head-and-shoulders silhouettes orbit on a thin yellow emissive ring. An active local community.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no hashtags, no logos, no Instagram, Facebook or WhatsApp icons, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no red hearts, no green, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no follower counters, no black phone bezel.
```

---

### contacto

- **Ruta:** `/contacto` · **Componente:** `src/components/contacto/ContactHero.tsx`
- **Slot:** standalone compacto · encima de la lista de canales, sin tarjeta
- **Aspect ratio:** `4:3`
- **Superficie:** `bright`
- **La columna ya muestra:** WhatsApp comercial, llamada de coordinación, cotización B2B → el render muestra la atención humana en la oficina.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled navy edge shaped as a friendly dispatch corner of a small neighborhood office: a white desk with a chunky pale-blue desk phone, an open rounded envelope and a laptop with a blank pale-blue screen; a stylized faceless vinyl-toy coordinator in a blue sweater wearing a chunky headset sits at the desk. Floating above the desk in a gentle arc: a glossy white 3D phone handset, a rounded white speech bubble and a faceted map pin with a signal-yellow body. Through the open doorway behind, a chunky toy-like delivery scooter with a signal-yellow top box is parked. Direct, human, nearby.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes, egyptian blue #0636A5 and navy #00277C for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. Natural shading stays within these hues. No large bright blue #0950F6 volumes; the object must separate clearly from a bright blue background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no phone numbers, no logos, no WhatsApp logo, no brand marks, no signage writing, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no screen content text.
```

---

## 🎨 Variantes B — Enfoques Alternativos 3D (11 Páginas Activas)

Estas variantes alternativas exploran ángulos visuales complementarios bajo el mismo Kit 3D DosRuedas y reglas de superficie. Contienen `(variante alternativa, pendiente de selección)` en sus metadatos para que el script `generate.py` las marque como `pending: True` y no las genere en batch automático, pero permitiendo invocarlas directamente: `python docs/imagenes/hero-derecha/generate.py <slug>-variante-b`.

### home-variante-b

- **Ruta:** `/` · **Componente:** `src/components/home/HeroAnimado.tsx`
- **Slot:** card media central (variante alternativa, pendiente de selección)
- **Aspect ratio:** `1:1`
- **Superficie:** `dark`
- **Enfoque alternativo:** Eje costero y conectividad marítima de Mar del Plata con perspectiva de bulevar.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge, highlighting coastal Boulevard Marítimo in Mar del Plata: on the right, a curved strip of stylized glossy blue sea with two soft white wave crests; along the shore, low matte blue architectural blocks representing the iconic beachfront casino pavilion curve. A thick glossy route tube in signal yellow with a tight emissive core sweeps along the coastal avenue, connecting a small bright-blue dispatch depot to an elevated faceted pale-blue destination pin. A chunky toy-like delivery scooter with a signal-yellow top box leans smoothly into the coastal curve. Maritime urban velocity.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, square 1:1, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no street signage.
```

---

### servicio-express-variante-b

- **Ruta:** `/servicios/envios-express` · **Componente:** `src/components/servicios/express/ExpressHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Entrega final express en la puerta residencial con cronómetro de precisión.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge: a quiet neighborhood street corner in front of a modern pale-blue residential house with a neat front porch. A chunky toy-like delivery scooter in bright blue with a large rounded signal-yellow top box is parked at the curb. Beside it, a stylized faceless vinyl-toy courier in a blue jacket and pale-blue helmet steps toward the front door holding one rounded parcel in pale blue with a signal-yellow tape band. Behind the scooter, a straight yellow emissive route tube stretches back to a tiny origin pin at the diorama edge. Floating above, a minimalist chunky 3D stopwatch with a bright-yellow quarter segment indicating rapid fulfillment. Punctual single-destination delivery.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no clock numerals, no house numbers.
```

---

### servicio-lowcost-variante-b

- **Ruta:** `/servicios/envios-lowcost` · **Componente:** `src/components/servicios/lowcost/LowCostHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `light`
- **Enfoque alternativo:** Ruteo masivo optimizado por zonas comerciales de Mar del Plata con alcancía de ahorro 3D.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled navy edge featuring an organized urban grid: three low matte blue store facades cluster on one corner. A centralized sorting table holds neatly arranged parcel stacks in pale blue with signal-yellow tape bands. A thick glossy route tube in signal yellow with a tight emissive core weaves sequentially through four residential block clusters, where a chunky toy-like delivery scooter with an oversized signal-yellow top box makes planned drops. Floating gracefully above the sorting table, a chunky 3D piggy-bank in pale blue with a signal-yellow coin slot to emphasize commercial savings. Planned route efficiency.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: egyptian blue #0636A5 and bright blue #0950F6 for main volumes, navy #00277C for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. Natural shading stays within these hues. No large white volumes; the object must read strong against a white card.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no price tags, no currency symbols, no brown cardboard.
```

---

### servicio-flex-variante-b

- **Ruta:** `/servicios/enviosflex` · **Componente:** `src/components/servicios/flex/FlexHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `light`
- **Enfoque alternativo:** Entrega de mano a mano entre vendedor y mensajero con sincronización digital inmediata.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled navy edge depicting a merchant pickup counter: two stylized faceless vinyl-toy figures in blue clothes meet at a sleek counter, where an e-commerce seller hands a rounded pale-blue parcel with an embossed geometric QR pattern and yellow tape band to a courier holding a pale-blue helmet. Floating between them, a chunky 3D checkmark badge in bright blue with a signal-yellow bevelled rim and an arced yellow sync beam. Through the workshop window, a chunky toy-like delivery scooter waits outside with its yellow top box open. Fast, reliable marketplace fulfillment.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: egyptian blue #0636A5 and bright blue #0950F6 for main volumes, navy #00277C for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. Natural shading stays within these hues. No large white volumes; the object must read strong against a white card.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no Mercado Libre logo, no handshake emblem.
```

---

### servicio-emprendedores-variante-b

- **Ruta:** `/servicios/plan-emprendedores` · **Componente:** `src/components/servicios/emprendedores/EmprendedoresHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `light`
- **Enfoque alternativo:** Solución integral de almacenamiento y DropOff para emprendedores.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled navy edge featuring a small-business fulfillment station: an organized tall storage rack in egyptian blue holding neatly arranged pale-blue inventory cartons with signal-yellow tape bands. At the drop-off counter, an entrepreneur hands a carton to a warehouse worker. A chunky toy-like delivery scooter in bright blue with a large rounded signal-yellow top box prepares to depart through an open loading bay. Floating overhead, three circular 3D workflow badges in pale blue with yellow embossed icons: an inventory box, a packing tape roll, and a two-wheel delivery pictogram. Complete local fulfillment outsourcing.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: egyptian blue #0636A5 and bright blue #0950F6 for main volumes, navy #00277C for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. Natural shading stays within these hues. No large white volumes; the object must read strong against a white card.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no forklifts, no warehouse signage.
```

---

### cotizar-express-variante-b

- **Ruta:** `/cotizar/express` · **Componente:** `src/components/cotizar/express/CotizadorExpressHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Radar de navegación urbana y vector de velocidad punto a punto sobre diorama.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge: low matte blue city blocks mapped out below an arced radar grid pattern. An illuminated origin beacon disc and a prominent bright-blue destination pin with a signal-yellow bevelled rim are linked by a thick glossy yellow route tube with directional chevron pulses. Floating above the route, a stylized 3D speedometer arc in pale blue with a bright-yellow indicator needle angled forward, symbolizing instant automated quote and dispatch readiness. Pure navigational precision.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no price tags.
```

---

### cotizar-lowcost-variante-b

- **Ruta:** `/cotizar/lowcost` · **Componente:** `src/components/cotizar/lowcost/CotizadorLowCostHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Matriz de entrega consolidada agrupada por volumen con gráfico 3D de ahorro.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge displaying an urban logistics grid: three separate parcel groups in pale blue with signal-yellow tape bands, categorized by size on small platforms. Three glossy yellow route tubes converge into a single unified avenue where a chunky toy-like delivery scooter with an oversized yellow top box rides. Floating overhead, a geometric 3D circular chart in pale blue with an embossed signal-yellow highlight segment indicating volume savings. Structured, orderly multi-parcel calculation.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no prices, no currency symbols.
```

---

### sobre-nosotros-variante-b

- **Ruta:** `/nosotros/sobre-nosotros` · **Componente:** `src/components/nosotros/sobre-nosotros/AboutHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Formación de flota en la rambla costera marplatense frente al mar atlántico.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge: on one side, a curved stone balustrade promenade overlooking stylized glossy blue ocean waves with soft white foam crests. Aligned along the promenade, three chunky toy-like delivery scooters in bright blue with large rounded signal-yellow top boxes stand in proud formation, each accompanied by a stylized faceless vinyl-toy courier in a blue jacket. Floating above the central scooter, a chunky 3D circular heritage medallion in pale blue with an embossed signal-yellow laurel branch. Local maritime heritage and 15+ years of street presence.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no facial features, no rating stars.
```

---

### preguntas-frecuentes-variante-b

- **Ruta:** `/nosotros/preguntas-frecuentes` · **Componente:** `src/components/nosotros/preguntas-frecuentes/FaqHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Manual de operaciones logísticas 3D y sello de certificación de entrega.

```text
[Subject] A small round isometric diorama pad with a thick bevelled egyptian-blue edge: an open chunky 3D logistics guidebook binder in pale blue with blank embossed geometric route lines across its pages. Leaning against the binder, a chunky signal-yellow 3D verified circular seal with an embossed check mark. On the front edge of the pad, a chunky toy-like delivery scooter in bright blue with a yellow top box is ready to roll. Knowledge, transparency and verified operational protocol.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no readable paragraphs, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no light bulb.
```

---

### nuestras-redes-variante-b

- **Ruta:** `/nosotros/nuestras-redes` · **Componente:** `src/components/nosotros/nuestras-redes/NetworksHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Red urbana de conexiones y nodos comunitarios enlazados con motos de reparto.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled egyptian-blue edge: three elevated circular portal platforms in bright blue. One platform shows a miniature delivery scooter, the second shows a parcel with a yellow tape band, and the third shows stylized sea waves. The platforms are interconnected by glowing yellow route tubes with small emissive pulse beads. Floating around the constellation, glossy signal-yellow 3D heart shapes and pale-blue empty chat bubbles. Community-driven logistics network.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no trademark social icons, no Instagram, TikTok, Facebook or WhatsApp icons, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no red hearts, no green, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped.
```

---

### contacto-variante-b

- **Ruta:** `/contacto` · **Componente:** `src/components/contacto/ContactHero.tsx`
- **Slot:** standalone compacto (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `bright`
- **Enfoque alternativo:** Central de despacho y enlace de radio directo al mensajero en la calle.

```text
[Subject] A rounded-square isometric diorama tile with a thick bevelled navy edge featuring a communication dispatch console: a sleek white desk supporting a chunky pale-blue communications tablet with an active stylized city map vector, a desk headset on a stand, and a telephone handset. From the tablet, a thin yellow emissive acoustic wave arc radiates outward toward a miniature toy-like delivery scooter staged on the diorama tile edge. Immediate, zero-wait customer coordination.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes, egyptian blue #0636A5 and navy #00277C for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. Natural shading stays within these hues. No large bright blue #0950F6 volumes; the object must separate clearly from a bright blue background.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no phone numbers, no logos, no WhatsApp logo, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped.
```

---

## ⏸️ Pendientes — páginas sin hero 7/5

Estas rutas **no tienen hero con columna derecha** (verificado en código 2026-09-16). Prompts listos en modo `standalone` 4:5; no generar hasta que exista el hero (el script las saltea salvo que se pidan por slug).

### politica-de-privacidad

- **Ruta:** `/politica-de-privacidad` · **Componente:** `src/app/politica-de-privacidad/PrivacyContent.tsx`
- **Slot:** standalone (pendiente de hero)
- **Aspect ratio:** `4:5`
- **Superficie:** `dark`

```text
[Subject] A small round isometric diorama pad with a thick bevelled egyptian-blue edge. On it, a large chunky glossy 3D shield in bright blue with a signal-yellow bevelled rim and an embossed keyhole stands behind a rounded cardboard-shaped parcel in pale blue whose tape band is closed by a chunky yellow padlock. Three small pale-blue 3D document cards with embossed check marks float around the shield. Care for customer data.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, vertical 4:5, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no hacker imagery, no binary code.
```

### terminos-y-condiciones

- **Ruta:** `/terminos-y-condiciones` · **Componente:** `src/app/terminos-y-condiciones/TermsContent.tsx`
- **Slot:** standalone (pendiente de hero)
- **Aspect ratio:** `4:5`
- **Superficie:** `dark`

```text
[Subject] A small round isometric diorama pad with a thick bevelled egyptian-blue edge. On it, a chunky 3D two-pan balance scale in bright blue with pale-blue pans, perfectly level, holding a rounded cardboard-shaped parcel in pale blue with a signal-yellow tape band on one pan and a thick pale-blue document card on the other. In front leans a chunky clipboard with embossed blank lines and a round signal-yellow 3D approval seal with an embossed check mark. Fair, transparent rules.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, pale blue #E6EEFE and white #FFFFFF for top faces and highlights, egyptian blue #0636A5 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent (routes, rims, top boxes) covering at most 15% of the image. Natural shading stays within these hues. The object must read light and bright against a near-black navy card; navy #00277C only in deepest crevices.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, vertical 4:5, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no readable paragraphs, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no gold metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped, no gavel, no courtroom.
```

### panel-gestion-revision

- **Rutas:** `/admin/imagenes` y `/revisar` · **Componentes:** `src/app/admin/imagenes/AdminImagenesClient.tsx`, `src/app/revisar/RevisarClient.tsx`
- **Slot:** standalone (uso interno, pendiente de hero)
- **Aspect ratio:** `4:5`
- **Superficie:** `light`

```text
[Subject] A small round isometric diorama pad with a thick bevelled navy edge. On it, a chunky 3D tablet on a stand in egyptian blue whose pale-blue screen shows a tiny embossed miniature of a scooter image inside a frame with four chunky yellow corner crop handles. A glossy chunky magnifying loupe with a bright-blue handle leans against the tablet, and a round signal-yellow 3D approval stamp with an embossed check mark rests beside it. Careful curation of brand images.
[Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
[Palette] Base material colors ONLY: egyptian blue #0636A5 and bright blue #0950F6 for main volumes, navy #00277C for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. Natural shading stays within these hues. No large white volumes; the object must read strong against a white card.
[Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion; every contact shadow falls on the diorama base only; tight emissive glow only on yellow route elements.
[Composition] Isometric three-quarter view from 30 degrees above, centered, vertical 4:5, subject fills about 78% of the width with at least 8% empty margin on every side, hero object may rise above the diorama base, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no software logos, no brand marks, no watermark, no magenta, pink or purple tint or reflections on the subject, no green, no red, no orange, no grey or charcoal surfaces, no black, no chrome or mirror metal, no bloom or glow spilling beyond the objects, no shadows or reflections on the background, no ground plane beyond the diorama base, no realistic humans, no faces, no flat vector, no cartoon outlines, no cyberpunk neon, no depth-of-field blur, no motion blur, nothing cropped.
```
