'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Send,
  Sparkles,
} from 'lucide-react';
import CTANestedPill from '@/components/ui/CTANestedPill';
import { InputField } from '@/components/ui/InputField';
import { trackAnalytics } from '@/lib/analytics';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface CuentaCorrienteFormData {
  nombre: string;
  empresa: string;
  rubro: string;
  volumen: string;
  telefono: string;
}

const INITIAL_FORM_DATA: CuentaCorrienteFormData = {
  nombre: '',
  empresa: '',
  rubro: 'comercio',
  volumen: '50-200',
  telefono: '',
};

export default function CuentaCorrienteHero() {
  const [formData, setFormData] = useState<CuentaCorrienteFormData>(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.empresa.trim()) return;

    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(
          'empresa_lead',
          JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
          })
        );
      } catch {}
    }

    trackAnalytics.formSubmit('empresas_cuenta_corriente');
    trackAnalytics.whatsappClick('empresas_cuenta_corriente');

    const msg = `¡Hola Envíos DosRuedas! Soy ${formData.nombre} de la empresa *${formData.empresa}* (Rubro: ${formData.rubro}). Despachamos aprox. ${formData.volumen} envíos mensuales y solicitamos apertura de cuenta corriente comercial. Tel: ${formData.telefono}`;
    const waUrl = buildWhatsAppUrl({ message: msg, source: 'cuenta_corriente' });

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section
      id="cuenta-corriente-hero"
      aria-label="Logística con cuenta corriente para empresas en Mar del Plata"
      className="relative z-10 bg-brand-blue-500 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Copys y Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/10 border border-brand-yellow-500/40 text-brand-yellow-500 text-xs font-subheading uppercase tracking-widest font-bold shadow-accent-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow-500" aria-hidden="true" />
              <span>Logística Corporativa en Mar del Plata</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.98]">
              LOGÍSTICA CON <span className="text-brand-yellow-500">CUENTA CORRIENTE</span> PARA EMPRESAS
            </h1>

            <p className="font-sans text-base sm:text-lg text-brand-blue-100 max-w-xl leading-relaxed">
              Olvidate de pagar cada envío en efectivo. Abrí una cuenta corriente para tu comercio o empresa con pagos agrupados por semana, quincena o mes y el resumen de todos tus envíos.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <CTANestedPill
                href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quiero%20abrir%20una%20cuenta%20corriente%20comercial%20para%20mi%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Hablá con un Asesor B2B
              </CTANestedPill>

              <CTANestedPill
                href="#formulario-empresas"
                variant="elevated"
                size="large"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Apertura Online
              </CTANestedPill>
            </div>

            {/* Micro-badges */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-brand-blue-50">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                Pagos semanales, quincenales o mensuales
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                Sin costo de mantenimiento
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                Cierre quincenal / mensual
              </span>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Solicitud Directa */}
          <div id="formulario-empresas" className="lg:col-span-5">
            <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float">
              <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-500 space-y-5">
                <div>
                  <span className="text-xs font-subheading uppercase tracking-widest text-brand-blue-500 font-bold block">
                    SOLICITUD INMEDIATA
                  </span>
                  <h2 className="text-2xl font-display uppercase tracking-tight text-brand-blue-500 mt-1">
                    Abrí tu Cuenta Corriente
                  </h2>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-xl bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-brand-blue-500 mx-auto" aria-hidden="true" />
                    <h3 className="font-display text-xl uppercase text-brand-blue-500">
                      ¡SOLICITUD ENVIADA!
                    </h3>
                    <p className="font-sans text-xs text-brand-blue-500">
                      Estamos coordinando la apertura de tu cuenta comercial en Mar del Plata.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <InputField
                      label="Nombre y Apellido"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej: Marcelo Rossi"
                    />

                    <InputField
                      label="Razón Social o Comercio"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Ej: Distribuidora Costa Atlántica S.R.L."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="select-rubro"
                          className="block text-xs font-subheading uppercase text-brand-blue-500 font-bold mb-1 tracking-wider"
                        >
                          Rubro Principal
                        </label>
                        <select
                          id="select-rubro"
                          value={formData.rubro}
                          onChange={(e) => setFormData({ ...formData, rubro: e.target.value })}
                          className="w-full h-11 px-2.5 rounded-xl border-2 border-brand-blue-100 bg-white text-brand-blue-500 font-sans text-xs focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20 cursor-pointer"
                        >
                          <option value="repuestos">Autopartes y Repuestos</option>
                          <option value="farmacia">Farmacia / Óptica / Salud</option>
                          <option value="estudio">Estudio Contable / Jurídico</option>
                          <option value="indumentaria">Indumentaria / Calzado</option>
                          <option value="gastronomia">Gastronomía / Insumos</option>
                          <option value="otro">Otro rubro comercial</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="select-volumen"
                          className="block text-xs font-subheading uppercase text-brand-blue-500 font-bold mb-1 tracking-wider"
                        >
                          Volumen Mensual
                        </label>
                        <select
                          id="select-volumen"
                          value={formData.volumen}
                          onChange={(e) => setFormData({ ...formData, volumen: e.target.value })}
                          className="w-full h-11 px-2.5 rounded-xl border-2 border-brand-blue-100 bg-white text-brand-blue-500 font-sans text-xs focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20 cursor-pointer"
                        >
                          <option value="20-50">20 a 50 envíos</option>
                          <option value="50-200">50 a 200 envíos</option>
                          <option value="200-500">200 a 500 envíos</option>
                          <option value="+500">+500 envíos</option>
                        </select>
                      </div>
                    </div>

                    <InputField
                      label="WhatsApp / Teléfono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="Ej: 223 660-2699"
                    />

                    <button
                      type="submit"
                      className="w-full min-h-12 rounded-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading uppercase text-sm font-bold tracking-wider py-3 px-6 shadow-accent-sm transition-all cursor-pointer flex items-center justify-between mt-2"
                    >
                      <span>Pedir Apertura de Cuenta</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
