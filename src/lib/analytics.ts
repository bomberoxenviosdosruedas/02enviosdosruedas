/**
 * Utilidades de analítica para Google Analytics 4 (GA4) y persistencia de UTMs.
 * Conforme a BL-25 (CAMP-01, CAMP-02, CAMP-03, CAMP-05).
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const UTM_STORAGE_KEY = 'envios_dosruedas_utms';

/**
 * Captura y persiste parámetros UTM de la URL en sessionStorage
 */
export function captureAndPersistUtms(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const utms: UtmParams = {};

    const utmKeys: (keyof UtmParams)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
    ];

    let hasUtm = false;
    utmKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        utms[key] = val;
        hasUtm = true;
      }
    });

    if (hasUtm) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms));
      return utms;
    }

    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UtmParams;
    }
  } catch {
    // SessionStorage inaccesible o en modo privado
  }

  return {};
}

/**
 * Obtiene los UTMs persistidos
 */
export function getStoredUtms(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as UtmParams) : {};
  } catch {
    return {};
  }
}

/**
 * Envía un evento a GA4 si window.gtag está disponible
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    const utms = getStoredUtms();
    window.gtag('event', eventName, {
      ...params,
      ...utms,
      page_path: window.location.pathname,
    });
  }
}

export const trackAnalytics = {
  quoteStart: (service: 'express' | 'lowcost') => {
    trackEvent('quote_start', { service });
  },
  quoteComplete: (data: {
    service: 'express' | 'lowcost';
    distanceKm: number;
    priceArs: number | 'consultar';
    result: 'price' | 'consultar';
    stops?: number;
  }) => {
    trackEvent('quote_complete', {
      service: data.service,
      distance_km: data.distanceKm,
      price_ars: data.priceArs === 'consultar' ? 0 : data.priceArs,
      result: data.result,
      stops: data.stops ?? 1,
    });
  },
  whatsappClick: (placement: string, customText?: string) => {
    trackEvent('whatsapp_click', {
      placement,
      button_text: customText ?? 'whatsapp',
    });
  },
  phoneClick: (phoneNumber: string, placement: string) => {
    trackEvent('phone_click', {
      phone_number: phoneNumber,
      placement,
    });
  },
  formSubmit: (formName: string) => {
    trackEvent('form_submit', { form_name: formName });
  },
  ctaClick: (ctaId: string, label: string) => {
    trackEvent('cta_click', { cta_id: ctaId, label });
  },
};
