import React from 'react';
import { Target, Users, Lightbulb, Leaf } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Transform Indian agriculture through AI-powered solutions that optimize operations and promote sustainability."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Specialists in AI, agricultural science, and data analytics working together for farmer success."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technology combined with traditional farming knowledge for practical solutions."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Building a resilient and environmentally conscious food system for future generations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-6">
            Empowering Indian Farmers with <span className="text-primary">AI-Driven Solutions</span>
          </h2>
          <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto">
            We're dedicated to transforming the agricultural landscape in India by leveraging artificial intelligence to provide farmers with the tools they need to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-background transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <feature.icon size={32} className="text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-text mb-3">{feature.title}</h3>
              <p className="font-roboto text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Farmers using modern agricultural technology in Indian fields" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <p className="font-roboto text-gray-700 mb-6 leading-relaxed">
              Organic Farming AI is dedicated to transforming the agricultural landscape in India by leveraging the power of artificial intelligence. Our mission is to provide farmers with the tools and insights they need to optimize their operations, increase productivity, and promote sustainable farming practices.
            </p>
            
            <p className="font-roboto text-gray-700 mb-6 leading-relaxed">
              We understand the unique challenges faced by Indian farmers, from unpredictable weather patterns to resource scarcity, and we believe that AI can play a crucial role in overcoming these obstacles. Our team comprises experts in artificial intelligence, agricultural science, and data analytics, all united by a shared passion for improving the lives of farmers.
            </p>
            
            <p className="font-roboto text-gray-700 mb-6 leading-relaxed">
              We are committed to fostering a collaborative ecosystem where farmers, researchers, and policymakers can come together to share knowledge and best practices. Through workshops, training programs, and online resources, we empower farmers to embrace AI technology and unlock its full potential.
            </p>
            
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <p className="font-poppins font-bold text-3xl text-primary">2000+</p>
                <p className="font-roboto text-sm text-gray-600">Farmers Served</p>
              </div>
              <div className="text-center">
                <p className="font-poppins font-bold text-3xl text-primary">50+</p>
                <p className="font-roboto text-sm text-gray-600">AI Solutions</p>
              </div>
              <div className="text-center">
                <p className="font-poppins font-bold text-3xl text-primary">95%</p>
                <p className="font-roboto text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;