'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, TrendingUp, Users, HeartHandshake, Quote } from 'lucide-react';

export default function SocialProofSection() {
  const testimonials = [
    {
      text: "Con DosRuedas pasamos de entregar en 48hs a same-day en toda la ciudad. El seguimiento en vivo redujo a cero las consultas de '¿dónde está mi pedido?'.",
      author: "Martín R.",
      role: "E-commerce Indumentaria, Güemes",
    },
    {
      text: "Para nuestros envíos Flex son fundamentales. Cumplen los SLAs a rajatabla y el dashboard de control nos permite gestionar cientos de paquetes sin estrés.",
      author: "Laura G.",
      role: "MercadoLíder Platinum",
    },
    {
      text: "El plan LowCost nos permitió ofrecer envíos económicos a nuestros clientes sin perder profesionalismo. La integración fue súper fácil.",
      author: "Diego F.",
      role: "Dietética Mayorista",
    }
  ];

  return (
    <section id="social-proof" className="py-24 bg-brand-blue-50 relative z-10 border-y border-brand-blue-100">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 bg-brand-yellow/20 text-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block border border-brand-yellow uppercase shadow-sm mb-4">
            CONFIANZA COMPROBADA
          </span>
          <h2 className="text-brand-blue text-5xl sm:text-6xl font-display uppercase tracking-tight leading-[0.9]">
            La logística que elige Mar del Plata
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="double-bezel-outer bg-white border border-brand-blue-200">
            <div className="double-bezel-inner p-8 flex flex-col items-center text-center">
              <Users className="h-10 w-10 text-brand-yellow mb-4" />
              <h3 className="text-6xl font-mono font-bold text-brand-blue mb-2">+150</h3>
              <p className="font-subheading text-brand-blue-500 uppercase tracking-widest">Mensajeros Activos</p>
            </div>
          </div>

          <div className="double-bezel-outer bg-white border border-brand-blue-200">
            <div className="double-bezel-inner p-8 flex flex-col items-center text-center">
              <HeartHandshake className="h-10 w-10 text-brand-yellow mb-4" />
              <h3 className="text-6xl font-mono font-bold text-brand-blue mb-2">98%</h3>
              <p className="font-subheading text-brand-blue-500 uppercase tracking-widest">Satisfacción</p>
            </div>
          </div>

          <div className="double-bezel-outer bg-white border border-brand-blue-200">
            <div className="double-bezel-inner p-8 flex flex-col items-center text-center">
              <TrendingUp className="h-10 w-10 text-brand-yellow mb-4" />
              <h3 className="text-6xl font-mono font-bold text-brand-blue mb-2">+7</h3>
              <p className="font-subheading text-brand-blue-500 uppercase tracking-widest">Años de Experiencia</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-blue-100 p-8 rounded-2xl shadow-[4px_4px_0px_var(--color-brand-blue-200)] relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-brand-yellow/30" />
              <div className="flex text-brand-yellow mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-brand-blue-600 font-sans italic mb-6 text-sm leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="border-t border-brand-blue-50 pt-4 mt-auto">
                <p className="font-bold text-brand-blue font-sans text-sm uppercase tracking-wide">{t.author}</p>
                <p className="text-xs text-brand-blue-400 font-sans">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
