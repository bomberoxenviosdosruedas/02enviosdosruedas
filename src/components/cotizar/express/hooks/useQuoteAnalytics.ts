'use client';

import { trackAnalytics } from '@/src/lib/analytics';

/**
 * Hook para trackear eventos de analytics del cotizador
 * Centraliza todos los eventos de tracking para facilitar testing y mantenimiento
 */
export function useQuoteAnalytics() {
  const trackQuoteStart = (service: 'express' | 'lowcost') => {
    trackAnalytics.quoteStart(service);
  };

  const trackQuoteComplete = (params: {
    service: 'express' | 'lowcost';
    distanceKm: number;
    priceArs: number | 'consultar';
    result: 'price' | 'consultar';
  }) => {
    trackAnalytics.quoteComplete(params);
  };

  const trackWhatsAppClick = (source: string) => {
    trackAnalytics.whatsappClick(source);
  };

  const trackCtaClick = (ctaId: string, ctaLabel: string) => {
    trackAnalytics.ctaClick(ctaId, ctaLabel);
  };

  return {
    trackQuoteStart,
    trackQuoteComplete,
    trackWhatsAppClick,
    trackCtaClick,
  };
}

export type UseQuoteAnalyticsReturn = ReturnType<typeof useQuoteAnalytics>;