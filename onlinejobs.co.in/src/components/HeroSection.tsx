
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-teal-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
              Welcome to <span className="text-yellow-300">OnlineJobs!</span>
            </h1>
            <p className="text-xl md:text-2xl font-roboto mb-8 leading-relaxed opacity-90">
              Your AI-powered job search portal, where connecting candidates with top employers is 
              <span className="font-semibold text-yellow-300"> smarter and faster</span> than ever. 
              Explore opportunities tailored just for you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-red-600 text-white font-montserrat font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Find Jobs Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary font-montserrat font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Post a Job
              </Button>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center" 
              alt="AI-powered job search technology"
              className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
