
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
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-poppins font-bold text-2xl text-marriageBlue">
            MarriageAI
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-marriageBlue transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-marriageBlue transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-marriageBlue transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+918369848475" 
              className="text-marriageBlue hover:text-marriageRed transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
              title="Call us"
            >
              <Phone size={20} />
            </a>
            <a 
              href="mailto:info@marriage.co.in" 
              className="text-marriageBlue hover:text-marriageRed transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
              title="Email us"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-marriageBlue p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-marriageBlue transition-colors duration-200 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-marriageBlue transition-colors duration-200 font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-marriageBlue transition-colors duration-200 font-medium text-left"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 mt-4">
                <a 
                  href="tel:+918369848475" 
                  className="text-marriageBlue hover:text-marriageRed transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
                >
                  <Phone size={20} />
                </a>
                <a 
                  href="mailto:info@marriage.co.in" 
                  className="text-marriageBlue hover:text-marriageRed transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
                >
                  <Mail size={20} />
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
