import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary font-primary">
              InflationAI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            
            {/* Contact Icons */}
            <div className="flex items-center space-x-3 ml-6">
              <a
                href="tel:+918369848475"
                className="bg-primary text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-300"
                title="Call us"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:info@inflation.co.in"
                className="bg-primary text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-300"
                title="Email us"
              >
                <Mail size={16} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              
              {/* Mobile Contact Icons */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="tel:+918369848475"
                  className="bg-primary text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-300"
                  title="Call us"
                >
                  <Phone size={16} />
                </a>
                <a
                  href="mailto:info@inflation.co.in"
                  className="bg-primary text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-300"
                  title="Email us"
                >
                  <Mail size={16} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;