import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/src/components/contacto/ContactForm';
import ContactInfo from '@/src/components/contacto/ContactInfo';
import ConversionBanner from '@/src/components/contacto/ConversionBanner';
import { Sparkles, MapPin, Phone } from 'lucide-react';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Contacto | Envíos DosRuedas Mar del Plata',
  description: 'Contacto con el equipo comercial y logística urbana de Envíos DosRuedas en Mar del Plata. Cotizaciones inmediatas por WhatsApp y atención personalizada.',
  alternates: {
    canonical: `${baseUrl}/contacto`,
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
    <main className="min-h-screen bg-[#090D16] text-white relative overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Ambient background glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#22C55E]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Intro Header Section */}
      <section className="pt-12 pb-8 border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                  Envíos DosRuedas · Tu Solución Confiable en Mar del Plata
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white">
                CONTACTO & COTIZACIONES
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111827] border border-white/10">
                <MapPin className="w-4 h-4 text-[#6366F1]" />
                <span>Friuli 1972, Mar del Plata</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111827] border border-white/10">
                <Phone className="w-4 h-4 text-[#22C55E]" />
                <span>+54 223 660-2699</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 space-y-16">
        {/* Upper Grid: Contact Form & Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
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
