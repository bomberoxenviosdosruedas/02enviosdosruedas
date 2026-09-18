# CONTEXT.md — Envíos DosRuedas

Contexto central de dominio del proyecto para desarrolladores y agentes de IA.

---

## 1. Identidad y Negocio

| Atributo | Valor |
|---|---|
| **Nombre** | Envíos DosRuedas |
| **Actividad** | Logística urbana de última milla, mensajería en moto y paquetería e-commerce |
| **Ciudad** | Mar del Plata, Provincia de Buenos Aires, Argentina (Partido de General Pueyrredón) |
| **Trayectoria** | Más de 15 años de operación local |
| **Año de Referencia** | **2026** (tarifas vigentes, cálculos temporales) |
| **Stack Principal** | Next.js 16 (App Router, React 19), Tailwind CSS v4, TypeScript strict, Prisma ORM + PostgreSQL, pnpm |

---

## 2. Glosario Canónico de Dominio

Consultar siempre `docs/marketing/glosario.md` para el detalle exhaustivo. Resumen de términos clave:

- **Express**: Envío punto a punto prioritario e inmediato en moto con retiro y entrega en el día.
- **LowCost**: Envío consolidado económico, programado en franja horaria.
- **Envíos Flex**: Entrega en el mismo día integrada con plataformas de e-commerce (Mercado Libre, Tiendanube, etc.).
- **3PL / Depósito & Fulfillment**: Almacenamiento de stock, preparación de pedidos (picking/packing) y despacho desde depósito propio en MDQ.
- **Bulto / Paquete**: Unidad física transportable (hasta 15 kg por moto habitual).
- **Tarifa Base**: Precio para los primeros tramos (0-3 km, 3-5 km, etc.) según `src/lib/pricing.ts` y tabla 2026.
- **Km Adicional**: Kilómetro excedente calculado obligatoriamente con `Math.ceil(km)`.

---

## 3. Reglas Inviolables de Marca y UI

1. **Paleta Cromática (Solo 3 colores)**:
   - Azul Principal: `#0636A5` (`brand-blue-700`)
   - Amarillo Acento / CTA: `#FFEC01` (`brand-yellow-500`)
   - Blanco Superficie: `#FFFFFF` (`brand-white-50`)
   - Prohibido el uso de grises/slates genéricos o colores externos (ej. verde en botones de WhatsApp — usar amarillo de marca).
2. **Tipografía**:
   - Títulos de impacto: `font-display` (Anton)
   - Subtítulos, badges y botones: `font-subheading` (Bebas Neue)
   - Cuerpo de texto: `font-sans` (IBM Plex Sans / Outfit)
   - Números, tarifas y códigos: `font-mono` (Geist Mono con `tabular-nums`)
3. **Voz y Tono**:
   - Español rioplatense con voseo estricto ("Cotizá", "Enviá", "Calculá", "Contactanos").
   - Referencias locales auténticas de Mar del Plata (Güemes, Batán, Constitución, Puerto, Centro, Chauvín).
4. **Tarifas**:
   - Nunca inventar valores. La única fuente válida de cálculo es `src/lib/pricing.ts` y la BD `PricingRange`.

---

## 4. Fuentes de Verdad Adicionales

- `docs/marketing/TASKS.md`: Tablero maestro de sprints y tareas.
- `docs/marketing/F4-0-backlog.md`: Backlog con especificaciones detalladas de cada ítem (`BL-xx`).
- `docs/marketing/decisiones.md`: Registro de decisiones de arquitectura y negocio.
- `AGENTS.md` / `DESIGN.md`: Reglas estrictas de desarrollo, accesibilidad y diseño de componentes.
