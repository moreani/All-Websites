
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-poppins text-primary mb-4">
              Coloring Books
            </h3>
            <p className="text-gray-300 mb-4">
              Unleash Creativity with AI-Powered Coloring Tools
            </p>
            <p className="text-gray-400 text-sm">
              Empowering children's creativity through innovative technology and educational art experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>+91 8369848475</p>
              <p>info@coloringbooks.in</p>
              <p>coloringbooks.in</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Coloring Books. All rights reserved. Owned by{' '}
            <a href="https://scalium.in" className="text-primary hover:text-primary/90">
              Scalium.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
