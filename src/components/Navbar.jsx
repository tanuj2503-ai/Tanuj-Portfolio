import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaInstagram } from 'react-icons/fa6';

const navItems = [
  { label: 'Resume', href: '#resume' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Build', href: '#build-intelligence' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Signals', href: '#signal-wall' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 pt-4 md:px-8">
      <div className="mx-auto max-w-6xl panel px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 font-display text-sm font-bold tracking-wider text-cyan">
              TS
            </span>
            <div>
              <p className="font-display text-sm tracking-[0.18em] text-text-main">TANUJ SHARMA</p>
              <p className="text-xs uppercase tracking-[0.15em] text-text-soft">Cloud | Apps | Web</p>
            </div>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-text-soft md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors duration-300 hover:text-cyan">
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/tanuj2503-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-edge/70 bg-canvas/70 p-2 text-cyan transition-colors hover:border-cyan/50 hover:text-lime"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/tanuj.fittt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-edge/70 bg-canvas/70 p-2 text-cyan transition-colors hover:border-cyan/50 hover:text-lime"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg border border-edge/70 bg-canvas/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan md:hidden"
          >
            Menu
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-4 space-y-2 border-t border-edge/60 pt-3 md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg bg-canvas/70 px-4 py-2 text-sm text-text-soft transition-colors hover:text-cyan"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a
                  href="https://github.com/tanuj2503-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg border border-edge bg-canvas/70 px-4 py-2 text-center text-sm text-text-soft transition-colors hover:text-cyan"
                >
                  GitHub
                </a>
                <a
                  href="https://instagram.com/tanuj.fittt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg border border-edge bg-canvas/70 px-4 py-2 text-center text-sm text-text-soft transition-colors hover:text-cyan"
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
