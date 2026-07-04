'use client';

import React, { useState, useTransition } from 'react';
import { reviewCatalog, CatalogItem } from '@/src/lib/reviewCatalog';
import { saveFeedback } from './actions';
import { FileText, Save, CheckCircle2, RefreshCw, Layers, ArrowRight, MessageSquare, Clock, MapPin } from 'lucide-react';

interface FeedbackItem {
  id: number;
  page: string;
  componentPath: string;
  currentText: string;
  suggestedEdit: string;
  createdAt: Date;
}

interface RevisarClientProps {
  initialFeedbackList: FeedbackItem[];
}

export default function RevisarClient({ initialFeedbackList }: RevisarClientProps) {
  const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>(initialFeedbackList);
  const [selectedPage, setSelectedPage] = useState<string>('All');
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Extract unique page categories
  const pages = ['All', ...Array.from(new Set(reviewCatalog.map((item) => item.page)))];

  // Filter catalog items
  const filteredCatalog = selectedPage === 'All'
    ? reviewCatalog
    : reviewCatalog.filter((item) => item.page === selectedPage);

  const handleInputChange = (id: string, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (item: CatalogItem) => {
    const editContent = inputs[item.id];
    if (!editContent || editContent.trim() === '') {
      alert('Por favor, escribí algún cambio o comentario antes de guardar.');
      return;
    }

    startTransition(async () => {
      try {
        const response = await saveFeedback({
          page: item.page,
          componentPath: item.componentPath,
          currentText: item.currentText,
          suggestedEdit: editContent,
        });

        // Add to local state list
        setFeedbackList((prev) => [
          {
            id: response.id,
            page: response.page,
            componentPath: response.componentPath,
            currentText: response.currentText,
            suggestedEdit: response.suggestedEdit,
            createdAt: new Date(response.createdAt),
          },
          ...prev,
        ]);

        // Clear input for this item
        setInputs((prev) => ({ ...prev, [item.id]: '' }));

        // Show success alert
        setStatusMessage(`Ajuste para "${item.sectionTitle}" guardado correctamente en la base de datos.`);
        setTimeout(() => setStatusMessage(null), 5000);
      } catch (error) {
        console.error('Error saving feedback:', error);
        alert('Hubo un error al guardar tu sugerencia. Por favor reintentá.');
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Header (Bento Style) */}
      <div className="bg-brand-blue text-white rounded-3xl p-8 lg:p-12 border-2 border-brand-blue shadow-[6px_6px_0px_#0636A5] mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,236,1,0.05),transparent_40%)]" />
        <span className="bg-brand-yellow text-brand-blue font-mono font-bold text-xs px-3 py-1.5 rounded-[4px] uppercase tracking-wider inline-block mb-4">
          Operación 2026 — Mar del Plata
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none mb-4">
          Panel de Revisión de Contenidos
        </h1>
        <p className="text-lg text-slate-200 max-w-3xl font-sans leading-relaxed">
          ¡Hola! Desde este panel podés revisar todos los textos y componentes actuales de cada página de <strong>Envíos DosRuedas</strong>. 
          Escribí tus comentarios, ajustes de títulos, propuestas de imágenes o modificaciones y guardalos directamente en la base de datos.
        </p>
      </div>

      {/* Tabs Filter Bar (Bento style items) */}
      <div className="mb-8">
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
          Filtrar por Página
        </label>
        <div className="flex flex-wrap gap-3">
          {pages.map((pageName) => (
            <button
              key={pageName}
              onClick={() => setSelectedPage(pageName)}
              className={`px-5 py-3 rounded-xl font-mono text-xs uppercase tracking-wider border-2 border-brand-blue transition-all duration-200 ${
                selectedPage === pageName
                  ? 'bg-brand-yellow text-brand-blue shadow-[3px_3px_0px_#0636A5] translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-white hover:bg-slate-100 text-brand-blue shadow-sm'
              }`}
            >
              {pageName === 'All' ? 'Ver Todas' : pageName}
            </button>
          ))}
        </div>
      </div>

      {/* Notification Toast */}
      {statusMessage && (
        <div className="mb-8 bg-emerald-50 border-2 border-emerald-500 text-emerald-800 p-4 rounded-2xl flex items-start gap-3 shadow-[4px_4px_0px_#10B981] animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-sans font-bold text-sm">Cambio Guardado con Éxito</p>
            <p className="font-sans text-xs text-emerald-700 mt-0.5">{statusMessage}</p>
          </div>
        </div>
      )}

      {/* Bento Grid layout of Catalog sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-12">
          <h2 className="text-2xl font-display text-brand-blue uppercase tracking-wide mb-6 flex items-center gap-2">
            <Layers className="h-6 w-6 text-brand-yellow fill-brand-yellow/30" />
            Componentes y Textos Disponibles ({filteredCatalog.length})
          </h2>
        </div>

        {filteredCatalog.map((item) => (
          <div
            key={item.id}
            className="lg:col-span-6 bg-white border-2 border-brand-blue rounded-3xl p-6 shadow-[5px_5px_0px_#0636A5] hover:shadow-[3px_3px_0px_#0636A5] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Card Header info */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-2 py-1 rounded-[4px] bg-slate-100 border border-slate-200 font-mono text-[10px] text-slate-600 font-bold">
                  {item.page}
                </span>
                <span className="font-mono text-[10px] text-brand-blue font-bold flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {item.componentPath}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-display text-brand-blue uppercase leading-tight mb-3">
                {item.sectionTitle}
              </h3>

              {/* Current Content Frame */}
              <div className="mb-4">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Texto Actual en Componente
                </label>
                <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl max-h-48 overflow-y-auto">
                  <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans font-medium leading-relaxed">
                    {item.currentText}
                  </pre>
                </div>
              </div>

              {/* Guidance for owner */}
              <div className="mb-4">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Sugerencias para revisar
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {item.elementsToReview.map((el, i) => (
                    <span key={i} className="text-[10px] bg-blue-50 text-brand-blue px-2 py-1 rounded-md font-sans font-semibold">
                      • {el}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Input Form */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-blue mb-2">
                ¿Qué querés ajustar, agregar o modificar? (voseo)
              </label>
              <textarea
                value={inputs[item.id] || ''}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                placeholder="Escribí acá tu propuesta de cambio para este componente (ej: nuevos títulos, textos, links a imágenes o ideas generales)..."
                rows={3}
                className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border-2 border-slate-200 focus:border-brand-blue rounded-xl p-3 text-sm font-sans text-slate-800 transition-colors duration-200 resize-none outline-none"
              />
              
              <div className="flex justify-end mt-3">
                <button
                  onClick={() => handleSubmit(item)}
                  disabled={isPending}
                  className="px-4 py-2.5 bg-brand-yellow text-brand-blue font-mono font-bold text-xs uppercase tracking-wider border-2 border-brand-blue rounded-xl shadow-[3px_3px_0px_#0636A5] hover:shadow-[1px_1px_0px_#0636A5] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-150 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isPending ? (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Save className="h-3.5 w-3.5" />
                  )}
                  Guardar Ajuste
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* History and Track Suggestions list */}
      <div className="bg-white border-2 border-brand-blue rounded-3xl p-8 shadow-[6px_6px_0px_#0636A5] overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-display text-brand-blue uppercase tracking-wide mb-6 flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-brand-yellow fill-brand-yellow/30" />
          Historial de Sugerencias Guardadas ({feedbackList.length})
        </h2>

        {feedbackList.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center text-slate-500">
            <p className="font-sans font-medium">No hay sugerencias guardadas todavía.</p>
            <p className="font-sans text-xs text-slate-400 mt-1">
              Las sugerencias que guardes arriba se mostrarán acá en tiempo real.
            </p>
          </div>
        ) : (
          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
            {feedbackList.map((feedback) => (
              <div
                key={feedback.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-brand-blue transition-colors duration-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-brand-blue text-white font-mono text-[9px] font-bold rounded uppercase">
                      {feedback.page}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 font-semibold truncate max-w-xs sm:max-w-md">
                      {feedback.componentPath}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-sans flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {new Date(feedback.createdAt).toLocaleString('es-AR')}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Before */}
                  <div>
                    <span className="block text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Contenido Original de Referencia
                    </span>
                    <div className="bg-white p-3 border border-slate-100 rounded-xl text-xs text-slate-500 max-h-32 overflow-y-auto whitespace-pre-wrap font-sans">
                      {feedback.currentText}
                    </div>
                  </div>

                  {/* Proposed */}
                  <div>
                    <span className="block text-[9px] font-mono font-bold uppercase tracking-wider text-brand-blue mb-1">
                      Ajuste Propuesto
                    </span>
                    <div className="bg-yellow-50/50 p-3 border border-yellow-200 rounded-xl text-xs text-brand-blue font-semibold max-h-32 overflow-y-auto whitespace-pre-wrap font-sans">
                      {feedback.suggestedEdit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
