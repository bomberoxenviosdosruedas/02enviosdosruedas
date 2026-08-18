'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
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
  dropdownItems?: { label: string; href: string; description?: string; icon?: React.ComponentType<{ className?: string }> }[];
}

export default function OptimizedHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
        { label: 'Envíos Express', href: '/servicios/envios-express', description: 'En el día en menos de 2 horas', icon: Zap },
        { label: 'Envíos LowCost', href: '/servicios/envios-lowcost', description: 'Económico y programado Same-Day', icon: TrendingDown },
        { label: 'Envíos Flex (MeLi)', href: '/servicios/enviosflex', description: 'Socio oficial Mercado Envíos Flex', icon: Clock },
        { label: 'E-Commerce & 3PL', href: '/servicios/plan-emprendedores', description: 'Fulfillment y cadetería para PyMEs', icon: ShoppingBag },
      ],
    },
    {
      label: 'Nosotros',
      icon: Info,
      dropdownItems: [
        { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', description: 'Más de 7 años recorriendo Mar del Plata', icon: Info },
        { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', description: 'Tarifas, zonas y consultas', icon: HelpCircle },
        { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', description: 'Comunidad activa en movimiento', icon: Share2 },
      ],
    },
    { label: 'Contacto', href: '/contacto', icon: Mail },
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };

  return (
    <header
      id="optimized-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-blue-700/95 shadow-elevated border-b border-white/10 py-3 backdrop-blur-md'
          : 'bg-brand-blue-700 py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo (Vector WebP >= 120px) */}
          <Link
            href="/"
            id="nav-logo-opt"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 rounded-xl"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 group-hover:rotate-12 transition-transform duration-200 shrink-0">
                <Image
                  src="/logo-envios-simplified.webp"
                  alt="Isotipo Envíos Dos Ruedas"
                  fill={true}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-display text-2xl sm:text-3xl tracking-tight leading-none uppercase select-none flex flex-col sm:flex-row sm:gap-1 items-start sm:items-center">
                <span className="text-white">Envíos</span>
                <span className="text-brand-yellow-500">DosRuedas</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav-opt" className="hidden lg:flex items-center gap-1.5">
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
                    className={`px-4 py-2 text-sm font-subheading font-bold tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${
                      pathname === item.href
                        ? 'text-brand-yellow-500 bg-white/10'
                        : 'text-white hover:text-brand-yellow-500 hover:bg-white/5'
                    }`}
                  >
                    {item.icon && <item.icon className="h-4 w-4 shrink-0 text-brand-yellow-500" />}
                    <span>{item.label}</span>
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
                    className="px-4 py-2 text-sm font-subheading font-bold tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5 text-white hover:text-brand-yellow-500 hover:bg-white/5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                  >
                    {item.icon && <item.icon className="h-4 w-4 shrink-0 text-brand-yellow-500" />}
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180 text-brand-yellow-500' : 'text-brand-blue-200'
                      }`}
                    />
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdownItems && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-76 bg-brand-blue-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/15 py-3 text-white overflow-hidden z-50"
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setActiveDropdown(null);
                        }
                      }}
                    >
                      <div className="grid gap-1 px-2">
                        {item.dropdownItems.map((subItem) => {
                          const SubIcon = subItem.icon || ChevronRight;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="flex items-start gap-3 p-2.5 rounded-xl transition-all hover:bg-white/10 text-white hover:text-brand-yellow-500 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                            >
                              <div className="p-1.5 rounded-lg bg-white/10 text-brand-blue-100 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-900 transition-colors">
                                <SubIcon className="h-4 w-4 shrink-0" />
                              </div>
                              <div>
                                <p className="text-xs font-bold uppercase font-subheading tracking-wide leading-tight text-white group-hover:text-brand-yellow-500 transition-colors">
                                  {subItem.label}
                                </p>
                                {subItem.description && (
                                  <p className="text-[11px] text-brand-blue-100/70 font-sans mt-0.5 group-hover:text-brand-blue-50 transition-colors">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
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

            <CTANestedPill href="/cotizar/express" variant="primary" size="default">
              Cotizá tu envío
            </CTANestedPill>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:+542236602699"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
              title="Llamar"
              aria-label="Llamar por teléfono"
            >
              <Phone className="h-5 w-5 text-brand-yellow-500" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle-opt"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
    </header>
  );
}
