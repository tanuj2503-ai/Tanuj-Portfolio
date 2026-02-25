import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const modes = [
  { id: 'nova', label: 'Nova Core', tone: 'Electric high-contrast visual field' },
  { id: 'aurora', label: 'Aurora Flux', tone: 'Smooth neon gradients with calm glow' },
  { id: 'mono', label: 'Mono Signal', tone: 'Cinematic monochrome cyber mode' },
];

const RealityEngine = () => {
  const [mode, setMode] = useState(() => localStorage.getItem('reality_mode') || 'nova');
  const [open, setOpen] = useState(false);
  const [showOnHero, setShowOnHero] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-realm', mode);
    document.body.setAttribute('data-realm', mode);
    localStorage.setItem('reality_mode', mode);
  }, [mode]);

  useEffect(() => {
    const hero = document.getElementById('hero');

    if (!hero) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowOnHero(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onOutsideClick = (event) => {
      const target = event.target;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onOutsideClick);
    document.addEventListener('touchstart', onOutsideClick);

    return () => {
      document.removeEventListener('mousedown', onOutsideClick);
      document.removeEventListener('touchstart', onOutsideClick);
    };
  }, [open]);

  const activeMode = useMemo(() => modes.find((item) => item.id === mode), [mode]);

  return (
    <div
      className={`fixed bottom-40 right-3 z-50 transition-all duration-300 md:right-4 md:top-24 md:bottom-auto ${
        showOnHero ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="panel p-3"
      >
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full min-w-[10rem] items-center justify-between gap-4 rounded-lg border border-edge bg-canvas/70 px-3 py-2 text-left"
        >
          <span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan">Reality Engine</p>
            <p className="mt-1 font-display text-xs tracking-[0.08em] text-text-main">{activeMode?.label}</p>
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-text-soft">{open ? 'Hide' : 'Open'}</span>
        </button>

        {open && (
          <div className="mt-3 w-[min(78vw,14rem)] space-y-2 md:w-56">
            <p className="text-xs leading-6 text-text-soft">{activeMode?.tone}</p>
            {modes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                className={`w-full rounded-lg border px-3 py-2 text-left text-xs uppercase tracking-[0.15em] transition-colors ${
                  mode === item.id
                    ? 'border-cyan/50 bg-cyan/10 text-cyan'
                    : 'border-edge bg-canvas/70 text-text-soft hover:text-cyan'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RealityEngine;
