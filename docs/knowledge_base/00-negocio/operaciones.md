# Operación y protocolos — Envíos DosRuedas

> Fuentes del dueño: `01-fuentes-dueno/docx-2026-09.md` (D), `01-fuentes-dueno/xlsx-2026-09.md` (X, con celda), CSV de mayo (C). Orden de autoridad y criterio [PLANTILLA] en `../README.md`.

## 5. Operaciones, protocolos y fricción

### 5.1 Rutina de la base (Friuli 1972)

> "Las motos empiezan a llegar desde 9hs al deposito a retirar envios si es necesario, o realizar rendiciones. Escanean las etiquetas que necesitan y salen a reparto"

Ese es **el corazón operativo** y la imagen que el dueño quiere para publicidad (§6.3).

### 5.2 Protocolo de ausencia en Flex

> "Se avisa al comercio, y si autoriza se realiza una nueva visita al día siguiente"

**Nunca** se devuelve el paquete al remitente sin avisar. Se avisa al comercio primero y la segunda visita se hace con su autorización.

### 5.3 Logística inversa (rechazo en puerta)

> "El retorno no tiene costo, se rinde generalmente al día siguiente"

El retorno por rechazo del comprador **no se cobra**. Falta explicitarlo en `/terminos-y-condiciones` (ver `../05-auditoria/estado-sitio.md`).

### 5.4 Tránsito y temporada

> "No hay diferencias"

No hay margen de tiempo estacional declarado. No publicar "en temporada demora más" ni "priorizamos temporada" como promesa operativa.

### 5.5 Fricción de distancia (zonas con desvío)

> "Generalmente las zonas alejadas, la periferia, barrios como Félix U. Camet, La Florida, Camet, 2 de abril, El Retazo, Estación Camet, y en el sur acantilados, San Patricio, San Jacinto y alrededores"

El cálculo por routing puede **subestimar** el tiempo real en estas zonas porque el camino es más largo que la distancia en línea. Es el mismo motivo por el que las tarifas miden **km de ruta** y no km en línea recta.

### 5.6 Fuera de Mar del Plata (tarifa de periferia)

> "Muy pocas consultas, salen algunos envíos pero muy pocos; los envíos fuera de Mar del Plata se cobran a **$1.200 × km (km de ruta)**"
>
> 🔴 **La cifra de esa cita no se aplica.** El dueño confirmó el **2026-09-30** que la periferia se cobra a **`$1.000` por km de ruta** (`PERIPHERY_PRICE_PER_KM`). La cita se conserva porque es la transcripción de la fuente y ahí queda el `$1.200` original, pero **nadie debe publicarlo ni tomarlo como tarifa**. Ver `tarifas.md` §7.1.

**No hay lista de barrios de periferia.** El dueño: *"No hay zonas establecidas con limites"* (X `01!E18`) y *"Si no tenemos cobertura… le explicamos"* (X `01!E10`). La lista Félix U. Camet · La Florida · Camet · 2 de Abril · El Retazo · Estación Camet · Acantilados · San Patricio · San Jacinto es la de **fricción del mapa** (§5.5); el informe estratégico la reinterpretó como zona tarifaria, y eso es un error.

Nota: el radio de 20 km del cotizador cubre el caso **dentro** del partido; la tarifa de periferia es para lo que queda fuera y se liquida **por separado**, no como excedente. Resuelto en §3.1.

> **Flex tiene su propia regla de cobertura, más estricta:** *"Cubrimos todo mar del plata (no cubrimos zonas aledañas)"* (CSV pregunta 17). O sea: Flex **no** llega a la periferia. Un vendedor de Mercado Libre con destino en Camet no es cliente de Flex, y el cotizador debería decirlo.

### 5.7 Control de calidad en puerta

> "Los cadetes son capacitados previamente para que cumplan correctamente con la forma de trabajo establecida por DosRuedas; en caso de tener alguna queja de algun cliente, es charlado con el repartidor para que mejore su actitud"

No es un proceso anónimo. Hay capacitación previa y seguimiento nominal ante reclamo. Ese es el argumento real detrás de "flota propia, cero tercerización".

### 5.8 Equipos

> "Nuestro equipo está preparado y toma cada envío como si fuera suyo, y priorizando una entrega rapida y confiable. Contamos con un equipo fijo, incluso repartidores trabajando con nosotros desde el día 1 que abrimos DosRuedas"

**Hecho verificable y con peso:** hay repartidores que están desde el primer día. Es el argumento más fuerte de antigüedad operativa que tiene la empresa, y no está en el sitio.

### 5.9 Exclusiones de mercadería

**Lista del dueño** (X `01!E22`, celda de respuesta): *"Liquidos, tortas, productos mal embalados, cosas ilegales, animales"*. El informe estratégico agrega "mercadería no declarada" y "bultos que comprometan la estabilidad vial" [SIN CONFIRMAR]. Debe estar en `/terminos-y-condiciones` y hoy no está.

**Lo que el dueño sí-o-no acepta (CSV pregunta 31):** *"No realizamos transporte de productos ilegales"* (§4.8). Y el límite de tamaño del 3PL es explícito: *"Almacenamos unicamente productos pequeños/medianos"* (§1.4).

### 5.10 Ficha de la operación

| Dato | Valor | ¿En el repo? |
|---|---|---|
| Hub central | Friuli 1972, Mar del Plata (el barrio "Chauvín" solo aparece en la transcripción no fiel) | Sí |
| Dominio comercial | `www.enviosdosruedas.com` | Sí |
| Dominio operativo | `www.logisticadosruedas.com` | **No** |
| Flota | 100 % propia de motocicletas, sin tercerización | Sí |
| Antigüedad | Más de 7 años (decisión 2026-09-18: "+7 años" por Ley 24.240) | Sí |
| Calificación | 5.0 / 5.0 en Google, +120 valoraciones | Sí |
| Respuesta en canales directos | Menos de 5 minutos | Sí (corregido desde "< 2 MIN") |

---


---

## 11. Protocolos Operativos (No son Promesas, Son Reglas Internas)

> **Fuente:** `docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md` §5.

| Situación | Protocolo | Exponer en el sitio |
|---|---|---|
| Paquete Flex no entregado en el primer intento | Se avisa al comercio; con su autorización se hace la nueva visita al día siguiente | Sí, en la guía Flex. Es lo que cuida la reputación |
| Comprador rechaza el producto en puerta | El retorno **no tiene costo**; se rinde generalmente al día siguiente | Falta explicitarlo en TyC (pendiente) |
| Reclamo de trato de un cadete | Se charla con el repartidor para que mejore su actitud | Sí, es argumento de "flota propia, cero tercerización" |
| Dinero cobrado por contrareembolso | El cadete rinde en la base; el comercio lo recibe al día siguiente o se le transfiere | Sí, con el matiz de §5.1 |
| Época de alta congestión (verano, centro, Güemes) | **No hay diferencias** de operativa | No publicar márgenes estacionales |
| Destinos con desvío de routing | Félix U. Camet, La Florida, Camet, 2 de abril, El Retazo, Estación Camet; en el sur acantilados, San Patricio, San Jacinto | No publicar como "zonas lentas" |
| **No hay disponibilidad para cubrir un envío** | **Se rechaza el envío.** *"Preferimos decir que no podemos, a fallar"* (línea roja del dueño) | **Sí, y debería estar publicado.** Es la promesa de fiabilidad más fuerte del archivo: la competencia promete llegar siempre, DosRuedas tiene permiso explícito del dueño para decir que no |
| **El comercio falta el respeto al cadete** | No se toleró. *"No toleramos faltas de respeto hacia nuestros repartidores"* | No es una nota de TyC: es una **regla de relación**. El comercio que abruma al repartidor deja de ser cliente |
| **Mercadería ilegal o no declarada** | No se transporta | Falta la lista completa en TyC (pendiente) |

**Zona de fricción de routing** es la razón por la que las tarifas usan **km de ruta** y no distancia en línea recta: la medición por routing puede subestimar el tiempo real en esos barrios.

> Las tres últimas filas salen del cuestionario de 31 preguntas del dueño (25/5/2026), no de la entrevista de septiembre. Son **líneas rojas**, no preferencias. Ver `02-dominio/entrevista-dueno-2026-09-28.md` §4.7, §4.8, §4.9 y §11.1.

---
