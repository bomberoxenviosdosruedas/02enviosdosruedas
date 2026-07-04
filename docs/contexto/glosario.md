# Glosario y Dominio

## Entidades Principales
*   **Envíos Express:** Servicio de mensajería de alta criticidad horaria. Permite selección de rangos de entrega y se cotiza base a distancia/zonas. Requiere 2hs de anticipación.
*   **Envíos LowCost:** Servicio de ruteo diario masivo. Optimizando con IA y sin rango horario elegible (entregas de 13 a 19 hs para pedidos ingresados antes de las 13).
*   **Envíos Flex (MeLi):** Servicio "Same-Day" específico para vendedores de MercadoLibre. Maneja cortes a las 15:00 hs e incluye beneficios por niveles (estándar, tope zona y flat).
*   **E-Commerce & 3PL:** Logística tercerizada para PyMEs, incluyendo almacenamiento, picking, packing y control de stock (Fulfillment).

## Términos del Dominio
*   **Same-Day:** Entrega en el mismo día que se origina o procesa el pedido.
*   **Next-Day:** Entrega al día hábil siguiente a la preparación o recepción del pedido.
*   **Fulfillment:** Proceso integral de la cadena logística e-commerce (desde almacenar el producto hasta la entrega al cliente final).
*   **Ruteo / Ruteo Masivo:** Planificación inteligente de múltiples paradas para maximizar la cantidad de entregas realizadas por un solo mensajero.

## Entidades Técnicas (Base de Datos)
*   `ServiceType`: Enumeración en Prisma que tipifica el servicio (actualmente `LOW_COST` o `EXPRESS`).
*   `PriceRange`: Modelo en base de datos que maneja las reglas de tarifación por kilómetros y servicio.

## Siglas Internas
*   **MDQ / Mar del Plata:** Zona de cobertura única y exclusiva de Envíos DosRuedas.
*   **SLA (Service Level Agreement):** Acuerdos de nivel de servicio (e.g. entregar antes de las 19hs en LowCost).
*   **3PL:** Third-Party Logistics. Logística tercerizada donde la empresa gestiona el stock de un cliente externo.
