import React, { useState, useEffect } from 'react';
import { BookOpen, Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            <h1 className={`font-literata font-bold text-xl lg:text-2xl transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              OnlineBooks AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-text-dark' : 'text-white hover:text-accent'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-text-dark' : 'text-white hover:text-accent'
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-text-dark' : 'text-white hover:text-accent'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+918369848475"
              className={`p-2 rounded-full transition-all hover:scale-110 ${
                isScrolled 
                  ? 'text-primary hover:bg-primary hover:text-white' 
                  : 'text-white hover:bg-white hover:text-primary'
              }`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href="mailto:info@onlinebooks.co.in"
              className={`p-2 rounded-full transition-all hover:scale-110 ${
                isScrolled 
                  ? 'text-primary hover:bg-primary hover:text-white' 
                  : 'text-white hover:bg-white hover:text-primary'
              }`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-text-dark' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left font-medium text-text-dark hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left font-medium text-text-dark hover:text-primary transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left font-medium text-text-dark hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-2">
                <a href="tel:+918369848475" className="text-primary hover:text-primary/80">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:info@onlinebooks.co.in" className="text-primary hover:text-primary/80">
                  <Mail className="w-5 h-5" />
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