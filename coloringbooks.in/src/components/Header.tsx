
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold font-poppins text-primary">
            Coloring Books
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="tel:+918369848475" 
            className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200"
          >
            <Phone size={20} />
            <span className="hidden md:inline">+91 8369848475</span>
          </a>
          
          <a 
            href="mailto:info@coloringbooks.in" 
            className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200"
          >
            <Mail size={20} />
            <span className="hidden md:inline">info@coloringbooks.in</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
