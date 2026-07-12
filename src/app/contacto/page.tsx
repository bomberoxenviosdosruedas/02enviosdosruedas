import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/src/components/contacto/ContactHero';
import ContactForm from '@/src/components/contacto/ContactForm';
import ContactInfo from '@/src/components/contacto/ContactInfo';

export const metadata: Metadata = {
  title: 'Contacto Comercial | Envíos DosRuedas Mar del Plata',
  description: '¿Listo para escalar la logística de tu e-commerce? Hablá con un asesor comercial de Envíos DosRuedas y diseñemos un esquema tarifario a tu medida.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      {/* Ambient floating glow-orbs */}
      <div className="absolute top-[25%] left-[-15%] w-[45vw] h-[45vw] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[50%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/3 rounded-full blur-[100px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Upper Hero Section */}
      <div className="relative z-10">
        <ContactHero />
      </div>

      {/* Main Form and Info Layout */}
      <section id="contacto-main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Contact Form (5 Cols in Desk) */}
          <div className="lg:col-span-5 h-full">
            <ContactForm />
          </div>

          {/* Column 2: Details & Coverage (7 Cols in Desk) */}
          <div className="lg:col-span-7 h-full">
            <ContactInfo />
          </div>

        </div>
      </section>
    </main>
  );
}

