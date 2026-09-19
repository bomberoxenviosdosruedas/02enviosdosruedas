// Browser shim for next/link: a plain <a>, since there is no Next router outside the app.
import React from 'react';

type Href = string | { pathname?: string | null; hash?: string | null };

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: Href;
  prefetch?: boolean | null;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  legacyBehavior?: boolean;
  locale?: string | false;
}

const toUrl = (href: Href): string =>
  typeof href === 'string' ? href : `${href.pathname ?? ''}${href.hash ? `#${href.hash}` : ''}` || '#';

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, prefetch, replace, scroll, shallow, passHref, legacyBehavior, locale, ...rest },
  ref,
) {
  void prefetch; void replace; void scroll; void shallow; void passHref; void legacyBehavior; void locale;
  return <a ref={ref} href={toUrl(href)} {...rest} />;
});

export default Link;
