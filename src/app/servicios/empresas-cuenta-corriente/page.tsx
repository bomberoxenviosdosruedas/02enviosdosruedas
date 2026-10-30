import React from 'react';
import CuentaCorrienteHero from '@/components/servicios/cuenta-corriente/CuentaCorrienteHero';
import CuentaCorrienteBenefits from '@/components/servicios/cuenta-corriente/CuentaCorrienteBenefits';
import CuentaCorrienteRubros from '@/components/servicios/cuenta-corriente/CuentaCorrienteRubros';

const baseUrl = 'https://www.enviosdosruedas.com';

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Logística Corporativa y Cuenta Corriente para Empresas en Mar del Plata',
  description:
    'Servicio de logística corporativa con cuenta corriente comercial en Mar del Plata. Retiros diarios programados, pagos semanales, quincenales o mensuales y trazabilidad digital.',
  url: `${baseUrl}/servicios/empresas-cuenta-corriente`,
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
      name: 'Empresas y Cuenta Corriente',
      item: `${baseUrl}/servicios/empresas-cuenta-corriente`,
    },
  ],
};

export default function EmpresasCuentaCorrientePage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 relative overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CuentaCorrienteHero />
      <CuentaCorrienteBenefits />
      <CuentaCorrienteRubros />
    </main>
  );
}
