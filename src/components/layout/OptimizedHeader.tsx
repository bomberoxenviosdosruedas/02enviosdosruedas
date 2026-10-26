'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react';
import {
  Menu, X, ChevronDown, Bike, ChevronRight, Phone,
  Home, Zap, TrendingDown, Clock, Info, HelpCircle, Share2, Mail,
  LayoutGrid, Building2, Package, Store, Search, UtensilsCrossed
} from 'lucide-react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const PHONE_HREF = `tel:+${SUPPORT_PHONE.replace(/\D/g, '')}`;
const PHONE_DISPLAY_SHORT = SUPPORT_PHONE.replace(/^\+54\s*/, '');

const MobileNav = dynamic(() => import('./MobileNav'), { ssr: false });

export interface NavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: { label: string; href: string; icon?: React.ComponentType<{ className?: string }> }[];
}

const EASE_MOUNT = { duration: 0.45, ease: [0.25, 0.8, 0.25, 1] } as const;

// NAV ITEMS - Static data, move outside component to avoid recreation on every render
const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/', icon: Home },
  {
    label: 'Servicios',
    icon: Bike,
    dropdownItems: [
      { label: 'Todos los Servicios', href: '/servicios', icon: LayoutGrid },
      { label: 'Envíos Express', href: '/servicios/envios-express', icon: Zap },
      { label: 'Envíos LowCost', href: '/servicios/envios-lowcost', icon: TrendingDown },
      { label: 'Envíos Flex (MeLi)', href: '/servicios/enviosflex', icon: Clock },
      { label: 'Cuenta Corriente Flexible', href: '/servicios/empresas-cuenta-corriente', icon: Building2 },
      { label: 'E-commerce 24HS', href: '/servicios#ecommerce-24hs', icon: Package },
      { label: 'E-commerce Same Day', href: '/servicios/deposito-fulfillment', icon: Store },
    ],
  },
  {
    label: 'Plataformas',
    icon: LayoutGrid,
    dropdownItems: [
      { label: 'Logística DosRuedas', href: '/logistica-dosruedas', icon: Search },
      { label: 'MarDelivery Gastronomía', href: '/mardelivery', icon: UtensilsCrossed },
    ],
  },
  {
    label: 'Nosotros',
    icon: Info,
    dropdownItems: [
      { label: 'Portal Nosotros', href: '/nosotros', icon: LayoutGrid },
      { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', icon: Info },
      { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', icon: HelpCircle },
      { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', icon: Share2 },
    ],
  },
  { label: 'Contacto', href: '/contacto', icon: Mail },
];

export default function OptimizedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const prevPathRef = useRef(pathname);

  // Memoize dropdown variants to avoid recreation on every render
  const dropdownContainer = useMemo<Variants>(() => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 4, scale: prefersReducedMotion ? 1 : 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: 'spring', stiffness: 420, damping: 28, staggerChildren: prefersReducedMotion ? 0 : 0.03, delayChildren: 0.01 },
    },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : 4, scale: prefersReducedMotion ? 1 : 0.97, transition: { duration: 0.14, ease: [0.23, 1, 0.32, 1] } },
  }), [prefersReducedMotion]);

  const dropdownItem = useMemo<Variants>(() => ({
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -8 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 400, damping: 28 } },
  }), [prefersReducedMotion]);

  const handleDropdownToggle = useCallback((label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  }, []);

  const handleCloseMobileNav = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIX ESLINT react-hooks/set-state-in-effect: cierra drawer al cambiar ruta sin setState sincrónico en effect
  // Usamos ref + async microtask para no ser sincrónico
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      // Solo si está abierto, lo cerramos en próximo tick (no sincrónico)
      if (isOpen || activeDropdown) {
        const id = setTimeout(() => {
          setIsOpen(false);
          setActiveDropdown(null);
        }, 0);
        return () => clearTimeout(id);
      }
    }
  }, [pathname, isOpen, activeDropdown]);

  // Cerrar desplegable desktop con Escape
  useEffect(() => {
    if (!activeDropdown) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDropdown]);

  // Lock scroll robusto
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  return (
    <>
      <header
        id="optimized-header"
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,border-color,box-shadow,padding] duration-300 ${
          scrolled ? 'bg-brand-blue-500/95 shadow-elevated border-b border-white/10 py-2.5 backdrop-blur-md' : 'bg-brand-blue-500 py-4 border-b border-transparent'
        }`}
      >
        <motion.div initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={EASE_MOUNT} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" id="nav-logo-opt" aria-current={pathname === '/' ? 'page' : undefined} className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl">
              <div className="flex items-center gap-2.5">
                <motion.div className="relative w-10 h-10 shrink-0" whileHover={prefersReducedMotion ? {} : { rotate: 8, scale: 1.04 }} whileTap={prefersReducedMotion ? {} : { scale: 0.97 }} transition={{ type: 'spring', duration: 0.22, bounce: 0.15 }}>
                  <Image
                    src="/logo-envios-simplified.webp"
                    alt="Logo Envíos Dos Ruedas"
                    fill
                    sizes="40px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
                <span className="font-display text-2xl sm:text-3xl tracking-tight leading-none uppercase select-none flex flex-col sm:flex-row sm:gap-1 items-start sm:items-center">
                  <span className="text-white kinetic-font-stretch">Envíos</span>
                  <span className="text-brand-yellow-500 kinetic-font-stretch">DosRuedas</span>
                </span>
              </div>
            </Link>

            <nav id="desktop-nav-opt" aria-label="Navegación principal" className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const isDirectActive = item.href ? pathname === item.href : false;
                const isGroupActive = item.dropdownItems
                  ? item.dropdownItems.some((sub) => pathname === sub.href.split('#')[0] && sub.href !== '/servicios#ecommerce-24hs')
                  : false;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                        setActiveDropdown((prev) => (prev === item.label ? null : prev));
                      }
                    }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        aria-current={isDirectActive ? 'page' : undefined}
                        className={`px-4 py-2.5 rounded-xl text-base font-subheading uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${
                          isDirectActive
                            ? 'text-brand-yellow-500 bg-white/10'
                            : 'text-white hover:text-brand-yellow-500 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleDropdownToggle(item.label)}
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.label}
                        className={`px-4 py-2.5 rounded-xl text-base font-subheading uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${
                          isGroupActive
                            ? 'text-brand-yellow-500 bg-white/10'
                            : 'text-white hover:text-brand-yellow-500 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                    )}
                    <AnimatePresence>
                      {item.dropdownItems && activeDropdown === item.label && (
                        <motion.div
                          variants={dropdownContainer}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          style={{ transformOrigin: 'top left' }}
                          className="absolute left-0 pt-2 w-64 z-50"
                        >
                          <div className="bg-brand-blue-500 rounded-2xl shadow-2xl border border-white/15 py-2.5 text-white overflow-hidden">
                            <div className="flex flex-col gap-1 px-2">
                              {item.dropdownItems.map((subItem) => {
                                const SubIcon = subItem.icon || ChevronRight;
                                const isSubActive = pathname === subItem.href;
                                return (
                                  <motion.div key={subItem.href} variants={dropdownItem}>
                                    <Link
                                      href={subItem.href}
                                      aria-current={isSubActive ? 'page' : undefined}
                                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors hover:bg-white/10 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${
                                        isSubActive ? 'text-brand-yellow-500 bg-white/10' : 'text-white hover:text-brand-yellow-500'
                                      }`}
                                    >
                                      <div className="p-1.5 rounded-lg bg-white/10 text-brand-blue-50 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-500 transition-colors shrink-0" aria-hidden="true">
                                        <SubIcon className="h-4 w-4" />
                                      </div>
                                      <span className="text-base font-bold uppercase font-subheading tracking-wider leading-none">{subItem.label}</span>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <a
                href={PHONE_HREF}
                onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'header_desktop')}
                className="flex items-center gap-2 text-white hover:text-brand-yellow-500 transition-colors font-mono text-base font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-lg px-1"
              >
                <Phone className="h-4 w-4 text-brand-yellow-500" aria-hidden="true" />
                <span>{PHONE_DISPLAY_SHORT}</span>
              </a>
              <div className="relative">
                {!(pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/cotizar')) && !prefersReducedMotion && (
                  <motion.span className="absolute inset-0 rounded-full bg-brand-yellow-500/25 pointer-events-none" animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }} />
                )}
                <CTANestedPill
                  id="header_cta"
                  href="/cotizar"
                  variant={(pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/cotizar')) ? 'outline' : 'primary'}
                  size="default"
                  className={
                    (pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/cotizar'))
                      ? 'border-white/40 text-white hover:bg-white/10 hover:border-white focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-brand-blue-500'
                      : ''
                  }
                  iconClassName={
                    (pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/cotizar'))
                      ? 'text-brand-yellow-500 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-500'
                      : undefined
                  }
                >
                  Cotizá tu envío
                </CTANestedPill>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <a
                href={PHONE_HREF}
                onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'header_mobile')}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 transition-all min-w-11 min-h-11 flex items-center justify-center"
                aria-label="Llamar"
              >
                <Phone className="h-5 w-5 text-brand-yellow-500" aria-hidden="true" />
              </a>
              <button onClick={() => setIsOpen(!isOpen)} id="mobile-menu-toggle-opt" className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 transition-all cursor-pointer min-w-11 min-h-11 flex items-center justify-center" aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isOpen} aria-controls="mobile-navigation-dialog">
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span key="close" initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={prefersReducedMotion ? {} : { rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X className="h-6 w-6" /></motion.span>
                  ) : (
                    <motion.span key="menu" initial={prefersReducedMotion ? false : { rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={prefersReducedMotion ? {} : { rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu className="h-6 w-6" /></motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>{isOpen && <MobileNav isOpen={isOpen} onClose={handleCloseMobileNav} navItems={NAV_ITEMS} activeDropdown={activeDropdown} onDropdownToggle={handleDropdownToggle} />}</AnimatePresence>
    </>
  );
}
