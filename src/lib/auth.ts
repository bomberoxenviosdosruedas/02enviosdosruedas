import crypto from 'node:crypto';
import { headers, cookies } from 'next/headers';

/**
 * Parámetros predeterminados seguros para entornos de desarrollo y pruebas.
 * En producción (NODE_ENV === 'production') es OBLIGATORIO configurar las variables
 * ADMIN_USER, ADMIN_PASSWORD y ADMIN_SESSION_SECRET; si faltan, el sistema opera
 * en modo fail-closed rechazando cualquier autenticación por defecto.
 */
const DEV_DEFAULT_ADMIN_USER = 'admin';
const DEV_DEFAULT_ADMIN_PASS = 'dosruedas2026!';
const DEV_DEFAULT_SESSION_TOKEN = 'dosruedas-admin-auth-token-2026';

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

    const isProduction = process.env.NODE_ENV === 'production';
    const expectedUser = process.env.ADMIN_USER || (isProduction ? undefined : DEV_DEFAULT_ADMIN_USER);
    const expectedPass = process.env.ADMIN_PASSWORD || (isProduction ? undefined : DEV_DEFAULT_ADMIN_PASS);

    if (!expectedUser || !expectedPass) {
      console.error('[auth] ADMIN_USER o ADMIN_PASSWORD no configuradas en entorno de producción.');
      return false;
    }

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

  const isProduction = process.env.NODE_ENV === 'production';
  const expectedToken = process.env.ADMIN_SESSION_SECRET || (isProduction ? undefined : DEV_DEFAULT_SESSION_TOKEN);

  if (!expectedToken) {
    console.error('[auth] ADMIN_SESSION_SECRET no configurada en entorno de producción.');
    return false;
  }

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
