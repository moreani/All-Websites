
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Complaint AI Solutions
            </h3>
            <p className="text-gray-400 mb-4">
              Automating Excellence in Grievance Management
            </p>
            <p className="text-gray-400 text-sm">
              Transforming customer complaints into opportunities for growth through intelligent AI automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                  Scalium.in
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>📍 701, Stellar Tower, Chembur East</p>
              <p>Mumbai, Maharashtra 400071</p>
              <p>📞 +91 8369848475</p>
              <p>✉️ info@complaint.co.in</p>
              <p>🌐 complaint.co.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Complaint AI Solutions. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Owned by{" "}
            <a 
              href="https://scalium.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-accent transition-colors duration-300"
            >
              Scalium.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
