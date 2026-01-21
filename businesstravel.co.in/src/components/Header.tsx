
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-roboto font-bold text-2xl text-primary-blue">
            Business Travel AI
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="font-open-sans font-medium text-gray-700 hover:text-primary-blue transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-open-sans font-medium text-gray-700 hover:text-primary-blue transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-open-sans font-medium text-gray-700 hover:text-primary-blue transition-colors duration-200"
            >
              Contact
            </button>
            <div className="flex items-center space-x-4 ml-8">
              <a 
                href="tel:+918369848475"
                className="text-primary-blue hover:text-accent-green transition-colors duration-200"
              >
                <i className="fas fa-phone text-lg"></i>
              </a>
              <a 
                href="mailto:info@businesstravel.co.in"
                className="text-primary-blue hover:text-accent-green transition-colors duration-200"
              >
                <i className="fas fa-envelope text-lg"></i>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-blue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="font-open-sans font-medium text-gray-700 hover:text-primary-blue transition-colors duration-200 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="font-open-sans font-medium text-gray-700 hover:text-primary-blue transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-open-sans font-medium text-gray-700 hover:text-primary-blue transition-colors duration-200 text-left"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="tel:+918369848475"
                  className="text-primary-blue hover:text-accent-green transition-colors duration-200"
                >
                  <i className="fas fa-phone text-lg"></i>
                </a>
                <a 
                  href="mailto:info@businesstravel.co.in"
                  className="text-primary-blue hover:text-accent-green transition-colors duration-200"
                >
                  <i className="fas fa-envelope text-lg"></i>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
