# Bloque 01: Layout Global, Fuentes y Shell de Navegación

> **Ubicación:** `replicacion/prompts/01-layout-y-shell.md`  
> **Componentes:** `src/app/layout.tsx`, `OptimizedHeader.tsx`, `OptimizedFooter.tsx`, `CarruselRedes.tsx`  
> **Objetivo:** Implementar la estructura persistente de toda la aplicación, la carga de fuentes Google oficiales, metadatos SEO/OpenGraph de Mar del Plata, la cabecera sticky, el pie corporativo con la franja amarilla de 6px y el carrusel interactivo de redes.  

---

## 🎯 MODALIDAD 1: PROMPT DECLARATIVO / FUNCIONAL

```text
Actúa como Especialista en Frontend y Diseño UI en Next.js App Router, Tailwind CSS v4 y Motion.

Tu misión es crear el Layout Global y los componentes de cabecera, pie y canales de contacto persistentes para "Envíos DosRuedas" (Mar del Plata).

Requisitos funcionales y de diseño:
1. Fuentes Oficiales (Google Fonts vía next/font/google):
   - Anton (peso 400, variable --font-display) para títulos principales.
   - Bebas Neue (peso 400, variable --font-subheading) para botones y badges.
   - Outfit (variable --font-sans) para textos generales y párrafos.
   - Geist Mono (variable --font-mono) para números tabulares y datos técnicos.
2. Layout Raíz (`src/app/layout.tsx`):
   - Inyección de variables tipográficas en la etiqueta <html> con idioma "es".
   - Metadatos completos: título base "Mensajería en moto en Mar del Plata | Envíos DosRuedas", descripción comercial enfocada en envíos express, Flex y LowCost en Mar del Plata, configuración de canonical URL y etiquetas OpenGraph / Twitter.
   - Schema JSON-LD organizacional para LocalBusiness con dirección en Friuli 1972, Mar del Plata, y teléfono +54-223-660-2699.
3. Cabecera Institucional (`OptimizedHeader.tsx`):
   - Pegajosa superior (sticky top-0 z-50) con fondo blanco traslúcido y desenfoque (backdrop-blur-md bg-white/90).
   - Logotipo "ENVÍOS DOSRUEDAS" con mención a Mar del Plata.
   - Menú de navegación responsive: Enlaces a Servicios (desplegable con Express, LowCost, Flex, Depósito, Cuenta Corriente, Contra Reembolso), Cobertura, Nosotros y Contacto.
   - Menú móvil lateral o expandible animado con Motion.
   - Botón CTA primario en Amarillo Vial (#FFEC01): "COTIZAR ONLINE" que enlace directo a `/cotizar`.
4. Pie de Página Institucional (`OptimizedFooter.tsx`):
   - Franja decorativa superior amarilla vial de 6px (bg-brand-yellow-500).
   - Fondo institucional azul corporativo (#0950F6) con textos en blanco puro.
   - Datos reales: Base operativa en "Friuli 1972, Mar del Plata", WhatsApp "+54 9 223 660-2699", email "matiascejas@enviosdosruedas.com", horarios "Lunes a Viernes de 09:00 a 18:00 hs · Sábados de 10:00 a 15:00 hs".
   - Columnas de enlaces rápidos categorizados en Servicios, Empresa y Legales.
   - Leyenda legal obligatoria: "© 2026 Envíos DosRuedas. Todos los derechos reservados. No emitimos Factura A."
5. Carrusel de Redes Sociales (`CarruselRedes.tsx`):
   - Carrusel interactivo infinito de canales oficiales: WhatsApp (+54 9 223 660-2699), Instagram (@enviosdosruedas) y Facebook (/enviosdosruedas) con botones de acción directa en voseo Rioplatense ("Escribinos", "Seguinos", "Sumate").
```

---

## 🛠️ MODALIDAD 2: PROMPT TÉCNICO / CÓDIGO E IMPORTS EXACTOS

```text
Actúa como un Ingeniero Frontend Senior. Creá los siguientes componentes en su ubicación exacta respetando los tipos TypeScript e imports:

### 1. `src/app/layout.tsx`
```tsx
import type { Metadata, Viewport } from 'next';
import { Outfit, Anton, Bebas_Neue, Geist_Mono } from 'next/font/google';
import './globals.css';
import OptimizedHeader from '@/components/layout/OptimizedHeader';
import OptimizedFooter from '@/components/layout/OptimizedFooter';
import CarruselRedes from '@/components/layout/CarruselRedes';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' });
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-subheading', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

const baseUrl = 'https://www.enviosdosruedas.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0950F6',
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    template: '%s | Envíos DosRuedas',
  },
  description: 'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Cotizá online.',
  alternates: { canonical: `${baseUrl}/` },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: baseUrl,
    siteName: 'Envíos DosRuedas',
    title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    description: 'La solución logística y última milla de mayor confianza en Mar del Plata.',
    images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${anton.variable} ${bebasNeue.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh flex flex-col bg-white text-brand-blue-500 font-sans antialiased selection:bg-brand-yellow-500 selection:text-brand-blue-500">
        <OptimizedHeader />
        <main className="flex-1">{children}</main>
        <CarruselRedes />
        <OptimizedFooter />
      </body>
    </html>
  );
}
```

### 2. `src/components/layout/OptimizedHeader.tsx`
- Incluir `'use client'`.
- Barra fija con `sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-brand-blue-100/60 shadow-xs`.
- Contenedor `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between`.
- Logo con tipografía `font-display tracking-tight text-brand-blue-500 text-2xl uppercase`.
- Navegación escritorio con enlaces `font-subheading text-lg font-bold uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-400`.
- Botón CTA:
  `<Link href="/cotizar" className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 px-5 py-2.5 rounded-full font-subheading font-bold uppercase text-lg shadow-accent-sm transition-transform hover:scale-105">COTIZAR ONLINE</Link>`
- Soporte para menú móvil con botón hamburguesa y panel desplegable mediante `motion/react` (`AnimatePresence`).

### 3. `src/components/layout/OptimizedFooter.tsx`
- Franja superior: `<div className="h-1.5 w-full bg-brand-yellow-500" />`.
- Contenedor con `bg-brand-blue-500 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-brand-blue-400`.
- Cuatro columnas:
  1. Identidad: "ENVÍOS DOSRUEDAS" (font-display), "Friuli 1972, Mar del Plata, Buenos Aires", "Tel: +54 9 223 660-2699", "Email: matiascejas@enviosdosruedas.com".
  2. Servicios: Enlaces a Express, LowCost, Flex, Depósito, Cuenta Corriente, Contra Reembolso.
  3. Empresa: Sobre Nosotros, Cobertura, Preguntas Frecuentes, Nuestras Redes, Contacto.
  4. Legal: Términos y Condiciones, Política de Privacidad, Defensa del Consumidor.
- Cierre inferior con texto `text-xs text-white/80 font-sans`: "© 2026 Envíos DosRuedas. Todos los derechos reservados. No emitimos Factura A."

### 4. `src/components/layout/CarruselRedes.tsx`
- Componente de tira interactiva infinita (`overflow-hidden whitespace-nowrap bg-brand-blue-50 border-y border-brand-blue-100 py-3`).
- Tarjetas flotantes con enlaces externos `target="_blank" rel="noopener noreferrer"` a:
  - WhatsApp: `https://wa.me/5492236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20en%20Mar%20del%20Plata`
  - Instagram: `https://instagram.com/enviosdosruedas`
  - Facebook: `https://facebook.com/enviosdosruedas`
```
