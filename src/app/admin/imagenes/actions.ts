'use server';

import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export async function getImageList() {
  try {
    return await prisma.imageMetadata.findMany({
      include: {
        promptSuggestions: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  } catch (error) {
    console.error('Error fetching image list:', error);
    return [];
  }
}

export async function saveImageMetadata(data: {
  relativePath: string;
  currentDescription: string;
}) {
  if (!data.relativePath || data.relativePath.trim() === '') {
    throw new Error('La ruta relativa no puede estar vacía');
  }
  if (!data.currentDescription || data.currentDescription.trim() === '') {
    throw new Error('La descripción no puede estar vacía');
  }

  const relativePathClean = data.relativePath.trim();
  const currentDescriptionClean = data.currentDescription.trim();

  const image = await prisma.imageMetadata.upsert({
    where: { relativePath: relativePathClean },
    update: { currentDescription: currentDescriptionClean },
    create: {
      relativePath: relativePathClean,
      currentDescription: currentDescriptionClean,
    },
  });

  revalidatePath('/admin/imagenes');
  return image;
}

export async function addPromptSuggestion(data: {
  imageId: number;
  promptText: string;
  modelUsed?: string;
  aspectRatio?: string;
}) {
  if (!data.promptText || data.promptText.trim() === '') {
    throw new Error('El prompt no puede estar vacío');
  }

  const suggestion = await prisma.aiPromptSuggestion.create({
    data: {
      promptText: data.promptText.trim(),
      modelUsed: data.modelUsed?.trim() || null,
      aspectRatio: data.aspectRatio?.trim() || null,
      imageId: data.imageId,
    },
  });

  revalidatePath('/admin/imagenes');
  return suggestion;
}

export async function deleteImageMetadata(id: number) {
  const deleted = await prisma.imageMetadata.delete({
    where: { id },
  });
  revalidatePath('/admin/imagenes');
  return deleted;
}

export async function getPageFolders() {
  try {
    const imgPath = path.join(process.cwd(), 'public', 'img');
    const entries = await fs.readdir(imgPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
  } catch (error) {
    console.error('Error reading page folders:', error);
    return [];
  }
}

export async function checkFileExists(folder: string, filename: string) {
  try {
    if (!folder || !filename) return false;
    const filePath = path.join(process.cwd(), 'public', 'img', folder, filename);
    return existsSync(filePath);
  } catch (error) {
    console.error('Error checking file existence:', error);
    return false;
  }
}

export async function createPageFolder(folderName: string) {
  if (!folderName || folderName.trim() === '') {
    throw new Error('El nombre de la carpeta no puede estar vacío');
  }
  const cleanName = folderName.trim().replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
  if (!cleanName) {
    throw new Error('Nombre de carpeta no válido');
  }

  const dirPath = path.join(process.cwd(), 'public', 'img', cleanName);
  await fs.mkdir(dirPath, { recursive: true });
  revalidatePath('/admin/imagenes');
  return cleanName;
}

export async function getFilesInFolder(folder: string) {
  try {
    if (!folder) return [];
    const folderPath = path.join(process.cwd(), 'public', 'img', folder);
    
    // Check if path exists and is a directory
    if (!existsSync(folderPath)) return [];
    
    const entries = await fs.readdir(folderPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isFile())
      .map(entry => entry.name);
  } catch (error) {
    console.error('Error reading files in folder:', error);
    return [];
  }
}

