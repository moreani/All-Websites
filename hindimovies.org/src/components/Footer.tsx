
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-cinema-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat font-bold text-cinema-blue">
              Hindi Movies AI
            </h3>
            <p className="text-gray-300 font-roboto">
              Your Personalized Guide to Hindi Cinema
            </p>
            <p className="text-sm text-gray-400 font-roboto">
              Discover amazing Hindi movies with AI-powered recommendations
              tailored just for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-bold">Quick Links</h4>
            <ul className="space-y-2 font-roboto">
              <li>
                <a href="#about" className="text-gray-300 hover:text-cinema-blue transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-cinema-blue transition-colors duration-200">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-cinema-blue transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://hindimovies.org" className="text-gray-300 hover:text-cinema-blue transition-colors duration-200">
                  Visit Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-bold">Contact Info</h4>
            <div className="space-y-2 font-roboto text-gray-300">
              <p>Phone: +91 8369848475</p>
              <p>Email: info@hindimovies.org</p>
              <p>Website: hindimovies.org</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 font-roboto text-sm">
            © 2024 Hindi Movies AI. All rights reserved.
          </p>
          <p className="text-gray-400 font-roboto text-sm mt-2 sm:mt-0">
            Owned by <span className="text-cinema-blue font-semibold">Scalium.in</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
