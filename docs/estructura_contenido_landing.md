# Estructura de Componentes y Contenidos - Landing Page

Este documento define la estructura y contenidos de texto exactos para cada sección de la landing page y layout global (extraídos de `src/app/page.tsx` y `src/app/layout.tsx`), utilizando nombres semánticos y modulares sin especificar aspectos de diseño o elementos visuales.

---

## 🏗️ Layout Global (Estructura Base - `layout.tsx`)

### `MainHeader` (`<header id="site-header">` / `OptimizedHeader`)
*   **Identidad y Marca:**
    *   Nombre de Marca: `Envíos Dosruedas`
    *   Eslogan / Subtítulo: `tu solución confiable`
*   **Enlace de Accesibilidad (Skip Link):**
    *   Texto: `Saltar al contenido` (Destino: `#main-content`)
*   **Navegación Principal (`navItems`):**
    *   `Inicio` (Enlace: `/`)
    *   `Servicios` (Menú Desplegable):
        *   `Envíos Express` | Descripción: `Rápido, en 2 horas` | Enlace: `/servicios/envios-express`
        *   `Envíos LowCost` | Descripción: `Económico e inteligente` | Enlace: `/servicios/envios-lowcost`
        *   `Envíos Flex (MeLi)` | Descripción: `Socio MercadoLibre Flex` | Enlace: `/servicios/enviosflex`
        *   `E-Commerce & 3PL` | Descripción: `Logística para PyMEs` | Enlace: `/servicios/plan-emprendedores`
    *   `Nosotros` (Menú Desplegable):
        *   `Sobre Nosotros` | Descripción: `Quiénes somos` | Enlace: `/nosotros/sobre-nosotros`
        *   `Preguntas Frecuentes` | Descripción: `Todas tus dudas resueltas` | Enlace: `/nosotros/preguntas-frecuentes`
        *   `Nuestras Redes` | Descripción: `Comunidad en movimiento` | Enlace: `/nosotros/nuestras-redes`
    *   `Contacto` (Enlace: `/contacto`)
*   **Acciones Directas:**
    *   Teléfono: `+54 223 660-2699`
    *   Botón Principal (CTA): `Cotizar Envío` (Enlace: `/cotizar/express`)

---

## 🧩 Secciones del Contenido (`MainContent` - `page.tsx`)

### 1. `HeroSection` (`<section id="hero">` / `HeroAnimado`)
*   **Distintivo / Badge Superior:** `Tu Solución Confiable`
*   **Título Principal (H1):** `Mensajería y Logística E-Commerce en Mar del Plata`
*   **Texto Descriptivo Principal:** `Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.`
*   **Botones de Acción (CTA):**
    *   Botón Primario: `Solicitar Servicio` (Enlace: `/cotizar/express`)
    *   Botón Secundario: `Ver Servicios` (Enlace: `/servicios/envios-express`)
*   **Puntos Fuertes Destacados:**
    *   `100% SEGURO`
    *   `RÁPIDO`
    *   `COBERTURA TOTAL`
*   **Elementos Informativos Secundarios:**
    *   Ruteo de Envíos: `Optimizado`
    *   Detalle de reparto: `Reparto en Curso` | ID: `MDQ-FLEX-2026` | Origen: `CD Centro` | Destinatario: `Zona Güemes`
    *   Indicador de estado: `ENTREGA FLEX ACTIVA`
    *   Métrica / Contador: `+5000 ENVÍOS`

---

### 2. `CompanyVision` (`<section id="vision">` / `VisionSection`)
*   **Etiqueta de Sección:** `Partner Logístico Especializado`
*   **Título de Sección (H2):** `CONECTAMOS MAR DEL PLATA DE PUNTA A PUNTA`
*   **Texto Descriptivo:** `Nos especializamos en la distribución de última milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo récord con tecnología de punta y tarifas transparentes.`
*   **Pilares del Servicio:**
    *   `Entregas a Tiempo`: `Puntualidad garantizada en cada envío. Optimizamos cada ruta mediante geolocalización avanzada.`
    *   `Envíos Seguros`: `Protección total de tus paquetes. Despachos con custodia digital y firmas de entrega seguras.`
*   **Métricas y Estadísticas de Impacto:**
    *   `+52K`: `Envíos y entregas realizadas con éxito en toda la región` (Etiqueta: `MAR DEL PLATA 2026`)
    *   `0`: `Paquetes extraviados`
    *   `+140`: `Emprendedores confían`

---

### 3. `ServicesOverview` (`<section id="services">` / `ServicesOverview`)
*   **Etiqueta de Sección:** `NUESTROS SERVICIOS`
*   **Título de Sección (H2):** `Soluciones logísticas a tu medida`
*   **Texto Descriptivo:** `Cuatro modalidades pensadas para cada tipo de negocio y cada velocidad de entrega en Mar del Plata.`
*   **Tarjetas de Servicios Integrales:**
    1.  `Envíos Express` (Badge: `URGENTE`): `Mensajería en moto, entregas inmediatas en Mar del Plata.` | Botón: `Ver más` (Enlace: `/servicios/envios-express`)
    2.  `Envíos LowCost` (Badge: `ECONÓMICO`): `Envíos económicos con posibilidad de entregas en el día.` | Botón: `Ver más` (Enlace: `/servicios/envios-lowcost`)
    3.  `Envíos Flex (MercadoLibre)` (Badge: `INTEGRACIÓN FLEX`): `Entregas en el día de tus ventas en MercadoLibre.` | Botón: `Ver más` (Enlace: `/servicios/enviosflex`)
    4.  `E-Commerce & 3PL` (Badge: `PYMES & CORPORATIVO`): `Recomendado para E-Commerce, escalá tu tienda online.` | Botón: `Ver más` (Enlace: `/servicios/plan-emprendedores`)

---

### 4. `ServicesCarousel` (`<section id="services-slider">` / `SliderServicios`)
*   **Etiqueta de Sección:** `Innovación en Distribución`
*   **Título de Sección (H2):** `Soluciones Especiales para Industrias`
*   **Texto Descriptivo:** `Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución en Mar del Plata.`
*   **Navegación:** `Slide anterior` / `Siguiente slide`
*   **Soluciones por Industria (Slides Carousel):**
    1.  `E-Commerce` (Subtítulo: `Entregas same day y next day`): `Envíos a domicilio de tus ventas online. Entregas misma jornada o a partir del día siguiente.`
    2.  `Repuestos automotores` (Subtítulo: `Partes críticas al instante`): `Envío rápido de repuestos y partes críticas a talleres y concesionarios de toda la ciudad.`
    3.  `Indumentaria y calzado` (Subtítulo: `Moda y logística inversa`): `Logística inversa y entregas rápidas de moda local. Gestionamos cambios y devoluciones sin fricción.`
    4.  `Trámites` (Subtítulo: `Cadería administrativa`): `Todo tipo de trámites, cobranzas y despacho de documentación. Atención el mismo día.`
    5.  `Insumos varios` (Subtítulo: `Entregas en tiempo y forma`): `Entrega de todo tipo de insumos: médicos, tecnológicos, gastronómicos y más.`
    6.  `Encomiendas` (Subtítulo: `Retiro y despacho`): `Retiro a domicilio y despacho de encomiendas con seguimiento en tiempo real.`

---

### 5. `EntrepreneursHub` (`<section id="entrepreneurs">` / `EmprendedoresHome`)
*   **Etiqueta de Sección:** `Socio Estratégico Local`
*   **Título de Sección (H2):** `Potenciamos tu Negocio Local`
*   **Texto Descriptivo:** `Si vendés online, necesitás un socio logístico que responda. Creamos planes a tu medida con tarifas dinámicas y recolección a domicilio programada en Mar del Plata.`
*   **Tarjetas de Propuesta de Valor:**
    1.  `Logística E-Commerce` (Tag: `EMPRENDEDORES`): `Gestión integral de última milla para PyMEs en crecimiento. Recolección gratis a domicilio y seguimiento satelital.`
        *   Características clave: `Soporte dedicado`, `Entregas contrareembolso sin cargo extra`, `Entregas en tiempo y forma`.
        *   Enlace: `Conocer más` (Enlace: `/servicios/plan-emprendedores`)
    2.  `Envíos Flex MercadoLibre` (Tag: `MERCADOLIBRE`): `Socio estratégico para potenciar tus ventas con entregas rápidas y seguras en el mismo día.`
        *   Características clave: `Cumplimiento de SLAs de entrega`, `Etiquetado compatible`, `Ruteo dinámico inteligente`.
        *   Enlace: `Conocer más` (Enlace: `/servicios/envios-flex`)
    3.  `Soluciones Corporativas` (Tag: `EMPRESAS / CORPORATIVO`): `Optimización logística integral para grandes marcas y empresas con Cuenta Corriente Flexible, ruteos personalizados en el día y beneficios de escala exclusivos.`
        *   Características clave: `Soporte dedicado`, `Entregas contrareembolso sin cargo extra`, `Entregas en tiempo y forma`.
        *   Enlace: `Conocer más planes` (Enlace: `/servicios/logistica-corporativa`)

---

### 6. `CallToAction` (`<section id="cta">` / `CtaSection`)
*   **Etiqueta / Badge:** `SOLUCIONES ESCALABLES 2026`
*   **Título de Sección (H2):** `¿Listo para escalar la logística de tu e-commerce?`
*   **Texto Descriptivo:** `Olvidate de la gestión de paquetes en Mar del Plata y enfocaté en vender más. Dejá la distribución urbana en manos de expertos.`
*   **Botones de Acción Directa:**
    *   Botón WhatsApp: `Contactanos por WhatsApp` (Enlace: `https://wa.me/542236602699`)
    *   Botón Tarifas: `Ver tarifas 2026` (Enlace: `/cotizar/lowcost`)
*   **Nota de Pie de Sección:** `Atención comercial inmediata para PyMEs y Emprendedores. Operación centralizada en Friuli 1972.`

---

### 7. `SocialMediaFeed` (`<section id="social-feed">` / `CarruselRedes`)
*   **Etiqueta / Badge:** `Conectate con nosotros`
*   **Título de Sección (H2):** `SEGUÍ NUESTRO MOVIMIENTO`
*   **Texto Descriptivo:** `Sumate a nuestra comunidad digital y mantente al día con las últimas noticias de logística en Mar del Plata.`
*   **Accesos a Redes Sociales:**
    *   `Instagram` | Descripción: `Novedades diarias` (Enlace: `https://instagram.com/enviosdosruedas`)
    *   `Facebook` | Descripción: `Comunidad activa` (Enlace: `https://facebook.com/enviosdosruedas`)
    *   `WhatsApp` | Descripción: `Atención inmediata` (Mensaje predeterminado a WhatsApp)
*   **Texto de Interacción en Galería:** `Ver publicación`

---

## 🏗️ Pie de Página Global (`MainFooter` - `layout.tsx` / `OptimizedFooter`)

### `MainFooter` (`<footer id="site-footer">` / `OptimizedFooter`)
*   **Resumen Institucional:**
    *   Nombre de Marca: `Envíos Dosruedas` (Eslogan: `tu solución confiable`)
    *   Descripción: `Logística urbana inteligente de última milla en Mar del Plata. Conectamos tu negocio con entregas express en el día, soluciones Flex para MercadoLibre y distribución 3PL eficiente.`
    *   Acreditación: `3PL Certificado`
*   **Redes Sociales:**
    *   Encabezado: `Seguinos en redes`
    *   Redes: `Instagram` (`/nosotros/nuestras-redes`), `Facebook` (`/nosotros/nuestras-redes`), `WhatsApp` (`https://wa.me/542236602699`)
*   **Navegación de Soluciones:**
    *   Encabezado: `Soluciones`
    *   `Envíos Express` (Enlace: `/servicios/envios-express`)
    *   `Envíos LowCost` (Enlace: `/servicios/envios-lowcost`)
    *   `Envíos Flex (MeLi)` (Enlace: `/servicios/enviosflex`)
    *   `E-Commerce & 3PL` (Enlace: `/servicios/plan-emprendedores`)
*   **Información de Contacto Operativo:**
    *   Encabezado: `Contacto`
    *   Ubicación: `Friuli 1972, Mar del Plata`
    *   Teléfono: `+54 223 660-2699`
    *   Email: `matiascejas@enviosdosruedas.com`
    *   Horarios: `Lunes a Sábado: 08:00 a 20:00 hs`
*   **Derechos de Autor y Navegación Institucional:**
    *   Derechos: `© 2026 Envíos DosRuedas. Todos los derechos reservados.`
    *   Navegación Informativa: `Sobre Nosotros` (`/nosotros/sobre-nosotros`), `Preguntas Frecuentes` (`/nosotros/preguntas-frecuentes`), `Nuestras Redes` (`/nosotros/nuestras-redes`)
    *   Legales: `Términos y Condiciones` (`/terminos-y-condiciones`), `Política de Privacidad` (`/politica-de-privacidad`)
