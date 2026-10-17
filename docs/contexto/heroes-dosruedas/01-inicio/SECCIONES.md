# Contenido y Secciones de la Página de Inicio (Layout y Página)

Documentación descriptiva y funcional de la experiencia completa de la página principal del sitio web, integrando tanto el contenedor y layout global ([src/app/layout.tsx](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/layout.tsx)) como el cuerpo de la página ([src/app/page.tsx](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/page.tsx)), sin incluir código fuente.

---

## Estructura General de la Página

La página de inicio se compone de una cabecera global fija, seis secciones troncales de contenido en el cuerpo principal, una sección interactiva de comunidad en redes sociales y un pie de página corporativo integral:

1. **Cabecera Global y Navegación:** Barra de navegación fija con menú desplegable, contacto telefónico y cotizador rápido (`OptimizedHeader`).
2. **Hero Principal:** Titular de última milla, cobertura integral con flota propia, mapa isométrico interactivo con radar y ticker de diferenciales (`HeroAnimado`).
3. **Segmentos de Clientes:** Módulos de solución adaptados a Mercado Libre, tiendas e-commerce con depósito, empresas con envíos diarios y particulares con urgencias (`SegmentosHome`).
4. **Catálogo y Ficha Técnica:** Carrusel tridimensional con los cuatro servicios troncales (Express, LowCost, Flex, Same Day/24hs) y fichas técnicas modales (`ServicesOverview`).
5. **Soluciones para Emprendedores:** Cuenta corriente sin mínimos, beneficios de entrega y marquesina con marcas locales (`EmprendedoresHome`).
6. **Prueba Social y Reseñas:** Validación de reputación con calificación 5.0 en Google Maps y testimonios verificados (`SocialProofSection`).
7. **Cierre Comercial y Cotización Rápida:** Formulario directo conectado a WhatsApp con tiempo de respuesta comercial menor a 5 minutos (`CtaSection`).
8. **Carrusel de Comunidad Digital:** Módulos de interacción y seguimiento en Facebook, Instagram y WhatsApp oficial (`CarruselRedes`).
9. **Pie de Página Global:** Banner de llamados activos, enlaces de servicios, base de operaciones en Friuli 1972, horarios de despacho y políticas legales (`OptimizedFooter`).

---

## Metadatos y Configuración SEO del Layout

- **Título General:** Mensajería en moto en Mar del Plata | Envíos DosRuedas
- **Descripción SEO:** Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Cotizá online.
- **Descripción OpenGraph y Redes Sociales:** La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente.
- **Datos Estructurados (JSON-LD):** Esquemas de Organización (`Organization`) y Negocio Local (`LocalBusiness`) que acreditan la sede en Friuli 1972, coordenadas geográficas, horarios de atención y canales de contacto oficial.
- **Accesibilidad:** Mecanismo directo de salto al contenido principal para lectores de pantalla y navegación por teclado.

---

## A. Cabecera Global y Barra de Navegación (Navbar)

- **Componente asociado:** `OptimizedHeader` (en [src/components/layout/OptimizedHeader.tsx](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/OptimizedHeader.tsx))
- **Propósito:** Brindar orientación continua en todo el sitio, acceso rápido a los servicios por categoría, llamada telefónica directa y cotizador inmediato.

### Elementos y Contenidos
- **Identidad de Marca:** Logo de Envíos DosRuedas enlazado a la página de inicio (`/`).
- **Navegación Principal (Desktop y Menú Móvil):**
  - **Inicio:** Acceso directo a la portada (`/`).
  - **Menú desplegable "Servicios":**
    - Todos los Servicios (`/servicios`)
    - Envíos Express (`/servicios/envios-express`)
    - Envíos LowCost (`/servicios/envios-lowcost`)
    - Envíos Flex (MeLi) (`/servicios/enviosflex`)
    - Cuenta Corriente Flexible (`/servicios/empresas-cuenta-corriente`)
    - E-commerce 24HS (`/servicios#ecommerce-24hs`)
    - E-commerce Same Day (`/servicios/deposito-fulfillment`)
  - **Menú desplegable "Nosotros":**
    - Portal Nosotros (`/nosotros`)
    - Sobre Nosotros (`/nosotros/sobre-nosotros`)
    - Preguntas Frecuentes (`/nosotros/preguntas-frecuentes`)
    - Nuestras Redes (`/nosotros/nuestras-redes`)
  - **Contacto:** Acceso directo a la página de contacto (`/contacto`).
- **Acciones y Accesos Rápidos:**
  - **Línea Telefónica Directa:** Enlace telefónico de marcado rápido con el número de soporte.
  - **Botón de Cotización (CTA):** "Cotizá tu envío" (enlace directo a `/cotizar`).
  - **Menú Móvil Desplegable:** Drawer accesible con soporte táctil, iconos representativos y cierre mediante tecla Escape o cambio de ruta.

---

## B. Cuerpo Principal de la Página de Inicio

### 1. Hero Principal: Cobertura y Radar Urbano
- **Componente asociado:** `HeroAnimado`
- **Insignia superior:** "Flota propia · Todo Mar del Plata" con ícono de rayo.
- **Titular Principal (H1):** "EL MOTOR DE TU ÚLTIMA MILLA. SOMOS LA SOLUCIÓN A TUS ENVÍOS", con énfasis tipográfico en "última milla".
- **Bajada descriptiva:** Mensajería y logística e-commerce en Mar del Plata: envíos en el día con motos propias. Llegamos a toda la ciudad y los repartidores son nuestros, sin tercerizar.
- **Acciones:**
  - Botón primario: "Cotizá tu envío" (hacia `/cotizar`).
  - Enlace secundario: "Ver servicios" (hacia `/servicios`).
- **Mapa y Fichas:**
  - Mapa isométrico de Mar del Plata con radar y pulso continuo.
  - Ficha de origen: "Base Friuli 1972" (Mar del Plata).
  - Ficha de destino: "Entrega en el día" (en todo MDQ).
- **Cinta continua de diferenciales (Ticker):** Envíos en el día · Flota propia · Cero tercerización · Todo Mar del Plata · Retiro en tu local.

### 2. Segmentación de Clientes y Necesidades
- **Componente asociado:** `SegmentosHome`
- **Insignia:** "Elegí tu solución a medida".
- **Titular (H2):** "¿CÓMO PODEMOS IMPULSAR TU LOGÍSTICA HOY?"
- **Bajada:** Seleccioná tu tipo de negocio o necesidad y descubrí el servicio ideal diseñado para las calles de Mar del Plata.
- **Módulos por Perfil:**
  1. *Mercado Libre (Destacada):* "¿Vendés en Mercado Libre?" · Entregas en el mismo día con Flex, corte 15:00 hs y retiros diarios · CTA: "Ver Solución Flex" (`/servicios/enviosflex`).
  2. *E-Commerce y Depósito:* "¿Tenés tienda online con stock en depósito?" · Modalidades 24hs y Same-Day (corte 13:00 hs, entrega antes de las 19:00 hs), guarda en Friuli 1972 y empaque incluido · CTA: "Ver planes E-Commerce" (`/servicios`).
  3. *Comercios y Empresas:* "¿Tenés envíos diarios?" · Reparto programado económico en el día (corte 13:00 hs, entrega antes de las 19:00 hs), tarifa fija y remito digital · CTA: "Ver Paquetería LowCost" (`/servicios/envios-lowcost`).
  4. *Particulares y Urgentes:* "¿Necesitás un envío ya?" · Cadetería prioritaria en moto con franja de 3 horas a elección y 2 horas de anticipación mínima · CTA: "Cotizá tu Envío Express" (`/cotizar`).

### 3. Catálogo y Ficha Técnica de Servicios
- **Componente asociado:** `ServicesOverview`
- **Insignia:** "NUESTROS SERVICIOS".
- **Titular (H2):** "SOLUCIONES LOGÍSTICAS A TU MEDIDA".
- **Controles:** Botón para pausar o reanudar rotación automática y botones de avance y retroceso.
- **Fondo interactivo:** Malla de red de conexiones logísticas sobre canvas.
- **Servicios:**
  1. *Envíos Express:* Franja de 3 hs a elección · Tarifa base por tramo de hasta 4 km · Sin recargo hasta 5 kg · Aviso por WhatsApp · CTA: "COTIZÁ TU EXPRESS".
  2. *Envíos LowCost:* Programado en el día · Pedidos antes de las 13:00 hs entregados antes de las 19:00 hs · Sin franja horaria a elección · Tarifa más económica por kilómetro · CTA: "PROBÁ EL LOWCOST".
  3. *Envíos Flex:* Entregas en el día para ventas de MercadoLibre · Horario de corte 15:00 hs · Entregas antes de las 20:00 hs · Recolección en el local sin costo adicional · CTA: "CONFIGURÁ FLEX".
  4. *E-Commerce Same Day / 24hs:* Guarda en Friuli 1972 · Despacho el mismo día con tarifa plana fija o 24hs con descuento del 20% en DropOFF · Picking y empaque profesional · CTA: "CONSULTÁ PLANES".

### 4. Soluciones para Emprendedores y Red de Marcas
- **Componente asociado:** `EmprendedoresHome`
- **Insignia:** "Socio Estratégico Local".
- **Titular (H2):** "Potenciamos tu Marca en Mar del Plata".
- **Bajada:** Socio de logística ágil con tarifas dinámicas transparentes y retiro a domicilio.
- **Tarjetas de Soluciones:**
  1. *Cuenta Corriente Flexible:* Pagos consolidados semanales, quincenales o mensuales; sin volumen mínimo inicial; tarifas LowCost con franjas de 3 horas; cobro contrareembolso incluido · CTA: "Conocé más" (`/servicios/empresas-cuenta-corriente`).
  2. *Envíos Flex Meli:* Logística adaptada para mantener reputación verde en MercadoLibre · CTA: "Configurar Flex" (`/servicios/enviosflex`).
  3. *Soluciones Corporativas:* Soporte para altos volúmenes diarios, ruteos especiales y facturación unificada · CTA: "Abrir Cuenta Corriente" (`/contacto`).
- **Marquesina de Marcas Locales:**
  - Título: "Marcas locales que confían en nosotros" (con botón accesible de pausar y reanudar).
  - Marcas: Toy Piola Juguetería, Ama & Pola, Dropix 3D, El Cóndor, Starcel, Urbancow, Wanca, Catalina Indumentaria, Envases 3G, La Peri.

### 5. Prueba Social y Reputación
- **Componente asociado:** `SocialProofSection`
- **Distintivo:** "5.0 / 5.0 EN GOOGLE · +120 VALORACIONES".
- **Titular (H2):** "LA PALABRA DE QUIENES VENDEN Y ENVÍAN EN MDQ".
- **Acceso a Google Maps:** Botón "VER EN GOOGLE MAPS" hacia el perfil verificado en Friuli 1972.
- **Reseñas Destacadas:**
  1. *Karen Herrera:* Resolución con buena predisposición y rapidez ante urgencias.
  2. *Agustin Torres:* Servicio impecable para entregas a clientes y depósitos en cajeros.
  3. *Alexis Bogarin:* Servicio calificado como el mejor de la zona por puntualidad y trato.
  4. *Lorenzo Elizagoyen:* Rapidez, confianza y seguridad en envíos puntuales.
  5. *Emiliano Garri:* Cumplimiento estricto de las promesas de entrega.
  6. *NahuAri:* Máxima responsabilidad para envíos de negocios y locales.

### 6. Cierre Comercial y Cotización Rápida
- **Componente asociado:** `CtaSection`
- **Insignia:** "Cotización Inmediata".
- **Titular (H2):** "¿Listo para escalar la logística de tu e-commerce?"
- **Bajada:** Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp en minutos.
- **Promesa de respuesta:** "Atención comercial < 5 MIN".
- **Campos del Formulario:**
  - Nombre del contacto.
  - Empresa o negocio.
  - Volumen mensual estimado (1 a 50, 51 a 200, más de 200 envíos).
- **Acción:** Botón "Hablar por WhatsApp" que abre la conversación oficial con el mensaje precargado.

---

## C. Carrusel de Comunidad Digital

- **Componente asociado:** `CarruselRedes` (en [src/components/layout/CarruselRedes.tsx](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/CarruselRedes.tsx))
- **Propósito:** Conectar a los visitantes y clientes comerciales con la comunidad viva de la empresa en sus canales digitales oficiales antes del cierre de página.

### Encabezado de Sección
- **Insignia:** "Nuestra Comunidad Digital".
- **Titular (H2):** "SEGUÍ NUESTRO MOVIMIENTO".
- **Bajada:** Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.

### Módulos de Redes Sociales

1. **Facebook Oficial:**
   - **Insignia:** FACEBOOK OFICIAL.
   - **Identidad Visual:** Azul oficial corporativo (`#0866FF` / `#1877F2`), badge e icono en blanco con tipografía azul, y marca de agua al 10% en blanco.
   - **Identificador:** Envíos DosRuedas.
   - **Descripción:** Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.
   - **Acción:** "SEGUIR COMUNIDAD" (botón blanco de alto contraste con tipografía azul oficial).

2. **Instagram Oficial:**
   - **Insignia:** INSTAGRAM MDQ.
   - **Identidad Visual:** Fondo y borde continuo con el degradado oficial de Instagram (`#833AB4` → `#E1306C` → `#FD1D1D` → `#F77737`), siendo la única tarjeta que utiliza degradado.
   - **Identificador:** `@enviosdosruedas`.
   - **Descripción:** Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.
   - **Acción:** "VER CONTENIDO" (botón blanco con tipografía en el color de acento de Instagram).

3. **WhatsApp Oficial:**
   - **Insignia:** WHATSAPP DIRECTO.
   - **Identidad Visual:** Verde corporativo oficial (`#128C7E` / `#25D366`). Textos en blanco puro (`text-white`) para el título, número telefónico y bajada descriptiva, garantizando nitidez, elegancia y alto contraste.
   - **Identificador:** Línea de contacto directo de la empresa.
   - **Descripción:** Escribinos directamente para consultas, contrataciones o soporte express al toque.
   - **Acción:** "INICIAR CHAT" (botón blanco con tipografía verde corporativo `#128C7E`).

---

## D. Pie de Página Global (Footer)

- **Componente asociado:** `OptimizedFooter` (en [src/components/layout/OptimizedFooter.tsx](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/layout/OptimizedFooter.tsx))
- **Propósito:** Brindar la infraestructura de contacto, geolocalización, enlaces institucionales, horarios de base central y términos legales.

### 1. Banner Superior de Operaciones Activas
- **Insignia:** "Operaciones Activas Mar del Plata [Año en curso]".
- **Titular (H3):** "¿Tenés envíos para hoy? Los entregamos a tiempo."
- **Bajada:** Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.
- **Acciones:**
  - Botón "Cotizá tu Envío" (enlace a `/cotizar`).
  - Botón "Chateá con Nosotros" (enlace directo a WhatsApp).

### 2. Columna 1: Identidad, Misión y Canales Oficiales
- **Identidad corporativa:** Isotipo de la marca con enlace a inicio y lema: "Tu solución confiable · Mar del Plata".
- **Descripción institucional:** Reseña de más de 7 años de trayectoria impulsando a emprendedores, PyMEs y comercios con flota propia y atención humana.
- **Canales de acceso rápido:** Iconos directos hacia Instagram, Facebook y WhatsApp.
- **Distintivo físico:** "Centro de Depósito y Logística Local · Friuli 1972".

### 3. Columna 2: Servicios y Herramientas de Cotización
- **Cotizador Online:**
  - Cotizá Express o LowCost (`/cotizar`).
- **Servicios y Planes:**
  - Envíos Express (`/servicios/envios-express`)
  - Envíos LowCost (`/servicios/envios-lowcost`)
  - Mercado Envíos Flex (`/servicios/enviosflex`)
  - Cuenta Corriente Flexible (`/servicios/empresas-cuenta-corriente`)
  - E-commerce 24HS (`/servicios#ecommerce-24hs`)
  - E-commerce Same Day (`/servicios/deposito-fulfillment`)
  - Ver todos los servicios (`/servicios`)

### 4. Columna 3: Base de Operaciones MDQ
- **Centro de Distribución:** Friuli 1972, Mar del Plata.
- **Línea Directa y WhatsApp:** Enlace telefónico de soporte directo.
- **Atención Comercial:** Dirección de correo oficial de atención comercial (`contacto@enviosdosruedas.com`).
- **Horarios de Despacho en Base Central:**
  - Lunes a Viernes: 09:00 a 18:00 hs.
  - Sábados: 10:00 a 15:00 hs.

### 5. Botón de Navegación "Volver Arriba"
- Botón flotante accesible con animación continua que realiza un desplazamiento suave hacia el tope de la página.

### 6. Enlaces Inferiores y Marco Legal
- **Línea de Copyright:** "© [Año en curso] Envíos DosRuedas · Mar del Plata, Argentina."
- **Navegación complementaria:**
  - Servicios (`/servicios`)
  - Cobertura (`/cobertura`)
  - Guía MercadoLibre Flex (`/guias/envios-flex-mar-del-plata`)
  - Nosotros (`/nosotros`)
  - Sobre Nosotros (`/nosotros/sobre-nosotros`)
  - Preguntas Frecuentes (`/nosotros/preguntas-frecuentes`)
  - Nuestras Redes (`/nosotros/nuestras-redes`)
- **Políticas y Términos:**
  - Términos y Condiciones (`/terminos-y-condiciones`)
  - Política de Privacidad (`/politica-de-privacidad`)
