'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, ChevronDown, Bike, ChevronRight, Calculator, Phone,
  Home, Zap, TrendingDown, Clock, ShoppingBag, Info, HelpCircle, Share2, Mail
} from 'lucide-react';

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
    window.addEventListener('scroll', handleScroll);
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
        { label: 'Envíos Express', href: '/servicios/envios-express', description: 'Rápido, en 2 horas', icon: Zap },
        { label: 'Envíos LowCost', href: '/servicios/envios-lowcost', description: 'Económico e inteligente', icon: TrendingDown },
        { label: 'Envíos Flex (MeLi)', href: '/servicios/enviosflex', description: 'Socio MercadoLibre Flex', icon: Clock },
        { label: 'E-Commerce & 3PL', href: '/servicios/plan-emprendedores', description: 'Logística para PyMEs', icon: ShoppingBag },
      ],
    },
    {
      label: 'Nosotros',
      icon: Info,
      dropdownItems: [
        { label: 'Sobre Nosotros', href: '/nosotros/sobre-nosotros', description: 'Quiénes somos', icon: Info },
        { label: 'Preguntas Frecuentes', href: '/nosotros/preguntas-frecuentes', description: 'Todas tus dudas resueltas', icon: HelpCircle },
        { label: 'Nuestras Redes', href: '/nosotros/nuestras-redes', description: 'Comunidad en movimiento', icon: Share2 },
      ],
    },
    { label: 'Contacto', href: '/contacto', icon: Mail },
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      id="optimized-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-brand-blue/95 shadow-lg border-b border-white/10 py-3 backdrop-blur-md'
          : 'bg-brand-blue py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            id="nav-logo-opt"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Image
                src="/logo-envios-simplified.webp"
                alt="Logo Envíos Dos Ruedas simplificado"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-display text-2xl tracking-wider text-white flex items-center gap-1">
                Envíos <span className="text-brand-yellow">Dosruedas</span>
              </span>
              <span className="block text-[9px] font-sans tracking-widest text-brand-blue-100 uppercase leading-none">
                tu solución confiable
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
                    className={`px-4 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${pathname === item.href
                        ? 'text-brand-yellow bg-white/10'
                        : 'text-white hover:text-brand-yellow hover:bg-white/5'
                      }`}
                  >
                    {item.icon && <item.icon className="h-4 w-4 shrink-0" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    onFocus={() => item.dropdownItems && setActiveDropdown(item.label)}
                    onBlur={(e) => {
                      // Solo cerrar si el foco se mueve fuera del contenedor del dropdown
                      if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                        setActiveDropdown(null);
                      }
                    }}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                    className="px-4 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5 text-white hover:text-brand-yellow hover:bg-white/5 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
                  >
                    {item.icon && <item.icon className="h-4 w-4 shrink-0" />}
                    <span>{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180 text-brand-yellow' : ''
                      }`} />
                  </button>
                )}

                {/* Dropdowns */}
                <AnimatePresence>
                  {item.dropdownItems && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-72 bg-brand-blue rounded-2xl shadow-xl border border-white/10 py-3 text-white overflow-hidden z-50"
                      onBlur={(e) => {
                        // Cerrar cuando perdemos foco en el último elemento del dropdown
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
                              className="flex items-start gap-3 p-2.5 rounded-xl transition-all hover:bg-white/5 text-white hover:text-brand-yellow group focus:outline-none focus:bg-white/5 focus:text-brand-yellow"
                            >
                              <div className="p-1.5 rounded-lg bg-white/5 text-brand-blue-200 group-hover:bg-white/10 group-hover:text-brand-yellow transition-colors">
                                <SubIcon className="h-4 w-4 shrink-0" />
                              </div>
                              <div>
                                <p className="text-xs font-semibold uppercase font-subheading tracking-wide leading-tight text-white group-hover:text-brand-yellow transition-colors">{subItem.label}</p>
                                {subItem.description && (
                                  <p className="text-[10px] text-brand-blue-100/70 font-sans mt-0.5 group-hover:text-brand-blue-50 transition-colors">{subItem.description}</p>
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
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+542236602699"
              className="flex items-center gap-2 text-white hover:text-brand-yellow transition-colors font-mono text-sm font-medium"
            >
              <Phone className="h-4 w-4 text-brand-yellow" />
              <span>+54 223 660-2699</span>
            </a>

            <Link
              href="/cotizar/express"
              id="header-cta"
              className="bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-base uppercase px-5 py-2.5 rounded-xl border-2 border-brand-blue shadow-[3px_3px_0px_var(--color-brand-blue)] transition-all hover:scale-[1.02] active:scale-[0.98] active:translate-y-[1px] flex items-center gap-2 font-bold cursor-pointer"
            >
              <Calculator className="h-4 w-4" />
              Cotizar Envío
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:+542236602699"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow focus:outline-none transition-all"
              title="Llamar"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle-opt"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow focus:outline-none transition-all cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-brand-blue border-t border-white/10 mt-3 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 py-2 text-base font-subheading tracking-wide uppercase text-white hover:text-brand-yellow"
                    >
                      {item.icon && <item.icon className="h-5 w-5 text-brand-yellow" />}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="w-full text-left py-2 text-base font-subheading tracking-wide uppercase flex items-center justify-between text-white cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          {item.icon && <item.icon className="h-5 w-5 text-brand-blue-200" />}
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180 text-brand-yellow' : 'text-brand-blue-200'
                          }`} />
                      </button>

                      <AnimatePresence>
                        {item.dropdownItems && activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 mt-1 grid gap-2 overflow-hidden"
                          >
                            {item.dropdownItems.map((subItem) => {
                              const SubIcon = subItem.icon || ChevronRight;
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="flex items-center gap-2 py-1.5 text-xs text-brand-blue-200 hover:text-white"
                                >
                                  <SubIcon className="h-4 w-4 text-brand-yellow/75 shrink-0" />
                                  <span>{subItem.label}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <Link
                  href="/cotizar/express"
                  className="w-full bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue text-center font-subheading tracking-wider uppercase text-xl py-3 rounded-xl border-2 border-brand-blue shadow-[3px_3px_0px_var(--color-brand-blue)] block font-bold transition-all active:scale-[0.98] active:translate-y-[1px]"
                >
                  Cotizar Envío
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
