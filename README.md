# Envíos DosRuedas

> **Logística de última milla y mensajería urbana en Mar del Plata (Partido de General Pueyrredón).**
> Año operativo **2026** · Flota propia de motos · +7 años de trayectoria.

---

## 🚀 Qué Hace Este Proyecto

Sitio comercial + cotizadores interactivos para los servicios de **Envíos DosRuedas**:

| Servicio | Descripción |
|---|---|
| **Express** | Cadetería prioritaria punto a punto, entrega 60–90 min, rango 3hs (corte 15:00). |
| **LowCost** | Envíos consolidados económicos, corte 13:00, entrega < 19:00 mismo día. |
| **Mercado Envíos Flex** | Logística Same-Day para vendedores de Mercado Libre (corte 15:00, entrega < 20:00). |
| **Depósito & Fulfillment (3PL)** | Almacenamiento en Friuli 1972, picking QR, despacho Same Day, DropOFF 20% OFF. |
| **Contrareembolso** | Cobro en mano en destino, $0 comisión, Factura C, rendición inmediata. |
| **Empresas Cuenta Corriente** | Liquidación quincenal Factura A, tarifas por volumen, atención ejecutiva WhatsApp. |

---

## 🛠 Stack Tecnológico

| Capa | Tecnología |
|---|---|
| **Framework** | Next.js 16 (App Router, React 19, Turbopack) |
| **Lenguaje** | TypeScript 5 (strict mode, cero `any`) |
| **Estilos** | Tailwind CSS v4 (`@theme` en `src/app/globals.css`) |
| **Animaciones** | Motion (`motion/react`, ex-Framer Motion) + GSAP |
| **Base de Datos** | Prisma ORM + PostgreSQL 16 |
| **Mapas/Geocoding** | Leaflet + OpenStreetMap + OSRM |
| **Gestor Paquetes** | **pnpm** (único autorizado) |
| **Testing** | Vitest (unitario) + Playwright (E2E) |
| **Deploy** | Vercel |

---

## ⚡ Inicio Rápido

### Prerrequisitos
- Node.js 20+ LTS
- pnpm 9+
- PostgreSQL 16 (local o remoto)

### Instalación

```bash
# Clonar e instalar dependencias
git clone <repo-url>
cd 02enviosdosruedassetiembre
pnpm install

# Configurar base de datos
cp .env.example .env
# Editar .env con DATABASE_URL y variables necesarias

# Generar cliente Prisma y empujar esquema
pnpm prisma generate
pnpm prisma db push

# (Opcional) Seed de tarifas 2026
pnpm prisma db seed

# Desarrollo
pnpm dev
# Windows si hot-reload falla: pnpm dev --webpack
```

### Variables de Entorno (`.env`)

| Variable | Requerida | Descripción |
|---|---|---|
| `DATABASE_URL` | ✅ | Conexión PostgreSQL (ej: `postgresql://user:pass@localhost:5432/enviosdosruedas`) |
| `GOOGLE_MAPS_API_KEY` | ✅ | Para `AddressAutocomplete` (Places API + Geocoding) |
| `NEXT_PUBLIC_SITE_URL` | ✅ | URL canónica (ej: `https://enviosdosruedas.com`) |
| `GA4_MEASUREMENT_ID` | Opcional | Google Analytics 4 (ej: `G-XXXXXXXXXX`) |
| `WHATSAPP_NUMBER` | Opcional | Número WhatsApp Business (ej: `542236602699`) |

---

## 📦 Comandos Útiles

| Acción | Comando |
|---|---|
| **Typecheck** | `pnpm typecheck` |
| **Lint** | `pnpm exec eslint <archivos>` |
| **Tests** | `pnpm exec vitest run <ruta>` / `pnpm exec vitest related <archivos> --run` |
| **Build** | `pnpm build` (Win: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`) |
| **Prisma Studio** | `pnpm prisma studio` |
| **Seed tarifas** | `pnpm prisma db seed` |

---

## 🎨 Sistema de Diseño (Resumen)

- **Paleta:** Azul `#0950F6` (techo oscuridad), Amarillo `#FFEC01` (CTA ≤15%), Blanco `#FFFFFF`.
- **Tipografía:** Anton (Display), Bebas Neue (Subtítulos/CTA), Outfit (Body), Geist Mono (Métricas).
- **Primitivas:** `DoubleBezelCard`, `CTANestedPill`, `InputField`, `HeroProceduralBackground`, `Stepper`, `BentoGrid`, `Badge`, `RadioCardGroup`.
- **Regla de oro:** Antes de escribir markup, **usa la primitiva**.

---

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Rutas (App Router)
│   ├── cotizar/           # Express, LowCost
│   ├── servicios/         # 7 landings de servicio
│   ├── nosotros/          # Sobre nosotros, FAQ, Redes
│   ├── contacto/          # Formulario + info base
│   ├── api/               # Webhooks
│   └── layout.tsx         # Root layout + fonts + metadata
├── actions/               # Server Actions (quote.ts)
├── components/
│   ├── ui/                # Primitivas (barril en index.ts)
│   ├── cotizar/
│   ├── servicios/
│   ├── nosotros/
│   └── contacto/
├── hooks/                 # Hooks de cliente
├── lib/
│   ├── pricing.ts         # Cálculo puro tarifas (fuente de verdad)
│   ├── analytics.ts       # GA4 + UTMs
│   ├── whatsapp.ts        # Generador links WhatsApp
│   └── utils.ts           # cn(), helpers
└── proxy.ts               # Middleware Next.js 16
prisma/
├── schema.prisma          # PriceRange + ServiceType
└── seed.ts                # Seed tarifas 2026
docs/knowledge_base/       # Documentación canónica (Single Source of Truth)
```

---

## 📚 Documentación Canónica

Toda la documentación técnica, de diseño, negocio y operativa vive en **`docs/knowledge_base/`**:

```
docs/knowledge_base/
├── 00-proyecto/           # Identidad, stack, tarifas 2026
├── 01-diseno/             # Design system completo (tokens, tipografía, hero, primitivas, motion, iconos, anti-patrones, deuda, plan)
├── 02-dominio/            # Glosario, decisiones, contexto SEO
├── 03-operaciones/        # Comandos, verificación, agents skills, issue tracker, triage
└── 04-referencia-rapida/  # Cheat sheet
```

> **Para agentes de IA:** Leer `AGENTS.md` (índice normativo) y la documentación correspondiente en `docs/knowledge_base/` antes de actuar.

---

## 🤝 Contribuir

1. Leer `AGENTS.md` y la sección relevante de `docs/knowledge_base/`.
2. Crear branch: `feat/descripcion-corta` o `fix/descripcion-corta`.
3. Cambios mínimos y atómicos. **Sin `any` en TypeScript.**
3. Verificar según nivel de riesgo (ver `AGENTS.md` → "Niveles de Verificación").
4. PR con descripción clara + checks pasando.

---

## 📞 Contacto

- **Base Operativa:** Friuli 1972, Mar del Plata
- **WhatsApp/Tel:** +54 223 660-2699
- **Email:** matiascejas@enviosdosruedas.com
- **Web:** https://enviosdosruedas.com

---

**Envíos DosRuedas** — Tu Partner Logístico en Mar del Plata 🏍️📦