
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-roboto-slab text-primary leading-tight">
                Unlock Exponential Growth with{' '}
                <span className="text-accent">AI Consulting</span>
              </h1>
              <p className="text-xl md:text-2xl font-roboto-slab text-gray-600 font-normal">
                Navigating India's AI Frontier: Strategic Consulting for Exponential Growth
              </p>
            </div>
            
            <p className="text-lg font-open-sans text-gray-700 leading-relaxed">
              CGI empowers Indian enterprises to harness the transformative power of Artificial Intelligence. 
              In today's rapidly evolving business landscape, AI is no longer a futuristic concept, but a 
              critical imperative for sustained growth. We partner with ambitious Indian enterprises to 
              navigate the complexities of AI adoption, providing strategic consulting that drives tangible results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-open-sans font-semibold text-lg px-8 py-3"
              >
                Schedule a Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary hover:text-white font-open-sans font-semibold text-lg px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600&q=80"
              alt="Modern AI technology and business innovation in India"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
