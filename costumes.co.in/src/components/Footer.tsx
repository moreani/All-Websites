
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-nunito font-bold text-2xl text-primary mb-4">
              Costumes AI
            </div>
            <p className="text-gray-400 font-lato leading-relaxed">
              Predict the Perfect Costume: AI-Powered Inventory & Demand Forecasting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-primary transition-colors font-lato"
              >
                About Us
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-primary transition-colors font-lato"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-primary transition-colors font-lato"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400 font-lato">
              <div>Mumbai, Maharashtra</div>
              <div>+91 8369848475</div>
              <div>info@costumes.co.in</div>
              <div>costumes.co.in</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="text-gray-400 font-lato">
            <p>&copy; 2025 Costumes AI. All rights reserved.</p>
            <p className="mt-2">
              Owned by{" "}
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Scalium.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
