# Identidad y Negocio — Envíos DosRuedas

> **Fuente consolidada:** `CONTEXT.md` §1, `PRODUCT.md`, `PROJECT.md` §1

---

## 1. Identidad Corporativa

| Atributo | Valor |
|---|---|
| **Nombre** | Envíos DosRuedas |
| **Actividad** | Logística urbana de última milla, mensajería en moto y paquetería e-commerce |
| **Ciudad / Cobertura** | Mar del Plata, Provincia de Buenos Aires, Argentina (Partido de General Pueyrredón — hasta 20 km) |
| **Base Operativa** | Friuli 1972, Barrio Chauvín, Mar del Plata |
| **Trayectoria** | Más de 7 años de operación local ininterrumpida |
| **Año de Referencia** | **2026** (tarifas vigentes, cálculos temporales) |
| **Contacto Oficial** | WhatsApp/Tel: `+54 223 660-2699` · Email: `matiascejas@enviosdosruedas.com` |

---

## 2. Stack Tecnológico Principal

| Capa | Tecnología | Detalle |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | React 19, Server Components por defecto, Turbopack |
| **Lenguaje** | TypeScript 5.x | Modo estricto (`strict: true`), 0 `any` |
| **Estilos** | Tailwind CSS v4 | `@theme`, escala azul/amarillo/blanco, 0 hex inline |
| **Animaciones** | Framer Motion (`motion/react`) | Respeto riguroso de `prefers-reduced-motion` |
| **Base de Datos** | Prisma ORM + PostgreSQL | Modelos `ServiceType`, `PriceRange`, `Order`, `Zone` |
| **Mapas & Geocoding** | Leaflet + OpenStreetMap + OSRM | Cálculo exacto punto a punto y ruteo vial |
| **Gestor de Paquetes** | `pnpm` | **Único gestor autorizado** |

---

## 3. Servicios Principales (2026)

| # | Servicio | Descripción Corta | Característica Clave |
|---|---|---|---|
| 1 | **Envíos Express** | Cadetería prioritaria punto a punto | Entrega 60–90 min, franja 3 hs (pedir antes 15:00) |
| 2 | **Reparto LowCost** | Envíos económicos consolidados | Entrega antes 19:00 hs (corte 13:00) |
| 3 | **Mercado Envíos Flex** | Logística Same-Day para sellers ML | Corte 15:00, entregas < 20:00, blindaje reputación |
| 4 | **Depósito & Fulfillment (3PL)** | Almacenamiento + picking/packing + despacho | Drop-Off en Friuli 1972 con 20% descuento |
| 5 | **Envíos Contrareembolso** | Cobro en mano en destino | $0 comisión, rendición inmediata, Factura C |
| 6 | **Empresas Cuenta Corriente** | Liquidación quincenal Factura A | Tarifas bonificadas por volumen, atención ejecutiva WhatsApp |

---

## 4. Posicionamiento y Propuesta de Valor

| Pilar | Declaración |
|---|---|
| **Autoridad Local Auténtica** | 7+ años recorriendo cada rincón de Mar del Plata |
| **Garantía con Consecuencia Real** | "Si no llegamos a la hora acordada, el envío corre por nuestra cuenta. Sin excusas." |
| **Transparencia Tarifaria Total** | Tarifas 2026 fijas y calculables matemáticamente por distancia real (OSRM) o zonas predefinidas, sin algoritmos abusivos de tarifa dinámica |
| **Atención Humana Directa** | Coordinación ágil con base operativa local y canal directo de WhatsApp |

---

## 5. Principios de Producto

1. **Puntualidad Garantizada:** Los compromisos de entrega se respetan estrictamente; si se falla en el horario acordado, el viaje es bonificado.
2. **Claridad sin Letras Chicas:** Precios justos, públicos y auditables por kilómetro o zona, sin costos ocultos ni aumentos imprevistos.
3. **Cercanía Marplatense:** Hablar el idioma local, conocer las zonas de la ciudad y brindar trato directo y personalizado de vecino a vecino.
4. **Velocidad de Acción:** Flujos de usuario sencillos que resuelven una cotización o despacho en pocos toques, respetando el tiempo del cliente.

---

## 6. Evidencia Comprobable

- Trayectoria verificada: 15+ años operando ininterrumpidamente en Mar del Plata.
- Tabla de precios oficial 2026 auditada y registrada en el sistema (`PriceRange`).
- Base operativa y centro de distribución físico en Friuli 1972, Mar del Plata.
- **Prohibido:** inventar reseñas con identidades ficticias o publicar métricas no comprobadas.

---

## 7. Accesibilidad e Inclusión (DoD)

- Cumplimiento WCAG 2.1 AA en todas las vistas públicas.
- Contraste cromático de alto impacto entre fondos azules, amarillos y blancos.
- Controles interactivos y botones táctiles con dimensiones mínimas de 44×44px.
- Soporte total para `prefers-reduced-motion` y navegación accesible mediante teclado en cotizadores y formularios.

---

## 8. Referencias Cruzadas

| Tema | Documento en `docs/knowledge_base/` |
|---|---|
| **Tarifas oficiales 2026** | `00-proyecto/servicios-tarifas-2026.md` |
| **Stack técnico detallado** | `00-proyecto/stack-tecnologico.md` |
| **Glosario de dominio** | `02-dominio/glosario.md` |
| **Decisiones de negocio** | `02-dominio/decisiones.md` |
| **Sistema de diseño completo** | `01-diseno/design-system.md` |