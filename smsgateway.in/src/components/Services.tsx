import React from 'react';
import { Bot, MessageCircle, Bell, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'Intelligent Chatbots',
      description: 'Automate customer support, lead generation, and appointment scheduling with AI-powered chatbots that understand and respond to customer needs in real-time. Our chatbots are trained on vast datasets to provide accurate and helpful information, ensuring a seamless and engaging customer experience.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80',
      features: ['24/7 Customer Support', 'Lead Generation', 'Appointment Scheduling', 'Multi-language Support']
    },
    {
      icon: MessageCircle,
      title: 'Personalized SMS Marketing',
      description: 'Drive sales and engagement with personalized SMS marketing campaigns that deliver the right message to the right customer at the right time. Our AI algorithms analyze customer data to identify patterns and preferences, enabling you to create targeted and highly effective SMS campaigns.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Audience Segmentation', 'Campaign Analytics', 'A/B Testing', 'ROI Tracking']
    },
    {
      icon: Bell,
      title: 'Automated Notifications & Reminders',
      description: 'Improve customer retention and reduce no-shows with automated notifications and reminders that keep customers informed and engaged. Our platform allows you to send automated SMS notifications for appointments, deliveries, payments, and more.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      features: ['Appointment Reminders', 'Payment Notifications', 'Delivery Updates', 'Custom Templates']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Our <span className="gradient-text">AI-Powered</span> Automation Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SMSGateway.in offers a comprehensive suite of AI-powered automation solutions designed to 
            revolutionize your business communication. We leverage the latest advancements in artificial 
            intelligence to provide you with the tools you need to engage your customers, streamline your 
            operations, and drive growth.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-up`}>
                <div className="service-card bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl">
                      <service.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-fade-in`}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              Ready to Transform Your Communication?
            </h3>
            <p className="text-gray-600 mb-6">
              Discover how our innovative services can transform your business and unlock the 
              full potential of AI-driven messaging.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-primary text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto"
            >
              Get Started Today
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;