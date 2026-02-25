import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const points = [
    'Third-year IMSC IT student focused on product-grade software delivery.',
    'Hands-on with React, Firebase, Swift, and cloud-driven architecture.',
    'Enjoy converting difficult technical problems into clear user experiences.',
    'Continuously learning to ship faster, cleaner, and more scalable systems.',
  ];

  return (
    <section id="about" className="relative">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">About</span>
          <h2 className="section-title">Engineering Mindset With Product Vision</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="panel p-8">
              <p className="text-base leading-8 text-text-soft md:text-lg">
                I am a passionate and driven IMSC IT student specializing in cloud and app
                development. I build responsive interfaces, structured backend flows, and
                practical automation systems that solve real user problems.
              </p>
            </article>
            <article className="panel p-8">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-cyan">Highlights</p>
              <ul className="mt-5 space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-text-soft md:text-base">
                    <span className="mt-2 h-2 w-2 rounded-full bg-lime" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
