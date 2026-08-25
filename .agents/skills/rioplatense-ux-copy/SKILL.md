---
name: rioplatense-ux-copy
description: >-
  Use this skill when writing, reviewing, or translating UI copy, CTAs, labels, placeholders, tooltips, validation messages, or marketing text to ensure consistent Argentinian Rioplatense voseo, Mar del Plata geographical context, and 2026 operational accuracy.
---

# Rioplatense UX Copy & Voice Guidelines Skill

Esta skill define la voz de marca, reglas gramaticales de voseo y referencias hiperlocales de **Mar del Plata (2026)** para todos los textos de la interfaz de usuario.

---

## 🇦🇷 1. Voseo Rioplatense Obligatorio

Todos los textos de cara al usuario **deben** utilizar el voseo rioplatense natural y profesional.

| Acción UI | ✅ Forma Correcta (Voseo) | ❌ Prohibido (Tuteo / Neutro) | ❌ Prohibido (Usted) |
|---|---|---|---|
| Cotizar | **Cotizá tu envío** | Cotiza tu envío | Cotice su envío |
| Calcular | **Calculá el costo** | Calcula el costo | Calcule el costo |
| Enviar | **Enviá ahora** | Envía ahora | Envíe ahora |
| Rastrear | **Rastreá tu paquete** | Rastrea tu paquete | Rastree su paquete |
| Elegir | **Elegí el servicio** | Elige el servicio | Elija el servicio |
| Ingresar | **Ingresá tu dirección** | Ingresa tu dirección | Ingrese su dirección |
| Contactar | **Contactanos por WhatsApp**| Contáctanos | Contáctenos |
| Conocer | **Conocé nuestras tarifas** | Conoce nuestras tarifas | Conozca nuestras tarifas |

---

## 📍 2. Geolocalización e Identidad Mar del Plata (MDQ)

Las simulaciones, placeholders, tooltips y ejemplos **deben** referenciar calles y barrios reales del Partido de General Pueyrredón:

- **Calles y Números**: "Friuli 1972", "Güemes 2840", "Avenida Constitución 4500", "Avenida Colón y San Martín", "Avenida Juan B. Justo 1200".
- **Barrios y Zonas**: Chauvín, Güemes, Centro, La Perla, Playa Grande, Punta Mogotes, Puerto, Constitución, Batán, Sierra de los Padres, Camet.
- **Centro de Distribución**: Friuli 1972, Mar del Plata.

---

## 💰 3. Tarifas Vigentes 2026 (Fuente de Verdad)

Al redactar textos con menciones a precios o cálculos en UI:

### Mensajería Express
- 0–3 km: **$3.700**
- 3–5 km: **$4.600**
- 5–7 km: **$6.100**
- 7–10 km: **$8.200**
- +10 km: `Math.ceil(km) × $1.000` (hasta 20 km)

### Envíos LowCost
- 0–3 km: **$3.000**
- 3–5 km: **$4.000**
- 5–7 km: **$5.300**
- 7–10 km: **$7.000**
- +10 km: `Math.ceil(km) × $700` (hasta 20 km)

---

## 💬 4. Microcopy de Estados de Interfaz

- **Cargando**: "Calculando la mejor ruta por las calles de Mar del Plata..."
- **Éxito (Toast)**: "¡Listo! Tu cotización fue calculada con éxito."
- **Error (Form)**: "Por favor, revisá que la dirección de entrega esté dentro de General Pueyrredón."
- **Vacío (Empty State)**: "Todavía no agregaste ningún paquete a la planilla."
