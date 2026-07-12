'use client';

import React from 'react';
import { Truck, Bike, Sparkles, Building, Clock, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-brand-white-50 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-50">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="block text-sm font-subheading text-brand-blue uppercase tracking-widest">
            NUESTRO PORTAFOLIO LOGÍSTICO
          </span>
          <h2 className="text-4xl font-display uppercase tracking-wide text-brand-blue sm:text-5xl">
            Servicios Hechos a la <span className="underline decoration-brand-yellow decoration-heavy">Medición Costera</span>
          </h2>
          <p className="text-brand-blue-400 text-base leading-relaxed">
            Diseñamos soluciones ágiles y competitivas para resolver desde firmas de contratos de urgencia hasta distribuciones masivas de venta online.
          </p>
        </div>

        {/* Detailed cards deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Service A: Express */}
          <div className="bg-white border border-brand-blue-100 hover:border-brand-blue/40 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.01] flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <span className="text-xs bg-brand-blue/10 text-brand-blue font-subheading tracking-wider px-2 py-0.5 rounded uppercase">Prioritario</span>
                <h3 className="font-subheading text-2xl text-brand-blue-700 tracking-wide leading-none uppercase">Envíos Express</h3>
                <p className="text-xs text-brand-blue-400 leading-relaxed font-normal">
                  Retiro y entrega puerta a puerta inmediato en menos de 2 horas (120 minutos) dentro de la cuadrícula urbana principal de MDQ.
                </p>
              </div>

              {/* Checklist details */}
              <ul className="space-y-2 text-xs text-brand-blue-500 font-medium pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Mensajero asignado exclusivo
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Ideal para trámites y repuestos
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Reporte de recibo instantáneo
                </li>
              </ul>
            </div>
            
            <a 
              href="#cotizador" 
              className="w-full bg-brand-blue hover:bg-brand-blue/95 text-white text-center font-subheading text-lg py-2.5 rounded-xl transition-all block tracking-wider uppercase"
            >
              Cotizar Express
            </a>
          </div>

          {/* Service B: LowCost */}
          <div className="bg-white border border-brand-blue-100 hover:border-brand-blue/40 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.01] flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Bike className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <span className="text-xs bg-brand-blue/10 text-brand-blue font-subheading tracking-wider px-2 py-0.5 rounded uppercase">Eficiencia</span>
                <h3 className="font-subheading text-2xl text-brand-blue-700 tracking-wide leading-none uppercase">Envíos LowCost</h3>
                <p className="text-xs text-brand-blue-400 leading-relaxed font-normal">
                  La opción más conveniente para e-commerce. Despachas antes de las 13:00 hs y se distribuye con tarifas planas reducidas por la tarde.
                </p>
              </div>

              {/* Checklist details */}
              <ul className="space-y-2 text-xs text-brand-blue-500 font-medium pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Entrega consolidada en el día
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Costo fijo super optimizado
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Ruteos con mapa inteligente
                </li>
              </ul>
            </div>
            
            <a 
              href="#cotizador" 
              className="w-full bg-brand-blue hover:bg-brand-blue/95 text-white text-center font-subheading text-lg py-2.5 rounded-xl transition-all block tracking-wider uppercase"
            >
              Estimar Rueda LowCost
            </a>
          </div>

          {/* Service C: MercadoLibre Flex */}
          <div className="bg-white border border-brand-blue-100 hover:border-brand-blue/40 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.01] flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-brand-yellow/30 text-brand-blue flex items-center justify-center">
                <Sparkles className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <span className="text-xs bg-brand-yellow/40 text-brand-blue font-subheading tracking-wider px-2 py-0.5 rounded uppercase font-bold">Expertos</span>
                <h3 className="font-subheading text-2xl text-brand-blue-700 tracking-wide leading-none uppercase">MercadoLibre Flex</h3>
                <p className="text-xs text-brand-blue-400 leading-relaxed font-normal">
                  Soporte logístico de alta performance para mantener tu reputación MercadoLíder Platino en color verde con SLAs del &gt;99.8%.
                </p>
              </div>

              {/* Checklist details */}
              <ul className="space-y-2 text-xs text-brand-blue-500 font-medium pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Escaneo y firma en puerta
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Foto geolocalizada de respaldo
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Reporte de SLAs a MercadoLibre
                </li>
              </ul>
            </div>
            
            <a 
              href="#consola" 
              className="w-full bg-brand-blue hover:bg-brand-blue/95 text-white text-center font-subheading text-lg py-2.5 rounded-xl transition-all block tracking-wider uppercase"
            >
              Simular MercadoFlex
            </a>
          </div>

          {/* Service D: 3PL Warehouse */}
          <div className="bg-white border border-brand-blue-100 hover:border-brand-blue/40 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.01] flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Building className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <span className="text-xs bg-brand-blue/10 text-brand-blue font-subheading tracking-wider px-2 py-0.5 rounded uppercase">Sede Friuli</span>
                <h3 className="font-subheading text-2xl text-brand-blue-700 tracking-wide leading-none uppercase">Depósito & 3PL</h3>
                <p className="text-xs text-brand-blue-400 leading-relaxed font-normal">
                  Almacenamiento blindado con videovigilancia. Armamos tu paquetería (Pick & Pack) y despachamos tu lote diario unificado.
                </p>
              </div>

              {/* Checklist details */}
              <ul className="space-y-2 text-xs text-brand-blue-500 font-medium pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Cámaras de vigilancia 24/7
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Consolidado Pick & Pack
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                  Cuenta corriente PyME mensual
                </li>
              </ul>
            </div>
            
            <a 
              href="#altapyme" 
              className="w-full bg-brand-blue hover:bg-brand-blue/95 text-white text-center font-subheading text-lg py-2.5 rounded-xl transition-all block tracking-wider uppercase"
            >
              Solicitar Convenio PyME
            </a>
          </div>

        </div>

        {/* Values Banner */}
        <div className="gradient-blue text-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-xl text-center md:text-left">
            <h4 className="font-subheading text-2xl text-brand-yellow tracking-wider">¿OPERAS CON VOLUMEN CORPORATIVO DIARIO?</h4>
            <p className="text-xs text-brand-blue-50 leading-relaxed">
              Abre una cuenta corriente con Envíos DosRuedas. Te unificamos la facturación a mes vencido, proveemos de un cadete fijo asignado y te damos privilegios de resguardo de stock en Friuli 1972.
            </p>
          </div>
          <a 
            href="#altapyme" 
            className="px-6 py-3 bg-brand-yellow text-brand-blue font-subheading text-lg rounded-xl shadow-accent-md hover:shadow-accent-lg hover:scale-[1.02] transition-all whitespace-nowrap tracking-wider uppercase"
          >
            SABER MÁS CUENTA CORRIENTE
          </a>
        </div>

      </div>
    </section>
  );
}
