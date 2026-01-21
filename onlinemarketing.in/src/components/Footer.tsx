import { Link } from 'react-scroll';
import { ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-white">ONLINE</span>
              <span className="text-[#4DA3FF]">MARKETING.IN</span>
            </h2>
            <p className="text-gray-300 mb-6">
              India's premier digital marketing agency specializing in helping businesses maximize their online potential and achieve sustainable growth.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((platform, index) => (
                <a 
                  key={index} 
                  href={`https://${platform}.com/onlinemarketing.in`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#374151] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#0F7DFF] transition-colors"
                >
                  <img 
                    src={`https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/0eeb97a6-95f3-4487-bfaa-99ecb7dba4bb.jpg`} 
                    alt={`${platform} icon`} 
                    className="w-5 h-5 object-contain" 
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', to: 'home' },
                { name: 'Services', to: 'services' },
                { name: 'About Us', to: 'about' },
                { name: 'Portfolio', to: 'portfolio' },
                { name: 'Contact', to: 'contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="flex items-center text-gray-300 hover:text-[#4DA3FF] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Search Engine Optimization',
                'Social Media Marketing',
                'Content Marketing',
                'Performance Marketing',
                'Web Development',
                'Analytics & Reporting'
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="flex items-center text-gray-300 hover:text-[#4DA3FF] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=701, Stellar Tower, Chembur East, Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-gray-300 hover:text-[#4DA3FF] transition-colors"
                >
                  <MapPin className="h-5 w-5 mr-3 mt-1" />
                  <span>
                    701, Stellar Tower, Chembur East,<br />
                    Mumbai, Maharashtra 400071
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918369848475"
                  className="flex items-center text-gray-300 hover:text-[#4DA3FF] transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  +91 8369848475
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@onlinemarketing.in"
                  className="flex items-center text-gray-300 hover:text-[#4DA3FF] transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  info@onlinemarketing.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} OnlineMarketing.in. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end text-sm text-gray-300">
              <a href="#" className="hover:text-[#4DA3FF]">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-[#4DA3FF]">Terms of Service</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-[#4DA3FF]">Cookie Policy</a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs">
              Designed by Scalium Digital Media Private Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
