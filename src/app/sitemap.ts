import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Dominio canónico oficial de producción unificado
  const baseUrl = 'https://www.enviosdosruedas.com';

  // Fecha de referencia operativa para indexación
  const lastModified = new Date();

  // 1. Portada & Páginas Transaccionales Clave (Prioridad 1.0 - 0.9)
  const commercialRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios/envios-express`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/servicios/envios-lowcost`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/servicios/enviosflex`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/servicios/plan-emprendedores`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cotizar/express`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cotizar/lowcost`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // 2. Páginas Institucionales, FAQ & Confianza (Prioridad 0.8 - 0.75)
  const institutionalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/nosotros/sobre-nosotros`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros/preguntas-frecuentes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/nosotros/nuestras-redes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ];

  // 3. Páginas Legales y Normativas (Prioridad 0.3)
  const legalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...commercialRoutes, ...institutionalRoutes, ...legalRoutes];
}
