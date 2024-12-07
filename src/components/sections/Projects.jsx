import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Finance Tracker Application",
      description: "A mobile-responsive web application to track financial transactions and archive goals with Google authentication.",
      tech: ["PHP", "Node.js", "Express.js", "MySQL", "Google OAuth"],
    },
    {
      title: "Fuel Storage Management System",
      description: "Streamlined storage operations system for Cannel Pvt Ltd, Sri Lanka.",
      tech: ["Java", "Spring Boot"],
    },
    {
      title: "Hotel & Restaurant Management System",
      description: "System to handle customer details, orders, and room bookings for Hotel Samudai-Beruwala.",
      tech: ["React", "Spring Boot"],
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;