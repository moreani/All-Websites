import { TrendingUp } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold trade-gradient-text font-inter">BankNifty</h3>
              <TrendingUp className="w-6 h-6 text-profit-green" />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              AI-Powered Trading Intelligence for India's Markets. Revolutionary algorithmic trading solutions 
              that help traders maximize their Bank Nifty trading performance with advanced AI technology.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">Trusted by</div>
              <div className="text-profit-green font-bold font-mono">2,500+ Traders</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-profit-green transition-colors">Algorithmic Trading</a></li>
              <li><a href="#services" className="hover:text-profit-green transition-colors">Market Intelligence</a></li>
              <li><a href="#services" className="hover:text-profit-green transition-colors">Risk Management</a></li>
              <li><a href="#services" className="hover:text-profit-green transition-colors">Execution Engine</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <div className="text-white font-medium">Mumbai Office</div>
                <div className="text-sm">701, Stellar Tower, Chembur East</div>
                <div className="text-sm">Mumbai, Maharashtra 400071</div>
              </div>
              <div>
                <div className="text-white font-medium">Get in Touch</div>
                <div className="text-sm">+91 8369848475</div>
                <div className="text-sm">info@banknifty.in</div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Stats Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="performance-metric">
              <div className="text-2xl font-bold text-profit-green font-mono">94.7%</div>
              <div className="text-sm text-gray-400">AI Success Rate</div>
            </div>
            <div className="performance-metric">
              <div className="text-2xl font-bold text-profit-green font-mono">₹50Cr+</div>
              <div className="text-sm text-gray-400">Assets Managed</div>
            </div>
            <div className="performance-metric">
              <div className="text-2xl font-bold text-profit-green font-mono">99.9%</div>
              <div className="text-sm text-gray-400">System Uptime</div>
            </div>
            <div className="performance-metric">
              <div className="text-2xl font-bold text-profit-green font-mono">24/7</div>
              <div className="text-sm text-gray-400">Market Monitoring</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 BankNifty. All rights reserved. | 
            <span className="ml-2">Advanced AI Trading Solutions for India's Markets</span>
          </div>
          
          <div className="text-gray-400 text-sm flex items-center space-x-2">
            <span>Designed by</span>
            <span className="text-white font-medium">Owned by Scalium Digital Media Private Limited</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Disclaimer:</strong> Trading in stocks and derivatives involves substantial risk and may not be suitable for all investors. 
            Past performance is not indicative of future results. All trading decisions should be made with proper risk management and after consulting with a qualified financial advisor. 
            BankNifty's AI algorithms are designed to assist in trading decisions but do not guarantee profits or prevent losses.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;