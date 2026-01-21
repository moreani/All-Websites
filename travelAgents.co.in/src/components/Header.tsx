import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Initialize header state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-white/95 shadow-md backdrop-blur-md py-3' 
          : 'bg-primary/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-poppins">
                <span className={`font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>TravelAgents</span>
                <span className="font-medium text-accent">AI</span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-8 mr-8">
              <a 
                href="#about" 
                className={`font-medium py-2 px-1 border-b-2 border-transparent hover:border-accent ${scrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'} transition-all`}
              >
                About
              </a>
              <a 
                href="#services" 
                className={`font-medium py-2 px-1 border-b-2 border-transparent hover:border-accent ${scrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'} transition-all`}
              >
                Solutions
              </a>
              <a 
                href="#contact" 
                className={`font-medium py-2 px-1 border-b-2 border-transparent hover:border-accent ${scrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'} transition-all`}
              >
                Contact
              </a>
            </nav>
            
            <div className={`flex items-center space-x-6 pl-6 ${scrolled ? 'border-l border-gray-200' : 'border-l border-white/20'}`}>
              <a 
                href="tel:+918369848475" 
                className={`flex items-center space-x-1 ${scrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-all group`}
                aria-label="Call us"
              >
                <span className={`p-2 rounded-full ${scrolled ? 'bg-primary/5' : 'bg-white/10'} group-hover:bg-accent/20 transition-colors`}>
                  <Phone size={16} className="group-hover:text-accent transition-colors" />
                </span>
                <span className="text-sm">+91 8369848475</span>
              </a>
              
              <a 
                href="mailto:info@travelagents.co.in" 
                className={`flex items-center space-x-1 ${scrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-all group`}
                aria-label="Email us"
              >
                <span className={`p-2 rounded-full ${scrolled ? 'bg-primary/5' : 'bg-white/10'} group-hover:bg-accent/20 transition-colors`}>
                  <Mail size={16} className="group-hover:text-accent transition-colors" />
                </span>
                <span className="text-sm">info@travelagents.co.in</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-full ${scrolled ? 'bg-primary/5' : 'bg-white/10'} hover:bg-accent/20 transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-accent" />
              ) : (
                <Menu size={24} className={scrolled ? 'text-primary' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-5 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-3 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md">
              <a 
                href="#about" 
                className="py-2.5 px-4 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors flex items-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="py-2.5 px-4 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors flex items-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="#contact" 
                className="py-2.5 px-4 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors flex items-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              
              <div className="pt-3 mt-2 border-t border-gray-200">
                <div className="flex items-center py-2 px-4">
                  <Phone size={18} className="text-accent mr-3" />
                  <a href="tel:+918369848475" className="text-primary hover:text-accent transition-colors">
                    +91 8369848475
                  </a>
                </div>
                
                <div className="flex items-center py-2 px-4">
                  <Mail size={18} className="text-accent mr-3" />
                  <a href="mailto:info@travelagents.co.in" className="text-primary hover:text-accent transition-colors truncate">
                    info@travelagents.co.in
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
