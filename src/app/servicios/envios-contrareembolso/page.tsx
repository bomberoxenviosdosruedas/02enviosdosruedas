import React from 'react';
import { Metadata } from 'next';
import ContrareembolsoHero from '@/components/servicios/contrareembolso/ContrareembolsoHero';
import ContrareembolsoHowItWorks from '@/components/servicios/contrareembolso/ContrareembolsoHowItWorks';
import ContrareembolsoBenefits from '@/components/servicios/contrareembolso/ContrareembolsoBenefits';
import ContrareembolsoCTA from '@/components/servicios/contrareembolso/ContrareembolsoCTA';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos Contra Reembolso en Mar del Plata | Cobro en Destino',
  description:
    'Cobro contra reembolso y entrega segura en Mar del Plata. Rendición de efectivo en el día para tu comercio o tienda online, sin comisiones adicionales.',
  alternates: {
    canonical: `${baseUrl}/servicios/envios-contrareembolso`,
  },
  openGraph: {
    title: 'Envíos Contra Reembolso en Mar del Plata | Envíos DosRuedas',
    description:
      'Entregá tus paquetes y cobrá en mano en Mar del Plata. Rendición en el día con total seguridad y flota propia.',
    url: `${baseUrl}/servicios/envios-contrareembolso`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Envíos Contra Reembolso y Cobro en Destino en Mar del Plata',
  description:
    'Servicio de cobro contra entrega y rendición en el día, al día siguiente o semanal, según lo acordado, en Mar del Plata para comercios y emprendedores.',
  url: `${baseUrl}/servicios/envios-contrareembolso`,
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
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${baseUrl}/#servicios` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Envíos Contrarreembolso',
      item: `${baseUrl}/servicios/envios-contrareembolso`,
    },
  ],
};

export default function EnviosContrareembolsoPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContrareembolsoHero />
      <ContrareembolsoHowItWorks />
      <ContrareembolsoBenefits />
      <ContrareembolsoCTA />
    </main>
  );
}
