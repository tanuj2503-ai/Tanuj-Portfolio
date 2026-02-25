import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss, SiSwift, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={34} />, level: 'Advanced' },
  { name: 'Node.js', icon: <FaNodeJs size={34} />, level: 'Intermediate' },
  { name: 'Firebase', icon: <SiFirebase size={34} />, level: 'Advanced' },
  { name: 'Swift (iOS)', icon: <SiSwift size={34} />, level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={34} />, level: 'Advanced' },
  { name: 'AWS', icon: <FaAws size={34} />, level: 'Intermediate' },
  { name: 'Docker', icon: <FaDocker size={34} />, level: 'Intermediate' },
  { name: 'SQL/NoSQL', icon: <SiMysql size={34} />, level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-shell">
        <span className="section-kicker">Skills</span>
        <h2 className="section-title">Modern Stack With Delivery Focus</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="panel flex flex-col items-start gap-4 p-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="rounded-xl border border-cyan/40 bg-cyan/10 p-3 text-cyan">{skill.icon}</div>
              <p className="text-lg font-semibold text-text-main">{skill.name}</p>
              <span className="rounded-full border border-edge bg-canvas/70 px-3 py-1 text-xs uppercase tracking-[0.15em] text-text-soft">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
