import { LogosCarousel, type LogoItem } from '@enviosdosruedas/ui';
import { StoreIcon as Store, CoffeeIcon as Coffee, ShirtIcon as Shirt, CroissantIcon as Croissant, Flower2Icon as Flower2, BookOpenIcon as BookOpen, DumbbellIcon as Dumbbell, FishIcon as Fish } from '@enviosdosruedas/ui';

// Marquee of client logos. The repo ships no third-party client artwork, so
// these are wordmarks of plausible local Mar del Plata shops composed from
// lucide icons + brand type (rendered through the `logoSvg` slot, which the
// component tints brand-blue and greyscales at rest).
const Wordmark = ({ icon, name, sub }: { icon: React.ReactNode; name: string; sub: string }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
    {icon}
    <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1 }}>
      <span className="font-display uppercase text-base">{name}</span>
      <span className="font-subheading uppercase tracking-wider text-xs">{sub}</span>
    </span>
  </span>
);

const comercios: LogoItem[] = [
  { name: 'Almacén Güemes', logoSvg: <Wordmark icon={<Store className="h-6 w-6" />} name="Almacén Güemes" sub="Desde 1998" /> },
  { name: 'Café Playa Grande', logoSvg: <Wordmark icon={<Coffee className="h-6 w-6" />} name="Café Playa Grande" sub="Tostadores" /> },
  { name: 'Tejidos Mogotes', logoSvg: <Wordmark icon={<Shirt className="h-6 w-6" />} name="Tejidos Mogotes" sub="Punto MDQ" /> },
  { name: 'Panadería Constitución', logoSvg: <Wordmark icon={<Croissant className="h-6 w-6" />} name="La Constitución" sub="Panadería" /> },
  { name: 'Vivero Camet', logoSvg: <Wordmark icon={<Flower2 className="h-6 w-6" />} name="Vivero Camet" sub="Plantas y más" /> },
  { name: 'Pescadería del Puerto', logoSvg: <Wordmark icon={<Fish className="h-6 w-6" />} name="Del Puerto" sub="Pescadería" /> },
];

// Text-only items: when no logoUrl/logoSvg is given the component falls back
// to the name in Bebas Neue.
const tiendasOnline: LogoItem[] = [
  { name: 'Mate & Rambla' },
  { name: 'Librería Chauvín' },
  { name: 'Deco Batán' },
  { name: 'Surf Shop Varese' },
  { name: 'Alfajores del Faro' },
  { name: 'Bici Centro MDQ' },
];

const deportes: LogoItem[] = [
  { name: 'Gimnasio La Perla', logoSvg: <Wordmark icon={<Dumbbell className="h-6 w-6" />} name="Gym La Perla" sub="Fitness" /> },
  { name: 'Librería Güemes', logoSvg: <Wordmark icon={<BookOpen className="h-6 w-6" />} name="Librería Güemes" sub="Útiles y libros" /> },
  { name: 'Surf Shop Varese', logoSvg: <Wordmark icon={<Shirt className="h-6 w-6" />} name="Varese Surf" sub="Tabla y neoprene" /> },
  { name: 'Almacén Güemes', logoSvg: <Wordmark icon={<Store className="h-6 w-6" />} name="Almacén Güemes" sub="Desde 1998" /> },
];

export const ComerciosLocales = () => (
  <div style={{ maxWidth: 820 }}>
    <LogosCarousel logos={comercios} />
  </div>
);

export const SeccionConfianza = () => (
  <section className="bg-brand-blue-50" style={{ padding: '28px 0 16px', borderRadius: 16, maxWidth: 820 }}>
    <p className="font-subheading uppercase tracking-widest text-sm text-brand-blue-700 text-center">
      Comercios de Mar del Plata que ya envían con nosotros
    </p>
    <LogosCarousel logos={tiendasOnline} speed={40} />
  </section>
);

export const MarqueeLento = () => (
  <div style={{ maxWidth: 820 }}>
    <p className="font-display uppercase text-2xl text-brand-blue-700" style={{ padding: '0 8px' }}>Clientes Flex 2026</p>
    <LogosCarousel logos={deportes} speed={60} />
  </div>
);
