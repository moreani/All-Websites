
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToRecommendations = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat font-bold text-cinema-white mb-6 animate-fade-in">
          Discover Your Next Favorite{' '}
          <span className="text-cinema-blue">Hindi Movie</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-cinema-white/90 mb-8 font-roboto max-w-3xl mx-auto animate-fade-in">
          Personalized recommendations and insightful reviews powered by AI
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-scale-in">
          <Button 
            onClick={scrollToRecommendations}
            className="bg-cinema-blue hover:bg-blue-600 text-cinema-white px-8 py-4 text-lg font-montserrat font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline"
            className="border-2 border-cinema-white text-cinema-white hover:bg-cinema-white hover:text-gray-900 px-8 py-4 text-lg font-montserrat font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cinema-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cinema-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
