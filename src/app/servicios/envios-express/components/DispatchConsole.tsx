'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, Search, ChevronRight, Camera, User, Phone, MapPin, 
  Map, FileText, CheckCircle2, Clock, Upload, ArrowUpRight, 
  Bike, Trash2, ArrowRightCircle
} from 'lucide-react';

interface Shipment {
  id: string;
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientAddress: string;
  recipientPhone: string;
  parcelDesc: string;
  instructions: string;
  fileName: string;
  filePreview: string; // Base64 or local blob preview
  status: 'Pendiente' | 'Retirado' | 'En Camino' | 'Entregado';
  createdAt: string;
  trackingStep: number; // 1: Recibida, 2: Retirando, 3: En Camino, 4: Entregado
  assignedCadete: string;
}

// Fixed standard courier pool for simulations
const CADETES_POOL = [
  'Facundo Almada (Moto 04)',
  'Rodrigo Cejas (Moto 12)',
  'Santiago M. (Moto 08)',
  'Ignacio Peralta (Moto 19)',
];

export default function DispatchConsole() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  
  // Load and seed shipments safely post-mount to satisfy hydration rules and prevent mismatches
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        let saved = null;
        try {
          saved = localStorage.getItem('dosruedas_shipments');
        } catch (e) {
          console.warn('localStorage not available:', e);
        }
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setShipments(parsed);
              return;
            }
          } catch (e) {
            console.error('Error parsing shipments', e);
          }
        }
        
        // Seed initial mock shipments representing real e-commerce stores in MDQ if empty
        const defaultMock: Shipment[] = [
          {
            id: 'DR-8924',
            senderName: 'Matias Indumentaria',
            senderPhone: '2235940124',
            recipientName: 'Sofía Rossi',
            recipientAddress: 'Alberti 1420, Piso 3B',
            recipientPhone: '2236894511',
            parcelDesc: 'Sobre con 2 remeras de algodon',
            instructions: 'Tocar timbre 3B, timbre plateado chico.',
            fileName: 'sobre_rem_mod.jpg',
            filePreview: 'https://picsum.photos/seed/parcel1/300/200',
            status: 'Entregado',
            createdAt: '22/06/2026, 15:30:12',
            trackingStep: 4,
            assignedCadete: 'Rodrigo Cejas (Moto 12)',
          },
          {
            id: 'DR-4512',
            senderName: 'Repuestos Mar del Plata',
            senderPhone: '2235678942',
            recipientName: 'Carlos Gómez',
            recipientAddress: 'Av. Constitución 5840',
            recipientPhone: '2236021145',
            parcelDesc: 'Amortiguador trasero moto',
            instructions: 'Local comercial "Moto MDQ". Entregar en mostrador.',
            fileName: 'amortiguador.png',
            filePreview: 'https://picsum.photos/seed/parcel2/300/200',
            status: 'En Camino',
            createdAt: '22/06/2026, 17:15:30',
            trackingStep: 3,
            assignedCadete: 'Facundo Almada (Moto 04)',
          }
        ];
        setShipments(defaultMock);
        try {
          localStorage.setItem('dosruedas_shipments', JSON.stringify(defaultMock));
        } catch (e) {
          console.warn('localStorage not available:', e);
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);
  
  const [activeTab, setActiveTab] = useState<'Todos' | 'Pendiente' | 'Retirado' | 'En Camino' | 'Entregado'>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Form input states
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [parcelDesc, setParcelDesc] = useState('');
  const [instructions, setInstructions] = useState('');
  const [uploadedFile, setUploadedFile] = useState<{ name: string; url: string } | null>(null);
  
  // Drag-and-drop state
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Selected shipment details modal target
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Save shipments helper
  const saveShipments = (newShipments: Shipment[]) => {
    setShipments(newShipments);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('dosruedas_shipments', JSON.stringify(newShipments));
      } catch (e) {
        console.warn('localStorage not available:', e);
      }
    }
  };

  // Drag and drop mechanics
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    // Generate simulated URL-preview or base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedFile({
        name: file.name,
        url: reader.result as string || 'https://picsum.photos/seed/uploaded/300/200',
      });
    };
    reader.readAsDataURL(file);
  };

  // Submit Shipment Form handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !recipientName || !recipientAddress || !recipientPhone || !parcelDesc) {
      alert('Por favor complete todos los datos rústicos obligatorios.');
      return;
    }

    const randomId = `DR-${Math.floor(1000 + Math.random() * 9000)}`;
    const randomCadete = CADETES_POOL[Math.floor(Math.random() * CADETES_POOL.length)];
    
    // Save new shipment entry
    const newEntry: Shipment = {
      id: randomId,
      senderName,
      senderPhone: senderPhone || '+54 9 223 111-2222',
      recipientName,
      recipientAddress,
      recipientPhone,
      parcelDesc,
      instructions: instructions || 'Sin observaciones de timbre.',
      fileName: uploadedFile?.name || 'documento_remito.jpg',
      filePreview: uploadedFile?.url || 'https://picsum.photos/seed/package-default/300/200',
      status: 'Pendiente',
      trackingStep: 1,
      createdAt: new Date().toLocaleString('es-AR'),
      assignedCadete: randomCadete,
    };

    const updated = [newEntry, ...shipments];
    saveShipments(updated);
    
    // Reset form states
    setSenderName('');
    setSenderPhone('');
    setRecipientName('');
    setRecipientAddress('');
    setRecipientPhone('');
    setParcelDesc('');
    setInstructions('');
    setUploadedFile(null);
    setSelectedId(randomId); // Open tracking modal automatically to show SLA tracking!
  };

  // Trigger state forward step of a consignment (Simulate cadete bike routes on General Pueyrredón area)
  const advanceTrackingStep = (shipmentId: string) => {
    const updated = shipments.map(s => {
      if (s.id === shipmentId) {
        let nextStep = s.trackingStep + 1;
        if (nextStep > 4) nextStep = 1; // loop or clamp
        
        let subStatus = s.status;
        if (nextStep === 1) subStatus = 'Pendiente' as const;
        if (nextStep === 2) subStatus = 'Retirado' as const;
        if (nextStep === 3) subStatus = 'En Camino' as const;
        if (nextStep === 4) subStatus = 'Entregado' as const;

        return {
          ...s,
          trackingStep: nextStep,
          status: subStatus,
        };
      }
      return s;
    });
    saveShipments(updated);
  };

  // Delete/Cancel Shipment Consignment
  const deleteShipment = (shipmentId: string) => {
    if (confirm('¿Desea cancelar y eliminar este envío de la consola?')) {
      const filtered = shipments.filter(s => s.id !== shipmentId);
      saveShipments(filtered);
      if (selectedId === shipmentId) setSelectedId(null);
    }
  };

  // Filter selection
  const filteredShipments = shipments.filter(s => {
    // Search filter
    const matchesSearch = 
      s.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.recipientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.recipientAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.senderName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === 'Todos' || s.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const selectedShipment = shipments.find(s => s.id === selectedId);

  return (
    <section id="consola" className="py-16 bg-brand-white-50 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-50">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Console title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-subheading tracking-wider rounded uppercase">
              E-Commerce & 3PL Hub
            </div>
            <h2 className="text-4xl font-display uppercase tracking-wide text-brand-blue sm:text-5xl">
              Portal de Despachos <span className="underline decoration-brand-yellow decoration-heavy">en Vivo</span>
            </h2>
            <p className="text-brand-blue-400 text-sm leading-relaxed max-w-xl">
              Simula la preparación de un remito de venta, arrastra una foto del bulto y mira los cambios de estado en tiempo real.
            </p>
          </div>

          <div id="search-box" className="relative w-full md:w-80">
            <Search className="absolute left-3 top-3 h-4 w-4 text-brand-blue-300" />
            <input 
              type="text" 
              placeholder="Buscar por ID, destinatario o calle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-blue-200 rounded-xl pl-9 pr-4 py-2.5 text-sm text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
        </div>

        {/* Main interactive grid splitting Form and Shipments list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Remito / Booking mock-form */}
          <div className="lg:col-span-4 bg-white border border-brand-blue-100 rounded-3xl p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-brand-blue-50">
              <Plus className="h-5 w-5 text-brand-blue" />
              <h3 className="font-subheading text-xl text-brand-blue uppercase tracking-wide">Crear Nuevo Remito</h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Sender Details */}
              <div className="space-y-2.5">
                <span className="block text-[10px] font-subheading text-brand-blue uppercase tracking-widest">
                  🏭 Remitente (Tu local)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="text" 
                    placeholder="Ej. Tienda Costa"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    required
                    className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-xl px-3 py-2.5 text-xs text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                  <input 
                    type="text" 
                    placeholder="Ej. 2235928124"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-xl px-3 py-2.5 text-xs text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              {/* Recipient Details */}
              <div className="space-y-2.5">
                <span className="block text-[10px] font-subheading text-brand-blue uppercase tracking-widest">
                  👤 Destinatario (Cliente)
                </span>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Nombre Completo"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    required
                    className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-xl px-3 py-2.5 text-xs text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                  <input 
                    type="text" 
                    placeholder="Dirección Exacta (Ej. Alberti 1920)"
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                    required
                    className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-xl px-3 py-2.5 text-xs text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                  <input 
                    type="text" 
                    placeholder="Teléfono móvil"
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    required
                    className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-xl px-3 py-2.5 text-xs text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              {/* Parcel Details */}
              <div className="space-y-2">
                <span className="block text-[10px] font-subheading text-brand-blue uppercase tracking-widest">
                  📦 Contenido y Observaciones
                </span>
                <input 
                  type="text" 
                  placeholder="Ej. Caja con 2 camperas lana"
                  value={parcelDesc}
                  onChange={(e) => setParcelDesc(e.target.value)}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-xl px-3 py-2.5 text-xs text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
                <textarea 
                  placeholder="Indicaciones de timbre o entrega..."
                  rows={2}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="w-full bg-brand-white-50 border border-brand-blue-100 rounded-xl px-3 py-2.5 text-xs text-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                />
              </div>

              {/* Drag-and-drop Image Area */}
              <div className="space-y-2">
                <span className="block text-[10px] font-subheading text-brand-blue uppercase tracking-widest">
                  🖼️ Foto Paquete / Comprobante
                </span>
                
                <div 
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-colors ${
                    dragging ? 'border-brand-blue bg-brand-white-50/50' : 'border-brand-blue-200 hover:border-brand-blue/60'
                  }`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept="image/*"
                    className="hidden" 
                  />
                  
                  {uploadedFile ? (
                    <div className="space-y-1.5">
                      <div className="relative aspect-video max-h-24 mx-auto overflow-hidden rounded-xl border border-brand-blue-100">
                        <img src={uploadedFile.url} alt="Remito" className="object-cover w-full h-full" />
                      </div>
                      <span className="block text-[10px] font-mono text-brand-blue-400 truncate">{uploadedFile.name}</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="h-5 w-5 text-brand-blue-300 mx-auto" />
                      <p className="text-[10px] font-bold text-brand-blue-500">Arrastre aquí o haga Clic</p>
                      <p className="text-[9px] text-brand-blue-300">PDF, JPG o PNG de la etiqueta</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Confirm submit */}
              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading tracking-wider text-lg py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01] uppercase"
              >
                <Plus className="h-5 w-5" />
                Guardar en Consola Local
              </button>

            </form>
          </div>

          {/* MIDDLE COLUMN: Shipments list */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Tabs for filters */}
            <div className="flex flex-wrap gap-1 pb-1">
              {(['Todos', 'Pendiente', 'Retirado', 'En Camino', 'Entregado'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-subheading tracking-wider uppercase whitespace-nowrap transition-colors ${
                    activeTab === tab 
                      ? 'bg-brand-blue text-white shadow-sm' 
                      : 'bg-white border border-brand-blue-100 text-brand-blue-500 hover:bg-brand-white-50'
                  }`}
                >
                  {tab === 'Todos' ? 'Mostrar Todos' : tab}
                </button>
              ))}
            </div>

            {/* List block */}
            <div className="bg-white border border-brand-blue-100 rounded-3xl p-5 shadow-sm min-h-[400px] divide-y divide-brand-blue-50">
              {filteredShipments.length === 0 ? (
                <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-brand-blue-300 space-y-2">
                  <Clock className="h-8 w-8 text-brand-blue-200" />
                  <p className="font-bold text-sm">No se encontraron envíos</p>
                  <p className="text-xs">Crea un remito en la consola para registrar tu primera distribución.</p>
                </div>
              ) : (
                filteredShipments.map(s => {
                  return (
                    <div 
                      key={s.id} 
                      className={`py-3.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-brand-white-50/50 px-2 rounded-2xl transition-all ${
                        selectedId === s.id ? 'bg-brand-white-50/50 ring-1 ring-brand-blue/30' : ''
                      }`}
                      onClick={() => setSelectedId(s.id)}
                    >
                      <div className="space-y-1.5 truncate max-w-[70%]">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-brand-blue">{s.id}</span>
                          <span className={`text-[10px] font-subheading tracking-wide uppercase px-1.5 py-0.5 rounded ${
                            s.status === 'Entregado' ? 'bg-brand-blue-50 text-brand-blue-700' :
                            s.status === 'En Camino' ? 'bg-brand-blue-50 text-brand-blue-700' :
                            s.status === 'Retirado' ? 'bg-brand-yellow-50 text-brand-yellow-500' :
                            'bg-brand-blue-50 text-brand-blue-600'
                          }`}>
                            {s.status}
                          </span>
                        </div>
                        
                        <p className="text-xs font-bold text-brand-blue-700 truncate">Destino: {s.recipientAddress}</p>
                        <p className="text-[10px] text-brand-blue-400 font-normal">Destinatario: {s.recipientName} • Creado: {s.createdAt}</p>
                      </div>

                      {/* Right actions */}
                      <div className="flex items-center gap-2">
                        {/* Simulation trigger button to change values instantly */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            advanceTrackingStep(s.id);
                          }}
                          className="p-1 px-2.5 rounded-lg bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue text-[10px] font-subheading tracking-wider flex items-center gap-1 uppercase"
                          title="Simular paso del cadete"
                        >
                          <Bike className="h-3.5 w-3.5" />
                          Ruta
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteShipment(s.id);
                          }}
                          className="text-brand-blue-300 hover:text-brand-blue-400 p-1.5 rounded-md hover:bg-brand-blue-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Active tracking visual representation */}
          <div className="lg:col-span-3">
            {selectedShipment ? (
              <div className="bg-white border border-brand-blue-100 rounded-3xl p-5 shadow-sm space-y-6">
                
                {/* Visual state headers */}
                <div className="pb-3 border-b border-brand-blue-50 flex justify-between items-center">
                  <div>
                    <h4 className="font-subheading text-sm text-brand-blue uppercase tracking-wider">Cronograma En Vivo</h4>
                    <span className="font-mono text-brand-blue font-black text-sm">{selectedShipment.id}</span>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-brand-blue-400" />
                </div>

                {/* Timeline steps */}
                <div className="space-y-5">
                  
                  {/* Step 1 */}
                  <div className="flex gap-3 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                        selectedShipment.trackingStep >= 1 ? 'bg-brand-blue text-white' : 'bg-brand-blue-100 text-brand-blue-400'
                      }`}>
                        1
                      </div>
                      <div className={`w-0.5 h-6 ${selectedShipment.trackingStep >= 2 ? 'bg-brand-blue' : 'bg-brand-blue-100'}`}></div>
                    </div>
                    <div>
                      <h5 className="text-xs font-subheading text-brand-blue-700 tracking-wide uppercase">Orden Confirmada</h5>
                      <span className="text-[10px] text-brand-blue-300 block">{selectedShipment.createdAt}</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-3 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                        selectedShipment.trackingStep >= 2 ? 'bg-brand-blue text-white' : 'bg-brand-blue-100 text-brand-blue-400'
                      }`}>
                        2
                      </div>
                      <div className={`w-0.5 h-6 ${selectedShipment.trackingStep >= 3 ? 'bg-brand-blue' : 'bg-brand-blue-100'}`}></div>
                    </div>
                    <div>
                      <h5 className="text-xs font-subheading text-brand-blue-700 tracking-wide uppercase">Retirado por Cadetería</h5>
                      <span className="text-[10px] text-brand-blue-300 block">Sede Friuli 1972 o local</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-3 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                        selectedShipment.trackingStep >= 3 ? 'bg-brand-blue text-white' : 'bg-brand-blue-100 text-brand-blue-400'
                      }`}>
                        3
                      </div>
                      <div className={`w-0.5 h-6 ${selectedShipment.trackingStep >= 4 ? 'bg-brand-blue' : 'bg-brand-blue-100'}`}></div>
                    </div>
                    <div>
                      <h5 className="text-xs font-subheading text-brand-blue-700 tracking-wide uppercase">En Viaje de Reparto</h5>
                      <span className="text-[10px] text-brand-blue-300 block">Ruta: {selectedShipment.recipientAddress}</span>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-3 items-start">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold font-mono bg-brand-blue-50">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                        selectedShipment.trackingStep >= 4 ? 'bg-brand-blue text-white' : 'bg-brand-blue-100 text-brand-blue-400'
                      }`}>
                        4
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs font-subheading text-brand-blue-700 tracking-wide uppercase">Entrega Efectuada</h5>
                      <span className="text-[10px] text-brand-blue-300 block">Confirmado con Firma Escaneada</span>
                    </div>
                  </div>

                </div>

                {/* Cadete allocation information */}
                <div className="bg-brand-white-50 border border-brand-blue-100 p-3.5 rounded-2xl space-y-1">
                  <span className="block text-[9px] font-bold text-brand-blue-300 uppercase tracking-widest">Transportista</span>
                  <p className="text-xs font-bold text-brand-blue-700 flex items-center gap-1.5">
                    <Bike className="h-4 w-4 text-brand-blue" />
                    {selectedShipment.assignedCadete}
                  </p>
                </div>

                {/* Simulated Delivery Details (Photo preview + Signature) */}
                {selectedShipment.status === 'Entregado' ? (
                  <div className="pt-3 border-t border-brand-blue-50 space-y-3">
                    <span className="block text-[10px] font-subheading text-brand-blue-700 tracking-wider uppercase font-bold">✔ Comprobación 3PL / SLA</span>
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-blue-100 bg-brand-blue-50">
                      <img src={selectedShipment.filePreview} alt="Foto Entrega" className="object-cover w-full h-full" />
                      <div className="absolute bottom-2 left-2 bg-brand-blue/80 px-2 py-0.5 rounded text-[8px] font-mono text-white">
                        Dropoff Proof
                      </div>
                    </div>
                    
                    {/* Visual Cursive Signature */}
                    <div className="bg-brand-white-50 border border-brand-blue-100 p-2.5 rounded-xl text-center">
                      <span className="block text-[9px] text-brand-blue-300 leading-none mb-1">Firma del Cliente Registrada</span>
                      <span className="font-cursive text-brand-blue text-base italic leading-none font-semibold">
                        {selectedShipment.recipientName}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-brand-white-50 border border-brand-blue-50 p-4 rounded-2xl gap-2.5 flex items-start text-xs text-brand-blue-500">
                    <Clock className="h-4 w-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>
                      Presiona el botón celeste <strong className="text-brand-blue uppercase font-subheading">&quot;Ruta&quot;</strong> en la fila del envío para simular los avances y ver la confirmación de firma final.
                    </span>
                  </div>
                )}

              </div>
            ) : (
              <div className="bg-brand-white-50 border border-dashed border-brand-blue-200 rounded-3xl p-6 text-center text-brand-blue-300 h-full flex flex-col items-center justify-center space-y-2">
                <Map className="h-8 w-8 text-brand-blue-200" />
                <p className="font-bold text-xs text-brand-blue-500">Monitoreo Detallado</p>
                <p className="text-[10px] text-brand-blue-400">Haga clic en cualquier paquete de la lista del medio para inspeccionar su trazado, firma legal y comprobantes de geolocalización.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
