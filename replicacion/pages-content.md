# Catálogo Maestro de Páginas, Vistas y Copys: Envíos DosRuedas

> **Ubicación:** `replicacion/pages-content.md`  
> **Alcance:** Exclusivamente Páginas Públicas y Comerciales (Experiencia del Cliente Final)  
> **Tono y Voz:** Voseo Rioplatense profesional, cercano, dinámico y honesto ("cotizá", "coordiná", "escribinos", "mandá").  
> **Reglas Innegociables de Copy:**  
> - Capacidad estándar por bulto: hasta 5 kg y 40 × 40 × 30 cm. Bulto extra desde $1.800.  
> - Prohibido prometer "en 2 horas" o "60 a 90 min".  
> - Express opera en "franja horaria de 3 hs" a elección del cliente con 2 hs de anticipación mínima (corte 15:00 hs).  
> - LowCost opera con corte 13:00 hs y entrega en el día hasta las 19:00 hs.  
> - Mercado Envíos Flex opera con corte 15:00 hs y entrega hasta las 20:00 hs.  
> - No se emite Factura A (solo consumidor final / comprobante monotributista B o C). Base física: Friuli 1972, Mar del Plata.  

---

## 0. Layout Global (Compartido en Todas las Vistas)

### 0.1 Cabecera Persistente (`OptimizedHeader.tsx`)
* **Ruta:** Componente global en `src/components/layout/OptimizedHeader.tsx`
* **Propósito:** Navegación superior pegajosa (`sticky top-0 z-50`) con efecto vidrio (`backdrop-blur-md bg-white/90`), accesos directos por servicio y botón CTA destacado.
* **Textos y Copys:**
  - **Identidad:** "ENVÍOS DOSRUEDAS" · "Mar del Plata"
  - **Menú de Servicios:**
    - "Express (Franja de 3 hs)"
    - "LowCost (Reparto en el día)"
    - "Mercado Envíos Flex"
    - "Depósito & Fulfillment"
    - "Cuenta Corriente Empresas"
    - "Cobro Contra Reembolso"
    - "Plan Emprendedores"
  - **Enlaces Directos:** "COBERTURA", "NOSOTROS", "CONTACTO"
  - **CTA Primario:** "COTIZAR ONLINE" (Lleva a `/cotizar`)
* **Interacción:** Menú móvil desplegable con física fluida vía `AnimatePresence`.

### 0.2 Pie de Página Institucional (`OptimizedFooter.tsx`)
* **Ruta:** Componente global en `src/components/layout/OptimizedFooter.tsx`
* **Propósito:** Cierre corporativo, franja decorativa amarilla vial de 6px, mapa de enlaces y datos de contacto oficiales.
* **Textos y Copys:**
  - **Franja superior:** Borde amarillo vial `#FFEC01` de 6px.
  - **Cabecera Footer:** "ENVÍOS DOSRUEDAS" · "Logística y Mensajería Urbana en Mar del Plata con flota propia y base operativa fija."
  - **Base Operativa:** "Friuli 1972, Mar del Plata, Buenos Aires, Argentina"
  - **Canales Oficiales:**
    - WhatsApp / Llamadas: `+54 9 223 660-2699`
    - Correo: `matiascejas@enviosdosruedas.com`
  - **Horarios de Atención:** "Lunes a Viernes de 09:00 a 18:00 hs · Sábados de 10:00 a 15:00 hs"
  - **Aviso Legal:** "© 2026 Envíos DosRuedas. Todos los derechos reservados. No emitimos Factura A."

### 0.3 Carrusel de Canales Directos (`CarruselRedes.tsx`)
* **Ruta:** Componente global en `src/components/layout/CarruselRedes.tsx`
* **Textos y Copys:**
  - **WhatsApp Directo:** "WHATSAPP · +54 9 223 660-2699 · Escribinos directamente para coordinar envíos, despachos inmediatos o soporte express al toque."
  - **Instagram Oficial:** "INSTAGRAM · @enviosdosruedas · Seguí el día a día de nuestros cadetes en la calle, tips de empaque y avisos operativos de lluvia."
  - **Facebook Comunidad:** "FACEBOOK · /enviosdosruedas · Novedades comerciales, valoraciones de clientes y servicios corporativos."

---

## 1. Página de Inicio (`/`)

* **Ruta:** `src/app/page.tsx`
* **Propósito:** Presentación de propuesta de valor, selección rápida de servicios, confianza local y testimonios de comercios marplatenses.
* **Componentes UI Clave:**
  - `HeroAnimado`: Título gigante display, selector de servicio interactivo, badges de flota propia y acceso inmediato al cotizador.
  - `SegmentosHome`: Segmentación visual clara para Particulares, Emprendimientos y Comercios B2B.
  - `ServicesOverview`: Grilla comparativa de Express, LowCost y Flex con tarjetas Double Bezel.
  - `EmprendedoresHome`: Módulo específico para negocios de Mar del Plata que necesitan entregas diarias programadas.
  - `SocialProofSection`: Estadísticas reales (+10.000 entregas urbanas, 100% flota propia, base fija) y reseñas verificadas.
  - `CtaSection`: Cierre de alta conversión invitando a cotizar o escribir por WhatsApp.
* **Textos y Copys Exactos:**
  - **H1:** "LOGÍSTICA URBANA Y MENSAJERÍA EN MOTO EN MAR DEL PLATA"
  - **Subtítulo:** "Conectamos toda la ciudad con cadetería propia, seguimiento y compromiso real. Elegí tu servicio y cotizá en el acto sin vueltas."
  - **Píldoras de Confianza:** "Flota 100% propia" · "Base en Friuli 1972" · "Sin tercerizaciones"
  - **CTA Botón Principal:** "COTIZÁ TU ENVÍO AHORA"
  - **CTA Secundario:** "CONOCÉ NUESTROS SERVICIOS"

---

## 2. Cotizador Unificado (`/cotizar`)

* **Ruta:** `src/app/cotizar/page.tsx`
* **Propósito:** Herramienta interactiva de alta conversión donde el usuario carga origen y destino una sola vez y compara instantáneamente la tarifa Express y LowCost, visualiza el trazado en el mapa de Mar del Plata y confirma el pedido vía WhatsApp con mensaje pre-armado.
* **Componentes UI:**
  - `CotizadorHero`: Cabecera explicativa con las dos opciones de servicio.
  - `CotizadorUnificado`: Orquestador principal que integra el formulario, mapa y resultados.
  - `CotizadorForm`: Inputs con autocompletado de Google Places (restringido a Mar del Plata y 30 km a la redonda), nombres y datos de contacto.
  - `CotizadorMapa`: Visualización con Leaflet del trazado vial real entre origen y destino.
  - `CotizadorComparativa`: Tarjetas lado a lado de Express y LowCost con desglose de precios, horarios de corte y botones para confirmar por WhatsApp.
  - `CotizadorRecargos`: Tabla clara de recargos operativos (lluvia, espera, paradas intermedias, bulto extra).
* **Textos y Copys Exactos:**
  - **H1:** "COTIZÁ TU ENVÍO EN MOTO"
  - **Bajada:** "Cargá el punto de retiro y entrega una sola vez. Nuestro cotizador calcula la distancia vial exacta y te muestra las tarifas Express y LowCost para que elijas la que mejor se adapte a tu necesidad."
  - **Etiquetas de Formulario:**
    - "Punto de Retiro (Origen en Mar del Plata)": Placeholder "Ej: Friuli 1972 o San Martín 2500"
    - "Punto de Entrega (Destino)": Placeholder "Ej: Güemes 3100 o Av. Constitución 5000"
    - "Tu Nombre o Comercio": Placeholder "Ej: Tienda MDQ"
    - "Teléfono de Contacto": Placeholder "Ej: 223 1234567"
    - "Detalle del Paquete (Opcional)": Placeholder "Ej: Ropa, repuesto, sobre con llaves"
  - **Tarjeta Express:**
    - Título: "ENVÍO EXPRESS"
    - Promesa: "Entrega en franja horaria de 3 hs a coordinar"
    - Horario Límite: "Corte de recepción: 15:00 hs (con 2 hs de anticipación)"
    - Botón: "CONFIRMAR EXPRESS POR WHATSAPP"
  - **Tarjeta LowCost:**
    - Título: "ENVÍO LOWCOST"
    - Promesa: "Entrega programada en el día (hasta las 19:00 hs)"
    - Horario Límite: "Corte de recepción: 13:00 hs"
    - Botón: "CONFIRMAR LOWCOST POR WHATSAPP"
  - **Aclaraciones de Tarifas:**
    - "Tarifas válidas para paquetes estándar de hasta 5 kg y 40 × 40 × 30 cm."
    - "Distancias mayores a 20 km se cotizan de forma personalizada como trayecto de periferia."

---

## 3. Catálogo de Servicios (`/servicios`)

* **Ruta:** `src/app/servicios/page.tsx`
* **Propósito:** Hub central que explica la cartera completa de soluciones de mensajería y logística de Envíos DosRuedas para particulares, tiendas online y corporativos.
* **Textos y Copys:**
  - **H1:** "SERVICIOS DE MENSAJERÍA Y LOGÍSTICA URBANA"
  - **Subtítulo:** "Soluciones a medida para cada tipo de entrega en Mar del Plata. Desde trámites urgentes en el día hasta logística integral con depósito y reparto de Mercado Libre."

---

## 4. Servicio Envíos Express (`/servicios/envios-express`)

* **Ruta:** `src/app/servicios/envios-express/page.tsx`
* **Propósito:** Página dedicada al servicio prioritario de entrega rápida con cadete asignado.
* **Textos y Copys:**
  - **H1:** "ENVÍOS EXPRESS EN MAR DEL PLATA"
  - **Subtítulo:** "Tu encomienda entregada en una franja horaria acotada de 3 hs, coordinada con al menos 2 hs de anticipación."
  - **Condiciones Operativas:**
    - "Corte diario: 15:00 hs para entregas dentro de la misma jornada."
    - "Capacidad: paquetes de hasta 5 kg y 40 × 40 × 30 cm."
    - "Tarifa base 0 a 3 km: $3.700"
    - "Tramo 3 a 5 km: $4.600"
    - "Tramo 5 a 7 km: $6.100"
    - "Tramo 7 a 10 km: $8.200"
    - "Excedente más de 10 km: $1.000 por kilómetro lineal total."
  - **CTA:** "COTIZAR ENVÍO EXPRESS"

---

## 5. Servicio Envíos LowCost (`/servicios/envios-lowcost`)

* **Ruta:** `src/app/servicios/envios-lowcost/page.tsx`
* **Propósito:** Solución económica por ruteo agrupado inteligente para despachos que no requieren inmediatez extrema.
* **Textos y Copys:**
  - **H1:** "ENVÍOS LOWCOST EN EL DÍA"
  - **Subtítulo:** "La tarifa más conveniente de la ciudad para envíos programados. Retiramos y entregamos en la misma jornada hasta las 19:00 hs."
  - **Condiciones Operativas:**
    - "Corte estricto de recepción: 13:00 hs."
    - "Ventana de entrega: de 14:00 a 19:00 hs."
    - "Tarifa base 0 a 3 km: $3.000"
    - "Tramo 3 a 5 km: $4.000"
    - "Tramo 5 a 7 km: $5.300"
    - "Tramo 7 a 10 km: $7.000"
    - "Excedente más de 10 km: $700 por kilómetro lineal total."
  - **CTA:** "COTIZAR ENVÍO LOWCOST"

---

## 6. Mercado Envíos Flex (`/servicios/enviosflex`)

* **Ruta:** `src/app/servicios/enviosflex/page.tsx`
* **Propósito:** Servicio para vendedores de Mercado Libre que deben entregar paquetes el mismo día para mantener su medalla de reputación verde.
* **Textos y Copys:**
  - **H1:** "MERCADO ENVÍOS FLEX EN MAR DEL PLATA"
  - **Subtítulo:** "Llegá el mismo día a tus compradores de Mercado Libre y destacá tus publicaciones con el rayo de Flex."
  - **Condiciones Operativas:**
    - "Corte de retiro en tu local o taller: 15:00 hs."
    - "Plazo máximo de entrega: 20:00 hs del mismo día."
    - "Nivel 1: Tarifa LowCost por tramo kilométrico."
    - "Nivel 2 (Tope fijo Zonas 4 y 5): $6.500."
    - "Nivel 3 (Tarifa plana unificada a todo Mar del Plata): $4.500."
    - "Coordinación directa por WhatsApp y soporte en caso de compradores ausentes."
  - **CTA:** "SUMAR FLEX A MI TIENDA"

---

## 7. Depósito y Fulfillment (`/servicios/deposito-fulfillment`)

* **Ruta:** `src/app/servicios/deposito-fulfillment/page.tsx`
* **Propósito:** Almacenamiento de mercadería, armado de paquetes y despacho inmediato desde la base operativa en Friuli 1972.
* **Textos y Copys:**
  - **H1:** "DEPÓSITO & FULFILLMENT EN MAR DEL PLATA"
  - **Subtítulo:** "Guardá tu stock en nuestra base operativa. Cuando vendés por tu tienda o redes, nosotros armamos el paquete y lo despachamos en la primera ronda."
  - **Ventajas:**
    - "Base segura en Friuli 1972."
    - "DropOFF con bonificación comercial del 20% en costos de retiro."
    - "Ahorro de tiempo: dejás de esperar al cadete en tu casa."
  - **CTA:** "CONSULTAR PLAN DE DEPÓSITO"

---

## 8. Empresas y Cuenta Corriente (`/servicios/empresas-cuenta-corriente`)

* **Ruta:** `src/app/servicios/empresas-cuenta-corriente/page.tsx`
* **Propósito:** Solución B2B para firmas, distribuidoras, repuesteras y estudios jurídicos con alto volumen mensual de trámites y envíos.
* **Textos y Copys:**
  - **H1:** "LOGÍSTICA CORPORATIVA Y CUENTA CORRIENTE"
  - **Subtítulo:** "Centralizá los envíos de tu empresa con facturación quincenal o mensual unificada, remitos conformados y cadetes asignados."
  - **Beneficios:**
    - "Panel y resumen mensual detallado de cada viaje."
    - "Atención prioritaria y despacho sin pagos en efectivo por cada salida."
  - **CTA:** "SOLICITAR APERTURA DE CUENTA"

---

## 9. Cobro Contra Reembolso (`/servicios/envios-contrareembolso`)

* **Ruta:** `src/app/servicios/envios-contrareembolso/page.tsx`
* **Propósito:** Servicio de entrega con cobro de mercadería en efectivo al destinatario y posterior rendición al comerciante.
* **Textos y Copys:**
  - **H1:** "ENVÍOS CON COBRO CONTRA REEMBOLSO"
  - **Subtítulo:** "Vendé con confianza a clientes que prefieren pagar en mano al recibir el producto. Cobramos en efectivo y te transferimos el dinero en 24 hs hábiles."
  - **Protocolo de Seguridad:**
    - "Rendición documentada con comprobante bancario o reintegro en base."
    - "Ideal para comercios de indumentaria, tecnología, repuestos y calzado."
  - **CTA:** "COORDINAR ENVÍO CONTRA REEMBOLSO"

---

## 10. Plan Emprendedores (`/servicios/plan-emprendedores`)

* **Ruta:** `src/app/servicios/plan-emprendedores/page.tsx`
* **Propósito:** Paquete comercial orientado a tiendas en crecimiento en Instagram y Tiendanube en Mar del Plata.
* **Textos y Copys:**
  - **H1:** "PLAN EMPRENDEDORES: CRECÉ CON ENVÍOS SEGUROS"
  - **Subtítulo:** "Tarifas preferenciales por volumen mensual de entregas para que tus costos de envío sean competitivos y tus clientes reciban en el día."

---

## 11. Cobertura y Radios Zonales (`/cobertura`)

* **Ruta:** `src/app/cobertura/page.tsx`
* **Propósito:** Mapa interactivo y detalle de los 5 radios urbanos de cobertura en Mar del Plata y áreas periféricas.
* **Textos y Copys:**
  - **H1:** "COBERTURA DE ENVÍOS EN MAR DEL PLATA"
  - **Subtítulo:** "Llegamos a cada rincón de la ciudad. Conocé nuestros radios de entrega habituales y condiciones para zonas periféricas."
  - **Zonificación:**
    - **Zona 1 (Centro y Macrocentro):** San Martín, Guemes, Plaza Mitre, La Perla, Terminal.
    - **Zona 2 (Puerto y Zona Sur Urbana):** Puerto, Playa Grande, Punta Mogotes hasta Faro.
    - **Zona 3 (Norte y Constitución):** Parque Luro, Constitución, Estrada, Aeropuerto.
    - **Zona 4 (Oeste Urbano):** Los Galpones, Autódromo, Regional, Libertad.
    - **Zona 5 (Periferia y Alrededores):** Batán, Sierra de los Padres, Camet Norte, Chapadmalal (Cotización por km de ruta a $1.000/km).

---

## 12. Contacto y Base Operativa (`/contacto`)

* **Ruta:** `src/app/contacto/page.tsx`
* **Propósito:** Datos de localización, formulario de mensaje y accesos directos al equipo de operaciones.
* **Textos y Copys:**
  - **H1:** "CONTACTANOS"
  - **Subtítulo:** "Estamos para ayudarte a resolver tus entregas en Mar del Plata. Escribinos o visitanos en nuestra base."
  - **Datos de Contacto:**
    - "Dirección: Friuli 1972, Mar del Plata"
    - "WhatsApp: +54 9 223 660-2699"
    - "Email: matiascejas@enviosdosruedas.com"
    - "Horarios: Lunes a Viernes de 09:00 a 18:00 hs · Sábados de 10:00 a 15:00 hs"

---

## 13. Nosotros y Cultura de Trabajo (`/nosotros` y `/nosotros/sobre-nosotros`)

* **Ruta:** `src/app/nosotros/page.tsx` y `src/app/nosotros/sobre-nosotros/page.tsx`
* **Propósito:** Narrativa de marca, historia de la empresa familiar, flota propia y seriedad en la calle.
* **Textos y Copys:**
  - **H1:** "SOBRE ENVÍOS DOSRUEDAS"
  - **Subtítulo:** "Mensajería en moto marplatense construida sobre el compromiso, la palabra y la presencia real en la calle."
  - **Pilares:**
    - "Sin aplicaciones fantasma ni tercerizaciones precarias: sabemos quién lleva cada paquete."
    - "Base física real en Mar del Plata desde el primer día."

---

## 14. Preguntas Frecuentes (`/nosotros/preguntas-frecuentes`)

* **Ruta:** `src/app/nosotros/preguntas-frecuentes/page.tsx`
* **Propósito:** Acordeón de respuestas a dudas comunes sobre peso, lluvia, medios de pago y horarios.
* **Preguntas y Respuestas Clave:**
  - **¿Qué peso y tamaño máximo puede tener un envío?**  
    "El paquete estándar contempla hasta 5 kg y un tamaño de hasta 40 × 40 × 30 cm. Si tu bulto supera estas medidas, se coordina como bulto extra desde $1.800 de recargo."
  - **¿Qué pasa si llueve el día de la entrega?**  
    "Por seguridad de los conductores en asfalto mojado, los días de lluvia rige un recargo del 30% (o 50% en servicios inmediatos Express/LowCost), y los tiempos de viaje pueden extenderse prudentemente."
  - **¿Cuánto tiempo espera el cadete en la puerta?**  
    "Los primeros 10 minutos de espera en puerta son sin cargo. A partir del minuto 11, se computan bloques de espera de 10 minutos a $2.200 por bloque."
  - **¿Emiten Factura A?**  
    "No emitimos Factura A. Emitimos comprobantes fiscales válidos como Monotributista para consumidor final o gastos comerciales."
  - **¿Qué medios de pago aceptan?**  
    "Transferencia bancaria por alias o CBU, Mercado Pago y efectivo contra entrega."

---

## 15. Nuestras Redes (`/nosotros/nuestras-redes`)

* **Ruta:** `src/app/nosotros/nuestras-redes/page.tsx`
* **Propósito:** Vínculos sociales directos con preview de canales oficiales en Instagram, Facebook y WhatsApp.

---

## 16. Guía Mercado Envíos Flex Mar del Plata (`/guias/envios-flex-mar-del-plata`)

* **Ruta:** `src/app/guias/envios-flex-mar-del-plata/page.tsx`
* **Propósito:** Contenido de autoridad y SEO técnico para capacitar a los vendedores locales sobre cómo activar y aprovechar Flex en la ciudad.

---

## 17. Términos y Condiciones Legales (`/terminos-y-condiciones`)

* **Ruta:** `src/app/terminos-y-condiciones/page.tsx`
* **Propósito:** Contrato marco de prestación del servicio, deslinde de responsabilidades, mercadería prohibida (dinero sin declarar, sustancias ilegales, cargas peligrosas) y límites de compensación.
* **Textos Clave:**
  - "Envíos DosRuedas presta servicios de logística urbana y cadetería en la ciudad de Mar del Plata y zonas aledañas."
  - "El cliente es responsable del correcto empaque y rotulado del paquete."
  - "Queda expresamente prohibido el transporte de estupefacientes, inflamables, dinero en efectivo no declarado o mercaderías de circulación ilícita."
