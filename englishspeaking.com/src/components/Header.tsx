
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-roboto font-bold text-2xl text-brand-blue">
            EnglishSpeaking.ai
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="font-lato hover:text-brand-blue transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-lato hover:text-brand-blue transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-lato hover:text-brand-blue transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+918369848475" 
              className="flex items-center text-brand-blue hover:text-brand-green transition-colors duration-300"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-roboto">+91 8369848475</span>
            </a>
            <a 
              href="mailto:info@englishspeaking.com" 
              className="flex items-center text-brand-blue hover:text-brand-green transition-colors duration-300"
            >
              <Mail size={18} className="mr-2" />
              <span className="font-roboto">info@englishspeaking.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="font-lato text-left hover:text-brand-blue transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="font-lato text-left hover:text-brand-blue transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-lato text-left hover:text-brand-blue transition-colors duration-300"
              >
                Contact
              </button>
              <a 
                href="tel:+918369848475" 
                className="flex items-center text-brand-blue"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-roboto">+91 8369848475</span>
              </a>
              <a 
                href="mailto:info@englishspeaking.com" 
                className="flex items-center text-brand-blue"
              >
                <Mail size={18} className="mr-2" />
                <span className="font-roboto">info@englishspeaking.com</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
