
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-roboto text-accent">
            Fashion Designing AI
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="tel:+918369848475" className="flex items-center text-accent hover:text-primary transition-colors">
            <Phone size={20} />
          </a>
          <a href="mailto:info@fashiondesigning.in" className="flex items-center text-accent hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
