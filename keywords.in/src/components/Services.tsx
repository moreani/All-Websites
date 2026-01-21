import React from 'react';
import { TrendingUp, Users, BarChart3, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Utilize our AI-powered tools to forecast trends and behaviors that impact your business decisions. Stay ahead of market changes with predictive insights.',
      features: ['Trend Forecasting', 'Risk Assessment', 'Demand Planning', 'Revenue Prediction']
    },
    {
      icon: Users,
      title: 'Customer Insight Analysis',
      description: 'Understand your customers better with deep insights drawn from their interactions and preferences. Drive personalized experiences that convert.',
      features: ['Behavior Analysis', 'Segmentation', 'Journey Mapping', 'Preference Tracking']
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics & Dashboards',
      description: 'Customized dashboards that help you visualize your company\'s performance in real-time, making data-driven decisions more accessible.',
      features: ['Real-time KPIs', 'Custom Dashboards', 'Automated Reports', 'Mobile Analytics']
    },
    {
      icon: Search,
      title: 'Market Research & Competitive Analysis',
      description: 'Leverage AI to conduct in-depth market analysis and outperform your competition using actionable insights and strategic intelligence.',
      features: ['Market Trends', 'Competitor Analysis', 'Opportunity Mapping', 'Strategic Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dark mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
            Comprehensive AI-driven analytics solutions tailored for modern enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-poppins font-semibold text-dark mb-3">{service.title}</h3>
                  <p className="text-gray-700 font-roboto mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-poppins font-medium text-primary uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-gray-600 font-roboto">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-poppins font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg font-roboto mb-6 opacity-90">
              Let's discuss how our AI-driven analytics can drive your business forward
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-3 rounded-lg font-roboto font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;