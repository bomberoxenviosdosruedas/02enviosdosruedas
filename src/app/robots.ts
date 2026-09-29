import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.enviosdosruedas.com';

/**
 * Rutas que nunca deben indexarse ni rastrearse por crawler.
 *
 * `/admin` y `/revisar` son paneles internos del dueño; `/api` es superficie
 * de consumo externo. Se mantiene el valor exacto del anterior
 * `public/robots.txt` (incluido `/revisar` sin barra final) para no abrir por
 * accidente el rastreo de los paneles.
 */
const DISALLOW = ['/api/', '/admin/', '/revisar'];

/**
 * Rastreadores que respetan las directivas de crawl del sitio: los de búsqueda
 * (Googlebot, Bingbot, Applebot) más los de IA (GPTBot, ClaudeBot,
 * PerplexityBot). Ven todo el árbol salvo `DISALLOW`.
 */
const RESTRICTED_BOTS = [
  'Googlebot',
  'Googlebot-Smartphone',
  'Bingbot',
  'Applebot',
  'GPTBot',
  'ClaudeBot',
  'PerplexityBot',
];

/**
 * Rastreadores de uso comercial o de derivación de contenido. El antiguo
 * `public/robots.txt` les daba `Allow: /` sin ninguna restricción; se mantiene
 * igual a propósito.
 */
const UNRESTRICTED_BOTS = ['AdsBot-Google', 'Google-Extended'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: RESTRICTED_BOTS,
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: UNRESTRICTED_BOTS,
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
