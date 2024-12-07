import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    "Programming Languages": ["PHP", "JavaScript", "Java", "TypeScript"],
    "Frameworks & Libraries": ["Node.js", "Express.js", "React", "Angular", "Laravel", "Next.js"],
    "Database": ["MySQL", "MongoDB"],
    "Tools": ["Postman", "VS Code", "Git/GitHub", "Docker"]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div 
              key={category}
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;