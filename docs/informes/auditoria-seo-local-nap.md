# AUDITORÍA DE SEO LOCAL Y CONSISTENCIA NAP
**Envíos DosRuedas · Mar del Plata, Argentina (2026)**

---

## 1. TABLA DE HALLAZGOS Y DIAGNÓSTICO DEL REPOSITORIO

| Prioridad | Archivo | Problema Detectado | Corrección Sugerida |
| :--- | :--- | :--- | :--- |
| **ALTA** | `src/app/api/assistant/route.ts` (L. 28, 66) | Formato con dígito '9' para cel argentino (`+54 9 223 660-2699`). Rompe la consistencia del número fijo/oficial para citaciones locales. | Unificar a `+54 223 660-2699` en el prompt del asistente. |
| **ALTA** | `src/components/home/CtaSection.tsx` (L. 16) | Enlace directo a WhatsApp utiliza `5492236602699` con dígito 9 innecesario. | Usar la constante unificada de `src/lib/whatsapp.ts` (`542236602699`). |
| **MEDIA** | `src/app/layout.tsx` (L. 108, 125) | El esquema JSON-LD declara `Organization` y `LocalBusiness` con formato de teléfono RFC `+54-223-660-2699` con guiones extra. | Formatear a `+54 223 660-2699` o `+542236602699` según estándar Schema.org. |
| **MEDIA** | `src/components/layout/OptimizedHeader.tsx` (L. 187) | El texto visible muestra `223 660-2699` sin el código de país `+54`, perdiendo peso de relevancia regional. | Mostrar `+54 223 660-2699` o incluir `(0223)` formal. |
| **MEDIA** | `src/app/layout.tsx` (L. 138-145) | En `PostalAddress`, falta explicitar el barrio Chauvín y el código postal `7600` en todas las páginas internas donde se duplica el esquema. | Unificar el sub-bloque `address` en todas las páginas. |
| **BAJA** | `src/components/layout/OptimizedHeader.tsx` (L. 139) | El atributo `alt` del logo dice `Logo Envíos Dos Ruedas` (con espacio). | Corregir `alt="Logo Envíos DosRuedas"` sin espacio intermedio. |
| **BAJA** | `src/components/nosotros/sobre-nosotros/AboutHero.tsx` (L. 102) | Título visual usa "Dos Ruedas" separado. | Mantener siempre la marca unificada "Envíos DosRuedas". |

---

## 2. NAP CANÓNICO FINAL (COPIAR Y PEGAR)

```text
Nombre Comercial: Envíos DosRuedas
Nombre Legal / Razon Social: Envíos DosRuedas
Dirección Física: Friuli 1972, B7600 Mar del Plata, Provincia de Buenos Aires, Argentina
Barrio / Referencia: Chauvín / Base Central
Teléfono / WhatsApp Oficial: +54 223 660-2699
Sitio Web Oficial: https://www.enviosdosruedas.com/
Email de Contacto: matiascejas@enviosdosruedas.com
Horarios de Atención: Lunes a Viernes de 08:00 a 18:00 hs | Sábados de 09:00 a 13:00 hs
```

---

## 3. BLOQUE JSON-LD ESTRUCTURADO RECOMENDADO

Propuesta unificada para inyectar en `src/app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.enviosdosruedas.com/#organization",
      "name": "Envíos DosRuedas",
      "url": "https://www.enviosdosruedas.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.enviosdosruedas.com/logo-envios-simplified.webp"
      },
      "sameAs": [
        "https://www.instagram.com/enviosdosruedas",
        "https://www.facebook.com/enviosdosruedas"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+54 223 660-2699",
        "contactType": "customer service",
        "availableLanguage": "Spanish",
        "areaServed": "AR"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.enviosdosruedas.com/#localbusiness",
      "name": "Envíos DosRuedas",
      "description": "Servicio de mensajería en moto, cadetería e-commerce y logística 3PL en Mar del Plata. Envíos Express, LowCost, Mercado Envíos Flex y almacenamiento en Friuli 1972.",
      "url": "https://www.enviosdosruedas.com/",
      "telephone": "+54 223 660-2699",
      "email": "matiascejas@enviosdosruedas.com",
      "image": "https://www.enviosdosruedas.com/og-image.jpg",
      "hasMap": "https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Friuli 1972",
        "addressLocality": "Mar del Plata",
        "addressRegion": "Buenos Aires",
        "postalCode": "B7600",
        "addressCountry": "AR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -38.0055,
        "longitude": -57.5426
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Mar del Plata" }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "ARS",
      "paymentAccepted": "Efectivo, Transferencia, MercadoPago, Tarjeta de Crédito",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Logísticos y Mensajería",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Envíos Express Same-Day",
              "description": "Entrega prioritaria en franja horaria de 3 horas en todo Mar del Plata."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Envíos LowCost Programados",
              "description": "Repartos económicos consolidados con rango de entrega en el día."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mercado Envíos Flex",
              "description": "Entregas en el día para vendedores de MercadoLibre en Mar del Plata."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Almacenamiento y Fulfillment 3PL",
              "description": "Depósito de stock, picking por código QR y despacho inmediato desde Friuli 1972."
            }
          }
        ]
      }
    }
  ]
}
```

---

## 4. GOOGLE BUSINESS PROFILE (GBP) Y PENDIENTES OPERATIVOS

1. **Nombre Exacto en la Ficha:** Debe configurarse strictly como `Envíos DosRuedas` (evitar agregados de palabras clave como "Envíos DosRuedas - Cadetería Mar del Plata", ya que Google sanciona el sobre-optimizado de nombre).
2. **Pendiente - Verificación por Video en Friuli 1972:**
   - Grabar video continuo mostrando la cartelería exterior en Friuli 1972, el número municipal sobre la pared, la entrada al depósito, las motos de la flota con oblea/caja de la empresa y las estanterías de paquetes etiquetados.
3. **Pendiente - Vinculación de WhatsApp Business:**
   - Configurar el botón principal de la ficha directamente hacia el número `+54 223 660-2699` con mensaje predefinido.
4. **Pendiente - Carga de Catálogo de Productos y Servicios en GBP:**
   - Cargar los 4 servicios con precios base 2026:
     - **Express:** $8.200 (hasta 10 km) + $1.000 por km extra.
     - **LowCost:** $7.000 (hasta 10 km) + $700 por km extra.
     - **Mercado Envíos Flex:** Logística Same-Day para e-commerce.
     - **Plan Emprendedores / 3PL:** Stock gratis en Friuli 1972 + DropOFF 20% OFF.

---

## 5. CITAS Y DIRECTORIOS LOCALES RECOMENDADOS

Para potenciar la autoridad local y el ranking en el Local Pack de Mar del Plata, dar de alta la ficha con el **NAP exacto**:

1. **Páginas Amarillas Argentina:** Directorio comercial tradicional de alta relevancia local.
2. **MercadoLibre Servicios:** Categoría Mensajería y Cadetería en Mar del Plata.
3. **Foursquare / Swarm:** Registro de ubicación física para el nodo Friuli 1972.
4. **Bing Places for Business:** Sincronización automática desde la ficha de Google Business Profile.
5. **Apple Maps Connect:** Ficha de empresa para dispositivos iOS / Apple Maps en Mar del Plata.
6. **Directorio UCIP (Unión del Comercio, la Industria y la Producción de Mar del Plata):** Registro institucional clave para networking de e-commerce local.
7. **Guía Mar del Plata / Portales Locales (0223 / La Capital Guía Comercial):** Enlaces locales de alta autoridad geográfica.

---

## 6. PLAN DE ACCIÓN PRIORIZADO (TOP 10 PASOS)

1. **Pasar el JSON-LD canónico unificado** en `src/app/layout.tsx` para eliminar guiones no estándar y definir el catálogo completo de 4 servicios.
2. **Unificar todas las referencias de teléfono en el código** a `+54 223 660-2699` (especialmente en `route.ts` del bot y `CtaSection.tsx`).
3. **Completar la verificación por video en Google Business Profile** filmando la base física de Friuli 1972 y la flota propia.
4. **Emparejar el nombre exacto de la marca** en todo el sitio, eliminando variaciones como "Dos Ruedas" o "Envíos Dos Ruedas".
5. **Cargar los catálogos de servicios en la ficha de Google Business Profile** con la estructura tarifaria 2026.
6. **Dar de alta la empresa en Bing Places y Apple Maps** sincronizando el NAP canónico.
7. **Registrar la ficha en directorios locales clave de Mar del Plata** (UCIP, Páginas Amarillas, MercadoLibre Servicios).
8. **Revisar que los horarios de atención en GBP** coincidan 100% con los expresados en la web (Lu a Vi 08-18 hs, Sá 09-13 hs).
9. **Monitorear palabras clave en Google Search Console** ("mensajería en moto mar del plata", "cadetería mar del plata", "envíos flex mar del plata").
10. **Solicitar opiniones a clientes recurrentes en Google Maps** pidiéndoles mencionar el servicio (Express, Flex, Friuli 1972) en la reseña.

---
*Nota: El código del repositorio se mantiene intacto y sin modificaciones.*
