
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-rates-bg">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold font-roboto text-rates-text mb-6">
          Welcome to <span className="text-primary">RatesAI</span>
        </h1>
        <p className="text-lg md:text-xl font-lato text-rates-text/80 mb-8 max-w-3xl mx-auto">
          Empowering You with Transparent Price Insights
        </p>
        <p className="text-base md:text-lg font-lato text-rates-text/70 mb-10 max-w-4xl mx-auto">
          In an era where informed decisions are paramount, RatesAI stands at the forefront, transforming how consumers access price information. By utilizing advanced AI analytics, we provide consumers in India with a comprehensive platform to compare service rates transparently.
        </p>
        <Button
          onClick={scrollToServices}
          className="bg-primary hover:bg-primary/90 text-white font-lato text-lg px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
