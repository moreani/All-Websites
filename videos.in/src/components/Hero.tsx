
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-white mb-6 animate-fade-in">
            Transform Your Video Creation Process with 
            <span className="text-primary"> AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-roboto text-gray-200 mb-8 animate-slide-in-right">
            Leverage the power of artificial intelligence to create stunning videos that captivate your audience.
          </p>
          
          <div className="animate-fade-in">
            <Button 
              size="lg"
              className="bg-primary hover:bg-accent text-white font-montserrat text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
