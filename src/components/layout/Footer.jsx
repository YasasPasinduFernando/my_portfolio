import React from 'react';
import { Github, Mail, Phone, Linkedin, Twitter, Heart } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-white/80 hover:text-white transition-colors duration-300 hover:underline decoration-2 underline-offset-4"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Contact Section */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-white/80">
              <p>Colombo, Sri Lanka</p>
              <p>Phone: +94 776905654</p>
              <p>Email: yasaspasindufernando@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <FooterLink href="#about">About Me</FooterLink>
              <FooterLink href="#portfolio">Portfolio</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              <SocialIcon href="https://github.com/YasasPasinduFernando" icon={<Github size={20} />} />
              <SocialIcon href="#linkedin" icon={<Linkedin size={20} />} />
              <SocialIcon href="#twitter" icon={<Twitter size={20} />} />
              <SocialIcon href="mailto:yasaspasindufernando@gmail.com" icon={<Mail size={20} />} />
              <SocialIcon href="tel:+94776905654" icon={<Phone size={20} />} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="text-center space-y-4">
          <p className="text-white/80 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-pink-400 animate-pulse" /> by Yasas Pasindu Fernando
          </p>
          <p className="text-white/60">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;