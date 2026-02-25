import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const certs = [
  {
    name: 'AWS Educate Cloud Practitioner',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/eaa06dd4-5c25-4260-8707-abb3fb43a970',
  },
  {
    name: 'AWS Educate Getting Started',
    issuer: 'Amazon Web Services',
    link: 'https://www.credly.com/badges/fbd313d9-0354-4326-9e9f-317213d11439/print',
  },
  {
    name: 'Cognitive Class Certificate',
    issuer: 'IBM',
    link: 'https://courses.cognitiveclass.ai/certificates/1f83d46d7a024919a2de8625f8074ace',
  },
];

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="section-shell">
        <span className="section-kicker">Credentials</span>
        <h2 className="section-title">Achievements And Certifications</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className="panel"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl p-6 transition-all hover:bg-canvas/20"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-text-main">{cert.name}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.15em] text-text-soft">{cert.issuer}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                    View Badge
                    <FaArrowUpRightFromSquare />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
