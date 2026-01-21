import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className={`text-2xl font-bold font-poppins transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Backgrounds <span className="gradient-text">AI</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918369848475"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-primary hover:text-white'
                  : 'text-white/90 hover:bg-white/20'
              }`}
            >
              <Phone size={18} />
            </a>
            <a
              href="mailto:info@backgrounds.in"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-primary hover:text-white'
                  : 'text-white/90 hover:bg-white/20'
              }`}
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4 animate-fade-in">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t">
              <a
                href="tel:+918369848475"
                className="p-2 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:info@backgrounds.in"
                className="p-2 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;