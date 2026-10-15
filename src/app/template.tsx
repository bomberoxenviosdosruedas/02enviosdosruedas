'use client';

import React, { useSyncExternalStore } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const subscribe = () => () => {};

export default function Template({ children }: { children: React.ReactNode }) {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  const reduceMotion = useReducedMotion();

  const EASE_PAGE_ENTER = [0.23, 1, 0.32, 1] as const;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={reduceMotion ? false : isMounted ? { opacity: 0, y: 6, filter: "blur(4px)" } : false}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(4px)" }}
        transition={{ duration: reduceMotion ? 0.01 : 0.22, ease: EASE_PAGE_ENTER }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

