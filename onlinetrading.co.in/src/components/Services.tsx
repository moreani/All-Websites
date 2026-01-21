import React from 'react';
import { TrendingUp, FileText, BarChart, Bell } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Automated Chart Pattern Recognition",
      description: "Utilizing sophisticated algorithms, our platform automatically identifies complex chart patterns and technical indicators. This allows traders to quickly recognize opportunities and enhance their decision-making efficacy.",
      features: ["Real-time pattern detection", "Technical indicator analysis", "Trend identification", "Support & resistance levels"]
    },
    {
      icon: FileText,
      title: "Fundamental Data Interpretation",
      description: "Our AI technology processes extensive financial documents to provide instant insights on company performance. Users can gauge a business's financial health at a glance, empowering them to make informed investment decisions.",
      features: ["Financial statement analysis", "Company health scoring", "Earnings prediction", "Market sentiment analysis"]
    },
    {
      icon: BarChart,
      title: "Backtesting & Strategy Simulation",
      description: "Leverage AI to backtest your trading strategies against historical data. This feature provides a clear understanding of potential profitability and risks, enabling users to refine their tactics before investing real capital.",
      features: ["Historical data analysis", "Strategy optimization", "Risk assessment", "Performance metrics"]
    },
    {
      icon: Bell,
      title: "Custom Alerts and Insights",
      description: "Set personalized alerts based on specific market conditions or asset performance. Our intelligent system ensures you never miss a trading opportunity, keeping you updated instantly.",
      features: ["Personalized notifications", "Market condition alerts", "Price movement tracking", "Opportunity identification"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            Our AI-Powered Offerings
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl font-roboto text-gray-600 max-w-3xl mx-auto">
            Comprehensive trading solutions powered by cutting-edge artificial intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary to-blue-600 p-3 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-700 font-roboto mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 font-roboto">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;