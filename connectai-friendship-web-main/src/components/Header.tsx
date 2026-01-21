
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-brand font-heading">
              Friendship AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-brand transition-colors duration-200"
            >
              About ConnectAI
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary-brand transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-brand transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Contact Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918369848475"
              className="text-primary-brand hover:text-accent-brand transition-colors duration-200"
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:info@friendship.co.in"
              className="text-primary-brand hover:text-accent-brand transition-colors duration-200"
              aria-label="Email us"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-primary-brand transition-colors duration-200 w-full text-left"
              >
                About ConnectAI
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-gray-700 hover:text-primary-brand transition-colors duration-200 w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-primary-brand transition-colors duration-200 w-full text-left"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="tel:+918369848475"
                  className="text-primary-brand hover:text-accent-brand transition-colors duration-200"
                  aria-label="Call us"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="mailto:info@friendship.co.in"
                  className="text-primary-brand hover:text-accent-brand transition-colors duration-200"
                  aria-label="Email us"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
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
