import React from 'react';
import { Heart, Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every recommendation is tailored to your unique needs and preferences"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Our AI ensures every step you take is informed and effective"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of others on their successful weight loss journeys"
    },
    {
      icon: Zap,
      title: "Cutting-Edge AI",
      description: "Leverage the latest technology for sustainable weight management"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering individuals through AI-powered wellness solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                How To Lose Weight is dedicated to empowering individuals on their weight loss journeys by leveraging cutting-edge AI technology. We understand that losing weight isn't just about counting calories; it's about creating a sustainable, healthy lifestyle tailored to your unique needs.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our platform offers a seamless blend of personalized meal plans, insightful articles, and innovative tools to help you navigate the complexities of weight management. With our AI, every user receives recommendations based on their preferences, dietary restrictions, and health goals.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                Join us as we revolutionize the weight loss experience, making it accessible, engaging, and results-driven for everyone. Your journey to better health starts with understanding, and we're here to guide you every step of the way.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="font-heading font-semibold text-text mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To make sustainable weight loss achievable for everyone through personalized AI-driven insights and compassionate support.
              </p>
            </div>
          </div>

          {/* Image and Features */}
          <div>
            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthy lifestyle"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-heading font-semibold text-text mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;