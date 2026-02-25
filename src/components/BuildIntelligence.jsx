import React from 'react';
import { motion } from 'framer-motion';
import { FaCubesStacked, FaLayerGroup, FaRocket, FaWandMagicSparkles } from 'react-icons/fa6';

const stack = [
  { name: 'React 19 + Vite', detail: 'Fast rendering and instant iteration loop.' },
  { name: 'Tailwind CSS', detail: 'Token-driven styling with responsive precision.' },
  { name: 'Framer Motion', detail: 'Cinematic transitions, modal choreography, and micro-physics.' },
  { name: 'LocalStorage Engine', detail: 'Signal wall memory + open-counter persistence.' },
];

const firstTimeFeatures = [
  'Reality Engine with multi-realm visual switching',
  'Command Palette (Ctrl/Cmd + K) with navigation actions',
  'Dynamic Tab Orchestrator with section-aware animated titles',
  'Interactive Resume Vault with direct preview + download',
  'Signal Wall with persistent visitor signatures',
  'Custom cursor engine and quantum field ambient layer',
];

const pipeline = [
  { step: 'Design System', desc: 'Custom visual language, tokenized spacing, color, typography.' },
  { step: 'Interaction Layer', desc: 'Scroll progress, floating dock, cursor physics, overlay systems.' },
  { step: 'Content Graph', desc: 'Projects, certifications, services, and contact intelligence blocks.' },
  { step: 'Experience Ops', desc: 'Build validation, responsive checks, and deploy-safe asset mapping.' },
];

const BuildIntelligence = () => {
  return (
    <section id="build-intelligence">
      <div className="section-shell">
        <span className="section-kicker">Build Intelligence</span>
        <h2 className="section-title">How This Portfolio Is Engineered</h2>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel p-6 md:p-8"
          >
            <div className="flex items-center gap-3 text-cyan">
              <FaLayerGroup />
              <p className="text-xs uppercase tracking-[0.16em]">Technology Stack</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {stack.map((item) => (
                <div key={item.name} className="rounded-2xl border border-edge bg-canvas/70 p-4">
                  <p className="text-sm font-semibold text-text-main">{item.name}</p>
                  <p className="mt-2 text-xs leading-6 text-text-soft">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <div className="flex items-center gap-3 text-lime">
                <FaWandMagicSparkles />
                <p className="text-xs uppercase tracking-[0.16em]">First-Time Innovations</p>
              </div>
              <ul className="mt-4 space-y-3">
                {firstTimeFeatures.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-text-soft">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="panel p-6 md:p-8"
          >
            <div className="flex items-center gap-3 text-coral">
              <FaCubesStacked />
              <p className="text-xs uppercase tracking-[0.16em]">Execution Pipeline</p>
            </div>

            <div className="mt-5 space-y-4">
              {pipeline.map((item, index) => (
                <div key={item.step} className="rounded-2xl border border-edge bg-canvas/70 p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-cyan">Phase {index + 1}</p>
                  <p className="mt-2 text-sm font-semibold text-text-main">{item.step}</p>
                  <p className="mt-2 text-xs leading-6 text-text-soft">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-lime/40 bg-lime/10 p-4">
              <div className="flex items-center gap-2 text-lime">
                <FaRocket />
                <p className="text-xs uppercase tracking-[0.16em]">Result</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-text-main">
                A portfolio engineered as an interactive product system, not a static webpage.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default BuildIntelligence;
