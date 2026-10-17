# Catálogo Maestro de Páginas, Contenidos, Diseño CSS y Animaciones

> **Proyecto:** Envíos DosRuedas (Logística y Mensajería Urbana en Mar del Plata)  
> **Directorio Base:** `C:\Users\prest\proyectos\02enviosdosruedassetiembre`  
> **Stack Técnico:** Next.js 16 (App Router) · React 19 · TypeScript 5.7 · Tailwind CSS v4 · Motion  
> **Norma Visual:** Ley de Tres Colores (`#0950F6` Azul Primario Institucional · `#FFEC01` Amarillo Vial · `#FFFFFF` Blanco)  

---

## 0. Componentes de Layout Globales (Compartidos en Todas las Páginas)

### 0.1 Cabecera Institucional (`OptimizedHeader.tsx`)
* **Ruta local:** [`src/components/layout/OptimizedHeader.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/OptimizedHeader.tsx)
* **Propósito:** Navegación persistente y anclada superior con menú responsive, enlaces directos a servicios, cotizador y contacto comercial.
* **Contenido textual exacto:**
  * Logotipo con isotipo y texto: "ENVÍOS DOSRUEDAS" (Mar del Plata).
  * Enlaces principales:
    * "SERVICIOS" (Desplegable con accesos a Express, LowCost, Flex, Depósito/Fulfillment, Cuenta Corriente y Contra Reembolso).
    * "COBERTURA" (Mapa y radios de entrega urbana).
    * "NOSOTROS" (Sobre Nosotros, Preguntas Frecuentes, Nuestras Redes).
    * "CONTACTO" (Atención al cliente y base de operaciones).
  * Botón de Acción Principal (CTA): "COTIZAR ONLINE" (Enlace directo a `/cotizar`).
* **Diseño CSS y Tokens de Estilo:**
  * Contenedor con `sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-brand-blue-100/60 shadow-xs`.
  * Tipografía: `font-subheading text-brand-blue-500 font-bold uppercase tracking-wider`.
  * CTA: `bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 px-5 py-2.5 rounded-full font-subheading font-bold shadow-accent-sm transition-transform duration-200 hover:scale-105`.
* **Animaciones e Interacción:**
  * Transición de opacidad y desplazamiento en el menú móvil con `AnimatePresence`.
  * Efecto de micro-elevación en hover de los enlaces de navegación.
  * Respeto a accesibilidad con `useReducedMotion()`.

### 0.2 Pie de Página Institucional (`OptimizedFooter.tsx`)
* **Ruta local:** [`src/components/layout/OptimizedFooter.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/OptimizedFooter.tsx)
* **Propósito:** Cierre corporativo, datos de contacto legal, horarios de atención, mapa de sitio y canales oficiales.
* **Contenido textual exacto:**
  * Franja decorativa superior: Amarilla vial de 6px (`bg-brand-yellow-500`).
  * Bloque de Identidad: "ENVÍOS DOSRUEDAS" · "Logística y Mensajería Urbana en Mar del Plata".
  * Base Operativa: "Friuli 1972, Mar del Plata, Buenos Aires, Argentina".
  * Canales Directos: Teléfono/WhatsApp `+54 9 223 660-2699` · Email `matiascejas@enviosdosruedas.com`.
  * Horarios de Operación: "Lunes a Viernes de 09:00 a 18:00 hs · Sábados de 10:00 a 15:00 hs".
  * Columnas de Enlaces:
    * Servicios: Envíos Express, Envíos LowCost, Mercado Envíos Flex, Depósito y Fulfillment, Cuenta Corriente, Contra Reembolso.
    * Empresa: Sobre Nosotros, Cobertura MDQ, Preguntas Frecuentes, Nuestras Redes, Contacto.
    * Legal y Seguridad: Política de Privacidad, Términos del Servicio, Defensa del Consumidor.
  * Copyright y Leyenda: "© 2026 Envíos DosRuedas. Todos los derechos reservados. No emitimos Factura A."
* **Diseño CSS y Tokens de Estilo:**
  * Fondo institucional `bg-brand-blue-500 text-white border-t border-brand-blue-400`.
  * Titulares de columna: `font-display text-xl uppercase tracking-wider text-brand-yellow-500`.
  * Texto de lectura: `font-sans text-xs text-white/80 leading-relaxed`.
* **Animaciones e Interacción:**
  * Stagger de columnas al entrar en viewport con `whileInView`.
  * Efecto hover de subrayado suave y cambio de tono sobre los links de navegación.

### 0.3 Carrusel Flotante de Canales y Redes (`CarruselRedes.tsx`)
* **Ruta local:** [`src/components/layout/CarruselRedes.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/CarruselRedes.tsx)
* **Propósito:** Carrusel infinito interactivo para conexión rápida mediante WhatsApp, Facebook e Instagram.
* **Contenido textual exacto:**
  * Tarjeta WhatsApp: "WHATSAPP · +54 223 660-2699 · Escribinos directamente para consultas, contrataciones o soporte express al toque."
  * Tarjeta Instagram: "INSTAGRAM · @enviosdosruedas · Seguí el minuto a minuto del equipo en la calle, tips de empaque y promociones."
  * Tarjeta Facebook: "FACEBOOK · /enviosdosruedas · Comunidad comercial, valoraciones de clientes y novedades institucionales."
* **Diseño CSS y Tokens de Estilo:**
  * WhatsApp: Verde oficial `#128C7E` / `#25D366` con textos y badges en blanco puro (`text-white`).
  * Instagram: Degradado oficial `#833AB4` → `#E1306C` → `#FD1D1D` → `#F77737` con tipografía blanca.
  * Facebook: Azul oficial `#0866FF` / `#1877F2` con marcas de agua y badges blancos.
* **Animaciones e Interacción:**
  * Desplazamiento horizontal continuo con `@utility animate-marquee-left` (36 segundos de ciclo infinito).
  * Pausa en hover (`hover:[animation-play-state:paused]`) para facilitar la lectura y el clic.

---

## 1. Página de Inicio (`page.tsx`)

* **Ruta local:** [`src/app/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/page.tsx)
* **Metadata y SEO:**
  * Título: "Mensajería en moto en Mar del Plata | Envíos DosRuedas"
  * Descripción: "Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Cotizá online."
  * Canonical: `https://www.enviosdosruedas.com/`

### Secciones Desglosadas:

#### 1.1 Hero Principal Interactivo (`HeroAnimado.tsx`)
* **Propósito:** Impacto visual inicial, propuesta de valor central, llamados a cotizar y mapa contextual animado.
* **Contenido exacto:**
  * Badge superior: "LOGÍSTICA URBANA & MENSAJERÍA EN MAR DEL PLATA · 2026"
  * Titular H1: "MENSAJERÍA EN MOTO Y LOGÍSTICA DE ÚLTIMA MILLA EN MAR DEL PLATA"
  * Párrafo descriptivo: "Envíos en el día para e-commerce, particulares y empresas. Franja horaria a elección de 3 hs en Express, entregas Same-Day en Mercado Envíos Flex y paquetería económica LowCost con flota propia."
  * CTAs:
    * Primario: "COTIZÁ TU ENVÍO YA" (Hacia `/cotizar`).
    * Secundario: "CONOCÉ LOS SERVICIOS" (Hacia `/servicios`).
  * Micro-métricas de confianza: "+7 años en la calle", "+120 opiniones 5.0★ en Google", "Flota propia equipada".
* **Diseño CSS:**
  * Fondo institucional `bg-brand-blue-500 text-white relative overflow-hidden`.
  * Titular: `font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none`.
  * CTA Primario: `bg-brand-yellow-500 text-brand-blue-500 font-subheading font-bold text-lg px-8 py-4 rounded-full shadow-cta-glow hover:bg-brand-yellow-400`.
* **Animaciones Motion:**
  * Entrada orquestada con variantes `containerVariants` y stagger de 0.12s.
  * Efecto de flotación suave en la tarjeta del mapa con `animate-floaty`.
  * Resorte cinético ágil (`stiffness: 360, damping: 28`).

#### 1.2 Segmentos de Clientes (`SegmentosHome.tsx`)
* **Propósito:** Segmentación de usuarios por necesidad comercial en Mar del Plata.
* **Contenido exacto:**
  * 4 Tarjetas de Segmento:
    1. Mercado Libre ("¿Vendés en Mercado Libre? Entregá en el mismo día con Flex con horario de corte 15:00 hs").
    2. E-Commerce / Depósito ("¿Tenés tienda online con stock? E-Commerce Same-Day y 24hs con stock en Friuli 1972").
    3. Comercios & Empresas ("¿Tenés envíos diarios? Reparto económico LowCost antes de las 19:00 hs con remito digital").
    4. Particulares & Urgencias ("¿Necesitás un envío ya? Cadetería prioritaria Express con franja de 3 hs a elección").
* **Diseño CSS:** Rejilla responsive `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` con tarjetas `DoubleBezelCard`.
* **Animaciones:** Elevación suave al hover (`hover:-translate-y-1.5 duration-200`) y transición de color en bordes.

#### 1.3 Visión General de Servicios (`ServicesOverview.tsx`)
* **Propósito:** Carrusel interactivo y tarjetas en profundidad de cada solución logística.
* **Contenido exacto:** Fichas de Express, LowCost, Flex, Depósito y Fulfillment, con tiempos, tarifas base y especificaciones de bulto (hasta 5 kg o 40 x 40 x 30 cm).
* **Diseño CSS:** Fondo degradado con lienzo de partículas de red (`NetworkCanvasWrapper`) y tarjetas 3D en capas con `blend-mode`.
* **Animaciones:** Drag horizontal táctil, navegación por flechas y cambio de tarjeta activa mediante `AnimatePresence`.

#### 1.4 Emprendedores y Depósito (`EmprendedoresHome.tsx`)
* **Propósito:** Promoción del servicio de fulfillment y almacenaje con descuento DropOFF.
* **Contenido exacto:** "DEPOSITÁ TU STOCK EN FRIULI 1972", "Ahorrá hasta un 20% con DropOFF y despachamos en el día".
* **Diseño CSS:** Tarjeta envolvente en lienzo azul y acentos amarillos viales.
* **Animaciones:** `whileInView` con umbral de 20% y revelado gradual.

#### 1.5 Prueba Social y Reseñas (`SocialProofSection.tsx`)
* **Propósito:** Validación de reputación con testimonios reales de clientes en Mar del Plata.
* **Contenido exacto:** Badge "5.0 / 5.0 EN GOOGLE · +120 VALORACIONES", 6 reseñas literales con autor y tiempo relativo, botón a Google Maps.
* **Diseño CSS:** Sección diferida con `@utility content-auto`, tarjetas de doble bezel en paleta azul y blanca.
* **Animaciones:** Hover cinético con escalado `scale-[1.02]` y renderizado diferido off-screen.

#### 1.6 Banner de Cierre y Conversión (`CtaSection.tsx`)
* **Propósito:** Formulario de cotización express para contacto directo por WhatsApp.
* **Contenido exacto:** "COTIZACIÓN INMEDIATA", campos Nombre, Comercio y Volumen de paquetes, botón "HABLAR POR WHATSAPP".
* **Diseño CSS:** `content-auto`, fondo `bg-brand-blue-500`, tarjeta de vidrio con `backdrop-blur-md` y bordes translúcidos.
* **Animaciones:** Transición de resorte `springConfig` al enviar y apertura de WhatsApp con mensaje prearmado.

---

## 2. Página de Contacto y Base Central (`contacto/page.tsx`)

* **Ruta local:** [`src/app/contacto/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/contacto/page.tsx)
* **Metadata y SEO:**
  * Título: "Contacto y Base Central | Envíos DosRuedas"
  * Descripción: "Contacto con el equipo comercial y logística urbana de Envíos DosRuedas en Mar del Plata. Cotizaciones inmediatas por WhatsApp y atención personalizada."
  * Schema JSON-LD: `ContactPage` con entidad `LocalBusiness`, geolocalización (-38.0055, -57.5426) y horarios de Friuli 1972.

### Secciones Desglosadas:

#### 2.1 Hero de Contacto (`ContactHero.tsx`)
* **Propósito:** Presentación de la base de operaciones y canales prioritarios de atención.
* **Contenido exacto:** "BASE DE OPERACIONES EN MAR DEL PLATA · ATENCIÓN COMERCIAL", Titular "HABLEMOS DE TUS ENVÍOS", "Escribinos por WhatsApp o visitanos en Friuli 1972".
* **Diseño CSS:** `bg-brand-blue-500 text-white py-20 lg:py-28`, badges monocromáticos en amarillo vial.
* **Animaciones:** Entrada suave con Motion en eje Y (`y: 16 -> 0`).

#### 2.2 Formulario de Consulta Inmediata (`ContactForm.tsx`)
* **Propósito:** Captura de leads comerciales para cotización y asesoramiento por WhatsApp.
* **Contenido exacto:** Inputs de Nombre, Empresa, Teléfono, Mensaje o Consulta, botón de envío con icono de WhatsApp.
* **Diseño CSS:** Tarjeta blanca de doble bezel (`DoubleBezelCard`), inputs con bordes azules accesibles `border-brand-blue-100` y foco `ring-2 ring-brand-blue-500`.
* **Animaciones:** Feedback inmediato en botón de envío y redirección programada a WhatsApp con trazabilidad UTM.

#### 2.3 Bento Grid de Información y Canales (`ContactInfo.tsx`)
* **Propósito:** Información estructurada de ubicación, teléfono, email, horarios y redes.
* **Contenido exacto:**
  * Tarjeta Base: "Friuli 1972, Mar del Plata (Zona Sur / Puerto residencial)".
  * Tarjeta Horarios: "Lunes a Viernes 09:00 a 18:00 hs · Sábados 10:00 a 15:00 hs".
  * Tarjeta Teléfono: "+54 9 223 660-2699 (Atención comercial: Matías Cejas)".
  * Tarjeta Email: "matiascejas@enviosdosruedas.com".
* **Diseño CSS:** Bento Grid irregular con fondos combinados (`bg-brand-blue-50/80` y `bg-white`).
* **Animaciones:** Revelado en cascada (stagger) con `whileInView`.

#### 2.4 Banner de Conversión Final (`ConversionBanner.tsx`)
* **Propósito:** Llamado a la acción de cierre para cotización rápida.
* **Contenido exacto:** "¿Necesitás coordinar un envío hoy mismo? Cotizá en 30 segundos online o consultá a nuestro equipo."
* **Diseño CSS:** Tarjeta corrida con borde amarillo vial y botón pill `CTANestedPill`.
* **Animaciones:** Escala en hover.

---

## 3. Página de Cotizador Unificado en Vivo (`cotizar/page.tsx`)

* **Ruta local:** [`src/app/cotizar/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/cotizar/page.tsx)
* **Metadata y SEO:**
  * Título: "Cotizá tu Envío en Moto | Envíos DosRuedas"
  * Descripción: "Cargá el retiro y la entrega una vez y compará la tarifa Express y LowCost para tu envío en Mar del Plata. Elegís el servicio y confirmás por WhatsApp."
  * Schema JSON-LD: `WebApplication` con dos ofertas (`EXPRESS` y `LOW_COST`).

### Secciones Desglosadas:

#### 3.1 Hero del Cotizador (`CotizadorHero.tsx`)
* **Propósito:** Explicación de la medición de distancia real y comparación de modalidades.
* **Contenido exacto:** "COTIZADOR ONLINE 2026 · MAR DEL PLATA", "UNA SOLA MEDICIÓN, DOS TARIFAS LADO A LADO".
* **Diseño CSS:** `bg-brand-blue-500 text-white pt-24 pb-12`, acentos tipográficos en `Anton` y `Bebas Neue`.
* **Animaciones:** Entrada secuencial con variantes de resorte.

#### 3.2 Cotizador Unificado con Mapa Interactivo (`CotizadorUnificado.tsx` + `LeafletRouteMap.tsx`)
* **Propósito:** Interfaz de cálculo automático: autocompletado de origen y destino, trazado de ruta vial en mapa y visualización comparativa de precios.
* **Contenido exacto:**
  * Campo 1: "Punto de Retiro (Origen en Mar del Plata)" con autocompletado seguro.
  * Campo 2: "Punto de Entrega (Destino)" con autocompletado seguro.
  * Selector de Tipo de Servicio: "Express (Franja 3 hs)" vs "LowCost (Día completo)".
  * Resumen de Distancia: "Distancia vial real calculada: X.X km".
  * Comparativa de Tarifas: Tarifa Express ($X.XXX) vs Tarifa LowCost ($X.XXX).
  * Botones de confirmación: "PEDIR EXPRESS POR WHATSAPP" y "PEDIR LOWCOST POR WHATSAPP".
* **Diseño CSS:** Doble bezel exterior e interior, mapa integrado con `min-h-[350px]`, estilos de Leaflet cargados bajo demanda (`import 'leaflet/dist/leaflet.css'`).
* **Animaciones:** Trazado progresivo de la polilínea de ruta animada sobre el mapa Leaflet, actualización fluida de números con `@number-flow/react`.

#### 3.3 Tabla Textual de Tarifas por Zonas (Sección Estática de Respaldo)
* **Propósito:** Transparencia tarifaria completa conforme a la ley de precios y verificación sin JavaScript.
* **Contenido exacto:** Tabla comparativa por tramos (0 a 3 km, 3 a 6 km, 6 a 10 km, excedente lineal por km de 10 a 20 km, y consulta para más de 20 km).
* **Diseño CSS:** Vista móvil en tarjetas apiladas y vista desktop en tabla con bordes `border-white/15`.
* **Animaciones:** Hover en filas con iluminación de fondo.

#### 3.4 Desglose de Recargos Operativos (`CotizadorRecargos.tsx`)
* **Propósito:** Claridad contractual sobre bultos mayores, lluvia y tiempo de espera.
* **Contenido exacto:** "Bulto estándar incluido: hasta 5 kg / 40x40 cm", "Espera en puerta sin cargo: hasta 10 min", "Días de lluvia suave: recargo operativo anunciado".
* **Diseño CSS:** Tarjetas de alerta e iconos informativos con bordes amarillos y azules.

---

## 4. Nuestras Redes y Comunidad (`nosotros/nuestras-redes/page.tsx`)

* **Ruta local:** [`src/app/nosotros/nuestras-redes/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/nosotros/nuestras-redes/page.tsx)
* **Metadata y SEO:**
  * Título: "Nuestras Redes y Comunidad | Envíos DosRuedas"
  * Descripción: "Conectate con la comunidad logística y de mensajería urbana en Mar del Plata. Seguí nuestras novedades de calle, beneficios y promociones exclusivas."

### Secciones Desglosadas:

#### 4.1 Hero de Redes (`NetworksHero.tsx`)
* **Propósito:** Apertura de comunidad y llamado a seguir los canales oficiales.
* **Contenido exacto:** "CANALES OFICIALES & COMUNIDAD VIAL", "SEGUÍ EL RITMO DE LA CIUDAD EN REDES".
* **Diseño CSS:** Fondo suave con halos de luz 3D (`blur-[130px]`) en azul y amarillo.
* **Animaciones:** Halos flotantes con `animate-float-slow`.

#### 4.2 Tarjetas de Canales Principales (`NetworksChannels.tsx`)
* **Propósito:** Acceso directo a WhatsApp, Instagram y Facebook con sus colores de marca oficiales.
* **Contenido exacto:**
  * Tarjeta Facebook: Azul institucional `#0866FF`, métricas de seguidores y enlace oficial.
  * Tarjeta Instagram: Degradado fotográfico oficial, publicaciones destacadas de cadetes en acción.
  * Tarjeta WhatsApp: Verde `#128C7E`, línea comercial directa.
* **Diseño CSS:** Tarjetas con arquitectura de doble bezel, bordes vibrantes y botones de enlace exterior.
* **Animaciones:** Elevación al hover (`translate-y-2`) y brillo en iconos con resorte `springConfigSnappy`.

#### 4.3 Muro de Publicaciones Recientes (`RecentPosts.tsx`)
* **Propósito:** Mockup visual interactivo de los contenidos más compartidos.
* **Contenido exacto:** 6 publicaciones simuladas con fotos de motos, entregas en Chauvín, Güemes y Centro, testimonios y consejos para embalaje de paquetes.
* **Diseño CSS:** Grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
* **Animaciones:** `whileInView` con revelado progresivo de fotos y textos.

---

## 5. Preguntas Frecuentes FAQ (`nosotros/preguntas-frecuentes/page.tsx`)

* **Ruta local:** [`src/app/nosotros/preguntas-frecuentes/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/nosotros/preguntas-frecuentes/page.tsx)
* **Metadata y SEO:**
  * Título: "Preguntas Frecuentes (FAQ) | Envíos DosRuedas"
  * Descripción: "Respuestas sobre mensajería en moto, Envíos Flex MercadoLibre, reparto LowCost, servicio Express, tarifas y cobertura logística en Mar del Plata."
  * Schema JSON-LD: `FAQPage` exhaustivo con todas las preguntas y respuestas mapeadas para Google Rich Snippets.

### Secciones Desglosadas:

#### 5.1 Hero de Preguntas Frecuentes (`FaqHero.tsx`)
* **Propósito:** Buscador contextual y bienvenida al centro de ayuda.
* **Contenido exacto:** "CENTRO DE AYUDA Y PREGUNTAS FRECUENTES", "TODO LO QUE NECESITÁS SABER SOBRE TUS ENVÍOS".
* **Diseño CSS:** Cabecera institucional con tipografía `Anton` en mayúsculas y acentos amarillos viales.
* **Animaciones:** Entrada con fade-in y desplazamiento suave.

#### 5.2 Selector de Categorías y Acordeón Interactivo (`Faq-categories.tsx`)
* **Propósito:** Navegación por tópicos (Servicios, Tarifas y Pagos, Tiempos y Cortes, Seguridad y Paquetes).
* **Contenido exacto:**
  * Categoría Envíos: Diferencias entre Express y LowCost, cobertura en barrios periféricos.
  * Categoría Precios y Pagos: Formas de pago (efectivo, Cuenta DNI, transferencia), aclaración de que no se emite Factura A.
  * Categoría Flex y E-Commerce: Reglas de entrega en el día, firma digital y acuse de entrega con foto.
  * Categoría Operativa: Límite de bulto estándar (5 kg / 40x40 cm) y política de lluvia.
* **Diseño CSS:** Botones de categoría con estilo pill y acordeón accesible con Radix UI (`AccordionTrigger`, `AccordionContent`).
* **Animaciones:** Despliegue de acordeón fluido con CSS Grid transition (`grid-template-rows: 0fr -> 1fr`).

#### 5.3 Módulo de Contacto Residual (`FaqCta.tsx`)
* **Propósito:** Derivación al chat de WhatsApp si la pregunta no se encuentra en el FAQ.
* **Contenido exacto:** "¿Tenés una consulta especial o un bulto no estándar? Escribinos por WhatsApp y te asesoramos en minutos."
* **Diseño CSS:** Tarjeta envolvente con borde decorativo y botón directo a chat.

---

## 6. Sobre Nosotros y Trayectoria (`nosotros/sobre-nosotros/page.tsx`)

* **Ruta local:** [`src/app/nosotros/sobre-nosotros/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/nosotros/sobre-nosotros/page.tsx)
* **Metadata y SEO:**
  * Título: "Sobre Nosotros y Trayectoria | Envíos DosRuedas"
  * Descripción: "Conocé la historia y valores de Envíos DosRuedas. Más de 7 años de trayectoria en logística urbana, cadetería y última milla e-commerce en Mar del Plata."
  * Schema JSON-LD: `AboutPage` con datos corporativos de `LocalBusiness` y dotación operativa.

### Secciones Desglosadas:

#### 6.1 Hero de Identidad (`AboutHero.tsx`)
* **Propósito:** Declaración de propósito y arraigo marplatense.
* **Contenido exacto:** "MÁS DE 7 AÑOS EN LAS CALLES DE MAR DEL PLATA", "LOGÍSTICA URBANA PENSADA POR Y PARA MARPLATENSES".
* **Diseño CSS:** `bg-brand-blue-500 text-white py-20 lg:py-28`, titulares en `Anton`.
* **Animaciones:** Desplazamiento coordinado de textos.

#### 6.2 Ventajas Territoriales (`AboutAdvantages.tsx`)
* **Propósito:** Explicar por qué la flota en moto supera al transporte tradicional en el tráfico de Mar del Plata.
* **Contenido exacto:** Agilidad en temporada, estacionamiento rápido, mochilas térmicas impermeables y ruteo punto a punto.
* **Diseño CSS:** Tarjetas de doble bisel en fondo claro `bg-white` con bordes suaves.
* **Animaciones:** `whileInView` con stagger por columna.

#### 6.3 Valores Operativos (`AboutValues.tsx`)
* **Propósito:** Compromisos de servicio (Puntualidad, Cuidado del Bulto, Honestidad Tarifaria y Trato Humano).
* **Contenido exacto:** 4 pilares descritos con iconos técnicos de Lucide.
* **Diseño CSS:** Tarjetas con sombras de relieve `shadow-float`.

#### 6.4 Línea de Tiempo Histórica (`AboutTimeline.tsx`)
* **Propósito:** Hitos de crecimiento desde los inicios hasta la base logística de Friuli 1972.
* **Contenido exacto:**
  * 2019: Inicios con cadetería personalizada en el centro y macrocentro.
  * 2021: Expansión de flota y cobertura hacia barrios del sur y norte.
  * 2023: Incorporación del servicio Mercado Envíos Flex y plataforma de seguimiento.
  * 2026: Apertura del depósito central y fulfillment con picking QR en Friuli 1972.
* **Diseño CSS:** Eje vertical animado con nodo central y tarjetas alternadas izquierda/derecha.
* **Animaciones:** Dibujo de la línea central con `grow-x` y revelado de tarjetas por scroll.

#### 6.5 Equipo y Fuerza Operativa (`AboutTeam.tsx`)
* **Propósito:** Humanizar la empresa mostrando cadetes y liderazgo operativo (Matías Cejas).
* **Contenido exacto:** Compromiso del equipo, capacitación vial y equipamiento de seguridad.
* **Diseño CSS:** Grid con retratos estilizados y badges de experiencia.

#### 6.6 Misión, Visión y Cierre (`AboutMissionVision.tsx`)
* **Propósito:** Visión de futuro para el comercio local y PyMEs de la ciudad.
* **Contenido exacto:** "Ser la infraestructura logística de confianza para cada tienda online de Mar del Plata."
* **Diseño CSS:** Bloque azul corporativo con botón de acción hacia `/servicios`.

---

## 7. Catálogo Central de Servicios (`servicios/page.tsx`)

* **Ruta local:** [`src/app/servicios/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/servicios/page.tsx)
* **Metadata y SEO:**
  * Título: "Servicios de Mensajería y Envíos | Envíos DosRuedas"
  * Descripción: "Servicios de logística y mensajería en moto en Mar del Plata: Express, LowCost, Flex, Cuenta Corriente y E-commerce con stock en depósito y flota propia."
  * Schema JSON-LD: `Service` con catálogo de ofertas (`hasOfferCatalog`) y breadcrumbs.

### Secciones Desglosadas:

#### 7.1 Hero de Servicios
* **Propósito:** Presentación de las 6 modalidades disponibles bajo una sola flota.
* **Contenido exacto:** Badge "SEIS SOLUCIONES · UNA FLOTA · MDQ 2026", Titular "NUESTROS SERVICIOS", botón "COTIZÁ TU ENVÍO".
* **Diseño CSS:** `bg-brand-blue-500 text-white pt-24 pb-16 border-b border-brand-blue-400`.
* **Animaciones:** Halos de resplandor `blur-[120px]`.

#### 7.2 Grilla de los 6 Servicios Principales
* **Propósito:** Comparativa rápida y derivación a cada subpágina técnica.
* **Contenido exacto:**
  1. Envíos Express (Franja de 3 hs a elección · Desde $3.700).
  2. Envíos LowCost (Entrega antes de 19 hs · Desde $3.000).
  3. Mercado Envíos Flex (SLA MercadoLibre "Llega Hoy" · Desde $3.000).
  4. Cuenta Corriente PyME (Facturación agrupada quincenal/mensual).
  5. E-Commerce 24hs (Retiro en el día y entrega día hábil siguiente).
  6. E-Commerce Same-Day (Stock en depósito Friuli 1972 · Tarifa fija a toda la ciudad).
* **Diseño CSS:** Grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` con badges inclinados `-rotate-1` en amarillo vial.
* **Animaciones:** Elevación al hover (`hover:shadow-antigravity-deep`).

#### 7.3 Tabla Comparativa Detallada de Prestaciones
* **Propósito:** Resumen lado a lado de tiempo de entrega, corte, elección de franja, tarifa base y uso ideal.
* **Diseño CSS:** Tabla de alto contraste con fondo blanco y encabezados en azul corporativo.

---

## 8. Depósito y Fulfillment para PyMEs (`servicios/deposito-fulfillment/page.tsx`)

* **Ruta local:** [`src/app/servicios/deposito-fulfillment/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/servicios/deposito-fulfillment/page.tsx)
* **Metadata y SEO:**
  * Título: "Depósito y Fulfillment para PyMEs | Envíos DosRuedas"
  * Descripción: "Depósito y fulfillment logístico en Friuli 1972, Mar del Plata. Picking, empaque, opción Drop-Off y entregas en el día con stock seguro para tu negocio."

### Secciones Desglosadas:

#### 8.1 Hero de Depósito y Fulfillment (`EmprendedoresHero.tsx`)
* **Propósito:** Presentación de la base logística de Friuli 1972 como centro de despacho e-commerce.
* **Contenido exacto:** "DEPÓSITO CENTRAL EN FRIULI 1972", "ALMACENÁ, PREPARÁ Y DESPACHÁ SIN MOVERTE DE TU CASA".
* **Diseño CSS:** Fondo en contraste vial con acentos oscuros `#0950F6`.
* **Animaciones:** Entrada escalonada de elementos.

#### 8.2 Características del Servicio (`EmprendedoresFeatures.tsx`)
* **Propósito:** Detalle del proceso operativo de picking, empaque con bolsas inviolables y control por código QR.
* **Contenido exacto:** Paso a paso: Recepción de mercadería, inventario digital, armado de pedidos y despacho diario.
* **Diseño CSS:** Lienzo blanco limpio con iconos de depósito y checklist de verificación.

#### 8.3 Beneficios Comerciales Estratégicos (`EmprendedoresBenefits.tsx`)
* **Propósito:** Reducción de costos fijos de alquiler para tiendas online.
* **Contenido exacto:** Sin costo de mantenimiento fijo mensual en planes seleccionados, opción DropOFF con 20% de descuento si el cliente acerca el paquete a Friuli 1972.
* **Diseño CSS:** Tarjetas en azul profundo con tipografía blanca y acentos amarillos.

#### 8.4 Tarifas y Planes E-Commerce (`EmprendedoresPricing.tsx`)
* **Propósito:** Publicación clara de planes Same-Day y 24hs con stock en sede.
* **Contenido exacto:** Tarifa plana por paquete entregado en Mar del Plata.

---

## 9. Empresas y Cuenta Corriente B2B (`servicios/empresas-cuenta-corriente/page.tsx`)

* **Ruta local:** [`src/app/servicios/empresas-cuenta-corriente/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/servicios/empresas-cuenta-corriente/page.tsx)
* **Metadata y SEO:**
  * Título: "Cuenta Corriente y Envíos Corporativos para Empresas | Envíos DosRuedas"
  * Descripción: "Cuenta corriente corporativa en Mar del Plata. Pagos agrupados semanales o mensuales con resumen de envíos para comercios, distribuidoras y repuesteras."

### Secciones Desglosadas:

#### 9.1 Hero y Solicitud Directa B2B
* **Propósito:** Presentación de cuenta corriente para clientes frecuentes y formulario de alta online.
* **Contenido exacto:**
  * Columna Izquierda: "LOGÍSTICA CORPORATIVA B2B", "ABRÍ TU CUENTA CORRIENTE Y CENTRALIZÁ TUS ENVÍOS", "Pagos semanales, quincenales o mensuales sin costo de mantenimiento".
  * Columna Derecha: Formulario interactivo con campos Nombre, Razón Social, Rubro Principal (Autopartes, Farmacia, Indumentaria, etc.), Volumen mensual estimado y Teléfono.
* **Diseño CSS:** Layout de 12 columnas (`lg:grid-cols-12`) con tarjeta de formulario en `DoubleBezelCard`.
* **Animaciones:** Validación inmediata de campos y animación de éxito (`¡SOLICITUD ENVIADA!`) con apertura de WhatsApp.

#### 9.2 Beneficios Corporativos para Comercios
* **Propósito:** Razones para consolidar envíos en cuenta corriente (remito digital, prioridad de despacho, chofer asignado).
* **Contenido exacto:** 4 ventajas B2B detalladas.
* **Diseño CSS:** Fondo blanco con tarjetas de borde azul claro.

#### 9.3 Preguntas Frecuentes de Facturación y Pago
* **Propósito:** Explicación del ciclo de corte contable y entrega de comprobantes.
* **Contenido exacto:** Comprobantes según encuadre fiscal habitual, sin emisión de Factura A.

---

## 10. Envíos Contra Reembolso y Cobro en Destino (`servicios/envios-contrareembolso/page.tsx`)

* **Ruta local:** [`src/app/servicios/envios-contrareembolso/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/servicios/envios-contrareembolso/page.tsx)
* **Metadata y SEO:**
  * Título: "Envíos Contra Reembolso en Mar del Plata | Cobro en Destino"
  * Descripción: "Cobro contra reembolso y entrega segura en Mar del Plata. Rendición de efectivo en el día para tu comercio o tienda online, sin comisiones adicionales."

### Secciones Desglosadas:

#### 10.1 Hero de Contra Reembolso
* **Propósito:** Destacar la confianza del cobro en mano en efectivo o transferencia al entregar.
* **Contenido exacto:** "COBRO CONTRA ENTREGA EN MANO", "VENDÉ A CLIENTES QUE NO USAN TARJETA CON RENDICIÓN INMEDIATA".
* **Diseño CSS:** `bg-brand-blue-500 text-white py-20 lg:py-28`, iconos de billetes y billetera segura.
* **Animaciones:** Entrada fluida de titulares con Motion.

#### 10.2 Mecanismo de Seguridad y Rendición
* **Propósito:** Explicar cómo el cadete recibe el dinero y lo rinde al comerciante (en el día, día siguiente o por transferencia Cuenta DNI/CBU).
* **Contenido exacto:** Paso a paso: Retiro del producto, entrega y cobro exacto en puerta, rendición inmediata sin cobro de comisión porcentual usurera.
* **Diseño CSS:** Infografía visual estructurada en 3 pasos con números correlativos en `font-mono`.

#### 10.3 Beneficios para Aumentar Ventas Locales
* **Propósito:** Mostrar cómo ofrecer contra reembolso incrementa conversiones en clientes desconfiados de internet en Mar del Plata.
* **Diseño CSS:** Tarjetas con fondos claros y bordes estructurales.

---

## 11. Envíos Express Prioritarios en Moto (`servicios/envios-express/page.tsx`)

* **Ruta local:** [`src/app/servicios/envios-express/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/servicios/envios-express/page.tsx)
* **Metadata y SEO:**
  * Título: "Envíos Express en Moto en MDQ | Envíos DosRuedas"
  * Descripción: "Servicio prioritario en moto con franja horaria a elección y 2 hs de anticipación. Tarifas fijas por distancia real en Mar del Plata. Despachá tu envío hoy."

### Secciones Desglosadas:

#### 11.1 Hero Express (`ExpressHero.tsx`)
* **Propósito:** Presentación de la máxima velocidad logística para trámites urgentes y paquetería crítica.
* **Contenido exacto:** Badge "SERVICIO PRIORITARIO PUNTO A PUNTO", Titular "ENVÍOS EXPRESS EN MOTO CON FRANJA DE 3 HS A ELECCIÓN", "Corte a las 15:00 hs con 2 hs de anticipación mínima".
* **Diseño CSS:** `bg-brand-blue-500 text-white`, collage visual de motos y cadetes con mochila hermética.
* **Animaciones:** Entrada escalonada con resortes rápidos.

#### 11.2 Características y Reglas Operativas (`ExpressFeatures.tsx`)
* **Propósito:** Fijar con precisión las reglas del servicio (estricto cumplimiento de copy-guard).
* **Contenido exacto:** Elección de franja (ejemplo de 10 a 13 hs o de 16 a 19 hs), prohibición expresa de promesas engañosas ("en 2 horas"), ruteo directo sin paradas intermedias.
* **Diseño CSS:** Lienzo blanco con tarjetas de borde azul institucional.

#### 11.3 Tarifario Oficial Express (`ExpressPricing.tsx`)
* **Propósito:** Mostrar los tramos de precio vigentes para 2026.
* **Contenido exacto:** 0 a 3 km ($3.700), 3 a 6 km ($4.500), 6 a 10 km ($5.800), tramo lineal de 10 a 20 km ($540 por km adicional), más de 20 km a consultar.
* **Diseño CSS:** Bloque azul corporativo con precios en `Geist Mono` tabular de gran tamaño.

#### 11.4 Casos de Uso Frecuentes (`ExpressUseCases.tsx`)
* **Propósito:** Ejemplos reales de contratación (repuestos mecánicos con auto desarmado en taller, medicamentos urgentes, llaves, contratos notariales).
* **Diseño CSS:** Bento grid de 4 casos prácticos.

---

## 12. Envíos LowCost Programados (`servicios/envios-lowcost/page.tsx`)

* **Ruta local:** [`src/app/servicios/envios-lowcost/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/servicios/envios-lowcost/page.tsx)
* **Metadata y SEO:**
  * Título: "Envíos LowCost y Cadetería en el Día | Envíos DosRuedas"
  * Descripción: "Paquetería y cadetería programada con entrega en el día en Mar del Plata. Pedidos antes de las 13:00 hs se entregan antes de las 19:00 hs con tarifa fija."

### Secciones Desglosadas:

#### 12.1 Hero LowCost (`LowCostHero.tsx`)
* **Propósito:** Posicionamiento como la opción más económica de la ciudad sin resignar entrega el mismo día.
* **Contenido exacto:** "PAQUETERÍA PROGRAMADA EN EL DÍA", "MÁXIMO AHORRO PARA TU COMERCIO: PEDÍS ANTES DE LAS 13 HS Y SE ENTREGA ANTES DE LAS 19 HS".
* **Diseño CSS:** Fondo institucional azul con badge amarillo vial "MÁS ECONÓMICO".
* **Animaciones:** Halos de resplandor suave y entrada vertical.

#### 12.2 Características Clave (`LowCostFeatures.tsx`)
* **Propósito:** Claridad sobre la no elección de franja horaria a cambio de una tarifa sustancialmente menor.
* **Contenido exacto:** Tarifa por envío individual (no por lote), entrega garantizada hasta las 19:00 hs, seguimiento y remito firmado.
* **Diseño CSS:** Tarjetas blancas de doble bisel.

#### 12.3 Tabla Tarifaria LowCost (`LowCostPricing.tsx`)
* **Contenido exacto:** Tramos oficiales 2026: 0 a 3 km ($3.000), 3 a 6 km ($3.700), 6 a 10 km ($4.800), excedente de 10 a 20 km ($430 por km).
* **Diseño CSS:** Azul corporativo `#0950F6` con números monoespaciados en amarillo vial.

#### 12.4 Ventajas de Rentabilidad (`LowCostBenefits.tsx`)
* **Propósito:** Explicar cómo el comerciante traslada un costo de envío accesible a su comprador final para evitar carritos abandonados.
* **Diseño CSS:** Tarjetas ilustradas con iconos de crecimiento y ahorro.

#### 12.5 Diagrama Operativo de Funcionamiento (`LowCostHowItWorks.tsx`)
* **Propósito:** Flujo de 4 pasos (Solicitud antes de 13 hs -> Retiro programado -> Ruteo por zonas -> Entrega antes de 19 hs).
* **Diseño CSS:** Línea de flujo con indicadores numéricos.

---

## 13. Mercado Envíos Flex Same-Day (`servicios/enviosflex/page.tsx`)

* **Ruta local:** [`src/app/servicios/enviosflex/page.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/servicios/enviosflex/page.tsx)
* **Metadata y SEO:**
  * Título: "Mercado Envíos Flex Same-Day | Envíos DosRuedas"
  * Descripción: "Servicio logístico para Mercado Envíos Flex en Mar del Plata. Entregas en el día para proteger tu reputación. Corte 15:00 hs y distribución antes de 20 hs."

### Secciones Desglosadas:

#### 13.1 Hero Flex (`FlexHero.tsx`)
* **Propósito:** Solución especializada para vendedores de Mercado Libre que activan la insignia "Llega Hoy".
* **Contenido exacto:** "LOGÍSTICA OFICIAL FLEX EN MAR DEL PLATA", "CUIDAMOS EL COLOR VERDE DE TU REPUTACIÓN", "Corte 15:00 hs y entrega garantizada antes de las 20:00 hs".
* **Diseño CSS:** Azul institucional `#0950F6` con badge distintivo en amarillo vial simulando la medalla Flex.
* **Animaciones:** Entrada dinámica de títulos con Motion.

#### 13.2 Funcionalidades para Vendedores (`FlexFeatures.tsx`)
* **Propósito:** Retiros múltiples, coordinación directa de etiquetas y cumplimiento estricto del SLA > 99.8%.
* **Contenido exacto:** Cobertura de Mar del Plata completa por distancia vial, control de paquete en app.
* **Diseño CSS:** Lienzo blanco con iconos de escaneo y trazabilidad.

#### 13.3 Beneficios de Reputación (`FlexBenefits.tsx`)
* **Propósito:** Evitar reclamos por entregas demoradas y brindar acuse de entrega con foto en puerta y firma digital.
* **Contenido exacto:** Prueba documental irrefutable ante Mercado Libre para anular mediaciones indebidas.
* **Diseño CSS:** Bloque azul oscuro con tarjetas de seguridad.

#### 13.4 Tarifas y Niveles Flex (`FlexPricing.tsx`)
* **Contenido exacto:** Valores vigentes correspondientes a los rangos de compensación de Mercado Libre en Mar del Plata.
* **Diseño CSS:** Tabla de tarifas con números destacados en `Geist Mono`.

#### 13.5 Flujo de Trabajo Diario (`FlexHowItWorks.tsx`)
* **Propósito:** Cronograma horario: Ventas de la mañana -> Retiro 15:00 hs -> Ruteo inteligente -> Entrega en puerta antes de 20:00 hs.
* **Diseño CSS:** Diagrama cronológico con reloj y puntos de control.

#### 13.6 Requisitos de Activación (`FlexRequirements.tsx`)
* **Propósito:** Guía para vendedores que aún no activaron Flex en su cuenta de Mercado Libre.
* **Contenido exacto:** Tener domicilio fiscal/físico en Mar del Plata, habilitar la opción Flex en publicaciones y avisar al equipo para coordinar la primera colecta.
