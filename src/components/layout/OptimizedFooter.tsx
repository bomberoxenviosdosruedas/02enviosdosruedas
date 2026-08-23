'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Phone, MapPin, Mail, Clock, ShieldCheck, ArrowUpRight,
  Zap, TrendingDown, ShoppingBag, ArrowUp
} from 'lucide-react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function OptimizedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="optimized-footer"
      className="bg-brand-blue-700 text-white border-t border-white/10 relative overflow-hidden font-sans select-none"
    >
      {/* Decorative top yellow accent bar with continuous glow */}
      <div className="h-1.5 bg-brand-yellow-500 w-full shadow-md shadow-brand-yellow-500/30" />

      {/* Atmospheric Background & Subtle Blueprint Grid Details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,236,1,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(4,35,107,0.5),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

        {/* TOP CTA BANNER / BRAND PROMISE — Harmonics with Header tone */}
        <div className="mb-14 rounded-2xl bg-brand-blue-800/90 border border-white/15 p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-yellow-500 text-xs font-subheading font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-ping" />
              Operaciones Activas Mar del Plata 2026
            </div>
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white">
              ¿Tenés envíos para hoy? <span className="text-brand-yellow-500">Los entregamos a tiempo.</span>
            </h3>
            <p className="text-sm text-brand-blue-100 font-light max-w-xl">
              Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/cotizar/express"
              className="w-full sm:w-auto cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-full shadow-accent-sm hover:shadow-cta-glow transition-all flex items-center justify-between group min-h-[48px]"
            >
              <span>Cotizá tu Envío</span>
              <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3 group-hover:translate-x-1 transition-transform">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>

            <a
              href="https://wa.me/542236602699?text=Hola%20Envíos%20DosRuedas!%20Quiero%20hacer%20una%20consulta%20de%20envíos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-subheading font-bold uppercase tracking-wider text-sm px-5 py-3.5 rounded-full transition-all min-h-[48px]"
            >
              <FaWhatsapp className="h-4 w-4 text-brand-yellow-500" />
              <span>Chateá con Nosotros</span>
            </a>
          </div>
        </div>

        {/* MID SECTION: Links & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* COLUMN 1: Brand details & Socials (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl">
              <div className="relative w-11 h-11 bg-white/10 p-1.5 rounded-xl border border-white/15 group-hover:scale-105 transition-all duration-300 shrink-0 flex items-center justify-center">
                <Image
                  src="/logo-master.svg"
                  alt="Logo Envíos DosRuedas"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl sm:text-3xl tracking-tight uppercase select-none text-white">
                  Envíos <span className="text-brand-yellow-500">DosRuedas</span>
                </span>
                <span className="text-[10px] font-mono text-brand-blue-100 tracking-widest uppercase mt-0.5 opacity-90">
                  Tu solución confiable · Mar del Plata
                </span>
              </div>
            </Link>

            <p className="text-brand-blue-50 text-sm leading-relaxed max-w-sm font-light">
              Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano.
            </p>

            <div className="space-y-3 pt-2">
              <span className="block text-xs font-bold text-brand-yellow-500 uppercase tracking-widest font-subheading">
                Canales Oficiales
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* Instagram */}
                <motion.div whileHover={{ y: -3, scale: 1.05 }} className="inline-block">
                  <Link
                    href="/nosotros/nuestras-redes"
                    className="h-10 w-10 rounded-xl bg-white/10 hover:bg-brand-yellow-500 text-white hover:text-brand-blue-900 flex items-center justify-center transition-all duration-200 border border-white/15 hover:border-brand-yellow-500 shadow-sm p-2.5 group cursor-pointer"
                    title="Instagram @enviosdosruedas"
                    aria-label="Instagram Oficial"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </Link>
                </motion.div>

                {/* Facebook */}
                <motion.div whileHover={{ y: -3, scale: 1.05 }} className="inline-block">
                  <Link
                    href="/nosotros/nuestras-redes"
                    className="h-10 w-10 rounded-xl bg-white/10 hover:bg-brand-yellow-500 text-white hover:text-brand-blue-900 flex items-center justify-center transition-all duration-200 border border-white/15 hover:border-brand-yellow-500 shadow-sm p-2.5 group cursor-pointer"
                    title="Facebook Envíos DosRuedas"
                    aria-label="Facebook Oficial"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </Link>
                </motion.div>

                {/* WhatsApp */}
                <motion.div whileHover={{ y: -3, scale: 1.05 }} className="inline-block">
                  <a
                    href="https://wa.me/542236602699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 flex items-center justify-center transition-all duration-200 border border-brand-yellow-500 hover:border-brand-yellow-400 shadow-accent-sm hover:shadow-cta-glow p-2.5 group cursor-pointer"
                    title="WhatsApp Directo"
                    aria-label="WhatsApp Directo"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </motion.div>

                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white font-mono shadow-inner">
                  <ShieldCheck className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                  <span>Partner 3PL Verificado</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Services & Tools (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow-500 uppercase border-b border-white/10 pb-2 font-bold flex items-center gap-2">
              <span>Servicios y Cotizadores</span>
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link
                  href="/cotizar/express"
                  className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center justify-between group transition-all duration-200 hover:translate-x-1"
                >
                  <div className="flex items-center gap-2.5">
                    <Zap className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                    <span>Cotizador Express &lt; 2H</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="/cotizar/lowcost"
                  className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center justify-between group transition-all duration-200 hover:translate-x-1"
                >
                  <div className="flex items-center gap-2.5">
                    <TrendingDown className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                    <span>Cotizador LowCost Batch</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/enviosflex"
                  className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center justify-between group transition-all duration-200 hover:translate-x-1"
                >
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                    <span>Mercado Envíos Flex</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/plan-emprendedores"
                  className="text-brand-blue-50 hover:text-brand-yellow-500 flex items-center justify-between group transition-all duration-200 hover:translate-x-1"
                >
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                    <span>E-Commerce & 3PL</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow-500" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact & Hub Operations Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow-500 uppercase border-b border-white/10 pb-2 font-bold">
              Base de Operaciones MDQ
            </h4>

            <div className="space-y-3.5 text-xs text-brand-blue-50 font-sans">
              <div className="flex gap-3 items-start bg-brand-blue-800/80 p-3 rounded-xl border border-white/15">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 text-brand-yellow-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-subheading tracking-wider">Centro de Distribución</p>
                  <p className="font-sans text-[13px] text-brand-blue-100 mt-0.5">Friuli 1972, Mar del Plata</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-brand-blue-800/80 p-3 rounded-xl border border-white/15">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 text-brand-yellow-500">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-subheading tracking-wider">Línea Directa y WhatsApp</p>
                  <a href="tel:+542236602699" className="font-mono text-[13px] font-bold text-brand-yellow-500 hover:underline block mt-0.5">
                    +54 223 660-2699
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-brand-blue-800/80 p-3 rounded-xl border border-white/15">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 text-brand-yellow-500">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-white uppercase font-subheading tracking-wider">Atención Comercial</p>
                  <a href="mailto:matiascejas@enviosdosruedas.com" className="font-sans text-[12px] text-brand-blue-100 hover:text-brand-yellow-500 transition-colors block mt-0.5 break-all">
                    matiascejas@enviosdosruedas.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-brand-blue-800/80 p-3 rounded-xl border border-white/15">
                <div className="p-2 bg-white/10 rounded-lg shrink-0 text-brand-yellow-500">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white uppercase font-subheading tracking-wider">Horarios de Despacho (Base Central)</p>
                  <div className="text-[12px] font-sans text-brand-blue-100 space-y-0.5">
                    <div className="flex justify-between items-center gap-4">
                      <span>Lunes a Viernes:</span>
                      <span className="font-mono font-bold text-brand-yellow-500">09:00 - 18:00 hs</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span>Sábados:</span>
                      <span className="font-mono font-bold text-brand-yellow-500">10:00 - 15:00 hs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-white/10 my-10 relative">
          {/* Scroll to Top Floating Button */}
          <motion.button
            onClick={scrollToTop}
            className="absolute -top-5 right-4 sm:right-6 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 p-2.5 rounded-full shadow-accent-md hover:shadow-cta-glow transition-all flex items-center justify-center border-2 border-brand-yellow-500 cursor-pointer"
            title="Volver al inicio"
            aria-label="Volver arriba"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-4 w-4 font-bold" />
          </motion.button>
        </div>

        {/* BOTTOM SECTION: Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-brand-blue-100 font-sans">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
            <p className="font-medium text-white">© 2026 Envíos DosRuedas · Mar del Plata, Argentina.</p>
            <Link href="/nosotros/sobre-nosotros" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-100">
              Sobre Nosotros
            </Link>
            <Link href="/nosotros/preguntas-frecuentes" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-100">
              Preguntas Frecuentes
            </Link>
            <Link href="/nosotros/nuestras-redes" className="hover:text-brand-yellow-500 transition-colors text-brand-blue-100">
              Nuestras Redes
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 shrink-0 text-brand-blue-100">
            <Link href="/terminos-y-condiciones" className="hover:text-brand-yellow-500 transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-brand-yellow-500 transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
