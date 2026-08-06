import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Dominio oficial unificado con www para consistencia SEO
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.enviosdosruedas.com'

  return {
    rules: [
      {
        userAgent: '*', // Aplica la regla estricta de manera global para todos los buscadores
        allow: '/',
        disallow: [
          '/admin',      // Bloquea la landing de login de administración
          '/admin/',     // Bloquea cualquier subcarpeta interna del panel
          '/ordenes',    // Bloquea el listado dinámico de paquetes
          '/ordenes/',   // Bloquea datos privados de clientes/entregas
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
