import React from 'react';
import { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';
import CarruselRedes from '@/src/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Envíos DosRuedas Mar del Plata',
  description: 'Conocé cómo protegemos, procesamos y resguardamos tu información personal y los datos logísticos de tus despachos en Envíos DosRuedas.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-white relative overflow-hidden">
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue/20 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/5 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Interactive privacy policy reader */}
      <div className="relative z-10 font-sans">
        <PrivacyContent />
      </div>

      {/* Unified social networking carousel loop */}
      <div className="relative z-10">
        <CarruselRedes />
      </div>
    </main>
  );
}

