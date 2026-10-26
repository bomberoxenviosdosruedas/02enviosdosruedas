# Mapeo Exacto de Páginas, Vistas, Copys y Componentes — Envíos DosRuedas

## 1. Landing Page Principal (`/`)
- **Ruta:** `src/app/page.tsx`
- **Propósito:** Presentación de la propuesta de valor logística en Mar del Plata.
- **Copy H1:** "LOGÍSTICA Y MENSAJERÍA EN MOTO EN MAR DEL PLATA"
- **Subtítulo:** "Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y cadetería corporativa con base en Friuli 1972."
- **Modismo Rioplatense (Voseo):** "Cotizá online", "Rastreá tu paquete", "Enviá hoy mismo", "Contactanos".
- **Componentes UI:** `HeroAnimado`, `SegmentosHome`, `ServicesOverview`, `EmprendedoresHome`, `SocialProofSection`, `CtaSection`.

## 2. Cotizador Unificado Multiservicio (`/cotizar`)
- **Ruta:** `src/app/cotizar/page.tsx`
- **Propósito:** Cálculo interactivo simultáneo de tarifas Express y LowCost sobre mapa real.
- **Microcopy:** "Cargá retiro y entrega para comparar tarifas en tiempo real."
- **Parámetros Operativos (2026):**
  - Express 0–3 km: $3.700 | 3–5 km: $4.600 | 5–7 km: $6.100 | 7–10 km: $8.200 | +10 km: $1.000/km.
  - LowCost 0–3 km: $3.000 | 3–5 km: $4.000 | 5–7 km: $5.300 | 7–10 km: $7.000 | +10 km: $700/km.
  - Umbral máximo automático: 20 km (después pasa a "Consultar" vía WhatsApp).
- **Componentes UI:** `CotizadorHero`, `CotizadorUnificado` (Google Maps Autocomplete / Leaflet), `CotizadorRecargos`.

## 3. Páginas de Servicios Especializados (`/servicios/*`)
- `/servicios/envios-express`: Envíos prioritarios con franja horaria de 3 hs y 2 hs de anticipación mínima.
- `/servicios/envios-lowcost`: Reparto económico en el día solicitando antes de las 13:00 hs (entrega antes de las 19:00 hs).
- `/servicios/enviosflex`: Solución oficial Mercado Envíos Flex en Mar del Plata con corte a las 15:00 hs y entrega garantizada hasta las 20:00 hs.
- `/servicios/deposito-fulfillment`: Almacenamiento, picking con código QR y despacho DropOFF (-20% de descuento) con base en Friuli 1972.
- `/servicios/empresas-cuenta-corriente`: Facturación A/B quincenal y choferes dedicados para empresas y PyMEs.

## 4. Cobertura y Mapa (`/cobertura`)
- **Ruta:** `src/app/cobertura/page.tsx`
- **Propósito:** Explorador interactivo de barrios en Mar del Plata (Chauvín, Centro, Güemes, Los Troncos, Mogotes, Constitución).
- **Componentes UI:** `LogisticaNetworkCanvas`, `CoberturaExplorer`.

## 5. Contacto y Nosotros (`/contacto`, `/nosotros/*`)
- **Rutas:** `src/app/contacto/page.tsx`, `src/app/nosotros/sobre-nosotros/page.tsx`, `src/app/nosotros/preguntas-frecuentes/page.tsx`, `src/app/nosotros/nuestras-redes/page.tsx`.
- **Datos SSoT:** Friuli 1972, Mar del Plata | Tel/WhatsApp: +54 223 660-2699 | Email: matiascejas@enviosdosruedas.com.
