import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaDownload } from 'react-icons/fa6';

const resumeUrl = `${import.meta.env.BASE_URL}assets/Tanuj_Sharma_Resume.pdf`;

const ResumeVault = () => {
  return (
    <section id="resume">
      <div className="section-shell">
        <span className="section-kicker">Resume Vault</span>
        <h2 className="section-title">Interactive Resume Access</h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="panel mt-10 overflow-hidden p-6 md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-cyan/40 bg-canvas/70">
                <motion.div
                  className="absolute inset-3 rounded-full border border-lime/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full border border-coral/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
                <div className="rounded-full border border-cyan/40 bg-cyan/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                  Resume Core
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-text-soft">
                Open or download my latest resume instantly. This panel is optimized for desktop and
                mobile, with direct access links for recruiters.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan/50 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan transition-colors hover:bg-cyan/20"
                >
                  Open Resume
                  <FaArrowUpRightFromSquare />
                </a>
                <a
                  href={resumeUrl}
                  download="Tanuj_Sharma_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-edge bg-canvas/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-text-main transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  Download
                  <FaDownload />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-edge bg-canvas/80">
              <iframe
                src={resumeUrl}
                title="Tanuj Sharma Resume Preview"
                className="pointer-events-none h-[420px] w-full md:h-[520px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeVault;
