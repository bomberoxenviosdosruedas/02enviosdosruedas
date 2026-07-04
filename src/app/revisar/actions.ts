'use server';

import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function saveFeedback(data: {
  page: string;
  componentPath: string;
  currentText: string;
  suggestedEdit: string;
}) {
  if (!data.suggestedEdit || data.suggestedEdit.trim() === '') {
    throw new Error('El comentario no puede estar vacío');
  }

  const feedback = await prisma.feedback.create({
    data: {
      page: data.page,
      componentPath: data.componentPath,
      currentText: data.currentText,
      suggestedEdit: data.suggestedEdit.trim(),
    },
  });

  revalidatePath('/revisar');
  return feedback;
}

export async function getFeedbackList() {
  try {
    return await prisma.feedback.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  } catch (error) {
    console.error('Error fetching feedback list:', error);
    return [];
  }
}
