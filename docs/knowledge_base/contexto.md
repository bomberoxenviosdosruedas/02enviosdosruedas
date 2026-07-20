# Base de Conocimiento Centralizada — Envíos DosRuedas 2026
## Manifiesto de Marca, Valores, Voz y Contexto de Negocio Local

> **Este archivo es la FUENTE DE VERDAD ÚNICA** para identidad, tono, valores y contexto operativo.
> Cualquier agente IA, desarrollador o stakeholder debe leerlo ANTES de producir código, copy, diseño o decisiones de producto.
> Ubicación canónica: `docs/knowledge_base/contexto.md`
> Referenciado desde: `AGENTS.md`, `DESIGN.md`, `PROJECT.md`, `README.md`, `.geminiignore` (whitelist)

---

## 1. Manifiesto de Marca Envíos DosRuedas 2026

| Pilar | Declaración |
|-------|-------------|
| **Propósito** | Conectar Mar del Plata con logística humana, eficiente y de confianza. |
| **Visión** | Ser el sistema nervioso logístico de la ciudad: misma-day, trazabilidad total, trato personal. |
| **Misión Operativa** | Entregar en < 90 min (Express) / optimizar rutas 24h (LowCost) / cumplir SLAs 99.9% (Flex/3PL) — con tecnología al servicio de la operación, no al revés. |
| **Diferenciador** | Flota propia (80+ motos, 20+ utilitarios), hub en Friuli 1972, conocimiento vial heredado 15+ años, riders empleados (no gig), atención por WhatsApp humano. |

**Promesa de Marca**: *"Tu envío llega. Te avisamos cuando sale, cuando llega, y si hay novedad te llamamos. Así de simple."*

---

## 2. Valores Fundacionales (Inmutables)

Estos tres valores guían **cada decisión**: código, copy, diseño, proceso, contratación.

| Valor | Qué Significa en la Práctica | Qué NO Significa |
|-------|------------------------------|------------------|
| **TRADICIÓN** | 15+ años en las calles de MDQ. Conocimiento vial heredado: atajos, cortes, horarios pico, zonas rojas. difícil acceso, ferias, eventos. Se codifica en OSRM profiles custom, no en Google Maps genérico. | "Hacemos lo que siempre hicimos" sin innovar. La tradición INFORMA la tech, no la frena. |
| **CERCANÍA** | Hablamos como vecinos. Voseo rioplatense obligatorio. Referencias locales obligatorias (Güemes, Playa Grande, Punta Mogotes, Chauvín). Atención por WhatsApp con nombre de pila. Riders que conocen al comerciante de la esquina. | Chatbots genéricos, "estimado cliente", respuestas enlatadas, neutralidad latina. |
| **EFICACIA** | Tecnología al servicio de la operación. `Math.ceil` real en +10km (no redondeos cómodos). OSRM batch routing para LowCost. Webhooks ML Flex < 200ms. Zero-downtime deploys. Métricas: OTIF > 99%, tiempo respuesta < 2 min. | "Move fast and break things". Romper la operación por velocidad de deploy. Métricas de vanidad. |

---

## 3. Voz y Tono — Rioplatense Obligatorio

### 3.1 Reglas de Oro (No Negociables)

| Regla | Correcto ✅ | Incorrecto ❌ |
|-------|-------------|---------------|
| **Voseo siempre** | "Cotizá tu envío", "Ingresá origen y destino", "Contactanos" | "Cotice su envío", "Ingrese origen y destino", "Contáctenos" |
| **Pronombres** | Vos / Tu / Tuyo | Usted / Su / Suyo |
| **Verbos de acción** | Cotizá, Enviá, Rastreá, Elegí, Agendá, Confirmá | Cotice, Envíe, Rastree, Elija, Agende, Confirme |
| **Expresiones locales** | "Al toque", "En un rato", "Quedate tranquilo", "Te avisamos", "Por acá" | "Inmediatamente", "En breve", "Quede tranquilo", "Le notificaremos", "En la zona" |
| **Referencias geográficas MDQ** | "Desde Güemes hasta Playa Grande", "Hub en Friuli 1972", "Cubrimos Punta Mogotes" | "Desde el centro hasta la playa", "Nuestro centro de distribución", "Cobertura amplia" |

### 3.2 Diccionario de Verbos Institucionales

| Acción | Verbo Oficial | Ejemplo en UI |
|--------|---------------|---------------|
| Calcular precio | **Cotizá** | `Cotizá tu envío Express` |
| Crear orden | **Enviá** | `Enviá ahora` / `Enviá masivo` |
| Seguimiento | **Rastreá** | `Rastreá tu paquete` |
| Elegir servicio | **Elegí** | `Elegí Express o LowCost` |
| Ingresar datos | **Ingresá** | `Ingresá la dirección` |
| Contactar | **Contactanos** / **Escribinos** | `Contactanos por WhatsApp` |
| Agendar | **Agendá** | `Agendá tu retiro` |
| Confirmar | **Confirmá** | `Confirmá la dirección` |

### 3.3 Microcopys de Referencia (Copiar/Pegar en Componentes)

```tsx
// Hero Landing
<Display>Enviá hoy. Llega al toque.</Display>
<Lead>Cotizá en segundos. Rastreá en vivo. Pagás al recibir.</Lead>
<CTAPrimary>Cotizá Express</CTAPrimary>
<CTASecondary>Enviá LowCost</CTASecondary>

// Trust Pills
<Badge>Retiro en 15 min</Badge>
<Badge>Rastreo GPS vivo</Badge>
<Badge>Pago al recibir</Badge>

// Form Labels
<Label>ORIGEN</Label>
<Placeholder>Calle 123, Güemes</Placeholder>
<HelpText>Cubrimos todo General Pueyrredón</HelpText>

<Label>DESTINO</Label>
<Placeholder>Av. Colón 4500, Playa Grande</Placeholder>

// Error States
<ErrorText>Ups, no llegamos a esa zona aun. Probá con otra dirección.</ErrorText>
<ErrorText>La distancia excede nuestro radio. Contactanos para cotizar especial.</ErrorText>

// Success / Toast
<Toast>¡Listo! Tu rider va en camino. Te avisamos cuando llega.</Toast>
<Toast>Cotización guardada. La encontrás en tu historial.</Toast>

// WhatsApp CTA
<CTAWhatsApp>Escribinos por WhatsApp 💬</CTAWhatsApp>
```

### 3.4 Expresiones Prohibidas (Lista Negra)

| Prohibido | Por Qué | Reemplazo |
|-----------|---------|-----------|
| "Estimado cliente" | Frío, corporativo, no rioplatense | "Hola", "¿Cómo va?", nombre si logueado |
| "Por favor ingrese" | Imperativo formal | "Ingresá", "Completá" |
| "Su envío" | Posesivo formal | "Tu envío", "el envío" |
| "En breves momentos" | Burocrático | "Al toque", "En un rato", "Ya vuelve" |
| "Zona de cobertura" | Genérico | "Cubrimos desde Batán hasta Camet" |
| "Centro de distribución" | Frío | "Nuestro hub en Friuli 1972" |
| "Motociclista" / "Repartidor" | Genérico | "Nuestro rider", "el rider que te toca" |
| "Tarifa" / "Precio lista" | Formal | "Cuánto sale", "el precio final" |

---

## 4. Contexto de Negocio Local — Mar del Plata 2026

### 4.1 Cobertura Operativa

| Área | Detalle |
|------|---------|
| **Partido** | General Pueyrredón completo (Mar del Plata + Batán + Sierra de los Padres + zona rural) |
| **Hub Principal** | **Friuli 1972** (ex-Ruta 2, km 2.5) — Centro de Distribución, talleres, oficinas, carga/descarga |
| **Zonas de Referencia Obligatorias** (usar en copy, mapas, simuladores) | **Güemes** (comercial, alta densidad), **Centro** (microcentro, bancario), **Playa Grande** / **Punta Mogotes** (residencial/turístico), **Chauvín** / **Constitución** (industrial/logístico), **Puerto** (carga/exportación), **Camet** / **Barrio Parque** (residencial alto), **Batán** (agro/industrial) |
| **Radio Express** | 0–10 km desde hub (base), +10 km con recargo `Math.ceil(km - 10) × $1.000` |
| **Radio LowCost** | 0–10 km base, +10 km `Math.ceil(km - 10) × $700` — ruteo optimizado multi-entrega 24h |

### 4.2 Flota y Capacidad (2026)

| Tipo | Cantidad | Uso | Tech |
|------|----------|-----|------|
| **Motos propias** | 85+ | Express door-to-door < 90 min | GPS telémetrico, app rider nativa, scanner QR |
| **Utilitarios (Fiorino/Kangoo)** | 22+ | LowCost multi-drop, Flex, 3PL pallets | Ruteo OSRM batch, carga lateral, termo para cold-chain |
| **Camiones 3.5T** | 4 | 3PL paletizado, cross-dock | Tail-lift, GPS, temperatura controlada |

**Riders**: 100% empleados en blanco (no gig), ART, obra social, capacitación vial continua, incentivos por OTIF.

### 4.3 Servicios y Modelos de Precio 2026

> **FUENTE DE VERDAD ÚNICA**: `docs/contexto/precios.md` + Tabla BD `PricingRange`
> **NO INVENTAR VALORES**. Si hay duda → leer `src/lib/pricing.ts` → verificar BD.

| Servicio | Target | SLA | Precio Base (0–3 km) | Lógica +10 km |
|----------|--------|-----|---------------------|---------------|
| **EXPRESS** | B2C urgente, documentos, repuestos, regalos | < 90 min puerta a puerta | **$3.700 ARS** | `Math.ceil(km - 10) × $1.000` |
| **LOWCOST** | B2C/B2B programado, e-commerce masivo, no urgente | 24h (ruteo optimizado) | **$3.000 ARS** | `Math.ceil(km - 10) × $700` |
| **FLEX (ML)** | Sellers MercadoLibre | SLA ML (24/48h) | Retiro $0 / Entrega según tabla Express/LowCost | Según servicio elegido |
| **3PL** | PyMEs stock + fulfillment | Acuerdo comercial | Almacenaje $/m³/día + Pick/Pack $/unidad + Envío tabla | Personalizado |
| **EMPRENDEDORES** | Tiendas < 50 envíos/mes | Express o LowCost | Planes escalonados desde $2.800/envío (volumen) | Descuento por volumen |

**Regla de Oro Tarifaria**: `Math.ceil` **OBLIGATORIO** en excedente +10 km. Un viaje de 10.3 km cobra 1 km adicional entero, no 0.3.

### 4.4 Integraciones Técnicas Críticas

| Integración | Protocolo | SLA | Owner |
|-------------|-----------|-----|-------|
| **MercadoLibre Flex** | Webhooks HTTPS (HMAC SHA256) | < 200ms ACK | Backend Team |
| **OSRM Self-hosted** | HTTP `/route` `/table` `/match` | < 500ms p95 | DevOps |
| **WhatsApp Business API** (Meta) | Cloud API / Webhooks | < 1s delivery | CX Team |
| **PostgreSQL + Prisma** | Pool 20 conexiones, PgBouncer | < 50ms p95 | Backend |
| **Vercel Edge Functions** | API Routes críticas (webhooks, pricing) | Cold start < 100ms | DevOps |

---

## 5. Identidad Visual — Reglas Inquebrantables

> **REFERENCIA COMPLETA**: `DESIGN.md` (tokens, componentes, layout, motion, a11y)
> **ESTE ARCHIVO**: Solo las reglas que NUNCA cambian sin decisión documentada (ADR).

### 5.1 Logotipo — Inalterable

| Regla | Especificación |
|-------|----------------|
| **Archivo Maestro** | `/public/logo-master.svg` (vector, sin fondo, safe-area 20% perimetral) |
| **Colores Permitidos** | Solo: **Azul #0636A5** (primary), **Blanco #FFFFFF** (reverso), **Amarillo #FFEC01** (acento solo en marca compuesta) |
| **Prohibido** | Recolorear, estirar (aspect-ratio fijo), añadir sombras/glows/efectos, colocar sobre fondos ruidosos sin safe-area, usar versión rasterizada (png/jpg) salvo fallback técnico |
| **Tamaño Mínimo** | 120px ancho (web), 30mm (print) |
| **Clear Space** | 0.25× altura del logotipo en todos los lados |
| **Variantes Aprobadas** | 1. Primaria (Azul sobre blanco) 2. Reverso (Blanco sobre Azul #0636A5) 3. Monocromo negro (solo fax/documentos legales) |

### 5.2 Paleta — Ley de Tres Colores

| Rol | Token | Hex | Uso |
|-----|-------|-----|-----|
| **Principal / Confianza** | `brand-blue-700` / `--color-primary` | `#0636A5` | Headers, footers, secciones oscuras, navegación, CTA secondary, bordes fuertes |
| **Acento / Acción / Logística** | `brand-yellow-500` / `--color-accent` | `#FFEC01` | CTA primary, badges, trust pills, iconos activos, focus rings, highlights |
| **Lienzo / Superficie / Claridad** | `brand-white-50` / `--color-surface` | `#FFFFFF` | Fondos de página, interior de tarjetas, inputs, modales, tablas |

**ESCALAS PERMITIDAS**: Solo las definidas en `DESIGN.md` (blue-50 a blue-950, yellow-50 a yellow-600, white-50).
**PROHIBIDO ABSOLUTO**: `slate-*`, `gray-*`, `zinc-*`, `neutral-*`, `stone-*`, hex inline arbitrarios, `bg-slate-900`, `text-gray-600`, degradados no documentados.

### 5.3 Tipografía — Jerarquía Inmutable

| Rol | Fuente | Fallback | Peso | Transform |
|-----|--------|----------|------|-----------|
| **Display / H1 Hero** | `Anton` | `Bebas Neue`, sans-serif | 700-800 | `uppercase`, `tracking-tight` |
| **Subheading / Badge / Metric** | `Bebas Neue` | `IBM Plex Sans`, sans-serif | 600-700 | `uppercase`, `tracking-wide` |
| **Body / UI / Input** | `IBM Plex Sans` | `Inter`, system-ui, sans-serif | 400-600 | `normal` |
| **Mono / Data / Price / Tracking** | `Geist Mono` | `JetBrains Mono`, `Fira Code`, ui-monospace | 500-700 | `tabular-nums` |

---

## 6. Principios de UX Operativa (Diseño al Servicio de la Logística)

1. **Velocidad percibida > Velocidad real**: Skeleton loaders, optimistic UI, prefetch rutas OSRM.
2. **Cero ambiguity en precios**: Tabla visible, `Math.ceil` explicado, sin sorpresas en checkout.
3. **Rastreo vivo por defecto**: WebSocket / polling < 10s, mapa Leaflet con rider real, ETA dinámico.
4. **WhatsApp como canal nativo**: Click-to-chat en todo CTA secundario, notificaciones proactivas, historial en app.
5. **Accesibilidad = Inclusión operativa**: Rider con guantes usa touch targets 48px; comerciante mayor usa zoom 200%; screen reader lee estados de envío.
6. **Offline-first para riders**: Service Worker, IndexedDB cola de eventos, sync al reconectar.
7. **Métricas visibles**: OTIF, tiempo promedio, satisfacción — en dashboard cliente y interno.

---

## 7. Referencias Cruzadas (Single Source of Truth)

| Tema | Archivo Canónico | Qué Contiene |
|------|------------------|--------------|
| **Tarifas 2026 (tabla exacta)** | `docs/contexto/precios.md` | Rangos km, precios base, excedente, Math.ceil |
| **Lógica de Cálculo** | `src/lib/pricing.ts` | Funciones puras Express/LowCost, tests unitarios |
| **Esquema BD** | `prisma/schema.prisma` | Modelos `ServiceType`, `PricingRange`, `Shipment`, `Rider`, `Zone` |
| **Sistema de Diseño Completo** | `DESIGN.md` | Tokens, componentes, layout, motion, a11y, homepage structure |
| **Reglas Agentes IA** | `AGENTS.md` | Protocolo iterativo, tonos, restricciones, checklist DoD |
| **Arquitectura & Roadmap** | `PROJECT.md` | Stack Next.js 16, milestones, DoD por página/componente |
| **Guía Desarrollador/IA** | `README.md` | Onboarding, módulos, comandos, deploy, contribuir |
| **Errores Conocidos** | `docs/contexto/errores-conocidos.md` | Turbopack, ESLint, Prisma starters, tests, TODO MDQ |
| **Decisiones Arquitectónicas (ADR)** | `docs/contexto/decisiones.md` | Por qué Next.js 16, por qué OSRM self-hosted, por qué pnpm |

---

## 8. Glosario Mínimo de Términos MDQ

| Término | Definición Operativa |
|---------|---------------------|
| **Hub / CD** | Centro de Distribución en Friuli 1972. Punto de consolidación, carga, descarga, talleres. |
| **Rider** | Empleado propio (no gig) que opera moto/utilitario. Lleva app nativa, GPS, scanner QR. |
| **Express** | Servicio door-to-door < 90 min. Asignación inmediata. Precio por distancia. |
| **LowCost** | Servicio multi-entrega ruteado (OSRM) en ventana 24h. Precio por distancia + eficiencia ruta. |
| **Flex** | Integración nativa MercadoLibre Flex. Retiro en hub / domicilio → Entrega SLA ML. |
| **3PL** | Third Party Logistics: Almacenaje + Pick/Pack + Envío. Para PyMEs que tercerizan logística. |
| **OTIF** | On Time In Full — KPI principal. % envíos entregados en plazo y completos. Target > 99%. |
| **Math.ceil real** | Redondeo hacia arriba ENTERO en excedente +10km. 10.1 km = 11 km facturados. |
| **Zona Roja** | Área con restricción vehicular / peatonal / eventos (ej. Güemes fin de semana, rambla verano). |
| **Al toque** | Inmediatamente, ya, ahora mismo. Uso en copy: "Te avisamos al toque". |

---

## 9. Checklist de Cumplimiento (Para Agentes y Revisores y QA)

Antes de aprobar CUALQUIER entrega (código, copy, diseño, config):

- [ ] **Voseo rioplatense** en todos los strings user-facing (verbos, pronombres, expresiones)
- [ ] **Referencias MDQ** reales (Güemes, Friuli 1972, Playa Grande, Punta Mogotes, Chauvín, Puerto, Batán, Camet)
- [ ] **Año 2026** en tarifas, vigencia, fechas operativas
- [ ] **Paleta 3 colores** únicamente (tokens `brand-blue-*`, `brand-yellow-*`, `brand-white-*`)
- [ ] **Logotipo inalterable** (archivo maestro, safe-area, sin recoloreo)
- [ ] **Tipografía** Anton / Bebas Neue / IBM Plex Sans / Geist Mono según jerarquía
- [ ] **Fuente de verdad tarifas**: `docs/contexto/precios.md` + `src/lib/pricing.ts` + BD `PricingRange`
- [ ] **Math.ceil** en +10km (tests unitarios pasando)
- [ ] **Double Bezel** en tarjetas contenido secciones blancas
- [ ] **CTA Nested Pill** en botones primarios
- [ ] **Alternancia secciones** Azul / Blanco / Blue-50 (nunca dos iguales seguidas)
- [ ] **A11y AA**: focus-visible, skip link, heading structure, alt text, contrast
- [ ] **Responsive** 320px–1920px, touch targets 48px, mobile-first
- [ ] **Performance** Lighthouse ≥ 90 (Next.js 16, Turbopack, Edge donde aplique)
- [ ] **Build pasa**: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`
- [ ] **Lint pasa**: `pnpm run lint`

---

*Última actualización: 2026-07-20 | Versión: 1.0 | Owner: Product & Brand Team | Revisión: Trimestral o ante cambio de marca/tarifas/stack*