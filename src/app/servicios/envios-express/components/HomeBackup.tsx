'use client';

import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Calculator from './Calculator';
import DispatchConsole from './DispatchConsole';
import AIChatbot from './AIChatbot';
import WarehouseMap from './WarehouseMap';
import ContactPyME from './ContactPyME';
import FaqSection from './FaqSection';
import { Mail, Phone, MapPin, Bike, Heart } from 'lucide-react';

export default function Home() {
  // Share dynamic calculated quote from Calculator to the AI assistant!
  const [activeQuote, setActiveQuote] = useState<any>(null);

  const handleQuoteChange = (quote: any) => {
    setActiveQuote(quote);
  };

  return (
    <div className="min-h-screen bg-brand-white-50 flex flex-col justify-between">
      
      {/* 1. Brand Header */}
      <Header />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        
        {/* 2. Hero Presentation */}
        <Hero />

        {/* 3. Operational Services Deck */}
        <Services />

        {/* 4. Cost Estimator Hub */}
        <Calculator onQuoteChange={handleQuoteChange} />

        {/* 5. Live Booking & Interactive Tracking Dashboard */}
        <DispatchConsole />

        {/* 6. AI Assistant Chat Bot */}
        <AIChatbot activeQuote={activeQuote} />

        {/* 7. Warehouse & Sede Coverage Directory */}
        <WarehouseMap />

        {/* 8. Corporate Accounts / Onboarding PyME */}
        <ContactPyME />

        {/* 9. FAQs Collapsible Segment */}
        <FaqSection />

      </main>

      {/* 10. Footer Section */}
      <footer className="bg-brand-blue-700 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-blue-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1 Brand detail */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#0ea5e9" strokeWidth="4" />
                  <circle cx="50" cy="50" r="43" fill="#1e293b" />
                  <rect x="20" y="40" width="60" height="12" rx="2" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
                  <text x="50" y="49" fill="#ffffff" fontFamily="sans-serif" fontSize="10" fontWeight="900" textAnchor="middle">DosRuedas</text>
                  <g fill="none" stroke="#0891b2" strokeWidth="2">
                    <circle cx="41" cy="72" r="6" />
                    <circle cx="59" cy="72" r="6" />
                  </g>
                </svg>
              </div>
              <span className="font-display text-xl font-black text-white">
                Envíos <span className="text-brand-blue-300">DosRuedas</span>
              </span>
            </div>
            
            <p className="text-xs text-brand-blue-300 leading-relaxed font-normal max-w-sm">
              La plataforma líder de distribución terrestre, mensajería urbana y apoyo última milla e-commerce en Mar del Plata, Provincia de Buenos Aires. Comprometidos con un SLA superior y la tranquilidad de tu stock físico.
            </p>
          </div>

          {/* Col 2 Quick Actions links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-brand-blue-300 uppercase tracking-wider">Secciones rápidas</h4>
            <ul className="space-y-1.5 text-xs text-brand-blue-300 font-medium">
              <li><a href="#servicios" className="hover:text-brand-blue-200 transition-colors">Servicios Logísticos</a></li>
              <li><a href="#cotizador" className="hover:text-brand-blue-200 transition-colors">Calculadora Costos</a></li>
              <li><a href="#consola" className="hover:text-brand-blue-200 transition-colors">Consola E-Commerce</a></li>
              <li><a href="#altapyme" className="hover:text-brand-blue-200 transition-colors">Alta Corriente PyME</a></li>
              <li><a href="#faqs" className="hover:text-brand-blue-200 transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Col 3 Logistics Hub metadata */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-brand-blue-300 uppercase tracking-wider">Canal Logístico Directo</h4>
            <div className="text-xs text-brand-blue-300 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-blue-400 mt-0.5 flex-shrink-0" />
                <span>Friuli 1972, Mar del Plata, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-blue-400 flex-shrink-0" />
                <span>+54 9 223 660-2699</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-blue-400 flex-shrink-0" />
                <span>matiascejas@enviosdosruedas.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Under bar copyright legal */}
        <div className="border-t border-brand-blue-700/80 mt-10 pt-6 text-center text-[10px] text-brand-blue-400 space-y-1">
          <p>© 2026 Envíos DosRuedas. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            Diseñado sustentablemente para la costa de Mar del Plata de la mano de <Heart className="h-3 w-3 text-brand-blue-400" /> Matías Cejas.
          </p>
        </div>
      </footer>

    </div>
  );
}
