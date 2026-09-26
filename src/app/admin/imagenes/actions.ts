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

export async function suggestPromptBase(data: {
  description?: string;
  relativePath?: string;
  modelUsed: string;
  aspectRatio: string;
}) {
  const { description, relativePath, modelUsed, aspectRatio } = data;

  if ((!description || description.trim() === '') && (!relativePath || relativePath.trim() === '')) {
    throw new Error('Debe proporcionar una descripción o una imagen válida para generar un prompt.');
  }

  const { ai } = await import('@/src/lib/genkit');
  const { googleAI } = await import('@genkit-ai/google-genai');

  const systemInstruction = `
You are the Principal AI Prompt Engineer for "Envíos DosRuedas", a premium logistics and delivery company based in Mar del Plata, Argentina (operational year 2026).
Your job is to generate a highly detailed and structured image generation prompt (in English, as image generation models perform best in English) based on either a basic Spanish description or by analyzing an existing image asset.

You must follow the Marca v2 rules (Ajuste Max #0950F6 & Ley de Tres Colores):
- Aesthetic: Modern 3D isometric miniature diorama or Corporate Bento Grid.
- Brand Colors: Vibrant Blue #0950F6 is the absolute darkest blue permitted. Signal Yellow #FFEC01 as single accent (max 15%), pale blue #E6EEFE, and pure white #FFFFFF. Absolutely NO navy, NO black, NO grey, NO dark navy hexes (#0636A5, #00277C).
- Context: Localized in Mar del Plata (such as Chauvín, Friuli 1972, Güemes, Puerto, Constitución, or coastal roads).
- Fleet & Figures: Faceless vinyl-toy 3D figures, blue jackets, scooters with yellow top-boxes. Never mix photos and 3D.
- Typography: Zero text, numbers, or logos baked inside the render.

Use the official non-reference image structure:
[Subject and detailed description] + [Artistic/visual style] + [Composition/Camera angle] + [Lighting and atmosphere] + [Specific color palette containing Vibrant Blue #0950F6, Signal Yellow #FFEC01, and White #FFFFFF]

Output ONLY the final prompt text. Do not include any intro, outro, markdown block formatting, or explanation.
`;

  try {
    let promptParts: any[] = [];

    if (!description || description.trim() === '') {
      // Analyze from image
      const safeRelativePath = path.normalize(relativePath!).replace(/^(\.\.(\/|\\|$))+/, '');
      const filePath = path.join(process.cwd(), 'public', safeRelativePath);

      const publicDir = path.join(process.cwd(), 'public');
      if (!filePath.startsWith(publicDir)) {
        throw new Error('Ruta de imagen inválida o acceso denegado.');
      }

      if (!existsSync(filePath)) {
        throw new Error('La imagen especificada no existe en el sistema.');
      }

      const fileData = await fs.readFile(filePath);
      const mimeType = filePath.endsWith('.png') ? 'image/png' :
        filePath.endsWith('.jpg') || filePath.endsWith('.jpeg') ? 'image/jpeg' :
          'image/webp';

      promptParts = [
        { media: { url: `data:${mimeType};base64,${fileData.toString('base64')}` } },
        { text: `Analyze the provided image and generate a structured image prompt to recreate its style and content. Target Model: ${modelUsed}, Aspect Ratio: ${aspectRatio}` }
      ];
    } else {
      // Analyze from text
      promptParts = [
        { text: `Generate an image prompt for the following description: "${description}". Target Model: ${modelUsed}, Aspect Ratio: ${aspectRatio}` }
      ];
    }

    const response = await ai.generate({
      model: googleAI.model('gemini-2.5-flash'),
      prompt: promptParts,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || '';
  } catch (error: any) {
    console.error('Error in suggestPromptBase flow:', error);
    throw new Error('No se pudo generar la sugerencia de prompt.');
  }
}

export async function improvePrompt(data: {
  currentPromptText: string;
  modelUsed: string;
  aspectRatio: string;
}) {
  const { currentPromptText, modelUsed, aspectRatio } = data;
  if (!currentPromptText || currentPromptText.trim() === '') {
    throw new Error('El prompt actual no puede estar vacío');
  }

  const { ai } = await import('@/src/lib/genkit');
  const { googleAI } = await import('@genkit-ai/google-genai');

  const systemInstruction = `
You are the Principal AI Prompt Engineer for "Envíos DosRuedas", a premium logistics and delivery company based in Mar del Plata, Argentina (2026).
Your job is to polish, expand, and optimize an existing image generation prompt (written in Spanish or English) into a highly structured, professional English prompt optimized for AI image models.

You must structure the output strictly using the official format:
[Subject and detailed description] + [Artistic/visual style] + [Composition/Camera angle] + [Lighting and atmosphere] + [Specific color palette containing Vibrant Blue #0950F6, Signal Yellow #FFEC01, and White #FFFFFF]

Ensure:
- Brand Colors (Marca v2): Explicitly mention Vibrant Blue (#0950F6) as the darkest tone permitted, Signal Yellow (#FFEC01) as single accent (max 15%), pale blue (#E6EEFE), and clean white (#FFFFFF). Strictly NO navy, NO black, NO dark hexes (#0636A5, #00277C).
- Aesthetic: Modern 3D isometric miniature diorama render with soft matte clay and satin plastic materials.
- Context: Integrate local Mar del Plata atmosphere or landscape if applicable.
- Rules: Zero text, numbers, or third-party logos inside the generated image.

Output ONLY the optimized prompt text. Do not include any intro, outro, markdown block formatting, or explanation.
`;

  try {
    const response = await ai.generate({
      model: googleAI.model('gemini-2.5-flash'),
      prompt: `Improve the following image prompt: "${currentPromptText}". Target Model: ${modelUsed}, Aspect Ratio: ${aspectRatio}`,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || '';
  } catch (error) {
    console.error('Error in improvePrompt flow:', error);
    throw new Error('No se pudo mejorar el prompt.');
  }
}

