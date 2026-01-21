import React from 'react';
import { Brain, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-primary">
              Intelligent Automation, Built for India's Economic Challenges
            </h2>
            
            <div className="space-y-6 text-gray-700 font-secondary">
              <p className="text-lg leading-relaxed">
                InflationAI was founded with a singular mission: to empower Indian businesses with the transformative power of AI-driven financial automation. Our team brings together deep expertise in artificial intelligence, finance, and Indian market dynamics to develop solutions that are both innovative and practical.
              </p>
              
              <p className="text-lg leading-relaxed">
                We understand the specific challenges faced by businesses in India, from navigating complex regulations to managing fluctuating currency rates. Our AI-powered platform is designed to address these challenges head-on, providing you with the tools and insights you need to thrive in a competitive landscape.
              </p>
              
              <p className="text-lg leading-relaxed">
                We believe that AI has the power to level the playing field, enabling businesses of all sizes to compete and succeed in the global economy. We are committed to providing exceptional customer service and building long-term partnerships with our clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 font-primary">AI Innovation</h3>
                <p className="text-sm text-gray-600 font-secondary">Cutting-edge technology</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 font-primary">Local Expertise</h3>
                <p className="text-sm text-gray-600 font-secondary">India-focused solutions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 font-primary">Proven Results</h3>
                <p className="text-sm text-gray-600 font-secondary">Measurable outcomes</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="about-bg rounded-2xl h-96 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-green-800/80 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Brain size={64} className="mx-auto mb-4 animate-float" />
                  <h3 className="text-2xl font-bold mb-2 font-primary">AI-Powered Solutions</h3>
                  <p className="text-lg font-secondary">Transforming Indian businesses with intelligent automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;