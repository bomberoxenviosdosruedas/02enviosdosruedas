import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Dominio canónico de producción unificado (con https://www.)
  const baseUrl = 'https://www.enviosdosruedas.com';

  // Fecha de referencia para contenido operativo 2026
  const currentDate = new Date('2026-08-18T00:00:00.000Z');

  // 1. Portada & Páginas Transaccionales Clave (Máxima prioridad de indexación)
  const primaryRoutes = [
    {
      path: '',
      changeFrequency: 'daily' as const,
      priority: 1.0,
      lastModified: currentDate,
    },
    {
      path: '/servicios/envios-express',
      changeFrequency: 'weekly' as const,
      priority: 0.95,
      lastModified: currentDate,
    },
    {
      path: '/servicios/envios-lowcost',
      changeFrequency: 'weekly' as const,
      priority: 0.95,
      lastModified: currentDate,
    },
    {
      path: '/servicios/enviosflex',
      changeFrequency: 'weekly' as const,
      priority: 0.95,
      lastModified: currentDate,
    },
    {
      path: '/servicios/plan-emprendedores',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      lastModified: currentDate,
    },
    {
      path: '/cotizar/express',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      lastModified: currentDate,
    },
    {
      path: '/cotizar/lowcost',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      lastModified: currentDate,
    },
    {
      path: '/contacto',
      changeFrequency: 'weekly' as const,
      priority: 0.85,
      lastModified: currentDate,
    },
  ];

  // 2. Páginas de Marca, Confianza & Soporte
  const secondaryRoutes = [
    {
      path: '/nosotros/sobre-nosotros',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: currentDate,
    },
    {
      path: '/nosotros/preguntas-frecuentes',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      lastModified: currentDate,
    },
    {
      path: '/nosotros/nuestras-redes',
      changeFrequency: 'weekly' as const,
      priority: 0.75,
      lastModified: currentDate,
    },
  ];

  // 3. Páginas Legales y de Cumplimiento Normativo
  const legalRoutes = [
    {
      path: '/politica-de-privacidad',
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      lastModified: currentDate,
    },
    {
      path: '/terminos-y-condiciones',
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      lastModified: currentDate,
    },
  ];

  const allEntries = [...primaryRoutes, ...secondaryRoutes, ...legalRoutes];

  return allEntries.map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: item.lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
