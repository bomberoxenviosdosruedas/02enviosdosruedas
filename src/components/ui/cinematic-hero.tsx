// src/components/ui/cinematic-hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/src/lib/utils";
import { Bike, Shield, Zap, BarChart3, SkipForward } from "lucide-react";
import Image from "next/image";

// ─── Injected Styles: Film grain, scanlines, depth card, mouse sheen ──────────
const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Animated film grain using CSS (no SVG token waste) */
  @keyframes grain-shift {
    0%, 100% { transform: translate(0, 0); }
    10%  { transform: translate(-2%, -3%); }
    20%  { transform: translate(3%, 2%); }
    30%  { transform: translate(-1%, 4%); }
    40%  { transform: translate(4%, -1%); }
    50%  { transform: translate(-3%, 3%); }
    60%  { transform: translate(2%, -4%); }
    70%  { transform: translate(-4%, 1%); }
    80%  { transform: translate(1%, -2%); }
    90%  { transform: translate(-2%, 4%); }
  }

  .film-grain::before {
    content: '';
    position: absolute;
    inset: -50%;
    width: 200%; height: 200%;
    pointer-events: none;
    z-index: 50;
    opacity: 0.04;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    animation: grain-shift 0.5s steps(1) infinite;
  }

  /* Cinematic CRT scanlines */
  .film-grain::after {
    content: '';
    position: absolute; inset: 0;
    pointer-events: none; z-index: 51;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.04) 2px,
      rgba(0, 0, 0, 0.04) 4px
    );
  }

  /* Themed grid with radial fade */
  .bg-grid-cinematic {
    background-size: 64px 64px;
    background-image:
      linear-gradient(to right, rgba(6,54,165,0.12) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(6,54,165,0.12) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
  }

  /* Premium depth card with layered shadows */
  .premium-depth-card {
    background: linear-gradient(145deg, #080f24 0%, #010816 100%);
    box-shadow:
      0 60px 120px -20px rgba(0, 0, 0, 0.95),
      0 20px 40px -20px rgba(0, 0, 0, 0.8),
      0 0 0 1px rgba(6, 54, 165, 0.25),
      inset 0 1px 2px rgba(255, 255, 255, 0.08),
      inset 0 -2px 4px rgba(0, 0, 0, 0.8);
    position: relative;
  }

  /* Brand-yellow mouse sheen (on card hover) */
  .card-sheen {
    position: absolute; inset: 0; border-radius: inherit;
    pointer-events: none; z-index: 2;
    background: radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 236, 1, 0.07) 0%,
      rgba(6, 54, 165, 0.05) 40%,
      transparent 70%
    );
    mix-blend-mode: screen;
    transition: opacity 0.4s ease;
  }

  /* Edge vignette inside card */
  .card-vignette {
    position: absolute; inset: 0; border-radius: inherit;
    pointer-events: none; z-index: 1;
    background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%);
  }

  /* Progress bar for intro timer */
  @keyframes progress-drain {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }
  .intro-progress-bar {
    transform-origin: left center;
    animation: progress-drain var(--intro-duration, 9s) linear forwards;
  }

  /* Ambient orb pulsing */
  @keyframes orb-breathe {
    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.4; }
    50%       { transform: scale(1.15) translate(2%, -2%); opacity: 0.6; }
  }
  .ambient-orb { animation: orb-breathe 6s ease-in-out infinite; }
  .ambient-orb-2 { animation: orb-breathe 8s ease-in-out infinite reverse; }
`;

// ─── Service card data ────────────────────────────────────────────────────────
const SERVICES = [
  {
    title: "Envíos Express",
    desc: "Entrega en menos de 2 horas con ruta optimizada y tracking en tiempo real.",
    icon: Zap,
    accent: "rgba(255,236,1,0.85)",
    borderColor: "rgba(255,236,1,0.18)",
    bg: "rgba(255,236,1,0.04)",
  },
  {
    title: "Envíos LowCost",
    desc: "Ruteo masivo eficiente con entrega garantizada en el día. Hasta 40% más barato.",
    icon: Bike,
    accent: "rgba(96,165,250,0.85)",
    borderColor: "rgba(96,165,250,0.18)",
    bg: "rgba(96,165,250,0.04)",
  },
  {
    title: "Envíos Flex",
    desc: "Expertos en MercadoLibre Flex — entregas same-day con escaneo integrado.",
    icon: Shield,
    accent: "rgba(52,211,153,0.85)",
    borderColor: "rgba(52,211,153,0.18)",
    bg: "rgba(52,211,153,0.04)",
  },
  {
    title: "E-Commerce & 3PL",
    desc: "Tercerización logística escalable con integración directa a tu tienda.",
    icon: BarChart3,
    accent: "rgba(167,139,250,0.85)",
    borderColor: "rgba(167,139,250,0.18)",
    bg: "rgba(167,139,250,0.04)",
  },
];

// ─── Total intro duration in seconds (stages 1+2 + pauses) ───────────────────
const INTRO_DURATION = 9;

// ─── Props ───────────────────────────────────────────────────────────────────
export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  onComplete?: () => void;
}

// ─── Component ───────────────────────────────────────────────────────────────
export function CinematicHero({ onComplete, className, ...props }: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef  = useRef<HTMLDivElement>(null);
  const mockupRef    = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>(0);
  const timelineRef  = useRef<gsap.core.Timeline | null>(null);
  const [showProgress, setShowProgress] = useState(false);

  // ── Skip handler ────────────────────────────────────────────────────────────
  const handleSkip = () => {
    timelineRef.current?.kill();
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
      onComplete: () => onComplete?.(),
    });
  };

  // ── Mouse → 3D card tilt + sheen ────────────────────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!mainCardRef.current) return;
        const rect = mainCardRef.current.getBoundingClientRect();
        mainCardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        mainCardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);

        if (mockupRef.current) {
          const xNorm = (e.clientX / window.innerWidth  - 0.5) * 2;
          const yNorm = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, {
            rotationY: xNorm * 12,
            rotationX: -yNorm * 12,
            ease: "power3.out",
            duration: 1.4,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Main GSAP cinematic sequence ─────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial hidden states
      gsap.set([".brand-logo-large", ".brand-name-large", ".brand-subtitle-large"], {
        autoAlpha: 0, y: 0, scale: 0.6,
      });
      gsap.set(".brand-name-large",   { y: 40 });
      gsap.set(".brand-subtitle-large", { y: 25, scale: 1 });
      gsap.set(".main-card",           { y: window.innerHeight + 300, autoAlpha: 0 });
      gsap.set(".brand-card-logo",     { scale: 0.75, autoAlpha: 0 });
      gsap.set(".brand-card-info",     { x: -40, autoAlpha: 0 });
      gsap.set(".service-intro-card",  { y: 35, autoAlpha: 0 });

      const tl = gsap.timeline({
        onStart: () => setShowProgress(true),
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0, duration: 0.7, ease: "power2.inOut",
            onComplete: () => onComplete?.(),
          });
        },
      });

      timelineRef.current = tl;

      tl
        // ── Stage 1: Brand logo cinematic entrance ──────────────────────────
        .to(".brand-logo-large", {
          scale: 1, autoAlpha: 1, duration: 1.1,
          ease: "back.out(1.5)",
        })
        .to(".brand-name-large", {
          y: 0, autoAlpha: 1, duration: 0.9, ease: "power4.out",
        }, "-=0.6")
        .to(".brand-subtitle-large", {
          y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out",
        }, "-=0.5")

        // ── Stage 1 hold ────────────────────────────────────────────────────
        .to({}, { duration: 1.4 })

        // ── Transition: Stage 1 → Stage 2 ──────────────────────────────────
        .to([".brand-logo-large", ".brand-name-large", ".brand-subtitle-large"], {
          y: -60, autoAlpha: 0, duration: 0.55, ease: "power3.in", stagger: 0.05,
        })
        .to(".main-card", {
          y: 0, autoAlpha: 1, duration: 1.1, ease: "expo.out",
        }, "-=0.3")

        // ── Stage 2: Card interior reveal ───────────────────────────────────
        .to(".brand-card-logo", {
          scale: 1, autoAlpha: 1, duration: 0.9, ease: "back.out(1.7)",
        }, "-=0.5")
        .to(".brand-card-info", {
          x: 0, autoAlpha: 1, duration: 0.9, ease: "power4.out",
        }, "-=0.7")
        .to(".service-intro-card", {
          y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
        }, "-=0.5")

        // ── Stage 2 hold ────────────────────────────────────────────────────
        .to({}, { duration: 3.2 })

        // ── Outro: Card scale down & fade ───────────────────────────────────
        .to(".main-card", {
          scale: 0.96, opacity: 0, duration: 0.65, ease: "power2.inOut",
        });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 w-screen h-screen overflow-hidden flex items-center justify-center bg-brand-dark text-white z-[999] font-sans antialiased",
        className
      )}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />

      {/* Film grain + scanlines overlay */}
      <div className="film-grain absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Themed grid background */}
      <div className="bg-grid-cinematic absolute inset-0 z-0 pointer-events-none opacity-60" aria-hidden="true" />

      {/* Ambient glowing orbs — brand palette */}
      <div
        className="ambient-orb absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          top: "-15%", left: "-10%",
          background: "radial-gradient(circle, rgba(6,54,165,0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="ambient-orb-2 absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          bottom: "-10%", right: "-8%",
          background: "radial-gradient(circle, rgba(255,236,1,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* ── Skip intro button ────────────────────────────────────────────────── */}
      <button
        onClick={handleSkip}
        className="fixed top-5 right-5 z-[1000] bg-brand-yellow hover:bg-white text-brand-blue border-2 border-brand-blue rounded-2xl font-subheading tracking-wider px-5 py-2 text-sm transition-all duration-200 shadow-[3px_3px_0px_rgba(6,54,165,0.8)] active:translate-x-[1px] active:translate-y-[1px] hover:shadow-[1px_1px_0px_rgba(6,54,165,0.8)] cursor-pointer flex items-center gap-1.5 uppercase"
        aria-label="Saltar introducción"
      >
        <SkipForward className="h-3.5 w-3.5 fill-current shrink-0" />
        Saltar intro
      </button>

      {/* ── Intro progress bar ───────────────────────────────────────────────── */}
      {showProgress && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[1000] h-[3px] bg-white/10"
          aria-hidden="true"
        >
          <div
            className="intro-progress-bar h-full bg-brand-yellow shadow-[0_0_12px_rgba(255,236,1,0.6)]"
            style={{ ["--intro-duration" as string]: `${INTRO_DURATION}s` }}
          />
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          STAGE 1 — Brand intro: centered logo + name
      ════════════════════════════════════════════════════════════════════════ */}
      <div className="brand-intro-wrapper absolute z-10 flex flex-col items-center justify-center text-center max-w-lg px-4 pointer-events-none">
        {/* Logo orb with brand glow */}
        <div className="brand-logo-large gsap-reveal relative w-40 h-40 rounded-full flex items-center justify-center mb-6">
          {/* Outer ring glow */}
          <div className="absolute inset-[-8px] rounded-full border border-brand-yellow/20 animate-pulse" />
          <div className="absolute inset-[-16px] rounded-full border border-brand-blue/15" />
          {/* Logo container */}
          <div className="relative w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-brand-blue/30 to-black/60 border border-white/10 shadow-[0_0_60px_rgba(6,54,165,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] p-4 overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-brand-yellow/10 rounded-full blur-xl" />
            <div className="relative w-full h-full">
              <Image
                src="https://i.postimg.cc/RF6MBw2d/logo-envios.webp"
                alt="Envíos Dos Ruedas Logo"
                fill sizes="160px"
                className="object-contain drop-shadow-[0_8px_20px_rgba(255,236,1,0.4)]"
                priority
              />
            </div>
          </div>
        </div>

        <h1 className="brand-name-large gsap-reveal text-5xl md:text-7xl font-display uppercase tracking-tight leading-none">
          Envíos{" "}
          <span
            className="text-brand-yellow"
            style={{ textShadow: "0 0 40px rgba(255,236,1,0.4)" }}
          >
            DosRuedas
          </span>
        </h1>
        <p className="brand-subtitle-large gsap-reveal text-blue-200/70 font-subheading tracking-[0.3em] text-base md:text-lg uppercase mt-3">
          Mar del Plata · 2026
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          STAGE 2 — 3D Depth Card with services grid
      ════════════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card gsap-reveal pointer-events-auto w-[93vw] md:w-[88vw] lg:w-[82vw] h-[92vh] md:h-[88vh] rounded-[28px] md:rounded-[40px] overflow-hidden flex items-center justify-center"
        >
          {/* Layered overlays */}
          <div className="card-vignette" aria-hidden="true" />
          <div className="card-sheen" aria-hidden="true" />

          {/* Inner content */}
          <div className="relative z-10 w-full h-full max-w-6xl mx-auto px-6 lg:px-14 flex flex-col justify-evenly lg:grid lg:grid-cols-12 items-center lg:gap-10 py-8">

            {/* Left: logo + description */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
              <div
                ref={mockupRef}
                className="brand-card-logo gsap-reveal w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 rounded-full bg-brand-blue/20 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-sm" />
                <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,236,1,0.1), transparent 60%)" }} />
                <div className="relative w-3/4 h-3/4">
                  <Image
                    src="https://i.postimg.cc/RF6MBw2d/logo-envios.webp"
                    alt="Envíos Dos Ruedas"
                    fill sizes="128px"
                    className="object-contain drop-shadow-[0_4px_12px_rgba(255,236,1,0.3)]"
                  />
                </div>
              </div>

              <div className="brand-card-info gsap-reveal">
                <h2 className="text-3xl lg:text-5xl font-display uppercase tracking-tight leading-none">
                  Envíos{" "}
                  <span
                    className="text-brand-yellow"
                    style={{ textShadow: "0 0 30px rgba(255,236,1,0.35)" }}
                  >
                    DosRuedas
                  </span>
                </h2>
                <p className="text-blue-100/50 font-sans text-sm lg:text-base mt-3 max-w-xs leading-relaxed">
                  Conectamos comercios y clientes con ruteos inteligentes y entregas veloces en Mar del Plata.
                </p>
                {/* Stat badges */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                  {["Same-Day", "MercadoLibre Flex", "E-Commerce"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] font-subheading tracking-widest uppercase border border-brand-yellow/20 text-brand-yellow/80 bg-brand-yellow/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: 2×2 services grid */}
            <div className="lg:col-span-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {SERVICES.map((service) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={service.title}
                    className="service-intro-card gsap-reveal p-4 lg:p-5 rounded-2xl flex flex-col justify-between space-y-3 backdrop-blur-sm transition-all duration-300"
                    style={{
                      background: service.bg,
                      border: `1px solid ${service.borderColor}`,
                      boxShadow: `0 4px 20px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.04)`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${service.accent}15`,
                        border: `1px solid ${service.accent}30`,
                      }}
                    >
                      <IconComp className="h-4 w-4" style={{ color: service.accent }} />
                    </div>
                    <div>
                      <h4
                        className="font-subheading text-base lg:text-lg uppercase tracking-wide"
                        style={{ color: service.accent }}
                      >
                        {service.title}
                      </h4>
                      <p className="text-blue-200/45 text-[11px] mt-1 leading-normal font-sans">
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