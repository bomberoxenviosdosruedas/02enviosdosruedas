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
    <main className="min-h-screen bg-slate-50">
      {/* Community brand header hero banner */}
      <NetworksHero />

      {/* Grid channels connection block */}
      <NetworksChannels />

      {/* Social mockup posts grid visualizer */}
      <RecentPosts />

      {/* Grid items representing followers benefits */}
      <NetworksBenefits />

      {/* Secure Newsletter subscription box */}
      <NewsletterSubscribe />
    </main>
  );
}
