import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Dominio canónico oficial de producción unificado
  const baseUrl = 'https://www.enviosdosruedas.com';

  // Fecha de referencia operativa para indexación - usando fechas fijas por página
  // En producción idealmente vendrían de CMS/DB con updatedAt real
  const lastModified = new Date('2026-09-21');

  // 1. Portada & Páginas Transaccionales Clave (Prioridad 1.0 - 0.9)
  const commercialRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios/envios-express`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/servicios/envios-lowcost`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/servicios/enviosflex`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/servicios/deposito-fulfillment`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cotizar/express`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cotizar/lowcost`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/envios-contrareembolso`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/empresas-cuenta-corriente`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cobertura`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guias/envios-flex-mar-del-plata`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // 2. Páginas Institucionales, FAQ & Confianza (Prioridad 0.8 - 0.75)
  const institutionalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/nosotros/sobre-nosotros`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros/preguntas-frecuentes`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/nosotros/nuestras-redes`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 3. Páginas Legales y Normativas (Prioridad 0.3)
  const legalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified: new Date('2026-09-21'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...commercialRoutes, ...institutionalRoutes, ...legalRoutes];
}
