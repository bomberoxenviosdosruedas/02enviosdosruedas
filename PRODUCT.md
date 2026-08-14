# PRODUCT.md — Contexto Canónico del Producto

## 1. Resumen Ejecutivo y Propósito
**Envíos DosRuedas** es la plataforma líder de logística de última milla, mensajería urbana y distribución para E-Commerce en **Mar del Plata y el Partido de General Pueyrredón** (Buenos Aires, Argentina).
Con más de 15 años de trayectoria operativa en las calles de la ciudad, combina flota propia (80+ motos y 20+ utilitarios), hub neurálgico en Friuli 1972, y tecnología moderna de ruteo y cotización para brindar un servicio confiable, transparente y con trato humano cercano.

- **Año Operativo Canónico:** 2026
- **Plataforma:** Web Responsiva (Mobile-first, Tablet, Desktop)
- **Stack Tecnológico:** Next.js 16 (App Router, React 19, RSC), TypeScript 5 strict, Tailwind CSS v4 (@theme), Prisma ORM + PostgreSQL, Framer Motion / GSAP, Leaflet + OSRM.
- **Gestor de paquetes exclusivo:** `pnpm`

---

## 2. Audiencia y Arquetipos de Usuario

1. **Comerciantes & Tiendas E-Commerce (B2B / Flex / 3PL)**
   - Vendedores de MercadoLibre Flex, tiendas online locales y distribuidores.
   - *Necesidad:* Cumplimiento estricto de SLA (< 90 min o same-day), integración con webhooks, despacho masivo (planilla batch), trazabilidad GPS y comprobante digital.
2. **Emprendedores & PyMEs de Mar del Plata**
   - Marcas de indumentaria, gastronomía seca, cosmética, repuestos y retail de zonas como Güemes, Centro, Chauvín, San Juan y Constitución.
   - *Necesidad:* Tarifas claras y económicas (LowCost consolidado 24h), retiro programado sin burocracia, atención personalizada por WhatsApp.
3. **Usuarios Particulares (C2C / Trámites / Mensajería Express)**
   - Vecinos que necesitan enviar llaves, documentación, compras personales o regalos entre barrios de la ciudad.
   - *Necesidad:* Cotización instantánea e intuitiva, pago contra entrega o MercadoPago, seguimiento en vivo del rider.

---

## 3. Propuesta de Valor y Diferenciadores Clave

- **Conocimiento Vial Local Real:** Ruteo adaptado a las dinámicas de MDQ (cortes, horarios pico, zonas de difícil acceso, eventos costeros) mediante perfiles OSRM customizados.
- **Flota Propia y Empleados en Blanco:** Riders contratados profesionalmente, con equipamiento de seguridad y soporte continuo (no trabajadores precarizados de apps genéricas).
- **Tarifas Transparentes 2026 (Base de Datos Centralizada):**
  - **Express (< 90 min):** 0–3 km ($3.700), 3–5 km ($4.600), 5–7 km ($6.100), 7–10 km ($8.200), +10 km ($8.200 + `Math.ceil(km − 10) × $1.000`).
  - **LowCost (Ruta 24h):** 0–3 km ($3.000), 3–5 km ($4.000), 5–7 km ($5.300), 7–10 km ($7.000), +10 km ($7.000 + `Math.ceil(km − 10) × $700`).
- **Atención Humana por WhatsApp:** Sin bots impersonales ni respuestas genéricas.

---

## 4. Superficies y Módulos del Sistema

| Superficie / Ruta | Modo UI | Propósito y Capacidades |
|---|---|---|
| `/` (Landing Page) | **Persuade** | Presentación de marca, cálculo rápido, bento grid de servicios, barra de confianza, prueba social, carrusel de marcas. |
| `/cotizar/express` | **Operate** | Cotizador Express interactivo con autocompletado de direcciones en MDQ, cálculo de distancia OSRM y previsualización de ruta en mapa Leaflet. |
| `/cotizar/lowcost` | **Operate** | Cotizador y gestor de envíos masivos para comerciantes con planilla interactiva y optimización por lote. |
| `/servicios/*` (`express`, `lowcost`, `flex`, `3pl`, `emprendedores`) | **Persuade / Read** | Páginas detalladas de servicios con beneficios, áreas de cobertura, steppers de funcionamiento y FAQs específicas. |
| `/nosotros/*` (`sobre-nosotros`, `preguntas-frecuentes`, `nuestras-redes`) | **Read / Persuade** | Historia de la empresa, transparencia operativa, flota, certificaciones, centro de preguntas y feed social. |
| `/contacto` | **Operate** | Formulario de contacto validado con Zod, mapa interactivo de la oficina central (Friuli 1972) y CTA directo a WhatsApp. |
| `/ayuda` | **Read** | Base de conocimiento y soporte para clientes y riders. |

---

## 5. Tono de Voz y Guía de Redacción

- **Voseo Rioplatense Obligatorio:** Siempre "Vos elegís", "Cotizá", "Enviá", "Rastreá", "Ingresá", "Contactanos". Prohibido el trato de "Usted" o español neutro corporativo.
- **Anclaje Geográfico Obligatorio:** Siempre hacer referencia a lugares reales de General Pueyrredón: *Friuli 1972, Güemes, Playa Grande, Punta Mogotes, Chauvín, Centro, Constitución, Batán, Sierra de los Padres, Camet*.
- **Claridad y Cercanía:** Mensajes directos, tranquilizadores y sin tecnicismos innecesarios (*"Tu paquete está en camino. Te avisamos al llegar."*).

---

## 6. Identidad Visual y Reglas Inmutables de Diseño

- **Trilogía Cromática Estricta:**
  - **Azul Primario:** `brand-blue-700` (`#0636A5`), `brand-blue-500` (`#0950F6`), `brand-blue-50` (`#E6EEFE`), `brand-ink` (`#00277C`).
  - **Amarillo Acento / CTA:** `brand-yellow-500` (`#FFEC01`). (Usado también para WhatsApp CTA y estados completados; prohibido el verde/slate).
  - **Blanco Superficie:** `brand-white-50` (`#FFFFFF`).
- **Jerarquía Tipográfica:**
  - `font-display`: **Anton** (H1, H2 de alto impacto, estética vial/urbana).
  - `font-subheading`: **Bebas Neue** (Subtítulos, badges, botones en mayúsculas).
  - `font-sans`: **Outfit** / **IBM Plex Sans** (Cuerpo de texto, inputs, legibilidad).
  - `font-mono`: **Geist Mono** (Precios, distancias, tracking en `tabular-nums`).
- **Arquitectura de Componentes:** Patrón **Double Bezel** en tarjetas principales, **CTA Nested Pill**, inputs con altura 44px (touch-friendly), focus rings accesibles en contraste AA.
