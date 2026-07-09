"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Truck,
  UserCheck,
  Settings,
  Share2,
  Scale,
  RefreshCw,
  Mail,
  FileText,
  Calendar,
  ArrowRight,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ComponentType<any>;
  content: string;
  extraDetails?: string[];
}

const SECTIONS: Section[] = [
  {
    id: "introduccion",
    title: "Introducción",
    shortTitle: "Introducción",
    icon: FileText,
    content: "Bienvenido a Envíos DosRuedas. Nos comprometemos a proteger tu privacidad y a manejar tus datos personales de manera transparente y segura.",
    extraDetails: [
      "Transparencia absoluta en el tratamiento de datos",
      "Cumplimiento con la Ley de Protección de Datos Personales N° 25.326",
      "Seguridad y resguardo de la información de envíos"
    ]
  },
  {
    id: "informacion",
    title: "1. Información que Recopilamos",
    shortTitle: "Recopilación",
    icon: Database,
    content: "Recopilamos información que nos proporcionas directamente, como tu nombre, número de teléfono, dirección de correo electrónico y direcciones de recogida/entrega al utilizar nuestros servicios. También podemos recopilar información técnica sobre tu dispositivo y uso de nuestro sitio web a través de cookies y tecnologías similares.",
    extraDetails: [
      "Datos de contacto (Nombre, teléfono, e-mail)",
      "Datos logísticos (Dirección de recogida y entrega)",
      "Datos de navegación (Cookies y telemetría técnica)"
    ]
  },
  {
    id: "uso",
    title: "2. Uso de la Información",
    shortTitle: "Uso de Datos",
    icon: Settings,
    content: "Utilizamos tu información para proveer y gestionar nuestros servicios de envío, comunicar el estado de tus envíos, enviar ofertas y actualizaciones importantes, y mejorar y personalizar nuestro servicio.",
    extraDetails: [
      "Gestión y ruteo de envíos express y lowcost",
      "Notificaciones automáticas y alertas de entrega en tiempo real",
      "Mejora continua del algoritmo de cotización y servicio"
    ]
  },
  {
    id: "compartir",
    title: "3. Cómo Compartimos tu Información",
    shortTitle: "Compartir Datos",
    icon: Share2,
    content: "No vendemos ni alquilamos tu información personal. La compartimos con nuestros repartidores y socios logísticos únicamente para completar el servicio de envío, o cuando es requerido por ley.",
    extraDetails: [
      "Sin reventa ni alquiler de base de datos a terceros",
      "Sincronización segura con cadetes asignados al despacho",
      "Requerimientos legales y auditorías obligatorias"
    ]
  },
  {
    id: "seguridad",
    title: "4. Seguridad de los Datos",
    shortTitle: "Seguridad",
    icon: Lock,
    content: "Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración o destrucción.",
    extraDetails: [
      "Encriptación SSL en pasarelas y transmisión de datos",
      "Control estricto de accesos internos a las consolas de despacho",
      "Monitoreo activo de brechas y almacenamiento seguro"
    ]
  },
  {
    id: "derechos",
    title: "5. Tus Derechos",
    shortTitle: "Tus Derechos",
    icon: Scale,
    content: "Tienes derecho a acceder, rectificar o suprimir tus datos personales, u oponerte a su tratamiento.",
    extraDetails: [
      "Acceso inmediato a la información personal almacenada",
      "Rectificación rápida de direcciones y números telefónicos erróneos",
      "Supresión definitiva a solicitud del usuario"
    ]
  },
  {
    id: "cambios",
    title: "6. Cambios en esta Política",
    shortTitle: "Cambios",
    icon: RefreshCw,
    content: "Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento publicando la nueva versión aquí.",
    extraDetails: [
      "Notificación de cambios sustanciales a través de la web",
      "Archivo histórico de políticas anteriores disponible a solicitud",
      "Vigencia inmediata tras su publicación online"
    ]
  },
  {
    id: "contacto",
    title: "7. Contacto",
    shortTitle: "Contacto",
    icon: Mail,
    content: "Si tienes preguntas sobre esta Política, contáctanos a través de nuestro formulario de contacto o en matiascejas@enviosdosruedas.com.",
    extraDetails: [
      "Atención directa del Oficial de Privacidad de Datos",
      "Respuesta garantizada en menos de 48 horas hábiles",
      "Soporte especializado para PyMEs y eCommerce"
    ]
  }
];

export default function PrivacyContent() {
  const [activeId, setActiveId] = useState<string>("introduccion");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Intersection Observer for highlighting the active section in the sticky sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -55% 0px" }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    // Scroll top visibility logic
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen relative font-sans">
      {/* 🌟 PREMIUM HERO BANNER SECTION */}
      <section className="bg-brand-blue text-white relative py-20 lg:py-28 overflow-hidden border-b border-white/10">
        {/* Subtle background graphics */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-yellow/5 blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-white/5 blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue flex items-center gap-2 shadow-md w-fit mx-auto mb-6"
          >
            <Shield className="h-4 w-4" />
            <span>Navegación 100% Protegida</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white font-sans leading-tight max-w-4xl mx-auto"
          >
            Política de <span className="text-brand-yellow">Privacidad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-blue-100 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl mt-4 leading-relaxed font-sans"
          >
            En Envíos DosRuedas, tu confianza es nuestra prioridad. Aquí te explicamos cómo protegemos y utilizamos tu información personal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-xs text-brand-yellow font-medium mt-6 bg-white/10 border border-white/10 px-4 py-2 rounded-full font-mono"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Última actualización: 1 de Agosto de 2024</span>
          </motion.div>
        </div>
      </section>

      {/* 🧭 NAVIGATION & CONTENT PANEL */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT COLUMN: Sticky table of contents */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit self-start">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4 px-2">
                Índice de Secciones
              </h3>
              <nav className="flex flex-col gap-1.5">
                {SECTIONS.map((section) => {
                  const IconComponent = section.icon;
                  const isActive = activeId === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-brand-blue text-white shadow-md shadow-blue-900/10 scale-[1.02]"
                          : "text-slate-600 hover:text-brand-blue hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <IconComponent className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-brand-yellow" : "text-slate-400"}`} />
                        <span className="truncate">{section.shortTitle}</span>
                      </div>
                      <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isActive ? "text-brand-yellow translate-x-0.5" : "text-slate-300"}`} />
                    </button>
                  );
                })}
              </nav>

              {/* Quick Trust Banner inside Sidebar */}
              <div className="mt-8 pt-6 border-t border-slate-100 px-2 text-center">
                <Shield className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">
                  Seguridad Garantizada
                </p>
                <p className="text-[11px] text-slate-400 mt-1 leading-normal font-sans">
                  Tus datos logísticos se cifran con los más altos estándares.
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Interactive Document Flow */}
          <main className="w-full lg:w-3/4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-8"
            >
              {SECTIONS.map((section, index) => {
                const IconComponent = section.icon;
                const isActive = activeId === section.id;
                return (
                  <motion.article
                    key={section.id}
                    id={section.id}
                    variants={cardVariants}
                    className={`scroll-mt-28 bg-white rounded-3xl p-8 sm:p-10 border transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? "border-brand-blue/30 shadow-lg"
                        : "border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200"
                    }`}
                  >
                    {/* Floating top bar highlighted state */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 ${
                        isActive ? "bg-brand-blue" : "bg-transparent group-hover:bg-slate-200"
                      }`}
                    />

                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-brand-blue text-brand-yellow"
                            : "bg-blue-50/50 text-brand-blue group-hover:bg-brand-blue/10"
                        }`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Sección {index + 1} de {SECTIONS.length}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-ink font-sans">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {/* Section Content */}
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-normal">
                        {section.content}
                      </p>
                    </div>

                    {/* Details Bullet Points (if available) */}
                    {section.extraDetails && (
                      <div className="mt-6 pt-5 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-ink mb-3">
                          Puntos Clave:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {section.extraDetails.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs text-slate-500 font-sans leading-relaxed"
                            >
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-yellow shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.article>
                );
              })}

              {/* 📬 ADDITIONAL SUPPORT AND DIRECT ENQUIRY CARD */}
              <motion.section
                variants={cardVariants}
                className="bg-brand-blue text-white rounded-3xl p-8 sm:p-12 border border-blue-200/20 shadow-xl relative overflow-hidden"
              >
                {/* Graphics */}
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-yellow/5 blur-2xl -z-10 translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 blur-xl -z-10 -translate-x-1/4 translate-y-1/4" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                  <div className="space-y-3 max-w-lg">
                    <span className="px-3 py-1 bg-brand-yellow/10 text-brand-yellow rounded-full text-[10px] font-bold uppercase tracking-widest inline-block border border-brand-yellow/20">
                      Soporte de Privacidad
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans uppercase">
                      ¿Tenés dudas de privacidad?
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed font-sans">
                      Nuestro Oficial de Protección de Datos está disponible para guiarte. Escribinos directamente o completá nuestro formulario para que podamos ayudarte de inmediato.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Formulario de Contacto</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="mailto:matiascejas@enviosdosruedas.com"
                      className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Escribir E-mail</span>
                    </a>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </main>
        </div>
      </section>

      {/* 🚀 FLOAT TO TOP BUTTON */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-brand-blue hover:bg-brand-blue/95 border border-white/10 text-brand-yellow rounded-full shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-all"
          title="Volver Arriba"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  );
}
