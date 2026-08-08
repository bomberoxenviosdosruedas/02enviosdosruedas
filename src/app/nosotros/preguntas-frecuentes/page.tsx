import React from 'react';
import { Metadata } from 'next';
import FaqHero from '@/src/components/nosotros/preguntas-frecuentes/FaqHero';
import FaqAccordion from '@/src/components/nosotros/preguntas-frecuentes/FaqAccordion';
import FaqCta from '@/src/components/nosotros/preguntas-frecuentes/FaqCta';

const baseUrl = 'https://www.enviosdosruedas.com';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué tipo de envíos realizan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Realizamos todo tipo de mensajería y distribución local: Envíos Express (prioritarios en el acto), Envíos LowCost (económicos programados) y entregas de MercadoLibre Flex.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son las zonas de cobertura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ofrecemos cobertura total dentro del ejido urbano de Mar del Plata, organizados de forma eficiente para llegar a cada rincón de la ciudad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son los límites de tamaño y peso sin cobros adicionales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Transportamos paquetes ligeros de hasta 5 kg con medidas de 40x40x30 cm. Esto garantiza la agilidad del tránsito urbano y resguarda la seguridad vial de nuestros repartidores. Bultos que excedan estas dimensiones pueden cotizarse de manera especial.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funciona el servicio de MercadoLibre Flex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Realizamos tus entregas en el mismo día (Same-Day) en Mar del Plata para que mantengas tu reputación en verde. Retiramos tus paquetes y los entregamos de forma segura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se manejan los cobros de los servicios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ofrecemos opciones de facturación y cobros semanales, quincenales o mensuales para empresas y emprendedores. Factura tipo C disponible.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Realizan entregas a Contrarreembolso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, realizamos entregas con cobranza contrareembolso en el domicilio del comprador en Mar del Plata, rindiendo el dinero recolectado de forma segura y veloz.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes (FAQ) | Envíos DosRuedas Mar del Plata',
  description: 'Todo lo que necesitás saber sobre nuestros servicios de mensajería, delivery, tarifas zonificadas, límites de bulto y logística en Mar del Plata.',
  alternates: {
    canonical: `${baseUrl}/nosotros/preguntas-frecuentes`,
  },
  other: {
    'script:ld+json': JSON.stringify(faqSchema),
  },
};

export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue-500/10 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow-500/5 rounded-full blur-[110px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      {/* Hero Header block */}
      <div className="relative z-10">
        <FaqHero />
      </div>

      {/* Interactive FAQ accordion block */}
      <div className="relative z-10 font-sans">
        <FaqAccordion />
      </div>

      {/* Dynamic contact and support CTA block */}
      <div className="relative z-10">
        <FaqCta />
      </div>
    </main>
  );
}
