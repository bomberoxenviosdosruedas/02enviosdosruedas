export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategoryGroup {
  id: string;
  label: string;
  description: string;
  iconName: 'Truck' | 'Clock' | 'CreditCard' | 'ShieldCheck';
  questions: FaqQuestion[];
}

export const FAQ_DATA: FaqCategoryGroup[] = [
  {
    id: 'servicios',
    label: 'Servicios y Envíos',
    description: 'Soluciones de última milla, cobertura urbana y tipos de entrega',
    iconName: 'Truck',
    questions: [
      {
        question: '¿Qué tipo de servicios y soluciones logísticas realizan en Mar del Plata?',
        answer:
          'Ofrecemos mensajería urbana y soluciones para e-commerce: Envíos Flex para MercadoLibre, Envíos Express prioritarios, reparto LowCost programado, cadetería corporativa, mandados y servicio integral 3PL (almacenamiento, preparación de pedidos y distribución).',
      },
      {
        question: '¿Cuáles son las zonas de cobertura?',
        answer:
          'Cubrimos de forma integral todo el ejido urbano de Mar del Plata (no cubrimos zonas aledañas), garantizando presencia y entregas seguras en todos los barrios de la ciudad.',
      },
      {
        question: '¿Hacen entregas en el mismo día (Same-Day) y Mercado Envíos Flex?',
        answer:
          'Sí, somos especialistas en entregas en el día. Retiramos tus ventas y las entregamos en la misma jornada, cumpliendo estrictamente los tiempos de MercadoLibre para proteger tu reputación y medalla de vendedor.',
      },
      {
        question: '¿Cuáles son los límites de peso y tamaño por paquete?',
        answer:
          'Operamos con una flota propia y exclusiva de motocicletas. La capacidad máxima estándar es de hasta 5 kg o dimensiones de aproximadamente 40x40x30 cm por bulto.',
      },
      {
        question: '¿Realizan entregas a contrareembolso?',
        answer:
          'Sí, realizamos la cobranza en efectivo al momento de entregar el producto. El dinero recaudado se rinde en el transcurso del mismo día o a primera hora del día hábil siguiente.',
      },
      {
        question: '¿Trabajan con empresas o solo con particulares?',
        answer:
          'Atendemos a empresas, pymes, tiendas online, emprendedores y particulares que necesiten cadetería puntual o recurrente.',
      },
    ],
  },
  {
    id: 'tiempos',
    label: 'Tiempos y Operatoria',
    description: 'Horarios de base, anticipación de pedidos, seguimiento y contingencias',
    iconName: 'Clock',
    questions: [
      {
        question: '¿Cuáles son sus horarios de atención y recepción de pedidos?',
        answer:
          'Nuestro horario de atención en base (Friuli 1972) es de lunes a viernes de 09:00 a 18:00 hs y sábados de 10:00 a 15:00 hs. Para el servicio LowCost del día, el horario de corte de recepción de pedidos es a las 13:00 hs.',
      },
      {
        question: '¿Cómo funciona el Servicio Express y con cuánta anticipación debo pedirlo?',
        answer:
          'El Servicio Express cuenta con prioridad operativa inmediata para envíos urgentes. Podés programar tu franja horaria de retiro y entrega con una antelación mínima de 2 horas.',
      },
      {
        question: '¿Cómo realizo el seguimiento de mi envío?',
        answer:
          'Centralizamos la gestión de forma ágil y directa vía WhatsApp. Te mantenemos informado del estado del paquete y te enviamos la confirmación inmediata una vez concretada la entrega.',
      },
      {
        question: '¿Qué información necesito proporcionar para solicitar un envío?',
        answer:
          'Solo requerimos: dirección exacta de retiro, dirección de entrega, franja horaria, detalle o tamaño del paquete, y nombre con teléfono de contacto de quien recibe.',
      },
      {
        question: '¿Puedo modificar la dirección de entrega cuando el paquete ya está en camino?',
        answer:
          'Sí, podés avisarnos por WhatsApp y coordinamos el cambio. Tené en cuenta que, dependiendo de la distancia a la nueva zona, puede aplicar un costo adicional por kilometraje.',
      },
      {
        question: '¿Qué sucede si el destinatario no está en el domicilio o rechaza el producto?',
        answer:
          'Te avisamos en el momento para intentar resolverlo. Si el paquete no puede entregarse y debe regresar a tu local o depósito, la devolución se realiza totalmente SIN CARGO.',
      },
    ],
  },
  {
    id: 'precios',
    label: 'Precios, Pagos y Facturación',
    description: 'Cálculo por distancia, métodos de pago y planes para comercios',
    iconName: 'CreditCard',
    questions: [
      {
        question: '¿Cómo calculan el costo del envío?',
        answer:
          'El valor se calcula según la distancia punto a punto entre retiro y entrega, contemplando adicionales si existen (días de lluvia, bultos especiales o demoras en espera).',
      },
      {
        question: '¿Cuáles son las formas de pago aceptadas?',
        answer:
          'Podés abonar mediante transferencia bancaria, dinero en cuenta o efectivo al momento del retiro o la entrega.',
      },
      {
        question: '¿Emiten factura por el servicio?',
        answer:
          'Sí, emitimos Factura C para todos nuestros servicios profesionales, comerciales y corporativos.',
      },
      {
        question: '¿Tienen planes o tarifas especiales para emprendedores y envíos masivos?',
        answer:
          'Sí, contamos con el "Plan Emprendedores" y esquemas de tarifas reducidas para comercios y marcas con volumen diario recurrente.',
      },
    ],
  },
  {
    id: 'confianza',
    label: 'Confianza y Diferenciación',
    description: 'Nuestra propuesta de valor, flota propia y contacto directo',
    iconName: 'ShieldCheck',
    questions: [
      {
        question: '¿Qué diferencia a Envíos DosRuedas de otras mensajerías o apps?',
        answer:
          'Brindamos "Logística con Cara Humana": contamos con flota propia de motos (cero tercerización informal), atención personalizada y directa por WhatsApp sin bots impersonales, y una calificación perfecta de 5 estrellas en Mar del Plata respaldada por nuestra puntualidad, cuidado y compromiso real.',
      },
      {
        question: '¿Cómo puedo solicitar un envío o pedir una cotización?',
        answer:
          'Escribinos directamente por WhatsApp al 2236602699 y un operador te responderá al instante con la cotización exacta para tu pedido.',
      },
    ],
  },
];
