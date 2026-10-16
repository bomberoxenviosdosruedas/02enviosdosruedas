'use client';

import dynamic from 'next/dynamic';

// Al estar dentro de un archivo con 'use client', Next.js permite { ssr: false }
const LogisticaNetworkCanvas = dynamic(
  () => import('@/components/home/LogisticaNetworkCanvas'),
  {
    ssr: false,
    loading: () => <div aria-hidden="true" className="absolute inset-0 pointer-events-none" />,
  }
);

export default function NetworkCanvasWrapper() {
  return <LogisticaNetworkCanvas />;
}