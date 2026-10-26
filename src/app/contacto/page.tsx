import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/components/contacto/ContactHero';
import ContactForm from '@/components/contacto/ContactForm';
import ContactInfo from '@/components/contacto/ContactInfo';
import ConversionBanner from '@/components/contacto/ConversionBanner';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Contacto y Pedidos en Mar del Plata',
  description: 'Contacto directo y pedidos de mensajería, trámites y logística urbana en Mar del Plata. Teléfono: 223 660-2699. Base en Friuli 1972. Cotizaciones inmediatas por WhatsApp.',
  alternates: {
    canonical: `${baseUrl}/contacto`,
  },
  openGraph: {
    title: 'Contacto y Pedidos en Mar del Plata | Envíos DosRuedas',
    description: 'Contacto directo y pedidos de mensajería, trámites y logística en Mar del Plata. Teléfono: 223 660-2699.',
    url: `${baseUrl}/contacto`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto y Pedidos en Mar del Plata | Envíos DosRuedas',
    description: 'Contacto directo y pedidos de mensajería, trámites y logística en Mar del Plata. Teléfono: 223 660-2699.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@enviosdosruedas',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto - Envíos DosRuedas',
  description: 'Contacto oficial y cotización inmediata de Envíos DosRuedas en Mar del Plata.',
  url: `${baseUrl}/contacto`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Envíos DosRuedas',
    image: `${baseUrl}/og-image.jpg`,
    priceRange: '$$',
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
  },
};

export default function ContactoPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 relative overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Hero Section — el ContactHero pinta su propio fondo azul de marca */}
      <ContactHero />

      {/* Interactive Contact & Info Section — lienzo blanco: es la sección que
          sigue al hero y todo lo de abajo (ContactForm, ContactInfo,
          ConversionBanner) está compuesto para fondo claro. Sobre azul, el
          <h2> de ContactInfo quedaba en #0950F6 sobre #0950F6. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 space-y-16 bg-white">
        {/* Upper Grid: Contact Form & Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Formulario de Cotización Inmediata (5 Cols on desktop) */}
          <div className="lg:col-span-5 h-full">
            <ContactForm />
          </div>

          {/* Column 2: Bento Grid Redes, Canales y Base (7 Cols on desktop) */}
          <div className="lg:col-span-7 h-full">
            <ContactInfo />
          </div>
        </div>

        {/* Bottom Banner de Conversión / Cierre */}
        <ConversionBanner />
      </section>
    </main>
  );
}
