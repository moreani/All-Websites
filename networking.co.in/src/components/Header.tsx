import React, { useState, useEffect } from 'react';
import { Network, Menu, X } from 'lucide-react';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Network className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 font-montserrat">Networking AI Consult</h1>
            <p className="text-xs text-gray-600 font-roboto">Empowering Your Business</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;