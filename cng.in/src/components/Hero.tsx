import React from 'react';
import { ArrowDown, Play, Shield, Zap, Brain } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
              </div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Leading Innovation</span>
            </div>
            
            <h1 className="font-oswald font-bold text-4xl md:text-6xl text-gray-800 leading-tight mb-6">
              Leading the <span className="gradient-text">Future</span> of Gas Station Management
            </h1>
            
            <p className="font-roboto text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your gas station operations with our cutting-edge AI-driven smart solutions. 
              Experience real-time monitoring, predictive maintenance, and enhanced safety protocols 
              that keep your business running efficiently 24/7.
            </p>

            {/* Features Highlight */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
                <Brain className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">AI Powered</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">Safety First</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg">
                <Zap className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-700">Real-time</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToAbout} className="btn-primary inline-flex items-center justify-center">
                Learn More
                <ArrowDown className="ml-2 w-5 h-5" />
              </button>
              <a href="tel:+918369848475" className="btn-secondary inline-flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Get Started
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Smart Gas Station Technology"
                className="rounded-2xl shadow-2xl w-full h-auto animate-float"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float delay-1000">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">System Online</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float delay-2000">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-gray-700">99.9% Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-gray-400 hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;