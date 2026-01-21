
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat font-bold primary-color">
              OnlineRecharge.in
            </h3>
            <p className="text-gray-400 leading-relaxed">
              AI-Powered Automation for Seamless Digital Experiences. Transforming businesses across India with cutting-edge AI solutions.
            </p>
            <div className="text-sm text-gray-400">
              Owned by <span className="text-blue-400">Scalium.in</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="font-medium text-white">Address:</p>
                <p className="text-sm">
                  701, Stellar Tower, Chembur East<br />
                  Mumbai, Maharashtra 400071
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Phone:</p>
                <a
                  href="tel:+918369848475"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 8369848475
                </a>
              </div>
              <div>
                <p className="font-medium text-white">Email:</p>
                <a
                  href="mailto:info@onlinerecharge.in"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  info@onlinerecharge.in
                </a>
              </div>
              <div>
                <p className="font-medium text-white">Website:</p>
                <span className="text-blue-400">onlinerecharge.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} OnlineRecharge.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
