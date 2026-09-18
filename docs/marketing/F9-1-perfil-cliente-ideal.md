# F9-1 — Perfil de cliente ideal y prospección B2B

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `src/components/home/EmprendedoresHome.tsx` (clientes reales que el sitio ya muestra, confirmado también en la versión en vivo de `www.enviosdosruedas.com`), `F1-1-competitive-brief.md` (segmentos y huecos), `F8-1-plan-investigacion.md` (disparadores de compra, aún hipotéticos hasta que existan sesiones reales — F8.2 no está disponible todavía).

**Nota sobre la fuente de clientes actuales:** no se adjuntó una planilla de clientes con rubro y volumen real, así que se partió del fallback que prevé el propio enunciado de esta fase: los nombres que el sitio ya muestra como clientes. Se confirmaron los 10 nombres reales, tal como están en el código (`EmprendedoresHome.tsx` línea 14) y en la versión pública del sitio: **Toy Piola Juguetería, Ama & Pola, Dropix 3D, El Cóndor, Starcel, Urbancow, Wanca, Catalina Indumentaria, Envases 3G, La Peri.** Esta es una limitación real: son solo 10 nombres, sin rubro exacto confirmado para todos, sin volumen ni antigüedad como cliente — el perfil de abajo se arma con lo que se pudo verificar por investigación web pública de cada nombre, no con datos internos del negocio.

**El archivo con la lista completa de prospectos (`F9-1-prospectos.xlsx`, con nombres de negocios y enlaces) se entrega fuera del repositorio público**, en `private_no_repo/F9-1-prospectos.xlsx` — no en `docs/marketing/`, siguiendo la regla 9 del bloque base (mínimo de datos y nada de esto en el repo público, aunque son datos ya públicos de cada negocio, no datos personales de una persona física).

---

## 1. Perfil de cliente ideal, deducido de los 10 clientes reales

Se investigó cada uno de los 10 nombres por búsqueda web pública para confirmar su rubro (no se inventó ningún rubro sin evidencia):

| Cliente actual | Rubro confirmado | Confianza |
|---|---|---|
| Catalina Indumentaria | Indumentaria (lo dice el propio nombre) | Alta |
| Envases 3G | Envases / insumos de embalaje (lo dice el propio nombre) | Alta |
| Toy Piola Juguetería | Juguetería (lo dice el propio nombre) | Alta |
| El Cóndor | Café y panadería, con más de una sucursal en Mar del Plata (Balcarce, Güemes, Playa Grande) | Alta — confirmado por búsqueda web (Instagram, Facebook y notas de prensa local) |
| Dropix 3D | Impresión 3D / manufactura a pedido | Media — se infiere del nombre, no se confirmó con una fuente externa |
| Ama & Pola, Urbancow, Starcel | Probablemente indumentaria/accesorios (Ama & Pola, Urbancow) y tecnología/celulares (Starcel), a juzgar por el estilo del nombre | Baja — no se encontró una fuente externa que lo confirme, no se afirma como hecho |
| Wanca, La Peri | No se pudo identificar el rubro con una fuente confiable | Sin confirmar — se marcan como "A VERIFICAR", no se inventa un rubro |

**Perfil que emerge, con la evidencia disponible:** negocios locales de Mar del Plata, de rubro variado pero con un patrón común — venden un producto físico, chico a mediano, con necesidad de reparto recurrente dentro de la ciudad (no una sola vez). Al menos 4 de 10 (Catalina Indumentaria, Envases 3G, Toy Piola, y probablemente Ama & Pola/Urbancow) son comercios minoristas o mayoristas de productos de consumo — coincide con el segmento "emprendedor/tienda online" y "PyME" ya definidos en `F3-1-campaign-plan.md` §2. El Cóndor es el caso distinto: una cadena local multi-sucursal de gastronomía, que sugiere que el perfil ideal no se limita a e-commerce — también incluye negocios físicos con más de un punto de venta que necesitan mover mercadería entre sucursales o a domicilio.

**Señales de volumen que se pueden usar para calificar un prospecto nuevo** (deducidas del patrón de arriba, no de una cifra real de ningún cliente, que no está disponible): tiene canal de venta activo (Instagram con publicaciones recientes, tienda online propia, o más de una sucursal física); vende un producto que cabe en una moto; no es una cadena nacional grande (que probablemente ya tiene logística propia contratada).

## 2. Cómo se buscaron los prospectos

Búsqueda web real (sin conector de Google Maps/Places ni Apollo, en modo investigación web que prevé el propio enunciado), por rubro: indumentaria, repuestos de motos/autopartes, farmacias/ortopedias, imprentas, estudios contables/gestorías, laboratorios de análisis clínicos, tecnología/accesorios de celulares, y envases/embalajes/descartables (este último, igual que Envases 3G, cliente actual). Se excluyeron los 10 clientes actuales y los competidores ya identificados en `F1-1-competitive-brief.md` y `F7-reputacion.md` (MMDP, DAR Logística, Mar del Motos, Uber Envíos, Motomensajería YA).

## 3. Resultado: 43 prospectos reales, no 60-100

Se encontraron y verificaron **43 negocios reales** (cada uno con una URL o perfil público real, no inventado), de los cuales **19 quedaron marcados como prioritarios** en `F9-1-prospectos.xlsx`. Es menos que la meta de 60 a 100 que pide el enunciado — la razón, explícita, no un atajo: esta sesión no tiene un conector a Google Maps/Places ni a un directorio de negocios estructurado, así que cada prospecto se buscó y verificó a mano por búsqueda web general. Llevar la lista a 100 con ese método implicaría empezar a incluir negocios encontrados en un listado de directorio sin verificar que de verdad venden online o reciben pedidos recurrentes — exactamente lo que la regla 7 del bloque base ("si falta un dato, no lo estimes") pide evitar. Se prefirió una lista más corta y verificada a una más larga con relleno.

Distribución por rubro de los 43: indumentaria (8), tecnología/celulares (8, incluye 1 cadena nacional de prioridad baja), estudios contables/gestoría (7), laboratorios de análisis clínicos (6), repuestos de motos/autopartes (5), envases/embalajes/descartables (5), imprentas (2), farmacia/ortopedia (2).

## 4. Qué contiene `F9-1-prospectos.xlsx` (fuera del repo)

Una fila por prospecto con: ID (`PROS-001` a `PROS-043`), nombre del negocio, rubro, canal de venta, sitio o perfil público (URL/Instagram — es el contacto público del negocio, no un dato personal de una persona), señal que justifica el contacto, servicio de DosRuedas que le correspondería, puntaje de 1 a 5, y si está en el grupo prioritario ("Top 20", con 19 marcados). Una segunda hoja documenta las mismas limitaciones de este documento.

---

## 5. Supuestos y lo que no se pudo verificar

- El rubro de 2 de los 10 clientes actuales (Wanca, La Peri) no se pudo confirmar por búsqueda web — quedan como "A VERIFICAR", no se les asignó un rubro inventado.
- El rubro de otros 3 (Ama & Pola, Urbancow, Starcel) se infiere solo del estilo del nombre, con confianza baja — no es un hecho confirmado.
- Ninguno de los 43 prospectos fue contactado ni tiene una señal de volumen real confirmada (por ejemplo, cuántas ventas hace por semana) — el puntaje de 1 a 5 es una estimación de encaje por rubro y actividad visible, no una medición.
- No se pudo llegar a la meta de 60-100 prospectos por la razón explicada en §3 — no se sustituyó cantidad por invención.
- El archivo `F9-1-prospectos.xlsx` no se adjuntó como parte del repositorio público — se entrega fuera de él, como pide la regla de datos mínimos necesarios del bloque base.
