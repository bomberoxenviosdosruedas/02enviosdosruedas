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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={reduceMotion ? false : isMounted ? { opacity: 0, filter: "blur(4px)" } : false}
        animate={reduceMotion ? { opacity: 1, filter: "blur(0px)" } : { opacity: 1, filter: "blur(0px)" }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

