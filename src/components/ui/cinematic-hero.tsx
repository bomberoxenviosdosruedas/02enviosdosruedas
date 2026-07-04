// src/components/ui/cinematic-hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/src/lib/utils";
import { Bike, Shield, Zap, MapPin } from "lucide-react";
import Image from "next/image";

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS (Restored 3D Depth)
  ---------------------------------------------------------------------- */
  
  .text-3d-matte {
      color: var(--color-foreground);
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--color-foreground) 15%, transparent)) 
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent));
  }

  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) 
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* Deep Physical Card with Dynamic Mouse Lighting */
  .premium-depth-card {
      background: linear-gradient(145deg, #0f172a 0%, #020617 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,236,1,0.08) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  /* Realistic iPhone Mockup Hardware */
  .iphone-bezel {
      background-color: #111;
      box-shadow: 
          inset 0 0 0 2px #52525B, 
          inset 0 0 0 7px #000, 
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow: 
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }
  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow: 
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px); 
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
    brandName?: string;
    tagline1?: string;
    tagline2?: string;
    cardHeading?: string;
    cardDescription?: React.ReactNode;
    metricValue?: number;
    metricLabel?: string;
    onComplete?: () => void;
}

export function CinematicHero({
    brandName = "Envios DosRuedas",
    tagline1 = "Tu solucion confiable,",
    tagline2 = "para todo mar del plata.",
    cardHeading = "Logística Inteligente y Rápida.",
    cardDescription = (
        <>
            <span className="text-white font-semibold block leading-tight">Envios</span>
            <span className="text-white font-semibold block leading-tight mb-2">DosRuedas</span>
            conecta a comercios, plataformas de e-commerce y clientes particulares en Mar del Plata con ruteos automáticos optimizados, despachos express y servicios 3PL dedicados.
        </>
    ),
    metricValue = 7,
    metricLabel = "Años de Trayectoria",
    onComplete,
    className,
    ...props
}: CinematicHeroProps) {

    const containerRef = useRef<HTMLDivElement>(null);
    const mainCardRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);

    // 1. High-Performance Mouse Interaction Logic
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(requestRef.current);

            requestRef.current = requestAnimationFrame(() => {
                if (mainCardRef.current && mockupRef.current) {
                    const rect = mainCardRef.current.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;

                    mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
                    mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

                    const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
                    const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

                    gsap.to(mockupRef.current, {
                        rotationY: xVal * 12,
                        rotationX: -yVal * 12,
                        ease: "power3.out",
                        duration: 1.2,
                    });
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    // 2. Auto-playing Intro & Preloader GSAP Timeline
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
            gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
            gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
            gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });

            const introTl = gsap.timeline({
                onComplete: () => {
                    // Fade out entire container to reveal page behind
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        onComplete: () => {
                            onComplete?.();
                        }
                    });
                }
            });

            introTl
                // 1. Taglines animation
                .to(".text-track", { duration: 1.0, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
                .to(".text-days", { duration: 0.8, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=0.5")
                // Pause for readability
                .to({}, { duration: 1.2 })
                // 2. Slide out text, slide in 3D Card
                .to([".text-track", ".text-days"], { autoAlpha: 0, y: -40, filter: "blur(10px)", duration: 0.5, ease: "power3.in" })
                .to(".main-card", { y: 0, ease: "power3.inOut", duration: 1.0 }, "-=0.3")
                // 3. Animate internal iPhone mockup and badges
                .fromTo(".mockup-scroll-wrapper",
                    { y: 150, z: -300, rotationX: 30, rotationY: -15, autoAlpha: 0, scale: 0.8 },
                    { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.2 }
                )
                .fromTo(".floating-badge", { y: 50, autoAlpha: 0, scale: 0.8 }, { y: 0, autoAlpha: 1, scale: 1, ease: "back.out(1.5)", duration: 0.8, stagger: 0.1 }, "-=0.4")
                .fromTo(".card-left-text", { x: -30, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 0.8 }, "-=0.8")
                .fromTo(".card-right-text", { x: 30, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "expo.out", duration: 0.8 }, "<")
                // Pause to showcase the premium materials
                .to({}, { duration: 3.0 })
                // 4. Fade out all card elements
                .to([".main-card", ".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.6,
                    ease: "power2.inOut"
                });

        }, containerRef);

        return () => ctx.revert();
    }, [metricValue, onComplete]);

    return (
        <div
            ref={containerRef}
            className={cn("fixed inset-0 w-screen h-screen overflow-hidden flex items-center justify-center bg-[#0636A5] text-white z-[999] font-sans antialiased", className)}
            style={{ perspective: "1500px" }}
            {...props}
        >
            <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
            <div className="film-grain" aria-hidden="true" />
            <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true" />

            {/* BACKGROUND LAYER: Hero Texts */}
            <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d">
                <h1 className="text-track gsap-reveal text-3d-matte text-4xl md:text-7xl lg:text-[6rem] font-display uppercase tracking-tight mb-2 text-white">
                    {tagline1}
                </h1>
                <h1 className="text-days gsap-reveal text-silver-matte text-4xl md:text-7xl lg:text-[6rem] font-display uppercase tracking-tighter text-brand-yellow">
                    {tagline2}
                </h1>
            </div>

            {/* FOREGROUND LAYER: The Physical Deep Blue Card */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
                <div
                    ref={mainCardRef}
                    className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
                >
                    <div className="card-sheen" aria-hidden="true" />

                    {/* DYNAMIC RESPONSIVE GRID: Flex-col on mobile to force order, Grid on desktop */}
                    <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">

                        {/* 1. TOP (Mobile) / RIGHT (Desktop): BRAND NAME */}
                        <div className="card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
                            <h2 className="text-5xl md:text-[6rem] lg:text-[7rem] font-display uppercase tracking-tighter text-brand-yellow drop-shadow-lg lg:mt-0">
                                {brandName}
                            </h2>
                        </div>

                        {/* 2. MIDDLE (Mobile) / CENTER (Desktop): BRAND LOGO */}
                        <div className="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>

                            {/* Inner wrapper for safe CSS scaling that doesn't conflict with GSAP */}
                            <div className="relative w-full h-full flex items-center justify-center transform scale-[0.75] md:scale-90 lg:scale-100">

                                {/* The Premium Logo Display */}
                                <div
                                    ref={mockupRef}
                                    className="relative w-[320px] h-[320px] rounded-full flex items-center justify-center bg-gradient-to-b from-brand-blue/20 to-brand-blue/30 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] will-change-transform transform-style-3d p-8"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/10 to-transparent rounded-full blur-2xl animate-pulse" />
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="https://i.postimg.cc/RF6MBw2d/logo-envios.webp"
                                            alt="Envíos Dos Ruedas Logo"
                                            fill
                                            sizes="320px"
                                            className="object-contain filter drop-shadow-[0_10px_20px_rgba(255,236,1,0.25)]"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Floating Glass Badges */}
                                <div className="floating-badge absolute flex top-2 lg:top-8 left-[-10px] lg:left-[-60px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30 text-left">
                                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-yellow-500/20 to-yellow-900/10 flex items-center justify-center border border-yellow-400/30 shadow-inner shrink-0">
                                        <Zap className="text-brand-yellow w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xs lg:text-sm font-bold tracking-tight">Entrega Express</p>
                                        <p className="text-blue-200/50 text-[10px] lg:text-xs font-medium">Solucion a Emprendedores</p>
                                    </div>
                                </div>

                                <div className="floating-badge absolute flex bottom-8 lg:bottom-16 right-[-10px] lg:right-[-60px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-30 text-left">
                                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-blue-500/20 to-blue-900/10 flex items-center justify-center border border-blue-400/30 shadow-inner shrink-0">
                                        <Shield className="text-blue-400 w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xs lg:text-sm font-bold tracking-tight">100% Asegurado</p>
                                        <p className="text-blue-200/50 text-[10px] lg:text-xs font-medium">Custodia Digital</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* 3. BOTTOM (Mobile) / LEFT (Desktop): ACCOUNTABILITY TEXT */}
                        <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0">
                            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">
                                {cardHeading}
                            </h3>
                            {/* HIDDEN ON MOBILE (added hidden md:block) */}
                            <p className="hidden md:block text-blue-100/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                                {cardDescription}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}