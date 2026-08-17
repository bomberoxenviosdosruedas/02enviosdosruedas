import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/src/components/nosotros/sobre-nosotros/AboutHero';
import AboutAdvantages from '@/src/components/nosotros/sobre-nosotros/AboutAdvantages';
import AboutValues from '@/src/components/nosotros/sobre-nosotros/AboutValues';
import AboutTimeline from '@/src/components/nosotros/sobre-nosotros/AboutTimeline';
import AboutTeam from '@/src/components/nosotros/sobre-nosotros/AboutTeam';
import AboutMissionVision from '@/src/components/nosotros/sobre-nosotros/AboutMissionVision';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Sobre Nosotros & Historia | Envíos DosRuedas Mar del Plata',
  description: 'Conocé la historia, valores y equipo detrás de Envíos DosRuedas. Más de 15 años liderando la logística urbana, cadetería y última milla e-commerce en Mar del Plata.',
  alternates: {
    canonical: `${baseUrl}/nosotros/sobre-nosotros`,
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre Nosotros - Envíos DosRuedas',
  description: 'Historia, valores y equipo de Envíos DosRuedas en Mar del Plata. Más de 15 años de experiencia en logística urbana y última milla.',
  url: `${baseUrl}/nosotros/sobre-nosotros`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: 'Envíos DosRuedas',
    description: 'Empresa líder de mensajería y logística última milla en Mar del Plata.',
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
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 20,
      maxValue: 50,
    },
  },
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-brand-white-50 text-brand-ink relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[15%] left-[-10%] w-[40vw] h-[40vw] bg-brand-blue-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[45vw] h-[45vw] bg-brand-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Header & Identidad */}
      <div className="relative z-10">
        <AboutHero />
      </div>

      {/* Ventajas Territoriales */}
      <div className="relative z-10">
        <AboutAdvantages />
      </div>

      {/* Valores Operativos */}
      <div className="relative z-10">
        <AboutValues />
      </div>

      {/* Línea de Tiempo & Evolución Histórica */}
      <div className="relative z-10">
        <AboutTimeline />
      </div>

      {/* Equipo & Fuerza Operativa */}
      <div className="relative z-10">
        <AboutTeam />
      </div>

      {/* Misión, Visión & Cierre */}
      <div className="relative z-10 font-sans">
        <AboutMissionVision />
      </div>
    </main>
  );
}
