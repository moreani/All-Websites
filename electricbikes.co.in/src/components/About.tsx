import React from 'react';
import { Brain, Leaf, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms optimize every aspect of your electric bike experience.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Solutions',
      description: 'Sustainable transportation that reduces carbon footprint while maintaining peak performance.'
    },
    {
      icon: Zap,
      title: 'Smart Energy Management',
      description: 'Intelligent battery optimization and charging solutions for maximum efficiency.'
    },
    {
      icon: TrendingUp,
      title: 'Market Leadership',
      description: 'Leading innovation in India\'s $2 billion electric bike market with cutting-edge technology.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background-light">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-accent mb-6">
              Revolutionizing 
              <span className="text-primary"> Eco-Friendly Transportation</span>
            </h2>
            <p className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
              In a world increasingly focused on sustainability, Electric Bikes AI leads the charge in redefining how electric bikes are designed, manufactured, and utilized. Our innovations utilize AI to ensure that every ride is not only eco-friendly but also optimized for maximum efficiency.
            </p>
            <p className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
              Through data-driven insights, we provide manufacturers with the tools they need to enhance performance while reducing their carbon footprint. As urban populations grow, our solutions ensure that businesses stay ahead by adopting advanced technologies that facilitate smart transportation.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-accent mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-roboto text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="AI Electric Bike Technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;