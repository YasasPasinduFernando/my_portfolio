import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/api/placeholder/200/200"
              alt="Yasas Pasindu Fernando" 
              className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">Yasas Pasindu Fernando</h1>
            <h2 className="text-2xl mb-6">Full Stack Developer</h2>
            <div className="flex space-x-4 justify-center md:justify-start">
              <SocialIcon href="https://github.com/YasasPasinduFernando" icon={<Github size={24} />} />
              <SocialIcon href="mailto:yasaspasindufernando@gmail.com" icon={<Mail size={24} />} />
              <SocialIcon href="tel:+94776905654" icon={<Phone size={24} />} />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};