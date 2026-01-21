import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Mangoes AI</h3>
              <p className="text-gray-300 mb-4">
                Cultivating Smarter Farms with AI
              </p>
              <p className="text-gray-400 text-sm">
                Transforming mango farming in India through cutting-edge artificial intelligence solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <p>701, Stellar Tower, Chembur East</p>
                <p>Mumbai, Maharashtra 400071</p>
                <p>Phone: <a href="tel:+918369848475" className="text-accent hover:text-white transition-colors">+91 8369848475</a></p>
                <p>Email: <a href="mailto:info@mangoes.in" className="text-accent hover:text-white transition-colors">info@mangoes.in</a></p>
                <p>Website: <a href="https://mangoes.in" className="text-accent hover:text-white transition-colors">mangoes.in</a></p>
              </div>
            </div>

            {/* Mission */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Our Mission</h4>
              <p className="text-gray-300 text-sm">
                To empower Indian mango farmers with cutting-edge AI solutions that optimize yields, reduce waste, and improve livelihoods.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Mangoes AI. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Owned by <a href="https://scalium.in" className="text-accent hover:text-white transition-colors">Scalium.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;