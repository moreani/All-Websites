import React from 'react';
import { TrendingUp, Bot, Shield, BarChart3, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Harness the power of AI to analyze market trends and predict price movements. Our predictive tools help you stay ahead, enabling you to make informed trading decisions.',
      features: ['Market Trend Analysis', 'Price Movement Prediction', 'Pattern Recognition', 'Real-time Alerts'],
    },
    {
      icon: Bot,
      title: 'Automated Trading Systems',
      description: 'Develop automated trading strategies that work 24/7. Our AI tools allow you to execute trades based on predefined criteria, removing emotional biases from your trading approach.',
      features: ['24/7 Trading Execution', 'Strategy Backtesting', 'Risk Controls', 'Performance Analytics'],
    },
    {
      icon: Shield,
      title: 'Risk Management Solutions',
      description: 'Protect your investments with AI-driven risk assessment tools. Our solutions help you identify potential risks and develop strategies to mitigate them effectively.',
      features: ['Portfolio Risk Analysis', 'Stop-loss Optimization', 'Diversification Strategies', 'Volatility Monitoring'],
    },
    {
      icon: BarChart3,
      title: 'Market Insights Dashboard',
      description: 'Gain access to real-time market data and insights through our interactive dashboard. Customize your views and stay updated on market movements that matter most to you.',
      features: ['Real-time Data Feeds', 'Custom Watchlists', 'Technical Indicators', 'Market News Integration'],
    },
    {
      icon: GraduationCap,
      title: 'Training & Support',
      description: 'We offer comprehensive training sessions on how to use our AI tools effectively. Our support team is always ready to assist you in optimizing your trading strategies.',
      features: ['One-on-one Training', '24/7 Support', 'Strategy Consultation', 'Educational Resources'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Our Offerings: <span className="text-primary">AI-Driven Solutions for Every Trader</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-opensans text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered trading tools designed to enhance your trading performance and maximize your potential in the financial markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="bg-lightgray p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-opensans text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special highlight for the 5th service */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-8 rounded-xl shadow-xl text-white">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-lg">
                <GraduationCap className="h-10 w-10" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-montserrat font-bold text-2xl mb-3">
                Training & Support
              </h3>
              <p className="font-opensans text-white/90 mb-4 leading-relaxed text-lg">
                We offer comprehensive training sessions on how to use our AI tools effectively. Our support team is always ready to assist you in optimizing your trading strategies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services[4].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-white/90">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-white px-8 py-4 rounded-full font-opensans font-semibold text-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Start Your AI Trading Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;