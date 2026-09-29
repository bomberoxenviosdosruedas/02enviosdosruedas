# Fuentes del dueño: inventario y autoridad

> **Proveniencia:** cuatro fuentes entregadas por el dueño (Matías Cejas, Director Operativo). Las tres primeras son primarias; la cuarta es una síntesis.
>
> | Fuente | Ruta | Naturaleza |
> |---|---|---|
> | Cuestionario por página | `docs/contexto/Entrevista Exhaustiva y Visión de Marca - Envíos DosRuedas.docx` | Auditoría de las 8 secciones del sitio + entrevista escrita. **Alta confianza.** Fecha declarada: septiembre 2026. |
> | **Cuestionario de 31 preguntas** | `docs/contexto/respuestas_dueno_enviosdosruedas.csv` | Respuestas escritas del dueño a un formulario de negocio. **Alta confianza, y la fuente más literal del archivo**: contiene sus frases más operativas y sus líneas rojas. **Firmado 25/5/2026**, unos 4 meses antes que las otras tres. Ver §11. |
> | Planilla de relevamiento | `docs/contexto/Relevamiento completo envío dosruedas.xlsx` | 6 pestañas. **Confianza mixta:** las celdas respondidas son del dueño; las no respondidas conservan el texto de la plantilla original. |
> | Informe estratégico | `docs/contexto/Informe de Estrategia, Auditoría y Visión de Marca - Envíos DosRuedas.docx` | Síntesis de las anteriores. **Autoridad derivada:** confirma, no crea. Los números que solo aparecen ahí van marcados **[SIN CONFIRMAR]** |
>
> Hay transcripciones en markdown de la primera y la tercera: `docs/contexto/entrevista-exhaustiva-y-vision-de-marca.md` y `docs/contexto/relevamiento-completo-envio-dosruedas.md`.
>
> **Fecha de la entrevista:** 2026-09-28. **Registrado en el repo:** 2026-09-29.
>
> ## Cómo usar este documento
>
> Es la **fuente de verdad del contexto que el dueño quiere explícitamente** — cosas que en general no están escritas en ningún lado y que el sitio a veces afirma al revés.
>
> 1. **§1 a §3** son definiciones canónicas. Donde contradicen a un documento más viejo, **gana este documento**.
> 2. **§4** lista lo que el dueño **niega explícitamente**. Es la sección más importante del archivo: cada línea de ahí es una promesa que el sitio no debe hacer.
> 3. **§11** son las respuestas del cuestionario de 31 preguntas: longitud de frase real, líneas rojas, competidores, cliente estrella. La fuente de voz más literal del dueño. **Su antigüedad es el riesgo:** es de mayo, y el precio del 24HS ya cambió después (§1.5).
> 4. **§12** documenta la contradicción de margen entre fuentes. No la resuelvas por tu cuenta.
> 5. **§9** es la auditoría: qué de §1-§4 está corregido en el código y qué sigue roto.
> 6. Un dato sin respaldo del dueño está marcado **[PLANTILLA]** (texto de la planilla que el dueño no respondió) o **[SIN CONFIRMAR]** (agregado por el informe estratégico). **Ninguno de los dos se publica.**
>
> Related topics: `decisiones.md` (registro de decisiones), `../00-negocio/tarifas.md` (recargos y protocolos), `../03-diseno/anti-patrones.md` §5 (prohibiciones), `../03-diseno/iconografia-imagen.md` §3.4 (dirección de fotografía), `glosario.md` (vocabulario), `src/lib/promises.ts` (promesas en código).

---

---

## Extracciones fieles (usar estas, no las transcripciones)

| Archivo | Qué es |
|---|---|
| `docx-2026-09.md` | Extracción por código del `.docx` completo. Marca **🟦** cada respuesta del dueño |
| `xlsx-2026-09.md` | Extracción por código de las 6 pestañas, celda por celda. **🟦** = celda de respuesta (relleno `FFDCE6F1`); el resto es plantilla |
| `csv-2026-05.md` | Resumen y puntero al CSV de 31 preguntas (25/5/2026) |
| `conflictos-abiertos.md` | Lo que las fuentes dicen de dos maneras y hay que preguntarle a Matías |

> Las transcripciones `docs/contexto/entrevista-exhaustiva-y-vision-de-marca.md` y `docs/contexto/relevamiento-completo-envio-dosruedas.md` **no son fieles**: agregan datos que el dueño no dijo ("Factura C consolidada", lista de barrios de periferia, "Relevamiento Completado", horarios de recepción del 24HS) y omiten otros ("garantía de rendición inmediata no existe", "comparto archivo de valores", "Zonas cercanas 2da visita sin costo", los "No" de postales). Llevan un aviso al principio.

## Confirmaciones verbales registradas

| Fecha | Dato | Quién |
|---|---|---|
| 2026-09-29 | E-commerce 24HS `$3.800`/envío | Matías Cejas (relevamiento) |
| 2026-09-29 | Excedente +10 km: `$1.000`/km Express, `$700`/km LowCost; `$1.200`/km es solo periferia | Matías Cejas |
| 2026-09-29 | DropOFF 20 % vigente | Matías Cejas |
