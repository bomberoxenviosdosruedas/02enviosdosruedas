import React from 'react';
import { Metadata } from 'next';
import FaqHero from '@/src/components/nosotros/preguntas-frecuentes/FaqHero';
import { FaqCategories } from '@/src/components/nosotros/preguntas-frecuentes/Faq-categories';
import { FAQ_DATA } from '@/src/components/nosotros/preguntas-frecuentes/faqData';
import FaqCta from '@/src/components/nosotros/preguntas-frecuentes/FaqCta';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes (FAQ) | Envíos DosRuedas Mar del Plata',
  description:
    'Despejá todas tus dudas sobre mensajería en moto, Envíos Flex MercadoLibre, reparto LowCost, servicio Express, tarifas 2026 y cobertura en Mar del Plata.',
  alternates: {
    canonical: `${baseUrl}/nosotros/preguntas-frecuentes`,
  },
  openGraph: {
    title: 'Preguntas Frecuentes (FAQ) | Envíos DosRuedas Mar del Plata',
    description:
      'Respuestas inmediatas sobre servicios, tiempos, tarifas y logística urbana con flota propia en Mar del Plata.',
    url: `${baseUrl}/nosotros/preguntas-frecuentes`,
    type: 'website',
    locale: 'es_AR',
  },
};

// Flatten all questions across categories for comprehensive FAQPage Schema.org structured data
const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.flatMap((cat) =>
    cat.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    }))
  ),
};

export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen bg-brand-white-50 text-brand-blue-700 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      {/* 3D Ambient floating glow-orbs */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue-500/10 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div
        className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow-500/5 rounded-full blur-[110px] pointer-events-none"
        style={{ animationDelay: '-3s' }}
      />

      {/* Hero Header block */}
      <div className="relative z-10">
        <FaqHero />
      </div>

      {/* Interactive FAQ category and accordion block */}
      <div className="relative z-10 font-sans">
        <FaqCategories />
      </div>

      {/* Dynamic contact and support CTA block */}
      <div className="relative z-10">
        <FaqCta />
      </div>
    </main>
  );
}
