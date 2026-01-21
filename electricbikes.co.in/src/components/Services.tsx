import React from 'react';
import { Truck, Wrench, Battery, BarChart3, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Intelligent Fleet Management',
      description: 'Streamline operations with AI-driven insights for maintenance, routing, and monitoring that optimize your entire fleet performance.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wrench,
      title: 'Predictive Maintenance Solutions',
      description: 'Utilize AI to predict potential mechanical failures, minimizing downtime and costs while maximizing operational efficiency.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Battery,
      title: 'Smart Charging Solutions',
      description: 'Optimize charging schedules based on user habits and grid capacity, ensuring energy efficiency and cost-effectiveness.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics for Enhanced Experience',
      description: 'Utilize real-time data to provide personalized riding experiences and insights to enhance usage patterns and performance.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: MapPin,
      title: 'Smart City Infrastructure Integration',
      description: 'Enable electric bikes to communicate with surrounding systems for improved safety, efficiency, and urban mobility.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-accent mb-6">
            Our AI Automation 
            <span className="text-primary"> Solutions</span>
          </h2>
          <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge AI technology is transforming the electric bike industry with intelligent automation and data-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-accent mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-roboto text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;