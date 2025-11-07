import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed text-center">
            I am a passionate and driven 3rd-year IMSC IT student specializing in Cloud and App Development. With a strong foundation in modern web technologies and mobile development, I enjoy turning complex problems into elegant, user-friendly solutions. I am proficient with technologies like React, Firebase, and Swift, and always eager to learn and adapt to new challenges in the ever-evolving tech landscape. My goal is to contribute to meaningful projects and grow as a professional developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;