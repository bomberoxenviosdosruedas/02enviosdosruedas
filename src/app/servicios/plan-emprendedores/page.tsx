import React from 'react';
import { Metadata } from 'next';
import EmprendedoresHero from '@/src/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/src/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/src/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/src/components/servicios/emprendedores/EmprendedoresPricing';

export const metadata: Metadata = {
  title: 'Plan Emprendedores y Fulfillment 3PL | Envíos DosRuedas Mar del Plata',
  description: 'Logística 3PL, paquetería e-commerce y almacenamiento en Friuli 1972 Mar del Plata. Almacená tu stock, picking por código QR y entregas Same-Day para tu tienda online.',
  keywords: [
    'plan emprendedores envíos dosruedas',
    'fulfillment mar del plata',
    'almacenamiento e-commerce friuli 1972',
    'logística 3PL mar del plata',
    'paquetería same day mar del plata',
    'cadetería emprendedores mar del plata',
  ],
  openGraph: {
    title: 'Plan Emprendedores y Fulfillment 3PL | Envíos DosRuedas MDQ',
    description: 'Almacená tu stock en nuestro Hub de Friuli 1972. Al vender, empaquetamos y entregamos en el día en Mar del Plata.',
    url: 'https://enviosdosruedas.com.ar/servicios/plan-emprendedores',
    type: 'website',
  },
};

export default function PlanEmprendedoresPage() {
  return (
    <main className="min-h-dvh bg-white">
      <EmprendedoresHero />
      <EmprendedoresFeatures />
      <EmprendedoresBenefits />
      <EmprendedoresPricing />
    </main>
  );
}
