// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </motion.div>
  );
};

export default App;