export interface FAQItem {
  question: string;
  answer: string;
}

export const FLEX_FAQS: readonly FAQItem[] = [
  {
    question: '¿Existe un mínimo de paquetes diarios para que retiren en mi local?',
    answer:
      'No, retiramos desde 1 solo paquete diario sin costo adicional de recolección en tu comercio o depósito. Podés comenzar a operar sin exigencias de volumen.',
  },
  {
    question: '¿Tienen cobertura en toda la ciudad?',
    answer:
      'Sí, las tarifas estándar de Mercado Envíos Flex cubren todo el ejido urbano de la ciudad de Mar del Plata. Las zonas y localidades periféricas fuera de la ciudad (Chapadmalal, Batán, Santa Clara del Mar, etc.) requieren consulta previa y se cotizan a $1.000 por kilómetro, calculado según la distancia entre el punto de retiro y el de entrega.',
  },
  {
    question: '¿El cadete escanea el paquete en mi local?',
    answer:
      'Sí, el repartidor escanea cada paquete directamente en tu comercio al momento de la recolección para que el estado se actualice al instante en la plataforma de Mercado Libre.',
  },
  {
    question: '¿Se puede cobrar contra entrega?',
    answer:
      'No, el servicio de Mercado Libre Envíos Flex no admite cobros contra entrega. Todas las ventas deben estar previamente cobradas y gestionadas dentro del ecosistema de Mercado Libre.',
  },
  {
    question: '¿Qué sucede ante roturas, extravíos o incidencias?',
    answer:
      'Ante cualquier inconveniente, cada caso particular se evalúa y se resuelve de forma directa, ágil y personalizada con el comercio a través de nuestro soporte por WhatsApp.',
  },
];
