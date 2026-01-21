
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-roboto font-bold text-2xl text-primary mb-4">
              ReportGen AI
            </div>
            <p className="font-open-sans text-gray-400 leading-relaxed">
              Automate Your Reporting with AI-Powered Insights. Transform your videos and documents into professional PDF reports in minutes.
            </p>
          </div>
          
          <div>
            <h4 className="font-roboto font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-open-sans text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-open-sans text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-open-sans text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-roboto font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 font-open-sans text-gray-400">
              <p>701, Stellar Tower, Chembur East</p>
              <p>Mumbai, Maharashtra 400071</p>
              <p>Phone: +91 8369848475</p>
              <p>Email: info@reportgenai.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-open-sans text-gray-400 mb-4 md:mb-0">
              © 2024 ReportGen AI. All rights reserved.
            </p>
            <p className="font-open-sans text-gray-400 flex items-center gap-1">
              Owned by 
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors ml-1"
              >
                Scalium.in
              </a>
              <Heart size={16} className="text-red-500 ml-1" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
