import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Covid19Logo: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Enhanced Logo Icon with AI and Healthcare Elements - Always Crimson */}
      <div className="relative w-12 h-12 text-crimson">
        <svg viewBox="0 0 48 48" className="w-full h-full">
          {/* Main virus-like circle */}
          <circle 
            cx="24" 
            cy="24" 
            r="14" 
            fill="currentColor"
            className="opacity-90"
          />
          
          {/* Spike proteins around the circle */}
          <g fill="currentColor">
            {/* Top */}
            <circle cx="24" cy="5" r="3" />
            <rect x="23" y="8" width="2" height="6" />
            
            {/* Top Right */}
            <circle cx="36" cy="12" r="2.5" />
            <rect x="32" y="15" width="5" height="2" transform="rotate(45 34.5 16)" />
            
            {/* Right */}
            <circle cx="43" cy="24" r="3" />
            <rect x="33" y="23" width="6" height="2" />
            
            {/* Bottom Right */}
            <circle cx="36" cy="36" r="2.5" />
            <rect x="32" y="31" width="5" height="2" transform="rotate(-45 34.5 32)" />
            
            {/* Bottom */}
            <circle cx="24" cy="43" r="3" />
            <rect x="23" y="34" width="2" height="6" />
            
            {/* Bottom Left */}
            <circle cx="12" cy="36" r="2.5" />
            <rect x="11" y="31" width="5" height="2" transform="rotate(45 13.5 32)" />
            
            {/* Left */}
            <circle cx="5" cy="24" r="3" />
            <rect x="9" y="23" width="6" height="2" />
            
            {/* Top Left */}
            <circle cx="12" cy="12" r="2.5" />
            <rect x="11" y="15" width="5" height="2" transform="rotate(-45 13.5 16)" />
          </g>
          
          {/* Healthcare Cross Symbol - Always White */}
          <g fill="white">
            <rect x="22" y="18" width="4" height="12" rx="1" />
            <rect x="18" y="22" width="12" height="4" rx="1" />
          </g>
          
          {/* AI Neural Network Dots - Always White */}
          <g fill="rgba(255,255,255,0.8)">
            <circle cx="19" cy="16" r="1" />
            <circle cx="29" cy="16" r="1" />
            <circle cx="19" cy="32" r="1" />
            <circle cx="29" cy="32" r="1" />
          </g>
          
          {/* AI Connection Lines - Always White */}
          <g stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none">
            <line x1="19" y1="16" x2="22" y2="20" />
            <line x1="29" y1="16" x2="26" y2="20" />
            <line x1="19" y1="32" x2="22" y2="28" />
            <line x1="29" y1="32" x2="26" y2="28" />
          </g>
        </svg>
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`text-xl font-bold font-montserrat leading-tight ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`}>
          Covid19.In
        </span>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
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
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Covid19Logo isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-crimson' 
                  : 'text-white hover:text-saffron'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-crimson' 
                  : 'text-white hover:text-saffron'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-crimson' 
                  : 'text-white hover:text-saffron'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-crimson' 
                  : 'text-white hover:text-saffron'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-crimson hover:bg-gray-50 rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-crimson hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-crimson hover:bg-gray-50 rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-crimson hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;