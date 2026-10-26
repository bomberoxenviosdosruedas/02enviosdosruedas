import type { Metadata } from 'next';
import { MarDeliveryHero } from '@/components/mardelivery/MarDeliveryHero';
import { CartaDigitalFeatures } from '@/components/mardelivery/CartaDigitalFeatures';
import { RepartidoresOptions } from '@/components/mardelivery/RepartidoresOptions';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'MarDelivery | Carta Digital, Pedidos QR y Cadetería en Mar del Plata',
  description:
    'Potenciá tu local comercial y gastronómico con MarDelivery. Menú QR, pedidos por WhatsApp, carga automática de envíos y cadetes por turno o flota flexible en Mar del Plata.',
  alternates: {
    canonical: `${baseUrl}/mardelivery`,
  },
  openGraph: {
    title: 'MarDelivery | Soluciones para Gastronomía y Comercios en MDQ',
    description:
      'Digitalizá tu carta online, recibí pedidos sin intermediarios y operá con cadetería flexible en Mar del Plata.',
    url: `${baseUrl}/mardelivery`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function MarDeliveryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'MarDelivery',
    serviceType: 'Delivery y Carta Digital para Gastronomía',
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
    areaServed: {
      '@type': 'City',
      name: 'Mar del Plata',
    },
    url: 'https://www.mardelivery.com',
    description:
      'Soluciones integrales de delivery, menú digital QR y cadetería flexible para restaurantes y comercios marplatenses.',
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarDeliveryHero />
      <CartaDigitalFeatures />
      <RepartidoresOptions />
    </main>
  );
}
