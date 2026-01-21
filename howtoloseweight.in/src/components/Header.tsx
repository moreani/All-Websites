import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-xl sm:text-2xl font-heading font-bold text-primary cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              How To Lose Weight
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-text hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-text hover:text-primary transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-text hover:text-primary transition-colors duration-200"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-text hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918369848475"
              className="flex items-center text-primary hover:text-primary-dark transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+91 8369848475</span>
            </a>
            <a
              href="mailto:info@howtoloseweight.in"
              className="flex items-center text-primary hover:text-primary-dark transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">Contact Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-primary transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-text hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-text hover:text-primary transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="block w-full text-left px-3 py-2 text-text hover:text-primary transition-colors duration-200"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-text hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <a
                  href="tel:+918369848475"
                  className="flex items-center px-3 py-2 text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 8369848475</span>
                </a>
                <a
                  href="mailto:info@howtoloseweight.in"
                  className="flex items-center px-3 py-2 text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;