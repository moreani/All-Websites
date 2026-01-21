import React from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="font-poppins font-bold text-2xl text-primary">
              Organic Farming AI
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-text hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-text hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-text hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-text hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+918369848475" 
                className="flex items-center text-primary hover:text-secondary transition-colors duration-300"
                title="Call us"
              >
                <Phone size={18} />
              </a>
              <a 
                href="mailto:info@organicfarming.co.in" 
                className="flex items-center text-primary hover:text-secondary transition-colors duration-300"
                title="Email us"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-text hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-text hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-text hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-text hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
            
            <div className="flex items-center space-x-4 mt-4">
              <a 
                href="tel:+918369848475" 
                className="flex items-center text-primary hover:text-secondary transition-colors duration-300"
                title="Call us"
              >
                <Phone size={18} />
                <span className="ml-2">Call Us</span>
              </a>
              <a 
                href="mailto:info@organicfarming.co.in" 
                className="flex items-center text-primary hover:text-secondary transition-colors duration-300"
                title="Email us"
              >
                <Mail size={18} />
                <span className="ml-2">Email Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;