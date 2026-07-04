import React from 'react';
import type { Metadata } from 'next';
import { getFeedbackList } from './actions';
import RevisarClient from './RevisarClient';

export const metadata: Metadata = {
  title: 'Panel de Revisión de Contenidos | Envíos DosRuedas',
  description: 'Panel exclusivo para que el dueño de la empresa revise, proponga modificaciones de textos, imágenes y guarde los ajustes en tiempo real.',
};

export default async function RevisarPage() {
  const initialFeedbackList = await getFeedbackList();

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <RevisarClient initialFeedbackList={initialFeedbackList} />
    </main>
  );
}
