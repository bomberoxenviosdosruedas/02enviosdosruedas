# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Comercios y tiendas e-commerce locales (B2B):** Vendedores de Mercado Libre con envíos Flex, locales a la calle y marcas marplatenses (indumentaria, repuestos, librería, gastronomía/artesanales) que despachan múltiples paquetes diarios o semanales. Buscan previsibilidad en costos, colecta puntual y entrega garantizada en franja horaria para mantener su reputación comercial.
- **Particulares y oficinas (B2C / P2P):** Residentes de Mar del Plata que necesitan resolver mandados urgentes, envío de llaves, trámites, paquetería o compras inmediatas de punto a punto, requiriendo conocer el precio exacto en segundos y contar con un cadete confiable en camino.

## Product Purpose

Envíos DosRuedas es la plataforma de logística de última milla y mensajería urbana para Mar del Plata y el Partido de General Pueyrredón. Su propósito es conectar a comercios y vecinos con un servicio de reparto rápido, confiable y de costo predecible. El éxito se mide por la satisfacción en el cumplimiento del plazo de entrega acordado y la simplicidad para cotizar y despachar en menos de dos minutos.

## Positioning

- **Autoridad local auténtica:** Más de 15 años recorriendo y conociendo cada rincón y particularidad de las calles marplatenses.
- **Garantía con consecuencia real:** "Si no llegamos a la hora acordada, el envío corre por nuestra cuenta. Sin excusas."
- **Transparencia tarifaria total:** Tarifas 2026 fijas y calculables matemáticamente por distancia real (OSRM) o zonas predefinidas, sin algoritmos abusivos de tarifa dinámica.
- **Atención humana directa:** Coordinación ágil con base operativa local y canal directo de WhatsApp.

## Operating Context

- Ámbito geográfico específico: Partido de General Pueyrredón (Mar del Plata, Batán, Sierra de los Padres, Camet, Chapadmalal).
- Comercios despachando desde mostradores o planillas de cálculo, organizando paquetes para retiro de media tarde en franjas Flex y LowCost.
- Usuarios particulares interactuando desde teléfonos móviles en movimiento o el hogar, necesitando respuestas y confirmaciones rápidas.
- Flota coordinada en tiempo real entre operadores marplatenses y mensajeros en dos ruedas.

## Capabilities and Constraints

- **Capacidades clave:**
  - Cotizador Express punto a punto con cálculo de ruta y kilometraje preciso vía OSRM.
  - Cotizador LowCost con gestión de lotes por zonas y carga masiva.
  - Canal de gestión para sellers de Mercado Envíos Flex y planes mensuales para emprendedores.
  - Sistema de seguimiento y revisión de estado de envíos.
  - Contacto directo vía WhatsApp y central telefónica local.
- **Restricciones inquebrantables:**
  - Tarifas estricta y exclusivamente calculadas según la tabla de precios 2026 (`Math.ceil` obligatorio en excedentes superiores a 10 km).
  - Stack tecnológico: Next.js 16 (App Router, React 19, Turbopack), TypeScript 5 strict, Tailwind CSS v4, Prisma ORM + PostgreSQL, pnpm.
  - Vocabulario y terminología del dominio: "Express", "LowCost", "Flex", "Plan Emprendedores", "Cadetería", "Mar del Plata / MDQ".

## Brand Commitments

- **Nombre:** Envíos DosRuedas.
- **Voz y tono:** Rioplatense riguroso con voseo marplatense ("Cotizá", "Ingresá", "Contactanos", "Rastreá", "Vos elegís").
- **Identidad visual oficial:** Paleta estricta de 3 colores (Azul Egipcio `#0636A5`, Amarillo Señal Eléctrico `#FFEC01`, Blanco Puro `#FFFFFF`), tipografía display en Anton/Bebas Neue, cuerpo en Outfit y datos tabulares en Geist Mono.
- **Identidad de marca:** Logo vectorial exclusivo `/logo-master.svg` (mínimo 120px ancho).
- **Canales de contacto institucionales:** WhatsApp/Teléfono `223 660-2699`, Base operativa en Friuli 1972, correo `hola@enviosdosruedas.com`.

## Evidence on Hand

- Trayectoria verificada: 15+ años operando ininterrumpidamente en Mar del Plata.
- Tabla de precios oficial 2026 auditada y registrada en el sistema (`PricingRange`).
- Base operativa y centro de distribución físico en Friuli 1972, Mar del Plata.
- Prohibición explícita de inventar reseñas con identidades ficticias o publicar métricas no comprobadas.

## Product Principles

1. **Puntualidad garantizada:** Los compromisos de entrega se respetan estrictamente; si se falla en el horario acordado, el viaje es bonificado.
2. **Claridad sin letras chicas:** Precios justos, públicos y auditables por kilómetro o zona, sin costos ocultos ni aumentos imprevistos.
3. **Cercanía marplatense:** Hablar el idioma local, conocer las zonas de la ciudad y brindar trato directo y personalizado de vecino a vecino.
4. **Velocidad de acción:** Flujos de usuario sencillos que resuelven una cotización o despacho en pocos toques, respetando el tiempo del cliente.

## Accessibility & Inclusion

- Cumplimiento WCAG 2.1 AA en todas las vistas públicas.
- Contraste cromático de alto impacto entre fondos azules, amarillos y blancos.
- Controles interactivos y botones táctiles con dimensiones mínimas de 44×44px para operación cómoda en dispositivos móviles.
- Soporte total para `prefers-reduced-motion` y navegación accesible mediante teclado en cotizadores y formularios.
