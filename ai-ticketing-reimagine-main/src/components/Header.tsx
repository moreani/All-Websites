
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-roboto font-bold text-primary">
            AirlineTickets.in
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="tel:+918369848475" 
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-200"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">+91 8369848475</span>
          </a>
          <a 
            href="mailto:info@airlinetickets.in" 
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-200"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">info@airlinetickets.in</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
