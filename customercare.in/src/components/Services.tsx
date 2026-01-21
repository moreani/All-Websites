import React from 'react';
import { MessageCircle, Ticket, BarChart3, User, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'AI-Powered Chatbots',
      description: 'Unlock efficient customer interactions with our advanced AI chatbots, designed to handle inquiries, provide support, and resolve issues rapidly—24/7. Our solutions integrate seamlessly with your existing platforms to enhance customer satisfaction.',
      features: ['24/7 Availability', 'Multi-language Support', 'Seamless Integration', 'Real-time Responses']
    },
    {
      icon: Ticket,
      title: 'Automated Ticketing Systems',
      description: 'Optimize your customer support workflows with our AI-driven ticketing systems. These tools intelligently categorize, prioritize, and route customer requests, ensuring that no query is left unanswered.',
      features: ['Smart Categorization', 'Priority Routing', 'Automated Workflows', 'SLA Management']
    },
    {
      icon: BarChart3,
      title: 'Sentiment Analysis Tools',
      description: 'Gain insights into customer sentiments with our AI analytics tools. By analyzing interactions and feedback, businesses can identify trends and adjust strategies to enhance overall customer experience and engagement.',
      features: ['Real-time Analysis', 'Trend Identification', 'Emotion Detection', 'Actionable Insights']
    },
    {
      icon: User,
      title: 'Personalization Engine',
      description: 'Deliver tailored experiences using our machine learning algorithms that analyze customer behavior. Provide customized recommendations that resonate with individual preferences and needs, fostering loyalty and improving retention.',
      features: ['Behavioral Analysis', 'Custom Recommendations', 'Dynamic Content', 'Loyalty Programs']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Stay ahead of the curve with predictive analytics that forecast customer behavior, allowing for timely interventions and personalized offers that drive satisfaction and growth.',
      features: ['Behavior Forecasting', 'Churn Prevention', 'Opportunity Identification', 'Performance Metrics']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-800 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your customer care operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100 section-reveal"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-montserrat font-medium text-gray-800 mb-3">Key Features:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 w-full btn-primary text-white py-3 rounded-lg font-montserrat font-medium text-center"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;