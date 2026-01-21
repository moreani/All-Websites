
import { Brain, Shield, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-trade-blue/10 rounded-full px-4 py-2 text-sm text-trade-blue mb-4">
            <Brain className="w-4 h-4" />
            <span>Advanced AI Technology</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Trading with <span className="trade-gradient-text">Advanced AI Technology</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              BankNifty represents the next evolution in algorithmic trading and market intelligence, specifically engineered for India's dynamic financial markets. As the Bank Nifty index continues to be one of the most actively traded instruments on the NSE, successful trading requires more than intuition – it demands sophisticated technology that can process vast amounts of market data, identify patterns invisible to human analysis, and execute trades with precision timing that captures optimal market opportunities.
            </p>
            
            <p className="text-lg">
              Our cutting-edge AI platform transforms the way traders, institutional investors, and financial firms approach Bank Nifty trading. By leveraging advanced machine learning algorithms, real-time market data analysis, and predictive modeling, we enable our clients to make informed trading decisions backed by comprehensive market intelligence.
            </p>
            
            <p className="text-lg">
              Founded by a team of quantitative analysts, AI researchers, and experienced traders who understand the intricacies of Indian markets, BankNifty combines deep domain expertise with state-of-the-art technology. We recognize that successful trading in Indian markets requires understanding not just global trends, but also local market dynamics, regulatory changes, and sector-specific factors that influence banking stocks.
            </p>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="trading-card rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-trade-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-trade-blue/20 transition-colors">
                <Zap className="w-6 h-6 text-trade-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real-time Analysis</h3>
              <p className="text-sm text-gray-600">10,000+ data points processed per second</p>
            </div>

            <div className="trading-card rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-profit-green/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-profit-green/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-profit-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance Boost</h3>
              <p className="text-sm text-gray-600">35-60% average improvement in returns</p>
            </div>

            <div className="trading-card rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Intelligence</h3>
              <p className="text-sm text-gray-600">Advanced machine learning algorithms</p>
            </div>

            <div className="trading-card rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Risk Management</h3>
              <p className="text-sm text-gray-600">Intelligent position sizing & controls</p>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="bg-gradient-to-r from-trade-blue to-profit-green rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold font-mono mb-2">2,500+</div>
              <div className="text-white/80">Active Traders</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold font-mono mb-2">₹50Cr+</div>
              <div className="text-white/80">Assets Under Management</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold font-mono mb-2">99.9%</div>
              <div className="text-white/80">System Uptime</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold font-mono mb-2">24/7</div>
              <div className="text-white/80">Market Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
