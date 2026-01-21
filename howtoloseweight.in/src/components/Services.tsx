import React from 'react';
import { ChefHat, Search, TrendingUp, BookOpen, Users, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Personalized Meal Planning",
      description: "Leveraging AI algorithms, we analyze your dietary preferences, nutritional needs, and weight-loss goals to create customized meal plans that align with your lifestyle. Our recipe database features healthy options, catering to various cuisines and dietary restrictions.",
      features: ["AI-powered recommendations", "Dietary restriction support", "Cuisine variety", "Nutritional balance"]
    },
    {
      icon: Search,
      title: "AI-Powered Recipe Search",
      description: "Searching for recipes made easy! Our intelligent recipe search tool filters healthy recipes based on your chosen ingredients, dietary preferences, and caloric needs. Whether you're craving a hearty meal or looking for quick snacks, our platform suggests nutritious options.",
      features: ["Ingredient-based search", "Caloric filtering", "Quick meal options", "Nutritious alternatives"]
    },
    {
      icon: TrendingUp,
      title: "Weight Loss Tracking & Insights",
      description: "Monitor your progress with our user-friendly weight loss tracking tools. Our AI provides insights based on your data, offering tips and adjustments to enhance your journey. Stay motivated with reminders and feedback tailored to you.",
      features: ["Progress monitoring", "AI-driven insights", "Personalized tips", "Motivational reminders"]
    },
    {
      icon: BookOpen,
      title: "Educational Blog & Resources",
      description: "Dive into our resource-rich blog that covers everything from nutrition science to motivational tips. Our content is crafted to inform and inspire, helping you understand the factors influencing weight loss, including emotional well-being and exercise habits.",
      features: ["Nutrition science", "Motivational content", "Expert insights", "Holistic approach"]
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with a community of like-minded individuals on similar weight loss journeys. Our forums and support groups offer a space for sharing experiences, tips, and encouragement, making the path to your goals feel less solitary.",
      features: ["Peer support", "Experience sharing", "Group challenges", "Expert guidance"]
    },
    {
      icon: Bot,
      title: "24/7 AI Assistant",
      description: "Our intelligent AI assistant is available around the clock to answer your questions, provide quick recipe suggestions, offer motivation, and help you stay on track with your weight loss goals whenever you need support.",
      features: ["24/7 availability", "Instant responses", "Motivational support", "Quick assistance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text mb-4">
            Our Offerings
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to support your weight loss journey at every step
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-text mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-primary hover:text-primary-dark font-semibold text-sm transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-text mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of others who have successfully transformed their lives with our AI-powered platform.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
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