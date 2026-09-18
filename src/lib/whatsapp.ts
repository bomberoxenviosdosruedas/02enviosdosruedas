/**
 * Helper unificado para generación de URLs de WhatsApp con trazabilidad y UTMs.
 * Conforme a BL-25 (CAMP-03, CAMP-05).
 */
import { getStoredUtms } from './analytics';

export const WHATSAPP_PHONE = '542236602699';

export interface BuildWhatsAppUrlOptions {
  message?: string;
  source?: string;
}

/**
 * Genera la URL de WhatsApp oficial con mensaje prearmado y trazabilidad UTM limpia.
 * Respeta el formato internacional y agrega etiqueta de origen [ref: ...] si existen UTMs.
 */
export function buildWhatsAppUrl({ message, source }: BuildWhatsAppUrlOptions = {}): string {
  const defaultMsg = 'Hola Envíos DosRuedas! Quiero consultar por un servicio de mensajería.';
  let text = message || defaultMsg;

  if (typeof window !== 'undefined') {
    const utms = getStoredUtms();
    const utmTag = utms.utm_source || utms.utm_campaign || source;
    if (utmTag && !text.includes('[ref:')) {
      text += ` [ref: ${utmTag}]`;
    }
  }

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
