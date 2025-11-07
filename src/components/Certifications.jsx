import React from 'react';
import { motion } from 'framer-motion';

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
    <section id="certifications" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Achievements & <span className="text-accent">Certifications</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block p-6 bg-secondary-dark rounded-lg hover:bg-gray-800 hover:shadow-lg hover:shadow-accent/20 transition-all">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                  <span className="text-accent font-semibold">View Badge</span>
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