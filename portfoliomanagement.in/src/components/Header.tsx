
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-backgroundLight/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-montserrat font-bold text-primary">
            Portfolio Management AI
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="tel:+918369848475" 
            className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
          >
            <Phone size={20} />
            <span className="hidden md:inline font-roboto">+91 8369848475</span>
          </a>
          <a 
            href="mailto:info@portfoliomanagement.in" 
            className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
          >
            <Mail size={20} />
            <span className="hidden md:inline font-roboto">info@portfoliomanagement.in</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
