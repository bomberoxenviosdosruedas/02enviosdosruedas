# Envíos DosRuedas

**Logística de última milla, mensajería urbana y soluciones e-commerce en Mar del Plata (General Pueyrredón).**  
Año operativo: **2026** · Flota especializada en motos · +7 años de trayectoria en la ciudad.  
Sede Operativa: **Friuli 1972, Mar del Plata** · Liderazgo: **Matías Nicolás Cejas** (Fundador & CEO).

---

## 🚀 Qué Hace Este Proyecto

Plataforma comercial y cotizador inteligente para los servicios logísticos de **Envíos DosRuedas**. Todos los servicios operan bajo emisión de **Factura C** y se adaptan a las necesidades de comerciantes, PyMEs y vendedores e-commerce.

### 📦 Menú Oficial de Servicios

| Servicio | Tipo de Servicio | Dinámica y Horarios de Corte | Tarifas y Beneficios Clave |
| :--- | :--- | :--- | :--- |
| **Express** | Por Demanda Prioritario | Solicitud con **mín. 2 horas** de anticipación. Elección libre de rango u horario límite (ej. "antes de las 17:00hs"). Corte: 15:00hs. | Tarifa zonificada ($3.700 a $8.200 / Z5: $1.000/km). Ideal para urgencias. |
| **LowCost** | Ruteo Diario Económico | Solicitud con **mín. 2 horas** de anticipación. Pedidos hasta las **13:00hs** se entregan antes de las **19:00hs** (sin rango fijo). | Tarifa zonificada súper económica ($3.000 a $7.000 / Z5: $700/km). |
| **Mercado Envíos Flex** | Same-Day Mercado Libre | Colecta gratuita. Ventas concretadas hasta las **15:00hs** se entregan el mismo día antes de las **20:00hs**. | **Estructurado en 3 Niveles:**<br>• *N1 (1-4 envíos/día):* Tarifario estándar ($3.000 - $7.000).<br>• *N2 (5+ envíos/día):* Tope fijo $6.500 en Zonas 4 y 5.<br>• *N3 (10+ envíos/día):* **Tarifa Plana de $4.500** todo MDP + 2da visita y reprogramación **100% GRATIS**. |
| **Plan E-Commerce Same Day (Fulfillment 3PL)** | Almacenamiento & Despacho 3PL | Almacenamiento en Friuli 1972. Recepción de pedidos hasta las **15:00hs** para entrega el mismo día (franja 9:00 a 20:00hs). | **Tarifa Plana Integral: $6.000** a todo Mar del Plata. Incluye stock, picking y embalaje básico. 2da visita **100% Bonificada**. |
| **Plan E-Commerce 24hs** | Distribución Next Day | Retiro hoy, entrega mañana en franja abierta (9:00 a 20:00hs). Retiro diario gratis con +10 paquetes. | **Tarifa Plana según Escalado Mensual:**<br>• *Inicial (1-199 env/mes):* $3.800<br>• *Pro (200-1.199 env/mes):* $3.500<br>• *Elite (1.200-1.999 env/mes):* $3.200<br>• *Partner (+2.000 env/mes):* $3.000<br>💡 **Opción Drop-Off:** 20% OFF directo entregando paquetes en Friuli 1972. |
| **Cuenta Corriente Flexible** | Exclusivo PyMEs / Empresas | Recepción hasta las **15:00hs** con mín. 2hs de anticipación y elección de rango horario. | **Abona tarifa económica LowCost pero goza de los beneficios de servicio Express.** Liquidación personalizada (diaria, semanal, quincenal o mensual). Factura C. |
| **Gestion de Cobranzas** | Contrareembolso en Destino | Recaudación en mano del valor del producto en la puerta del comprador. | **0% Comisión (GRATIS).** Rendición en el día, 24hs o semanal por transferencia o efectivo con arqueo detallado. |

---

## ⚙️ Reglas Operativas y Condiciones Adicionales

* **Facturación:** Emisión exclusiva de **Factura C** para todos los clientes y servicios.
* **Cobro en Destino (Contrareembolso):** Totalmente **sin costo extra (0% comisión)** en Express, LowCost, Cta. Cte., y E-Commerce.
* **Políticas de 2da Visita (Cliente Ausente):**
  * *Express / LowCost:* Se cobra como viaje nuevo.
  * *Cuenta Corriente:* 50% del valor original.
  * *Flex ML:* Nivel 1 (50%), Nivel 2 (Z1 gratis, resto 50%), Nivel 3 (**100% Gratis**).
  * *E-Commerce (Same Day 3PL y 24hs):* **100% Bonificada**.
* **Clima Adverso (Lluvia / Calzada Mojada):**
  * Recargo estándar del **50%** para Express, LowCost y Cuenta Corriente.
  * Recargo reducido del **30%** para Flex y E-Commerce Same Day (3PL).
* **Tolerancia de Espera:** 10 minutos de gracia en domicilio. Luego, +$2.200 cada 10 minutos adicionales.
* **Bulto Excedente:** Mayor a 5kg o 40x40x30cm adiciona desde $1.800 (sujeto a límite físico seguro de moto).
* **Devoluciones por Rechazo de Compra:** Si el comprador se arrepiente en puerta, el envío de ida se abona pero la devolución al local es **100% SIN CARGO**.

---

## 🛠 Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, React 19, Turbopack) |
| **Lenguaje** | TypeScript 5 (strict mode) |
| **Estilos** | Tailwind CSS v4 (`@theme` en `src/app/globals.css`) |
| **Animaciones** | Motion (`motion/react`) + GSAP |
| **Base de Datos** | Prisma ORM + PostgreSQL 16 |
| **Mapas/Geocoding** | Leaflet + OpenStreetMap + OSRM |
| **Gestor Paquetes** | **pnpm** (único autorizado) |
| **Testing** | Vitest (unitario) + Playwright (E2E) |
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
cd 02enviosdosruedas
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
| `GOOGLE_MAPS_API_KEY` | ✅ | Para AddressAutocomplete (Places API + Geocoding) |
| `NEXT_PUBLIC_SITE_URL` | ✅ | URL canónica (`https://enviosdosruedas.com`) |
| `GA4_MEASUREMENT_ID` | ⚪ | Google Analytics 4 (`G-XXXXXXXXXX`) |
| `WHATSAPP_NUMBER` | ⚪ | WhatsApp Business Oficial (`542236602699`) |

---

## 📦 Comandos Útiles

| Acción | Comando |
| :--- | :--- |
| **Typecheck** | `pnpm typecheck` |
| **Lint** | `pnpm exec eslint <archivos>` |
| **Tests** | `pnpm exec vitest run <ruta>` |
| **Build** | `pnpm build` |
| **Prisma Studio** | `pnpm prisma studio` |
| **Seed tarifas** | `pnpm prisma db seed` |

---

## 🎨 Sistema de Diseño (Resumen)

* **Paleta Corporativa:**
  * Azul Corporativo: `#0950F6` (Base e identidad)
  * Amarillo Accent: `#FFEC01` (Llamados a la acción / CTA ≤15%)
  * Verde E-Commerce: `#10B981` (Planes de Fulfillment / E-Commerce)
  * Blanco: `#FFFFFF` / Gris Oscuro
* **Tipografía:** Anton (Display), Bebas Neue (Subtítulos/CTA), Outfit (Body), Geist Mono (Métricas).
* **Primitivas UI:** `DoubleBezelCard`, `CTANestedPill`, `InputField`, `HeroProceduralBackground`, `Stepper`, `BentoGrid`, `Badge`, `RadioCardGroup`.

---

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Rutas (App Router)
│   ├── cotizar/           # Cotizador Express y LowCost
│   ├── servicios/         # Landings de servicios
│   ├── nosotros/          # Empresa, FAQ, Cobertura
│   ├── contacto/          # Formulario + WhatsApp
│   ├── api/               # Endpoints y Webhooks
│   └── layout.tsx         # Layout raíz + fuentes + metadata
├── actions/               # Server Actions (cotización y reservas)
├── components/            # UI Primitivas y módulos
├── lib/
│   ├── pricing.ts         # Motor de cálculo de tarifas (Single Source of Truth)
│   ├── whatsapp.ts        # Integración de enlaces inteligentes
│   └── utils.ts           # Helpers
└── proxy.ts               # Middleware Next.js 16
docs/knowledge_base/       # Base de conocimiento canónica
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
