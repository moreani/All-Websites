
import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart, RefreshCw, Eye, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'AI tools that analyze historical sales data to forecast future demand, ensuring optimal stock levels at all times.',
      color: 'from-pink to-rose-400'
    },
    {
      icon: RefreshCw,
      title: 'Automated Replenishment',
      description: 'Automatic reorder systems that trigger based on pre-set inventory thresholds to minimize stockouts and excess inventory.',
      color: 'from-indigo to-blue-400'
    },
    {
      icon: Eye,
      title: 'Real-Time Inventory Tracking',
      description: 'Keep a continuous watch on stock levels across multiple locations, improving accuracy and control.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Supplier Optimization',
      description: 'Aiding retailers in choosing the best suppliers based on analytics and historical performance, enhancing procurement efficiency.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Dashboards',
      description: 'Visualize key metrics and insights through user-friendly dashboards that help make informed inventory decisions.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Our Inventory Management{' '}
            <span className="bg-gradient-to-r from-pink to-indigo bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink to-indigo mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-driven solutions designed specifically for the unique challenges 
            of saree retail inventory management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group p-8 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4 group-hover:text-pink transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
