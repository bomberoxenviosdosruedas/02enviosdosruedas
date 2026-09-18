import { proxy } from './proxy';
export { config } from './proxy';

/**
 * Next.js Middleware entrypoint para Envíos DosRuedas (BL-01).
 * Delega en proxy.ts para redirección 308 de dominios duplicados de Vercel y X-Robots-Tag.
 */
export const middleware = proxy;
