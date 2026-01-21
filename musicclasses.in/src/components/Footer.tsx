
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-roboto mb-4">MusicClasses</h3>
            <p className="text-gray-300 font-roboto mb-4">
              Transforming Music Learning with AI
            </p>
            <p className="text-gray-400 font-roboto text-sm">
              Empowering musicians across India with cutting-edge technology and personalized learning experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-roboto mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-roboto mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 <a href="tel:+918369848475" className="hover:text-primary transition-colors">+91 8369848475</a></p>
              <p>✉️ <a href="mailto:info@musicclasses.in" className="hover:text-primary transition-colors">info@musicclasses.in</a></p>
              <p>🌐 <a href="https://musicclasses.in" className="hover:text-primary transition-colors">musicclasses.in</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-roboto">
            © 2024 MusicClasses. All rights reserved. | Owned by{' '}
            <a href="https://scalium.in" className="text-primary hover:text-primary/80 transition-colors">
              Scalium.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
