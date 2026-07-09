# 🤖 Reglas del Proyecto para Agentes de IA (AGENTS.md)

Este archivo define las reglas de comportamiento, convenciones de código y principios de diseño específicos para cualquier agente que trabaje en el repositorio de **Envíos Dos Ruedas**.

---

## 📌 Contexto General del Proyecto
*   **Proyecto:** Envíos Dos Ruedas (Logística de última milla, mensajería y soluciones E-Commerce).
*   **Ubicación Principal:** Mar del Plata, Argentina.
*   **Dominio Técnico:** Logística local Same-Day, integraciones de MercadoLibre Flex, y ruteo LowCost.
*   **Año Operativo:** 2026 (todas las tarifas y fechas de vigencia son de 2026).

---

## 🗂️ Mapa de Archivos Críticos (Leer Antes de Editar)

El agente debe consultar estos archivos **antes** de modificar lógica de negocio:

| Archivo | Propósito |
|---|---|
| `docs/contexto/precios.md` | **Fuente de verdad de tarifas** — rangos de precios por km por servicio |
| `src/lib/pricing.ts` | Funciones puras de cálculo de precios (Express y LowCost) |
| `prisma/schema.prisma` | Modelo de datos — entidad `PricingRange` |
| `src/app/globals.css` | Variables CSS, tokens de color, utilidades de glow/sombra |
| `tailwind.config.ts` | Tokens de design system: `brand-blue`, `brand-yellow`, fuentes |
| `DESIGN.md` | Sistema de diseño documentado (colores, tipografías, componentes) |
| `docs/contexto/` | Contexto de negocio: precios, servicios, zonas operativas |

---

## 🛠️ Reglas de Código y Arquitectura

1.  **TypeScript Estricto:** Todo el código nuevo debe estar escrito en TypeScript, evitando el uso de `any` siempre que sea posible.
2.  **Next.js App Router (React 19):**
    *   Usa componentes de servidor por defecto (`Server Components`).
    *   Usa la directiva `'use client'` al principio de los archivos solo cuando sea estrictamente necesario para interactivos (hooks como `useState`, `useEffect` o bibliotecas como `motion`).
3.  **Gestión de Dependencias:** Utiliza `pnpm` para todas las operaciones de instalación y ejecución.
4.  **Build Validation:** En Windows, ejecutar el build con: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`

---

## 💰 Reglas de Tarifas (CRÍTICO — No Inventar Valores)

Las tarifas provienen **exclusivamente** de la BD Prisma (`PricingRange`). Ver `docs/contexto/precios.md`.

### Lógica de Cálculo — Express
| Rango | Precio |
|---|---|
| 0–3 km | $3.700 ARS |
| 3–5 km | $4.600 ARS |
| 5–7 km | $6.100 ARS |
| 7–10 km | $8.200 ARS |
| +10 km | $8.200 + `Math.ceil(km − 10) × $1.000` |

### Lógica de Cálculo — LowCost
| Rango | Precio |
|---|---|
| 0–3 km | $3.000 ARS |
| 3–5 km | $4.000 ARS |
| 5–7 km | $5.300 ARS |
| 7–10 km | $7.000 ARS |
| +10 km | $7.000 + `Math.ceil(km − 10) × $700` |

> ⚠️ El excedente de +10 km usa **`Math.ceil()`** — se cobra el km entero completo, sin prorrateo. Si el viaje mide 10.3 km, se cobra 1 km adicional entero.

---

## 🗺️ Estructura del Código

```
src/
├── app/                        # Rutas Next.js App Router
│   ├── cotizar/
│   │   ├── express/page.tsx    # Página cotizador Express
│   │   └── lowcost/page.tsx    # Página cotizador LowCost
│   └── servicios/              # Detalles de servicios
├── components/
│   ├── cotizar/
│   │   ├── express/            # CotizadorExpressHero, CotizadorExpressForm
│   │   └── lowcost/            # CotizadorLowCostHero, CotizadorLowCostForm
│   └── ui/                     # Componentes compartidos (AddressAutocomplete, etc.)
├── hooks/
│   └── useOSRMRoute.ts         # Hook para calcular rutas reales vía OSRM
└── lib/
    └── pricing.ts              # Funciones puras de cálculo de tarifas
```

---

## 🎨 Reglas de Estilo CSS y UI (Tailwind CSS v4)

1.  **Uso del Sistema de Temas:**
    *   No utilices colores en formato Hex o Tailwind genérico ad-hoc en los componentes si existen variables oficiales.
    *   **Azul Principal:** Usa `bg-brand-blue` o `text-brand-blue` (refiere a `#0636A5`).
    *   **Amarillo Acento:** Usa `bg-brand-yellow` o `text-brand-yellow` (refiere a `#FFEC01`).
    *   **Neutros:** `slate-50` para fondos claros, `slate-900`/`slate-950` para fondos oscuros.
2.  **Sombras y Brillos:**
    *   Aplica efectos de brillo definidos en `src/app/globals.css` como `glow-blue`, `glow-yellow`, `glow-blue-lg`, `glow-yellow-lg`.
    *   Utiliza las sombras de acento como `shadow-accent-sm`, `shadow-accent-md`, `shadow-accent-lg`.
3.  **Bordes y Formas:**
    *   Usa esquinas suaves y redondeadas preferentemente con `rounded-2xl` o `rounded-3xl` en tarjetas principales.
4.  **Tipografías del Sistema:**
    *   Usa `font-display` (Anton) para títulos principales (H1, H2 de gran tamaño).
    *   Usa `font-subheading` (Bebas Neue) para subtítulos rápidos, números destacados o badges.
    *   Usa `font-sans` (Inter) para textos descriptivos y cuerpo de la interfaz.

---

## 🗣️ Tono de Voz y Contenido

1.  **Modismos locales de Argentina:** Al redactar copys, botones, mensajes del chatbot o textos descriptivos para el usuario final, utiliza modismos locales (voseo): "Vos elegís", "Ingresá tus datos", "Contactanos", "Envíanos".
2.  **Contextualización:** El servicio se brinda exclusivamente en Mar del Plata. Haz mención a zonas locales ("Zona Güemes", "Centro de Distribución", "Constitución", "Puerto") en ejemplos o datos simulados.
3.  **Año de Referencia:** El año de vigencia operativa y de tarifas es **2026**.

---

## 📸 Reglas para Prompts de Imágenes (Nano Banana)

Al redactar o proponer prompts de imágenes para cualquier parte del proyecto, usa las siguientes dos estructuras oficiales de la skill:
1.  **Imagen Nueva (Sin Referencias):** `[Sujeto y descripción detallada] + [Estilo artístico/visual] + [Composición/Ángulo de cámara] + [Iluminación y atmósfera] + [Paleta de colores específica]`
2.  **Con Referencia (Logos, Personajes o Estilo):** `[Acción/Transformación] + [Referencia específica] + [Cambios o integración] + [Contexto del entorno] + [Consistencia de marca]`
