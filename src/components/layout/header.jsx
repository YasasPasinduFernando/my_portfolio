import React from 'react';
import { Github, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const SocialIcon = ({ href, icon, label }) => (
  <div className="group relative">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 hover:bg-white/30 transform hover:scale-110 transition-all duration-300 hover:rotate-6"
    >
      <div className="text-white">
        {icon}
      </div>
    </a>
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black/80 text-white text-sm py-1 px-2 rounded">
      {label}
    </span>
  </div>
);

const Header = () => {
  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative">
                <img
                  src="/api/placeholder/250/250"
                  alt="Yasas Pasindu Fernando"
                  className="rounded-full w-64 h-64 object-cover border-4 border-white/30 transform transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Yasas Pasindu Fernando
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 font-light">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
              Building beautiful, responsive, and user-friendly web applications 
              with modern technologies and creative solutions.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <SocialIcon
                href="https://github.com/YasasPasinduFernando"
                icon={<Github size={24} />}
                label="GitHub"
              />
              <SocialIcon
                href="mailto:yasaspasindufernando@gmail.com"
                icon={<Mail size={24} />}
                label="Email"
              />
              <SocialIcon
                href="tel:+94776905654"
                icon={<Phone size={24} />}
                label="Phone"
              />
              <SocialIcon
                href="#linkedin"
                icon={<Linkedin size={24} />}
                label="LinkedIn"
              />
              <SocialIcon
                href="#twitter"
                icon={<Twitter size={24} />}
                label="Twitter"
              />
            </div>

            {/* CTA Button */}
            <button className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold transform hover:scale-105 transition-all duration-300">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;