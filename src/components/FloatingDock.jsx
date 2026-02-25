import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/tanuj2503-ai',
    icon: <FaGithub />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/tanuj.fittt',
    icon: <FaInstagram />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919484875152',
    icon: <FaWhatsapp />,
  },
];

const FloatingDock = () => {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-full max-w-fit -translate-x-1/2 px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="panel flex items-center gap-2 px-3 py-2 md:gap-3"
      >
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-edge/80 bg-canvas/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-text-soft transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan"
            aria-label={item.label}
          >
            <span className="text-sm text-cyan transition-colors group-hover:text-lime">{item.icon}</span>
            <span className="hidden sm:inline">{item.label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingDock;
