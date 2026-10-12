import crypto from 'node:crypto';
import { headers, cookies } from 'next/headers';

/**
 * Parámetros predeterminados seguros para autenticación administrativa.
 * En producción se sobreescriben mediante variables de entorno seguras en Vercel.
 */
const DEFAULT_ADMIN_USER = 'admin';
const DEFAULT_ADMIN_PASS = 'dosruedas2026!';
const DEFAULT_SESSION_TOKEN = 'dosruedas-admin-auth-token-2026';

function safeCompare(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a);
    const bufB = Buffer.from(b);
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

/**
 * Valida un encabezado HTTP Authorization de tipo Basic.
 */
export function isValidBasicAuth(authHeader: string | null | undefined): boolean {
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }

  try {
    const base64Credentials = authHeader.slice(6).trim();
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const separatorIndex = credentials.indexOf(':');
    if (separatorIndex === -1) return false;

    const user = credentials.substring(0, separatorIndex);
    const pass = credentials.substring(separatorIndex + 1);

    const expectedUser = process.env.ADMIN_USER || DEFAULT_ADMIN_USER;
    const expectedPass = process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASS;

    const isUserValid = safeCompare(user, expectedUser);
    const isPassValid = safeCompare(pass, expectedPass);

    return isUserValid && isPassValid;
  } catch {
    return false;
  }
}

/**
 * Valida el token o cookie de sesión administrativa.
 */
export function isValidAdminSessionCookie(cookieValue: string | null | undefined): boolean {
  if (!cookieValue) return false;
  const expectedToken = process.env.ADMIN_SESSION_SECRET || DEFAULT_SESSION_TOKEN;
  return safeCompare(cookieValue, expectedToken);
}

/**
 * Guardia de seguridad invocable dentro de Server Actions.
 * Lanza una excepción si la solicitud no presenta credenciales administrativas válidas.
 */
export async function assertAdminAuth(): Promise<void> {
  const headerList = await headers();
  const authHeader = headerList.get('authorization');

  if (isValidBasicAuth(authHeader)) {
    return;
  }

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('admin_session')?.value;

  if (isValidAdminSessionCookie(sessionCookie)) {
    return;
  }

  throw new Error('No autorizado: se requieren credenciales válidas de administración.');
}
