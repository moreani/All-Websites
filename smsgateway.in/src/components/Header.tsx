import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-montserrat text-primary">
              SMSGateway.in
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918369848475"
              className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              <Phone size={18} />
            </a>
            <a
              href="mailto:info@smsgateway.in"
              className="flex items-center justify-center w-10 h-10 bg-accent text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200 mx-4">
                <a
                  href="tel:+918369848475"
                  className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="mailto:info@smsgateway.in"
                  className="flex items-center justify-center w-10 h-10 bg-accent text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  <Mail size={18} />
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