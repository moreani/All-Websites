
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-roboto font-bold text-xl">
                Rajasthani AI Solutions
              </span>
            </div>
            <p className="font-opensans text-gray-400 mb-4">
              Empowering Rajasthan's Industries with Intelligent Innovations
            </p>
          </div>
          
          <div>
            <h3 className="font-roboto font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-opensans">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-roboto font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 font-opensans text-gray-400">
              <p>Phone: <a href="tel:+918369848475" className="hover:text-white transition-colors">+91 8369848475</a></p>
              <p>Email: <a href="mailto:info@rajasthani.co.in" className="hover:text-white transition-colors">info@rajasthani.co.in</a></p>
              <p>Mumbai, Maharashtra 400071</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-opensans text-gray-400">
            Rajasthani AI Solutions © 2025 - Owned by{' '}
            <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Scalium.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
