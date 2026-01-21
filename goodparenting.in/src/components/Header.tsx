
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 animate-fade-in">
      <div className="section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-playfair text-2xl md:text-3xl font-bold text-nurturing-teal cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('hero')}
          >
            Good Parenting
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-deep-text hover:text-nurturing-teal transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-deep-text hover:text-nurturing-teal transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-deep-text hover:text-nurturing-teal transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+918369848475" 
              className="p-2 rounded-full bg-nurturing-teal text-white hover:bg-nurturing-teal/90 transition-colors duration-300 hover-scale"
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>
            <a 
              href="mailto:info@goodparenting.in" 
              className="p-2 rounded-full bg-warm-coral text-white hover:bg-warm-coral/90 transition-colors duration-300 hover-scale"
              aria-label="Email us"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-deep-text hover:text-nurturing-teal transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-100 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-deep-text hover:text-nurturing-teal transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-deep-text hover:text-nurturing-teal transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-deep-text hover:text-nurturing-teal transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="tel:+918369848475" 
                  className="p-2 rounded-full bg-nurturing-teal text-white hover:bg-nurturing-teal/90 transition-colors duration-300"
                  aria-label="Call us"
                >
                  <Phone size={18} />
                </a>
                <a 
                  href="mailto:info@goodparenting.in" 
                  className="p-2 rounded-full bg-warm-coral text-white hover:bg-warm-coral/90 transition-colors duration-300"
                  aria-label="Email us"
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
