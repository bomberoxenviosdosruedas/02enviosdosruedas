'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Heart, ExternalLink, Instagram, MessageSquare } from "lucide-react";

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
        <section className="py-24 px-6 bg-slate-50 text-slate-800 overflow-hidden relative border-t border-slate-200">
            {/* Soft background gradient highlight (Light themed blue/yellow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-blue-100/30 blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-[10px] font-bold tracking-widest uppercase font-subheading">
                            <Heart size={11} className="fill-brand-blue shrink-0 animate-pulse text-brand-blue" /> 
                            Conectate con nosotros
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none text-brand-blue">
                            SEGUÍ NUESTRO <span className="text-brand-yellow bg-brand-blue px-3.5 py-1 rounded-2xl shadow-accent-sm inline-block rotate-[-1deg] transform hover:rotate-0 transition-transform">MOVIMIENTO</span>
                        </h2>
                        <p className="text-slate-650 text-base sm:text-lg font-sans max-w-xl leading-relaxed">
                            Sumate a nuestra comunidad digital y mantente al día con las últimas noticias de logística en Mar del Plata.
                        </p>
                    </div>

                    {/* Social networks quick buttons */}
                    <div className="flex flex-wrap gap-4">
                        {socialNetworks.map((net, idx) => (
                            <motion.button
                                key={idx}
                                onClick={net.isWhatsApp ? handleWhatsAppClick : () => window.open(net.href, "_blank")}
                                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/30 hover:bg-slate-100 transition-all cursor-pointer text-slate-800 min-h-[48px] shadow-sm"
                                aria-label={`Seguinos en ${net.name}`}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 p-2 relative shrink-0"
                                    style={{ backgroundColor: `${net.color}12` }}
                                    aria-hidden="true"
                                >
                                    {net.name === "Instagram" && <Instagram className="h-5 w-5 text-[#E1306C]" />}
                                    {net.name === "WhatsApp" && <MessageSquare className="h-5 w-5 text-[#25D366]" />}
                                    {net.name === "Facebook" && (
                                        <div className="relative w-5 h-5">
                                            <Image
                                                src="/iconos/facebook.svg"
                                                alt="Facebook"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="text-left">
                                    <div className="text-xs font-bold font-subheading tracking-wider uppercase text-brand-blue leading-none">{net.name}</div>
                                    <div className="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">{net.description}</div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Scrolling Feed Panel */}
                <div className="relative group/carousel">
                    <div className="flex gap-6 w-full overflow-hidden py-4">
                        <motion.div
                            className="flex gap-6 shrink-0"
                            animate={{ x: [0, -1480] }}
                            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                            whileHover={{ animationPlayState: 'paused' }}
                        >
                            {[...feedItems, ...feedItems, ...feedItems].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.postUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-64 h-64 sm:w-72 sm:h-72 shrink-0 rounded-3xl overflow-hidden relative group border border-slate-200 shadow-md transition-all hover:shadow-xl hover:border-brand-blue/30 hover:scale-[1.015] block bg-white"
                                    aria-label={`Ver publicación ${item.id} en ${item.type === 'ig' ? 'Instagram' : 'Facebook'}`}
                                >
                                    <img 
                                        src={item.image} 
                                        alt={`Publicación de ${item.type === 'ig' ? 'Instagram' : 'Facebook'}`} 
                                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                                    />
                                    {/* Glassmorphic hover overlay (Using clean branding blue overlay) */}
                                    <div className="absolute inset-0 bg-brand-blue/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-5 p-6 text-center">
                                        <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center relative shrink-0">
                                            {item.type === 'ig' && <Instagram className="h-6 w-6 text-brand-yellow" />}
                                            {item.type === 'fb' && (
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
                            ))}
                        </motion.div>
                    </div>

                    {/* Edge shadow gradients to simulate infinite scroll visually (Adapted to slate-50 light background) */}
                    <div className="absolute top-0 left-0 w-24 sm:w-40 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-24 sm:w-40 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};