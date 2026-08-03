'use client';

import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Deterministic design variables based on gpt-taste rules
// Typography: Geist / Display: Anton
// GSAP: Hover Physics + Image Scale & Fade Scroll
// Components: Horizontal Accordions + Inline Typography Images

export default function CarruselRedes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (containerRef.current) {
        const blocks = containerRef.current.querySelectorAll('.social-block');
        gsap.fromTo(
          blocks,
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const networks = [
    {
      name: 'FACEBOOK',
      handle: 'Envíos DosRuedas',
      desc: 'Sigue nuestro día a día, novedades operativas y comunidad en Mar del Plata.',
      action: 'SEGUIR COMUNIDAD',
      url: 'https://www.facebook.com/share/1RnSzyweir/',
      icon: FaFacebook,
      colorClass: 'bg-[#1877F2]',
      shadowColor: 'rgba(24,119,242,0.3)',
      rotationClass: 'hover:-rotate-1',
    },
    {
      name: 'INSTAGRAM',
      handle: '@enviosdosruedas',
      desc: 'Mira el detrás de escena de nuestros riders y la flota recorriendo la ciudad.',
      action: 'VER CONTENIDO',
      url: 'https://www.instagram.com/enviosdosruedas/',
      icon: FaInstagram,
      colorClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
      shadowColor: 'rgba(220,39,67,0.3)',
      rotationClass: 'hover:rotate-1',
    },
    {
      name: 'WHATSAPP',
      handle: '223 660 2699',
      desc: 'Escribinos directamente para consultas, reclamos o soporte express al toque.',
      action: 'INICIAR CHAT',
      url: 'https://wa.me/542236602699',
      icon: FaWhatsapp,
      colorClass: 'bg-[#25D366]',
      shadowColor: 'rgba(37,211,102,0.3)',
      rotationClass: 'hover:-rotate-1',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="carrusel-redes"
      className="py-32 md:py-48 bg-brand-blue border-y border-brand-blue-100/60 relative overflow-hidden"
      style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
    >
      {/* Background Decorative Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-brand-yellow-500),transparent_40%)] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Segment - Centered wide display with inline typography image */}
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue border-2 border-brand-blue rounded-full text-xs font-bold tracking-widest inline-block shadow-[2px_2px_0px_var(--color-brand-blue)] font-subheading uppercase">
            Nuestra Comunidad
          </span>
          
          <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-center">
            SEGUÍ NUESTRO{' '}
            <span
              className="inline-block w-16 sm:w-20 md:w-24 h-8 sm:h-10 md:h-12 rounded-full align-middle bg-cover bg-center mx-2 border border-brand-yellow/30 shadow-md"
              style={{ backgroundImage: "url('https://picsum.photos/seed/community/400/200')" }}
              role="img"
              aria-label="Community"
            />{' '}
            MOVIMIENTO
          </h2>

          <p className="text-brand-blue-50 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-2xl mx-auto opacity-90">
            Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.
          </p>
          <div className="h-[2px] w-24 bg-brand-yellow mx-auto rounded-full pt-1" />
        </div>

        {/* Networks Accordion Grid */}
        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-6 w-full"
        >
          {networks.map((net) => {
            const Icon = net.icon;
            return (
              <a
                key={net.name}
                href={net.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-block group relative overflow-hidden h-[380px] lg:h-[420px] p-8 lg:p-12 flex flex-col justify-between transition-all duration-500 ease-out lg:flex-1 lg:hover:flex-[1.4] active:scale-[0.98] rounded-2xl border border-white/10 ${net.colorClass} ${net.rotationClass}`}
                style={{
                  boxShadow: `12px 12px 0px 0px ${net.shadowColor}`,
                }}
              >
                {/* Background Watermark Icon that enlarges on hover */}
                <div className="absolute -right-12 -top-12 text-white/10 transition-transform duration-700 ease-out group-hover:scale-150 group-hover:rotate-12 pointer-events-none select-none">
                  <Icon className="w-[280px] h-[280px]" />
                </div>

                <div className="z-10 text-left">
                  <span className="text-[10px] font-bold tracking-widest bg-white/20 text-white px-3 py-1 rounded-full uppercase mb-4 inline-block font-sans border border-white/10">
                    {net.handle}
                  </span>
                  <h3 className="font-display text-white text-4xl sm:text-5xl uppercase tracking-tighter mb-3 leading-none">
                    {net.name}
                  </h3>
                  <p className="text-white/80 font-sans text-sm sm:text-base max-w-xs leading-relaxed font-medium">
                    {net.desc}
                  </p>
                </div>

                <div className="z-10 flex items-center gap-4 text-white font-bold text-xs sm:text-sm tracking-wider">
                  <span className="font-sans">{net.action}</span>
                  <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center border border-white/10 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:bg-white/25">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
