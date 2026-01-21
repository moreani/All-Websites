
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-light to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
            Discover the World of <span className="text-primary">Poetry</span>
          </h1>
          <p className="font-roboto text-xl md:text-2xl text-accent mb-8 max-w-2xl mx-auto">
            Delve deeper into artistic expressions and unlock the power of language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToServices}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-roboto text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
            <p className="font-roboto text-sm text-accent italic">
              "Experience Poetry Like Never Before."
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
