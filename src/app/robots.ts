import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Dominio oficial unificado CON www para consistencia SEO
  const baseUrl = 'https://www.enviosdosruedas.com'

  return {
    rules: [
      {
        userAgent: '*', // Aplica la regla estricta de manera global para todos los buscadores
        allow: '/',
        disallow: [
          '/admin',      // Bloquea la landing de login de administración
          '/admin/',     // Bloquea cualquier subcarpeta interna del panel
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
