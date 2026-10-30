# Guía Maestra de Ingeniería de Prompts de Imágenes — Envíos DosRuedas

> **Catálogo Oficial de Prompts Fotográficos y Renders 3D para la Carpeta `public/`**  
> *Versión 2.5 · Octubre 2026 · Mar del Plata, Argentina*  
> *Autoridad:* Image Prompt Engineer Specialist & Matías Nicolás Cejas (CEO)  
> *Plataformas Soportadas:* Midjourney v6.1 · Flux.1 [dev/pro] · DALL-E 3 · Stable Diffusion XL

---

## 1. 🎯 Marco Técnico y Reglas Inviolables de Generación

1. **La Ley de Tres Colores en IA:**
   - **Azul Institucional (`#0950F6`):** Volumen principal, carrocería de motos, chaquetas de cadetes e identidad.
   - **Amarillo Señal (`#FFEC01`):** Acento vial restrictivo ($\le 15\%$), baúles traseros (top-box), cintas de embalaje y balizas.
   - **Blanco Puro (`#FFFFFF`) y Azul Bisel (`#E6EEFE`):** Superficies de luz, paquetes y contraste.
   - 🚫 **Veto:** Prohibido renderizar negro puro (`#000000`), escalas de grises oscuras, verde genérico o azul noche oscuro.
2. **Cero Texto ni Logos Horneados (Baked Text):**
   - Ninguna imagen generada debe contener letras, palabras, cifras de precios o números de teléfono. Todo texto se superpone en código Next.js mediante HTML/CSS dinámico.
3. **Separación de Lenguajes Visuales:**
   - **Línea 3D Isométrica (Clay/Satin):** Para dioramas urbanos, íconos conceptuales y fondos abstractos de servicios.
   - **Línea Fotográfica Editorial Urbana:** Para retratos de cadetes, motos en la calle marplatense, paquetes reales y detalles de depósito. Jamás mezclar renders 3D con fotos humanas en una misma pieza.
4. **Fondo para Recorte:** En imágenes con recorte transparente para la web, utilizar fondo plano uniforme Magenta Chroma Key (`#FF00FF`) sin sombras proyectadas.

---

## 2. 🏍️ Prompts para `public/heroes/` (Héroes de Página)

---

### 2.1 Hero Inicio (`public/heroes/inicio-mapa.webp`)
- **Destino:** Héroe de la Página Principal ([src/components/home/HeroAnimado.tsx](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/home/HeroAnimado.tsx)).
- **Objetivo:** Mostrar un diorama 3D isométrico premium de Mar del Plata, conectando la base de Friuli 1972 con el tejido urbano y la costa marina.

#### Prompt para Flux.1 [pro] / DALL-E 3:
```text
A stunning 3D isometric diorama tile representing the coastal city of Mar del Plata, crafted in premium matte vinyl and satin clay materials. The base is a thick rounded-square floating block in electric bright blue #0950F6 with pale-blue #E6EEFE beveled edges. On the miniature city grid, stylized minimalist urban street blocks with pale rooftops lead toward a glossy blue ocean edge with soft geometric waves on one side. A chunky, cheerful toy-like courier scooter in electric blue #0950F6 features a prominent rounded signal-yellow #FFEC01 top box on the rear. A glowing neon signal-yellow route ribbon winds through the avenues, connecting an iconic bright blue map pin with a signal-yellow rim to a drop-off destination. Clean directional studio lighting with soft specular highlights, zero harsh black shadows, light blue rim reflections, high-end commercial toy advertising aesthetic, ultra-clean pure white background, completely clean with no letters, no numbers, no text.
```

#### Prompt para Midjourney v6.1:
```text
isometric 3D diorama tile of Mar del Plata city grid, thick rounded-square floating base in bright blue #0950F6, pale blue #E6EEFE beveled rim, minimalist matte city buildings, a glossy stylized blue ocean coastline on one corner, a chunky toy delivery scooter in electric blue with rounded signal-yellow #FFEC01 top-box, illuminated signal-yellow route tube along streets, faceted map pin in #0950F6 with yellow accent, clean soft studio lighting, pale-blue tinted ambient occlusion, no black shadows, solid uniform pure white background, commercial 3D render, octane render style, no text, no letters, no watermark --ar 1:1 --v 6.1 --style raw --s 250
```

- **Prompt Negativo (SDXL / Flux):**
  `text, letters, words, numbers, labels, signs, realistic human face, photographs mixed with 3D, dark navy, black, gray, green, messy clutter, harsh black shadows, depth blur, cropped frame.`

---

### 2.2 Hero Express (`public/heroes/express-moto.webp`)
- **Destino:** Héroe del Servicio Express Punto a Punto.
- **Objetivo:** Transmitir velocidad urbana, agilidad y precisión vial en la costanera marplatense.

#### Prompt para Flux.1 [pro] / Midjourney v6.1 (Fotografía Editorial):
```text
Cinematic dynamic action photograph of a modern delivery motorcycle scooter riding swiftly on an asphalt coastal boulevard in Mar del Plata during clean morning daylight. The motorcycle is deep electric blue with a pristine, high-visibility signal-yellow #FFEC01 rear delivery cargo box. The rider wears a professional dark waterproof riding jacket with signal-yellow reflective accents and a modern full-face blue helmet with visor down. Street background shows blurred coastal palm trees, ocean horizon and soft city architecture with shallow depth of field. Shot on Hasselblad H6D-100c with 85mm f/2.0 lens at low shutter angle creating subtle wheel motion blur while keeping the scooter and yellow cargo box razor-sharp. Vibrant daylight with crisp blue sky, natural road reflections, energetic urban atmosphere, authentic Argentine street textures, no logos, no text on jacket or bike.
```

- **Parámetros Midjourney v6.1:**
  `--ar 16:9 --v 6.1 --style raw --q 2 --s 180`
- **Prompt Negativo:**
  `text, watermarks, brand logos, license plate numbers, low quality, oversaturated red, green accents, messy traffic, crash, rainy gloom, generic stock photo look.`

---

### 2.3 Hero LowCost (`public/heroes/lowcost-pallet.webp`)
- **Destino:** Héroe del Servicio de Paquetería Programada LowCost.
- **Objetivo:** Representar la eficiencia logística de consolidación: paquetes ordenados en pallet listos para el reparto del día antes de las 19:00 hs.

#### Prompt para Midjourney v6.1 / Flux.1:
```text
A high-end 3D product render of organized e-commerce logistics. A neat wooden mini-pallet holding a tidy stack of identical cubic delivery parcels wrapped in pale blue #E6EEFE paper, each tightly bound with a crisp signal-yellow #FFEC01 reinforced strapping tape. Beside the pallet rests a stylized digital barcode scanner and a chunky electric blue #0950F6 hand-truck dolly. Isometric view, pristine studio lighting with a large overhead softbox creating smooth gradients, subtle blue bounce light filling gentle shadows, clean white backdrop, high tactile realism with subtle paper texture and satin plastic finish, strictly zero typography, no barcodes, no letters, no numbers.
```

- **Parámetros Midjourney v6.1:**
  `--ar 4:3 --v 6.1 --style raw --s 200`
- **Prompt Negativo:**
  `written text, barcode numbers, company logos, dirty warehouse, broken boxes, dark background, black shadows.`

---

### 2.4 Hero Flex (`public/heroes/flex-notebook.webp`)
- **Destino:** Héroe de Mercado Envíos Flex y Same-Day.
- **Objetivo:** El vendedor de Mercado Libre imprimiendo etiquetas y despachando sus ventas del día con reputación en verde.

#### Prompt para Fotografía Comercial / Editorial:
```text
Top-down flat-lay commercial still life of an active e-commerce seller packing station. In the center, a modern laptop with a sleek interface showing a logistics map overview, next to a thermal label printer actively dispensing a clean yellow-trimmed parcel label. Two neatly packed kraft delivery packages measuring exactly 40x40x30 cm proportion with signal-yellow sealing tape. A smartphone on the desk displays a bright green checkmark verification indicator. Natural soft window lighting coming from the left, bright white wooden desk surface, minimalist desk accessories in electric blue accents, professional contemporary workspace aesthetic, razor-sharp focus with 50mm f/4.0 lens, no real brand logos, no illegible text or mock brands.
```

- **Parámetros Midjourney v6.1:**
  `--ar 16:9 --v 6.1 --style raw --s 150`
- **Prompt Negativo:**
  `MercadoLibre logo, brand marks, messy desk, coffee stains, cluttered cables, blurry focus, dark shadows.`

---

### 2.5 Hero Depósito & Fulfillment (`public/heroes/deposito-local.webp`)
- **Destino:** Héroe de Depósito Central y Fulfillment en Friuli 1972.
- **Objetivo:** Mostrar orden, custodia de stock y empaque profesional sin intermediarios.

#### Prompt para Fotografía de Arquitectura / Operaciones:
```text
Clean, bright, modern fulfillment and warehousing hub interior in Mar del Plata. Symmetrical perspective down an organized warehouse aisle with heavy-duty industrial shelving painted electric blue #0950F6. Shelves are methodically filled with uniform storage totes in pale blue and organized cardboard inventory boxes. Polished concrete floor with crisp yellow safety demarcation lines reflecting bright overhead LED linear lighting. A professional warehouse logistics specialist in a clean blue vest inspects inventory with a handheld tablet. Airy, high-tech, trustworthy and organized atmosphere, shot on 24mm tilt-shift lens for vertical perspective control, deep depth of field, no dust, no clutter, no corporate stock clichés.
```

- **Parámetros Midjourney v6.1:**
  `--ar 16:9 --v 6.1 --style raw --s 180`
- **Prompt Negativo:**
  `grunge, dark dingy warehouse, forklifts hazards, cluttered debris, readable texts, generic stock smiling models.`

---

### 2.6 Hero Contacto & Soporte (`public/heroes/contacto-mensaje.webp`)
- **Destino:** Página de Contacto y Atención Humana por WhatsApp.
- **Objetivo:** Simbolizar respuesta humana en tiempo real, cercanía marplatense y soporte directo.

#### Prompt para 3D / Render Conceptual:
```text
A stylized modern 3D icon composition featuring a floating smartphone in electric blue #0950F6 casing with a smooth glass screen. Emerging from the screen are three-dimensional speech message bubbles in glossy pure white and signal-yellow #FFEC01, floating gracefully with tiny geometric notification dots. Below the phone, a small stylized motorcycle helmet and a miniature coffee cup rest on an immaculate pale blue #E6EEFE pedestal. Soft studio lighting with warm and cool rim light separation, silky smooth reflections, isolated on a solid chroma magenta #FF00FF background for transparent cutout, ultra-premium app marketing render, completely devoid of text, letters or mock icons.
```

- **Parámetros Midjourney v6.1:**
  `--ar 1:1 --v 6.1 --style raw --s 200`
- **Prompt Negativo:**
  `WhatsApp logo, brand icons, green interface, phone keyboard letters, finger smudges, dark shadows.`

---

## 3. 🖼️ Prompts para `public/cards/` y `public/elementos/`

---

### 3.1 Fondo Tarjeta Express (`public/cards/fondo_express.webp`)
- **Destino:** Fondo sutil de tarjeta interactiva de servicio Express.
```text
Minimalist abstract 3D backdrop of fluid curving highway lanes and geometric road ribbons in deep electric blue #0950F6 and soft ambient blue #E6EEFE. A single fine glowing trace of signal-yellow #FFEC01 curves diagonally across the lower third, symbolizing motorcycle agility. Low-angle perspective, smooth satin clay texture, extremely soft diffused lighting, low contrast to serve as a readable UI background, no cars, no buildings, no text.
--ar 4:3 --v 6.1 --style raw --s 120
```

---

### 3.2 Fondo Tarjeta Flex (`public/cards/fondo_flex.webp`)
- **Destino:** Fondo de tarjeta Mercado Envíos Flex.
```text
Subtle high-key 3D geometric pattern featuring floating pale-blue cubes and faint hexagonal connection nodes in soft white #FFFFFF and pale-blue #FFFDE6. Delicate signal-yellow #FFEC01 border glow on one corner. Clean isometric perspective, soft studio bounce light, perfectly balanced for UI card containment with high text contrast.
--ar 4:3 --v 6.1 --style raw --s 100
```

---

### 3.3 Fondo Tarjeta LowCost (`public/cards/fondo_lowcost.webp`)
- **Destino:** Fondo de tarjeta Paquetería Programada LowCost.
```text
Clean abstract 3D composition of organized logistics geometry: faint isometric grid lines on pale technical gray surface, subtle embossed package silhouettes in soft pale-blue #E6EEFE, minimal architectural rhythm, diffuse overcast lighting, serene and cost-effective atmosphere.
--ar 4:3 --v 6.1 --style raw --s 100
```

---

### 3.4 Elemento Emprendedores (`public/elementos/envios_emprendedores.webp`)
- **Destino:** Módulo de planes para PyMEs y comercios.
```text
Chunky 3D isometric diorama of a charming local storefront boutique with an electric blue awning, flanked by two neatly packed courier parcels on the sidewalk and a small motorcycle parking bay. Glossy signal-yellow accents on door handle and parcel tape. Friendly stylized toy-like aesthetic, isolated on solid chroma magenta #FF00FF for transparent export.
--ar 1:1 --v 6.1 --style raw --s 250
```

---

## 4. 📸 Prompts para Fotografía Real de Flota (`public/img/generales/`)

---

### 4.1 Repartidor en Base Friuli (`public/img/generales/repartidor.webp`)
- **Destino:** Sección Nosotros, Testimonios y Transparencia Operativa.
- **Objetivo:** Mostrar un cadete real de Mar del Plata, orgulloso de su trabajo y comprometido con la entrega.

#### Prompt Fotográfico:
```text
Authentic environmental portrait of a professional motorcycle delivery courier standing proudly next to his delivery scooter in front of a logistics hub in Mar del Plata. The courier is an Argentine male in his late 20s, with a warm, confident, and trustworthy smile, wearing a neat navy-blue waterproof riding jacket with signal-yellow reflective shoulder bands and holding a sleek motorcycle helmet under his arm. The motorcycle features a clean, high-visibility signal-yellow top box. Soft late-afternoon coastal sunlight creating a warm rim on his shoulders, shallow depth of field (f/2.2 on 85mm portrait lens), authentic urban street texture of Mar del Plata in the background, genuine documentary photography, natural skin texture without artificial smoothing, unpretentious and professional.
```

- **Parámetros Midjourney v6.1:**
  `--ar 4:5 --v 6.1 --style raw --q 2 --s 150`
- **Prompt Negativo:**
  `ai plastic face, glossy skin, fake smile, studio backdrop, green jacket, logo of other delivery apps, dirty clothes, dark gloomy atmosphere.`

---

### 4.2 Moto de Reparto en Acción (`public/img/generales/moto-cta.webp`)
- **Destino:** Banner de Cierre (CTA) antes del pie de página.
```text
Side-profile dynamic tracking shot of a delivery scooter in motion along the Mar del Plata shoreline boulevard at sunset. The motorcycle is electric blue with a radiant signal-yellow cargo box reflecting the golden hour sun. Sea breeze, Atlantic ocean waves in the soft background, golden and blue hour sky gradient. Shot with a tracking camera car at 1/60s shutter speed to capture smooth asphalt speed blur while keeping the motorcycle and yellow box sharp. Cinematic editorial transportation photography, inspiring and reliable.
--ar 21:9 --v 6.1 --style raw --s 220
```

---

## 5. 🛠️ Tabla de Parámetros Técnicos y Post-Procesamiento

| Destino Web | Aspect Ratio | Resolución Recomendada | Formato Final | Proceso de Exportación |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Principal** | `1:1` o `4:3` | `1600 × 1600 px` | `.webp` (q=85) | Recorte de magenta con máscara alfa limpia |
| **Banners de Servicio** | `16:9` | `1920 × 1080 px` | `.webp` (q=82) | Optimización con `sharp` o Squoosh |
| **Tarjetas Bento** | `4:3` o `1:1` | `960 × 720 px` | `.webp` (q=80) | Contraste calibrado para superposición de texto |
| **Open Graph (Social)** | `1.91:1` | `1200 × 630 px` | `.jpg` (q=88) | Fondo sólido institucional `#0950F6` |
| **Historias / WhatsApp**| `9:16` | `1080 × 1920 px` | `.webp` (q=85) | Zonas seguras superior (250px) e inferior (340px) |
