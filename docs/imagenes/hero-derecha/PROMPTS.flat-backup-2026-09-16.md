# Prompts Maestros — Ilustraciones de Hero (Hero Card Media) · 2026

Fuente de verdad de los prompts para las ilustraciones de la columna derecha (`lg:col-span-5`) de los hero en Envíos DosRuedas. El contrato visual y de implementación vive en `DESIGN.md` §9.1 — este archivo define **qué se genera, cómo se formula y por qué complementa cada pantalla**.

---

## 🔍 Relevamiento Visual de Pantallas Actuales (`docs/imagenes/todos_heros/`)

Relevamiento exhaustivo realizado sobre las capturas de producción (2026-09-16). Hallazgos clave que condicionan la ingeniería de prompts y la composición:

| Slug | Archivo Captura | Elementos que ya renderiza la Tarjeta en Código | Contenido Canónico de la Ilustración (Complemento Visual) | Superficie | Ratio |
|---|---|---|---|---|---|
| `home` | `hero_home.png` / `hero.png` | HUD "Ruteo Activo · MDQ", "Friuli 1972", chips Same-Day y Flota Propia | Red logística sobre la bahía y cuadrícula de Mar del Plata, hub Friuli y motos en ruta | `dark` | `1:1` |
| `servicio-express` | `hero_envioexpress.png` | Telemetría en vivo, "PRIORIDAD 1", ruta animada origen-destino, "3 HS Rango" | Courier dedicado en moto aerodinámica con caja amarilla única, ruta recta sin paradas | `dark` | `4:3` |
| `servicio-lowcost` | `hero_lowcost.png` | "CIRCUITOS ACTIVOS MDQ · CONSOLIDADO", tabs Ahorro (-40%) y Horario (corte 14:00) | 3 comercios entregando paquetes en lote a un motomensajero con cajón de gran capacidad | `light` | `4:3` |
| `servicio-flex` | `hero_enviosflex.png` | "INTEGRACIÓN LOGÍSTICA FLEX · SLA 100%", tabs Ventajas MercadoLíder y Proceso QR | Retiro en mostrador e-commerce, escaneo QR con haz amarillo y medalla de reputación | `light` | `4:3` |
| `servicio-emprendedores` | `hero_plan-emprendedores.png` | "HUB LOGÍSTICO FRIULI 1972 · 3PL ACTIVO", tabs DropOff -20% y Flujo Operativo | Centro 3PL: estantería de stock, picking QR, mesa de empaque con cinta y bahía de moto | `light` | `4:3` |
| `cotizar-express` | `hero_cotizar_express.png` | "CÁLCULO AUTOMÁTICO · SISTEMA EXPRESS MAPS", inputs Origen, Destino, Km y Tarifa ARS | Medición topológica de ruta: pin origen y destino unidos con calibre de distancia geométrico | `dark` | `4:3` |
| `cotizar-lowcost` | `hero_cotizar_lowcost.png` | "CÁLCULO AUTOMÁTICO · SISTEMA LOWCOST BATCH", matriz de envíos agrupados y descuentos | Matriz batch: hub emisor desplegando 5 rutas simultáneas a 5 destinos con checklist | `dark` | `4:3` |
| `sobre-nosotros` | `hero_sobre-nosotros.png` | 5 estrellas Google, testimonio destacado, "Flota 100% propia", "Friuli 1972" | Base operativa Friuli 1972 con persiana abierta, faro costero de fondo y 3 couriers propios | `dark` | `4:3` |
| `preguntas-frecuentes` | `hero_preguntas-frecuentes.png` | Buscador interactivo, chips temáticos, acordeón "PREGUNTAS TOP MDQ / Respuestas Rápidas" | Secuencia visual: bocadillo con signo de pregunta transformándose en paquete verificado | `dark` | `4:3` |
| `nuestras-redes` | `hero_nuestras-redes.png` | Contador "+5.000 SEGUIDORES EN REDES", historias del asfalto MDQ, badges en vivo | Smartphone central con feed del día a día (moto, costa, paquete) rodeado de nodos comunitarios | `dark` | `4:3` |
| `contacto` | `hero_contacto.png` | 3 tarjetas de canales (WhatsApp Comercial, Llamada, B2B) sobre fondo azul directo | Puesto de coordinación y despacho humano: operadora con headset, laptop y badges de contacto | `bright` | `4:3` |

### Reglas de Complementariedad Estricta
1. **Nunca repetir lo que el código ya escribe:** si la tarjeta ya muestra precios en ARS (`$4.600`), distancias (`3,7 km`), direcciones (`Friuli 1972`) o tiempos (`3 HS`), la imagen **NO** dibuja números, textos, carteles ni etiquetas.
2. **Ubicación en el componente:** la ilustración se ubica como **primer elemento en la cabecera interior de la tarjeta** (Hero Card Media) en las 10 páginas con tarjeta, en el centro de la tarjeta en `Home`, y en modo standalone sobre la grilla de canales en `Contacto`.
3. **Cero mezclas de lenguaje visual:** la tarjeta de la Home actual (`/card_mapa.webp`) contenía un render 3D isométrico que violaba el sistema. El objetivo de este catálogo es reemplazarlo por vectores planos corporativos homogéneos en todo el sitio.

---

## 📐 Estructura Canónica de los Prompts

Cada prompt sigue un formato estricto de 8 bloques en inglés, optimizado para el modelo `gemini-2.5-flash-image` (Nano Banana):

```text
[Subject] <sujeto detallado; complementa la tarjeta; anclas geográficas reales de Mar del Plata>
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] <fórmula cromática exacta según superficie destino: dark, light o bright>
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, <aspect ratio>, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] <base negativa canónica + exclusiones específicas de la escena>
```

### Líneas `[Palette]` por Superficie Destino

| Superficie | Fondo del Contenedor | Línea `[Palette]` Obligatoria | Razón de Contraste |
|---|---|---|---|
| `dark` | Tarjeta `bg-brand-blue-950` / `#052C87` / `brand-blue-900` | `Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.` | El contorno exterior debe ser claro para recortarse y resaltar contra el fondo azul noche de la tarjeta. |
| `light` | Tarjeta `bg-white` (LowCost, Flex, Emprendedores) | `Use ONLY these exact colors: egyptian blue #0636A5, navy #00277C, bright blue #0950F6, pale blue #E6EEFE, signal yellow #FFEC01, white #FFFFFF. Outer silhouettes in egyptian blue and navy; bright blue for secondary shapes; pale blue and white only as inner fills, never at the outer edge; signal yellow as the single accent covering at most 15% of the subject.` | El contorno exterior debe ser oscuro (azul egipcio/navy) para no desvanecerse contra la tarjeta blanca. |
| `bright` | Sección `bg-brand-blue-500` directa (Contacto) | `Use ONLY these exact colors: white #FFFFFF, navy #00277C, pale blue #E6EEFE, egyptian blue #0636A5, signal yellow #FFEC01, bright blue #0950F6. Outer silhouettes in white and navy; bright blue only for small inner details, never as a large area; signal yellow as the single accent covering at most 15% of the subject.` | Contraste balanceado entre blanco puro y azul tinta sobre el azul saturado de la sección. |

### Base `[Negative]` Canónica

```text
No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces.
```

---

## 🎯 Pipeline de Generación y Procesamiento

1. **Generador:** `python docs/imagenes/hero-derecha/generate.py [slug ...]`
2. **Archivo crudo:** `docs/imagenes/hero-derecha/chroma/<slug>.png` (Chroma key `#FF00FF` puro)
3. **Procesamiento automático:** Despill de bordes + máscara de canal alfa → salida optimizada en `public/img/heroes/<slug>.png` y `.webp`.
4. **Dimensiones:** resolución mínima 1024×768 px (4:3) o 1024×1024 px (1:1) para nitidez en pantallas Retina (2x/3x DPR).
5. **Compatibilidad:** Cada entrada canónica `### <slug>` es analizada automáticamente por la expresión regular de `generate.py`. Las variantes alternativas `### <slug>-variante-b` contienen la etiqueta `(variante alternativa, pendiente de selección)` para no ser ejecutadas en batch ciego, pero pueden generarse individualmente ejecutando `python docs/imagenes/hero-derecha/generate.py <slug>-variante-b`.

---

## 📦 Catálogo Canónico Optimizado (11 Pantallas Activas)

### home
- **Ruta:** `/` · **Componente:** `src/components/home/HeroAnimado.tsx`
- **Slot:** card media central · reemplaza al archivo 3D `/card_mapa.webp` (`aspect-square max-w-[340px]`)
- **Aspect ratio:** `1:1`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** "Ruteo Activo · MDQ", "Friuli 1972", chips "Envíos Same-Day" y "Flota Propia".
- **Ilustración:** viñeta topológica plana de Mar del Plata con la bahía costera, cuadrícula urbana, hub central y red de mensajeros en movimiento.

```text
[Subject] A square floating map-vignette of Mar del Plata: a stylized curved coastline on the right edge with clean flat wave lines, an organized grid of low-rise city street blocks, and the iconic seaside promenade with small abstract sea lion monuments. At the center-left, a compact logistics depot hub marked with a prominent location pin. From this hub, four solid yellow delivery route vectors radiate across the streets toward four pale-blue destination markers, with two sleek courier delivery motorcycles carrying signal-yellow parcel boxes cruising along the routes. Connected urban velocity.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, square 1:1, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no street signage.
```

---

### home-variante-b
- **Ruta:** `/` · **Componente:** `src/components/home/HeroAnimado.tsx`
- **Slot:** card media central (variante alternativa, pendiente de selección)
- **Aspect ratio:** `1:1`
- **Superficie:** `dark`
- **Enfoque alternativo:** Eje costero y conectividad marítima de Mar del Plata con perspectiva de bulevar.

```text
[Subject] An axonometric square map tile of coastal Mar del Plata: Boulevard Marítimo tracing the ocean shore with stylized white wave crests, low geometric apartment blocks, and the distinctive twin rounded pavilions of the beachfront casino. Across the asphalt avenues, clean solid yellow route arrows connect a central dispatch station to coastal neighborhoods, with a delivery motorcycle rider in profile leaning into transit with a yellow rear cargo box. Clean geometric cartography.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, square 1:1, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no street signage.
```

---

### servicio-express
- **Ruta:** `/servicios/envios-express` · **Componente:** `src/components/servicios/express/ExpressHero.tsx`
- **Slot:** card media cabecera · cabecera de la tarjeta "TELEMETRÍA EN VIVO · MDQ" (`aspect-[4/3] max-w-[400px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** telemetría en vivo, "PRIORIDAD 1", ruta animada con orígenes y paradas, "3 HS RANGO HORARIO".
- **Ilustración:** motomensajero individual en marcha rápida y directa punto a punto, transportando un paquete único urgente sin desvíos.

```text
[Subject] A dedicated motorcycle courier captured in a dynamic three-quarter rear perspective, wearing a dark blue aerodynamic helmet and blue delivery jacket with a single yellow hazard stripe. The motorcycle features a compact bright signal-yellow cargo box carrying one isolated parcel. The bike speeds along a singular straight road segment directly from an origin beacon to the entrance of a modern coastal home. Behind the motorcycle, three crisp horizontal yellow velocity trails. Hovering subtly above, a minimalist clock circle with one quarter sector filled in solid yellow to signify an immediate delivery window. Direct, prioritized, urgent dispatch.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no visible facial features, no clock numerals, no multiple parcels.
```

---

### servicio-express-variante-b
- **Ruta:** `/servicios/envios-express` · **Componente:** `src/components/servicios/express/ExpressHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Entrega final express en la puerta del cliente con cronómetro de precisión.

```text
[Subject] Side profile view of a streamlined delivery motorcycle parked at the curb of a Mar del Plata neighborhood house, where a faceless courier steps toward the front porch carrying a single neatly taped parcel. A bold yellow arrow vector sweeps backward across the pavement indicating the rapid straight trajectory just completed. Next to the parcel, a geometric flat stopwatch icon with a single yellow quarter-wedge highlight. Punctual, single-destination courier service.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no visible facial features, no clock numerals, no house numbers.
```

---

### servicio-lowcost
- **Ruta:** `/servicios/envios-lowcost` · **Componente:** `src/components/servicios/lowcost/LowCostHero.tsx`
- **Slot:** card media cabecera · cabecera de la tarjeta blanca "CIRCUITOS ACTIVOS MDQ" (`aspect-[4/3] max-w-[400px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `light` (tarjeta blanca, contorno exterior azul egipcio/navy obligatorio)
- **La tarjeta ya muestra:** "CIRCUITOS ACTIVOS MDQ", "CONSOLIDADO", tabs Ahorro (-40%) y Horarios (corte 14:00, entrega antes 19:00).
- **Ilustración:** consolidación de envíos: tres tiendas locales entregando paquetes en una pila unificada para un circuito planificado en una sola moto.

```text
[Subject] Parcel batch consolidation: three neighborhood store facades on the left each hand off one clean parcel into a single centralized stack of cardboard boxes sealed with yellow tape. A delivery motorcycle outfitted with an oversized multi-parcel rear rack departs along a continuous rounded loop route, illustrated as an unbroken blue circuit line with five sequential yellow stop beacons at residential destinations. Systematic volume, scheduled consolidation and cost efficiency in one combined circuit.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: egyptian blue #0636A5, navy #00277C, bright blue #0950F6, pale blue #E6EEFE, signal yellow #FFEC01, white #FFFFFF. Outer silhouettes in egyptian blue and navy; bright blue for secondary shapes; pale blue and white only as inner fills, never at the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no price tags, no currency symbols, no shop signage.
```

---

### servicio-lowcost-variante-b
- **Ruta:** `/servicios/envios-lowcost` · **Componente:** `src/components/servicios/lowcost/LowCostHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `light`
- **Enfoque alternativo:** Ruteo masivo optimizado por zonas en Mar del Plata.

```text
[Subject] Multi-stop logistics distribution on a street map: a central consolidation dispatch table with stacked parcels sorted by neighborhood zones. An organized serpentine delivery route line weaves through four residential block clusters, with a delivery motorcycle making planned stops. A small piggy-bank silhouette with a yellow accent dot rests on the dispatch table to emphasize smart commercial savings. Planned route efficiency.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: egyptian blue #0636A5, navy #00277C, bright blue #0950F6, pale blue #E6EEFE, signal yellow #FFEC01, white #FFFFFF. Outer silhouettes in egyptian blue and navy; bright blue for secondary shapes; pale blue and white only as inner fills, never at the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no price tags, no currency symbols.
```

---

### servicio-flex
- **Ruta:** `/servicios/enviosflex` · **Componente:** `src/components/servicios/flex/FlexHero.tsx`
- **Slot:** card media cabecera · cabecera de la tarjeta blanca "INTEGRACIÓN LOGÍSTICA FLEX" (`aspect-[4/3] max-w-[400px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `light` (tarjeta blanca, contorno exterior azul egipcio/navy obligatorio)
- **La tarjeta ya muestra:** "SLA 100%", tabs Ventajas MercadoLíder (reputación verde en copy) y Proceso QR (retiro 15:00, escaneo, entrega).
- **Ilustración:** retiro en mostrador e-commerce, escaneo óptico de etiqueta QR con haz amarillo y medalla de reputación dorada.

```text
[Subject] Direct merchant dispatch at an online seller workshop: a wooden sales counter with three neatly packaged e-commerce parcels, each bearing a stylized geometric square QR pattern code. A faceless courier points a modern handheld optical scanner at one parcel, casting a sharp flat yellow triangular scan beam. In the background through an open doorway, a branded delivery motorcycle waits with its cargo box open. Floating at the top-right, a circular reputation medal with a ribbon and a crisp check mark in the center. Synced same-day e-commerce logistics.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: egyptian blue #0636A5, navy #00277C, bright blue #0950F6, pale blue #E6EEFE, signal yellow #FFEC01, white #FFFFFF. Outer silhouettes in egyptian blue and navy; bright blue for secondary shapes; pale blue and white only as inner fills, never at the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no Mercado Libre trademark logo, no handshake emblem, no marketplace branding, no readable barcode alphanumeric characters.
```

---

### servicio-flex-variante-b
- **Ruta:** `/servicios/enviosflex` · **Componente:** `src/components/servicios/flex/FlexHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `light`
- **Enfoque alternativo:** Entrega de mano a mano entre vendedor y mensajero con sincronización digital inmediata.

```text
[Subject] Two faceless figures at an e-commerce pickup counter: a seller handing a parcel with a bold QR sticker to a delivery courier holding a motorcycle helmet under one arm. A synchronized yellow checkmark badge hovers between them, connected by a clean curved transfer arrow. Outside, a delivery motorcycle is parked ready to roll. Fast, reliable marketplace fulfillment.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: egyptian blue #0636A5, navy #00277C, bright blue #0950F6, pale blue #E6EEFE, signal yellow #FFEC01, white #FFFFFF. Outer silhouettes in egyptian blue and navy; bright blue for secondary shapes; pale blue and white only as inner fills, never at the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no Mercado Libre logos.
```

---

### servicio-emprendedores
- **Ruta:** `/servicios/plan-emprendedores` · **Componente:** `src/components/servicios/emprendedores/EmprendedoresHero.tsx`
- **Slot:** card media cabecera · cabecera de la tarjeta blanca "HUB LOGÍSTICO FRIULI 1972" (`aspect-[4/3] max-w-[400px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `light` (tarjeta blanca, contorno exterior azul egipcio/navy obligatorio)
- **La tarjeta ya muestra:** "3PL ACTIVO", tabs Modalidades (DropOff -20%, Stock) y Flujo Operativo (Recepción, Almacenaje, Empaque, Despacho).
- **Ilustración:** corte esquemático del hub logístico 3PL: estantería con stock clasificado, verificación QR, empaque con cinta y bahía de carga para motos.

```text
[Subject] Clean architectural cutaway diagram of a modern compact 3PL micro-fulfillment hub, arranged linearly from left to right: first, blue modular steel shelving storing uniformly categorized stock boxes; second, a faceless logistics worker verifying inventory with a wireless handheld barcode scanner; third, an assembly packaging workstation with an open box being sealed with a yellow tape dispenser; fourth, an open roll-up bay door where a delivery motorcycle with cargo racks is staged for departure. Thin yellow operational flow arrows link all four stages. Complete turnkey fulfillment workflow for small businesses.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: egyptian blue #0636A5, navy #00277C, bright blue #0950F6, pale blue #E6EEFE, signal yellow #FFEC01, white #FFFFFF. Outer silhouettes in egyptian blue and navy; bright blue for secondary shapes; pale blue and white only as inner fills, never at the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no box label writing, no forklifts, no massive industrial factory elements.
```

---

### servicio-emprendedores-variante-b
- **Ruta:** `/servicios/plan-emprendedores` · **Componente:** `src/components/servicios/emprendedores/EmprendedoresHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `light`
- **Enfoque alternativo:** Solución integral de almacenamiento y DropOff para emprendedores.

```text
[Subject] A small-business fulfillment station: an organized storage rack filled with inventory cartons, adjacent to a drop-off counter where an entrepreneur hands a carton to a warehouse operator. A motorcycle courier carries sealed parcels out toward the delivery vehicle. Floating overhead, three circular workflow badges: a box with stock check, a packing tape roll, and a motorcycle delivery icon with yellow fill. Complete local warehouse outsourcing.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: egyptian blue #0636A5, navy #00277C, bright blue #0950F6, pale blue #E6EEFE, signal yellow #FFEC01, white #FFFFFF. Outer silhouettes in egyptian blue and navy; bright blue for secondary shapes; pale blue and white only as inner fills, never at the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces.
```

---

### cotizar-express
- **Ruta:** `/cotizar/express` · **Componente:** `src/components/cotizar/express/CotizadorExpressHero.tsx`
- **Slot:** card media cabecera · cabecera de la tarjeta azul "CÁLCULO AUTOMÁTICO · SISTEMA EXPRESS MAPS" (`aspect-[4/3] max-w-[400px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** calculadora interactiva, campos de origen y destino simulados, cálculo de km y tarifa ARS en vivo.
- **Ilustración:** cuadrícula cartográfica vectorial con medición de ruta punto a punto y calibre geométrico de distancia exacta.

```text
[Subject] An isometric vector map plaque displaying a geometric street grid of Mar del Plata. A pale-blue origin location beacon and a signal-yellow destination pin are connected by a bold solid yellow route line following two crisp 90-degree street turns. A tiny motorcycle courier silhouette sits along the route vector. Flanking the route, a flat architectural measuring caliper bracket with evenly spaced blank tick marks spans directly between origin and destination, visualizing precise distance calculation without writing numbers. Accurate topographic route calculation.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no prices, no currency symbols, no physical calculator device, no street names, no Google Maps UI.
```

---

### cotizar-express-variante-b
- **Ruta:** `/cotizar/express` · **Componente:** `src/components/cotizar/express/CotizadorExpressHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Radar de navegación urbana y vector de velocidad punto a punto.

```text
[Subject] Aerial radar vector display showing a clean city avenue grid: an illuminated origin circle and an destination pin linked by a bold yellow path with kinetic directional arrows. A stylized speedometer arc with a yellow indicator needle hovers above the route, symbolizing instant quote and immediate dispatch readiness. Pure vector navigational geometry.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no price tags.
```

---

### cotizar-lowcost
- **Ruta:** `/cotizar/lowcost` · **Componente:** `src/components/cotizar/lowcost/CotizadorLowCostHero.tsx`
- **Slot:** card media cabecera · cabecera de la tarjeta azul "CÁLCULO AUTOMÁTICO · SISTEMA LOWCOST BATCH" (`aspect-[4/3] max-w-[400px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** cotizador multidestino en lote, filas de envíos simulados, distancia total y descuentos.
- **Ilustración:** ruteo masivo en lote: un hub emisor distribuyendo 5 rutas coordinadas a 5 destinos con manifiesto abstracto.

```text
[Subject] A floating rectangular urban map plane with a single central yellow departure hub holding a compact stack of parcels. From this central point, five thin solid yellow route lines branch out symmetrically across a street grid to five pale-blue destination markers located in different neighborhoods. Floating on the left, a minimalist manifest clipboard containing five clean horizontal bar segments without text, each bar aligned with one route path. Coordinated batch routing and systematic dispatch.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no prices, no currency symbols, no spreadsheet alphanumeric text, no street names.
```

---

### cotizar-lowcost-variante-b
- **Ruta:** `/cotizar/lowcost` · **Componente:** `src/components/cotizar/lowcost/CotizadorLowCostHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Matriz de entrega consolidada agrupada por volumen.

```text
[Subject] An isometric dispatch grid: three distinct parcel groups categorized by size and zone, connected by converging yellow vectors into a unified route line traveled by a delivery motorcycle. A floating geometric pie chart with a yellow highlight wedge indicates consolidated volume savings. Structured, orderly multi-parcel calculation.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no prices, no currency symbols.
```

---

### sobre-nosotros
- **Ruta:** `/nosotros/sobre-nosotros` · **Componente:** `src/components/nosotros/sobre-nosotros/AboutHero.tsx`
- **Slot:** card media cabecera · cabecera de la tarjeta azul "Confianza local" (`aspect-[4/3] max-w-[400px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** 5 estrellas doradas, testimonio real de cliente, "Flota 100% propia", "Friuli 1972".
- **Ilustración:** sede operativa de Friuli 1972 con persiana abierta, faro costero en el horizonte y trío de mensajeros propios con motos uniformadas.

```text
[Subject] A coastal street-corner logistics scene in Mar del Plata: the clean facade of the local Friuli headquarters with an open dispatch bay door. In the background on the right, the iconic Punta Mogotes maritime lighthouse with red-and-white bands reinterpreted in stylized blue-and-white stripes stands over flat stylized ocean waves. In front of the facility, three faceless professional couriers in blue jackets with yellow hazard stripes stand together beside three identical delivery motorcycles with bright yellow cargo boxes. Authentic local roots, dedicated proprietary fleet, fifteen years in Mar del Plata.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no facial features, no sunset sky, no rating stars, no street signage.
```

---

### sobre-nosotros-variante-b
- **Ruta:** `/nosotros/sobre-nosotros` · **Componente:** `src/components/nosotros/sobre-nosotros/AboutHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Formación de flota en la rambla costera marplatense.

```text
[Subject] A row of three motorcycle couriers standing proudly with their delivery bikes along the stone promenade balustrade of Mar del Plata. In the background, the vast Atlantic sea with geometric horizontal wave lines. A circular heritage emblem with a solid yellow laurel accent floats above the center, symbolizing 15+ years of verified urban transport. Maritime logistics heritage.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no facial features.
```

---

### preguntas-frecuentes
- **Ruta:** `/nosotros/preguntas-frecuentes` · **Componente:** `src/components/nosotros/preguntas-frecuentes/FaqHero.tsx`
- **Slot:** card media cabecera · cabecera de la tarjeta azul "PREGUNTAS TOP MDQ" (`aspect-[4/3] max-w-[400px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** buscador de preguntas, chips temáticos, acordeón interactivo de respuestas rápidas.
- **Ilustración:** narrativa visual de duda a solución: bocadillo de pregunta que transiciona mediante flecha amarilla a paquete verificado con checkmark.

```text
[Subject] Conceptual narrative of doubt resolving into clarity, read horizontally from left to right: on the left side, a bold pale-blue question mark glyph inside a rounded speech balloon; in the center, a short solid yellow directional transit arrow; on the right side, an open cardboard shipping box from which an elevated solid yellow check mark icon ascends. Below this sequence, a clean horizontal road segment with a delivery motorcycle courier poised for departure. Instant answers, reliable resolution.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text inside speech bubbles, no letters other than the question mark silhouette, no numbers, no logos, no WhatsApp icon, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no light bulb icon.
```

---

### preguntas-frecuentes-variante-b
- **Ruta:** `/nosotros/preguntas-frecuentes` · **Componente:** `src/components/nosotros/preguntas-frecuentes/FaqHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Manual de operaciones logísticas y sello de certificación de entrega.

```text
[Subject] An open logistics guidebook binder displaying clean geometric route diagrams on its pages, flanked by an embossed yellow circular verified seal with a bold check mark. In the foreground, an outgoing motorcycle courier ready to execute the instructions. Knowledge, transparency and verified operational protocol.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no readable paragraphs, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces.
```

---

### nuestras-redes
- **Ruta:** `/nosotros/nuestras-redes` · **Componente:** `src/components/nosotros/nuestras-redes/NetworksHero.tsx`
- **Slot:** card media cabecera · cabecera de la tarjeta azul "+5.000 SEGUIDORES" (`aspect-[4/3] max-w-[400px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **La tarjeta ya muestra:** cifra de seguidores, descripción del día a día en el asfalto marplatense, status badges.
- **Ilustración:** smartphone central exhibiendo un feed con postales del reparto urbano (moto, costa, paquete) rodeado de avatares comunitarios y reacciones.

```text
[Subject] A modern upright smartphone standing at the center, its screen displaying a clean vertical feed of three stacked cards containing minimalist vector pictograms: a courier motorcycle on the street, a sealed parcel, and the Mar del Plata ocean coastline. Orbiting around the phone, five circular faceless user profile avatars connected to the screen by thin solid yellow link lines, with a few geometric yellow heart shapes and pale-blue empty chat speech bubbles floating alongside. Dynamic local community engaged with street logistics.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no hashtags, no logos, no Instagram, TikTok, Facebook or WhatsApp trademark icons, no brand marks, no watermark, no magenta, pink or purple inside the subject, no red hearts, no green, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no facial features, no follower counter numbers.
```

---

### nuestras-redes-variante-b
- **Ruta:** `/nosotros/nuestras-redes` · **Componente:** `src/components/nosotros/nuestras-redes/NetworksHero.tsx`
- **Slot:** card media cabecera (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `dark`
- **Enfoque alternativo:** Conexión urbana directa entre la comunidad local y los repartidores.

```text
[Subject] A digital network constellation: three circular portal nodes, one showing a courier riding along the coast, one showing an entrepreneur packing boxes, and one showing a customer receiving a parcel at their door. The nodes are connected by energetic yellow communication rays with floating interaction bubbles. Community-driven logistics network.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no trademark social icons, no brand marks, no watermark, no magenta, pink or purple inside the subject, no red, no green, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no facial features.
```

---

### contacto
- **Ruta:** `/contacto` · **Componente:** `src/components/contacto/ContactHero.tsx`
- **Slot:** standalone compacto · encima de los 3 canales de contacto (`aspect-[4/3] max-w-[420px]`)
- **Aspect ratio:** `4:3`
- **Superficie:** `bright` (columna derecha sobre fondo azul directo)
- **La columna ya muestra:** WhatsApp comercial, llamada de coordinación y cotización B2B.
- **Ilustración:** mesa de coordinación y atención humana en oficina: operadora con headset, laptop, teléfono fijo y badges de comunicación directa.

```text
[Subject] An attentive dispatch desk inside a welcoming local logistics office: a faceless coordinator wearing an audio headset sits behind a clean modern counter equipped with a laptop, a desktop telephone console and an open correspondence document. Floating neatly overhead, three circular communication badges in a row: a telephone handset, an empty chat balloon and a location pin highlighted in signal yellow. Visible through the open office door behind, a courier motorcycle parked outside. Direct, personal, human customer support.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, navy #00277C, pale blue #E6EEFE, egyptian blue #0636A5, signal yellow #FFEC01, bright blue #0950F6. Outer silhouettes in white and navy; bright blue only for small inner details, never as a large area; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no phone numbers, no logos, no WhatsApp logo, no brand marks, no signage writing, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no facial features, no screen text.
```

---

### contacto-variante-b
- **Ruta:** `/contacto` · **Componente:** `src/components/contacto/ContactHero.tsx`
- **Slot:** standalone compacto (variante alternativa, pendiente de selección)
- **Aspect ratio:** `4:3`
- **Superficie:** `bright`
- **Enfoque alternativo:** Central de comunicación en tiempo real y enlace directo al móvil del mensajero.

```text
[Subject] Direct communication hub: a stylized logistics dispatcher console with a dedicated headset, a tablet displaying an active urban map vector, and a telephone handset surrounded by radiating yellow acoustic waves connecting straight to a courier on the road. Immediate, zero-wait customer coordination.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, navy #00277C, pale blue #E6EEFE, egyptian blue #0636A5, signal yellow #FFEC01, bright blue #0950F6. Outer silhouettes in white and navy; bright blue only for small inner details, never as a large area; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, horizontal 4:3, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no WhatsApp logo, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no facial features.
```

---

## ⏸️ Páginas Secundarias (Pendientes de Hero 7/5)

Estas pantallas actualmente no cuentan con un hero asimétrico 7/5 con tarjeta derecha (revisado en código 2026-09-16). Los prompts quedan preparados en modo vertical `standalone 4:5` para cuando se implemente la grilla de hero; no deben generarse en batch automático.

### politica-de-privacidad
- **Ruta:** `/politica-de-privacidad` · **Componente:** `src/app/politica-de-privacidad/PrivacyContent.tsx`
- **Slot:** standalone vertical (pendiente de hero)
- **Aspect ratio:** `4:5`
- **Superficie:** `dark`

```text
[Subject] Personal customer data protection for a local logistics service: a bold geometric security shield featuring a keyhole in its core stands in front of a sealed shipping parcel locked with a padlock on its yellow tape. Surrounding the shield, three document cards with yellow check marks, linked by solid clean lines. Dedicated custody and confidentiality of customer shipping data.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, vertical 4:5, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no hacker imagery, no binary code numbers, no cyber neon.
```

---

### terminos-y-condiciones
- **Ruta:** `/terminos-y-condiciones` · **Componente:** `src/app/terminos-y-condiciones/TermsContent.tsx`
- **Slot:** standalone vertical (pendiente de hero)
- **Aspect ratio:** `4:5`
- **Superficie:** `dark`

```text
[Subject] A transparent logistics service contract: a perfectly balanced two-pan mechanical scale holding a parcel on one side and a verified document agreement on the other, level in horizontal harmony. In front, an official clipboard with abstract structural line dividers and a circular yellow seal with a check mark. Clear, equitable and honest shipping terms.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: white #FFFFFF, pale blue #E6EEFE, bright blue #0950F6, egyptian blue #0636A5, navy #00277C, signal yellow #FFEC01. Outer silhouettes in white, pale blue and bright blue; navy and egyptian blue only for inner details and shading, never as the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, vertical 4:5, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no readable paragraphs, no letters, no numbers, no logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces, no gavel, no courtroom scene.
```

---

### panel-gestion-revision
- **Rutas:** `/admin/imagenes` y `/revisar` · **Componentes:** `src/app/admin/imagenes/AdminImagenesClient.tsx`, `src/app/revisar/RevisarClient.tsx`
- **Slot:** standalone vertical (uso interno, pendiente de hero)
- **Aspect ratio:** `4:5`
- **Superficie:** `light`

```text
[Subject] An internal brand curation desk: a graphics tablet on a desktop stand showing an image viewport frame with four corner crop handles, a magnifying loupe resting beside it, and an official yellow circular approval stamp with a check mark. A small parcel icon rests at the stand base. Rigorous brand asset review.
[Style] Flat vector minimal corporate illustration, geometric shapes, clean flat fills, subtle two-tone shading, consistent 4px rounded stroke weight.
[Palette] Use ONLY these exact colors: egyptian blue #0636A5, navy #00277C, bright blue #0950F6, pale blue #E6EEFE, signal yellow #FFEC01, white #FFFFFF. Outer silhouettes in egyptian blue and navy; bright blue for secondary shapes; pale blue and white only as inner fills, never at the outer edge; signal yellow as the single accent covering at most 15% of the subject.
[Lighting] Even studio lighting, uniform and soft, no dramatic shadows, no glow effects.
[Composition] Centered composition, vertical 4:5, subject fills about 75% of the width with at least 10% empty margin on every side, fully contained, nothing cropped, clear silhouette readable at 340px wide.
[Quality] 8k ultra-detailed, crisp razor-sharp vector edges.
[Background] Solid flat uniform chroma key magenta #FF00FF filling the entire canvas edge to edge, for transparent cutout.
[Negative] No text, no letters, no numbers, no software logos, no brand marks, no watermark, no magenta, pink or purple inside the subject, no green, no red, no grey, no black, no gradients, no glow, no halos, no semi-transparent effects, no hairlines thinner than 3px, no cast shadows or reflections on the background, no floor plane extending to the edges, no photorealism, no 3D render, no recognizable faces.
```
