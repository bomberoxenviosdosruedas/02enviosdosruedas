'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
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

// Spring config for the panel slide-in
const SPRING_PANEL = { type: 'spring', stiffness: 340, damping: 30 } as const;

// Stagger config for nav items appearing after panel opens
const NAV_CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
} as const;

const NAV_ITEM_VARIANT = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 380, damping: 26 } },
} as const;

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems,
  activeDropdown,
  onDropdownToggle,
}) => {
  const prefersReducedMotion = useReducedMotion();

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
          {/* Backdrop Overlay — enhanced blur transition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-blue-900/70 backdrop-blur-md z-50 lg:hidden"
          />

          {/* Slide-over Drawer — spring from right + enhanced blur border */}
          <motion.div
            initial={prefersReducedMotion ? { x: 0 } : { x: '100%' }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { x: '100%' }}
            transition={SPRING_PANEL}
            className="fixed inset-y-0 right-0 w-full max-w-[320px] bg-brand-blue-700 shadow-2xl z-50 flex flex-col h-full border-l border-white/10 lg:hidden"
          >
            {/* Header Mobile Brand Info */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
              <Link href="/" onClick={onClose} className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 rounded-lg">
                <span className="font-display text-xl tracking-tight uppercase select-none flex flex-col items-start leading-none">
                  <span className="text-white">Envíos</span>
                  <span className="text-brand-yellow-500">DosRuedas</span>
                </span>
              </Link>

              {/* Animated close button */}
              <motion.button
                onClick={onClose}
                whileHover={prefersReducedMotion ? {} : { scale: 1.08, rotate: 90 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Nav Items List — staggered entrance */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
              <motion.nav
                className="space-y-2"
                variants={prefersReducedMotion ? {} : NAV_CONTAINER}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={prefersReducedMotion ? {} : NAV_ITEM_VARIANT}
                    className="border-b border-white/10 pb-2.5 last:border-b-0 last:pb-0"
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3.5 py-2.5 px-3 rounded-xl text-xl font-subheading tracking-wider uppercase text-white hover:text-brand-yellow-500 hover:bg-white/5 transition-all font-bold min-h-[48px] focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
                      >
                        {item.icon && <item.icon className="h-5 w-5 text-brand-yellow-500 shrink-0" />}
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => onDropdownToggle(item.label)}
                          className="w-full text-left py-2.5 px-3 rounded-xl text-xl font-subheading tracking-wider uppercase flex items-center justify-between text-white hover:bg-white/5 font-bold cursor-pointer transition-all min-h-[48px] focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
                        >
                          <span className="flex items-center gap-3.5">
                            {item.icon && <item.icon className="h-5 w-5 text-brand-yellow-500 shrink-0" />}
                            <span>{item.label}</span>
                          </span>
                          <motion.span
                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          >
                            <ChevronDown className="h-5 w-5 text-brand-yellow-500 shrink-0" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {item.dropdownItems && activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={
                                prefersReducedMotion
                                  ? { duration: 0 }
                                  : { type: 'spring', stiffness: 340, damping: 28 }
                              }
                              className="pl-4 pr-1 py-2 flex flex-col gap-1 overflow-hidden"
                            >
                              {item.dropdownItems.map((subItem, idx) => {
                                const SubIcon = subItem.icon || ChevronRight;
                                return (
                                  <motion.div
                                    key={subItem.href}
                                    initial={prefersReducedMotion ? {} : { opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05, type: 'spring', stiffness: 380, damping: 26 }}
                                  >
                                    <Link
                                      href={subItem.href}
                                      onClick={onClose}
                                      className="flex items-center gap-3 py-2 px-3 rounded-xl text-base font-subheading uppercase tracking-wider font-bold text-brand-blue-50/90 hover:text-brand-yellow-500 hover:bg-white/10 transition-all min-h-[42px] focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
                                    >
                                      <div className="p-1 rounded-lg bg-white/10 text-brand-yellow-500 shrink-0">
                                        <SubIcon className="h-4 w-4" />
                                      </div>
                                      <span>{subItem.label}</span>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.nav>
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
