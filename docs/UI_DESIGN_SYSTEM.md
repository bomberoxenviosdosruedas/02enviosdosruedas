# Sistema de Diseño de Interfaz de Usuario (UI Design System) — Envíos DosRuedas

> **Especificación Técnica de UI, Arquitectura de Tokens y Librería de Componentes**  
> *Versión 2.5 · Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript 5.7*  
> *Autoridad:* UI Designer Specialist & Matías Nicolás Cejas (CEO)

---

## 1. 🎨 Fundamentos de Diseño Visual (Design Foundations)

El sistema de interfaz de **Envíos DosRuedas** traduce la identidad de marca en una experiencia digital ágil, técnica y humana. Su estética combina la alta visibilidad de la señalética vial con la elegancia matemática de componentes modulares de doble bisel.

### 1.1 Arquitectura de Tokens Cromáticos

```css
/* Tokens Oficiales de UI en globals.css */
:root {
  /* ========================================================================
   * 1. COLORES PRIMARIOS Y ROLES SEMÁNTICOS
   * ======================================================================== */
  --edr-blue-500: #0950F6;          /* Azul Institucional Canónico: Techo de oscuridad */
  --edr-blue-400: #3570F8;          /* Hover de superficies azules e íconos activos */
  --edr-blue-300: #628FF9;          /* Anillos de foco y trazos en hover */
  --edr-blue-200: #8EAFFB;          /* Trazos de apoyo y delineados secundarios */
  --edr-blue-100: #BACEFD;          /* Divisores estructurales y bordes de reposo */
  --edr-blue-50:  #E6EEFE;          /* Bisel exterior de DoubleBezelCard y skeletons */

  --edr-yellow-500: #FFEC01;        /* Amarillo Señal: Botones CTA primarios y badges (<=15%) */
  --edr-yellow-400: #FFF12E;        /* Hover radiante de CTA primario y WhatsApp */
  --edr-yellow-600: #E6D400;        /* Estado pressed/activo en botones */
  --edr-yellow-50:  #FFFDE6;        /* Fondo tenue de selección (Mercado Envíos Flex) */

  --edr-asphalt: #111625;           /* Negro Asfalto: Tipografía de títulos display y solidez */
  --edr-slate:   #64748B;           /* Gris Pizarra: Textos secundarios, metadatos y tracking */
  --edr-tech-gray: #F4F6F9;         /* Gris Técnico: Superficies de fondo y paneles neutros */
  --edr-white:   #FFFFFF;           /* Blanco Puro: Lienzo general y tarjetas interiores */

  /* Estados Operativos */
  --edr-error:   #EF4444;           /* Rojo Vial: Errores, campos inválidos y cancelaciones */
  --edr-success: #10B981;           /* Verde Despacho: Entregas confirmadas y termómetro verde */
  --edr-warning: #F59E0B;           /* Ámbar: Demoras climáticas y avisos de corte */

  /* ========================================================================
   * 2. SISTEMA DE ELEVACIÓN Y PROFUNDIDAD TEÑIDA (NO GRAY SHADOWS)
   * ======================================================================== */
  --shadow-sm:        0 2px 4px rgba(9, 80, 246, 0.05);
  --shadow-md:        0 4px 12px rgba(17, 22, 37, 0.08);
  --shadow-float:     0 20px 40px -10px rgba(9, 80, 246, 0.14);
  --shadow-deep:      0 24px 64px rgba(9, 80, 246, 0.22);
  --shadow-cta-glow:  0 0 24px rgba(255, 236, 1, 0.45), 0 8px 20px rgba(9, 80, 246, 0.15);

  /* ========================================================================
   * 3. MOTION & TIMING TOKENS (Emil Kowalski Philosophy)
   * ======================================================================== */
  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out:    cubic-bezier(0.23, 1, 0.32, 1);
  --duration-fast: 160ms;
  --duration-normal: 250ms;
  --duration-smooth: 400ms;
}
```

---

### 1.2 Sistema Tipográfico Digital

| Nivel UI | Fuente | Peso | Desktop (Rem / Px) | Mobile (Px) | Line-Height | Tracking | Rol de Interfaz |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `Plus Jakarta Sans` | ExtraBold (800) | `3.5rem (56px)` | `40px` | `1.05` | `-0.03em` | Héroes de página, impacto visual y números principales |
| **Sección H2** | `Plus Jakarta Sans` | Bold (700) | `2.25rem (36px)` | `28px` | `1.15` | `-0.02em` | Títulos de cotizador, catálogo de servicios y mapa |
| **Módulo H3**  | `Plus Jakarta Sans` | SemiBold (600) | `1.5rem (24px)` | `20px` | `1.25` | `-0.01em` | Encabezados de tarjetas, modales y pasos del stepper |
| **Eyebrow / Tag**| `Plus Jakarta Sans`| Bold (700) | `0.8125rem (13px)`| `12px` | `1.0` | `+0.08em` | Badges ("EXPRESS", "CORTE 15:00", "SAME-DAY") en UPPERCASE |
| **Cuerpo Principal**| `Inter` | Regular / Med (500)| `1.0rem (16px)` | `16px` | `1.6` | `0em` | Descripciones de servicio, inputs y párrafos explicativos |
| **Cuerpo Secundario**| `Inter`| Regular (400) | `0.875rem (14px)` | `14px` | `1.5` | `0em` | Subtítulos, condiciones operativas, letra chica legal |
| **Métricas / Data** | `Inter` / `Geist Mono`| SemiBold (600)| `1.125rem (18px)`| `16px` | `1.2` | `tabular-nums` | Precios en ARS (`$4.500`), km de ruta, horarios de corte |

---

### 1.3 Sistema de Espaciado y Ritmo Modular (Base 4px)

```
Scale:
--space-1:  0.25rem (4px)   --> Micro-márgenes entre íconos y texto
--space-2:  0.50rem (8px)   --> Relleno de biseles exteriores (p-2) y chips
--space-3:  0.75rem (12px)  --> Gaps en campos de formulario y botones compactos
--space-4:  1.00rem (16px)  --> Radio de tarjetas (rounded-2xl) y padding móvil
--space-6:  1.50rem (24px)  --> Padding interior de DoubleBezelCard (p-6)
--space-8:  2.00rem (32px)  --> Separación entre grupos modulares en cards
--space-12: 3.00rem (48px)  --> Espaciado vertical de secciones en móvil
--space-16: 4.00rem (64px)  --> Separación de secciones en tablet
--space-24: 6.00rem (96px)  --> Espaciado generoso entre secciones en desktop
```

---

## 2. 🧱 Librería de Componentes Canónicos

### 2.1 Botón Píldora de Alto Impacto (`CTANestedPill`)

Es el principal disparador de conversión (cotizaciones, WhatsApp y reservas).

```tsx
// src/components/ui/CTANestedPill.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CTANestedPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'blue' | 'outline' | 'ghost';
  size?: 'compact' | 'default' | 'large';
  icon?: React.ReactNode;
}

export const CTANestedPill = ({
  children,
  href,
  variant = 'primary',
  size = 'default',
  icon = <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />,
  className,
  ...props
}: CTANestedPillProps) => {
  const styles = cn(
    'group inline-flex items-center justify-between gap-3 rounded-full font-bold uppercase tracking-wider',
    'transition-all duration-160 ease-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    size === 'compact' && 'px-4 py-2 text-xs min-h-[44px]',
    size === 'default' && 'px-5 py-2.5 text-sm min-h-[48px]',
    size === 'large' && 'px-8 py-3.5 text-base min-h-[56px]',
    variant === 'primary' && 'bg-brand-yellow-500 text-brand-blue-500 border-brand-yellow-500 hover:bg-brand-yellow-400 hover:shadow-cta-glow focus-visible:ring-brand-blue-500',
    variant === 'blue' && 'bg-brand-blue-500 text-white border-brand-blue-500 hover:bg-brand-blue-400 hover:shadow-float focus-visible:ring-brand-yellow-500',
    variant === 'outline' && 'border-2 border-brand-blue-500 text-brand-blue-500 bg-transparent hover:bg-brand-blue-50 focus-visible:ring-brand-blue-500',
    className
  );

  const content = (
    <>
      <span className="font-heading">{children}</span>
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue-500/10 group-hover:bg-brand-blue-500/15 transition-colors">
        {icon}
      </span>
    </>
  );

  if (href) return <Link href={href} className={styles}>{content}</Link>;
  return <button className={styles} {...props}>{content}</button>;
};
```

---

### 2.2 Tarjeta de Doble Bisel Concéntrico (`DoubleBezelCard`)

La firma geométrica de la interfaz que genera profundidad sin recargar visualmente.

```tsx
// src/components/ui/DoubleBezelCard.tsx
import React from 'react';
import { cn } from '@/lib/utils';

export interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'highlight';
  hoverEffect?: boolean;
}

export const DoubleBezelCard = ({
  children,
  variant = 'light',
  hoverEffect = true,
  className,
  ...props
}: DoubleBezelCardProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-2 transition-all duration-300 shadow-float',
        variant === 'light' && 'bg-brand-blue-50/80 border border-brand-blue-100',
        variant === 'dark' && 'bg-brand-blue-50/40 border border-brand-blue-100/60',
        variant === 'highlight' && 'bg-brand-yellow-50/90 border border-brand-yellow-200',
        hoverEffect && 'hover:shadow-deep hover:border-brand-blue-300 hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'rounded-xl p-6 shadow-sm transition-colors duration-200',
          variant === 'light' && 'bg-white text-brand-blue-500 border border-brand-blue-50/50',
          variant === 'dark' && 'bg-brand-blue-500 text-white border border-white/10',
          variant === 'highlight' && 'bg-white text-brand-blue-500 border border-brand-yellow-100'
        )}
      >
        {children}
      </div>
    </div>
  );
};
```

---

### 2.3 Campo de Entrada y Formularios (`InputField`)

Diseñado para alta velocidad de tipeo en el cotizador de envíos y validación visual instantánea.

```tsx
// src/components/ui/InputField.tsx
import React from 'react';
import { cn } from '@/lib/utils';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  leadingIcon?: React.ReactNode;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, helperText, leadingIcon, className, id, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-wider text-brand-slate">
          {label}
        </label>
        <div className="relative flex items-center">
          {leadingIcon && (
            <span className="absolute left-3.5 text-brand-blue-400 pointer-events-none">
              {leadingIcon}
            </span>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              'w-full min-h-[48px] rounded-xl px-4 py-2.5 text-base font-sans bg-white border',
              'transition-all duration-160 ease-out placeholder:text-brand-slate/60 text-brand-asphalt',
              'hover:border-brand-blue-300 focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20',
              leadingIcon && 'pl-11',
              error ? 'border-brand-error focus:ring-brand-error/20 focus:border-brand-error' : 'border-brand-blue-100',
              className
            )}
            {...props}
          />
        </div>
        {error ? (
          <span className="text-xs font-medium text-brand-error animate-fadeIn">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-brand-slate">{helperText}</span>
        ) : null}
      </div>
    );
  }
);
InputField.displayName = 'InputField';
```

---

### 2.4 Badges y Chips de Estado (`Badge`)

```tsx
// src/components/ui/Badge.tsx
import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'express' | 'flex' | 'lowcost' | 'success' | 'warning';
  className?: string;
}

export const Badge = ({ children, variant = 'express', className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider',
        variant === 'express' && 'bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-200',
        variant === 'flex' && 'bg-brand-yellow-50 text-brand-asphalt border border-brand-yellow-300',
        variant === 'lowcost' && 'bg-brand-tech-gray text-brand-slate border border-brand-blue-100',
        variant === 'success' && 'bg-emerald-50 text-emerald-600 border border-emerald-200',
        variant === 'warning' && 'bg-amber-50 text-amber-700 border border-amber-200',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
};
```

---

## 3. 📱 Estrategia de Diseño Responsivo y Grilla Bento

El layout se apoya en un sistema modular **Bento Grid de 12 columnas**, adaptando la densidad de información según el dispositivo:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      BENTO GRID RESPONSIVO (12 COLS)                   │
├──────────────────────────────┬─────────────────────────────────────────┤
│ MOBILE (320px - 639px)       │ 1 columna fluida con padding 16px       │
│ TABLET (640px - 1023px)      │ 2 columnas simétricas / cards span-6    │
│ DESKTOP (1024px - 1279px)    │ 12 columnas (spans de 4, 6 y 8 cols)    │
│ WIDE DESKTOP (1280px+)       │ Max-width 1280px centrado (max-w-7xl)   │
└──────────────────────────────┴─────────────────────────────────────────┘
```

### Reglas de Adaptación
1. **Zonas Táctiles Móviles:** Todos los botones y selectores interactivos tienen un mínimo de **48px de altura** y padding touch de 12px.
2. **Scroll Horizontal Controlado:** Tablas comparativas de servicio y cotizadores emplean indicadores de desplazamiento suave sin romper el viewport.
3. **Imágenes y Mapas Viales:** Renders vectoriales y mapas Leaflet/Google Maps cargan con aspect-ratio predefinido (`aspect-video` o `aspect-square`) para evitar Content Layout Shifts (CLS = 0).

---

## 4. ♿ Estándares de Accesibilidad (WCAG 2.2 AA)

1. **Contraste de Texto:**
   - Texto Azul Canónico (`#0950F6`) sobre Fondo Amarillo (`#FFEC01`): **4.9:1** (Cumple AA).
   - Texto Negro Asfalto (`#111625`) sobre Fondo Amarillo (`#FFEC01`): **14.8:1** (Cumple AAA).
   - Texto Blanco (`#FFFFFF`) sobre Azul Canónico (`#0950F6`): **4.5:1** (Cumple AA).
   - 🚫 **Veto:** Nunca blanco sobre amarillo ni amarillo sobre blanco (1.1:1).
2. **Navegación por Teclado:** Foco visual nítido de 2px con offset (`ring-2 ring-offset-2 ring-brand-blue-500`) en todos los elementos interactivos.
3. **Respeto a Preferencia de Movimiento:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
4. **Semántica HTML y ARIA:** Todos los modales y acordeones incluyen `aria-expanded`, `aria-controls` y roles de región accesibles para lectores de pantalla.
