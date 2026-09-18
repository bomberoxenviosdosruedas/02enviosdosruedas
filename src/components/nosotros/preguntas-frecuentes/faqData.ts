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
          'Ofrecemos mensajería urbana y paquetería especializada en e-commerce: Envíos Flex para MercadoLibre con 100% cumplimiento en el día, Envíos Express prioritarios en 60-90 min, reparto LowCost económico antes de las 19:00 hs, cadetería corporativa, cobro contrarreembolso y servicio integral de depósito & fulfillment (picking, packing y despacho).',
      },
      {
        question: '¿Se puede entregar en un horario puntual específico?',
        answer:
          'No, únicamente trabajamos con rangos horarios de entrega de 3 horas de espaciado (por ejemplo de 10:00 a 13:00 hs o de 14:00 a 17:00 hs). Esta metodología permite a nuestros repartidores optimizar las rutas viales en Mar del Plata y garantizar que tu entrega se cumpla sin demoras imprevistas.',
      },
      {
        question: '¿Se puede elegir horario en los envíos LowCost?',
        answer:
          'No, las entregas LowCost no admiten elección de franja horaria. Los paquetes se entregan a lo largo de la jornada antes de las 19:00 hs. Esto nos permite consolidar volumen de envíos en la misma zona y ofrecerte la tarifa más económica de la ciudad.',
      },
      {
        question: '¿Tienen mínimo de envíos para vendedores de Mercado Libre Flex?',
        answer:
          'No tenemos ningún mínimo de envíos diarios: retiramos desde 1 solo paquete en tu domicilio o local comercial. Retiramos varias veces al día si es necesario. A mayor cantidad de envíos diarios coordinados, obtenés mejores beneficios y tarifas reducidas por volumen.',
      },
      {
        question: '¿Cómo funciona el depósito y fulfillment (Servicio E-Commerce / 3PL)?',
        answer:
          'Almacenamos tu stock en nuestra base logística de Friuli 1972. Cuando concretás una venta online o por redes, nosotros nos encargamos del empaquetado, etiquetado y despacho directo en el día (Same-Day). También disponemos de modalidad Drop-Off: traés tus envíos listos a nuestro depósito y obtenés un 20% de descuento sobre la tarifa final.',
      },
      {
        question: '¿Cuáles son las zonas de cobertura?',
        answer:
          'Cubrimos de forma integral todo el ejido urbano de Mar del Plata (Centro, Güemes, Puerto, Mogotes, Constitución, San Juan, La Perla, etc.) y extendemos radios operativos hasta 20 km para llegar a Batán y Sierra de los Padres.',
      },
      {
        question: '¿Cuáles son los límites de peso y tamaño por paquete?',
        answer:
          'Operamos con una flota propia y exclusiva de motos. La capacidad estándar es de hasta 5 kg o dimensiones de aproximadamente 40x30 cm por bulto. Paquetes que superen este peso o volumen pueden tener un adicional por bulto especial.',
      },
      {
        question: '¿Realizan entregas a contrareembolso? ¿Cobran comisión extra?',
        answer:
          'Sí, realizamos el cobro en efectivo en mano al destinatario en el momento de la entrega. Lo más importante: no cobramos ningún extra ni porcentaje de comisión por este servicio. El dinero recaudado se rinde en el transcurso del mismo día.',
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
        question: '¿Cuáles son los horarios de corte para entregas en el mismo día?',
        answer:
          'Nuestros horarios de corte son: Reparto LowCost: solicitar antes de las 13:00 hs (entregas antes de las 19:00 hs). Envíos Express: solicitar antes de las 15:00 hs con mínimo 2 hs de anticipación. Mercado Envíos Flex: horario de corte a las 15:00 hs con entregas aseguradas antes de las 20:00 hs.',
      },
      {
        question: '¿Cuáles son sus horarios de atención en base Friuli 1972?',
        answer:
          'Nuestra base de operaciones atiende de lunes a viernes de 09:00 a 18:00 hs y los sábados de 10:00 a 15:00 hs. Podés acercarte para dejar paquetes (Drop-Off) o retirar correspondencia y mercadería.',
      },
      {
        question: '¿Cómo funciona el Servicio Express prioritario?',
        answer:
          'El Servicio Express cuenta con prioridad inmediata de cadetería. Es ideal para trámites urgentes, repuestos o mandados donde necesitás franja acotada de 3 hs. Podés pedirlo antes de las 15:00 hs con 2 horas de anticipación.',
      },
      {
        question: '¿Cómo realizo el seguimiento de mi envío?',
        answer:
          'Centralizamos la gestión de forma ágil y directa vía WhatsApp (+54 223 660-2699). Cada cotización genera un identificador de seguimiento (#DR-XXXX). Te mantenemos informado del estado del paquete y te confirmamos la entrega con foto o firma en el acto.',
      },
      {
        question: '¿Qué sucede si el destinatario no está en el domicilio o rechaza el producto?',
        answer:
          'Te contactamos en el momento por WhatsApp para intentar coordinar con el comprador o vecino. Si el paquete no puede entregarse y debe regresar a tu local o a nuestra base, la devolución o segundo intento se coordina de inmediato cuidando tu mercadería.',
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
        question: '¿Cuáles son las tarifas vigentes 2026 de Envíos DosRuedas?',
        answer:
          'Nuestras tarifas base 2026 son transparentes: Express: 0-3km $3.700, 3-5km $4.600, 5-7km $6.100, 7-10km $8.200. LowCost: 0-3km $3.000, 3-5km $4.000, 5-7km $5.300, 7-10km $7.000. Superados los 10 km, rige el valor unitario por km con redondeo superior Math.ceil.',
      },
      {
        question: '¿Cómo se calcula el precio para distancias de más de 10 km?',
        answer:
          'Para distancias superiores a 10 km (hasta nuestro límite de 20 km), se toma el kilometraje total redondeado hacia arriba (Math.ceil) y se multiplica por la tarifa por km: $1.000 por km en Express o $700 por km en LowCost. Por ejemplo, un envío de 10,3 km en Express se calcula como 11 km × $1.000 = $11.000.',
      },
      {
        question: '¿Cuáles son las formas de pago aceptadas?',
        answer:
          'Aceptamos transferencias bancarias (CBU / CVU / alias), dinero en cuenta de Mercado Pago y efectivo en mano tanto en el retiro como en destino al entregar.',
      },
      {
        question: '¿Emiten factura por el servicio logístico?',
        answer:
          'Sí, emitimos comprobantes oficiales de Facturación para todos nuestros servicios profesionales, comerciales y corporativos (ideal empresas con cuenta corriente quincenal).',
      },
      {
        question: '¿Tienen descuentos para comercios y cuentas corrientes?',
        answer:
          'Sí, contamos con el servicio para Empresas con Cuenta Corriente: liquidación quincenal unificada, tarifas bonificadas por volumen diario recurrente y atención preferencial vía WhatsApp.',
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
        question: '¿Qué diferencia a Envíos DosRuedas de las apps de delivery o mensajerías informales?',
        answer:
          'Brindamos logística con cara humana y responsabilidad real: flota de cadetes de confianza, base física establecida en Friuli 1972, comunicación directa por WhatsApp sin bots automatizados impersonales, y más de 7 años de trayectoria en las calles de Mar del Plata con calificación 5 estrellas.',
      },
      {
        question: '¿Cuál es la política de la empresa ante imprevistos o sobrecarga de demanda?',
        answer:
          '"Preferimos decir que no podemos, a fallar". Si por factores climáticos adversos o saturación de flota no podemos garantizar la entrega en el tiempo pactado, te avisamos de inmediato con total transparencia. Jamás prometemos lo que no podemos cumplir.',
      },
      {
        question: '¿Cómo puedo solicitar un envío en este momento?',
        answer:
          'Podés cotizar de forma inmediata en nuestra web o enviarnos un mensaje por WhatsApp al 2236602699 con las direcciones de retiro y entrega. Te asignamos cadete al instante.',
      },
    ],
  },
];
