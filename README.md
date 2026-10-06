# Envíos DosRuedas

**Logística de última milla, mensajería urbana y soluciones e-commerce en Mar del Plata (General Pueyrredón).**  
Año operativo: **2026** · Flota especializada en motos · +7 años de trayectoria en la ciudad.  
Sede Operativa: **Friuli 1972, Mar del Plata** · Liderazgo: **Matías Nicolás Cejas** (Fundador & CEO).

---

## 📚 Documentación de Arquitectura Técnica

La documentación de arquitectura del sistema está centralizada en el directorio [`docs/architecture/`](./docs/architecture/README.md):

- 📐 [01 — Visión General del Sistema (System Overview)](./docs/architecture/01-system-overview.md): Stack (Next.js 16, React 19, Tailwind v4, Prisma, Vitest) y estructura de `src/`.
- 💰 [02 — Motor de Cotización y Dominio (Domain & Pricing Engine)](./docs/architecture/02-domain-pricing-engine.md): Algoritmo de cálculo de precios, franjas horarias y guardrails.
- ⚡ [03 — Server Actions e Integraciones (Server Actions & APIs)](./docs/architecture/03-server-actions-and-integrations.md): Server Actions, proxy de Google Places/Routes y resiliencia con `safeCache`.
- 🎨 [04 — Sistema de Diseño e Interfaces (UI & Design System)](./docs/architecture/04-ui-design-system.md): Tokens cromáticos (`#0950F6`, `#FFEC01`), tipografías, Double-Bezel y accesibilidad.
- 🧪 [05 — Protocolo de Verificación y Testing (Verification & QA Protocol)](./docs/architecture/05-testing-verification-protocol.md): Niveles de pruebas N0–N3, Vitest JSDOM y TypeScript strict mode.

---

## 🚀 Menú Oficial de Servicios

| Servicio | Tipo de Servicio | Dinámica y Horarios de Corte | Tarifas y Beneficios Clave |
| :--- | :--- | :--- | :--- |
| **Express** | Por Demanda Prioritario | Solicitud con **mín. 2 horas** de anticipación. Franja horaria a elección (3 hs). Corte: 15:00hs. | Tarifa por distancia (`pricing.ts` / `PriceRange`). Excedente 10-20 km: +$1.000/km (`Math.ceil`). Periferia: $1.000/km de ruta. |
| **LowCost** | Reparto Programado Diario | Solicitud con **mín. 2 horas** de anticipación. Pedidos hasta las **13:00hs** se entregan antes de las **19:00hs** (sin franja). | Tarifa económica por distancia. Excedente 10-20 km: +$700/km (`Math.ceil`). Periferia: $1.000/km de ruta. |
| **Mercado Envíos Flex** | Same-Day Mercado Libre | Colecta gratuita. Ventas concretadas hasta las **15:00hs** se entregan el mismo día antes de las **20:00hs**. | **Estructurado en 3 Niveles:**<br>• *N1 (1-4 envíos/día):* Tarifario estándar.<br>• *N2 (5+ envíos/día):* Tope fijo en Zonas 4 y 5.<br>• *N3 (10+ envíos/día):* Tarifa Plana. 2da visita **100% GRATIS**. |
| **Plan E-Commerce Same Day (Fulfillment 3PL)** | Almacenamiento & Despacho 3PL | Almacenamiento en Friuli 1972. Recepción de pedidos hasta las **15:00hs** para entrega el mismo día. | Tarifa Plana Integral a todo Mar del Plata. Incluye stock, picking y embalaje básico. 2da visita **100% Bonificada**. |
| **Plan E-Commerce 24hs** | Distribución Next Day | Retiro hoy, entrega mañana en franja abierta. Retiro diario gratis con +10 paquetes. | Tarifa Plana según escalado mensual. **Opción Drop-Off:** 20% OFF directo entregando paquetes en Friuli 1972. |
| **Cuenta Corriente Flexible** | Exclusivo PyMEs / Empresas | Recepción hasta las **15:00hs** con mín. 2hs de anticipación y elección de rango horario. | Beneficios de servicio Express con liquidación personalizada (diaria, semanal, quincenal o mensual). Factura C. |
| **Gestión de Cobranzas** | Contrareembolso en Destino | Recaudación en mano del valor del producto en la puerta del comprador. | Rendición en el día, 24hs o semanal por transferencia o efectivo con arqueo detallado. |

---

## ⚙️ Reglas Operativas y Guardrails de Negocio

* **Facturación:** Emisión de **Factura C** para todos los clientes y servicios.
* **Cobro en Destino (Contrareembolso):** Rendición pactada al cierre del día, 24hs o semanal. No existe rendición inmediata.
* **Franja Horaria Express:** Express no promete duraciones estimadas ("60-90 min" o "menos de 2 hs"); es una **franja horaria de 3 hs a elección**.
* **Umbral Único de Peso:** Hasta **5 kg o 40 × 40 cm** (`STANDARD_WEIGHT_KG = 5`) sin recargo. No se publica límite máximo de peso.
* **Clima Adverso (Lluvia / Calzada Mojada):** Recargo aplicable según el tipo de servicio.
* **Tolerancia de Espera:** 10 minutos de gracia en domicilio.

---

## 🛠 Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, React 19) |
| **Lenguaje** | TypeScript 5 (strict mode) |
| **Estilos** | Tailwind CSS v4 (`@theme` en `src/app/globals.css`) |
| **Animaciones** | GSAP (GreenSock) + `motion/react` (con `useReducedMotion()`) |
| **Base de Datos** | Prisma ORM + PostgreSQL 16 (`PriceRange` + fallback `pricing.ts`) |
| **Mapas / Geocoding** | Google Places & Directions API (Proxied via Server Actions) + Leaflet |
| **Gestor Paquetes** | **pnpm** (único autorizado) |
| **Testing** | Vitest (unitario e integración) + JSDOM |
| **Deploy** | Vercel |

---

## ⚡ Inicio Rápido

### Prerrequisitos
* Node.js 20+ LTS
* pnpm 9+
* PostgreSQL 16 (local o remoto)

### Instalación

```bash
# Clonar e instalar dependencias
git clone <repo-url>
cd 02enviosdosruedassetiembre
pnpm install

# Configurar base de datos
cp .env.example .env
# Editar .env con DATABASE_URL y variables necesarias

# Generar cliente Prisma y aplicar esquema
pnpm prisma generate
pnpm prisma db push

# Seed de tarifas vigentes 2026
pnpm prisma db seed

# Servidor de desarrollo
pnpm dev
```

### Variables de Entorno (`.env`)

| Variable | Requerida | Descripción |
| :--- | :---: | :--- |
| `DATABASE_URL` | ✅ | Conexión PostgreSQL (`postgresql://user:pass@localhost:5432/enviosdosruedas`) |
| `GOOGLE_MAPS_API_KEY` | ✅ | Para AddressAutocomplete & Directions API proxied |
| `NEXT_PUBLIC_SITE_URL` | ✅ | URL canónica (`https://enviosdosruedas.com`) |
| `GA4_MEASUREMENT_ID` | ⚪ | Google Analytics 4 (`G-XXXXXXXXXX`) |
| `WHATSAPP_NUMBER` | ⚪ | WhatsApp Business Oficial (`542236602699`) |

---

## 📦 Comandos Útiles

| Acción | Comando |
| :--- | :--- |
| **Typecheck** | `pnpm typecheck` |
| **Lint** | `pnpm exec eslint <archivos>` |
| **Tests CI** | `pnpm exec vitest --run` |
| **Build** | `pnpm build` |
| **Prisma Studio** | `pnpm prisma studio` |
| **Seed tarifas** | `pnpm prisma db seed` |

---

## 🎨 Sistema de Diseño (Resumen)

* **Paleta Corporativa:**
  * Azul Corporativo: `#0950F6` (Base e identidad, techo de oscuridad permitido)
  * Amarillo Accent: `#FFEC01` (Llamados a la acción / CTA ≤15%)
  * Blanco: `#FFFFFF`
* **Tipografía:** Anton 400 (Display/Titulares), Bebas Neue 400 (Subtítulos/Eyebrows), Outfit (Body), Geist Mono (`tabular-nums` para precios y métricas).
* **Primitivas UI:** `DoubleBezelCard`, `CTANestedPill`, `InputField`, `RadioCardGroup`, `BentoGrid`, `HeroProceduralBackground`.

---

## 📁 Estructura del Proyecto

```
src/
├── actions/               # Server Actions (calculateQuoteAction, feedback, admin-imagenes)
├── app/                   # Rutas (App Router: cotizar, servicios, nosotros, contacto, api)
├── components/            # UI Primitivas (ui/) y módulos por página
├── hooks/                 # Hooks de estado e integración (cotizador, useGoogleRoute)
├── lib/                   # Motor de cotización (pricing.ts, promises.ts, whatsapp.ts, prisma.ts)
└── test/                  # Setup y utilidades de Vitest
docs/
├── architecture/          # Documentación de Arquitectura Técnica (01-05)
└── knowledge_base/        # Base de conocimiento canónica de negocio
```

---

## 📞 Contacto e Información Institucional

* **Base Operativa:** Friuli 1972, Mar del Plata, Buenos Aires, Argentina
* **Fundador & CEO:** Matías Nicolás Cejas
* **WhatsApp / Teléfono:** [+54 223 660-2699](https://wa.me/542236602699)
* **Email:** [MatiasCejas@enviosdosruedas.com](mailto:MatiasCejas@enviosdosruedas.com)
* **Web Oficial:** [www.enviosdosruedas.com](https://www.enviosdosruedas.com)

---
*Envíos DosRuedas 2026 — El Motor de su Última Milla en Mar del Plata* 🏍️📦
