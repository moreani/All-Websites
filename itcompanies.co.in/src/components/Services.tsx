import React from 'react';
import ServiceCard from './ServiceCard';
import { LineChart, Shield, MessageCircle, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Intelligent Project Management Systems",
      description: "Transform project delivery with AI-powered planning, resource allocation, and risk prediction. Our systems analyze historical project data, team performance metrics, and client requirements to optimize timelines.",
      icon: LineChart
    },
    {
      title: "AI-Enhanced Quality Assurance",
      description: "Revolutionize software testing and quality control with machine learning algorithms that identify bugs, predict failure points, and optimize testing protocols for exceptional client deliverables.",
      icon: Shield
    },
    {
      title: "Client Communication Intelligence",
      description: "Elevate client relationships with AI systems that analyze communication patterns, predict client needs, and optimize engagement strategies, ensuring stronger, more profitable client partnerships.",
      icon: MessageCircle
    },
    {
      title: "Operational Efficiency Optimization",
      description: "Streamline internal operations with AI solutions that automate routine tasks, optimize resource utilization, and enhance decision-making processes while ensuring operational excellence.",
      icon: Settings
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-primary">Specialized AI Solutions for IT Excellence</h2>
        <p className="text-text-medium text-center mb-12 max-w-2xl mx-auto">
          Cutting-edge AI technologies designed specifically for India's IT industry needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
