import React from 'react';
import type { Metadata } from 'next';
import { getFeedbackList } from './actions';
import RevisarClient from './RevisarClient';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Panel de Revisión de Contenidos | Envíos DosRuedas',
  description: 'Panel exclusivo para que el dueño de la empresa revise, proponga modificaciones de textos, imágenes y guarde los ajustes en tiempo real.',
  alternates: {
    canonical: `${baseUrl}/revisar`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RevisarPage() {
  const initialFeedbackList = await getFeedbackList();

  return (
    <main className="min-h-screen bg-brand-dark text-white pt-28 pb-20 relative overflow-hidden">
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue/20 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/5 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      <div className="relative z-10 font-sans">
        <RevisarClient initialFeedbackList={initialFeedbackList} />
      </div>
    </main>
  );
}

