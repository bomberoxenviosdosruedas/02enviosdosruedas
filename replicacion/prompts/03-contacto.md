# Bloque 03: Página de Contacto y Base Operativa

> **Ubicación:** `replicacion/prompts/03-contacto.md`  
> **Componentes:** `src/app/contacto/page.tsx`, `ContactHero.tsx`, `ContactForm.tsx`, `ContactInfo.tsx`, `ConversionBanner.tsx`, `CopyPhone.tsx`  
> **Objetivo:** Implementar la página de contacto de Envíos DosRuedas, con los canales oficiales de atención, el formulario de consultas comerciales, la ficha de la base física en Friuli 1972 (Mar del Plata) y la derivación instantánea a WhatsApp.  

---

## 🎯 MODALIDAD 1: PROMPT DECLARATIVO / FUNCIONAL

```text
Actúa como Diseñador UI y Desarrollador Frontend experto en Next.js App Router, Tailwind CSS v4 y Accesibilidad.

Tu misión es crear la página de Contacto de "Envíos DosRuedas" en `src/app/contacto/page.tsx` con sus componentes subordinados en `src/components/contacto/`.

Requerimientos y contenido:
1. `ContactHero.tsx`:
   - Cabecera con fondo azul corporativo (#0950F6) y texto en blanco.
   - Titular H1 en Anton SC: "CONTACTO Y BASE CENTRAL".
   - Subtítulo en Outfit: "Estamos para ayudarte a resolver tus entregas en Mar del Plata. Escribinos directamente por WhatsApp para una cotización inmediata o completá el formulario para propuestas comerciales."
2. `ContactForm.tsx`:
   - Formulario limpio sobre tarjeta blanca con borde técnico de precisión.
   - Campos: Nombre o Razón Social, Teléfono/WhatsApp, Correo Electrónico, Tipo de Consulta (Cotización urgente, Mercado Envíos Flex, Cuenta Corriente Empresas, Consulta general) y Mensaje.
   - Botón primario en Amarillo Vial (#FFEC01): "ENVIAR MENSAJE".
   - Botón de atajo directo a WhatsApp con mensaje predeterminado: "O CONSULTANOS DIRECTO POR WHATSAPP AL TOQUE".
3. `ContactInfo.tsx` (Bento Grid):
   - Módulo en cuadrícula que expone la información física y operativa real:
     * Base Operativa: "Friuli 1972, Mar del Plata, Buenos Aires" con botón interactivo para abrir en Google Maps.
     * Teléfono / WhatsApp: "+54 9 223 660-2699" con función de copiar número al portapapeles (`CopyPhone.tsx`).
     * Correo Oficial: "matiascejas@enviosdosruedas.com".
     * Horarios de Atención: "Lunes a Viernes de 09:00 a 18:00 hs · Sábados de 10:00 a 15:00 hs".
     * Aclaración comercial: "Atención personalizada con flota propia. No emitimos Factura A."
4. `ConversionBanner.tsx`:
   - Bloque inferior que invita a cotizar online de forma interactiva en caso de que el cliente busque comparar precios de un envío puntual.
5. Schema JSON-LD:
   - Inyección en la cabecera de la página de un schema `@type: ContactPage` y `mainEntity: LocalBusiness` con coordenadas GPS (`latitude: -38.0055, longitude: -57.5426`).
```

---

## 🛠️ MODALIDAD 2: PROMPT TÉCNICO / CÓDIGO E IMPORTS EXACTOS

```text
Actúa como un Desarrollador Senior en Next.js. Creá los siguientes componentes en su ruta exacta:

### 1. `src/app/contacto/page.tsx`
```tsx
import React from 'react';
import type { Metadata } from 'next';
import ContactHero from '@/components/contacto/ContactHero';
import ContactForm from '@/components/contacto/ContactForm';
import ContactInfo from '@/components/contacto/ContactInfo';
import ConversionBanner from '@/components/contacto/ConversionBanner';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Contacto y Base Central',
  description: 'Contacto con el equipo comercial y logística urbana de Envíos DosRuedas en Mar del Plata. Cotizaciones inmediatas por WhatsApp y atención personalizada.',
  alternates: { canonical: `${baseUrl}/contacto` },
  openGraph: {
    title: 'Contacto y Base Central | Envíos DosRuedas',
    description: 'Contacto con el equipo comercial y logística urbana de Envíos DosRuedas en Mar del Plata.',
    url: `${baseUrl}/contacto`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto - Envíos DosRuedas',
  description: 'Contacto oficial y cotización inmediata de Envíos DosRuedas en Mar del Plata.',
  url: `${baseUrl}/contacto`,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Envíos DosRuedas',
    telephone: '+54-223-660-2699',
    email: 'matiascejas@enviosdosruedas.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Friuli 1972',
      addressLocality: 'Mar del Plata',
      addressRegion: 'Buenos Aires',
      postalCode: '7600',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -38.0055,
      longitude: -57.5426,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '15:00',
      },
    ],
  },
};

export default function ContactoPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 relative overflow-hidden font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      <ContactHero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 space-y-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 h-full">
            <ContactForm />
          </div>
          <div className="lg:col-span-7 h-full">
            <ContactInfo />
          </div>
        </div>
        <ConversionBanner />
      </section>
    </main>
  );
}
```

### 2. `src/components/contacto/ContactHero.tsx`
- Fondo `bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8`.
- `<h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">Contacto y Base Central</h1>`.
- `<p className="font-sans text-lg text-brand-blue-50/90 max-w-2xl leading-relaxed">Estamos para ayudarte a resolver tus entregas en Mar del Plata. Escribinos o visitanos en nuestra base operativa.</p>`.

### 3. `src/components/contacto/ContactInfo.tsx`
- Tarjetas con estilo Double Bezel:
  - Base física: `Friuli 1972, Mar del Plata` (con enlace a Google Maps: `https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata`).
  - Teléfono y WhatsApp: `+54 9 223 660-2699` (con enlace `https://wa.me/5492236602699`).
  - Correo: `matiascejas@enviosdosruedas.com`.
  - Horarios: `Lunes a Viernes 09:00 a 18:00 hs · Sábados 10:00 a 15:00 hs`.
```
