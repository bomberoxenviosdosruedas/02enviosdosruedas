'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Heart, ExternalLink } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const socialNetworks = [
    {
        name: "Instagram",
        href: "https://instagram.com/enviosdosruedas",
        iconPath: "/iconos/instagram.svg",
        color: "#E1306C",
        description: "Novedades diarias",
        isWhatsApp: false,
    },
    {
        name: "Facebook",
        href: "https://facebook.com/enviosdosruedas",
        iconPath: "/iconos/facebook.svg",
        color: "#1877F2",
        description: "Comunidad activa",
        isWhatsApp: false,
    },
    {
        name: "WhatsApp",
        isWhatsApp: true,
        iconPath: "/iconos/whatapps.svg",
        color: "#25D366",
        description: "Atención inmediata",
    },
];

const feedItems = [
    {
        id: 17,
        type: 'fb',
        image: '/redes/fac1.webp',
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl"
    },
    {
        id: 15,
        type: 'ig',
        image: '/redes/ig1.webp',
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/"
    },
    {
        id: 7,
        type: 'ig',
        image: '/redes/ig3.webp',
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/"
    },
    {
        id: 19,
        type: 'ig',
        image: '/redes/ig4.webp',
        postUrl: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/"
    },
    {
        id: 21,
        type: 'fb',
        image: '/redes/fac2.webp',
        postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l"
    },
];

export const CarruselRedes = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "5492236602699"
        const message = "Hola, me gustaría obtener información sobre sus servicios de envío."
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <section className="py-24 px-6 bg-brand-blue text-white overflow-hidden relative border-t border-white/10">
            {/* Soft background gradient highlight (Dark themed blue/yellow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-blue-950/40 blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-yellow text-xs font-subheading tracking-widest uppercase">
                            <Heart size={11} className="fill-brand-yellow shrink-0 animate-pulse text-brand-yellow" />
                            Conectate con nosotros
                        </div>
                        <h2 className="font-display text-display uppercase text-left text-white">
                            SEGUÍ NUESTRO <span className="text-brand-blue bg-brand-yellow border-2 border-brand-yellow px-3.5 py-1 rounded-2xl shadow-[3px_3px_0px_#0636A5] inline-block rotate-[-1deg] transform hover:rotate-0 transition-transform hover:text-brand-blue">MOVIMIENTO</span>
                        </h2>
                        <p className="text-blue-100 text-base sm:text-lg font-sans max-w-xl leading-relaxed">
                            Sumate a nuestra comunidad digital y mantente al día con las últimas noticias de logística en Mar del Plata.
                        </p>
                    </div>

                    {/* Social networks quick buttons */}
                    <div className="flex flex-wrap lg:flex-nowrap gap-4 shrink-0">
                        {socialNetworks.map((net, idx) => (
                            <motion.button
                                key={idx}
                                onClick={net.isWhatsApp ? handleWhatsAppClick : () => window.open(net.href, "_blank")}
                                className="group flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-yellow/40 hover:bg-white/10 transition-all cursor-pointer text-white min-h-[48px] active:scale-[0.98] active:translate-y-[1px]"
                                aria-label={`Seguinos en ${net.name}`}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                             >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 transition-transform group-hover:scale-105 p-2 relative shrink-0"
                                    style={{ backgroundColor: `${net.color}12` }}
                                    aria-hidden="true"
                                >
                                    {net.name === "Instagram" && <FaInstagram className="h-5 w-5 text-white group-hover:text-brand-yellow" />}
                                    {net.name === "WhatsApp" && <FaWhatsapp className="h-5 w-5 text-[#25D366] group-hover:scale-110" />}
                                    {net.name === "Facebook" && <FaFacebook className="h-5 w-5 text-[#1877F2] group-hover:scale-110" />}
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-subheading tracking-wider uppercase text-white group-hover:text-brand-yellow leading-none">{net.name}</div>
                                    <div className="text-[9px] text-blue-200/70 uppercase tracking-widest mt-0.5">{net.description}</div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Scrolling Feed Panel */}
                <div className="relative group/carousel rounded-xl border border-white/10 shadow-lg bg-blue-950/20 p-4 overflow-hidden">
                    <div className="flex gap-6 w-full overflow-hidden py-2">
                        <motion.div
                            className="flex gap-6 shrink-0"
                            animate={{ x: [0, -1480] }}
                            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                            whileHover={{ animationPlayState: 'paused' }}
                        >
                            {[...socialNetworks, ...socialNetworks, ...socialNetworks].map((item, idx) => {
                                // Fallback mapping in case of index differences
                                const feedImg = feedItems[idx % feedItems.length]?.image || "/redes/fac1.webp";
                                const feedUrl = feedItems[idx % feedItems.length]?.postUrl || "https://instagram.com/enviosdosruedas";
                                const feedType = feedItems[idx % feedItems.length]?.type || "ig";
                                return (
                                    <a
                                        key={idx}
                                        href={feedUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-64 h-64 sm:w-72 sm:h-72 shrink-0 rounded-xl overflow-hidden relative group border border-white/10 shadow-md hover:shadow-[4px_4px_0px_#FFEC01] hover:border-brand-yellow/40 transition-all hover:scale-[1.015] block bg-brand-blue/30"
                                        aria-label={`Ver publicación en redes`}
                                    >
                                        <img
                                            src={feedImg}
                                            alt={`Publicación de redes`}
                                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                        {/* Glassmorphic hover overlay (Using clean branding blue overlay) */}
                                        <div className="absolute inset-0 bg-brand-blue/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-5 p-6 text-center">
                                            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center relative shrink-0">
                                                {feedType === 'ig' && <FaInstagram className="h-6 w-6 text-brand-yellow" />}
                                                {feedType === 'fb' && (
                                                    <div className="relative w-6 h-6 filter invert">
                                                        <Image
                                                            src="/iconos/facebook.svg"
                                                            alt="Facebook"
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="text-white font-subheading font-bold uppercase tracking-widest text-sm mb-1">Ver publicación</div>
                                                <ExternalLink size={16} className="text-brand-yellow mx-auto" />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Edge shadow gradients to simulate infinite scroll visually */}
                    <div className="absolute top-0 left-0 w-24 sm:w-40 h-full bg-gradient-to-r from-brand-blue/60 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-24 sm:w-40 h-full bg-gradient-to-l from-brand-blue/60 to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};