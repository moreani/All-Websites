
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PT</span>
              </div>
              <span className="text-xl font-bold">PartTimeJobs.co.in</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionary AI-powered freelancing portal connecting talented professionals 
              with perfect opportunities. Transform your career today.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@parttimejobs.co.in</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91 8369848475</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 space-y-2">
            <p>
              701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, 
              Basant Garden, Chembur, Mumbai, Maharashtra 400071
            </p>
            <p>
              Phone: +91 8369848475 | Email: info@parttimejobs.co.in | Website: parttimejobs.co.in
            </p>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-sm">
                © 2024 PartTimeJobs.co.in. All rights reserved. | Owned by Scalium.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
