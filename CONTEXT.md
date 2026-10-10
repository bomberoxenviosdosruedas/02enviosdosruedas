# CONTEXT.md — Glosario Core y Entidades de Dominio (Envíos DosRuedas)

**Proyecto:** Envíos DosRuedas (2026) — Mar del Plata, General Pueyrredón  
**Fuente de verdad para vocabulario:** Este archivo + `docs/marketing/glosario.md`  
**Regla:** Usar términos tal como definidos aquí. No inventar sinónimos ni traducir terminología establecida.

---

## 1. Entidades de Dominio Core

| Término | Definición | Sinónimos NO usar |
|---------|------------|-------------------|
| **Envío** | Unidad mínima de servicio: un paquete recolectado y entregado | Paquete, bulto, encomienda, shipment |
| **Servicio** | Tipo de producto logístico (Express, LowCost, Flex, E-Commerce Same Day, E-Commerce 24hs, Cuenta Corriente, Cobranzas) | Producto, modalidad, plan |
| **Franja Horaria** | Ventana de 3 horas elegida por el cliente para Express / Cuenta Corriente | Ventana, rango, horario estimado |
| **Corte** | Hora límite para recibir pedidos y que entren en la operación del día | Deadline, cutoff, límite |
| **Recolección** | Acto de retirar el paquete en origen (domicilio / punto drop-off) | Pickup, retiro, colecta |
| **Entrega** | Acto de dejar el paquete en destino (puerta del destinatario) | Drop-off, entrega final, last mile |
| **Segunda Visita** | Reintento de entrega tras ausencia del destinatario | Reentrega, reintento |
| **Rendición** | Liquidación de fondos recaudados (contreembolso) al cliente | Liquidación, arqueo, cierre |
| **Tarifa Plana** | Precio fijo por zona/servicio sin variable por distancia | Precio único, flat rate |
| **Excedente** | Kilómetros adicionales fuera del radio base (10-20 km) | Adicional, extra, sobreprecio |
| **Periferia** | Zonas fuera del radio urbano estándar (km de ruta) | Afueras, extrarradio, zona extendida |

---

## 2. Servicios — Vocabulario Oficial

| Servicio | Nombre Corto | Descripción Clave |
|----------|--------------|-------------------|
| **Express** | Express | Demanda prioritario, franja 3hs a elección, corte 15:00hs |
| **LowCost** | LowCost | Reparto programado diario, corte 13:00hs → entrega <19:00hs |
| **Mercado Envíos Flex** | Flex | Same-day ML, corte 15:00hs → entrega <20:00hs, 3 niveles (N1/N2/N3) |
| **E-Commerce Same Day (3PL)** | Fulfillment Same Day | Almacenamiento Friuli 1972, picking, embalaje, tarifa plana MDP |
| **E-Commerce 24hs** | Next Day | Retiro hoy, entrega mañana, Drop-Off 20% OFF |
| **Cuenta Corriente Flexible** | Cuenta Corriente | PyMEs/Empresas, Express + liquidación personalizada (diaria/semanal/quincenal/mensual) |
| **Gestión de Cobranzas** | Cobranzas | Contrareembolso en destino, rendición día/24hs/semanal |

---

## 3. Geografía — Mar del Plata / General Pueyrredón

| Concepto | Definición |
|----------|------------|
| **Radio Urbano Base** | Hasta 10 km desde Friuli 1972 (incluido en tarifa base) |
| **Excedente 10-20 km** | +$1.000/km (Express) / +$700/km (LowCost) — `Math.ceil` |
| **Periferia** | >20 km o rutas específicas — $1.000/km de ruta (todos los servicios) |
| **Zonas Flex (ML)** | Nivel 1: 1-4 envíos/día tarifario estándar / Nivel 2: 5+ tope fijo Z4-Z5 / Nivel 3: 10+ tarifa plana |
| **Sede Operativa** | Friuli 1972, Mar del Plata — Punto de partida/retorno flota |
| **Cobertura** | Partido de General Pueyrredón completo |

---

## 4. Reglas Operativas (Guardrails)

| Regla | Valor / Descripción |
|-------|---------------------|
| **Facturación** | Factura C obligatoria para todos los clientes y servicios |
| **Peso Estándar** | `STANDARD_WEIGHT_KG = 5` kg o 40×40 cm sin recargo |
| **Límite Peso Máximo** | No se publica límite máximo (gestión caso a caso) |
| **Clima Adverso** | Recargo aplicable según tipo de servicio (lluvia/calzada mojada) |
| **Tolerancia Espera** | 10 minutos de gracia en domicilio |
| **Corte Express** | 15:00hs (pedidos con min. 2hs anticipación) |
| **Corte LowCost** | 13:00hs (entrega antes de 19:00hs sin franja) |
| **Corte Flex** | 15:00hs (colecta gratis, entrega <20:00hs) |
| **Corte Fulfillment** | 15:00hs (recepción pedidos para entrega same-day) |
| **Corte Next Day** | Retiro diario gratis con +10 paquetes |
| **Rendición Contrareembolso** | Cierre día / 24hs / semanal — **Nunca inmediata** |
| **2da Visita Flex N3** | 100% GRATIS |
| **2da Visita Fulfillment** | 100% BONIFICADA |

---

## 5. Flota y Operación

| Concepto | Detalle |
|----------|---------|
| **Flota** | Motos especializadas última milla |
| **Trayectoria** | +7 años en Mar del Plata (desde 2019) |
| **Año Operativo** | 2026 |
| **Liderazgo** | Matías Nicolás Cejas (Fundador & CEO) |
| **Horario Operativo** | Según franjas de cada servicio |

---

## 6. Precios — Referencia Canónica

**Fuente de verdad:** `docs/contexto/precios.md` + `prisma/seed.ts` + `src/lib/pricing.ts` (fallback `PriceRange`)

| Variable | Descripción |
|----------|-------------|
| `PriceRange` | Tabla Prisma: distancia (km) → precio base por servicio |
| `pricing.ts` | Fallback TypeScript si DB no disponible |
| `STANDARD_WEIGHT_KG` | 5 kg (constante en código) |
| `EXCEDENTE_EXPRESS_KM` | 1000 ARS/km (10-20 km) |
| `EXCEDENTE_LOWCOST_KM` | 700 ARS/km (10-20 km) |
| `PERIFERIA_KM` | 1000 ARS/km ruta (>20 km) |

---

## 7. Integraciones Técnicas

| Integración | Propósito | Detalle |
|-------------|-----------|---------|
| **Google Places API** | Autocomplete direcciones (origen/destino) | Proxied via Server Action `addressAutocomplete` |
| **Google Directions API** | Cálculo distancia/ruta real km | Proxied via Server Action `calculateRoute` |
| **Leaflet** | Mapa visual en cotizador | Solo frontend, sin API key |
| **WhatsApp Business** | Notificaciones + contacto | `542236602699` — `src/lib/whatsapp.ts` |
| **Prisma + PostgreSQL 16** | Persistencia tarifas, pedidos, clientes | `prisma/schema.prisma` |
| **Vercel** | Deploy + Edge Functions | `vercel.json` config |

---

## 8. Stack Técnico (Resumen)

| Capa | Tecnología |
|------|------------|
| **Framework** | Next.js 16 (App Router, React 19) |
| **Lenguaje** | TypeScript 5 (strict mode) |
| **Estilos** | Tailwind CSS v4 (`@theme` en `src/app/globals.css`) |
| **Animaciones** | GSAP + `motion/react` (`useReducedMotion()`) |
| **Base de Datos** | Prisma ORM + PostgreSQL 16 |
| **Testing** | Vitest + JSDOM |
| **Package Manager** | pnpm 9+ (único) |
| **Deploy** | Vercel |

---

## 9. Convenciones de Código

| Convención | Regla |
|------------|-------|
| **Naming** | `kebab-case` archivos, `PascalCase` componentes, `camelCase` vars/funciones |
| **Server Actions** | Sufijo `Action` (ej: `calculateQuoteAction`) |
| **Componentes UI** | En `src/components/ui/` — primitivas reutilizables |
| **Hooks** | Prefijo `use` — en `src/hooks/` |
| **Librerías** | En `src/lib/` — lógica pura, sin UI |
| **Tests** | `.test.ts/.test.tsx` junto al código o `src/test/` setup |
| **TypeScript** | `strict: true` — no `any`, preferir `unknown` |
| **Tailwind** | Solo tokens canónicos (`brand-blue-*`, `brand-yellow-*`, `white`, `error-*`) |

---

## 10. Documentación Vinculada

| Archivo | Qué contiene |
|---------|--------------|
| `docs/marketing/glosario.md` | Glosario extendido términos comerciales/logísticos |
| `docs/marketing/decisiones.md` | Log de decisiones owner + técnicas |
| `docs/adr/` | Architecture Decision Records |
| `docs/contexto/precios.md` | Tarifas 2026 detalle completo |
| `docs/contexto/arquitectura.md` | Decisiones arquitectónicas |
| `docs/contexto/convenciones.md` | Convenciones código extendidas |
| `docs/contexto/decisiones.md` | ADR / decisiones técnicas |
| `docs/contexto/errores-conocidos.md` | Gotchas y workarounds |
| `docs/contexto/flujo-de-trabajo.md` | Flujo desarrollo (git, PR, deploy) |
| `docs/contexto/glosario.md` | Glosario técnico |
| `DESIGN.md` | Sistema de diseño completo (116 KB) |
| `AGENTS.md` | Configuración agentes, workflow, verificación |
| `PROJECT.md` | Resumen técnico proyecto |
| `PRODUCT.md` | Especificación producto/servicios |