
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-background-white via-background-light to-primary/5 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-roboto mb-6">
              Welcome to{' '}
              <span className="gradient-text">NGOVision.ai</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-roboto text-gray-600 mb-8">
              Empowering Nonprofits with Intelligent Solutions
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Join the digital transformation in the nonprofit sector. Our tailored AI tools help your organization streamline operations, enhance outreach, and maximize impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-roboto font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-roboto font-medium text-lg transition-all duration-300 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="float-animation">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="AI Technology for NGOs"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold font-roboto">500+</div>
              <div className="text-sm font-medium">NGOs Empowered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
