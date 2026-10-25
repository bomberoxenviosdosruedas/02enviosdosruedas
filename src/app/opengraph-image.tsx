import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Envíos DosRuedas: Mensajería en moto y logística e-commerce en Mar del Plata';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BRAND = {
  blue: '#0950F6',
  blueLight: '#3570F8',
  yellow: '#FFEC01',
  white: '#FFFFFF',
} as const;

export default async function Image() {
  const [anton, bebas] = await Promise.all([
    readFile(join(process.cwd(), 'src/assets/fonts/Anton-Regular.ttf')),
    readFile(join(process.cwd(), 'src/assets/fonts/BebasNeue-Regular.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blue} 60%, ${BRAND.blueLight} 100%)`,
          color: BRAND.white,
          padding: '64px 72px',
        }}
      >
        {/* Anillos de fondo decorativos */}
        <div
          style={{
            position: 'absolute',
            right: -100,
            top: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: -60,
            top: -60,
            width: 420,
            height: 420,
            borderRadius: '50%',
            border: `3px dashed ${BRAND.yellow}`,
            opacity: 0.6,
          }}
        />

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              fontFamily: 'Bebas Neue',
              fontSize: 26,
              color: BRAND.yellow,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            FLOTA PROPIA · TODO MAR DEL PLATA · 2026
          </span>
        </div>

        {/* Título y bajada */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontFamily: 'Anton',
              fontSize: 88,
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: BRAND.white,
            }}
          >
            ENVÍOS DOSRUEDAS
          </div>
          <div
            style={{
              fontFamily: 'Bebas Neue',
              fontSize: 38,
              lineHeight: 1,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: BRAND.yellow,
            }}
          >
            MENSAJERÍA EN MOTO Y LOGÍSTICA E-COMMERCE
          </div>
          <div
            style={{
              fontSize: 22,
              lineHeight: 1.4,
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: 800,
            }}
          >
            Envíos Express en el día, Mercado Envíos Flex, cadetería y distribución urbana en Mar del Plata.
          </div>
        </div>

        {/* Footer badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: 24,
          }}
        >
          <span
            style={{
              fontFamily: 'Bebas Neue',
              fontSize: 22,
              color: BRAND.white,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            BASE CENTRAL: FRIULI 1972 · MAR DEL PLATA
          </span>
          <span
            style={{
              fontFamily: 'Bebas Neue',
              fontSize: 22,
              color: BRAND.yellow,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            WWW.ENVIOSDOSRUEDAS.COM
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Anton',
          data: anton,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Bebas Neue',
          data: bebas,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
