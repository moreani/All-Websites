
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 animate-fade-in">
          Unlock the Future of{' '}
          <span className="text-accent">Live Entertainment</span>{' '}
          with AI
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 font-roboto leading-relaxed animate-fade-in delay-200">
          ConcertTickets.in empowers event organizers in India to maximize revenue, 
          personalize experiences, and combat fraud using cutting-edge artificial intelligence.
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 animate-fade-in delay-400"
        >
          Request a Demo
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
