---
name: Kinetic Fluid Light (Inverted)
colors:
  background: '#0635A6'
  on-background: '#FFFFFF'
  primary: '#FFFFFF'
  on-primary: '#0635A6'
  secondary: '#FFEC00'
  on-secondary: '#0F172A'
  surface: '#0739BD'
  on-surface: '#FFFFFF'
  surface-variant: '#04287D'
  on-surface-variant: '#E2E8F0'
  outline: 'rgba(255, 255, 255, 0.15)'
  brand-blue: '#0635A6'
  brand-yellow: '#FFEC00'
  brand-white: '#FFFFFF'
typography:
  display:
    fontFamily: Anton
    fontSize: clamp(2.5rem, 6vw, 5.5rem)
    lineHeight: '1.05'
    letterSpacing: '0.02em'
  h1:
    fontFamily: Anton
    fontSize: clamp(2rem, 5vw, 4rem)
    lineHeight: '1.1'
  h2:
    fontFamily: Anton
    fontSize: clamp(1.75rem, 4vw, 3rem)
    lineHeight: '1.15'
  subtitle:
    fontFamily: Bebas Neue
    fontSize: clamp(1.25rem, 2.5vw, 2rem)
    lineHeight: '1.2'
    letterSpacing: '0.05em'
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '24px'
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
---

# Design System: Envíos DosRuedas (Inverted Theme)

## 1. Visual Theme & Atmosphere
Un entorno inmersivo de alto impacto, donde la energía y velocidad de la logística de última milla se transmiten mediante una estética "Invertida".
- **Densidad:** Balanced Daily App (6/10) - Diseñado para una lectura rápida en situaciones de movilidad urbana alta.
- **Variancia:** Offset Asymmetric (8/10) - Composiciones asimétricas con tipografía expandida que rompen la rigidez del grid.
- **Movimiento:** Fluid CSS & Spring Physics (6/10) - Animaciones y transiciones de alto rendimiento que simulan la cinética de la flota en movimiento.
- **Atmósfera:** La luz emana directamente de la tipografía Optic White (`#FFFFFF`) y del acento Sunbeam Yellow (`#FFEC00`) sobre el lienzo azul inmersivo de Egyptian Blue (`#0635A6`).

---

## 2. Color Palette & Roles
El sistema está estructurado estrictamente sobre tres colores principales, sin el uso de tonos grises o negros apagados.

- **Base (60%): Egyptian Blue** (`#0635A6`) — Fondo principal de toda la aplicación. Proporciona el espacio inmersivo y la confianza institucional del servicio de envíos.
- **Dominante (30%): Optic White** (`#FFFFFF`) — Aporta estructura, legibilidad tipográfica principal, bordes limpios y contenedores de alta jerarquía.
- **Acento (10%): Sunbeam Yellow** (`#FFEC00`) — Acentuación lumínica extrema reservada para botones principales de conversión (CTAs), badges de estado activo y notificaciones críticas.
- **Soporte de Profundidad: Dark Navy** (`#04287D`) — Usado para tarjetas elevadas, inputs en foco y fondos secundarios para crear contraste sin perder el tema inmersivo azul.

---

## 3. Typography Rules
- **Display & Títulos:** `Anton` — Letra condensed masiva, tracking ligeramente expandido y siempre en mayúsculas para denotar momentum y velocidad de transporte.
- **Métricas & Datos:** `Bebas Neue` — Para números de tracking, ID de conductores, tarifas en pesos y tiempos estimados de llegada.
- **Cuerpo & UI:** `Inter` — Texto limpio y legible para campos de formulario, descripciones y guías operativas.
- **Tono Local:** Redacción en voseo rioplatense orientado directamente a usuarios y comercios de Mar del Plata ("Cotizá tu envío", "Seguí tu paquete").

---

## 4. Component Stylings
- **Buttons (Botones Cinéticos):**
  - *Primary CTA (Sección Azul):* Fondo Sunbeam Yellow (`#FFEC00`) y texto `#0F172A`. Esquinas redondeadas tipo píldora (`rounded-full`) o `rounded-2xl` (16px).
  - *Primary CTA (Sección Blanca):* Fondo Egyptian Blue (`#0635A6`) y texto `#FFFFFF`. Esquinas redondeadas tipo píldora o `rounded-2xl` (16px).
  - *Secondary Button (Sección Azul):* Borde Optic White (`border-white/30`), texto blanco y fondo transparente.
  - *Secondary Button (Sección Blanca):* Borde Egyptian Blue (`border-[#0635A6]/30`), texto en Egyptian Blue y fondo transparente.
- **Cards (Tarjetas Elevadas):**
  - *En Sección Azul:* Fondo azul oscuro de soporte (`#04287D` o `#0739BD`) con un borde fino traslúcido de 1px en blanco (`border-white/10`). Esquinas suavizadas generosas (`rounded-3xl` / 24px).
  - *En Sección Blanca:* Fondo blanco o gris claro (`bg-white` o `bg-slate-50`) con un borde fino de 1px en azul suave (`border-[#0635A6]/10`) o gris, y textos oscuros.
- **Inputs (Formularios):**
  - Fondo translúcido oscuro con borde blanco tenue (`border-white/20`). En estado enfocado, el borde se ilumina en Sunbeam Yellow (`#FFEC00`).

---

## 5. Layout Principles
- **Alternancia de Secciones (Dynamic Flow):** Para mantener un ritmo visual activo y fluido, la página debe alternar estrictamente los fondos de sus secciones de arriba a abajo:
  1. Sección 1 (Hero): Fondo Egyptian Blue (`#0635A6`) - Azul
  2. Sección 2: Fondo Optic White (`#FFFFFF`) - Blanco
  3. Sección 3: Fondo Egyptian Blue (`#0635A6`) - Azul
  4. Sección 4: Fondo Optic White (`#FFFFFF`) - Blanco
  5. Sección 5: Fondo Egyptian Blue (`#0635A6`) - Azul
  6. Sección 6: Fondo Optic White (`#FFFFFF`) - Blanco
- **Asimetría Activa:** Los héroes de las vistas principales deben estar alineados asimétricamente a la izquierda, dejando espacio a la derecha para componentes de interactividad cinéticos (como el mapa o gráficos dinámicos).
- **Fluidez del Canvas:** Los elementos se dividen mediante cambios de tono de azul o márgenes transparentes amplios, minimizando el uso de divisores físicos rígidos.
- **Contención Responsiva:** Contención máxima de 1400px en escritorio. En dispositivos móviles de menos de 768px, el layout colapsa estrictamente en una única columna.

---

## 6. Motion & Interaction
- **Curva Spring Physics:** Toda micro-interacción y despliegue debe utilizar físicas elásticas realistas (`stiffness: 110, damping: 18`) para una sensación de peso premium.
- **Micro-loop Kinetic:** Estados de carga y seguimiento usarán sutiles destellos luminosos (`animate-pulse`) o transiciones progresivas tipo shimmer sobre los contenedores azules.
- **Performance:** Renderizado exclusivo mediante aceleración por hardware (`transform`, `opacity`).

---

## 7. Anti-Patterns (Banned AI Clichés)
- **Prohibido Light Mode Global:** Ninguna página debe ser blanca completa de forma global. Se debe respetar estrictamente la alternancia de secciones (Secciones en Egyptian Blue intercaladas con Secciones en Optic White), asegurando que el azul domine al menos el 60% del lienzo total de la página.
- **Prohibidos fondos grises o negros:** No apagar el impacto del tema con sombras u opacidades neutras frías.
- **Prohibido el formato de año doble barra:** ("SISTEMA // 2024"). El año oficial operativo es **2026**.
- **Prohibido inventar métricas ficticias:** No generar porcentajes de efectividad ni números al azar. Usar marcadores del estilo `[métrica]` si el dato no es provisto por el usuario.
- **Prohibido el uso de emojis** en pantallas formales de seguimiento o cotización.
- **Prohibidos los nombres genéricos en inglés** para demostraciones (usar calles y barrios reales de Mar del Plata: "Punta Mogotes", "Güemes", "Avenida Luro").
