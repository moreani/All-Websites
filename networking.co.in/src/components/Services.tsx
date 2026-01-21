import React from 'react';
import { Brain, Settings, GraduationCap, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Development",
      description: "We work with business leaders to craft comprehensive AI strategies that align with organizational goals, ensuring a roadmap for success.",
      features: ["Strategic Planning", "Goal Alignment", "ROI Analysis", "Implementation Roadmap"]
    },
    {
      icon: Settings,
      title: "Implementation Support",
      description: "From initial idea to execution, we support our clients in integrating AI solutions tailored to their specific industry needs, driving operational efficiency.",
      features: ["Custom Solutions", "Industry Expertise", "Process Optimization", "Technical Integration"]
    },
    {
      icon: GraduationCap,
      title: "Workshops and Training",
      description: "Tailored training programs to equip teams with the necessary skills and knowledge to leverage AI tools effectively, fostering a culture of innovation.",
      features: ["Team Training", "Skill Development", "Best Practices", "Change Management"]
    },
    {
      icon: Headphones,
      title: "Ongoing Consultation",
      description: "Continuous support and consultation to adapt to changing market dynamics and technological advancements, ensuring sustainable growth and success.",
      features: ["24/7 Support", "Market Analysis", "Technology Updates", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI consulting services designed to transform your business operations and drive intelligent growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 font-montserrat">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-montserrat">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6">Let's discuss how AI can revolutionize your networking strategies and drive unprecedented growth.</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;