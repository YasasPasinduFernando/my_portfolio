const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © 2024 Yasas Pasindu Fernando. All rights reserved.
          </motion.p>
        </div>
      </footer>
    );
  };