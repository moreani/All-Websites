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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Revolutionizing Cabin Crew Training with
            <span className="text-accent block mt-2">AI</span>
          </h1>
          
          <p className="font-roboto text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Personalized, data-driven learning solutions to enhance safety, service, and professionalism in the Indian aviation sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-accent hover:bg-orange-600 text-white font-roboto font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>Request a Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group text-white font-roboto font-medium flex items-center space-x-2 hover:text-accent transition-colors duration-300">
              <div className="bg-white bg-opacity-20 rounded-full p-3 group-hover:bg-opacity-30 transition-all duration-300">
                <Play className="h-6 w-6 ml-1" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent bg-opacity-20 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;