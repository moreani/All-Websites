
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold trade-gradient-text font-inter">
              BankNifty
            </h1>
            <div className="w-2 h-2 bg-profit-green rounded-full animate-pulse-glow"></div>
          </div>

          {/* Contact Icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+918369848475" 
              className="flex items-center space-x-2 text-trade-blue hover:text-profit-green transition-colors duration-300 group"
            >
              <div className="p-2 bg-trade-blue/10 rounded-lg group-hover:bg-profit-green/10 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="hidden md:block font-medium">+91 8369848475</span>
            </a>
            <a 
              href="mailto:info@banknifty.in" 
              className="flex items-center space-x-2 text-trade-blue hover:text-profit-green transition-colors duration-300 group"
            >
              <div className="p-2 bg-trade-blue/10 rounded-lg group-hover:bg-profit-green/10 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="hidden md:block font-medium">info@banknifty.in</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Market Ticker */}
      <div className="bg-trade-blue text-white py-2 overflow-hidden">
        <div className="animate-market-ticker whitespace-nowrap font-mono text-sm">
          <span className="mx-8">BANKNIFTY: 45,234.50 <span className="text-profit-green">+2.34%</span></span>
          <span className="mx-8">HDFC: 1,689.25 <span className="text-profit-green">+1.85%</span></span>
          <span className="mx-8">ICICI: 967.80 <span className="text-red-400">-0.45%</span></span>
          <span className="mx-8">SBI: 542.15 <span className="text-profit-green">+3.12%</span></span>
          <span className="mx-8">AXIS: 1,134.60 <span className="text-profit-green">+0.89%</span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
