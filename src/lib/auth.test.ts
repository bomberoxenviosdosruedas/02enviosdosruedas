import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isValidBasicAuth, isValidAdminSessionCookie } from './auth';

describe('Módulo de autenticación administrativa (src/lib/auth.ts)', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe('isValidBasicAuth', () => {
    it('retorna true cuando las credenciales coinciden con las esperadas', () => {
      // admin:dosruedas2026! en base64 es YWRtaW46ZG9zcnVlZGFzMjAyNiE=
      const validHeader = 'Basic ' + Buffer.from('admin:dosruedas2026!').toString('base64');
      expect(isValidBasicAuth(validHeader)).toBe(true);
    });

    it('retorna false si la contraseña es incorrecta', () => {
      const invalidHeader = 'Basic ' + Buffer.from('admin:password_incorrecto').toString('base64');
      expect(isValidBasicAuth(invalidHeader)).toBe(false);
    });

    it('retorna false si el usuario es incorrecto', () => {
      const invalidHeader = 'Basic ' + Buffer.from('otro_usuario:dosruedas2026!').toString('base64');
      expect(isValidBasicAuth(invalidHeader)).toBe(false);
    });

    it('retorna false si el encabezado es nulo, vacío o no empieza con "Basic "', () => {
      expect(isValidBasicAuth(null)).toBe(false);
      expect(isValidBasicAuth('')).toBe(false);
      expect(isValidBasicAuth('Bearer token123')).toBe(false);
    });

    it('retorna false si el valor base64 no contiene el separador ":"', () => {
      const badFormat = 'Basic ' + Buffer.from('soloTextoSinDosPuntos').toString('base64');
      expect(isValidBasicAuth(badFormat)).toBe(false);
    });
  });

  describe('isValidAdminSessionCookie', () => {
    it('retorna true con el token de sesión predeterminado', () => {
      expect(isValidAdminSessionCookie('dosruedas-admin-auth-token-2026')).toBe(true);
    });

    it('retorna false con un token inválido', () => {
      expect(isValidAdminSessionCookie('token-falso-xyz')).toBe(false);
    });

    it('retorna false con valor nulo o indefinido', () => {
      expect(isValidAdminSessionCookie(null)).toBe(false);
      expect(isValidAdminSessionCookie(undefined)).toBe(false);
    });
  });

  describe('Comportamiento Fail-Closed en Producción', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      process.env = { ...originalEnv, NODE_ENV: 'production' };
      delete process.env.ADMIN_USER;
      delete process.env.ADMIN_PASSWORD;
      delete process.env.ADMIN_SESSION_SECRET;
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    it('rechaza las credenciales dev predeterminadas si no hay variables en producción', () => {
      const devHeader = 'Basic ' + Buffer.from('admin:dosruedas2026!').toString('base64');
      expect(isValidBasicAuth(devHeader)).toBe(false);
    });

    it('rechaza el token dev predeterminado si no hay secreto en producción', () => {
      expect(isValidAdminSessionCookie('dosruedas-admin-auth-token-2026')).toBe(false);
    });

    it('valida exitosamente cuando las variables de producción están definidas', () => {
      process.env.ADMIN_USER = 'superadmin';
      process.env.ADMIN_PASSWORD = 'CustomProdPassword2026!';
      process.env.ADMIN_SESSION_SECRET = 'custom-prod-secret-token';

      const validProdHeader = 'Basic ' + Buffer.from('superadmin:CustomProdPassword2026!').toString('base64');
      expect(isValidBasicAuth(validProdHeader)).toBe(true);
      expect(isValidAdminSessionCookie('custom-prod-secret-token')).toBe(true);
    });
  });
});
