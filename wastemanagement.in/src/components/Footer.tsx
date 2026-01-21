import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl">WasteManagement.in</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              WasteManagement.in serves as India's comprehensive environmental awareness platform, 
              promoting sustainable waste management practices nationwide. Our educational resources 
              support individuals, communities, and organizations in implementing effective waste 
              reduction, recycling, and composting programs.
            </p>
            <p className="text-xs text-slate-400">Owned by Scalium.in</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-400">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                About Waste Management
              </Link>
              <Link to="/waste-types" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                Types of Waste
              </Link>
              <Link to="/reduce" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                Reduction Strategies
              </Link>
              <Link to="/recycle" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                Recycling & Composting
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-400">Resources</h3>
            <div className="space-y-2">
              <Link to="/initiatives" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                Government Initiatives
              </Link>
              <Link to="/get-involved" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                Get Involved
              </Link>
              <Link to="/resources" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                Downloads & Guides
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-green-400 transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-400">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 text-sm">
                  701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, 
                  Basant Garden, Chembur, Mumbai, Maharashtra 400071
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <p className="text-slate-300 text-sm">+91 8369848475</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <p className="text-slate-300 text-sm">info@wastemanagement.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 WasteManagement.in - All rights reserved. Building a sustainable future for India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;