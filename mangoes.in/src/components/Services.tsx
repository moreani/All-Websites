import React from 'react';
import { TrendingUp, Shield, Droplets, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Yield Prediction with AI",
      description: "Predict your mango yield with unprecedented accuracy using our AI-powered forecasting system. Our models analyze historical data, weather patterns, soil conditions, and other factors to provide you with reliable yield estimates weeks in advance. This allows you to plan your harvesting, storage, and marketing strategies more effectively, minimizing waste and maximizing profits. We use a combination of machine learning algorithms and satellite imagery to provide the most accurate and comprehensive yield predictions available.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Shield,
      title: "Disease Detection and Prevention",
      description: "Protect your mango crop from devastating diseases with our AI-powered disease detection system. Our system uses computer vision to analyze images of mango leaves and fruits, identifying early signs of disease before they spread. This allows you to take timely action to prevent outbreaks and minimize losses. We leverage a vast database of mango disease images and expert knowledge to provide the most accurate and reliable diagnoses.",
      image: "https://images.pexels.com/photos/1459503/pexels-photo-1459503.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Droplets,
      title: "Smart Irrigation Management",
      description: "Optimize your irrigation practices with our AI-powered water management system. Our system analyzes soil moisture levels, weather forecasts, and plant needs to determine the optimal amount of water to apply to your mango trees. This helps you conserve water, reduce energy costs, and improve fruit quality. Our sensors and AI algorithms work together to ensure that your mango trees receive the precise amount of water they need, when they need it.",
      image: "https://images.pexels.com/photos/1459494/pexels-photo-1459494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Truck,
      title: "Supply Chain Optimization",
      description: "Streamline your mango supply chain from farm to market with our AI-powered logistics platform. Our platform optimizes transportation routes, storage conditions, and delivery schedules to minimize spoilage and maximize freshness. This helps you get your mangoes to market faster and more efficiently, increasing your profits and reducing waste. We integrate with existing logistics systems and provide real-time tracking and monitoring of your mango shipments.",
      image: "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 fade-in">
              Our AI-Powered Solutions for Mango Farming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in stagger-1">
              Transforming traditional farming with cutting-edge artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`service-card bg-white rounded-2xl shadow-lg overflow-hidden fade-in stagger-${index + 1}`}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <service.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;