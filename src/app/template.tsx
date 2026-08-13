'use client';

import React, { useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const subscribe = () => () => {};

export default function Template({ children }: { children: React.ReactNode }) {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={isMounted ? { opacity: 0, filter: "blur(4px)" } : false}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

