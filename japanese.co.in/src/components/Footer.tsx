import React from 'react';
import { Zap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-accent" />
              <span className="font-poppins font-bold text-xl">Japanese AI Solutions</span>
            </div>
            <p className="font-roboto text-white/80 mb-6 leading-relaxed">
              Transforming industries with Japanese innovation and cutting-edge AI technology. We bring precision, quality, and excellence to every project.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-accent transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="font-roboto text-white/80 hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 font-roboto text-white/80">
              <li>Automotive AI Solutions</li>
              <li>Smart Manufacturing</li>
              <li>Data Analytics</li>
              <li>Customer Engagement</li>
              <li>Consulting Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-3 font-roboto text-white/80">
              <p>701, Stellar Tower, Chembur East, Mumbai, Maharashtra 400071</p>
              <p>Phone: +91 8369848475</p>
              <p>Email: info@japanese.co.in</p>
              <p>Website: japanese.co.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-roboto text-white/60 text-center md:text-left">
              © 2025 Japanese AI Solutions. All rights reserved.
            </p>
            <p className="font-roboto text-white/60 text-center md:text-right">
              Owned by <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Scalium.in</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;