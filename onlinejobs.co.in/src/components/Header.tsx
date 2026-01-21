
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-section shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-primary">
              OnlineJobs
            </h1>
            <span className="ml-2 text-sm text-gray-600 font-roboto hidden md:inline">
              Your AI-Powered Job Search Portal
            </span>
          </div>
          
          {/* Contact Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+918369848475" 
              className="flex items-center text-primary hover:text-accent transition-colors duration-300 group"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline font-roboto">+91 8369848475</span>
            </a>
            <a 
              href="mailto:info@onlinejobs.co.in" 
              className="flex items-center text-primary hover:text-accent transition-colors duration-300 group"
              aria-label="Email us"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline font-roboto">info@onlinejobs.co.in</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
