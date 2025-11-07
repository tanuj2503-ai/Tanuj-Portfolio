import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss, SiSwift, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'Firebase', icon: <SiFirebase size={40} /> },
  { name: 'Swift (iOS)', icon: <SiSwift size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { name: 'AWS', icon: <FaAws size={40} /> },
  { name: 'Docker', icon: <FaDocker size={40} /> },
  { name: 'SQL/NoSQL', icon: <SiMysql size={40} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical <span className="text-accent">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-secondary-dark rounded-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, boxShadow: `0 0 15px #00ff99` }}
            >
              <div className="text-accent mb-3">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;