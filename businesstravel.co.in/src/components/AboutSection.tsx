
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-roboto font-bold text-3xl md:text-4xl lg:text-5xl text-primary-blue mb-6">
              About Business Travel AI
            </h2>
            
            <div className="space-y-4 font-open-sans text-gray-700 text-lg leading-relaxed">
              <p>
                Business Travel AI is dedicated to revolutionizing corporate travel management for businesses across India. We understand the unique challenges faced by Indian enterprises – from navigating complex visa processes to optimizing travel budgets within a rapidly growing economy.
              </p>
              
              <p>
                Our AI-powered platform is designed to address these specific needs, providing end-to-end automation solutions that save you time, reduce costs, and enhance the overall travel experience for your employees.
              </p>
              
              <p>
                Our team comprises seasoned travel industry experts and cutting-edge AI developers who are passionate about creating innovative solutions that drive tangible results. We are committed to providing personalized support and guidance to help you seamlessly integrate our platform into your existing workflows.
              </p>
              
              <p>
                Whether you're a small startup or a large multinational corporation, Business Travel AI can help you unlock the full potential of your travel program. We aim to empower Indian businesses with the tools they need to thrive in today's competitive global marketplace.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">50+</div>
                <div className="text-sm text-gray-600 font-open-sans">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-green mb-2">30%</div>
                <div className="text-sm text-gray-600 font-open-sans">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-open-sans">AI Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=7952&q=80"
                alt="AI Business Solutions in India"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-accent-green/20"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-robot text-accent-green text-xl"></i>
                </div>
                <div>
                  <div className="font-roboto font-semibold text-primary-blue">AI-Powered</div>
                  <div className="font-open-sans text-sm text-gray-600">Smart Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
