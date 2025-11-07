import { motion } from 'framer-motion';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

// IMPORTANT: Add your photo to the `src/assets` folder
// and import it like this:
// import profilePhoto from '../assets/your-photo.png'; 

const Hero = () => {
  return (
    <div id="hero" className="h-screen flex flex-col justify-center items-center text-center">
      {/* <motion.img 
          src={profilePhoto} 
          alt="Tanuj Sharma"
          className="w-48 h-48 rounded-full object-cover mb-8 border-4 border-accent"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Tanuj Sharma
      </motion.h1>
      <TypeAnimation
        sequence={[
          'IMSC IT Student',
          2000,
          'Cloud & App Development',
          2000,
          'Building Innovative Solutions',
          2000,
        ]}
        wrapper="h2"
        speed={50}
        className="text-2xl md:text-4xl text-accent"
        repeat={Infinity}
      />
    </div>
  );
};

export default Hero;