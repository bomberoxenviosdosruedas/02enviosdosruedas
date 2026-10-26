# Auditoría de Sistema de Diseño y Estilos CSS
**Proyecto:** Envíos DosRuedas
**Fuente de Verdad de Estilos:** `src/app/globals.css` y `DESIGN.md`
**Regla Canon:** Ajuste Max `#0950F6` & Ley de Tres Colores (#0950F6 Azul Canónico, #FFEC01 Amarillo Vial, #FFFFFF Blanco Puro)

---

## 1. La Paleta Cromática Real y Reglas de Uso

### 1.1 Mapeo Completo de Tokens de Color
El sistema prohíbe taxativamente el uso de negro puro (`#000000`), grises neutros/oscuros, verdes en botones (salvo ícono interno vectorizado de WhatsApp) y cualquier matiz de azul más oscuro que `#0950F6` (`#0636A5`, `#052D8C`, `#04236B`, `#021440`, `#00277C`).

| Variable CSS / Token | Hexadecimal / Valor | Nombre Semántico / Rol | Uso en Interfaz y Reglas |
| :--- | :--- | :--- | :--- |
| `--color-brand-blue-500` / `brand-blue-700` | `#0950F6` | **Azul Canónico Primario** | Tope absoluto de oscuridad. Titulares display, texto principal en fondos claros, marcos hero, bordes activos. |
| `--color-brand-blue-400` / `brand-blue-800` | `#3570F8` | **Azul Acento Eléctrico** | Hover en superficies azules, íconos secundarios y elementos decorativos complementarios. |
| `--color-brand-blue-300` | `#628FF9` | **Azul Borde Activo** | Trazos de foco en inputs al interactuar y bordes exteriores de tarjetas en hover. |
| `--color-brand-blue-200` | `#8EAFFB` | **Azul Trazo Suave** | Anillos de selección secundaria y delineados de apoyo vectoriales. |
| `--color-brand-blue-100` | `#BACEFD` | **Azul Divisor Estructural** | Líneas divisorias, bordes sutiles de tarjetas y separadores de listas. |
| `--color-brand-blue-50` | `#E6EEFE` | **Azul Superficie Acolchada** | Fondo del bisel exterior (`DoubleBezelCard`), bloques secundarios y skeletons de carga. |
| `--color-brand-yellow-500` | `#FFEC01` | **Amarillo Vial Canónico** | Cobertura <= 15%. Acciones primarias (CTAs), badges de prioridad, Knockout badges, nodos de stepper. |
| `--color-brand-yellow-400` | `#FFF12E` | **Amarillo Hover Radiante** | Estado hover para botones CTA primarios y accesos a WhatsApp. |
| `--color-brand-yellow-600` | `#E6D400` | **Amarillo Presionado** | Estado pressed / active en controles táctiles. |
| `--color-brand-yellow-50` | `#FFFDE6` | **Amarillo Fondo Destacado** | Fondos suaves para tarjetas seleccionadas (Mercado Envíos Flex / Express). |
| `--color-white` | `#FFFFFF` | **Blanco Puro** | Lienzo base de la página, tarjetas interiores limpias y contraste sobre azul. |
| `--color-error-500` | `#EF4444` | **Rojo Operativo** | Validación de campos inválidos, avisos críticos y cancelaciones. |
| `--color-social-whatsapp` | `#25D366` | **Verde WhatsApp (Restringido)** | Únicamente permitido en el glifo vectorial interno del botón de WhatsApp (shell amarillo). |

### 1.2 Matriz Estricta de Contraste y Mapeo de Texto según Fondo
1. **Fondo Blanco / Claro (`#FFFFFF`, `#E6EEFE`):** Texto principal en **Azul Canónico (`#0950F6`)**. Se prohíbe texto negro o gris.
2. **Fondo Azul (`#0950F6`):** Texto principal en **Blanco Puro (`#FFFFFF`)** con acentos/highlights en **Amarillo Vial (`#FFEC01`)**.
3. **Fondo Amarillo (`#FFEC01`):** Texto en **Azul Canónico (`#0950F6`)** con peso negrita (`font-bold`). Se prohíbe texto blanco o negro sobre amarillo.

---

## 2. Clases CSS Personalizadas y Utilidades del Sistema

Todas las utilidades personalizadas están declaradas en `src/app/globals.css` mediante la directiva `@utility` de Tailwind v4:

### 2.1 Módulo DoubleBezelCard (Firma Geométrica)
```css
/* Bisel Exterior Concéntrico */
@utility double-bezel-outer {
  background-color: color-mix(in srgb, var(--color-brand-blue-50) 80%, transparent);
  border: 1px solid var(--color-brand-blue-100);
  padding: 0.5rem;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-float);
  transition: border-color var(--duration-dropdown) var(--ease-out-ui), box-shadow var(--duration-dropdown) var(--ease-out-ui);
  @media (hover: hover) and (pointer: fine) {
    &:hover { border-color: var(--color-brand-blue-300); box-shadow: var(--shadow-antigravity-deep); }
  }
}

/* Núcleo Interior Blanco */
@utility double-bezel-inner {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: inset 0 2px 4px rgba(9,80,246,0.06);
  border: 1px solid color-mix(in srgb, var(--color-brand-blue-50) 50%, transparent);
}
```

### 2.2 Módulo CTANestedPill (Botón Píldora Anidado)
```css
/* Botón Píldora de Acción Principal */
@utility cta-nested-pill {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-full);
  font-family: var(--font-subheading);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  min-height: 44px;
  transition: transform var(--duration-feedback) var(--ease-out-ui), background-color var(--duration-feedback) var(--ease-out-ui), border-color var(--duration-feedback) var(--ease-out-ui), box-shadow var(--duration-feedback) var(--ease-out-ui);
  @media (hover: hover) and (pointer: fine) {
    &:hover { transform: translateY(-1px); }
  }
  &:active { transform: scale(0.97); }
}

/* Orbe de Ícono Integrado */
@utility cta-nested-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.75rem;
  background-color: rgba(9,80,246,0.1);
  transition: transform 0.25s;
  .group:hover & { transform: translateX(4px); }
}
```

### 2.3 Utilidades Tipográficas y Estiramiento Kinetic
```css
@utility font-display {
  font-family: var(--font-display);
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.05em;
  text-wrap: balance;
}

@utility font-subheading {
  font-family: var(--font-subheading);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@utility font-mono {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

@utility text-display {
  font-family: var(--font-display);
  font-size: clamp(3rem, 5vw, 4.5rem);
  line-height: 0.85;
  letter-spacing: -0.05em;
  text-wrap: balance;
  text-transform: uppercase;
}

@utility text-h1 {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 4vw, 3rem);
  line-height: 0.9;
  letter-spacing: -0.025em;
  text-wrap: balance;
  text-transform: uppercase;
}

@utility text-h2 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-wrap: balance;
  text-transform: uppercase;
}

@utility kinetic-font-stretch {
  display: inline-block;
  transition: transform 0.4s var(--ease-out-ui), letter-spacing 0.4s;
  transform-origin: left;
  @media (hover: hover) and (pointer: fine) {
    &:hover { transform: scaleX(1.08); letter-spacing: 0.02em; }
  }
}
```

### 2.4 Animaciones y Sombras Teñidas
```css
/* Sombras Teñidas (Sin Grises/Negros) */
--shadow-sm: 0 2px 4px rgba(9, 80, 246, 0.06), 0 1px 2px rgba(9, 80, 246, 0.03);
--shadow-md: 0 4px 8px rgba(9, 80, 246, 0.08), 0 2px 4px rgba(9, 80, 246, 0.04);
--shadow-float: 0 25px 50px -12px rgba(9, 80, 246, 0.15);
--shadow-antigravity-deep: 0 24px 64px rgba(9, 80, 246, 0.22);
--shadow-cta-glow: 0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18);

/* Keyframes de Movimiento */
@keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes shuttle { from { transform: translateX(0); } to { transform: translateX(100%); } }
@keyframes pulse-ring { 0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.9; } 100% { transform: translate(-50%, -50%) scale(3.2); opacity: 0; } }
@keyframes roundtrip { 0% { transform: translateX(0); } 44% { transform: translateX(100%); } 56% { transform: translateX(100%); } 100% { transform: translateX(0); } }
@keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
```

---

## 3. Jerarquía Tipográfica Declarada

| Rol Tipográfico | Fuente Declarada | Peso | Transformación | Tracking / Line Height | Uso en la Aplicación |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`font-display`** | `Anton` / `Anton SC` | 400 | UPPERCASE | Tracking `-0.05em`, Leading `0.85` - `0.9` | Titulares de héroes (H1), números gigantes y frases de impacto |
| **`font-subheading`**| `Bebas Neue` | 400 | UPPERCASE | Tracking `0.05em`, Leading `1.0` | Subtítulos, eyebrows, etiquetas de sección y botones |
| **`font-sans`** | `Outfit` | 400, 500, 600 | Normal | Normal, Line Height `1.625` | Cuerpo de texto, descripciones, formularios e inputs |
| **`font-mono`** | `Geist Mono` | 500, 600 | Normal | `tabular-nums` | Precios en ARS, distancias en km, horarios de corte y teléfonos |

---

## 4. Escala de Bordes, Radios y Espaciados

### 4.1 Escala de Radios (`--radius-*`)
- `--radius-sm`: `6px` (Badges pequeños y microchips)
- `--radius-md`: `8px` (Botones estándar y controles secundarios)
- `--radius-lg`: `12px` (Inputs y núcleo interior de BezelCard)
- `--radius-xl`: `16px` (Bisel exterior de tarjetas estándar)
- `--radius-2xl`: `24px` (Tarjetas de servicio principales)
- `--radius-3xl`: `32px` (Contenedores heroicos)
- `--radius-full`: `9999px` (Píldoras CTA, badges circulares y avatares)

### 4.2 Escala de Espaciado Seccional
- `--spacing-section-y`: `6rem` (96px en desktop)
- `--spacing-section-y-tight`: `3rem` (48px en mobile)
- `--spacing-container-max`: `80rem` (1280px / `max-w-7xl`)
