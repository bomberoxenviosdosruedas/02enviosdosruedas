import React from 'react';
import { Metadata } from 'next';
import ExpressHero from '@/src/components/servicios/express/ExpressHero';
import ExpressFeatures from '@/src/components/servicios/express/ExpressFeatures';
import ExpressPricing from '@/src/components/servicios/express/ExpressPricing';
import ExpressUseCases from '@/src/components/servicios/express/ExpressUseCases';
import { EXPRESS_PRICE_PER_KM, EXPRESS_TIERS } from '@/src/lib/pricing';
import { CONSULT_THRESHOLD_KM, EXPRESS_WINDOW, MAX_WEIGHT_KG } from '@/src/lib/promises';

const baseUrl = 'https://www.enviosdosruedas.com';
const lastTier = EXPRESS_TIERS[EXPRESS_TIERS.length - 1];

export const metadata: Metadata = {
  title: 'Envíos Express en Moto en Mar del Plata (60-90 min)',
  description: `Mensajería en moto con entrega en ${EXPRESS_WINDOW} en Mar del Plata. Tarifa fija por distancia desde $${EXPRESS_TIERS[0].price.toLocaleString('es-AR')}, bultos de hasta ${MAX_WEIGHT_KG} kg. Cotizá online en segundos.`,
  alternates: {
    canonical: `${baseUrl}/servicios/envios-express`,
  },
  openGraph: {
    title: 'Envíos Express en Moto en Mar del Plata | Envíos DosRuedas',
    description: `Cadetería en moto con entrega en ${EXPRESS_WINDOW} en todo Mar del Plata. Flota propia y tarifas 2026 por distancia.`,
    url: `${baseUrl}/servicios/envios-express`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envíos Express en Moto en Mar del Plata | Envíos DosRuedas',
    description: `Cadetería en moto con entrega en ${EXPRESS_WINDOW} en todo Mar del Plata. Flota propia y tarifas 2026 por distancia.`,
    // Sin `images`: X usa og:image, que genera ./opengraph-image.tsx (public/og-image.jpg no existe).
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mensajería en Moto y Envíos Express en Mar del Plata',
  serviceType: 'Mensajería en moto',
  description: `Servicio prioritario de mensajería en moto con entrega en ${EXPRESS_WINDOW} en Mar del Plata. Bultos de hasta ${MAX_WEIGHT_KG} kg.`,
  url: `${baseUrl}/servicios/envios-express`,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Envíos DosRuedas',
    telephone: '+54-223-660-2699',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      postalCode: '7600',
      addressCountry: 'AR',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Mar del Plata',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tarifas Express Vigentes 2026',
    itemListElement: [
      ...EXPRESS_TIERS.map((tier) => ({
        '@type': 'Offer',
        name: `Express de ${tier.minKm} a ${tier.maxKm} km`,
        price: String(tier.price),
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
      })),
      {
        '@type': 'Offer',
        name: `Express de más de ${lastTier.maxKm} km y hasta ${CONSULT_THRESHOLD_KM} km`,
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
        description: `Kilómetros totales redondeados hacia arriba por $${EXPRESS_PRICE_PER_KM.toLocaleString('es-AR')} cada uno.`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(EXPRESS_PRICE_PER_KM),
          priceCurrency: 'ARS',
          unitText: 'km',
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${baseUrl}/#servicios` },
    { '@type': 'ListItem', position: 3, name: 'Envíos Express', item: `${baseUrl}/servicios/envios-express` },
  ],
};

export default function EnviosExpressPage() {
  return (
    <main className="min-h-dvh bg-brand-white-50 text-brand-blue-900 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ExpressHero />
      <ExpressFeatures />
      <ExpressPricing />
      <ExpressUseCases />
    </main>
  );
}
