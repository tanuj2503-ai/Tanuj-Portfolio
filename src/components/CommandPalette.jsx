import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const actions = [
  { label: 'Go to Hero', type: 'section', target: 'hero' },
  { label: 'Go to Resume', type: 'section', target: 'resume' },
  { label: 'Go to Build Intelligence', type: 'section', target: 'build-intelligence' },
  { label: 'Go to Projects', type: 'section', target: 'projects' },
  { label: 'Go to Signal Wall', type: 'section', target: 'signal-wall' },
  { label: 'Go to Contact', type: 'section', target: 'contact' },
  {
    label: 'Open Resume PDF',
    type: 'link',
    target: `${import.meta.env.BASE_URL}assets/Tanuj_Sharma_Resume.pdf`,
  },
  { label: 'Open GitHub', type: 'link', target: 'https://github.com/tanuj2503-ai' },
  { label: 'Open Instagram', type: 'link', target: 'https://instagram.com/tanuj.fittt' },
  { label: 'Open WhatsApp', type: 'link', target: 'https://wa.me/919484875152' },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((prev) => !prev);
      }

      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery('');
    }
  }, [open]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return actions;
    }

    return actions.filter((item) => item.label.toLowerCase().includes(normalized));
  }, [query]);

  const runAction = (item) => {
    if (item.type === 'section') {
      const element = document.getElementById(item.target);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (item.type === 'link') {
      window.open(item.target, '_blank', 'noopener,noreferrer');
    }

    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-4 z-50 rounded-xl border border-cyan/50 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan transition-colors hover:bg-cyan/20 md:bottom-5 md:right-5"
      >
        Cmd Menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-black/60 px-4 pt-20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl panel p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type command... (projects, github, contact)"
                className="w-full rounded-xl border border-edge bg-canvas/80 px-4 py-3 text-sm text-text-main outline-none transition-colors placeholder:text-text-soft focus:border-cyan/50"
              />
              <div className="mt-3 space-y-2">
                {filtered.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => runAction(item)}
                    className="flex w-full items-center justify-between rounded-xl border border-edge bg-canvas/70 px-4 py-3 text-left text-sm text-text-soft transition-colors hover:border-cyan/40 hover:text-cyan"
                  >
                    <span>{item.label}</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="rounded-xl border border-edge bg-canvas/70 px-4 py-3 text-sm text-text-soft">
                    No command found.
                  </p>
                )}
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-text-soft">
                Shortcut: Ctrl/Cmd + K
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
