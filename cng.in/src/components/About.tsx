import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="font-oswald font-bold text-3xl md:text-4xl text-gray-800 mb-6">
              Transforming Gas Station Operations with <span className="gradient-text">Smart Technology</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="AI Technology Dashboard"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <p className="font-roboto text-lg text-gray-700 mb-6 leading-relaxed">
                CNG Smart Solutions is committed to enhancing the operational efficiency and safety of gas stations 
                through cutting-edge technology. Our AI-driven systems integrate seamlessly with IoT devices, 
                enabling real-time monitoring and management.
              </p>
              
              <p className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
                We understand the complexities of gas distribution and the critical nature of safety protocols, 
                which is why our solutions place a strong emphasis on predictive maintenance and proactive monitoring.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Reduce operational downtime by up to 80%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Enhance safety protocols with AI monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Optimize maintenance schedules and costs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up delay-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="font-oswald font-bold text-2xl text-gray-800 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Stations Managed</div>
            </div>
            
            <div className="text-center animate-fade-in-up delay-400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-50 rounded-full mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="font-oswald font-bold text-2xl text-gray-800 mb-2">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime Guarantee</div>
            </div>
            
            <div className="text-center animate-fade-in-up delay-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="font-oswald font-bold text-2xl text-gray-800 mb-2">80%</div>
              <div className="text-gray-600 text-sm">Cost Reduction</div>
            </div>
            
            <div className="text-center animate-fade-in-up delay-600">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-50 rounded-full mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <div className="font-oswald font-bold text-2xl text-gray-800 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Smart Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;