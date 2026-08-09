# Prompt Mejorado: 3D Typography "ENVIOS EXPRESS" — Cobalt Canary Design System

---

## 🎯 PROMPT MAESTRO (Listo para copiar/pegar)

### Para Midjourney / DALL-E 3 / Stable Diffusion / Adobe Firefly

```
3D typography render "ENVIOS EXPRESS" in bold geometric sans-serif, all caps, two-line stack. Cobalt Canary design system: Royal Blue (#0C3BA7) letter faces, Clean White (#FFFFFF) heavy bevel/chamfer edges, Sunbeam Yellow (#FFEC01) accent details (inline highlights, corner dots, or underline). Flat matte Constant/Emission shader — zero specularity, zero reflections, roughness 1.0. Orthographic camera, dead-front view, zero perspective distortion. Solid pure black (#000000) background, no ground plane, no shadows, no fog, no ambient occlusion. High padding around text, centered composition. 8K resolution, crisp vector-sharp edges. Color palette STRICTLY limited to: #0C3BA7, #FFFFFF, #FFEC01, #000000. High-energy authoritative aesthetic, sports/industrial boldness, immediate visual impact.
```

**Parámetros Midjourney:**
```
--ar 16:9 --q 2 --s 300 --c 0 --no gradient, reflection, shine, glare, bloom, lens flare, depth of field, blur, noise, grain, texture, perspective, vanishing point, shadow, ground, floor, 3d perspective, realistic lighting, phong, pbr
```

---

## 🅰️ VARIANTE A — "BLOCK INDUSTRIAL" (Máxima legibilidad, peso visual)

```
3D typography "ENVIOS EXPRESS", ultra-bold compressed grotesk (DIN/Helvetica Now/Univers 93 weight), two-line lockup. Letterforms extruded 1.5x cap height. Royal Blue (#0C3BA7) flat faces. Clean White (#FFFFFF) 15% cap-height bevel on all edges — crisp 45° chamfer, uniform width. Sunbeam Yellow (#FFEC01) micro-accent: single pixel-line highlight on top-left bevel edge of each letter. Orthographic projection, zero perspective. Pure black (#000000) void background. Zero lighting falloff — unshaded/emission material. 8K, pixel-perfect edges. Palette: #0C3BA7, #FFFFFF, #FFEC01, #000000 only.
```

---

## 🅱️ VARIANTE B — "SPEED SLANT" (Dinamismo, movimiento hacia adelante)

```
3D typography "ENVIOS EXPRESS", bold italic geometric sans (15° forward slant), two-line stack, slight horizontal compression. Extrusion depth 1.2x cap height with tapered rear (perspective cheat). Royal Blue (#0C3BA7) faces. Clean White (#FFFFFF) sharp 3mm bevel. Sunbeam Yellow (#FFEC01) speed streaks: 3 parallel lines trailing from right edge of "S" and final "S", tapered, same extrusion depth. Orthographic camera, dead-front. Pure black (#000000) background. Flat matte emission shader. 8K. Strict palette: #0C3BA7, #FFFFFF, #FFEC01, #000000.
```

---

## 🅲 VARIANTE C — "STENCIL TACTICAL" (Autoridad, estilo militar/industrial)

```
3D typography "ENVIOS EXPRESS", stencil/gap grotesk (like DIN Stencil or Eurostile), two-line. Heavy 8mm gaps at stroke intersections. Royal Blue (#0C3BA7) faces. Clean White (#FFFFFF) 2mm internal bevel inside gaps only — creates glowing interior edge effect. Sunbeam Yellow (#FFEC01) tactical markers: 4 corner brackets (⌐⌒) at outer bounds of text block, same extrusion. Orthographic, zero perspective. Pure black (#000000) void. Constant shader, no GI, no shadows. 8K. Palette locked: #0C3BA7, #FFFFFF, #FFEC01, #000000.
```

---

## ⚙️ ESPECIFICACIONES TÉCNICAS UNIVERSALES

| Parámetro | Valor | Por qué |
|-----------|-------|---------|
| **Cámara** | Ortográfica / 100mm+ straight-on | Elimina distorsión, look 2D plano |
| **Material** | Constant / Emission / Unshaded | Color 100% plano, sin sombras ni highlights |
| **Roughness** | 1.0 (si PBR) | Mate absoluto |
| **Specular** | 0 | Sin reflejos |
| **Background** | #000000 puro, alpha=0 opcional | Aísla tipografía para compositing |
| **Extrusión** | 1.2x – 1.5x cap height | Peso 3D legible sin perder contorno |
| **Bevel/Chamfer** | 10-15% cap height, 45° | Define aristas en ortográfica |
| **Paleta** | Solo 4 hex codes | Consistencia Cobalt Canary |
| **Resolución** | 4096×2304 mínimo (16:9) | 8K para uso flexible |

---

## 🎨 COBALT CANARY — TOKENS DE COLOR (Copiar a tu 3D software)

```json
{
  "royalBlue":      { "hex": "#0C3BA7", "rgb": [12, 59, 167],   "role": "Letter faces, primary structure" },
  "cleanWhite":     { "hex": "#FFFFFF", "rgb": [255, 255, 255], "role": "Bevels, chamfers, high-contrast edges" },
  "sunbeamYellow":  { "hex": "#FFEC01", "rgb": [255, 236, 1],   "role": "Accent highlights, speed lines, markers" },
  "voidBlack":      { "hex": "#000000", "rgb": [0, 0, 0],       "role": "Background only" }
}
```

**Valores normalizados (0–1) para Blender/C4D/Houdini:**
- Royal Blue: `[0.047, 0.231, 0.655]`
- Clean White: `[1.0, 1.0, 1.0]`
- Sunbeam Yellow: `[1.0, 0.925, 0.004]`
- Void Black: `[0.0, 0.0, 0.0]`

---

## 🔧 SETUP RÁPIDO EN BLENDER (Python snippet)

```python
import bpy

# Limpiar escena
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Crear texto
bpy.ops.object.text_add(location=(0, 0, 0))
txt = bpy.context.object
txt.data.body = "ENVIOS\nEXPRESS"
txt.data.align_x = 'CENTER'
txt.data.align_y = 'CENTER'
txt.data.size = 2.0
txt.data.extrude = 0.15  # ~1.5x cap height
txt.data.offset = 0.01   # bevel depth
txt.data.bevel_depth = 0.025
txt.data.bevel_resolution = 4

# Font bold compressed (cargar tu .ttf)
# txt.data.font = bpy.data.fonts.load("//fonts/HelveticaNowText-Bold.ttf")

# Material Constant (Emission)
mat = bpy.data.materials.new("CobaltCanary")
mat.use_nodes = True
nodes = mat.node_tree.nodes
nodes.clear()
out = nodes.new('ShaderNodeOutputMaterial')
emi = nodes.new('ShaderNodeEmission')
emi.inputs['Strength'].default_value = 1.0
mat.node_tree.links.new(emi.outputs[0], out.inputs[0])

# Asignar color base Royal Blue
emi.inputs[0].default_value = (0.047, 0.231, 0.655, 1.0)
txt.data.materials.append(mat)

# Cámara ortográfica
cam = bpy.data.cameras.new("OrthoCam")
cam.type = 'ORTHO'
cam.ortho_scale = 8.0
cam_obj = bpy.data.objects.new("Camera", cam)
bpy.context.collection.objects.link(cam_obj)
bpy.context.scene.camera = cam_obj
cam_obj.location = (0, 0, 20)
cam_obj.rotation_euler = (0, 0, 0)

# Mundo negro puro
world = bpy.data.worlds.new("VoidWorld")
world.use_nodes = True
wnodes = world.node_tree.nodes
wnodes.clear()
wout = wnodes.new('ShaderNodeOutputWorld')
wbg = wnodes.new('ShaderNodeBackground')
wbg.inputs[0].default_value = (0, 0, 0, 1)
wbg.inputs[1].default_value = 1.0
world.node_tree.links.new(wbg.outputs[0], wout.inputs[0])
bpy.context.scene.world = world

# Render 8K
bpy.context.scene.render.resolution_x = 4096
bpy.context.scene.render.resolution_y = 2304
bpy.context.scene.render.film_transparent = True  # Alpha para compositing
```

---

## ✅ CHECKLIST DE VALIDACIÓN (antes de dar por bueno el render)

| Check | A | B | C |
|-------|---|---|---|
| Solo 4 colores en histograma | ☐ | ☐ | ☐ |
| Fondo #000000 puro (sin ruido) | ☐ | ☐ | ☐ |
| Sin sombras, sin AO, sin gradientes | ☐ | ☐ | ☐ |
| Bordes nítidos (pixel-perfect al 100%) | ☐ | ☐ | ☐ |
| Bevels blancos legibles en ortográfica | ☐ | ☐ | ☐ |
| Amarillo #FFEC01 visible pero no domina | ☐ | ☐ | ☐ |
| "ENVIOS EXPRESS" legible a 100px alto | ☐ | ☐ | ☐ |
| Relación 16:9 exacta | ☐ | ☐ | ☐ |

---

## 📁 NOMENCLATURA ARCHIVOS

```
/renders/3d-typography/
├── envios-express-A-block-industrial_4096x2304.png
├── envios-express-B-speed-slant_4096x2304.png
├── envios-express-C-stencil-tactical_4096x2304.png
└── envios-express-A-block-industrial_4096x2304.exr  (para compositing)
```

---

## 💡 NOTAS DE USO EN TU PROYECTO

En `ExpressHero.tsx`, el título actual usa `<Image>` inline a 48px. Para usar esta tipografía 3D:

1. **Exporta PNG con alpha** (fondo transparente) desde el render
2. **Recorta** solo la tipografía (elimina padding negro excessivo)
3. **Úsala como `<Image src="/typography-envios-express.png" ... />`** en lugar del span de texto
4. **Mantén el CSS actual** (`text-4xl sm:text-5xl lg:text-6xl`) — la imagen escalará
5. **Añade `filter: drop-shadow(0 0 0 transparent)`** si necesitas forzar sin sombra

La tipografía 3D dará **mucho más peso de marca** que el texto CSS, especialmente en hero.