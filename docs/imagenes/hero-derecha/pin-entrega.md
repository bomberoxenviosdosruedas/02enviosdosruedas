# Brief + Prompts — Elemento universal "Pin de Entrega" (columna derecha de cualquier hero) · 2026

Adaptación de marca de `docs/imagenes/hero-derecha/referencias/elemento_hero.png` (pin de mapa rojo brillante con una mano que entrega cajas a través del hueco) para usar en la columna derecha (`lg:col-span-5`) de **cualquier hero** del sitio. Contrato visual: `DESIGN.md` §9.1 / §10.20.

**Generar:** `python docs/imagenes/hero-derecha/generate.py --prompts docs/imagenes/hero-derecha/pin-entrega.md [slug ...]`

---

## 1. Qué se conserva y qué se adapta de la referencia

| Elemento de la referencia | Decisión | Motivo |
|---|---|---|
| Pin de mapa grande con hueco, girado ¾ | **Se conserva** (composición y pose) | Es la idea: "tu envío sale del punto exacto" |
| Pin rojo laqueado | → **azul brillante** con bisel **amarillo** en el borde del hueco (blanco en fondo azul brillante) | Ley de 3 colores; amarillo como acento ≤ 15% (§9.1) |
| Mano y antebrazo con piel y camisa beige | → **guante de courier** con puño amarillo y manga del uniforme | Sin piel realista ni persona (§9.1); paleta pura; recorte chroma sin tonos piel |
| Cajas de cartón marrón | → **paquetes azul claro** con banda de cinta amarilla | "No brown cardboard" del Kit 3D |
| Íconos "frágil / este lado arriba" | → **pictograma de dos ruedas** en relieve (del logo) | Sin símbolos ni texto; motivo de marca |
| Fondo blanco de estudio | → **chroma `#FF00FF`** (también dentro del hueco) | Recorte transparente; el hueco deja ver la tarjeta |
| Fotografía de producto | → **render 3D premium** (variante foto opcional, §4) | Carril visual vigente del Hero Card Media |

**Imágenes de referencia** (se envían a Gemini en este orden):
1. `docs/imagenes/hero-derecha/referencias/elemento_hero.png` → solo composición y pose.
2. `docs/imagenes/hero-derecha/referencias/logo-master-1024.png` → solo el pictograma de dos ruedas unidas.

## 2. Qué versión usar en cada hero

| Superficie | Slug | Heroes | Slot |
|---|---|---|---|
| `dark` (tarjeta `brand-blue-900` / `950`) | `pin-entrega-dark` | Home, Servicio Express, Cotizar Express, Cotizar LowCost, Sobre Nosotros, FAQ, Nuestras Redes | card media `aspect-square max-w-[340px]` |
| `light` (tarjeta `bg-white`) | `pin-entrega-light` | Servicio LowCost, Servicio Flex, Plan Emprendedores | card media `aspect-square max-w-[340px]` |
| `bright` (sección `brand-blue-500` sin tarjeta) | `pin-entrega-bright` | Contacto (sobre la lista de canales) | standalone `aspect-square max-w-[360px]` |
| `dark` sin tarjeta | `pin-entrega-columna` | Cualquier hero donde el pin **reemplace** la tarjeta (legales/internas o rediseño) | standalone `aspect-[4/5] max-w-[420px]` |

### Personalización por página (opcional)

Para una versión específica de página, reemplazá **solo** la oración que empieza con `The gloved hand holds…` por la de esta tabla y guardá el bloque con un slug nuevo (`pin-entrega-dark-express`, etc.). Todo lo demás queda igual.

| Página | Oración de reemplazo |
|---|---|
| Home / Sobre Nosotros | *(default)* `The gloved hand holds two stacked rounded parcels…` |
| Servicio Express | `The gloved hand holds one single compact rounded parcel toward the viewer, with a small pale-blue clock-face tag hanging from its tape, one quarter of the tag filled in signal yellow and no numerals.` |
| Servicio LowCost / Cotizar LowCost | `The gloved hand holds a neat stack of three rounded parcels of decreasing size, bound together by one signal-yellow strap.` |
| Servicio Flex | `The gloved hand holds one rounded parcel whose top face carries an embossed square QR-like block pattern and a small signal-yellow check badge.` |
| Plan Emprendedores | `The gloved hand holds one open rounded parcel showing a neatly folded pale-blue product inside, with an embossed square QR-like block pattern on its side.` |
| Cotizar Express | `The gloved hand holds one rounded parcel with a thin glossy signal-yellow route ribbon looping out of it and ending in a tiny faceted pin.` |
| Preguntas Frecuentes | `The gloved hand holds one open rounded parcel from which a chunky signal-yellow check mark rises.` |
| Nuestras Redes | `The gloved hand holds one rounded parcel with a small glossy signal-yellow 3D heart resting on top.` |
| Contacto | `The gloved hand holds one rounded parcel with a closed pale-blue envelope resting on top of it.` |

---

## 3. Prompts

### pin-entrega-dark
- **Uso:** card media en tarjetas oscuras (7 heroes)
- **Referencias:** `docs/imagenes/hero-derecha/referencias/elemento_hero.png` · `docs/imagenes/hero-derecha/referencias/logo-master-1024.png`
- **Aspect ratio:** `1:1`
- **Superficie:** `dark`

```text
[Subject] Recreate the concept and pose of the first reference image in the DosRuedas brand: a large glossy 3D map pin standing upright and slightly turned to the right, with a round hole through its head, and a courier's gloved hand reaching out through the hole from behind the pin toward the viewer. The pin is glossy bright blue plastic with sky-blue and white highlights, a thick signal-yellow bevel lining the inner edge of the hole, and a clean pointed tip. The glove is smooth pale blue with a signal-yellow cuff, and the forearm disappears into the hole in a bright blue uniform sleeve. The gloved hand holds two stacked rounded parcels in pale blue with a signal-yellow tape band, the top one slightly smaller, each with a small embossed twin-wheel pictogram taken from the second reference image instead of any printed symbol. Use only the composition of the first reference image and only the twin-wheel pictogram of the second; ignore their colors, materials, text and backgrounds.
[Style] Modern premium 3D product render, glossy satin plastic pin, soft matte parcels and glove, rounded bevelled edges, simplified clean geometry, Blender Cycles / Octane look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for the pin and sleeve, pale blue #E6EEFE and white #FFFFFF for the glove, parcels and highlights, egyptian blue #0636A5 for shaded sides, signal yellow #FFEC01 only on the hole bevel, cuff and tape covering at most 15% of the image. The whole object must read light and bright against a near-black navy card; navy #00277C only in the deepest crevices.
[Lighting] Soft studio three-point lighting: a large cool-white key light from the upper left drawing one long glossy highlight along the pin's curve, gentle fill, and a thin white rim light separating the pin from a dark card; soft ambient occlusion where the arm enters the hole; no cast shadow outside the object.
[Composition] Three-quarter view at eye level, pin slightly right of center with the parcels extending to the left so the whole group is balanced in the frame. Square 1:1, group fills about 80% of the height with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge and visible through the pin's hole, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no fragile or handling symbols, no brown cardboard, no red, no bare skin, no visible person, no face, no grey, no black, no chrome, no magenta, pink or purple tint on the subject, no glow, no shadows, no floor, no white background, no depth-of-field blur, no motion blur, nothing cropped.
```

---

### pin-entrega-light
- **Uso:** card media en tarjetas blancas (LowCost, Flex, Emprendedores)
- **Referencias:** `docs/imagenes/hero-derecha/referencias/elemento_hero.png` · `docs/imagenes/hero-derecha/referencias/logo-master-1024.png`
- **Aspect ratio:** `1:1`
- **Superficie:** `light`

```text
[Subject] Recreate the concept and pose of the first reference image in the DosRuedas brand: a large glossy 3D map pin standing upright and slightly turned to the right, with a round hole through its head, and a courier's gloved hand reaching out through the hole from behind the pin toward the viewer. The pin is glossy bright blue plastic with egyptian-blue shaded sides, a thick signal-yellow bevel lining the inner edge of the hole, and a clean pointed tip. The glove is smooth navy blue with a signal-yellow cuff, and the forearm disappears into the hole in an egyptian-blue uniform sleeve. The gloved hand holds two stacked rounded parcels in pale blue with a signal-yellow tape band and navy-blue edges, the top one slightly smaller, each with a small embossed twin-wheel pictogram taken from the second reference image instead of any printed symbol. Use only the composition of the first reference image and only the twin-wheel pictogram of the second; ignore their colors, materials, text and backgrounds.
[Style] Modern premium 3D product render, glossy satin plastic pin, soft matte parcels and glove, rounded bevelled edges, simplified clean geometry, Blender Cycles / Octane look.
[Palette] Base material colors ONLY: bright blue #0950F6 and egyptian blue #0636A5 for the pin and sleeve, navy #00277C for the glove and the darkest sides, pale blue #E6EEFE for the parcels and highlights, signal yellow #FFEC01 only on the hole bevel, cuff and tape covering at most 15% of the image. No large white areas; the object must read strong against a white card.
[Lighting] Soft studio three-point lighting: a large cool-white key light from the upper left drawing one long glossy highlight along the pin's curve, gentle fill, and a subtle rim light; soft ambient occlusion where the arm enters the hole; no cast shadow outside the object.
[Composition] Three-quarter view at eye level, pin slightly right of center with the parcels extending to the left so the whole group is balanced in the frame. Square 1:1, group fills about 80% of the height with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 340px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge and visible through the pin's hole, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no fragile or handling symbols, no brown cardboard, no red, no bare skin, no visible person, no face, no grey, no black, no chrome, no magenta, pink or purple tint on the subject, no glow, no shadows, no floor, no white background, no depth-of-field blur, no motion blur, nothing cropped.
```

---

### pin-entrega-bright
- **Uso:** standalone sobre sección `brand-blue-500` sin tarjeta (Contacto)
- **Referencias:** `docs/imagenes/hero-derecha/referencias/elemento_hero.png` · `docs/imagenes/hero-derecha/referencias/logo-master-1024.png`
- **Aspect ratio:** `1:1`
- **Superficie:** `bright`

```text
[Subject] Recreate the concept and pose of the first reference image in the DosRuedas brand: a large glossy 3D map pin standing upright and slightly turned to the right, with a round hole through its head, and a courier's gloved hand reaching out through the hole from behind the pin toward the viewer. The pin is glossy white plastic with pale-blue shading, a thick signal-yellow bevel lining the inner edge of the hole, and a clean pointed tip. The glove is smooth navy blue with a signal-yellow cuff, and the forearm disappears into the hole in an egyptian-blue uniform sleeve. The gloved hand holds two stacked rounded parcels in pale blue with a signal-yellow tape band and egyptian-blue edges, the top one slightly smaller, each with a small embossed twin-wheel pictogram taken from the second reference image instead of any printed symbol. Use only the composition of the first reference image and only the twin-wheel pictogram of the second; ignore their colors, materials, text and backgrounds.
[Style] Modern premium 3D product render, glossy satin plastic pin, soft matte parcels and glove, rounded bevelled edges, simplified clean geometry, Blender Cycles / Octane look.
[Palette] Base material colors ONLY: white #FFFFFF and pale blue #E6EEFE for the pin and parcels, navy #00277C for the glove, egyptian blue #0636A5 for the sleeve and shaded sides, signal yellow #FFEC01 only on the hole bevel, cuff and tape covering at most 15% of the image. No large bright blue #0950F6 areas; the object must separate clearly from a bright blue background.
[Lighting] Soft studio three-point lighting: a large cool-white key light from the upper left drawing one long glossy highlight along the pin's curve, gentle fill, and a subtle egyptian-blue-tinted rim shadow side for volume; soft ambient occlusion where the arm enters the hole; no cast shadow outside the object.
[Composition] Three-quarter view at eye level, pin slightly right of center with the parcels extending to the left so the whole group is balanced in the frame. Square 1:1, group fills about 80% of the height with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 360px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge and visible through the pin's hole, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no fragile or handling symbols, no brown cardboard, no red, no bare skin, no visible person, no face, no grey, no black, no chrome, no magenta, pink or purple tint on the subject, no glow, no shadows, no floor, no white background, no depth-of-field blur, no motion blur, nothing cropped.
```

---

### pin-entrega-columna
- **Uso:** standalone vertical — el pin ocupa la columna derecha completa en lugar de la tarjeta
- **Referencias:** `docs/imagenes/hero-derecha/referencias/elemento_hero.png` · `docs/imagenes/hero-derecha/referencias/logo-master-1024.png`
- **Aspect ratio:** `4:5`
- **Superficie:** `dark`

```text
[Subject] Recreate the concept and pose of the first reference image in the DosRuedas brand, as a tall hero object: a large glossy 3D map pin standing upright and slightly turned to the right, with a round hole through its head, and a courier's gloved hand reaching out through the hole from behind the pin toward the viewer. The pin is glossy bright blue plastic with sky-blue and white highlights, a thick signal-yellow bevel lining the inner edge of the hole, and a long clean pointed tip. The glove is smooth pale blue with a signal-yellow cuff, and the forearm disappears into the hole in a bright blue uniform sleeve. The gloved hand holds two stacked rounded parcels in pale blue with a signal-yellow tape band, the top one slightly smaller, each with a small embossed twin-wheel pictogram taken from the second reference image instead of any printed symbol. Use only the composition of the first reference image and only the twin-wheel pictogram of the second; ignore their colors, materials, text and backgrounds.
[Style] Modern premium 3D product render, glossy satin plastic pin, soft matte parcels and glove, rounded bevelled edges, simplified clean geometry, Blender Cycles / Octane look.
[Palette] Base material colors ONLY: bright blue #0950F6 and sky blue #628FF9 for the pin and sleeve, pale blue #E6EEFE and white #FFFFFF for the glove, parcels and highlights, egyptian blue #0636A5 for shaded sides, signal yellow #FFEC01 only on the hole bevel, cuff and tape covering at most 15% of the image. The object must read light and bright against a deep navy-to-blue hero background; navy #00277C only in the deepest crevices.
[Lighting] Soft studio three-point lighting: a large cool-white key light from the upper left drawing one long glossy highlight along the pin's curve, gentle fill, and a thin white rim light; soft ambient occlusion where the arm enters the hole; no cast shadow outside the object.
[Composition] Three-quarter view from slightly below eye level to give the pin a monumental feel, pin centered with its tip near the bottom margin and the parcels extending to the left. Vertical 4:5, group fills about 85% of the height with at least 8% empty margin on every side, fully contained, nothing cropped, bold readable silhouette at 420px wide.
[Quality] 8k ultra-detailed, crisp clean edges, noise-free high-end product render.
[Background] Solid flat uniform unlit chroma key magenta #FF00FF filling the entire canvas edge to edge and visible through the pin's hole, not reflected on and not lighting the subject, for transparent cutout.
[Negative] No text, no letters, no numbers, no logos, no fragile or handling symbols, no brown cardboard, no red, no bare skin, no visible person, no face, no grey, no black, no chrome, no magenta, pink or purple tint on the subject, no glow, no shadows, no floor, no white background, no depth-of-field blur, no motion blur, nothing cropped.
```

---

## 4. Variante fotográfica (opcional)

### pin-entrega-foto
- **Uso:** alternativa fiel a la referencia (fotografía de producto). Pendiente de aprobación: el §9.1 define render 3D para Hero Card Media; no mezclar con renders 3D en la misma pantalla. El script la saltea salvo que se pida por slug.
- **Referencias:** `docs/imagenes/hero-derecha/referencias/elemento_hero.png` · `docs/imagenes/hero-derecha/referencias/logo-master-1024.png`
- **Aspect ratio:** `1:1`
- **Superficie:** `dark`

```text
Photorealistic studio product photograph recreating the first reference image in the DosRuedas brand. A large lacquered map pin sculpture in glossy bright blue #0950F6, with a thick signal-yellow #FFEC01 painted bevel around its round hole, stands upright and slightly turned to the right. A courier's hand in a smooth pale-blue #E6EEFE delivery glove with a signal-yellow cuff reaches out through the hole from behind, the forearm in a bright blue uniform sleeve, holding two stacked pale-blue parcels with a signal-yellow tape band, each marked with a small embossed twin-wheel pictogram from the second reference image. Soft three-point studio lighting draws one long specular highlight along the pin's curve and a thin white rim light on its edge. Shot with a 70mm lens at f/11, everything in sharp focus, three-quarter eye-level view, group centered with 8% margin on every side, nothing cropped. Solid flat unlit chroma key magenta #FF00FF background edge to edge, also visible through the hole, not reflected on the subject. No text, no printed symbols, no brown cardboard, no red, no bare skin, no face, no grey, no shadows on the background. Square 1:1 format.
```

---

## 5. Implementación

```tsx
{/* Hero Card Media — Pin de entrega (DESIGN §9.1) */}
<div className="relative w-full aspect-square max-w-[340px] mx-auto drop-shadow-[0_18px_28px_rgba(0,39,124,0.45)]">
  <Image
    src="/img/heroes/pin-entrega-dark.webp"   // -light en tarjetas blancas · -bright en Contacto
    alt=""
    fill
    priority
    sizes="(min-width: 1024px) 340px, 80vw"
    className="object-contain"
  />
</div>
```

- En tarjetas blancas bajar la sombra a `rgba(0,39,124,0.25)`.
- `pin-entrega-columna` reemplaza la tarjeta completa: contenedor `aspect-[4/5] max-w-[420px]`, `alt` descriptivo en voseo (p. ej. `"Paquete entregado desde un pin de ubicación en Mar del Plata"`) porque no hay texto equivalente al lado.
- El hueco del pin queda transparente: se ve la tarjeta o el fondo del hero a través de él. Verificar que no coincida con texto detrás.
- Movimiento opcional solo en standalone: `animate-float-slow`; nada bajo `prefers-reduced-motion`.

## 6. Refinamiento por turnos

| Problema | Instrucción de edición (un turno) |
|---|---|
| El pin sale rojo o naranja (arrastre de la referencia) | `Recolor the pin to glossy bright blue #0950F6 keeping the signal-yellow bevel around the hole; change nothing else.` |
| Mano con piel o manga beige | `Cover the hand with a smooth pale-blue delivery glove with a signal-yellow cuff and make the sleeve bright blue; keep the pose.` |
| Cajas marrones o con íconos de frágil | `Make both parcels pale blue with a signal-yellow tape band and replace every printed symbol with a small embossed twin-wheel pictogram.` |
| El hueco muestra blanco u otro fondo | `Fill the inside of the pin's hole with the same flat magenta #FF00FF background.` |
| Aparece texto o el logo completo | `Remove all text and logos; keep only the small embossed twin-wheel pictogram on the parcels.` |
| Sombra o piso bajo el pin | `Remove the floor and every shadow outside the object; flat magenta background edge to edge.` |

## 7. Checklist de aprobación

- [ ] Se reconoce la idea de la referencia: pin con hueco + mano entregando paquetes
- [ ] Solo azules, blanco y amarillo; nada de rojo, marrón, gris ni piel
- [ ] Amarillo limitado a bisel del hueco, puño y cinta
- [ ] Sin texto, logos ni símbolos de manipulación
- [ ] Hueco transparente tras el recorte, sin halo magenta
- [ ] Silueta legible a 340 px sobre su superficie destino
- [ ] WebP ≤ 150 KB
