import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const projectData = [
  {
    title: 'LifeLink',
    description:
      'Community support platform that helps users request help, donate, and volunteer in emergencies through a clean and fast interface.',
    stack: ['React', 'UI/UX', 'Vercel'],
    liveLink: 'https://lifelink-ten-dun.vercel.app/',
    image: asset('/assets/lifelink.png'),
    fallbackImage: 'https://image.thum.io/get/width/1200/https://lifelink-ten-dun.vercel.app/',
    objectPosition: 'center top',
    category: 'Web App',
    githubLink: 'https://github.com/tanuj2503-ai/LifeLink-',
    outcomes: [
      'Built clear emergency pathways for user help requests.',
      'Designed clean CTA flow to reduce decision friction.',
      'Shipped fast deployment-ready interface for real-world use.',
    ],
  },
  {
    title: 'Begin Byte',
    description:
      'BeginByte builds websites that make cafes shine. Beautiful, fast websites for your business, designed and crafted by Tanuj Sharma.',
    stack: ['Cafe Websites', 'Brand Identity', 'Speed Optimization'],
    liveLink: 'https://begin-byte.vercel.app/',
    image: asset('/assets/begin-byte.png'),
    fallbackImage: 'https://image.thum.io/get/width/1200/https://begin-byte.vercel.app/',
    objectPosition: 'center 8%',
    category: 'Business',
    githubLink: 'https://github.com/tanuj2503-ai',
    outcomes: [
      'Positioned BeginByte as a premium service for cafe owners.',
      'Used direct offer messaging to improve conversion intent.',
      'Delivered high visual consistency across hero and sections.',
    ],
  },
  {
    title: 'M3 TechLab',
    description:
      'Industry-focused training website designed to convert visitors with strong messaging, internship positioning, and clear CTAs.',
    stack: ['Landing Page', 'Branding', 'Performance'],
    liveLink: 'https://m3techlab-41ys.vercel.app/',
    image: asset('/assets/m3-techlab.png'),
    fallbackImage: 'https://image.thum.io/get/width/1200/https://m3techlab-41ys.vercel.app/',
    objectPosition: 'center 12%',
    category: 'Business',
    githubLink: 'https://github.com/tanuj2503-ai',
    outcomes: [
      'Created strong trust-focused structure for internship narrative.',
      'Balanced educational credibility with conversion-driven design.',
      'Improved first-screen communication and brand clarity.',
    ],
  },
];

const filters = ['All', 'Business', 'Web App'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projectData;
    }

    return projectData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects">
      <div className="section-shell">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Builds That Solve Real Problems</h2>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveFilter(item)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                activeFilter === item
                  ? 'border-cyan/50 bg-cyan/10 text-cyan'
                  : 'border-edge bg-canvas/70 text-text-soft hover:text-cyan'
              }`}
            >
              {item}
            </button>
          ))}
          <span className="text-xs uppercase tracking-[0.15em] text-text-soft">
            Showing {filteredProjects.length} Project{filteredProjects.length > 1 ? 's' : ''}
          </span>
        </div>
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                className="panel group overflow-hidden p-6"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-edge bg-canvas/70">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
                    style={{ objectPosition: project.objectPosition }}
                    loading="lazy"
                    onError={(event) => {
                      const target = event.currentTarget;
                      if (target.src !== project.fallbackImage) {
                        target.src = project.fallbackImage;
                      }
                    }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-canvas/90 to-transparent" />
                </div>
                <div className="mt-6">
                  <div className="mb-3">
                    <span className="rounded-full border border-edge bg-canvas/70 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-text-soft">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main md:text-2xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-soft">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-edge bg-canvas/60 px-3 py-1 text-xs uppercase tracking-[0.12em] text-text-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-cyan/50 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan transition-colors hover:bg-cyan/20"
                    >
                      Live
                      <FaArrowUpRightFromSquare />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-lg border border-lime/50 bg-lime/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-lime transition-colors hover:bg-lime/20"
                    >
                      Case Study
                    </button>
                    {project.githubLink !== '#' && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-edge bg-canvas/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-text-main transition-colors hover:border-cyan/40 hover:text-cyan"
                      >
                        Code
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-[75] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="panel max-h-[88vh] w-full max-w-3xl overflow-y-auto p-6 md:p-8"
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 26, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-cyan">
                      {selectedProject.category}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-text-main md:text-3xl">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-lg border border-edge bg-canvas/70 px-3 py-2 text-xs uppercase tracking-[0.14em] text-text-soft transition-colors hover:text-cyan"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-edge">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} full preview`}
                    className="h-56 w-full object-cover md:h-72"
                    style={{ objectPosition: selectedProject.objectPosition }}
                    onError={(event) => {
                      const target = event.currentTarget;
                      if (target.src !== selectedProject.fallbackImage) {
                        target.src = selectedProject.fallbackImage;
                      }
                    }}
                  />
                </div>

                <p className="mt-6 text-sm leading-7 text-text-soft md:text-base">
                  {selectedProject.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-lime">Project Outcomes</h4>
                  <ul className="mt-3 space-y-3">
                    {selectedProject.outcomes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-text-soft">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-cyan/50 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan transition-colors hover:bg-cyan/20"
                  >
                    Visit Project
                    <FaArrowUpRightFromSquare />
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-edge bg-canvas/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-text-main transition-colors hover:border-cyan/40 hover:text-cyan"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
