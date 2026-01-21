import React from 'react';
import { Droplets, Eye, TrendingUp, FlaskConical, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Precision Irrigation",
      description: "Our AI-powered irrigation system analyzes soil moisture levels, weather forecasts, and crop water requirements to optimize irrigation schedules. This ensures crops receive the right amount of water at the right time, reducing waste and improving yields.",
      features: ["Real-time soil monitoring", "Weather integration", "Water usage optimization", "Automated scheduling"]
    },
    {
      icon: Eye,
      title: "Crop Monitoring & Disease Detection",
      description: "Using drone imagery and AI algorithms, we monitor crop health and detect signs of disease or pest infestations early. This allows farmers to take proactive measures to prevent widespread damage and minimize crop losses.",
      features: ["Drone surveillance", "Early disease detection", "Pest identification", "Health reports"]
    },
    {
      icon: TrendingUp,
      title: "Yield Prediction & Optimization",
      description: "Our AI models analyze historical data, weather patterns, and soil conditions to predict crop yields with high accuracy. This enables farmers to make informed decisions about planting, harvesting, and marketing their crops.",
      features: ["Accurate forecasting", "Market timing", "Resource planning", "Profit optimization"]
    },
    {
      icon: FlaskConical,
      title: "Soil Analysis & Nutrient Management",
      description: "We use AI to analyze soil samples and provide recommendations on nutrient management. This helps farmers optimize fertilizer application, reduce costs, and minimize environmental impact.",
      features: ["Soil composition analysis", "Nutrient recommendations", "Cost reduction", "Environmental protection"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-6">
            AI Solutions for <span className="text-primary">Sustainable Agriculture</span>
          </h2>
          <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps farmers make data-driven decisions, optimize resources, and maximize productivity while maintaining sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-4 rounded-xl mr-4 flex-shrink-0">
                  <service.icon size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-text mb-3">{service.title}</h3>
                </div>
              </div>
              
              <p className="font-roboto text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center font-roboto text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-primary font-roboto font-medium hover:text-secondary transition-colors duration-300 flex items-center">
                Learn More
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;