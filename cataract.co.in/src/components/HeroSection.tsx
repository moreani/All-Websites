
import { ArrowRight, Eye, Brain, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <div className="flex items-center space-x-2 mb-6">
              <Eye className="text-accent" size={24} />
              <span className="text-accent font-medium">Visionary Solutions for Eye Care Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empower Your Eye Care Practice with 
              <span className="text-accent block mt-2">AI Innovation</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              CataractAI harnesses the power of artificial intelligence to provide unparalleled accuracy in cataract diagnosis and treatment planning. Transform your practice and enhance patient outcomes today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="animate-fade-in-right">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 mx-auto relative">
                <div className="w-full h-full rounded-full border-4 border-accent/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full"></div>
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center shadow-2xl">
                      <Brain size={48} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Eye size={24} className="text-white" />
                  </div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Stethoscope size={24} className="text-white" />
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/60 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-white/20">
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-gray-200">Accuracy Rate</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-accent mb-2">10,000+</div>
            <div className="text-gray-200">Patients Helped</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-gray-200">Healthcare Providers</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-gray-200">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
