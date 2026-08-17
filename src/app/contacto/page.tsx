import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/src/components/contacto/ContactHero';
import ContactForm from '@/src/components/contacto/ContactForm';
import ContactInfo from '@/src/components/contacto/ContactInfo';
import { ShieldCheck, Truck, Clock, Headphones } from 'lucide-react';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Contacto Comercial & Cotizaciones | Envíos DosRuedas Mar del Plata',
  description: '¿Buscás escalar la logística de tu e-commerce o empresa? Hablá con el equipo comercial de Envíos DosRuedas en Mar del Plata y diseñemos un esquema de tarifas a medida.',
  alternates: {
    canonical: `${baseUrl}/contacto`,
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto Comercial & Cotizaciones - Envíos DosRuedas',
  description: 'Contacto con asesores comerciales de Envíos DosRuedas en Mar del Plata para planes de logística urbana, cadetería y distribución e-commerce.',
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

const trustFeatures = [
  {
    icon: Truck,
    title: 'Flota Propia en MDQ',
    desc: 'Motos y utilitarios patrullando todos los cuadrantes de la ciudad.',
  },
  {
    icon: Clock,
    title: 'Entregas Express 2h',
    desc: 'Prioridad máxima para urgencias y compras inmediatas de e-commerce.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía Sin Excusas',
    desc: 'Si no llegamos a la hora acordada, el envío corre por nuestra cuenta.',
  },
  {
    icon: Headphones,
    title: 'Soporte Directo',
    desc: 'Sin bots impersonales: hablás directo con operadores en Mar del Plata.',
  },
];

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-brand-white-50 text-brand-ink relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-brand-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Section */}
      <ContactHero />

      {/* Trust Highlights Bar */}
      <section className="bg-brand-blue-50/60 border-y border-brand-blue-100/70 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div key={feat.title} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-blue-200 flex items-center justify-center shrink-0 shadow-xs text-brand-blue-700">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm uppercase text-brand-blue-700 tracking-wide">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-ink/75 leading-relaxed mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Info Grid */}
      <section id="contacto-main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1: Contact Details, Hours & Coverage Map (5 Cols on desktop) */}
          <div className="lg:col-span-5 h-full">
            <ContactInfo />
          </div>

          {/* Column 2: Inquiry & Commercial Request Form (7 Cols on desktop) */}
          <div className="lg:col-span-7 h-full">
            <ContactForm />
          </div>

        </div>
      </section>
    </main>
  );
}
