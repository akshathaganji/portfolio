
'use client';
import { ReactNode } from 'react';


import { motion } from 'framer-motion';

interface AnimatedElementProps {
  children: React.ReactNode;
  type: 'slideIn';
  direction: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export function AnimatedElement({ children, type, direction, delay = 0, className }: AnimatedElementProps) {
  const slideVariants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideVariants}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
