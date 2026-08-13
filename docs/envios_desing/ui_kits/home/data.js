window.EDR_DATA={
  nav:[
    {id:'inicio',label:'Inicio',icon:'Home'},
    {id:'servicios',label:'Servicios',icon:'Bike',children:[
      {label:'Envíos Express',description:'Rápido, en 2 horas',icon:'Zap'},
      {label:'Envíos LowCost',description:'Económico e inteligente',icon:'TrendingDown'},
      {label:'Envíos Flex (MeLi)',description:'Socio MercadoLibre Flex',icon:'Clock'},
      {label:'E-Commerce & 3PL',description:'Logística para PyMEs',icon:'ShoppingBag'}]},
    {id:'nosotros',label:'Nosotros',icon:'Info',children:[
      {label:'Sobre Nosotros',description:'Quiénes somos',icon:'Info'},
      {label:'Preguntas Frecuentes',description:'Todas tus dudas resueltas',icon:'HelpCircle'},
      {label:'Nuestras Redes',description:'Comunidad en movimiento',icon:'Share2'}]},
    {id:'contacto',label:'Contacto',icon:'Mail'}
  ],
  servicios:[
    {id:'express',theme:'express',icon:'Zap',badge:'URGENTE',city:'Cobertura MDQ',title:'Envíos Express',
     description:'Mensajería en moto con entregas inmediatas de alta prioridad.',
     image:'../../assets/cards/fondo_express.webp',
     stats:{time:'30-90 min',price:'$3.700 Base',weight:'Hasta 10 kg'},
     summary:'Servicio de mensajería urbana inmediata, ideal para trámites urgentes, despacho de encomiendas y entrega de documentación. Se asigna un repartidor exclusivo para tu envío.',
     features:['Tarifa base de $3.700 hasta 3 km.','Entrega garantizada puerta a puerta en tiempo récord.','Notificación automática de entrega por WhatsApp.'],
     cta:'Cotizá tu Express'},
    {id:'lowcost',theme:'lowcost',icon:'Box',badge:'ECONÓMICO',city:'Todo Gral. Pueyrredón',title:'Envíos LowCost',
     description:'Envíos económicos planificados con retiro y entrega coordinados.',
     image:'../../assets/cards/fondo_lowcost.webp',
     stats:{time:'Same / Next Day',price:'$3.000 Base',weight:'Hasta 15 kg'},
     summary:'La alternativa ideal para e-commerce locales que buscan optimizar costos de envío. Agrupamos los repartos en rutas inteligentes diarias para ofrecer la tarifa más baja de la ciudad.',
     features:['Tarifa base de $3.000 hasta 3 km.','Retiro gratis a domicilio a partir de 5 envíos diarios.','Dos franjas horarias de entrega en el día.'],
     cta:'Probá el LowCost'},
    {id:'flex',theme:'flex',icon:'Truck',badge:'MERCADOLIBRE FLEX',city:'Mar del Plata y Batán',title:'Envíos Flex',
     description:'Entregas en el día integradas para tus ventas de MercadoLibre.',
     image:'../../assets/cards/fondo_flex.webp',
     stats:{time:'En el día',price:'Zonificado LowCost',weight:'Apto Moto / Auto'},
     summary:'Habilitá Envíos Flex en tu cuenta de MercadoLibre y despachá todas tus ventas en el mismo día. Mejorá tu reputación y convertite en vendedor destacado con recolección gratuita.',
     features:['Visitas bonificadas según tu volumen diario.','Reparto coordinado antes de las 20:00 hs.','Recolección a domicilio sin cargo extra.'],
     cta:'Configurá Flex'},
    {id:'3pl',theme:'3pl',icon:'Warehouse',badge:'LOGÍSTICA INTEGRAL',city:'Depósito Friuli 1972',title:'E-Commerce & 3PL',
     description:'Logística integral: almacenamiento, preparación y despacho de pedidos.',
     image:'../../assets/cards/fondo_emprendedores.webp',
     stats:{time:'24 hs / Stock',price:'Planes a Medida',weight:'Sin límite'},
     summary:'Almacená tus productos en nuestro depósito central en Mar del Plata y olvidate del empaque y los despachos. Nosotros nos encargamos de todo el proceso logístico para que te dediques a vender.',
     features:['Control de stock digital por QR / código de barras.','Embalaje profesional y seguro.','Distribución Same-Day y Next-Day.'],
     cta:'Consultá planes'}
  ],
  partners:['Costa Galana','Punto & Papel','Farmacias de la Costa','Antares MDQ','Supersalud','Mar del Plata Logística','Sur E-Commerce','Textil Güemes'],
  zonas:['Centro','La Perla','Constitución','Zona Güemes','Playa Grande','Puerto','Bosque Peralta Ramos','Batán / P. Industrial']
};
