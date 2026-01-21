
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-poppins text-primary mb-4">Animation AI</h3>
            <p className="text-gray-300 font-roboto">
              Unlock Your Creativity with Intelligent Guidance
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2 font-roboto">
              <li><a href="#hero" className="text-gray-300 hover:text-primary transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-200">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300 font-roboto">
              <p>+91 8369848475</p>
              <p>info@animation.in</p>
              <p>animation.in</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-roboto">
            © 2024 Animation AI. Owned by <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Scalium.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
