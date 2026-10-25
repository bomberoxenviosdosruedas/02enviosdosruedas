import React from 'react';
import { ChevronRight, Shield, type LucideIcon } from 'lucide-react';

export interface LegalSection {
  id: string;
  shortTitle: string;
  icon: LucideIcon;
}

interface LegalSidebarNavProps {
  title: string;
  sections: readonly LegalSection[];
  activeId: string;
  onSelectSection: (id: string) => void;
  footerTitle?: string;
  footerDescription?: React.ReactNode;
}

export function LegalSidebarNav({
  title,
  sections,
  activeId,
  onSelectSection,
  footerTitle = 'Operación Transparente',
  footerDescription,
}: LegalSidebarNavProps) {
  return (
    <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-fit self-start">
      <div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-3xl shadow-sm">
        <div className="double-bezel-inner bg-white rounded-2xl p-5 border border-brand-blue-50/50">
          <h3 className="text-xs uppercase tracking-widest text-brand-blue-500 font-subheading font-bold mb-4 px-2">
            {title}
          </h3>
          <nav className="flex flex-col gap-1.5">
            {sections.map((section) => {
              const IconComponent = section.icon;
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onSelectSection(section.id)}
                  className={`w-full flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand-blue-500 text-white shadow-sm scale-[1.02]"
                      : "text-brand-ink hover:text-brand-blue-500 hover:bg-brand-blue-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <IconComponent className={`h-4 w-4 shrink-0 ${isActive ? "text-brand-yellow-500" : "text-brand-blue-500"}`} />
                    <span className="truncate">{section.shortTitle}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isActive ? "text-brand-yellow-500 translate-x-0.5" : "text-brand-blue-500"}`} />
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-brand-blue-50 px-2 text-center">
            <Shield className="h-7 w-7 text-brand-blue-500 mx-auto mb-2" />
            <p className="text-xs font-bold text-brand-blue-500 uppercase font-subheading tracking-wide">
              {footerTitle}
            </p>
            {footerDescription && (
              <p className="text-2xs text-brand-blue-500 mt-1 leading-normal font-sans">
                {footerDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
