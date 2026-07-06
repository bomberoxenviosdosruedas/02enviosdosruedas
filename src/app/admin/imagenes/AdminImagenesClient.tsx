'use client';

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Image as ImageIcon, 
  FileText, 
  Sparkles, 
  Save, 
  AlertCircle,
  Copy,
  Check,
  FolderPlus,
  FileCheck,
  FileWarning
} from 'lucide-react';
import { 
  saveImageMetadata, 
  addPromptSuggestion, 
  deleteImageMetadata,
  checkFileExists,
  createPageFolder,
  getFilesInFolder
} from './actions';

interface PromptSuggestion {
  id: number;
  promptText: string;
  modelUsed: string | null;
  aspectRatio: string | null;
  createdAt: Date;
}

interface ImageMetadata {
  id: number;
  relativePath: string;
  currentDescription: string;
  createdAt: Date;
  updatedAt: Date;
  promptSuggestions: PromptSuggestion[];
}

interface Props {
  initialImageList: ImageMetadata[];
  initialFolders: string[];
}

export default function AdminImagenesClient({ initialImageList, initialFolders }: Props) {
  const [imageList, setImageList] = useState<ImageMetadata[]>(initialImageList);
  const [folders, setFolders] = useState<string[]>(initialFolders);
  
  // Folder & File selection states
  const [selectedFolder, setSelectedFolder] = useState(initialFolders[0] || 'home');
  const [filename, setFilename] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  
  // Files available in selected folder
  const [availableFiles, setAvailableFiles] = useState<string[]>([]);
  const [isCustomFilename, setIsCustomFilename] = useState(false);
  
  // File verification states
  const [fileExists, setFileExists] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  
  // New folder state
  const [newFolderInput, setNewFolderInput] = useState('');
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  
  // Prompt form states keyed by image ID
  const [promptTexts, setPromptTexts] = useState<Record<number, string>>({});
  const [modelsUsed, setModelsUsed] = useState<Record<number, string>>({});
  const [aspectRatios, setAspectRatios] = useState<Record<number, string>>({});
  
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Load files in directory whenever selected folder changes
  useEffect(() => {
    const loadFiles = async () => {
      if (!selectedFolder) return;
      try {
        const files = await getFilesInFolder(selectedFolder);
        setAvailableFiles(files);
        if (files.length > 0) {
          setFilename(files[0]);
          setIsCustomFilename(false);
        } else {
          setFilename('');
          setIsCustomFilename(true);
        }
      } catch (err) {
        console.error('Error fetching files in folder:', err);
        setAvailableFiles([]);
        setFilename('');
        setIsCustomFilename(true);
      }
    };
    loadFiles();
  }, [selectedFolder]);

  // Trigger existence check when folder or filename changes
  useEffect(() => {
    const verifyExistence = async () => {
      if (!selectedFolder || !filename || filename.trim() === '') {
        setFileExists(null);
        return;
      }
      setIsChecking(true);
      try {
        const exists = await checkFileExists(selectedFolder, filename.trim());
        setFileExists(exists);
      } catch (err) {
        console.error(err);
        setFileExists(false);
      } finally {
        setIsChecking(false);
      }
    };

    const debounce = setTimeout(verifyExistence, 300);
    return () => clearTimeout(debounce);
  }, [selectedFolder, filename]);

  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderInput || newFolderInput.trim() === '') return;
    setError(null);
    setSuccess(null);
    setIsCreatingFolder(true);

    try {
      const cleanFolder = await createPageFolder(newFolderInput);
      setFolders(prev => {
        if (prev.includes(cleanFolder)) return prev;
        return [...prev, cleanFolder];
      });
      setSelectedFolder(cleanFolder);
      setNewFolderInput('');
      setSuccess(`¡Carpeta "${cleanFolder}" creada y seleccionada con éxito!`);
    } catch (err: any) {
      setError(err.message || 'Error al crear la carpeta.');
    } finally {
      setIsCreatingFolder(false);
    }
  };

  const handleSaveImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!filename || filename.trim() === '') {
      setError('Por favor, ingresá un nombre de archivo válido.');
      return;
    }

    setLoading(true);
    const finalRelativePath = `/img/${selectedFolder}/${filename.trim()}`;

    try {
      const saved = await saveImageMetadata({ 
        relativePath: finalRelativePath, 
        currentDescription 
      });
      
      // Update local state
      setImageList(prev => {
        const index = prev.findIndex(img => img.id === saved.id || img.relativePath === saved.relativePath);
        if (index > -1) {
          const updated = [...prev];
          updated[index] = { 
            ...updated[index], 
            currentDescription: saved.currentDescription,
            updatedAt: saved.updatedAt 
          };
          return updated;
        } else {
          return [{ ...saved, promptSuggestions: [] }, ...prev];
        }
      });

      setFilename('');
      setCurrentDescription('');
      setSuccess('¡Guardaste la imagen con éxito!');
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error al guardar los metadatos.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddPrompt = async (imageId: number) => {
    setError(null);
    setSuccess(null);
    const text = promptTexts[imageId];
    const model = modelsUsed[imageId] || 'auto';
    const aspect = aspectRatios[imageId] || '16:9';

    if (!text || text.trim() === '') {
      setError('Escribí un prompt antes de guardar.');
      return;
    }

    try {
      const suggestion = await addPromptSuggestion({
        imageId,
        promptText: text,
        modelUsed: model,
        aspectRatio: aspect
      });

      // Update local state
      setImageList(prev => prev.map(img => {
        if (img.id === imageId) {
          return {
            ...img,
            promptSuggestions: [suggestion as any, ...img.promptSuggestions]
          };
        }
        return img;
      }));

      // Clear form for this image
      setPromptTexts(prev => ({ ...prev, [imageId]: '' }));
      setSuccess('¡Prompt agregado correctamente!');
    } catch (err: any) {
      setError(err.message || 'Error al guardar la sugerencia.');
    }
  };

  const handleDeleteImage = async (id: number) => {
    if (!confirm('¿Estás seguro de que querés eliminar esta imagen y todos sus prompts?')) return;
    setError(null);
    setSuccess(null);

    try {
      await deleteImageMetadata(id);
      setImageList(prev => prev.filter(img => img.id !== id));
      setSuccess('Imagen eliminada de la base de datos.');
    } catch (err: any) {
      setError(err.message || 'Error al eliminar la imagen.');
    }
  };

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-display text-brand-blue uppercase tracking-tight">
          Gestión de Imágenes y Prompts de IA
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto font-sans text-base">
          Organizá tus assets en carpetas por página bajo <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">public/img/</code>. Ingresá el nombre del archivo y validá su existencia física en tiempo real en el servidor.
        </p>
      </div>

      {/* Notifications */}
      {error && (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl flex items-center gap-3 text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}
      {success && (
        <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl flex items-center gap-3 text-emerald-800">
          <Check className="h-5 w-5 shrink-0" />
          <p className="text-sm font-semibold">{success}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <div className="lg:col-span-4 space-y-6">
          {/* Create Folder Card */}
          <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-accent-sm">
            <h3 className="text-lg font-subheading text-brand-blue uppercase tracking-wider mb-4 flex items-center gap-2">
              <FolderPlus className="h-5 w-5 text-brand-blue shrink-0" />
              Nueva Carpeta de Página
            </h3>
            <form onSubmit={handleCreateFolder} className="flex gap-2">
              <input
                type="text"
                value={newFolderInput}
                onChange={e => setNewFolderInput(e.target.value)}
                placeholder="Ej: blog, flex"
                required
                className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-blue text-slate-800"
              />
              <button
                type="submit"
                disabled={isCreatingFolder}
                className="bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading uppercase text-xs px-3 py-2 rounded-lg border border-brand-blue cursor-pointer shadow-[2px_2px_0px_#FFEC01] shrink-0"
              >
                {isCreatingFolder ? 'Creando...' : 'Crear'}
              </button>
            </form>
          </div>

          {/* Register Image Form Card */}
          <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-accent-md">
            <h2 className="text-xl font-subheading text-brand-blue uppercase tracking-wider mb-6 flex items-center gap-2">
              <ImageIcon className="h-5.5 w-5.5 text-brand-blue shrink-0" />
              Registrar Imagen
            </h2>

            <form onSubmit={handleSaveImage} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Carpeta de la Página (public/img/)
                </label>
                <select
                  value={selectedFolder}
                  onChange={e => setSelectedFolder(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-slate-850 text-sm font-semibold"
                >
                  {folders.map(f => (
                    <option key={f} value={f}>
                      {f}/
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Nombre del Archivo
                  </label>
                  {availableFiles.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setIsCustomFilename(!isCustomFilename)}
                      className="text-[10px] text-brand-blue font-bold uppercase tracking-wider hover:underline"
                    >
                      {isCustomFilename ? 'Seleccionar archivo detectado' : 'Ingresar nombre manual'}
                    </button>
                  )}
                </div>

                {!isCustomFilename && availableFiles.length > 0 ? (
                  <select
                    value={filename}
                    onChange={e => {
                      if (e.target.value === '__custom__') {
                        setIsCustomFilename(true);
                        setFilename('');
                      } else {
                        setFilename(e.target.value);
                      }
                    }}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-slate-850 text-sm font-semibold"
                  >
                    {availableFiles.map(file => (
                      <option key={file} value={file}>
                        {file}
                      </option>
                    ))}
                    <option value="__custom__">✍ Ingresar archivo personalizado...</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={filename}
                    onChange={e => setFilename(e.target.value)}
                    placeholder="Ej: hero-reparto.webp"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-slate-800 text-sm font-mono"
                  />
                )}
              </div>

              {/* Dynamic Path & File existence status */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-[10px] font-bold uppercase text-slate-400">Ruta Resultante:</div>
                <code className="text-xs font-semibold text-slate-700 font-mono block break-all">
                  /img/{selectedFolder}/{filename || '[nombre-de-archivo]'}
                </code>

                {filename.trim() !== '' && (
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                    {isChecking ? (
                      <span className="text-xs text-slate-400 animate-pulse font-semibold">Verificando en servidor...</span>
                    ) : fileExists ? (
                      <div className="text-emerald-700 flex items-center gap-1.5 text-xs font-bold font-sans">
                        <FileCheck className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                        ✔ El archivo existe físicamente en el servidor
                      </div>
                    ) : (
                      <div className="text-amber-700 flex items-center gap-1.5 text-xs font-bold font-sans">
                        <FileWarning className="h-4.5 w-4.5 text-amber-600 shrink-0" />
                        ⚠ El archivo no se encuentra físicamente
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Descripción Actual
                </label>
                <textarea
                  value={currentDescription}
                  onChange={e => setCurrentDescription(e.target.value)}
                  placeholder="Ej: Mapa de calor ilustrado para la sección de entregas express."
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-slate-800 text-sm font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading uppercase py-3.5 rounded-xl border-2 border-brand-blue tracking-wider text-sm flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_#FFEC01] transition-transform active:translate-y-[2px]"
              >
                <Save className="h-4.5 w-4.5 shrink-0" />
                {loading ? 'Guardando...' : 'Guardar Imagen'}
              </button>
            </form>
          </div>
        </div>

        {/* List Column */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-2xl font-subheading text-brand-blue uppercase tracking-wider flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-blue shrink-0" />
            Assets Registrados ({imageList.length})
          </h2>

          {imageList.length === 0 ? (
            <div className="bg-slate-100 border border-slate-200 rounded-3xl p-12 text-center text-slate-500 font-sans">
              No hay imágenes registradas todavía. ¡Comenzá registrando tu primer asset!
            </div>
          ) : (
            <div className="space-y-6">
              {imageList.map(image => (
                <div 
                  key={image.id} 
                  className="bg-white rounded-3xl border-2 border-slate-200 shadow-accent-sm overflow-hidden"
                >
                  {/* Image info bar */}
                  <div className="bg-slate-900 text-white p-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-brand-yellow text-brand-blue text-[10px] font-bold font-mono">
                          PATH
                        </span>
                        <code className="text-sm font-semibold text-brand-yellow font-mono">
                          {image.relativePath}
                        </code>
                      </div>
                      <p className="text-xs text-slate-300 font-sans">{image.currentDescription}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="p-2 rounded-lg bg-red-900/40 hover:bg-red-900/60 text-red-300 border border-red-800 transition-colors cursor-pointer"
                      title="Eliminar registro"
                    >
                      <Trash2 className="h-4.5 w-4.5 shrink-0" />
                    </button>
                  </div>

                  {/* Prompt management area */}
                  <div className="p-6 space-y-6">
                    {/* Add Prompt Form */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-250 space-y-4">
                      <div className="flex items-center gap-2 text-brand-blue font-subheading text-sm uppercase font-bold tracking-wider">
                        <Sparkles className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                        Agregar Sugerencia de Prompt de IA
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Modelo de IA</label>
                          <select
                            value={modelsUsed[image.id] || 'auto'}
                            onChange={e => setModelsUsed(prev => ({ ...prev, [image.id]: e.target.value }))}
                            className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-1 focus:ring-brand-blue text-slate-700"
                          >
                            <option value="auto">Auto (Smart Selection)</option>
                            <option value="nano-banana">Nano Banana</option>
                            <option value="imagen-3">Imagen 3 (Google Flows)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Aspect Ratio</label>
                          <select
                            value={aspectRatios[image.id] || '16:9'}
                            onChange={e => setAspectRatios(prev => ({ ...prev, [image.id]: e.target.value }))}
                            className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-1 focus:ring-brand-blue text-slate-700"
                          >
                            <option value="16:9">16:9 (Landscape)</option>
                            <option value="1:1">1:1 (Square)</option>
                            <option value="9:16">9:16 (Vertical)</option>
                            <option value="4:3">4:3 (Classic)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <textarea
                          value={promptTexts[image.id] || ''}
                          onChange={e => setPromptTexts(prev => ({ ...prev, [image.id]: e.target.value }))}
                          placeholder="Ingresá la descripción estructurada del prompt que arrojó la IA..."
                          rows={3}
                          className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-brand-blue text-slate-700 font-sans"
                        />
                        <button
                          onClick={() => handleAddPrompt(image.id)}
                          className="bg-brand-blue hover:bg-brand-blue/95 text-white font-subheading uppercase tracking-wide px-4 py-2 rounded-lg text-xs cursor-pointer flex items-center gap-1.5 shadow-[2px_2px_0px_#FFEC01]"
                        >
                          <Plus className="h-3.5 w-3.5 shrink-0" />
                          Agregar Prompt
                        </button>
                      </div>
                    </div>

                    {/* Display existing suggestions */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        Prompts sugeridos guardados ({image.promptSuggestions.length})
                      </h4>
                      {image.promptSuggestions.length === 0 ? (
                        <p className="text-xs text-slate-400 italic">No hay prompts sugeridos para esta imagen todavía.</p>
                      ) : (
                        <div className="space-y-3">
                          {image.promptSuggestions.map(prompt => (
                            <div 
                              key={prompt.id} 
                              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-start gap-4 hover:bg-slate-100 transition-colors"
                            >
                              <div className="space-y-2 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  {prompt.modelUsed && (
                                    <span className="px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue font-bold uppercase text-[9px] font-mono tracking-wider">
                                      {prompt.modelUsed}
                                    </span>
                                  )}
                                  {prompt.aspectRatio && (
                                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 font-bold text-[9px] font-mono tracking-wider">
                                      {prompt.aspectRatio}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-700 leading-relaxed font-sans">{prompt.promptText}</p>
                              </div>
                              <button
                                onClick={() => copyToClipboard(prompt.promptText, prompt.id)}
                                className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer shrink-0"
                                title="Copiar prompt al portapapeles"
                              >
                                {copiedId === prompt.id ? (
                                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                                ) : (
                                  <Copy className="h-4 w-4 shrink-0" />
                                )}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
