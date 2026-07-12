'use client';

import React, { useState, useTransition } from 'react';
import { reviewCatalog, CatalogItem } from '@/src/lib/reviewCatalog';
import { saveFeedback } from './actions';
import { 
  FileText, Save, CheckCircle2, RefreshCw, Layers, 
  ArrowRight, MessageSquare, Clock, MapPin, Search,
  ChevronDown, ChevronUp, CheckCircle, AlertCircle
} from 'lucide-react';

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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Collapsible page accordion states (Default expand first page or all)
  const [expandedPages, setExpandedPages] = useState<Record<string, boolean>>({
    'Home (Inicio)': true
  });

  // Toggle page visibility
  const togglePageExpand = (pageName: string) => {
    setExpandedPages((prev) => ({
      ...prev,
      [pageName]: !prev[pageName],
    }));
  };

  // Check if a component has existing suggestions
  const getComponentSuggestions = (componentPath: string) => {
    return feedbackList.filter((f) => f.componentPath === componentPath);
  };

  // Get unique pages
  const uniquePages = Array.from(new Set(reviewCatalog.map((item) => item.page)));
  const pagesFilterList = ['All', ...uniquePages];

  // Filter and search catalog items
  const filteredCatalog = reviewCatalog.filter((item) => {
    const matchesPage = selectedPage === 'All' || item.page === selectedPage;
    const matchesSearch = 
      item.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.componentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.componentPath.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.currentText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPage && matchesSearch;
  });

  // Group filtered catalog by Page
  const groupedCatalog: Record<string, CatalogItem[]> = {};
  filteredCatalog.forEach((item) => {
    if (!groupedCatalog[item.page]) {
      groupedCatalog[item.page] = [];
    }
    groupedCatalog[item.page].push(item);
  });

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
        setStatusMessage(`Sugerencia para "${item.sectionTitle}" guardada con éxito.`);
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
      <div className="bg-brand-blue text-white rounded-3xl p-8 lg:p-12 border-2 border-brand-blue shadow-[6px_6px_0px_var(--color-brand-blue)] mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,236,1,0.05),transparent_40%)]" />
        <span className="bg-brand-yellow text-brand-blue font-mono font-bold text-xs px-3 py-1.5 rounded-[4px] uppercase tracking-wider inline-block mb-4">
          Operación 2026 — Mar del Plata
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none mb-4">
          Panel de Revisión de Contenidos
        </h1>
        <p className="text-lg text-brand-blue-100 max-w-3xl font-sans leading-relaxed">
          ¡Hola! Desde este panel podés revisar todos los textos y componentes actuales de cada página de <strong>Envíos DosRuedas</strong>. 
          Escribí tus comentarios, ajustes de títulos, propuestas de imágenes o modificaciones y guardalos directamente en la base de datos.
        </p>
      </div>

      {/* Filter and Search Bar Card (Bento Style) */}
      <div className="bg-white border-2 border-brand-blue rounded-3xl p-6 shadow-[5px_5px_0px_var(--color-brand-blue)] mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        <div className="md:col-span-6 space-y-2">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-400">
            Filtrar por Página
          </label>
          <div className="flex flex-wrap gap-2">
            {pagesFilterList.map((pageName) => (
              <button
                key={pageName}
                onClick={() => setSelectedPage(pageName)}
                className={`px-4 py-2 rounded-xl font-mono text-[11px] uppercase tracking-wider border-2 border-brand-blue transition-all duration-150 ${
                  selectedPage === pageName
                    ? 'bg-brand-yellow text-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue)] translate-x-[-1px] translate-y-[-1px]'
                    : 'bg-brand-white-50 hover:bg-brand-blue-50 text-brand-blue shadow-sm'
                }`}
              >
                {pageName === 'All' ? 'Ver Todas' : pageName}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 space-y-2">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-400">
            Buscar Componente o Contenido
          </label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-blue-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por título, archivo, textos..."
              className="w-full bg-brand-white-50 border-2 border-brand-blue-100 focus:border-brand-blue focus:bg-white rounded-xl pl-10 pr-4 py-3 text-xs font-sans outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {statusMessage && (
        <div className="mb-8 bg-brand-white-50 border-2 border-brand-blue-400 text-brand-blue-700 p-4 rounded-2xl flex items-start gap-3 shadow-[4px_4px_0px_#10B981] animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="h-6 w-6 text-brand-blue-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-sans font-bold text-sm">Cambio Guardado con Éxito</p>
            <p className="font-sans text-xs text-brand-blue-600 mt-0.5">{statusMessage}</p>
          </div>
        </div>
      )}

      {/* Main Collapsible Dashboard Content */}
      <div className="space-y-8 mb-16">
        {Object.keys(groupedCatalog).length === 0 ? (
          <div className="bg-white border-2 border-brand-blue rounded-3xl p-12 text-center text-brand-blue-400 shadow-[5px_5px_0px_var(--color-brand-blue)]">
            <p className="font-sans font-bold text-lg">No se encontraron componentes con los filtros seleccionados.</p>
            <button
              onClick={() => { setSelectedPage('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-brand-yellow border-2 border-brand-blue rounded-xl font-mono text-xs uppercase font-bold text-brand-blue"
            >
              Resetear Filtros
            </button>
          </div>
        ) : (
          Object.entries(groupedCatalog).map(([pageName, items]) => {
            const isExpanded = expandedPages[pageName] !== false;
            
            // Count components that have suggestions already in this group
            const reviewedCount = items.filter(item => getComponentSuggestions(item.componentPath).length > 0).length;

            return (
              <div 
                key={pageName} 
                className="bg-white border-2 border-brand-blue rounded-3xl shadow-[5px_5px_0px_var(--color-brand-blue)] overflow-hidden transition-all duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => togglePageExpand(pageName)}
                  className="w-full flex items-center justify-between p-6 bg-brand-white-50 hover:bg-brand-blue-50/50 border-b border-brand-blue-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow animate-pulse" />
                    <h2 className="text-xl sm:text-2xl font-display text-brand-blue uppercase tracking-wide text-left">
                      {pageName}
                    </h2>
                    <span className="px-2 py-0.5 bg-brand-blue text-white rounded-md text-[10px] font-mono font-bold">
                      {items.length} componentes
                    </span>
                    {reviewedCount > 0 && (
                      <span className="px-2 py-0.5 bg-brand-blue-400 text-white rounded-md text-[10px] font-mono font-bold flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        {reviewedCount} revisados
                      </span>
                    )}
                  </div>
                  <div className="text-brand-blue">
                    {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </button>

                {/* Collapsible content (list of components) */}
                {isExpanded && (
                  <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item) => {
                      const suggestions = getComponentSuggestions(item.componentPath);
                      const isReviewed = suggestions.length > 0;

                      return (
                        <div
                          key={item.id}
                          className={`rounded-2xl p-5 border-2 transition-all duration-200 flex flex-col justify-between ${
                            isReviewed 
                              ? 'border-brand-blue-400 bg-brand-white-50/10 shadow-[3px_3px_0px_#10B981]'
                              : 'border-brand-blue-100 bg-white hover:border-brand-blue shadow-sm'
                          }`}
                        >
                          <div>
                            {/* Component Header info */}
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                              <span className="font-mono text-[9px] text-brand-blue font-bold flex items-center gap-1 select-all">
                                <MapPin className="h-3 w-3 shrink-0" />
                                {item.componentPath}
                              </span>
                              {isReviewed ? (
                                <span className="px-2 py-0.5 rounded-[4px] bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-700 font-mono text-[8px] font-bold flex items-center gap-1">
                                  <CheckCircle className="h-2.5 w-2.5" />
                                  REVISADO ({suggestions.length})
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-[4px] bg-brand-yellow-50 border border-brand-yellow-300 text-brand-yellow-500 font-mono text-[8px] font-bold flex items-center gap-1">
                                  <AlertCircle className="h-2.5 w-2.5" />
                                  PENDIENTE
                                </span>
                              )}
                            </div>

                            <h3 className="text-base font-display text-brand-blue uppercase leading-tight mb-2">
                              {item.sectionTitle}
                            </h3>

                            {/* Current text snippet box */}
                            <div className="mb-4">
                              <span className="block text-[8px] font-mono font-bold uppercase tracking-wider text-brand-blue-300 mb-1">
                                TEXTO ORIGINAL
                              </span>
                              <div className="bg-brand-white-50/80 p-3 border border-brand-blue-100/60 rounded-xl max-h-36 overflow-y-auto">
                                <pre className="text-xs text-brand-blue-500 whitespace-pre-wrap font-sans font-medium leading-relaxed">
                                  {item.currentText}
                                </pre>
                              </div>
                            </div>

                            {/* Review prompts */}
                            <div className="mb-4">
                              <span className="block text-[8px] font-mono font-bold uppercase tracking-wider text-brand-blue-300 mb-1">
                                PAUTAS DE REVISIÓN
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {item.elementsToReview.map((el, idx) => (
                                  <span key={idx} className="text-[9px] bg-brand-white-50/50 text-brand-blue px-1.5 py-0.5 rounded border border-brand-blue-50 font-sans font-semibold">
                                    {el}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Submit form */}
                          <div className="pt-3 border-t border-brand-blue-50">
                            <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue mb-1.5">
                              ¿Qué querés ajustar, agregar o modificar? (voseo)
                            </label>
                            <textarea
                              value={inputs[item.id] || ''}
                              onChange={(e) => handleInputChange(item.id, e.target.value)}
                              placeholder="Ej: Modificar el título por 'Mensajería local 2026', cambiar imagen de fondo, etc..."
                              rows={2}
                              className="w-full bg-brand-white-50 focus:bg-white border border-brand-blue-100 focus:border-brand-blue rounded-xl p-2.5 text-xs font-sans text-brand-ink outline-none transition-colors resize-none"
                            />
                            
                            <div className="flex justify-end mt-2">
                              <button
                                onClick={() => handleSubmit(item)}
                                disabled={isPending}
                                className="px-3 py-1.5 bg-brand-yellow text-brand-blue font-mono font-bold text-[10px] uppercase tracking-wider border-2 border-brand-blue rounded-lg shadow-[2px_2px_0px_var(--color-brand-blue)] hover:shadow-[1px_1px_0px_var(--color-brand-blue)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                              >
                                {isPending ? (
                                  <RefreshCw className="h-3 w-3 animate-spin" />
                                ) : (
                                  <Save className="h-3 w-3" />
                                )}
                                Guardar
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* History and Track Suggestions list */}
      <div className="bg-white border-2 border-brand-blue rounded-3xl p-8 shadow-[6px_6px_0px_var(--color-brand-blue)] overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-display text-brand-blue uppercase tracking-wide mb-6 flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-brand-yellow fill-brand-yellow/30" />
          Historial de Sugerencias Guardadas ({feedbackList.length})
        </h2>

        {feedbackList.length === 0 ? (
          <div className="bg-brand-white-50 border border-brand-blue-100 rounded-2xl p-8 text-center text-brand-blue-400">
            <p className="font-sans font-medium">No hay sugerencias guardadas todavía.</p>
            <p className="font-sans text-xs text-brand-blue-300 mt-1">
              Las sugerencias que guardes arriba se mostrarán acá en tiempo real.
            </p>
          </div>
        ) : (
          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
            {feedbackList.map((feedback) => (
              <div
                key={feedback.id}
                className="bg-brand-white-50 border border-brand-blue-100 rounded-2xl p-5 hover:border-brand-blue transition-colors duration-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-brand-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-brand-blue text-white font-mono text-[9px] font-bold rounded uppercase">
                      {feedback.page}
                    </span>
                    <span className="font-mono text-[10px] text-brand-blue-400 font-semibold truncate max-w-xs sm:max-w-md select-all">
                      {feedback.componentPath}
                    </span>
                  </div>
                  <span className="text-[10px] text-brand-blue-300 font-sans flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {new Date(feedback.createdAt).toLocaleString('es-AR')}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Before */}
                  <div>
                    <span className="block text-[8px] font-mono font-bold uppercase tracking-wider text-brand-blue-300 mb-1">
                      Contenido Original de Referencia
                    </span>
                    <div className="bg-white p-3 border border-brand-blue-50 rounded-xl text-xs text-brand-blue-400 max-h-32 overflow-y-auto whitespace-pre-wrap font-sans">
                      {feedback.currentText}
                    </div>
                  </div>

                  {/* Proposed */}
                  <div>
                    <span className="block text-[8px] font-mono font-bold uppercase tracking-wider text-brand-blue mb-1">
                      Ajuste Propuesto
                    </span>
                    <div className="bg-brand-yellow-50/50 p-3 border border-brand-yellow-50 rounded-xl text-xs text-brand-blue font-semibold max-h-32 overflow-y-auto whitespace-pre-wrap font-sans">
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
