import React from 'react';
import { motion } from 'framer-motion';

// IMPORTANT: Add screenshots for your projects in the `src/assets` folder
// Example: import lifelinkImg from '../assets/lifelink.png';

const projectData = [
  {
    title: 'LifeLink',
    description: 'A modern web application connecting users with essential services.',
    // image: lifelinkImg,
    liveLink: 'https://lifelink-ten-dun.vercel.app/',
    githubLink: 'https://github.com/tanuj2503-ai/LifeLink-', // TODO: Add GitHub link
  },
  {
    title: 'M3 Education',
    description: 'A supplementary educational website focused on interactive learning.',
    // image: m3eduImg,
    liveLink: 'https://m3edu.ct.ws/?i=1',
    githubLink: 'https://github.com/tanuj2503-ai/m3-edu', // TODO: Add GitHub link
  },
    {
    title: 'Pelican Confectioners Pvt. Ltd',
    description: 'A modern, responsive confectionery website showcasing premium sweets, chocolates, and candies. Built with a clean UI and smooth navigation to highlight the brand’s story, products, and team.',
    // image: m3eduImg,
    liveLink: 'https://pelicandemo.vercel.app/',
    githubLink: 'https://github.com/tanuj2503-ai/Pelican', // TODO: Add GitHub link
  },
  {
    title: 'OM Education',
    description: 'An educational platform providing resources and tools for students.',
    // image: omeducationImg,
    liveLink: 'https://omeducation.rf.gd/?i=1',
    githubLink: '#', // TODO: Add GitHub link
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-accent">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-secondary-dark rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/> */}
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                Project Screenshot
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-primary-dark font-semibold rounded hover:bg-opacity-80 transition-all">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600 transition-all">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
