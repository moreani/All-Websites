import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Covid19FooterLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Enhanced Logo Icon with AI and Healthcare Elements */}
      <div className="relative w-10 h-10 text-crimson">
        <svg viewBox="0 0 48 48" className="w-full h-full">
          {/* Main virus-like circle */}
          <circle 
            cx="24" 
            cy="24" 
            r="14" 
            fill="currentColor"
            className="opacity-90"
          />
          
          {/* Spike proteins around the circle */}
          <g fill="currentColor">
            {/* Top */}
            <circle cx="24" cy="5" r="3" />
            <rect x="23" y="8" width="2" height="6" />
            
            {/* Top Right */}
            <circle cx="36" cy="12" r="2.5" />
            <rect x="32" y="15" width="5" height="2" transform="rotate(45 34.5 16)" />
            
            {/* Right */}
            <circle cx="43" cy="24" r="3" />
            <rect x="33" y="23" width="6" height="2" />
            
            {/* Bottom Right */}
            <circle cx="36" cy="36" r="2.5" />
            <rect x="32" y="31" width="5" height="2" transform="rotate(-45 34.5 32)" />
            
            {/* Bottom */}
            <circle cx="24" cy="43" r="3" />
            <rect x="23" y="34" width="2" height="6" />
            
            {/* Bottom Left */}
            <circle cx="12" cy="36" r="2.5" />
            <rect x="11" y="31" width="5" height="2" transform="rotate(45 13.5 32)" />
            
            {/* Left */}
            <circle cx="5" cy="24" r="3" />
            <rect x="9" y="23" width="6" height="2" />
            
            {/* Top Left */}
            <circle cx="12" cy="12" r="2.5" />
            <rect x="11" y="15" width="5" height="2" transform="rotate(-45 13.5 16)" />
          </g>
          
          {/* Healthcare Cross Symbol */}
          <g fill="white">
            <rect x="22" y="18" width="4" height="12" rx="1" />
            <rect x="18" y="22" width="12" height="4" rx="1" />
          </g>
          
          {/* AI Neural Network Dots */}
          <g fill="rgba(255,255,255,0.8)">
            <circle cx="19" cy="16" r="1" />
            <circle cx="29" cy="16" r="1" />
            <circle cx="19" cy="32" r="1" />
            <circle cx="29" cy="32" r="1" />
          </g>
          
          {/* AI Connection Lines */}
          <g stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none">
            <line x1="19" y1="16" x2="22" y2="20" />
            <line x1="29" y1="16" x2="26" y2="20" />
            <line x1="19" y1="32" x2="22" y2="28" />
            <line x1="29" y1="32" x2="26" y2="28" />
          </g>
        </svg>
      </div>
      
      <span className="text-2xl font-bold font-montserrat">Covid19.In</span>
    </div>
  );
};

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', sectionId: 'about' },
    { name: 'Services', sectionId: 'services' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Covid19FooterLogo />
            </div>
            
            <p className="text-gray-300 mb-6 font-roboto leading-relaxed text-lg">
              Data-Driven Insights for COVID-19 Management
            </p>
            
            <p className="text-gray-400 mb-6 font-roboto leading-relaxed">
              Utilize AI Analytics to Safeguard Public Health. We leverage advanced artificial intelligence to combat COVID-19 through innovative solutions that empower healthcare providers and communities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-crimson" />
                <span className="text-gray-300">+91 8369848475</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-crimson" />
                <span className="text-gray-300">info@covid19.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-crimson mt-0.5" />
                <span className="text-gray-300">
                  701, Stellar Tower, Chembur East,<br />
                  Mumbai, Maharashtra 400071
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-300 hover:text-white transition-colors font-roboto hover:text-crimson"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-crimson transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold font-montserrat mb-3 text-gray-400">
                Our Mission
              </h4>
              <p className="text-gray-400 text-sm font-roboto">
                Empowering communities worldwide with AI-driven solutions to effectively combat COVID-19 and protect public health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-roboto">
              © 2025 Covid19.In. All rights reserved.
            </div>
            
            <div className="text-gray-400 text-sm font-roboto">
              Owned by{' '}
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-crimson hover:text-white transition-colors font-medium"
              >
                Scalium.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;