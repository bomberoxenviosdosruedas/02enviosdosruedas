A continuación se presenta un cuestionario estructurado por componente para que el dueño de **Envíos DosRuedas** valide, precise y defina con exactitud la información y los textos de la página del servicio **Envíos Flex** (/servicios/enviosflex):

### **1\.** FlexFeatures.tsx **(Características Principales del Servicio)**

El componente destaca aspectos operativos esenciales como recolección sin costo, entregas en el día, horario de corte y tarifas competitivas.

* **Horario de corte:** Actualmente se indica un horario de corte a las 15:00 hs. ¿Este horario es uniforme para todos los días hábiles y zonas de Mar del Plata, o varía según el rubro, la zona del local o los días sábados?   
  **Respuesta:** *L A V 15HS. SABADOS 12HS*  
* **Límite de entrega:** La promesa actual establece que las entregas se completan antes de las 20:00 hs. ¿Se maneja alguna franja horaria más amplia en temporadas pico (ej. Navidad, Hot Sale, temporada de verano) o se mantiene estrictamente hasta las 20:00 hs?  
  **Respuesta: No, siempre es hasta 20hs el limite horario de flex.**  
* **Recolección gratuita:** Se comunica que el retiro de paquetes en el local o depósito es sin cargo adicional. ¿Hay una cantidad mínima de paquetes diarios requerida para bonificar el retiro o aplica a partir de 1 solo paquete?  
  **Respuesta:** *Sin minimo*  
* **Cobertura geográfica de Flex:** El texto menciona "Cobertura total en Mar del Plata". ¿Llegan a barrios periféricos y zonas costeras del sur/norte (ej. Chapadmalal, Batán, Santa Clara del Mar) o el radio de entrega Flex está acotado a las zonas habilitadas dentro de la plataforma de MercadoLibre?  
  **Respuesta:** *Tarifas flex unicamente validas dentro de La ciudad de Mar del plata, los barrios nombrados no corresponden a la ciudad. Deben consultar por cobertura, pero los valores a esa zonas se cobran a \$1.000 el KM (Calculado segun distancia entre retiro y entrega)*  
* **Diferenciador competitivo:** ¿Qué ventaja técnica o humana querés que resalte frente a otras cadeterías locales (ej. atención por WhatsApp, cadetes uniformados, baja tasa de siniestralidad)?  
* **Respuesta:** *Atencion humana por Whatsapp, Equipo propio, baja tasa de siniestralidad, Equipo de confianza  y profesional. Seguimiento de envio con sistema propio.*

### **2\.** FlexBenefits.tsx **(Beneficios para Vendedores y Tiendas Online)**

Este bloque enfoca el valor comercial para el vendedor: reputación de MercadoLíder, política de devoluciones y calidad de atención.

* **Política de devoluciones sin cargo:** Se promete que si el comprador rechaza el producto en domicilio, la devolución al local es sin cargo. ¿Cómo funciona exactamente este proceso (reintento previo, devolución en la siguiente recolección, costo si el cliente final canceló mientras el cadete iba en viaje)?  
  **Respuesta:** *Si el comprador no quiere recibir el producto se devuelve al comercio sin cargo en el transcurso del dia o al dia siguiente mas tardar. Si el paquete ya fue retirado del comercio y se cancela el envio, se debe abonar el valor del envio de igual manera.*  
* **Protección de la reputación:** Se enfatiza el cuidado de la reputación e insignias de MercadoLíder cumpliendo rigurosamente los tiempos de entrega pactados. ¿Tienen un porcentaje medible de cumplimiento de entregas a tiempo (SLA) para mostrar como dato de confianza (ej. 98% o 99% de entregas a tiempo)?  
  **Respuesta:** *Entregas aseguradas al 100%, comprobantes de entrega y estadisticas en nuestro sistema de control propio.*  
* **Atención y choferes:** Se menciona que los choferes están calificados para brindar una buena experiencia a los clientes finales. ¿Qué pautas siguen los cadetes ante clientes ausentes o direcciones difíciles (llamado previo, espera en puerta, foto de comprobante)?  
  **Respuesta:** *Ante clientes ausente o direcciones dificil de encontrar, el cadete se comunica con el cliente para intentar la entrega, en caso de no poder realizar la entrega, cierra en su aplicacion como No entregado y subiendo una foto como prueba.*   
* **Beneficios exclusivos:** ¿Existen ventajas adicionales para vendedores de alto volumen (ej. asesoramiento en configuración logística, provisión de insumos, o grupo de WhatsApp exclusivo para soporte rápido)?  
* **Respuesta:** *Integracion directa a nuestro sistema para que sus envios lleguen directamente a nosotros, una vez recibido nosotros confirmamos en sistema y lo gestionamos. Descuentos en valor del envio por cantidad segun el nivel.*

### **3\.** FlexHowItWorks.tsx **(Paso a Paso Logístico)**

La sección desglosa el circuito de trabajo en 4 pasos: 01 Vendés, 02 Retiramos, 03 Entregamos, 04 Calificás.

* **Paso 01 (Venta y preparación):** Cuando el vendedor recibe la venta con Flex, ¿cómo debe avisar que tiene paquetes listos? ¿Tienen un horario fijo diario en el que pasan siempre, o el vendedor envía un mensaje/planilla por WhatsApp antes de las 15:00 hs?  
  **Respuesta:** *Si no se encuentra integrado a nuestro sistema, nos avisa del envio por whatsapp antes de 15hs*  
* **Paso 02 (Retiro y escaneo):** Al retirar por el local, ¿el cadete escanea los paquetes en el momento con la app de MercadoLibre Envíos Flex, o los paquetes se cargan y se escanean al consolidar la hoja de ruta?  
  **Respuesta:** *Si el repartidor escanea los paquetes en el comercio al retirar.*  
* **Paso 03 (Distribución):** ¿En qué franja horaria salen los repartidores a la calle? ¿Se realizan entregas comerciales (a oficinas/locales) antes de las 18:00 hs y residenciales hasta las 20:00 hs?  
  **Respuesta:** *Los repartidores estan constantemente en calle, al recibir un envio administracion asigna el envio a un repartidor y este pasa a retirar, para realizar la entrega lo mas pronto posible dentro de su recorrido, puede suceder que se retire varias veces en el dia a medidas que van saliendo compras, asi darle al comprador una velocidad de entrega rapida, para que vuelva a comprar.*  
* **Paso 04 (Confirmación y cierre):** ¿El vendedor recibe reportes de entregas completadas o incidencias al finalizar la jornada para que pueda responderle a sus compradores?  
* **Respuesta:** *Tiene a disposicion comprobantes de entrega en su panel de comercio en la plataforma logistica dosruedas, y tambien en su perfil de Vendedor de MercadoLibre tendra toda la informacion sobre cada entrega.*

### **4\.** FlexPricing.tsx **(Niveles, Tarifas y Condiciones Comerciales)**

El calculador y las tablas agrupan el servicio en 3 niveles de escala (Nivel 1 Crecimiento, Nivel 2 Pro y Nivel 3 Elite), además de contemplar recargos climáticos y reintentos.

* **Estructura de niveles:**  
* 

  * **Nivel 1 (Crecimiento, 1 a 4 envíos/día):** Se estructura en base a la tarifa por zonas LowCost (Z1 a Z5). ¿Sigue funcionando bajo esta escala o se prefiere una tarifa fija por envío?  
    **Respuesta:** *Sigue asi*   
  * **Nivel 2 (Pro, 5 a 10 envíos/día):** Aplica tope fijo en zonas lejanas (Z4 y Z5). ¿Sigue vigente este beneficio para este volumen?  
    **Respuesta:** *Sigue vigente*  
  * **Nivel 3 (Elite, \+10 envíos/día):** Ofrece tarifa plana unificada para toda la ciudad. ¿Requiere un compromiso mínimo mensual de envíos para mantener este beneficio?  
    **Respuesta:** *Aca ofrece misma tarifa para envios cercanos hasta 5km (Entre \$3000 y \$4000) y una tarifa fija en \$4500 al resto de la ciudad, siempre y cuando mantenga los 10 envios diarios minimos.*   
* **Segundas visitas y reintentos:** ¿Cuál es la regla exacta si el comprador no se encuentra en el domicilio? ¿En qué nivel el reintento es bonificado y en cuál se cobra un porcentaje o tarifa completa?  
  **Respuesta:** *Si el comprador no se encuentra, el envio se reprograma para una 2da visita al dia siguiente, esta tiene costo segun nivel de flex, en los casos que tenga bonificada la 2da visita esta sera sin cargo, en caso de necesitar una 3ra visita esta tendra costo como un nuevo envio en todos los casos. NIvel 1 2da visita al 50%. NIvel 2: Zona 1 sin cargo, resto de zonas al 50%, NIvel 3 2da visita 100% bonificada.*  
* **Recargo por lluvia:** El componente especifica un recargo por día de lluvia reducido para clientes asociados al canal Flex. ¿En qué condiciones climáticas se activa formalmente (llovizna intermitente vs. alerta meteorológica) y cómo se le avisa al vendedor?  
  **Respuesta:** *Se activa siempre y cuando este lloviendo, o haya llovido recientemente y aun las condiciones para circular son complicadas (Calzada mojada, viento, llovizna). El vendedor se le comunica por whatsapp cuando se le informa el costo del envio al solicitarlo.*  
* **Modalidad y ciclo de pago:** Se referencia una liquidación quincenal automática. ¿Qué medios de pago se aceptan (transferencia bancaria, efectivo, cuenta corriente) y qué datos/garantías se le solicitan al vendedor para abrir cuenta?  
* **Respuesta:** *Se puede abonar de forma diario, quincenal o mensual. Efectivo o transferencia. Unicos datos que solicitamos es Nombre del comercio, telefono de contacto, direccion y si necesita factura el Numero de CUIT*

### **5\.** FlexRequirements.tsx **(Requisitos y Puesta en Marcha)**

Actualmente resume 3 requisitos: tener cuenta activa de vendedor en MercadoLibre, habilitar Mercado Envíos Flex en la configuración, y contar con embalaje apto para moto.

* **Límites de bultos y peso para moto:** ¿Cuáles son las dimensiones máximas (en centímetros) y el peso máximo (en kilogramos) admitido por paquete para que viaje seguro en moto?  
  **Respuesta:** *60x60 y 20kg es el maximo recomendado para moto (consultar tamaños mayores)*  
* **Bultos medianos o grandes:** Si el vendedor vende artículos que superan la capacidad de una moto (ej. electrodomésticos, cajas voluminosas), ¿ofrecen vehículos utilitarios/autos para Flex o el servicio es strictly en moto?  
  **Respuesta:** *Por el momento se realizan unicamente envios en Moto.*  
* **Etiquetado y embalaje:** ¿Qué condiciones obligatorias debe tener el paquete (etiqueta térmica pegada sin arrugas, bolsa negra de e-commerce, código QR visible y protegido de la lluvia)?  
  **Respuesta:** *Debe estar correctamente embalado para su transporte en Moto, con QR visibible y protegido.*   
* **Asistencia técnica:** Si el vendedor todavía no tiene activo Flex en su cuenta de MercadoLibre, ¿ustedes lo ayudan o guían paso a paso para configurar las zonas y los horarios en la plataforma?  
* **Respuesta:** *Lo ayudamos, pero depende que cumpla con las condiciones requeridas por MercadoLibre para la activacion.* 

### **6\. Llamadas a la Acción y Dudas Frecuentes (FAQ)**

* **Canal prioritario de alta:** En los botones de contacto de la página, ¿se dirige al vendedor a un formulario de registro web o directamente a un chat de WhatsApp con un mensaje predeterminado?  
  **Respuesta:** *Directamente al chat de Whatsapp con mensaje prede*  
* **Preguntas más repetidas:** ¿Cuáles son las 3 dudas que siempre hacen los vendedores antes de contratar el servicio (ej. cobro contra entrega, qué pasa si llueve, extravíos o roturas, cobro de Mercado Pago)?

**Respuesta:** *Si tenemos minimo de envios, si cubrimos toda la ciudad, si el repartidor escanea el paquete. Cobro contra entrega no permite mercadolibre. En caso de incovenientes con el paquete se analiza cada situacion y se resuelve con el comercio personalmente.*   
