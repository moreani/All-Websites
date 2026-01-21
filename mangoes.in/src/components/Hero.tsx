import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 fade-in">
            Harvesting Intelligence for Bountiful Mangoes
          </h1>
          <p className="text-xl md:text-2xl mb-8 fade-in stagger-1 leading-relaxed">
            AI-powered solutions to optimize your mango farm, increase yields, and improve profitability
          </p>
          <div className="fade-in stagger-2">
            <button
              onClick={scrollToServices}
              className="btn-primary text-white font-semibold py-4 px-8 rounded-full text-lg inline-flex items-center space-x-2 hover:scale-105 transform transition-all"
            >
              <span>Discover Our Solutions</span>
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;