import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt?: string;
  icon?: LucideIcon | React.ElementType;
  title: string;
  badge: string;
  overview: string;
  href: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      icon: Icon,
      title,
      badge,
      overview,
      href,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative w-full overflow-hidden rounded-2xl border border-brand-blue-700 bg-brand-blue-700 shadow-lg",
          "transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:border-brand-yellow-300",
          className
        )}
        {...props}
      >
        {/* Background Image with Zoom Effect on Hover */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={imageAlt || title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-700/90 via-brand-blue-700/50 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-700 via-brand-blue-700/70 to-transparent"></div>

        {/* Content Container */}
        <div className="relative flex h-full min-h-[420px] flex-col justify-between p-6 sm:p-8 text-brand-white-50">
          {/* Top Section: Icon */}
          <div className="flex items-start">
             {Icon && (
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-yellow-300 bg-brand-yellow-100 backdrop-blur-md text-brand-yellow-500 transition-all duration-300 group-hover:bg-brand-yellow-500 group-hover:text-brand-blue-900 group-hover:scale-110">
                   <Icon className="h-7 w-7" />
                </div>
             )}
          </div>

          {/* Middle Section: Details (slides up on hover) */}
          <div className="mt-auto pt-10 space-y-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-16">
            <div>
              <span className="mb-3 inline-block rounded-md bg-brand-blue-700/80 px-2.5 py-1 text-[10px] font-subheading tracking-widest text-brand-blue-200 uppercase backdrop-blur-sm border border-brand-blue-600 group-hover:border-brand-yellow-300 group-hover:text-brand-yellow-500 transition-colors">
                {badge}
              </span>
              <h3 className="text-3xl font-display uppercase tracking-tight text-brand-white-50 group-hover:text-brand-yellow-500 transition-colors">{title}</h3>
            </div>
            <div>
              <p className="text-sm font-sans text-brand-blue-200 leading-relaxed">
                {overview}
              </p>
            </div>
          </div>

          {/* Bottom Section: Button (revealed on hover) */}
          <div className="absolute -bottom-20 left-0 w-full p-6 sm:p-8 opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
            <a
              href={href}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-sans font-semibold text-brand-blue-900 bg-brand-yellow-500 hover:bg-brand-yellow-400 shadow-[0_0_15px_rgba(255,236,1,0.3)] transition-colors"
            >
              Ver especificaciones de servicio <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };