import React from 'react';
import { Metadata } from 'next';
import NetworksHero from '@/src/components/nosotros/nuestras-redes/NetworksHero';
import NetworksChannels from '@/src/components/nosotros/nuestras-redes/NetworksChannels';
import RecentPosts from '@/src/components/nosotros/nuestras-redes/RecentPosts';
import NetworksBenefits from '@/src/components/nosotros/nuestras-redes/NetworksBenefits';
import NewsletterSubscribe from '@/src/components/nosotros/nuestras-redes/NewsletterSubscribe';

export const metadata: Metadata = {
  title: 'Nuestras Redes y Comunidad | Envíos DosRuedas Mar del Plata',
  description: 'Conectate con la mayor comunidad logística y de mensajería urbana en Mar del Plata. Seguí nuestras novedades operativas de calle, beneficios y promociones.',
};

export default function NuestrasRedesPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-white relative overflow-hidden">
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue/20 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/5 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Community brand header hero banner */}
      <div className="relative z-10">
        <NetworksHero />
      </div>

      {/* Grid channels connection block */}
      <div className="relative z-10">
        <NetworksChannels />
      </div>

      {/* Social mockup posts grid visualizer */}
      <div className="relative z-10">
        <RecentPosts />
      </div>

      {/* Grid items representing followers benefits */}
      <div className="relative z-10">
        <NetworksBenefits />
      </div>

      {/* Secure Newsletter subscription box */}
      <div className="relative z-10">
        <NewsletterSubscribe />
      </div>
    </main>
  );
}

