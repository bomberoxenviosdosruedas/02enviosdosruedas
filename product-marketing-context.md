# 📖 Product Marketing Context & Design System (SSoT) — Envíos DosRuedas (2026)

> **Fuente Única de la Verdad (Single Source of Truth - SSoT)**
> Este documento consolidado define la identidad de producto, posicionamiento, sistema de diseño visual inmutable, tono de voz y especificaciones técnicas para agentes de diseño, desarrolladores y generadores de contenido/imágenes de **Envíos DosRuedas**.

---

## 1. 🚀 Identidad del Producto

* **Nombre Oficial:** Envíos DosRuedas (Envíos DosRuedas S.R.L.)
* **Propuesta de Valor Única:** Plataforma digital líder en mensajería urbana de última milla, ruteo inteligente LowCost y soluciones logísticas integrales para E-Commerce y MercadoLibre Flex en Mar del Plata. Unimos velocidad vial, tecnología predictiva y compromiso humano ("Llega al toque. Pagás al recibir").
* **Servicios Principales:**
  1. **🚀 Express:** Servicio puerta a puerta ultra-rápido en **menos de 90 minutos** con moto dedicada. Tarifa calculada por tramos de distancia.
  2. **📦 LowCost:** Ruteo optimizado multi-entrega programado en **24 horas**. Permite un ahorro de hasta un 30% agrupando envíos.
  3. **🛒 MercadoLibre Flex:** Integración nativa con MercadoLibre Flex. Retiro en hub o domicilio con cumplimiento estricto del SLA de MercadoLibre y webhooks automáticos.
  4. **🏭 3PL / Fulfillment:** Almacenaje en Hub Central, preparación (pick & pack) y despacho para PyMEs y sellers que tercerizan su logística.
  5. **🌱 Emprendedores:** Planes escalonados por volumen mensual con onboarding asistido para comercios locales.
* **Año Base y Contexto Temporal Operativo:** **2026**. Todas las tarifas, referencias temporales, proyecciones y años operativos deben fijarse en 2026.

---

## 2. 📍 Público Objetivo e Identidad Geográfica

* **Público Objetivo:**
  * Sellers de MercadoLibre (Flex) y tiendas E-Commerce (Tiendanube, Shopify, WooCommerce).
  * Comercios locales, PyMEs, farmacias, gastronómicos y emprendedores de Mar del Plata.
  * Clientes particulares que requieren mensajería urgente puerta a puerta o trámites con cobro al recibir.
* **Identidad Geográfica y Cobertura:**
  * **Enfoque Regional Exclusivo:** **Mar del Plata (Partido de General Pueyrredón completo)**, Buenos Aires, Argentina.
  * **Hub Central / Oficina Operativa:** Friuli 1972 (Barrio Chauvín / Universitario), Mar del Plata.
  * **Anclas y Puntos de Referencia Locales:** Zona Güemes, Playa Grande, Centro, Puerto, Punta Mogotes, Batán, Camet, Chauvín, Av. Colón, Av. Constitución.

---

## 3. 🎨 Sistema de Diseño Visual Inmutable (Ley de Tres Colores)

### 3.1 Paleta de Colores Oficial (Tokens & Hex)

El sistema cromático se rige bajo una **estricta Ley de Tres Colores principales** (Azul Egipcio, Amarillo Vial y Blanco Puro) más sus escalas oficiales de apoyo:

| Rol Semántico | Nombre de Marca | Token CSS / Tailwind | Código Hex | Función en UI |
|---|---|---|---|---|
| **Primary / Trust** | Egyptian Brand Blue | `brand-blue-700` | `#0636A5` | Headers, footers, secciones oscuras, H1/H2, marcos institucionales. |
| **Accent / CTA** | Electric Signal Yellow | `brand-yellow-500` | `#FFEC01` | Botones primarios, badges destacados, status dots activos, steppers. |
| **Surface Base** | Pure Canvas White | `brand-white-50` | `#FFFFFF` | Fondo de página, núcleo de tarjetas, inputs, modales. |
| **Soft Canvas** | Ice Blue Tint | `brand-blue-50` | `#E6EEFE` | Marco exterior (`double-bezel-outer`), secciones secundarias, skeletons. |
| **Structural Border** | Blueprint Border | `brand-blue-100` | `#BACEFD` | Bordes de tarjetas, campos e inputs (2px), líneas divisoras. |
| **Hover Border** | Sky Blueprint | `brand-blue-300` | `#628FF9` | Bordes exteriores en hover. |
| **Muted Text** | Steel Blue Muted | `brand-blue-400` | `#3570F8` | Textos de ayuda, metadatos, placeholders. |
| **Interactive / Focus** | Ultramarine Action | `brand-blue-500` | `#0950F6` | Anillo de foco universal, elementos interactivos. |
| **Primary Hover** | Royal Pressed | `brand-blue-800` | `#052D8C` | Hover de botones azules y dropdowns. |
| **Text on Accent** | Deep Navy | `brand-blue-900` | `#04236B` | Texto sobre fondo amarillo (CTAs primarios, badges). |
| **Body Ink** | Deep Blue Ink | `brand-ink` | `#00277C` | Texto del cuerpo, párrafos y valores ingresados (reemplaza al negro). |
| **Deep Void** | Midnight Abyss | `brand-blue-950` | `#021440` | Footer profundo y modales. |
| **Accent Hover** | Signal Yellow Bright | `brand-yellow-400` | `#FFF12E` | Hover de CTA primario y botón de WhatsApp. |

#### 🚫 Reglas Prohibitivas de Color (Cero Tolerancia):
1. **PROHIBIDO** el uso de escalas grises genéricas de Tailwind (`slate-*`, `gray-*`, `zinc-*`, `neutral-*`, `stone-*`).
2. **PROHIBIDO** el color verde (`green-500`, `green-400`) en estados de steppers o como fondo de botones de WhatsApp (el botón de WhatsApp usa **siempre** `brand-yellow-500`).
3. **PROHIBIDO** el uso de negro puro (`#000000`).
4. **PROHIBIDO** el uso de segundos acentos (púrpura, cian neón, gradientes cibernéticos).
5. Las sombras deben ser teñidas con azul (`rgba(0,39,124,α)`) o amarillo (`rgba(255,236,1,α)`), **jamás grises**.

---

### 3.2 Tipografía Oficial

| Rol | Fuente Oficial | Token | Tratamiento y Reglas |
|---|---|---|---|
| **Display / H1 / Impacto** | **Anton** (o Anton SC) | `font-display` | **UPPERCASE obligatorio**, line-height 0.8–1.0, tracking tight (-0.05em a -0.025em), `text-wrap: balance`. |
| **Subtitles / Badges / Buttons** | **Bebas Neue** | `font-subheading` | **UPPERCASE obligatorio**, tracking wider (0.05em–0.1em), peso bold visual. |
| **Body / UI / Inputs** | **Outfit** / **IBM Plex Sans** | `font-sans` | Sentence case, line-height relaxed (1.625), tamaño mínimo 16px. |
| **Data / Precios / Métricas** | **Geist Mono** | `font-mono` | `font-variant-numeric: tabular-nums` siempre ($4.600 ARS, 3,7 km). |

---

### 3.3 Componentes Signature de UI (Patrones Emblemáticos)

1. **Double Bezel Card (Doble Bisel):**
   * *Estructura:* Marco exterior (`double-bezel-outer`) en `bg-brand-blue-50/80` con borde `brand-blue-100` (8px padding, 16px border-radius) envolviendo un núcleo interior (`double-bezel-inner`) en `bg-white` (12px border-radius).
2. **CTA Nested Pill (Pastilla Anidada):**
   * *Diseño:* Botón redondeado (`rounded-full`) en `brand-yellow-500` con texto en `brand-blue-900` (`font-subheading`, uppercase) que anida un icono circular de 32px que se desplaza lateralmente (`translateX(4px)`) al hacer hover.
3. **Asymmetric Bento Grid:**
   * *Layout:* Grilla de 12 columnas con combinación asimétrica 7/5/12 para la sección de servicios (Express span 7, LowCost span 5, Flex span 5, 3PL span 7, Cotizador span 12).
4. **Float / Tilt Card (3D):**
   * *Efecto:* Tarjeta interactiva con perspectiva 1000px e inclinación suave (`rotateX`/`rotateY`) con respuesta al movimiento del mouse.
5. **Vertical / Horizontal Steppers:**
   * *Indicadores:* Pasos completados y activos en **`brand-yellow-500`** (nunca verde).

---

## 4. 🗣️ Tono de Voz y Estilo de Redacción

* **Voseo Rioplatense Obligatorio:** Se utiliza un trato cercano, directo y típicamente argentino (voseo):
  * ✅ *Ejemplos:* "Cotizá tu envío", "Enviá hoy", "Ingresá origen y destino", "Rastreá en vivo", "Contactanos", "Pagás al recibir".
  * ❌ *Evitar tuteo/usted:* "Cotiza tu envío", "Contáctenos", "Ingrese su dirección".
* **Promesa + Consecuencia (Garantía Directa):**
  * *"Si no llegamos a la hora acordada, el envío corre por nuestra cuenta. Sin excusas."*
* **Cero Clichés de IA (Prohibidos):**
  * ❌ Prohibido usar frases vacías como: "Elevá tu logística", "Seamless integration", "Unleash your potential", "Soluciones integrales 360°", "Next-Gen logistics".
* **Diccionario de Verbos UI Recomendados:**
  * Cotizar → **Cotizá**
  * Enviar → **Enviá**
  * Rastrear → **Rastreá**
  * Contactar → **Contactanos**
  * Ingresar → **Ingresá**

---

## 5. 💰 Tarifas Oficiales Vigentes (2026)

Lógica de cálculo exacta según la fuente de verdad del proyecto:

| Servicio | Rango de Distancia | Precio Base ARS | Regla de Excedente (+10 km) |
|---|---|---|---|
| **EXPRESS** | 0–3 km | $3.700 ARS | — |
| **EXPRESS** | 3–5 km | $4.600 ARS | — |
| **EXPRESS** | 5–7 km | $6.100 ARS | — |
| **EXPRESS** | 7–10 km | $8.200 ARS | — |
| **EXPRESS** | +10 km (hasta 20 km) | — | `Math.ceil(km) × $1.000` |
| **LOWCOST** | 0–3 km | $3.000 ARS | — |
| **LOWCOST** | 3–5 km | $4.000 ARS | — |
| **LOWCOST** | 5–7 km | $5.300 ARS | — |
| **LOWCOST** | 7–10 km | $7.000 ARS | — |
| **LOWCOST** | +10 km (hasta 20 km) | — | `Math.ceil(km) × $700` |

> ⚠️ **Regla de Cálculo `Math.ceil`:** Para distancias mayores a 10 km, se redondea la distancia total al entero superior y se multiplica por el precio unitario por km.
> *Ejemplo Express (10.3 km):* `Math.ceil(10.3) = 11 km × $1.000 = $11.000 ARS`.

---

## 🖼️ 6. Directrices para Generación de Imágenes (Nano Banana / Subagentes)

Cuando agentes o herramientas (como Nano Banana / MCP) generen imágenes para la marca, deben seguir estrictamente este marco:

* **Sujeto y Entorno:** Couriers en motocicletas modernas de mensajería urbana en las calles reales de Mar del Plata (costanera, microcentro, Chauvín, Güemes), transportando paquetes branded de Envíos DosRuedas.
* **Paleta Cromática de la Imagen:** Dominada por el Azul Egipcio (`#0636A5`), resaltando detalles viales y equipamiento en Amarillo Señal (`#FFEC01`) y elementos limpios en Blanco Puro (`#FFFFFF`).
* **Iluminación y Atmósfera:** Luz diurna clara o atardecer costero, transmitiendo energía urbana, velocidad segura, orden y profesionalismo.
* **Estilo Visual:** Fotografía comercial realista, enfoque nítido, saturación natural. Sin efectos duotono retro ni estética ciberpunk/neón.
* **Prohibición:** No generar motovehículos sin casco, ni repartidores sin equipamiento de seguridad vial. No utilizar paisajes urbanos extranjeros o incompatibles con Mar del Plata.

---

*Documento generado para servir de Fuente Única de la Verdad (SSoT) del proyecto Envíos DosRuedas (2026).*
