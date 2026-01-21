
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-blue via-primary-blue/90 to-accent-green/20">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-roboto font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
          Streamline Your Business Travel with
          <span className="block text-accent-green mt-2">AI</span>
        </h1>
        
        <p className="font-open-sans text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 animate-fade-in">
          Transform your corporate travel experience in India with intelligent automation. 
          Reduce costs, improve efficiency, and empower your employees.
        </p>
        
        <button
          onClick={scrollToContact}
          className="inline-flex items-center px-8 py-4 bg-accent-green hover:bg-accent-green/90 text-white font-open-sans font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-green/50 animate-scale-in"
        >
          Request a Demo
          <i className="fas fa-arrow-right ml-3"></i>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
