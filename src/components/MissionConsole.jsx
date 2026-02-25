import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const lines = [
  'SYSTEM: Portfolio neural mesh initialized.',
  'STATUS: Open for premium freelance + internships.',
  'PROTOCOL: Shipping high-conversion product experiences.',
  'NETWORK: GitHub + Instagram channels active.',
];

const MissionConsole = () => {
  const [open, setOpen] = useState(false);
  const now = new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="fixed bottom-24 left-4 z-50 md:bottom-6">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-xl border border-lime/40 bg-lime/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-lime transition-colors hover:bg-lime/20"
      >
        Mission Log
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="panel mt-3 w-[min(92vw,24rem)] p-4"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan">Live Console</p>
            <p className="mt-2 text-xs text-text-soft">Runtime: {now}</p>
            <div className="mt-3 space-y-2">
              {lines.map((line) => (
                <p key={line} className="rounded-lg border border-edge bg-canvas/70 px-3 py-2 text-xs text-text-soft">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MissionConsole;
