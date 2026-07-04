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
  // --- HOME PAGE ---
  {
    id: "home-hero",
    page: "Home (Inicio)",
    componentName: "HeroAnimado",
    componentPath: "src/components/home/HeroAnimado.tsx",
    sectionTitle: "Presentación Principal (Hero)",
    currentText: "Título: Mensajería y Logística E-Commerce en Mar del Plata\nCopete: Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.\nBadge: Tu Solución Confiable\nCTAs: 'Solicitar Servicio', 'Ver Servicios'\nAtributos: 100% Seguro, Ultra Rápido, Soporte 24/7",
    elementsToReview: ["Título principal", "Texto de descripción", "Badge superior", "Textos de botones CTA"]
  },
  {
    id: "home-vision",
    page: "Home (Inicio)",
    componentName: "VisionSection",
    componentPath: "src/components/home/VisionSection.tsx",
    sectionTitle: "Sección de Visión y Estadísticas",
    currentText: "Título: Conectamos Mar del Plata de Punta a Punta\nDescripción: Nos especializamos en la distribución de última milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo récord con tecnología de punta y tarifas transparentes.\nMétricas: +50k Envíos Realizados, 99.8% Eficiencia de Entrega, <25 min Tiempo Promedio en Express, +150 Emprendedores Confían.",
    elementsToReview: ["Título", "Texto descriptivo", "Números y etiquetas de estadísticas"]
  },
  {
    id: "home-services",
    page: "Home (Inicio)",
    componentName: "ServicesOverview",
    componentPath: "src/components/home/ServicesOverview.tsx",
    sectionTitle: "Resumen de Servicios",
    currentText: "Título: Soluciones Logísticas a tu Medida\nServicios Presentados:\n- Envíos Express: Mensajería rápida en moto y furgón, entregas inmediatas en Mar del Plata.\n- Envíos LowCost: Envíos económicos consolidados de 24 a 48 horas.\n- MercadoLibre Flex: Entregas en el día de tus ventas en MercadoLibre.\n- Logística 3PL (Fulfillment): Almacenamiento, preparación y despacho centralizado.",
    elementsToReview: ["Título", "Descripciones de servicios", "Listado de características"]
  },
  {
    id: "home-emprendedores",
    page: "Home (Inicio)",
    componentName: "EmprendedoresHome",
    componentPath: "src/components/home/EmprendedoresHome.tsx",
    sectionTitle: "Panel Especial Emprendedores",
    currentText: "Título: Potenciamos tu Negocio Local\nDescripción: Si vendés online, necesitás un socio logístico que responda. Creamos planes a tu medida con tarifas dinámicas y recolección a domicilio programada en Mar del Plata.\nBeneficios: Integración de checkout, Soporte dedicado, Tarifas preferenciales a partir de 10 envíos mensuales.",
    elementsToReview: ["Título", "Texto de beneficios", "Tarifas y requerimientos indicados"]
  },
  {
    id: "home-cta",
    page: "Home (Inicio)",
    componentName: "CtaSection",
    componentPath: "src/components/home/CtaSection.tsx",
    sectionTitle: "Llamada a la Acción (CTA Footer)",
    currentText: "Título: ¿Listo para dar el salto logístico?\nSubtítulo: Hacé tus envíos más simples, rápidos y confiables en toda Mar del Plata con Envíos DosRuedas.\nCTAs: 'Cotizar Envío', 'Hablar por WhatsApp'",
    elementsToReview: ["Título final", "Subtítulo secundario", "Textos de botones de acción"]
  },

  // --- COTIZADORES ---
  {
    id: "cotizar-express-hero",
    page: "Cotizador Express",
    componentName: "CotizadorExpressHero",
    componentPath: "src/app/cotizar/express/page.tsx",
    sectionTitle: "Encabezado y Mensaje de Cotización Express",
    currentText: "Badge: Servicio Prioritario\nTítulo: Cotizador de Envíos Express\nDescripción: Calculá el costo de tu envío prioritario al instante. Obtené alta precisión en la tarifa de entrega según la distancia y coordiná en el acto.",
    elementsToReview: ["Título", "Mensaje de bienvenida", "Badge prioritario"]
  },
  {
    id: "cotizar-express-form",
    page: "Cotizador Express",
    componentName: "CotizadorExpressForm",
    componentPath: "src/components/cotizar/express/CotizadorExpressForm.tsx",
    sectionTitle: "Formulario de Cálculo Express",
    currentText: "Formulario: Ingresá origen y destino en Mar del Plata.\nCampos: Dirección de Retiro, Dirección de Entrega, Tipo de Bulto.\nBotones: 'Calcular Tarifa', 'Solicitar Cadete en el acto'.",
    elementsToReview: ["Mensajes de validación de campos", "Textos del flujo de cálculo"]
  },
  {
    id: "cotizar-lowcost-hero",
    page: "Cotizador LowCost",
    componentName: "CotizadorLowCostHero",
    componentPath: "src/app/cotizar/lowcost/page.tsx",
    sectionTitle: "Encabezado y Mensaje de Cotización LowCost",
    currentText: "Badge: Servicio Económico y Programado\nTítulo: Cotizador de Envíos LowCost\nDescripción: Eficiencia y rentabilidad. Calculá tu envío de ruteo diario masivo con entrega garantizada en el día en Mar del Plata.",
    elementsToReview: ["Título", "Mensaje descriptivo", "Badge de servicio"]
  },
  {
    id: "cotizar-lowcost-form",
    page: "Cotizador LowCost",
    componentName: "CotizadorLowCostForm",
    componentPath: "src/components/cotizar/lowcost/CotizadorLowCostForm.tsx",
    sectionTitle: "Formulario de Cálculo LowCost",
    currentText: "Formulario: Planificador de envíos diarios masivos o consolidados.\nCampos: Puntos de entrega múltiples, Fechas de ruteo, Peso estimado.\nAcción: 'Programar Retiro con Descuento'.",
    elementsToReview: ["Campos del planificador", "Textos de tarifas por volumen"]
  },

  // --- SOBRE NOSOTROS ---
  {
    id: "nosotros-hero",
    page: "Sobre Nosotros",
    componentName: "AboutHero",
    componentPath: "src/components/nosotros/sobre-nosotros/AboutHero.tsx",
    sectionTitle: "Encabezado Sobre Nosotros",
    currentText: "Título: Nuestra Historia\nSubtítulo: Más de 7 años liderando la última milla y conectando el comercio de Mar del Plata con sus clientes.\nHistoria: Empezamos como un grupo pequeño en moto y hoy en 2026 contamos con un centro 3PL inteligente en Friuli 1972 y una flota ecológica.",
    elementsToReview: ["Título de sección", "Detalle de los años de trayectoria", "Mensaje del origen local"]
  },
  {
    id: "nosotros-ventajas",
    page: "Sobre Nosotros",
    componentName: "AboutAdvantages",
    componentPath: "src/components/nosotros/sobre-nosotros/AboutAdvantages.tsx",
    sectionTitle: "Ventajas Competitivas",
    currentText: "Título: Nuestra Ventaja Injusta\nPuntos:\n1. Logística verde en bicicleta y moto eléctrica.\n2. Ruteo optimizado inteligente para reducir costos.\n3. Integración directa API para tiendas de e-commerce.",
    elementsToReview: ["Títulos de ventajas", "Breves explicaciones de cada punto"]
  },

  // --- PREGUNTAS FRECUENTES ---
  {
    id: "faq-hero",
    page: "Preguntas Frecuentes",
    componentName: "FaqHero",
    componentPath: "src/components/nosotros/preguntas-frecuentes/FaqHero.tsx",
    sectionTitle: "Centro de Ayuda y FAQ Header",
    currentText: "Título: Preguntas Frecuentes\nDescripción: Todo lo que necesitás saber sobre límites de peso, cobertura en Mar del Plata, tarifas especiales y facturación para empresas.",
    elementsToReview: ["Título principal", "Breve descripción informativa"]
  },
  {
    id: "faq-accordion",
    page: "Preguntas Frecuentes",
    componentName: "FaqAccordion",
    componentPath: "src/components/nosotros/preguntas-frecuentes/FaqAccordion.tsx",
    sectionTitle: "Respuestas del Acordeón",
    currentText: "Preguntas Clave:\n- ¿Hacen entregas en zonas alejadas como el Puerto o Sierra de los Padres?\n- ¿Cuáles son los horarios límites para MercadoLibre Flex?\n- ¿Cómo se realiza la recolección diaria en mi local?\n- ¿Tienen cobertura ante pérdidas o roturas?",
    elementsToReview: ["Preguntas listadas", "Estructura de las respuestas detalladas"]
  },

  // --- REDES Y COMUNIDAD ---
  {
    id: "redes-hero",
    page: "Comunidad y Redes",
    componentName: "NetworksHero",
    componentPath: "src/components/nosotros/nuestras-redes/NetworksHero.tsx",
    sectionTitle: "Comunidad Header",
    currentText: "Título: Conectate con Nuestra Comunidad\nDescripción: Enterate de las alertas viales, estado del clima en Mar del Plata, promociones especiales y nuestro día a día operando en la calle.",
    elementsToReview: ["Títulos", "Mensajes de invitación a redes"]
  },

  // --- DETALLES DE SERVICIOS ---
  {
    id: "servicio-express-detail",
    page: "Servicios Detallados",
    componentName: "ExpressHero",
    componentPath: "src/components/servicios/express/ExpressHero.tsx",
    sectionTitle: "Encabezado Servicio Express",
    currentText: "Título: Envíos Express Inmediatos\nSubtítulo: Entregamos tus bultos en menos de 90 minutos con prioridad absoluta dentro de Mar del Plata.\nCTAs: 'Cotizar Express Ahora', 'Ver Tarifas por Zonas'.",
    elementsToReview: ["Título principal", "Promesas de velocidad (90 min)", "Subtítulos descriptivos"]
  },
  {
    id: "servicio-lowcost-detail",
    page: "Servicios Detallados",
    componentName: "LowCostHero",
    componentPath: "src/components/servicios/lowcost/LowCostHero.tsx",
    sectionTitle: "Encabezado Servicio LowCost",
    currentText: "Título: Envíos LowCost Programados\nSubtítulo: La opción ideal para PyMEs que quieren consolidar despachos y ahorrar más del 40% en logística diaria.\nTarifas: Reparto programado Next-Day.",
    elementsToReview: ["Título", "Detalles de porcentajes de ahorro", "Subtítulo"]
  },
  {
    id: "servicio-flex-detail",
    page: "Servicios Detallados",
    componentName: "FlexHero",
    componentPath: "src/components/servicios/flex/FlexHero.tsx",
    sectionTitle: "Encabezado MercadoLibre Flex",
    currentText: "Título: Líderes en MercadoEnvíos Flex\nSubtítulo: Despachá tus ventas de MercadoLibre en el día con transportistas certificados y geolocalizados en Mar del Plata. Reputación cuidada al 100%.",
    elementsToReview: ["Título Flex", "Porcentajes de reputación", "Copys de entrega Same-Day"]
  },
  {
    id: "servicio-emprendedores-detail",
    page: "Servicios Detallados",
    componentName: "EmprendedoresHero",
    componentPath: "src/components/servicios/emprendedores/EmprendedoresHero.tsx",
    sectionTitle: "Encabezado Plan Emprendedores / 3PL",
    currentText: "Título: Plan Emprendedores & Soluciones 3PL\nSubtítulo: Almacenamiento, picking, packing y despacho automatizado de tus productos. Despreocupate del depósito y las cajas, nosotros hacemos todo.",
    elementsToReview: ["Títulos", "Conceptos de fulfillment 3PL", "Subtítulo descriptivo"]
  },

  // --- CONTACTO ---
  {
    id: "contacto-hero",
    page: "Contacto Comercial",
    componentName: "ContactHero",
    componentPath: "src/components/contacto/ContactHero.tsx",
    sectionTitle: "Contacto Encabezado",
    currentText: "Título: Contactanos Comercial\nSubtítulo: ¿Necesitás un esquema logístico a gran escala para tu e-commerce? Hablemos hoy.",
    elementsToReview: ["Título", "Subtítulo"]
  },
  {
    id: "contacto-info",
    page: "Contacto Comercial",
    componentName: "ContactInfo",
    componentPath: "src/components/contacto/ContactInfo.tsx",
    sectionTitle: "Datos Físicos y Cobertura",
    currentText: "Dirección: Friuli 1972, Mar del Plata\nCobertura: Todo el Partido de General Pueyrredón\nEmail: soporte@enviosdosruedas.com.ar\nTeléfono: WhatsApp Dedicado",
    elementsToReview: ["Dirección física", "Zona de cobertura indicada", "Información de horarios 2026"]
  },

  // --- LEGALES ---
  {
    id: "privacidad-page",
    page: "Legales (Privacidad)",
    componentName: "PoliticaPrivacidad",
    componentPath: "src/app/politica-de-privacidad/page.tsx",
    sectionTitle: "Políticas de Privacidad",
    currentText: "Título: Políticas de Privacidad\nTexto: Tratamiento confidencial de datos de remitentes, destinatarios y repartidores de Envíos DosRuedas de conformidad con las leyes vigentes para el año 2026.",
    elementsToReview: ["Títulos", "Vigencia del tratamiento de datos"]
  },
  {
    id: "terminos-page",
    page: "Legales (Términos)",
    componentName: "TerminosCondiciones",
    componentPath: "src/app/terminos-y-condiciones/page.tsx",
    sectionTitle: "Términos y Condiciones",
    currentText: "Título: Términos y Condiciones de Uso\nTexto: Regulaciones sobre límites de responsabilidad, condiciones del servicio Express y LowCost, cobertura en Mar del Plata y formas de cobro.",
    elementsToReview: ["Títulos", "Regulaciones y cláusulas logísticas"]
  }
];
