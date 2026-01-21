import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-accent/60 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Experience the Future of 
              <span className="bg-gradient-to-r from-green-gradient-start to-green-gradient-end bg-clip-text text-transparent"> Transportation</span>
            </h1>
            <p className="font-roboto text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Smart, efficient, and green—join the revolution with AI-driven electric bikes that are transforming urban mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-primary group"
              >
                Explore Our Solutions
                <Play className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-secondary"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-green-200 transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;