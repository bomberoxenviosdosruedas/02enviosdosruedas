# Identidad y negocio — Envíos DosRuedas

> Fuentes del dueño en `../01-fuentes-dueno/`. Reescrito el 2026-09-29: la versión anterior prometía "60-90 min", "rendición inmediata", "Factura A", "15+ años" y una garantía de bonificación que el dueño nunca dio.

---

## 1. Identidad corporativa

| Atributo | Valor |
|---|---|
| **Nombre** | Envíos DosRuedas |
| **Actividad** | Mensajería en moto, logística urbana de última milla y logística e-commerce |
| **Cobertura** | Mar del Plata. Cálculo automático hasta 20 km de ruta (`CONSULT_THRESHOLD_KM`). Fuera de la ciudad, `$1.200` por km de ruta, a consultar. *"No hay zonas establecidas con limites"* (X `01!E18`) |
| **Base operativa** | Friuli 1972, Mar del Plata. **No** es punto de retiro ni de entrega para el público (D §6) |
| **Flota** | Propia, en moto, sin tercerización. Repartidores *"desde el día 1"* |
| **Trayectoria** | Más de 7 años (decisión 2026-09-18: "+7 años", por Ley 24.240) |
| **Horario** | Lun a Vie 09:00 a 18:00 hs · Sáb 10:00 a 15:00 hs · Dom cerrado (`OPERATING_HOURS`). *"No realizamos envíos fuera de nuestro horario laboral… Sin excepción"* |
| **Contacto** | WhatsApp/Tel `+54 223 660-2699` · `matiascejas@enviosdosruedas.com` (`SUPPORT_PHONE`, `CONTACT_EMAIL`) |
| **Dominios** | `www.enviosdosruedas.com` (comercial) · `www.logisticadosruedas.com` (operativo) |
| **Respuesta en WhatsApp** | Menos de 5 minutos, *"generalmente"* (D §1). No prometer menos de 2 |

---

## 2. Servicios (6, como los muestra el sitio desde 2026-09-29)

Express · LowCost · Mercado Envíos Flex · Cuenta Corriente Flexible · E-commerce 24HS · E-commerce Same Day. Definiciones, cortes, precios y URLs en `servicios.md` §0. Contrareembolso es una condición transversal (`$0`), no un servicio en la vista.

---

## 3. Posicionamiento

| Pilar | Qué se puede decir | Respaldo |
|---|---|---|
| **Confianza y seguridad** | Es la sensación que el dueño quiere transmitir (D §7) | D §7 |
| **Cumplimiento verificable** | Flex: *"antes del horario de mercadolibre (21hs), tenemos un 100% de cumplimiento"* | D §4 |
| **Decir que no antes que fallar** | *"Preferimos decir que no podemos, a fallar"* | C, pregunta 31 |
| **Tarifas públicas por distancia** | Tabla 2026 por km de ruta, calculable en `/cotizar` | `tarifas.md` |
| **Equipo fijo** | Repartidores desde el primer día; toman *"cada envío como si fuera suyo"* | D §7, X `05!C8` |

**Frases de marca del dueño:** *"Una logística pensada para tu comercio… Somos la solución a tus envíos"* (D, en lugar de las 4 frases de banner que rechazó con *"Ninguno jaja"*) y *"El motor de tu última milla / Somos la solución a tus envíos"* como nueva propuesta de valor para la home (X `01!E5`). Eslogan corto del CSV: *"Tu solucion logistica o Tu Partner logistico"*. Ver `../02-dominio/marca-visual.md` §6.4.

**Prohibido** (detalle en `voz-y-lineas-rojas.md`): garantías de bonificación por demora, "rendición inmediata", duraciones de entrega ("60-90 min", "en 2 horas"), superlativos ("los más rápidos de MDQ"), testimonios o clientes sin autorización.

---

## 4. Principios de producto

1. **Cotizar directo en el sitio** es la conversión prioritaria (D §1). WhatsApp es el respaldo, y convierte: *"La mayoría que escribe al whatsapp realiza el envío"*.
2. **Una sola carga, dos tarifas:** tener Express y LowCost aparte *"les parece incómodo"* a los usuarios (X `01!E7`). Por eso `/cotizar` es único.
3. **Claridad antes de confirmar:** lo que suma al precio (lluvia, espera, paradas, bulto, reintento, periferia) se informa en `/cotizar` antes de pedir.
4. **Voseo, tono medio formal, sin exagerar** (`voz-y-lineas-rojas.md` §11.2).

---

## 5. Evidencia comprobable

- 5.0 estrellas con más de 120 valoraciones en Google.
- 100 % de cumplimiento del horario de Mercado Libre (dicho por el dueño).
- Repartidores desde el día 1 y más de 7 años.
- **Prohibido:** reseñas inventadas, métricas no comprobadas, nombrar a MailAmericas o su volumen sin autorización.

---

## 6. Accesibilidad (DoD)

- WCAG 2.1 AA en todas las vistas públicas; touch targets de 44 × 44 px.
- `prefers-reduced-motion` respetado; navegación completa por teclado en cotizador y formularios.

---

## 7. Stack

Ver `../04-operaciones/stack-tecnologico.md`.

---

## 8. Referencias

| Tema | Archivo |
|---|---|
| Servicios | `servicios.md` |
| Tarifas y recargos | `tarifas.md` |
| Operación y protocolos | `operaciones.md` |
| Voz, líneas rojas, negaciones | `voz-y-lineas-rojas.md` |
| Marca visual | `../02-dominio/marca-visual.md` |
| Glosario y decisiones | `../02-dominio/glosario.md`, `../02-dominio/decisiones.md` |

---

## 9. Estrategia y prioridades comerciales

| Tema | Respuesta del dueño | Implicación |
|---|---|---|
| **Acción de conversión prioritaria** | *"Que cotice directo en el sitio"* | El cotizador es el objetivo #1 de la home. WhatsApp es el fallback, no el objetivo |
| **Conversión real** | *"La mayoría que escribe al whatsapp realiza el envío"* | El enlace de WhatsApp no pierde ventas; el cotizador no es un filtro |
| **Mayor margen** | **Express** | Defendible con datos de conversión, no con descuento. ⚠️ El CSV dice LowCost para "más rentable": ver `../01-fuentes-dueno/conflictos-abiertos.md` #6 |
| **Servicio a escalar** | **"Cuenta corriente, que es el plan ideal para emprendedores"** | La prioridad comercial es Cuenta Corriente Flexible (que absorbió a Plan Emprendedores), no Express. Es el objetivo que el dueño repite en las dos fuentes |
| **Fricción del cotizador** | *"Aparte les parece incómodo"* (tener Express y LowCost separados) | El dueño lo pidió como principal objeción de clientes nuevos (X `01!E7`). **Resuelto el 2026-09-29:** `/cotizar` es único y `/cotizar/express` y `/cotizar/lowcost` redirigen ahí |
| **Comprensión del filtro** | *"Sí"* — el usuario entiende la diferencia Express/LowCost | No sobre-explicar la diferencia con bloques pesados |
| **Caducidad de tarifas** | *"Aprox cada 6 meses (pero puede ser menos)"* | Ciclo de revisión de `PriceRange`: 6 meses |
| **Objetivo a 6 meses** | *"Aumentar la cantidad de envios, aumentar flora [flota] y duplicar clientes e commerce (3PL)"* | Volumen y 3PL por encima del margen unitario (`voz-y-lineas-rojas.md` §11.5) |

---
