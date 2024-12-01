'use client';

import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <motion.div
      className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}