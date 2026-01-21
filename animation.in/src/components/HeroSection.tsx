
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-backgroundLight via-white to-accent/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 mb-6 leading-tight">
              Elevate Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Animation Skills
              </span>{' '}
              with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-roboto mb-8 leading-relaxed">
              Personalized feedback and learning pathways designed for each aspiring animator
            </p>
            <p className="text-lg text-accent font-poppins font-semibold mb-8">
              "Unlock Your Creativity with Intelligent Guidance"
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-6 text-lg font-poppins font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Button>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Animation workspace with digital screens"
              className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
