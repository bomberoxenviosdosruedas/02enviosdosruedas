import React from 'react';
import { Metadata } from 'next';
import EmprendedoresHero from '@/src/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/src/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/src/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/src/components/servicios/emprendedores/EmprendedoresPricing';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Logística 3PL y Plan Emprendedores | Envíos DosRuedas Mar del Plata',
  description: 'Solución integral de almacenamiento, picking, packing y fulfillment para PyMEs and e-commerce en Mar del Plata. Alquilá espacio en nuestro depósito 3PL propio.',
};

export default function PlanEmprendedoresPage() {
  return (
    <main className="min-h-screen bg-[#001035] text-white relative overflow-hidden">
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-[#0636A5]/20 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-[#FFEC01]/5 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Hero Header block */}
      <div className="relative z-10">
        <EmprendedoresHero />
      </div>

      {/* Corporate 3PL logistics features */}
      <div className="relative z-10 font-sans">
        <EmprendedoresFeatures />
      </div>

      {/* Strategic business benefits grid */}
      <div className="relative z-10 font-sans">
        <EmprendedoresBenefits />
      </div>

      {/* Premium custom e-commerce plans and 3PL warehousing prices */}
      <div className="relative z-10">
        <EmprendedoresPricing />
      </div>

      {/* Unified social network media slider loop */}
      <div className="relative z-10">
        <CarruselRedes />
      </div>
    </main>
  );
}

