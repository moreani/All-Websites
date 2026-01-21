
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-trade-blue via-trade-blue/90 to-profit-green/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 market-grid opacity-30"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Zap className="w-4 h-4 text-profit-green" />
                <span>AI-Powered Trading Intelligence</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Master <span className="text-profit-green">Bank Nifty</span> Trading with AI Intelligence
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Revolutionary AI-powered trading solutions that analyze market patterns, predict price movements, and execute optimal trades in India's banking sector equities and derivatives.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <Button 
                size="lg" 
                className="bg-profit-green hover:bg-profit-green/90 text-black font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore AI Trading Solutions
              </Button>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-profit-green rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-purple-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold">2,500+ Traders</div>
                  <div className="text-white/70">Trust Our AI</div>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-profit-green font-mono">94.7%</div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-profit-green font-mono">₹2.5Cr+</div>
                <div className="text-sm text-white/70">Daily Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-profit-green font-mono">35-60%</div>
                <div className="text-sm text-white/70">Avg. Returns</div>
              </div>
            </div>
          </div>

          {/* Right Content - Trading Dashboard Mockup */}
          <div className="relative">
            <div className="trading-card rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-trade-blue">Live Trading Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-profit-green rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>

                {/* Mock Chart */}
                <div className="h-48 bg-gray-50 rounded-lg p-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end justify-between p-4">
                    {[65, 45, 78, 89, 56, 67, 89, 95, 87, 92, 85, 78].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-trade-blue to-profit-green rounded-t"
                        style={{ height: `${height}%`, width: '6%' }}
                      ></div>
                    ))}
                  </div>
                  <div className="absolute top-4 left-4 space-y-1">
                    <div className="text-sm font-semibold text-trade-blue">BANKNIFTY</div>
                    <div className="text-2xl font-bold font-mono">45,234.50</div>
                    <div className="text-profit-green text-sm font-semibold">+1,056.25 (+2.34%)</div>
                  </div>
                </div>

                {/* Trading Signals */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-profit-green/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-profit-green" />
                      <div>
                        <div className="font-semibold text-sm">BUY Signal</div>
                        <div className="text-xs text-gray-600">HDFC Bank - Target: ₹1,720</div>
                      </div>
                    </div>
                    <div className="text-profit-green font-mono font-semibold">+2.8%</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-trade-blue" />
                      <div>
                        <div className="font-semibold text-sm">AI Analysis</div>
                        <div className="text-xs text-gray-600">Strong bullish momentum detected</div>
                      </div>
                    </div>
                    <div className="text-trade-blue font-mono font-semibold">94.7%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-profit-green rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-trade-blue rounded-full opacity-20 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 80%)'
      }}></div>
    </section>
  );
};

export default Hero;
