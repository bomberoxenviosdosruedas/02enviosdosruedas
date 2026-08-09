# Prompts para Imagen Inline ExpressHero.tsx

**Dimensiones objetivo:** 80×48px (desktop) / 64×40px (mobile)  
**Ubicación:** Inline en `<h1>` entre "ENVÍOS" y "EXPRESS - ENTREGA INMEDIATA"  
**Fondo del componente:** `bg-brand-blue` (`#0369A1`) + `border-b-4 border-brand-yellow`  
**Paleta estricta:** Egyptian Blue `#0636A5` · Sunbeam Yellow `#FFEC01` · White `#FFFFFF` · Package Brown `#8B4513`  
**Render mínimo:** 512×307px (10.6× downscaling) → PNG con alpha transparente  

---

## 🎯 CONFIGURACIÓN COMÚN (aplicar a los 3 prompts)

```
--ar 5:3 --q 2 --s 250 --c 5 --no background, floor, shadow, text, watermark, blurry, soft focus, noise, grain, bokeh, depth of field blur
```

**Modelo recomendado:** `gemini-3-pro-image-preview` (4K) o `gemini-2.5-flash-image`  
**Temperatura:** 0.3 (baja = fiel al prompt)  
**Negative prompt universal:** `background, floor, ground, shadow, text, letters, numbers, watermark, signature, logo text, blurry, out of focus, soft focus, motion blur, noise, film grain, chromatic aberration, vignette, border, frame, extra limbs, distorted anatomy, bad proportions`

---

## 🅰️ VARIANTE A — "COMMERCIAL HERO" (Confianza · Premium · Recomendada)

> **Mejor para:** Transmitir fiabilidad, calidad de servicio, marca establecida

```
Cinematic 3D character render, half-body portrait of friendly male delivery courier, horizontal capsule composition (5:3). Subject perfectly centered, isolated on pure transparent background.

APPAREL — EXACT BRAND COLORS:
• Polo shirt: Egyptian Blue (#0636A5), premium piqué cotton texture, subtle ribbed collar detail, top button fastened
• Collar & cap piping: Sunbeam Yellow (#FFEC01), high-gloss patent finish, catches specular highlights
• Baseball cap: structured 6-panel Egyptian Blue (#0636A5), curved brim with yellow piping, embroidered ventilation eyelets
• Logo on left chest: white embossed circle (12mm diameter), subtle debossed brand mark, catchlight on upper edge

PHYSICALITY — MAR DEL PLATA LOCAL:
• Young adult male, 25-30, warm Latin American features, olive skin tone
• Genuine Duchenne smile: crow's feet at eyes, upper teeth visible, mouth corners raised naturally
• Direct confident eye contact, slight 5° head tilt toward camera = approachable authority
• Holding small kraft cardboard box (15×10×5cm) under left arm, right hand relaxed on box corner
• Natural posture: shoulders relaxed, weight slightly on right leg

LIGHTING — APPLE PRODUCT HERO STYLE:
• Key: large softbox 45° camera-right, 5600K, feathered edge
• Fill: 30° camera-left, 2:1 ratio, large bounce card
• Rim: behind subject, Egyptian Blue gel (#0636A5), thin highlight on cap brim, shoulder, collar piping
• Global: clean white studio HDRI, zero environment reflections on subject
• Exposure: perfectly exposed skin tones, zero blown highlights, zero crushed blacks

RENDER SETTINGS (critical for 48px downscaling):
• Subsurface scattering on skin (SSS radius 1.2mm) — NO pore detail, NO stubble texture
• Sharp focus plane: eyes → mouth → logo on chest (f/8 equivalent)
• Specular highlights: crisp on yellow piping, cap brim, logo edge, box corners
• Color separation: minimum 4.5:1 contrast against #0369A1 background
• Output: 512×307px minimum, 32-bit EXR → sRGB PNG straight alpha
• Palette strictly clamped: #0636A5, #FFEC01, #FFFFFF, #8B4513

STYLE REFERENCE: Pixar "Soul" warmth + Apple iPhone 15 product photography discipline + Blender Studio "Sprite Fright" material fidelity
```

---

## 🅱️ VARIANTE B — "ACTION DYNAMIC" (Velocidad · Urgencia · Express)

> **Mejor para:** Resaltar "EXPRESS", "ENTREGA INMEDIATA", sensación de movimiento

```
Cinematic 3D action character render, half-body portrait of dynamic male delivery courier, horizontal capsule composition (5:3). Subject centered but torso rotated 15° toward camera (counter-pose), weight on back leg = potential energy. Pure transparent background.

APPAREL — EXACT BRAND COLORS (high-performance variants):
• Polo: Egyptian Blue (#0636A5), technical moisture-wicking fabric, subtle hexagonal micro-pattern catches light
• Collar & piping: Sunbeam Yellow (#FFEC01), fluorescent edge glow (emissive 0.15) for speed perception
• Cap: aerodynamic low-profile Egyptian Blue, magnetic brim, yellow reflective strip on rear
• Logo: white retro-reflective circle on chest, glints when head turns

PHYSICALITY — IN MOTION:
• Male 25-30, athletic build, Latin American features
• Expression: focused determination, slight smirk (confidence), eyes tracking toward destination (slightly off-camera right)
• Box: secured high under left arm with forearm, right arm extended back for balance (running pose frozen)
• Hair: slight wind displacement under cap = motion implied
• Clothing: subtle fabric tension wrinkles at shoulder/elbow = real physics

LIGHTING — HIGH-CONTRAST DRAMA:
• Key: hard Fresnel 30° camera-right, 5600K, sharp falloff = dramatic modeling
• Rim: double rim — Egyptian Blue gel (left) + Sunbeam Yellow gel (right), 1.5× key intensity
• Fill: minimal (0.5:1), only to keep eye detail
• Practical: subtle motion blur on box corners & fingertips (0.5px at 512px) — removable in post
• Exposure: pushed highlights on yellow accents, deep shadows in blue fabric folds

RENDER SETTINGS (speed legibility at 48px):
•rozen moment feel: zero motion blur on face/logo, micro-blur only on extremities
• Edge contrast: 5:1 minimum via dual-color rim lights
• Silhouette: clean "run cycle" keyframe readable as "fast delivery" in 100ms
• Color pop: yellow emissive piping reads as "energy/speed" even at 40px
• Output: 512×307px, straight alpha, palette clamped

STYLE REFERENCE: Nike "Just Do It" campaign hero frames + Spider-Man: Into the Spider-Verse rim-light language + Red Bull athlete photography
```

---

## 🅲 VARIANTE C — "FRIENDLY NEIGHBOR" (Cercanía · Local · Humano)

> **Mejor para:** Conexión emocional, "Mar del Plata", servicio personalizado

```
Cinematic 3D lifestyle character render, half-body portrait of approachable male delivery courier, horizontal capsule composition (5:3). Subject centered, relaxed open posture, pure transparent background.

APPAREL — EXACT BRAND COLORS (worn-in comfort):
• Polo: Egyptian Blue (#0636A5), soft washed cotton, subtle fade at collar/seams = lived-in
• Collar: Sunbeam Yellow (#FFEC01), soft ribbed knit (not glossy), slight roll
• Cap: unstructured "dad cap" Egyptian Blue, soft crown, pre-curved brim, yellow contrast stitching
• Logo: tonal embroidery on chest (white thread on blue), slightly raised, catches light softly

PHYSICALITY — YOUR NEIGHBOR'S SON:
• Male 28-35, warm Latino features, light stubble (5 o'clock shadow suggestion only)
• Expression: relaxed genuine smile, head tilted 8°, eyebrows slightly raised = "¡Buen día!"
• Eyes: warm brown, direct but soft contact, subtle crinkle at corners
• Box: resting on hip, both hands casually on top (not clutching)
• Posture: weight shifted, hip popped, entirely at ease

LIGHTING — GOLDEN HOUR STUDIO:
• Key: large octabox 40° camera-right, 4200K (warm), very soft wrap
• Fill: 35° camera-left, 1:1.5, warm bounce
• Rim: none (or barely perceptible warm gold at 0.2×)
• Practical: subtle lens flare / bloom on yellow collar stitching = organic warmth
• Global: subtle HDRI "late afternoon studio" — tiny warm speculars in eyes

RENDER SETTINGS (human connection at 48px):
• Skin: SSS + subtle freckle map (reads as "real person" not "CGI")
• Focus: eyes + smile only, ears/shoulders slightly soft = portrait depth
• Fabric: visible weave texture at thread level (downscales to natural softness)
• Color harmony: unified warm bias, yellow collar = visual anchor
• Output: 512×307px, straight alpha, palette clamped

STYLE REFERENCE: Airbnb "Belong Anywhere" host photography + Google "Year in Search" human moments + Pixar "Luca" golden Mediterranean light
```

---

## ✅ CHECKLIST PRE-VISUALIZACIÓN (antes de aprobar)

| Check | A | B | C |
|-------|---|---|---|
| Fondo 100% transparente (alpha=0) | ☐ | ☐ | ☐ |
| Logo en pecho legible a 48px | ☐ | ☐ | ☐ |
| Amarillo #FFEC01 "pops" contra azul #0369A1 | ☐ | ☐ | ☐ |
| Cara: ojos y boca nítidos | ☐ | ☐ | ☐ |
| Caja marrón distinta de piel/ropa | ☐ | ☐ | ☐ |
| Silueta limpia (sin halos, bordes sucios) | ☐ | ☐ | ☐ |
| Relación 5:3 exacta (512×307 mínimo) | ☐ | ☐ | ☐ |
| Solo 4 colores en histogram | ☐ | ☐ | ☐ |

---

## 📁 NOMBRES DE ARCHIVO SUGERIDOS

```
/public/express-hero-inline-A-commercial.png
/public/express-hero-inline-B-dynamic.png
/public/express-hero-inline-C-friendly.png
```

**En el componente:** Cambiar `src="/express-hero-inline.png"` por el elegido tras test A/B.