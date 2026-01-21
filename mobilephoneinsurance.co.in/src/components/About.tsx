
import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, TrendingUp, Shield, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced algorithms analyze sales trends and consumer behavior for accurate forecasting'
    },
    {
      icon: TrendingUp,
      title: 'Demand Forecasting',
      description: 'Predict future demand patterns to maintain optimal stock levels at all times'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Minimize waste from overstock while ensuring you never miss sales due to stockouts'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Always have the most popular sarees available to keep your customers happy'
    }
  ];

  return (
    <section id="about" className="py-20 bg-light-grey/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-pink to-indigo bg-clip-text text-transparent">
              Indian Sarees Inventory AI
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink to-indigo mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-slide-in-left">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            At Indian Sarees Inventory AI, we specialize in crafting AI-driven inventory management 
            solutions tailored specifically for the saree industry. The saree market is dynamic, 
            with styles and preferences changing seasonally. Our advanced AI algorithms analyze sales 
            trends and consumer behavior, providing retailers with accurate demand forecasts.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            With automated reordering, businesses can ensure they never miss a sale due to stockouts, 
            while also minimizing waste from overstock. Our commitment to integrating technology with 
            traditional retail practices sets us apart, enabling saree retailers to thrive in a 
            competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink to-indigo rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
