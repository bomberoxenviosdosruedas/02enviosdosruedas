# Propuestas de diseño adaptadas a Envíos DosRuedas

Las cinco referencias de `docs/propuestas/disenos/` (Auros, Brex, figma, Ramp, superhuman) re-tematizadas con la Ley de Tres Colores de `DESIGN.md` §2: azul `#0950F6` (techo de oscuridad), amarillo `#FFEC01` (acento único, ≤15 %) y blanco `#FFFFFF`, más la escala clara de azul y amarillo. Tipografías de marca: Anton 400 (display), Bebas Neue 400 (labels, nav, botones), Outfit (cuerpo) y Geist Mono `tabular-nums` (cifras y precios).

**No son el `@theme` de producción.** Son referencias para decidir una dirección. Si se adopta una, se trabaja como ítem de `DESIGN.md` §15, con su propio PR.

## Contenido de cada carpeta

| Archivo | Qué tiene |
|---|---|
| `DESIGN.md` | Mapeo de adaptación (token original → token DosRuedas y por qué), qué se conserva y qué se descarta, fricciones con `DESIGN.md`, todas las secciones de la propuesta original traducidas y adaptadas, y un checklist de marca |
| `tokens.json` | Tokens DTCG con `$extensions.dosruedas.original` y `brandToken` para trazar cada color a su origen |
| `variables.css` | `:root {}` con los valores adaptados |
| `theme.css` | Bloque `@theme {}` de Tailwind v4 con los valores adaptados |

## Comparativa

| Propuesta | Carácter original | Qué cambió | Fricción principal | Distancia a la marca |
|---|---|---|---|---|
| **Ramp** | Editorial monocromo con un solo acento amarillo | El negro pasa a `#0950F6` y el chartreuse a `#FFEC01`. Se conservan el peso único y las cards con hairline. Display en Anton 80px | El contador en vivo no puede mostrar métricas: queda con `[métrica]` o con los cortes confirmados (15:00 y 13:00) | **Muy baja.** Es la más cercana |
| **Brex** | Fintech claro con acento naranja y footer oscuro | El ember pasa a amarillo y el footer oscuro a azul. La banda "Trusted by" pasa a ser una banda de los 6 servicios | El CTA de nav y el del hero chocaban con la regla de un solo amarillo por pantalla: el de nav pasa a relleno azul | Baja |
| **superhuman** | Editorial calmo, display liviano (peso 460), violeta y burdeos | El burdeos del CTA pasa a amarillo; el violeta y el teal, a azul o tintes azules. El script manuscrito pasa a anotaciones en Geist Mono | Anton no tiene cortes livianos: la calma sale de tamaños contenidos (72px como máximo) y de una bajada en Outfit de 20px | Media |
| **Auros** | Tema oscuro teal, gradiente aurora, tipografía cinética gigante | Pasa a un tema invertido azul con capas que se aclaran (vidrio blanco, `#3570F8`, tarjeta blanca). La aurora pasa a CTA amarillo sólido con halo | Sin fondo más oscuro que `#0950F6` la jerarquía se invierte. El foco sobre azul necesita un borde blanco de separación (`ring-offset-white`) | Media: requiere validar contraste capa por capa |
| **figma** | Collage multicolor (9 colores decorativos) | Cada color se colapsa a un paso de azul o a amarillo. El collage se sostiene con 7 valores de azul, fotos con tinte azul y una sola tesela amarilla | El titular ultraliviano (peso 320) no existe en Anton, y el color en general es donde más se pierde | Alta: es la que más cambia de personalidad |

## Verificación realizada (nivel N0, solo docs)

- Hex: fuera de la paleta permitida solo aparecen en la columna "Hex original" de cada tabla de mapeo y en los campos `original` de `tokens.json`.
- `rgba`: todos teñidos de azul, amarillo o blanco. Los `rgba(0,0,0,…)` que aparecen son valores originales documentados o reglas de "no usar".
- Em-dash y en-dash: 0 en los 20 archivos de las propuestas y en este README.
- Los 5 `tokens.json` son JSON válido.
- Copy: voseo; las líneas rojas del dueño (duraciones de entrega, "agrupado", Factura A/C, rendición inmediata, 15 kg sin recargo, clientes, competidores) solo aparecen como prohibiciones. Precios y cifras son placeholders (`[precio]`, `[métrica]`, `$0.000`).

**Fecha:** 2026-09-29.
