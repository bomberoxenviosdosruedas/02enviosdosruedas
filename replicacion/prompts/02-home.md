# Bloque 02: Página de Inicio (Home) y Componentes Clave

> **Ubicación:** `replicacion/prompts/02-home.md`  
> **Componentes:** `src/app/page.tsx`, `HeroAnimado.tsx`, `SegmentosHome.tsx`, `ServicesOverview.tsx`, `EmprendedoresHome.tsx`, `SocialProofSection.tsx`, `CtaSection.tsx`  
> **Objetivo:** Implementar la página principal de alta conversión de Envíos DosRuedas, con el Hero animado de logística urbana, segmentación de clientes, catálogo de servicios con tarjetas Double Bezel, sección de emprendedores, prueba social y cierre con llamada a la acción.  

---

## 🎯 MODALIDAD 1: PROMPT DECLARATIVO / FUNCIONAL

```text
Actúa como Diseñador UI y Desarrollador Frontend experto en Next.js App Router, Tailwind CSS v4 y Motion.

Tu misión es crear la página de inicio (Home) de "Envíos DosRuedas" (Mar del Plata) en `src/app/page.tsx` junto con sus componentes modulares.

Estructura y narrativa de la página:
1. `HeroAnimado.tsx`:
   - Fondo azul institucional (#0950F6) con patrón visual de red logística o asfalto.
   - Gran titular H1 masivo en Anton SC (mayúsculas, tracking ajustado): "LOGÍSTICA URBANA Y MENSAJERÍA EN MOTO EN MAR DEL PLATA".
   - Subtítulo en Outfit: "Conectamos toda la ciudad con cadetería propia, seguimiento y compromiso real. Elegí tu servicio y cotizá en el acto sin vueltas."
   - Píldoras de confianza con badges amarillos: "Flota 100% propia" · "Base en Friuli 1972" · "Sin tercerizaciones".
   - Doble botón de acción: Botón principal amarillo "COTIZÁ TU ENVÍO AHORA" (hacia `/cotizar`) y botón secundario con borde blanco "VER SERVICIOS" (hacia `/servicios`).
2. `SegmentosHome.tsx`:
   - Módulo de tres columnas que segmenta al usuario según su necesidad:
     * Particulares: "Trámites urgentes, llaves, compras del día y encomiendas personales."
     * Comercios & Emprendedores: "Envíos en el día, cobro contra reembolso y Mercado Envíos Flex."
     * Empresas & Estudios: "Cadetería fija, remitos conformados y facturación mensual en cuenta corriente."
3. `ServicesOverview.tsx`:
   - Grilla comparativa de los tres servicios principales con tarjetas Double Bezel (borde exterior tintado, interior blanco):
     * Express: "Entrega en franja horaria de 3 hs a coordinar con 2 hs de anticipación. Corte: 15:00 hs. Desde $3.700."
     * LowCost: "Reparto programado en el día hasta las 19:00 hs. Corte: 13:00 hs. La opción más económica de la ciudad. Desde $3.000."
     * Mercado Envíos Flex: "Entregá el mismo día a tus compradores de Mercado Libre. Corte: 15:00 hs. Tarifas fijas y ruteo profesional."
4. `EmprendedoresHome.tsx`:
   - Sección dedicada a comercios que venden por Instagram y Tiendanube.
   - Enfoque: Almacenamiento en base operativa, preparación de paquetes (Fulfillment) y DropOFF bonificado al 20%.
5. `SocialProofSection.tsx`:
   - Métricas de confianza con Geist Mono: "+10.000 entregas realizadas", "100% cadetes propios", "0 paquetes perdidos", "Base física en Friuli 1972".
   - Testimonios reales de comerciantes marplatenses elogiando la puntualidad y la atención directa por WhatsApp.
6. `CtaSection.tsx`:
   - Banner de cierre de página con fondo azul institucional y llamado de alta energía a cotizar online o escribir directamente por WhatsApp.
```

---

## 🛠️ MODALIDAD 2: PROMPT TÉCNICO / CÓDIGO E IMPORTS EXACTOS

```text
Actúa como un Desarrollador Senior en Next.js y React 19. Implementá exactamente los siguientes archivos para la Home de Envíos DosRuedas:

### 1. `src/app/page.tsx`
```tsx
import type { Metadata } from 'next';
import HeroAnimado from '@/components/home/HeroAnimado';
import SegmentosHome from '@/components/home/SegmentosHome';
import ServicesOverview from '@/components/home/ServicesOverview';
import EmprendedoresHome from '@/components/home/EmprendedoresHome';
import SocialProofSection from '@/components/home/SocialProofSection';
import CtaSection from '@/components/home/CtaSection';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  description: 'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Cotizá online.',
  alternates: { canonical: `${baseUrl}/` },
  openGraph: {
    title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    description: 'La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente.',
    url: `${baseUrl}/`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function HomePage() {
  return (
    <div id="home-page-container" className="bg-white text-brand-blue-500 overflow-x-hidden">
      <HeroAnimado />
      <SegmentosHome />
      <ServicesOverview />
      <EmprendedoresHome />
      <SocialProofSection />
      <CtaSection />
    </div>
  );
}
```

### 2. `src/components/home/HeroAnimado.tsx`
- Incluir `'use client'`.
- Sección con `relative bg-brand-blue-500 text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden`.
- Título principal: `<h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-white mb-6">LOGÍSTICA URBANA Y MENSAJERÍA EN MOTO EN MAR DEL PLATA</h1>`.
- Subtítulo: `<p className="font-sans text-lg sm:text-xl text-brand-blue-50/90 max-w-3xl mb-8 leading-relaxed">Conectamos toda la ciudad con cadetería propia, seguimiento y compromiso real. Elegí tu servicio y cotizá en el acto sin vueltas.</p>`.
- Badges de confianza:
  ```tsx
  <div className="flex flex-wrap gap-3 mb-10">
    <span className="bg-brand-blue-400/40 border border-brand-blue-300/40 text-brand-yellow-500 px-4 py-1.5 rounded-full font-subheading uppercase text-sm tracking-wider font-bold">Flota 100% propia</span>
    <span className="bg-brand-blue-400/40 border border-brand-blue-300/40 text-brand-yellow-500 px-4 py-1.5 rounded-full font-subheading uppercase text-sm tracking-wider font-bold">Base en Friuli 1972</span>
    <span className="bg-brand-blue-400/40 border border-brand-blue-300/40 text-brand-yellow-500 px-4 py-1.5 rounded-full font-subheading uppercase text-sm tracking-wider font-bold">Sin intermediarios</span>
  </div>
  ```
- Botones de acción:
  ```tsx
  <div className="flex flex-col sm:flex-row gap-4">
    <Link href="/cotizar" className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-xl font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-cta-glow transition-transform hover:scale-105 inline-flex items-center justify-center">
      Cotizá tu Envío Ahora
    </Link>
    <Link href="/servicios" className="border-2 border-white/80 hover:bg-white/10 text-white font-subheading text-xl font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-colors inline-flex items-center justify-center">
      Ver Todos los Servicios
    </Link>
  </div>
  ```

### 3. `src/components/home/ServicesOverview.tsx`
- Contenedor en `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20`.
- Título de sección: `<h2 className="font-display text-3xl sm:text-5xl uppercase text-brand-blue-500 text-center mb-4">Nuestros Servicios Principales</h2>`.
- Grilla de tarjetas Double Bezel:
  - Tarjeta 1: Express (`tarifa desde $3.700`, corte `15:00 hs`, franja horaria `3 hs`).
  - Tarjeta 2: LowCost (`tarifa desde $3.000`, corte `13:00 hs`, entrega hasta `19:00 hs`).
  - Tarjeta 3: Mercado Envíos Flex (`Nivel 1 LowCost`, `Nivel 2 $6.500`, `Nivel 3 $4.500`, entrega hasta `20:00 hs`).

### 4. `src/components/home/SocialProofSection.tsx`
- Cifras con `font-mono font-bold text-4xl text-brand-blue-500`:
  - `+10.000`: Envíos entregados en tiempo y forma en Mar del Plata.
  - `100%`: Cadetes propios de confianza.
  - `0`: Paquetes extraviados.
  - `10`: Años de trayectoria local en mensajería.
```
