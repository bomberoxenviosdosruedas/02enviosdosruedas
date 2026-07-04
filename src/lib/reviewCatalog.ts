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
  {
    id: "home-hero",
    page: "Home (Inicio)",
    componentName: "HeroAnimado",
    componentPath: "src/components/home/HeroAnimado.tsx",
    sectionTitle: "Hero Section / Presentación Principal",
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
  {
    id: "nosotros-sobre",
    page: "Sobre Nosotros",
    componentName: "SobreNosotrosPage",
    componentPath: "src/app/nosotros/sobre-nosotros/page.tsx",
    sectionTitle: "Historia y Compromiso",
    currentText: "Título: Quiénes Somos\nDescripción: Nacimos en Mar del Plata en 2020 con la misión de dinamizar la distribución local. Hoy en 2026, somos la empresa líder en delivery Same-Day y Flex de la costa atlántica.\nValores: Velocidad, Cuidado del Producto, Trato humano local.",
    elementsToReview: ["Título principal", "Cuerpo histórico", "Detalle de valores corporativos"]
  },
  {
    id: "servicios-express",
    page: "Servicios",
    componentName: "EnviosExpressPage",
    componentPath: "src/app/servicios/envios-express/page.tsx",
    sectionTitle: "Detalle Envíos Express",
    currentText: "Título: Envíos Express - En el Acto\nDescripción: Ideal para documentos, trámites urgentes, compras directas y delivery gastronómico en Mar del Plata. Cobertura total y rastreo GPS en tiempo real.\nPromesa de entrega: En menos de 90 minutos en zonas urbanas céntricas.",
    elementsToReview: ["Títulos", "Descripciones", "Promesas de tiempo y condiciones"]
  },
  {
    id: "servicios-lowcost",
    page: "Servicios",
    componentName: "EnviosLowCostPage",
    componentPath: "src/app/servicios/envios-lowcost/page.tsx",
    sectionTitle: "Detalle Envíos LowCost",
    currentText: "Título: Envíos LowCost - Máximo Ahorro\nDescripción: Solución óptima para e-commerce que consolidan pedidos. Retiro por tu local y entrega programada al día siguiente en toda la ciudad.\nTarifa: La opción más económica de Mar del Plata para envíos no urgentes.",
    elementsToReview: ["Títulos", "Condiciones de entrega", "Explicación de tarifas"]
  },
  {
    id: "servicios-flex",
    page: "Servicios",
    componentName: "EnviosFlexPage",
    componentPath: "src/app/servicios/enviosflex/page.tsx",
    sectionTitle: "Detalle MercadoLibre Flex",
    currentText: "Título: MercadoLibre Flex en Mar del Plata\nDescripción: Cumplí con la promesa de entrega en el día de MercadoLibre. Retiramos tus paquetes diariamente y los entregamos por la tarde. Mantén tu reputación en verde.\nCobertura: Todo el ejido urbano de General Pueyrredon.",
    elementsToReview: ["Títulos", "Condiciones Flex", "Menciones de reputación y horarios"]
  },
  {
    id: "contacto-page",
    page: "Contacto",
    componentName: "ContactoPage",
    componentPath: "src/app/contacto/page.tsx",
    sectionTitle: "Formulario de Contacto e Información",
    currentText: "Título: Contactanos\nDirección Central: Friuli 1972, Mar del Plata\nHorario de Atención: Lunes a Viernes de 08:00 a 18:00 hs, Sábados de 09:00 a 13:00 hs.\nTeléfonos y Canales: WhatsApp de despacho rápido.",
    elementsToReview: ["Datos de dirección física", "Horarios operativos 2026", "Mensaje del formulario"]
  }
];
