'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Shield, TrendingUp, Users } from 'lucide-react';

const counters = [
  { value: 52000, suffix: '+', label: 'Envíos realizados', icon: TrendingUp },
  { value: 0, suffix: '', label: 'Paquetes extraviados', icon: Shield },
  { value: 140, suffix: '+', label: 'Emprendedores confían', icon: Users },
  { value: 12, suffix: 'h', label: 'Tiempo promedio entrega', icon: Award },
];

function Counter({ target, duration = 1800, delay = 0 }: { target: number; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const timer = setTimeout(() => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, duration, delay]);

  return <span>{count.toLocaleString()}</span>;
}

export default function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="confianza"
      className="py-12 md:py-16 bg-brand-blue-50 border-y border-brand-blue-100 relative z-10"
      aria-labelledby="trust-heading"
    >
      <motion.div
        ref={containerRef}
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 150, damping: 15, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-blue-100 text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-brand-yellow transition-colors duration-300">
                <counter.icon className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.1 + 0.2, duration: 1.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold tracking-tighter text-brand-blue leading-none inline-flex items-baseline"
                >
                  <Counter target={counter.value} duration={1800} delay={index * 150 + 300} />
                  <span className="text-brand-yellow">{counter.suffix}</span>
                </motion.span>
                <p className="text-[11px] font-subheading tracking-widest uppercase text-brand-blue-500 font-semibold">
                  {counter.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ISO 9001 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-brand-blue-100 shadow-sm">
            <div className="p-1.5 bg-brand-yellow text-brand-blue rounded-full">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-subheading tracking-widest uppercase text-brand-blue font-bold">ISO 9001:2015 Certificada</p>
              <p className="text-[10px] font-sans text-brand-blue-500">Gestión de calidad en logística última milla</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}