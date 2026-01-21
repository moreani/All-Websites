import React from 'react';
import { Brain, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-accent to-red-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">ExamResults.Co.In</h3>
                <p className="font-roboto text-sm text-gray-300">Transforming Exam Insights with AI</p>
              </div>
            </div>
            <p className="font-roboto text-gray-300 leading-relaxed mb-6 max-w-md">
              "Transforming Examination Data into Insightful Decisions" - Empowering educational institutions 
              across India with AI-powered analytics and insights for better student outcomes.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-accent transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-accent transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-accent transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-accent transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="font-roboto text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-3 font-roboto text-gray-300">
              <p className="text-sm">
                701, Stellar Tower, Chembur East<br />
                Mumbai, Maharashtra 400071
              </p>
              <p className="text-sm">+91 8369848475</p>
              <p className="text-sm">info@examresults.co.in</p>
              <p className="text-sm">examresults.co.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-roboto text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 ExamResults.Co.In | Owned by <span className="text-accent">Scalium.in</span> | All rights reserved
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-accent hover:bg-red-600 p-2 rounded-lg transition-colors duration-200 
                     transform hover:-translate-y-1"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;