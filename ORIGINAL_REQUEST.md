# Original User Request

## Initial Request — 2026-08-13T03:52:44-03:00

This is a single self-contained fix/refactor; keep it small and focused.

Migrate page-specific JSON-LD schemas from the dynamic `SchemaScript` client component directly into their respective `page.tsx` files as inline `<script>` tags to improve SSR reliability and SEO auditing.

Working directory: C:\Users\prest\proyectos\02enviosdosruedas

## Requirements

### R1. Migrate schemas to page.tsx components
For each page route defined in `src/components/seo/SchemaScript.tsx` (including Express, LowCost, Flex, Plan Emprendedores services, cotizadores, FAQ, About, and Contact), extract its corresponding JSON-LD schema object and inject it directly inside its `page.tsx` component as a:
`<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />`
tag.

### R2. Clean up dynamic SchemaScript configuration
Remove `SchemaScript` component rendering from `src/app/layout.tsx` and delete the `src/components/seo/SchemaScript.tsx` file to avoid duplicate schema injections.

### R3. Verify build and runtime compatibility
Ensure the project builds cleanly with `pnpm build` without any compilation, type-checking, or linting errors.

## Acceptance Criteria

### Schema Validation
- [ ] Each route renders its specific JSON-LD schema correctly in the HTML output on the server (SSR).
- [ ] The global `SchemaScript` component is removed from `layout.tsx` and deleted.
- [ ] No compilation or lint errors are present.

## Follow-up — 2026-08-13T07:46:29Z

<USER_REQUEST>
Reformulación completa de todos los componentes y páginas del proyecto Envíos DosRuedas para alinearlos con el sistema de diseño oficial ubicado en docs/envios_desing/.

Working directory: C:/Users/prest/proyectos/02enviosdosruedas
Integrity mode: demo

## Requirements

### R1. Aplicación del Sistema de Diseño Oficial
Todos los componentes UI y páginas del proyecto deben rediseñarse respetando los tokens, colores (Azul #0636A5, Amarillo #FFEC01, Blanco #FFFFFF), tipografías (Anton, Bebas Neue, Outfit) y estilos visuales (Double Bezel, CTA Nested Pill, Bento Cards, sombras duras coloreadas, bordes y motion) descritos en docs/envios_desing/readme.md.

### R2. Refactor de Páginas del App Router
Se deben reformular estéticamente todas las rutas públicas del App Router (src/app/):
- Home (src/app/page.tsx)
- Servicios (src/app/servicios/envios-express/page.tsx, envios-lowcost/, enviosflex/, plan-emprendedores/)
- Cotizadores (src/app/cotizar/express/, cotizar/lowcost/)
- Páginas institucionales/contacto (src/app/nosotros/sobre-nosotros/, nosotros/preguntas-frecuentes/, nosotros/nuestras-redes/, contacto/)

### R3. Preservación de Lógica y Compatibilidad
Se debe preservar la lógica de negocio actual (cálculo de tarifas reales con Math.ceil, geocodificación y autocomplete, Server Components por defecto, Next.js 16 y React 19).

## Acceptance Criteria

### Estética y Diseño
- No existen colores fuera de la paleta oficial (azul, amarillo, blanco) o remapeados semánticos en las páginas modificadas.
- Las tarjetas claras principales aplican el diseño Double Bezel (outer e inner).
- Los botones primarios usan la estructura y comportamiento de CtaNestedPill con su respectivo hover.
- La tipografía respeta las fuentes Anton para títulos mayúsculas, Bebas Neue para subtítulos y badges, y la mono para cifras y precios.
- No se usan emojis en la interfaz gráfica principal.

### Funcionalidad y Compilación
- El proyecto compila sin errores de compilación ni TypeScript (pnpm build finaliza exitosamente).
- Los cotizadores siguen funcionando correctamente de acuerdo a la lógica matemática de tarifas 2026.
</USER_REQUEST>
