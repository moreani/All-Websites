
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-cricket-primary/10 via-cricket-white to-cricket-accent/10 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cricket-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-cricket-accent rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-cricket-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border border-cricket-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-heading font-bold text-cricket-text mb-6 leading-tight">
            Welcome to{' '}
            <span className="text-cricket-primary">CricketScore AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-body font-light text-cricket-text/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming Cricket Analytics with{' '}
            <span className="text-cricket-accent font-semibold">Artificial Intelligence</span>
          </p>
          
          <p className="text-lg font-body text-cricket-text/70 mb-12 max-w-2xl mx-auto">
            Data-Driven Insights for the Modern Cricket Fan
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-cricket-primary hover:bg-cricket-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={scrollToAbout}
            >
              Get Started
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-cricket-primary text-cricket-primary hover:bg-cricket-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cricket-primary/60" />
      </div>
    </section>
  );
};

export default HeroSection;
