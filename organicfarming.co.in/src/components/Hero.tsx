import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-background to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-text leading-tight mb-6">
              Revolutionizing <span className="text-primary">Indian Agriculture</span> with AI
            </h1>
            <p className="font-roboto text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Harness the power of data-driven insights to optimize your farm, increase yields, and promote sustainable practices for a greener future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white py-4 px-8 rounded-full font-roboto font-medium hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Get a Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="border-2 border-primary text-primary py-4 px-8 rounded-full font-roboto font-medium hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center">
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" />
                <span>Sustainable Practices</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" />
                <span>Increased Yields</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="AI-powered agriculture with lush green crops and modern farming technology" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-text">2000+ Farmers</p>
                  <p className="text-sm text-gray-600">Already Using Our Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;