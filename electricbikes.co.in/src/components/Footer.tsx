import React from 'react';
import { Zap, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-gradient-start to-green-gradient-end p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">
                Electric Bikes AI
              </span>
            </div>
            <p className="font-roboto text-gray-300 leading-relaxed">
              Revolutionizing Eco-Friendly Transportation Through Intelligent Automation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="#hero" className="block font-roboto text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="block font-roboto text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="block font-roboto text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#contact" className="block font-roboto text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Get in Touch
            </h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-roboto">
                +91 8369848475
              </p>
              <p className="font-roboto">
                info@electricbikes.co.in
              </p>
              <p className="font-roboto">
                electricbikes.co.in
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-roboto text-gray-300 mb-4 md:mb-0">
            © 2025 Electric Bikes AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="font-roboto">Owned by</span>
            <Heart className="h-4 w-4 text-red-500" />
            <a 
              href="https://scalium.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-montserrat font-semibold text-primary hover:text-green-300 transition-colors"
            >
              Scalium.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;