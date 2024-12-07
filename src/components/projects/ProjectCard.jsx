const ProjectCard = ({ project }) => {
    return (
      <motion.div 
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
    );
  };

  export default ProjectCard;  