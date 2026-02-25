import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaCode, FaRocket, FaWandMagicSparkles } from 'react-icons/fa6';

const serviceData = [
  {
    title: 'Brand-First Websites',
    detail:
      'Visual systems that make businesses feel premium and unforgettable across desktop and mobile.',
    icon: <FaWandMagicSparkles />,
  },
  {
    title: 'Conversion Engineering',
    detail:
      'Faster pages, cleaner call-to-action flows, and smart structure that improves real business outcomes.',
    icon: <FaRocket />,
  },
  {
    title: 'Custom Product Builds',
    detail:
      'From startup MVPs to internal tools, I build practical full-stack products with scalable foundations.',
    icon: <FaCode />,
  },
  {
    title: 'Automation & Growth',
    detail:
      'Lightweight automation and integrations that remove repetitive work and help teams move faster.',
    icon: <FaBolt />,
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="section-shell">
        <span className="section-kicker">What I Build</span>
        <h2 className="section-title">Advanced Interfaces With Business Impact</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {serviceData.map((item, index) => (
            <motion.article
              key={item.title}
              className="panel h-full p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="inline-flex rounded-xl border border-cyan/40 bg-cyan/10 p-3 text-lg text-cyan">
                {item.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-text-main">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-soft">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
