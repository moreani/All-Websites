
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-poppins font-bold text-2xl text-primary">
            ConcertTickets.in
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+918369848475" 
              className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>
            <a 
              href="mailto:info@concerttickets.in" 
              className="flex items-center justify-center w-10 h-10 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
              aria-label="Email us"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
