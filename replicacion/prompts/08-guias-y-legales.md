# Bloque 08: Guías SEO y Marco Legal (Términos y Privacidad)

> **Ubicación:** `replicacion/prompts/08-guias-y-legales.md`  
> **Rutas:** `/guias/envios-flex-mar-del-plata`, `/terminos-y-condiciones`, `/politica-de-privacidad`  
> **Objetivo:** Implementar la guía de autoridad SEO sobre Mercado Envíos Flex en Mar del Plata y las páginas legales obligatorias que establecen las reglas de contratación, exclusión de mercadería prohibida y protección de datos.  

---

## 🎯 MODALIDAD 1: PROMPT DECLARATIVO / FUNCIONAL

```text
Actúa como Especialista en SEO Técnico y Redactor Legal de Plataformas E-commerce.

Tu misión es crear las páginas de guías y el marco legal de "Envíos DosRuedas" en `src/app/guias/` y en las rutas raíz de legales.

Contenido requerido:
1. Guía Especializada Flex (`/guias/envios-flex-mar-del-plata`):
   - Titular H1: "GUÍA DEFINITIVA: CÓMO CONFIGURAR MERCADO ENVÍOS FLEX EN MAR DEL PLATA".
   - Contenido de autoridad paso a paso:
     * Cómo activar la opción Flex en el panel de Mercado Libre.
     * Franjas horarias y corte de las 15:00 hs para no perder la reputación verde.
     * Cuadrícula de tarifas y zonificación para que el comerciante no pierda dinero en envíos de periferia.
     * Botón de alta conversión: "HABLAR CON UN ASESOR PARA INTEGRAR FLEX".
2. Términos y Condiciones (`/terminos-y-condiciones`):
   - Titular H1: "TÉRMINOS Y CONDICIONES DE SERVICIO".
   - Cláusulas contractuales:
     * Objeto del servicio: Transporte y cadetería urbana en moto en Mar del Plata.
     * Cargas y pesos: Paquete estándar hasta 5 kg y 40 × 40 × 30 cm.
     * Sustancias prohibidas: Dinero en efectivo no declarado, armas, estupefacientes, inflamables o mercaderías ilegales.
     * Ausencia del destinatario: Espera de 10 minutos sin cargo; reintento con recargo del 100%.
     * Facturación: Constancia explícita de que no se emite Factura A.
3. Política de Privacidad (`/politica-de-privacidad`):
   - Tratamiento de datos de contacto (nombre, teléfono, direcciones de retiro y entrega) exclusivamente para la coordinación del envío, sin venta ni cesión a terceros.
```

---

## 🛠️ MODALIDAD 2: PROMPT TÉCNICO / CÓDIGO E IMPORTS EXACTOS

```text
Actúa como un Desarrollador Senior en Next.js. Creá los siguientes archivos para las páginas legales y de guías:

### 1. `src/app/terminos-y-condiciones/page.tsx`
```tsx
import type { Metadata } from 'next';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Términos y Condiciones del Servicio',
  description: 'Condiciones de contratación, límites de carga, mercadería admitida y protocolos operativos de Envíos DosRuedas en Mar del Plata.',
  alternates: { canonical: `${baseUrl}/terminos-y-condiciones` },
};

export default function TerminosPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      <h1 className="font-display text-4xl uppercase tracking-tight mb-8">Términos y Condiciones del Servicio</h1>
      
      <div className="space-y-6 text-brand-blue-500/90 leading-relaxed text-sm">
        <section>
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500 mb-2">1. Objeto y Prestación</h2>
          <p>Envíos DosRuedas realiza servicios de logística urbana, mensajería y entrega de última milla dentro del ejido de Mar del Plata y áreas periféricas autorizadas, utilizando exclusivamente personal y flota propia.</p>
        </section>

        <section>
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500 mb-2">2. Límites Físicos y Bulto Estándar</h2>
          <p>La tarifa regular contempla paquetes de hasta 5 kg de peso y dimensiones que no superen los 40 × 40 × 30 cm. Todo paquete que exceda estos valores deberá ser coordinado previamente y devengará un recargo por bulto extra a partir de $1.800.</p>
        </section>

        <section>
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500 mb-2">3. Mercadería Prohibida</h2>
          <p>Queda terminantemente prohibido el transporte de estupefacientes, inflamables, corrosivos, explosivos, dinero en efectivo no declarado, títulos valores o cualquier bien cuya circulación esté restringida o penada por la legislación argentina.</p>
        </section>

        <section>
          <h2 className="font-subheading text-xl uppercase font-bold text-brand-blue-500 mb-2">4. Facturación</h2>
          <p>Envíos DosRuedas opera bajo el régimen simplificado para pequeños contribuyentes (Monotributo). Se emiten comprobantes oficiales tipo C. No se emite Factura A bajo ninguna circunstancia.</p>
        </section>
      </div>
    </main>
  );
}
```

### 2. `src/app/politica-de-privacidad/page.tsx`
- Layout limpio en `max-w-4xl mx-auto`.
- Cláusulas de protección de datos conforme a la Ley de Protección de Datos Personales 25.326.
```
