# 04 — Sistema de Diseño e Interfaces (UI & Design System)

## 1. Tokens de Color Institucionales

El diseño visual de **Envíos DosRuedas** se rige por una paleta cromática estricta de 3 colores principales. Cualquier tonalidad de azul alternativo (como `#0636A5`, `#052C87`, `#04236B`) se considera deuda técnica.

```css
:root {
  --color-brand-blue: #0950F6;  /* Azul primario oficial (el más oscuro permitido) */
  --color-brand-yellow: #FFEC01; /* Amarillo institucional (uso ≤15% de superficie, CTAs) */
  --color-brand-white: #FFFFFF;  /* Blanco puro para fondos y tarjetas */
}
```

---

## 2. Tipografía y Jerarquía

1. **Titulares y Nombres de Servicio**: `Anton` / `Bebas Neue` únicamente en peso `400`. Se aplican transformaciones en mayúsculas (`uppercase`) y un tracking ajustado para dar carácter industrial y urbano.
2. **Cuerpo de Texto y Formularios**: `Outfit` en pesos 400 y 500 para máxima legibilidad en dispositivos móviles.
3. **Cifras y Precios**: `Geist Mono` con la propiedad CSS `tabular-nums` para alineación vertical limpia de precios en listas y tablas comparativas.

---

## 3. Patrones de Maquetación y Componentes UI

### 3.1. Contenedores *Double Bezel*
Las tarjetas de servicios y paneles destacados emplean una estructura visual de doble marco (*Double Bezel*), compuesta por un borde exterior sutil con radios redondeados y una caja interior acolchada que resalta los elementos clave.

### 3.2. Grillas Asimétricas Bento (12 columnas)
Las páginas principales distribuyen la información en grillas estilo Bento de 12 columnas:
- Bloques destacados ocupan `span-7` o `span-5`.
- Banners horizontales de ancho completo ocupan `span-12`.

### 3.3. Componentes Primitivos (`src/components/ui/`)
- `CTANestedPill.tsx`: Botón CTA envolvente con forma de píldora que admite `type="submit"` o `type="button"`, ícono Lucide dinámico y micro-interacción al presionar.
- `RadioCardGroup`: Selección accesible de servicios mediante tarjetas de radio con estado activo resaltado en azul institucional.

---

## 4. Accesibilidad y Animaciones Responsivas

- **Touch Targets**: Todos los elementos interactivos (botones, radios, inputs) garantizan un área mínima de clic de **44 × 44 px**.
- **Estados de Foco**: Navegación por teclado con anillo visible de enfoque (`ring-2 ring-[#0950F6]`).
- **Control de Movimiento Reducido (`prefers-reduced-motion`)**:
  Todas las animaciones controladas con GSAP o CSS transition evalúan la preferencia del usuario a través del hook `useReducedMotion()`. Si el usuario ha activado la reducción de movimiento, las transiciones se simplifican o se desactivan automáticamente.
