import React from 'react';
import { Car, Factory, BarChart3, Users, MessageSquare } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: 'Automotive AI Solutions',
      description: 'Tailored algorithms for predictive maintenance and intelligent automation to enhance productivity in automotive manufacturing.',
      features: ['Predictive Maintenance', 'Quality Control AI', 'Supply Chain Optimization', 'Autonomous Systems'],
    },
    {
      icon: Factory,
      title: 'Smart Manufacturing',
      description: 'Implement AI-driven robotics and IoT integrations for streamlined operations in factories, drawing from the best practices of Japanese industry.',
      features: ['Industrial IoT', 'Robotic Process Automation', 'Production Planning AI', 'Defect Detection'],
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced data processing techniques that derive actionable insights for informed decision-making in technology sectors.',
      features: ['Business Intelligence', 'Predictive Analytics', 'Real-time Monitoring', 'Custom Dashboards'],
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Utilizing AI to personalize customer experiences, improving retention rates and satisfaction in consumer-focused industries.',
      features: ['Chatbot Solutions', 'Recommendation Engines', 'Customer Segmentation', 'Behavioral Analysis'],
    },
    {
      icon: MessageSquare,
      title: 'Consulting Services',
      description: 'Expert guidance on integrating AI technologies within diverse business frameworks, derived from both Indian and Japanese industry standards.',
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Planning', 'Training Programs'],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-text mb-6">
            Our AI Solutions
          </h2>
          <p className="font-roboto text-lg text-text/70 max-w-3xl mx-auto">
            Comprehensive AI services designed to transform your industry with Japanese precision and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group"
            >
              <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-poppins font-semibold text-xl text-text mb-4">
                {service.title}
              </h3>
              
              <p className="font-roboto text-text/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center font-roboto text-sm text-text/60">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-lg font-roboto font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-text mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="font-roboto text-lg text-text/70 mb-8 max-w-2xl mx-auto">
              Let us guide you through your industry's digital transformation journey with AI solutions inspired by Japanese innovation.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-white px-8 py-4 rounded-lg font-roboto font-medium text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;