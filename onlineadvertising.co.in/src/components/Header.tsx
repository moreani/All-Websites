
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold font-montserrat text-primary">
              Online Advertising Automation
            </h1>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+918369848475" className="flex items-center text-primary hover:text-primary/80 transition-colors">
              <Phone size={18} className="mr-2" />
              <span className="font-semibold">+91 8369848475</span>
            </a>
            <a href="mailto:info@onlineadvertising.co.in" className="flex items-center text-primary hover:text-primary/80 transition-colors">
              <Mail size={18} className="mr-2" />
              <span className="font-semibold">info@onlineadvertising.co.in</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="tel:+918369848475" className="flex items-center text-primary">
                <Phone size={18} className="mr-2" />
                <span>+91 8369848475</span>
              </a>
              <a href="mailto:info@onlineadvertising.co.in" className="flex items-center text-primary">
                <Mail size={18} className="mr-2" />
                <span>info@onlineadvertising.co.in</span>
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <button onClick={() => scrollToSection('hero')} className="text-left py-2 text-gray-700 hover:text-primary">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-primary">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-primary">Services</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700 hover:text-primary">Contact</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
