'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, Send, MessageSquareCode, Sparkles, X, 
  HelpCircle, MessageCircle, RefreshCw, Smartphone
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface AIChatbotProps {
  activeQuote?: any; // Receives computed quote context from the calculator
}

const INSIGHT_SUGGESTIONS = [
  '¿Cuál es la tolerancia ante lloviznas costeras?',
  '¿Cómo abro una Cuenta Corriente PyME mensual?',
  '¿Dónde queda el depósito central Friuli?',
  '¿Cuáles son las ventajas de MercadoLibre Flex?',
  '¿Qué objetos no puedo mandar por moto?',
];

// Pure Helper functions placed outside the component scope to comply with ESLint purity checks
let messageIdCounter = 0;
function getNextUniqueId(prefix: string): string {
  messageIdCounter += 1;
  return `${prefix}-${messageIdCounter}-${Math.floor(Math.random() * 1000000)}`;
}

function getFormattedTime(): string {
  return new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
}

export default function AIChatbot({ activeQuote }: AIChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'init-msg',
      sender: 'assistant',
      text: '¡Hola! Soy DosRuedas Bot 🚴, tu asesor de logística inteligente en Mar del Plata. ¿Querés cotizar un envío, entender las zonas de entrega, conocer nuestro depósito en Friuli 1972 o abrir una cuenta corriente PyME? ¡Escribime!',
      timestamp: '', // Empty initially to avoid server-client hydration mismatch
    }
  ]);
  const [mounted, setMounted] = useState(false);

  // Set mounted on client and update initial message timestamp if desired
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      setMessages(prev => {
        if (prev.length > 0 && prev[0].id === 'init-msg' && !prev[0].timestamp) {
          return [
            {
              ...prev[0],
              timestamp: getFormattedTime()
            },
            ...prev.slice(1)
          ];
        }
        return prev;
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Floating drawer state
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on entries
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || loading) return;

    // Add user message
    const userMsgId = getNextUniqueId('user');
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: textToSend,
      timestamp: getFormattedTime(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          history: messages.slice(-10), // Send last few messages as reference contexts
          quoteContext: activeQuote || null // Automatically pipe the active calculated cost
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMsg: ChatMessage = {
        id: getNextUniqueId('assistant'),
        sender: 'assistant',
        text: data.text,
        timestamp: getFormattedTime(),
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (e: any) {
      console.error(e);
      const errorMsg: ChatMessage = {
        id: getNextUniqueId('err'),
        sender: 'assistant',
        text: `Lo siento, experimentamos un inconveniente costero con la red: ${e.message || 'Error de conexión'}. ¿Te gustaría reintentar?`,
        timestamp: getFormattedTime(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    if (confirm('¿Desea reiniciar el chat actual?')) {
      setMessages([
        {
          id: getNextUniqueId('init'),
          sender: 'assistant',
          text: 'Pizarra limpia. Recordá que podés consultarme sobre ruteos en Mar del Plata u operaciones con Cuenta DNI y MercadoPago. ¿Qué envío realizamos hoy?',
          timestamp: getFormattedTime(),
        }
      ]);
    }
  };

  return (
    <>
      {/* 1. SECTOR IN-PAGE: Centered styled card section */}
      <section id="canal-soporte-ia" className="py-16 bg-brand-blue-700 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/10 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto space-y-8">
          
          {/* Header block */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full text-brand-yellow text-xs font-subheading tracking-wider uppercase">
              <Bot className="h-4 w-4 text-brand-yellow animate-pulse" />
              Soporte Inteligente Mar del Plata
            </div>
            <h2 className="text-4xl font-display tracking-wide uppercase text-white sm:text-5xl">
              Canal de Asistencia <span className="text-brand-yellow">DosRuedas IA</span>
            </h2>
            <p className="text-brand-blue-100 text-sm max-w-lg mx-auto">
              Pregunta lo que quieras en lenguaje natural sobre nuestras sucursales, tiempos de corte, facturación, seguros o lloviznas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Quick action buttons sidebar */}
            <div className="lg:col-span-4 bg-brand-blue-700/30 border border-brand-blue-700/50 rounded-3xl p-5 flex flex-col justify-between gap-4 backdrop-blur-sm">
              <div className="space-y-3.5">
                <span className="block text-xs font-subheading text-brand-yellow uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-brand-yellow" /> Preguntas sugeridas
                </span>
                <p className="text-[11px] text-brand-blue-200">Haz clic en cualquier pregunta para asesorarte instantáneamente con el agente IA:</p>
                <div className="flex flex-col gap-2">
                  {INSIGHT_SUGGESTIONS.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsOpen(true); // Bring up floating assistant too
                        handleSendMessage(s);
                      }}
                      className="text-left bg-brand-blue-700/70 hover:bg-brand-blue/60 border border-brand-blue-700/40 text-xs text-brand-blue-50 p-2.5 rounded-xl hover:text-brand-yellow hover:border-brand-yellow/30 transition-all font-sans"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* ACTIVE CONTEXT CARD DISPLAY */}
              {activeQuote && (
                <div className="bg-brand-blue-700 border border-brand-yellow/20 rounded-xl p-3 text-xs space-y-1.5">
                  <span className="block text-[10px] font-subheading text-brand-yellow tracking-wider uppercase">CONTEXTO DE COTIZACIÓN ACTIVO</span>
                  <div className="text-[11px] text-brand-blue-100 font-normal leading-relaxed space-y-0.5 font-mono">
                    <div>• Origen: {activeQuote.origen}</div>
                    <div>• Destino: {activeQuote.destino}</div>
                    <div>• Tarifa: {activeQuote.costo_total_pesos}</div>
                  </div>
                  <span className="block text-[9px] text-brand-blue-300 italic font-sans leading-none">La IA adaptará sus respuestas a esta simulación de costos.</span>
                </div>
              )}
            </div>

            {/* Simulated Live Chat window panel */}
            <div className="lg:col-span-8 bg-brand-blue-700/80 border border-brand-blue-700/50 rounded-3xl flex flex-col overflow-hidden min-h-[420px] shadow-xl backdrop-blur-sm">
              
              {/* Chat head */}
              <div className="p-4 bg-brand-blue-700 border-b border-brand-blue-700/50 flex justify-between items-center text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-brand-blue text-brand-yellow flex items-center justify-center font-bold text-sm">
                    DR
                  </div>
                  <div>
                    <h4 className="font-subheading text-sm uppercase tracking-wider text-white">Asistente DosRuedas IA</h4>
                    <span className="text-[8px] text-brand-blue-300 font-mono tracking-widest uppercase block">CONECTADO • RESPONSIVO</span>
                  </div>
                </div>

                <button 
                  onClick={clearChat}
                  className="p-1.5 rounded-lg border border-brand-blue-700/40 text-brand-blue-200 hover:text-white hover:bg-brand-blue-700/30 transition-colors"
                  title="Reiniciar chat"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Chat bubble list space */}
              <div 
                ref={scrollContainerRef}
                className="flex-1 p-4 overflow-y-auto max-h-[300px] h-[300px] space-y-4 scrollbar-thin scrollbar-thumb-blue-900"
              >
                {messages.map(msg => (
                  <div 
                    key={msg.id} 
                    className={`flex gap-2.5 max-w-[85%] ${
                      msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                    }`}
                  >
                    <div className={`h-7 w-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold font-mono ${
                      msg.sender === 'user' ? 'bg-brand-yellow text-brand-blue' : 'bg-brand-blue-700/50 border border-brand-blue-700/60 text-brand-yellow'
                    }`}>
                      {msg.sender === 'user' ? 'U' : 'B'}
                    </div>
                    
                    <div className={`p-3 rounded-2xl text-xs space-y-1 ${
                      msg.sender === 'user' 
                        ? 'bg-brand-yellow text-brand-blue rounded-tr-none font-sans font-medium' 
                        : 'bg-brand-blue-700/40 border border-brand-blue-700/50 text-brand-white-50 rounded-tl-none font-medium leading-relaxed'
                    }`}>
                      <p className="whitespace-pre-line font-sans">{msg.text}</p>
                      {msg.timestamp && (
                        <span className={`block text-[8px] text-right font-mono ${
                          msg.sender === 'user' ? 'text-brand-blue/60' : 'text-brand-blue-200/50'
                        }`}>
                          {msg.timestamp}
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex gap-2.5 mr-auto max-w-[85%]">
                    <div className="h-7 w-7 rounded-full bg-brand-blue-700/50 border border-brand-blue-700/60 text-brand-yellow flex items-center justify-center text-xs font-bold">
                      B
                    </div>
                    <div className="bg-brand-blue-700/40 border border-brand-blue-700/50 p-3.5 rounded-2xl rounded-tl-none flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-brand-yellow animate-bounce"></span>
                      <span className="h-2 w-2 rounded-full bg-brand-yellow animate-bounce delay-100"></span>
                      <span className="h-2 w-2 rounded-full bg-brand-yellow animate-bounce delay-200"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input row */}
              <div className="p-3 bg-brand-blue-700 border-t border-brand-blue-700/50">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <input 
                    type="text" 
                    placeholder="Pregúntale al bot sobre envíos o tarifas en MDQ..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    disabled={loading}
                    className="flex-grow bg-brand-blue-700 border border-brand-blue-700/60 px-3.5 py-2.5 rounded-xl text-xs placeholder-blue-400 text-brand-white-50 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={loading || !inputMessage.trim()}
                    className="p-2.5 bg-brand-yellow hover:bg-brand-yellow/90 disabled:bg-brand-blue-700/40 text-brand-blue rounded-xl transition-all font-subheading tracking-wider uppercase text-base flex items-center justify-center"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. FLOATING BUBBLE DRAWER DRAWER FOR CONTINUOUS IA CHATBILITY */}
      <div className="fixed bottom-6 right-6 z-40">
        
        {/* Toggle open bubble button */}
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-xl shadow-brand-blue/35 hover:scale-105 active:scale-95 transition-transform"
            title="Abrir Chat de Cadetería IA"
          >
            <MessageCircle className="h-6 w-6 text-brand-yellow" />
          </button>
        ) : (
          <div className="bg-brand-blue-700 text-white rounded-3xl w-[350px] sm:w-[380px] h-[480px] shadow-2xl border border-brand-blue-700/65 overflow-hidden flex flex-col transform origin-bottom-right transition-all">
            
            {/* Header top */}
            <div className="p-4 bg-brand-blue-700 flex justify-between items-center border-b border-brand-blue-700/50">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-brand-blue text-brand-yellow flex items-center justify-center font-bold text-[10px]">
                  DR
                </div>
                <div>
                  <h4 className="font-subheading text-sm text-white uppercase tracking-wider">Asesor DosRuedas IA</h4>
                  <span className="text-[8px] text-brand-blue-300 font-mono tracking-widest block uppercase">Canal de ruteo costero</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button 
                  onClick={() => {
                    if (confirm('¿Reiniciar la sesión de chat?')) {
                      setMessages([]);
                    }
                  }}
                  className="p-1 text-brand-blue-200 hover:text-white"
                  title="Limpiar"
                >
                  <RefreshCw className="h-3 w-3" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-brand-blue-200 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chat list */}
            <div className="flex-grow p-4 overflow-y-auto space-y-3.5 bg-brand-blue-700">
              {messages.map(msg => (
                <div key={msg.id} className={`flex gap-2 max-w-[90%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>
                  <div className={`p-2.5 rounded-xl text-[11px] leading-relaxed ${
                    msg.sender === 'user' ? 'bg-brand-yellow text-brand-blue font-bold rounded-tr-none font-sans' : 'bg-brand-blue-700/40 text-brand-white-50 border border-brand-blue-700/50 rounded-tl-none font-sans'
                  }`}>
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex items-center gap-1 bg-brand-blue-700/30 p-2.5 rounded-xl mt-1.5 w-max">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-bounce"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-bounce delay-75"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-bounce delay-150"></span>
                </div>
              )}
            </div>

            {/* Footer input */}
            <div className="p-3 bg-brand-blue-700 border-t border-brand-blue-700/50">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input 
                  type="text" 
                  placeholder="Hacé tu pregunta rápida..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={loading}
                  className="flex-grow bg-brand-blue-700 border border-brand-blue-700/50 text-[11px] px-2.5 py-2 rounded-lg text-brand-white-50 focus:outline-none focus:ring-1 focus:ring-brand-yellow placeholder-blue-400"
                />
                <button 
                  type="submit" 
                  className="bg-brand-yellow text-brand-blue font-subheading tracking-wider uppercase text-xs px-3 rounded-lg hover:bg-brand-yellow/90"
                >
                  Enviar
                </button>
              </form>
            </div>

          </div>
        )}

      </div>
    </>
  );
}
