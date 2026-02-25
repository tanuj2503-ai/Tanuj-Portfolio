import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const QuantumField = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 5,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute h-1 w-1 rounded-full bg-cyan/70"
          style={{ top: dot.top, left: dot.left }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.8, 1] }}
          transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay }}
        />
      ))}
    </div>
  );
};

export default QuantumField;
