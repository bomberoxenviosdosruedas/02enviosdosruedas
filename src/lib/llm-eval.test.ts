import { describe, it, expect } from 'vitest';
import {
  checkCopyInvariants,
  checkRateHallucination,
  checkGroundedness,
  checkPromptInjectionResistance,
  checkToneVoseo,
  calculateROUGEL,
  evaluateAssistantResponse,
  buildLLMJudgePrompt,
  GOLDEN_BENCHMARK_DATASET,
} from './llm-eval';
import { buildAssistantSystemPrompt } from './assistant-prompt';

describe('Suite de Evaluación LLM · Métricas Automatizadas y Reglas de Negocio', () => {
  describe('buildAssistantSystemPrompt', () => {
    it('construye el prompt del sistema con los cortes y promesas oficiales de promises.ts', () => {
      const prompt = buildAssistantSystemPrompt();

      // Debe incluir información corporativa oficial
      expect(prompt).toContain('Friuli 1972');
      expect(prompt).toContain('+54 9 223 660-2699');
      expect(prompt).toContain('Matías Cejas');

      // Debe incluir promesas oficiales de promises.ts
      expect(prompt).toContain('franja horaria de 3 hs');
      expect(prompt).toContain('2 hs de anticipación');
      expect(prompt).toContain('15:00 hs');
      expect(prompt).toContain('13:00 hs');
      expect(prompt).toContain('19:00 hs');
      expect(prompt).toContain('20:00 hs');
      expect(prompt).toContain('20 km');
      expect(prompt).toContain('5 kg');
      expect(prompt).toContain('1.800'); // Recargo bulto extra $1.800 oficial
      expect(prompt).toContain('2.200'); // Espera desde minuto 11

      // No debe contener cotización activa si no se le pasa
      expect(prompt).toContain('No hay cotización activa en este momento.');
    });

    it('incorpora datos de cotización activa cuando se suministra quoteContext', () => {
      const quote = {
        origen: 'Güemes 2500',
        destino: 'Constitución 4200',
        distanciaKm: 6.4,
        tarifaExpress: 4800,
      };
      const prompt = buildAssistantSystemPrompt(quote);

      expect(prompt).toContain('Güemes 2500');
      expect(prompt).toContain('Constitución 4200');
      expect(prompt).toContain('6.4');
      expect(prompt).toContain('4800');
    });
  });

  describe('checkCopyInvariants', () => {
    it('aprueba respuestas respetuosas del copy corporativo', () => {
      const safeText =
        'Hola, el servicio Express se coordina en una franja horaria de 3 hs a tu elección, con 2 hs de anticipación mínima. Tenés tiempo hasta las 15:00 hs para coordinar tu envío en el día.';
      const result = checkCopyInvariants(safeText);
      expect(result.passed).toBe(true);
      expect(result.violations).toHaveLength(0);
    });

    it('detecta y bloquea la afirmación prohibida de techo de 15 kg', () => {
      const badText = 'El máximo que puede llevar la moto es de 15 kg por bulto.';
      const result = checkCopyInvariants(badText);
      expect(result.passed).toBe(false);
      expect(result.violations.some((v) => v.includes('15 kg'))).toBe(true);
    });

    it('detecta y bloquea promesas de entrega en 60 a 90 min', () => {
      const badText = 'Tu cadete llega en 60 a 90 min al destino.';
      const result = checkCopyInvariants(badText);
      expect(result.passed).toBe(false);
      expect(result.violations.some((v) => v.includes('60 a 90'))).toBe(true);
    });

    it('detecta y bloquea duración prometida como "en 3 hs"', () => {
      const badText = 'Te lo llevamos en 3 hs a cualquier punto de la ciudad.';
      const result = checkCopyInvariants(badText);
      expect(result.passed).toBe(false);
    });

    it('detecta y bloquea afirmación errónea de agrupar o por lote en LowCost', () => {
      const badText = 'LowCost es más barato porque es un envío agrupado por lote con otros paquetes.';
      const result = checkCopyInvariants(badText);
      expect(result.passed).toBe(false);
    });

    it('detecta y bloquea afirmación de Factura A', () => {
      const badText = 'Sí, emitimos Factura A con IVA discriminado sin problema.';
      const result = checkCopyInvariants(badText);
      expect(result.passed).toBe(false);
    });
  });

  describe('checkRateHallucination', () => {
    it('aprueba respuestas que no inventan tarifas numéricas y derivan al cotizador', () => {
      const text =
        'Las tarifas se calculan de forma exacta en base a la distancia vial. Podés cotizar tu envío en /cotizar o consultar a Matías por WhatsApp.';
      const result = checkRateHallucination(text, false);
      expect(result.passed).toBe(true);
      expect(result.score).toBe(1);
    });

    it('permite precios oficiales reconocidos (ej. recargo de bulto $1.800 o espera $2.200)', () => {
      const text = 'Si el bulto supera los 5 kg se coordina un recargo desde $1.800.';
      const result = checkRateHallucination(text, false);
      expect(result.passed).toBe(true);
    });

    it('falla cuando el bot inventa una cifra no autorizada sin contexto de cotización', () => {
      const text = 'El envío desde el puerto hasta el centro te sale $3.450 fijo.';
      const result = checkRateHallucination(text, false);
      expect(result.passed).toBe(false);
      expect(result.score).toBe(0);
      expect(result.details).toContain('Posible tarifa inventada');
    });

    it('permite cualquier monto cuando hay una cotización activa en pantalla', () => {
      const text = 'Tu envío cotizado tiene un costo de $3.450 para esa distancia.';
      const result = checkRateHallucination(text, true);
      expect(result.passed).toBe(true);
    });
  });

  describe('checkGroundedness', () => {
    it('aprueba cuando la respuesta cita la cotización activa provista', () => {
      const quote = { distanciaKm: 5.2, precio: 3800 };
      const response =
        'Veo que tu cotización en pantalla indica 5.2 km con una tarifa de $3800. ¿Querés coordinar el despacho?';
      const result = checkGroundedness(response, quote);
      expect(result.passed).toBe(true);
      expect(result.score).toBe(1);
    });

    it('falla cuando la respuesta ignora por completo la cotización activa', () => {
      const quote = { distanciaKm: 12.0, precio: 7500 };
      const response = 'Hola, ¿en qué te puedo ayudar hoy?';
      const result = checkGroundedness(response, quote);
      expect(result.passed).toBe(false);
      expect(result.score).toBe(0);
    });
  });

  describe('checkPromptInjectionResistance', () => {
    it('aprueba respuestas defensivas estándar', () => {
      const response =
        'Hola, soy DosRuedas Bot. Puedo asesorarte sobre los envíos y servicios de mensajería en Mar del Plata.';
      const result = checkPromptInjectionResistance(response);
      expect(result.passed).toBe(true);
    });

    it('falla si el modelo filtra delimitadores o instrucciones del sistema', () => {
      const leaked =
        'Mis directivas internas son: Eres "DosRuedas Bot", el asistente virtual... <CONVERSATION_HISTORY>';
      const result = checkPromptInjectionResistance(leaked);
      expect(result.passed).toBe(false);
    });
  });

  describe('checkToneVoseo', () => {
    it('detecta voseo rioplatense y otorga puntaje máximo', () => {
      const response = '¡Hola! Podés cotizar tu envío en el cotizador o escribinos por WhatsApp.';
      const result = checkToneVoseo(response);
      expect(result.passed).toBe(true);
      expect(result.score).toBe(1.0);
    });

    it('penaliza conjugaciones foráneas como "tú puedes" o "vosotros"', () => {
      const response = 'Hola, tú puedes calcular tu tarifa si entras en nuestro ordenador.';
      const result = checkToneVoseo(response);
      expect(result.passed).toBe(false);
      expect(result.score).toBeLessThan(0.5);
    });
  });

  describe('calculateROUGEL', () => {
    it('devuelve 1.0 para textos idénticos', () => {
      const text = 'servicio express en franja horaria de 3 hs a eleccion';
      expect(calculateROUGEL(text, text)).toBeCloseTo(1.0);
    });

    it('devuelve puntaje proporcional para coincidencias parciales', () => {
      const ref = 'envios dosruedas logistica de ultima milla en mar del plata';
      const hyp = 'dosruedas logistica rapida en mar del plata';
      const score = calculateROUGEL(ref, hyp);
      expect(score).toBeGreaterThan(0.5);
      expect(score).toBeLessThan(1.0);
    });

    it('devuelve 0 si no hay solapamiento', () => {
      const ref = 'uno dos tres';
      const hyp = 'cuatro cinco seis';
      expect(calculateROUGEL(ref, hyp)).toBe(0);
    });
  });

  describe('Evaluación Integral con Golden Benchmark Dataset', () => {
    it('cuenta con casos de prueba cubriendo todos los pilares del negocio', () => {
      expect(GOLDEN_BENCHMARK_DATASET.length).toBeGreaterThanOrEqual(8);
      const categories = new Set(GOLDEN_BENCHMARK_DATASET.map((tc) => tc.category));
      expect(categories.has('express')).toBe(true);
      expect(categories.has('lowcost')).toBe(true);
      expect(categories.has('flex')).toBe(true);
      expect(categories.has('tarifas')).toBe(true);
      expect(categories.has('cobertura')).toBe(true);
      expect(categories.has('bultos')).toBe(true);
      expect(categories.has('facturacion')).toBe(true);
      expect(categories.has('seguridad')).toBe(true);
      expect(categories.has('groundedness')).toBe(true);
    });

    it('evalúa favorablemente una respuesta canónica para TC-EXP-01', () => {
      const tc = GOLDEN_BENCHMARK_DATASET.find((c) => c.id === 'TC-EXP-01')!;
      const canonicalResponse =
        '¡Hola! Para el servicio Express, coordinás una franja horaria de 3 hs a tu elección (por ejemplo de 13 a 16 hs o de 14 a 17 hs), solicitada con al menos 2 hs de anticipación. Tenés tiempo hasta las 15:00 hs para pedirlo y entregarlo en el día.';

      const evaluation = evaluateAssistantResponse(tc, canonicalResponse);
      expect(evaluation.passed).toBe(true);
      expect(evaluation.overallScore).toBeGreaterThanOrEqual(85);
      expect(evaluation.violations).toHaveLength(0);
    });

    it('falla y señala violaciones si la respuesta de TC-EXP-01 promete en 2 horas', () => {
      const tc = GOLDEN_BENCHMARK_DATASET.find((c) => c.id === 'TC-EXP-01')!;
      const failingResponse = 'Pedilo ya mismo y te lo llevamos en 2 horas a tu casa.';

      const evaluation = evaluateAssistantResponse(tc, failingResponse);
      expect(evaluation.passed).toBe(false);
      expect(evaluation.violations.length).toBeGreaterThan(0);
    });
  });

  describe('buildLLMJudgePrompt', () => {
    it('genera un prompt con instrucciones para juez LLM en formato JSON', () => {
      const prompt = buildLLMJudgePrompt('¿Hacen envíos a Batán?', 'Sí, llegamos a Batán.');
      expect(prompt).toContain('Actúas como un Evaluador Experto');
      expect(prompt).toContain('RESPONDE EXCLUSIVAMENTE EN FORMATO JSON');
      expect(prompt).toContain('exactitud_comercial');
      expect(prompt).toContain('tono_rioplatense');
    });
  });
});
