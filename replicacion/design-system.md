# Sistema de Diseño Oficial: Envíos DosRuedas (Design System Specification)

> **Ubicación:** `replicacion/design-system.md`  
> **Ecosistema:** Next.js 16 (App Router) · React 19 · TypeScript 5.7+ · Tailwind CSS v4 · Motion  
> **Filosofía Visual:** Emil Kowalski Physics + Criterio Anti-Slop + Ley de Tres Colores de Marca  
> **Ubicación Geográfica:** Mar del Plata, Buenos Aires, Argentina  

---

## 1. Atmósfera Visual y Personalidad de Marca

* **Concepto:** Logística vial de alta energía, limpia, confiable y de precisión milimétrica. Evoca la vibración operativa del asfalto de Mar del Plata, la exactitud de un despacho de última milla y la cercanía de un equipo propio con base fija.
* **Firma Geométrica:** **Doble Bezel** (`double-bezel-outer` + `double-bezel-inner`). Las tarjetas y módulos interactivos nunca usan bordes simples genéricos; emplean un contenedor externo con fondo tintado suave (`brand-blue-50/80`) y un contenedor interno blanco puro con borde técnico de precisión (`brand-blue-100/60`).
* **Calibración de la Densidad Visual:**
  - **Superficies Comerciales / Institucionales:** `5/10` (Equilibrada, aireada, lectura fluida).
  - **Cotizador Unificado y Cockpits Operativos:** `8/10` (Alta densidad, datos tabulares, inputs compactos y accesos directos).
* **Física de Movimiento:** Micro-interacciones reactivas basadas en resortes (Spring Physics), elevación con sombras teñidas en hover (`translate-y-[-2px]`), y respeto incondicional por la preferencia de movimiento reducido del usuario (`useReducedMotion`).

---

## 2. Paleta Canónica — La Ley de Tres Colores

La aplicación se diseña bajo una regla estricta de **tres colores principales**. Se prohíben terminantemente los fondos negros puros (`#000000`), grises genéricos (`slate`, `zinc`, `neutral`) o tonos más oscuros que el azul institucional. Toda la escala de sombras y neutros está teñida en base a la luz azul.

### 2.1 Colores Nucleares

| Token Semántico | Código Hex | Rol Funcional y Jerarquía |
| :--- | :--- | :--- |
| **Azul Institucional** (`--color-brand-blue-500`) | `#0950F6` | **Techo máximo de oscuridad**. Lienzo de Hero sections, Cabecera, Footer, titulares H1/H2, anillos de foco y texto sobre botones amarillos. |
| **Amarillo Vial** (`--color-brand-yellow-500`) | `#FFEC01` | **Señal y Acción**. Botones CTA primarios, pasos completados en steppers, precios destacados sobre fondo azul y franja de remate de 6px en cabecera y pie. Máximo 15% de cobertura visual en pantalla. |
| **Blanco Puro** (`--color-white`) | `#FFFFFF` | **Lienzo Universal**. Superficie general de lectura, fondos de tarjetas interiores, inputs limpios y contraste sobre fondos azules. |

### 2.2 Escala Tonal de Soporte Vial

```css
/* Azul Vibrante — Escala de luz a saturación (Tope de oscuridad: #0950F6) */
--color-brand-blue-50:  #E6EEFE; /* Fondos suaves, bezel exterior, skeleton loader, hover ghost */
--color-brand-blue-100: #BACEFD; /* Bordes estructurales, divisores sutiles, conectores inactivos */
--color-brand-blue-200: #8EAFFB; /* Hover de bordes de tarjeta, anillos de radio, trazos SVG */
--color-brand-blue-300: #628FF9; /* Borde de input en reposo, hover de bezel, trazos secundarios */
--color-brand-blue-400: #3570F8; /* Íconos funcionales, texto secundario grande (≥24px), hover de fondos azules */
--color-brand-blue-500: #0950F6; /* Color primario canónico, botones primarios azules, tipografía principal */

/* Amarillo Vial — Señalización y Estados Activos */
--color-brand-yellow-50:  #FFFDE6; /* Fondo de servicio seleccionado (Flex/Express) */
--color-brand-yellow-100: #FFFAB8; /* Halos sutiles, micro-badges de alerta comercial */
--color-brand-yellow-200: #FFF78A; /* Borde de tarjeta seleccionada */
--color-brand-yellow-300: #FFF45C; /* Detalle mono sobre fondo azul */
--color-brand-yellow-400: #FFF12E; /* Hover de CTA primario y botón WhatsApp */
--color-brand-yellow-500: #FFEC01; /* Color canónico de acción / CTA principal */
--color-brand-yellow-600: #E6D400; /* Estado activo/presionado del CTA primario */
```

### 2.3 Canales Sociales Oficiales (Identidades Específicas)

* **WhatsApp Oficial:** `#128C7E` (Base profunda) y `#25D366` (Verde vibrante). Texto y badges siempre en blanco puro (`#FFFFFF`).
* **Instagram Oficial:** Gradiente lineal `#833AB4` → `#E1306C` → `#FD1D1D` → `#F77737`. Exclusivo del componente de redes.
* **Facebook Oficial:** `#0866FF` / `#1877F2` (Azul Meta corporativo).

### 2.4 Sistema de Sombras Teñidas (Tinted Shadows)

Quedan prohibidas las sombras con grises neutros o negros (`rgba(0,0,0,...)`). Se usan sombras calculadas a partir del azul o amarillo:

```css
--shadow-sm: 0 2px 4px rgba(9, 80, 246, 0.06), 0 1px 2px rgba(9, 80, 246, 0.03);
--shadow-md: 0 4px 8px rgba(9, 80, 246, 0.08), 0 2px 4px rgba(9, 80, 246, 0.04);
--shadow-lg: 0 8px 16px rgba(9, 80, 246, 0.1), 0 4px 8px rgba(9, 80, 246, 0.06);
--shadow-float: 0 25px 50px -12px rgba(9, 80, 246, 0.15);
--shadow-hover-lift: 0 24px 64px rgba(9, 80, 246, 0.20);
--shadow-accent-sm: 0 2px 4px rgba(255, 236, 1, 0.15);
--shadow-cta-glow: 0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18);
```

---

## 3. Jerarquía Tipográfica

Se combinan cuatro familias tipográficas con funciones claramente delimitadas:

```
+-----------------------------------------------------------------------------------------+
|  DISPLAY: Anton SC / Anton        → Titulares masivos, impacto cartelero vial, mayúsculas |
|  SUBHEADING: Bebas Neue           → Botones, badges, cabeceras técnicas, tracking +0.05em  |
|  BODY / SANS: Outfit / IBM Plex   → Párrafos, formularios, lectura ergonómica (No Inter) |
|  MONO: Geist Mono                 → Precios, distancias km, horarios, coordenadas GPS   |
+-----------------------------------------------------------------------------------------+
```

### 3.1 Familias y Aplicación Práctica

1. **Titulares Display (`font-display`):**
   - **Fuente:** `Anton SC`, `Anton`, sans-serif.
   - **Reglas:** Mayúsculas obligatorias (`uppercase`), interlineado compacto (`leading-none` o `leading-[0.9]`), balanceado (`text-wrap: balance`), tracking ajustado (`tracking-tighter` o `-0.05em`).
   - **Aplicación:** Títulos H1 de inicio y servicios, grandes cifras de precios de impacto.
2. **Subtítulos y Componentes de Acción (`font-subheading`):**
   - **Fuente:** `Bebas Neue`, sans-serif.
   - **Reglas:** Mayúsculas, espaciado expandido (`tracking-wider` / `0.05em`), peso pronunciado.
   - **Aplicación:** Botones CTA, tabs de servicios, rótulos de pasos, micro-badges de horarios de corte.
3. **Cuerpo de Lectura (`font-sans`):**
   - **Fuente:** `Outfit`, `IBM Plex Sans`, sans-serif. (*Prohibido el uso de Inter*).
   - **Reglas:** Interlineado amplio (`leading-relaxed` / `1.625`), límite óptimo de 65 caracteres por renglón (`max-w-[65ch]`), contraste accesible WCAG AA (mínimo 4.5:1).
   - **Aplicación:** Explicaciones de servicios, preguntas frecuentes, descripciones comerciales.
4. **Datos Numéricos y Tabulares (`font-mono`):**
   - **Fuente:** `Geist Mono`, monospace.
   - **Reglas:** `font-variant-numeric: tabular-nums`, números alineados verticalmente.
   - **Aplicación:** Tarifas en pesos (`$3.700`), distancias viales (`4.8 km`), horarios límite (`15:00 hs`), teléfonos y coordenadas.

---

## 4. Tokens de Movimiento y Animación (Emil Kowalski Physics)

```css
/* Curvas de aceleración */
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
--ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);

/* Duraciones canónicas */
--duration-feedback: 160ms; /* Checkbox, switches, radio buttons */
--duration-dropdown: 200ms; /* Menús desplegables, popovers */
--duration-modal: 250ms;    /* Modales, drawers, diálogos */
```

* **Regla de Accesibilidad:** Siempre comprobar `useReducedMotion()` antes de ejecutar transiciones espaciales. Si el usuario prefiere movimiento reducido, las animaciones se degradan a cambios instantáneos o fundidos suaves de opacidad (`opacity`).

---

## 5. Primitivas de Componentes UI en Tailwind CSS v4

### 5.1 Tarjeta Doble Bezel (`DoubleBezelCard`)
```tsx
export function DoubleBezelCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-1.5 md:p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm ${className}`}>
      <div className="bg-white rounded-xl p-5 md:p-6 border border-brand-blue-100/40 shadow-xs h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
```

### 5.2 Botón CTA Primario (Amarillo Vial)
```html
<button class="bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 font-subheading text-lg md:text-xl font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-accent-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2">
  Cotizar Envío Online
</button>
```

### 5.3 Botón Secundario (Azul Institucional)
```html
<button class="bg-brand-blue-500 hover:bg-brand-blue-400 active:bg-brand-blue-500 text-white font-subheading text-lg md:text-xl font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2">
  Ver Cobertura en Mar del Plata
</button>
```

### 5.4 Input de Formulario con Precisión Técnica
```html
<div class="relative">
  <input 
    type="text" 
    class="w-full bg-white border border-brand-blue-100 focus:border-brand-blue-500 rounded-xl px-4 py-3 text-brand-blue-500 font-sans placeholder:text-brand-blue-200 outline-none transition-colors duration-160 shadow-2xs"
    placeholder="Ej: Friuli 1972, Mar del Plata"
  />
</div>
```

---

## 6. Configuración de `globals.css` para Tailwind CSS v4

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --surface-page: var(--color-white);
  --text-body: var(--color-brand-blue-500);

  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);

  --duration-feedback: 160ms;
  --duration-dropdown: 200ms;
  --duration-modal: 250ms;
}

@theme {
  /* Azul Vibrante */
  --color-brand-blue-50: #E6EEFE;
  --color-brand-blue-100: #BACEFD;
  --color-brand-blue-200: #8EAFFB;
  --color-brand-blue-300: #628FF9;
  --color-brand-blue-400: #3570F8;
  --color-brand-blue-500: #0950F6;

  /* Amarillo Vial */
  --color-brand-yellow-50: #FFFDE6;
  --color-brand-yellow-100: #FFFAB8;
  --color-brand-yellow-200: #FFF78A;
  --color-brand-yellow-300: #FFF45C;
  --color-brand-yellow-400: #FFF12E;
  --color-brand-yellow-500: #FFEC01;
  --color-brand-yellow-600: #E6D400;

  /* Blanco */
  --color-white: #FFFFFF;

  /* Aliases Semánticos */
  --color-brand-blue: var(--color-brand-blue-500);
  --color-brand-yellow: var(--color-brand-yellow-500);
  --color-brand-ink: var(--color-brand-blue-500);
  --color-brand-white: var(--color-white);

  /* Tipografías */
  --font-sans: var(--font-sans, "Outfit"), "IBM Plex Sans", sans-serif;
  --font-display: var(--font-display, "Anton SC"), "Anton", sans-serif;
  --font-subheading: var(--font-subheading, "Bebas Neue"), sans-serif;
  --font-mono: var(--font-mono, "Geist Mono"), monospace;

  /* Desactivación de paletas no permitidas */
  --color-neutral-50: initial; --color-neutral-500: initial; --color-neutral-900: initial;
  --color-stone-50: initial; --color-stone-500: initial; --color-stone-900: initial;
  --color-green-500: initial;
  --color-emerald-500: initial;
}
```
