'use client';

import React from 'react';
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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="lg:hidden bg-brand-blue-700 border-t border-white/10 overflow-hidden shadow-2xl z-50"
        >
          <div className="px-4 py-6 space-y-4">
            {/* Header Mobile Brand Info */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <Link href="/" onClick={onClose} className="flex items-center gap-3">
                <div className="relative w-32 h-10">
                  <Image
                    src="/logo-master.svg"
                    alt="Logo Envíos Dos Ruedas"
                    width={128}
                    height={40}
                    className="object-contain w-32 h-auto"
                    priority
                  />
                </div>
              </Link>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow-500 focus:outline-none transition-all cursor-pointer"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav Items List */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-2 last:border-b-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-2 py-2.5 px-3 rounded-xl text-base font-subheading tracking-wide uppercase text-white hover:text-brand-yellow-500 hover:bg-white/5 transition-all font-bold"
                    >
                      {item.icon && <item.icon className="h-5 w-5 text-brand-yellow-500" />}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => onDropdownToggle(item.label)}
                        className="w-full text-left py-2.5 px-3 rounded-xl text-base font-subheading tracking-wide uppercase flex items-center justify-between text-white hover:bg-white/5 font-bold cursor-pointer transition-all"
                      >
                        <span className="flex items-center gap-2">
                          {item.icon && <item.icon className="h-5 w-5 text-brand-blue-200" />}
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            activeDropdown === item.label
                              ? 'rotate-180 text-brand-yellow-500'
                              : 'text-brand-blue-200'
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {item.dropdownItems && activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 pr-2 py-2 grid gap-1.5 overflow-hidden"
                          >
                            {item.dropdownItems.map((subItem) => {
                              const SubIcon = subItem.icon || ChevronRight;
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={onClose}
                                  className="flex items-center gap-2 py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider text-brand-blue-100 hover:text-white hover:bg-white/10 transition-all"
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
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-3 space-y-3">
              <a
                href="tel:+542236602699"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 border border-white/10 text-white hover:text-brand-yellow-500 font-mono text-xs font-bold transition-all"
              >
                <Phone className="h-4 w-4 text-brand-yellow-500" />
                <span>+54 223 660-2699</span>
              </a>

              <CTANestedPill
                href="/cotizar/express"
                variant="primary"
                size="large"
                className="w-full justify-center"
                onClick={onClose}
              >
                Cotizá tu envío
              </CTANestedPill>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
