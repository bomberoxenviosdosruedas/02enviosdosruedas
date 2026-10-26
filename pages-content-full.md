# Inventario Absoluto de Páginas, Copys y Contenidos

Este documento audita y consolida de forma exhaustiva el 100% de las rutas públicas, páginas administrativas, componentes UI asociados, parámetros operativos y copywriting textual del código fuente de **Envíos DosRuedas**.

---

## 1. Landing Page Principal / Inicio
- **Ruta física:** `src/app/page.tsx`
- **Subcomponentes Renderizados:** `HeroAnimado`, `ServicesOverview`, `EmprendedoresHome`, `SegmentosHome`, `SocialProofSection`, `CtaSection`, `CarruselRedes`, `NetworkCanvasWrapper`.
- **Parámetros Operativos:** Muestra tarifas promocionales desde **$2.300**, franjas horarias de corte (13:00 hs / 15:00 hs), velocidad de entrega Express (<3h), integración con Mercado Envíos Flex y hub central en Chauvín (Friuli 1972).
- **Copywriting y Textos Integros (Voseo Rioplatense):**
  - **Héroe / Titular:** *"LOGÍSTICA URBANA EN MAR DEL PLATA"*
  - **Titular Principal:** *"ENVÍOS EN MOTO RÁPIDOS, SEGUROS Y SIN VUELTAS"*
  - **Subtítulo:** *"Rastreá tu paquete en tiempo real, cotizá tu envío en segundos y despachá con la flota más rápida de Mar del Plata."*
  - **CTAs:** `"COTIZÁ TU ENVÍO AHORA"`, `"HABLAR POR WHATSAPP 💬"`, `"VER TODOS LOS SERVICIOS"`
  - **Sección Servicios (Servicios Overview):**
    - *Express:* `"Entregas inmediatas en menos de 3 horas puerta a puerta."`
    - *Flex:* `"Entregas en el día homologadas para vendedores de Mercado Libre."`
    - *LowCost:* `"Envíos programados económicos dentro de las 24 horas."`
    - *Fulfillment / Depósito:* `"Almacenamiento céntrico, empaquetado y despacho diario sin costo de retiro."`
  - **Plan Emprendedores / E-commerce:** *"Sumate a los comercios de Mar del Plata que escalan sus ventas con retiros diarios sin cargo y tarifas diferenciadas."*
  - **Prueba Social:** *"Más de 150 comercios de Chauvín, Güemes, Centro y Constitución confían en nosotros diariamente."*

---

## 2. Cotizador Unificado e Interactivo
- **Ruta física:** `src/app/cotizar/page.tsx`
- **Subcomponentes Renderizados:** `CotizadorUnificado`, `CotizadorHero`, `CotizadorForm`, `CotizadorComparativa`, `CotizadorRecargos`, `CotizadorGuia`, `CotizadorMapa`.
- **Parámetros Operativos:**
  - *Distancia base:* Hasta 10 km.
  - *Tarifas base:* Express **$3.700**, LowCost **$2.800**, Flex **$2.950**.
  - *Recargo por km adicional (>10 km hasta 20 km):* Express **+$680/km**, LowCost **+$560/km**, Flex **+$580/km**.
  - *Límite de distancia:* Para distancias mayores a 20 km, el sistema cambia automáticamente el estado a `"Consultar"` para atención personalizada por WhatsApp.
  - *Recargo por Lluvia:* **+50%** sobre la tarifa base del servicio.
  - *Recargo Nocturno / Feriado:* **+30%**.
  - *Recargo por Piso / Espera / Bulto Adicional:* **+$600**.
- **Copywriting y Textos Integros:**
  - **Titular Principal:** *"COTIZÁ TU ENVÍO EN MAR DEL PLATA EN TIEMPO REAL"*
  - **Subtítulo:** *"Ingresá el origen, el destino y calculá el costo exacto al instante según la distancia y la modalidad seleccionada."*
  - **Labels de Formulario:** `"Dirección de Origen (Mar del Plata)"`, `"Dirección de Destino"`, `"Distancia Estimada (KM)"`, `"¿Llueve actualmente?"`, `"Piso por escalera"`, `"Bulto voluminoso"`
  - **CTAs:** `"CALCULAR TARIFA EXACTA"`, `"SOLICITAR MOTO POR WHATSAPP 💬"`
  - **Subtextos de Tarjetas de Resultado:**
    - *Express:* `"⚡ Entrega Inmediata (< 3 HS) - Asignación directa de cadete."`
    - *LowCost:* `"📦 Entrega Programada (24 HS) - Ideal para ahorrar en entregas no urgentes."`
    - *Flex:* `"Mercado Envíos Flex MDP - Homologado para vendedores de Mercado Libre."`

---

## 3. Catálogo General de Servicios Logísticos
- **Ruta física:** `src/app/servicios/page.tsx`
- **Subcomponentes Renderizados:** `ServicePricing`, `DoubleBezelCard`, `BentoGrid`, `CTANestedPill`.
- **Parámetros Operativos:** Presenta la matriz comparativa de todos los servicios para Mar del Plata (Express, LowCost, Flex, Depósito Fulfillment, Cuenta Corriente para Empresas).
- **Copywriting y Textos Integros:**
  - **Titular:** *"SOLUCIONES LOGÍSTICAS A LA MEDIDA DE TU NEGOCIO"*
  - **Subtítulo:** *"Elegí la modalidad que mejor se adapte a tus necesidades de tiempo, volumen y presupuesto en Mar del Plata."*
  - **Copy Tiers:**
    - *Envíos Express:* *"Puntualidad absoluta. Cadete exclusivo desde la recolección hasta la entrega final."*
    - *Envíos LowCost:* *"Optimizá tus costos operativos en despachos masivos programados."*
    - *Mercado Envíos Flex:* *"Mantené tu reputación en Verde Oscuro entregando el mismo día."*
    - *Depósito & Fulfillment:* *"Guardá tu stock en nuestro centro logístico de Friuli 1972 y despreocupate de la logística."*

---

## 4. Servicio Envíos Express Prioritarios (<3h)
- **Ruta física:** `src/app/servicios/envios-express/page.tsx`
- **Subcomponentes Renderizados:** `ExpressHero`, `ExpressPricing`, `ExpressFeatures`, `ExpressUseCases`, `ExpressHeroCollage`.
- **Parámetros Operativos:** Tiempo de entrega garantizado menor a 3 horas, tarifa base $3.700 (0-10 km), $680/km adicional hasta 20 km.
- **Copywriting y Textos Integros:**
  - **Titular:** *"MENSAPEDÍAS Y ENVÍOS EXPRESS EN MENOS DE 3 HORAS"*
  - **Subtítulo:** *"Respuesta inmediata para trámites, urgencias médicas, repuestos y entregas prioritarias en todo Mar del Plata."*
  - **Casos de Uso:**
    - *"Documentación urgente y trámites bancarios."*
    - *"Medicamentos y repuestos urgentes."*
    - *"Regalos y sorpresas con horario fijo."*
  - **CTA:** `"SOLICITAR MOTO EXPRESS AHORA ⚡"`

---

## 5. Servicio Envíos LowCost Programados (24h)
- **Ruta física:** `src/app/servicios/envios-lowcost/page.tsx`
- **Subcomponentes Renderizados:** `LowCostHero`, `LowCostPricing`, `LowCostFeatures`, `LowCostBenefits`, `LowCostHowItWorks`.
- **Parámetros Operativos:** Tarifa base $2.800 (0-10 km), $560/km adicional hasta 20 km. Horario de corte para entregas en el día: 13:00 hs.
- **Copywriting y Textos Integros:**
  - **Titular:** *"ENVÍOS LOWCOST PROGRAMADOS EN MAR DEL PLATA"*
  - **Subtítulo:** *"La alternativa más económica para comercios que buscan tarifas reducidas agrupando entregas dentro de las 24 horas."*
  - **CTA:** `"PEDÍ TU ENVÍO ECONÓMICO"`

---

## 6. Mercado Envíos Flex Mar del Plata
- **Ruta física:** `src/app/servicios/enviosflex/page.tsx`
- **Subcomponentes Renderizados:** `FlexHero`, `FlexPricing`, `FlexFeatures`, `FlexBenefits`, `FlexRequirements`, `FlexHowItWorks`.
- **Parámetros Operativos:** Tarifa homologada Flex $2.950. Retiros sin cargo para clientes con más de 5 envíos diarios. Corte de recepción 15:00 hs para entregas el mismo día.
- **Copywriting y Textos Integros:**
  - **Titular:** *"LOGÍSTICA OFICIAL MERCADO ENVÍOS FLEX EN MDP"*
  - **Subtítulo:** *"Potenciá tus ventas en Mercado Libre entregando en el día con escaneo de código QR y actualización en tiempo real."*
  - **Requisitos:** *"Corte 15:00 hs, etiquetas impresas con código QR claro, dirección de retiro en Mar del Plata."*
  - **CTA:** `"SUMAR MI CUENTA A FLEX 🚀"`

---

## 7. Depósito 3PL & Fulfillment Central
- **Ruta física:** `src/app/servicios/deposito-fulfillment/page.tsx`
- **Subcomponentes Renderizados:** `DepositoPricing`, `DoubleBezelCard`, `BentoGrid`.
- **Parámetros Operativos:** Depósito céntrico ubicado en Chauvín (Friuli 1972, Mar del Plata). Control de stock, packaging, armado de pedidos y despacho automático.
- **Copywriting y Textos Integros:**
  - **Titular:** *"ALMACENAMIENTO Y FULFILLMENT EN MAR DEL PLATA"*
  - **Subtítulo:** *"Ahorrá espacio y tiempo. Guardamos tus productos en nuestra base central, preparamos tus paquetes y los entregamos en moto."*
  - **CTA:** `"CONSULTAR PLAN DE DEPÓSITO 📦"`

---

## 8. Empresas y Cuentas Corrientes
- **Ruta física:** `src/app/servicios/empresas-cuenta-corriente/page.tsx`
- **Subcomponentes Renderizados:** `Ecommerce24HSPricing`, `ContactForm`.
- **Parámetros Operativos:** Facturación A/B quincenal o mensual, crédito operativo para empresas de Mar del Plata y gestor dedicado.
- **Copywriting y Textos Integros:**
  - **Titular:** *"CUENTA CORRIENTE Y PLANES CORPORATIVOS PARA EMPRESAS"*
  - **Subtítulo:** *"Centralizá la mensajería de tu empresa o PyME con facturación unificada y atención comercial prioritaria."*
  - **CTA:** `"SOLICITAR APERTURA DE CUENTA"`

---

## 9. Cobertura y Mapa de Zonas
- **Ruta física:** `src/app/cobertura/page.tsx`
- **Subcomponentes Renderizados:** `CoberturaExplorer`, `LeafletRouteMap`.
- **Parámetros Operativos:** Detalle de cobertura en barrios de Mar del Plata (Chauvín, Güemes, Centro, La Perla, Constitución, Puerto, Playa Grande, Bosque Peralta Ramos, Batan, Colinas de Peralta Ramos, Sierra de los Padres).
- **Copywriting y Textos Integros:**
  - **Titular:** *"COBERTURA COMPLETA EN MAR DEL PLATA Y ALREDEDORES"*
  - **Subtítulo:** *"Llegamos a todos los barrios de la ciudad con tarifas transparentes por rango kilométrico."*

---

## 10. Contacto Directo y Canales
- **Ruta física:** `src/app/contacto/page.tsx`
- **Subcomponentes Renderizados:** `ContactHero`, `ContactForm`, `ContactInfo`, `CopyPhone`, `ConversionBanner`.
- **Parámetros Operativos:**
  - *Dirección Base:* Friuli 1972, Chauvín, Mar del Plata, Argentina.
  - *Teléfono / WhatsApp:* +54 223 660-2699.
  - *Horario de Atención:* Lunes a Viernes de 08:00 a 18:00 hs, Sábados de 09:00 a 13:00 hs.
- **Copywriting y Textos Integros:**
  - **Titular:** *"HABLA DIRECTO CON NUESTRA BASE CENTRAL"*
  - **Subtítulo:** *"Estamos listos para coordinar tu envío en el acto o responder tus dudas comerciales."*
  - **CTA:** `"HABLAR POR WHATSAPP EN EL ACTO"`

---

## 11. Sección Nosotros (Historia, FAQ, Redes)
- **Rutas físicas:**
  - `src/app/nosotros/page.tsx`
  - `src/app/nosotros/sobre-nosotros/page.tsx`
  - `src/app/nosotros/preguntas-frecuentes/page.tsx`
  - `src/app/nosotros/nuestras-redes/page.tsx`
- **Subcomponentes Renderizados:** `AboutHero`, `AboutMissionVision`, `AboutTimeline`, `AboutValues`, `AboutTeam`, `FaqHero`, `FaqCategories`, `FaqCta`, `NetworksHero`, `NetworksChannels`, `RecentPosts`.
- **Copywriting y Textos Integros:**
  - **Sobre Nosotros:** *"Más de 10 años conectando comercios y vecinos en Mar del Plata. Nacimos con la visión de profesionalizar la mensajería en moto con tecnología y puntualidad."*
  - **Preguntas Frecuentes:** Respuestas categorizadas sobre zonas, cobros contra reembolso, tarifas de lluvia y horarios de corte.
  - **Redes Sociales:** *"Seguinos en Instagram y TikTok para conocer el día a día de nuestros cadetes en la calle."*

---

## 12. Páginas Legales y Guías
- **Rutas físicas:**
  - `src/app/terminos-y-condiciones/page.tsx`
  - `src/app/politica-de-privacidad/page.tsx`
  - `src/app/guias/envios-flex-mar-del-plata/page.tsx`
- **Subcomponentes Renderizados:** `TermsContent`, `PrivacyContent`, `LegalSidebarNav`.
- **Copywriting y Textos Integros:** Marco normativo de transporte de encomiendas ligeras, límites de responsabilidad por rotura o extravío, seguro opcional del 1% del valor declarado y confidencialidad de datos personales.
