'use client';

import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DoubleBezelCard, CTANestedPill } from '@/components/ui';

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
      desc: 'Seguí nuestro día a día, novedades operativas y la comunidad en Mar del Plata.',
      action: 'SEGUIR COMUNIDAD',
      url: 'https://www.facebook.com/share/1RnSzyweir/',
      icon: FaFacebook,
      variant: 'dark' as const,
      badgeText: 'FACEBOOK OFICIAL',
    },
    {
      name: 'INSTAGRAM',
      handle: '@enviosdosruedas',
      desc: 'Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.',
      action: 'VER CONTENIDO',
      url: 'https://www.instagram.com/enviosdosruedas/',
      icon: FaInstagram,
      variant: 'light' as const,
      badgeText: 'INSTAGRAM MDQ',
    },
    {
      name: 'WHATSAPP',
      handle: '223 660 2699',
      desc: 'Escribinos directamente para consultas, contrataciones o soporte express al toque.',
      action: 'INICIAR CHAT',
      url: 'https://wa.me/542236602699',
      icon: FaWhatsapp,
      variant: 'dark' as const,
      badgeText: 'WHATSAPP DIRECTO',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="carrusel-redes"
      className="py-24 md:py-36 bg-brand-blue-700 border-y border-white/10 relative overflow-hidden font-sans"
    >
      {/* Background Decorative Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-brand-yellow-500),transparent_40%)] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Segment */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-bold tracking-widest inline-block font-subheading uppercase shadow-accent-sm">
            Nuestra Comunidad Digital
          </span>
          
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95] text-center">
            SEGUÍ NUESTRO <span className="text-brand-yellow-500">MOVIMIENTO</span>
          </h2>

          <p className="text-brand-blue-50 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto opacity-90">
            Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.
          </p>
          <div className="h-0.5 w-20 bg-brand-yellow-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Networks Accordion Grid with DoubleBezelCard Styling */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {networks.map((net) => {
            const Icon = net.icon;
            const isLight = net.variant === 'light';

            // Determine platform specific colors
            let customBg = '';
            if (net.name === 'FACEBOOK') {
              customBg = 'bg-[#1877F2]/95 border-[#1877F2] text-white';
            } else if (net.name === 'INSTAGRAM') {
              customBg = 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] border-[#dc2743] text-white';
            } else if (net.name === 'WHATSAPP') {
              customBg = 'bg-[#25D366]/95 border-[#25D366] text-white';
            }

            return (
              <DoubleBezelCard
                key={net.name}
                variant="dark"
                className={`social-block group h-[380px] md:h-[420px] transition-all duration-300 border-2`}
                innerClassName={`flex flex-col justify-between h-full relative ${customBg}`}
              >
                {/* Background Watermark Icon that rotates on hover */}
                <div className="absolute -right-8 -bottom-8 text-brand-blue-500/10 group-hover:text-brand-yellow-500/15 transition-all duration-500 ease-out group-hover:scale-125 group-hover:-rotate-12 pointer-events-none select-none">
                  <Icon className="w-56 h-56" />
                </div>

                <div className="z-10 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase font-subheading bg-white/10 text-brand-yellow-500 border border-white/10"
                    >
                      {net.badgeText}
                    </span>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-yellow-500 text-brand-blue-900"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-white"
                  >
                    {net.name}
                  </h3>

                  <p
                    className="font-mono text-xs font-bold text-brand-yellow-500"
                  >
                    {net.handle}
                  </p>

                  <p
                    className="font-sans text-xs sm:text-sm leading-relaxed text-brand-blue-50/90"
                  >
                    {net.desc}
                  </p>
                </div>

                <div className="z-10 pt-4 border-t border-white/10">
                  <CTANestedPill
                    href={net.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="elevated"
                    size="compact"
                    className="w-full justify-between"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    {net.action}
                  </CTANestedPill>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
