'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  FileWarning,
  Loader2,
  Zap,
  ChevronDown,
} from 'lucide-react';
import {
  saveImageMetadata,
  addPromptSuggestion,
  deleteImageMetadata,
  checkFileExists,
  createPageFolder,
  getFilesInFolder,
  suggestPromptBase,
  improvePrompt,
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

interface AdminImagenesClientProps {
  initialImageList: ImageMetadata[];
  initialFolders: string[];
}

const MODEL_OPTIONS = [
  { value: 'auto', label: 'Auto (Selección Inteligente)' },
  { value: 'nano-banana', label: 'Nano Banana' },
  { value: 'imagen-3', label: 'Imagen 3 (Google Flows)' },
] as const;

const ASPECT_RATIO_OPTIONS = [
  { value: '16:9', label: '16:9 (Panorámico)' },
  { value: '1:1', label: '1:1 (Cuadrado)' },
  { value: '9:16', label: '9:16 (Vertical)' },
  { value: '4:3', label: '4:3 (Clásico)' },
] as const;

function SelectIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function Spinner({ className = 'h-4 w-4 animate-spin' }: { className?: string }) {
  return <Loader2 className={className} />;
}

export default function AdminImagenesClient({ initialImageList, initialFolders }: AdminImagenesClientProps) {
  const [imageList, setImageList] = useState<ImageMetadata[]>(initialImageList);
  const [folders, setFolders] = useState<string[]>(initialFolders);

  const [selectedFolder, setSelectedFolder] = useState<string>(initialFolders[0] ?? 'home');
  const [filename, setFilename] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [availableFiles, setAvailableFiles] = useState<string[]>([]);
  const [isCustomFilename, setIsCustomFilename] = useState(false);

  const [fileExists, setFileExists] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const [newFolderInput, setNewFolderInput] = useState('');
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);

  const [promptTexts, setPromptTexts] = useState<Record<number, string>>({});
  const [modelsUsed, setModelsUsed] = useState<Record<number, string>>({});
  const [aspectRatios, setAspectRatios] = useState<Record<number, string>>({});

  const [generatingId, setGeneratingId] = useState<number | null>(null);
  const [improvingId, setImprovingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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

  const handleCreateFolder = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderInput || newFolderInput.trim() === '') return;
    setError(null);
    setSuccess(null);
    setIsCreatingFolder(true);

    try {
      const cleanFolder = await createPageFolder(newFolderInput);
      setFolders((prev) => (prev.includes(cleanFolder) ? prev : [...prev, cleanFolder]));
      setSelectedFolder(cleanFolder);
      setNewFolderInput('');
      setSuccess(`¡Carpeta "${cleanFolder}" creada y seleccionada!`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear la carpeta.');
    } finally {
      setIsCreatingFolder(false);
    }
  }, [newFolderInput]);

  const handleSaveImage = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!filename || filename.trim() === '') {
      setError('Por favor, ingresá un nombre de archivo válido.');
      return;
    }
    if (!currentDescription || currentDescription.trim() === '') {
      setError('Por favor, ingresá una descripción para la imagen.');
      return;
    }

    setLoading(true);
    const finalRelativePath = `/img/${selectedFolder}/${filename.trim()}`;

    try {
      const saved = await saveImageMetadata({
        relativePath: finalRelativePath,
        currentDescription: currentDescription.trim(),
      });

      setImageList((prev) => {
        const index = prev.findIndex(
          (img) => img.id === saved.id || img.relativePath === saved.relativePath
        );
        if (index > -1) {
          const updated = [...prev];
          updated[index] = {
            ...updated[index],
            currentDescription: saved.currentDescription,
            updatedAt: saved.updatedAt,
          };
          return updated;
        }
        return [{ ...saved, promptSuggestions: [] }, ...prev];
      });

      setFilename('');
      setCurrentDescription('');
      setFileExists(null);
      setSuccess('¡Imagen guardada con éxito!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar los metadatos.');
    } finally {
      setLoading(false);
    }
  }, [selectedFolder, filename, currentDescription]);

  const handleAddPrompt = useCallback(async (imageId: number) => {
    setError(null);
    setSuccess(null);
    const text = promptTexts[imageId];
    const model = modelsUsed[imageId] || 'auto';
    const aspect = aspectRatios[imageId] || '16:9';

    if (!text || text.trim() === '') {
      setError('Escribí un prompt antes de guardarlo.');
      return;
    }

    try {
      const suggestion = await addPromptSuggestion({
        imageId,
        promptText: text.trim(),
        modelUsed: model,
        aspectRatio: aspect,
      });

      setImageList((prev) =>
        prev.map((img) =>
          img.id === imageId
            ? { ...img, promptSuggestions: [suggestion as PromptSuggestion, ...img.promptSuggestions] }
            : img
        )
      );

      setPromptTexts((prev) => ({ ...prev, [imageId]: '' }));
      setSuccess('¡Prompt agregado correctamente!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar la sugerencia.');
    }
  }, [promptTexts, modelsUsed, aspectRatios]);

  const handleSuggestPrompt = useCallback(
    async (imageId: number, description: string, relativePath: string) => {
      setError(null);
      setSuccess(null);
      const model = modelsUsed[imageId] || 'auto';
      const aspect = aspectRatios[imageId] || '16:9';
      setGeneratingId(imageId);

      try {
        const suggested = await suggestPromptBase({
          description,
          relativePath,
          modelUsed: model,
          aspectRatio: aspect,
        });
        setPromptTexts((prev) => ({ ...prev, [imageId]: suggested }));
        setSuccess('¡Prompt base sugerido! Revisalo y guardalo.');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al generar la sugerencia base.');
      } finally {
        setGeneratingId(null);
      }
    },
    [modelsUsed, aspectRatios]
  );

  const handleImprovePrompt = useCallback(async (imageId: number) => {
    setError(null);
    setSuccess(null);
    const text = promptTexts[imageId];
    const model = modelsUsed[imageId] || 'auto';
    const aspect = aspectRatios[imageId] || '16:9';

    if (!text || text.trim() === '') {
      setError('Escribí algo en el prompt para poder mejorarlo.');
      return;
    }

    setImprovingId(imageId);
    try {
      const improved = await improvePrompt({
        currentPromptText: text,
        modelUsed: model,
        aspectRatio: aspect,
      });
      setPromptTexts((prev) => ({ ...prev, [imageId]: improved }));
      setSuccess('¡Prompt mejorado con IA! Revisalo y guardalo.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al mejorar el prompt.');
    } finally {
      setImprovingId(null);
    }
  }, [promptTexts, modelsUsed, aspectRatios]);

  const handleDeleteImage = useCallback(async (id: number) => {
    if (!window.confirm('¿Estás seguro de que querés eliminar esta imagen y todos sus prompts?')) return;
    setError(null);
    setSuccess(null);

    try {
      await deleteImageMetadata(id);
      setImageList((prev) => prev.filter((img) => img.id !== id));
      setSuccess('Imagen eliminada de la base de datos.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar la imagen.');
    }
  }, []);

  const copyToClipboard = useCallback((text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12 lg:space-y-16">
      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.3s var(--ease-out);
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .input-wrapper { position: relative; }
        .input-label {
          @apply block font-subheading text-xs uppercase tracking-wider text-brand-blue-400 mb-1.5;
        }
        .input-field {
          @apply w-full bg-white px-3 py-2.5 rounded-xl border-2 border-brand-blue-100
                 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-700
                 text-sm text-brand-blue-700 placeholder:text-brand-blue-300 font-sans
                 transition-colors duration-150;
        }
        .input-field:disabled {
          @apply bg-brand-blue-50/50 border-brand-blue-100 cursor-not-allowed;
        }
        .input-icon {
          @apply absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue-300 pointer-events-none;
        }
        .input-wrapper.has-icon .input-field {
          @apply pl-10;
        }

        /* Double Bezel Card */
        .double-bezel {
          @apply bg-brand-blue-50/80 border border-brand-blue-100 rounded-[1rem] p-[0.5rem] shadow-float
                 transition-all duration-300;
        }
        .double-bezel:hover {
          @apply shadow-antigravity-deep border-brand-blue-300;
        }
        .double-bezel-inner {
          @apply bg-white rounded-[0.75rem] shadow-inner overflow-hidden;
        }

        /* CTA Nested Pill */
        .cta-nested-pill {
          @apply inline-flex items-center justify-center gap-2 rounded-full font-subheading uppercase
                 tracking-[.05em] font-bold cursor-pointer transition-all duration-150 ease-snappy
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500
                 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                 active:scale-[0.98] active:translate-y-[1px];
        }
        .cta-nested-pill--primary {
          @apply bg-brand-yellow text-brand-blue border-2 border-brand-yellow
                 hover:bg-brand-yellow hover:text-brand-blue hover:border-brand-yellow
                 hover:shadow-cta-glow hover:shadow-accent-sm
                 min-h-[40px] px-4 py-2 text-sm;
        }
        .cta-nested-pill--primary:disabled {
          @apply opacity-50 cursor-not-allowed hover:bg-brand-yellow hover:text-brand-blue;
        }
        .cta-nested-pill--outline {
          @apply bg-transparent text-brand-blue-600 border-2 border-brand-blue-100
                 hover:bg-brand-blue-50 hover:border-brand-blue-200 hover:text-brand-ink
                 min-h-[40px] px-3 py-2 text-xs;
        }
        .cta-nested-pill--outline:disabled {
          @apply opacity-50 cursor-not-allowed;
        }
        .cta-nested-pill--ghost {
          @apply bg-transparent text-brand-blue-600 border-2 border-transparent
                 hover:bg-brand-blue-50 hover:border-brand-blue-100 hover:text-brand-ink
                 min-h-[40px] px-3 py-2 text-xs;
        }
        .cta-nested-pill--ghost:disabled {
          @apply opacity-50 cursor-not-allowed;
        }
        .cta-nested-icon {
          @apply inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-150;
        }
        .cta-nested-pill--primary .cta-nested-icon {
          @apply bg-brand-yellow text-brand-blue;
        }
        .cta-nested-pill--primary:hover .cta-nested-icon {
          @apply bg-brand-blue-700/10 text-brand-blue;
        }
        .cta-nested-pill--primary:active .cta-nested-icon {
          @apply bg-brand-blue-700 text-brand-yellow translate-x-1;
        }

        /* Shadows */
        .shadow-float { box-shadow: var(--shadow-float); }
        .shadow-antigravity-deep { box-shadow: var(--shadow-antigravity-deep); }
        .shadow-cta-glow { box-shadow: var(--shadow-cta-glow); }
        .shadow-accent-sm { box-shadow: var(--shadow-accent-sm); }
        .shadow-inner { box-shadow: var(--shadow-inner); }

        /* Select styling */
        select.input-field {
          @apply appearance-none bg-white;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%230636A5' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.75rem center;
          background-repeat: no-repeat;
          background-size: 1.25em 1.25em;
          padding-right: 2.5rem;
        }
        select.input-field:disabled {
          @apply bg-brand-blue-50/50;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: var(--color-brand-blue-50); }
        ::-webkit-scrollbar-thumb { background: var(--color-brand-blue-200); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--color-brand-blue-300); }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-display text-brand-blue uppercase tracking-tight">
          Gestión de Imágenes y Prompts de IA
        </h1>
        <p className="text-brand-blue-500 max-w-2xl mx-auto font-sans text-base lg:text-lg">
          Organizá tus assets en carpetas por página bajo{' '}
          <code className="text-xs bg-brand-blue-50 px-1.5 py-0.5 rounded font-mono">public/img/</code>
          . Ingresá el nombre del archivo y validá su existencia física en tiempo real en el servidor.
        </p>
      </header>

      {/* Notifications */}
      <div className="space-y-3" role="status" aria-live="polite">
        {error && (
          <div className="p-4 bg-brand-blue-50 border-l-4 border-brand-blue-400 rounded-r-xl flex items-center gap-3 text-brand-blue-700 animate-slide-in">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm font-semibold">{error}</p>
          </div>
        )}
        {success && (
          <div className="p-4 bg-brand-blue-50 border-l-4 border-brand-blue-400 rounded-r-xl flex items-center gap-3 text-brand-blue-700 animate-slide-in">
            <Check className="h-5 w-5 shrink-0" />
            <p className="text-sm font-semibold">{success}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Form Column */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Create Folder Card - Double Bezel */}
          <div className="double-bezel">
            <div className="double-bezel-inner p-6">
              <h3 className="text-base lg:text-lg font-subheading text-brand-blue uppercase tracking-wider mb-4 flex items-center gap-2">
                <FolderPlus className="h-5 w-5 text-brand-blue shrink-0" />
                Nueva Carpeta de Página
              </h3>
              <form onSubmit={handleCreateFolder} className="flex gap-2">
                <input
                  type="text"
                  value={newFolderInput}
                  onChange={(e) => setNewFolderInput(e.target.value)}
                  placeholder="Ej: blog, flex, novedades"
                  required
                  className="flex-1 px-3 py-2.5 rounded-lg border-2 border-brand-blue-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-700 text-sm text-brand-ink placeholder:text-brand-blue-300 bg-white"
                />
                <button
                  type="submit"
                  disabled={isCreatingFolder}
                  className="cta-nested-pill cta-nested-pill--primary shrink-0"
                >
                  <span>{isCreatingFolder ? 'Creando…' : 'Crear'}</span>
                  <span className="cta-nested-icon">
                    {isCreatingFolder ? <Spinner className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Register Image Form Card - Double Bezel */}
          <div className="double-bezel">
            <div className="double-bezel-inner p-6">
              <h2 className="text-lg lg:text-xl font-subheading text-brand-blue uppercase tracking-wider mb-6 flex items-center gap-2">
                <ImageIcon className="h-5.5 w-5.5 text-brand-blue shrink-0" />
                Registrar Imagen
              </h2>

              <form onSubmit={handleSaveImage} className="space-y-5" noValidate>
                {/* Folder Select */}
                <div>
                  <label className="input-label">Carpeta de la Página (public/img/)</label>
                  <div className="input-wrapper has-icon">
                    <SelectIcon className="input-icon" />
                    <select
                      value={selectedFolder}
                      onChange={(e) => setSelectedFolder(e.target.value)}
                      className="input-field"
                      aria-label="Seleccioná la carpeta de la página"
                    >
                      {folders.map((f) => (
                        <option key={f} value={f}>
                          {f}/
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Filename */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="input-label">Nombre del Archivo</label>
                    {availableFiles.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setIsCustomFilename(!isCustomFilename)}
                        className="text-xs text-brand-blue font-bold uppercase tracking-wider hover:underline"
                      >
                        {isCustomFilename ? 'Seleccionar archivo detectado' : 'Ingresar nombre manual'}
                      </button>
                    )}
                  </div>

                  {!isCustomFilename && availableFiles.length > 0 ? (
                    <div className="input-wrapper has-icon">
                      <SelectIcon className="input-icon" />
                      <select
                        value={filename}
                        onChange={(e) => {
                          if (e.target.value === '__custom__') {
                            setIsCustomFilename(true);
                            setFilename('');
                          } else {
                            setFilename(e.target.value);
                          }
                        }}
                        className="input-field"
                        aria-label="Seleccioná el archivo detectado"
                      >
                        {availableFiles.map((file) => (
                          <option key={file} value={file}>
                            {file}
                          </option>
                        ))}
                        <option value="__custom__">✍ Ingresar archivo personalizado…</option>
                      </select>
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={filename}
                      onChange={(e) => setFilename(e.target.value)}
                      placeholder="Ej: hero-reparto.webp"
                      required
                      className="input-field font-mono"
                      aria-label="Nombre del archivo"
                    />
                  )}
                </div>

                {/* Dynamic Path & File existence status */}
                <div className="bg-brand-blue-50 p-4 rounded-2xl border border-brand-blue-100 space-y-2">
                  <div className="text-[10px] font-bold uppercase text-brand-blue-300">Ruta Resultante:</div>
                  <code className="text-xs font-semibold text-brand-blue-600 font-mono block break-all">
                    /img/{selectedFolder}/{filename || '[nombre-de-archivo]'}
                  </code>

                  {filename.trim() !== '' && (
                    <div className="pt-2 border-t border-brand-blue-50 flex items-center gap-2">
                      {isChecking ? (
                        <span className="text-xs text-brand-blue-300 animate-pulse font-semibold">Verificando en servidor…</span>
                      ) : fileExists ? (
                        <div className="text-brand-blue-600 flex items-center gap-1.5 text-xs font-bold font-sans">
                          <FileCheck className="h-4.5 w-4.5 text-brand-blue-500 shrink-0" />
                          ✔ El archivo existe físicamente en el servidor
                        </div>
                      ) : (
                        <div className="text-brand-yellow-500 flex items-center gap-1.5 text-xs font-bold font-sans">
                          <FileWarning className="h-4.5 w-4.5 text-brand-yellow-500 shrink-0" />
                          ⚠ El archivo no se encuentra físicamente
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="input-label">Descripción Actual</label>
                  <textarea
                    value={currentDescription}
                    onChange={(e) => setCurrentDescription(e.target.value)}
                    placeholder="Ej: Mapa de calor ilustrado para la sección de entregas express."
                    required
                    rows={3}
                    className="input-field resize-none min-h-[72px]"
                    aria-label="Descripción de la imagen"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="cta-nested-pill cta-nested-pill--primary w-full"
                >
                  <Save className="h-4.5 w-4.5 shrink-0" />
                  <span>{loading ? 'Guardando…' : 'Guardar Imagen'}</span>
                  <span className="cta-nested-icon">
                    {loading ? <Spinner className="h-4.5 w-4.5" /> : <Save className="h-4.5 w-4.5" />}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </aside>

        {/* List Column */}
        <section className="lg:col-span-8 space-y-6">
          <h2 className="text-xl lg:text-2xl font-subheading text-brand-blue uppercase tracking-wider flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-blue shrink-0" />
            Assets Registrados ({imageList.length})
          </h2>

          {imageList.length === 0 ? (
            <div className="double-bezel">
              <div className="double-bezel-inner p-12 text-center text-brand-blue-400 font-sans">
                No hay imágenes registradas todavía. ¡Comenzá registrando tu primer asset!
              </div>
            </div>
          ) : (
            <div className="space-y-6" role="list" aria-label="Lista de imágenes registradas">
              {imageList.map((image) => (
                <article
                  key={image.id}
                  className="double-bezel overflow-hidden"
                  role="listitem"
                >
                  <div className="double-bezel-inner">
                    {/* Image info bar */}
                    <div className="bg-brand-blue-700 text-white p-5 flex flex-wrap items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-brand-yellow text-brand-blue text-[10px] font-bold font-mono">
                            PATH
                          </span>
                          <code className="text-sm font-semibold text-brand-yellow font-mono">
                            {image.relativePath}
                          </code>
                        </div>
                        <p className="text-xs text-brand-blue-200 font-sans">{image.currentDescription}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteImage(image.id)}
                        className="p-2 rounded-lg bg-brand-blue-700/40 hover:bg-brand-blue-700/60 text-brand-blue-200 border border-brand-blue-700 transition-colors cursor-pointer"
                        title="Eliminar registro"
                        aria-label={`Eliminar ${image.relativePath}`}
                      >
                        <Trash2 className="h-4.5 w-4.5 shrink-0" />
                      </button>
                    </div>

                    {/* Prompt management area */}
                    <div className="p-6 space-y-6">
                      {/* Add Prompt Form */}
                      <div className="bg-brand-blue-50 p-4 rounded-2xl border border-brand-blue-200 space-y-4">
                        <div className="flex items-center gap-2 text-brand-blue font-subheading text-sm uppercase font-bold tracking-wider">
                          <Sparkles className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                          Agregar Sugerencia de Prompt de IA
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="input-label">Modelo de IA</label>
                            <div className="input-wrapper has-icon">
                              <SelectIcon className="input-icon" />
                              <select
                                value={modelsUsed[image.id] || 'auto'}
                                onChange={(e) => setModelsUsed((prev) => ({ ...prev, [image.id]: e.target.value }))}
                                className="input-field"
                                aria-label="Modelo de IA"
                              >
                                {MODEL_OPTIONS.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="input-label">Aspect Ratio</label>
                            <div className="input-wrapper has-icon">
                              <SelectIcon className="input-icon" />
                              <select
                                value={aspectRatios[image.id] || '16:9'}
                                onChange={(e) => setAspectRatios((prev) => ({ ...prev, [image.id]: e.target.value }))}
                                className="input-field"
                                aria-label="Aspect ratio"
                              >
                                {ASPECT_RATIO_OPTIONS.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <textarea
                            value={promptTexts[image.id] || ''}
                            onChange={(e) => setPromptTexts((prev) => ({ ...prev, [image.id]: e.target.value }))}
                            placeholder="Ingresá la descripción estructurada del prompt o usá las sugerencias de IA…"
                            rows={3}
                            className="input-field font-sans resize-none min-h-[72px]"
                            aria-label="Texto del prompt"
                          />
                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={() => handleAddPrompt(image.id)}
                              className="cta-nested-pill cta-nested-pill--primary shrink-0"
                            >
                              <Plus className="h-3.5 w-3.5 shrink-0" />
                              <span>Agregar Prompt</span>
                              <span className="cta-nested-icon"><Plus className="h-3.5 w-3.5" /></span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleSuggestPrompt(image.id, image.currentDescription, image.relativePath)}
                              disabled={generatingId === image.id || improvingId === image.id}
                              className="cta-nested-pill cta-nested-pill--outline shrink-0"
                              title="Sugerir un prompt estructurado (desde descripción o imagen)"
                            >
                              <Sparkles className={`h-3.5 w-3.5 shrink-0 ${generatingId === image.id ? 'animate-pulse' : ''}`} />
                              <span>
                                {generatingId === image.id
                                  ? 'Generando…'
                                  : !image.currentDescription || image.currentDescription.trim() === ''
                                  ? 'Sugerir con IA Visual'
                                  : 'Sugerir Base'}
                              </span>
                              <span className="cta-nested-icon">
                                {generatingId === image.id ? <Spinner className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                              </span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleImprovePrompt(image.id)}
                              disabled={generatingId === image.id || improvingId === image.id}
                              className="cta-nested-pill cta-nested-pill--ghost shrink-0"
                              title="Optimizar el prompt actual con inteligencia artificial"
                            >
                              <Zap className="h-3.5 w-3.5 shrink-0 text-brand-yellow-500" />
                              <span>{improvingId === image.id ? 'Mejorando…' : 'Mejorar con IA'}</span>
                              <span className="cta-nested-icon">
                                {improvingId === image.id ? <Spinner className="h-3.5 w-3.5" /> : <Zap className="h-3.5 w-3.5 text-brand-yellow-500" />}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Display existing suggestions */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue-300 flex items-center gap-1">
                          Prompts Sugeridos Guardados ({image.promptSuggestions.length})
                        </h4>
                        {image.promptSuggestions.length === 0 ? (
                          <p className="text-xs text-brand-blue-300 italic">No hay prompts sugeridos para esta imagen todavía.</p>
                        ) : (
                          <div className="space-y-3" role="list" aria-label={`Prompts de ${image.relativePath}`}>
                            {image.promptSuggestions.map((prompt) => (
                              <div
                                key={prompt.id}
                                className="p-4 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex justify-between items-start gap-4 hover:bg-brand-blue-100/50 transition-colors"
                                role="listitem"
                              >
                                <div className="space-y-2 flex-1 min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    {prompt.modelUsed && (
                                      <span className="px-2 py-0.5 rounded bg-brand-blue-50/80 text-brand-blue font-bold uppercase text-[9px] font-mono tracking-wider">
                                        {prompt.modelUsed}
                                      </span>
                                    )}
                                    {prompt.aspectRatio && (
                                      <span className="px-2 py-0.5 rounded bg-brand-blue-100 text-brand-blue-500 font-bold text-[9px] font-mono tracking-wider">
                                        {prompt.aspectRatio}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-brand-blue-600 leading-relaxed font-sans break-all">{prompt.promptText}</p>
                                </div>
                                <button
                                  onClick={() => copyToClipboard(prompt.promptText, prompt.id)}
                                  className="p-2 rounded-lg hover:bg-brand-blue-100 text-brand-blue-400 transition-colors cursor-pointer shrink-0"
                                  title="Copiar prompt al portapapeles"
                                  aria-label={`Copiar prompt ${prompt.id}`}
                                >
                                  {copiedId === prompt.id ? (
                                    <Check className="h-4 w-4 text-brand-blue-500 shrink-0" />
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
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}