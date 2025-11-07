import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center bg-secondary-dark p-8 rounded-lg shadow-lg space-y-4"
        >
          <div className="space-y-4">
            <p className="text-lg mb-4">
              <span className="font-bold text-accent">Phone:</span> 
              <a href="tel:9484875152" className="hover:underline ml-2">9484875152</a>
            </p>
            <p className="text-lg">
              <span className="font-bold text-accent">Email:</span> 
              <a href="mailto:tanuj9484@gmail.com" className="hover:underline ml-2">tanuj9484@gmail.com</a>
            </p>
            <p className="text-lg mt-4">
              <span className="font-bold text-accent">WhatsApp:</span> 
              <a 
                href="https://wa.me/919484875152" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline ml-2 text-green-400"
              >
                Chat with me
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;