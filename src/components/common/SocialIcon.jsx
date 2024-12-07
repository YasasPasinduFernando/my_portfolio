const SocialIcon = ({ href, icon }) => (
    <motion.a 
      href={href} 
      className="hover:text-blue-200 transform hover:scale-110 transition-transform"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
  
  export default SocialIcon;