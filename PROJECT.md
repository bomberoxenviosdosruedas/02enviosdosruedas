# 📦 Envíos DosRuedas — Documento de Arquitectura y Especificación Técnica (PROJECT.md)

> **Estado del Proyecto:** En Producción / Optimización Continua 2026.  
> **Ubicación Base:** Friuli 1972, Barrio Chauvín, Mar del Plata, Argentina.  
> **Área de Cobertura:** Partido de General Pueyrredón (hasta 20 km).  
> **Contacto Oficial:** WhatsApp +54 223 660-2699 · matiascejas@enviosdosruedas.com.

---

## 1. Visión General del Negocio y Dominio

**Envíos DosRuedas** es la empresa líder de última milla, mensajería urbana y logística e-commerce en Mar del Plata. Con más de 7 años de trayectoria ininterrumpida y calificación perfecta de 5 estrellas en Google Maps, resolvemos la distribución y logística de comercios, marcas de indumentaria, distribuidoras y vendedores de Mercado Libre.

### Servicios Principales
1. **Envíos Express:** Cadetería prioritaria con entrega en 60 a 90 minutos y franja horaria de 3 hs a elección (solicitar antes de 15:00 hs con 2 hs de anticipación).
2. **Reparto LowCost:** Envíos económicos consolidados en el día antes de las 19:00 hs (solicitar antes de 13:00 hs).
3. **Mercado Envíos Flex:** Logística Same-Day para vendedores de Mercado Libre. Corte a las 15:00 hs, 100% de entregas aseguradas antes de las 20:00 hs para blindar la reputación de MercadoLíder.
4. **Depósito & Fulfillment (3PL):** Almacenamiento de stock en Friuli 1972, picking, packing profesional y despacho directo en el día. Opción Drop-Off con 20% de descuento.
5. **Envíos a Contrarreembolso:** Cobro en efectivo en mano en destino sin porcentaje de comisión y con rendición inmediata en el día.
6. **Empresas con Cuenta Corriente:** Liquidación quincenal unificada con Factura A, tarifas bonificadas por volumen diario y atención ejecutiva vía WhatsApp.

---

## 2. Stack Tecnológico

| Capa | Tecnología | Detalle |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | React 19, Server Components por defecto, Turbopack |
| **Lenguaje** | TypeScript 5.x | Modo estricto (`strict: true`), 0 `any` |
| **Estilos** | Tailwind CSS v4 | `@theme`, escala azul/amarillo/blanco, 0 hex inline |
| **Animaciones** | Framer Motion (`motion/react`) | Respeto riguroso de `prefers-reduced-motion` |
| **Base de Datos** | Prisma ORM + PostgreSQL | Modelos `ServiceType`, `PricingRange`, `Order`, `Zone` |
| **Mapas & Geocoding** | Leaflet + OpenStreetMap + OSRM | Cálculo exacto punto a punto y ruteo vial |
| **Gestor de Paquetes** | `pnpm` | Único gestor autorizado |

---

## 3. Esquema de Tarifas Oficiales 2026 (Fuente de Verdad)

Ver especificación detallada en `docs/contexto/precios.md` y lógica pura en `src/lib/pricing.ts`.

| Servicio | Radio | Distancia | Tarifa Base ARS | Adicional por Excedente |
|---|---|---|---|---|
| **EXPRESS** | Z1 | 0 a 3 km | **$3.700** | — |
| **EXPRESS** | Z2 | 3 a 5 km | **$4.600** | — |
| **EXPRESS** | Z3 | 5 a 7 km | **$6.100** | — |
| **EXPRESS** | Z4 | 7 a 10 km | **$8.200** | — |
| **EXPRESS** | Z5 | +10 a 20 km | `Math.ceil(km) × $1.000` | $1.000 / km adicional |
| **LOW_COST** | Z1 | 0 a 3 km | **$3.000** | — |
| **LOW_COST** | Z2 | 3 a 5 km | **$4.000** | — |
| **LOW_COST** | Z3 | 5 a 7 km | **$5.300** | — |
| **LOW_COST** | Z4 | 7 a 10 km | **$7.000** | — |
| **LOW_COST** | Z5 | +10 a 20 km | `Math.ceil(km) × $700` | $700 / km adicional |

> ⚠️ **Regla Mandatoria `Math.ceil(km)`:** En trayectos que superen los 10 km (hasta el límite de 20 km), se redondea la distancia real total hacia el entero superior y se multiplica por la tarifa unitaria.  
> Ejemplo: 10,2 km en Express = `Math.ceil(10.2) * 1000 = 11 * 1000 = $11.000`.

---

## 4. Contratos de Interfaz del Sistema de Diseño (DESIGN.md)

### Regla Fundamental de 3 Colores
- **Azul Primario:** `#0950F6` (`brand-blue-700` / `brand-blue-900`, tope de oscuridad permitido)
- **Amarillo Acento / CTA:** `#FFEC01` (`brand-yellow-500` / hover `#FFF12E`)
- **Blanco Superficie:** `#FFFFFF` (`brand-white-50`)
- **Fondo Suave:** `#E6EEFE` (`brand-blue-50`)
- **Prohibido:** Colores externos (`green-500`, `slate`, `zinc`, etc.). Los botones de WhatsApp deben tener fondo amarillo de marca (`brand-yellow-500`) con texto azul y el glifo SVG en blanco/azul.

### Tipografía
- **Titulares de Impacto (H1, H2):** `Anton` (`font-display`), uppercase.
- **Subtítulos, Badges, Botones:** `Bebas Neue` (`font-subheading`), uppercase.
- **Cuerpo y Textos UI:** `IBM Plex Sans` / `Outfit` (`font-sans`).
- **Métricas y Precios:** `Geist Mono` (`font-mono`, `tabular-nums`).

### Componentes Insignia
1. **Double Bezel Card:** Outer `bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl` + Inner `bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm`.
2. **CTA Nested Pill:** Botón pastilla `rounded-full font-subheading uppercase font-bold tracking-wider px-8 py-3 bg-brand-yellow-500 text-brand-blue-900` con icono interior en círculo `32px`.
3. **Traceability:** Cada cotización genera un identificador `#DR-XXXX` persistido en sesión para trazabilidad en soporte por WhatsApp.

---

## 5. Estructura de Directorios del Código

```
src/
├── app/
│   ├── api/                           # Rutas API / Webhooks
│   ├── cobertura/page.tsx             # Guía completa de barrios y zonas MDQ
│   ├── contacto/page.tsx              # Formulario y datos base Friuli 1972
│   ├── cotizar/
│   │   ├── express/page.tsx           # Cotizador Express punto a punto
│   │   └── lowcost/page.tsx           # Cotizador masivo LowCost
│   ├── guias/
│   │   └── envios-flex-mar-del-plata/ # Guía para vendedores Mercado Libre
│   ├── nosotros/
│   │   ├── sobre-nosotros/page.tsx
│   │   ├── preguntas-frecuentes/      # FAQ interactivo con buscador y respuestas del dueño
│   │   └── nuestras-redes/page.tsx
│   ├── servicios/
│   │   ├── envios-express/page.tsx
│   │   ├── envios-lowcost/page.tsx
│   │   ├── enviosflex/page.tsx        # Tarifas Flex above-the-fold
│   │   ├── deposito-fulfillment/page.tsx
│   │   ├── envios-contrareembolso/page.tsx
│   │   └── empresas-cuenta-corriente/page.tsx
│   ├── layout.tsx                     # Root Layout + Metadata + Schema.org
│   └── page.tsx                       # Home: Hero -> Segmentos -> Servicios -> SocialProof
├── components/
│   ├── cobertura/CoberturaExplorer.tsx # Buscador interactivo de barrios MDQ
│   ├── home/                          # Hero, Segmentos, Servicios, SocialProof con Casos Reales
│   ├── layout/                        # OptimizedHeader, OptimizedFooter, MobileNav
│   ├── seo/SchemaMarkup.tsx           # JSON-LD Schema.org unificado
│   └── ui/                            # DoubleBezel, CTANestedPill, etc.
└── lib/
    ├── analytics.ts                   # Tracking GA4 + UTMs persistentes
    ├── pricing.ts                     # Funciones puras de cálculo tarifario
    ├── whatsapp.ts                    # Generador de enlaces WhatsApp con mensaje prearmado
    └── utils.ts                       # Helpers y cn()
```

---

## 6. Definition of Done (DoD) por Tarea

Para considerar cualquier cambio o funcionalidad como terminada:
- [x] **0 Errores de compilación:** Sin tipos `any`, TypeScript strict verificado.
- [x] **Paleta 3 Colores:** Únicamente Azul, Amarillo y Blanco. Cero botones verdes.
- [x] **Tono y Voz Rioplatense:** Voseo auténtico en 100% de copys ("Cotizá", "Elegí", "Contactanos").
- [x] **Localización Mar del Plata:** Referencias a Friuli 1972, barrios y Partido de General Pueyrredón.
- [x] **Tarifas 2026 Exactas:** Alineadas con la tabla oficial y regla de `Math.ceil(km)`.
- [x] **Accesibilidad:** Contrastes AA, `focus-visible` activo, touch targets ≥ 44px, `prefers-reduced-motion` respetado.
- [x] **Mobile First:** Diseño responsivo verificado entre 320px y 1920px sin overflow horizontal.
