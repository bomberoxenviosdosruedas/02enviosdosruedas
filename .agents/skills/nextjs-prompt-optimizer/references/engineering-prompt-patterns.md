# Patrones de Prompts de Ingeniería de Software

Referencia de patrones para redactar Criterios de Aceptación y Restricciones Técnicas en el Prompt 2.

---

## Criterios de Aceptación — Formato Given/When/Then

### Reglas de Escritura

1. **Dado** (Given): estado inicial del sistema o contexto del usuario. No incluir acciones.
2. **Cuando** (When): la acción específica del usuario o del sistema que dispara el comportamiento.
3. **Entonces** (Entonces): el resultado observable y verificable. Usar verbos medibles.

### Verbos de Resultado Permitidos

| Categoría | Verbos |
|---|---|
| UI | muestra, oculta, deshabilita, habilita, resalta, navega a, renderiza |
| Datos | devuelve, persiste, actualiza, elimina, valida, calcula |
| Sistema | emite, registra, notifica, redirige, recarga |
| Error | muestra mensaje de error, mantiene estado, no persiste |

### Ejemplos por Dominio

#### Formulario de Cotización

```
### AC-1: Cálculo Express correcto
- **Dado** que el usuario seleccionó servicio EXPRESS y la distancia es 3.5 km
- **Cuando** el sistema calcula el precio
- **Entonces** muestra $4.600 ARS (rango 3–5 km de la tabla de precios 2026)

### AC-2: Validación de distancia máxima
- **Dado** que el usuario ingresó origen y destino
- **Cuando** la distancia calculada supera 20 km
- **Entonces** muestra el mensaje "Distancia fuera de cobertura. Contactanos para cotización especial."
  y deshabilita el botón de confirmar

### AC-3: Precio +10km con Math.ceil
- **Dado** que la distancia calculada es 10.3 km en servicio EXPRESS
- **Cuando** el sistema aplica la tarifa por km adicional
- **Entonces** muestra $11.000 ARS (Math.ceil(10.3) = 11 × $1.000)
```

#### Componente UI

```
### AC-1: Render inicial
- **Dado** que el componente [Nombre] recibe props válidas
- **Cuando** se monta en el DOM
- **Entonces** renderiza sin errores y respeta el Double Bezel pattern (outer bg-brand-blue-50/80, inner bg-white)

### AC-2: Estado hover
- **Dado** que el componente está visible
- **Cuando** el usuario hace hover con mouse o foco con teclado
- **Entonces** aplica shadow-antigravity-deep y transición de 200ms ease-out

### AC-3: Accesibilidad
- **Dado** que el componente renderiza
- **Cuando** se audita con axe-core
- **Entonces** no reporta violaciones WCAG 2.1 AA y el ratio de contraste es ≥ 4.5:1
```

#### API Route / Server Action

```
### AC-1: Respuesta exitosa
- **Dado** que la request incluye payload válido según Zod schema
- **Cuando** la Server Action procesa la mutación
- **Entonces** devuelve `{ success: true, data: [entidad] }` y llama `revalidatePath`

### AC-2: Error de validación
- **Dado** que el payload omite un campo requerido
- **Cuando** la Server Action valida con Zod
- **Entonces** devuelve `{ error: { fieldErrors: { [campo]: string[] } } }` con status 400

### AC-3: Error de base de datos
- **Dado** que la DB no está disponible
- **Cuando** Prisma lanza PrismaClientKnownRequestError
- **Entonces** loguea el error en el servidor y devuelve `{ error: 'Error interno' }` sin exponer detalles
```

---

## Restricciones Técnicas — Patrones Comunes

### Restricciones de Datos (Fuentes de Verdad)

```
- ❌ NO inventar precios — consultar `docs/contexto/precios.md` y tabla `PricingRange` en BD
- ❌ NO hardcodear IDs de zona — obtener de `Zone` en BD vía Prisma
- ❌ NO modificar `src/lib/pricing.ts` sin actualizar los tests unitarios correspondientes
```

### Restricciones de Arquitectura

```
- ❌ NO convertir Server Components a Client Components sin justificación documentada
- ❌ NO crear nuevos archivos fuera de la estructura `src/app/`, `src/components/`, `src/lib/`
- ❌ NO importar desde `@/app/` dentro de `@/components/` (dependencia circular)
- ✅ Usar barrel exports `index.ts` en cada subdirectorio de componentes
```

### Restricciones de Rendimiento

```
- Bundle client-side: máximo 50kb gzipped por página (verificar con `pnpm build` → bundle analyzer)
- Imágenes: usar `<Image>` de Next.js con `width`, `height` y `priority` en LCP image
- Fuentes: cargar solo via `next/font` (no CDN externo)
- Animaciones: usar `will-change: transform` solo en elementos que animan; remover después
```

### Restricciones de Design System

```
- ❌ Clases de color sin token (`bg-blue-500`, `text-gray-700`, hex inline `#0636A5`)
- ❌ Fuentes sin token (`font-family: 'Anton'` inline)
- ❌ Sombras sin token (box-shadow inline)
- ✅ Siempre: `bg-brand-blue-700`, `text-brand-ink`, `font-display`, `shadow-antigravity-deep`
```

---

## Anti-Patrones — Evitar en Todo Prompt de Ingeniería

| Anti-patrón | Por qué evitarlo | Alternativa |
|---|---|---|
| AC sin "Entonces" medible | No se puede verificar | Especificar valor exacto o comportamiento observable |
| Restricción genérica ("no uses any") | Ya está en reglas base | Referir archivo específico donde no aplicar |
| Placeholder sin valor default | El agente inventa datos | Proveer ejemplo concreto del dominio |
| AC de implementación ("debe usar useState") | Acopla la prueba al código | AC de comportamiento ("muestra contador actualizado") |
| Restricción contradictoria | Paraliza al agente | Priorizar explícitamente o eliminar una |
