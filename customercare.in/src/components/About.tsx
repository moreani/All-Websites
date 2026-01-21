import React from 'react';
import { Target, Users, Zap, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Advantage',
      description: 'Transform customer service from operational necessity to competitive edge'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Meet and exceed evolving customer expectations for responsiveness'
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Leverage ML, NLP, and data analytics for streamlined interactions'
    },
    {
      icon: TrendingUp,
      title: 'Proactive Insights',
      description: 'Anticipate customer needs with predictive analytics and metrics'
    }
  ];

  return (
    <section id="about" className="py-20 bg-backgroundLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-800 mb-6">
            About <span className="text-primary">CustomerCare AI</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="section-reveal">
            <h3 className="text-2xl md:text-3xl font-montserrat font-semibold text-gray-800 mb-6">
              Transforming Customer Experiences with Intelligent Automation
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At CustomerCare AI, we recognize that delivering exceptional customer service is not just an 
              operational necessity but a strategic advantage. As the Indian market rapidly evolves, businesses 
              must adapt to changing customer expectations for responsiveness and personalization.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our cutting-edge AI Automation Solutions empower enterprises to streamline customer interactions, 
              enhance service quality, and reduce operational costs. We deploy intelligent solutions that leverage 
              machine learning, natural language processing, and data analytics to automate repetitive tasks while 
              providing insightful metrics that can transform customer care into a proactive and engaging experience.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Partner with us to not only meet your customers' needs but to anticipate them through innovative technology.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-white px-8 py-3 rounded-lg font-montserrat font-semibold"
            >
              Partner With Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 section-reveal">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-montserrat font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;