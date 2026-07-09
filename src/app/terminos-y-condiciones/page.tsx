import React from 'react';
import { Metadata } from 'next';
import TermsContent from './TermsContent';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Envíos DosRuedas Mar del Plata',
  description: 'Leé detenidamente las pautas operativas, obligaciones del usuario, tarifas, formas de pago y limitaciones de responsabilidad de Envíos DosRuedas.',
};

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen bg-[#001035] text-white relative overflow-hidden">
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-[#0636A5]/20 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-[#FFEC01]/5 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Interactive terms and conditions reader */}
      <div className="relative z-10 font-sans">
        <TermsContent />
      </div>

      {/* Unified social networking carousel loop */}
      <div className="relative z-10">
        <CarruselRedes />
      </div>
    </main>
  );
}

