
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold font-open-sans gradient-text">
            WireTransfer.in
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-wire-green transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-300 hover:text-wire-green transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-wire-green transition-colors"
              >
                Contact
              </button>
            </nav>
            
            <div className="flex items-center space-x-4 ml-6">
              <a 
                href="tel:+918369848475" 
                className="text-slate-300 hover:text-wire-green transition-colors"
                aria-label="Call us"
              >
                <Phone size={20} />
              </a>
              <a 
                href="mailto:info@wiretransfer.in" 
                className="text-slate-300 hover:text-wire-green transition-colors"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="tel:+918369848475" 
              className="text-slate-300 hover:text-wire-green transition-colors"
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>
            <a 
              href="mailto:info@wiretransfer.in" 
              className="text-slate-300 hover:text-wire-green transition-colors"
              aria-label="Email us"
            >
              <Mail size={20} />
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-wire-green"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-800 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-wire-green transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-300 hover:text-wire-green transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-wire-green transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
