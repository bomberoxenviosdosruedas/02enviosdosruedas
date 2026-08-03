# 🎨 PROMPTS FLOW - ENVÍOS DOS RUEDAS

> **Fuente de colores:** `src/app/globals.css` — Paleta oficial 3 colores
> **Herramienta:** Google Flow (https://labs.google/fx/es/tools/flow/about)
> **Formato:** Todos los prompts en español, optimizados para Flow

---

## 🎯 PALETA OFICIAL (COPIAR ESTOS VALORES EXACTOS)

| Variable CSS | Hex | Uso |
|--------------|-----|-----|
| `--color-brand-blue-700` (primary navy) | **#0636A5** | Azul marino principal, fondos, textos, bordes |
| `--color-brand-blue-600` | **#0742CA** | Azul medio, hover, acentos |
| `--color-brand-blue-500` | **#0950F6** | Azul vibrante, glows, focus |
| `--color-brand-blue-400` | **#3570F8** | Azul claro, backgrounds sutiles |
| `--color-brand-yellow-500` (primary yellow) | **#FFEC01** | Amarillo vibrante principal, CTAs, acentos |
| `--color-brand-yellow-400` | **#FFF12E** | Amarillo claro, hover |
| `--color-brand-ink` | **#00277C** | Navy profundo, tipografía oscura |
| `--color-brand-dark` | **#001035** | Negro azulado, fondos oscuros |

**Gradientes de referencia:**
- `gradient-blue`: `linear-gradient(135deg, #0636A5 0%, #002068 100%)`
- `gradient-yellow`: `linear-gradient(135deg, #FFEC01 0%, #E6B800 100%)`

---

## 📁 ESTRUCTURA DE ARCHIVOS DESTINO

```
public/
├── delivery-background.jpg          # 1920x1080 (16:9) - CRÍTICO
├── hero-background.jpeg             # 1920x1080 (16:9) - CRÍTICO
├── banner-servicio-flex.jpg         # 1920x1080 (16:9)
├── abstracto-background.jpg         # 1920x1080 (16:9)
├── img/generales/
│   ├── express-hero-inline.png      # 512x512 (1:1)
│   ├── repartidor.webp              # 512x512 (1:1)
│   ├── envios_express.webp          # 512x512 (1:1)
│   ├── card_express.png             # 512x512 (1:1)
│   ├── Emprendedoresbanner.webp     # 512x512 (1:1)
│   ├── moto-cta.webp                # 512x512 (1:1)
│   ├── envios_low_cost.webp         # 512x512 (1:1)
│   └── card_mapa.webp               # 800x600 (4:3)
```

---

## 🖼️ PROMPTS PARA FLOW — FONDOS FULL-BLEED (16:9)

### 1. `delivery-background.jpg` — **MÁS CRÍTICO** (usado en 7 heroes)

```text
Vista urbana cinematográfica de Mar del Plata al atardecer, calles en cuadrícula convergiendo hacia el puerto, luz dorada bañando avenidas (Colón, Luro, Independencia), sutiles líneas de rutas logísticas brillantes en azul marino #0636A5 y amarillo vibrante #FFEC01 conectando barrios (Güemes, Centro, Playa Grande, Puerto), niebla atmosférica ligera, fotografía comercial premium 8K, relación 16:9, paleta: cielo degradado #0636A5 a #002068, farolas amarillo cálido #FFEC01, composición limpia para overlay de texto blanco --ar 16:9 --style cinematic --quality 8k
```

**Heroes que lo usan:** ExpressHero, NetworksHero, AboutHero, FaqHero, EmprendedoresHero, ContactHero, CotizadorExpressHero, CotizadorLowCostHero (8 total)

---

### 2. `hero-background.jpeg` — Homepage (HeroAnimado)

```text
Plano aéreo cenital de Mar del Plata al amanecer, costa atlántica con rompientes suaves, ciudad despertando, red logística invisible sugerida por trazos lumínicos azul navy #0636A5 y amarillo #FFEC01 entre centros de distribución y zona puerto, niebla matinal baja, textura topográfica sutil, estilo mapa editorial premium, 16:9, alta resolución para fondo hero con opacidad 3% --ar 16:9 --style editorial --quality 8k
```

**Hero que lo usa:** HeroAnimado (background con opacity-[0.03] mix-blend-overlay)

---

### 3. `banner-servicio-flex.jpg` — FlexHero (MercadoLibre Flex)

```text
Escena de entrega MercadoLibre Flex en Mar del Plata: cajas amarillas/negras oficiales cargándose en camioneta azul marino #0636A5, repartidor escaneando código de barras con handheld, fondo urbano avenida Colón reconocible, luz diurna dura y contrastada, colores marca dominantes amarillo #FFEC01 y navy #0636A5, energía same-day delivery, fotografía editorial comercial 16:9 --ar 16:9 --style commercial --quality 8k
```

**Hero que lo usa:** FlexHero (background full-bleed + inline badge circular)

---

### 4. `abstracto-background.jpg` — LowCostHero (Optimización de costos)

```text
Composición abstracta geométrica 3D representando eficiencia logística: celdas hexagonales interconectadas azul navy #0636A5 con líneas de conexión amarillo vibrante #FFEC01 formando rutas óptimas, nodos pulsantes suaves, estética data visualization premium, render limpio minimalista, profundidad sutil con gradientes #0636A5 a #002068, transmite "routing inteligente = menor costo", lenguaje visual fintech/tech, 16:9 --ar 16:9 --style abstract --quality 8k
```

**Hero que lo usa:** LowCostHero (background full-bleed)

---

## 🔘 PROMPTS PARA FLOW — BADGES CIRCULARES (1:1, 512x512)

> **Nota:** Todos los badges se renderizan en UI a máximo 80px CSS (`sizes="(max-width: 768px) 64px, 80px"`). Generar a 512px permite pantallas Retina 2x/3x. Pedir "crop circular centrado" o "composición circular para badge".

---

### 5. `express-hero-inline.png` — ExpressHero

```text
Primer plano heroico de moto de reparto moderna: carenado frontal azul marino #0636A5 mate con franja racing amarillo vibrante #FFEC01, faro LED afilado, parabrisas aerodinámico, profundidad de campo reducida, iluminación de estudio con luz de contorno (rim light) en #FFEC01, composición circular centrada para badge, ultra nítido 8K --ar 1:1 --style product --quality 8k
```

**Uso:** Inline en `<h1>` dentro de `<span className="w-16 h-10 sm:w-20 sm:h-12 rounded-full">`

---

### 6. `repartidor.webp` — NetworksHero

```text
Retrato de repartidor argentino amable: uniforme azul marino #0636A5 con acentos amarillo #FFEC01, casco integral moderno visera arriba, sonrisa confiada mirando a cámara, fondo avenida costera Mar del Plata desenfocada (bokeh) con luces #0636A5 y #FFEC01, luz natural diurna, expresión accesible y confiable, crop circular estilo avatar redes sociales --ar 1:1 --style portrait --quality 8k
```

**Uso:** Inline en `<h1>` badge circular "COMUNIDAD EN [badge] LÍNEA"

---

### 7. `envios_express.webp` — AboutHero

```text
Concepto "última milla": pirámide perfecta de cajas de cartón branded navy #0636A5 y amarillo #FFEC01 sobre suelo de almacén, iluminación lateral dramática creando profundidad, foco en caja superior con logo, fotografía comercial producto limpia, crop circular centrado en logo superior --ar 1:1 --style commercial --quality 8k
```

**Uso:** Inline en `<h1>` badge circular "LÍDERES EN [badge] ÚLTIMA MILLA"

---

### 8. `card_express.png` — FaqHero

```text
UI minimalista soporte/logística: pantalla smartphone flotando mostrando chat con burbujas de preguntas convirtiéndose en checks verdes, interfaz navy #0636A5 con botones acento amarillo #FFEC01, render 3D estilo clay/material suave, iluminación estudio suave, composición circular --ar 1:1 --style ui --quality 8k
```

**Uso:** Inline en `<h1>` badge circular "CENTRO DE [badge] RESPUESTAS"

---

### 9. `Emprendedoresbanner.webp` — EmprendedoresHero (3PL/Fulfillment)

```text
Centro fulfillment 3PL moderno: estanterías con totes branded navy #0636A5 y amarillo #FFEC01, robots móviles autónomos (AMR) navegando pasillos, pantallas WMS con inventario tiempo real, zona industrial Mar del Plata visible por ventanales, fotografía logística profesional gran angular, crop circular centrado en robot principal --ar 1:1 --style industrial --quality 8k
```

**Uso:** Inline en `<h1>` badge circular "ALMACENAMIENTO Y [badge] FULFILLMENT PARA PYMES"

---

### 10. `moto-cta.webp` — ContactHero

```text
Escena asesoría comercial: apretón de manos entre gerente logístico (traje navy #0636A5) y emprendedor e-commerce, sobre mesa mapa Mar del Plata con rutas amarillo #FFEC01, laptop abierta con dashboard azul #0950F6, luz cálida confiada, mood partnership business, crop circular en apretón de manos --ar 1:1 --style business --quality 8k
```

**Uso:** Inline en `<h1>` badge circular "CONTACTO [badge] COMERCIAL"

---

### 11. `envios_low_cost.webp` — LowCostHero

```text
Icono minimalista fusionando símbolo peso argentino $ con pin de ubicación, azul navy #0636A5 primario con acento amarillo vibrante #FFEC01, diseño flat con extrusión 3D sutil, estilo vectorial limpio, composición circular, representa "envío económico" --ar 1:1 --style icon --quality 8k
```

**Uso:** Inline en `<h1>` badge circular "ENVÍOS [badge] LOWCOST - ENTREGAS ECONÓMICAS"

---

## 🗺️ PROMPT PARA FLOW — MAPA CARD (4:3, 800x600)

### 12. `card_mapa.webp` — ExpressHero + HeroAnimado

```text
Mapa estilizado Mar del Plata vista cenital: centro ciudad (Catedral, Plaza Mitre), Güemes, Puerto, Playa Grande, trazos finos rutas azul navy #0636A5 con marcadores pulso amarillo #FFEC01 entregas activas, landmarks etiquetados tipografía limpia, estética UI mapa vectorial moderna, fondo blanco alto contraste, profesional dashboard logística --ar 4:3 --style map --quality 8k
```

**Uso:** 
- ExpressHero: Card mapa cobertura (fill, `sizes="(max-width: 1024px) 100vw, 40vw"`)
- HeroAnimado: Card mapa ruteo (width=400, height=300)

---

## ✅ CHECKLIST DE DESCARGA EN FLOW

| # | Archivo | Prompt | Formato | Prioridad | ✅ Done |
|---|---------|--------|---------|-----------|---------|
| 1 | `delivery-background.jpg` | Prompt 1 | 16:9 | 🔴 CRÍTICA | ☐ |
| 2 | `hero-background.jpeg` | Prompt 2 | 16:9 | 🔴 CRÍTICA | ☐ |
| 3 | `banner-servicio-flex.jpg` | Prompt 3 | 16:9 | 🟠 ALTA | ☐ |
| 4 | `abstracto-background.jpg` | Prompt 4 | 16:9 | 🟠 ALTA | ☐ |
| 5 | `express-hero-inline.png` | Prompt 5 | 1:1 | 🟡 MEDIA | ☐ |
| 6 | `repartidor.webp` | Prompt 6 | 1:1 | 🟡 MEDIA | ☐ |
| 7 | `envios_express.webp` | Prompt 7 | 1:1 | 🟡 MEDIA | ☐ |
| 8 | `card_express.png` | Prompt 8 | 1:1 | 🟡 MEDIA | ☐ |
| 9 | `Emprendedoresbanner.webp` | Prompt 9 | 1:1 | 🟡 MEDIA | ☐ |
| 10 | `moto-cta.webp` | Prompt 10 | 1:1 | 🟡 MEDIA | ☐ |
| 11 | `envios_low_cost.webp` | Prompt 11 | 1:1 | 🟡 MEDIA | ☐ |
| 12 | `card_mapa.webp` | Prompt 12 | 4:3 | 🟢 BAJA | ☐ |

---

## 💡 TIPS PARA ITERAR EN FLOW

### Si el amarillo sale muy naranja:
> Añadir al prompt: `amarillo puro #FFEC01 sin tono naranja, saturación máxima`

### Si el azul sale muy claro:
> Añadir: `azul marino profundo #0636A5, no azul cielo`

### Para consistencia de marca entre imágenes:
> Usar la misma semilla (seed) si Flow lo permite, o copiar el "Style Reference" de la primera imagen generada exitosa

### Reference del logo:
> Subir `public/img/generales/logo.png` como **Image Reference** en Flow y añadir: `incluir logo de referencia en cajas/uniforme/moto`

### Formato de salida:
> Flow descarga en **WebP nativamente** — perfecto para Next.js. Renombrar archivos exactamente como la tabla al descargar.

---

## 🔗 MAPEO HERO → IMÁGENES (PARA VERIFICACIÓN)

| Hero Component | Background | Inline Badge | Card Images |
|----------------|------------|--------------|-------------|
| **HeroAnimado** | `hero-background.jpeg` | — | `card_mapa.webp` |
| **ExpressHero** | `delivery-background.jpg` | `express-hero-inline.png` | `card_mapa.webp` |
| **NetworksHero** | `delivery-background.jpg` | `repartidor.webp` | — |
| **AboutHero** | `delivery-background.jpg` | `envios_express.webp` | — |
| **FaqHero** | `delivery-background.jpg` | `card_express.png` | — |
| **EmprendedoresHero** | `delivery-background.jpg` | `Emprendedoresbanner.webp` | — |
| **ContactHero** | `delivery-background.jpg` | `moto-cta.webp` | — |
| **FlexHero** | `banner-servicio-flex.jpg` | `banner-servicio-flex.jpg` (crop circular) | — |
| **LowCostHero** | `abstracto-background.jpg` | `envios_low_cost.webp` | — |
| **CotizadorExpressHero** | `delivery-background.jpg` (opacity 4%) | — | — |
| **CotizadorLowCostHero** | `delivery-background.jpg` (opacity 4%) | — | — |

---

**Generado:** 2026-08-03  
**Proyecto:** 02enviosdosruedas  
**Colores verificados en:** `src/app/globals.css` (líneas 6-29, 126-140)