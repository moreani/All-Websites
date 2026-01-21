import React from 'react';
import { Target, Users, TrendingUp, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Analytics',
      description: 'Advanced AI algorithms that deliver precise, actionable insights from your data.'
    },
    {
      icon: Users,
      title: 'Enterprise Focus',
      description: 'Tailored solutions for Indian enterprises looking to leverage data for competitive advantage.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Driven',
      description: 'Transform raw data into strategic insights that drive efficiency and foster business growth.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security ensuring your data remains protected and compliant.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dark mb-4">
            About KeywordAI
          </h2>
          <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
            Empowering enterprises to turn raw data into actionable insights through cutting-edge AI technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 font-roboto leading-relaxed">
              KeywordAI is at the forefront of AI-driven data analytics, empowering enterprises to turn raw data into actionable insights. Our mission is to leverage cutting-edge artificial intelligence technologies to deliver precise, actionable analytics that drive efficiency and foster growth.
            </p>
            <p className="text-lg text-gray-700 font-roboto leading-relaxed">
              In today's data-driven landscape, businesses that harness the power of AI gain not just insights but a significant competitive edge. Whether it's analyzing consumer behavior or optimizing operational processes, KeywordAI is your partner in navigating the complexities of modern business through intelligent analytics.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-poppins font-semibold text-dark mb-2">Our Vision</h3>
              <p className="text-gray-700 font-roboto">
                To be India's leading AI analytics platform, enabling every enterprise to make data-driven decisions that transform their business outcomes.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Data Analytics Team" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600 font-roboto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;