import React from 'react';
import { Bot, Palette, FileText, ShoppingCart, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI-Powered Website Generation',
      description: 'Automatically generate websites by answering a few questions.',
      color: 'primary'
    },
    {
      icon: Palette,
      title: 'Customizable Templates',
      description: 'Wide range of templates customizable to match your brand.',
      color: 'accent'
    },
    {
      icon: FileText,
      title: 'Automated Content Creation',
      description: 'AI-generated content including product descriptions and blog posts.',
      color: 'primary'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Integration',
      description: 'Integrated platform with multiple payment gateways for the Indian market.',
      color: 'accent'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Optimizes websites for search engines to improve organic traffic.',
      color: 'primary'
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            AI Website Building Solutions
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isAccent = service.color === 'accent';
            
            return (
              <div
                key={index}
                className="bg-neutral-0 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${isAccent ? 'bg-accent/10' : 'bg-primary/10'} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                </div>
                
                <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 font-poppins leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;