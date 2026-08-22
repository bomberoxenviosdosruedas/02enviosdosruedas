import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.enviosdosruedas.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/revisar'],
      },
      {
        userAgent: ['Googlebot', 'Googlebot-Smartphone', 'AdsBot-Google'],
        allow: '/',
        disallow: ['/api/', '/admin/', '/revisar'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
        disallow: ['/api/', '/admin/', '/revisar'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
