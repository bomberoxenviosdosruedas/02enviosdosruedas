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
  logo: `${baseUrl}/LogoEnviosDosRuedas.png`,
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
  description: 'Mensajería y logística e-commerce en Mar del Plata. Envíos Express, LowCost, MercadoLibre Flex y soluciones 3PL para PyMEs.',
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
    latitude: -38.0055,
    longitude: -57.5426,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Mar del Plata',
  },
  priceRange: '$$',
  currenciesAccepted: 'ARS',
  paymentAccepted: 'Cash, Credit Card, Transfer, MercadoPago',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Logística y Mensajería',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos Express',
          description: 'Entregas prioritarias en menos de 2 horas en Mar del Plata.',
          url: `${baseUrl}/servicios/envios-express`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos LowCost',
          description: 'Envíos económicos con entrega garantizada en el día para PyMEs.',
          url: `${baseUrl}/servicios/envios-lowcost`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Envíos Flex (MercadoLibre)',
          description: 'Socio logístico certificado para Mercado Envíos Flex. Same-Day delivery.',
          url: `${baseUrl}/servicios/enviosflex`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Logística 3PL y Plan Emprendedores',
          description: 'Almacenamiento, picking, packing y fulfillment para e-commerce.',
          url: `${baseUrl}/servicios/plan-emprendedores`,
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
            itemListElement: data.offers as unknown[] || [],
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