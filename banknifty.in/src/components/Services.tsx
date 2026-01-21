
import { Bot, BarChart3, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Advanced Algorithmic Trading Platform",
      description: "Our proprietary AI-driven trading algorithms analyze real-time market data, technical indicators, and sentiment analysis to execute optimal trades across Bank Nifty stocks and derivatives. The platform processes over 10,000 data points per second, identifying trading opportunities that human traders might miss while managing risk through sophisticated position sizing and stop-loss mechanisms.",
      features: ["Real-time data processing", "10,000+ data points/second", "35-60% performance improvement", "Automated risk management"],
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: BarChart3,
      title: "Predictive Market Intelligence & Analytics",
      description: "Transform market analysis with our AI-powered intelligence platform that forecasts Bank Nifty movements, identifies sector rotation patterns, and provides actionable insights for both intraday and positional trading strategies. Our system analyzes technical patterns, fundamental data, news sentiment, and macro-economic indicators.",
      features: ["Market forecasting", "Sector rotation analysis", "Real-time alerts", "Custom dashboards"],
      color: "bg-profit-green",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      title: "Risk Management & Portfolio Optimization",
      description: "Protect and optimize your trading capital with our intelligent risk management system that continuously monitors portfolio exposure, calculates value-at-risk, and automatically adjusts position sizes based on market volatility and individual risk tolerance.",
      features: ["Value-at-risk calculation", "Portfolio stress testing", "Automated risk controls", "Capital optimization"],
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Zap,
      title: "Real-Time Market Data & Execution Engine",
      description: "Access lightning-fast market data processing and trade execution capabilities that ensure you never miss critical market opportunities. Our high-frequency trading infrastructure provides microsecond-level execution speeds, real-time market depth analysis, and intelligent order routing.",
      features: ["Microsecond execution", "Market depth analysis", "Intelligent order routing", "Broker integration"],
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-trade-blue/10 rounded-full px-4 py-2 text-sm text-trade-blue mb-4">
            <Bot className="w-4 h-4" />
            <span>AI Trading Solutions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="trade-gradient-text">AI Trading Solutions</span> & Market Intelligence
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover our suite of advanced AI-powered trading tools designed specifically for Bank Nifty trading success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="trading-card group hover:shadow-xl transition-all duration-300 border-0">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 group-hover:text-trade-blue transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </CardDescription>
                
                {/* Features List */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${service.color} rounded-full`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Performance Indicator */}
                <div className="performance-metric bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Performance Impact</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${service.color} rounded-full transition-all duration-1000 delay-${index * 200}`}
                          style={{ width: index === 0 ? '94%' : index === 1 ? '87%' : index === 2 ? '91%' : '89%' }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-gray-900 font-mono">
                        {index === 0 ? '94%' : index === 1 ? '87%' : index === 2 ? '91%' : '89%'}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-trade-blue rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Transform Your Trading Performance?</h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of successful traders who have revolutionized their Bank Nifty trading with our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-profit-green hover:bg-profit-green/90 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-trade-blue font-semibold px-8 py-3 rounded-xl transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
