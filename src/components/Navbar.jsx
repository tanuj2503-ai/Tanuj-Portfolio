import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary-dark/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-white hover:text-accent transition-colors">
          Tanuj Sharma
        </a>
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-accent transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;