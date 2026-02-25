import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaGithub, FaInstagram } from 'react-icons/fa6';

const Hero = () => {
  const statCards = [
    { label: 'Focus', value: 'Cloud + Apps' },
    { label: 'Current Role', value: 'IMSC IT Student' },
    { label: 'Projects Built', value: '10+' },
  ];

  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-28 md:pt-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-kicker">NEXT-GEN PORTFOLIO</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[0.06em] text-text-main sm:text-5xl md:text-7xl">
              TANUJ
              <span className="block bg-gradient-to-r from-cyan via-white to-lime bg-clip-text text-transparent">
                SHARMA
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-soft md:text-lg">
              I design and build clean, high-performance products across web and mobile.
              My approach blends engineering depth, visual precision, and product thinking.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan/50 bg-cyan/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan transition-all hover:-translate-y-0.5 hover:bg-cyan/20"
              >
                Explore Projects
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-edge bg-panel/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-main transition-all hover:border-cyan/50 hover:text-cyan"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://github.com/tanuj2503-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-edge bg-canvas/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-soft transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href="https://instagram.com/tanuj.fittt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-edge bg-canvas/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-soft transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <FaInstagram />
                Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="panel p-6 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan">Capability Matrix</p>
            <div className="mt-6 space-y-4">
              {statCards.map((item) => (
                <div key={item.label} className="rounded-2xl border border-edge/70 bg-canvas/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-text-soft">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-text-main">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-lime/30 bg-lime/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-lime">Mission</p>
              <p className="mt-2 text-sm leading-6 text-text-main">
                Build software that feels modern, scales correctly, and creates real user impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
