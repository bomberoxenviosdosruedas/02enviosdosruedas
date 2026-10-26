import type { Metadata } from 'next';
import { LogisticaHero } from '@/components/logistica-dosruedas/LogisticaHero';
import { TrackingWidget } from '@/components/logistica-dosruedas/TrackingWidget';
import { PortalAccessCards } from '@/components/logistica-dosruedas/PortalAccessCards';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Logística DosRuedas | Seguimiento y Portales Digitales - Mar del Plata',
  description:
    'Rastreá tu paquete con tu código EDR e ingresá al panel comercial o de repartidores en Mar del Plata. Conexión de última milla con trazabilidad en tiempo real.',
  alternates: {
    canonical: `${baseUrl}/logistica-dosruedas`,
  },
  openGraph: {
    title: 'Logística DosRuedas | Seguimiento y Portales Operativos en MDQ',
    description:
      'Trazabilidad en tiempo real con código EDR y acceso directo a portales para comercios y repartidores en Mar del Plata.',
    url: `${baseUrl}/logistica-dosruedas`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function LogisticaDosRuedasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Logística DosRuedas',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://www.logisticadosruedas.com',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Envíos DosRuedas',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Friuli 1972',
        addressLocality: 'Mar del Plata',
        addressRegion: 'Buenos Aires',
        postalCode: 'B7600',
        addressCountry: 'AR',
      },
      telephone: '+54 223 660-2699',
    },
    description:
      'Sistema de seguimiento y portales operativos de logística y última milla en Mar del Plata.',
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LogisticaHero />
      <TrackingWidget />
      <PortalAccessCards />
    </main>
  );
}
