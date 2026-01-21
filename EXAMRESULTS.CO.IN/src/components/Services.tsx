import React from 'react';
import { 
  TrendingUp, 
  Brain, 
  BarChart3, 
  MessageCircle, 
  Shield, 
  BookOpen,
  Users,
  Zap,
  Target,
  Lock
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "AI-Driven Data Insights & Predictive Performance Modeling",
      description: "Combine the power of data analytics and predictive modeling to provide comprehensive insights into student performance, trends, and future outcomes.",
      features: [
        "Predictive analytics for forecasting student performance trends",
        "AI algorithms identifying patterns in examination results",
        "Automated reporting with key metrics and predictions"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Personalized Learning Recommendations & Adaptive Assessment Tools",
      description: "Focus on enhancing the educational experience through tailored learning pathways and adaptive testing methodologies.",
      features: [
        "AI-driven dashboards with personalized resource suggestions",
        "Dynamic question generation adapting to real-time responses",
        "Instant feedback mechanisms for reinforced learning"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Intelligent Reporting Tools & Comprehensive Benchmarking",
      description: "Provide advanced reporting capabilities and comparative analytics to improve educational strategies and outcomes.",
      features: [
        "Automated report generation with performance metrics",
        "Benchmarking tools comparing institutional performance",
        "Interactive dashboards for administrative assessment"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "AI-Powered Sentiment Analysis & Student Support Chatbot",
      description: "Enhance student engagement and support through real-time communication and sentiment tracking.",
      features: [
        "AI chatbot for instant support and examination information",
        "Sentiment analysis of qualitative feedback",
        "Summarized insights from sentiment data for decisions"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Administrative Efficiency & Enhanced Security",
      description: "Optimize administrative processes while ensuring the protection of student data and examination integrity.",
      features: [
        "Automated administrative task management",
        "AI-powered fraud detection and pattern analysis",
        "Regular compliance checks and data security audits"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="font-roboto text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform educational assessment and drive institutional excellence
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 
                         transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="lg:flex">
                <div className="lg:w-1/3 p-8 lg:p-12">
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl inline-block mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="font-roboto text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="lg:w-2/3 p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
                  <h4 className="font-poppins font-semibold text-xl text-primary mb-6">Key Features</h4>
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`bg-gradient-to-r ${service.color} p-1 rounded-full mt-1`}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="font-roboto text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-12">
            <h3 className="font-poppins font-bold text-3xl text-white mb-6">
              Ready to Transform Your Institution?
            </h3>
            <p className="font-roboto text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of educational institutions that have already revolutionized their examination processes with our AI-powered solutions.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary px-8 py-4 rounded-lg font-poppins font-semibold 
                       hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 
                       inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <Zap className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;