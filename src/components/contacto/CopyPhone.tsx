'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Copy, Phone } from 'lucide-react';
import { SUPPORT_PHONE } from '@/src/lib/promises';

const FEEDBACK_MS = 2000;

/**
 * Copia por `execCommand` cuando no hay Clipboard API (contexto no seguro,
 * navegadores viejos). Devuelve si la copia se hizo.
 */
function legacyCopy(text: string): boolean {
  if (typeof document === 'undefined') return false;
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.top = '0';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  document.body.removeChild(field);
  return ok;
}

/** Selecciona el texto del nodo para que el usuario lo copie a mano (Ctrl+C). */
function selectNode(node: HTMLElement | null) {
  if (!node || typeof window === 'undefined') return;
  const range = document.createRange();
  range.selectNodeContents(node);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

type Status = 'idle' | 'copied' | 'manual';

const FEEDBACK: Record<Status, string> = {
  idle: '',
  copied: 'Teléfono copiado al portapapeles.',
  manual: 'No pudimos copiarlo: seleccioná el número y copialo.',
};

/**
 * Botón que publica la línea directa de la base y la copia al portapapeles.
 *
 * Isla cliente mínima: el hero es un Server Component y sólo este control
 * necesita estado. El número nunca se recalcula — sale de `SUPPORT_PHONE`.
 * Si las dos vías de copiado fallan, el texto queda seleccionado para que la
 * persona lo copie a mano, en vez de fingir que se copió.
 */
export default function CopyPhone({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  const handleCopy = useCallback(async () => {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(SUPPORT_PHONE);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) ok = legacyCopy(SUPPORT_PHONE);
    if (!ok) selectNode(labelRef.current);

    setStatus(ok ? 'copied' : 'manual');
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus('idle'), FEEDBACK_MS);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg font-mono text-sm sm:text-base text-white tabular-nums transition-colors hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 ${className}`}
      >
        <Phone className="h-4 w-4 shrink-0 text-brand-yellow-500" aria-hidden="true" />
        <span ref={labelRef} className="select-all">
          {SUPPORT_PHONE}
        </span>
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-brand-yellow-500"
          aria-hidden="true"
        >
          {status === 'copied' ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </span>
      </button>
      <span aria-live="polite" className="sr-only">
        {FEEDBACK[status]}
      </span>
    </>
  );
}
