
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg font-roboto">ER</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary font-roboto">ExchangeRates Academy</h1>
            <p className="text-sm text-gray-600 font-lora">Empowering Your Currency Knowledge</p>
          </div>
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
            href="mailto:info@exchangerates.in" 
            className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
          >
            <Mail size={20} />
            <span className="hidden md:inline font-roboto">info@exchangerates.in</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
