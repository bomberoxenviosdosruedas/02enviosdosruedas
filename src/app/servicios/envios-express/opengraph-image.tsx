import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { EXPRESS_TIERS } from '@/src/lib/pricing';
import { EXPRESS_WINDOW, MAX_WEIGHT_KG } from '@/src/lib/promises';

// Imagen para compartir la página en redes, generada con código en el build (sin APIs ni cuotas).
export const alt = `Envíos Express en moto en Mar del Plata: entrega en ${EXPRESS_WINDOW}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// ImageResponse solo acepta estilos inline: estos valores replican los tokens de globals.css
// (brand-blue-700, brand-blue-800, brand-yellow-500, brand-white-50). Nada más oscuro que #0950F6.
const BRAND = {
  blue: '#0950F6',
  blueLight: '#3570F8',
  yellow: '#FFEC01',
  white: '#FFFFFF',
} as const;

const RING_SIZES = [170, 280, 390, 500, 610];

export default async function Image() {
  // Sin logo: Satori no acepta WebP (/logo-envios-simplified.webp) y romper la regla
  // @next/next/no-img-element para usar <img> no está permitido (AGENTS.md).
  const [anton, bebas] = await Promise.all([
    readFile(join(process.cwd(), 'src/assets/fonts/Anton-Regular.ttf')),
    readFile(join(process.cwd(), 'src/assets/fonts/BebasNeue-Regular.ttf')),
  ]);
  const fromPrice = `$${EXPRESS_TIERS[0].price.toLocaleString('es-AR')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blue} 55%, ${BRAND.blueLight} 100%)`,
          color: BRAND.white,
          padding: '64px 72px',
        }}
      >
        {/* Anillos de distancia (motivo del tarifario), centrados en el punto de retiro */}
        {RING_SIZES.map((ringSize, idx) => (
          <div
            key={ringSize}
            style={{
              position: 'absolute',
              right: 200 - ringSize / 2,
              top: 315 - ringSize / 2,
              width: ringSize,
              height: ringSize,
              borderRadius: '50%',
              border:
                idx === RING_SIZES.length - 1
                  ? `3px dashed ${BRAND.yellow}`
                  : '2px solid rgba(255, 255, 255, 0.35)',
              background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.10)',
            }}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            right: 175,
            top: 290,
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: BRAND.yellow,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: BRAND.blue }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 720 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                background: BRAND.yellow,
                color: BRAND.blue,
                fontFamily: 'Bebas Neue',
                fontSize: 30,
                letterSpacing: 3,
                padding: '6px 22px',
                borderRadius: 999,
                transform: 'rotate(-1deg)',
              }}
            >
              MAR DEL PLATA · +7 AÑOS · 2026
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 28, fontFamily: 'Anton' }}>
              <span style={{ fontSize: 104, lineHeight: 1 }}>ENVÍOS EXPRESS</span>
              <span style={{ fontSize: 58, lineHeight: 1.1, marginTop: 6 }}>MENSAJERÍA EN MOTO</span>
              <span
                style={{
                  display: 'flex',
                  alignSelf: 'flex-start',
                  marginTop: 18,
                  fontSize: 66,
                  lineHeight: 1.05,
                  background: BRAND.yellow,
                  color: BRAND.blue,
                  padding: '4px 18px',
                  borderRadius: 12,
                  transform: 'rotate(-1deg)',
                }}
              >
                {`EN ${EXPRESS_WINDOW.toUpperCase()}`}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Bebas Neue' }}>
              <span style={{ fontSize: 40, letterSpacing: 2 }}>
                {`DESDE ${fromPrice} · HASTA ${MAX_WEIGHT_KG} KG`}
              </span>
              <span style={{ fontSize: 30, letterSpacing: 2, color: BRAND.yellow }}>
                FLOTA PROPIA · ENVIOSDOSRUEDAS.COM
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Anton', data: anton, style: 'normal', weight: 400 },
        { name: 'Bebas Neue', data: bebas, style: 'normal', weight: 400 },
      ],
    },
  );
}
