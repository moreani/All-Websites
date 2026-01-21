import React from 'react';
import { Brain, Target, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced algorithms analyze your financial situation for optimal recommendations.'
    },
    {
      icon: Target,
      title: 'Personalized Solutions',
      description: 'Tailored advice that considers your unique financial goals and circumstances.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Backed by financial experts and years of industry experience.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Helping thousands of users optimize their financial decisions successfully.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-backgroundLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text">
                Welcome to{' '}
                <span className="text-primary">EMI Calculator AI</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 font-opensans text-gray-600 leading-relaxed">
              <p>
                At EMI Calculator AI, we understand that each financial journey is unique. 
                That's why we harness the power of artificial intelligence to provide tailored 
                financial advice specifically around loan management and EMI optimization.
              </p>
              <p>
                Our platform uses sophisticated algorithms to analyze your financial situation, 
                identifying optimal loan products tailored to your needs. With our personalized 
                insights and easy-to-use tools, you can navigate your financial journey with confidence.
              </p>
              <p>
                Let us guide you through the complexities of loans, ensuring you make informed, 
                advantageous financial decisions that align with your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-text mb-2">
                        {feature.title}
                      </h3>
                      <p className="font-opensans text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80" 
              alt="Financial advice and planning"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;