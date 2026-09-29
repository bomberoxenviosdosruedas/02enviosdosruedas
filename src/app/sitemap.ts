import type { MetadataRoute } from 'next';

/**
 * Dominio canónico oficial de producción unificado.
 */
const baseUrl = 'https://www.enviosdosruedas.com';

/**
 * `lastmod` de la guía de Mercado Envíos Flex.
 *
 * ÚNICA fecha de este sitemap con respaldo real: mirror de `dateModified` en el
 * JSON-LD `Article` de `src/app/guias/envios-flex-mar-del-plata/page.tsx`.
 * Si cambiás esa guía, actualizá las dos o se desincronizan.
 */
const GUIA_FLEX_LAST_MODIFIED = '2026-09-18T10:00:00-03:00';

/**
 * Mapa de rutas del sitio.
 *
 * Sobre `lastmod`: es el ÚNICO campo que Google usa de un sitemap (`priority` y
 * `changeFrequency` los ignora explícitamente). Antes este archivo ponía
 * `2026-09-21` en las 20 URLs: una fecha plana e idéntica no describe nada y
 * hace que el rastreador aprenda a desconfiar del campo, que es peor que
 * omitirlo. Por eso solo va donde hay fecha real.
 *
 * CONTRATO DE MANTENIMIENTO: cuando edites el contenido de una página de forma
 * significativa, agregale su `lastModified` real en la entrada correspondiente.
 * Sin dato real, la entrada se deja sin fecha — no inventar.
 */
const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
  lastModified?: string;
}> = [
  // 1. Portada & Páginas Transaccionales Clave (Prioridad 1.0 - 0.9)
  { path: '', changeFrequency: 'daily', priority: 1.0 },
  { path: '/servicios/envios-express', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/servicios/envios-lowcost', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/servicios/enviosflex', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/servicios/deposito-fulfillment', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/servicios/plan-emprendedores', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/cotizar', changeFrequency: 'weekly', priority: 0.9 },
  // Fichas de servicio. Ya NO son cotizadores: no tienen formulario propio y su
  // CTA va a /cotizar. Conservan su URL indexada (no queremos perder rankings)
  // y la priority baja porque el objetivo de búsqueda es el cotizador unificado.
  { path: '/cotizar/express', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/cotizar/lowcost', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/servicios/envios-contrareembolso', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/servicios/empresas-cuenta-corriente', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/cobertura', changeFrequency: 'weekly', priority: 0.9 },
  {
    path: '/guias/envios-flex-mar-del-plata',
    changeFrequency: 'weekly',
    priority: 0.85,
    lastModified: GUIA_FLEX_LAST_MODIFIED,
  },
  { path: '/contacto', changeFrequency: 'weekly', priority: 0.85 },

  // 2. Páginas Institucionales, FAQ & Confianza (Prioridad 0.8 - 0.75)
  { path: '/nosotros/sobre-nosotros', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/nosotros/preguntas-frecuentes', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/nosotros/nuestras-redes', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/nosotros', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/servicios', changeFrequency: 'weekly', priority: 0.9 },

  // 3. Páginas Legales y Normativas (Prioridad 0.3)
  { path: '/politica-de-privacidad', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terminos-y-condiciones', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${baseUrl}${path}`,
    // `Date | string`: sólo se incluye cuando hay fecha respaldada.
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
    changeFrequency,
    priority,
  }));
}
