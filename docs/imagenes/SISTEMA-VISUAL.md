# Sistema Visual IA DosRuedas — Director Visual IA (Modo 1)

**Fecha:** 2026-09-21  
**Versión:** 2.0 (Ajuste Max #0950F6 & Ley de Tres Colores)  
**Dominio SSoT:** `https://www.enviosdosruedas.com`

---

## 1. Resumen de Contexto e Investigación (Paso 0)

### 1.1 Señales de Contexto

- **Garantía Flex 100%:** Los sellers cuidan la reputación de Mercado Libre sobre todo. El visual debe reflejar escaneo QR, agilidad y medalla de cumplimiento. (_Fuente: CSV Respuestas del Dueño, Pregunta 16_).
- **Anclaje Local Mar del Plata:** Chauvín, Friuli 1972, costa marplatense. Elementos visuales costeros y urbanos locales identificables. (_Fuente: sitemap.ts, CSV Respuestas del Dueño_).
- **Trato humano y confianza:** Respuesta personalizada ante imprevistos frente a la despersonalización de apps masivas. (_Fuente: Reseñas Google, CSV Respuestas del Dueño_).
- **Preferencia por Flota Real / Renders 3D Limpios:** Engagement superior en contenidos con motos con top-box amarillo y cadetes. (_Fuente: Auditoría Marketing F8-1_).
- **Transparencia en Horarios y Precios:** Datos dinámicos (Express 60-90m, LowCost corte 13:00 hs, Flex corte 15:00 hs) mostrados en UI, nunca congelados en la imagen. (_Fuente: pricing.ts, promises.ts_).

### 1.2 Radar de Tendencias 2026

- **ADOPTAR:**
  - _Dioramas isométricos 3D clay/plastic satén:_ Estilo icónico unificado. (_Adobe & Canva Trends 2026_).
  - _Overlays UI dinámicos en HTML:_ Cero texto horneado en las imágenes. (_Meta Creative Guide 2026_).
  - _Tarjetas tipo Bento Grid con badges UI:_ Integración en `DoubleBezelCard`. (_UI/UX Trends 2026_).
  - _Formatos 4:5 y 9:16 con zócalo libre:_ Zonas seguras (≥35% libre) para anuncios. (_Meta Business Suite 2026_).
- **PROBAR:**
  - _Renders con perspectiva de radar urbano / vector de pulso:_ Evaluar en test A/B de anuncios de conversión.
- **EVITAR:**
  - _Modelos humanos hiperrealistas IA:_ Provocan rechazo por 'uncanny valley'. Usar figuras sin rostro tipo vinyl-toy o fotografía de flota real. (_Getty Sentiment 2026_).
  - _Estética Y2K Cyberpunk / Dark Navy:_ Viola la Ley de Tres Colores (#0950F6 es el azul más oscuro permitido). (_Pinterest Predicts 2026_).
  - _Híbridos Foto + 3D:_ NUNCA mezclar fotografía real y render 3D en la misma pieza. (_Guía de Marca v2_).

---

## 2. Principios Inviolables del Sistema Visual

1. **Ajuste Max #0950F6 & Ley de Tres Colores:** El tono `#0950F6` es el azul MÁS OSCURO permitido en todo el sistema visual. Quedan abolidos los hexes navy oscuros (`#0636A5`, `#00277C`, `#021440`, etc.). El amarillo `#FFEC01` actúa como único acento vial (máximo 15% de superficie) y el blanco `#FFFFFF` aporta luz y volumen superior.
2. **Sin texto, números ni logos dentro de la imagen generada:** Todo texto, cifra de precio, horario o CTA debe renderizarse en HTML/CSS superpuesto o en la pieza de Canva. Las imágenes se generan 100% puras.
3. **Separación estricta de Foto y 3D:** Render 3D para la promesa conceptual del sitio y campañas institucionales/tech; Fotografía real únicamente para la flota/equipo con autorización expresa. Jamás mezclar ambos en una misma composición.
4. **Datos dinámicos solo en UI:** Precios, kilometraje, horarios de corte y promesas provienen exclusivamente de `pricing.ts`, `promises.ts` y `precios.md`.
5. **Figuras humanas del Kit 3D sin rostro:** Los personajes 3D son muñecos de vinilo estilizados sin rasgos faciales.
6. **Cero marcas de terceros dentro de la imagen:** Prohibido renderizar logos de Mercado Libre, WhatsApp, Instagram o Google dentro de los renders 3D.

---

## 3. Kit 3D DosRuedas (Vocabulario Canónico)

Pegar estas descripciones exactas en inglés dentro del bloque `[Subject]` del prompt:

| Pieza               | Descripción Canónica en Inglés                                                                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Diorama base**    | `a rounded-square isometric diorama tile with a thick bevelled bright-blue edge, like a chunk cut out of a miniature city map`                                                                        |
| **City blocks**     | `low matte blue city blocks of varied heights with pale-blue rooftops and narrow streets between them`                                                                                                |
| **Route**           | `a thick glossy route tube in signal yellow with a tight emissive core, following the streets`                                                                                                        |
| **Map pin**         | `a faceted chunky map pin in bright blue #0950F6 with a signal-yellow bevelled rim, its face a smooth pale-blue disc`                                                                                 |
| **Courier scooter** | `a chunky toy-like delivery scooter in bright blue #0950F6 with a large rounded signal-yellow #FFEC01 top box, ridden by a stylized faceless vinyl-toy courier in a blue jacket and pale-blue helmet` |
| **Parcel**          | `rounded cardboard-shaped parcels in pale blue #E6EEFE with a signal-yellow #FFEC01 tape band`                                                                                                        |
| **Coast**           | `one diorama side ending in a strip of stylized glossy blue sea with soft rounded waves`                                                                                                              |

---

## 4. Motor de Prompts v2 (Líneas `[Palette]`, `[Background]` y `[Negative]`)

### 4.1 Líneas `[Palette]` v2 por Superficie Destino

- **Sobre azul (`surface-blue`, hero azul):**
  `Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.`

- **Sobre amarillo (`surface-accent`, hero amarillo):**
  `Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for main volumes, blue #3570F8 for side faces, pale blue #E6EEFE and white #FFFFFF for top faces and highlights. Signal yellow only in tiny details, always outlined by white or blue so it does not melt into a #FFEC01 background. No navy, no black.`

- **Sobre blanco (tarjetas y secciones blancas):**
  `Base material colors ONLY: bright blue #0950F6 for main volumes, blue #3570F8 and sky blue #628FF9 for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. No large white volumes, no navy, no black.`

### 4.2 Especificaciones `[Background]`

- **Sitio web:**
  `Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.`
- **Redes y anuncios:**
  `Solid flat background in #0950F6, #FFEC01, or #FFFFFF, no gradient, no texture, choosing the color that contrasts sharply with the subject.`

### 4.3 Base `[Negative]` (Obligatoria en todos los prompts)

```text
text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
```

---

## 5. Tabla de Formatos y Zonas Seguras

| Destino                              | Ratio         | Tamaño Sugerido | Notas & Zonas Seguras                                                                      |
| ------------------------------------ | ------------- | --------------- | ------------------------------------------------------------------------------------------ |
| **Hero del sitio (columna derecha)** | `1:1` o `4:3` | 1200 px         | Fondo transparente magenta recortado a WebP; `next/image` con `priority`                   |
| **Tarjeta o Sección**                | `4:3` o `3:2` | 960 px          | Fondo transparente recortado a WebP                                                        |
| **Open Graph (OG)**                  | `1.91:1`      | 1200×630 px     | Fondo sólido `#0950F6`; texto e isologotipo superpuesto en código                          |
| **Post Instagram / Facebook Feed**   | `4:5`         | 1080×1350 px    | Zócalo para texto/CTA en los 35% superiores o inferiores                                   |
| **Post Cuadrado Feed**               | `1:1`         | 1080×1080 px    | Sujeto centrado, libre 15% en bordes                                                       |
| **Historias / Reels / WhatsApp**     | `9:16`        | 1080×1920 px    | Zona segura: 250 px libres arriba (header/avatar) y 340 px libres abajo (swipe up / reply) |

---

## 6. Inventario de la Web y Diagnóstico por Sección

### 6.1 Páginas (Sitemap vs Código)

| Ruta                              | En Sitemap | En App Folder                                     | Estado / Observación     |
| --------------------------------- | ---------- | ------------------------------------------------- | ------------------------ |
| `/`                               | Sí         | `src/app/page.tsx`                                | OK - Principal           |
| `/servicios/envios-express`       | Sí         | `src/app/servicios/envios-express/page.tsx`       | OK - Comercial           |
| `/servicios/envios-lowcost`       | Sí         | `src/app/servicios/envios-lowcost/page.tsx`       | OK - Comercial           |
| `/servicios/enviosflex`           | Sí         | `src/app/servicios/enviosflex/page.tsx`           | OK - Comercial           |
| `/servicios/deposito-fulfillment` | Sí         | `src/app/servicios/deposito-fulfillment/page.tsx` | OK - Comercial           |
| `/cotizar/express`                | Sí         | `src/app/cotizar/express/page.tsx`                | OK - Cotizador           |
| `/cotizar/lowcost`                | Sí         | `src/app/cotizar/lowcost/page.tsx`                | OK - Cotizador           |
| `/nosotros/sobre-nosotros`        | Sí         | `src/app/nosotros/sobre-nosotros/page.tsx`        | OK - Institucional       |
| `/nosotros/preguntas-frecuentes`  | Sí         | `src/app/nosotros/preguntas-frecuentes/page.tsx`  | OK - FAQ                 |
| `/nosotros/nuestras-redes`        | Sí         | `src/app/nosotros/nuestras-redes/page.tsx`        | OK - Redes               |
| `/contacto`                       | Sí         | `src/app/contacto/page.tsx`                       | OK - Transaccional       |
| `/cobertura`                      | Sí         | `src/app/cobertura/page.tsx`                      | OK - Cobertura           |
| `/politica-de-privacidad`         | Sí         | `src/app/politica-de-privacidad/page.tsx`         | OK - Legal (sin hero)    |
| `/terminos-y-condiciones`         | Sí         | `src/app/terminos-y-condiciones/page.tsx`         | OK - Legal (sin hero)    |
| `/admin/imagenes`                 | No         | `src/app/admin/imagenes/page.tsx`                 | Panel Interno (sin hero) |
| `/revisar`                        | No         | `src/app/revisar/page.tsx`                        | Panel Interno (sin hero) |

### 6.2 Diagnóstico por Sección e Imágenes Existentes

| Sección / Componente             | Superficie         | Asset Actual                                    | Texto Horneado?           | Diagnóstico / Acción Recomendada                                                  |
| -------------------------------- | ------------------ | ----------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------- |
| Home Hero (`HeroAnimado.tsx`)    | Azul (`#0950F6`)   | `/card_mapa.webp`                               | No                        | **reusar / regenerar:** Regenerar render 3D sin textos según VIS-HOME-01          |
| Express Hero (`ExpressHero.tsx`) | Azul (`#0950F6`)   | `/public/elementos/envios_express.webp`         | Sí ("ENVÍOS EN EL DÍA")   | **regenerar sin texto:** Reemplazar por VIS-EXPRESS-01 con overlay HTML           |
| LowCost Hero (`LowCostHero.tsx`) | Blanco (`#FFFFFF`) | `/public/elementos/planifica_transparent.webp`  | Sí ("PLANIFICÁ Y AHORRÁ") | **regenerar sin texto:** Reemplazar por VIS-LOWCOST-01 con overlay HTML           |
| Flex Hero (`FlexHero.tsx`)       | Blanco (`#FFFFFF`) | `/public/elementos/envios_flex.webp`            | Sí ("TU TIENDA CON FLEX") | **regenerar sin texto:** Reemplazar por VIS-FLEX-01 con overlay HTML              |
| Emprendedores / 3PL Hero         | Blanco (`#FFFFFF`) | `/public/elementos/envios_emprendedores.webp`   | No                        | **regenerar sin texto:** Reemplazar por VIS-EMPRENDEDORES-01 con overlay HTML     |
| Cotizador Express Hero           | Azul (`#0950F6`)   | Componente Calculadora UI                       | No                        | **mejor en código:** Mantiene UI interactiva + VIS-COTIZAR-EXPRESS-01 en cabecera |
| Cotizador LowCost Hero           | Azul (`#0950F6`)   | Componente Batch UI                             | No                        | **mejor en código:** Mantiene UI interactiva + VIS-COTIZAR-LOWCOST-01 en cabecera |
| Sobre Nosotros Hero              | Azul (`#0950F6`)   | Tarjeta Testimonio + Estrellas                  | No                        | **imagen nueva:** VIS-NOSOTROS-01 en cabecera de tarjeta                          |
| FAQ Hero                         | Azul (`#0950F6`)   | `/public/elementos/dudas_transparent.webp`      | No                        | **regenerar sin texto:** VIS-FAQ-01 en cabecera de tarjeta                        |
| Nuestras Redes Hero              | Azul (`#0950F6`)   | `/public/elementos/seguinos_transparent.webp`   | Sí ("SEGUINOS EN REDES")  | **regenerar sin texto:** Reemplazar por VIS-REDES-01 con overlay HTML             |
| Contacto Hero                    | Azul (`#0950F6`)   | `/public/elementos/escribinos_transparent.webp` | Sí ("ESCRIBINOS HOY")     | **regenerar sin texto:** Reemplazar por VIS-CONTACTO-01 con overlay HTML          |

---

## 7. Backlog Priorizado de Fichas VIS

### VIS-HOME-01

- **Dónde:** `/` (`src/components/home/HeroAnimado.tsx`) — Columna Derecha Hero Card Media
- **Superficie destino:** Azul (`#0950F6`)
- **Decisión:** Regenerar render 3D
- **Por qué:** Sustituye `card_mapa.webp` adecuando la paleta al estándar v2 (#0950F6 max dark) sin texto ni logos horneados.
- **Se basa en:** Señal 2 (Anclaje local MDQ) · Tendencia 1 (Diorama isométrico 3D).
- **Concepto:** Diorama costero de Mar del Plata con bahía, manzanas azules, pin central y scooter en ruta emisiva amarilla.
- **Composición:** Vista isométrica 3/4 desde 30°, sujeto centrado cubriendo 78% del ancho, margen libre de 8% en todos los lados.
- **Prompt:**
  ```text
  [Subject] A rounded-square isometric diorama tile with a thick bevelled bright-blue edge, like a chunk cut out of a miniature Mar del Plata map: low matte blue city blocks of varied heights with pale-blue rooftops and narrow streets between them, and one diorama side ending in a strip of stylized glossy blue sea with soft rounded waves and a tiny seaside boardwalk. A large faceted chunky map pin in bright blue #0950F6 with a signal-yellow #FFEC01 bevelled rim rises from the center, its face a smooth pale-blue disc with a simple embossed two-wheel pictogram. A thick glossy route tube in signal yellow with a tight emissive core winds through the streets to the pin's tip, and one chunky toy-like delivery scooter with a signal-yellow top box rides along it.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, square 1:1, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 1:1, 1200 px
- **Texto superpuesto (HTML):** "RUTEO ACTIVO · MDQ", "Friuli 1972", chips Same-Day y Flota Propia.
- **Alt (es):** Diorama 3D isométrico de Mar del Plata con ruta amarilla y moto de reparto en camino.
- **Archivo:** `public/img/heroes/home.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py home`

---

### VIS-EXPRESS-01

- **Dónde:** `/servicios/envios-express` (`src/components/servicios/express/ExpressHero.tsx`) — Card Media
- **Superficie destino:** Azul (`#0950F6`)
- **Decisión:** Regenerar sin texto
- **Por qué:** Reemplaza `envios_express.webp` (que tiene "ENVÍOS EN EL DÍA" horneado) por un render 3D puro con cronómetro y tramo directo sin paradas.
- **Se basa en:** Señal 6 (Garantía de rango 3hs Express) · Tendencia 2 (UI overlay).
- **Concepto:** Scooter directo hacia una casa residencial con cronómetro 3D flotante.
- **Composición:** Vista isométrica 4:3, sujeto centrado en la franja media con espacio superior para el cronómetro.
- **Prompt:**
  ```text
  [Subject] A long rounded-square isometric diorama tile with a thick bevelled bright-blue edge carrying one straight street between low matte blue city blocks with pale-blue rooftops. A chunky toy-like delivery scooter in bright blue #0950F6 with a large rounded signal-yellow #FFEC01 top box, ridden by a stylized faceless vinyl-toy courier in a blue jacket and pale-blue helmet, leans forward at speed along a thick glossy route tube in signal yellow with a tight emissive core that runs directly from a small faceted blue origin pin to the door of a small pale-blue house, with no other stops. Three short yellow capsule-shaped speed trails float behind the scooter. Above the house hovers a chunky 3D stopwatch in pale blue with a yellow quarter-segment inset on its face.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "TELEMETRÍA EN VIVO · PRIORIDAD 1", "Ventana de entrega 60-90 min".
- **Alt (es):** Scooter 3D en tramo directo express con cronómetro de entrega.
- **Archivo:** `public/img/heroes/servicio-express.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py servicio-express`

---

### VIS-LOWCOST-01

- **Dónde:** `/servicios/envios-lowcost` (`src/components/servicios/lowcost/LowCostHero.tsx`) — Card Media
- **Superficie destino:** Blanco (`#FFFFFF`)
- **Decisión:** Regenerar sin texto
- **Por qué:** Reemplaza `planifica_transparent.webp` (con texto horneado) por un render 3D de consolidación urbana sobre superficie clara.
- **Se basa en:** Señal 6 (Corte 13:00 hs / Entrega antes de 19:00 hs) · Tendencia 1.
- **Concepto:** Plataforma de consolidación con pirámide de paquetes y circuito cerrado de reparto.
- **Composición:** Isometría horizontal 4:3 en tarjeta clara.
- **Prompt:**
  ```text
  [Subject] A rounded-square isometric diorama tile with a thick bevelled bright-blue #0950F6 edge. In one corner, a small loading platform holds a neat pyramid of rounded cardboard-shaped parcels in pale blue #E6EEFE with a signal-yellow #FFEC01 tape band, and a chunky toy-like delivery scooter in bright blue with an oversized rounded signal-yellow top box packed with several parcels waits beside it. From the platform, a thick glossy route tube in signal yellow with a tight emissive core forms one closed rounded loop around the diorama, passing five small pale-blue houses.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: bright blue #0950F6 for main volumes, blue #3570F8 and sky blue #628FF9 for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. No large white volumes, no navy, no black.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "CIRCUITOS CONSOLIDADOS MDQ", "Corte 13:00 hs · Entregas hasta 19:00 hs".
- **Alt (es):** Plataforma 3D de consolidación con circuito cerrado de paquetes.
- **Archivo:** `public/img/heroes/servicio-lowcost.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py servicio-lowcost`

---

### VIS-FLEX-01

- **Dónde:** `/servicios/enviosflex` (`src/components/servicios/flex/FlexHero.tsx`) — Card Media
- **Superficie destino:** Blanco (`#FFFFFF`)
- **Decisión:** Regenerar sin texto
- **Por qué:** Sustituye `envios_flex.webp` (con texto horneado) por el taller e-commerce con escaneo QR y medalla de reputación.
- **Se basa en:** Señal 1 (Cuidado de reputación Flex) · Tendencia 1.
- **Concepto:** Taller seller con haz de escaneo QR amarillo, scooter listo y medalla de reputación.
- **Composición:** Isometría 4:3, libre en bordes.
- **Prompt:**
  ```text
  [Subject] A rounded-square isometric diorama tile with a thick bevelled bright-blue #0950F6 edge shaped as a small online seller's workshop: a blue counter holding three rounded cardboard-shaped parcels in pale blue #E6EEFE with a signal-yellow #FFEC01 tape band, each with an embossed square QR-like block pattern on top. A large chunky smartphone in bright blue floats tilted above the counter, casting a thin signal-yellow emissive scan plane onto one parcel. At the workshop door, a chunky toy-like delivery scooter in bright blue with an open rounded signal-yellow top box waits. Floating at the upper right, a chunky 3D reputation medal: a pale-blue disc with a yellow bevelled rim, an embossed check mark and two short blue ribbon tails.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: bright blue #0950F6 for main volumes, blue #3570F8 and sky blue #628FF9 for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. No large white volumes, no navy, no black.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of Mercado Libre or other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "INTEGRACIÓN FLEX · SLA 100%", "Corte 15:00 hs · Entregas hasta 20:00 hs".
- **Alt (es):** Taller de vendedor e-commerce con escaneo QR y medalla de reputación 3D.
- **Archivo:** `public/img/heroes/servicio-flex.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py servicio-flex`

---

### VIS-EMPRENDEDORES-01

- **Dónde:** `/servicios/deposito-fulfillment` (`src/components/servicios/emprendedores/EmprendedoresHero.tsx`)
- **Superficie destino:** Blanco (`#FFFFFF`)
- **Decisión:** Regenerar sin texto
- **Por qué:** Muestra el flujo completo de micro-hub 3PL (Stock -> Picking QR -> Empaque -> Despacho).
- **Se basa en:** Señal 5 (Emprendedores e-commerce 3PL) · Tendencia 6 (Dollhouse view).
- **Concepto:** Corte en vista dollhouse de la sede Friuli 1972 organizada por estaciones.
- **Prompt:**
  ```text
  [Subject] A dollhouse-style cutaway of a compact logistics hub on a rounded-square isometric diorama tile with a thick bevelled bright-blue #0950F6 edge, read left to right: blue shelving with neatly stored rounded cardboard-shaped parcels in pale blue with a signal-yellow tape band; a stylized faceless vinyl-toy worker in a blue jacket scanning a parcel with a chunky handheld scanner; a packing table with a half-closed parcel and a yellow tape roll; an open rolling door where a chunky toy-like delivery scooter in bright blue with a large rounded signal-yellow top box is being loaded.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: bright blue #0950F6 for main volumes, blue #3570F8 and sky blue #628FF9 for side faces and the diorama edge, pale blue #E6EEFE for top faces, signal yellow #FFEC01 as the single accent covering at most 15% of the image. No large white volumes, no navy, no black.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks of other companies, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "HUB LOGÍSTICO FRIULI 1972 · 3PL ACTIVO", "Opción DropOff -20% · Same-Day desde stock".
- **Alt (es):** Micro-hub de almacenamiento y preparación de pedidos e-commerce 3D.
- **Archivo:** `public/img/heroes/servicio-emprendedores.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py servicio-emprendedores`

---

### VIS-COTIZAR-EXPRESS-01

- **Dónde:** `/cotizar/express` (`src/components/cotizar/express/CotizadorExpressHero.tsx`)
- **Superficie destino:** Azul (`#0950F6`)
- **Decisión:** Imagen nueva para cabecera de tarjeta UI
- **Por qué:** Complementa el formulario interactivo de distancia con un diorama de medición geométrica.
- **Se basa en:** Señal 7 (Cotización transparente) · Tendencia 1.
- **Concepto:** Calibre de distancia punto a punto sobre diorama urbano marplatense.
- **Prompt:**
  ```text
  [Subject] A rounded-square isometric diorama tile with a thick bevelled bright-blue edge: low matte blue city blocks of varied heights with pale-blue rooftops and narrow streets between them. Two faceted chunky map pins stand on it: a smaller pale-blue origin pin and a larger bright-blue destination pin with a signal-yellow bevelled rim. A thick glossy route tube in signal yellow with a tight emissive core follows the streets between them, and a tiny chunky delivery scooter sits on the route. Floating just above the route, a chunky pale-blue 3D measuring bracket arcs from pin to pin with evenly spaced embossed blank tick marks.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, prices, currency symbols, captions, logos, watermarks, brand marks, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "CÁLCULO AUTOMÁTICO · EXPRESS MAPS", Tarifas oficiales desde `pricing.ts`.
- **Alt (es):** Diorama 3D con arco de medición de distancia entre dos puntos de entrega.
- **Archivo:** `public/img/heroes/cotizar-express.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py cotizar-express`

---

### VIS-COTIZAR-LOWCOST-01

- **Dónde:** `/cotizar/lowcost` (`src/components/cotizar/lowcost/CotizadorLowCostHero.tsx`)
- **Superficie destino:** Azul (`#0950F6`)
- **Decisión:** Imagen nueva para cabecera de tarjeta UI
- **Por me:** Complementa la matriz multidestino con un hub emisor desplegando múltiples rutas.
- **Se basa en:** Señal 6 (Entregas programadas en lote) · Tendencia 1.
- **Concepto:** Hub central desplegando 5 rutas hacia 5 destinos con manifiesto 3D flotante.
- **Prompt:**
  ```text
  [Subject] A rounded-square isometric diorama tile with a thick bevelled bright-blue edge: low matte blue city blocks with pale-blue rooftops. At one corner, a small origin platform with a stack of rounded cardboard-shaped parcels in pale blue with a signal-yellow tape band. From it, five thinner glossy route tubes in signal yellow with a tight emissive core branch across the streets to five small faceted pale-blue map pins spread over the diorama. Floating beside the tile, a chunky 3D clipboard panel in bright blue holding five embossed pale-blue bar rows.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, prices, currency symbols, captions, logos, watermarks, brand marks, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "CÁLCULO AUTOMÁTICO · LOWCOST BATCH", Tarifas por tramo desde `pricing.ts`.
- **Alt (es):** Hub 3D desplegando múltiples rutas de entrega simultánea.
- **Archivo:** `public/img/heroes/cotizar-lowcost.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py cotizar-lowcost`

---

### VIS-NOSOTROS-01

- **Dónde:** `/nosotros/sobre-nosotros` (`src/components/nosotros/sobre-nosotros/AboutHero.tsx`)
- **Superficie destino:** Azul (`#0950F6`)
- **Decisión:** Imagen nueva para cabecera
- **Por qué:** Muestra la base de operaciones Friuli 1972 con el faro marplatense y la flota propia.
- **Se basa en:** Señal 2 (Arraigo local) · Señal 8 (Empresa formal con flota propia).
- **Concepto:** Sede Friuli 1972 con faro costero azul/blanco y 3 couriers estilizados.
- **Prompt:**
  ```text
  [Subject] A rounded-square isometric diorama tile with a thick bevelled bright-blue edge, one side ending in a strip of stylized glossy blue sea with soft rounded waves. On the coast corner stands a chunky blue-and-white striped lighthouse with a yellow lantern top. In the center, the simple facade of a small neighborhood logistics office with a half-open rolling door, and in front of it three chunky toy-like delivery scooters in bright blue with large rounded signal-yellow top boxes parked in a neat row, each with a stylized faceless vinyl-toy courier in a blue jacket and pale-blue helmet standing proudly beside it.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "SEDE CENTRAL FRIULI 1972 · CHAUVÍN", "+15 AÑOS DE TRAYECTORIA EN MDQ".
- **Alt (es):** Sede central Friuli 1972 con faro costero y flota de motos propias.
- **Archivo:** `public/img/heroes/sobre-nosotros.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py sobre-nosotros`

---

### VIS-FAQ-01

- **Dónde:** `/nosotros/preguntas-frecuentes` (`src/components/nosotros/preguntas-frecuentes/FaqHero.tsx`)
- **Superficie destino:** Azul (`#0950F6`)
- **Decisión:** Regenerar sin texto
- **Por qué:** Sustituye `dudas_transparent.webp` por la secuencia 3D de duda a respuesta confirmada.
- **Se basa en:** Señal 3 (Trato claro y respuestas directas) · Tendencia 1.
- **Concepto:** Signo de pregunta 3D enlazado a paquete abierto del que sale un check mark.
- **Prompt:**
  ```text
  [Subject] A small round isometric diorama pad with a thick bevelled bright-blue edge. On the left, a large glossy chunky 3D question mark in pale blue floats above the pad. On the right, an open rounded cardboard-shaped parcel in pale blue with a signal-yellow tape band, from which a large chunky signal-yellow 3D check mark rises. A thick glossy route tube in signal yellow with a tight emissive core arcs from the question mark into the parcel. On the pad's front edge, a chunky toy-like delivery scooter in bright blue with a rounded signal-yellow top box sits ready.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, captions, logos, watermarks, brand marks, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "RESPUESTAS RÁPIDAS", "Atención humana directa vía WhatsApp".
- **Alt (es):** Signo de pregunta 3D resolviendo en paquete con tilde de confirmación.
- **Archivo:** `public/img/heroes/preguntas-frecuentes.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py preguntas-frecuentes`

---

### VIS-REDES-01

- **Dónde:** `/nosotros/nuestras-redes` (`src/components/nosotros/nuestras-redes/NetworksHero.tsx`)
- **Superficie destino:** Azul (`#0950F6`)
- **Decisión:** Regenerar sin texto
- **Por qué:** Sustituye `seguinos_transparent.webp` (con texto horneado) por un smartphone 3D proyectando la actividad diaria.
- **Se basa en:** Señal 4 (Comunidad e interacciones reales en redes) · Tendencia 1.
- **Concepto:** Smartphone 3D vertical mostrando miniaturas de reparto, corazones amarillos y avatares.
- **Prompt:**
  ```text
  [Subject] A large chunky smartphone in bright blue standing slightly tilted on a small round isometric diorama pad with a thick bevelled bright-blue edge. Its screen is a pale-blue panel with three stacked embossed post tiles, each holding a tiny 3D miniature: a delivery scooter with a yellow top box, a parcel with a yellow tape band, and a small wave of sea. Popping out of the screen: glossy chunky signal-yellow 3D hearts and rounded pale-blue empty speech bubbles. Around the phone, five small glossy pale-blue avatar spheres orbit on a thin yellow emissive ring.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, captions, logos, Instagram logo, Facebook logo, watermarks, brand marks, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "COMUNIDAD DOSRUEDAS", "+5.000 seguidores en Instagram y Facebook".
- **Alt (es):** Smartphone 3D exhibiendo posteos de la flota y reacciones en redes sociales.
- **Archivo:** `public/img/heroes/nuestras-redes.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py nuestras-redes`

---

### VIS-CONTACTO-01

- **Dónde:** `/contacto` (`src/components/contacto/ContactHero.tsx`)
- **Superficie destino:** Azul (`#0950F6`)
- **Decisión:** Regenerar sin texto
- **Por qué:** Sustituye `escribinos_transparent.webp` (con texto horneado) por la mesa de despacho y atención directa en la oficina.
- **Se basa en:** Señal 3 (Contacto humano inmediato) · Tendencia 1.
- **Concepto:** Puesto de despacho con teléfono, sobre, laptop y coordinadora 3D sin rostro con headset.
- **Prompt:**
  ```text
  [Subject] A rounded-square isometric diorama tile with a thick bevelled bright-blue edge shaped as a friendly dispatch corner of a small neighborhood office: a white desk with a chunky pale-blue desk phone, an open rounded envelope and a laptop with a blank pale-blue screen; a stylized faceless vinyl-toy coordinator in a blue sweater wearing a chunky headset sits at the desk. Floating above the desk in a gentle arc: a glossy white 3D phone handset, a rounded white speech bubble and a faceted map pin with a signal-yellow body.
  [Style] Modern 3D isometric miniature diorama render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights only on hero objects, premium Blender Cycles / Octane product-render look.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes and top faces, light blue #8EAFFB and sky blue #628FF9 for side faces and the diorama edge, signal yellow #FFEC01 as the single accent covering at most 15% of the image. The darkest tone anywhere is bright blue #0950F6, used only in small details. No navy, no black. The object must separate clearly from a bright blue #0950F6 background.
  [Lighting] Soft studio three-point lighting: large cool-white key light from the upper left, gentle fill, thin white rim light; soft ambient occlusion tinted light blue, never black; tight emissive glow only on yellow route elements.
  [Composition] Isometric three-quarter view from 30 degrees above, centered, horizontal 4:3, subject fills about 78% of the width with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
  [Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge, not reflected on and not lighting the subject, for transparent cutout.
  [Negative] text, letters, words, numbers, phone numbers, captions, logos, WhatsApp logo, watermarks, brand marks, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, harsh black shadows, clutter, busy background, cropped subject.
  ```
- **Ratio y tamaño:** 4:3, 1200 px
- **Texto superpuesto (HTML):** "ATENCIÓN DIRECTA Y B2B", "WhatsApp Comercial: +54 223 660-2699".
- **Alt (es):** Puesto de despacho y atención telefónica 3D en la base Friuli 1972.
- **Archivo:** `public/img/heroes/contacto.webp`
- **Cómo generarlo:** `python docs/imagenes/hero-derecha/generate.py contacto`

---

### VIS-AD-FLEX-01 (Anuncio Publicitario)

- **Canal / Formato:** Instagram & Facebook Feed (Ratio 4:5, 1080×1350 px)
- **Objetivo:** Conversión de Sellers Mercado Libre Flex en Mar del Plata.
- **Superficie / Fondo:** Fondo sólido azul `#0950F6`.
- **Decisión:** Pieza gráfica limpia con zona inferior libre para texto.
- **Se basa en:** Señal 1 (Reputación Flex) · Tendencia 7 (Formato 4:5 con safe zone).
- **Concepto:** Paquete con cinta amarilla y medalla de reputación 3D en primer plano, dejando el 40% inferior azul libre para el titular y CTA.
- **Composición:** Elemento 3D en los 60% superiores, zócalo inferior libre de #0950F6 para superponer texto HTML/Canva.
- **Prompt:**
  ```text
  [Subject] A large rounded pale-blue parcel with a bright signal-yellow #FFEC01 tape band resting on a small isometric diorama tile with a thick bevelled blue edge. Floating right next to it, a chunky 3D reputation medal: a pale-blue disc with a signal-yellow bevelled rim, an embossed check mark and two short blue ribbon tails. A small chunky delivery scooter with a yellow top box sits beside the parcel. The top 60% contains the subject, while the bottom 40% is left completely empty for text overlay.
  [Style] Modern 3D isometric product render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights on hero objects, premium Blender Cycles / Octane render look.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes, light blue #8EAFFB and sky blue #628FF9 for details, signal yellow #FFEC01 as the accent covering at most 15% of the image. The darkest tone is bright blue #0950F6. No navy, no black.
  [Lighting] Soft studio three-point lighting: large cool-white key light from top-left, gentle fill, thin white rim light; no black shadows.
  [Composition] Vertical 4:5 aspect ratio, subject positioned in the top 60% of the canvas, lower 40% completely empty solid background for text placement.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free render.
  [Background] Solid flat uniform background in bright blue #0950F6 filling the entire canvas, no gradient, no texture.
  [Negative] text, letters, words, numbers, captions, logos, Mercado Libre logo, watermarks, brand marks, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, clutter, cropped subject.
  ```
- **Texto superpuesto (Canva/Meta):**
  - Titular: "ENVÍOS FLEX EN MAR DEL PLATA: CUIDÁ TU REPUTACIÓN 100%"
  - Subtexto: "Corte 15:00 hs · Entregas garantizadas antes de las 20:00 hs. Sin mínimo de paquetes."
  - CTA (Botonera): "COTIZÁ TU FLOTA POR WHATSAPP" (Pill `#FFEC01` con texto `#0950F6`).
- **Alt (es):** Anuncio para vendedores Flex con paquete 3D y medalla de reputación.
- **Archivo:** `public/img/redes/ad_flex_mar_del_plata_4x5.webp`
- **Cómo generarlo:** Generación directa en panel `/admin/imagenes` o Canva.

---

### VIS-AD-EXPRESS-01 (Anuncio Publicitario)

- **Canal / Formato:** Instagram / WhatsApp Story (Ratio 9:16, 1080×1920 px)
- **Objetivo:** Captación urgente de envíos Same-Day / Tramites express.
- **Superficie / Fondo:** Fondo sólido azul `#0950F6`.
- **Decisión:** Pieza vertical limpia con zonas seguras superior e inferior.
- **Se basa en:** Señal 6 (Entrega 60-90m) · Tendencia 7 (Formato 9:16 vertical).
- **Concepto:** Cronómetro 3D flotante con moto en velocidad sobre canaleta amarilla, dejando 250px arriba y 340px abajo libres.
- **Composición:** Isometría vertical centrada en los tercios medios.
- **Prompt:**
  ```text
  [Subject] A chunky 3D stopwatch in pale blue #E6EEFE with a bright signal-yellow #FFEC01 quarter-segment inset on its face, hovering above a sleek toy-like delivery scooter in bright blue with a yellow top box. A thick glossy route tube in signal yellow with a tight emissive core runs vertically beneath the scooter with three capsule speed trails. Subject occupies only the central 50% vertical space of the canvas.
  [Style] Modern 3D product render, soft matte clay and satin plastic materials, rounded bevelled edges, chunky simplified geometry, subtle glossy highlights.
  [Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for main volumes, sky blue #628FF9 for side details, signal yellow #FFEC01 for accents. Darkest tone is bright blue #0950F6. No navy, no black.
  [Lighting] Soft studio three-point lighting: large cool-white key light, gentle fill, thin white rim light; no black shadows.
  [Composition] Vertical 9:16 aspect ratio, subject strictly centered in the middle third of the frame, leaving top 250px and bottom 340px completely clear solid background for UI overlays.
  [Quality] 8k ultra-detailed, crisp clean edges, noise-free.
  [Background] Solid flat uniform background in bright blue #0950F6, no gradient, no texture.
  [Negative] text, letters, words, numbers, clock numerals, captions, logos, watermarks, brand marks, realistic human faces, photographs mixed with 3D, dark navy, black, grey, green, purple, neon gradients, clutter, cropped subject.
  ```
- **Texto superpuesto (Canva/Instagram Story):**
  - Arriba: "ENVIÁ EN EL DÍA DENTRO DE MAR DEL PLATA"
  - Centro (sobre el render): "RANGO DE 60 A 90 MINUTOS"
  - Abajo (CTA): "PEDÍ TU MOTO AHORA POR WHATSAPP"
- **Alt (es):** Historia vertical con cronómetro 3D y moto express.
- **Archivo:** `public/img/redes/ad_express_story_9x16.webp`
- **Cómo generarlo:** Generación en panel `/admin/imagenes` o Canva.

---

## 8. Pendientes ("A VERIFICAR") y Canales sin Acceso

1. **Datos o afirmaciones a verificar:**
   - Cifra de "+5.000 seguidores en redes": Mantener como copy estimativo pero verificar métrica real en cuentas oficiales antes de campañas pagas ("A VERIFICAR").
   - Límite de peso por bulto (15 kg en `promises.ts` vs 5 kg en respuestas del dueño): SSoT en código es `MAX_WEIGHT_KG = 15`.

2. **Canales con relevamiento indirecto:**
   - **Instagram / Facebook Business Suite (@enviosdosruedas):** Se requiere solicitar export de estadísticas oficiales del último trimestre al dueño para ajustar los test A/B del backlog publicitario.
