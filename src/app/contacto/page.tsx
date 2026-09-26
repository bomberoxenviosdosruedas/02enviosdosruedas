import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/src/components/contacto/ContactHero';
import ContactForm from '@/src/components/contacto/ContactForm';
import ContactInfo from '@/src/components/contacto/ContactInfo';
import ConversionBanner from '@/src/components/contacto/ConversionBanner';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Contacto y Base Central',
  description: 'Contacto con el equipo comercial y logística urbana de Envíos DosRuedas en Mar del Plata. Cotizaciones inmediatas por WhatsApp y atención personalizada.',
  alternates: {
    canonical: `${baseUrl}/contacto`,
  },
  openGraph: {
    title: 'Contacto y Base Central | Envíos DosRuedas',
    description: 'Contacto con el equipo comercial y logística urbana de Envíos DosRuedas en Mar del Plata. Cotizaciones inmediatas por WhatsApp.',
    url: `${baseUrl}/contacto`,
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto y Base Central | Envíos DosRuedas',
    description: 'Contacto con el equipo comercial y logística urbana de Envíos DosRuedas en Mar del Plata. Cotizaciones inmediatas por WhatsApp.',
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
  },
};

export default function ContactoPage() {
  return (
    <main className="min-h-[100dvh] bg-brand-white-50 text-brand-blue-700 relative overflow-hidden font-sans">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 space-y-16 bg-brand-white-50">
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
