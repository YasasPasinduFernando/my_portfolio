const About = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              {/* About content */}
            </p>
          </motion.div>
        </div>
      </section>
    );
  };