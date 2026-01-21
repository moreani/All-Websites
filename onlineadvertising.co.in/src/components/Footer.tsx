
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-montserrat text-white mb-2">
              Online Advertising Automation
            </h3>
            <p className="text-gray-400 text-lg">
              "Streamline Your Campaigns with Intelligent Automation"
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
            <a 
              href="tel:+918369848475" 
              className="text-gray-300 hover:text-accent transition-colors"
            >
              +91 8369848475
            </a>
            <a 
              href="mailto:info@onlineadvertising.co.in" 
              className="text-gray-300 hover:text-accent transition-colors"
            >
              info@onlineadvertising.co.in
            </a>
            <span className="text-gray-300">
              onlineadvertising.co.in
            </span>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2024 Online Advertising Automation. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Owned by <span className="text-accent font-semibold">Scalium.in</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
