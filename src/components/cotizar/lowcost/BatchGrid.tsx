'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, MessageSquare, Layers, CheckCircle2, Shield } from 'lucide-react';

interface BatchRow {
  id: string;
  destinatario: string;
  direccion: string;
  telefono: string;
  producto: string;
}

export default function BatchGrid() {
  const [rows, setRows] = useState<BatchRow[]>([
    {
      id: '1',
      destinatario: '',
      direccion: '',
      telefono: '',
      producto: '',
    },
    {
      id: '2',
      destinatario: '',
      direccion: '',
      telefono: '',
      producto: '',
    },
  ]);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        destinatario: '',
        direccion: '',
        telefono: '',
        producto: '',
      },
    ]);
  };

  const removeRow = (id: string) => {
    if (rows.length <= 1) return;
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const updateRow = (id: string, field: keyof BatchRow, value: string) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const getBatchWhatsAppLink = () => {
    const validRows = rows.filter((r) => r.direccion.trim().length > 0);
    const count = validRows.length;
    
    let text = `¡Hola Envíos DosRuedas! Quiero solicitar una cotización por lote de ${count} envíos LowCost en Mar del Plata:\n\n`;
    validRows.forEach((r, idx) => {
      text += `📍 *Envío #${idx + 1}:*\n`;
      if (r.destinatario) text += `• Destinatario: ${r.destinatario}\n`;
      text += `• Destino: ${r.direccion}\n`;
      if (r.telefono) text += `• Teléfono: ${r.telefono}\n`;
      if (r.producto) text += `• Contenido: ${r.producto}\n\n`;
    });
    text += `📦 *Modalidad:* Ruteo LowCost Programado 2026 (Corte 13:00 hs)`;
    return `https://wa.me/542236602699?text=${encodeURIComponent(text)}`;
  };

  const validCount = rows.filter((r) => r.direccion.trim().length > 0).length;

  return (
    <div id="batch-grid" className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-elevated transition-all duration-300 mt-12">
      <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-blue-50 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-brand-blue-50 text-brand-blue-700">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display uppercase tracking-tight text-brand-blue-700">
                Planilla de Despachos Masivos (Batch)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-ink/75 font-sans">
              Cargá múltiples destinos de Mar del Plata para ruteo agrupado del día y consultá por WhatsApp con un solo clic.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-yellow-50 text-brand-blue-900 border border-brand-yellow-200 font-subheading text-xs font-bold uppercase tracking-wider">
              {rows.length} {rows.length === 1 ? 'paquete' : 'paquetes en lote'}
            </span>
            <button
              type="button"
              onClick={addRow}
              className="inline-flex items-center gap-1.5 bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-subheading text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full shadow-sm transition-all cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Agregar Fila</span>
            </button>
          </div>
        </div>

        {/* Rows Table / List */}
        <div className="space-y-3">
          <AnimatePresence initial={false}>
            {rows.map((row, index) => (
              <motion.div
                key={row.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 flex flex-col md:flex-row gap-3 items-center"
              >
                <div className="w-7 h-7 rounded-full bg-brand-blue-700 text-brand-yellow-500 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 w-full flex-grow">
                  <input
                    type="text"
                    placeholder="Destinatario"
                    value={row.destinatario}
                    onChange={(e) => updateRow(row.id, 'destinatario', e.target.value)}
                    className="h-10 bg-white border border-brand-blue-200 focus:border-brand-blue-700 rounded-lg px-3 text-xs outline-none text-brand-ink font-sans placeholder:text-brand-blue-300"
                  />
                  <input
                    type="text"
                    placeholder="Dirección en MDQ *"
                    value={row.direccion}
                    onChange={(e) => updateRow(row.id, 'direccion', e.target.value)}
                    className="h-10 bg-white border border-brand-blue-200 focus:border-brand-blue-700 rounded-lg px-3 text-xs outline-none text-brand-ink font-sans placeholder:text-brand-blue-300"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={row.telefono}
                    onChange={(e) => updateRow(row.id, 'telefono', e.target.value)}
                    className="h-10 bg-white border border-brand-blue-200 focus:border-brand-blue-700 rounded-lg px-3 text-xs outline-none text-brand-ink font-sans placeholder:text-brand-blue-300"
                  />
                  <input
                    type="text"
                    placeholder="Producto / Bulto"
                    value={row.producto}
                    onChange={(e) => updateRow(row.id, 'producto', e.target.value)}
                    className="h-10 bg-white border border-brand-blue-200 focus:border-brand-blue-700 rounded-lg px-3 text-xs outline-none text-brand-ink font-sans placeholder:text-brand-blue-300"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => removeRow(row.id)}
                  disabled={rows.length <= 1}
                  className="p-2 text-brand-blue-400 hover:text-red-600 disabled:opacity-30 disabled:hover:text-brand-blue-400 rounded-lg transition-colors shrink-0 cursor-pointer"
                  title="Eliminar fila"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer & Submit to WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-blue-50">
          <div className="flex items-center gap-2 text-xs text-brand-ink/70 font-sans">
            <Shield className="h-4 w-4 text-brand-blue-700 shrink-0" />
            <span>Tarifas LowCost vigentes 2026 ($3.000 a $7.000 + excedente por km).</span>
          </div>

          <a
            href={getBatchWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded-full shadow-accent-sm hover:shadow-cta-glow transition-all"
          >
            <MessageSquare className="h-4.5 w-4.5 shrink-0" />
            <span>Cotizar Lote ({validCount > 0 ? validCount : rows.length} Envíos) por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
