# PROMPT MAESTRO DE DISEÑO Y MAQUETACIÓN PARA STITCH: ECOSISTEMA ENVIOS DOSRUEDAS

Prompt integral de alta precisión para Stitch / AI UI Generators. Define la arquitectura visual, tokens, comportamiento interactivo y páginas completas de la plataforma logística urbana de **Envíos DosRuedas** en Mar del Plata, reflejando fielmente el código fuente de producción y sus componentes modulares.

---

## 1. ESPECIFICACIÓN GENERAL DEL PRODUCTO

**Propósito:** Plataforma web corporativa y sistema de cotización y despacho logístico para Mar del Plata (Buenos Aires, Argentina). Conecta a comercios, emprendedores, vendedores de MercadoLibre y particulares con una flota de motos coordinada desde su base central en `Friuli 1972`.
**Tono & Vibe:** Corporativo, enérgico, de máxima confiabilidad, ágil y transparente. Trato en **voseo rioplatense** directo ("cotizá", "cargá", "elegí", "escribinos").

---

## 2. DESIGN SYSTEM (REQUIRED)

- **Plataforma:** Web, Responsive (Mobile-First y Desktop optimizado para pantallas sm, md, lg, xl).
- **Ley de Tres Colores (Tokens Cromáticos Canónicos):**
  - `brand-blue-500` / `brand-blue-700` (`#0950F6`): Azul corporativo institucional (techo máximo de oscuridad; prohibido negro `#000000` o azules más oscuros como `#0636A5`).
  - `brand-blue-400` (`#3570F8`): Acentos claros, íconos y estados hover.
  - `brand-blue-300` (`#628FF9`): Bordes activos y anillos de foco accesibles.
  - `brand-blue-100` (`#BACEFD`): Divisores de tabla y líneas estructurales sutiles.
  - `brand-blue-50` (`#E6EEFE`): Fondos suaves y biseles exteriores de tarjetas.
  - `brand-yellow-500` (`#FFEC01`): Amarillo vial para botones de acción (CTAs) de alta prioridad, chips de estado y micro-badges.
  - `brand-yellow-400` (`#FFF12E`): Hover interactivo de botones.
  - `white` (`#FFFFFF`): Blanco puro institucional para contenedores interiores y textos sobre fondo azul.
- **Tipografía Oficial:**
  - **Titulares de Impacto / Display:** `Anton` (`font-display`, uppercase, tracking ajustado).
  - **Subtítulos y Eyebrows:** `Bebas Neue` (`font-subheading`, uppercase, tracking-wider).
  - **Cuerpo de Lectura y Formularios:** `Outfit` (`font-sans`, leading-relaxed).
  - **Métricas, Horas y Tarifas:** `Geist Mono` (`font-mono`, tabular-nums).
- **Primitivas UI Mandatorias (Rutas Relativas en Código):**
  - `DoubleBezelCard` (`src/components/ui/DoubleBezelCard.tsx`): Tarjeta insignia con bisel exterior suave (`#E6EEFE`) y contenedor interior blanco puro o azul corporativo.
  - `CTANestedPill` (`src/components/ui/CTANestedPill.tsx`): Botón redondeado de acción con micro-chip circular para ícono o flecha de confirmación.
  - `InputField` (`src/components/ui/InputField.tsx`): Input accesible con anillo de foco corporativo (`ring-brand-blue-500` o `ring-brand-yellow-500`).
  - `RadioCardGroup` (`src/components/ui/RadioCardGroup.tsx`): Selector interactivo de tarjetas de servicio para comparar opciones en paralelo.
  - `HeroProceduralBackground` (`src/components/ui/HeroProceduralBackground.tsx`): Fondo con partículas o grillas radiales sutiles sin sobrecargar el render.

---

## 3. SALVAGUARDAS DE NEGOCIO Y REGLAS DE COPY (INMUTABLES)

1. **Envíos Express:** Franja horaria de **3 hs a elección del cliente**, solicitada con al menos **2 hs de anticipación**. Horario de corte: **15:00 hs**. Tarifa base: **$3.700** (0 a 3 km). Prohibido prometer "en 2 horas", "en 3 hs", "menos de 2 h" o "60 a 90 minutos".
2. **Envíos LowCost:** Reparto programado económico en el día, **sin elección de franja horaria**. Horario de corte: **13:00 hs**; entrega garantizada antes de las **19:00 hs**. Tarifa base: **$3.000** (0 a 3 km). Tarifa individual por distancia vial, nunca agrupada por lote.
3. **Mercado Envíos Flex:** Logística en el mismo día para MercadoLibre. Horario de corte: **15:00 hs**; entrega garantizada antes de las **20:00 hs**. Tarifa Nivel 1: **$3.000**. SLA superior al 99.8% con remito digital y foto del paquete en destino.
4. **Capacidad y Bultos:** Medida estándar incluida hasta **5 kg** o **40 x 40 x 30 cm**. Bulto especial con recargo operativo desde **$1.800**. Prohibido inventar límites rígidos como "15 kg".
5. **Cálculo Tarifario y Distancias:** 
   - 0-3 km: Express $3.700 | LowCost $3.000
   - 3-5 km: Express $4.600 | LowCost $3.700
   - 5-8 km: Express $5.500 | LowCost $4.500
   - 8-10 km: Express $6.800 | LowCost $5.600
   - Tramo extendido (>10 km hasta 20 km): cálculo lineal directo por km adicional ($680/km Express, $560/km LowCost). Nunca utilizar `Math.ceil`.
   - Más de 20 km: Estado `Consultar` derivando a atención personalizada por WhatsApp.
   - Prohibido utilizar la frase "sin sorpresas" si existen recargos estipulados (lluvia +50%, espera desde minuto 11, paradas extra $1.800, bultos especiales).
6. **Facturación:** Comprobantes legales según encuadre fiscal. No se emite Factura A.
7. **Sede Central:** `Friuli 1972, Mar del Plata`. Teléfono: `+54 223 660-2699`. Horarios: Lun a Vie 09 a 18 hs, Sáb 10 a 15 hs.

---

## 4. MAPA DE RUTAS Y ESTRUCTURA PÁGINA POR PÁGINA

### PÁGINA 1: COTIZADOR UNIFICADO E INTERACTIVO
- **Ruta Relativa:** `src/app/cotizar/page.tsx`
- **Componentes:**
  - `src/components/cotizar/unified/CotizadorHero.tsx`
  - `src/components/cotizar/unified/CotizadorUnificado.tsx`
  - `src/components/cotizar/unified/CotizadorForm.tsx`
  - `src/components/cotizar/unified/CotizadorComparativa.tsx`
  - `src/components/cotizar/unified/CotizadorMapa.tsx`
  - `src/components/cotizar/unified/CotizadorRecargos.tsx`
  - `src/lib/pricing.ts`
  - `src/lib/promises.ts`
- **Estructura Visual & Flujo:**
  1. **CotizadorHero:** Fondo azul institucional `#0950F6` con `HeroProceduralBackground`. Badge inclinada `Dos servicios · Una sola carga`. Titular display `COTIZÁ TU ENVÍO Y COMPARÁ`. Tarjeta resumen del flujo en tres pasos: 01. Medición de ruta por calle, 02. Comparativa simultánea Express vs LowCost, 03. Confirmación directa por WhatsApp.
  2. **Isla de Cotización (Columna Izquierda 7 cols):** Formulario con inputs accesibles para dirección de retiro (origen) y entrega (destino) con autocompletado en Mar del Plata, nombre, teléfono y producto ("Qué hay adentro"). Botón principal `Ver las dos tarifas`.
  3. **Visualizador de Mapa (Columna Derecha 5 cols):** Mapa georreferenciado con Leaflet / OpenStreetMap mostrando origen, destino y trazado de ruta en tiempo real, junto con un chip que muestra los kilómetros viales exactos calculados.
  4. **Comparador Express vs LowCost (`RadioCardGroup`):**
     - **Express:** Tarifa calculada según la tabla ($3.700 a $6.800 o km lineal). Entrega en franja horaria de 3 hs a elección del cliente, corte 15:00 hs con 2h anticipación.
     - **LowCost:** Tarifa económica ($3.000 a $5.600 o km lineal). Entrega programada antes de las 19:00 hs, corte 13:00 hs, sin franja fija.
     - **Línea del Día:** Comparativa gráfica sobre una escala de 9:00 a 19:00 hs que contrasta la ventana puntual de 3 hs de Express frente a la jornada completa de LowCost.
     - Botón de confirmación final con `CTANestedPill` amarillo vial que abre WhatsApp con el ID de cotización pre-cargado.
  5. **Tabla de Tarifas Públicas Oficiales:** Tabla responsive con números tabulares `tabular-nums` detallando las franjas de 0-3km, 3-5km, 5-8km, 8-10km y valor por km en tramo extendido.
  6. **Recargos Operativos Claros:** 4 tarjetas detallando lluvia (+50%), paradas extra ($1.800), espera desde minuto 11 y bultos mayores a 5 kg.

---

### PÁGINA 2: CONTACTO Y BASE CENTRAL
- **Ruta Relativa:** `src/app/contacto/page.tsx`
- **Componentes:**
  - `src/components/contacto/ContactHero.tsx`
  - `src/components/contacto/ContactForm.tsx`
  - `src/components/contacto/ContactInfo.tsx`
  - `src/components/contacto/ConversionBanner.tsx`
  - `src/lib/whatsapp.ts`
- **Estructura Visual & Flujo:**
  1. **ContactHero ("El Ida y Vuelta"):** Hero azul con riel punteado horizontal en SVG animado que simboliza el mensaje que sale del cliente, llega a la base en Friuli 1972 y regresa resuelto. Badge con dirección oficial y tarjeta con estado operativo en vivo: `Lun a Vie 09:00 a 18:00 hs · Sáb 10:00 a 15:00 hs`.
  2. **Bento Grid de Canales y Formulario:**
     - **Formulario Comercial (DoubleBezelCard):** Campos para Nombre y Apellido, Empresa / Comercio y selector de volumen mensual estimado. Al enviar, valida y genera la URL a WhatsApp con mensaje estructurado abriendo el chat en menos de 2 minutos.
     - **Canales Directos:** Tarjeta WhatsApp Comercial (`+54 223 660-2699`), Tarjeta Instagram (`@enviosdosruedas`) y Tarjeta Facebook.
     - **Base Central Friuli 1972:** Módulo geolocalizado con mapa de ubicación, punto de DropOFF de paquetes con 20% de descuento y botón de navegación en Google Maps.
  3. **ConversionBanner:** Tarjeta de contraste oscuro con micro-luz pulsante amarilla y llamado a la acción: "¿Tenés envíos para hoy? Los entregamos a tiempo".

---

### PÁGINA 3: CATÁLOGO DE SERVICIOS Y SUBPÁGINAS
- **Ruta Relativa Principal:** `src/app/servicios/page.tsx`
- **Subpáginas Especializadas:**
  - `src/app/servicios/envios-express/page.tsx` (Urgencias con franja horaria a elección de 3 hs)
  - `src/app/servicios/envios-lowcost/page.tsx` (Reparto programado en el día hasta las 19:00 hs)
  - `src/app/servicios/enviosflex/page.tsx` (Same-Day MercadoLibre con acuse fotográfico y firma)
  - `src/app/servicios/empresas-cuenta-corriente/page.tsx` (Cuenta corriente flexible sin mínimos con liquidación periódica)
  - `src/app/servicios/deposito-fulfillment/page.tsx` (Stock en base Friuli 1972, Same-Day $6.000 fijo y Next Day 24hs $4.000)
  - `src/app/servicios/plan-emprendedores/page.tsx` (Escalado de envíos para tiendas locales)
  - `src/app/servicios/envios-contrareembolso/page.tsx` (Cobranza contra entrega en efectivo o transferencia sin comisión)
- **Estructura Visual:**
  1. **Hero Servicios:** Catálogo completo de logística urbana y mensajería en moto con flota propia.
  2. **Barra de Filtros:** Botones interactivos para filtrar entre `Todos`, `Urgencias y Trámites`, `E-Commerce & MercadoLibre`, `Empresas & Depósito`.
  3. **Grid de 6 Servicios con DoubleBezelCard:** Tarjetas con doble bisel, badges de servicio, precio base destacado en amarillo vial, especificaciones de corte horario y botón `Ver detalle y tarifas`.
  4. **Tabla Comparativa de 5 Dimensiones:** Tiempo de entrega, Corte horario, Elección de franja, Tarifa base e Ideal para, comparando los 6 servicios en una matriz limpia.

---

### PÁGINA 4: SOBRE NOSOTROS Y TRAYECTORIA
- **Ruta Relativa:** `src/app/nosotros/sobre-nosotros/page.tsx`
- **Componentes:**
  - `src/components/nosotros/sobre-nosotros/AboutHero.tsx`
  - `src/components/nosotros/sobre-nosotros/AboutAdvantages.tsx`
  - `src/components/nosotros/sobre-nosotros/AboutValues.tsx`
  - `src/components/nosotros/sobre-nosotros/AboutTimeline.tsx`
  - `src/components/nosotros/sobre-nosotros/AboutTeam.tsx`
  - `src/components/nosotros/sobre-nosotros/AboutMissionVision.tsx`
- **Estructura Visual:**
  1. **AboutHero:** Titular display `MÁS DE 7 AÑOS MOVIENDO MAR DEL PLATA CON FLOTA PROPIA`. Grid de 4 métricas destacadas: `+7 Años`, `+45.000 Envíos`, `+18 Motos en calle`, `99.8% SLA de puntualidad`.
  2. **4 Ventajas Territoriales:** Base física central en Friuli 1972, Flota propia sin apps intermediarias, Acuse digital con foto y firma, y Ruteo inteligente por zonas.
  3. **Valores Operativos:** Compromiso de palabra, Cuidado de cada bulto, Trato humano directo por WhatsApp y Apoyo al comercio local.
  4. **Línea de Tiempo Histórica:** Hitos clave desde 2017 (comienzos con 2 motos), 2020 (pandemia y auge e-commerce), 2022 (apertura de base en Friuli 1972) hasta 2026 (fulfillment integral y plataforma consolidada).
  5. **Misión y Visión con Cierre:** Compromiso con el comerciante marplatense y CTA a cotizar online.

---

### PÁGINA 5: PREGUNTAS FRECUENTES (FAQ)
- **Ruta Relativa:** `src/app/nosotros/preguntas-frecuentes/page.tsx`
- **Componentes:**
  - `src/components/nosotros/preguntas-frecuentes/FaqHero.tsx`
  - `src/components/nosotros/preguntas-frecuentes/Faq-categories.tsx`
  - `src/components/nosotros/preguntas-frecuentes/faqData.ts`
  - `src/components/nosotros/preguntas-frecuentes/FaqCta.tsx`
- **Estructura Visual:**
  1. **FaqHero:** Titular `RESPUESTAS CLARAS SOBRE MENSAJERÍA Y LOGÍSTICA URBANA`. Buscador en tiempo real de dudas frecuentes.
  2. **Categorías Temáticas y Acordeones Accesibles:**
     - Servicios Express y LowCost (diferencias de horarios y selección de franja).
     - Mercado Envíos Flex (tiempos de entrega hasta las 20:00 hs y múltiples retiros diarios).
     - Tarifas, Pagos y Facturación (medios de pago, facturación sin Factura A).
     - Pesos y Medidas (hasta 5 kg o 40 x 40 x 30 cm estándar; recargo especial).
     - Cobertura (radio urbano de Mar del Plata, batán y periferia a consultar).
  3. **FaqCta:** "¿No encontraste lo que buscabas? Escribinos por WhatsApp y te contestamos en menos de 2 minutos".

---

### PÁGINA 6: NUESTRAS REDES Y COMUNIDAD
- **Ruta Relativa:** `src/app/nosotros/nuestras-redes/page.tsx`
- **Componentes:**
  - `src/components/nosotros/nuestras-redes/NetworksHero.tsx`
  - `src/components/nosotros/nuestras-redes/NetworksChannels.tsx`
  - `src/components/nosotros/nuestras-redes/RecentPosts.tsx`
- **Estructura Visual:**
  1. **NetworksHero:** Titular `NUESTRA COMUNIDAD Y EL DÍA A DÍA EN LA CALLE`.
  2. **Canales Oficiales:** Enlaces interactivos con estadísticas a Instagram (`@enviosdosruedas`), Facebook y canal de avisos de WhatsApp.
  3. **Feed Mockup de Posts Recientes:** Grid visual de fotos auténticas de la flota de motos, testimonios de comerciantes locales y recomendaciones prácticas para empaque de encomiendas.

---

## 5. ESPECIFICACIÓN TÉCNICA DEL SHELL Y NAVEGACIÓN GLOBAL

- **Header (`src/components/layout/Header.tsx`):** Barra fija o sticky con efecto cristal (`backdrop-blur-md`), logo de marca en SVG, navegación desktop con dropdowns accesibles para "Servicios" y "Nosotros", botón destacado amarillo vial `Cotizá tu envío`, y botón hamburguesa accesible (`aria-expanded`, `aria-label`).
- **Drawer Móvil (`src/components/layout/MobileDrawer.tsx`):** Panel lateral deslizante con backdrop oscuro, navegación categorizada, botón de cierre y acceso directo a WhatsApp y cotizador.
- **Footer (`src/components/layout/Footer.tsx`):** Cuatro columnas con datos de la base en Friuli 1972, mapa de Mar del Plata, enlaces institucionales, horarios de atención y botón flotante de retorno `Volver arriba`.
