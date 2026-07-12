'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Bike, Phone, MapPin, Mail, Clock, Award, ArrowUpRight,
  Zap, TrendingDown, ShoppingBag, ArrowUp, MessageSquare
} from 'lucide-react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function OptimizedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="optimized-footer" className="bg-brand-blue text-white border-t border-white/10 relative overflow-hidden font-sans">

      {/* Decorative top yellow accent bar with neon glow */}
      <div className="h-1.5 bg-brand-yellow w-full shadow-md shadow-brand-yellow/30" />

      {/* Center radial gradient highlight for background depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,204,0,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(0,51,153,0.4),transparent_40%)] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">



        {/* MID SECTION: Links & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 items-start">

          {/* COLUMN 1: Brand details & Socials (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-11 h-11 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Image
                  src="/LogoEnviosDosRuedas.png"
                  alt="Logo Envíos Dos Ruedas"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-white flex items-center gap-1.5">
                  Envíos <span className="text-brand-yellow">Dosruedas</span>
                </span>
                <span className="block text-[9px] font-sans tracking-widest text-blue-200 uppercase leading-none font-bold">
                  tu solución confiable
                </span>
              </div>
            </Link>

            <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
              Logística urbana inteligente de última milla en Mar del Plata. Conectamos tu negocio con entregas express en el día, soluciones Flex para MercadoLibre y distribución 3PL eficiente.
            </p>
            <div className="space-y-3.5 pt-2">
              <span className="block text-xs font-bold text-brand-yellow uppercase tracking-widest font-sans">
                Seguinos en redes
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ y: -3, scale: 1.05 }} className="inline-block">
                  <Link
                    href="/nosotros/nuestras-redes"
                    className="h-10 w-10 rounded-xl bg-white/5 hover:bg-brand-yellow text-white hover:text-brand-blue flex items-center justify-center transition-all duration-200 border-2 border-white/20 hover:border-brand-blue shadow-[2px_2px_0px_var(--color-brand-yellow)] p-2.5 group cursor-pointer"
                    title="Instagram"
                  >
                    <FaInstagram className="h-5 w-5 text-white group-hover:text-brand-blue transition-colors" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.05 }} className="inline-block">
                  <Link
                    href="/nosotros/nuestras-redes"
                    className="h-10 w-10 rounded-xl bg-white/5 hover:bg-brand-yellow text-white hover:text-brand-blue flex items-center justify-center transition-all duration-200 border-2 border-white/20 hover:border-brand-blue shadow-[2px_2px_0px_var(--color-brand-yellow)] p-2.5 group cursor-pointer"
                    title="Facebook"
                  >
                    <FaFacebook className="h-5 w-5 text-white group-hover:text-brand-blue transition-colors" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.05 }} className="inline-block">
                  <a
                    href="https://wa.me/542236602699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-white/5 hover:bg-brand-yellow text-white hover:text-brand-blue flex items-center justify-center transition-all duration-200 border-2 border-white/20 hover:border-brand-blue shadow-[2px_2px_0px_var(--color-brand-yellow)] p-2.5 group cursor-pointer"
                    title="WhatsApp"
                  >
                    <FaWhatsapp className="h-5 w-5 text-white group-hover:text-brand-blue transition-colors" />
                  </a>
                </motion.div>

                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border-2 border-white/10 text-xs text-blue-200 font-mono shadow-inner ml-2">
                  <Award className="h-4 w-4 text-brand-yellow animate-pulse shrink-0" />
                  <span>3PL Certificado</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow uppercase border-b border-white/10 pb-2">
              Soluciones
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  href="/servicios/envios-express"
                  className="text-blue-100 hover:text-brand-yellow flex items-center gap-2.5 group transition-all duration-200 hover:translate-x-1"
                >
                  <Zap className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>Envíos Express</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/envios-lowcost"
                  className="text-blue-100 hover:text-brand-yellow flex items-center gap-2.5 group transition-all duration-200 hover:translate-x-1"
                >
                  <TrendingDown className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>Envíos LowCost</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/enviosflex"
                  className="text-blue-100 hover:text-brand-yellow flex items-center gap-2.5 group transition-all duration-200 hover:translate-x-1"
                >
                  <Clock className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>Envíos Flex (MeLi)</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/plan-emprendedores"
                  className="text-blue-100 hover:text-brand-yellow flex items-center gap-2.5 group transition-all duration-200 hover:translate-x-1"
                >
                  <ShoppingBag className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>E-Commerce & 3PL</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact & Location Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow uppercase border-b border-white/10 pb-2">
              Contacto
            </h4>

            <div className="space-y-4 text-xs text-blue-100">

              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0 text-brand-yellow">
                  <MapPin className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-sans tracking-wide">Ubicación</p>
                  <p className="font-sans text-[13px] mt-0.5">Friuli 1972, Mar del Plata</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0 text-brand-yellow">
                  <Phone className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-sans tracking-wide">Teléfono</p>
                  <p className="font-mono text-[13px] mt-0.5">+54 223 660-2699</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0 text-brand-yellow">
                  <Mail className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-sans tracking-wide">Email</p>
                  <p className="font-sans text-[13px] mt-0.5 break-all underline decoration-white/20 hover:text-brand-yellow transition-colors">
                    matiascejas@enviosdosruedas.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0 text-brand-yellow">
                  <Clock className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-sans tracking-wide">Horarios</p>
                  <p className="font-sans text-[13px] mt-0.5">Lunes a Sábado: 08:00 a 20:00 hs</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-white/10 my-12 relative">
          {/* Scroll to Top Floating Button */}
          <motion.button
            onClick={scrollToTop}
            className="absolute -top-6 right-4 sm:right-8 bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue p-3.5 rounded-xl shadow-[3px_3px_0px_var(--color-brand-blue)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-brand-blue cursor-pointer"
            title="Volver arriba"
            whileHover={{ y: -2 }}
          >
            <ArrowUp className="h-5 w-5 font-bold" />
          </motion.button>
        </div>

        {/* BOTTOM SECTION: Legal & Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-blue-200 font-sans border-b border-white/5 pb-2">
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6">
            <p className="font-medium text-white">© 2026 Envíos DosRuedas. Todos los derechos reservados.</p>
            <Link href="/nosotros/sobre-nosotros" className="hover:text-brand-yellow transition-colors underline decoration-white/10 text-blue-200">
              Sobre Nosotros
            </Link>
            <Link href="/nosotros/preguntas-frecuentes" className="hover:text-brand-yellow transition-colors underline decoration-white/10 text-blue-200">
              Preguntas Frecuentes
            </Link>
            <Link href="/nosotros/nuestras-redes" className="hover:text-brand-yellow transition-colors underline decoration-white/10 text-blue-200">
              Nuestras Redes
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 shrink-0">
            <Link href="/terminos-y-condiciones" className="hover:text-brand-yellow transition-colors underline decoration-white/10 text-blue-200">
              Términos y Condiciones
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-brand-yellow transition-colors underline decoration-white/10 text-blue-200">
              Política de Privacidad
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
