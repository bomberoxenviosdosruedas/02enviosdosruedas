'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react';
import {
  Menu, X, ChevronDown, Bike, ChevronRight, Phone,
  Home, Zap, TrendingDown, Clock, ShoppingBag, Info, HelpCircle, Share2, Mail
} from 'lucide-react';
import { CTANestedPill } from '@/components/ui';

// Dynamically import MobileNav so mobile drawer logic is loaded only on demand
const MobileNav = dynamic(() => import('./MobileNav'), {
  ssr: false,
});

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: { label: string; href: string; icon?: React.ComponentType<{ className?: string }> }[];
}

// Spring presets
const SPRING_NAV = { type: 'spring', stiffness: 400, damping: 28 } as const;
const SPRING_DROPDOWN = { type: 'spring', stiffness: 320, damping: 24 } as const;
const EASE_MOUNT = { duration: 0.45, ease: [0.25, 0.8, 0.25, 1] } as const;

export default function OptimizedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setActiveDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navItems: NavItem[] = [
    { label: 'Inicio', href: '/', icon: Home },
    {
      label: 'Servicios',
      icon: Bike,
      dropdownItems: [
        { label: 'Envíos Express', href: '/servicios/envios-express', icon: Zap },
        { label: 'Envíos LowCost', href: '/servicios/envios-lowcost', icon: TrendingDown },
        { label: 'Envíos Flex (MeLi)', href: '/servicios/enviosflex', icon: Clock },
        { label: 'E-Commerce & 3PL', href: '/servicios/plan-emprendedores', icon: ShoppingBag },
      ],
    },
    {
      label: 'Nosotros',
      icon: Info,
      dropdownItems: [
        { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', icon: Info },
        { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', icon: HelpCircle },
        { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', icon: Share2 },
      ],
    },
    { label: 'Contacto', href: '/contacto', icon: Mail },
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };

  // Stagger container for dropdown items
  const dropdownContainer: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8, scale: prefersReducedMotion ? 1 : 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 320,
        damping: 24,
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
        delayChildren: 0.02,
      },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 6,
      scale: prefersReducedMotion ? 1 : 0.97,
      transition: { duration: 0.15, ease: 'easeIn' as const },
    },
  };

  const dropdownItem: Variants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -8 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 400, damping: 28 } },
  };

  return (
    // Mount animation: slide down from -8px + fade
    <motion.header
      id="optimized-header"
      initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={EASE_MOUNT}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-blue-700/95 shadow-elevated border-b border-white/10 py-2.5 backdrop-blur-md'
          : 'bg-brand-blue-700 py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo — isotipo bounce + kinetic wordmark */}
          <Link
            href="/"
            id="nav-logo-opt"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl"
          >
            <div className="flex items-center gap-2.5">
              {/* Isotipo: bounce on group-hover via Framer */}
              <motion.div
                className="relative w-10 h-10 shrink-0"
                whileHover={prefersReducedMotion ? {} : { rotate: 12, scale: 1.08 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              >
                <Image
                  src="/logo-envios-simplified.webp"
                  alt="Isotipo Envíos Dos Ruedas"
                  fill={true}
                  className="object-contain"
                  priority
                />
              </motion.div>
              {/* Wordmark: kinetic font stretch via CSS utility */}
              <span className="font-display text-2xl sm:text-3xl tracking-tight leading-none uppercase select-none flex flex-col sm:flex-row sm:gap-1 items-start sm:items-center">
                <span className="text-white kinetic-font-stretch">Envíos</span>
                <span className="text-brand-yellow-500 kinetic-font-stretch">DosRuedas</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav-opt" className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.label)}
                onMouseLeave={() => item.dropdownItems && setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-base xl:text-lg font-subheading font-bold tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${
                      pathname === item.href
                        ? 'text-brand-yellow-500 bg-white/10 shadow-sm'
                        : 'text-white hover:text-brand-yellow-500 hover:bg-white/5'
                    }`}
                  >
                    {item.icon && <item.icon className="h-4.5 w-4.5 shrink-0 text-brand-yellow-500" />}
                    {/* Kinetic font stretch on nav link text */}
                    <span className="kinetic-font-stretch">{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    onFocus={() => item.dropdownItems && setActiveDropdown(item.label)}
                    onBlur={(e) => {
                      if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                        setActiveDropdown(null);
                      }
                    }}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                    className="px-4 py-2 text-base xl:text-lg font-subheading font-bold tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5 text-white hover:text-brand-yellow-500 hover:bg-white/5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                  >
                    {item.icon && <item.icon className="h-4.5 w-4.5 shrink-0 text-brand-yellow-500" />}
                    {/* Kinetic font stretch on dropdown trigger */}
                    <span className="kinetic-font-stretch">{item.label}</span>
                    <motion.span
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={SPRING_NAV}
                    >
                      <ChevronDown
                        className={`h-4.5 w-4.5 ${
                          activeDropdown === item.label ? 'text-brand-yellow-500' : 'text-brand-blue-200'
                        }`}
                      />
                    </motion.span>
                  </button>
                )}

                {/* Dropdown Menu — staggered spring items */}
                <AnimatePresence>
                  {item.dropdownItems && activeDropdown === item.label && (
                    <motion.div
                      variants={dropdownContainer}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 mt-2 w-64 bg-brand-blue-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/15 py-2.5 text-white overflow-hidden z-50"
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setActiveDropdown(null);
                        }
                      }}
                    >
                      <div className="flex flex-col gap-1 px-2">
                        {item.dropdownItems.map((subItem) => {
                          const SubIcon = subItem.icon || ChevronRight;
                          return (
                            <motion.div key={subItem.href} variants={dropdownItem}>
                              <Link
                                href={subItem.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all hover:bg-white/10 text-white hover:text-brand-yellow-500 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                              >
                                <div className="p-1.5 rounded-lg bg-white/10 text-brand-blue-100 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-900 transition-colors shrink-0">
                                  <SubIcon className="h-4 w-4" />
                                </div>
                                <span className="text-sm sm:text-base font-bold uppercase font-subheading tracking-wider leading-none text-white group-hover:text-brand-yellow-500 transition-colors">
                                  {subItem.label}
                                </span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Action & Phone */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+542236602699"
              className="flex items-center gap-2 text-white hover:text-brand-yellow-500 transition-colors font-mono text-sm font-bold"
            >
              <Phone className="h-4 w-4 text-brand-yellow-500" />
              <span>223 660-2699</span>
            </a>

            {/* CTA with idle pulse ring */}
            <div className="relative">
              {/* Idle pulse ring — draws attention without distraction */}
              {!prefersReducedMotion && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-brand-yellow-500/25 pointer-events-none"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                />
              )}
              <CTANestedPill href="/cotizar/express" variant="primary" size="default">
                Cotizá tu envío
              </CTANestedPill>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:+542236602699"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
              title="Llamar"
              aria-label="Llamar por teléfono"
            >
              <Phone className="h-5 w-5 text-brand-yellow-500" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle-opt"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={prefersReducedMotion ? {} : { rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={prefersReducedMotion ? false : { rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={prefersReducedMotion ? {} : { rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <MobileNav
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          navItems={navItems}
          activeDropdown={activeDropdown}
          onDropdownToggle={handleDropdownToggle}
        />
      )}
    </motion.header>
  );
}
