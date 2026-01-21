
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="font-lato font-bold text-5xl md:text-7xl text-primary mb-6">
          Welcome to <span className="text-accent">CurrencyWise</span>
        </h1>
        <p className="font-roboto text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Your Go-To Resource for Understanding Currency Exchange and Forex Trading
        </p>
        <p className="font-roboto text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Empowering You to Navigate Global Markets with Confidence
        </p>
        <Button 
          onClick={scrollToServices}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-roboto font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Learning
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
