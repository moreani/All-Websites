
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BJ</span>
              </div>
              <span className="text-xl font-poppins font-bold">BPO Jobs</span>
            </div>
            <p className="text-gray-400 mb-4">
              Automate. Optimize. Outperform.<br />
              AI-Powered Solutions for the Future of BPO.
            </p>
            <p className="text-sm text-gray-500">
              Owned by <a href="https://scalium.in" className="text-primary hover:underline">Scalium.in</a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold font-poppins mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-poppins mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>+91 8369848475</p>
              <p>info@bpojobs.co.in</p>
              <p>bpojobs.co.in</p>
              <p>Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BPO Jobs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
