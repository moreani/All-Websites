
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-custom-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary font-roboto">
              CataractAI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-primary hover:text-accent transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary hover:text-accent transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-primary hover:text-accent transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-primary hover:text-accent transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:+918369848475" 
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="text-sm">+91 8369848475</span>
            </a>
            <a 
              href="mailto:info@cataract.co.in" 
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
            >
              <Mail size={18} />
              <span className="text-sm">info@cataract.co.in</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary hover:text-accent transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-primary hover:text-accent transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-primary hover:text-accent transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-primary hover:text-accent transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-primary hover:text-accent transition-colors duration-300"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="tel:+918369848475" 
                  className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300 mb-2"
                >
                  <Phone size={18} />
                  <span>+91 8369848475</span>
                </a>
                <a 
                  href="mailto:info@cataract.co.in" 
                  className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span>info@cataract.co.in</span>
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
