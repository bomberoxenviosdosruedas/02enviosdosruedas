'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const baseUrl = 'https://www.enviosdosruedas.com';

interface SchemaConfig {
  [path: string]: object;
}

const schemas: SchemaConfig = {
  '/servicios/envios-express': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Envíos Express Inmediatos',
    description: 'La solución premium para operaciones de alta criticidad horaria en Mar del Plata. Vos elegís el rango exacto de entrega con certeza absoluta en menos de 2 horas.',
    url: `${baseUrl}/servicios/envios-express`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#localbusiness`,
      name: 'Envíos DosRuedas',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mar del Plata',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tarifas Express por Zona',
      itemListElement: [
        { '@type': 'Offer', name: 'Express 0-3 km', price: '3700', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Express 3-6 km', price: '4200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Express 6-10 km', price: '5200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Express 10-15 km', price: '6800', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      ],
    },
  },
  '/servicios/envios-lowcost': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Envíos LowCost Rentables',
    description: 'Optimizá tus ruteos urbanos diarios en Mar del Plata. Envíos LowCost económicos, con entrega garantizada en el día y tarifas altamente competitivas para PyMEs.',
    url: `${baseUrl}/servicios/envios-lowcost`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#localbusiness`,
      name: 'Envíos DosRuedas',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mar del Plata',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tarifas LowCost por Zona',
      itemListElement: [
        { '@type': 'Offer', name: 'LowCost 0-5 km', price: '2200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'LowCost 5-10 km', price: '2800', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'LowCost 10-15 km', price: '3500', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'LowCost 15-20 km', price: '4200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      ],
    },
  },
  '/servicios/enviosflex': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Envíos Flex MercadoLibre',
    description: 'Optimizá tus entregas Same-Day en Mar del Plata. Socios logísticos certificados para Mercado Envíos Flex. Medidor de reputación siempre en verde y envíos rápidos.',
    url: `${baseUrl}/servicios/enviosflex`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#localbusiness`,
      name: 'Envíos DosRuedas',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mar del Plata',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Planes Flex para Vendedores',
      itemListElement: [
        { '@type': 'Offer', name: 'Flex Estándar', description: 'Hasta 50 envíos/día - ideal para vendedores en crecimiento', price: '0', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Flex Pro', description: 'Hasta 200 envíos/día - para vendedores establecidos', price: '0', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Flex Enterprise', description: 'Volumen ilimitado - integración API + gestor dedicado', price: '0', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      ],
    },
  },
  '/servicios/plan-emprendedores': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Logística 3PL y Plan Emprendedores',
    description: 'Solución integral de almacenamiento, picking, packing y fulfillment para PyMEs y e-commerce en Mar del Plata. Alquilá espacio en nuestro depósito 3PL propio.',
    url: `${baseUrl}/servicios/plan-emprendedores`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#localbusiness`,
      name: 'Envíos DosRuedas',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mar del Plata',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Planes 3PL y Fulfillment',
      itemListElement: [
        { '@type': 'Offer', name: 'Plan Emprendedor', description: 'Hasta 100 órdenes/mes - almacenamiento + picking + packing', price: '0', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Plan PyME', description: 'Hasta 500 órdenes/mes - todo lo anterior + gestión devoluciones', price: '0', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Plan Enterprise', description: 'Volumen ilimitado - integración ERP + KPIs dedicados', price: '0', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      ],
    },
  },
  '/cotizar/express': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cotizador de Envíos Express',
    description: 'Calculá el costo y tiempo estimado de tu envío prioritario al instante. Alta precisión de tarifa y entrega en el día en Mar del Plata.',
    url: `${baseUrl}/cotizar/express`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#localbusiness`,
      name: 'Envíos DosRuedas',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mar del Plata',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tarifas Express por Distancia',
      itemListElement: [
        { '@type': 'Offer', name: 'Express 0-3 km', price: '3700', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Express 3-6 km', price: '4200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Express 6-10 km', price: '5200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Express 10-15 km', price: '6800', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Express 15-20 km', price: '8500', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      ],
    },
  },
  '/cotizar/lowcost': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cotizador de Envíos LowCost',
    description: 'Calculá tu envío con entrega garantizada en el dia si es solicitado antes de 13hs. Eficiencia y rentabilidad.',
    url: `${baseUrl}/cotizar/lowcost`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#localbusiness`,
      name: 'Envíos DosRuedas',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mar del Plata',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tarifas LowCost por Distancia',
      itemListElement: [
        { '@type': 'Offer', name: 'LowCost 0-5 km', price: '2200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'LowCost 5-10 km', price: '2800', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'LowCost 10-15 km', price: '3500', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'LowCost 15-20 km', price: '4200', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'LowCost 20-25 km', price: '5000', priceCurrency: 'ARS', availability: 'https://schema.org/InStock' },
      ],
    },
  },
  '/nosotros/preguntas-frecuentes': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Qué tipo de envíos realizan?', acceptedAnswer: { '@type': 'Answer', text: 'Realizamos todo tipo de mensajería y distribución local: Envíos Express (prioritarios en el acto), Envíos LowCost (económicos programados) y entregas de MercadoLibre Flex.' } },
      { '@type': 'Question', name: '¿Cuáles son las zonas de cobertura?', acceptedAnswer: { '@type': 'Answer', text: 'Ofrecemos cobertura total dentro del ejido urbano de Mar del Plata, organizados de forma eficiente para llegar a cada rincón de la ciudad.' } },
      { '@type': 'Question', name: '¿Cuáles son los límites de tamaño y peso sin cobros adicionales?', acceptedAnswer: { '@type': 'Answer', text: 'Transportamos paquetes ligeros de hasta 5 kg con medidas de 40x40x30 cm. Esto garantiza la agilidad del tránsito urbano y resguarda la seguridad vial de nuestros repartidores. Bultos que excedan estas dimensiones pueden cotizarse de manera especial.' } },
      { '@type': 'Question', name: '¿Cómo funciona el servicio de MercadoLibre Flex?', acceptedAnswer: { '@type': 'Answer', text: 'Realizamos tus entregas en el mismo día (Same-Day) en Mar del Plata para que mantengas tu reputación en verde. Retiramos tus paquetes y los entregamos de forma segura.' } },
      { '@type': 'Question', name: '¿Cómo se manejan los cobros de los servicios?', acceptedAnswer: { '@type': 'Answer', text: 'Ofrecemos opciones de facturación y cobros semanales, quincenales o mensuales para empresas y emprendedores. Factura tipo C disponible.' } },
      { '@type': 'Question', name: '¿Realizan entregas a Contrarreembolso?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, realizamos entregas con cobranza contrareembolso en el domicilio del comprador en Mar del Plata, rindiendo el dinero recolectado de forma segura y veloz.' } },
    ],
  },
  '/nosotros/sobre-nosotros': {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sobre Nosotros',
    description: 'Conocé la historia, valores y equipo detrás de Envíos DosRuedas. Más de 7 años liderando la logística urbana y la última milla de e-commerce en Mar del Plata.',
    url: `${baseUrl}/nosotros/sobre-nosotros`,
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#localbusiness`,
      name: 'Envíos DosRuedas',
      description: 'Más de 7 años liderando la logística urbana y la última milla de e-commerce en Mar del Plata.',
      foundingDate: '2017',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 10,
        maxValue: 50,
      },
    },
  },
  '/contacto': {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto Comercial',
    description: '¿Listo para escalar la logística de tu e-commerce? Hablá con un asesor comercial de Envíos DosRuedas y diseñemos un esquema tarifario a tu medida.',
    url: `${baseUrl}/contacto`,
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#localbusiness`,
      name: 'Envíos DosRuedas',
    },
  },
};

export default function SchemaScript() {
  const pathname = usePathname();
  const schema = schemas[pathname];

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}