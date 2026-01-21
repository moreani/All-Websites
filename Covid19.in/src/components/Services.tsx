import React from 'react';
import { MessageCircle, BarChart3, MapPin, Users, Mail, Stethoscope, Brain, Shield, TrendingUp, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Personalized User Interaction & Health Support',
      description: 'Our AI-Powered Virtual Health Assistant provides instant, interactive responses to COVID-19 related inquiries using Natural Language Processing (NLP).',
      features: [
        { icon: Stethoscope, text: 'Symptom Checker & Monitoring Tool' },
        { icon: Brain, text: 'AI-driven Mental Health Support' },
        { icon: Bot, text: 'Voice Search Optimization' }
      ],
      gradient: 'from-crimson to-bruised-violet'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Resource Management',
      description: 'Predictive analytics tools that forecast COVID-19 trends and help healthcare facilities manage resources efficiently.',
      features: [
        { icon: TrendingUp, text: 'Data-Driven Resource Management' },
        { icon: Shield, text: 'Vaccine Distribution Optimization' },
        { icon: BarChart3, text: 'Operational Efficiency Tools' }
      ],
      gradient: 'from-emerald to-cobalt'
    },
    {
      icon: MapPin,
      title: 'Location-Based Services & Contact Tracing',
      description: 'AI-driven tools that assist users in locating health resources and facilitate contact tracing while ensuring user privacy.',
      features: [
        { icon: MapPin, text: 'Health Resource Locator' },
        { icon: Shield, text: 'Privacy-Protected Contact Tracing' },
        { icon: Users, text: 'Community Safety Monitoring' }
      ],
      gradient: 'from-saffron to-terracotta'
    },
    {
      icon: Users,
      title: 'Content & Community Management',
      description: 'Dynamic content personalization and AI-facilitated community forums with misinformation detection for verified COVID-19 information.',
      features: [
        { icon: Users, text: 'Community Discussion Forums' },
        { icon: Shield, text: 'Misinformation Detection' },
        { icon: Brain, text: 'Content Personalization' }
      ],
      gradient: 'from-bruised-violet to-emerald'
    },
    {
      icon: Mail,
      title: 'User Engagement & Communication',
      description: 'Personalized newsletter management that keeps users informed with relevant COVID-19 updates based on their preferences.',
      features: [
        { icon: Mail, text: 'Personalized Newsletters' },
        { icon: TrendingUp, text: 'Engagement Analytics' },
        { icon: Bot, text: 'Automated Communication' }
      ],
      gradient: 'from-cobalt to-crimson'
    }
  ];

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
            Our <span className="text-crimson">AI-Powered</span> Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-crimson to-bruised-violet mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-roboto">
            Comprehensive AI solutions designed to combat COVID-19 challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 font-roboto leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`p-2 bg-gradient-to-br ${service.gradient} rounded-lg`}>
                      <feature.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-crimson via-bruised-violet to-cobalt rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
              Ready to Transform Your COVID-19 Response?
            </h3>
            <p className="text-lg md:text-xl font-roboto opacity-90 mb-6 max-w-3xl mx-auto">
              Join healthcare providers and organizations worldwide who trust our AI-powered solutions to navigate the pandemic effectively.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white text-bruised-violet font-semibold rounded-full hover:bg-light-gray transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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