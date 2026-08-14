'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronRight, Phone, X } from 'lucide-react';
import { CTANestedPill } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface MobileNavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: {
    label: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: MobileNavItem[];
  activeDropdown: string | null;
  onDropdownToggle: (label: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems,
  activeDropdown,
  onDropdownToggle,
}) => {
  // Prevent page scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-blue-700/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-full max-w-[320px] bg-brand-blue-700 shadow-2xl z-50 flex flex-col h-full border-l border-white/10 lg:hidden"
          >
            {/* Header Mobile Brand Info */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
              <Link href="/" onClick={onClose} className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 rounded-lg">
                <div className="relative w-24 h-8">
                  <Image
                    src="/logo-master.svg"
                    alt="Logo Envíos Dos Ruedas"
                    width={96}
                    height={30}
                    className="object-contain w-24 h-auto"
                    priority
                  />
                </div>
              </Link>

              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav Items List - Scrollable */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3 py-2 px-3 rounded-xl text-base font-subheading tracking-wider uppercase text-white hover:text-brand-yellow-500 hover:bg-white/5 transition-all font-bold min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
                      >
                        {item.icon && <item.icon className="h-5 w-5 text-brand-yellow-500 shrink-0" />}
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => onDropdownToggle(item.label)}
                          className="w-full text-left py-2 px-3 rounded-xl text-base font-subheading tracking-wider uppercase flex items-center justify-between text-white hover:bg-white/5 font-bold cursor-pointer transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
                        >
                          <span className="flex items-center gap-3">
                            {item.icon && <item.icon className="h-5 w-5 text-brand-yellow-500 shrink-0" />}
                            <span>{item.label}</span>
                          </span>
                          <ChevronDown
                            className={cn(
                              'h-5 w-5 transition-transform duration-200 text-brand-yellow-500 shrink-0',
                              activeDropdown === item.label && 'rotate-180'
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {item.dropdownItems && activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 pr-2 py-2 grid gap-2 overflow-hidden"
                            >
                              {item.dropdownItems.map((subItem) => {
                                const SubIcon = subItem.icon || ChevronRight;
                                return (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={onClose}
                                    className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-widest text-brand-blue-50/90 hover:text-brand-yellow-500 hover:bg-white/10 transition-all min-h-[40px] focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
                                  >
                                    <SubIcon className="h-4 w-4 text-brand-yellow-500 shrink-0" />
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
              </nav>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="p-5 border-t border-white/10 space-y-4 shrink-0 bg-brand-blue-700/80 backdrop-blur-md">
              <a
                href="tel:+542236602699"
                className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/10 border border-white/5 text-white hover:text-brand-yellow-500 font-mono text-sm font-bold transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
              >
                <Phone className="h-4 w-4 text-brand-yellow-500" />
                <span>+54 223 660-2699</span>
              </a>

              <CTANestedPill
                href="/cotizar/express"
                variant="primary"
                size="large"
                className="w-full justify-center min-h-[44px] py-3.5"
                onClick={onClose}
              >
                Cotizá tu envío
              </CTANestedPill>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
