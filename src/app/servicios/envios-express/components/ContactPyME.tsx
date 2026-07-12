'use client';

import React, { useState } from 'react';
import { Building, ShieldCheck, Mail, ClipboardCheck, ArrowRight, Star } from 'lucide-react';

export default function ContactPyME() {
  const [company, setCompany] = useState('');
  const [cuit, setCuit] = useState('');
  const [responsible, setResponsible] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [estVolume, setEstVolume] = useState('10-50');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !responsible || !email) {
      alert('Por favor complete los campos obligatorios.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="altapyme" className="py-14 bg-white px-4 sm:px-6 lg:px-8 border-b border-brand-blue-50">
      <div className="max-w-4xl mx-auto bg-brand-white-50 border border-brand-blue-100 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12">
        
        {/* Left Side decorative pitch */}
        <div className="md:col-span-5 bg-brand-blue-700 text-white p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex h-10 w-10 rounded-xl bg-brand-blue-400/10 text-brand-blue-300 items-center justify-center border border-brand-blue-400/20">
              <Building className="h-5 w-5" />
            </div>
            
            <h3 className="font-display font-black text-2xl tracking-tight leading-tight">
              Uní tu e-commerce a nuestra Rueda.
            </h3>
            
            <p className="text-xs text-brand-blue-200 leading-relaxed font-normal">
              Diseñamos convenios personalizados para comercios y marcas que necesitan previsibilidad y resguardo. Olvidate de buscar cadetes cada mañana.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-blue-700">
            <div className="flex items-start gap-2.5 text-xs">
              <span className="text-brand-blue-300 font-bold">✓</span>
              <span>Facturación unificada mes vencido</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs">
              <span className="text-brand-blue-300 font-bold">✓</span>
              <span>Cadetes fijos auditados con seguro</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs">
              <span className="text-brand-blue-300 font-bold">✓</span>
              <span>Pick & Pack gratis en Friuli 1972</span>
            </div>
          </div>

          <div className="bg-brand-blue-700 p-3.5 rounded-xl text-[10px] text-brand-blue-300">
            ⭐ <strong className="text-brand-blue-100">99.8% de SLA verificado</strong> en entregas de MercadoLibre Flex en Gral Pueyrredón.
          </div>
        </div>

        {/* Right Side Form */}
        <div className="md:col-span-7 p-8 bg-white">
          {submitted ? (
            <div id="success-pyme-alert" className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
              <div className="h-12 w-12 rounded-full bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-brand-ink text-lg">¡Solicitud Registrada Exitosamente!</h4>
                <p className="text-xs text-brand-blue-400 max-w-sm mx-auto leading-relaxed font-normal">
                  Hemos generado tu pre-registro de Cuenta Corriente PyME. Matías Cejas o un asesor de Envíos DosRuedas te enviará el tarifario corporativo a <strong>{email}</strong> en menos de 24 horas hábiles.
                </p>
              </div>

              <div className="bg-brand-white-50 w-full border border-brand-blue-100 rounded-xl p-4 text-xs text-left space-y-1">
                <span className="block text-[10px] font-bold text-brand-blue-500 uppercase">Resumen Solicitud</span>
                <p className="font-bold text-brand-ink">• Razón Social: {company}</p>
                <p className="text-brand-blue-500">• Volumen mensual estimado: {estVolume} paquetes</p>
                <p className="text-brand-blue-500">• CUIT: {cuit || 'S/D'}</p>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-brand-blue-400 hover:text-brand-blue-500 flex items-center gap-1"
              >
                Modificar Datos Solicitados <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4 className="font-bold text-brand-ink text-base">Alta Previa Cuenta PyME</h4>
                <p className="text-xs text-brand-blue-300">Completá los campos para recibir el Kit Corporativo de Distribución.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-blue-600 uppercase tracking-wide">Razón Social / Comercio *</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Tienda Costa S.A."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-lg px-2.5 py-1.5 text-xs text-brand-ink focus:ring-2 focus:ring-brand-blue-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-blue-600 uppercase tracking-wide">CUIT (Opcional)</label>
                  <input 
                    type="text" 
                    placeholder="Sin guiones (Ej. 30123456789)"
                    value={cuit}
                    onChange={(e) => setCuit(e.target.value)}
                    className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-lg px-2.5 py-1.5 text-xs text-brand-ink focus:ring-2 focus:ring-brand-blue-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-brand-blue-600 uppercase tracking-wide">Nombre de Contacto Directo *</label>
                <input 
                  type="text" 
                  placeholder="Ej. Matías Cejas"
                  value={responsible}
                  onChange={(e) => setResponsible(e.target.value)}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-lg px-2.5 py-1.5 text-xs text-brand-ink focus:ring-2 focus:ring-brand-blue-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-blue-600 uppercase tracking-wide">Email Corporativo *</label>
                  <input 
                    type="email" 
                    placeholder="Ej. ventas@tiendacosta.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-lg px-2.5 py-1.5 text-xs text-brand-ink focus:ring-2 focus:ring-brand-blue-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-brand-blue-600 uppercase tracking-wide">Teléfono de Enlace (WhatsApp) *</label>
                  <input 
                    type="text" 
                    placeholder="Sufijo 223 (Ej. 2236602699)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-lg px-2.5 py-1.5 text-xs text-brand-ink focus:ring-2 focus:ring-brand-blue-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-brand-blue-600 uppercase tracking-wide">Volumen Estimado Mensual (Paquetes)</label>
                <select 
                  value={estVolume}
                  onChange={(e) => setEstVolume(e.target.value)}
                  className="w-full bg-brand-white-50 border border-brand-blue-200 rounded-lg px-2.5 py-1.5 text-xs text-brand-ink focus:ring-2 focus:ring-brand-blue-400"
                >
                  <option value="menos-de-10">Menos de 10 bultos mensuales</option>
                  <option value="10-50">De 10 a 50 bultos mensuales</option>
                  <option value="50-150">De 50 a 150 bultos de venta</option>
                  <option value="mas-de-150">Más de 150 bultos (Distribución regular)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue-400 hover:bg-brand-blue-300 text-brand-blue-700 font-black py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
              >
                <ClipboardCheck className="h-4 w-4" />
                SOLICITAR TARIFARIO CORPORATIVO
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
