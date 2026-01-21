import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 bg-gradient-to-r from-primary/90 to-accent/90 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/68500182b348395992ce5db0/resource/494020c5-3244-4399-8552-e0e99ce5898a.jpg"
          alt="Modern Tech Office"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Transform Your IT Business with Intelligent Automation
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8">
            AI-powered solutions designed specifically for India's growing IT industry. 
            Optimize projects, enhance client delivery, and scale operations with cutting-edge artificial intelligence.
          </p>
          
          <a 
            href="#services" 
            className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-neutral-light transition-colors shadow-lg"
          >
            Discover AI Solutions
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
