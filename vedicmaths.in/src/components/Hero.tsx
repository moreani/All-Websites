import React from 'react';
import { ArrowRight, Play, Calculator, Zap, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-light-gray via-white to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-primary font-roboto font-medium text-sm">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Learning Platform
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-6xl text-dark-gray leading-tight">
                Revolutionize Your{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Math Skills
                </span>{' '}
                with Vedic Techniques
              </h1>
              <p className="font-roboto text-lg text-text-gray leading-relaxed max-w-lg">
                Unlock your potential through our AI-driven platform that combines ancient Vedic mathematics with cutting-edge technology for accelerated learning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-roboto font-medium flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-roboto font-medium flex items-center justify-center space-x-2 hover:bg-primary hover:text-white transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl text-primary">10K+</div>
                <div className="font-roboto text-sm text-text-gray">Students</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl text-primary">98%</div>
                <div className="font-roboto text-sm text-text-gray">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl text-primary">500+</div>
                <div className="font-roboto text-sm text-text-gray">Educators</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=400&fit=crop&crop=center"
                alt="Students learning mathematics with technology"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-roboto font-medium text-sm text-dark-gray">AI Problem Solver</div>
                    <div className="font-roboto text-xs text-text-gray">Step-by-step solutions</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-roboto font-medium text-sm text-dark-gray">Personalized Learning</div>
                    <div className="font-roboto text-xs text-text-gray">Adaptive AI tutoring</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;