
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-lato font-bold text-2xl mb-4">CurrencyWise</h3>
            <p className="font-roboto text-gray-200">
              Empowering You to Navigate Global Markets with Confidence
            </p>
          </div>
          
          <div>
            <h4 className="font-lato font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-roboto">
              <li><a href="#home" className="text-gray-200 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-200 hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-lato font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 font-roboto text-gray-200">
              <p>📞 +91 83698 48475</p>
              <p>✉️ info@currencyconverter.in</p>
              <p>🌐 currencyconverter.in</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-roboto text-gray-200">
            Owned by <a href="https://scalium.in" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Scalium.in</a>
          </p>
          <p className="font-roboto text-gray-300 text-sm mt-2">
            © 2024 CurrencyWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
