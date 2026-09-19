'use client';

import React from 'react';

interface SchemaMarkupProps {
  type: 'localBusiness' | 'organization' | 'service' | 'faq' | 'breadcrumb';
  data?: Record<string, unknown>;
}

const baseUrl = 'https://www.enviosdosruedas.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Envíos DosRuedas',
  url: baseUrl,
  logo: `${baseUrl}/logo-envios-simplified.webp`,
  sameAs: [
    'https://www.instagram.com/enviosdosruedas',
    'https://www.facebook.com/enviosdosruedas',
    'https://wa.me/542236602699',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+54-223-660-2699',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
    areaServed: 'AR',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${baseUrl}#localbusiness`,
  name: 'Envíos DosRuedas',
  description: 'Mensajería y logística e-commerce en Mar del Plata. Envíos Express, LowCost, MercadoLibre Flex y soluciones de fulfillment para PyMEs.',
  url: baseUrl,
  telephone: '+54-223-660-2699',
  email: 'matiascejas@enviosdosruedas.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Friuli 1972',
    addressLocality: 'Mar del Plata',
    addressRegion: 'Buenos Aires',
    postalCode: '7600',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -38.0175,
    longitude: -57.5683,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '15:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Mar del Plata',
  },
  priceRange: '$$',
  currenciesAccepted: 'ARS',
  paymentAccepted: 'Cash, Transfer, MercadoPago',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Logística y Mensajería',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos Express',
          description: 'Entregas prioritarias en 60 a 90 minutos en Mar del Plata.',
          url: `${baseUrl}/servicios/envios-express`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos LowCost',
          description: 'Envíos económicos con entrega garantizada en el día antes de las 19:00 hs.',
          url: `${baseUrl}/servicios/envios-lowcost`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos Flex (MercadoLibre)',
          description: 'Servicio logístico adaptado a Mercado Envíos Flex con 100% cumplimiento en el día.',
          url: `${baseUrl}/servicios/enviosflex`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Depósito, Fulfillment y Logística E-Commerce',
          description: 'Almacenamiento, picking, packing y despacho para e-commerce en Friuli 1972.',
          url: `${baseUrl}/servicios/deposito-fulfillment`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos a Contrareembolso',
          description: 'Cobro en mano en destino sin comisión extra y rendición inmediata en el día.',
          url: `${baseUrl}/servicios/envios-contrareembolso`,
        },
      },
    ],
  },
};

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  let schema: Record<string, unknown> | null = null;

  switch (type) {
    case 'organization':
      schema = organizationSchema;
      break;
    case 'localBusiness':
      schema = localBusinessSchema;
      break;
    case 'service':
      if (data) {
        schema = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.name as string,
          description: data.description as string,
          url: data.url as string,
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
            itemListElement: (data.offers as unknown[]) || [],
          },
        };
      }
      break;
    case 'faq':
      if (data?.questions) {
        schema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: (data.questions as Array<{ question: string; answer: string }>).map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })),
        };
      }
      break;
    case 'breadcrumb':
      if (data?.items) {
        schema = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: (data.items as Array<{ name: string; url: string }>).map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
          })),
        };
      }
      break;
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

export { localBusinessSchema, organizationSchema, baseUrl };