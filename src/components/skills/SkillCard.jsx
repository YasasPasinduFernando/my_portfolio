const SkillCard = ({ category, skills }) => {
    return (
      <motion.div 
        className="bg-gray-50 rounded-lg p-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
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
    );
  };