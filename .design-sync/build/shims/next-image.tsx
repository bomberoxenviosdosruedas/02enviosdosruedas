// Browser shim for next/image: a plain <img> (no Next image optimizer outside the app).
import React from 'react';
// Root-relative public/ paths the components use (e.g. /logo-envios-simplified.webp) don't exist
// outside the app; build-ds.mjs maps them to embedded data URIs.
import publicAssets from 'ds:public-assets';

type Src = string | { src: string; width?: number; height?: number };

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: Src;
  fill?: boolean;
  priority?: boolean;
  quality?: number | string;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
  overrideSrc?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(function Image(
  { src, fill, priority, quality, placeholder, blurDataURL, unoptimized, loader, overrideSrc, style, loading, ...rest },
  ref,
) {
  void quality; void placeholder; void blurDataURL; void unoptimized; void loader;
  const raw = overrideSrc ?? (typeof src === 'string' ? src : src.src);
  const url = (publicAssets as Record<string, string>)[raw] ?? raw;
  const fillStyle: React.CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%' }
    : {};
  return (
    <img
      ref={ref}
      src={url}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      style={{ ...fillStyle, ...style }}
      {...rest}
    />
  );
});

export default Image;
