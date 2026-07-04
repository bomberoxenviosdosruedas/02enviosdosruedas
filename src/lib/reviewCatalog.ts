export interface CatalogItem {
  id: string;
  page: string;
  componentName: string;
  componentPath: string;
  sectionTitle: string;
  currentText: string;
  elementsToReview: string[];
}

export const reviewCatalog: CatalogItem[] = [
  // ==========================================
  // HOME PAGE (INICIO)
  // ==========================================
  {
    id: "home-hero",
    page: "Home (Inicio)",
    componentName: "HeroAnimado",
    componentPath: "src/components/home/HeroAnimado.tsx",
    sectionTitle: "1. Presentación Principal (Hero)",
    currentText: "Título: Mensajería y Logística E-Commerce en Mar del Plata\nCopete: Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.\nBadge: Tu Solución Confiable\nCTAs: 'Solicitar Servicio', 'Ver Servicios'\nAtributos: 100% Seguro, Ultra Rápido, Soporte 24/7",
    elementsToReview: ["Título principal", "Texto de descripción", "Badge superior", "Textos de botones CTA"]
  },
  {
    id: "home-vision",
    page: "Home (Inicio)",
    componentName: "VisionSection",
    componentPath: "src/components/home/VisionSection.tsx",
    sectionTitle: "2. Visión y Estadísticas de Flota",
    currentText: "Título: Conectamos Mar del Plata de Punta a Punta\nDescripción: Nos especializamos en la distribución de última milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo récord con tecnología de punta y tarifas transparentes.\nMétricas: +50k Envíos Realizados, 99.8% Eficiencia de Entrega, <25 min Tiempo Promedio en Express, +150 Emprendedores Confían.",
    elementsToReview: ["Título", "Texto descriptivo", "Números y etiquetas de estadísticas"]
  },
  {
    id: "home-services",
    page: "Home (Inicio)",
    componentName: "ServicesOverview",
    componentPath: "src/components/home/ServicesOverview.tsx",
    sectionTitle: "3. Resumen General de Soluciones",
    currentText: "Título: Soluciones Logísticas a tu Medida\nServicios Presentados:\n- Envíos Express: Mensajería rápida en moto y furgón, entregas inmediatas en Mar del Plata.\n- Envíos LowCost: Envíos económicos consolidados de 24 a 48 horas.\n- MercadoLibre Flex: Entregas en el día de tus ventas en MercadoLibre.\n- Logística 3PL (Fulfillment): Almacenamiento, preparación y despacho centralizado.",
    elementsToReview: ["Título", "Descripciones de servicios", "Listado de características"]
  },
  {
    id: "home-slider",
    page: "Home (Inicio)",
    componentName: "SliderServicios",
    componentPath: "src/components/home/SliderServicios.tsx",
    sectionTitle: "4. Slideshow de Soluciones Personalizadas",
    currentText: "Título: Soluciones Especiales para Industrias\nSlides:\n- Gastronomía y Delivery Express: Envíos calientes e inmediatos.\n- Repuesto de Automotores: Envío rápido de partes críticas a talleres.\n- Indumentaria y Calzado: Logística inversa y entregas rápidas de moda local.",
    elementsToReview: ["Título del carrusel", "Textos explicativos de cada slide"]
  },
  {
    id: "home-emprendedores",
    page: "Home (Inicio)",
    componentName: "EmprendedoresHome",
    componentPath: "src/components/home/EmprendedoresHome.tsx",
    sectionTitle: "5. Beneficios Emprendedores",
    currentText: "Título: Potenciamos tu Negocio Local\nDescripción: Si vendés online, necesitás un socio logístico que responda. Creamos planes a tu medida con tarifas dinámicas y recolección a domicilio programada en Mar del Plata.\nBeneficios: Integración de checkout, Soporte dedicado, Tarifas preferenciales a partir de 10 envíos mensuales.",
    elementsToReview: ["Título", "Texto de beneficios", "Tarifas y requerimientos indicados"]
  },
  {
    id: "home-cta",
    page: "Home (Inicio)",
    componentName: "CtaSection",
    componentPath: "src/components/home/CtaSection.tsx",
    sectionTitle: "6. Llamada a la Acción Final",
    currentText: "Título: ¿Listo para dar el salto logístico?\nSubtítulo: Hacé tus envíos más simples, rápidos y confiables en toda Mar del Plata con Envíos DosRuedas.\nCTAs: 'Cotizar Envío', 'Hablar por WhatsApp'",
    elementsToReview: ["Título final", "Subtítulo secundario", "Textos de botones de acción"]
  },

  // ==========================================
  // COTIZADOR EXPRESS
  // ==========================================
  {
    id: "cotizar-express-form",
    page: "Cotizador Express",
    componentName: "CotizadorExpressForm",
    componentPath: "src/components/cotizar/express/CotizadorExpressForm.tsx",
    sectionTitle: "1. Formulario Interactivo Express",
    currentText: "Campos de dirección: Calle y número de Origen / Calle y número de Destino.\nInputs de datos: Nombre, Teléfono, Tipo de producto a trasladar.\nRespuestas: Tarifador de distancia dinámico con cálculo en pesos.",
    elementsToReview: ["Nombres de campos", "Instrucciones de ayuda", "Botonera del cotizador"]
  },
  {
    id: "cotizar-express-details",
    page: "Cotizador Express",
    componentName: "CotizadorExpressDetails",
    componentPath: "src/components/cotizar/express/CotizadorExpressDetails.tsx",
    sectionTitle: "2. Condiciones del Servicio Express",
    currentText: "Título: Pautas del Envío Express\nDetalles: Peso máximo por moto (hasta 15kg). Medidas máximas del bulto (caja estándar de 40x40x40cm). Garantía de entrega en el acto.",
    elementsToReview: ["Límites de peso y volumen", "Tipos de garantías"]
  },
  {
    id: "cotizar-express-help",
    page: "Cotizador Express",
    componentName: "CotizadorExpressHelp",
    componentPath: "src/components/cotizar/express/CotizadorExpressHelp.tsx",
    sectionTitle: "3. Bloque de Soporte Express",
    currentText: "Título: ¿Necesitás un cadete recurrente?\nDescripción: Si realizás más de 5 envíos diarios express, consultá por nuestro plan prepago mensual con cadetería fija de marca en Mar del Plata.",
    elementsToReview: ["Propuesta de plan prepago", "Botón de contacto de soporte"]
  },

  // ==========================================
  // COTIZADOR LOWCOST
  // ==========================================
  {
    id: "cotizar-lowcost-form",
    page: "Cotizador LowCost",
    componentName: "CotizadorLowCostForm",
    componentPath: "src/components/cotizar/lowcost/CotizadorLowCostForm.tsx",
    sectionTitle: "1. Formulario Interactivo LowCost",
    currentText: "Campos: Dirección del local de retiro, Cantidad de paquetes diarios, Zonas de entrega en Mar del Plata.\nTarifa sugerida: Descuentos progresivos basados en cantidad de entregas diarias.",
    elementsToReview: ["Mensajes informativos", "Precios simulados", "Checkboxes de zonas"]
  },
  {
    id: "cotizar-lowcost-details",
    page: "Cotizador LowCost",
    componentName: "CotizadorLowCostDetails",
    componentPath: "src/components/cotizar/lowcost/CotizadorLowCostDetails.tsx",
    sectionTitle: "2. Condiciones del Servicio LowCost",
    currentText: "Título: Regulación de Envíos Masivos\nDetalles: Retiro por la mañana (09:00 a 12:00) y entregas programadas durante la tarde del día siguiente (Next-Day) en toda la ciudad.",
    elementsToReview: ["Franjas horarias indicadas", "Condiciones de logística inversa"]
  },
  {
    id: "cotizar-lowcost-help",
    page: "Cotizador LowCost",
    componentName: "CotizadorLowCostHelp",
    componentPath: "src/components/cotizar/lowcost/CotizadorLowCostHelp.tsx",
    sectionTitle: "3. Bloque de Soporte LowCost",
    currentText: "Título: ¿Tenés una cuenta corporativa?\nDescripción: Accedé a facturación tipo A mensual, importación de planillas de Excel masivas y panel de rastreo web multi-paquetes.",
    elementsToReview: ["Texto corporativo", "Beneficios del panel web"]
  },

  // ==========================================
  // SOBRE NOSOTROS
  // ==========================================
  {
    id: "about-hero",
    page: "Sobre Nosotros",
    componentName: "AboutHero",
    componentPath: "src/components/nosotros/sobre-nosotros/AboutHero.tsx",
    sectionTitle: "1. Quiénes Somos (Hero)",
    currentText: "Título principal: Líderes en Última Milla en Mar del Plata\nCopete: Nuestra historia comenzó con una simple meta: hacer los envíos locales más eficientes, rápidos y sustentables.",
    elementsToReview: ["Título principal", "Copete de introducción"]
  },
  {
    id: "about-advantages",
    page: "Sobre Nosotros",
    componentName: "AboutAdvantages",
    componentPath: "src/components/nosotros/sobre-nosotros/AboutAdvantages.tsx",
    sectionTitle: "2. Ventajas del Servicio",
    currentText: "Título: Por Qué Elegirnos\nVentajas: Flota propia de repartidores capacitados, optimización automática de recorridos viales, y soporte comercial en el día.",
    elementsToReview: ["Títulos de ventajas", "Párrafos descriptivos"]
  },
  {
    id: "about-values",
    page: "Sobre Nosotros",
    componentName: "AboutValues",
    componentPath: "src/components/nosotros/sobre-nosotros/AboutValues.tsx",
    sectionTitle: "3. Valores Corporativos",
    currentText: "Valores principales: Transparencia total, Cuidado del paquete, Sustentabilidad vial urbana, e Innovación tecnológica 2026.",
    elementsToReview: ["Nombres de los valores", "Detalles explicativos de cada valor"]
  },
  {
    id: "about-timeline",
    page: "Sobre Nosotros",
    componentName: "AboutTimeline",
    componentPath: "src/components/nosotros/sobre-nosotros/AboutTimeline.tsx",
    sectionTitle: "4. Hitos Históricos",
    currentText: "Cronología:\n- 2020: Lanzamiento inicial con 5 motos de reparto.\n- 2023: Mudanza a depósito central Friuli 1972 y automatización de tracking.\n- 2026: Cobertura total de última milla Flex y servicios 3PL avanzados.",
    elementsToReview: ["Textos de los años", "Descripciones de los logros alcanzados"]
  },
  {
    id: "about-team",
    page: "Sobre Nosotros",
    componentName: "AboutTeam",
    componentPath: "src/components/nosotros/sobre-nosotros/AboutTeam.tsx",
    sectionTitle: "5. Estructura de Flota y Equipo",
    currentText: "Título: Nuestro Equipo de Calle\nDescripción: Contamos con cadetes capacitados en Mar del Plata equipados con indumentaria reglamentaria, seguros correspondientes y apps móviles de entrega.",
    elementsToReview: ["Título", "Párrafo de descripción del personal"]
  },
  {
    id: "about-mission",
    page: "Sobre Nosotros",
    componentName: "AboutMissionVision",
    componentPath: "src/components/nosotros/sobre-nosotros/AboutMissionVision.tsx",
    sectionTitle: "6. Misión, Visión e Innovación",
    currentText: "Misión: Simplificar la logística comercial local. Visión: Consolidar la red de última milla ecológica más grande de la costa atlántica.",
    elementsToReview: ["Textos de misión", "Textos de visión", "Pilares de innovación"]
  },

  // ==========================================
  // PREGUNTAS FRECUENTES
  // ==========================================
  {
    id: "faq-hero-comp",
    page: "Preguntas Frecuentes",
    componentName: "FaqHero",
    componentPath: "src/components/nosotros/preguntas-frecuentes/FaqHero.tsx",
    sectionTitle: "1. FAQ Hero Header",
    currentText: "Título: Centro de Respuestas DosRuedas\nDescripción: Despejá tus dudas sobre los envíos, coberturas, métodos de pago y cómo integrar tu sistema a nuestra red.",
    elementsToReview: ["Título", "Copete de introducción"]
  },
  {
    id: "faq-accordion-comp",
    page: "Preguntas Frecuentes",
    componentName: "FaqAccordion",
    componentPath: "src/components/nosotros/preguntas-frecuentes/FaqAccordion.tsx",
    sectionTitle: "2. Acordeón de Consultas",
    currentText: "Categorías: Preguntas sobre Envíos, Preguntas sobre Pagos, Preguntas sobre Integraciones.\nContenido: Límites de tamaño, cobros semanales y uso de MercadoLibre Flex.",
    elementsToReview: ["Preguntas exactas", "Respuestas extendidas"]
  },
  {
    id: "faq-cta-comp",
    page: "Preguntas Frecuentes",
    componentName: "FaqCta",
    componentPath: "src/components/nosotros/preguntas-frecuentes/FaqCta.tsx",
    sectionTitle: "3. Bloque CTA de Ayuda",
    currentText: "Título: ¿No encontraste lo que buscabas?\nDescripción: Contactate por WhatsApp directo con nuestro centro de operaciones de Mar del Plata para atención al instante.",
    elementsToReview: ["Título del bloque", "Texto de invitación a chatear"]
  },

  // ==========================================
  // COMUNIDAD Y REDES
  // ==========================================
  {
    id: "networks-hero-comp",
    page: "Comunidad y Redes",
    componentName: "NetworksHero",
    componentPath: "src/components/nosotros/nuestras-redes/NetworksHero.tsx",
    sectionTitle: "1. Redes Hero Header",
    currentText: "Título: Nuestra Comunidad en Línea\nDescripción: Seguinos para ver las alertas de tránsito diario, el clima costero, el día a día de nuestros cadetes y sorteos mensuales.",
    elementsToReview: ["Título principal", "Texto de copete"]
  },
  {
    id: "networks-channels",
    page: "Comunidad y Redes",
    componentName: "NetworksChannels",
    componentPath: "src/components/nosotros/nuestras-redes/NetworksChannels.tsx",
    sectionTitle: "2. Canales Disponibles",
    currentText: "Canales: Instagram corporativo, Canal de WhatsApp para alertas viales rápidas, y Linkedin institucional.",
    elementsToReview: ["Nombres de canales", "Textos de descripción de cada red"]
  },
  {
    id: "recent-posts",
    page: "Comunidad y Redes",
    componentName: "RecentPosts",
    componentPath: "src/components/nosotros/nuestras-redes/RecentPosts.tsx",
    sectionTitle: "3. Publicaciones Recientes",
    currentText: "Mockups de posts:\n1. Consejos de embalaje seguro para e-commerce.\n2. Cobertura de lluvia en Mar del Plata en 2026.\n3. Entrevistas cortas con nuestros cadetes destacados.",
    elementsToReview: ["Textos de los posts simulados", "Copys de pie de imagen"]
  },
  {
    id: "networks-benefits",
    page: "Comunidad y Redes",
    componentName: "NetworksBenefits",
    componentPath: "src/components/nosotros/nuestras-redes/NetworksBenefits.tsx",
    sectionTitle: "4. Beneficios por Seguinos",
    currentText: "Beneficios listados: Descuentos sorpresa en envíos programados, prioridad en cotizaciones complejas y regalos de marca.",
    elementsToReview: ["Títulos de beneficios", "Párrafos breves"]
  },
  {
    id: "newsletter-subscribe",
    page: "Comunidad y Redes",
    componentName: "NewsletterSubscribe",
    componentPath: "src/components/nosotros/nuestras-redes/NewsletterSubscribe.tsx",
    sectionTitle: "5. Suscripción al Newsletter",
    currentText: "Título: Suscribite al Boletín Logístico\nDescripción: Recibí una vez al mes las actualizaciones operativas y tarifas vigentes para 2026 en tu correo.",
    elementsToReview: ["Título del formulario", "Copys de protección de privacidad"]
  },

  // ==========================================
  // SERVICIOS DETALLADOS - EXPRESS
  // ==========================================
  {
    id: "service-express-hero",
    page: "Servicio Express",
    componentName: "ExpressHero",
    componentPath: "src/components/servicios/express/ExpressHero.tsx",
    sectionTitle: "1. Envíos Express Hero",
    currentText: "Título: Envíos Express al Instante\nCopete: Prioridad total. Tu paquete entregado en menos de 90 minutos en zonas céntricas de Mar del Plata con rastreo satelital.",
    elementsToReview: ["Título principal", "Copete explicativo", "Botones"]
  },
  {
    id: "service-express-features",
    page: "Servicio Express",
    componentName: "ExpressFeatures",
    componentPath: "src/components/servicios/express/ExpressFeatures.tsx",
    sectionTitle: "2. Características Express",
    currentText: "Características: Entrega puerta a puerta, rastreo digital en tiempo real, seguro básico de bulto y mensajeros de confianza.",
    elementsToReview: ["Descripciones de cada característica"]
  },
  {
    id: "service-express-pricing",
    page: "Servicio Express",
    componentName: "ExpressPricing",
    componentPath: "src/components/servicios/express/ExpressPricing.tsx",
    sectionTitle: "3. Tarifas y Zonas Express",
    currentText: "Título: Tarifas Zonificadas Express 2026\nZonas:\n- Zona Centro/Güemes: $X\n- Zona Constitución/Norte: $Y\n- Zona Puerto/Faro: $Z",
    elementsToReview: ["Texto explicativo de zonas", "Nombres de los barrios de Mar del Plata"]
  },
  {
    id: "service-express-usecases",
    page: "Servicio Express",
    componentName: "ExpressUseCases",
    componentPath: "src/components/servicios/express/ExpressUseCases.tsx",
    sectionTitle: "4. Casos de Uso Express",
    currentText: "Casos: Envío de documentación legal, delivery gastronómico premium, repuestos urgentes y regalos empresariales de último momento.",
    elementsToReview: ["Casos de uso detallados", "Títulos de cada ejemplo"]
  },

  // ==========================================
  // SERVICIOS DETALLADOS - LOWCOST
  // ==========================================
  {
    id: "service-lowcost-hero",
    page: "Servicio LowCost",
    componentName: "LowCostHero",
    componentPath: "src/components/servicios/lowcost/LowCostHero.tsx",
    sectionTitle: "1. Envíos LowCost Hero",
    currentText: "Título: Envíos LowCost Programados\nCopete: Maximizá la rentabilidad de tu negocio local. Entregamos tus paquetes al día siguiente al menor costo de Mar del Plata.",
    elementsToReview: ["Título", "Copete"]
  },
  {
    id: "service-lowcost-features",
    page: "Servicio LowCost",
    componentName: "LowCostFeatures",
    componentPath: "src/components/servicios/lowcost/LowCostFeatures.tsx",
    sectionTitle: "2. Características LowCost",
    currentText: "Características: Ruteo optimizado inteligente, recolección consolidada en local y envíos masivos económicos.",
    elementsToReview: ["Títulos de características", "Párrafos"]
  },
  {
    id: "service-lowcost-pricing",
    page: "Servicio LowCost",
    componentName: "LowCostPricing",
    componentPath: "src/components/servicios/lowcost/LowCostPricing.tsx",
    sectionTitle: "3. Tarifas y Zonas LowCost",
    currentText: "Título: Esquema Tarifario Programado 2026\nDetalle: Tarifas planas por volumen de envíos mensuales. Descuentos a partir de los 50 bultos mensuales.",
    elementsToReview: ["Rangos de precios explicados", "Condiciones de volumen"]
  },
  {
    id: "service-lowcost-benefits",
    page: "Servicio LowCost",
    componentName: "LowCostBenefits",
    componentPath: "src/components/servicios/lowcost/LowCostBenefits.tsx",
    sectionTitle: "4. Beneficios PyME",
    currentText: "Beneficios: Ahorro de costos logísticos, etiquetas de despacho autogestionadas y soporte de devoluciones en el día.",
    elementsToReview: ["Textos de beneficios", "Pestañas informativas"]
  },
  {
    id: "service-lowcost-howitworks",
    page: "Servicio LowCost",
    componentName: "LowCostHowItWorks",
    componentPath: "src/components/servicios/lowcost/LowCostHowItWorks.tsx",
    sectionTitle: "5. Cómo Funciona LowCost",
    currentText: "Pasos:\n1. Cargás tus envíos en el panel web.\n2. Retiramos por tu depósito por la mañana.\n3. Clasificamos y entregamos al día siguiente.",
    elementsToReview: ["Pasos del proceso", "Descripciones cortas"]
  },

  // ==========================================
  // SERVICIOS DETALLADOS - FLEX
  // ==========================================
  {
    id: "service-flex-hero",
    page: "Servicio Flex",
    componentName: "FlexHero",
    componentPath: "src/components/servicios/flex/FlexHero.tsx",
    sectionTitle: "1. MercadoLibre Flex Hero",
    currentText: "Título: Envíos en el Día para MercadoLibre\nCopete: Solución certificada para vendedores de MercadoLibre en Mar del Plata. Despachá tus ventas Same-Day y mantené tu medidor verde.",
    elementsToReview: ["Título principal", "Copete", "Badges"]
  },
  {
    id: "service-flex-features",
    page: "Servicio Flex",
    componentName: "FlexFeatures",
    componentPath: "src/components/servicios/flex/FlexFeatures.tsx",
    sectionTitle: "2. Características Flex",
    currentText: "Características: Recolección diaria gratis en local, entrega de tarde (14:00 a 20:00), confirmaciones fotográficas de recepción digital.",
    elementsToReview: ["Características", "Copys de confirmación de entrega"]
  },
  {
    id: "service-flex-benefits",
    page: "Servicio Flex",
    componentName: "FlexBenefits",
    componentPath: "src/components/servicios/flex/FlexBenefits.tsx",
    sectionTitle: "3. Beneficios de Venta Flex",
    currentText: "Beneficios: Mayor exposición en MercadoLibre, aumento de ventas de hasta un 30% gracias a la entrega rápida Same-Day local.",
    elementsToReview: ["Porcentajes de mejora", "Textos comerciales"]
  },
  {
    id: "service-flex-pricing",
    page: "Servicio Flex",
    componentName: "FlexPricing",
    componentPath: "src/components/servicios/flex/FlexPricing.tsx",
    sectionTitle: "4. Esquema de Tarifas Flex",
    currentText: "Tarifas Flex Oficiales: Cobertura por zonas en Mar del Plata. Reintegros de envío directo abonados por MercadoLibre.",
    elementsToReview: ["Explicación de tarifas", "Notas sobre facturación de reintegros"]
  },
  {
    id: "service-flex-howitworks",
    page: "Servicio Flex",
    componentName: "FlexHowItWorks",
    componentPath: "src/components/servicios/flex/FlexHowItWorks.tsx",
    sectionTitle: "5. Proceso Diario Flex",
    currentText: "Cronograma diario: Ventas hasta las 13:00 -> Retiro a las 14:00 -> Reparto de tarde -> Reporte de entregados a las 20:00.",
    elementsToReview: ["Pasos del cronograma", "Límites horarios viales"]
  },
  {
    id: "service-flex-requirements",
    page: "Servicio Flex",
    componentName: "FlexRequirements",
    componentPath: "src/components/servicios/flex/FlexRequirements.tsx",
    sectionTitle: "6. Requisitos Flex para Vendedores",
    currentText: "Requisitos: Cuenta activa de vendedor, reputación en amarillo/verde, embalaje apto para moto/furgón en Mar del Plata.",
    elementsToReview: ["Requisitos obligatorios", "Consejos de embalaje"]
  },

  // ==========================================
  // SERVICIOS DETALLADOS - EMPRENDEDORES (3PL)
  // ==========================================
  {
    id: "service-emp-hero",
    page: "Plan Emprendedores (3PL)",
    componentName: "EmprendedoresHero",
    componentPath: "src/components/servicios/emprendedores/EmprendedoresHero.tsx",
    sectionTitle: "1. Plan Emprendedores Hero",
    currentText: "Título: Logística 3PL Completa\nCopete: Guardamos tu stock, armamos tus paquetes y los entregamos en el día en toda la ciudad. Tu depósito inteligente tercerizado.",
    elementsToReview: ["Título principal", "Copete de presentación 3PL"]
  },
  {
    id: "service-emp-features",
    page: "Plan Emprendedores (3PL)",
    componentName: "EmprendedoresFeatures",
    componentPath: "src/components/servicios/emprendedores/EmprendedoresFeatures.tsx",
    sectionTitle: "2. Características del Fulfillment",
    currentText: "Servicios: Almacenamiento en Friuli 1972, picking de productos por código de barras, packing seguro e integración con tu tienda online.",
    elementsToReview: ["Títulos de características", "Detalles operativos"]
  },
  {
    id: "service-emp-benefits",
    page: "Plan Emprendedores (3PL)",
    componentName: "EmprendedoresBenefits",
    componentPath: "src/components/servicios/emprendedores/EmprendedoresBenefits.tsx",
    sectionTitle: "3. Beneficios 3PL",
    currentText: "Beneficios: Reducción de costos de alquiler de depósito, tiempo libre para vender, empaque corporativo premium personalizado.",
    elementsToReview: ["Puntos de beneficios", "Textos de ventajas PyME"]
  },
  {
    id: "service-emp-pricing",
    page: "Plan Emprendedores (3PL)",
    componentName: "EmprendedoresPricing",
    componentPath: "src/components/servicios/emprendedores/EmprendedoresPricing.tsx",
    sectionTitle: "4. Tarifas de Depósito y Despacho",
    currentText: "Estructura de precios 2026: Costo mensual de estantería o metro cúbico ocupado, más tarifa plana de picking/packing por paquete despachado.",
    elementsToReview: ["Precios base", "Rangos de almacenamiento"]
  },

  // ==========================================
  // CONTACTO COMERCIAL
  // ==========================================
  {
    id: "contact-hero-comp",
    page: "Contacto Comercial",
    componentName: "ContactHero",
    componentPath: "src/components/contacto/ContactHero.tsx",
    sectionTitle: "1. Contacto Hero Header",
    currentText: "Título: Hablemos de Logística Comercial\nSubtítulo: ¿Querés optimizar tu e-commerce? Escribinos y armamos una propuesta a la medida de tu volumen en Mar del Plata.",
    elementsToReview: ["Título", "Subtítulo"]
  },
  {
    id: "contact-form-comp",
    page: "Contacto Comercial",
    componentName: "ContactForm",
    componentPath: "src/components/contacto/ContactForm.tsx",
    sectionTitle: "2. Formulario de Contacto",
    currentText: "Campos: Nombre completo, Nombre del Negocio, Teléfono de contacto, Volumen de envíos semanales, Consulta comercial.",
    elementsToReview: ["Campos del formulario", "Mensajes del botón de envío"]
  },
  {
    id: "contact-info-comp",
    page: "Contacto Comercial",
    componentName: "ContactInfo",
    componentPath: "src/components/contacto/ContactInfo.tsx",
    sectionTitle: "3. Datos Físicos y Horarios",
    currentText: "Dirección: Friuli 1972, Mar del Plata\nHorarios 2026: Lunes a Viernes 08:00 a 18:00 hs, Sábados 09:00 a 13:00 hs.\nCanales alternativos: WhatsApp y Soporte por Email.",
    elementsToReview: ["Dirección física", "Horarios operativos", "Datos de redes de soporte"]
  },

  // ==========================================
  // LEGALES
  // ==========================================
  {
    id: "privacidad-page-comp",
    page: "Legales (Privacidad)",
    componentName: "PoliticaPrivacidad",
    componentPath: "src/app/politica-de-privacidad/page.tsx",
    sectionTitle: "1. Políticas de Privacidad",
    currentText: "Título: Políticas de Privacidad y Tratamiento de Datos\nDetalles: Cobertura legal sobre datos personales de remitentes, destinatarios y choferes de la flota de Envíos DosRuedas para el año 2026.",
    elementsToReview: ["Títulos", "Cláusulas legales de privacidad"]
  },
  {
    id: "terminos-page-comp",
    page: "Legales (Términos)",
    componentName: "TerminosCondiciones",
    componentPath: "src/app/terminos-y-condiciones/page.tsx",
    sectionTitle: "1. Términos y Condiciones",
    currentText: "Título: Términos y Condiciones de Uso del Servicio\nDetalles: Acuerdos legales sobre límites de bultos, tiempos límites de entrega, formas de pago habilitadas y zonas viales de cobertura.",
    elementsToReview: ["Títulos", "Cláusulas de responsabilidad logística"]
  }
];
