import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware para Envíos DosRuedas (BL-01)
 * 1. Bloqueo / Redirección 308 del host duplicado de Vercel (02enviosdosruedas.vercel.app -> www.enviosdosruedas.com)
 * 2. Inyección de header X-Robots-Tag: noindex en deployments de vista previa / vercel.app
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Detección de despliegue en Vercel (evita canibalización de SEO por contenido duplicado)
  if (host.includes('vercel.app')) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = 'www.enviosdosruedas.com';
    url.port = '';

    const response = NextResponse.redirect(url, 308);
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Aplica a todas las rutas excepto recursos estáticos e imágenes
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
