import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

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
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="font-oswald font-bold text-xl text-gray-800">CNG Smart Solutions</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Precision Management for Gas Stations</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+918369848475" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 8369848475</span>
            </a>
            <a href="mailto:info@cng.in" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">info@cng.in</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-primary transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-primary transition-colors font-medium">
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a href="tel:+918369848475" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 8369848475</span>
                </a>
                <a href="mailto:info@cng.in" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@cng.in</span>
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