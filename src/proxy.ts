import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware para Envíos DosRuedas (BL-01 & BL-42)
 * 1. Bloqueo / Redirección 308 del host duplicado de Vercel (02enviosdosruedas.vercel.app -> www.enviosdosruedas.com)
 * 2. Inyección estricta de header X-Robots-Tag: noindex, nofollow en cualquier preview de Vercel o vercel.app
 */
export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const isVercelPreview =
    process.env.VERCEL_ENV === 'preview' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
    host.includes('vercel.app');

  // Si es el dominio de producción legacy o subdominio vercel.app, redirigir al canónico www.enviosdosruedas.com
  if (host.includes('vercel.app')) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = 'www.enviosdosruedas.com';
    url.port = '';

    const response = NextResponse.redirect(url, 308);
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  const response = NextResponse.next();

  // En cualquier entorno de preview, inyectar noindex
  if (isVercelPreview) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Aplica a todas las rutas excepto recursos estáticos e imágenes
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
