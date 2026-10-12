import { NextResponse, type NextRequest } from 'next/server';
import { isValidBasicAuth, isValidAdminSessionCookie } from '@/lib/auth';

/**
 * Proxy perimetral de Next.js 16 (reemplazo oficial del middleware deprecado)
 * Ver: https://nextjs.org/docs/messages/middleware-to-proxy
 * 
 * Intercepta y restringe el acceso no autorizado a los paneles administrativos:
 * - /admin/:path*
 * - /revisar/:path*
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') || pathname.startsWith('/revisar')) {
    const authHeader = request.headers.get('authorization');
    const sessionCookie = request.cookies.get('admin_session')?.value;

    const isBasicValid = isValidBasicAuth(authHeader);
    const isCookieValid = isValidAdminSessionCookie(sessionCookie);

    if (!isBasicValid && !isCookieValid) {
      return new NextResponse('Acceso restringido: se requiere autenticación de administración.', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Envíos DosRuedas - Panel Privado", charset="UTF-8"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/revisar/:path*'],
};
