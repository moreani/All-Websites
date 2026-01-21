
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold text-primary">
            Poems.ai
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-text hover:text-primary transition-colors font-roboto">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-text hover:text-primary transition-colors font-roboto">About</button>
            <button onClick={() => scrollToSection('services')} className="text-text hover:text-primary transition-colors font-roboto">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-text hover:text-primary transition-colors font-roboto">Contact</button>
          </div>
          <Button 
            onClick={() => scrollToSection('services')} 
            className="bg-primary hover:bg-primary/90 text-white font-roboto"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
