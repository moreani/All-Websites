
import React from 'react';
import { Brain, TrendingUp, Users, BarChart3, Globe, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Analytics",
      description: "Advanced machine learning algorithms analyze vast datasets to provide actionable insights"
    },
    {
      icon: TrendingUp,
      title: "Market Trend Analysis",
      description: "Real-time tracking of market movements and emerging trends across multiple industries"
    },
    {
      icon: Users,
      title: "Consumer Behavior Insights",
      description: "Deep understanding of customer preferences, buying patterns, and behavioral shifts"
    },
    {
      icon: BarChart3,
      title: "Competitive Intelligence",
      description: "Comprehensive competitor analysis with strategic positioning recommendations"
    },
    {
      icon: Globe,
      title: "Global Market Coverage",
      description: "Worldwide market intelligence spanning diverse industries and geographical regions"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Lightning-fast data processing delivering insights when you need them most"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with industry expertise 
            to deliver unparalleled market intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
