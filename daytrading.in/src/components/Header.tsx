
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 bg-brand-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-roboto font-bold text-brand-primary">
            DayTrading.AI
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:+918369848475" 
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              +91 8369848475
            </a>
            <a 
              href="mailto:info@daytrading.in" 
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              info@daytrading.in
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-brand-dark hover:text-brand-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-brand-dark hover:text-brand-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-brand-dark hover:text-brand-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-brand-dark hover:text-brand-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-brand-dark hover:text-brand-primary transition-colors text-left"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="tel:+918369848475" 
                  className="block text-brand-dark hover:text-brand-primary transition-colors mb-2"
                >
                  +91 8369848475
                </a>
                <a 
                  href="mailto:info@daytrading.in" 
                  className="block text-brand-dark hover:text-brand-primary transition-colors"
                >
                  info@daytrading.in
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
