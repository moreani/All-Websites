
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 123, 255, 0.8), rgba(40, 167, 69, 0.8)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop&crop=center')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-lato font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Unlock Your English Potential with AI
          </h1>
          <p className="font-roboto text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Interactive learning tailored for your professional success.
          </p>
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center bg-brand-green hover:bg-green-600 text-white font-roboto font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
