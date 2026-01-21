import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop&crop=center"
          alt="Technology and AI"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-text mb-6 leading-tight">
            Unlock the Power of
            <span className="text-primary block">AI in Your Industry</span>
          </h1>
          
          <p className="font-roboto text-lg md:text-xl text-text/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience transformation with tailored solutions inspired by Japanese excellence. 
            We bring precision, innovation, and cutting-edge AI technology to revolutionize your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="group bg-primary text-white px-8 py-4 rounded-lg font-roboto font-medium text-lg hover:bg-primary/90 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group bg-white/80 backdrop-blur-sm text-primary px-8 py-4 rounded-lg font-roboto font-medium text-lg hover:bg-white transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="font-poppins font-bold text-2xl md:text-3xl text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-roboto text-text/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;