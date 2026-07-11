# PROMPT MAESTRO — GENERADOR DE LANDING PAGE PREMIUM PARA ENVÍOS DOS RUEDAS (2026)

> Copia todo este documento (que incluye las directrices avanzadas de diseño de Stitch y los datos del negocio) y pégalo en Lovable, Bolt, Google AI Studio o tu generador de confianza para obtener un sitio web con diseño de autor y alta conversión.

-----

## 🧠 ROL Y CONTEXTO

Eres un desarrollador web y diseñador de interfaces premium (UI/UX Architect). Tu objetivo es generar una landing page estática de alta conversión para **Envíos Dos Ruedas**, una empresa de logística de última milla en Mar del Plata, Argentina (operativa en 2026).

**Directriz fundamental:** Evita a toda costa los diseños genéricos de plantilla IA (AI Slop). El sitio debe verse como un trabajo de diseño de autor a medida, con un control exquisito del espacio en blanco, tipografía expresiva, asimetría elegante y micro-interacciones pulidas.

-----

## 📋 DATOS E IDENTIDAD DEL NEGOCIO

```yaml
NOMBRE DEL NEGOCIO: Envíos Dos Ruedas
TIPO DE NEGOCIO: Logística de última milla, mensajería y soluciones E-Commerce Flex
UBICACIÓN PRINCIPAL: Friuli 1972, Mar del Plata, Provincia de Buenos Aires, Argentina
TELÉFONO: +54 223 660-2699
WHATSAPP: +54 223 660-2699 (Link: https://wa.me/542236602699)
EMAIL: matiascejas@enviosdosruedas.com
HORARIO DE ATENCIÓN: Lunes a Viernes 9:00 - 18:00 | Sábados 10:00 - 15:00 | Domingos Cerrado
REDES SOCIALES: Instagram: @enviosdosruedas | Facebook: enviosdosruedas
PROPUESTA DE VALOR: "Tu aliado confiable en mensajería y delivery en Mar del Plata"
VENTAJA COMPETITIVA:
  - Atención personalizada: Trato humano de tú a tú ("sos un partner, no un ticket").
  - Flota exclusiva: Más de 15 repartidores propios que conocen cada rincón de la ciudad.
  - Cero tercerización: Todo el proceso es operado directamente por la empresa.
  - Reputación impecable: 5.0 estrellas en Google Reviews.
AÑO DE VIGENCIA DE TARIFAS Y OPERACIONES: 2026
```

-----

## 🎨 SISTEMA DE DISEÑO SEMÁNTICO (STITCH COMPATIBLE)

### 1. Atmósfera Visual
* **Densidad:** Balanceada (Daily App Balanced - nivel 5/10). Espaciado generoso entre secciones (mínimo `80px` a `120px` vertical en desktop).
* **Varianza:** Asimétrica controlada (nivel 7/10). Evitar layouts perfectamente simétricos de bloques alternos de color.
* **Movimiento:** Interacciones fluidas (nivel 6/10) utilizando físicas de resorte suaves (`stiffness: 100, damping: 20`).

### 2. Paleta de Colores Exclusiva
* **Primary Container / Egyptian Blue:** `#0636A5` — Utilizado para bloques de contenido destacado, encabezados clave y botones de acción principal. Proyecta solidez.
* **Secondary Container / Brand Yellow:** `#FFEC01` (o `#f5e300` suave) — Reservado para tarjetas informativas complementarias, bloques de soporte o badges de acento. Aporta luz y optimismo.
* **Canvas Light:** `#FAFAFB` (o `slate-50`) — Fondo general claro y aireado.
* **Charcoal Ink:** `#0F172A` (o `slate-900`) — Texto principal de alta legibilidad.
* **Muted Steel:** `#64748B` (o `slate-500`) — Textos de soporte y descripciones secundarias.
* **Shadow Glows:** Brillos sutiles personalizados y sombras difusas (`glow-blue`, `glow-yellow`) configurados en el tema, evitando brillos neón pesados.

### 3. Arquitectura Tipográfica
* **Títulos de Marca (H1, H2 grandes):** Usar fuentes estilizadas de gran carácter como `Outfit` o `Plus Jakarta Sans` con un interlineado ajustado (*track-tight*).
* **Textos de Cuerpo e Instructivos:** Usar `Inter` o `DM Sans` con leading relajado y un ancho máximo de lectura de `65ch` para evitar fatiga visual.
* **Números y Datos (Tarifas, Km):** Usar tipografía mono-espaciada (`JetBrains Mono` o `Geist Mono`) para transmitir precisión técnica en la cotización.

-----

## 🏗️ ESTRUCTURA Y COMPONENTES DE LA LANDING

El sitio debe estructurarse estrictamente de forma vertical con las siguientes secciones:

### 1. Navigation Header (Sticky)
* Fondo semi-translúcido con efecto *glassmorphism* (desenfoque de fondo y borde sutil).
* Logo tipográfico en azul con isotipo estilizado de dos ruedas.
* Botón de llamada a la acción prominente: **"Cotizar Envío"** que dirija a la calculadora o WhatsApp.

### 2. Hero Section (Asimétrico y Humano)
* **Diseño:** Distribución a dos columnas (Left-Aligned o Split Screen). No usar portadas centradas genéricas.
* **Headline:** *"Hacemos que tus envíos lleguen hoy. Sin vueltas."* (Enfoque en el beneficio de última milla en Mar del Plata).
* **Subheadline:** *"Logística inteligente Same-Day con flota propia para comercios y e-commerce en Mar del Plata. Sos un partner, no un ticket."*
* **Visual:** Integrar tipografía con imágenes inline de repartidores reales o íconos semánticos con esquinas muy redondeadas (`16px` a `24px`).
* **BARRERA DE DISEÑO:** Prohibido el texto sobrepuesto a imágenes, flechas de "Scroll para explorar" o botones secundarios redundantes.

### 3. El Cotizador Inteligente (Express & LowCost 2026)
Un widget interactivo de cotización en tiempo real basado en la distancia en kilómetros, aplicando estrictamente las tarifas vigentes de 2026:

#### Tarifas Express (Prioridad Máxima en el Día)
* **0–3 km:** $3.700 ARS
* **3–5 km:** $4.600 ARS
* **5–7 km:** $6.100 ARS
* **7–10 km:** $8.200 ARS
* **+10 km:** $8.200 + `Math.ceil(km − 10) × $1.000` (Se cobra el km extra completo sin prorratear).

#### Tarifas LowCost (Envíos no urgentes)
* **0–3 km:** $3.000 ARS
* **3–5 km:** $4.000 ARS
* **5–7 km:** $5.300 ARS
* **7–10 km:** $7.000 ARS
* **+10 km:** $7.000 + `Math.ceil(km − 10) × $700` (Se cobra el km extra completo sin prorratear).

### 4. Tarjetas de Servicios Integrados
Evita la cuadrícula de 3 columnas idénticas. Utiliza un diseño asimétrico de tarjetas con bordes redondeados (`20px`) y sombras tenues de fondo:
* **Envíos Express:** Entregas instantáneas puerta a puerta en Mar del Plata.
* **Envíos LowCost:** Solución de bajo costo para despachos programados.
* **MercadoLibre Flex:** Conexión en el día para potenciar tus ventas flex.
* **Logística E-Commerce / 3PL:** Almacenamiento y fulfillment para emprendedores locales.

### 5. La Ventaja Territorial (USP)
Lista estructurada de 3 puntos fuertes utilizando iconos minimalistas de trazo redondeado:
* **Atención Personalizada:** Contacto directo por WhatsApp ante cualquier eventualidad local.
* **Flota 100% Exclusiva:** Sin aplicaciones intermediarias.
* **Confianza Local:** 5.0/5 estrellas en Google Reviews por comerciantes reales de Mar del Plata.

### 6. Testimonios Reales y Mapa Local
* Carrusel o grilla de testimonios con estrellas de puntuación ★★★★★.
* Mapa interactivo centrado en la zona de cobertura (Mar del Plata) usando un iframe de Google Maps o un widget de OpenStreetMap estilizado.

### 7. Formulario de Conversión y Footer
* Formulario minimalista con validación nativa (Nombre, Negocio, WhatsApp, Mensaje) conectado a Formspree o mailto.
* Footer en Azul Principal (`#00277c`) con enlaces de políticas, redes sociales y la leyenda: *"© 2026 Envíos Dos Ruedas. Todos los derechos reservados."*

-----

## 🚫 ANTI-PATRONES A EVITAR (NORMAS DE CALIDAD IA)
* **NO usar emojis en títulos o botones** (proyecta falta de profesionalismo).
* **NO usar texto genérico de relleno** como "Lorem Ipsum". Todo el texto debe estar redactado en español con modismos locales de Argentina (voseo: *"Ingresá tu dirección"*, *"Cotizá tu envío"*).
* **NO usar colores puramente negros (`#000000`)** o degradados neón ultravioleta/violeta.
* **NO usar animaciones pesadas o de escala lineal**; prefiere físicas de resorte suaves aplicadas solo a la entrada de elementos y hovers.
* **NO incluir flechas de rebote** ni llamadas a la acción duplicadas en el Hero.
* **NO usar nombres genéricos de personas ficticias** en los testimonios. Use perfiles coherentes de Mar del Plata.