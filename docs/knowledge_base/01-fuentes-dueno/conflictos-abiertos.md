# Conflictos abiertos con el dueño

> Cosas que las fuentes del dueño dicen de dos maneras, o que prometió y no están. **No se resuelven sin Matías.** Mientras tanto, el criterio de cada fila es el que dice la columna "Mientras tanto". Actualizado 2026-09-29.

| # | Tema | Fuente A | Fuente B | Mientras tanto |
|---|---|---|---|---|
| 1 | **Seguro / indemnización** | X `01!E21` (respuesta): *"el 70% del valor del producto"* | D §5: a *"¿Existe alguna política de reintentos de entrega o seguro de paquete que debamos redactar?"* respondió *"No"* | No publicar ningún porcentaje ni la palabra "seguro". Preguntar si el 70 % es política real y si quiere que figure en TyC |
| 2 | **Tipo de factura** | D §4: *"NO REALIZAMOS FACTURA A!"* | Nunca escribió qué factura emite. "Factura C" sale del texto viejo del sitio y del informe estratégico. Liquidaciones: *"A coordinar con cada cliente"* (X `01!E17`) | Publicar solo "No emitimos Factura A". No afirmar "Factura C" hasta que lo confirme |
| 3 | **Archivo de valores de Cuenta Corriente** | X `02!E10`: *"Depende cantidad de envíos (comparto archivo de valores)"* | El archivo no está en el repo | El sitio muestra "Tarifas LowCost". Pedir el archivo |
| 4 | **Precio del 24HS** | Confirmación verbal 2026-09-29: `$3.800`/envío | C (25/5/2026): `$4.000` sin recolección gratis. D y X no dan precio | Se usa `$3.800` (más reciente). Pedirlo por escrito y crear la constante |
| 5 | **Dimensión del bulto** | D y X `03!D6`: *"+5kg o mas de 40x40cm"* | C: *"mayor a 5kg y mas de 40x30cm"* | 40 × 40 cm (`STANDARD_BULLET_DIMENSIONS_CM`) |
| 6 | **"Más rentable" vs "mayor margen"** | C: más rentable = LowCost | D §1: mayor margen = Express, *"pero me gustaría escalar más el llamado cuenta corriente"* | No publicar rankings. Ver detalle abajo |
| 7 | **Niveles de Flex** | `FlexPricing.tsx`: Nivel 2 `$6.500`, Nivel 3 `$4.500` | Ninguna fuente del dueño da esos números; solo el concepto (base LowCost, más volumen mejor precio, sin mínimo) | No tocar ni replicar; pedir confirmación |
| 8 | **Reintento en zonas cercanas** | X `03!D10`: *"Zonas cercanas a veces realizamos 2da visita sin costo"* | X `03!C10`: *"50 a 100% depende modalidad"*; D: Express/LowCost 100 % | Publicado como excepción ("a veces"), no como promesa |
| 9 | **Corte de DropOFF** | El informe estratégico dice 13:00 hs | Ninguna fuente del dueño lo menciona | No publicar horario de corte de DropOFF |

---

## Detalle del conflicto 6: margen Express o LowCost

Las dos fuentes más confiables del archivo se contradicen, y las dos preguntas son distintas:

| Fuente | Fecha | Pregunta | Respuesta |
|---|---|---|---|
| Cuestionario de 31 preguntas (CSV) | 25/5/2026 | *"¿Cuál es tu servicio más rentable actualmente?"* | **LowCost** |
| Cuestionario por página (`.docx`) | sep 2026 | *"¿Qué servicio te da más margen?"* | **Express**, *"pero me gustaría escalar más el llamado cuenta corriente"* |

**No son la misma pregunta.** *"Rentable"* y *"margen"* no son sinónimos: un servicio con menor margen unitario puede ser más rentable si mueve mucho más volumen, porque LowCost rota en masa y Express mueve pocos envíos caros. La pregunta de mayo fue por rentabilidad total; la de septiembre, por margen por envío.

**Las dos coinciden en una cosa:** el dueño quiere **escalar Cuenta Corriente**, más allá de cuál de los dos servicios sea. Es el mismo objetivo en septiembre y en la lista de 6 meses de mayo (§11.5).

**Lo que sí se puede afirmar sin riesgo:** los precios de LowCost están confirmados y salen de `LOW_COST_TIERS`, y los de Express también. El "más rentable" no necesita estar escrito en el sitio: es información interna de pricing, y publicarla invita a comparar tarifas.

> **No publicar rankings de rentabilidad.** Elegir un favorito en la web convierte una preferencia interna en una afirmación pública que el dueño no sostiene en las dos fuentes.

---
