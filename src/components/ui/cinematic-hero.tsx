// src/components/ui/cinematic-hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/src/lib/utils";
import { Bike, Shield, Zap, MapPin, BarChart3, SkipForward } from "lucide-react";
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
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
    onComplete?: () => void;
}

export function CinematicHero({
    onComplete,
    className,
    ...props
}: CinematicHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mainCardRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    // Skip Intro Function
    const handleSkip = () => {
        if (timelineRef.current) {
            timelineRef.current.kill();
        }
        gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
                onComplete?.();
            }
        });
    };

    // 1. High-Performance Mouse Interaction Logic for 3D Card Sheen
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
                        rotationY: xVal * 10,
                        rotationX: -yVal * 10,
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

    // 2. Animated Sequence
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states
            gsap.set(".brand-logo-large", { scale: 0.5, autoAlpha: 0 });
            gsap.set(".brand-name-large", { y: 30, autoAlpha: 0 });
            gsap.set(".brand-subtitle-large", { y: 20, autoAlpha: 0 });

            gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 0 });
            gsap.set(".brand-card-logo", { scale: 0.8, autoAlpha: 0 });
            gsap.set(".brand-card-info", { x: -30, autoAlpha: 0 });
            gsap.set(".service-intro-card", { y: 30, autoAlpha: 0 });

            const introTl = gsap.timeline({
                onComplete: () => {
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

            timelineRef.current = introTl;

            introTl
                // Stage 1: Big Logo & Brand Name Entrance
                .to(".brand-logo-large", { scale: 1, autoAlpha: 1, duration: 1.0, ease: "back.out(1.7)" })
                .to([".brand-name-large", ".brand-subtitle-large"], { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 }, "-=0.6")
                
                // Read pause for Stage 1
                .to({}, { duration: 1.5 })

                // Transition: Fade Stage 1 out, bring Stage 2 (3D Card) in
                .to([".brand-logo-large", ".brand-name-large", ".brand-subtitle-large"], { y: -50, autoAlpha: 0, duration: 0.6, ease: "power3.in" })
                .to(".main-card", { y: 0, autoAlpha: 1, duration: 1.0, ease: "power3.inOut" }, "-=0.4")
                
                // Stage 2: Reveal logo and info inside the card
                .to(".brand-card-logo", { scale: 1, autoAlpha: 1, duration: 0.8, ease: "back.out(1.5)" }, "-=0.3")
                .to(".brand-card-info", { x: 0, autoAlpha: 1, duration: 0.8, ease: "power4.out" }, "-=0.6")
                
                // Staggered service cards reveal
                .to(".service-intro-card", { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.4")
                
                // Read pause for Stage 2
                .to({}, { duration: 3.5 })

                // Fade out all card components before page reveal
                .to(".main-card", {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.6,
                    ease: "power2.inOut"
                });

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className={cn("fixed inset-0 w-screen h-screen overflow-hidden flex items-center justify-center bg-[#003399] text-white z-[999] font-sans antialiased", className)}
            style={{ perspective: "1500px" }}
            {...props}
        >
            <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
            <div className="film-grain" aria-hidden="true" />
            <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true" />

            {/* SKIP INTRO FLOATING BUTTON */}
            <button
                onClick={handleSkip}
                className="fixed top-6 right-6 z-[1000] bg-[#FFCC00] hover:bg-white text-[#003399] border-2 border-[#003399] rounded-2xl font-subheading tracking-wider px-5 py-2 text-base transition-all duration-200 shadow-[3px_3px_0px_#003399] active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[1px_1px_0px_#003399] cursor-pointer flex items-center gap-1.5 font-bold uppercase"
            >
                <SkipForward className="h-4 w-4 fill-current shrink-0" />
                Saltar intro
            </button>

            {/* STAGE 1 LAYER: Brand logo & name centered */}
            <div className="brand-intro-wrapper absolute z-10 flex flex-col items-center justify-center text-center max-w-lg px-4 pointer-events-none">
                <div className="brand-logo-large gsap-reveal w-44 h-44 rounded-full flex items-center justify-center bg-white/10 border border-white/20 shadow-2xl p-4 mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-yellow/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-full h-full">
                        <Image
                            src="https://i.postimg.cc/RF6MBw2d/logo-envios.webp"
                            alt="Envíos Dos Ruedas Logo"
                            fill
                            sizes="176px"
                            className="object-contain filter drop-shadow-[0_8px_16px_rgba(255,236,1,0.3)]"
                            priority
                        />
                    </div>
                </div>
                <h1 className="brand-name-large gsap-reveal text-5xl md:text-7xl font-display uppercase tracking-tight text-white drop-shadow-md leading-none">
                    Envíos <span className="text-[#FFCC00]">DosRuedas</span>
                </h1>
                <p className="brand-subtitle-large gsap-reveal text-blue-200/80 font-subheading tracking-widest text-lg md:text-xl uppercase mt-2">
                    Mar del Plata · 2026
                </p>
            </div>

            {/* STAGE 2 LAYER: 3D Neo-Brutalist Presentation Card */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
                <div
                    ref={mainCardRef}
                    className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
                >
                    <div className="card-sheen" aria-hidden="true" />

                    <div className="relative w-full h-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-12 items-center lg:gap-12 z-10 py-8">
                        
                        {/* Stage 2 - Left: Large card info and logo */}
                        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-20 w-full space-y-5">
                            <div
                                ref={mockupRef}
                                className="brand-card-logo gsap-reveal w-28 h-28 lg:w-36 lg:h-36 rounded-full flex items-center justify-center bg-brand-blue/20 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] p-5"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src="https://i.postimg.cc/RF6MBw2d/logo-envios.webp"
                                        alt="Envíos Dos Ruedas Logo"
                                        fill
                                        sizes="144px"
                                        className="object-contain filter drop-shadow-[0_4px_8px_rgba(255,236,1,0.25)]"
                                    />
                                </div>
                            </div>
                            <div className="brand-card-info gsap-reveal">
                                <h2 className="text-4xl lg:text-6xl font-display uppercase tracking-tight text-white leading-none">
                                    Envíos <span className="text-[#FFCC00]">DosRuedas</span>
                                </h2>
                                <p className="text-blue-100/60 font-sans text-sm lg:text-base mt-3 max-w-sm leading-relaxed">
                                    Conectamos comercios y clientes locales con ruteos automáticos optimizados y entregas veloces.
                                </p>
                            </div>
                        </div>

                        {/* Stage 2 - Right: Staggered Services Grid */}
                        <div className="lg:col-span-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 z-20">
                            {[
                                {
                                    title: "Envíos Express",
                                    desc: "Rango exacto de entrega con 2 horas de anticipación.",
                                    icon: Zap,
                                    iconColor: "text-[#FFCC00]",
                                    bg: "bg-blue-950/40 border-blue-500/20",
                                },
                                {
                                    title: "Envíos LowCost",
                                    desc: "Ruteo masivo eficiente con entrega garantizada en el día.",
                                    icon: Bike,
                                    iconColor: "text-blue-400",
                                    bg: "bg-indigo-950/40 border-indigo-500/20",
                                },
                                {
                                    title: "Envíos Flex",
                                    desc: "Expertos en MercadoLibre Flex con entregas el mismo día.",
                                    icon: Shield,
                                    iconColor: "text-emerald-400",
                                    bg: "bg-emerald-950/40 border-emerald-500/20",
                                },
                                {
                                    title: "E-Commerce & 3PL",
                                    desc: "Tercerización e integración logística escalable para PyMEs.",
                                    icon: BarChart3,
                                    iconColor: "text-purple-400",
                                    bg: "bg-slate-900/50 border-slate-700/30",
                                },
                            ].map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div
                                        key={service.title}
                                        className={cn(
                                            "service-intro-card gsap-reveal p-5 rounded-2xl border flex flex-col justify-between space-y-3",
                                            service.bg
                                        )}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className={cn("p-2 rounded-xl bg-white/5", service.iconColor)}>
                                                <IconComponent className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-subheading text-lg uppercase tracking-wide">
                                                {service.title}
                                            </h4>
                                            <p className="text-blue-200/50 text-[11px] mt-1 leading-normal font-sans">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}