# Master Prompt Orquestador de Reconstrucción: Envíos DosRuedas

> **Ubicación:** `replicacion/MASTER_PROMPT.md`  
> **Destinatario:** Asistente de IA o Desarrollador Senior para levantar el proyecto limpio desde cero en etapas progresivas.  
> **Arquitectura:** Next.js 16 (App Router) · React 19 · TypeScript 5.7+ · Tailwind CSS v4 · Motion (`motion/react`) · Prisma ORM 7+ · PostgreSQL  
> **Carpeta de Prompts Modulares:** [`replicacion/prompts/`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts)  

---

# GUÍA MAESTRA DE ORQUESTACIÓN

Para clonar o reconstruir la plataforma web de **Envíos DosRuedas** (Mar del Plata) sin sobrecargar el contexto de la IA receptora y garantizando fidelidad de código y diseño, seguí la secuencia ordenada de prompts modulares creada en la carpeta `replicacion/prompts/`.

Cada archivo de bloque cuenta con **dos modalidades independientes** que podés copiar y pegar según el modelo de IA que utilices:
1. **Modalidad 1 (Prompt Declarativo / Funcional):** Ideal para modelos de alto razonamiento o diseño, describiendo en lenguaje natural objetivos, copys, reglas y criterios de aceptación.
2. **Modalidad 2 (Prompt Técnico / Código e Imports Exactos):** Ideal para modelos de codificación estricta que requieren tipos TypeScript precisos, imports de componentes, props y código listo para producción.

---

## 🗺️ MAPA DE EJECUCIÓN PASO A PASO

### Fase 0: Setup Base y Esqueleto de Rutas
* **Prompt:** [`replicacion/prompts/00-setup-base-y-rutas.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts/00-setup-base-y-rutas.md)
* **Objetivo:** Inicializar el proyecto con `pnpm`, instalar dependencias exactas, configurar `.env`, `globals.css` (Tailwind v4), Prisma ORM y generar los stubs (esqueletos limpios) de todas las rutas públicas para que el sitio sea 100% navegable desde el inicio sin errores 404.

---

### Fase 1: Shell Persistente y Layout Global
* **Prompt:** [`replicacion/prompts/01-layout-y-shell.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts/01-layout-y-shell.md)
* **Archivos:** `src/app/layout.tsx`, `OptimizedHeader.tsx`, `OptimizedFooter.tsx`, `CarruselRedes.tsx`
* **Objetivo:** Inyectar las 4 tipografías Google oficiales (Anton SC, Bebas Neue, Outfit, Geist Mono), metadatos SEO y OpenGraph de Mar del Plata, la cabecera sticky con menú responsive y el footer azul con la franja de remate amarilla de 6px.

---

### Fase 2: Página de Inicio (Home)
* **Prompt:** [`replicacion/prompts/02-home.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts/02-home.md)
* **Archivos:** `src/app/page.tsx` y componentes en `src/components/home/` (`HeroAnimado`, `SegmentosHome`, `ServicesOverview`, `EmprendedoresHome`, `SocialProofSection`, `CtaSection`)
* **Objetivo:** Construir la portada de alta conversión con tarjetas Double Bezel, testimonios y accesos directos al cotizador.

---

### Fase 3: Contacto y Base Operativa
* **Prompt:** [`replicacion/prompts/03-contacto.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts/03-contacto.md)
* **Archivos:** `src/app/contacto/page.tsx` y componentes en `src/components/contacto/` (`ContactHero`, `ContactForm`, `ContactInfo`, `ConversionBanner`, `CopyPhone`)
* **Objetivo:** Ficha oficial de la base operativa en Friuli 1972, formulario comercial, Bento Grid con teléfonos y botón de derivación inmediata a WhatsApp.

---

### Fase 4: Cotizador Unificado y Motor Tarifario
* **Prompt:** [`replicacion/prompts/04-cotizador-unificado.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts/04-cotizador-unificado.md)
* **Archivos:** `src/app/cotizar/page.tsx`, hook `useCotizadorUnified.ts`, Server Action `quote.ts`, motor puro `pricing.ts`, endpoints `/api/places/*` y componentes de mapa Leaflet y comparativa.
* **Objetivo:** Implementar la herramienta interactiva de cotización en Mar del Plata: medición vial real con Google Directions, cálculo dual (Express y LowCost) y confirmación vía WhatsApp.

---

### Fase 5: Catálogo y Páginas de Servicios Especializados
* **Prompt:** [`replicacion/prompts/05-servicios.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts/05-servicios.md)
* **Archivos:** `src/app/servicios/page.tsx` y las 7 páginas individuales:
  - `/servicios/envios-express` (Franja de 3 hs, corte 15:00 hs)
  - `/servicios/envios-lowcost` (Reparto en el día hasta las 19:00 hs, corte 13:00 hs)
  - `/servicios/enviosflex` (Mercado Envíos Flex, entrega hasta las 20:00 hs)
  - `/servicios/deposito-fulfillment` (Almacén y preparación en Friuli 1972)
  - `/servicios/empresas-cuenta-corriente` (Facturación mensual B2B)
  - `/servicios/envios-contrareembolso` (Cobranza en efectivo y liquidación en 24 hs)
  - `/servicios/plan-emprendedores` (Tarifas para tiendas online locales)

---

### Fase 6: Cobertura Territorial y Radios Zonales
* **Prompt:** [`replicacion/prompts/06-cobertura.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts/06-cobertura.md)
* **Archivos:** `src/app/cobertura/page.tsx`
* **Objetivo:** Mapa interactivo con Leaflet y fichas de los 5 radios urbanos de Mar del Plata más las condiciones tarifarias para zonas de periferia (Batán, Sierra de los Padres, Camet Norte, Chapadmalal a $1.000/km de ruta).

---

### Fase 7: Módulo Institucional (Nosotros, Cultura, FAQs y Redes)
* **Prompt:** [`replicacion/prompts/07-nosotros-y-faqs.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts/07-nosotros-y-faqs.md)
* **Archivos:** `src/app/nosotros/page.tsx`, `/nosotros/sobre-nosotros`, `/nosotros/preguntas-frecuentes`, `/nosotros/nuestras-redes`
* **Objetivo:** Narrativa de empresa con flota 100% propia sin tercerización, acordeón interactivo de preguntas frecuentes y preview de canales sociales.

---

### Fase 8: Guías SEO y Marco Legal
* **Prompt:** [`replicacion/prompts/08-guias-y-legales.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/replicacion/prompts/08-guias-y-legales.md)
* **Archivos:** `src/app/guias/envios-flex-mar-del-plata/page.tsx`, `src/app/terminos-y-condiciones/page.tsx`, `src/app/politica-de-privacidad/page.tsx`
* **Objetivo:** Guía de autoridad para vendedores de Mercado Libre en Mar del Plata, términos del servicio (límites de carga de 5 kg y 40x40x30 cm, mercadería prohibida, aclaración de no Factura A) y políticas de privacidad.

---

## 📌 RECORDATORIO DE REGLAS DE DISEÑO Y NEGOCIO
* **La Ley de Tres Colores:** Azul Corporativo (`#0950F6` como tope de oscuridad), Amarillo Vial (`#FFEC01` como señal/acción $\le 15\%$) y Blanco Puro (`#FFFFFF`). Prohibido usar negro `#000000` o grises genéricos.
* **Geometría:** Tarjetas Double Bezel (`double-bezel-outer` + `double-bezel-inner`).
* **Voseo Rioplatense:** Obligatorio en todos los textos ("cotizá", "escribinos", "coordiná", "seguí").
* **Datos Operativos:** Base física en Friuli 1972, Mar del Plata. Teléfono/WhatsApp: `+54 9 223 660-2699`.
