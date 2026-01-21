import React from 'react';
import { Award, Shield, Zap, Users, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'AI Expertise',
      description: 'Seasoned AI experts with deep knowledge of machine learning and automation'
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'Committed to responsible AI practices that enhance human capabilities'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge solutions that stay ahead of technological advancements'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated to customer satisfaction and tailored business solutions'
    },
    {
      icon: Globe,
      title: 'India Expertise',
      description: 'Deep understanding of the Indian market and its unique challenges'
    },
    {
      icon: Heart,
      title: 'Mobile-First',
      description: 'Optimized for seamless accessibility across all mobile devices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            About <span className="gradient-text">SMSGateway.in</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering AI-Driven Communication Solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="AI team collaboration and technology"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold font-montserrat mb-6 text-gray-800">
              Transforming Business Communication Through AI
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              SMSGateway.in is at the forefront of AI-powered messaging solutions in India, dedicated to 
              transforming the way businesses communicate. Our journey began with a vision to harness the 
              power of artificial intelligence to create more efficient, personalized, and impactful 
              communication experiences.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are a team of seasoned AI experts, software developers, and marketing strategists, all 
              united by a common goal: to empower Indian enterprises with the tools they need to thrive 
              in the digital age. We pride ourselves on our deep understanding of the Indian market, 
              its unique challenges, and its immense potential.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              At SMSGateway.in, we believe that AI should be used to enhance human capabilities, not 
              replace them, and we strive to create solutions that are both powerful and responsible.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                <feature.icon className="text-primary" size={28} />
              </div>
              <h4 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;