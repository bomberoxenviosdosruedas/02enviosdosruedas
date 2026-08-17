# 🗺️ Site Architecture & Sitemap Structure: Envíos DosRuedas

- **Dominio Canónico:** `https://www.enviosdosruedas.com`
- **Sitemap Endpoint:** `https://www.enviosdosruedas.com/sitemap.xml` (Generado dinámicamente vía `src/app/sitemap.ts`)
- **Robots.txt:** `https://www.enviosdosruedas.com/robots.txt` (Vía `src/app/robots.ts`)
- **Total URLs Indexables:** 14

---

## 📊 Distribución de URLs por Categoría y Propósito SEO

### 1. 🏠 Página Principal (Home)
| URL | Propósito | Prioridad / Frecuencia |
|---|---|---|
| `https://www.enviosdosruedas.com/` | Landing institucional & cotizador unificado | `1.0` / Daily |

### 2. ⚡ Servicios Comerciales (Alta Intención Transaccional)
| URL | Segmento | Target de Búsqueda |
|---|---|---|
| `https://www.enviosdosruedas.com/servicios/envios-express` | Mensajería Urgente Mar del Plata | Envíos en moto MDQ, cadetería express |
| `https://www.enviosdosruedas.com/servicios/envios-lowcost` | Envíos Económicos / D+1 | Reparto lowcost, cadetería económica MDQ |
| `https://www.enviosdosruedas.com/servicios/enviosflex` | Mercado Envíos Flex | Envíos Flex Mercado Libre Mar del Plata |
| `https://www.enviosdosruedas.com/servicios/plan-emprendedores` | Logística para Tiendas y Emprendedores | Tarifas mensuales cadetería, e-commerce MDQ |

### 3. 🎯 Cotizadores & Herramientas
| URL | Tipo | Utilidad |
|---|---|---|
| `https://www.enviosdosruedas.com/cotizar/express` | Herramienta Interactiva | Cotizador de viajes punto a punto con mapa OSRM |
| `https://www.enviosdosruedas.com/cotizar/lowcost` | Herramienta Masiva | Cotizador por zonas fijas y planillas de entregas |
| `https://www.enviosdosruedas.com/revisar` | Tracking / Validación | Rastreador y revisión de estados de paquetes |

### 4. 🏢 Marca & Confianza (E-E-A-T)
| URL | Contenido | Señales de Calidad |
|---|---|---|
| `https://www.enviosdosruedas.com/nosotros/sobre-nosotros` | Historia, cobertura y flota | Autoridad local Mar del Plata (15+ años) |
| `https://www.enviosdosruedas.com/nosotros/preguntas-frecuentes` | FAQ operativa y tarifas | Dudas frecuentes, zonas y medios de pago |
| `https://www.enviosdosruedas.com/nosotros/nuestras-redes` | Canales oficiales y contacto directo | Redes sociales y presencia multicanal |
| `https://www.enviosdosruedas.com/contacto` | Formulario & WhatsApp | Conversión directa con operadores locales |

### 5. ⚖️ Legales
| URL | Propósito | Indexación |
|---|---|---|
| `https://www.enviosdosruedas.com/terminos-y-condiciones` | Términos de servicio | Prioridad baja `0.3`, crawl mensual |
| `https://www.enviosdosruedas.com/politica-de-privacidad` | Protección de datos personales | Prioridad baja `0.3`, crawl mensual |

---

## 🛡️ Rutas Excluidas de Indexación (`robots.ts`)
- `/admin` y `/admin/*` (Panel de administración interno)
- `/ordenes` y `/ordenes/*` (Datos privados de entregas de clientes)
