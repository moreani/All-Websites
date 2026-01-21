import React from 'react';
import { User, Search, Code, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: User,
      title: 'Personalized Astrology Software',
      description: 'Tailored applications designed for individual users, offering personalized chart readings and forecasts based on user-input data.',
      features: ['Custom birth chart analysis', 'Daily horoscope predictions', 'Compatibility matching', 'Life event timing'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: Search,
      title: 'Astrology Research Tools',
      description: 'Comprehensive software solutions for astrological researchers that include predictive analytics and data visualization features.',
      features: ['Advanced data analytics', 'Statistical correlations', 'Pattern recognition', 'Research databases'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: Code,
      title: 'API Integration for Businesses',
      description: 'Customized API solutions that enable businesses to incorporate astrological insights into their offerings, enhancing user engagement.',
      features: ['RESTful API endpoints', 'Real-time data sync', 'Scalable architecture', 'Developer documentation'],
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'User-friendly mobile applications that allow users to access astrological tools and insights on the go.',
      features: ['Cross-platform compatibility', 'Offline functionality', 'Push notifications', 'Cloud synchronization'],
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text mb-6">
            Our <span className="gradient-text">Offerings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive software solutions that bridge ancient wisdom with modern technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`card-hover bg-white border-2 ${service.color} p-8 rounded-3xl`}>
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-text mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-text">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="btn-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold text-text mb-4">
              Why Choose AstroTech Solutions?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine traditional astrological knowledge with cutting-edge technology to deliver unparalleled solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">AI-Powered</h4>
              <p className="text-gray-600 text-sm">Advanced machine learning algorithms for precise predictions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">🇮🇳</span>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Made in India</h4>
              <p className="text-gray-600 text-sm">Built with deep understanding of Indian astrological traditions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Always Available</h4>
              <p className="text-gray-600 text-sm">Round-the-clock support and instant access to insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;