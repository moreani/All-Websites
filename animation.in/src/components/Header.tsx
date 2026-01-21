
import { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
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
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-poppins text-primary">Animation AI</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-roboto"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-roboto"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-roboto"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-roboto"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+918369848475" className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200">
              <Phone size={16} className="mr-1" />
              <span className="hidden sm:inline font-roboto">+91 8369848475</span>
            </a>
            <a href="mailto:info@animation.in" className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200">
              <Mail size={16} className="mr-1" />
              <span className="hidden sm:inline font-roboto">info@animation.in</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
