'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';

interface Suggestion {
  description: string;
  place_id: string;
}

interface AddressAutocompleteProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSelectCoordinate: (coords: { lat: number; lng: number } | null) => void;
  required?: boolean;
  className?: string;
}

export default function AddressAutocomplete({
  id,
  placeholder,
  value,
  onChange,
  onSelectCoordinate,
  required = false,
  className = '',
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const sessionTokenRef = useRef<string | null>(null);
  const queryCacheRef = useRef<Map<string, Suggestion[]>>(new Map());

  // Iniciar un session token de Google Places API (New) por cada ciclo de búsqueda
  const getOrCreateSessionToken = () => {
    if (!sessionTokenRef.current) {
      sessionTokenRef.current =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    }
    return sessionTokenRef.current;
  };

  const resetSessionToken = () => {
    sessionTokenRef.current = null;
  };

  // Click outside listener to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchAddresses = async (searchQuery: string) => {
    const trimmed = searchQuery.trim();
    if (trimmed.length < 3) {
      setSuggestions([]);
      setSelectedIndex(-1);
      return;
    }

    const normalizedKey = trimmed.toLowerCase();
    if (queryCacheRef.current.has(normalizedKey)) {
      setSuggestions(queryCacheRef.current.get(normalizedKey)!);
      setIsOpen(true);
      setSelectedIndex(-1);
      return;
    }

    setIsLoading(true);

    try {
      const token = getOrCreateSessionToken();
      // Llamar al endpoint proxy local agrupando pulsaciones con sessionToken para optimizar facturación
      const url = `/api/places/autocomplete?input=${encodeURIComponent(trimmed)}&session_token=${encodeURIComponent(token)}`;

      const res = await fetch(url);
      const data = await res.json();
      
      if (data.status === 'OK' && data.predictions) {
        queryCacheRef.current.set(normalizedKey, data.predictions);
        setSuggestions(data.predictions);
        setIsOpen(true);
        setSelectedIndex(-1);
      } else {
        setSuggestions([]);
        setSelectedIndex(-1);
      }
    } catch (error) {
      console.error('Error fetching addresses from local API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);
    onSelectCoordinate(null);
    setSelectedIndex(-1);

    if (val.trim() === '') {
      setSuggestions([]);
      setIsOpen(false);
      resetSessionToken();
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchAddresses(val);
    }, 280);
  };

  const handleSelect = async (suggestion: Suggestion) => {
    onChange(suggestion.description);
    setIsOpen(false);
    setSuggestions([]);
    setSelectedIndex(-1);

    const token = sessionTokenRef.current;
    // Una vez seleccionado el destino, cerramos y reiniciamos el token para la siguiente búsqueda
    resetSessionToken();

    // Obtener las coordenadas a través del endpoint proxy de details cerrando la sesión de Places
    try {
      const sessionParam = token ? `&session_token=${encodeURIComponent(token)}` : '';
      const url = `/api/places/details?place_id=${encodeURIComponent(suggestion.place_id)}${sessionParam}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.status === 'OK' && data.result?.geometry?.location) {
        const { lat, lng } = data.result.geometry.location;
        onSelectCoordinate({ lat, lng });
      }
    } catch (error) {
      console.error('Error fetching place details from local API:', error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      const target = selectedIndex >= 0 && selectedIndex < suggestions.length ? suggestions[selectedIndex] : suggestions[0];
      if (target) {
        e.preventDefault();
        handleSelect(target);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          id={id}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={className}
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen && suggestions.length > 0}
          aria-controls={`${id}-suggestions`}
          aria-activedescendant={selectedIndex >= 0 ? `${id}-option-${selectedIndex}` : undefined}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-brand-blue-500 pointer-events-none" aria-hidden="true">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </div>
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul
          id={`${id}-suggestions`}
          role="listbox"
          className="absolute z-50 w-full mt-1 bg-brand-blue-500 border border-white/20 rounded-xl max-h-60 overflow-y-auto shadow-2xl text-white divide-y divide-white/10"
        >
          {suggestions.map((s, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <li
                key={s.place_id}
                id={`${id}-option-${idx}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(s)}
                className={`px-4 py-3 cursor-pointer flex items-start gap-3 transition-colors text-sm ${
                  isSelected ? 'bg-white/10 ring-1 ring-brand-yellow-500' : 'hover:bg-white/10'
                }`}
              >
                <MapPin className="h-5 w-5 text-brand-yellow-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">
                    {s.description.split(',')[0]}
                  </p>
                  <p className="text-xs text-brand-blue-50 mt-0.5 line-clamp-1 font-medium">
                    {s.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
