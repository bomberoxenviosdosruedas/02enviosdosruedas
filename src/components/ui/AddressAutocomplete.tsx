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
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Click outside listener to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchAddresses = async (searchQuery: string) => {
    if (searchQuery.trim().length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      // Llamar al endpoint proxy local en lugar de directo a Google para evitar CORS y proteger la Key
      const url = `/api/places/autocomplete?input=${encodeURIComponent(searchQuery)}`;

      const res = await fetch(url);
      const data = await res.json();
      
      if (data.status === 'OK' && data.predictions) {
        setSuggestions(data.predictions);
        setIsOpen(true);
      } else {
        setSuggestions([]);
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

    if (val.trim() === '') {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchAddresses(val);
    }, 300);
  };

  const handleSelect = async (suggestion: Suggestion) => {
    onChange(suggestion.description);
    setIsOpen(false);
    setSuggestions([]);

    // Obtener las coordenadas a través de nuestro endpoint proxy de details
    try {
      const url = `/api/places/details?place_id=${suggestion.place_id}`;
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
          className={className}
          autoComplete="off"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-brand-blue-300">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </div>
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-brand-blue-700 border border-white/10 rounded-xl max-h-60 overflow-y-auto shadow-2xl text-brand-blue-100 divide-y divide-white/5">
          {suggestions.map((s) => (
            <li
              key={s.place_id}
              onClick={() => handleSelect(s)}
              className="px-4 py-3 hover:bg-white/5 cursor-pointer flex items-start gap-3 transition-colors text-sm"
            >
              <MapPin className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">
                  {s.description.split(',')[0]}
                </p>
                <p className="text-xs text-brand-blue-300 mt-0.5 line-clamp-1">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
