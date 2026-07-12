'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Clock, Mail, MapPin, Shield, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');
  
  useEffect(() => {
    // Keep local timer updated
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Argentina/Buenos_Aires' 
      };
      setCurrentTimeStr(now.toLocaleTimeString('es-AR', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Standard Mar del Plata operating hours: Mon-Fri 08:00 - 20:00, Sat 08:30 - 14:00
  const isOperatingNow = () => {
    const now = new Date();
    // Convert to Argentina time
    const argTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
    const day = argTime.getDay(); // 0 is Sunday
    const hour = argTime.getHours();
    const min = argTime.getMinutes();
    const currentDecimalHour = hour + min / 60;

    if (day === 0) return false; // Closed on Sundays
    if (day === 6) { // Saturdays
      return currentDecimalHour >= 8.5 && currentDecimalHour <= 14;
    }
    return currentDecimalHour >= 8 && currentDecimalHour <= 20; // Mon-Fri
  };

  const status = isOperatingNow();

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full border-b border-brand-blue-100 bg-white/95 backdrop-blur-md">
      {/* Top Banner with info */}
      <div className="bg-brand-blue text-xs text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span id="top-phone" className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors">
              <Phone className="h-3.5 w-3.5 text-brand-yellow" />
              +54 9 223 660-2699
            </span>
            <span id="top-email" className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors">
              <Mail className="h-3.5 w-3.5 text-brand-yellow" />
              matiascejas@enviosdosruedas.com
            </span>
            <span id="top-location" className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors">
              <MapPin className="h-3.5 w-3.5 text-brand-yellow" />
              Friuli 1972, Mar del Plata, Argentina
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-brand-yellow">MDQ: {currentTimeStr || '--:--:--'}</span>
            <span className="h-2 w-2 rounded-full bg-brand-blue/30"></span>
            <span className="flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 text-brand-yellow animate-pulse" />
              <span className="text-white">Reparto Seguro</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main NavBar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <a href="#hero" className="flex items-center gap-3 group">
            {/* SVG implementation of the beautiful Logo */}
            <div className="relative h-12 w-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 100" className="w-full h-full dropped-shadow-sm">
                {/* Outer striped border (Celeste/Light Blue & White representing Mar del Plata colors) */}
                <circle cx="50" cy="50" r="48" fill="none" stroke="#003399" strokeWidth="4" />
                <circle cx="50" cy="50" r="46" fill="none" stroke="#FFCC00" strokeWidth="2" strokeDasharray="3 3" />
                
                {/* Metallic Dark Charcoal Inner Disk */}
                <circle cx="50" cy="50" r="43" fill="#003399" />
                
                {/* Inside design elements - Brackets for title */}
                <path d="M 12,38 L 88,38" stroke="#FFCC00" strokeWidth="1" opacity="0.6"/>
                <path d="M 12,62 L 88,62" stroke="#FFCC00" strokeWidth="1" opacity="0.6"/>
                
                {/* "Envíos" in light blue */}
                <text x="50" y="31" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
                  Envíos
                </text>
                
                {/* "DosRuedas" in blocky white background bracket */}
                <rect x="18" y="38" width="64" height="12" rx="2" fill="#003399" stroke="#FFCC00" strokeWidth="1" />
                <text x="50" y="47" fill="#FFCC00" fontFamily="sans-serif" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="0.2">
                  DosRuedas
                </text>

                {/* Phone reference */}
                <text x="50" y="58" fill="#FFFFFF" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                  2236602699
                </text>

                {/* Subtitle MDQ */}
                <text x="50" y="84" fill="#FFCC00" fontFamily="sans-serif" fontSize="7" fontWeight="900" textAnchor="middle" letterSpacing="0.8">
                  MDQ
                </text>

                {/* Two bicycle interlocking wheels at the bottom */}
                <g fill="none" stroke="#FFCC00" strokeWidth="1.5">
                  <circle cx="41" cy="72" r="7" />
                  <path d="M 37,72 L 45,72 M 41,68 L 41,76 M 38,69 L 44,75 M 38,75 L 44,69" strokeWidth="0.5" opacity="0.6"/>
                  <circle cx="59" cy="72" r="7" />
                  <path d="M 55,72 L 63,72 M 59,68 L 59,76 M 56,69 L 62,75 M 56,75 L 62,69" strokeWidth="0.5" opacity="0.6"/>
                  {/* Shaft connecting wheels */}
                  <line x1="41" y1="72" x2="59" y2="72" stroke="#FFFFFF" strokeWidth="2" />
                </g>
              </svg>
            </div>
            
            {/* Logo text side */}
            <div className="flex flex-col">
              <span className="font-display text-2xl tracking-wide uppercase text-brand-blue leading-none">
                ENVÍOS <span className="text-brand-blue font-black">DOSRUEDAS</span>
              </span>
              <span className="text-[10px] font-subheading tracking-wider text-brand-blue/80 font-bold uppercase">
                MAR DEL PLATA • ARGENTINA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#servicios" className="text-lg font-subheading text-brand-blue/80 hover:text-brand-blue transition-all tracking-wider uppercase">
              SERVICIOS
            </a>
            <a href="#cotizador" className="text-lg font-subheading text-brand-blue/80 hover:text-brand-blue transition-all tracking-wider uppercase">
              COTIZAR
            </a>
            <a href="#consola" className="text-lg font-subheading text-brand-blue/80 hover:text-brand-blue transition-all tracking-wider uppercase">
              PANEL DESPACHOS
            </a>
            <a href="#nosotros" className="text-lg font-subheading text-brand-blue/80 hover:text-brand-blue transition-all tracking-wider uppercase">
              NOSOTROS
            </a>
            <a href="#faqs" className="text-lg font-subheading text-brand-blue/80 hover:text-brand-blue transition-all tracking-wider uppercase">
              PREGUNTAS
            </a>
          </nav>

          {/* Business Hours Indicator Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="bg-brand-blue-50 border border-brand-blue-100 rounded-xl px-3 py-1.5 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status ? 'bg-brand-blue-300' : 'bg-brand-blue-300'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${status ? 'bg-brand-blue-400' : 'bg-brand-blue-400'}`}></span>
              </span>
              <span className="text-xs font-medium text-brand-blue-600">
                {status ? 'Abierto • Cadetes operando' : 'Cerrado • Reserva tu turno'}
              </span>
            </div>
            
            <a 
              href="https://api.whatsapp.com/send?phone=5492236602699&text=Hola%20Envios%20DosRuedas!%20Deseo%20hacer%20una%20consulta%20para%20coordinar%20un%20cadete." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-subheading text-lg px-5 py-2 rounded-xl flex items-center gap-2 transition-transform hover:scale-[1.02] shadow-accent-sm tracking-wider uppercase"
            >
              <Phone className="h-4 w-4 text-brand-yellow" />
              CONTACTO DIRECTO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="bg-brand-blue-50 border border-brand-blue-100 rounded-full h-8 px-2 flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${status ? 'bg-brand-blue-400' : 'bg-brand-blue-400'}`}></span>
              <span className="text-[10px] font-bold text-brand-blue-600 whitespace-nowrap">
                {status ? 'MOTOS ALTO SLA' : 'CERRADO'}
              </span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-blue hover:text-brand-blue/80 p-1.5 bg-brand-blue-50 rounded-lg hover:bg-brand-blue-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-blue-100 bg-white px-4 py-4 space-y-3 shadow-lg">
          <a 
            href="#servicios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-subheading tracking-wider uppercase text-brand-blue-600 hover:text-brand-blue py-1"
          >
            Servicios Logísticos
          </a>
          <a 
            href="#cotizador" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-subheading tracking-wider uppercase text-brand-blue-600 hover:text-brand-blue py-1"
          >
            Cotizar Tarifa Online
          </a>
          <a 
            href="#consola" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-subheading tracking-wider uppercase text-brand-blue-600 hover:text-brand-blue py-1"
          >
            Panel Despachos (E-Commerce)
          </a>
          <a 
            href="#nosotros" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-subheading tracking-wider uppercase text-brand-blue-600 hover:text-brand-blue py-1"
          >
            Sobre Nosotros
          </a>
          <a 
            href="#faqs" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-subheading tracking-wider uppercase text-brand-blue-600 hover:text-brand-blue py-1"
          >
            Preguntas Frecuentes
          </a>
          
          <div className="border-t border-brand-blue-50 pt-3 flex flex-col gap-2">
            <div className="flex items-center gap-2 px-1 text-brand-blue-500 text-xs py-1">
              <span className={`h-2.5 w-2.5 rounded-full ${status ? 'bg-brand-blue-400' : 'bg-brand-blue-400'}`}></span>
              <span>{status ? 'Abierto (Lloviznas menores no detienen el flujo)' : 'Cerrado en este momento'}</span>
            </div>
            
            <a 
              href="https://api.whatsapp.com/send?phone=5492236602699&text=Hola%20Envios%20DosRuedas!%20Deseo%20hacer%20una%20consulta%20urgente." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-blue text-white text-center font-subheading text-lg py-2.5 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 text-brand-yellow" />
              Llamar Cadetería MDQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
