
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Industry Analysis",
      description: "Comprehensive sector-wise analysis covering market size, growth patterns, and future projections",
      features: ["Market Sizing & Forecasting", "Industry Growth Drivers", "Regulatory Impact Analysis", "Technology Disruption Assessment"]
    },
    {
      title: "Consumer Intelligence",
      description: "Deep dive into consumer behavior patterns, preferences, and purchasing decisions",
      features: ["Demographic Analysis", "Behavioral Segmentation", "Purchase Journey Mapping", "Brand Perception Studies"]
    },
    {
      title: "Competitive Landscape",
      description: "Strategic insights into competitor positioning, market share, and competitive advantages",
      features: ["Competitor Profiling", "Market Share Analysis", "SWOT Assessment", "Strategic Positioning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions to meet your specific industry intelligence needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span>{feature}</span>
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
