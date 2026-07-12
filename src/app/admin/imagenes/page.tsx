import React from 'react';
import type { Metadata } from 'next';
import { getImageList, getPageFolders } from './actions';
import AdminImagenesClient from './AdminImagenesClient';

export const metadata: Metadata = {
  title: 'Panel de Gestión de Imágenes | Envíos DosRuedas',
  description: 'Panel de administración para dar seguimiento a los metadatos de las imágenes del sitio y almacenar sugerencias de prompts para IA.',
};

export default async function AdminImagenesPage() {
  const [images, folders] = await Promise.all([
    getImageList(),
    getPageFolders(),
  ]);

  return (
    <main className="min-h-screen bg-brand-white-50 pt-32 pb-20">
      <AdminImagenesClient initialImageList={images} initialFolders={folders} />
    </main>
  );
}
