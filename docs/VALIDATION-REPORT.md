# 📋 Reporte de Validación SEO: Sitemap & Crawlability

**Proyecto:** Envíos DosRuedas (Mar del Plata, 2026)  
**Dominio:** `https://www.enviosdosruedas.com`  
**Generador:** Next.js 16 Metadata API (`src/app/sitemap.ts` & `src/app/robots.ts`)

---

## 🔍 Resumen Ejecutivo

| Métrica / Parámetro | Estado | Detalle |
|---|---|---|
| **Formato XML** | ✅ Válido | Generado dinámicamente según especificación Sitemaps.org 0.9 |
| **Límite de URLs por archivo** | ✅ Cumple | 14 URLs (Límite: ≤ 50.000 URLs / ≤ 50MB) |
| **Protocolo & Consistencia** | ✅ Cumple | 100% URLs HTTPS con prefijo `www.enviosdosruedas.com` |
| **Referencia en Robots.txt** | ✅ Cumple | Declarado en `robots.ts` apuntando a `/sitemap.xml` |
| **Protección de Rutas Privadas** | ✅ Cumple | Rutas `/admin*` y `/ordenes*` bloqueadas en robots y excluidas del sitemap |
| **Formato `<lastmod>`** | ✅ Válido | W3C Datetime (`new Date()`) |
| **URLs Canónicas 200 OK** | ✅ Cumple | Todas las rutas mapeadas corresponden a páginas públicas activas |

---

## ⚠️ Hallazgos y Buenas Prácticas

### 1. Parámetros `<priority>` y `<changefreq>` (Info / Bajo Impacto)
- **Diagnóstico:** `src/app/sitemap.ts` asigna `priority` y `changeFrequency`.
- **Impacto:** Googlebot ignora formalmente estas etiquetas (usa señales de contenido y rastreo interno), aunque motores como Bing las utilizan como sugerencias de baja jerarquía.
- **Recomendación:** Mantener la configuración actual en Next.js ya que es compatible con el estándar.

### 2. Sincronización Automática de Rutas
- **Diagnóstico:** Cada nueva página pública añadida al App Router debe registrarse en el array de `publicRoutes` o `legalRoutes` dentro de [sitemap.ts](file:///C:/Users/prest/proyectos/00enviosdosruedas/src/app/sitemap.ts).
- **Recomendación:** En caso de agregar landing pages por barrios/zonas (ej. `/zonas/guemes`), asegurarse de no crear páginas duplicadas de baja calidad respetando las políticas de Google sobre doorway pages.

---

## 🚀 Checklist de Verificación Final
- [x] Dominio canónico único con `https://www.enviosdosruedas.com`
- [x] Sin páginas con error 404 o redirecciones 301 en sitemap
- [x] Rutas transaccionales y de cotización priorizadas
- [x] Integración con robots.txt validada
