"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Scale,
  FileText,
  Truck,
  UserCheck,
  CreditCard,
  ShieldAlert,
  RefreshCw,
  Mail,
  Calendar,
  ChevronRight,
  ChevronUp,
  ArrowRight,
  Shield,
  CheckCircle,
} from "lucide-react";

interface TermSection {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ComponentType<any>;
  content: string;
  bullets?: string[];
}

const SECTIONS: TermSection[] = [
  {
    id: "aceptacion",
    title: "1. Aceptación de los Términos",
    shortTitle: "Aceptación",
    icon: FileText,
    content: "Al solicitar o utilizar cualquiera de los servicios de envío proporcionados por Envíos DosRuedas (\"nosotros\", \"nuestro\"), usted (\"el cliente\", \"usuario\") acepta y se compromete a cumplir con los siguientes términos y condiciones. Si no está de acuerdo con estos términos, no utilice nuestros servicios.",
    bullets: [
      "Consentimiento expreso al contratar servicios en la plataforma",
      "Aplicable a usuarios individuales, comercios y clientes corporativos",
      "Vigencia legal plena en toda la República Argentina"
    ]
  },
  {
    id: "descripcion",
    title: "2. Descripción del Servicio",
    shortTitle: "Descripción",
    icon: Truck,
    content: "Envíos DosRuedas proporciona servicios de mensajería y paquetería local en Mar del Plata y áreas circundantes. Los detalles específicos de cada servicio (Express, Low-Cost, etc.) se describen en las secciones correspondientes de nuestro sitio web.",
    bullets: [
      "Operación activa y cobertura integral en Mar del Plata",
      "Diversas modalidades de envío (Express inmediato, LowCost programado y Flex)",
      "Soporte logístico adaptado para eCommerce y PyMEs locales"
    ]
  },
  {
    id: "obligaciones",
    title: "3. Obligaciones del Usuario",
    shortTitle: "Obligaciones",
    icon: UserCheck,
    content: "El cliente es responsable de proporcionar información precisa y completa para la recogida y entrega, incluyendo nombres, direcciones y números de teléfono. Asimismo, el cliente debe asegurarse de que el contenido del paquete sea legal y cumpla con nuestras políticas. No transportamos artículos ilegales, peligrosos o prohibidos. El embalaje adecuado del paquete para su transporte seguro es responsabilidad del cliente.",
    bullets: [
      "Precisión total en datos de origen, destino y contactos directos",
      "Prohibición estricta de sustancias peligrosas, dinero, valores o ilegales",
      "Responsabilidad exclusiva del cliente sobre el embalaje y sellado"
    ]
  },
  {
    id: "tarifas",
    title: "4. Tarifas y Pago",
    shortTitle: "Tarifas y Pago",
    icon: CreditCard,
    content: "Las tarifas se calculan en base a la distancia, el tipo de servicio y las características del paquete, según se indica en nuestro cotizador. Las tarifas son finales a menos que haya cambios significativos en el servicio solicitado. El pago debe realizarse en el momento de la solicitud o según los términos acordados para clientes corporativos.",
    bullets: [
      "Tarifas transparentes calculadas de forma automatizada por ruteo",
      "Medios de pago disponibles: Transferencia, efectivo o cuenta corriente",
      "Ajustes de tarifas únicamente por demoras ajenas o cambios de recorrido"
    ]
  },
  {
    id: "responsabilidad",
    title: "5. Limitación de Responsabilidad",
    shortTitle: "Responsabilidad",
    icon: ShieldAlert,
    content: "No seremos responsables por retrasos causados por circunstancias fuera de nuestro control, como condiciones climáticas extremas, accidentes, cortes de tráfico, demoras en el punto de recogida/entrega o fuerza mayor de fuerza operativa en calle.",
    bullets: [
      "Exclusión de responsabilidad por eventos fortuitos y de fuerza mayor",
      "Tiempos estimados de entrega referenciales, no de carácter contractual absoluto",
      "Límite de indemnización aplicable según el tipo de seguro y envío seleccionado"
    ]
  },
  {
    id: "modificaciones",
    title: "6. Modificaciones de los Términos",
    shortTitle: "Modificaciones",
    icon: RefreshCw,
    content: "Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en nuestro sitio web. El uso continuado de nuestros servicios constituirá la aceptación de los nuevos términos.",
    bullets: [
      "Actualización transparente en el sitio oficial en tiempo real",
      "Notificación directa de condiciones tarifarias a comercios adheridos",
      "Aceptación tácita por la solicitud continua de nuevos servicios"
    ]
  }
];

export default function TermsContent() {
  const [activeId, setActiveId] = useState<string>("aceptacion");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

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
      {/* 🌟 HERO HEADER */}
      <section className="bg-brand-blue text-white relative py-20 lg:py-28 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-yellow/5 blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-white/5 blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue flex items-center gap-2 shadow-md w-fit mx-auto mb-6"
          >
            <Scale className="h-4 w-4" />
            <span>Marco Legal del Servicio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white font-sans leading-tight max-w-4xl mx-auto"
          >
            Términos y <span className="text-brand-yellow">Condiciones</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-blue-100 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl mt-4 leading-relaxed font-sans"
          >
            Las reglas del juego. Al usar nuestros servicios, aceptas estos términos. Te recomendamos leerlos detenidamente.
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

      {/* 🧭 NAVIGATION & LEGAL CONTENT */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT: Sticky Sidebar */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit self-start">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4 px-2">
                Secciones del Contrato
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

              {/* Security Sidebar Callout */}
              <div className="mt-8 pt-6 border-t border-slate-100 px-2 text-center">
                <Shield className="h-8 w-8 text-brand-blue mx-auto mb-2" />
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">
                  Operación Transparente
                </p>
                <p className="text-[11px] text-slate-400 mt-1 leading-normal font-sans">
                  Nuestras pautas operativas aseguran un servicio responsable y veloz.
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT: Document Text Flow */}
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
                    {/* Visual indicators */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 ${
                        isActive ? "bg-brand-blue" : "bg-transparent group-hover:bg-slate-200"
                      }`}
                    />

                    {/* Section title & icon */}
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
                          Cláusula {index + 1} de {SECTIONS.length}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-ink font-sans">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {/* Section textual body */}
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-normal">
                        {section.content}
                      </p>
                    </div>

                    {/* Section key points */}
                    {section.bullets && (
                      <div className="mt-6 pt-5 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-ink mb-3">
                          Aspectos Clave a Considerar:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {section.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs text-slate-500 font-sans leading-relaxed"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 text-brand-yellow shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.article>
                );
              })}

              {/* Contact Call to Action */}
              <motion.section
                variants={cardVariants}
                className="bg-brand-blue text-white rounded-3xl p-8 sm:p-12 border border-blue-200/20 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-yellow/5 blur-2xl -z-10 translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 blur-xl -z-10 -translate-x-1/4 translate-y-1/4" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                  <div className="space-y-3 max-w-lg">
                    <span className="px-3 py-1 bg-brand-yellow/10 text-brand-yellow rounded-full text-[10px] font-bold uppercase tracking-widest inline-block border border-brand-yellow/20">
                      Contacto y Dudas Legales
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans uppercase">
                      ¿Tenés alguna consulta legal?
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed font-sans">
                      Si tenés dudas operativas, preguntas de cobertura, seguros o inquietudes legales sobre nuestros términos de servicio, ponete en contacto con nuestro equipo directivo.
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
                      <span>Soporte Directo</span>
                    </a>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </main>
        </div>
      </section>

      {/* FLOATING TOP SCROLLER */}
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
