---
name: envios-dosruedas-mdq
description: Sistema de diseño de alta velocidad para logística urbana, mensajería en moto y e-commerce en Mar del Plata.
colors:
  primary: "#0950f6"
  primary_dark: "#0950f6"
  accent: "#ffec01"
  accent_hover: "#fff240"
  accent_light: "#fffde6"
  surface: "#ffffff"
  surface_subtle: "#f0f5ff"
  surface_ice: "#e0ebff"
  text_primary: "#0950f6"
  text_on_primary: "#ffffff"
  text_on_accent: "#0950f6"
typography:
  display: "Anton, Impact, sans-serif"
  body: "Outfit, sans-serif"
  code: "Geist Mono, monospace"
---

# Sistema de Diseño: Envíos DosRuedas (Mar del Plata)
**Identificador del Proyecto:** `envios-dosruedas-mdq`  
**Entorno Operativo:** Logística urbana de última milla, paquetería e-commerce, mensajería en moto y fulfillment en Mar del Plata.  
**Archivos Fuente de Referencia:**  
1. [home_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/home_clean.html) (Home Principal)  
2. [contacto_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/contacto_clean.html) (Contacto y Canales Directos)  
3. [cotizar_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/cotizar_clean.html) (Cotizador Interactivo con Mapa Leaflet)  
4. [nuestras_redes_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/nuestras_redes_clean.html) (Comunidad y Redes Sociales)  
5. [preguntas_frecuentes_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/preguntas_frecuentes_clean.html) (Centro de Ayuda y FAQ)  
6. [sobre_nosotros_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/sobre_nosotros_clean.html) (Trayectoria, Base Friuli y Flota)  
7. [servicios_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/servicios_clean.html) (Hub de Servicios Logísticos)  
8. [deposito_fulfillment_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/deposito_fulfillment_clean.html) (Depósito, Almacenamiento y Picking)  
9. [empresas_cuenta_corriente_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/empresas_cuenta_corriente_clean.html) (Servicios Corporativos B2B)  
10. [envios_contrareembolso_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/envios_contrareembolso_clean.html) (Cobro en Destino y Rendición)  
11. [envios_express_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/envios_express_clean.html) (Envíos Express Franja 3 hs)  
12. [envios_lowcost_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/envios_lowcost_clean.html) (Envíos Económicos en el Día)  
13. [enviosflex_clean.html](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/enviosflex_clean.html) (Mercado Envíos Flex "Llega Hoy")  
**Catálogo Maestro:** [CATALOGO_PAGINAS.md](file:///C:/Users/prest/proyectos/0pruebas/envios_paginas/CATALOGO_PAGINAS.md)

---

## 1. Atmósfera Visual y Filosofía de Diseño

La interfaz de Envíos DosRuedas proyecta la velocidad, precisión y confiabilidad de la logística urbana moderna en Mar del Plata. Su lenguaje visual se inscribe en el estilo **Brutalista Deportivo / Utilitario Urbano**, articulando la señalética vial y la alta visibilidad reflectiva con el rigor de la telemetría digital de ruteo.

La experiencia visual está pensada para ser ágil, directa y transparente. A diferencia de las interfaces corporativas tradicionales que recurren a grises apagados o fondos oscuros pesados, Envíos DosRuedas utiliza contrastes enérgicos entre **Azul Corporativo Ultramar (`#0950F6`)**, **Amarillo Vial Reflectivo (`#FFEC01`)** y **Blanco Puro (`#FFFFFF`)**. La profundidad no se construye con sombras sucias ni fondos negros, sino mediante capas translúcidas tipo vidrio arquitectónico (*glassmorphism*), marcos perimetrales nítidos de 4px y esquinas suavemente redondeadas que emulan la ergonomía de terminales móviles y teléfonos de reparto.

---

## 2. Paleta de Colores y Roles Funcionales (ADR 02: Ley de Tres Colores de Marca)

El sistema cromático respeta taxativamente el **ADR 02**: **el color `#0950F6` es el techo máximo de oscuridad de toda la aplicación**. Queda formalmente desterrado el uso de cualquier azul noche oscuro (`blue-900`, `blue-950`, `brand-blue-900`, `#041F5E`, `#021033`), negros puros (`#000000`) o escalas de grises neutros (`slate`, `gray`, `zinc`, `neutral`).

```
+---------------------------------------------------------------------------------------+
|  AZUL CORPORATIVO (#0950F6)  |  AMARILLO VIAL (#FFEC01)  |  BLANCO SEÑAL (#FFFFFF)   |
|  Techo máximo de oscuridad   |  Acentos de acción (<=15%) |  Lienzo, textos y tarjetas |
+---------------------------------------------------------------------------------------+
```

### 2.1. Base Primaria y Superficies
* **Azul Corporativo Institucional (`#0950f6` / `brand-blue` / `brand-blue-500`):**  
  *Rol Funcional:* Identidad troncal y tope de oscuridad absoluta. Se utiliza como fondo para bloques de alto impacto (Hero principal, cabecera fija, banners de operaciones activas, marquesinas continuas, footer institucional y contenedores destacados en `cotizar_clean.html` y `deposito_fulfillment_clean.html`).
* **Blanco Señal Puro (`#ffffff`):**  
  *Rol Funcional:* Lienzo luminoso para secciones de contenido, fondo de tarjetas elevadas en grillas de servicios, cajas de formulario y texto de máximo contraste accesible sobre fondos azules.

### 2.2. Acentos y Alta Visibilidad (Máximo 15% del Área Visual)
* **Amarillo Vial Reflectivo (`#ffec01` / `brand-yellow-500`):**  
  *Rol Funcional:* Botones de acción principal (CTAs como "Cotizá tu envío" o "Escribinos por WhatsApp"), badges de verificación y flota propia, rótulos inclinados (`-rotate-1`) en titulares destacados, estrellas de calificación y pines de origen en mapas.
* **Amarillo Luminoso Hover (`#fff240` / `brand-yellow-400`):**  
  *Rol Funcional:* Transición reactiva ante hover y estados de foco en botones de acción.
* **Amarillo Sutil Acaramelado (`#fffde6` / `brand-yellow-50`):**  
  *Rol Funcional:* Fondo tenue para módulos destacados de Mercado Envíos Flex y alertas operativas.

### 2.3. Superficies Claras y Graduación Luminosa
* **Azul Glaciar Tenue (`#f0f5ff` / `#f3f7ff` / `brand-blue-50`):**  
  *Rol Funcional:* Relleno de campos de formulario (inputs y selects), contenedores de métricas en tres columnas y paneles de tarjetas secundarias sobre lienzo blanco.
* **Azul Hielo Claro (`#e0ebff` / `#e8f0fe` / `brand-blue-100`):**  
  *Rol Funcional:* Bordes perimetrales sutiles (`border-brand-blue-100` o `border-brand-blue/15`) y pastillas de metadatos operativos en tarjetas claras.

### 2.4. Construcción de Profundidad sin Azules Oscuros (Técnica de Capas Translúcidas)
Para resolver la jerarquía y el anidamiento dentro de secciones con fondo azul (`#0950F6`), **en lugar de usar fondos oscuros como `blue-900` o `brand-blue-900`**, el sistema recurre exclusivamente a superposiciones translúcidas y bordes de alta definición:
* **Sub-tarjetas y Módulos sobre Azul:** `bg-brand-blue-500` con `border border-white/10` o `border border-white/20`, o velos tenues como `bg-brand-blue-50/20` y `bg-white/5` a `bg-white/10` con `backdrop-blur-md`.
* **Bordes Divisorios sobre Azul:** `border-white/10` y `border-white/15` para grillas, separadores de menú y tablas comparativas.
* **Textos sobre Azul:** Blanco puro (`#ffffff`) para titulares y datos clave; blanco atenuado al 80% o 85% (`text-white/80`) para párrafos y descripciones complementarias.
* **Textos sobre Blanco:** Azul corporativo (`#0950f6`) para títulos y etiquetas; azul con opacidad (`text-brand-blue/70` a `text-brand-blue/80`) para textos secundarios, preservando siempre la tonalidad de marca sin recurrir a grises neutros.

---

## 3. Arquitectura Tipográfica

El sistema tipográfico se articula en tres familias bien diferenciadas según su función semántica:

| Rol Semántico | Familia Tipográfica | Pesos Empleados | Transformación y Tracking | Aplicación en Interfaz |
| :--- | :--- | :--- | :--- | :--- |
| **Titulares Monumentales (Display)** | `Anton`, `Impact`, `sans-serif` | 400 (Heavy) | `uppercase`, `tracking-tight`, `leading-[0.92]` a `leading-none` | H1 de páginas, títulos de secciones H2/H3, números de impacto, lemas en tickers y texto de botones de acción |
| **Cuerpo y Lectura (Interface)** | `Outfit`, `sans-serif` | 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold) | `normal`, `tracking-normal`, `leading-relaxed` | Párrafos narrativos, preguntas frecuentes, descripciones de servicio, inputs de formulario y navegación |
| **Telemetría y Datos (Technical Mono)** | `Geist Mono`, `monospace` | 500, 600, 700 | `uppercase`, `tracking-wider`, `text-[10px]` a `text-xs` | Horarios de corte (15:00 hs, 13:00 hs), distancias en km, etiquetas técnicas, tarifas y remitos |
| **Iconografía Vectorial** | `Material Symbols Outlined` | 400 (`FILL 1` en acentos) | Inline alineado verticalmente con texto | Iconos de transporte, flechas, checks, teléfonos, pines y estrellas de calificación |

---

## 4. Estilo y Comportamiento de Componentes

### 4.1. Botones de Acción (CTAs)
* **Botón Primario ("Cotizá tu envío" / "Solicitar servicio"):**
  - Forma: Píldora completa (`rounded-full`).
  - Fondo: Amarillo Vial (`#ffec01`) con transición hover a `#fff240`.
  - Tipografía: Azul Corporativo (`#0950f6`), fuente `Anton`, mayúsculas sostenidas, `tracking-wider`.
  - Icono reactivo: Flecha hacia la derecha (`arrow_forward`) con desplazamiento dinámico (`group-hover:translate-x-1.5 transition-transform duration-200`).
* **Botón Secundario Transparente / Reversa:**
  - Forma: Píldora (`rounded-full`).
  - Fondo: Translúcido con borde perimetral blanco (`border-2 border-white`) sobre fondo azul, o borde azul (`border-2 border-brand-blue`) sobre fondo blanco.
  - Hover: Fondo Amarillo Vial (`#ffec01`) con texto en Azul Corporativo.
* **Botón Flotante de WhatsApp:**
  - Acceso directo y fijo en esquinas inferiores con enlace dinámico codificado hacia `https://wa.me/549223...` con mensaje predeterminado contextual.

### 4.2. Tarjetas y Contenedores (Phone-Like Cards)
* **Geometría Ergonómica:** Radios pronunciados de `rounded-3xl` (24px) a `rounded-[36px]` (36px) simulando terminales móviles de reparto.
* **Borde Físico Distintivo:** Marco perimetral sólido de 4px (`border-4 border-white` en tarjetas oscuras; `border-4 border-brand-yellow` en tarjetas destacadas de Flex o Fulfillment; `border-2 border-brand-blue/15` en tarjetas claras).
* **Elevación con Sombra Azul Profunda (`card-phone-shadow`):**  
  `box-shadow: 0 30px 60px -12px rgba(0, 20, 100, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.15);`
* **Métrica en Tres Columnas:** Grilla interna compacta (`grid-cols-3 gap-2`) con cápsulas redondeadas (`rounded-2xl bg-brand-blue-50 p-2.5 text-center`) que exponen: `CORTE` (ej. 15:00 hs), `ENTREGA` (ej. Franja 3 hs), `TARIFA` (ej. Desde $3.700).

### 4.3. Componentes de Dominio Específico

#### A. Selector de Franja y Modalidad de Entrega (Cotizador)
* Tarjetas interactivas tipo radio-card para comparar **Envíos Express** vs. **Envíos LowCost**.
* Línea de tiempo diaria de 9:00 a 19:00 hs con marcas visuales de corte (13:00 hs para LowCost, 15:00 hs para Express) y selector táctil de franja de 3 horas.
* Desglose instantáneo con cálculo tarifario lineal (sin `Math.ceil`) y desglose transparente de recargos operativos.

#### B. Picking Rack y Circuito de Fulfillment
* Módulo visual interactivo con códigos de rack (`RACK-A1`, `RACK-B2`) representando el depósito de Base Friuli 1972.
* Diagrama secuencial de 4 fases: *Recepción en base → Almacenamiento & Stock → Picking & Embalaje → Despacho Express / Flex*.

#### C. Línea de Tiempo para Contra Reembolso y Cobro en Destino
* Flujo secuencial de 3 pasos con conectores visuales punteados:  
  1. *Retiro de mercadería* con remito digital.  
  2. *Cobro en destino* (efectivo o transferencia bancaria inmediata).  
  3. *Rendición acordada* (transferencia en el día o reintegro físico en base).

#### D. Selector Segmentado de Rubros y Cuenta Corriente B2B
* Formulario corporativo con selectores tipo píldora para rubros (Indumentaria, Gastronomía, Farmacia, Repuestos, Tecnología) y rangos de volumen mensual (20 a 50, 50 a 150, más de 150 envíos).

#### E. Marquesinas Continuas (`CarruselRedes` & Marquee Infinito)
* Doble cinta horizontal con traslación infinita continua (`animate-marquee` y `animate-marquee-reverse`).
* Separador tipográfico constante: Rombo amarillo sólido (`◆`) o estrella (`✦`) entre lemas operativos.
* Control conmutable para pausar la animación ante interacción o foco accesible.

#### F. Operaciones Banner (Monitoreo de Flota Activa)
* Barra institucional con dot pulsante (`animate-ping bg-brand-yellow-500`): *"OPERACIONES ACTIVAS EN MAR DEL PLATA - DESPACHOS Y RUTAS EN TIEMPO REAL"*.

---

## 5. Principios de Maquetación y Grilla

1. **Ritmo Vertical por Alternancia de Secciones:**  
   `Azul Corporativo (#0950f6)` → `Blanco Puro (#ffffff)` → `Azul Corporativo (#0950f6)` → `Blanco Puro (#ffffff)`.  
   Mantiene el impacto visual sin generar fatiga de lectura y organiza la jerarquía de contenidos.
2. **Contenedor Maestro y Anchos Máximos:**  
   - Ancho estándar institucional: `max-w-7xl` (1280px) con espaciado responsivo `px-4 sm:px-6 lg:px-8`.  
   - Ancho enfocado para conversión (Cotizador y Formularios): `max-w-5xl` o `max-w-4xl`.
3. **Composición Asimétrica del Hero:**  
   - Desktop (>= 1024px): 7 columnas para narrativa institucional y CTAs; 5 columnas para módulo de telemetría y mapa interactivo.  
   - Mobile (< 768px): Colapso estricto a 1 columna apilada verticalmente.
4. **Bento Grid Modular:**  
   Tarjetas en rejillas de 2 y 3 columnas con alturas armonizadas mediante `h-full flex flex-col justify-between`.

---

## 6. Instrucciones de Generación para Stitch (Stitch Prompting Guidelines)

> Al redactar prompts para Stitch o alimentar `.stitch/next-prompt.md`, incorporar el siguiente bloque de especificaciones obligatorias:

```markdown
**DESIGN SYSTEM (ENVIOS DOSRUEDAS MAR DEL PLATA - MANDATORY SPEC):**
- **Atmosphere:** High-speed urban motorcycle courier & e-commerce logistics in Mar del Plata. Confident, athletic-utilitarian, crisp, ultra-reliable. High-contrast Royal Blue (#0950f6) and Signal Yellow (#ffec01).
- **Color Tokens (Max Darkness Cap = #0950f6):**
  - Brand Royal Blue: #0950f6 (Hero backgrounds, heavy headers, dark card surfaces, footer)
  - Signal Yellow: #ffec01 (Primary CTAs, status badges, highlighted title tags, star ratings)
  - Signal Yellow Hover: #fff240
  - Pure Canvas White: #ffffff (Page background, light cards, high-contrast text on blue)
  - Subtle Blue Surface: #f0f5ff / #f3f7ff (Inputs, table stripes, metric cards)
  - Soft Ice Border: #e0ebff / #e8f0fe / rgba(9,80,246,0.15)
  - Translucent Layering on Blue: Use bg-brand-blue-500 with border-white/10 or border-white/20, or bg-white/5 to bg-white/10 with backdrop-blur-md.
  - STRICTLY BANNED COLORS: Zero blue-900, zero blue-950, zero brand-blue-900 (#041F5E), zero navy, zero pure black (#000000), zero neutral gray/slate classes (text-slate-*, text-gray-*). Subdued copy on light backgrounds must use text-brand-blue/70 or text-brand-blue/80.
- **Typography Rules:**
  - Display Titles: 'Anton', 'Impact', sans-serif (UPPERCASE, tracking-tight, leading-[0.92], impactful)
  - Interface & Body: 'Outfit', sans-serif (Clean geometric sans, regular/semibold/bold, leading-relaxed)
  - Data / Telemetry: 'Geist Mono', monospace (UPPERCASE, tracking-wider, text-xs, cutoffs, KM, prices)
  - Icons: Google Material Symbols Outlined
- **Component Geometry:**
  - Action Buttons: Pill-shaped (rounded-full). Primary buttons have #ffec01 background, #0950f6 Anton text, and an arrow icon that slides on hover.
  - Feature Cards: Phone-like heavily rounded corners (rounded-3xl or rounded-[36px]), 4px borders (border-4 border-white or border-brand-yellow), and deep blue shadows: box-shadow 0 30px 60px -12px rgba(0,20,100,0.45).
  - Tilted Tags: Inline title badges with slight rotation (-rotate-1 or rotate-1) on yellow backgrounds.
  - Form Fields: Rounded-xl, white or #f0f5ff background, subtle 1px blue border, focus ring in #0950f6.
  - Domain Modules: Interactive radio-cards for delivery slots (9-19 hs), picking rack visualizer for fulfillment, 3-step timeline for cash-on-delivery.
- **Layout & Structure:**
  - Alternating section blocks: Electric Blue sections alternating with crisp White sections.
  - Max width: max-w-7xl with px-4 lg:px-8.
  - Responsive: Single-column stack on mobile (<768px), horizontal touch sliders for cards.
- **Banned Patterns:** No generic purple/pink gradients, no Inter font, no emojis as icons, no Math.ceil for distance pricing, no Factura A references.
```

---

## 7. Anti-Patrones y Reglas de Exclusión Absoluta

* ❌ **Prohibido el uso de `blue-900`, `blue-950`, `brand-blue-900` (`#041F5E`) o cualquier tono más oscuro que `#0950F6`:** Toda la profundidad y el anidamiento de tarjetas dentro de secciones azules se resuelve exclusivamente con velos translúcidos (`border-white/10`, `border-white/20`, `bg-brand-blue-50/20`, `bg-white/10` y `backdrop-blur-md`). La introducción de azules noche rompe la vibrancia deportiva y viola el ADR 02.
* ❌ **Prohibido el uso de Negro Puro (`#000000`) o Grises Neutros (`slate`, `gray`, `zinc`, `neutral`):** Todo contraste profundo y texto secundario se resuelve en la gama del Azul Corporativo (`#0950F6`), ya sea pleno o con opacidades (`text-brand-blue/80`).
* ❌ **Prohibidos los degradados fluorescentes violáceos o cian ("AI Neon Gradients"):** La paleta se fundamenta en bloques de color planos, sólidos y de alto impacto vial (`#0950F6` y `#FFEC01`).
* ❌ **Prohibido el uso de tipografías genéricas (`Inter`, `Roboto`, fuentes Serif clásicas):** Se respeta estrictamente la terna identitaria `Anton` + `Outfit` + `Geist Mono`.
* ❌ **Prohibido el uso de emojis en lugar de iconos:** Se emplean exclusivamente glifos vectoriales de `Material Symbols Outlined`.
* ❌ **Prohibidas las esquinas angulosas en tarjetas principales:** Todo contenedor central debe presentar radios de curvatura suaves (`rounded-2xl`, `rounded-3xl` o `rounded-[36px]`).
* ❌ **Prohibido `Math.ceil` en distancias y tarifas (ADR 01):** La tarifa por kilómetro excedente (10 a 20 km) es estrictamente lineal (`distancia * precioPorKm`).
* ❌ **Prohibida la promesa de Factura A:** La empresa emite comprobantes conforme a su encuadre fiscal estándar, sin emisión de Factura A.
* ❌ **Prohibidas las promesas horarias antirreglamentarias:** Envíos Express siempre se ofrece en franjas de 3 hs solicitadas con 2 hs de anticipación (corte 15:00 hs); LowCost se entrega hasta las 19:00 hs (corte 13:00 hs). Nunca prometer "en 2 horas" o calificar a LowCost como servicio "agrupado".
