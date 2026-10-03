import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

/**
 * Guard de copy: falla si una afirmación que el dueño negó vuelve al código.
 *
 * Por qué existe: entre setiembre y octubre de 2026 el sitio publicó "el máximo
 * que lleva la moto es 15 kg" durante meses. Ese número no lo respaldaba ninguna
 * fuente del dueño — venía del `.docx`, siempre como pregunta sin respuesta
 * registrada o como aserción del propio `.docx`. Peor: al entrar como constante
 * (`MAX_WEIGHT_KG`) la KB pasó a citarlo como dato verificado, y el bug se
 * volvió autorreferencial. Decisión del dueño 2026-09-30: la capacidad no
 * publica techo numérico. Este archivo es el que evita el siguiente.
 *
 * Lo que NO cubre, a propósito: "Factura A" y "punto de retiro" aparecen en el
 * sitio, pero siempre negados ("No emitimos Factura A", "no es punto de retiro").
 * Un guard ingenuo los marcaría como violación. Blindarlos exige parsear negación,
 * y un guard que da falsos positivos se desactiva; mejor dejarlo explícito.
 *
 * Tampoco bloquea "todo Mar del Plata": el sitio lo dice legítimamente, siempre
 * pegado al corte de 20 km. Bloquear la frase sola daría falsos positivos. Lo que
 * estaba mal era la lista de barrios al lado, que se llevaba a leer como zonas
 * tarifarias — el dueño niega que haya zonas establecidas.
 */

const SRC = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Archivos que contienen copy o datos publicables. */
const EXTENSIONES = /\.(tsx?|mdx|json|txt|md)$/;

/** Los propios guards se autoexcluyen: citan los términos para prohibirlos. */
const ES_TEST = /\.test\.tsx?$/;

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entrada) => {
    const completo = join(dir, entrada);
    if (statSync(completo).isDirectory()) return walk(completo);
    if (!EXTENSIONES.test(entrada) || ES_TEST.test(entrada)) return [];
    return [completo];
  });
}

const ARCHIVOS = walk(SRC);

interface Prohibido {
  readonly patron: RegExp;
  readonly motivo: string;
  /** Archivos donde el término sí corresponde (comentarios que lo explican). */
  readonly excepcion?: readonly string[];
}

const PROHIBIDOS: readonly Prohibido[] = [
  {
    // El bug que motivó este guard. Sin fuente del dueño: el CSV responde
    // "todo lo que pueda ser llevado en moto", sin cifra. La capacidad real
    // publicada es `STANDARD_WEIGHT_KG` (5 kg), que sí es del dueño.
    patron: /\b15\s?kg\b/i,
    motivo:
      'Techo de bulto de 15 kg sin fuente del dueño. La capacidad publicada es un solo ' +
      'umbral: STANDARD_WEIGHT_KG (5 kg) o 40 × 40 × 30 cm. Pasado ese umbral, el bulto se ' +
      'coordina aparte con recargo desde BULK_EXTRA_FROM_ARS.',
  },
  {
    patron: /60\s?[-–—]\s?90\s?min/i,
    motivo:
      'Promesa de "60 a 90 min" retirada por el dueño ("ESTO ES FALSO", .docx §4). ' +
      'Lo vigente es EXPRESS_WINDOW = "franja horaria de 3 hs" a elección.',
  },
  {
    patron: /en\s*3\s*hs?\b/i,
    motivo:
      'No usar "en 3 hs" — se lee como duración. Lo correcto: "franja de 3 hs" o EXPRESS_WINDOW_SHORT.',
  },
  {
    patron: /menos\s*de\s*2\s*h/i,
    motivo:
      'No usar "menos de 2 h" — Express es franja de 3 hs a elección con 2 hs de anticipación.',
  },
  {
    patron: /(agrupad[oa]|por\s*lote)/i,
    motivo:
      'LowCost no es "agrupado" ni "por lote". Es reparto programado en el día, sin franja: corte 13:00, entrega <19:00.',
    excepcion: [
      'app\\api\\assistant\\route.ts',
      'app\\servicios\\empresas-cuenta-corriente\\page.tsx',
      'app\\servicios\\page.tsx',
      'components\\home\\EmprendedoresHome.tsx',
      'components\\nosotros\\sobre-nosotros\\AboutTimeline.tsx',
      'components\\servicios\\emprendedores\\EmprendedoresPricing.tsx',
    ] as const,
  },
  {
    patron: /Factura\s*A\b(?!.*no)/i,
    motivo:
      'No afirmar Factura A (no se emite). Estándar es Factura C; solo corporativas grandes emiten A.',
    excepcion: [
      'app\\api\\assistant\\route.ts',
      'app\\servicios\\empresas-cuenta-corriente\\page.tsx',
      'components\\servicios\\emprendedores\\EmprendedoresBenefits.tsx',
    ] as const,
  },
  {
    patron: /rendici[óo]n inmediata/i,
    motivo:
      'El dueño niega la garantía de rendición inmediata. La redacción honesta es ' +
      '"en el día, al día siguiente o semanal, según lo acordado".',
  },
  {
    patron: /DropOFF.*-?20%/i,
    motivo:
      'DropOFF -20% solo en E-commerce 24HS / Plan Inicial DropOFF. No en Express, LowCost, Flex, 3PL ni Cuenta Corriente.',
    excepcion: [
      'app\\servicios\\deposito-fulfillment\\page.tsx',
      'app\\servicios\\page.tsx',
      'components\\servicios\\emprendedores\\EmprendedoresFeatures.tsx',
      'components\\servicios\\emprendedores\\EmprendedoresPricing.tsx',
    ] as const,
  },
  {
    patron: /40\s*[x×]\s*40\s*[x×]\s*40/i,
    motivo:
      'Dimensiones estándar son 40 × 40 × 30 cm (corrección dueño oct 2026). No 40 × 40 × 40.',
  },
  {
    patron: /Math\.ceil\s*\([^)]*\)\s*[*×]\s*pricePerKm/i,
    motivo:
      'Excedente >10km usa precio lineal (distanceKm × pricePerKm), NO Math.ceil. Corrección dueño oct 2026.',
  },
  {
    patron: /sin sorpresas/i,
    motivo:
      'Prometer "sin sorpresas" mientras el cotizador publica cinco recargos (lluvia, ' +
      'espera, parada extra, bulto mayor, contrareembolso). La promesa que sí se ' +
      'sostiene: los recargos tienen monto publicado y se informan antes de confirmar.',
  },
];

/** Devuelve archivo:línea de cada coincidencia, para que el error sea accionable. */
function buscar(archivo: string, patron: RegExp): string[] {
  const fuente = readFileSync(archivo, 'utf8').split(/\r?\n/);
  const salida: string[] = [];
  fuente.forEach((linea, i) => {
    // Se ignoran los comentarios: el código puede NOMBRAR el término para
    // explicar por qué está prohibido (como este archivo y promises.ts).
    const sinComentarios = linea.replace(/\/\/.*$/, '').replace(/^\s*\*.*$/, '');
    if (patron.test(sinComentarios)) salida.push(`${relative(SRC, archivo)}:${i + 1}`);
  });
  return salida;
}

describe('Guard de copy — afirmaciones que el dueño negó', () => {
  it('el guard realmente escanea archivos (si no, pasa en falso)', () => {
    expect(ARCHIVOS.length).toBeGreaterThan(50);
  });

  it.each(PROHIBIDOS.map((p) => [p.patron.source, p] as const))(
    'ningún archivo publica /%s/',
    (_fuente, { patron, motivo, excepcion }) => {
      const permitidos = new Set(excepcion ?? []);
      const hallazgos = ARCHIVOS.filter((a) => !permitidos.has(relative(SRC, a)))
        .flatMap((a) => buscar(a, patron))
        .map((ref) => `${ref} — ${motivo}`);

      expect(hallazgos).toEqual([]);
    }
  );
});