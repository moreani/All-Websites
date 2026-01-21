
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Intelligent Trip Planning",
      description: "Our AI algorithms analyze travel patterns, preferences, and corporate policies to automatically generate optimal itineraries. We consider factors such as flight prices, hotel availability, visa requirements, and even traffic conditions to ensure seamless and cost-effective travel experiences. For Indian businesses, this means navigating the complexities of domestic and international travel with ease, reducing planning time, and minimizing disruptions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80",
      icon: "fas fa-route"
    },
    {
      title: "Automated Expense Management",
      description: "Eliminate manual expense reporting with our AI-powered expense management system. Employees can simply upload receipts, and our algorithms will automatically categorize and reconcile expenses. The system integrates with your accounting software for seamless financial reporting. For Indian businesses, this means reducing administrative overhead, improving compliance, and gaining real-time visibility into travel spending.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=3543&q=80",
      icon: "fas fa-calculator"
    },
    {
      title: "Real-Time Travel Support",
      description: "Provide your employees with 24/7 access to our AI-powered virtual travel assistant. Our chatbot can answer travel-related questions, provide real-time updates on flight status, and even assist with rebooking arrangements in case of disruptions. For Indian businesses, this means ensuring your employees are always supported, regardless of their location or time zone. The chatbot supports multiple Indian languages.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80",
      icon: "fas fa-headset"
    }
  ];

  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-roboto font-bold text-3xl md:text-4xl lg:text-5xl text-primary-blue mb-6">
            Our AI-Powered Travel Automation Solutions
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our intelligent automation transforms every aspect of your business travel experience
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center">
                    <i className={`${service.icon} text-primary-blue text-2xl`}></i>
                  </div>
                  <h3 className="font-roboto font-bold text-2xl md:text-3xl text-primary-blue">
                    {service.title}
                  </h3>
                </div>
                
                <p className="font-open-sans text-gray-700 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {index === 0 && (
                    <>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">Visa Support</span>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">Cost Optimization</span>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">Smart Routing</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">Receipt Scanning</span>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">Auto Categorization</span>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">Compliance Check</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">Multi-language</span>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">24/7 Support</span>
                      <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">Real-time Updates</span>
                    </>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-accent-green/20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
